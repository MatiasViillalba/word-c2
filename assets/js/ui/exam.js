/**
 * Word Formation screen — the exam itself.
 *
 * Part 3 prints the text on the left and the stems down the right-hand margin.
 * A phone has no margin, so the stem rides in a dashed chip immediately after
 * its gap: the eye reads "____ (AVOID)" as a single unit, and the chip is
 * styled so that it can never be mistaken for something to type in.
 *
 * Grading is deferred until the learner asks for it, as in the exam. Each gap
 * is then annotated with the derivation it was testing — STEM → ANSWER, named
 * by affix — because the transformation is what has to be remembered, not the
 * individual word.
 */
(function (WC2) {
  'use strict';
  const { el, matches, haptic, pct } = WC2.util;

  let state = null;

  /* ------------------------------------------------------------ Building --- */

  function gapNode(gap) {
    const input = el('input.gap__input', {
      type: 'text',
      inputmode: 'text',
      autocapitalize: 'characters',
      autocomplete: 'off',
      autocorrect: 'off',
      spellcheck: 'false',
      enterkeyhint: 'next',
      'aria-label': 'Hueco ' + gap.n + ', a partir de ' + gap.root,
      placeholder: '·······',
      'data-n': gap.n
    });

    input.addEventListener('input', () => {
      state.answers[gap.n] = input.value;
      updateProgress();
    });

    input.addEventListener('keydown', (ev) => {
      if (ev.key !== 'Enter') return;
      ev.preventDefault();
      const next = state.host.querySelector('.gap__input[data-n="' + (gap.n + 1) + '"]');
      if (next) next.focus();
      else input.blur();
    });

    /* The stem is a sibling of the input, not a child: the CSS uses the
       adjacent-sibling selector to light it up while the gap has focus. */
    return el('span.gap', { 'data-gap': gap.n },
      el('span.gap__num', { text: String(gap.n) }),
      input,
      el('span.gap__root', { text: gap.root, 'aria-hidden': 'true' })
    );
  }

  function passageNode(passage) {
    const container = el('div.passage', { 'data-selectable': true });

    passage.text.split(/\n\n+/).forEach((para, pi) => {
      const p = el('p' + (pi === 0 ? '.passage__lead' : ''));
      /* Split on the {n} markers, keeping the numbers. */
      para.split(/\{(\d+)\}/).forEach((chunk, i) => {
        if (i % 2 === 1) {
          const gap = passage.gaps[Number(chunk) - 1];
          p.appendChild(gapNode(gap));
        } else if (chunk) {
          p.appendChild(document.createTextNode(chunk));
        }
      });
      container.appendChild(p);
    });

    return container;
  }

  /** The printed paper's margin list, echoed under the text. */
  function stemKey(passage) {
    const grid = el('div.stem-key__grid');
    passage.gaps.forEach((g) => {
      grid.appendChild(el('div.stem-key__i', null,
        el('span.stem-key__n', { text: String(g.n) }),
        el('span.stem-key__w', { text: g.root })
      ));
    });
    return el('div.stem-key', null,
      el('div.eyebrow', { text: 'Palabras raíz', style: 'margin:0 2px 8px' }),
      grid
    );
  }

  function updateProgress() {
    if (!state) return;
    const filled = state.passage.gaps.filter((g) => (state.answers[g.n] || '').trim()).length;
    const total = state.passage.gaps.length;
    state.bar.style.width = pct(filled, total) + '%';
    state.counter.textContent = filled + '/' + total;
    state.submit.disabled = state.checked ? false : filled === 0;
  }

  /* ------------------------------------------------------------- Grading --- */

  /** STEM → ANSWER, with the affix that did the work. Shared with the drill. */
  function derivation(item) {
    const meta = WC2.content.skillMeta(item.k);
    const affix = meta && meta.affix ? meta.affix.label : '';
    return el('div.derive', null,
      el('span.derive__from', { text: item.root }),
      el('span.derive__arrow', { text: '→' }),
      el('span.derive__to', { text: item.a }),
      affix ? el('span.derive__tag', { text: affix }) : null
    );
  }

  function explain(gap, given, ok) {
    return el('div.explain.' + (ok ? 'is-right' : 'is-wrong'), null,
      el('div.explain__head', null,
        el('span.explain__key', { text: gap.n + '. ' + gap.a }),
        el('span.explain__pat', { text: gap.p }),
        ok ? el('span.chip.chip--good', { text: 'Correcto' })
           : el('span.chip.chip--bad', { text: given ? 'Pusiste: ' + given.toUpperCase() : 'Sin responder' })
      ),
      derivation(gap),
      el('div.explain__txt', { text: gap.tip })
    );
  }

  function check() {
    if (state.checked) { WC2.app.showResult(); return; }

    let score = 0;
    const wrongKeys = [];
    const wrongWords = [];

    state.passage.gaps.forEach((gap) => {
      const given = (state.answers[gap.n] || '').trim();
      const ok = matches(given, gap);
      if (ok) score += 1; else { wrongKeys.push(gap.k); wrongWords.push(gap.a); }

      WC2.srs.grade(gap.k, ok);
      WC2.words.grade(gap.a, ok);

      const wrap = state.host.querySelector('[data-gap="' + gap.n + '"]');
      const input = wrap.querySelector('input');
      wrap.classList.add(ok ? 'is-right' : 'is-wrong');
      input.value = given.toUpperCase();
      input.readOnly = true;
      if (!ok) wrap.appendChild(el('span.gap__fix', { text: gap.a }));
    });

    const total = state.passage.gaps.length;
    WC2.store.logAnswers(total, score);
    WC2.store.logExercise(state.passage.id, score, total);
    WC2.store.flush();

    haptic(score === total ? 'win' : score >= total * 0.75 ? 'good' : 'bad');

    /* Inline review under the passage. */
    const review = el('div.review-list');
    review.appendChild(el('div.eyebrow', { text: 'Corrección y derivaciones', style: 'margin-top:6px' }));
    state.passage.gaps.forEach((gap) => {
      const given = (state.answers[gap.n] || '').trim();
      review.appendChild(explain(gap, given, matches(given, gap)));
    });
    state.reviewHost.appendChild(review);

    state.checked = true;
    state.submit.textContent = 'Ver resultado';
    state.submit.disabled = false;
    state.result = { score, total, wrongKeys, wrongWords, id: state.passage.id, title: state.passage.title, kind: 'exam' };

    if (review.scrollIntoView) review.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* --------------------------------------------------------------- Hints --- */

  /** Only the shape of the answer: which affix family, never the word. */
  function openHints() {
    const body = el('div');
    body.appendChild(el('div.h2', { text: 'Pistas', style: 'margin-bottom:4px' }));
    body.appendChild(el('div.muted', {
      text: 'Sólo la familia de afijos que pide cada hueco y la clase de palabra. La palabra la construís vos.',
      style: 'margin-bottom:14px'
    }));
    state.passage.gaps.forEach((gap) => {
      const meta = WC2.content.skillMeta(gap.k);
      body.appendChild(el('div.explain', { style: 'margin-bottom:8px' },
        el('div.explain__head', null,
          el('span.explain__key', { text: gap.n + '. ' + gap.root }),
          el('span.explain__pat', { text: meta.affix ? meta.affix.group.label : gap.p })
        ),
        el('div.explain__txt', { text: meta.affix ? meta.affix.label : gap.p })
      ));
    });
    WC2.sheet.open(body);
  }

  /* -------------------------------------------------------------- Render --- */

  function render(host, params) {
    const passage = (params && params.passage) || WC2.content.pickPassage();
    host.innerHTML = '';

    state = { passage, answers: {}, checked: false, host, result: null };

    const rec = WC2.store.get('exercises')[passage.id];
    const settings = WC2.store.get('settings');

    host.appendChild(el('div.ex-head', null,
      el('div.ex-head__meta', null,
        el('span.chip.chip--azure', { text: 'Word Formation · Part 3' }),
        el('span.chip', { text: passage.gaps.length + ' huecos' }),
        rec ? el('span.chip', { text: 'Mejor: ' + rec.best + '/' + passage.gaps.length }) : null
      ),
      el('div.ex-head__title', { text: passage.title }),
      el('div.ex-head__brief', { text: passage.focus })
    ));

    const bar = el('div.bar__fill', { style: 'width:0%' });
    const counter = el('b', { text: '0/' + passage.gaps.length });
    host.appendChild(el('div.ex-progress', null,
      el('div.bar', null, bar),
      counter
    ));

    host.appendChild(passageNode(passage));
    if (settings.showStemKey) host.appendChild(stemKey(passage));

    host.appendChild(el('div.ex-tools', null,
      settings.showTips ? el('button.btn.btn--ghost.btn--sm', { type: 'button', onclick: openHints }, 'Pistas') : null,
      el('button.btn.btn--ghost.btn--sm', {
        type: 'button',
        onclick: () => WC2.app.go('exam', { passage })
      }, 'Reiniciar')
    ));

    const reviewHost = el('div');
    host.appendChild(reviewHost);

    const submit = el('button.btn.btn--primary.btn--block', { type: 'button', disabled: true, onclick: check }, 'Corregir');
    host.appendChild(el('div.ex-actions', null, submit));

    state.bar = bar;
    state.counter = counter;
    state.submit = submit;
    state.reviewHost = reviewHost;

    updateProgress();
  }

  WC2.ui = WC2.ui || {};
  WC2.ui.derivation = derivation;
  WC2.ui.exam = {
    render,
    title: 'Word Formation',
    immersive: true,
    getResult: () => (state ? state.result : null)
  };
}(window.WC2));
