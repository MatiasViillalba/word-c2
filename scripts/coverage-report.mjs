/**
 * Coverage report.
 *
 * Prints what the bank actually holds and, crucially, which derivations from
 * the learner's own list are still missing. It is the tool the content was
 * written against: write a batch, run this, see the gap shrink.
 *
 * `npm run report`
 */
import { loadApp, requiredPairs } from '../tests/harness.mjs';

const WC2 = loadApp();
const { passages, drills } = WC2.content;
const stats = WC2.content.stats();

const have = new Set();
const addPair = (root, a) => have.add(String(root).toUpperCase() + '>' + String(a).toUpperCase());
drills.forEach((d) => addPair(d.root, d.a));
passages.forEach((p) => p.gaps.forEach((g) => addPair(g.root, g.a)));

const required = requiredPairs();
const missing = required.filter((p) => !have.has(p.key));

const pad = (s, n) => String(s).padEnd(n);
console.log('');
console.log('  Word C2 — content report');
console.log('  ' + '-'.repeat(52));
console.log('  ' + pad('passages', 22) + stats.passages);
console.log('  ' + pad('exam gaps', 22) + passages.reduce((n, p) => n + p.gaps.length, 0));
console.log('  ' + pad('drills', 22) + stats.drills);
console.log('  ' + pad('total exercises', 22) + stats.gaps);
console.log('  ' + pad('distinct derivations', 22) + stats.skills);
console.log('  ' + pad('distinct stems', 22) + stats.roots);
console.log('  ' + pad('affixes in use', 22) + stats.affixes);
console.log('');
console.log('  Learner list: ' + (required.length - missing.length) + ' / ' + required.length + ' covered');

if (missing.length) {
  console.log('');
  console.log('  MISSING (' + missing.length + '):');
  const cols = 3;
  for (let i = 0; i < missing.length; i += cols) {
    console.log('    ' + missing.slice(i, i + cols).map((m) => pad(m.root + '>' + m.answer, 34)).join(''));
  }
  console.log('');
  process.exitCode = 1;
} else {
  console.log('  Every derivation on the list is covered.');
  console.log('');
}

/* --- Affix families, richest first ---------------------------------------- */
const cat = WC2.content.affixCatalogue();
console.log('  Affix families in the bank: ' + cat.length);
console.log('  ' + cat.slice(0, 18).map((c) => c.affix.tag + '(' + c.stats.total + ')').join('  '));
console.log('');
