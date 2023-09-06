const glob = require('glob');
const fs = require('fs').promises;
const path = require('path');
const github = require('@actions/github');

const FILES_TO_INCLUDE = '../microsoft-edge/**/*.md';
const FILES_TO_IGNORE = [
    // What's new/release notes articles are bound to always have version numbers in them. That's ok.
    '../microsoft-edge/devtools-guide-chromium/whats-new/**/*.md',
    '../microsoft-edge/webview2/release-notes.md',
    '../microsoft-edge/progressive-web-apps-chromium/whats-new/*.md',
    // Experimental features also often have version numbers in them. Let's ignore them too.
    '../microsoft-edge/devtools-guide-chromium/experimental-features/index.md'
];
// This script attempts to find the current edge release version by looking at this page and finding the first version header occurrence.
const RELEASE_NOTES_PAGE = 'https://learn.microsoft.com/deployedge/microsoft-edge-relnote-stable-channel';

// This is the list of regular expressions we use to find references to Microsoft Edge versions.
// For each file, we split by line, and run these expressions on each line.
// Parenthesis and g flag are important, please add them to all patterns.
const PATTERNS_TO_LOOK_FOR = [
    /Microsoft Edge version ([0-9]{2,3})/g,
    /Microsoft Edge ([0-9]{2,3})/g,
];

// These are strings that we know we should ignore.
// Even if a line matches one of the patterns above, if it contains one of these strings, we ignore it.
const STRINGS_TO_IGNORE = [
    "What's New in DevTools (Microsoft Edge"
];

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

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

async function findMatchingPatternsIn(file) {
    const content = await fs.readFile(path.resolve(file), {encoding: 'utf8'});

    // We want line number information, so let's split the file in lines.
    const lines = content.split('\n');
    const matches = [];
    lines.forEach((line, i) => {
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

async function findMatchingPatternsInAllSourceFiles() {
    const files = await getAllSourceFiles();
    let matches = [];
    for (const file of files) {
        const fileMatches = await findMatchingPatternsIn(file);
        matches = [...matches, ...fileMatches];
    }
    return matches;
}

async function findCurrentEdgeVersion() {
    const response = await fetch(RELEASE_NOTES_PAGE);
    const content = await response.text();

    const match = content.match(/<h2[^>]*>Version ([0-9]+)/);
    if (match && match.length === 2) {
        return parseInt(match[1], 10);
    }
    throw new Error('Could not extract any version number from the page');
}

async function findReferencesToEdgeVersionsOlderThanRelease() {
    const version = await findCurrentEdgeVersion();
    const matches = await findMatchingPatternsInAllSourceFiles();
    return matches.filter(match => {
        return match.version < version;
    });
}

async function createIssue(title, content) {
    // Create a new issue.
    const octokit = github.getOctokit(process.env.token);

    const {data: issue} = await octokit.rest.issues.create({
        owner: "MicrosoftDocs",
        repo: "edge-developer",
        title: title,
        body: content
    });

    return issue;
}

findReferencesToEdgeVersionsOlderThanRelease().then(matches => {
    if (!matches.length) {
        console.log('No outdated Edge version references found.');
        return;
    }

    const report = matches.sort((a, b) => a.version - b.version).map(match => {
        return `* Outdated Edge version __${match.version}__ mentioned in __${match.file.replace('../', '')}__:__${match.line}__`;
    }).join('\n');

    console.log('Outdated Edge version references found:');
    console.log(report);

    if (!process.env.token) {
        console.log('No token environment variable found, skipping issue creation.');
        return;
    }

    return createIssue('Outdated Edge version references found', report).then(issue => {
        console.log(`Created issue ${issue.number} at ${issue.html_url}`);
    });
});
