/**
 * Application shell: routing, session orchestration and boot.
 *
 * There is no framework here on purpose. The whole app has to survive being
 * opened from a home-screen icon in aeroplane mode, so every byte is either
 * precached by the service worker or not needed at all.
 */
(function (WC2) {
  'use strict';
  const { $, $$, el } = WC2.util;

  const IMMERSIVE = { exam: true, drill: true, result: true };
  const TABS = { home: 'home', library: 'library', stats: 'stats', settings: 'settings' };

  let current = null;
  const stack = [];

  /* ------------------------------------------------------------- Routing --- */

  function setChrome(name) {
    const app = $('#app');
    const screen = WC2.ui[name];

    app.setAttribute('data-immersive', IMMERSIVE[name] ? '1' : '0');
    app.setAttribute('data-can-back', stack.length ? '1' : '0');

    const title = $('#topbarTitle');
    if (name === 'home') title.innerHTML = 'Word<span>C2</span>';
    else title.textContent = (screen && screen.title) || '';

    $$('.tab[data-go]').forEach((tab) => {
      tab.classList.toggle('is-active', TABS[tab.dataset.go] === name);
    });
  }

  function go(name, params, opts) {
    const screen = WC2.ui[name];
    if (!screen) return;

    if (current && !(opts && opts.replace) && current !== name) stack.push({ name: current });
    if (name === 'home') stack.length = 0;

    $$('.screen').forEach((s) => s.classList.remove('is-active'));
    const host = $('#screen-' + name);
    host.classList.add('is-active');

    current = name;
    setChrome(name);
    refreshStreakPill();
    screen.render(host, params || {});
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  function back() {
    const prev = stack.pop();
    go(prev ? prev.name : 'home', null, { replace: true });
  }

  /* ------------------------------------------------------------ Sessions --- */

  function startExam(passage) {
    go('exam', { passage: passage || WC2.content.pickPassage() });
  }

  function startDrill(opts) {
    go('drill', opts || { n: 15 });
  }

  /** Practice built from the mistake book: several contexts per missed word. */
  function startPractice(words, perWord) {
    const list = words && words.length ? words : WC2.words.pending().map((r) => r.w);
    if (!list.length) { WC2.toast('No hay palabras pendientes. ¡Bien ahí!', 'good'); return; }
    startDrill({
      words: list,
      perWord: perWord || 3,
      n: Math.min(30, Math.max(6, list.length * (perWord || 3)))
    });
  }

  /** Practice built from skill keys: the Puntos débiles screen feeds this. */
  function startWeakPractice(keys, perKey) {
    const list = keys && keys.length ? keys : WC2.srs.troubleKeys(WC2.content.allKeys());
    if (!list.length) { WC2.toast('No hay puntos débiles pendientes. ¡Bien ahí!', 'good'); return; }
    startDrill({
      keyPractice: list,
      perKey: perKey || 3,
      n: Math.min(30, Math.max(6, list.length * (perKey || 3)))
    });
  }

  /**
   * The smart session: mistakes first (that is where the marks are), then any
   * overdue derivation, and only then a fresh exam text.
   */
  function startSmart() {
    const pending = WC2.words.pending();
    if (pending.length >= 3) { startPractice(pending.slice(0, 6).map((r) => r.w)); return; }

    const keys = WC2.content.allKeys();
    const weak = WC2.srs.weakKeys(keys);
    if (weak.length >= 5) startDrill({ n: Math.min(12, weak.length), onlyWeak: true });
    else startExam();
  }

  function showResult() {
    const from = current;
    const result = (WC2.ui[from] && WC2.ui[from].getResult && WC2.ui[from].getResult()) || null;
    stack.length = 0;
    go('result', { result }, { replace: true });
  }

  /* ---------------------------------------------------------------- Boot --- */

  /** The ring stroke references url(#azureGrad); the gradient must exist in the DOM. */
  function injectDefs() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.position = 'absolute';
    svg.innerHTML = '<defs><linearGradient id="azureGrad" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#62A6FF"/><stop offset="1" stop-color="#0B4FD0"/>' +
      '</linearGradient></defs>';
    document.body.insertBefore(svg, document.body.firstChild);
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    /* Relative path so the app also works from a project subdirectory on Pages. */
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => { /* offline install is best-effort */ });
    });
  }

  function wireChrome() {
    $('#btnBack').addEventListener('click', back);

    $$('.tab[data-go]').forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.go;
        WC2.util.haptic('tap');
        if (target === 'smart') { startSmart(); return; }
        stack.length = 0;
        go(target, null, { replace: true });
      });
    });

    /* Android hardware back / browser back closes the sheet first, then routes. */
    window.addEventListener('popstate', () => {
      if (!$('#sheet').hidden) { WC2.sheet.close(); return; }
      back();
    });
  }

  function refreshStreakPill() {
    $('#streakCount').textContent = String(WC2.store.liveStreak());
  }

  /** Home-screen shortcuts land on ./?go=smart, ./?go=weak or ./?go=affixes. */
  function openDeepLink() {
    const target = new URLSearchParams(location.search).get('go');
    if (target === 'smart') startSmart();
    else if (target === 'weak') go('mistakes');
    else if (target === 'affixes') go('affixes');
  }

  function boot() {
    WC2.store.load();
    injectDefs();
    WC2.sync.init();
    WC2.applyTextScale(WC2.store.get('settings').textScale);
    wireChrome();
    refreshStreakPill();
    go('home');
    openDeepLink();
    registerServiceWorker();
  }

  WC2.app = {
    go, back, startExam, startDrill, startSmart, startPractice, startWeakPractice,
    showResult, boot, refreshStreakPill
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
}(window.WC2));
