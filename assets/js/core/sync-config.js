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
 * This app has its own Supabase project. The tables and functions it uses are
 * prefixed `wc2_` all the same, so the schema could also live alongside Cloze
 * C2 without the two ever touching each other's rows.
 *
 * Setup lives in docs/sync.md; the SQL is scripts/supabase-setup.sql.
 */
window.WC2 = window.WC2 || {};
window.WC2.SYNC_CONFIG = {
  url: 'https://lyxrfozxlkuzqkyavzks.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eHJmb3p4bGt1enFreWF2emtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4NzY4MjcsImV4cCI6MjEwNDQ1MjgyN30.p75ckOzVQeQxIjVeqMj6lE3Hpqse8Ff1WeNB3KXov6M'
};
