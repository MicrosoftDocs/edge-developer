---
title: Sideload an extension
description: How to test an extension by sideloading it in the browser.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 02/03/2023
---
# Sideload an extension

During development, you can use Microsoft Edge browser to run and debug your extension safely.  By sideloading your extension locally in your browser, you can run and test your extension without changing ant settinga. This helps you test new extensions safely.

To sideload an extension into Microsoft Edge:

1. In Microsoft Edge, select **Settings and more** (...) > **Extensions**.

   ![Opening the edge://extensions page](./media/part1-threedots.png)

   The **Extensions** pop-up box opens.

1. Click **Manage extensions**.  The **Extensions** page (`edge://extensions`) opens in a new tab:

   ![Turning on Developer Mode](./media/part1-developermode-toggle.png)

1. Turn on the **Developer mode** toggle.

1. When installing your extension for the first time, click the **Load unpacked** button.  The **Select the extension directory** dialog opens.

1. Select the directory that contains your extension source files, and then click the **Select Folder** button.  Your extension is installed in your browser, similar to extensions that are installed from the store:

   ![Installed extensions page, showing a sideloaded extension](./media/part1-installed-extension.png)


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
