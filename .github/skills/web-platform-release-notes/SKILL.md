---
name: web-platform-release-notes
description: Review and edit the auto-generated draft of the Microsoft Edge web platform release notes (microsoft-edge/web-platform/release-notes/<version>.md) into a publishable page. Use when working on a web-platform-release-notes-<version> branch, verifying draft features against chromestatus.com, reorganizing features into CSS/HTML/JavaScript/Web APIs sections, rewriting chromestatus summaries for web developers, adding MDN/spec links, updating the origin trials table, or registering a release in index.md and toc.yml.
---

# Microsoft Edge web platform release notes

Release notes live in `microsoft-edge/web-platform/release-notes/<version>.md` (for example `156.md`). One page per Microsoft Edge stable release. Releases ship roughly every 2 weeks (for example 153 = Sep. 10, 154 = Sep. 24, 155 = Oct. 8, 156 = Oct. 22).

Release notes are **never written from scratch**. You always start from an auto-generated draft, then verify, reorganize, and rewrite it. Always use the most recent published pages (`<version - 1>.md`, `<version - 2>.md`) as the reference for structure and wording.

## Workflow overview (do these steps in order)

1. **Start from the draft** that the automation created (see "Where the draft comes from").
2. **Verify the feature list against chromestatus.com** (see "Step 1: Verify what's actually shipping"). Remove features that no longer ship in this version; add missing ones.
3. **Reorganize** features into logical H2 sections (see "Step 2: Reorganize into sections").
4. **Rewrite every feature entry** for web developers, and **add links**: MDN first, otherwise spec, explainer, or Chrome Platform Status (see "Step 3: Rewrite and link", plus the style guidance in the rest of this skill).
5. **Rebuild the origin trials table (mandatory)** from the active trials at https://developer.microsoft.com/en-us/microsoft-edge/origin-trials/trials, keeping only trials that expire at least 2 weeks after the release date and that aren't shipping as features on this page (see "Origin trials table").
6. **Fix the other boilerplate sections**: DevTools, WebView2, deprecations.
7. **Register the page** in `index.md` and `toc.yml`, and run the final checklist.
8. **Clean up the previous release notes (last step)**: re-check the previous 2 published pages against chromestatus.com, and remove features that ended up not shipping in those versions (see "Final step: Clean up previous release notes").

Report to the user what you removed, added, or were unsure about (for example, features whose status on chromestatus.com is ambiguous), rather than silently dropping content.

## Where the draft comes from

* Workflow: `.github/workflows/webplat-relnotes.yaml` runs daily (or manually, with an optional `version` input), and runs `scripts/web-platform-release-notes.js`.
* The script picks the next Beta version (N+1, based on the release dates in `mdn/browser-compat-data` `browsers/edge.json`), then:
  * Fetches `https://chromestatus.com/api/v0/features?milestone=<version>` (the response starts with `)]}'`, which must be stripped before JSON parsing) and uses `features_by_type`.
  * Scrapes the active Edge origin trials from `https://developer.microsoft.com/en-us/microsoft-edge/origin-trials/trials`.
  * Renders `scripts/beta-release-notes-template.njk` into `microsoft-edge/web-platform/release-notes/<version>.md`.
  * Commits to a new branch `web-platform-release-notes-<version>`, pushes it, and opens an issue "Microsoft Edge Beta <version> web platform release notes ready for review".
* To work on a draft: `git fetch origin web-platform-release-notes-<version>` and check out that branch.

### What the raw draft looks like (and what to fix)

* All "Enabled by default" features are dumped, in **chromestatus order (effectively random)**, under a `**TODO: MOVE THE BELOW FEATURE SECTIONS INTO THE CORRECT H2 SECTIONS ABOVE**` marker, after empty `## CSS features` and `## Web APIs` headings. Remove the TODO marker once features are moved.
* The Detailed contents list has a placeholder `* [CSS/SVG/Web API features](#csssvgweb-api-features)` entry. Replace it with the real section list.
* Each feature heading is the raw chromestatus feature name (for example "Avoid caching module failures"), and the body is the raw chromestatus `summary`, written by Chromium engineers. Treat both as source material, not as text to keep.
* Each feature has an empty `See also:` + `* []` placeholder. Fill it in.
* `## Deprecated or removed features` lists chromestatus "Deprecated" and "Removed" features with a TODO to also add them to `microsoft-edge/web-platform/site-impacting-changes.md`. Do that (or flag it to the user), then remove the TODO.
* `## WebView2` points to the WebView2 release notes index with a todo comment. Replace it with the specific runtime page if `microsoft-edge/webview2/release-notes/runtime/<version>.md` exists.
* The origin trials table uses scraped titles/descriptions and `en-us` URLs, and doesn't filter by expiration date or by shipping status. Always rebuild it (see "Origin trials table").
* The draft has a blank line after `**Detailed contents:**`. Published pages vary; either is fine, but be consistent within a page.

