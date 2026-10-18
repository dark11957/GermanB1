import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const files = (await readdir(path.join(root, 'content/lessons'))).filter(x => /^L\d{2}\.md$/.test(x)).sort();
const required = ['Lernziele','Lesetext','Wortschatz','Grammatik verstehen','Übungen','Übersetzung','Eigene Sätze','Schreiben','Sprechen','Hörverstehen','Wiederholung','Lösungen'];
const report = { lessonFiles: files.length, completeLessons: 0, incompleteLessons: [], duplicateIds: [], issues: [] };
const ids = new Set();
for (const file of files) {
  const source = await readFile(path.join(root, 'content/lessons', file), 'utf8');
  const id = file.slice(0, 3);
  if (ids.has(id)) report.duplicateIds.push(id); ids.add(id);
  const missing = required.filter(term => !source.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
  if (missing.length) report.incompleteLessons.push({ id, missing }); else report.completeLessons++;
  const sections = [...source.matchAll(/^##\s+(.+)$/gm)].map(m => m[1]);
  if (sections.length < 10) report.issues.push(`${id}: only ${sections.length} top-level sections`);
  const idsInContent = [...source.matchAll(/\bL\d{2}\b/g)].map(m => m[0]);
  for (const ref of idsInContent) if (Number(ref.slice(1)) > 54) report.issues.push(`${id}: invalid lesson reference ${ref}`);
}
report.assessmentFiles = (await readdir(path.join(root, 'content/assessments').catch(() => []))).filter(f => f.endsWith('.md')).length;
console.log(JSON.stringify(report, null, 2));
if (report.incompleteLessons.length || report.duplicateIds.length || report.issues.length) process.exitCode = 1;
