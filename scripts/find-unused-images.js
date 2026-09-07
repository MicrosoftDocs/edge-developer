#!/usr/bin/env node
/**
 * find-unused-images.js
 *
 * Scans the repository for "*-images" folders (each one holding the
 * screenshots/pictures used by the article that shares its base name,
 * e.g. "focus.md" -> "focus-images/") and detects image files inside
 * them that are not referenced from any Markdown (*.md) file in the repo.
 *
 * By default this runs in "dry run" mode and only prints a report of
 * the unused images it finds. Pass --delete to actually delete them.
 *
 * Usage:
 *   node scripts/find-unused-images.js [rootDir] [--delete] [--json] [--verbose]
 *
 * Arguments:
 *   rootDir     Optional path to scan. Defaults to the repository root
 *               (parent directory of this script's "scripts" folder).
 *   --delete    Actually delete the unused image files (otherwise dry run).
 *   --json      Print the report as JSON instead of human-readable text.
 *   --verbose   Also print every image file that IS in use.
 *
 * Notes / assumptions:
 *   - Images are only ever referenced via relative paths from Markdown
 *     files using the pattern "<something>-images/<filename>" (Markdown
 *     image syntax `![alt](./name-images/pic.png)` or plain HTML
 *     `<img src="./name-images/pic.png">`). This matches the convention
 *     used throughout this repository.
 *   - An image is considered "used" if its filename (case-insensitive)
 *     appears anywhere in any .md file, within a path segment ending in
 *     "-images/". This is intentionally a bit loose (matches by
 *     filename, not by requiring the exact relative path) so that
 *     images shared across articles, or referenced with different
 *     relative path prefixes (./, ../, etc.), are still correctly
 *     detected as used.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_EXTENSIONS = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.bmp', '.ico'
]);

const IGNORED_DIR_NAMES = new Set([
  '.git', 'node_modules', '.vs', '.vscode'
]);

function parseArgs(argv) {
  const args = {
    rootDir: null,
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
    } else if (!arg.startsWith('--')) {
      args.rootDir = arg;
    }
  }

  return args;
}

/**
 * Recursively walks a directory, invoking callbacks for files/directories found.
 */
function walk(dir, { onFile, onImagesDir }) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (err) {
    return;
  }

  for (const entry of entries) {
    if (IGNORED_DIR_NAMES.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (/-images$/i.test(entry.name)) {
        onImagesDir(fullPath);
      }
      walk(fullPath, { onFile, onImagesDir });
    } else if (entry.isFile()) {
      onFile(fullPath);
    }
  }
}

/**
 * Collects all "*-images" directories and all Markdown file paths under root.
 */
function collectImagesDirsAndMarkdownFiles(rootDir) {
  const imagesDirs = [];
  const markdownFiles = [];

  walk(rootDir, {
    onFile(filePath) {
      if (path.extname(filePath).toLowerCase() === '.md') {
        markdownFiles.push(filePath);
      }
    },
    onImagesDir(dirPath) {
      imagesDirs.push(dirPath);
    },
  });

  return { imagesDirs, markdownFiles };
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
 * Builds a lowercase Set of every referenced image filename found across all
 * Markdown files, by scanning for the "-images/<filename>" pattern.
 */
function buildUsedImageNameSet(markdownFiles) {
  // Matches things like:  something-images/some-file.name.png
  // Captures the filename portion after the last "-images/" segment,
  // stopping at a closing paren, quote, whitespace, or `#`/`?` (anchors/query).
  const referencePattern = /-images\/([^\s")'?#]+)/gi;

  const used = new Set();

  for (const mdFile of markdownFiles) {
    let content;
    try {
      content = fs.readFileSync(mdFile, 'utf8');
    } catch (err) {
      continue;
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
  const rootDir = path.resolve(args.rootDir || path.join(__dirname, '..'));

  if (!fs.existsSync(rootDir)) {
    console.error(`Error: root directory does not exist: ${rootDir}`);
    process.exit(1);
  }

  console.error(`Scanning "${rootDir}" for "*-images" folders and Markdown files...`);
  const { imagesDirs, markdownFiles } = collectImagesDirsAndMarkdownFiles(rootDir);
  console.error(`Found ${imagesDirs.length} images folder(s) and ${markdownFiles.length} Markdown file(s).`);

  console.error('Building the set of referenced image filenames from Markdown content...');
  const usedNames = buildUsedImageNameSet(markdownFiles);

  const report = {
    rootDir,
    imagesDirCount: imagesDirs.length,
    markdownFileCount: markdownFiles.length,
    unusedFiles: [],
    usedFiles: [],
    unexpectedSubDirs: [],
  };

  let totalUnusedBytes = 0;

  for (const imagesDir of imagesDirs) {
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
    console.log(`Markdown files scanned : ${report.markdownFileCount}`);
    console.log(`Used images            : ${report.usedFiles.length}`);
    console.log(`Unused images          : ${report.unusedFiles.length}`);
    console.log(`Reclaimable size       : ${formatBytes(report.totalUnusedBytes)}`);

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
