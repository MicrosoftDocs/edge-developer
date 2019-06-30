---
description: Extensions Getting Started Part 2
title: Run your extension locally in your browser while developing it.
author: Peter Kellner
ms.author: xxx
ms.date: 6/15/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Run your extension locally in your browser while developing it

The Microsoft Edge-Chromium browser provides a safe and simple way for you to run as well as debug your extensions while you are developing them.  Once developed, you'll want to submit them to the public extensions store, but until you are completely built and tested, you'll be doing a lot of testing inside of Edge-Chromium.

The process is really quite simple.  All you need to do is click on the three dots at the top of your browser, choose "Extensions" from the dropdown context menu as shown below.

![](media-part2-threedots.png)

Then, when you are in the "Extensions" menu as shown below, you simply click on the on one of the three menus listed across the top as shown below.

![](media/part2-extensions-menu1.png)

The first time you want to install your extension, you choose the option on the same line as "Installed Extensions" titled "Load Unpacked".  This prompts you for a directory where you have your extension assets and simply installs the extension as if you had downloaded it from a store.  The next two options, Pack Extension and Update you don't need to worry about until later.

Once you've installed your extension, you can update it by click on the "Reload" button under your extension listing.

Removing your extension is easy also. You click on the "Remove" button to do that.

Debugging extensions is also quite easy and supports all of the features in the Edge-Chromium DevTools I'm sure you are use to when doing web development.  Those details however are not covered in this getting started guide but are very important to succesfully build extensions.
