---
description: Extensions Getting Started Part 2
title: Run your extension locally in your browser while developing it (side-loading)
author: MSEdgeTeam
ms.author: xxx
ms.date: 6/15/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Run your extension locally in your browser while developing it (side-loading)

The Microsoft Edge Chromium browser provides a safe and simple way for you to run as well as debug your extensions while you are developing them.  

## Launching the extensions menu

The process is quite simple.  All you need to do is click on the three dots at the top of your browser. Next, choose "Extensions" from the context menu as shown below.

![ ](media/part2-threedots.png)

When you are in the "Extensions" page as shown below, enable the "Developer mode" by enabling the toggle at the bottom left of the page as shown below.

![ ](media/part2-developermode-toggle.png)

## Installing and updating side-loaded extensions

The first time you want to install your extension, you choose the option "Load Unpacked" as shown below.  This prompts you for a directory where you have your extension assets file by file. This installs the extension as if you had downloaded it from a store.  

![ ](media/part2-installed-extension.png)

Once you've installed your extension, you can update it by clicking on the "Reload" button under your extension listing.

To remove the extension from your browser, click on the "Remove" button on the bottom of the extension listing.

## Debugging extensions

Debugging extensions is quite easy and supports all of the features in Edge Chromium DevTools. Those details however are not covered in this getting started guide but are very important to successfully build extensions.
