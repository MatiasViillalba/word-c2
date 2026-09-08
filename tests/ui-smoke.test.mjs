/**
 * End-to-end interface walkthrough.
 *
 * Boots the real index.html in jsdom, with the real scripts in the real order,
 * visits every screen, sits a full exam answering half of it correctly, and
 * asserts that the scheduler reacted. It is the only test that would catch a
 * broken script tag, a missing element id or a screen that throws on render.
 *
 * Skips cleanly when jsdom is absent so the unit suite still runs on a bare
 * checkout.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './harness.mjs';

let JSDOM;
try {
  ({ JSDOM } = await import('jsdom'));
} catch {
  test('interface smoke test', { skip: 'jsdom is not installed (npm install)' }, () => {});
}

if (JSDOM) {
  /** Boots the app exactly as a browser would and returns its namespace. */
  const boot = () => {
    const html = readFileSync(join(ROOT, 'index.html'), 'utf8');
    const dom = new JSDOM(html, {
      url: 'http://localhost/',
      runScripts: 'outside-only',
      pretendToBeVisual: true
    });
    const { window } = dom;

    /* jsdom has no layout, so these are no-ops the app calls freely. */
    window.scrollTo = () => {};
    window.requestAnimationFrame = (fn) => setTimeout(() => fn(0), 0);
    window.HTMLElement.prototype.scrollIntoView = () => {};

    const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);
    assert.ok(scripts.length > 40, `expected the full script graph, found ${scripts.length}`);

    scripts.forEach((src) => {
      window.eval(readFileSync(join(ROOT, src), 'utf8') + '\n//# sourceURL=' + src);
    });

    return { window, WC2: window.WC2 };
  };

  const { window, WC2 } = boot();
  const $ = (sel) => window.document.querySelector(sel);
  const active = () => $('.screen.is-active');

  test('the app boots and lands on the home screen', () => {
    assert.ok(WC2, 'the WC2 namespace was never created');
    assert.equal(active().dataset.screen, 'home');
    assert.ok(active().textContent.includes('Grade A'));
  });

  test('the content bank loaded inside the browser environment', () => {
    const stats = WC2.content.stats();
    assert.ok(stats.passages >= 65, `only ${stats.passages} passages reached the browser`);
    assert.ok(stats.drills >= 950, `only ${stats.drills} drills reached the browser`);
  });

  test('every registered screen renders without throwing', () => {
    ['library', 'affixes', 'stats', 'settings', 'mistakes', 'weak', 'home'].forEach((name) => {
      WC2.app.go(name);
      assert.equal(active().dataset.screen, name, `${name} did not become active`);
      assert.ok(active().childNodes.length > 0, `${name} rendered nothing`);
    });
  });

  test('the exam screen renders a gap and its stem for all eight items', () => {
    WC2.app.startExam(WC2.content.passages[0]);
    assert.equal(active().dataset.screen, 'exam');

    const inputs = active().querySelectorAll('.gap__input');
    const stems = active().querySelectorAll('.gap__root');
    assert.equal(inputs.length, 8);
    assert.equal(stems.length, 8, 'every gap must carry the stem it is built from');
    assert.equal(stems[0].textContent, WC2.content.passages[0].gaps[0].root);
  });

  test('sitting an exam grades it and moves the scheduler', () => {
    const passage = WC2.content.passages[1];
    WC2.app.startExam(passage);

    const inputs = active().querySelectorAll('.gap__input');
    passage.gaps.forEach((gap, i) => {
      /* Half right, half deliberately wrong. */
      inputs[i].value = i % 2 === 0 ? gap.a : 'WRONGWORD';
      inputs[i].dispatchEvent(new window.Event('input', { bubbles: true }));
    });

    const submit = [...active().querySelectorAll('button')].find((b) => b.textContent === 'Corregir');
    assert.ok(submit, 'the Corregir button is missing');
    submit.click();

    const skills = WC2.store.get('skills');
    const right = skills[passage.gaps[0].k];
    const wrong = skills[passage.gaps[1].k];
    assert.ok(right && right.right >= 1, 'a correct answer was not recorded');
    assert.ok(wrong && wrong.wrong >= 1, 'a wrong answer was not recorded');
    assert.equal(right.box, 1, 'a correct answer should promote one box');
    assert.equal(wrong.box, 0, 'a wrong answer should sit at box 0');
  });

  test('a missed word enters the mistake book and can be practised', () => {
    const pending = WC2.words.pending();
    assert.ok(pending.length > 0, 'nothing reached the mistake book');

    WC2.app.go('mistakes');
    assert.ok(active().textContent.includes(pending[0].w), 'the missed word is not listed');

    const contexts = WC2.content.contextsFor(pending[0].w);
    assert.ok(contexts.length > 0, 'a missed word has no practice sentence');
  });

  test('the result screen reports a band', () => {
    WC2.app.showResult();
    assert.equal(active().dataset.screen, 'result');
    assert.ok(active().querySelector('.result-grade'), 'no band was rendered');
  });

  test('a drill session renders the stem banner and grades a card', () => {
    WC2.app.startDrill({ n: 5 });
    assert.equal(active().dataset.screen, 'drill');

    const banner = active().querySelector('.drill-stem__w');
    assert.ok(banner && banner.textContent.length > 0, 'the drill did not show a stem');

    const input = active().querySelector('.gap__input');
    input.value = 'DEFINITELYWRONG';
    const check = [...active().querySelectorAll('button')].find((b) => b.textContent === 'Comprobar');
    check.click();
    assert.ok(active().querySelector('.explain.is-wrong'), 'no correction was shown');
    assert.ok(active().querySelector('.derive'), 'the derivation line is missing');
  });

  test('the affix explorer lists families with live coverage', () => {
    WC2.app.go('affixes');
    const rows = active().querySelectorAll('.affix');
    assert.ok(rows.length > 20, `only ${rows.length} affix families rendered`);
    assert.ok(active().querySelector('.affix__bar'), 'no coverage bar rendered');
  });

  test('settings offers sync and its sheet opens with both doors', () => {
    WC2.app.go('settings');
    const activate = [...active().querySelectorAll('.set-row')]
      .find((row) => row.textContent.includes('Sincronizar mis dispositivos'));
    assert.ok(activate, 'the sync row is missing from Ajustes');

    activate.click();
    const sheet = $('#sheet');
    assert.equal(sheet.hidden, false, 'the sync sheet did not open');
    assert.ok(sheet.querySelector('.sync-input'), 'there is nowhere to paste a code');

    const buttons = [...sheet.querySelectorAll('button')].map((b) => b.textContent);
    assert.ok(buttons.includes('Crear un código nuevo'));
    assert.ok(buttons.includes('Vincular este dispositivo'));
    WC2.sheet.close();
  });

  test('the reading scale reaches the document element', () => {
    WC2.util.applyTextScale(1.3);
    assert.equal(window.document.documentElement.style.getPropertyValue('--read-scale'), '1.3');
    WC2.util.applyTextScale(1);
  });
}