## Step 1: Verify what's actually shipping

Chromestatus entries change often, after the draft was generated. Features get pushed to a later milestone, rolled back, converted to an origin trial, or get their names and summaries changed. Never trust the draft's feature list as-is.

1. Check the roadmap for the version: <https://chromestatus.com/roadmap>. Look at the milestone column for this version (Chromium milestone number = Microsoft Edge major version number). The roadmap is a JavaScript-rendered page; if it can't be fetched as text, open it in a browser (for example, with the chrome-devtools MCP tools), or use the same data from the API:
   * `https://chromestatus.com/api/v0/features?milestone=<version>`. Strip the leading `)]}'` before parsing. The API can be slow (a minute or more); be patient, or use a browser.
   * `features_by_type` groups features by: `Enabled by default`, `Deprecated`, `Removed`, `Stepped rollout`, `Origin trial`, `In developer trial (Behind a flag)`.
   * Each feature has `id`, `name`, `summary`, `standards` (spec link and maturity), `resources` (docs/samples), and `browsers.chrome` status info. The feature page is `https://chromestatus.com/feature/<id>`.
2. Compare the draft's features with the current **Enabled by default** list for the version:
   * **In the draft, but no longer shipping in this version** (moved to another milestone, removed from the list, or now only an origin trial or behind a flag): remove it from the page. Tell the user which ones you removed and why.
   * **Shipping, but missing from the draft**: add it.
   * **Renamed or summary changed**: use the latest chromestatus information as the source.
   * Re-check **Deprecated** and **Removed** in the same way.
3. **Stepped rollout** features: these are gradually enabled. Don't silently include or drop them; ask the user whether to document them.
4. Check that a feature wasn't already documented in an earlier Edge release notes page (search `microsoft-edge/web-platform/release-notes/*.md` for the feature name and key identifiers). If a feature previously appeared as an origin trial, it's fine to document it now that it ships, and remove it from the origin trials table.
5. Origin trials: rebuild the table (mandatory; see "Origin trials table").
6. Optionally, `scripts/compare-release-notes.js` (run from `scripts/`, requires `GITHUB_TOKEN` in `scripts/.env`) compares recent release notes pages with chromestatus.com and writes `scripts/release-notes-comparison-report.md`.

## Step 2: Reorganize into sections

Move each feature into the H2 section where a web developer would look for it, based on the technology the developer writes, not on the Chromium component:

* `## CSS features`: properties, values, functions, selectors, pseudo-classes/elements, at-rules, media features. Also CSSOM/Typed OM changes that are mostly about CSS.
* `## HTML features`: elements, attributes, and HTML-level behaviors (for example popover/dialog light dismiss, responsively-sized iframes).
* `## JavaScript features`: ECMAScript language and built-ins (for example `Iterator` methods, new `import` attribute types).
* `## SVG features`: SVG-specific features (rare).
* `## Web APIs`: DOM and browser APIs (Fetch, WebSocket, WebGPU, WebRTC, WebAudio, IndexedDB, Web Crypto, Window Management, permissions policies, HTTP headers, loading/prerendering behavior), plus engine/implementation changes that affect web developers (for example an IndexedDB storage backend or XML parser change).
* `## Deprecated or removed features`.

Rules:
* Only create sections that have entries. Keep the H2 order from "Page structure" below.
* Within a section, put the most broadly useful or notable features first; group related features next to each other (for example, two WebSocket changes, or two Background Fetch changes, side by side).
* If several chromestatus entries describe one developer-facing feature, merge them into one entry.
* Gray areas are fine either way, but be consistent with earlier pages (for example, past pages placed `<camera>`/`<microphone>` elements under Web APIs, and text modules under Web APIs).
* Update **Detailed contents** to exactly match the final sections and headings.

## Step 3: Rewrite and link

