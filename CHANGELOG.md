# Changelog

All notable changes to this project are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and
the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-09-08

First release. An installable, offline-first trainer for the Word Formation
section of the Cambridge C2 Proficiency and C1 Advanced exams.

### Added

**Content**
- 65 original Part 3 passages, eight gaps each, each gap supplying the stem the
  answer must be built from (520 exam gaps).
- 991 single-gap drill sentences.
- 1,175 distinct derivations over 862 stems, from C1 Advanced through C2
  Proficiency, each with a Spanish explanation of why the answer takes the shape
  it does.
- Full coverage of the learner's own 598-derivation list, enforced by a test
  that reads `docs/word-list.md` and fails the build on a single omission.

**Morphology engine**
- A catalogue of 98 affix families: what each prefix and suffix does, which part
  of speech it yields, and worked examples.
- An analyser that reads an unseen STEM → ANSWER pair back into the affixes that
  built it, handling assimilated prefixes, stacked affixes, inflected forms,
  compounds and irregular stems.
- Per-item override (`af`) so the data can beat the heuristic where it must:
  locative IN- in INSIGHT and INTAKE, adjectival -ANT in ABUNDANT, the bare A-
  of APACE.

**Learning engine**
- Leitner scheduling over derivations rather than over words, so ACCESS →
  ACCESSIBLE and ACCESS → INACCESSIBLE are tracked apart.
- Six boxes with 0/1/2/4/9/21-day intervals; a correct answer promotes one box,
  a miss demotes two.
- In-session lapse queue: a missed drill returns three cards later.
- Urgency-based selection for drills, passages and single affix families.
- Cambridge-style bands (A / B / C / C1) instead of bare percentages.
- A composite Grade A readiness score — coverage 45%, Leitner solidity 40%,
  accuracy 15% — that moves from the first session without reaching 90 until the
  bank is genuinely covered.

**Interface**
- Ten screens: home dashboard, exam, drill, result, mistake book, weak spots,
  library, affix explorer, progress and settings.
- Inline gap inputs with the stem riding in a dashed chip immediately after each
  one, lighting up when its gap takes focus — the phone equivalent of the margin
  on a printed paper.
- Weak spots grouped by affix family rather than by word, so eleven misses read
  as one diagnosis instead of eleven problems.
- An affix explorer that turns the catalogue into a syllabus with live coverage,
  where every row is a one-tap session.
- Progress screen with a twelve-week activity heatmap, the Leitner distribution,
  per-family coverage bars and a per-derivation accuracy table.
- Cobalt design system: blue-black canvas, electric cobalt accent, system
  typography for the interface and a serif for exam prose.
- Adjustable reading size on a continuous scale, daily goal and streak tracking.

**Platform**
- Full offline support: the service worker precaches the entire 53-file asset
  graph on install and serves cache-first.
- Installable to the iOS home screen with a standalone display mode, safe-area
  handling and an opaque 180×180 touch icon.
- Manifest shortcuts for the smart session, the mistake review and the affix map.

**Tooling**
- 62 tests covering content integrity, the morphology engine, scheduler
  behaviour, the coverage contract and a full end-to-end interface walkthrough
  in jsdom.
- A syntax checker that also fails when a shipped file is missing from the
  service worker precache list.
- A coverage report that prints bank size and any gap against the source list.
- Dependency-free static server and PowerShell icon generator.
- GitHub Pages deployment workflow.

[1.0.0]: https://github.com/MatiasViillalba/word-c2/releases/tag/v1.0.0
