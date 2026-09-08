/**
 * Build identity. `BUILD` is bumped on every release and is also used as the
 * service-worker cache namespace, so shipping a new value transparently
 * invalidates every stale asset on the device.
 */
window.WC2 = window.WC2 || {};
window.WC2.APP_NAME = 'Word C2';
window.WC2.VERSION = '1.1.0';
window.WC2.BUILD = '2026.09.08.3';
