/**
 * Progress screen.
 *
 * Four questions, four answers: how close am I to a Grade A (the ring), am I
 * actually turning up (the heatmap), which affix families are still costing me
 * marks (the family bars), and which individual derivations are worst (the
 * table at the bottom).
 */
(function (WC2) {
  'use strict';
  const { el, dayKey, pct } = WC2.util;

  const BOX_LABELS = ['Sin ver', 'Caja 1', 'Caja 2', 'Caja 3', 'Caja 4', 'Dominado'];

  /** 12 weeks of activity, oldest column first, Monday at the top. */
  function heatmap() {
    const history = WC2.store.get('history');
    const grid = el('div.heat');
    const today = new Date();
    const days = 84;

    /* Pad so the first column starts on a Monday. */
    const start = new Date(today.getTime() - (days - 1) * 86400000);
    const lead = (start.getDay() + 6) % 7;
    for (let i = 0; i < lead; i++) grid.appendChild(el('i', { 'data-l': '0' }));

    for (let i = 0; i < days; i++) {
      const d = new Date(start.getTime() + i * 86400000);
      const key = dayKey(d.getTime());
      const items = (history[key] || { items: 0 }).items;
      const level = items === 0 ? 0 : items < 8 ? 1 : items < 20 ? 2 : items < 40 ? 3 : 4;
      grid.appendChild(el('i', { 'data-l': String(level), title: key + ': ' + items }));
    }
    return grid;
  }

  /** One ingredient of the readiness score, with the weight it carries. */
  function mixRow(label, note, value, weight) {
    return el('div.mix__row', null,
      el('div.mix__lab', null,
        el('b', { text: label }),
        el('span', { text: note })
      ),
      el('div.bar.bar--thin', null, el('div.bar__fill', { style: 'width:' + value + '%' })),
      el('div.mix__n', { text: value + '%' }),
      el('div.mix__w', { text: weight + '%' })
    );
  }

  function boxChart(ov) {
    const wrap = el('div.box-bars');
    const max = Math.max(1, Math.max.apply(null, ov.boxes));
    ov.boxes.forEach((n, i) => {
      wrap.appendChild(el('div.box-bar', null,
        el('div.box-bar__lab', { text: BOX_LABELS[i] }),
        el('div.bar.bar--thin', null, el('div.bar__fill', { style: 'width:' + pct(n, max) + '%' })),
        el('div.box-bar__n', { text: String(n) })
      ));
    });
    return wrap;
  }

  /**
   * The eight affix families, worst coverage first. This is the diagnostic the
   * word list cannot give: it says which part of the *system* is missing rather
   * than which words are.
   */
  function familyChart() {
    const store = WC2.store.get('skills');
    const rows = WC2.affixes.GROUPS.map((g) => {
      const keys = WC2.content.allKeys().filter((k) => WC2.content.groupOf(k).id === g.id);
      let mastered = 0;
      keys.forEach((k) => {
        const rec = store[k];
        if (rec && rec.box >= WC2.srs.MASTER_BOX) mastered += 1;
      });
      return { g, total: keys.length, mastered, coverage: keys.length ? Math.round((mastered / keys.length) * 100) : 0 };
    }).filter((r) => r.total > 0).sort((a, b) => a.coverage - b.coverage);

    const wrap = el('div.box-bars');
    rows.forEach((r) => {
      wrap.appendChild(el('div.box-bar', null,
        el('div.box-bar__lab', { text: r.g.label, style: 'width:120px' }),
        el('div.bar.bar--thin', null, el('div.bar__fill', { style: 'width:' + r.coverage + '%' })),
        el('div.box-bar__n', { text: r.mastered + '/' + r.total })
      ));
    });
    return wrap;
  }

  /**
   * The button the whole Progreso table is really for: take every derivation
   * sitting at 0% or carrying a mistake and drill them, in random order, in
   * whatever contexts the bank can supply.
   */
  function randomTroubleButton() {
    const trouble = WC2.srs.troubleKeys(WC2.content.allKeys());
    if (!trouble.length) return null;
    const shuffled = WC2.util.shuffle(trouble);
    return el('div.card', { style: 'margin-top:12px' },
      el('div.h3', { text: 'Ejercicios random con lo que fallás' }),
      el('div.muted', {
        style: 'margin:6px 0 12px',
        text: trouble.length + ' derivaciones al 0% o con errores. Se mezclan al azar y salen en contextos distintos cada vez.'
      }),
      el('button.btn.btn--primary.btn--block', {
        type: 'button',
        onclick: () => WC2.app.startWeakPractice(shuffled)
      }, 'Generar ejercicios random'),
      el('button.btn.btn--ghost.btn--block', {
        type: 'button', style: 'margin-top:8px',
        onclick: () => WC2.app.go('weak')
      }, 'Ver todos mis puntos débiles')
    );
  }

  function skillTable() {
    const skills = WC2.store.get('skills');
    const rows = Object.keys(skills)
      .filter((k) => skills[k].seen > 0)
      .map((k) => {
        const rec = skills[k];
        const meta = WC2.content.skillMeta(k);
        return { k, meta, acc: Math.round((rec.right / rec.seen) * 100), seen: rec.seen };
      })
      .sort((a, b) => a.acc - b.acc || b.seen - a.seen);

    if (!rows.length) {
      return el('div.card', null,
        el('div.h3', { text: 'Todavía sin datos' }),
        el('div.muted', { text: 'Hacé una sesión y acá vas a ver cada derivación con tu porcentaje de acierto, de la peor a la mejor.' })
      );
    }

    const list = el('div.skill-list');
    rows.forEach((r) => {
      const tier = r.acc >= 80 ? 'hi' : r.acc >= 55 ? 'mid' : 'lo';
      list.appendChild(el('div.skill', null,
        el('div.skill__w', { text: r.meta.root + ' → ' + r.meta.a }),
        el('div.skill__p', { text: r.meta.p }),
        el('div.skill__acc', { 'data-t': tier, text: r.acc + '%' })
      ));
    });
    return list;
  }

  function render(host) {
    const keys = WC2.content.allKeys();
    const ov = WC2.srs.overview(keys);
    const totals = WC2.store.get('totals');
    const streak = WC2.store.get('streak');

    host.innerHTML = '';
    const frag = el('div.stagger');

    frag.appendChild(el('div.card.card--hero', { style: '--i:0' },
      el('div.hero', null,
        el('div.hero__copy', null,
          el('div.hero__grade', { text: 'Preparación para el CPE' }),
          el('div.hero__title', { text: ov.grade.label }),
          el('div.hero__sub', { text: ov.readiness + '% del camino al Grade A. La banda A empieza en 90%.' })
        ),
        WC2.ui.ring(ov.readiness)
      ),
      /* De qué está hecho ese porcentaje, para que no sea un número mágico. */
      el('div.mix', null,
        mixRow('Cobertura', 'derivaciones ya vistas (' + ov.seen + '/' + ov.total + ')', ov.coverage, 45),
        mixRow('Solidez', 'cuán alto están en las cajas de repaso', ov.solidity, 40),
        mixRow('Precisión', 'aciertos sobre todo lo respondido', ov.accuracy, 15)
      )
    ));

    const wc = WC2.words.counts();
    frag.appendChild(el('div.tiles', { style: '--i:1; margin-top:12px' },
      el('div.tile', null, el('b', { text: String(ov.mastered) }), el('span', { text: 'derivaciones dominadas' })),
      el('div.tile', null, el('b', { text: String(totals.items) }), el('span', { text: 'huecos resueltos' })),
      el('div.tile', null, el('b', { text: String(streak.best || 0) }), el('span', { text: 'mejor racha' }))
    ));

    frag.appendChild(el('div.tiles', { style: '--i:1; margin-top:10px' },
      el('button.tile.tile--tap', { type: 'button', onclick: () => WC2.app.go('mistakes') },
        el('b', { text: String(wc.pending) }), el('span', { text: 'palabras a practicar' })),
      el('div.tile', null, el('b', { text: String(wc.learned) }), el('span', { text: 'marcadas aprendidas' })),
      el('div.tile', null, el('b', { text: String(ov.due) }), el('span', { text: 'a repasar hoy' }))
    ));

    frag.appendChild(el('div.eyebrow', { style: '--i:2', text: 'Constancia (12 semanas)' }));
    frag.appendChild(el('div.card', { style: '--i:3' }, heatmap()));

    frag.appendChild(el('div.row.row--between.eyebrow', { style: '--i:4' },
      el('span', { text: 'Familias de afijos, de la peor a la mejor' }),
      el('button.chip.chip--azure', { type: 'button', onclick: () => WC2.app.go('affixes') }, 'Mapa completo')
    ));
    frag.appendChild(el('div.card', { style: '--i:5' },
      familyChart(),
      el('div.tiny', { style: 'margin-top:10px', text: 'Un hueco entero en una familia significa una laguna de sistema, no de vocabulario: se arregla con una sesión de esa familia, no palabra por palabra.' })
    ));

    frag.appendChild(el('div.eyebrow', { style: '--i:6', text: 'Reparto por caja' }));
    frag.appendChild(el('div.card', { style: '--i:7' },
      boxChart(ov),
      el('div.tiny', { style: 'margin-top:10px', text: 'Acertar sube una derivación de caja; fallar la baja dos. Cuanto más alta la caja, más tarda en volver a aparecer.' })
    ));

    frag.appendChild(el('div.row.row--between.eyebrow', { style: '--i:8' },
      el('span', { text: 'Derivaciones, de la peor a la mejor' }),
      el('button.chip.chip--azure', { type: 'button', onclick: () => WC2.app.go('weak') }, 'Puntos débiles')
    ));
    const randomBtn = randomTroubleButton();
    if (randomBtn) frag.appendChild(randomBtn);
    frag.appendChild(skillTable());

    host.appendChild(frag);
  }

  WC2.ui = WC2.ui || {};
  WC2.ui.stats = { render, title: 'Progreso' };
}(window.WC2));
