---
description: Use Puppeteer to automate and test in Microsoft Edge
title: Puppeteer
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/20/2020
ms.topic: article
ms.prod: microsoft-edge
ms.technology: devtools
keywords: microsoft edge, web development, developer, tools, automation, test
---

# Puppeteer  

[Puppeteer][PuppeteerMain] is a [Node][NodejsMain] library which provides a high-level API to control Microsoft Edge \(Chromium\) over the [DevTools Protocol][GithubChromedevtoolsProtocol].  Puppeteer runs [headless][WikiHeadlessBrowser] by default, which means you are not actually seeing the browser launch or render your website but all of this is happening using the command-line.  You are able to configure Puppeteer to run full \(non-headless\) Microsoft Edge or Chromium as well.  

By default, when you install Puppeteer, it downloads a recent version of [Chromium][ChromiumHome], the open-source browser that [Microsoft Edge is also built upon][MicrosoftBlogsWindowsExperience20181206].  If you already have Microsoft Edge \(Chromium\) installed \(if you don't, visit [Download Microsoft Edge Insider Channels][MicrosoftedgeinsiderDownload]\), you may instead use [puppeteer-core][PuppeteerApivscore].  `puppeteer-core` is a lightweight version of Puppeteer that launches an existing browser installation, like Microsoft Edge \(Chromium\).  

## Installing puppeteer-core  

You may add `puppeteer-core` to your website or app with one of the following commands.  

```shell
npm i puppeteer-core
```  

```shell
yarn add puppeteer-core
```  

## Launch Microsoft Edge with puppeteer-core  

> [!NOTE]
> `puppeteer-core` relies on Node v8.9.0 or later.  The example below uses `async`/`await` which is only supported in Node v7.6.0 or later.  Run `node -v` from the command-line to ensure you have a compatible version of Node.js.  

`puppeteer-core` should be familiar to users of other browser testing frameworks like [WebDriver][WebDriverEdgehtmlMain].  You create an instance of Browser, open pages, and then manipulate them with Puppeteer API.  In the code sample below, `puppeteer-core` launches Microsoft Edge \(Chromium\), navigates to `https://www.microsoftedgeinsider.com` and saves a screenshot as `example.png`.  

Copy the code sample below and save it as `example.js`.  

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

Change `executablePath` to point to your installation of Microsoft Edge \(Chromium\).  For example, on macOS, the `executablePath` for Microsoft Edge Canary should be set to `/Applications/Microsoft\ Edge\ Canary.app/`.  To find the `executablePath`, navigate to `edge://version`.  Save your changes.  

> [!NOTE]
> Microsoft Edge \(EdgeHTML\) does not work with `puppeteer-core`.  [Install the Microsoft Edge preview channels][MicrosoftedgeinsiderDownload], which leverage Chromium, to continue following this example if you have not already.  

Now run `example.js` from the command-line.  

```shell
node example.js
```  

`puppeteer-core` launches Microsoft Edge, navigates to `https://www.microsoftedgeinsider.com` and saves an 800x600px screenshot of the page.  You are able to customize the page size with [Page.setViewport()][PuppeteerApipagesetviewport].  

:::image type="complex" source="./media/puppeteer-example.png" alt-text="The example.png file produced by example.js":::
   Figure 1:  The `example.png` file produced by `example.js`  
:::image-end:::  

<!--  
> ##### Figure 1  
> The `example.png` file produced by `example.js`  
> ![The example.png file produced by example.js](./media/puppeteer-example.png)  
-->  

This is just a simple example of the automation and testing scenarios enabled by Puppeteer and `puppeteer-core`.  For more information about Puppeteer and how it works, see [Puppeteer][PuppeteerMain].  

## Feedback  

The Edge Developer team is eager to hear your feedback about using Puppeteer, `puppeteer-core`, and Microsoft Edge!  Use the **Feedback** icon in the Microsoft Edge DevTools or tweet [@EdgeDevTools][TwitterIntentTweetEdgedevtools] to let the Microsoft Edge team know what you think.  


:::image type="complex" source="./devtools-guide-chromium/media/devtools-feedback.png" alt-text="The Feedback icon in the Microsoft Edge DevTools":::
   Figure 2:  The **Feedback** icon in the Microsoft Edge DevTools  
:::image-end:::  

<!--  
> ##### Figure 2  
> The **Feedback** icon in the Microsoft Edge DevTools  
> ![The Feedback icon in the Microsoft Edge DevTools](./devtools-guide-chromium/media/devtools-feedback.png)  
-->  

## See also  

*   [WebDriver (Chromium)][WebDriverChromiumMain]  
*   [WebDriver (EdgeHTML)][WebDriverEdgehtmlMain]  
*   [Chrome DevTools Protocol Viewer on GitHub][GithubChromedevtoolsProtocol]  
*   [Microsoft Edge: Making the web better through more open source collaboration on Microsoft Experience Blog][MicrosoftBlogsWindowsExperience20181206]  
*   [Download Microsoft Edge Insider Channels][MicrosoftedgeinsiderDownload]  
*   [Chromium on The Chromium Projects][ChromiumHome]  
*   [Node.js][NodejsMain]  
*   [Puppeteer][PuppeteerMain]  
*   ["puppeteer vs. puppeteer-core][PuppeteerApivscore]  
*   [Headless browser on Wikipedia][WikiHeadlessBrowser]  

<!-- image links -->  

<!-- links -->  

[WebDriverChromiumMain] ./webdriver-chromium.md "WebDriver (Chromium)"  
[WebDriverEdgehtmlMain] ./webdriver.md "WebDriver (EdgeHTML)"  

[GithubChromedevtoolsProtocol]: https://chromedevtools.github.io/devtools-protocol "Chrome DevTools Protocol Viewer | GitHub"  

[MicrosoftBlogsWindowsExperience20181206]: https://blogs.windows.com/windowsexperience/2018/12/06/microsoft-edge-making-the-web-better-through-more-open-source-collaboration "Microsoft Edge: Making the web better through more open source collaboration | Microsoft Experience Blog"  

[MicrosoftedgeinsiderDownload]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[ChromiumHome]: https://www.chromium.org/Home "Chromium | The Chromium Projects"  

[NodejsMain]: https://nodejs.org "Node.js"  

[PuppeteerMain]: https://pptr.dev "Puppeteer"  
[PuppeteerApivscore]: https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-puppeteer-vs-puppeteer-core "puppeteer vs. puppeteer-core | Puppeteer"  
[PuppeteerApipagesetviewport]: https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-pagesetviewportviewport "page.setViewport(viewport) | Puppeteer"  

[TwitterIntentTweetEdgedevtools]: https://twitter.com/intent/tweet?text=@EdgeDevTools "@EdgeDevTools - Post a Tweet | Twitter"  

[WikiHeadlessBrowser]: https://en.wikipedia.org/wiki/Headless_browser "Headless browser | Wikipedia"  
