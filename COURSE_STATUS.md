# Course status

Last updated: 2026-10-18 (Africa/Tunis)

## Actual content counts

Counts come from source files rather than the curriculum map: **10 complete lesson files out of 54 planned** (L01–L09 and L27), **1 complete A1 foundations checkpoint draft** for Chapters 1–3, and **1 standalone grammar reference** (four cases). Structural completeness does not substitute for a full editorial audit.

## Plan audit

| Plan requirement | Present now | Still needed |
|---|---|---|
| 18 chapters / 54 lessons | Metadata and navigation for all planned lessons; 10 full lesson sources | Write 44 lessons; finish and check chapters sequentially |
| Full lesson structure | All ten lesson files include original text/dialogue, comprehension, contextual vocabulary, grammar, varied exercises, translation, original production, writing, speaking, listening/pronunciation, revision and solutions | Preserve the standard and review earlier lessons in final quality assurance |
| Assessments | Checkpoint 01 reviews Chapters 1–3 with grammar, vocabulary, reading, sentence construction, writing/speaking and topic guidance | Diagnostic, Checkpoints 02–06, B1 readiness and B2 transition assessments |
| Grammar library | Four-case reference; L01–L09 teach planned foundation topics | Expand into the complete linked A1–B1 grammar handbook |
| Verb, vocabulary, expressions references | Lesson-local vocabulary and verb patterns | Searchable verb atlas, thematic vocabulary and expressions libraries, metadata and lesson cross-links |
| Website and learner tools | Eleventy static HTML; responsive layout; 54-item course map; authored lesson navigation; native answer reveals; browser-local completion; progress export/import; mistake-list view | Full library search; interactive exercise grading and open-answer guidance; flashcards; mistake capture/filter/review |
| Print | A4 stylesheet; shared Markdown lesson sources; authored textbook view and Chapter 1–3 exports; answer reveal rules for `.solution` blocks | Build and inspect actual PDFs; confirm tables/page breaks/German glyphs; complete reference editions and separately organized solution key |
| Deployment | Pages site works at `https://dark11957.github.io/GermanB1/`; workflow run [39156230197](https://github.com/dark11957/GermanB1/actions/runs/39156230197) passed build and deploy for commit `c37cad2`; all new lessons, the case reference, Checkpoint 01, and Chapter 1–3 print routes returned HTTP 200 | Browser visual and PDF checks remain |
| References | Duden case, noun and preposition pages checked for this batch on 2026-10-18 | Verify CEFR/Goethe benchmarks, research reference, DW listening approach and current telc format before related content is authored |

## Completed in this batch

- Authored Chapter 2: L04 (accusative), L05 (dative), and L06 (two-object verbs).
- Authored Chapter 3: L07 (modals, separable verbs, imperative), L08 (time and common prepositions), and L09 (two-way prepositions and location/destination).
- Added original comprehension, 15 contextual vocabulary items in each new Chapter 3 lesson, 12–14 varied practice items per lesson, model translations, productive work, partner activities, listen-and-check scripts, and explained solutions.
- Completed Checkpoint 01's Chapters 1–3 assessment draft; it is explicitly a self-assessment, not an official CEFR score.
- Added dynamic navigation for authored lesson files, Chapter 2 and 3 print routes, and the four-case grammar handbook page.
- Recorded the Duden source checks in `SOURCES.md`.

## Validation results

- Structural scan (Python, 2026-10-18): **10/10** lesson sources contain all twelve required section labels and at least twelve second-level sections.
- Chapter 3 content scan: reading texts 125–140 words, 15 vocabulary rows, and 12–14 exercise items per lesson; listening transcripts are behind native reveal controls.
- Checkpoint scan: numbered items 1–42 are present; answer explanations and a topic-based next-step profile are included.
- Eleventy build and Pages deploy: **passed remotely** in GitHub Actions for `c37cad2` (run 39156230197). `npm install`, `npm run build`, artifact upload, and `actions/deploy-pages` all succeeded. Local Node.js/npm are not installed, so `npm run validate` was not run here.
- Browser desktop/mobile and actual PDF inspection: unavailable here. Print routes are HTML for A4 browser printing; no PDF is claimed as verified.
- Live route checks after deployment: home, chapter index, L04–L09, case reference, Checkpoint 01, and Chapter 1–3 print routes all returned HTTP 200. L09 and Chapter 3 print output contained the expected headings.

## Known issues

- 44 lesson sources remain. Chapter 9 has L27; Chapters 4–8 and 10–18 have no lessons yet.
- The reference index search covers curriculum grammar summaries only, not full reference libraries.
- Mistake review, flashcards and exercise grading are not fully implemented. Writing and speaking use model answers/rubrics and should not be exact-match graded.
- Print views and PDF answer visibility have not been tested in an actual browser/PDF renderer. A separately organized solutions edition is unfinished.
- The diagnostic assessment and current telc format details remain unauthored/unverified.

## Exact next action

Author L10–L12 as Chapter 4 (Perfekt, Präteritum, and *als* versus *wenn*) with verified verb forms and past-narrative practice. Build that chapter's vocabulary and grammar-reference entries alongside its lessons, then prepare Checkpoint 02 after Chapters 4–6 are complete.
