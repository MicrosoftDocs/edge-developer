---
description: Learn how to add and remove extensions, as well as move an extension’s button next to the address bar.
title: Extensions - Adding and removing extensions
author: abbycar
ms.author: abigailc
ms.date: 03/16/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer, extension
---

# Adding, moving, and removing extensions for Microsoft Edge
Edge support for extensions was introduced in the **Windows 10 Anniversary Update**. If you're developing an Edge extension and want to load it up, or if you already have and now want to remove it, check out the steps below.
Also included are details on how to move here your extension icon appears in the browser.

## Adding an extension

1. Open Microsoft Edge and type 'about:flags' into the address bar.

2. Select the **Enable extension developer features** checkbox.

   ![about:flags turn on developer features](./../media/sideload-aboutflags.png)
   > [!NOTE]
   > If you don't have the Windows 10 Anniversary Update or later, this option will now be available.

3. Select **More (...)** to open the menu.

   ![more button](./../media/morebutton.png)  

4. Select **Extensions** from the menu.

5. Select the **Load extension** button.

   ![selecting load extension](./../media/sideload-load-extension.png)

7. Navigate to your extension's folder and select the  **Select folder** button.
   ![selecting extension folder to load](./../media/sideload-select-extension.png)
> [!NOTE]
> If you encounter an error message when loading your extension, refer to the [troubleshooting](./../troubleshooting.md) page for guidance.


**You're all set! You should now see the extension listed in Microsoft Edge's extension pane.**

![extension in extension pane](./../media/sideload-extension-installed.png)

> [!NOTE]
> Unsigned extensions are automatically turned off on subsequent launches of Microsoft Edge. When the browser enters an idle state (after approximately 10 seconds of inactivity) you will see the following notification at the bottom of the window. ![risky notification](./../media/riskynotification.png) To turn on the unsigned extensions, click "Turn on anyway".



## Moving the extension button
Depending on your extension's settings, it could appear in the **More (...)** menu.

   ![actions menu](./../media/browseraction.png)  


If you want to move the button out of this menu for easier access:

1. Right-click the extension button.

2. Select **Show button next to address bar**.

   ![actions menu](./../media/browseraction_contextmenu.png)  

You can also do this from the extensions details page by:

1. Click on the extension button.
2. Toggle **Show button next to address bar** to on.

   ![show button toggle switched on](./../media/show-button-toggle.png)

> [!NOTE]
> You can always move the button back to the **More (...)** menu by right-clicking it and unselecting **Show next to address bar** or by going to the extension details page and toggling **Show button next to address bar** to off.


## Removing an extension

1. Open Microsoft Edge.

2. Select **More (...)** to open the menu.

3. Select **Extensions** from the menu.

4. Right-click the extension you want to remove and select **Remove**, or select the extension and click the **Remove** button.

   ![actions menu](./../media/remove.png)  

**The extension should disappear from the list in Microsoft Edge.**
