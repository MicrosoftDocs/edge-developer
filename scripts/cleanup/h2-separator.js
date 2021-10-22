// This script can be used to insert missing h2 headings separator comments.
// Why h2 comment dividers (with two blank lines above) are important:
// - These separators facilitate authoring and maintenance of docs, for the Docs team and for all contributors, by making it easier to read the source files, by providing a kind of Preview view right within the source files. These separators help fulfill the intent of Markdown, of being easy to read, like WYSIWYG page layout.
// - This facilitates and encourages contributions, and reduces the cognitive overhead that's required to answer "Where am I in the source file?", to free up mental focus for the content and flow.
// - This h2 divider helps contributors think in terms of Doc Design, to cast the structure of pages into the form of a series of h2 sections, leveraging h2's for navigation in the "In this article" nav feature.

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
