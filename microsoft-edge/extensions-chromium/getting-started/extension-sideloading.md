---
title: Sideload an extension to install and test it locally
description: Test an extension locally by sideloading it, so that it's locally installed in your instance of Microsoft Edge.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 10/03/2024
---
# Sideload an extension to install and test it locally

To test an extension quickly and safely, sideload the extension in your own copy of Microsoft Edge, which means locally installing the extension.  You can then run and test your extension without having to upload the extension to the Microsoft Edge Add-ins website (the _store_) and then install the extension from there.


<!-- ====================================================================== -->
## Locally installing and running an extension

To sideload an extension into Microsoft Edge, so that it's locally installed in your browser for testing:

1. In the upper right of Microsoft Edge, click the **Extensions** (![Extensions icon](./extension-sideloading-images/extensions-icon.png)) button.  Or, select **Settings and more** (...) > **Extensions**:

   ![Opening the edge://extensions page](./extension-sideloading-images/part1-threedots.png)

   The **Extensions** pop-up opens.

1. Click **Manage extensions**.  The **Extensions** page (`edge://extensions`) opens in a new tab.

1. Turn on the **Developer mode** toggle:

   ![Turning on Developer Mode](./extension-sideloading-images/part1-developermode-toggle.png)

1. When installing your extension for the first time, click the **Load unpacked** button.  The **Select the extension directory** dialog opens.

1. Select the directory that contains your extension source files, and then click the **Select Folder** button.  For example, select the directory for the "NASA picture of the day viewer" demo from [Tutorial part 1: Create a simple extension](./part1-simple-extension.md).

   Your extension is installed in your browser, similar to extensions that are installed from the store:

   ![Installed extensions page, showing a sideloaded extension](./extension-sideloading-images/part1-installed-extension.png)

1. To run the extension, first open a webpage, if the extension requires that a webpage is open.

1. In the upper right of Microsoft Edge, click the **Extensions** (![Extensions icon](./extension-sideloading-images/extensions-icon.png)) button.  Or, select **Settings and more** (...) > **Extensions**.

   The **Extensions** pop-up opens:

   ![The Extensions pop-up](./extension-sideloading-images/extensions-popup.png)

1. Select the extension.  The extension opens:

   ![An extension running](./extension-sideloading-images/extension-running.png)


<!-- ====================================================================== -->
## Locally updating an extension

To update an extension that's been installed locally (sideloaded) in your browser:

1. Make any required changes to the extension.

1. Go to `edge://extensions`.

1. Click the **Reload** button for the sideloaded extension.  The updated extension is reloaded.


<!-- ====================================================================== -->
## Locally removing an extension

To remove an extension that's been installed locally (sideloaded) in your browser:

1. Go to `edge://extensions`.

1. On the extension, click **Remove**.


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Tutorial part 1: Create a simple extension](./part1-simple-extension.md)
* [Tutorial part 2: Add JavaScript to the extension](./part2-content-scripts.md)
