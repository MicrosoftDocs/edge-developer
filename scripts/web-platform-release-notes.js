// Script runs daily.

import github from '@actions/github';
import Eleventy from "@11ty/eleventy";
import fs from "fs/promises";
import playwright from "playwright";

const EDGE_OT_ROOT = "https://developer.microsoft.com/en-us";
const EDGE_OT_PAGE = `${EDGE_OT_ROOT}/microsoft-edge/origin-trials/trials`;
// If Beta becomes stable within the next N coming days, generate the release notes for Canary.
// This way, the release notes are ready for when Canary becomes Beta.
const DAYS_NUMBER_BEFORE_RELNOTES_NOTICE = 15;
// The Git branch name where the release notes will be generated.
// Keep this in sync with thge webplat-releasenotes.yaml workflow file.
const BRANCH_NAME = "web-platform-release-notes";

async function fetchChromeStatusAPI(url) {
  const response = await fetch(url);
  let text = await response.text();
  text = text.substring(4);
  const data = JSON.parse(text);
  return data;
}

function longDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getReleaseNoteMDFilePath(version) {
  return `https://github.com/MicrosoftDocs/edge-developer/blob/${BRANCH_NAME}/microsoft-edge/web-platform/release-notes/${version}.md`;
}

function getReleaseNoteRawMDFilePath(version) {
  return `https://raw.githubusercontent.com/MicrosoftDocs/edge-developer/refs/heads/${BRANCH_NAME}/microsoft-edge/web-platform/release-notes/${version}.md`;
}

async function getActiveEdgeOTs() {
  const scrapingBrowser = await playwright.chromium.launch({ headless: true });
  const context = await scrapingBrowser.newContext();

  const page = await context.newPage();
  console.log(`Navigating to ${EDGE_OT_PAGE}`);
  await page.goto(EDGE_OT_PAGE);

  // Wait for the OTs to have loaded. We check for the existence of a trial-card
  // that has a __tags element in it. This element is used to display the
  // "Microsoft Edge Only" tag.
  await page.waitForSelector(".trial-card .trial-card__tags");

  // Get the list of all origin trial elements
  const microsoftOriginTrialEls = await page.locator("css=.trial-card", { hasText: "Microsoft Edge Only" });
  const otCards = await microsoftOriginTrialEls.all();
  console.log(`Found ${otCards.length} MS-only origin trials`);

  const otLinks = [];
  for (const otCard of otCards) {
    const otLink = await otCard.locator("css=a", { hasText: "Details" });
    const href = await otLink.getAttribute("href");
    console.log(href);
    otLinks.push(EDGE_OT_ROOT + href);
  }

  await page.close();

  // Go to each OT page to find more information.
  const ots = [];
  for (const otLink of otLinks) {
    const page = await context.newPage();
    console.log(`Navigating to ${otLink}`);
    await page.goto(otLink);

    const trialInfoContainer = await page.locator("css=.block-container__content", { hasText: "Trial Expiration Date" });
    console.log("Found the trial info container");

    const titleEl = await trialInfoContainer.locator("css=.common-heading__title");
    const title = await titleEl.textContent();
    console.log(`Found trial title: ${title}`);

    const descriptionEl = await trialInfoContainer.locator("css=.common-heading__description");
    const description = await descriptionEl.textContent();
    console.log(`Found trial description: ${description}`);

    const expirationDateEl = await trialInfoContainer.locator("css=.trial-id__trial-date", { hasText: "Trial Expiration Date" }).locator("css=p");
    const expiration = await expirationDateEl.textContent();
    console.log(`Found trial expiration date: ${expiration}`);

    const explainerLinkEl = await trialInfoContainer.locator("css=a", { hasText: "Explainer" });
    const explainer = await explainerLinkEl.getAttribute("href");
    console.log(`Found trial explainer: ${explainer}`);

    const feedbackLinkEl = await trialInfoContainer.locator("css=a", { hasText: "Feedback" });
    const feedback = await feedbackLinkEl.getAttribute("href");
    console.log(`Found trial feedback: ${feedback}`);

    ots.push({
      title,
      description,
      expiration: longDate(expiration),
      explainer,
      feedback,
      registration: otLink
    });

    await page.close();
  }

  await scrapingBrowser.close();

  return ots;
}

