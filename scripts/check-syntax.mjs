/**
 * Parses every shipped JavaScript file.
 *
 * The app has no build step, so a syntax error would only surface on the
 * device. This walks the exact list the service worker precaches, and fails if
 * the two ever drift apart.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');

const dataFiles = readdirSync(join(ROOT, 'assets/js/data'))
  .filter((f) => f.endsWith('.js'))
  .sort();

const files = [
  'sw.js',
  'assets/js/version.js',
  'assets/js/app.js',
  ...['util', 'store', 'srs', 'words', 'affixes', 'content'].map((n) => `assets/js/core/${n}.js`),
  ...['toast', 'home', 'exam', 'drill', 'result', 'mistakes', 'weak', 'library', 'affixes', 'stats', 'settings']
    .map((n) => `assets/js/ui/${n}.js`),
  ...dataFiles.map((f) => `assets/js/data/${f}`)
];

let failed = 0;
for (const rel of files) {
  const code = readFileSync(join(ROOT, rel), 'utf8');
  try {
    new Function(code);
  } catch (err) {
    console.error(`✖ ${rel}: ${err.message}`);
    failed += 1;
  }
}

/* A data file that exists but is not precached would work in the browser and
   vanish offline, which is the worst possible failure mode for this app. */
const sw = readFileSync(join(ROOT, 'sw.js'), 'utf8');
const uncached = files.filter((f) => f !== 'sw.js' && !sw.includes(`'./${f}'`));
if (uncached.length) {
  console.error(`✖ not listed in the service worker precache: ${uncached.join(', ')}`);
  failed += uncached.length;
}

console.log(failed ? `${failed} problem(s) found` : `✔ ${files.length} files parsed cleanly and all are precached`);
process.exit(failed ? 1 : 0);
