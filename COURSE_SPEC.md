# Course implementation specification

The authoritative and complete curriculum specification is [`plan.md`](plan.md). This project follows its 18 chapters / 54 lessons, required 12-section lesson structure, diagnostics and cumulative assessments, grammar and lexical references, vanilla HTML/CSS/JS interface, Eleventy static build, GitHub Pages target, and A4 print editions.

## Current authoring convention

Each source lesson is Markdown with front matter for its ID, level, chapter, timing, focus and navigation. Shared Nunjucks layouts render the same source for HTML and print. Content is written in original German/English, and answer keys use native `<details>` elements so the text remains available without JavaScript. Do not mark a lesson complete until all 12 sections and its solutions are present and reviewed.

## Curriculum map

The complete chapter and lesson metadata lives in `src/_data/chapters.js`. The map is navigation metadata, not evidence that its lesson content exists. Current authored source files are counted by `scripts/validate-course.mjs`.
