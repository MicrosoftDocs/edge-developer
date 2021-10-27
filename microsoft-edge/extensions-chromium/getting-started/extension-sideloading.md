---
description: Test your extension by sideloading it in the browser
title: Sideload your extension
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/24/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, html, css, javascript, developer, extensions
---

# Sideload an extension

During development, you may use the Microsoft Edge browser to run and debug your extension safely. By sideloading your extension locally in your browser, you can run and test your extension. This article explains how to sideload extensions into Microsoft Edge.

To sideload your extension, follow these steps.

1.  Open the `edge://extensions` page by choosing the three dots at the top of your browser, and then selecting **Extensions**.

       :::image type="complex" source="./media/part1-threedots.png" alt-text="Open the edge://extensions page":::
          Open the edge://extensions page
       :::image-end:::

1.  On the extension management page at `edge://extensions`, turn on **Developer mode** using the toggle at the bottom left of the page.

       :::image type="complex" source="./media/part1-developermode-toggle.png" alt-text="Turn on Developer Mode":::
          Turn on Developer Mode
       :::image-end:::

1.  When installing your extension for the first time, choose **Load Unpacked**.  You'll be prompted for the directory with your extension source files.  Your extension is installed in your browser, similar to extensions installed from the store.

       :::image type="complex" source="./media/part1-installed-extension.png" alt-text="Installed extensions page showing a sideloaded extension":::
          Installed extensions page showing a sideloaded extension
       :::image-end:::

During development, you may also need to do the following:
* Update the extension.  Navigate to `edge://extensions`, and then select **Reload** to update your extension.
* Remove the extension from your browser.  Navigate to `edge://extensions`, and then select `Remove` on your extension.
