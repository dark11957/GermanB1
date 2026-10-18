# Course status

Last updated: 2026-10-18 (Africa/Tunis)

## Actual content counts

Static source scan (2026-10-18): **4 complete lesson files out of 54 planned** (L01–L03 and L27); **1 partial assessment file** (Checkpoint 01 currently covers Chapter 1 only). Each authored lesson has all 12 required section markers and 13 second-level sections (the extra section is an introduction/outlook). Counts are from actual files, not the curriculum map. Run `npm run validate` when Node.js is available for the repository validator.

## Completed

- Read the complete authoritative specification in `plan.md`; preserved it unchanged.
- Established an Eleventy + Markdown + Nunjucks source pipeline, shared responsive layout, chapter map, A4 stylesheet, GitHub Pages workflow configuration, print-view routes, and browser-local lesson completion with progress export/import.
- Authored full-depth lesson source for L01 (A1) and L27 (B1), with original reading text and all twelve required lesson components, including answer explanations.
- Continued Chapter 1 with full-depth L02 and L03 lesson sources and an explicitly partial Chapter 1 review section in Checkpoint 01.
- Added honest content availability labels so unwritten lessons are not presented as complete.

## Remaining

- Author and review L04–L26 and L28–L54 in chapter-sized batches; complete each chapter's assessment before marking it done.
- Author the diagnostic, six cumulative checkpoints, B1 readiness assessment, and B2 transition assessment.
- Build the comprehensive grammar handbook, searchable verb atlas, thematic vocabulary and expressions libraries, with source-checked coverage and lesson links.
- Finish interactive exercise grading, mistake capture/filtering, flashcards, and complete search across all libraries.
- Generate and inspect actual A4 PDF output (A1, B1 and multi-chapter), including page breaks, tables, German glyphs and answer visibility.
- Run the build and validator, inspect desktop/mobile output, and verify a GitHub Pages Actions deployment and URL.

## Validation results

- Build: attempted with `npm install`; unavailable because `npm` and `node` are not installed (`npm: command not found`).
- Content structure: static Python scan found 4 lesson files, all with all 12 required sections; 1 partial assessment file. All four have 13 top-level content sections.
- Content validator: not run; requires Node.js.
- Browser/PDF inspection: not yet run.
- External linguistic/telc source check: not yet run.

## Known issues

- Content currently exists only for four lessons, so the course is not complete.
- Chapter 1's three lessons are authored, but Checkpoint 01 is not complete until Chapters 2 and 3 are authored and reviewed.
- The first print views contain authored lessons only; chapter print view cannot yet be a complete chapter.
- The mistake page currently renders/removes a saved list, but no lesson control yet adds items to it. Flashcards, automatic exercise grading and an incorrect-answer-only review mode are unfinished.
- Search currently filters curriculum grammar summaries only; the complete verb/vocabulary/grammar search index is unfinished.
- Answer details are closed in browser print unless opened before printing; confirm actual Chromium behavior and adjust the print strategy.
- The remote font import needs network access; system sans-serif fallbacks are provided.
- No Node.js/npm or Chromium/browser binary is installed in the execution environment, blocking the Eleventy build, browser interaction checks and actual PDF inspection.
- This workspace is not a Git repository, so commit history and a repository-specific Pages deployment target cannot be inspected or verified.

## Exact next action

In a Node.js 18+ environment, run `npm install`, build and validate the four-lesson site; fix any source-path, layout, link or print issues that those checks expose. Then author Chapter 2 (L04–L06) and continue the checkpoint toward its full Chapter 1–3 scope. Do not mark Chapter 1 complete until the checkpoint covers all A1 foundations.