Chromestatus summaries are written by engineers, for engineers. They're often inconsistent, terse, full of internal jargon, or missing the context that a web developer needs. Heavily rewrite each entry; don't just copyedit.

For each feature:
1. **Understand the feature first.** Read the chromestatus feature page (`https://chromestatus.com/feature/<id>`), the spec, and the explainer linked from it, and the MDN page if one exists. Don't guess about behavior that isn't stated in a source.
2. **Rewrite the heading** into a short, developer-searchable name (see "Feature entry headings"). For example, chromestatus "Avoid caching module failures" became "Failed module imports can be retried".
3. **Rewrite the body** for a web developer who hasn't followed the spec discussion (see "Feature entry body"): what it is, how to use it, why it matters, what changed compared to before. Add a minimal code example when it makes the feature much easier to understand.
4. **Remove Chromium-internal content**: bug numbers, flag names, Finch/rollout details, intent-to-ship, "this CL", engineering motivations that don't affect developers, and references to "Chrome" (use "Microsoft Edge").
5. **Add links** in the `See also:` list (see "See also links"):
   * MDN first. Find the page with the MDN MCP tools (search, then get-doc to confirm it exists), or check the URL. New features often don't have MDN pages yet; don't link to a nonexistent page.
   * Otherwise: the spec section (from chromestatus `standards`), the explainer, or, as a last resort, the chromestatus feature page "at Chrome Platform Status".
   * Link to an earlier Edge release notes entry when the feature builds on one.

Rest of this skill: the style and formatting guidance to apply while rewriting.

## Audience and purpose

* Readers are **web developers** building sites and web apps. Not end users, not IT admins, not browser engineers.
* The goal: tell developers **what's new or changed in the web platform** in this version of Microsoft Edge, **what they can do with it**, and **where to learn more**.
* Each entry is a short summary, not a tutorial. Depth lives in the linked MDN/spec/explainer pages.

## Voice and tone

* Second person, addressed to the developer: "you can now...", "Use this property to...", "This lets you...", "This helps you...".
* Present tense, factual, neutral. No marketing language ("exciting", "powerful", "game-changing"), no exclamation marks, no emoji.
* Refer to the browser as **Microsoft Edge** (not "Edge", not "Chrome", not "we"). Exceptions are allowed inside quoted feature/trial names (for example the `PrefetchAndPrerenderActivationBeacon` trial description: "Allows Edge to...").
  * "Chromium" may be mentioned for interop/compat context, for example "This makes Microsoft Edge, and Chromium, compatible with Firefox and Safari."
* Use "now" to signal a change: "The `overflow` CSS property now supports...", "Microsoft Edge now uses...".
* Use "Previously, ..." to describe the old behavior/limitation, when that helps explain the value of the change.
* Mention interoperability when relevant: "This aligns Microsoft Edge with Firefox and Safari", "This matches similar support on the Fetch API", "This aligns Microsoft Edge with the updated CSS Font Loading and CSS Fonts 4 specifications."
* Expand acronyms on first use when not universally known: "Cascading Style Sheets (CSS)", "Cross-Origin Resource Sharing (CORS)", "Virtual Desktop Infrastructure (VDI)", "`XMLHttpRequest` (XHR)", "WebGPU Shading Language (WGSL)".
* Prefer explicit, slightly longer phrasing over terse phrasing. Examples of the house style:
  * "by using X" rather than "using X" / "via X".
  * "that are sent by the server" rather than "sent by the server".
  * "which releases on Oct. 22, 2026" rather than "released Oct. 22".
  * Add commas to separate clauses for readability: "Use this HTTP response header in cases where you embed a cross-origin iframe that is particularly important to your application, to avoid delaying its loading."
* Two spaces after a period between sentences on the same line (`Sentence one.  Sentence two.`). This is consistent throughout the pages.
* Use _italics_ (underscores) to introduce a defined term: "_Light dismiss_ is the behavior where...", "_lock_ the user's scrolling gesture", "considered _hidden_".
* Use **bold** for UI elements and keys: "pressing the **Tab** key".

## Page structure (in order)

1. YAML front matter.
2. H1 title.
3. Intro paragraph + Insider paragraph (boilerplate).
4. `**Detailed contents:**` nested bullet TOC.
5. `## Microsoft Edge DevTools`
6. `## WebView2`
7. Feature category sections (H2), each containing feature entries (H4). Typical order:
   * `## CSS features`
   * `## HTML features` (only if any)
   * `## JavaScript features` (only if any; 153 used "JavaScript features APIs", avoid that wording)
   * `## SVG features` (rare)
   * `## Web APIs`
   * `## Deprecated or removed features` (only if any)
