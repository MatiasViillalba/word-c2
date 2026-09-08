/**
 * Affix explorer — the screen this app exists for.
 *
 * Word formation is not an open vocabulary problem. It is a closed system of
 * about seventy affixes over an open set of stems, and a learner who owns the
 * system can derive a word they have never met. This screen makes the system
 * visible: every prefix and suffix the bank uses, what it does, which part of
 * speech it yields, how many derivations depend on it and how many of those
 * the learner has actually mastered.
 *
 * Every row is a session. Tapping one drills that family and nothing else,
 * which is the only way to fix a systematic gap rather than a scattering of
 * individual words.
 */
(function (WC2) {
  'use strict';
  const { el } = WC2.util;

  const FILTERS = [
    { id: 'all', label: 'Todos' },
    { id: 'weak', label: 'Sin dominar' },
    { id: 'prefix', label: 'Prefijos' },
    { id: 'suffix', label: 'Sufijos' }
  ];

  let active = 'all';

  function matchesFilter(entry) {
    if (active === 'all') return true;
    if (active === 'prefix') return entry.affix.kind === 'prefix';
    if (active === 'suffix') return entry.affix.kind === 'suffix';
    return entry.stats.coverage < 100;
  }

  function row(entry, onChange) {
    const a = entry.affix;
    const s = entry.stats;
    const examples = WC2.content.affixExamples(a.id, 3);

    const card = el('button.affix', {
      type: 'button',
      onclick: () => {
        WC2.app.startDrill({ affix: a.id, n: Math.min(20, Math.max(6, s.total)) });
      }
    });

    card.appendChild(el('div.affix__head', null,
      el('span.affix__tag', { text: a.tag }),
      el('div.affix__b', null,
        el('b', { text: a.label }),
        el('span', { text: a.note })
      ),
      el('div.affix__n', null,
        String(s.mastered) + '/' + s.total,
        el('small', { text: 'dominadas' })
      )
    ));

    card.appendChild(el('div.bar.bar--thin.affix__bar', null,
      el('div.bar__fill', { style: 'width:' + s.coverage + '%' })
    ));

    if (examples.length) {
      const ex = el('div.affix__ex');
      examples.forEach((m, i) => {
        if (i) ex.appendChild(document.createTextNode('   ·   '));
        ex.appendChild(document.createTextNode(m.root + ' → '));
        ex.appendChild(el('b', { text: m.a }));
      });
      card.appendChild(ex);
    }

    return card;
  }

  function render(host) {
    const catalogue = WC2.content.affixCatalogue();
    const shown = catalogue.filter(matchesFilter);

    const totalDerivations = catalogue.reduce((n, c) => n + c.stats.total, 0);
    const totalMastered = catalogue.reduce((n, c) => n + c.stats.mastered, 0);

    host.innerHTML = '';
    const frag = el('div.stagger');

    frag.appendChild(el('div.card.card--hero', { style: '--i:0' },
      el('div.hero__grade', { text: 'Mapa de afijos' }),
      el('div.hero__title', { text: catalogue.length + ' familias' }),
      el('div.hero__sub', {
        text: 'Todo el sistema de formación de palabras del examen en una pantalla. ' +
              totalMastered + ' de ' + totalDerivations + ' derivaciones dominadas. ' +
              'Tocá una familia para entrenar sólo esa.'
      })
    ));

    const filters = el('div.filters', { style: '--i:1' });
    FILTERS.forEach((f) => {
      const btn = el('button.filter' + (f.id === active ? '.is-active' : ''), { type: 'button', text: f.label });
      btn.onclick = () => { active = f.id; render(host); };
      filters.appendChild(btn);
    });
    frag.appendChild(filters);

    if (!shown.length) {
      frag.appendChild(el('div.empty', null,
        el('div.empty__icon', { html: '<svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' }),
        el('div.h3', { text: 'Nada por acá' }),
        el('div.muted', { text: active === 'weak' ? 'Dominaste todas las familias de afijos del banco. Eso es Grade A.' : 'No hay afijos en esta categoría.' })
      ));
      host.appendChild(frag);
      return;
    }

    /* Grouped by the eight families so the list reads as a syllabus rather than
       as an alphabetical dump. */
    WC2.affixes.GROUPS.forEach((g) => {
      const bucket = shown.filter((e) => e.affix.g === g.id);
      if (!bucket.length) return;
      frag.appendChild(el('div.eyebrow', { text: g.label + ' (' + bucket.length + ')' }));
      const list = el('div.affix-list');
      bucket.forEach((e) => list.appendChild(row(e)));
      frag.appendChild(list);
    });

    frag.appendChild(el('div.tiny', {
      style: 'margin-top:16px',
      text: 'La barra mide derivaciones dominadas, no vistas: una familia sólo se llena cuando esas palabras llegan a la caja 4 del repaso espaciado.'
    }));

    host.appendChild(frag);
  }

  WC2.ui = WC2.ui || {};
  WC2.ui.affixes = { render, title: 'Mapa de afijos' };
}(window.WC2));
