// This script can be used to insert missing h2 headings separator comments.
// These separators are useful to us, maintainers of the docs repo, to make it easier to read markdown files.

const glob = require('glob');
const fs = require('fs').promises;
const path = require('path');

const FILES_TO_INCLUDE = '../../microsoft-edge/**/*.md';
const FILES_TO_IGNORE = [];
const COMMENT_LINE = '<!-- ====================================================================== -->';

function getAllSourceFiles() {
    return new Promise(resolve => {
        glob(FILES_TO_INCLUDE, { ignore: FILES_TO_IGNORE }, (err, files) => {
            if (err) {
                throw err;
            }

            resolve(files);
        });
    });
}

async function findMissingSeparatorsInFile(file) {
  const content = await fs.readFile(path.resolve(file), {encoding: 'utf8'});
  const lines = content.split('\n');

  const result = [];

  for (var [nb, line] of lines.entries()) {
    if (line.startsWith('## ')) {
      // Go back to the previous lines until we find one that isn't empty      
      let prevLineNb = nb - 1;
      while (prevLineNb >= 0 && !lines[prevLineNb].trim()) {
        prevLineNb--;
      }

      // We found a non-empty line before this h2. Check if it is the separator.
      const previousNonEmptyLine = lines[prevLineNb];
      if (!previousNonEmptyLine.startsWith('<!-- ===')) {
        result.push(nb);
      }
    }
  }

  return result;
}

async function introduceSeparators(file, h2Lines) {
  const content = await fs.readFile(path.resolve(file), {encoding: 'utf8'});
  const fileLines = content.split('\n');

  const newContent = [];

  for (let nb = 0; nb < fileLines.length; nb++) {
    if (h2Lines.includes(nb)) {
      newContent.push('');
      newContent.push(COMMENT_LINE);
      newContent.push(fileLines[nb]);
    } else {
      newContent.push(fileLines[nb]);
    }
  }

  await fs.writeFile(path.resolve(file), newContent.join('\n'), {encoding: 'utf8'});
}

async function fixMissingSeparators() {
  const files = await getAllSourceFiles();
  
  for (const file of files) {
    const lines = await findMissingSeparatorsInFile(file);
    if (lines.length) {
      console.log(`File ${file} misses h2 separators on these lines: ${lines}. Adding them now...`);
      await introduceSeparators(file, lines);
    }
  }
}

fixMissingSeparators();
