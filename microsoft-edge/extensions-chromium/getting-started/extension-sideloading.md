---
description: Test your extension by sideloading it in the browser
title: Sideload your extension 
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/24/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Sideload an extension

During development, you may use the Microsoft Edge \(Chromium\) browser to run and debug your extension safely. This article explains how to load the extension, also called sideloading, into Microsoft Edge to test it.


To run your extension locally in your browser while developing it \(sideloading\), follow the steps below.

1. Choose the three dots at the top of your browser.

2. Select `Extensions` from the context menu as shown in the following image, which will take you to the Extension management page.

:::image type="complex" source="./media/part1-threedots.png" alt-text="Choose Extensions":::
   Choose Extensions
:::image-end:::

<!--![Choose Extensions][ImagePart1Threedots]  -->  


3. On Extension management page, turn on **Developer mode** using the toggle at the bottom left of the page, as shown in the following image.

:::image type="complex" source="./media/part1-developermode-toggle.png" alt-text="Turn on Developer Mode":::
   Turn on Developer Mode
:::image-end:::

<!--![Enable Developer Mode][ImagePart1DevelopermodeToggle]  -->  


4. The first time you want to install your extension, choose the `Load Unpacked` option as shown in the following image.  You'll be prompted for the directory with your extension asset files.  Your extension installs in the browser, similar to installing extensions from the store.  

:::image type="complex" source="./media/part1-installed-extension.png" alt-text="Installed Extensions":::
   Installed Extensions
:::image-end:::

<!--![Installed Extensions][ImagePart1InstalledExtension]  -->  


5. After you install your Extension, you may update it by selecting the `Reload` button under your Extension listing.  

6. To remove the Extension from your browser, select the `Remove` button on the bottom of the Extension listing.  


<!-- image links -->  

<!--[ImagePart1Heirarchy]: ./media/part1-heirarchy.png "Directory Structure"  -->  
<!--[ImagePart1Badge1]: ./media/part1-badge1.png "Toolbar Badge Icon"  -->  
<!--[ImagePart1Heirarchy1]: ./media/part1-heirarchy1.png "Directory Structure for Extension"  -->  
<!--[ImagePart1Threedots]: ./media/part1-threedots.png "Choose Extensions"  -->  
<!--[ImagePart1DevelopermodeToggle]: ./media/part1-developermode-toggle.png "Enable Developer Mode"  -->  
<!--[ImagePart1InstalledExtension]: ./media/part1-installed-extension.png "Installed Extensions"  -->  

<!-- links -->  

[ArchiveExtensionGettingStartedPart1]: ./extension-source/extension-getting-started-part1.zip "Completed Extension Package Source for This Part | Microsoft Docs"  
