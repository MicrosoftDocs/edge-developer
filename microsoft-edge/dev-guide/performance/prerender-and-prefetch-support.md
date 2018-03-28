---
ms.assetid: 6840de61-267a-4415-ae62-aede3b3c4a88
description: Learn how prerender and prefetch can be used to improve your website's navigation.
title: Dev guide - Prerender and prefetch support
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Prerender and prefetch support

Use [`prerender`](https://msdn.microsoft.com/library/ms534366.aspx) and [`prefetch`](https://msdn.microsoft.com/library/ms534366.aspx) in Microsoft Edge to improve your website's navigation. Taking advantage of time that a browser would normally be idle, while a user reads the current page for example, prerender specifies a webpage to be loaded (rendered) in the background and prefetch identifies resources to be downloaded in the background. Both features download content before it is utilized, therefore, resources are instantly available when needed by the user.

Prerender webpages and prefetch resources in the background with link elements using the [`rel=""` ](https://msdn.microsoft.com/library/ms534366.aspx) attribute (or JavaScript property, `object.rel`) to set or retrieve the relationship between an object and the destination of the link.

## Improve performance by getting things in advance

As a user reads a webpage, the browser can load and render additional content in the background. As a web developer, you can identify the page and resources the user is likely to need next. By doing so, you improve the perceived performance of your site because the content is ready and can be displayed more quickly.

Suppose you've written an article that's broken into separate webpages. As the user reads each page, you can preload the next so that it's displayed when the user is ready for it. Or, if you've created a site containing several articles, you can use the home page to download stylesheets, images, and other resources used on each page so that each article requires less time to load.

You can use the link element with the [rel attribute](https://msdn.microsoft.com/library/ms534366.aspx) supporting the `prerender`, `prefetch`, `dns-prefetch` values.

### prerender

Prerender identifies a webpage to preemptively load in the background, like opening a new page in a hidden tab with all resources downloaded, DOM created, JS executed and CSS applied, ready to be viewed in case the user wants to navigate to it next. Because all of the page resources are loaded, confidence should be high that the user will navigate to this page next (for example, a log-in page followed by the page being logged in to).The [Page Visibility API](./page-Visibility-API.md) can be used to ensure that certain scripts fire only once the user is viewing the page.

```HTML
<link rel="prerender" href="http://example.com/nextpage.html" />
```

Microsoft Edge can prerender one page in the background. If a second prerender request is encountered, it replaces the first request. Additional prerender requests are ignored.

### prefetch

Prefetch identifies a resource file to be downloaded into the cache, such as an image, a script, or a CSS stylesheet that we anticipate will be needed for reference later on.

```HTML
<link rel="prefetch" href="http://example.com/style.css" />
<link rel="prefetch" href="image.png">
```

Microsoft Edge supports up to ten (10) prefetch requests. Additional requests are ignored.

### dns-prefetch

DNS prefetch identifies a specific URL so that, when the browser needs an asset (image, audio file, etc.) from that URL later on, it can quickly resolve the DNS request without waiting for a lookup. This can be particularly useful when using third party code or social networks resources that require loading a `<script>` widget. **Note that this is different than `prefetch` as the asset is not being requested and stored in the cache.*

```HTML
<link rel="dns-prefetch" href="http://example.com/"/>
```

> [!NOTE]
> Microsoft Edge also supports the `next` and `prev` values for the `rel` attribute. For more info, see [Determining flip ahead targets](http://go.microsoft.com/fwlink/p/?LinkId=306028).


These link element values are supported only for top-level documents; they are ignored when applied to child (iframe) documents. Target URLs must refer to individual filenames (relative or fully-qualified). Wildcards are not supported.

> [!WARNING]
> The preconnect value is not yet supported: <link rel="preconnect" href="" />. This may receive support in the future, see [Microsoft Edge Platform Status](https://developer.microsoft.com/microsoft-edge/platform/status/preconnectresourcehints/).


## Loading background resources effectively

When using the link element to preload a webpage, Microsoft Edge loads and renders the page in the background. Loading a page in the background does not reduce the time required to load the page. The page requires the same number of network requests, whether it's loaded in the foreground or the background. The difference comes from the user's perspective. Because prerendered pages load and render in the background, they display immediately when the user clicks the link. Because users don't watch the page load, they feel that it displays more quickly.

Prerendering requires these conditions:

-  If the user is on a metered network, the ability to prerender webpages depends on the data usage plan for the device used to view the page.
-  The target URL can't be a file download.
-  The target URL uses either the "http://" or the "https://" protocols.
-  The target URL is a top level document; that is, it can't be an [iframe](https://msdn.microsoft.com/library/ms535258(v=vs.85).aspx) document.
-  Only one webpage can be prerendered at a time.
-  The document containing the link element is visible; that is, it is loaded in the foreground tab and is not minimized.

Pages can't be fully rendered in the background if any of these conditions apply:
-  The target page triggers a user interface change, such as an alert box, a call to `window.open`, or a security notification.
-  The target page automatically plays a media file using the video or audio element.
-  The target page modifies the travel log.
-  The F12 tools window is open.

In these cases, the target page is paused while in the background. When the user chooses the target page, it's displayed and rendering resumes from where it was paused.

Prerendered pages are not always displayed to the user. These conditions cause prerendered pages to be discarded from memory without being displayed:
-  The user doesn't open the target page within five minutes.
-  The user opens a different page.
-  The user switches to a different tab or browser instance.
-  A JavaScript process adds a new link element that requests a different webpage to prerender.
-  An error occurs while loading the target page, including HTTP error code 500 (server error), 404 (resource not found), or related errors (such as connection problems).

When a prerendered page is discarded and then requested later, it's loaded from the hosting server directly. If the page is still in browser cache, it might load more quickly; however, this is not guaranteed.

Loading a page in the background may lead to certain side-effects. Specifically, for activities run during a [load](https://msdn.microsoft.com/library/cc197055(v=vs.85).aspx) event, you might find:
-  Certain animations may not appear when the page is displayed. This is likely because they've already run while the page was loaded in the background.
-  Timers may give unexpected results.
-  Cookies, cached content, and changes made by asynchronous operations (such as [IndexedDB](./../storage/IndexedDB.md) and [web storage](https://msdn.microsoft.com/library/hh781511(v=vs.85).aspx)) are retained.

If you run into these or other related side effects, use the [Page Visibility API](./page-Visibility-API.md) to determine when the page is visible. Animations, for example, should be delayed until the page is visible. To learn more, see [Effective use of prerender and prefetch](https://msdn.microsoft.com/library/dn384048(v=vs.85).aspx).

## Specification

[Prerender](https://w3c.github.io/resource-hints/#prerender)

[Prefetch](https://w3c.github.io/resource-hints/#prefetch)

[DNS Prefetch](https://w3c.github.io/resource-hints/#dns-prefetch)

[Preconnect](https://w3c.github.io/resource-hints/#preconnect) (May be supported in the future; see [Microsoft Edge Platform Status](https://developer.microsoft.com/microsoft-edge/platform/status/preconnectresourcehints/))
