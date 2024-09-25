---
title: Sideload an extension
description: How to test an extension by sideloading it in the browser.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 09/25/2024
---
# Sideload an extension

During development, you can use Microsoft Edge browser to run and debug your extension safely.  By sideloading your extension locally in your browser, you can run and test your extension without changing any settings. This helps you test new extensions safely.

To sideload an extension into Microsoft Edge:

1. In the upper right of Microsoft Edge, click the **Extensions** (![Extensions icon](./extension-sideloading-images/extensions-icon.png)) button.  Or, select **Settings and more** (...) > **Extensions**:

   ![Opening the edge://extensions page](./extension-sideloading-images/part1-threedots.png)

   The **Extensions** pop-up opens.

1. Click **Manage extensions**.  The **Extensions** page (`edge://extensions`) opens in a new tab.

1. Turn on the **Developer mode** toggle:

   ![Turning on Developer Mode](./extension-sideloading-images/part1-developermode-toggle.png)

1. When installing your extension for the first time, click the **Load unpacked** button.  The **Select the extension directory** dialog opens.

1. Select the directory that contains your extension source files, and then click the **Select Folder** button.  Your extension is installed in your browser, similar to extensions that are installed from the store:

   ![Installed extensions page, showing a sideloaded extension](./extension-sideloading-images/part1-installed-extension.png)

1. To run the extension, in the upper right of Microsoft Edge, click the **Extensions** (![Extensions icon](./extension-sideloading-images/extensions-icon.png)) button.  Or, select **Settings and more** (...) > **Extensions**.

   The **Extensions** pop-up opens:

   ![The Extensions pop-up](./extension-sideloading-images/extensions-popup.png)

1. Select the extension.  The extension opens:

   ![An extension running](./extension-sideloading-images/extension-running.png)


<!-- ====================================================================== -->
## Updating an extension

To update a sideloaded extension:

1. Make any required changes to the extension.

1. Go to `edge://extensions`.

1. Click the **Reload** button for the sideloaded extension.  The updated extension is reloaded.


<!-- ====================================================================== -->
## Removing an extension

To remove the extension from your browser:

1. Go to `edge://extensions`.

1. On the extension, click **Remove**.
