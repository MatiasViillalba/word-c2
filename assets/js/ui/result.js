/**
 * Result screen — the moment that decides whether the next session happens.
 *
 * It reports a Cambridge-style band rather than a bare percentage, names the
 * derivations that were missed, and offers the single most useful next action:
 * drilling those exact stems straight away.
 */
(function (WC2) {
  'use strict';
  const { el, pct } = WC2.util;

  function render(host, params) {
    const r = (params && params.result) || { score: 0, total: 0, wrongKeys: [], wrongWords: [], title: '', kind: 'exam' };
    const band = WC2.srs.band(r.score, r.total);
    const percentage = pct(r.score, r.total);
    const unique = r.wrongKeys.filter((k, i, a) => a.indexOf(k) === i);
    const words = (r.wrongWords || []).filter((w, i, a) => a.indexOf(w) === i);

    host.innerHTML = '';

    const hero = el('div.card.card--hero.result-hero' + (band.g === 'A' ? '.halo' : ''), null,
      el('div.result-grade', { text: band.g }),
      el('div.result-score', { text: r.score + ' / ' + r.total + '  ·  ' + percentage + '%' }),
      el('div.result-note', { text: band.note })
    );
    host.appendChild(hero);

    host.appendChild(el('div.eyebrow', { text: r.title || 'Sesión terminada' }));

    /* --- Missed derivations ----------------------------------------------- */
    if (unique.length) {
      host.appendChild(el('div.muted', { text: 'Estas derivaciones vuelven a aparecer automáticamente hasta que las domines:', style: 'margin-bottom:10px' }));
      const list = el('div.weak-list');
      unique.forEach((k) => {
        const s = WC2.content.skillMeta(k);
        const rec = WC2.store.get('skills')[k] || { box: 0 };
        const pips = el('div.weak__box');
        for (let i = 0; i < 5; i++) pips.appendChild(el('i.weak__pip' + (i < rec.box ? '.is-on' : '')));
        list.appendChild(el('div.weak', null,
          el('div.weak__word', { text: s.a }),
          el('div.weak__stem', { text: '← ' + s.root }),
          el('div.weak__pat', { text: s.p }),
          pips
        ));
      });
      host.appendChild(list);
    } else {
      host.appendChild(el('div.card', null,
        el('div.h3', { text: 'Sin fallos en esta sesión' }),
        el('div.muted', { text: 'Perfecto. Las derivaciones suben de caja y volverán a aparecer más adelante para consolidarse.' })
      ));
    }

    /* --- Next actions ----------------------------------------------------- */
    const actions = el('div.result-actions');
    if (words.length) {
      const contexts = words.reduce((n, w) => n + WC2.content.contextsFor(w).length, 0);
      actions.appendChild(el('button.btn.btn--primary.btn--block', {
        type: 'button',
        onclick: () => WC2.app.startPractice(words)
      }, 'Practicar estas palabras en otros contextos'));
      actions.appendChild(el('div.tiny', {
        style: 'margin:-2px 0 8px; text-align:center',
        text: contexts + ' frases distintas disponibles para estas ' + words.length + ' palabras'
      }));
      actions.appendChild(el('button.btn.btn--ghost.btn--block', {
        type: 'button',
        onclick: () => WC2.app.go('mistakes')
      }, 'Ver mi lista de errores'));
    } else if (unique.length) {
      actions.appendChild(el('button.btn.btn--primary.btn--block', {
        type: 'button',
        onclick: () => WC2.app.startDrill({ n: Math.max(8, unique.length * 2), keys: unique })
      }, 'Practicar estas derivaciones ahora'));
    }
    actions.appendChild(el('button.btn.btn--ghost.btn--block', {
      type: 'button',
      onclick: () => (r.kind === 'exam' ? WC2.app.startExam() : WC2.app.startDrill({ n: 15 }))
    }, r.kind === 'exam' ? 'Otro texto' : 'Otra ronda'));
    actions.appendChild(el('button.btn.btn--quiet.btn--block', {
      type: 'button',
      onclick: () => WC2.app.go('home')
    }, 'Volver al inicio'));
    host.appendChild(actions);

    /* --- Session footer --------------------------------------------------- */
    const ov = WC2.srs.overview(WC2.content.allKeys());
    host.appendChild(el('div.tiles', { style: 'margin-top:18px' },
      el('div.tile', null, el('b', { text: ov.readiness + '%' }), el('span', { text: 'hacia Grade A' })),
      el('div.tile', null, el('b', { text: String(WC2.store.liveStreak()) }), el('span', { text: 'días seguidos' })),
      el('div.tile', null, el('b', { text: String(WC2.store.todayCount()) }), el('span', { text: 'huecos hoy' }))
    ));
  }

  WC2.ui = WC2.ui || {};
  WC2.ui.result = { render, title: 'Resultado', immersive: true };
}(window.WC2));
