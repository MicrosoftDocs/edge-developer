---
title: Sideload an extension
description: How to test an extension by sideloading it in the browser.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: microsoft edge, web development, html, css, javascript, developer, extensions
ms.date: 09/24/2020
---
# Sideload an extension

During development, you can use the Microsoft Edge browser to run and debug your extension safely.  By sideloading your extension locally in your browser, you can run and test your extension.  This article explains how to sideload extensions into Microsoft Edge.

To sideload an extension:

1. Open the `edge://extensions` page by choosing the three dots at the top of your browser, and then selecting **Extensions**.

   :::image type="content" source="./media/part1-threedots.png" alt-text="Opening the edge://extensions page.":::

1. On the extension management page at `edge://extensions`, turn on **Developer mode** using the toggle at the bottom left of the page.

   :::image type="content" source="./media/part1-developermode-toggle.png" alt-text="Turning on Developer Mode.":::

1. When installing your extension for the first time, choose **Load Unpacked**.  You'll be prompted for the directory with your extension source files.  Your extension is installed in your browser, similar to extensions installed from the store.

   :::image type="content" source="./media/part1-installed-extension.png" alt-text="Installed extensions page, showing a sideloaded extension.":::

During development, you may also need to do the following:
* Update the extension.  Go to `edge://extensions`, and then select **Reload** to update your extension.
* Remove the extension from your browser.  Go to `edge://extensions`, and then select `Remove` on your extension.
