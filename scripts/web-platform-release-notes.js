// Script runs daily.

import { request } from "@octokit/request";
import Eleventy from "@11ty/eleventy";
import fs from "fs/promises";

const RELEASE_NOTES_PR_LABEL = "web-platform-release-notes";

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

async function main() {
  // --------------------------------------------------
  // 1. Check which is the next release (first date that's in the future compared to today).
  //    Note this release as N. N is the next stable.
  //    If this future date is within some number of days, then it's time to
  //    do the release note for the next beta: N+1.
  // --------------------------------------------------

  // If the next beta becomes stable within the next 6 days, start working on the next next beta.
  const DAYS_NUMBER_BEFORE_RELNOTES_NOTICE = 6;

  const edgeVersionsResponse = await fetch(
    "https://raw.githubusercontent.com/mdn/browser-compat-data/main/browsers/edge.json"
  );
  const edgeVersions = await edgeVersionsResponse.json();
  const releasesAsArray = Object.values(edgeVersions.browsers.edge.releases);

  const today = new Date();
  let nextBetaReleaseDate = null;
  let nextBetaVersion = null;

  for (let i = 0; i < releasesAsArray.length; i++) {
    const release = releasesAsArray[i];
    const date = new Date(release.release_date);

    if (
      date > today &&
      date - today <= DAYS_NUMBER_BEFORE_RELNOTES_NOTICE * 24 * 60 * 60 * 1000
    ) {
      // Find the next item in the list.
      nextBetaVersion = releasesAsArray[i + 1].engine_version;
      nextBetaReleaseDate = releasesAsArray[i + 1].release_date;
      break;
    }
  }

  if (!nextBetaReleaseDate || !nextBetaVersion) {
    console.error("It's not time to create the next beta release notes.");
    process.exit(0);
  }

  console.log(
    `Preparing the beta release notes for ${nextBetaVersion} (to be released on ${nextBetaReleaseDate}).`
  );

  // --------------------------------------------------
  // 2. Check if there isn't already a PR for the N+1 release notes by search for the existence of a label.
  //    If there is, do nothing.
  //    If there isn't, note the beta version number N' of release date D', and continue.
  // --------------------------------------------------

  const prListResponse = await request(
    "GET /repos/MicrosoftDocs/edge-developer/pulls"
  );
  const prs = prListResponse.data;

  for (const pr of prs) {
    for (const label of pr.labels) {
      if (
        label.name === RELEASE_NOTES_PR_LABEL &&
        pr.title.includes(nextBetaVersion)
      ) {
        console.error(
          `Already found an open PR for the ${nextBetaVersion} release notes: ${pr.html_url}`
        );
        process.exit(0);
      }
    }
  }

  // --------------------------------------------------
  // 3. Fetch Chrome Status features for the N+1 milestone.
  // --------------------------------------------------

  console.log(
    `Fetching the features for ${nextBetaVersion} from Chrome Status.`
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
      return ot.status === "ACTIVE" && ot.startMilestone === nextBetaVersion;
    })
    .map((ot) => {
      return {
        title: ot.display_name,
        description: ot.description,
        expiration: longDate(ot.end_time),
        explainer: ot.documentation_url,
        feedback: ot.feedback_url,
        registration: `https://developer.chrome.com/origintrials/#/register_trial/${ot.id}`,
      };
    });

  // --------------------------------------------------
  // 5. Fetch current Edge origin trials.
  // --------------------------------------------------

  // TODO...
  console.log(
    `Fetching the Edge OTs.`
  );
  const edgeOTs = [];

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
        const shortMonthWithDot = dtf.format(date) + ".";

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
  // 8. Create a new branch, commit the new file, and open a PR from this branch.
  // --------------------------------------------------

  
}

main();
