---
title: "Sample: Custom DevTools tool"
description: Microsoft Edge extension adding a Custom tool in DevTools, including Activity Bar tab and panel.  Call DevTools API; send message to any inspected page; send message from inspected page to DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 10/27/2025
---
# Sample: Custom DevTools tool
<!-- live: https://learn.microsoft.com/microsoft-edge/extensions/developer-guide/devtools-extension -->
<!-- equiv: https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools#devtools_extension_examples -->

<!-- todo:
global: show todo page, not Demos page
-->

The DevTools Extension sample is a Microsoft Edge extension that adds a **Custom** tool in Microsoft Edge DevTools, including a tab in the **Activity Bar**, and a panel below the tab.

* The **Custom** DevTools tool calls the DevTools API to display memory information.

* The webpage under inspection, and the **Custom** DevTools tool, send messages back and forth, in two-way communication.

See also:
* [Overview of DevTools](../../devtools/overview.md)<!-- long jump -->
* [Create a DevTools extension, adding a custom tool tab and panel](../developer-guide/devtools-extension.md)
* [Code for Custom DevTools tool](../samples/custom-devtools-tool-code.md)


<!-- ====================================================================== -->
## Preview of the sample

The "DevTools Extension" sample adds a **Custom** tool tab and panel in DevTools within Microsoft Edge:

![Custom tool](./custom-devtools-tool-images/custom-tool.png)

The **Custom** tool calls the DevTools API to retrieve and display memory information.

The **Custom** tool in DevTools has a button that sends a message to the inspected webpage.  The inspected webpage then displays a JavaScript alert dialog:

![Alert](./custom-devtools-tool-images/alert.png)

Clicking around within the inspected webpage sends a message to DevTools.  The sample uses a content script to send a message (the clicked coordinates) from the inspected webpage (any webpage) to the **Custom** DevTools tool and the **Console** tool in DevTools.

The **Custom** tool displays the coordinates information from the message:

![Custom tool](./custom-devtools-tool-images/custom-tool-coordinates.png)

The **Console** tool displays the coordinates information from the message:

![Console tool](./custom-devtools-tool-images/console-tool-coordinates.png)


<!-- ====================================================================== -->
## Step 1: Download the sample

If not done yet, download the "main" branch of the Demos repo, or clone (or fork and clone) the repo.  Downloading is simplest and is described below.

Download the "main" branch of the Demos repo, as follows:

