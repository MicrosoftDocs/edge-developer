---
title: Display or edit source files using the Quick source tool
description: Use the Quick source tool to display or edit source files when using a tool other than the Sources tool.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 03/07/2025
---
# Display or edit source files using the Quick source tool
<!-- https://developer.chrome.com/docs/devtools/quick-source -->

Use the **Quick source** tool to display or edit source files when using a tool other than the **Sources** tool.

The main place to view source files in the DevTools is within the **Sources** tool.  But sometimes you need to access other tools, such as **Elements** or **Console**, while viewing or editing your source files.  Use the **Quick source** tool, which by default opens in the **Quick View** panel at the bottom of DevTools.

A file must first be selected in the **Sources** tool.  The **Quick source** tool has a tab for each file that's open in the **Sources** tool.  If you open **Quick source** tool without first selecting a file in the **Sources** tool, the **Quick source** tool doesn't display a file listing or file tabs.


<!-- ====================================================================== -->
## Open a file in the Quick source tool

To open a file in the **Quick source** tool:

1. Open a webpage; for example, open [Demo To Do](https://microsoftedge.github.io/Demos/demo-to-do/) in a new window or page.

1. Right-click the webpage and then select **Inspect**.

   DevTools opens.

1. If the **Quick View** toolbar isn't shown at the bottom of DevTools, press **Esc**.

1. In the **Quick View** toolbar at the bottom of DevTools, click the **More tools** button, and then select **Quick source**.

   The **Quick source** tool opens in **Quick View**:

   ![The Quick source tool, containing an Open file link](./quick-source-tool-images/quick-source-open-file.png)

1. Drag the separator to make the **Quick View** pane tall enough to display the **Open file** link.

   Next, you can either:
   * Open a file in the **Sources** (![The Sources tool icon](./quick-source-tool-images/sources-icon.png)) tool, per the steps below.
   * Open a file via the **Command Menu** by clicking the **Open file** link in the **Quick source** tool.

1. In the **Activity Bar** at the top of DevTools, select the **Sources** (![The Sources tool icon](./quick-source-tool-images/sources-icon.png)) tool.

   The **Quick View** pane is minimized at the bottom of DevTools.

1. In the **Sources** tool, in the **Page** tab, select one or more files, such as `to-do.js`.

   The tabs for the selected files are opened in the **Sources** tool:

   ![The Sources tool > Page tab with a file selected](./quick-source-tool-images/sources-tool-page-tab-file-selected.png)

1. In the **Activity Bar** at the top of DevTools, select a tool other than **Sources**, such as **Elements**.

   The **Quick source** tool expands in **Quick View** at the bottom of DevTools, and has a tab for each open file:

   ![A file displayed in the Quick source tool.](./quick-source-tool-images/file-displayed-in-quick-source.png)<!-- 1st use -->


   Or, to open a file, you can click the **Open file** link in the empty **Quick source** tool:

   ![The Open file Command Menu](./quick-source-tool-images/open-file-command-menu.png)


<!-- ====================================================================== -->
## Open a folder and sync workspace

You can make edits in DevTools **Quick source** tool (or **Sources** tool) and have those edits be saved to your local drive, by selecting a local folder as a workspace.


To open a file in the **Quick source** tool and sync edits to the workspace:

1. Open a webpage; for example, open [Demo To Do](https://microsoftedge.github.io/Demos/demo-to-do/) in a new window or page.

1. Right-click the webpage and then select **Inspect**.

   DevTools opens.

1. If the **Quick View** toolbar isn't shown at the bottom of DevTools, press **Esc**.

1. In the **Quick View** toolbar at the bottom of DevTools, click the **More tools** button, and then select **Quick source**.

   The **Quick source** tool opens in **Quick View**:

   ![The Quick source tool, containing a Select folder link](./quick-source-tool-images/quick-source-select-folder.png)

1. In the **Quick source** tool, click the **Select folder** link.  (Or, drag a folder onto the **Quick source** panel.)

   The **Select Folder** dialog opens.

1. Navigate to a folder, such as `C:\Users\localAccount\GitHub\Demos\demo-to-do`, and then click the **Select Folder** button.

   At the top of DevTools, a message reads **DevTools requests full access to \<path\>**.

1. Click the **Allow** button.

   The **Sources** tool is opened, with no file selected, and continues to display a **Select folder** link.

1. In the **Sources** tool, in the **Workspace** tab, expand the tree, and then click one or more files, such as `to-do.js`.

   The file opens in the **Sources** tool:

   ![The Sources tool with a file selected](./quick-source-tool-images/sources-tool-with-file-selected.png)

1. In the **Activity Bar** at the top of DevTools, select a tool other than the **Sources** tool, such as the **Elements** tool.

   The **Quick source** tool expands in **Quick View** at the bottom of DevTools, and has a tab for each open file:

   ![A file displayed in the Quick source tool](./quick-source-tool-images/file-displayed-in-quick-source.png)<!-- 2nd use -->

See also:
* [Edit files with Workspaces](../workspaces/index.md)
   * [Step 4: Save a JavaScript change to disk](../workspaces/index.md#edit-javascript-and-save-changes-to-the-source-file) in _Edit files with Workspaces_


<!-- ====================================================================== -->
## Options in the empty Quick source tool

When the **Quick source** tool (or **Sources** tool) is empty, the tool displays instructions like the following.

To save your DevTools edits to the source files on your local drive:
* Drag a folder that contains your source files onto the empty **Quick source** tool (or **Sources** tool).
* Click the **Select folder** link.
* In the **Sources** tool, in the **Workspace** tab, click the **Add folder** button.

To open a file by using the **Command Menu**:
* Click the **Open file** link in the empty **Quick source** tool (or **Sources** tool).
* Pressing **Ctrl+P**.
* Select **Customize and control DevTools** > **Open file**.
* Select **Sources tool** > **More options** (next to the **Page** tab) > **Open file**.

To open the **Command Menu**:
* Click the **Run command** link in the empty **Quick source** tool (or **Sources** tool).
* Press **Ctrl+Shift+P**.


<!-- ====================================================================== -->
## See also

* [Displaying source files when using a different tool](../sources/index.md#displaying-source-files-when-using-a-different-tool) in _Sources tool overview_
