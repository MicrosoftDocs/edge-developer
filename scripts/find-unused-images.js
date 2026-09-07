#!/usr/bin/env node
/**
 * find-unused-images.js
 *
 * Scans the "microsoft-edge" folder for "*-images" folders (each one holding
 * the screenshots/pictures used by the article that shares its base name,
 * e.g. "focus.md" -> "focus-images/") and detects image files inside them
 * that are not referenced from their matching sibling article.
 *
 * By default this runs in "dry run" mode and only prints a report of
 * the unused images it finds. Pass --delete to actually delete them.
 *
 * Usage:
 *   node scripts/find-unused-images.js [--delete] [--json] [--verbose]
 *
 * This script only ever scans the "microsoft-edge" top-level folder of the
 * repository (sibling of "scripts"); nothing outside of it is walked.
 *
 * Arguments:
 *   --delete    Actually delete the unused image files (otherwise dry run).
 *   --json      Print the report as JSON instead of human-readable text.
 *   --verbose   Also print every image file that IS in use.
 *
 * Notes / assumptions:
 *   - Every "<name>-images" folder is expected to sit right next to its
 *     matching "<name>.md" article, in the same directory
 *     (e.g. "focus.md" and "focus-images/" are siblings).
 *   - An image is considered "used" only if its filename (case-insensitive)
 *     is referenced from that one matching article file. A reference to an
 *     image of the same name from a *different* article does NOT count as
 *     "used" - each images folder is checked strictly against its own
 *     sibling article.
 *   - If no matching "<name>.md" article exists next to a "<name>-images"
 *     folder, every image inside that folder is reported as unused (there
 *     is no article that could be using them).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_EXTENSIONS = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.bmp', '.ico'
]);

function parseArgs(argv) {
  const args = {
    delete: false,
    json: false,
    verbose: false,
  };

  for (const arg of argv) {
    if (arg === '--delete') {
      args.delete = true;
    } else if (arg === '--json') {
      args.json = true;
    } else if (arg === '--verbose') {
      args.verbose = true;
    }
  }

  return args;
}

/**
 * Recursively walks a directory, invoking a callback for every "*-images"
 * directory found.
 */
function walk(dir, onImagesDir) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (err) {
    return;
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const fullPath = path.join(dir, entry.name);

    if (/-images$/i.test(entry.name)) {
      onImagesDir(fullPath);
    }
    walk(fullPath, onImagesDir);
  }
}

/**
 * Collects all "*-images" directories under root.
 */
function collectImagesDirs(rootDir) {
  const imagesDirs = [];
  walk(rootDir, (dirPath) => imagesDirs.push(dirPath));
  return imagesDirs;
}

/**
 * Lists image files (by extension) directly inside a given "*-images" folder.
 * Does not recurse into subfolders of an images folder, but does report them
 * separately so nothing is silently skipped.
 */
function listImageFiles(imagesDir) {
  const files = [];
  const subDirs = [];

  let entries;
  try {
    entries = fs.readdirSync(imagesDir, { withFileTypes: true });
  } catch (err) {
    return { files, subDirs };
  }

  for (const entry of entries) {
    const fullPath = path.join(imagesDir, entry.name);
    if (entry.isDirectory()) {
      subDirs.push(fullPath);
    } else if (entry.isFile()) {
      if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
        files.push(fullPath);
      }
    }
  }

  return { files, subDirs };
}

/**
 * Builds a lowercase Set of every image filename referenced from a single
 * article's Markdown content, by scanning for the "<images-folder>/<filename>"
 * pattern.
 */
