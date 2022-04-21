---
title: Videos about developing for the web with Microsoft Edge
description: Watch announcement and demo videos about Microsoft Edge web development technologies such as DevTools, Progressive Web App, Web platform features, WebView2, and more.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 04/20/2022
---
# Videos about developing for the web with Microsoft Edge

Discover, and learn about new Microsoft Edge web development technologies and products such as DevTools, web platform APIs and features, Progressive Web Apps, and WebView2.

This page contains short and entertaining videos, each focused on just one feature and including a demo.

We publish new videos on a regular basis on the [Microsoft Edge YouTube channel](https://www.youtube.com/channel/UCIGx7oT8p6-jUpOfg98yelA), and they are also listed below.

Click on a thumbnail from the list below to watch the corresponding video on YouTube.

<!-- To add a new video:
- Prepare the YouTube URL, thumbnail image, and description.
- Add a new H2 heading below this comment, with the name of the video.
- Add the publish date next (same as the one on YouTube).
- Place the description below that, fixing any links that came from YouTube and that might have been shortened.
- Place the video thumbnail image in the ./images folder.
- Add a markdown image below the description, with the thumbnail you added before, and link this image tag to the YouTube video. -->

## Debug memory leaks with the Microsoft Edge Detached Elements tool

_Published on 9 Dec 2021._

[![Thumbnail image for the Detached Elements video](./images/detached-elements.png)](https://www.youtube.com/watch?v=v2iy17ptmBk)

We're very excited to announce the new Detached Elements tool in Microsoft Edge DevTools which will help you investigate and resolve DOM memory leaks.

Memory leaks occur when the JavaScript code of an application retains more and more objects in memory that it doesn't need any longer instead of releasing them for the browser to garbage collect.
We built this tool with our friends at Microsoft Teams, and it has already helped us find and fix memory leaks across many of our own websites and apps.

You can find [documentation about the tool here](../devtools-guide-chromium/memory-problems/dom-leaks.md), and read our [announcement blog post here](https://blogs.windows.com/msedgedev/2021/12/09/debug-memory-leaks-detached-elements-tool-devtools/).
 
## The EyeDropper API

_Published on 22 Nov 2021._

[![Thumbnail image for the Eye Dropper API video](./images/eye-dropper.png)](https://www.youtube.com/watch?v=XZUEnUbI7dE)

The Microsoft Edge team specified and implemented the new EyeDropper API in collaboration with the Chromium open-source project, and we'd love your [feedback about it here](https://github.com/WICG/eyedropper-api/issues).

Many creative applications allow users to pick colors from parts of the app window or even from the entire screen, typically using an eyedropper metaphor. This new  API enables authors to use a browser-supplied eyedropper in the construction of custom color pickers on the web.

Learn more about it on [web.dev](https://web.dev/eyedropper/) and [MDN](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API).
