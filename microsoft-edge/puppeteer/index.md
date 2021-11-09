---
description: Use Puppeteer to automate and test in Microsoft Edge.
title: Puppeteer overview
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/06/2021
ms.topic: article
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, developer, tools, automation, test
---
# Puppeteer overview

[Puppeteer](https://pptr.dev) is a [Node](https://nodejs.org) library that provides a high-level API to control Microsoft Edge using the [DevTools Protocol](https://chromedevtools.github.io/devtools-protocol).  Puppeteer launches [headless browsers](https://en.wikipedia.org/wiki/Headless_browser) by default.  Headless browsers do not display a UI, so instead you must use the command line.  You may also configure Puppeteer to run full (non-headless) Microsoft Edge as well.

By default, when you install Puppeteer, the installer downloads a recent version of [Chromium](https://www.chromium.org/Home), the open-source browser that [Microsoft Edge is also built upon](https://blogs.windows.com/windowsexperience/2018/12/06/microsoft-edge-making-the-web-better-through-more-open-source-collaboration).  If you have Microsoft Edge  installed, you may use [puppeteer-core](https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-puppeteer-vs-puppeteer-core).  `puppeteer-core` is a lightweight version of Puppeteer that launches an existing browser installation, like Microsoft Edge.  To download Microsoft Edge, navigate to [Download Microsoft Edge Insider Channels](https://www.microsoftedgeinsider.com/download).


<!-- ====================================================================== -->
## Installing puppeteer-core

You may add `puppeteer-core` to your website or app with one of the following commands.

```shell
npm i puppeteer-core
```

```shell
yarn add puppeteer-core
```


<!-- ====================================================================== -->
## Launch Microsoft Edge with puppeteer-core

> [!NOTE]
> `puppeteer-core` relies on Node v8.9.0 or later.  The example below uses `async`/`await` which is only supported in Node v7.6.0 or later.  Run `node -v` from the command-line to ensure you have a compatible version of Node.js.

`puppeteer-core` should be familiar to users of other browser-testing-frameworks like [WebDriver](../webdriver-chromium/index.md).  You create an instance of the browser, open a page, and then manipulate it with the Puppeteer API.  In the following code sample, `puppeteer-core` launches Microsoft Edge, navigates to `https://www.microsoftedgeinsider.com`, and saves a screenshot as `example.png`.

Copy the following code snippet and save it as `example.js`.

```javascript
const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge Dev\\Application\\msedge.exe'
  });
  const page = await browser.newPage();
  await page.goto('https://www.microsoftedgeinsider.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
```

Change `executablePath` to point to your installation of Microsoft Edge.  For example, on macOS, the `executablePath` for Microsoft Edge Canary should be set to `/Applications/Microsoft\ Edge\ Canary.app/`.  To find the `executablePath`, navigate to `edge://version` and copy the **Executable path** on that page or install the [edge-paths](https://www.npmjs.com/package/edge-paths) package with one of the following commands.

```shell
npm i edge-paths
```

```shell
yarn add edge-paths
```

The code sample below uses the [edge-paths](https://www.npmjs.com/package/edge-paths) package to programmatically find the path to your installation of Microsoft Edge on your OS.

```javascript
const edgePaths = require("edge-paths");

const EDGE_PATH = edgePaths.getEdgePath();
```

Finally, set `executablePath: EDGE_PATH` in `example.js`.  Save your changes.

> [!NOTE]
> Microsoft Edge (EdgeHTML) does not work with `puppeteer-core`.  You must install the [Microsoft Edge Insider channels](https://www.microsoftedgeinsider.com/download) to continue following this example.

Now, run `example.js` from the command line.

```shell
node example.js
```

`puppeteer-core` launches Microsoft Edge, navigates to `https://www.microsoftedgeinsider.com`, and saves a screenshot of the webpage.  Customize the screenshot size with [page.setViewport()](https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-pagesetviewportviewport).

:::image type="complex" source="./media/puppeteer-example.png" alt-text="The example.png file produced by example.js" lightbox="./media/puppeteer-example.png":::
   The `example.png` file produced by `example.js`
:::image-end:::

This is just a simple example of the automation and testing scenarios enabled by Puppeteer and `puppeteer-core`.  For more information about Puppeteer and how it works, navigate to [Puppeteer](https://pptr.dev).


<!-- ====================================================================== -->
## See also

*   [WebDriver](../webdriver-chromium/index.md)
*   [WebDriver (EdgeHTML)](/archive/microsoft-edge/legacy/developer/webdriver/index)
*   [Chrome DevTools Protocol Viewer on GitHub](https://chromedevtools.github.io/devtools-protocol)
*   [Microsoft Edge:  Making the web better through more open source collaboration on Microsoft Experience Blog](https://blogs.windows.com/windowsexperience/2018/12/06/microsoft-edge-making-the-web-better-through-more-open-source-collaboration)
*   [Download Microsoft Edge Insider Channels](https://www.microsoftedgeinsider.com/download)
*   [Chromium on The Chromium Projects](https://www.chromium.org/Home)
*   [Node.js](https://nodejs.org)
*   [Puppeteer](https://pptr.dev)
*   [puppeteer vs. puppeteer-core](https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-puppeteer-vs-puppeteer-core)
*   [page.setViewport() on Puppeteer](https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-pagesetviewportviewport)
*   [Headless browser on Wikipedia](https://en.wikipedia.org/wiki/Headless_browser)
-->
*  [Contact the Microsoft Edge DevTools team](../devtools-guide-chromium/contact.md) to send feedback about using Puppeteer, puppeteer-core, and Microsoft Edge.
