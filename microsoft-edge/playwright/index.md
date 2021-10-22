---
description: Use Playwright to automate and test in Microsoft Edge.
title: Use Playwright to automate and test in Microsoft Edge
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/24/2020
ms.topic: article
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, developer, tools, automation, test, playwright, node, javascript, npm
---

# Use Playwright to automate and test in Microsoft Edge

## Overview

[Playwright][PlaywrightMain] is a [Node.js][NodejsMain] library to automate [Chromium][ChromiumHome], [Firefox][FirefoxMain], and [WebKit][WebKitMain] with a single API.  Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable, and fast.  Since [Microsoft Edge is built on the open-source Chromium web platform][MicrosoftBlogsWindowsExperience20181206], Playwright is also able to automate Microsoft Edge.

Playwright launches [headless browsers][WikiHeadlessBrowser] by default.  Headless browsers do not display a UI, so instead you must use the command line.  You may also configure Playwright to run full \(non-headless\) Microsoft Edge as well.

## Writing tests

> [!NOTE]
> [Playwright][PlaywrightMain] requires Node.js version 12 or above. Run `node -v` from the command line to ensure you have a compatible version of Node.js.  The browser binaries for Chromium, Firefox and WebKit work across Windows, macOS, and Linux. For more information, navigate to [Playwright System Requirements][PlaywrightSystemRequirements].

Install [Playwright Test][PlaywrightMain] to test your website or app with the following command.

```shell
npm i -D @playwright/test
```

To install browsers, run the following command. It will download [Chromium][ChromiumHome], [Firefox][FirefoxMain], and [WebKit][WebKitMain].

```shell
npx playwright install 
```

## First test

Playwright should be familiar to users of other browser-testing frameworks like [WebDriver][WebDriverChromiumMain] or [Puppeteer][PuppeteerMain].  You can create an instance of the browser, open a page, and then manipulate it with the [Playwright API][PlaywrightAPIReference].  [Playwright Test][PlaywrightMain] which is Playwright's test-runner will launch a browser and context for you. An isolated page gets then passed into every test.

```ts
// tests/foo.spec.ts
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});
```

Now run your tests:

```shell
npx playwright test
```

See [here][PlaywrightMain] more information about running tests.

## Running tests in Microsoft Edge

In order to run your tests in Microsoft Edge, you need to create a config for Playwright Test, inside of it we create one project with the Beta channel. (There is no Stable channel yet for Linux)

```ts
// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'Microsoft Edge',
      use: {
        // Supported Microsoft Edge channels are: msedge, msedge-beta, msedge-dev, msedge-canary
        channel: 'msedge-beta',
      },
    },
  ],
};

export default config
```

Either you have the browser already installed on your system, or you install Microsoft Edge via Playwright:

```shell
npx playwright install msedge-beta
```

When using the above `playwright.config.ts` Playwright Test will use Micosoft Edge to run your tests:

```shell
npx playwright test --headed
```

## Playwright as a library

You can also consume Playwright as a library, this allows you to e.g. use a different test-runner:

```javascript
// example.js
const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch({
    channel: 'msedge-beta',
  });
  const context = await browesr.newContext();
  const page = await context.newPage();
  await page.goto('https://www.microsoft.com/edge');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
```

:::image type="complex" source="../media/playwright-example.png" alt-text="The example.png file produced by example.js" lightbox="../media/playwright-example.png":::
    The `example.png` file produced by `example.js`
:::image-end:::

`example.js` is just a simple demonstration of the automation and testing scenarios enabled by Playwright.  To take screenshots in multiple web browsers, change the following code.

*   Chromium  `await chromium.launch()`
*   Firefox  `await firefox.launch()`
*   WebKit  `await webkit.launch()`

For more information about Playwright and Playwright Test, navigate to the [Playwright website][PlaywrightMain].  Check out the  [Playwright repo][PlaywrightRepo] on GitHub.  To share your feedback on automating and testing your website or app with Playwright, [file an issue][PlaywrightRepoNewIssue].


<!-- ====================================================================== -->
<!-- links -->

[WebdriverChromiumMain]: ../webdriver-chromium/index.md "WebDriver | Microsoft Docs"
[PuppeteerMain]: ../puppeteer/index.md "Puppeteer | Microsoft Docs"

[MicrosoftBlogsWindowsExperience20181206]: https://blogs.windows.com/windowsexperience/2018/12/06/microsoft-edge-making-the-web-better-through-more-open-source-collaboration "Microsoft Edge: Making the web better through more open-source collaboration | Microsoft Experience Blog"

[MicrosoftEdgeDownload]: https://microsoft.com/edge "Download Microsoft Edge"

[ChromiumHome]: https://www.chromium.org/Home "Chromium | The Chromium Projects"

[FirefoxMain]: https://www.mozilla.org/firefox "Mozilla Firefox"

[NodejsMain]: https://nodejs.org "Node.js"

[npmEdgePaths]: https://www.npmjs.com/package/edge-paths "edge-paths | npm"

[PlaywrightMain]: https://playwright.dev/docs/intro "Playwright"
[PlaywrightAPIReference]: https://playwright.dev/docs/api/class-playwright "Playwright API Reference"
[PlaywrightSystemRequirements]: https://playwright.dev/docs/library#system-requirements "Playwright System Requirements"

[PlaywrightRepo]: https://github.com/microsoft/playwright "Playwright | GitHub"
[PlaywrightRepoNewIssue]: https://github.com/microsoft/playwright/issues/new/choose "New issue in Playwright repo | GitHub"

[WebKitMain]: https://webkit.org "WebKit"

[WikiHeadlessBrowser]: https://en.wikipedia.org/wiki/Headless_browser "Headless browser | Wikipedia"
