// This script compares the last few release notes files with the features from chromestatus.com
// and uses GitHub Models (via the GITHUB_TOKEN) to analyze the differences.
// This script can be run as part of a GitHub Actions workflow, or can be run locally.
//
// For local use, create a .env file in the scripts folder containing the following key/value pair:
//   GITHUB_TOKEN=ghp_your_personal_access_token

import 'dotenv/config';
import { getOctokit } from '@actions/github';
import fs from "fs/promises";
import path from "path";
import { glob } from "glob";

// The release notes folder relative to this script.
const RELEASE_NOTES_FOLDER = "../microsoft-edge/web-platform/release-notes";

// The number of recent release notes files to analyze.
const NUMBER_OF_RELEASE_NOTES = 3;

// GitHub Models API endpoint (available in GitHub Actions with GITHUB_TOKEN).
const GITHUB_MODELS_API = "https://models.inference.ai.azure.com/chat/completions";

// The model to use for comparison. GPT-4o is available via GitHub Models.
const MODEL_NAME = "gpt-4o";

// Call a chromestatus.com API endpoint and return the parsed JSON data.
async function fetchChromeStatusAPI(url) {
  const response = await fetch(url);
  let text = await response.text();
  // The chromestatus.com API prefixes the JSON with ")]}'" for security.
  text = text.substring(4);
  const data = JSON.parse(text);
  return data;
}

// Get the version number from a release notes file name.
// File names are like "145.md", so we extract "145".
function getVersionFromFileName(fileName) {
  const baseName = path.basename(fileName, ".md");
  // Filter out non-numeric file names, such as "index.md".
  const version = parseInt(baseName, 10);
  return isNaN(version) ? null : version;
}

// Get the last N release notes files by version number.
async function getLastReleaseNotesFiles(count) {
  const scriptDir = path.dirname(new URL(import.meta.url).pathname);
  // Remove the leading / if present on Windows paths, such as /C:/... .
  const fixedScriptDir = scriptDir.replace(/^\/([A-Za-z]:)/, "$1");
  const releaseNotesPath = path.resolve(fixedScriptDir, RELEASE_NOTES_FOLDER);
  
  const files = await glob("*.md", { cwd: releaseNotesPath });
  
  // Extract versions and filter out non-version files (such as index.md).
  const versionFiles = files
    .map(file => ({
      file,
      version: getVersionFromFileName(file),
      fullPath: path.join(releaseNotesPath, file)
    }))
    .filter(item => item.version !== null);

  // Sort by version number descending and take the last N files.
  versionFiles.sort((a, b) => b.version - a.version);
  
  return versionFiles.slice(0, count);
}

// Read the release notes content from a file.
async function readReleaseNotesContent(filePath) {
  const content = await fs.readFile(filePath, "utf-8");
  return content;
}

// Fetch features from chromestatus.com for a specific milestone/version.
async function fetchChromeStatusFeatures(version) {
  console.log(`Fetching features from chromestatus.com for version ${version}...`);
  
  try {
    const data = await fetchChromeStatusAPI(
      `https://chromestatus.com/api/v0/features?milestone=${version}`
    );
    
    // The API returns features_by_type, which can be an array or an object, depending on the response.
    // Return the whole data object, so that we can inspect its structure.
    return data;
  } catch (error) {
    console.error(`Error fetching chromestatus.com data for version ${version}:`, error.message);
    return null;
  }
}

// Format chromestatus.com features into a readable summary.
function formatChromeStatusFeatures(data) {
  if (!data) {
    return "No features found on chromestatus.com for this version.";
  }

  const featuresByType = data.features_by_type;
  
  if (!featuresByType) {
    return "No features found on chromestatus.com for this version.";
  }

  const lines = [];
  
  // Handle both array format and object format.
  if (Array.isArray(featuresByType)) {
    for (const category of featuresByType) {
      if (category.features && category.features.length > 0) {
        lines.push(`\n## ${category.category}:`);
        for (const feature of category.features) {
          lines.push(`- ${feature.name}: ${feature.summary || "No summary available."}`);
        }
      }
    }
  } else if (typeof featuresByType === 'object') {
    // Do if it's an object that has category keys.
    for (const [categoryName, features] of Object.entries(featuresByType)) {
      if (Array.isArray(features) && features.length > 0) {
        lines.push(`\n## ${categoryName}:`);
        for (const feature of features) {
          lines.push(`- ${feature.name}: ${feature.summary || "No summary available."}`);
        }
      }
    }
  }

  if (lines.length === 0) {
    return "No features found on chromestatus.com for this version.";
  }

  return lines.join("\n");
}

