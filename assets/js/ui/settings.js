/**
 * Settings screen.
 *
 * Deliberately harmless: there is nothing on this screen that can destroy
 * months of progress with a mis-tap. No export, no import, no reset — the only
 * destructive-looking control, "Desvincular", touches neither the local data
 * nor the cloud copy.
 */
(function (WC2) {
  'use strict';
  const { el } = WC2.util;

  let unsubscribeSync = null;

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

  /* ------------------------------------------------------------ Sync --- */

  function copy(text, label) {
    const done = () => WC2.toast((label || 'Código') + ' copiado', 'good');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, () => WC2.toast('No se pudo copiar'));
      return;
    }
    /* Older iOS standalone: a hidden field is the only thing that works. */
    const tmp = el('input', { value: text, style: 'position:fixed;opacity:0' });
    document.body.appendChild(tmp);
    tmp.select();
    try { document.execCommand('copy'); done(); } catch (err) { WC2.toast('No se pudo copiar'); }
    tmp.remove();
  }

  function ago(ts) {
    if (!ts) return 'nunca';
    const mins = Math.floor((Date.now() - ts) / 60000);
    if (mins < 1) return 'recién';
    if (mins < 60) return 'hace ' + mins + ' min';
    const hours = Math.floor(mins / 60);
    if (hours < 24) return 'hace ' + hours + ' h';
    return 'hace ' + Math.floor(hours / 24) + ' días';
  }

  function syncStatusText(s) {
    if (s.phase === 'syncing') return 'Sincronizando…';
    if (s.phase === 'error') return (s.error || 'Error') + ' · se reintenta solo';
    if (s.dirty) return 'Cambios sin subir';
    return 'Al día · última vez ' + ago(s.lastAt);
  }

  /** The code, shown big enough to copy onto another device by hand. */
  function codeSheet(code) {
    const pretty = WC2.sync.formatCode(code);
    WC2.sheet.open(el('div', null,
      el('div.h3', { text: 'Tu código de sincronización' }),
      el('div.muted', { style: 'margin-top:6px', text: 'Guardalo. Es la única llave de tu progreso: quien lo tenga, ve y modifica tus datos.' }),
      el('div.sync-code.sync-code--big', { text: pretty }),
      el('div.tiny', { style: 'text-align:center;color:var(--fg-mute)', text: 'En el otro dispositivo: Ajustes → Sincronización → Ya tengo un código' }),
      el('div.actions', { style: 'margin-top:18px' },
        el('button.btn.btn--primary.btn--block', { type: 'button', text: 'Copiar código', onclick: () => copy(pretty) }),
        el('button.btn.btn--quiet.btn--block', { type: 'button', text: 'Listo', onclick: () => WC2.sheet.close() })
      )
    ));
  }

  /** Two doors: start a new cloud record, or join one that already exists. */
  function linkSheet() {
    const input = el('input.sync-input', {
      type: 'text', autocomplete: 'off', autocapitalize: 'characters',
      spellcheck: 'false', placeholder: 'XXXX-XXXX-XXXX-XXXX',
      'aria-label': 'Código de sincronización'
    });

    const create = el('button.btn.btn--primary.btn--block', { type: 'button', text: 'Crear un código nuevo' });
    const join = el('button.btn.btn--ghost.btn--block', { type: 'button', style: 'margin-top:10px', text: 'Vincular este dispositivo' });

    function busy(button, on, label) {
      button.disabled = on;
      button.textContent = on ? 'Conectando…' : label;
    }

    create.onclick = () => {
      busy(create, true);
      WC2.sync.create().then(
        () => { WC2.sheet.close(); codeSheet(WC2.sync.status().code); },
        (err) => { busy(create, false, 'Crear un código nuevo'); WC2.toast(err.message || 'No se pudo conectar', 'bad'); }
      );
    };

    join.onclick = () => {
      if (!WC2.sync.validCode(input.value)) { WC2.toast('El código tiene 16 caracteres', 'bad'); return; }
      busy(join, true);
      WC2.sync.link(input.value).then(
        () => { WC2.sheet.close(); WC2.toast('Dispositivo vinculado. Progreso fusionado.', 'good'); WC2.app.go('settings', null, { replace: true }); },
        (err) => { busy(join, false, 'Vincular este dispositivo'); WC2.toast(err.message || 'No se pudo conectar', 'bad'); }
      );
    };

    WC2.sheet.open(el('div', null,
      el('div.h3', { text: 'Sincronizar dispositivos' }),
      el('div.muted', { style: 'margin-top:6px', text: 'Un código, sin cuenta ni contraseña. Empezá por el dispositivo que tiene tu progreso al día — normalmente el celular.' }),
      el('div', { style: 'margin-top:18px' }, create),
      el('div.sync-or', { text: 'o' }),
      el('div.muted', { style: 'margin-bottom:8px', text: 'Ya tengo un código' }),
      input,
      join
    ));
  }

  function syncCard() {
    if (!WC2.sync.configured()) {
      return el('div.card', null,
        el('div.h3', { text: 'Sincronización sin configurar' }),
        el('div.muted', { style: 'margin-top:6px', text: 'Falta conectar la app con su base de datos. Los pasos están en docs/sync.md del repositorio; son cinco minutos y una sola vez.' })
      );
    }

    const s = WC2.sync.status();

    if (!s.enabled) {
      return el('div.set-list', null,
        el('button.set-row', { type: 'button', onclick: linkSheet },
          el('div.set-row__t', null,
            el('b', { text: 'Sincronizar mis dispositivos' }),
            el('span', { text: 'Tu progreso, igual en el celular y en la compu. Sin cuenta: un código y listo.' })
          ),
          el('span.chip.chip--azure', { text: 'Activar' })
        )
      );
    }

    return el('div.set-list', null,
      el('button.set-row', { type: 'button', onclick: () => copy(s.pretty) },
        el('div.set-row__t', null,
          el('b', { text: 'Código de sincronización' }),
          el('span.sync-code', { text: s.pretty })
        ),
        el('span.chip', { text: 'Copiar' })
      ),
      el('button.set-row', {
        type: 'button',
        onclick: () => {
          WC2.sync.run({ loud: true }).then(
            () => WC2.toast('Progreso sincronizado', 'good'),
            (err) => WC2.toast(err.message || 'No se pudo sincronizar', 'bad')
          );
        }
      },
        el('span.sync-dot', { 'data-p': s.dirty && s.phase === 'idle' ? 'pending' : s.phase }),
        el('div.set-row__t', null,
          el('b', { text: 'Estado' }),
          el('span', { text: syncStatusText(s) })
        ),
        el('span.chip.chip--azure', { text: 'Sincronizar' })
      ),
      el('button.set-row', {
        type: 'button',
        onclick: () => {
          WC2.sync.unlink();
          WC2.toast('Dispositivo desvinculado. Tu progreso sigue acá.');
        }
      },
        el('div.set-row__t', null,
          el('b', { text: 'Desvincular este dispositivo' }),
          el('span', { text: 'Deja de subir y bajar cambios. No borra nada, ni acá ni en la nube.' })
        ),
        el('span.chip.chip--bad', { text: 'Desvincular' })
      )
    );
  }

  /** Repaints itself whenever a sync starts, finishes or fails. */
  function syncSection() {
    const wrap = el('div');
    const paint = () => { wrap.innerHTML = ''; wrap.appendChild(syncCard()); };
    if (unsubscribeSync) unsubscribeSync();
    unsubscribeSync = WC2.sync.subscribe(() => { if (wrap.isConnected) paint(); });
    paint();
    return wrap;
  }

  /* ---------------------------------------------------------- Render --- */

  function render(host) {
    const stats = WC2.content.stats();
    host.innerHTML = '';

    host.appendChild(el('div.eyebrow', { text: 'Sincronización', style: 'margin-top:14px' }));
    host.appendChild(syncSection());

    host.appendChild(el('div.eyebrow', { text: 'Estudio' }));
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
      el('div.tiny', {
        style: 'margin-top:8px',
        text: WC2.sync.enabled()
          ? 'Funciona sin conexión. Lo que estudiés offline se sube solo al volver la señal.'
          : 'Funciona sin conexión. Todo tu progreso se queda en este dispositivo.'
      })
    ));
  }

  WC2.ui = WC2.ui || {};
  WC2.ui.settings = { render, title: 'Ajustes' };
}(window.WC2));