1. In Microsoft Edge, go to the [MicrosoftEdge / Demos](https://github.com/MicrosoftEdge/Demos) repo.

1. Click the down arrow in the **Code** button, and then select **Download ZIP**.

1. In Microsoft Edge, the **Downloads** dialog shows `Demos-main.zip`.  "-main" is added, meaning a static snapshot of the "main" branch of the repo.

1. Hover to the right of `Demos-main.zip`, and then click the **Show in folder** ![The Show in folder icon](./custom-devtools-tool-images/show-in-folder-icon.png) button.

   File Explorer opens, displaying the **Downloads** folder.

1. Right-click `Demos-main.zip`, and then select **Extract all**.

   The **Extract Compressed (Zipped) Folders** dialog opens.

1. Click the **Extract** button.

   The **% complete** dialog opens, and then finishes.

1. Move the `Demos-main` folder to a GitHub repos location, such as `C:\Users\localAccount\GitHub`.


<!-- ====================================================================== -->
## Step 2: Install the extension to add the tool in DevTools

1. In Microsoft Edge, select **Settings and more** (![The Settings and more icon](./custom-devtools-tool-images/settings-and-more-icon.png)), hover over **Extensions**, and then select **Manage extensions**.

   The **Extensions** tab and page opens (`edge://extensions`).

1. Click ![The Load unpacked icon](./custom-devtools-tool-images/load-unpacked-icon.png) **Load unpacked**.

   The **Select the extension directory** dialog opens.

1. Navigate to the `/Demos-main/devtools-extension` folder, such as `C:\Users\localAccount\GitHub\Demos-main\devtools-extension\`, and then click the **Select Folder** button.<!-- actually used forked cloned /Demos/ dir which has latest sample -->

   The **Custom DevTools Tool** card is displayed:

   ![Extensions page](./custom-devtools-tool-images/edge-extensions-page.png)


<!-- ====================================================================== -->
## Step 3: Select the Custom tool in DevTools

1. In Microsoft Edge, go to a webpage, such as the [To Do app](https://microsoftedge.github.io/Demos/demo-to-do/), in a new window or tab.

   The **Custom** DevTools tool requires a webpage, not an empty tab.

1. Right-click the webpage, and then select **Inspect**.

   DevTools opens.

1. In the **Activity Bar** of DevTools, click the **Custom** (![The Custom tool icon](./custom-devtools-tool-images/custom-icon.png)) tool's tab.

   The **Custom** tool tab and panel are displayed:

   ![Custom tab](./custom-devtools-tool-images/custom-tab-activity-bar.png)

   The custom DevTools page has several sections:

   * Memory display information.
   * A button to send a message from DevTools to the inspected webpage, to make the page display a JavaScript `alert` dialog.
   * A **Coordinates** display area, to send a message from the inspected webpage to the DevTools **Console** and **Custom** tools.


<!-- ====================================================================== -->
## Step 4: View memory information from a DevTools API call

* In the **Custom** tool in DevTools, observe the once-per-second updating of the **Available Memory Capacity** value.


<!-- ====================================================================== -->
## Step 5: Send message from DevTools to inspected page

1. Click the **Say Hello** button.

   A JavaScript `alert` dialog opens, with message: "Hello from the DevTools extension!"

   ![Alert](./custom-devtools-tool-images/alert.png)

   DevTools sends a message to the inspected webpage, causing JavaScript to display an alert.

1. Click the **OK** button.

   The dialog closes.


<!-- ====================================================================== -->
## Step 6: Send message from inspected page to DevTools

1. In the inspected webpage, click various spots.

   In the **Custom** DevTools tool, in the **Coordinates** section, the coordinates are displayed and updated while you click around:

   ![Custom tool](./custom-devtools-tool-images/custom-tool-coordinates.png)

1. In DevTools, in the **Activity Bar**, select the **Console** tool.

   ![Console tool](./custom-devtools-tool-images/console-tool-coordinates.png)



<!-- ====================================================================== -->
## Step 7: Modify the Custom tool

1. If not done already, install [Visual Studio Code](https://code.visualstudio.com).

1. Open Visual Studio Code.

1. Click the **File** menu, and then click **Open Folder**.

   The **Open Folder** dialog opens.

1. Navigate to the `/Demos-main/devtools-extension/` folder, such as `C:\Users\localAccount\GitHub\Demos-main\devtools-extension\`, and then click the **Select Folder** button.<!-- actually used forked cloned /Demos/ dir which has latest sample -->

   A dialog opens, asking whether to open the repo in the parent folder.

1. Click the **Yes** button.

   In the **Explorer** pane, the `/devtools-extension/` folder is displayed.

1. Click `panel.html`.

   The file is opened for editing:

   ![/devtools-extension/ folder in Visual Studio Code](./custom-devtools-tool-images/panel-html.png)

1. Add "My" to the `<h2>` heading; change from:

   ```html
   <h2>Custom DevTools Tool</h2>
   ```

   to:  

   ```html
   <h2>My Custom DevTools Tool</h2>
   ```

1. Save the file.


<!-- ====================================================================== -->
## Step 8: Use the modified Custom tool

1. In the **Explorer** pane, click `manifest.json`.

   The file is opened for editing.

1. Add "My" to the `name`; change from:

   ```json
   "name": "Custom DevTools Tool",
   ```

   to:  

   ```json
   "name": "My Custom DevTools Tool",
   ```

1. Save the file.

1. In Microsoft Edge, select **Settings and more** (![The Settings and more icon](./custom-devtools-tool-images/settings-and-more-icon.png)), hover over **Extensions**, and then select **Manage extensions**.

   The **Extensions** tab and page opens (`edge://extensions`).

1. In the **My Custom DevTools Tool** card, click the the **Reload** link.

1. Go to a webpage (not an empty tab), such as the [MicrosoftEdge / Demos](https://github.com/MicrosoftEdge/Demos) repo, in a new window or tab.

1. Right-click the webpage, and then select **Inspect**.

   DevTools opens.

1. In the **Activity Bar** of DevTools, click the **More tools** button, and then in the **Add tool to Activity Bar** menu, select (![The Custom tool icon](./custom-devtools-tool-images/custom-icon.png)) **Custom**.

   The heading in the panel is now **My Custom DevTools Tool**:

   ![Custom tab](./custom-devtools-tool-images/custom-tab-activity-bar.png)


<!-- ====================================================================== -->
## Troubleshooting
<!-- add to [Create a DevTools extension, adding a custom tool tab and panel](../developer-guide/devtools-extension.md) ? -->

If the **Custom** tab isn't visible in DevTools, or it's outdated and doesn't show your code changes:

* Make DevTools wide, to show many tools in the **Activity Bar**.

* Refresh or hard-refresh the inspected page.

* Close and reopen DevTools.

* In Microsoft Edge, in the **Extensions** page, click **Reload** for the extension.

* If no icon is provided in such an extension, the tab when not selected is narrow and gray, on the right side of the **Activity Bar**.  Click the narrow gray tab.

* Go to a webpage, not an empty tab.  The code in the **Custom** DevTools tool requires a webpage.

Custom Devtools tools are added to the **More tools** menu on the **Activity Bar** when the **Activity Bar** is narrow.  The tool's tab doesn't have a **Remove from Activity Bar** command on the right-click menu.


<!-- ====================================================================== -->
## See also
<!-- todo: all links in article -->

* [Samples for Microsoft Edge extensions](../samples.md)<!-- link not in article -->
* [Overview of DevTools](../../devtools/overview.md)
* [Sample: Picture viewer pop-up webpage](../getting-started/picture-viewer-popup-webpage.md)
* [Overview and timelines for migrating to Manifest V3](../developer-guide/manifest-v3.md)
* [Sideload an extension to install and test it locally](../getting-started/extension-sideloading.md)

Chrome docs:
* [Manifest reference](https://developer.chrome.com/docs/extensions/reference#manifest-reference)
* [Extend DevTools](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools)
* [Chrome Extensions Reference](https://developer.chrome.com/docs/extensions/reference/)
   * [chrome.devtools.panels](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels)
      * [create()](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels#method-create)
* [Content scripts](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts)

GitHub:
* [Download Demos-main.zip](https://codeload.github.com/MicrosoftEdge/Demos/zip/refs/heads/main)
* [/devtools-extension/](https://github.com/MicrosoftEdge/Demos/tree/main/devtools-extension/) - source code.

Tools:
* [Visual Studio Code](https://code.visualstudio.com)

<!-- https://developer.chrome.com/docs/extensions/reference/api/system/memory#method-getInfo -->
