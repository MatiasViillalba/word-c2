/**
 * Drill screen — one sentence, one stem, one gap, immediate feedback.
 *
 * On a single-gap card the stem is the whole prompt, so it gets a banner above
 * the sentence rather than the small inline chip the exam screen uses.
 *
 * This is where the spaced-repetition loop is felt: a missed item is pushed
 * back into the current queue a few cards later (the lapse queue) as well as
 * being demoted two Leitner boxes, so it returns both within minutes and
 * within days.
 */
(function (WC2) {
  'use strict';
  const { el, matches, haptic } = WC2.util;

  let state = null;

  function meter() {
    const wrap = el('div.drill-meter');
    for (let i = 0; i < state.planned; i++) {
      const pip = el('i');
      if (i < state.done.length) pip.classList.add(state.done[i] ? 'is-done' : 'is-bad');
      wrap.appendChild(pip);
    }
    return wrap;
  }

  function sentenceNode(item, input) {
    const p = el('div.drill-card__s');
    item.s.split(/\{1\}/).forEach((chunk, i) => {
      if (i > 0) p.appendChild(input);
      if (chunk) p.appendChild(document.createTextNode(chunk));
    });
    return p;
  }

  function finish() {
    const total = state.answered;
    const right = state.right;
    WC2.store.logAnswers(total, right);
    WC2.store.flush();
    state.result = {
      score: right,
      total,
      wrongKeys: state.wrongKeys,
      wrongWords: state.wrongWords,
      title: state.mode === 'practice' ? 'Práctica de errores'
        : state.onlyWeak ? 'Repaso de fallos' : 'Entrenamiento rápido',
      kind: 'drill',
      mode: state.mode
    };
    WC2.app.showResult();
  }

  /**
   * The two small buttons that put the learner in charge of the mistake book.
   * "Aprendido" retires the word from mistake practice for good; "Aún no"
   * keeps it in circulation. Nothing else in the app can retire a word.
   */
  function verdictRow(item, onDone) {
    /* Practising by derivation retires the derivation; practising by word
       retires the word. Either way the decision belongs to the learner, and the
       button it lands on stays coloured. */
    const byKey = state && state.byKey;
    const word = item.a;
    const current = byKey ? WC2.words.skillMark(item.k) : WC2.words.markOf(word);

    const row = el('div.verdict');
    const yes = el('button.verdict__btn.verdict__btn--yes' + (current === 'yes' ? '.is-on' : ''), {
      type: 'button', 'aria-pressed': current === 'yes' ? 'true' : 'false'
    }, 'Aprendido');
    const no = el('button.verdict__btn.verdict__btn--no' + (current === 'no' ? '.is-on' : ''), {
      type: 'button', 'aria-pressed': current === 'no' ? 'true' : 'false'
    }, 'Aún no');

    const paint = (mark) => {
      yes.classList.toggle('is-on', mark === 'yes');
      no.classList.toggle('is-on', mark === 'no');
      yes.setAttribute('aria-pressed', mark === 'yes' ? 'true' : 'false');
      no.setAttribute('aria-pressed', mark === 'no' ? 'true' : 'false');
    };

    yes.onclick = () => {
      if (byKey) WC2.words.setSkillLearned(item.k, true);
      WC2.words.setLearned(word, true);
      WC2.util.haptic('good');
      WC2.toast('«' + word + '» no volverá a la práctica', 'good');
      paint('yes');
      if (onDone) onDone(true);
    };
    no.onclick = () => {
      if (byKey) WC2.words.setSkillLearned(item.k, false);
      WC2.words.setLearned(word, false);
      WC2.util.haptic('tap');
      WC2.toast('Seguirá apareciendo hasta que lo domines');
      paint('no');
      if (onDone) onDone(false);
    };

    row.appendChild(el('span.verdict__q', {
      text: WC2.words.looksLearned(word)
        ? 'Llevás ' + WC2.words.info(word).streak + ' aciertos seguidos.'
        : '¿Ya lo dominás?'
    }));
    row.appendChild(yes);
    row.appendChild(no);
    return row;
  }

  function step() {
    const host = state.host;
    host.innerHTML = '';

    if (!state.queue.length) { finish(); return; }

    const item = state.queue[0];
    const wrap = el('div.drill-wrap');
    wrap.appendChild(meter());

    const input = el('input.gap__input', {
      type: 'text',
      autocapitalize: 'characters',
      autocomplete: 'off',
      autocorrect: 'off',
      spellcheck: 'false',
      enterkeyhint: 'done',
      'aria-label': 'Respuesta a partir de ' + item.root,
      placeholder: '·······'
    });

    const card = el('div.card.drill-card', null,
      el('span.drill-card__pat', { text: item.p }),
      el('div.drill-stem', null,
        el('span.drill-stem__lab', { text: 'Palabra raíz' }),
        el('span.drill-stem__w', { text: item.root })
      ),
      sentenceNode(item, input),
      el('div.drill-card__src', { text: 'Origen: ' + item.src })
    );
    wrap.appendChild(card);

    const feedback = el('div', { style: 'margin-top:12px' });
    wrap.appendChild(feedback);

    const primary = el('button.btn.btn--primary.btn--block', { type: 'button' }, 'Comprobar');
    const actions = el('div.drill-actions', null, primary);
    wrap.appendChild(actions);
    host.appendChild(wrap);

    let graded = false;

    function advance() {
      state.queue.shift();
      step();
    }

    function grade() {
      if (graded) { advance(); return; }
      graded = true;

      const given = input.value.trim();
      const ok = matches(given, item);
      input.value = given.toUpperCase();
      input.readOnly = true;
      input.style.color = ok ? 'var(--good)' : '#FF8CA0';
      input.style.background = ok ? 'var(--good-soft)' : 'var(--bad-soft)';
      input.style.borderBottomColor = ok ? 'var(--good)' : 'var(--bad)';

      WC2.srs.grade(item.k, ok);
      WC2.words.grade(item.a, ok);
      state.answered += 1;
      state.done.push(ok);
      if (ok) {
        state.right += 1;
      } else {
        state.wrongKeys.push(item.k);
        state.wrongWords.push(item.a);
        /* Lapse queue: bring it back three cards later, once. */
        if (!item.__repeated) {
          const clone = Object.assign({}, item, { __repeated: true });
          state.queue.splice(Math.min(4, state.queue.length), 0, clone);
        }
      }

      haptic(ok ? 'good' : 'bad');

      feedback.appendChild(el('div.explain.' + (ok ? 'is-right' : 'is-wrong'), null,
        el('div.explain__head', null,
          el('span.explain__key', { text: item.a }),
          el('span.explain__pat', { text: item.p }),
          ok ? el('span.chip.chip--good', { text: '¡Bien!' })
             : el('span.chip.chip--bad', { text: given ? 'Pusiste: ' + given.toUpperCase() : 'Sin responder' })
        ),
        WC2.ui.derivation(item),
        el('div.explain__txt', { text: item.tip })
      ));

      /* En la práctica, cada palabra o derivación la retira el propio alumno. */
      if (state.mode === 'practice' || WC2.words.isTracked(item.a)) {
        feedback.appendChild(verdictRow(item, (learned) => {
          if (!learned) return;
          state.queue = state.byKey
            ? state.queue.filter((q, i) => i === 0 || q.k !== item.k)
            : state.queue.filter((q, i) => i === 0 || q.a !== item.a);
        }));
      }

      primary.textContent = state.queue.length > 1 ? 'Siguiente' : 'Terminar';
      primary.focus();
    }

    primary.addEventListener('click', grade);
    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') { ev.preventDefault(); grade(); }
    });

    setTimeout(() => input.focus(), 60);
  }

  function render(host, params) {
    const o = params || {};
    const n = o.n || 15;

    /* Tres fuentes de cola: el algoritmo de siempre, varias frases por palabra
       fallada, o todas las derivaciones de un afijo concreto. */
    const queue = o.keyPractice && o.keyPractice.length
      ? WC2.content.practiceQueueForKeys(o.keyPractice, { perKey: o.perKey || 3, max: n })
      : o.words && o.words.length
        ? WC2.content.practiceQueue(o.words, { perWord: o.perWord || 3, max: n })
        : WC2.content.pickDrills(n, { onlyWeak: o.onlyWeak, keys: o.keys, affix: o.affix });

    state = {
      host,
      queue,
      planned: queue.length,
      done: [],
      answered: 0,
      right: 0,
      wrongKeys: [],
      wrongWords: [],
      onlyWeak: !!o.onlyWeak,
      mode: (o.keyPractice && o.keyPractice.length) || (o.words && o.words.length) ? 'practice' : 'drill',
      byKey: !!(o.keyPractice && o.keyPractice.length),
      result: null
    };

    if (!queue.length) {
      host.innerHTML = '';
      host.appendChild(el('div.empty', null,
        el('div.empty__icon', { html: '<svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' }),
        el('div.h3', { text: 'Nada pendiente' }),
        el('div.muted', { text: 'No hay derivaciones que repasar ahora mismo. Probá con un examen completo.' }),
        el('button.btn.btn--primary', { type: 'button', style: 'margin-top:10px', onclick: () => WC2.app.startExam() }, 'Hacer un texto')
      ));
      return;
    }

    step();
  }

  WC2.ui = WC2.ui || {};
  WC2.ui.drill = {
    render,
    title: 'Entrenamiento',
    immersive: true,
    getResult: () => (state ? state.result : null)
  };
}(window.WC2));
