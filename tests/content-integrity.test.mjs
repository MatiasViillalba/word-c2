/**
 * Content integrity.
 *
 * A broken exercise is worse than a missing one: it teaches the wrong answer.
 * These checks run over the entire bank and are the gate for adding material.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { loadApp } from './harness.mjs';

const WC2 = loadApp();
const { passages, drills } = WC2.content;

test('the bank is fully loaded', () => {
  assert.ok(passages.length >= 65, `expected 65+ passages, got ${passages.length}`);
  assert.ok(drills.length >= 950, `expected 950+ drills, got ${drills.length}`);
});

test('every passage has exactly eight gaps', () => {
  passages.forEach((p) => {
    assert.equal(p.gaps.length, 8, `${p.id} (${p.title}) has ${p.gaps.length} gaps`);
  });
});

test('gap markers in the text match the declared answer key', () => {
  passages.forEach((p) => {
    const markers = [...p.text.matchAll(/\{(\d+)\}/g)].map((m) => Number(m[1]));
    assert.deepEqual(
      markers,
      p.gaps.map((g) => g.n),
      `${p.id}: markers in the prose do not line up with gaps[]`
    );
    markers.forEach((m, i) => {
      assert.equal(m, i + 1, `${p.id}: marker ${m} is out of sequence`);
    });
  });
});

test('every drill has exactly one gap marker', () => {
  drills.forEach((d) => {
    const markers = [...d.s.matchAll(/\{1\}/g)];
    assert.equal(markers.length, 1, `${d.id} has ${markers.length} markers`);
  });
});

test('identifiers are unique', () => {
  const seen = new Set();
  [...passages, ...drills].forEach((item) => {
    assert.ok(!seen.has(item.id), `duplicate id: ${item.id}`);
    seen.add(item.id);
  });
});

/**
 * A real Part 3 supplies eight *different* stems. Reusing one inside a single
 * text would let a candidate answer the second gap by copying the first.
 */
test('no passage asks for the same derivation twice', () => {
  passages.forEach((p) => {
    const keys = p.gaps.map((g) => g.k);
    assert.equal(new Set(keys).size, keys.length, `${p.id}: a derivation is repeated inside the text`);
  });
});

/**
 * `brief` is what the library screen shows before the learner commits to a
 * text, so a stale one misdescribes the exercise. It is written by hand and
 * therefore drifts; this pins it to the gaps it claims to summarise.
 */
test('each passage brief lists exactly the derivations it contains', () => {
  /* Collected rather than asserted one by one: a single deepEqual would stop at
     the first offender and hide the rest, which turns one fix into ten runs. */
  const wrong = passages
    .filter((p) => p.brief.split('·').map((s) => s.trim()).join('|')
                !== p.gaps.map((g) => g.root + '→' + g.a).join('|'))
    .map((p) => p.id);
  assert.deepEqual(wrong, [], `briefs out of step with gaps[]: ${wrong.join(', ')}`);
});

test('every item declares a stem, a pattern and an explanation', () => {
  passages.forEach((p) => {
    p.gaps.forEach((g) => {
      assert.ok(g.root, `${p.id}#${g.n}: missing stem`);
      assert.ok(g.k, `${p.id}#${g.n}: missing skill key`);
      assert.ok(g.p, `${p.id}#${g.n}: missing pattern label`);
      assert.ok(g.tip && g.tip.length > 20, `${p.id}#${g.n}: explanation too short`);
      assert.equal(g.a, g.a.toUpperCase(), `${p.id}#${g.n}: answer must be upper case`);
      assert.equal(g.root, g.root.toUpperCase(), `${p.id}#${g.n}: stem must be upper case`);
    });
  });
  drills.forEach((d) => {
    assert.ok(d.root && d.k && d.p && d.tip && d.src, `${d.id}: missing metadata`);
    assert.ok(d.tip.length > 20, `${d.id}: explanation too short`);
  });
});

test('answers are single words, as the exam requires', () => {
  const check = (answer, where) => {
    assert.ok(!/\s/.test(answer), `${where}: "${answer}" is more than one word`);
  };
  passages.forEach((p) => p.gaps.forEach((g) => check(g.a, `${p.id}#${g.n}`)));
  drills.forEach((d) => check(d.a, d.id));
});

/**
 * The whole exercise type collapses if the answer is the stem unchanged. The
 * one legitimate exception is an inflection-only answer (the plural of the
 * given noun), which declares itself.
 */
test('the answer is never identical to the stem it is built from', () => {
  const check = (item, where) => {
    assert.notEqual(item.a, item.root, `${where}: answer repeats the stem verbatim`);
  };
  passages.forEach((p) => p.gaps.forEach((g) => check(g, `${p.id}#${g.n}`)));
  drills.forEach((d) => check(d, d.id));
});

test('no derivation is registered without an exercise behind it', () => {
  const orphans = WC2.content.allKeys().filter((k) => {
    const s = WC2.content.skills[k];
    return s.passages.length === 0 && s.drills.length === 0;
  });
  assert.deepEqual(orphans, [], `orphan derivations: ${orphans.join(', ')}`);
});

test('accepted alternatives never duplicate the canonical answer', () => {
  const check = (item, where) => {
    (item.alt || []).forEach((a) => {
      assert.notEqual(
        WC2.util.norm(a),
        WC2.util.norm(item.a),
        `${where}: alternative "${a}" repeats the answer`
      );
    });
  };
  passages.forEach((p) => p.gaps.forEach((g) => check(g, `${p.id}#${g.n}`)));
  drills.forEach((d) => check(d, d.id));
});

test('the canonical answer always grades as correct', () => {
  passages.forEach((p) => {
    p.gaps.forEach((g) => {
      assert.ok(WC2.util.matches(g.a, g), `${p.id}#${g.n}: own answer rejected`);
      assert.ok(WC2.util.matches(g.a.toLowerCase(), g), `${p.id}#${g.n}: lower case rejected`);
      assert.ok(WC2.util.matches('  ' + g.a + ' ', g), `${p.id}#${g.n}: padded answer rejected`);
    });
  });
  drills.forEach((d) => {
    assert.ok(WC2.util.matches(d.a, d), `${d.id}: own answer rejected`);
  });
});

/** Every exam gap must be recoverable as a standalone practice sentence. */
test('most exam gaps yield a usable practice sentence', () => {
  let usable = 0, total = 0;
  passages.forEach((p) => {
    p.gaps.forEach((g) => {
      total += 1;
      if (WC2.content.contextsFor(g.a).some((c) => c.fromPassage === p.id)) usable += 1;
    });
  });
  assert.ok(usable / total > 0.9, `only ${usable}/${total} exam gaps produced a practice sentence`);
});
