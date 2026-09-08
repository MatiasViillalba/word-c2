/** Transient feedback: toasts and the bottom sheet. */
(function (WC2) {
  'use strict';
  const { $, el } = WC2.util;

  function toast(message, kind) {
    const host = $('#toastHost');
    if (!host) return;
    const node = el('div.toast', { text: message });
    if (kind) node.classList.add('toast--' + kind);
    host.appendChild(node);
    setTimeout(() => {
      node.classList.add('is-out');
      setTimeout(() => node.remove(), 200);
    }, 2200);
  }

  const sheet = {
    open(content) {
      const wrap = $('#sheet');
      const body = $('#sheetBody');
      body.innerHTML = '';
      body.appendChild(content);
      wrap.hidden = false;
      wrap.querySelector('[data-close]').onclick = sheet.close;
    },
    close() { $('#sheet').hidden = true; }
  };

  WC2.toast = toast;
  WC2.sheet = sheet;
}(window.WC2));