function buildUsedImageNameSetForArticle(articleFilePath) {
  // Matches things like:  something-images/some-file.name.png
  // Captures the filename portion after the last "-images/" segment,
  // stopping at a closing paren, quote, whitespace, or `#`/`?` (anchors/query).
  const referencePattern = /-images\/([^\s")'?#]+)/gi;

  const used = new Set();

  let content;
  try {
    content = fs.readFileSync(articleFilePath, 'utf8');
  } catch (err) {
    return used;
  }

  let match;
  while ((match = referencePattern.exec(content)) !== null) {
    const rawName = match[1];
    // Strip any trailing markdown title syntax like `pic.png "title"`,
    // and decode simple URL-encoding (e.g. %20 -> space).
    let fileName = rawName.split(/["']/)[0];
    try {
      fileName = decodeURIComponent(fileName);
    } catch (err) {
      // Ignore malformed percent-encoding, use raw value.
    }
    used.add(fileName.toLowerCase());
  }

  return used;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const rootDir = path.resolve(__dirname, '..', 'microsoft-edge');

  if (!fs.existsSync(rootDir)) {
    console.error(`Error: root directory does not exist: ${rootDir}`);
    process.exit(1);
  }

  console.error(`Scanning "${rootDir}" for "*-images" folders...`);
  const imagesDirs = collectImagesDirs(rootDir);
  console.error(`Found ${imagesDirs.length} images folder(s).`);

  const report = {
    rootDir,
    imagesDirCount: imagesDirs.length,
    unusedFiles: [],
    usedFiles: [],
    unexpectedSubDirs: [],
    missingArticles: [],
  };

  let totalUnusedBytes = 0;

  for (const imagesDir of imagesDirs) {
    const folderName = path.basename(imagesDir);
    const articleBaseName = folderName.replace(/-images$/i, '');
    const articleFilePath = path.join(path.dirname(imagesDir), `${articleBaseName}.md`);
    const articleExists = fs.existsSync(articleFilePath);

    if (!articleExists) {
      report.missingArticles.push({ imagesDir, articleFilePath });
    }

    const usedNames = articleExists
      ? buildUsedImageNameSetForArticle(articleFilePath)
      : new Set();

    const { files, subDirs } = listImageFiles(imagesDir);

    for (const dir of subDirs) {
      report.unexpectedSubDirs.push(dir);
    }

    for (const filePath of files) {
      const fileName = path.basename(filePath).toLowerCase();
      const isUsed = usedNames.has(fileName);

      if (isUsed) {
        report.usedFiles.push(filePath);
      } else {
        let size = 0;
        try {
          size = fs.statSync(filePath).size;
        } catch (err) {
          // ignore
        }
        totalUnusedBytes += size;
        report.unusedFiles.push({ path: filePath, size });
      }
    }
  }

  report.totalUnusedBytes = totalUnusedBytes;

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log('');
    console.log('='.repeat(70));
    console.log('Unused image report');
    console.log('='.repeat(70));
    console.log(`Images folders scanned : ${report.imagesDirCount}`);
    console.log(`Used images            : ${report.usedFiles.length}`);
    console.log(`Unused images          : ${report.unusedFiles.length}`);
    console.log(`Reclaimable size       : ${formatBytes(report.totalUnusedBytes)}`);

    if (report.missingArticles.length) {
      console.log('');
      console.log(`Note: found ${report.missingArticles.length} images folder(s) with no matching sibling article (all their images are reported unused):`);
      for (const { imagesDir, articleFilePath } of report.missingArticles) {
        console.log(`  - ${path.relative(rootDir, imagesDir)} (expected ${path.relative(rootDir, articleFilePath)})`);
      }
    }

    if (report.unexpectedSubDirs.length) {
      console.log('');
      console.log(`Note: found ${report.unexpectedSubDirs.length} sub-folder(s) inside "*-images" folders (not scanned for files):`);
      for (const dir of report.unexpectedSubDirs) {
        console.log(`  - ${path.relative(rootDir, dir)}`);
      }
    }

    if (report.unusedFiles.length) {
      console.log('');
      console.log('Unused files:');
      for (const f of report.unusedFiles) {
        console.log(`  - ${path.relative(rootDir, f.path)} (${formatBytes(f.size)})`);
      }
    }

    if (args.verbose && report.usedFiles.length) {
      console.log('');
      console.log('Used files:');
      for (const f of report.usedFiles) {
        console.log(`  - ${path.relative(rootDir, f)}`);
      }
    }
  }

  if (args.delete) {
    console.error('');
    console.error(`Deleting ${report.unusedFiles.length} unused file(s)...`);
    let deleted = 0;
    for (const f of report.unusedFiles) {
      try {
        fs.unlinkSync(f.path);
        deleted++;
      } catch (err) {
        console.error(`  Failed to delete ${f.path}: ${err.message}`);
      }
    }
    console.error(`Deleted ${deleted} file(s).`);
  } else if (report.unusedFiles.length) {
    console.error('');
    console.error('Dry run only - no files were deleted. Re-run with --delete to remove the unused files listed above.');
  }
}

main();

