import { glob } from 'glob';
import fs from 'fs/promises';
import path from 'path';
import github from '@actions/github';

// The GitHub repository information, to create issues if needed.
const REPO_OWNER = "MicrosoftDocs";
const REPO_NAME = "edge-developer";

// Patterns to find references to Microsoft Edge versions.
// When a file is being checked for references to old versions, the file
// is split by line, and these patterns are used to find Edge versions on each line.
// All patterns below must have parentheses (to extract the version) and g flags.
const PATTERNS_TO_LOOK_FOR = [
  /Microsoft Edge version ([0-9]{2,3})/g,
  /Microsoft Edge ([0-9]{2,3})/g,
  /Edge Canary ([0-9]{2,3})/g,
  /Edge Dev ([0-9]{2,3})/g,
  /Edge Beta ([0-9]{2,3})/g,
  /Edge Stable ([0-9]{2,3})/g,
];

// This pattern finds all markdown files in the microsoft-edge folder.
// We need to check them all for references to old Edge versions.
const FILES_TO_INCLUDE = '../microsoft-edge/**/*.md';

// Out of the above files, we ignore some specific files as they are known
// to contain references to old Edge versions that we don't want to report.
// These are mostly release notes and "what's new" files.
// They are organized by TOC buckets below.
const FILES_TO_IGNORE = [
  // Release notes (web platform)
  '../microsoft-edge/web-platform/release-notes/*.md',
  '../microsoft-edge/web-platform/site-impacting-changes.md',

  // Experimental APIs for Microsoft Edge
  // -- No files to ignore yet --
  
  // Microsoft Edge DevTools
  '../microsoft-edge/devtools/whats-new/*.md',
  '../microsoft-edge/devtools/whats-new/**/*.md',
  '../microsoft-edge/devtools/experimental-features/index.md',

  // Microsoft Edge extensions
  '..//microsoft-edge/extensions/whats-new/released-features.md',

  // Progressive Web Apps
  '../microsoft-edge/progressive-web-apps/whats-new/*.md',

  // WebView2
  '../microsoft-edge/webview2/release-notes/index.md',
  '../microsoft-edge/webview2/release-notes/archive.md',
  
  // Test and automation
  // -- No files to ignore yet --
  
  // Edge-specific web development tips (web platform)
  // -- No files to ignore yet --
  
  // Microsoft Edge IDE integration
  // -- No files to ignore yet --
  
  // Accessibility in Microsoft Edge
  // -- No files to ignore yet --
  
  // DualEngine
  // -- No files to ignore yet --
];

// Strings to ignore when checking files for outdated versions of Edge.
// This is in addition to the FILES_TO_IGNORE array above.
// This is required to avoid flagging link text for links that point to ignored release notes.
const STRINGS_TO_IGNORE = [
  // DevTools what's new link text.
  "What's New in DevTools (Microsoft Edge",

  // Web platform release notes link text.
  "web platform release notes (",
];

// URL of the page (on LMC) that contains the current Microsoft Edge release version.
// This script fetches this page to find the current version of Edge, and figure out
// which other Edge versions are outdated.
const RELEASE_NOTES_PAGE = 'https://learn.microsoft.com/deployedge/microsoft-edge-relnote-stable-channel';

async function findMatchingPatternsInOneFile(file) {
  // Read the file content.
  const content = await fs.readFile(path.resolve(file), { encoding: 'utf8' });

  // Split the file into lines, to get line number information.
  const lines = content.split('\n');

  const matches = [];

  // Iterate through each line and check for patterns.
  lines.forEach((line, i) => {
    // If the line contains any of the strings to ignore, skip it.
    if (STRINGS_TO_IGNORE.some(string => line.toLowerCase().includes(string.toLocaleLowerCase()))) {
      return;
    }

    for (const pattern of PATTERNS_TO_LOOK_FOR) {
      let match;
      while ((match = pattern.exec(line)) !== null) {
        const version = parseInt(match[1], 10);

        matches.push({
          file,
          line: i + 1,
          match: match[0],
          version
        });
      }
    }
  });

  return matches;
}

async function findMatchingPatternsInAllFiles() {
  // Get all markdown files.
  const files = await glob(FILES_TO_INCLUDE, { ignore: FILES_TO_IGNORE });

  let matches = [];
  for (const file of files) {
    // For each file, find the matching patterns.
    const fileMatches = await findMatchingPatternsInOneFile(file);
    matches = [...matches, ...fileMatches];
  }

  return matches;
}

async function findCurrentEdgeVersion() {
  // Fetch the release notes page content.
  const response = await fetch(RELEASE_NOTES_PAGE);
  const content = await response.text();

  // Extract the version number from the page content.
  const match = content.match(/<h2[^>]*>Version ([0-9]+)/);
  if (match && match.length === 2) {
    return parseInt(match[1], 10);
  }

  throw new Error('Could not extract any version number from the page');
}

async function createGitHubIssue(title, body) {
  const octokit = github.getOctokit(process.env.token);

  const { data: issue } = await octokit.rest.issues.create({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    title,
    body
  });

  return issue;
}

async function main() {
  // Find the current Edge stable version.
  const version = await findCurrentEdgeVersion();

  // Find all references to Edge versions in the docs source files.
  const matches = await findMatchingPatternsInAllFiles();

  // Get those that are older than the current version.
  const outdatedVersionMatches = matches.filter(match => {
    return match.version < version;
  });

  if (!outdatedVersionMatches.length) {
    console.log('No outdated Edge version references found.');
    return;
  }

  // Create a report which lists all outdated version references found.
  const report = outdatedVersionMatches.sort((a, b) => a.version - b.version).map(match => {
    return `* Outdated Edge version __${match.version}__ mentioned in __${match.file.replace('../', '')}__:__${match.line}__`;
  }).join('\n');

  console.log('Outdated Edge version references found:');
  console.log(report);

  if (!process.env.token) {
    console.log('No token environment variable found, skipping issue creation.');
    return;
  }

  // Create a GitHub issue with the report.
  const issue = await createGitHubIssue('Outdated Edge version references found', report);
  console.log(`Created issue ${issue.number} at ${issue.html_url}`);
}

main().catch(error => {
  console.error('Error occurred:', error);
  process.exit(1);
});