// Call the GitHub Models API to compare release notes with chromestatus.com data.
async function compareWithAI(version, releaseNotesContent, chromeStatusData) {
  const token = process.env.GITHUB_TOKEN || process.env.token;
  
  if (!token) {
    console.error("No GITHUB_TOKEN found. Please set the GITHUB_TOKEN environment variable.");
    console.error("When running locally, you can use a GitHub Personal Access Token.");
    return {
      version,
      error: "No GITHUB_TOKEN available",
      analysis: null
    };
  }

  const chromeStatusSummary = formatChromeStatusFeatures(chromeStatusData);

  const prompt = `You are an expert technical writer analyzing Microsoft Edge web platform release notes for completeness.

## CONTEXT
- Microsoft Edge is based on Chromium, so most web platform features come from the Chromium project.
- chromestatus.com tracks Chromium features by milestone/version.
- The Edge release notes document features for the same milestone as the Chromium version.
- Some sections are **Edge-specific and won't appear in chromestatus.com**:
  - The "Edge DevTools" section.
  - The "WebView2" section.
  - The "Origin trials in Microsoft Edge" section (Edge-only origin trials).
  - Any features that are explicitly marked as Microsoft Edge-specific.

## YOUR TASK
Compare the Microsoft Edge ${version} release notes with chromestatus.com data for the same milestone.

## OUTPUT FORMAT
Provide your analysis in these sections:

### 1. Missing from Release Notes (High Priority)
List Chromium features from chromestatus.com that should probably be documented but are missing from the Edge Release Notes.
- Focus on user-facing web platform features (such as CSS, Web APIs, or JavaScript).
- Ignore internal/infrastructure changes.
- Ignore origin trials.
- Note: Feature names and descriptions may differ (e.g., "scroll-driven" vs. "scroll driven").

### 2. Missing from Release Notes (Low Priority)
Features that might be intentionally omitted (such as minor changes, or already deprecated).

### 3. Edge-Specific Features (Expected)
Features in release notes that correctly don't appear in chromestatus.com (Edge-only features).

### 4. Potential Discrepancies
Any inconsistencies in descriptions, categorization, or feature scope.

### 5. Summary
- **Completeness**: [Complete | Mostly Complete | Needs Review | Incomplete].
- **Action items**: Brief list of recommended changes (if any).

---
## MICROSOFT EDGE ${version} RELEASE NOTES:

${releaseNotesContent}

---
## CHROMESTATUS.COM FEATURES FOR MILESTONE ${version}:

${chromeStatusSummary}
`;

  try {
    console.log(`Calling GitHub Models API to analyze version ${version}...`);
    
    const response = await fetch(GITHUB_MODELS_API, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 3000,
        temperature: 0.2
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`GitHub Models API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const analysis = data.choices?.[0]?.message?.content || "No analysis generated.";

    return {
      version,
      error: null,
      analysis
    };
  } catch (error) {
    console.error(`Error calling GitHub Models API for version ${version}:`, error.message);
    return {
      version,
      error: error.message,
      analysis: null
    };
  }
}

// Generate a markdown report of the analysis results.
function generateReport(results) {
  const lines = [
    "# Release Notes Comparison Report",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    `This report compares the last ${NUMBER_OF_RELEASE_NOTES} Microsoft Edge web platform release notes with the corresponding features from chromestatus.com.`,
    "",
    "---",
    ""
  ];

  for (const result of results) {
    lines.push(`## Microsoft Edge ${result.version}`);
    lines.push("");
    
    if (result.error) {
      lines.push(`**Error:** ${result.error}`);
    } else if (result.analysis) {
      lines.push(result.analysis);
    } else {
      lines.push("No analysis available.");
    }
    
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  return lines.join("\n");
}

// Main entry point.
async function main() {
  console.log("=".repeat(60));
  console.log("Release Notes Comparison Script");
  console.log("=".repeat(60));

  // --------------------------------------------------
  // 1. Get the last N release notes files.
  // --------------------------------------------------

  console.log(`\nStep 1: Finding the last ${NUMBER_OF_RELEASE_NOTES} release notes files...`);
  
  const releaseNotesFiles = await getLastReleaseNotesFiles(NUMBER_OF_RELEASE_NOTES);
  
  if (releaseNotesFiles.length === 0) {
    console.error("No release notes files found.");
    process.exit(1);
  }

  console.log(`Found ${releaseNotesFiles.length} release notes files:`);
  for (const item of releaseNotesFiles) {
    console.log(`  - Version ${item.version}: ${item.file}`);
  }

  // --------------------------------------------------
  // 2. For each release notes file, fetch the content and chromestatus.com data.
  // --------------------------------------------------

  console.log("\nStep 2: Fetching data and analyzing...");
  
  const results = [];

  for (const item of releaseNotesFiles) {
    console.log(`\nProcessing version ${item.version}...`);

    // Read the release notes content.
    const releaseNotesContent = await readReleaseNotesContent(item.fullPath);
    console.log(`  Read ${releaseNotesContent.length} characters from ${item.file}`);

    // Fetch chromestatus.com features for this version.
    const chromeStatusData = await fetchChromeStatusFeatures(item.version);
    const featureCount = chromeStatusData?.features_by_type 
      ? (Array.isArray(chromeStatusData.features_by_type) 
          ? chromeStatusData.features_by_type.length 
          : Object.keys(chromeStatusData.features_by_type).length)
      : 0;
    console.log(`  Found ${featureCount} feature categories on chromestatus.com`);

    // Compare using AI.
    const result = await compareWithAI(item.version, releaseNotesContent, chromeStatusData);
    results.push(result);
  }

  // --------------------------------------------------
  // 3. Generate and output the report.
  // --------------------------------------------------

  console.log("\nStep 3: Generating report...");
  
  const report = generateReport(results);

  // Write the report to a file only if running locally (not when running via GitHub Actions).
  if (!process.env.GITHUB_ACTIONS) {
    const reportPath = "release-notes-comparison-report.md";
    await fs.writeFile(reportPath, report);
    console.log(`Report written to ${reportPath}`);
  }

  // Output to console.
  console.log("\n" + "=".repeat(60));
  console.log("REPORT");
  console.log("=".repeat(60));
  console.log(report);

  // --------------------------------------------------
  // 4. Optionally create a GitHub issue with the report.
  // --------------------------------------------------

  if (process.env.CREATE_ISSUE === "true") {
    console.log("\nStep 4: Creating or updating GitHub issue with the report...");
    
    const token = process.env.GITHUB_TOKEN || process.env.token;
    if (token) {
      try {
        const octokit = getOctokit(token);
        
        // Build a title that includes the versions being compared.
        const versions = results.map(r => r.version).join(', ');
        const issueTitle = `Release Notes Comparison Report (versions ${versions})`;
        
        // Check if an open issue already exists for these versions.
        const existingIssues = await octokit.rest.issues.listForRepo({
          owner: "MicrosoftDocs",
          repo: "edge-developer",
          state: "open",
          labels: "release-notes-comparison",
          per_page: 100
        });
        
        // Look for an issue that covers the same versions.
        const existingIssue = existingIssues.data.find(issue => 
          issue.title.includes(`versions ${versions}`)
        );
        
        if (existingIssue) {
          // Update the existing issue with the new report.
          console.log(`Found existing issue #${existingIssue.number}, updating...`);
          
          await octokit.rest.issues.update({
            owner: "MicrosoftDocs",
            repo: "edge-developer",
            issue_number: existingIssue.number,
            body: report + `\n\n---\n*Last updated: ${new Date().toISOString()}*`
          });
          
          console.log(`GitHub issue #${existingIssue.number} updated successfully.`);
        } else {
          // Create a new issue.
          await octokit.rest.issues.create({
            owner: "MicrosoftDocs",
            repo: "edge-developer",
            title: issueTitle,
            body: report,
            labels: ["documentation", "release-notes-comparison"]
          });
          
          console.log("GitHub issue created successfully.");
        }
      } catch (error) {
        console.error("Error creating/updating GitHub issue:", error.message);
      }
    } else {
      console.log("Skipping issue creation - no GITHUB_TOKEN available.");
    }
  }

  console.log("\nDone!");
}

main().catch(error => {
  console.error("Script failed:", error);
  process.exit(1);
});
