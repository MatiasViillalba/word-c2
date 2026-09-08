/**
 * Cloud sync endpoint.
 *
 * Empty by default: with no values here the app behaves exactly as it always
 * has — everything local, nothing ever leaves the device, and the Ajustes
 * screen simply explains how to turn sync on.
 *
 * Both values below are *publishable* credentials. The anon key is designed to
 * ship inside client code: it grants nothing on its own. The database revokes
 * all table access from it and exposes only two functions, and both demand the
 * 16-character sync code, which lives on your devices and is never committed.
 *
 * The project can be shared with Cloze C2: the tables and functions used here
 * are prefixed `wc2_`, so the two apps never touch each other's rows.
 *
 * Setup lives in docs/sync.md; the SQL is scripts/supabase-setup.sql.
 */
window.WC2 = window.WC2 || {};
window.WC2.SYNC_CONFIG = {
  url: 'https://mhkvfqlmacpkfzcwfymx.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oa3ZmcWxtYWNwa2Z6Y3dmeW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4NjU1OTgsImV4cCI6MjEwNDQ0MTU5OH0.kQzs7XzClk2rec4QstJlJs0r6OrsuKg1C7ZWbucN8nE'
};
