import { readdir, readFile, realpath } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const contentDir = path.join(root, 'content/lessons');
const files = (await readdir(contentDir)).filter(name => /^L\d{2}\.md$/.test(name)).sort();
const report = {
  plannedLessons: 54,
  lessonFiles: files.length,
  completeLessons: 0,
  incompleteLessons: [],
  duplicateIds: [],
  duplicatePermalinks: [],
  invalidMetadata: [],
  brokenSourceLinks: [],
  readingLengthIssues: [],
  exerciseCountIssues: [],
  invalidLessonReferences: [],
  assessmentFiles: 0,
  grammarReferences: 0,
  verbEntries: 0
};

const requiredHeadings = [
  /^##\s+Lernziele\b/im,
  /^##\s+\d+\.\s+Lesetext\b/im,
  /^##\s+\d+\.\s+Wortschatz\b/im,
  /^##\s+\d+\.\s+Grammatik verstehen\b/im,
  /^##\s+\d+\.\s+Übungen\b/im,
  /^##\s+\d+\.\s+Übersetzung\b/im,
  /^##\s+\d+\.\s+Eigene Sätze\b/im,
  /^##\s+\d+\.\s+Schreiben\b/im,
  /^##\s+\d+\.\s+Sprechen und Kommunikation\b/im,
  /^##\s+\d+\.\s+Hörverstehen und Aussprache\b/im,
  /^##\s+\d+\.\s+Wiederholung\b/im,
  /^##\s+\d+\.\s+Lösungen\b/im
];
const idSet = new Set();
const permalinkSet = new Set();
const words = value => value.match(/[\p{L}\p{N}]+(?:[-’'][\p{L}\p{N}]+)*/gu) ?? [];

for (const file of files) {
  const source = await readFile(path.join(contentDir, file), 'utf8');
  const id = file.slice(0, 3);
  if (idSet.has(id)) report.duplicateIds.push(id);
  idSet.add(id);

  const frontmatter = source.match(/^---\s*\n([\s\S]*?)\n---/);
  const field = name => {
    const match = frontmatter?.[1].match(new RegExp(`^${name}:\\s*["']?([^"'\\n]+)`, 'm'));
    return match?.[1].trim();
  };
  const lessonId = field('lessonId');
  const chapterId = field('chapterId');
  const permalink = field('permalink');
  const expectedChapter = `C${String(Math.ceil(Number(id.slice(1)) / 3)).padStart(2, '0')}`;

  if (lessonId !== id || chapterId !== expectedChapter || permalink !== `/lessons/${id}/index.html`) {
    report.invalidMetadata.push({ id, lessonId, chapterId, permalink, expectedChapter });
  }
  if (permalinkSet.has(permalink)) report.duplicatePermalinks.push(permalink);
  permalinkSet.add(permalink);

  const missing = requiredHeadings.filter(pattern => !pattern.test(source)).map(pattern => pattern.source);
  if (missing.length) report.incompleteLessons.push({ id, missing });
  else report.completeLessons++;

  const heading = /^##\s+\d+\.\s+Übungen[^\n]*\n([\s\S]*?)(?=^##\s)/im.exec(source);
  const exerciseBlock = heading?.[1] ?? '';
  const exerciseCount = [...exerciseBlock.matchAll(/^\d+\.\s/gm)].length;
  if (exerciseCount < 12 || exerciseCount > 18) report.exerciseCountIssues.push({ id, exerciseCount });

  const reading = /^##\s+1\.\s+Lesetext[^\n]*\n([\s\S]*?)(?=^###\s)/im.exec(source)?.[1] ?? '';
  const readingWords = words(reading.replace(/[#*`>|]/g, ' ')).length;
  const level = field('level');
  const range = level === 'A1' ? [100, 150] : level === 'A2' ? [150, 220] : level === 'B1' ? [200, 300] : level === 'B2-Übergang' ? [250, 350] : null;
  if (range && (readingWords < range[0] || readingWords > range[1])) {
    report.readingLengthIssues.push({ id, level, readingWords, expected: range });
  }

  const refs = [...source.matchAll(/\bL(\d{2})\b/g)].map(match => Number(match[1]));
  for (const ref of refs) if (ref < 1 || ref > 54) report.invalidLessonReferences.push({ id, reference: `L${String(ref).padStart(2, '0')}` });

  try {
    const sourcePath = await realpath(path.join(root, 'src/lessons', file));
    const contentPath = await realpath(path.join(contentDir, file));
    if (sourcePath !== contentPath) report.brokenSourceLinks.push({ id, target: sourcePath });
  } catch {
    report.brokenSourceLinks.push({ id, target: null });
  }
}

report.assessmentFiles = (await readdir(path.join(root, 'content/assessments')).catch(() => [])).filter(file => file.endsWith('.md')).length;
report.grammarReferences = (await readdir(path.join(root, 'content/references/grammar')).catch(() => [])).filter(file => file.endsWith('.md')).length;
const verbSource = await readFile(path.join(root, 'src/_data/verbs.js'), 'utf8').catch(() => '');
const verbIds = [...verbSource.matchAll(/\{\s*infinitive:\s*"([^"]+)"/g)].map(match => match[1]);
report.verbEntries = verbIds.length;
if (new Set(verbIds).size !== verbIds.length) report.invalidMetadata.push({ reference: 'duplicate verb infinitives' });

console.log(JSON.stringify(report, null, 2));
const failed = report.incompleteLessons.length || report.duplicateIds.length || report.duplicatePermalinks.length || report.invalidMetadata.length || report.brokenSourceLinks.length || report.readingLengthIssues.length || report.exerciseCountIssues.length || report.invalidLessonReferences.length;
if (failed) process.exitCode = 1;
