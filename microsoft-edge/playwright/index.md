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

[Playwright][PlaywrightMain] is a [Node.js][NodejsMain] library to automate [Chromium][ChromiumHome], [Firefox][FirefoxMain], and [WebKit][WebKitMain] with a single API.  Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable, and fast.  Since [Microsoft Edge is built on the open-source Chromium web platform][MicrosoftBlogsWindowsExperience20181206], Playwright is also able to automate Microsoft Edge.

Playwright launches [headless browsers][WikiHeadlessBrowser] by default.  Headless browsers do not display a UI, so instead you must use the command line.  You may also configure Playwright to run full \(non-headless\) Microsoft Edge as well.

By default, when you install Playwright, the installer downloads [Chromium][ChromiumHome], [Firefox][FirefoxMain], and [WebKit][WebKitMain].  If you have Microsoft Edge \(Chromium\) installed as well, Playwright just needs a one-line code change to test your website or app in Microsoft Edge.  To download Microsoft Edge \(Chromium\), navigate to [Download Microsoft Edge][MicrosoftEdgeDownload].

## Installing Playwright

Install [Playwright][PlaywrightMain] to test your website or app with the following command.

```shell
npm i playwright
```

## Launch Microsoft Edge with Playwright

> [!NOTE]
> [Playwright][PlaywrightMain] requires Node.js version 10.17 or above. Run `node -v` from the command line to ensure you have a compatible version of Node.js.  The browser binaries for Chromium, Firefox and WebKit work across Windows, macOS, and Linux. For more information, navigate to [Playwright System Requirements][PlaywrightSystemRequirements].

Playwright should be familiar to users of other browser-testing frameworks like [WebDriver][WebDriverChromiumMain] or [Puppeteer][PuppeteerMain].  You create an instance of the browser, open a page, and then manipulate it with the [Playwright API][PlaywrightAPIReference].  In the following code snippet, Playwright launches Microsoft Edge \(Chromium\), navigates to `https://www.microsoft.com/edge`, and saves a screenshot as `example.png`.

Copy the following code snippet and save it as `example.js`.

```javascript
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge Dev\\Application\\msedge.exe'
  });
  const page = await browser.newPage();
  await page.goto('https://www.microsoft.com/edge');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
```

Change `executablePath` to point to your installation of Microsoft Edge \(Chromium\).  For example, on macOS, the `executablePath` for Microsoft Edge Canary should be set to `/Applications/Microsoft\ Edge\ Canary.app/`.  To find the `executablePath`, navigate to `edge://version` and copy the **Executable path** on that page or install the [edge-paths][npmEdgePaths] package with the following command.

```shell
npm i edge-paths
```

The following code snippet uses the [edge-paths][npmEdgePaths] package to programmatically find the path to your installation of Microsoft Edge \(Chromium\) on your OS.

```javascript
const edgePaths = require("edge-paths");

const EDGE_PATH = edgePaths.getEdgePath();
```

Finally, set `executablePath: EDGE_PATH` in `example.js`.  Save your changes.

> [!NOTE]
> Microsoft Edge \(EdgeHTML\) does not work with Playwright.  You must install [Microsoft Edge \(Chromium\)][MicrosoftEdgeDownload] to continue following this example.

Now run `example.js` from the command line.

```shell
node example.js
```

Playwright launches Microsoft Edge, navigates to `https://www.microsoft.com/edge`, and saves a screenshot of the page.  You may customize the page size with [page.setViewportSize()][PlaywrightAPIPageSetViewport].

:::image type="complex" source="../media/playwright-example.png" alt-text="The example.png file produced by example.js" lightbox="../media/playwright-example.png":::
    The `example.png` file produced by `example.js`
:::image-end:::

`example.js` is just a simple demonstration of the automation and testing scenarios enabled by Playwright.  To take screenshots in multiple web browsers, change the following code.

*   Chromium  `await chromium.launch()`
*   Firefox  `await firefox.launch()`
*   WebKit  `await webkit.launch()`

For more information about Playwright, navigate to the [Playwright website][PlaywrightMain].  Check out the  [Playwright repo][PlaywrightRepo] on GitHub.  To share your feedback on automating and testing your website or app with Playwright, [file an issue][PlaywrightRepoNewIssue].


<!-- ====================================================================== -->
<!-- links -->
[WebdriverChromiumMain]: ../webdriver-chromium/index.md "WebDriver (Chromium) | Microsoft Docs"
[PuppeteerMain]: ../puppeteer/index.md "Puppeteer | Microsoft Docs"

[MicrosoftBlogsWindowsExperience20181206]: https://blogs.windows.com/windowsexperience/2018/12/06/microsoft-edge-making-the-web-better-through-more-open-source-collaboration "Microsoft Edge: Making the web better through more open-source collaboration | Microsoft Experience Blog"

[MicrosoftEdgeDownload]: https://microsoft.com/edge "Download Microsoft Edge"

[ChromiumHome]: https://www.chromium.org/Home "Chromium | The Chromium Projects"

[FirefoxMain]: https://www.mozilla.org/firefox "Mozilla Firefox"

[NodejsMain]: https://nodejs.org "Node.js"

[npmEdgePaths]: https://www.npmjs.com/package/edge-paths "edge-paths | npm"

[PlaywrightMain]: https://playwright.dev "Playwright"
[PlaywrightAPIReference]: https://playwright.dev#?path=docs/api.md "Playwright API Reference"
[PlaywrightAPIPageSetViewport]: https://playwright.dev#?path=docs%2Fapi.md&q=pagesetviewportsizeviewportsize "page.setViewportSize(viewportSize) | Playwright API Reference"
[PlaywrightSystemRequirements]: https://playwright.dev#?path=docs/intro.md&q=system-requirements "Playwright System Requirements"

[PlaywrightRepo]: https://github.com/microsoft/playwright "Playwright | GitHub"
[PlaywrightRepoNewIssue]: https://github.com/microsoft/playwright/issues/new/choose "New issue in Playwright repo | GitHub"

[WebKitMain]: https://webkit.org "WebKit"

[WikiHeadlessBrowser]: https://en.wikipedia.org/wiki/Headless_browser "Headless browser | Wikipedia"
