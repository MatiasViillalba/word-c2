/**
 * Mistake book, at the level of the *word*.
 *
 * The Leitner scheduler in srs.js tracks a stem bound to one derivation. That
 * is the right unit for scheduling, but it is not the unit the learner thinks
 * in: "I keep getting INSURMOUNTABLE wrong" is about the word, wherever it
 * turns up. This module keeps a second, much simpler ledger keyed by the answer
 * itself, so a miss anywhere in the app (an exam gap or a drill) can be
 * practised afterwards across many different sentences.
 *
 * Two buttons drive it, and nothing else:
 *   "Aprendido" -> learned = true  : never appears in mistake practice again
 *   "Aún no"    -> learned = false : keeps coming back until the learner says so
 */
(function (WC2) {
  'use strict';

  const key = (w) => String(w == null ? '' : w).trim().toUpperCase();

  function bank() {
    const state = WC2.store.get();
    if (!state.words) state.words = {};
    return state.words;
  }

  function rec(word) {
    const b = bank();
    const k = key(word);
    if (!b[k]) b[k] = { w: k, wrong: 0, right: 0, streak: 0, learned: false, lastAt: 0, firstAt: 0 };
    return b[k];
  }

  /** A gap answered wrong: the word enters (or re-enters) the mistake book. */
  function miss(word) {
    if (!key(word)) return;
    WC2.store.update(() => {
      const r = rec(word);
      r.wrong += 1;
      r.streak = 0;
      r.learned = false;          /* fallar la reactiva aunque estuviera marcada */
      r.lastAt = Date.now();
      if (!r.firstAt) r.firstAt = Date.now();
    });
  }

  /** A gap answered right. Only words already in the book are counted. */
  function hit(word) {
    const k = key(word);
    if (!k || !bank()[k]) return;
    WC2.store.update(() => {
      const r = rec(k);
      r.right += 1;
      r.streak += 1;
      r.lastAt = Date.now();
    });
  }

  function grade(word, correct) {
    if (correct) hit(word); else miss(word);
  }

  const isTracked = (w) => !!bank()[key(w)];
  const info = (w) => bank()[key(w)] || null;
  const accuracy = (r) => {
    const n = r.right + r.wrong;
    return n ? Math.round((r.right / n) * 100) : 0;
  };

  /** Words still to be practised: missed at least once and not marked learned. */
  function pending() {
    const b = bank();
    return Object.keys(b)
      .map((k) => b[k])
      .filter((r) => r.wrong > 0 && !r.learned)
      .sort((a, b2) => (accuracy(a) - accuracy(b2)) || (b2.wrong - a.wrong) || (b2.lastAt - a.lastAt));
  }

  /** Words the learner has personally declared mastered. */
  function learned() {
    const b = bank();
    return Object.keys(b)
      .map((k) => b[k])
      .filter((r) => r.learned)
      .sort((a, b2) => b2.lastAt - a.lastAt);
  }

  function setLearned(word, value) {
    WC2.store.update(() => {
      const r = rec(word);
      r.learned = !!value;
      r.mark = value ? 'yes' : 'no';   /* pinta el botón: verde o rojo */
      r.lastAt = Date.now();
      if (!value) r.streak = 0;   /* "aún no" la devuelve al circuito de práctica */
    });
    WC2.store.flush();
  }

  /** 'yes' | 'no' | null — lo que decidió el alumno sobre esta palabra. */
  const markOf = (w) => {
    const r = info(w);
    if (!r) return null;
    return r.mark || (r.learned ? 'yes' : null);
  };

  /* ------------------------------------------------ Marks by derivation --- */

  /**
   * The same two buttons, but for a *skill* (stem + derivation) rather than a
   * bare word. The Puntos débiles screen works at this finer grain: ACCESS →
   * ACCESSIBLE can be retired without retiring ACCESS → INACCESSIBLE.
   */
  function marks() {
    const state = WC2.store.get();
    if (!state.marks) state.marks = {};
    return state.marks;
  }

  const skillMark = (k) => (marks()[k] || {}).mark || null;
  const skillLearned = (k) => skillMark(k) === 'yes';

  function setSkillLearned(k, value) {
    WC2.store.update(() => {
      marks()[k] = { mark: value ? 'yes' : 'no', at: Date.now() };
    });
    WC2.store.flush();
  }

  /** A gentle nudge: three clean reps in a row and it is probably learned. */
  const looksLearned = (w) => {
    const r = info(w);
    return !!r && !r.learned && r.streak >= 3;
  };

  function counts() {
    const b = bank();
    const keys = Object.keys(b);
    return {
      tracked: keys.length,
      pending: keys.filter((k) => b[k].wrong > 0 && !b[k].learned).length,
      learned: keys.filter((k) => b[k].learned).length
    };
  }

  WC2.words = {
    miss, hit, grade, pending, learned, setLearned, looksLearned, markOf,
    isTracked, info, accuracy, counts, key,
    skillMark, skillLearned, setSkillLearned
  };
}(window.WC2));
