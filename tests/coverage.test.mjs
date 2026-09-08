/**
 * The coverage contract.
 *
 * The learner brought a list of 598 derivations to this project and asked that
 * none of them be missing. That promise is only worth anything if a machine
 * checks it, so this reads docs/word-list.md and fails the build if a single
 * pair has no exercise behind it.
 *
 * It also guards the far side: enough material to practise each one in more
 * than one sentence, and enough breadth beyond the list to cover the words the
 * list does not happen to contain.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { loadApp, requiredPairs } from './harness.mjs';

const WC2 = loadApp();
const { passages, drills } = WC2.content;

const have = new Set();
const addPair = (root, a) => have.add(String(root).toUpperCase() + '>' + String(a).toUpperCase());
drills.forEach((d) => addPair(d.root, d.a));
passages.forEach((p) => p.gaps.forEach((g) => addPair(g.root, g.a)));

const required = requiredPairs();

test('the learner list parses to the expected size', () => {
  assert.ok(required.length >= 598, `expected 598+ pairs in docs/word-list.md, got ${required.length}`);
});

test('every derivation on the learner list has an exercise', () => {
  const missing = required.filter((p) => !have.has(p.key)).map((p) => p.root + '>' + p.answer);
  assert.deepEqual(missing, [], `${missing.length} uncovered: ${missing.slice(0, 20).join(', ')}`);
});

test('the bank goes well beyond the list', () => {
  const total = WC2.content.allKeys().length;
  assert.ok(total >= required.length * 1.5,
    `expected half again as many derivations as the list, got ${total} against ${required.length}`);
});

test('every answer word can be practised in at least one context', () => {
  const orphans = WC2.content.allKeys()
    .map(WC2.content.skillMeta)
    .filter((m) => WC2.content.contextsFor(m.a).length === 0)
    .map((m) => m.a);
  assert.deepEqual(orphans, [], `answers with no practice sentence: ${orphans.slice(0, 10).join(', ')}`);
});

test('most answers appear in more than one sentence', () => {
  const metas = WC2.content.allKeys().map(WC2.content.skillMeta);
  const multi = metas.filter((m) => WC2.content.contextsFor(m.a).length > 1).length;
  assert.ok(multi / metas.length > 0.25,
    `only ${multi}/${metas.length} answers have a second context; mistake practice would repeat itself`);
});

test('the bank is large enough to sustain daily study', () => {
  const stats = WC2.content.stats();
  assert.ok(stats.gaps >= 1400, `expected 1400+ exercises, got ${stats.gaps}`);
  assert.ok(stats.roots >= 700, `expected 700+ distinct stems, got ${stats.roots}`);
  assert.ok(stats.affixes >= 60, `expected 60+ affix families in use, got ${stats.affixes}`);
});

test('a weak-spot session can always be filled from the bank', () => {
  /* Ten arbitrary derivations must yield a usable queue, or the Puntos débiles
     button would sometimes open an empty screen. */
  const keys = WC2.content.allKeys().slice(0, 10);
  const queue = WC2.content.practiceQueueForKeys(keys, { perKey: 3, max: 30 });
  assert.ok(queue.length >= 10, `weak practice produced only ${queue.length} items`);
});

test('no practice queue ever repeats the same sentence', () => {
  const words = WC2.words.key ? ['UNAVOIDABLE', 'ACCESSIBLE', 'PRODUCTIVITY'] : [];
  const queue = WC2.content.practiceQueue(words, { perWord: 4, max: 20 });
  const ids = queue.map((q) => q.id);
  assert.equal(new Set(ids).size, ids.length, 'a sentence was offered twice in one session');
});
