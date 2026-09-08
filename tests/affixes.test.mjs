/**
 * The morphology engine.
 *
 * The detector is a heuristic and is allowed to be, but it has to be right
 * about the cases the exam actually turns on: assimilated prefixes, stacked
 * affixes, inflected derivations, and the false negatives where an initial IN-
 * is locative rather than negative.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { loadApp } from './harness.mjs';

const WC2 = loadApp();
const A = WC2.affixes;

const idsOf = (root, answer, declared) => A.analyse(root, answer, declared).ids;
const groupOf = (root, answer, declared) => A.analyse(root, answer, declared).group.id;

test('a simple prefix and suffix are both detected', () => {
  assert.deepEqual(idsOf('AVOID', 'UNAVOIDABLE'), ['un-', '-able']);
});

test('assimilated negatives are told apart', () => {
  assert.equal(idsOf('PROBABLE', 'IMPROBABLE')[0], 'im-');
  assert.equal(idsOf('RATIONAL', 'IRRATIONAL')[0], 'ir-');
  assert.equal(idsOf('LEGIBLE', 'ILLEGIBLE')[0], 'il-');
  assert.equal(idsOf('ACCESS', 'INACCESSIBLE')[0], 'in-');
});

test('a prefix already present in the stem is not counted again', () => {
  /* INHABIT starts with IN-, but INHABITABLE adds no prefix at all. */
  assert.ok(!idsOf('INHABIT', 'INHABITABLE').includes('in-'));
  assert.ok(idsOf('INHABIT', 'INHABITABLE').includes('-able'));
});

test('the longest matching suffix wins', () => {
  assert.ok(idsOf('ADAPT', 'ADAPTATION').includes('-ation'), '-ATION must beat -TION');
  assert.ok(idsOf('FEASIBLE', 'FEASIBILITY').includes('-ibility'), '-IBILITY must beat -ITY');
  assert.ok(idsOf('REALISTIC', 'REALISTICALLY').includes('-ically'), '-ICALLY must beat -LY');
});

test('an inflected derivation is reduced before the suffix is matched', () => {
  assert.ok(idsOf('ADJUST', 'ADJUSTMENTS').includes('-ment'), 'plural -S must not hide -MENT');
  /* VULNERABLE ends in -ABLE, so the noun is -ABILITY. The point of the check
     is that the -IES plural is reduced at all: without it the word ends in
     "ities" and no suffix in the catalogue matches. */
  assert.ok(idsOf('VULNERABLE', 'VULNERABILITIES').includes('-ability'),
    '-IES must reduce to -Y so the -ABILITY underneath is visible');
  assert.ok(idsOf('MUNICIPAL', 'MUNICIPALITIES').includes('-ity'));
});

test('stem changes with no affix are reported as an irregular root', () => {
  assert.deepEqual(idsOf('DEEP', 'DEPTH'), ['-th'], 'DEPTH keeps a real suffix');
  assert.deepEqual(idsOf('CONCEIVE', 'CONCEPT'), ['internal']);
  assert.deepEqual(idsOf('REASON', 'RATIONALE'), ['internal']);
});

test('compounds are recognised when the whole stem survives', () => {
  assert.deepEqual(idsOf('PLAY', 'PLAYWRIGHT'), ['compound']);
  assert.deepEqual(idsOf('WILD', 'WILDLIFE'), ['compound']);
});

test('a declared affix overrides the heuristic', () => {
  /* SIGHT to INSIGHTS would otherwise read as a negative prefix. */
  assert.equal(groupOf('SIGHT', 'INSIGHTS'), 'neg', 'the heuristic gets this wrong');
  assert.deepEqual(idsOf('SIGHT', 'INSIGHTS', 'compound'), ['compound'],
    'and the data file is allowed to say so');
});

test('a bare A- prefix is never applied automatically', () => {
  /* Matching a single "a" would swallow half the bank. */
  assert.ok(!idsOf('PORTION', 'APPORTIONED').includes('a-'));
  assert.deepEqual(idsOf('PACE', 'APACE', 'a-'), ['a-'], 'but it can be declared');
});

test('prefixes outrank suffixes when a derivation carries both', () => {
  assert.equal(groupOf('AVOID', 'UNAVOIDABLE'), 'neg',
    'in UNAVOIDABLE the part that gets missed is the UN-');
  assert.equal(groupOf('ESTIMATE', 'UNDERESTIMATED'), 'pre');
});

test('every catalogue entry is complete and uniquely identified', () => {
  const seen = new Set();
  A.all().forEach((a) => {
    assert.ok(a.id && a.tag && a.label && a.note, `incomplete affix entry: ${a.id}`);
    assert.ok(!seen.has(a.id), `duplicate affix id: ${a.id}`);
    seen.add(a.id);
  });
});

test('every affix the bank uses resolves back to a catalogue entry', () => {
  Object.keys(WC2.content.affixIndex).forEach((id) => {
    assert.ok(A.get(id), `content references an unknown affix: ${id}`);
  });
});

test('every affix family in use belongs to a declared group', () => {
  const groups = new Set(A.GROUPS.map((g) => g.id));
  A.all().forEach((a) => {
    assert.ok(groups.has(a.g), `affix ${a.id} has no valid group: ${a.g}`);
  });
});

test('the bank exercises every one of the eight families', () => {
  const used = new Set(WC2.content.allKeys().map((k) => WC2.content.groupOf(k).id));
  A.GROUPS.forEach((g) => {
    assert.ok(used.has(g.id), `no derivation in the bank belongs to the ${g.id} family`);
  });
});