8. `## Origin trials`
9. Chromium attribution note (boilerplate).

Omit any category section that has no entries. Don't leave empty sections.

Section separators are HTML comments, always preceded by 2 blank lines:
* Before every H2 (and before the final note): `<!-- ====================================================================== -->`
* Before every H4 feature entry: `<!-- ------------------------------ -->`

Feature entries use **H4 (`####`)**, directly under H2. There is no H3 level.

## Target page shape (boilerplate)

The draft already contains most of this boilerplate. Use this as the reference for what the final page must look like. Replace `<NNN>`, `<Mon. D, YYYY>` (for example `Oct. 22, 2026`, `Sep. 10, 2026`, `May 7, 2026`; month abbreviations with period: Jan., Feb., Mar., Apr., May, Jun., Jul., Aug., Sep., Oct., Nov., Dec.), and `<MM/DD/YYYY>`.

````markdown
---
title: Microsoft Edge <NNN> web platform release notes (<Mon. D, YYYY>)
description: Microsoft Edge <NNN> web platform release notes (<Mon. D, YYYY>).
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.date: <MM/DD/YYYY>
---
# Microsoft Edge <NNN> web platform release notes (<Mon. D, YYYY>)

The following are the new web platform features and updates in Microsoft Edge <NNN>, which releases on <Mon. D, YYYY>.

