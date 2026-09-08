/**
 * Mistake book screen.
 *
 * Every word missed anywhere in the app lands here and stays until the learner
 * personally retires it. Practising from this screen never repeats a sentence:
 * the queue is built from all the different contexts the bank has for each
 * word — its own drills plus the sentences of every exam passage it appears in.
 */
(function (WC2) {
  'use strict';
  const { el } = WC2.util;

  function practise(words, perWord) {
    if (!words.length) { WC2.toast('No hay palabras pendientes', 'good'); return; }
    WC2.app.startDrill({
      words: words,
      perWord: perWord || 3,
      n: Math.min(30, Math.max(6, words.length * (perWord || 3)))
    });
  }

  /** Every stem the bank can build this word from, so the row shows the family. */
  function stemsFor(word) {
    return WC2.content.allKeys()
      .map(WC2.content.skillMeta)
      .filter((m) => m.a === word)
      .map((m) => m.root)
      .filter((r, i, a) => a.indexOf(r) === i);
  }

  /** One row: the word, how it is going, and the two verdict buttons. */
  function wordRow(rec, onChange) {
    const contexts = WC2.content.contextsFor(rec.w).length;
    const acc = WC2.words.accuracy(rec);
    const tier = acc >= 80 ? 'hi' : acc >= 50 ? 'mid' : 'lo';
    const stems = stemsFor(rec.w);

    const mark = WC2.words.markOf(rec.w);
    const row = el('div.mistake' + (mark ? '.is-' + mark : ''));
    row.appendChild(el('div.mistake__head', null,
      el('button.mistake__word', {
        type: 'button',
        title: 'Practicar solo esta palabra',
        onclick: () => practise([rec.w], Math.min(6, Math.max(3, contexts)))
      }, rec.w),
      el('div.mistake__meta', null,
        el('span', { text: contexts + ' contexto' + (contexts === 1 ? '' : 's') }),
        el('span.dot', { text: '·' }),
        el('span', { text: rec.wrong + ' fallo' + (rec.wrong === 1 ? '' : 's') }),
        el('span.dot', { text: '·' }),
        el('span.mistake__acc', { 'data-t': tier, text: acc + '%' })
      )
    ));

    if (stems.length) {
      row.appendChild(el('div.mistake__pat', {
        text: 'Se construye desde: ' + stems.join(', ')
      }));
    }

    /* Los dos botones están siempre, y el elegido queda pintado: verde
       "Aprendido", rojo "Aún no", hasta que el alumno cambie de opinión. */
    const actions = el('div.verdict.verdict--tight');
    if (WC2.words.looksLearned(rec.w)) {
      actions.appendChild(el('span.verdict__q', { text: rec.streak + ' aciertos seguidos' }));
    }
    actions.appendChild(el('button.verdict__btn.verdict__btn--yes' + (mark === 'yes' ? '.is-on' : ''), {
      type: 'button',
      'aria-pressed': mark === 'yes' ? 'true' : 'false',
      onclick: () => { WC2.words.setLearned(rec.w, true); WC2.toast('«' + rec.w + '» aprendida', 'good'); onChange(); }
    }, 'Aprendido'));
    actions.appendChild(el('button.verdict__btn.verdict__btn--no' + (mark === 'no' ? '.is-on' : ''), {
      type: 'button',
      'aria-pressed': mark === 'no' ? 'true' : 'false',
      onclick: () => { WC2.words.setLearned(rec.w, false); WC2.toast('Sigue en práctica'); onChange(); }
    }, 'Aún no'));
    row.appendChild(actions);
    return row;
  }

  function render(host) {
    const pending = WC2.words.pending();
    const learned = WC2.words.learned();
    const again = () => render(host);

    host.innerHTML = '';
    const frag = el('div.stagger');

    /* --- Hero ------------------------------------------------------------- */
    const totalContexts = pending.reduce((n, r) => n + WC2.content.contextsFor(r.w).length, 0);
    frag.appendChild(el('div.card.card--hero', { style: '--i:0' },
      el('div.hero__grade', { text: 'Mis errores' }),
      el('div.hero__title', { text: pending.length + (pending.length === 1 ? ' palabra' : ' palabras') }),
      el('div.hero__sub', {
        text: pending.length
          ? totalContexts + ' ejercicios distintos disponibles para practicarlas en contextos diferentes.'
          : 'Nada pendiente. Cuando falles una palabra aparecerá acá con todos sus contextos.'
      }),
      pending.length ? el('button.btn.btn--primary.btn--block', {
        type: 'button',
        style: 'margin-top:14px',
        onclick: () => practise(pending.map((r) => r.w))
      }, 'Practicar todas ahora') : null,
      pending.length > 4 ? el('button.btn.btn--ghost.btn--block', {
        type: 'button',
        style: 'margin-top:8px',
        onclick: () => practise(pending.slice(0, 5).map((r) => r.w), 4)
      }, 'Sesión corta: las 5 peores') : null
    ));

    /* --- Pending ---------------------------------------------------------- */
    if (pending.length) {
      frag.appendChild(el('div.eyebrow', { style: '--i:1', text: 'A practicar · de la peor a la mejor' }));
      const list = el('div.mistake-list', { style: '--i:2' });
      pending.forEach((r) => list.appendChild(wordRow(r, again)));
      frag.appendChild(list);
      frag.appendChild(el('div.tiny', { style: 'margin-top:10px', text: 'Tocá una palabra para practicar solo esa. «Aprendido» la retira de la práctica de errores; «Aún no» la mantiene hasta que vos decidas.' }));
    }

    /* --- Learned ---------------------------------------------------------- */
    if (learned.length) {
      frag.appendChild(el('div.eyebrow', { style: '--i:3', text: 'Aprendidas (' + learned.length + ')' }));
      const list = el('div.mistake-list', { style: '--i:4' });
      learned.forEach((r) => list.appendChild(wordRow(r, again)));
      frag.appendChild(list);
    }

    if (!pending.length && !learned.length) {
      frag.appendChild(el('div.empty', null,
        el('div.empty__icon', { html: '<svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' }),
        el('div.h3', { text: 'Sin errores registrados' }),
        el('div.muted', { text: 'Hacé un texto o un entrenamiento rápido: lo que falles se guarda acá automáticamente.' }),
        el('button.btn.btn--primary', { type: 'button', style: 'margin-top:10px', onclick: () => WC2.app.startExam() }, 'Hacer un texto')
      ));
    }

    host.appendChild(frag);
  }

  WC2.ui = WC2.ui || {};
  WC2.ui.mistakes = { render, title: 'Mis errores' };
}(window.WC2));
