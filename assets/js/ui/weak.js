/**
 * Puntos débiles.
 *
 * Everything the app has watched the learner get wrong, at the finest grain it
 * knows: not just the word, but the word *built from a particular stem*.
 * ACCESS → ACCESSIBLE can be retired without retiring ACCESS → INACCESSIBLE.
 *
 * Grouped by affix family rather than by word, because that is how the weakness
 * is actually experienced: a learner does not fail thirty unrelated words, they
 * fail -ANCE against -ENCE, or every negative prefix that is not UN-. Seeing
 * eleven misses land in one family is the diagnosis the list exists to give.
 *
 * Each row carries the same two buttons as the mistake book, and they stay
 * coloured — green for "Aprendido", red for "Aún no" — until the learner
 * changes their mind.
 */
(function (WC2) {
  'use strict';
  const { el } = WC2.util;

  function practise(keys, perKey) {
    if (!keys.length) { WC2.toast('No hay puntos débiles pendientes', 'good'); return; }
    WC2.app.startWeakPractice(keys, perKey);
  }

  /** The verdict pair. Coloured by whatever the learner last decided. */
  function verdict(k, onChange) {
    const mark = WC2.words.skillMark(k);
    const row = el('div.verdict.verdict--tight');

    const yes = el('button.verdict__btn.verdict__btn--yes' + (mark === 'yes' ? '.is-on' : ''), {
      type: 'button',
      'aria-pressed': mark === 'yes' ? 'true' : 'false'
    }, 'Aprendido');

    const no = el('button.verdict__btn.verdict__btn--no' + (mark === 'no' ? '.is-on' : ''), {
      type: 'button',
      'aria-pressed': mark === 'no' ? 'true' : 'false'
    }, 'Aún no');

    yes.onclick = () => {
      WC2.words.setSkillLearned(k, true);
      WC2.util.haptic('good');
      WC2.toast('Punto débil dominado. Sale de la práctica.', 'good');
      onChange();
    };
    no.onclick = () => {
      WC2.words.setSkillLearned(k, false);
      WC2.util.haptic('tap');
      WC2.toast('Seguirá apareciendo hasta que lo domines');
      onChange();
    };

    row.appendChild(yes);
    row.appendChild(no);
    return row;
  }

  function skillRow(k, onChange) {
    const meta = WC2.content.skillMeta(k);
    const rec = WC2.store.get('skills')[k] || { seen: 0, right: 0, wrong: 0 };
    const acc = rec.seen ? Math.round((rec.right / rec.seen) * 100) : 0;
    const tier = acc >= 80 ? 'hi' : acc >= 50 ? 'mid' : 'lo';
    const contexts = WC2.content.contextsFor(meta.a).length;
    const mark = WC2.words.skillMark(k);

    const row = el('div.mistake' + (mark ? '.is-' + mark : ''));
    row.appendChild(el('div.mistake__head', null,
      el('button.mistake__word', {
        type: 'button',
        title: 'Practicar solo este punto débil',
        onclick: () => practise([k], Math.min(6, Math.max(3, contexts)))
      }, meta.a),
      el('div.mistake__meta', null,
        el('span.mistake__acc', { 'data-t': tier, text: acc + '%' }),
        el('span.dot', { text: '·' }),
        el('span', { text: rec.wrong + ' fallo' + (rec.wrong === 1 ? '' : 's') + ' de ' + rec.seen }),
        el('span.dot', { text: '·' }),
        el('span', { text: contexts + ' contextos' })
      )
    ));
    /* The stem is not decoration here: without it the row names a word rather
       than the transformation that was actually missed. */
    row.appendChild(WC2.ui.derivation(meta));
    row.appendChild(el('div.mistake__pat', { text: meta.p }));
    row.appendChild(verdict(k, onChange));
    return row;
  }

  function render(host) {
    const all = WC2.content.allKeys();
    const trouble = WC2.srs.troubleKeys(all);
    const again = () => render(host);

    /* Group by affix family: negative prefixes, abstract nouns, agents… */
    const groups = Object.create(null);
    trouble.forEach((k) => {
      const g = WC2.content.groupOf(k);
      (groups[g.id] || (groups[g.id] = { group: g, keys: [] })).keys.push(k);
    });

    /* Anything already retired, so it can be brought back. */
    const retired = all.filter((k) => WC2.words.skillLearned(k));

    host.innerHTML = '';
    const frag = el('div.stagger');

    frag.appendChild(el('div.card.card--hero', { style: '--i:0' },
      el('div.hero__grade', { text: 'Puntos débiles' }),
      el('div.hero__title', { text: trouble.length + (trouble.length === 1 ? ' punto' : ' puntos') }),
      el('div.hero__sub', {
        text: trouble.length
          ? 'Todo lo que fallaste o todavía tenés al 0%, agrupado por familia de afijos. Vuelven hasta que los marques como aprendidos.'
          : 'Nada pendiente. Todo lo que practicaste está por encima del 0% y sin fallos abiertos.'
      }),
      trouble.length ? el('button.btn.btn--primary.btn--block', {
        type: 'button', style: 'margin-top:14px',
        onclick: () => practise(trouble)
      }, 'Practicar todos estos puntos débiles') : null,
      trouble.length > 6 ? el('button.btn.btn--ghost.btn--block', {
        type: 'button', style: 'margin-top:8px',
        onclick: () => practise(WC2.util.shuffle(trouble).slice(0, 8), 2)
      }, 'Sesión random de 8 puntos débiles') : null
    ));

    WC2.affixes.GROUPS.forEach((g) => {
      const bucket = groups[g.id];
      if (!bucket) return;
      frag.appendChild(el('div.row.row--between.eyebrow', null,
        el('span', { text: g.label + ' (' + bucket.keys.length + ')' }),
        el('button.chip.chip--azure', {
          type: 'button',
          onclick: () => practise(bucket.keys)
        }, 'Practicar')
      ));
      frag.appendChild(el('div.tiny', { style: 'margin:-6px 2px 8px', text: g.note }));
      const list = el('div.mistake-list');
      bucket.keys.forEach((k) => list.appendChild(skillRow(k, again)));
      frag.appendChild(list);
    });

    if (retired.length) {
      frag.appendChild(el('div.eyebrow', { text: 'Dominados por vos (' + retired.length + ')' }));
      const list = el('div.mistake-list');
      retired.forEach((k) => list.appendChild(skillRow(k, again)));
      frag.appendChild(list);
    }

    if (!trouble.length && !retired.length) {
      frag.appendChild(el('div.empty', null,
        el('div.empty__icon', { html: '<svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' }),
        el('div.h3', { text: 'Sin puntos débiles todavía' }),
        el('div.muted', { text: 'Hacé una sesión y acá vas a ver cada fallo agrupado por familia de afijos, con su botón de aprendido.' }),
        el('button.btn.btn--primary', { type: 'button', style: 'margin-top:10px', onclick: () => WC2.app.startSmart() }, 'Empezar una sesión')
      ));
    }

    host.appendChild(frag);
  }

  WC2.ui = WC2.ui || {};
  WC2.ui.weak = { render, title: 'Puntos débiles' };
}(window.WC2));