To stay up-to-date and get the latest web platform features, download a preview channel of Microsoft Edge (Beta, Dev, or Canary); go to [Become a Microsoft Edge Insider](https://www.microsoft.com/edge/download/insider).

**Detailed contents:**
* [Microsoft Edge DevTools](#microsoft-edge-devtools)
* [WebView2](#webview2)
* [CSS features](#css-features)
  * [`feature-name` property](#feature-name-property)
* [Web APIs](#web-apis)
  * [Feature name](#feature-name)
* [Origin trials](#origin-trials)


<!-- ====================================================================== -->
## Microsoft Edge DevTools

See [What's new in DevTools (Microsoft Edge <NNN>)](../../devtools/whats-new/<NNN>.md).


<!-- ====================================================================== -->
## WebView2

See:
* [Runtime <NNN>.0.<build>.<patch> (<Mon. D, YYYY>)](../../webview2/release-notes/runtime/<NNN>.md)


<!-- ====================================================================== -->
## CSS features

The following new Cascading Style Sheets (CSS) features are included in Microsoft Edge.


<!-- ------------------------------ -->
#### `feature-name` property

...


<!-- ====================================================================== -->
## Web APIs

The following new Web API features are included in Microsoft Edge.


<!-- ------------------------------ -->
#### Feature name

...


<!-- ====================================================================== -->
## Origin trials

The following are origin trials for new experimental APIs that are available in Microsoft Edge.

Origin trials let you try experimental APIs on your own live website for a limited time.  To learn more about origin trials, see [Use origin trials in Microsoft Edge](../../origin-trials/index.md).

For the full list of available origin trials, see [Microsoft Edge Origin Trials](https://developer.microsoft.com/microsoft-edge/origin-trials/).

| Name | Description | Register |
|---|---|---|
| Trial name | One-sentence description. | [Register](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/<guid>) |


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and shared by Chromium.org and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
````

Other section intros (one sentence, same pattern):
* `## HTML features` → "The following new HTML features are included in Microsoft Edge."
* `## JavaScript features` → "The following new JavaScript features are included in Microsoft Edge."
* `## Deprecated or removed features` → no intro sentence needed.

### DevTools section variants

If the DevTools "What's new" page for this version doesn't exist yet, link to the index and leave a todo comment:

```markdown
See [What's new in Microsoft Edge DevTools](../../devtools/whats-new/index.md).
<!-- todo: when exists, use instead:
See [What's new in DevTools (Microsoft Edge <NNN>)](../../devtools/whats-new/<NNN>.md).
-->
```

### WebView2 section variants

Link to the matching WebView2 runtime release notes page. Before stable ships, it may be a **Preview Runtime** (for example `[Preview Runtime 156.0.4314.8 (Oct. 12, 2026)](../../webview2/release-notes/runtime/156.md)`). Check `microsoft-edge/webview2/release-notes/runtime/<NNN>.md` for the exact version and date. Prefer the `See:` + bullet list form.

## Detailed contents (mini-TOC)

* Label line is exactly `**Detailed contents:**`.
* Top-level bullets for every H2 (except the final note); nested bullets for every H4 under it, in the same order as the page.
* Link text is the heading text exactly, including backticks. Anchors follow docs slug rules: lowercase, spaces → `-`, backticks/parentheses/colons/`@`/`<>`/`.` removed, hyphens and underscores kept. Examples:
  * `` #### `random()` function `` → `#random-function`
  * `` #### Optional descriptors in `@property` rules `` → `#optional-descriptors-in-property-rules`
  * `#### Digital Credentials API - Issuance support` → `#digital-credentials-api---issuance-support`
  * `` #### `Iterator.includes` `` → `#iteratorincludes`
  * `` #### WebGPU: `buffer_view` feature `` → `#webgpu-buffer_view-feature`
* Use a consistent indent for nested bullets (2 spaces is preferred; older pages used 3).

## Feature entry headings (H4)

Make headings short and scannable, naming the feature as a developer would search for it:

* CSS property: `` `text-decoration-inset` property `` (append "property").
* CSS function: `` `random()` function ``, `` `symbols()` function ``.
* CSS pseudo-class/pseudo-element: `` `:navigation-source` pseudo-class ``.
* CSS value of a property: `` `scroll-snap-type: pair` to snap to a single element `` (code + short purpose).
* HTML element: `` `<camera>` and `<microphone>` elements ``, `` Responsively-sized `<iframe>` ``.
* API area prefix with a colon for scoped changes: `IndexedDB: SQLite backend`, `WebGPU: fragment depth`, `WebAudio: Configurable render quantum`, `Fetch API: Forward reason from AbortController to fetch Response`.
* Behavior change as a plain-language statement: `Failed module imports can be retried`, `Pause media playback on not-visible iframes`, `Light dismiss improvements for popovers and dialogs`.
* Removal: `` Removed `_current` link target ``.
* Use sentence case (don't capitalize words like "Updates" mid-heading), except for proper names of APIs/specs.
* Code identifiers in backticks.

## Feature entry body

Typical shape (2–5 short paragraphs, then links):

1. **What it is** (first sentence). Lead with the feature name and what it does, for example:
   * "The `text-decoration-inset` CSS property controls how far..."
   * "The `random()` CSS function brings generative randomness to CSS, allowing you to..."
   * "The `WebSocket` constructor now accepts an `option` object as its second argument, for..."
   * Name the technology type next to the identifier: "the `margin-trim` CSS property", "the `symbols()` CSS function", "the `:navigation-source` CSS pseudo-class", "the `media-playback-while-not-visible` permission policy", "the `Supports-Loading-Mode: prerender-cross-origin-frames` HTTP response header".
2. **Details**: values, options, or behavior. Use a bullet list when there are several values/options/cases; each bullet is a full phrase ending in a period, for example:
   * "`auto`, which lets the browser determine..."
   * "`"hardware"`, to let the browser select a size that's optimized for the audio hardware."
   * For value lists with longer explanations, use `` * `value` - Explanation. `` or a bullet followed by indented paragraphs.
3. **Why it matters / use case**: "Use this to...", "For example, use this to create a table that keeps both the column and row headers in view...", "This is useful for web apps that...", "A common use case is...".
4. **Previously / context** (optional): "Previously, a failure to import a module was cached, and retrying importing the same module returned the same failure."
5. **Interop / caveats** (optional): permissions required ("The user must grant the site the permission to access the local network."), phased rollouts ("In a future phase, _existing_ data stores will be migrated..."), alignment with other browsers.
6. **Code example** (optional, but encouraged for CSS and for API signature changes). Keep it minimal (a few lines), use ```` ```css ```` or ```` ```javascript ```` fences, and introduce it with a sentence ending in a colon ("For example, ...:" / "The following example displays...:"). Comments inside code are fine.
7. **`See also:`** list (required).

Keep entries focused on developer impact. Don't paste chromestatus text verbatim; rewrite it in this voice, and drop Chromium-internal details (flags, bug numbers, intent-to-ship links, engineering jargon).

For **removals/deprecations**: describe what was supported previously (with a small example), state that it's been removed and why ("because it's nonstandard and is infrequently used"), and link to the replacement or the MDN reference.

## "See also" links

Format: a line `See also:` followed by a bullet list. Every bullet ends with a period when it uses the "at MDN." / "in _Spec name_." suffix forms.

Preferred link sources, in order: MDN, then the spec, then an explainer, then Chrome Platform Status. Link patterns:

* MDN: `* [text-decoration-inset CSS property](https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-inset) at MDN.`
  * Use `https://developer.mozilla.org/docs/...` (no locale segment like `/en-US/`).
  * Link text describes the page type: "`<name>` CSS property", "`<name>()` CSS function", "`@property` CSS at-rule", "`::scroll-marker` CSS pseudo-element", "`<name>` HTML attribute value", "WebSocket", "Fetch API", "`Iterator.prototype.includes()`", "CSS: registerProperty() static method".
  * Linking to a section of an MDN page: `* [colorSpace](<url>#colorspace) in _HTMLCanvasElement: getContext() method_, at MDN.`
* Spec section: `* [pair](https://drafts.csswg.org/css-scroll-snap-1/#valdef-scroll-snap-type-pair) in _CSS Scroll Snap Module Level 1_.`
* Spec (whole): `* [Fetch](https://fetch.spec.whatwg.org/) standard.` or `* [WebGPU Shading Language](https://www.w3.org/TR/WGSL/) at W3C.` or a bare `* [Digital Credentials](https://w3c-fedid.github.io/digital-credentials)`.
* Explainer: `* [Single-Axis Scroll Containers explainer](https://github.com/explainers-by-googlers/single-axis-scroll-containers)`
* Chrome Platform Status (when nothing better exists): `* [WebAudio: Configurable render quantum](https://chromestatus.com/feature/5078190552907776) at Chrome Platform Status.`
* Earlier Edge release notes: ``* [`<usermedia>` element](./151.md#usermedia-element) in _Microsoft Edge 151 web platform release notes (Jul. 30, 2026)_.``
* Escape angle brackets in link text that aren't in backticks: `[&lt;dialog&gt; HTML dialog element](...)`.

Verify that MDN URLs exist (use the MDN MCP tools or fetch the URL) before adding them. MDN moved CSS/HTML reference pages under `/Reference/` (for example `/docs/Web/CSS/Reference/Properties/...`, `/docs/Web/HTML/Reference/Elements/...`); match the current URL.

## Origin trials table

### Mandatory: rebuild the list of trials

This step is **mandatory** for every release notes page. Don't copy the previous page's table or trust the draft's table as-is.

1. Open <https://developer.microsoft.com/en-us/microsoft-edge/origin-trials/trials>. This is the only source of truth. It's a JavaScript-rendered page; if it can't be fetched as text, open it in a browser (for example, with the chrome-devtools MCP tools). Each trial's details page shows its **Expires** (Trial Expiration Date) value.
2. For **every** trial listed there, include it in the table only if **all** of the following are true:
   * **It's still active**: its expiration date is in the future.
   * **It stays active for at least 2 more weeks**: its expiration date is at least 14 days after the release date of this Microsoft Edge version (the date in the page title). Trials expiring sooner than that are excluded.
   * **It isn't shipping in this release**: the feature isn't documented as a shipping feature anywhere on this page (CSS, HTML, JavaScript, Web APIs sections). There's no need for an origin trial when the feature ships. Compare by meaning, not only by exact name (for example the "Prerendering cross-origin iframes" trial vs. the "Prerender cross-origin iframes" feature entry in 155).
3. Every trial that passes all three checks must be in the table; every trial that fails any check must not be.
4. Tell the user which trials you excluded and why (expired, expires within 2 weeks of release, or shipping in this release).

### Table format

* Three columns: `| Name | Description | Register |`, header separator `|---|---|---|`.
* **Name** and **Description** for trials already listed in an earlier release notes page: copy both **as-is** (verbatim) from the most recent page that lists the trial (search `microsoft-edge/web-platform/release-notes/*.md` by its Register URL GUID or name). Most trials last for multiple releases; don't rewrite, reword, or "improve" text that was already written. Only the Register URL may need fixing (no `/en-us`).
* **Name** for new trials: the trial name; wrap code identifiers in backticks (`` `<install>` HTML element ``, `` `prerender_until_script` Speculation Rules API action ``).
* **Description** for new trials: write 1–2 sentences, starting with a verb phrase where possible ("Enables...", "Lets you...", "Exposes...", "Monitors...", "Adds..."), ending with a period, two spaces between sentences. Base it on the trial's page, not the raw scraped text.
* **Register**: `[Register](https://developer.microsoft.com/microsoft-edge/origin-trials/trials/<guid>)` (the trial's details page URL, without the `/en-us` locale segment).

## Final step: Clean up previous release notes

Features sometimes move to a later milestone (or get dropped) after their release notes page was published. Published pages aren't re-checked afterwards, so do it now, as the last step of every new release notes page.

1. Take the **previous 2 published pages** (for example, when writing `157.md`, check `156.md` and `155.md`).
2. For each page, fetch the current chromestatus data for **that page's** milestone (`https://chromestatus.com/api/v0/features?milestone=<that version>`, or https://chromestatus.com/roadmap), as in "Step 1: Verify what's actually shipping".
3. For every feature entry on that page (CSS, HTML, JavaScript, Web APIs, Deprecated or removed features), check that it's still listed for that milestone with the same status (for example still "Enabled by default"). Open the feature's chromestatus page if the name changed or the match is unclear.
4. If a feature no longer ships in that version:
   * Remove its H4 entry (including its `<!-- ------------------------------ -->` separator) and its **Detailed contents** bullet.
   * If that leaves an H2 section empty, remove the section and its Detailed contents bullet too.
   * If it moved to the version you're currently writing, make sure it's documented in the new page instead (reuse and adapt the previous wording). If it moved to a later version, it'll be picked up by that version's draft.
   * Remove or fix any links to the removed entry's anchor from other pages (search `microsoft-edge/` for `<version>.md#<anchor>`).
5. Don't touch the origin trials tables of previous pages.
6. Report to the user, per page, which features you removed and where they moved to (if known). If the status is ambiguous, ask the user instead of removing.

## Registering a new page

When creating `<NNN>.md`, also update (see the `maint:` comments in both files):

1. `microsoft-edge/web-platform/release-notes/index.md`: add `* [Microsoft Edge <NNN> web platform release notes (<Mon. D, YYYY>)](./<NNN>.md)` at the top of the list, remove the oldest entry so 10 remain, and update `ms.date`.
2. `microsoft-edge/toc.yml`: add a new entry at the top of the release notes list, and move the oldest of the 10 into the **Archive** `items` (indented one level deeper):

   ```yaml
           - name: Microsoft Edge <NNN>
             href: ./web-platform/release-notes/<NNN>.md
             displayName: Microsoft Edge <NNN> web platform release notes (<Mon. D, YYYY>)  # page title
   ```

## Final checklist

* [ ] Feature list re-verified against chromestatus.com for this milestone; removed/added features reported to the user.
* [ ] All draft TODO markers and placeholders removed (`**TODO: ...**`, `CSS/SVG/Web API features`, empty `* []` links).
* [ ] Deprecated/removed features also added to `site-impacting-changes.md` (or flagged to the user).
* [ ] No raw chromestatus wording, Chromium-internal details, or "Chrome" references left.
* [ ] Title, description, H1, intro sentence, index.md, and toc.yml all use the same version and date string.
* [ ] `ms.date` matches the release date (`MM/DD/YYYY`).
* [ ] Every H2/H4 appears in **Detailed contents**, in order, with working anchors.
* [ ] Separators (`====` before H2, `----` before H4) with 2 blank lines above each.
* [ ] Empty category sections removed.
* [ ] Every feature entry has a `See also:` list with verified links.
* [ ] "Microsoft Edge" (not "Edge"/"Chrome"/"we") in prose; second-person voice; two spaces between sentences.
* [ ] No duplicated or leftover sentences (for example, a sentence accidentally repeated after the `See also:` list).
* [ ] Origin trials table rebuilt from https://developer.microsoft.com/en-us/microsoft-edge/origin-trials/trials: every trial listed is active, expires 14 or more days after the release date, and isn't shipping as a feature on this page; excluded trials reported to the user.
* [ ] Trials already listed in an earlier page reuse that page's Name and Description verbatim.
* [ ] Previous 2 published pages re-checked against chromestatus.com; features that didn't ship removed (entries, Detailed contents bullets, empty sections, incoming anchor links) and reported to the user.
* [ ] Chromium attribution note at the bottom.
