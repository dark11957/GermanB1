# Deutsch Masterclass

An original, source-driven German refresher course planned for A1–B1 consolidation and a B2 transition. The complete course specification is preserved in [`plan.md`](plan.md); [`COURSE_SPEC.md`](COURSE_SPEC.md) summarizes its implementation map.

## Run locally

Requires Node.js 18 or newer.

```sh
npm install
npm run build
npm start
```

Eleventy writes the static site to `dist/`. The course text is included in the generated HTML; JavaScript adds progress tracking and reference filtering. Use browser Print → Save as PDF on the print editions. Current authored material and outstanding work are listed in [`COURSE_STATUS.md`](COURSE_STATUS.md).

## GitHub Pages

The workflow builds and deploys on pushes to `main`. In repository Settings → Pages, select GitHub Actions as the source. The build derives the project subpath from `GITHUB_REPOSITORY` and sets Eleventy’s `PATH_PREFIX`. A deployment is not claimed until the Actions run and published URL have been checked.

Progress is stored in the current browser only. Use the dashboard export/import controls to transfer it between devices.
