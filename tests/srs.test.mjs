/**
 * The scheduler, held to its promises.
 *
 * These are the behaviours the whole app rests on: a correct answer promotes
 * one box, a miss demotes two, mastery is box 4, and readiness is a composite
 * that moves from the first session without reaching 90 until the bank is
 * genuinely covered.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { loadApp } from './harness.mjs';

const WC2 = loadApp();
WC2.store.load();

const DAY = 86400000;
let n = 0;
const freshKey = () => 'test-key-' + (n += 1);

test('a new derivation starts unseen in box 0', () => {
  const rec = WC2.srs.record(freshKey());
  assert.equal(rec.box, 0);
  assert.equal(rec.seen, 0);
});

test('a correct answer promotes exactly one box', () => {
  const k = freshKey();
  WC2.srs.grade(k, true);
  assert.equal(WC2.srs.record(k).box, 1);
  WC2.srs.grade(k, true);
  assert.equal(WC2.srs.record(k).box, 2);
});

test('a miss demotes two boxes, not one', () => {
  const k = freshKey();
  for (let i = 0; i < 4; i++) WC2.srs.grade(k, true);
  assert.equal(WC2.srs.record(k).box, 4);
  WC2.srs.grade(k, false);
  assert.equal(WC2.srs.record(k).box, 2, 'a miss should cost two boxes');
});

test('demotion clamps at box 0 rather than going negative', () => {
  const k = freshKey();
  WC2.srs.grade(k, false);
  WC2.srs.grade(k, false);
  assert.equal(WC2.srs.record(k).box, 0);
});

test('promotion clamps at the top box', () => {
  const k = freshKey();
  for (let i = 0; i < 10; i++) WC2.srs.grade(k, true);
  assert.equal(WC2.srs.record(k).box, WC2.srs.MAX_BOX);
});

test('the due date matches the interval for the box just reached', () => {
  const k = freshKey();
  const before = Date.now();
  WC2.srs.grade(k, true);              /* -> box 1, interval 1 day */
  const rec = WC2.srs.record(k);
  const expected = before + WC2.srs.INTERVALS[1] * DAY;
  assert.ok(Math.abs(rec.due - expected) < 2000, 'due date should be one day out');
});

test('an unseen derivation counts as due', () => {
  assert.ok(WC2.srs.isDue(undefined));
  assert.ok(WC2.srs.isDue({ seen: 0, due: Date.now() + DAY }));
});

test('urgency ranks overdue misses ahead of unseen material', () => {
  const missed = freshKey();
  WC2.srs.grade(missed, false);
  WC2.store.get('skills')[missed].due = Date.now() - 3 * DAY;

  const unseen = freshKey();
  assert.ok(WC2.srs.urgency(missed) < WC2.srs.urgency(unseen),
    'an overdue miss must sort before something never attempted');
});

test('urgency ranks unseen material ahead of what already works', () => {
  const solid = freshKey();
  for (let i = 0; i < 3; i++) WC2.srs.grade(solid, true);
  const unseen = freshKey();
  assert.ok(WC2.srs.urgency(unseen) < WC2.srs.urgency(solid));
});

test('weak keys exclude anything already mastered', () => {
  const k = freshKey();
  WC2.srs.grade(k, false);
  assert.ok(WC2.srs.weakKeys([k]).includes(k));
  for (let i = 0; i < 5; i++) WC2.srs.grade(k, true);
  assert.ok(!WC2.srs.weakKeys([k]).includes(k), 'box 4+ is no longer weak');
});

test('trouble keys ignore derivations that have never been attempted', () => {
  const k = freshKey();
  assert.deepEqual(WC2.srs.troubleKeys([k]), []);
});

test('readiness is zero on an untouched bank and never negative', () => {
  const ov = WC2.srs.overview(['untouched-a', 'untouched-b']);
  assert.equal(ov.readiness, 0);
  assert.equal(ov.seen, 0);
  assert.equal(ov.boxes[0], 2);
});

test('readiness moves on the very first correct answer', () => {
  const k = freshKey();
  const before = WC2.srs.overview([k]).readiness;
  WC2.srs.grade(k, true);
  assert.ok(WC2.srs.overview([k]).readiness > before,
    'the ring has to move early or it never motivates anybody');
});

test('full mastery of a bank reaches Grade A', () => {
  const keys = [freshKey(), freshKey(), freshKey()];
  keys.forEach((k) => { for (let i = 0; i < 5; i++) WC2.srs.grade(k, true); });
  const ov = WC2.srs.overview(keys);
  assert.ok(ov.readiness >= 90, `expected Grade A, got ${ov.readiness}`);
  assert.equal(ov.grade.g, 'A');
});

test('the band thresholds match the Cambridge cut-offs', () => {
  assert.equal(WC2.srs.band(8, 8).g, 'A');
  assert.equal(WC2.srs.band(7, 8).g, 'B');     /* 87.5% */
  assert.equal(WC2.srs.band(6, 8).g, 'C');     /* 75%   */
  assert.equal(WC2.srs.band(4, 8).g, 'C1');    /* 50%   */
  assert.equal(WC2.srs.band(3, 8).g, '—');     /* 37.5% */
});

test('a zero-length exercise does not divide by zero', () => {
  const b = WC2.srs.band(0, 0);
  assert.equal(b.g, '—');
});
