/**
 * Test harness.
 *
 * The app ships as classic browser scripts so that it can boot from cache with
 * no module resolution and no network. To exercise those exact files under
 * Node, each one is evaluated as a function body with a stand-in `window`.
 *
 * Deliberately not `node:vm`: a separate realm gives every array and object a
 * different prototype, which makes `assert.deepEqual` fail on values that are
 * structurally identical.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
export const ROOT = join(here, '..');

const CORE = [
  'assets/js/version.js',
  'assets/js/core/util.js',
  'assets/js/core/store.js',
  'assets/js/core/srs.js',
  'assets/js/core/words.js',
  'assets/js/core/affixes.js',
  'assets/js/core/content.js'
];

/** Boots the core plus the whole content bank and returns the WC2 namespace. */
export function loadApp() {
  const win = {};
  const navigatorStub = { vibrate: null };

  const run = (rel) => {
    const code = readFileSync(join(ROOT, rel), 'utf8');
    /* eslint-disable-next-line no-new-func */
    const fn = new Function('window', 'navigator', 'self', 'WC2', code + '\n//# sourceURL=' + rel);
    /* Data files reference the bare global `WC2`, which a browser resolves
       through `window`; under Node it has to be passed in explicitly. */
    fn(win, navigatorStub, win, win.WC2);
  };

  CORE.forEach(run);
  dataFiles().forEach((f) => run('assets/js/data/' + f.name));

  return win.WC2;
}

/** Every data file, for checks that need the raw source. */
export function dataFiles() {
  const dir = join(ROOT, 'assets/js/data');
  return readdirSync(dir)
    .filter((f) => f.endsWith('.js'))
    .sort()
    .map((f) => ({ name: f, source: readFileSync(join(dir, f), 'utf8') }));
}

/**
 * The learner's own list, parsed out of docs/word-list.md.
 * Every `ROOT -> ANSWER` line inside a fenced block is a derivation the bank is
 * contractually obliged to cover.
 */
export function requiredPairs() {
  const md = readFileSync(join(ROOT, 'docs/word-list.md'), 'utf8');
  const pairs = [];
  const seen = new Set();
  md.replace(/^([A-Z]+) -> ([A-Z]+)$/gm, (_, root, answer) => {
    const key = root + '>' + answer;
    if (!seen.has(key)) { seen.add(key); pairs.push({ root, answer, key }); }
    return _;
  });
  return pairs;
}
