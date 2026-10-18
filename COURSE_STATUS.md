# Course status

Last updated: 2026-10-18 (Africa/Tunis)

## Actual content counts

Counts come from actual source files, not the curriculum map: **13 complete lesson files out of 54** (L01–L12 and L27), **1 complete A1 foundations checkpoint draft** for Chapters 1–3, **2 grammar references** (cases and past narration), and **34 structured verb entries**. Structural presence does not replace editorial review.

## Plan audit

| Plan requirement | Present now | Still needed |
|---|---|---|
| 18 chapters / 54 lessons | Chapter map and navigation for all 54; 13 complete sources | Write 41 lessons and complete each chapter sequentially |
| Full lesson structure | All 13 sources have original text, comprehension, contextual vocabulary, grammar, varied practice, two-way translation, original production, writing, speaking, listening/pronunciation, review and explained solutions | Preserve standard; carry out whole-course editorial/language review |
| Assessments | Checkpoint 01 covers Chapters 1–3, including reading, grammar, vocabulary, production and topic-based next steps | Diagnostic, Checkpoints 02–06, B1 readiness and B2 transition assessments |
| Grammar library | Four-case reference and a past-narration guide for Perfekt, Präteritum, als/wenn | Expand to full linked A1–B1 coverage |
| Verb, vocabulary, expressions | 34 searchable structured principal-part records for L10–L12; lesson-local vocabulary | Expand searchable verb atlas across A1–B1; build thematic vocabulary and expressions libraries |
| Website and learner tools | Eleventy static HTML, responsive base, chapter/lesson navigation, native answer reveals, browser-local completion, progress export/import, mistake-list page, curriculum and verb search | Flashcards, exercise grading with open-answer guidance, mistake capture/filter/review, complete reference search |
| Print | A4 CSS, shared lesson source, Chapter 1–4 pages, print-ready 34-entry verb edition | Render and inspect actual PDFs, complete handbook editions, separately collated solutions |
| Deployment | GitHub Actions run [39168678951](https://github.com/dark11957/GermanB1/actions/runs/39168678951) passed build, validator and Pages deployment for `c5575fb`; L10–L12, past-narration reference, verb atlas, Chapter 4 print, verb print and print hub all returned HTTP 200 | Inspect desktop/mobile and actual PDFs when a browser/PDF renderer is available |
| Authoritative sources | Duden case, noun, preposition, Perfekt, verb class and als/wenn pages checked on 2026-10-18 | Verify CEFR/Goethe benchmarks, learning research, DW listening approach and current telc format before using them |

## Completed in this batch

- Authored L10 (Perfekt and participles), L11 (Präteritum of *sein, haben*, modal and common strong verbs), and L12 (temporal/conditional *als, wenn,* and *wann*).
- Each A2 reading is 151–181 words; each lesson has 16 contextual vocabulary entries and 14–15 individually answerable exercises with explanations, model translations, productive assignments and listening scripts.
- Added a 34-entry structured verb reference with principal parts, auxiliary, pattern, level-by-lesson linkage and contextual example; it is searchable with all entries available in static HTML.
- Added the past-narration grammar reference, links from lesson/reference pages, a printable verb edition and Chapter 4 print route.
- Verified key grammar claims against Duden; source record is in `SOURCES.md`.

## Validation results

- Static lesson scan: **13/13** source files contain all twelve required lesson sections and at least twelve second-level sections.
- Chapter 4 content scan: reading texts **151, 181 and 168 words**; **16** vocabulary rows each; **15, 14 and 14** exercise items; 34 verb entries are unique.
- Source symlinks exist for L10–L12 and both grammar reference pages. `git diff --check` passed before staging.
- Eleventy build, automated validator and deployment: **passed remotely** for `c5575fb` in run 39168678951. The CI validation command checked lesson sections, identifiers, source links, A1–B1 reading lengths, exercise counts and verb-entry uniqueness. Node/npm are not installed locally, so the commands could not be repeated in this workspace.
- Live checks after deployment: L10–L12, the past-narration guide, verb atlas, Chapter 4 print route, verb print route and print hub returned HTTP 200. The verb atlas rendered all 34 table entries and repository-subpath lesson links.
- Browser layout and actual PDF checks: unavailable here; print routes are HTML and no PDF is claimed verified.

## Known issues

- 41 lesson sources remain. Chapter 9 has only L27; Chapters 5–8 and 10–18 have no lesson sources.
- The verb table is an initial searchable A2 subset, not full atlas coverage. The full vocabulary and expressions libraries remain incomplete.
- Exercise grading, flashcards and mistake capture/review are unfinished. Open-ended work uses models and rubrics, not exact-match scoring.
- Actual PDF output, answer visibility and desktop/mobile visual presentation have not been inspected in a browser renderer. A separately organized solutions edition is unfinished.
- Diagnostic, later checkpoints, B1/B2 assessments and current telc details remain to be authored or verified.

## Exact next action

Author Chapter 5, L13–L15 (reflexive verbs, adjective declension basics, comparisons) with its vocabulary and grammar-reference entries; then proceed to Chapter 6 and Checkpoint 02 after Chapters 4–6 are complete.
