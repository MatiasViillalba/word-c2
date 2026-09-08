/**
 * Content registry.
 *
 * Data files call `WC2.content.registerPassages([...])` / `registerDrills([...])`
 * as plain scripts — no modules, no fetch — so the whole bank is present the
 * instant the shell paints, with or without a network.
 *
 * Two complementary formats:
 *   passage — a full Cambridge Part 3 text with eight stems to transform
 *   drill   — one sentence, one stem, one gap: fast, adaptive, SRS-driven reps
 * Both attach every gap to a skill key (`k`), which is what the scheduler
 * actually tracks, and to an affix analysis, which is what the weak-spot and
 * affix screens group by.
 */
(function (WC2) {
  'use strict';

  const passages = [];
  const drills = [];
  const skills = Object.create(null);   /* key -> { k, a, root, p, af, passages, drills } */
  const affixIndex = Object.create(null); /* affix id -> [skill keys] */

  const slug = (s) => String(s).toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);

  /** The scheduler's unit: one stem transformed one way. */
  const keyFor = (item) => item.k || slug(item.root + '-' + item.a);

  function touchSkill(item, key) {
    if (!skills[key]) {
      const info = WC2.affixes.analyse(item.root, item.a, item.af);
      skills[key] = {
        k: key,
        a: item.a,
        root: item.root,
        p: item.p,
        affix: info,
        passages: [],
        drills: []
      };
      info.ids.forEach((id) => {
        (affixIndex[id] || (affixIndex[id] = [])).push(key);
      });
    }
    return skills[key];
  }

  function normalise(item) {
    item.a = String(item.a).toUpperCase();
    item.root = String(item.root).toUpperCase();
    item.k = keyFor(item);
    return item;
  }

  function registerPassages(list) {
    list.forEach((p) => {
      p.gaps.forEach((g) => {
        normalise(g);
        touchSkill(g, g.k).passages.push(p.id);
      });
      p.keys = p.gaps.map((g) => g.k);
      passages.push(p);
    });
  }

  function registerDrills(list) {
    list.forEach((d) => {
      normalise(d);
      touchSkill(d, d.k).drills.push(d.id);
      drills.push(d);
    });
  }

  const allKeys = () => Object.keys(skills);
  const skillMeta = (k) => skills[k] || { k, a: '?', root: '?', p: '', affix: null };
  const passageById = (id) => passages.filter((p) => p.id === id)[0];
  const drillById = (id) => drills.filter((d) => d.id === id)[0];

  /* ------------------------------------------------------------ Picking --- */

  /**
   * Chooses the passage that covers the most urgent derivations, with a mild
   * penalty for texts already completed so the rotation keeps moving.
   */
  function pickPassage(opts) {
    const o = opts || {};
    const done = WC2.store.get('exercises');
    const now = Date.now();
    let best = null, bestScore = -Infinity;

    passages.forEach((p) => {
      if (o.exclude && o.exclude.indexOf(p.id) !== -1) return;
      let score = 0;
      p.keys.forEach((k) => { score += 2.2 - WC2.srs.urgency(k, now); });
      const rec = done[p.id];
      if (rec) {
        score -= 2.6 * rec.attempts;
        if (rec.best >= 8) score -= 3;
        const restedDays = (now - rec.lastAt) / WC2.util.DAY;
        score += Math.min(4, restedDays * 0.35);
      } else {
        score += 1.4;
      }
      score += Math.random() * 0.8;      /* keeps consecutive picks from feeling scripted */
      if (score > bestScore) { bestScore = score; best = p; }
    });

    return best || passages[0];
  }

  /**
   * Builds a drill queue: overdue and weak derivations first, then unseen
   * material, then variety. One item per skill so a session never grinds.
   */
  function pickDrills(n, opts) {
    const o = opts || {};
    const count = n || 12;
    const byKey = Object.create(null);
    drills.forEach((d) => {
      (byKey[d.k] || (byKey[d.k] = [])).push(d);
    });

    let keys = Object.keys(byKey);
    if (o.onlyWeak) keys = WC2.srs.weakKeys(keys);
    if (o.keys) keys = keys.filter((k) => o.keys.indexOf(k) !== -1);
    if (o.affix) keys = keys.filter((k) => skills[k] && skills[k].affix.ids.indexOf(o.affix) !== -1);
    keys = WC2.srs.rank(keys);

    const out = [];
    for (let i = 0; i < keys.length && out.length < count; i++) {
      const pool = byKey[keys[i]];
      out.push(pool[Math.floor(Math.random() * pool.length)]);
    }
    return WC2.util.shuffle(out);
  }

  /* ------------------------------------------- Contexts for one word --- */

  /**
   * Every sentence in the whole bank that tests a given answer: the drills
   * written for it plus one sentence lifted out of each exam passage that
   * contains it. That is what makes mistake practice feel different every time
   * instead of replaying the same card.
   */
  let contextIndex = null;

  /** Pulls the single sentence around a gap, with the other gaps filled in. */
  function sentenceFor(passage, gap) {
    const MARK = String.fromCharCode(0);
    const filled = String(passage.text).replace(/\s+/g, ' ')
      .replace(/\{(\d+)\}/g, (m, n) => {
        const i = Number(n);
        if (i === gap.n) return MARK;
        const other = passage.gaps[i - 1];
        return other ? other.a.toLowerCase() : '…';
      });

    const parts = filled.match(/[^.!?]+[.!?]*/g) || [filled];
    let hit = null;
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].indexOf(MARK) !== -1) { hit = parts[i]; break; }
    }
    if (!hit) return null;

    const s = hit.trim().replace(MARK, '{1}');
    if (s.length < 34) return null;             /* fragmentos sin contexto útil */
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function buildContexts() {
    const idx = Object.create(null);
    const push = (word, item) => { (idx[word] || (idx[word] = [])).push(item); };

    drills.forEach((d) => push(d.a, d));

    passages.forEach((p) => {
      p.gaps.forEach((g) => {
        const s = sentenceFor(p, g);
        if (!s) return;
        push(g.a, {
          id: 'p:' + p.id + ':' + g.n,
          a: g.a,
          root: g.root,
          alt: g.alt,
          k: g.k,
          p: g.p,
          s: s,
          tip: g.tip,
          src: p.title,
          fromPassage: p.id
        });
      });
    });

    contextIndex = idx;
    return idx;
  }

  const contextsFor = (word) => (contextIndex || buildContexts())[String(word).toUpperCase()] || [];

  /**
   * Builds the mistake-practice queue: several *different* sentences per word,
   * interleaved so the same word never comes twice in a row.
   */
  function practiceQueue(words, opts) {
    const o = opts || {};
    const perWord = o.perWord || 3;
    const max = o.max || 30;
    const lanes = [];

    (words || []).forEach((w) => {
      const pool = WC2.util.shuffle(contextsFor(w));
      if (!pool.length) return;

      /* Prefer one sentence per source before repeating a source. */
      const seenSrc = Object.create(null);
      const first = [], rest = [];
      pool.forEach((item) => {
        const s = item.src || '';
        if (seenSrc[s]) rest.push(item); else { seenSrc[s] = 1; first.push(item); }
      });

      /* Nunca se repite una frase: si la palabra tiene menos contextos que los
         pedidos, sencillamente aporta menos ejercicios a la sesión. */
      lanes.push(first.concat(rest).slice(0, perWord));
    });

    const out = [];
    for (let round = 0; round < perWord && out.length < max; round++) {
      for (let i = 0; i < lanes.length && out.length < max; i++) {
        if (lanes[i][round]) out.push(lanes[i][round]);
      }
    }
    return out;
  }

  /* ------------------------------------------ Contexts for one skill --- */

  /** Every sentence that tests one exact derivation (stem *and* answer). */
  function contextsForKey(k) {
    const meta = skills[k];
    if (!meta) return [];
    return contextsFor(meta.a).filter((item) => item.k === k);
  }

  /**
   * Practice built from skill keys rather than bare words. Each weak skill
   * contributes its own sentences first; a skill with only one sentence of its
   * own borrows further contexts of the same word, so a session always has
   * enough material to feel varied.
   */
  function practiceQueueForKeys(keys, opts) {
    const o = opts || {};
    const per = o.perKey || 3;
    const max = o.max || 30;
    const lanes = [];
    const used = Object.create(null);

    (keys || []).forEach((k) => {
      const meta = skills[k];
      if (!meta) return;
      const own = WC2.util.shuffle(contextsForKey(k));
      const spare = WC2.util.shuffle(contextsFor(meta.a).filter((i) => i.k !== k));
      const lane = [];
      own.concat(spare).forEach((item) => {
        if (lane.length >= per || used[item.id]) return;
        used[item.id] = 1;
        lane.push(item);
      });
      if (lane.length) lanes.push(lane);
    });

    const out = [];
    for (let round = 0; round < per && out.length < max; round++) {
      for (let i = 0; i < lanes.length && out.length < max; i++) {
        if (lanes[i][round]) out.push(lanes[i][round]);
      }
    }
    return out;
  }

  /* --------------------------------------------------- Affix reporting --- */

  /** The family a derivation belongs to, for grouping weak spots. */
  const groupOf = (k) => {
    const meta = skills[k];
    return meta && meta.affix ? meta.affix.group : WC2.affixes.GROUPS[WC2.affixes.GROUPS.length - 1];
  };

  const keysForAffix = (id) => affixIndex[id] || [];

  /**
   * Live coverage for one affix: how many derivations in the bank use it, how
   * many the learner has met, and how many are actually mastered. This is what
   * turns the affix catalogue into a syllabus rather than a glossary.
   */
  function affixStats(id) {
    const keys = keysForAffix(id);
    const store = WC2.store.get('skills');
    let seen = 0, mastered = 0, wrong = 0;
    keys.forEach((k) => {
      const rec = store[k];
      if (!rec || rec.seen === 0) return;
      seen += 1;
      wrong += rec.wrong;
      if (rec.box >= WC2.srs.MASTER_BOX) mastered += 1;
    });
    return {
      id,
      total: keys.length,
      seen,
      mastered,
      wrong,
      coverage: keys.length ? Math.round((mastered / keys.length) * 100) : 0
    };
  }

  /** Every affix the bank actually uses, richest first. */
  function affixCatalogue() {
    return WC2.affixes.all()
      .filter((a) => keysForAffix(a.id).length > 0)
      .map((a) => ({ affix: a, stats: affixStats(a.id) }))
      .sort((x, y) => y.stats.total - x.stats.total);
  }

  /** A few example derivations for an affix, for the explorer card. */
  function affixExamples(id, n) {
    return WC2.util.shuffle(keysForAffix(id))
      .slice(0, n || 3)
      .map((k) => skills[k]);
  }

  const weakSkills = (limit) => WC2.srs.weakKeys(allKeys(), limit).map(skillMeta);

  function stats() {
    return {
      passages: passages.length,
      drills: drills.length,
      gaps: passages.reduce((n, p) => n + p.gaps.length, 0) + drills.length,
      skills: allKeys().length,
      roots: Object.keys(allKeys().reduce((acc, k) => { acc[skills[k].root] = 1; return acc; }, {})).length,
      affixes: affixCatalogue().length
    };
  }

  WC2.content = {
    passages, drills, skills, affixIndex,
    registerPassages, registerDrills,
    allKeys, skillMeta, passageById, drillById,
    pickPassage, pickDrills, weakSkills, stats, slug,
    contextsFor, practiceQueue,
    contextsForKey, practiceQueueForKeys,
    groupOf, keysForAffix, affixStats, affixCatalogue, affixExamples
  };
}(window.WC2));
