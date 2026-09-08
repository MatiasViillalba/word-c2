/**
 * Settings screen.
 *
 * Deliberately harmless: there is nothing on this screen that can destroy
 * months of progress with a mis-tap. No export, no import, no reset — the
 * study data simply lives on the device.
 */
(function (WC2) {
  'use strict';
  const { el } = WC2.util;

  function toggleRow(title, sub, key) {
    const settings = WC2.store.get('settings');
    const sw = el('div.switch' + (settings[key] ? '.is-on' : ''));
    const row = el('button.set-row', { type: 'button' },
      el('div.set-row__t', null, el('b', { text: title }), el('span', { text: sub })),
      sw
    );
    row.onclick = () => {
      WC2.store.update((s) => { s.settings[key] = !s.settings[key]; });
      sw.classList.toggle('is-on');
      WC2.store.flush();
    };
    return row;
  }

  function segRow(title, sub, key, options, onChange) {
    const settings = WC2.store.get('settings');
    const seg = el('div.seg');
    options.forEach((opt) => {
      const b = el('button' + (settings[key] === opt.value ? '.is-active' : ''), { type: 'button', text: opt.label });
      b.onclick = () => {
        WC2.store.update((s) => { s.settings[key] = opt.value; });
        WC2.store.flush();
        Array.prototype.forEach.call(seg.children, (c) => c.classList.remove('is-active'));
        b.classList.add('is-active');
        if (onChange) onChange(opt.value);
      };
      seg.appendChild(b);
    });
    return el('div.set-row', null,
      el('div.set-row__t', null, el('b', { text: title }), el('span', { text: sub })),
      seg
    );
  }

  /**
   * Text size: two A buttons that nudge one step per tap, with a live sample
   * underneath so the effect is visible without leaving the screen.
   */
  function textSizeRow() {
    const { SCALE_MIN, SCALE_MAX, SCALE_STEP, clamp } = WC2.util;
    const sample = el('div.type-sample', {
      text: 'The scale of the response was unprecedented in the institution history.'
    });
    const readout = el('span.type-size__n');
    const smaller = el('button.type-size__btn.type-size__btn--sm', { type: 'button', 'aria-label': 'Achicar texto' }, 'A');
    const bigger = el('button.type-size__btn.type-size__btn--lg', { type: 'button', 'aria-label': 'Agrandar texto' }, 'A');

    function paint(scale) {
      readout.textContent = Math.round(scale * 100) + '%';
      smaller.disabled = scale <= SCALE_MIN + 0.001;
      bigger.disabled = scale >= SCALE_MAX - 0.001;
    }

    function nudge(delta) {
      let next = 1;
      WC2.store.update((s) => {
        next = clamp((Number(s.settings.textScale) || 1) + delta, SCALE_MIN, SCALE_MAX);
        s.settings.textScale = next;
      });
      WC2.store.flush();
      WC2.util.applyTextScale(next);
      WC2.util.haptic('tap');
      paint(next);
    }

    smaller.onclick = () => nudge(-SCALE_STEP);
    bigger.onclick = () => nudge(SCALE_STEP);
    paint(WC2.util.applyTextScale(WC2.store.get('settings').textScale));

    return el('div.set-row.set-row--stack', null,
      el('div.row.row--between', null,
        el('div.set-row__t', null,
          el('b', { text: 'Tamaño del texto' }),
          el('span', { text: 'Un toque = un paso. Afecta a textos, ejercicios, raíces y explicaciones.' })
        ),
        el('div.type-size', null, smaller, readout, bigger)
      ),
      sample
    );
  }

  function render(host) {
    const stats = WC2.content.stats();
    host.innerHTML = '';

    host.appendChild(el('div.eyebrow', { text: 'Estudio', style: 'margin-top:14px' }));
    host.appendChild(el('div.set-list', null,
      segRow('Objetivo diario', 'Huecos por día para mantener la racha', 'dailyGoal', [
        { label: '12', value: 12 }, { label: '24', value: 24 }, { label: '40', value: 40 }
      ]),
      toggleRow('Mostrar pistas', 'Activa el botón de pistas dentro de los textos', 'showTips'),
      toggleRow('Lista de raíces', 'Repite las ocho palabras raíz debajo del texto, como en el examen impreso', 'showStemKey'),
      toggleRow('Vibración', 'Respuesta háptica al corregir (Android; iOS la ignora)', 'haptics')
    ));

    host.appendChild(el('div.eyebrow', { text: 'Lectura' }));
    host.appendChild(el('div.set-list', null, textSizeRow()));

    host.appendChild(el('div.eyebrow', { text: 'Errores y sistema' }));
    const wc = WC2.words.counts();
    const trouble = WC2.srs.troubleKeys(WC2.content.allKeys()).length;
    host.appendChild(el('div.set-list', null,
      el('button.set-row', { type: 'button', onclick: () => WC2.app.go('mistakes') },
        el('div.set-row__t', null,
          el('b', { text: 'Mis palabras falladas' }),
          el('span', { text: wc.pending + ' en práctica · ' + wc.learned + ' marcadas como aprendidas' })
        ),
        el('span.chip.chip--azure', { text: 'Abrir' })
      ),
      el('button.set-row', { type: 'button', onclick: () => WC2.app.go('weak') },
        el('div.set-row__t', null,
          el('b', { text: 'Puntos débiles' }),
          el('span', { text: trouble + ' derivaciones al 0% o con fallos, agrupadas por familia de afijos' })
        ),
        el('span.chip.chip--azure', { text: 'Abrir' })
      ),
      el('button.set-row', { type: 'button', onclick: () => WC2.app.go('affixes') },
        el('div.set-row__t', null,
          el('b', { text: 'Mapa de afijos' }),
          el('span', { text: stats.affixes + ' familias de prefijos y sufijos, con tu cobertura en cada una' })
        ),
        el('span.chip.chip--azure', { text: 'Abrir' })
      )
    ));

    /* Sin exportar, importar ni borrar: un toque accidental no puede tirar
       abajo el progreso de meses. Los datos viven en este dispositivo. */

    if (!WC2.store.available) {
      host.appendChild(el('div.card', { style: 'margin-top:12px;border-color:rgba(255,194,75,.35)' },
        el('div.h3', { text: 'Modo privado detectado' }),
        el('div.muted', { text: 'Este navegador no deja guardar datos, así que el progreso se pierde al cerrar. Instalá la app en la pantalla de inicio para que se conserve.' })
      ));
    }

    host.appendChild(el('div.about', null,
      el('div.about__logo', { text: 'W' }),
      el('div.h3', { text: WC2.APP_NAME }),
      el('div.tiny', { style: 'margin-top:4px', text: 'v' + WC2.VERSION + ' · build ' + WC2.BUILD }),
      el('div.tiny', { style: 'margin-top:8px', text: stats.passages + ' textos · ' + stats.drills + ' ejercicios rápidos · ' + stats.skills + ' derivaciones · ' + stats.roots + ' raíces · ' + stats.affixes + ' afijos' }),
      el('div.tiny', { style: 'margin-top:8px', text: 'Funciona sin conexión. Todo tu progreso se queda en este dispositivo.' })
    ));
  }

  WC2.ui = WC2.ui || {};
  WC2.ui.settings = { render, title: 'Ajustes' };
}(window.WC2));