async function main() {
  // --------------------------------------------------
  // 1. Check which is the next release (first date that's in the future compared to today).
  //    Note this release as N. N is the next stable.
  //    If this future date is within some number of days, then it's time to
  //    do the release note for the next beta: N+1.
  // --------------------------------------------------

  const edgeVersionsResponse = await fetch(
    "https://raw.githubusercontent.com/mdn/browser-compat-data/main/browsers/edge.json"
  );
  const edgeVersions = await edgeVersionsResponse.json();
  const releasesAsArray = Object.values(edgeVersions.browsers.edge.releases);

  const today = new Date();
  let nextBetaReleaseDate = null;
  let nextBetaReleaseDateYear = null;
  let nextBetaReleaseDateMonth = null;
  let nextBetaVersion = null;

  for (let i = 0; i < releasesAsArray.length; i++) {
    const release = releasesAsArray[i];
    const date = new Date(release.release_date);

    if (
      date > today &&
      date - today <= DAYS_NUMBER_BEFORE_RELNOTES_NOTICE * 24 * 60 * 60 * 1000
    ) {
      nextBetaVersion = releasesAsArray[i + 1].engine_version;
      nextBetaReleaseDate = releasesAsArray[i + 1].release_date;
      nextBetaReleaseDateYear = nextBetaReleaseDate?.split("-")[0];
      nextBetaReleaseDateMonth = nextBetaReleaseDate?.split("-")[1];
      console.log(`The next beta release is ${release.engine_version} (${release.release_date}), so we will prepare the release notes for ${nextBetaVersion} (${nextBetaReleaseDate}).`);
      break;
    } else {
      console.log(`Skipping release ${release.engine_version} (${release.release_date}).`);
    }
  }

  if (!nextBetaReleaseDate || !nextBetaVersion) {
    console.error("Now is not the time to create the next beta release notes yet.");
    process.exit(0);
  }

  console.log(
    `Preparing the beta release notes for ${nextBetaVersion} (to be released on ${nextBetaReleaseDate}).`
  );

  // --------------------------------------------------
  // 2. Check if there isn't already a release notes draft for the next beta version.
  // --------------------------------------------------

  const rawFileResponse = await fetch(getReleaseNoteRawMDFilePath(nextBetaVersion));
  if (rawFileResponse.status === 200) {
    console.error(`A PR is already open for the next beta release notes. File exists: ${getReleaseNoteMDFilePath(nextBetaVersion)}.`);
    process.exit(0);
  }

  // --------------------------------------------------
  // 3. Fetch Chrome Status features for the N+1 milestone.
  // --------------------------------------------------

  console.log(
    `Fetching ${nextBetaVersion} features from chromestatus.com.`
  );
  const csMilestoneData = await fetchChromeStatusAPI(
    `https://chromestatus.com/api/v0/features?milestone=${nextBetaVersion}`
  );
  const csFeatures = csMilestoneData.features_by_type;

  // --------------------------------------------------
  // 4. Fetch Chrome Status new origin trials in N+1.
  // --------------------------------------------------

  console.log(
    `Fetching the chromium OTs which are new with ${nextBetaVersion}.`
  );
  const chromeOTsData = await fetchChromeStatusAPI(
    "https://chromestatus.com/api/v0/origintrials"
  );
  const chromeOTs = chromeOTsData.origin_trials
    .filter((ot) => {
      // Only active origin trials that start in the next beta version.
      return ot.status === "ACTIVE" && ot.start_milestone === nextBetaVersion;
    })
    .map((ot) => {
      return {
        title: ot.display_name,
        description: ot.description,
        expiration: longDate(ot.end_time),
        explainer: ot.documentation_url,
        feedback: ot.feedback_url,
        registration: `https://developer.chrome.com/origintrials/#/register_trial/${ot.id}`,// todo: developer.chrome.com ok?
      };
    });

  // --------------------------------------------------
  // 5. Fetch current Edge origin trials.
  // --------------------------------------------------

  console.log(
    `Fetching the Edge OTs.`
  );
  const edgeOTs = await getActiveEdgeOTs();

  // --------------------------------------------------
  // 6. Generate the release notes draft content.
  // --------------------------------------------------
  // Write the fetched data locally for 11ty to use, run 11ty, and then delete the file.

  console.log("Writing the fetched data to a file.");
  await fs.mkdir("_data");
  await fs.writeFile(
    "_data/data.json",
    JSON.stringify({
      nextBetaVersion,
      nextBetaReleaseDate,
      nextBetaReleaseDateYear,
      nextBetaReleaseDateMonth,
      csFeatures,
      edgeOTs,
      chromeOTs,
    })
  );

  const eleventy = new Eleventy(".", "_site", {
    config: function (eleventyConfig) {
      eleventyConfig.addShortcode("monthYear", function (releaseDate) {
        const date = new Date(releaseDate);

        const dtf = new Intl.DateTimeFormat("en-US", { month: "short" });
        const shortMonth = dtf.format(date);
        const shortMonthWithDot = shortMonth.length > 3 ? dtf.format(date) + "." : shortMonth;
        return `${shortMonthWithDot} ${date.getFullYear()}`;
      });

      eleventyConfig.addShortcode("monthDayYear", longDate);

      return {
        dir: {
          data: "_data",
        },
      };
    },
  });

  console.log("Generating the release notes content from the 11ty template.");
  const generated = await eleventy.toJSON();

  // Remove the first empty line, which is added to the template just to avoid
  // eleventy from interpreting the front-matter
  const releaseNotesContent = generated[0].content
    .split("\n")
    .slice(1)
    .join("\n");

  await fs.rmdir("_data", { recursive: true, force: true });

  // --------------------------------------------------
  // 7. Write the release notes draft content to a file.
  // --------------------------------------------------
  // All release notes go into /microsoft-edge/web-platform/release-notes/.
  // The file name should be the next beta version number.

  console.log("Writing the release notes content to a new md file in the repo.");
  const releaseNotesPath = `../microsoft-edge/web-platform/release-notes/${nextBetaVersion}.md`;
  await fs.writeFile(releaseNotesPath, releaseNotesContent);

  // --------------------------------------------------
  // 8. Open an issue on the repo to notify the team about the new release notes draft.
  // --------------------------------------------------

  console.log("Opening an issue to notify the team about the new release notes draft.");
  const title = `Microsoft Edge Beta ${nextBetaVersion} web platform release notes ready for review`;
  const body = `The release notes draft for the next Microsoft Edge beta version ${nextBetaVersion} has been generated in [${nextBetaVersion}.md](${getReleaseNoteMDFilePath(nextBetaVersion)}) on the ${BRANCH_NAME} branch.\n\nPlease [create a pull request](https://github.com/MicrosoftDocs/edge-developer/compare/main...${BRANCH_NAME}), update the content as needed, and close this issue.`;

  const octokit = github.getOctokit(process.env.token);
  const { data: issue } = await octokit.rest.issues.create({
    owner: "MicrosoftDocs",
    repo: "edge-developer",
    title,
    body
  });

  console.log("Release notes draft generation completed successfully.");
}

main();
