const glob = require('glob');
const fs = require('fs').promises;
const path = require('path');
const core = require('@actions/core')

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
const RELEASE_NOTES_PAGE = 'https://docs.microsoft.com/deployedge/microsoft-edge-relnote-stable-channel';

// Parenthesis and g flag are important, please add them to all patterns.
const PATTERNS_TO_LOOK_FOR = [
    /Microsoft Edge version ([0-9]{2,3})/g,
    /Microsoft Edge ([0-9]{2,3})/g,
    /Edge ([0-9]{2,3}) /g,
    / ([0-9]{2,3}) or later/g,
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
        for (const pattern of PATTERNS_TO_LOOK_FOR) {
            let match;
            while ((match = pattern.exec(line)) !== null) {
                const version = parseInt(match[1], 10);

                if (version < 40) {
                    // 40 is random, but it's enough for what we need here:
                    // avoid matching Windows 10 or Windows 11.
                    continue;
                }

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

findReferencesToEdgeVersionsOlderThanRelease().then(matches => {
    // Output a human readable list of errors.
    const report = matches.map(match => {
        return `* Article __${match.file.replace('../', '')}__ mentions Edge version __${match.version}__ on line __${match.line}__`;
    }).join('\n');

    console.log(report);

    core.setOutput('report', report)
});
