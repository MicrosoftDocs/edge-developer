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
<!-- first give the always-available GUI way, then keyboard shortcuts, then transient UI in instructions that aren't present when a file is open -->

Use the **Quick source** tool to display or edit source files at the same time as displaying a tool other than the **Sources** tool.

![The Quick source tool](./quick-source-tool-images/quick-source-tool.png)

The main place to view source files in the DevTools is within the **Sources** tool.  But sometimes you need to access other tools, such as **Elements** or **Console**, while viewing or editing your source files.  Use the **Quick source** tool, which by default opens in the **Quick View** panel at the bottom of DevTools.


<!-- ------------------------------ -->
#### Use the Quick source tool in conjunction with the Sources tool

To display the **Quick source** tool in **Quick View** at the bottom of DevTools, a tool other than the **Sources** tool must be open in the **Activity Bar** at the top of DevTools.

The **Quick source** tool provides an alternative display of the files that are open in the **Sources** tool.  The **Quick source** tool has a subset of features.  For full features, temporarily switch to the **Sources** tool.

If you open or close a file in one tool, the file is opened or closed in the other tool.  In both tools, there's a tab for each open file.


<!-- ====================================================================== -->
## Open a file in the Quick source tool

To make a file appear in the **Quick source** tool, open a file in the **Sources** tool, as follows:

1. Open a webpage; for example, open [Demo To Do](https://microsoftedge.github.io/Demos/demo-to-do/) in a new window or page.

1. Right-click the webpage and then select **Inspect**.

   DevTools opens.

1. If the **Quick View** toolbar isn't shown at the bottom of DevTools, press **Esc**.

1. In the **Quick View** toolbar at the bottom of DevTools, click the **More tools** button, and then select **Quick source**.

   The **Quick source** tool opens in **Quick View**:

   ![The Quick source tool, containing an Open file link](./quick-source-tool-images/quick-source-open-file.png)

   The **Quick source** tool might show instructions including an **Open file** link, or it might display a file.  Instead of using that transient link, the following steps show how to use the **Page** tab in the **Sources** tool, to make a file appear in the **Quick source** tool.

   **Open a file by using the Sources tool:**

1. In the **Activity Bar** at the top of DevTools, select the **Sources** (![The Sources tool icon](./quick-source-tool-images/sources-icon.png)) tool.

   The **Quick View** pane is minimized at the bottom of DevTools.

1. In the **Sources** tool, in the **Page** tab, select one or more files, such as `to-do.js`.

   The tabs for the selected files are opened in the **Sources** tool:

   ![The Sources tool > Page tab with a file selected](./quick-source-tool-images/sources-tool-page-tab-file-selected.png)

1. In the **Activity Bar** at the top of DevTools, select a tool other than **Sources**, such as **Elements**.

   The **Quick source** tool expands in **Quick View** at the bottom of DevTools, and has a tab for each open file:

   ![A file displayed in the Quick source tool.](./quick-source-tool-images/file-displayed-in-quick-source.png)<!-- 1st use -->

You can now view or edit the file in the **Quick source** tool, at the same time as displaying a different tool.

See also:
* [Using the Page tab to explore resources that construct the current webpage](../sources/index.md#using-the-page-tab-to-explore-resources-that-construct-the-current-webpage) in _Sources tool overview_.


<!-- ====================================================================== -->
## Edit local source files in DevTools by selecting a Workspace folder

By selecting a local folder as a **Workspace**, you can edit files from within the **Quick source** tool at the same time as displaying a different tool (or from within the **Sources** tool), and have those edits be saved to your local drive.  This way, when you edit a file in DevTools, the edits are not only made to the transient file that's returned by the server, but are also saved to the source file on your local drive.


To open a server webpage file in the **Quick source** tool and save any edits to your local **Workspace** folder of source files:

1. Open a webpage that's on a web server; for example, open [Demo To Do](https://microsoftedge.github.io/Demos/demo-to-do/) in a new window or page.  That page is hosted on the web server `microsoftedge.github.io`.

   **Open the DevTools Quick source tool:**

1. Right-click the webpage and then select **Inspect**.

   DevTools opens.

1. If the **Quick View** toolbar isn't shown at the bottom of DevTools, press **Esc**.

1. In the **Quick View** toolbar at the bottom of DevTools, click the **More tools** button, and then select **Quick source**.

   The **Quick source** tool opens in **Quick View** at the bottom of DevTools:

   ![The Quick source tool, containing a Select folder link](./quick-source-tool-images/quick-source-select-folder.png)

   The **Quick source** tool might show instructions including an **Select folder** link, or it might display a file.  Instead of relying on that transient link, the steps further below show how to use the **Workspace** tab in the **Sources** tool, to select a local folder of source files.

   **Have local source files that match the web server files:**

1. Make sure there are source files on your local drive, matching the transient files returned by the web server.  For example, if not done already, clone the **MicrosoftEdge / Demos** repo to your local drive, as follows.

1. Go to [MicrosoftEdge / Demos](https://github.com/MicrosoftEdge/Demos) in a new window or tab.

1. Click the **Code** drop-down button.

1. Click the **Copy url to clipboard** button:

   ![The Code button of the Demos repo to get the web URL](./quick-source-tool-images/clone-demos-repo.png)

   Or, if you have GitHub Desktop installed, click **Open with GitHub Desktop** to clone the repo, and skip the command prompt step below.

   Or, you can use Visual Studio Code's **Source Control** pane to clone the repo, and skip the command prompt step below.

1. Assuming you have git installed, open a command prompt.

1. Clone the repo to your local drive, entering the URL string that you copied from the GitHub repo.  If you use a command prompt:

   ```Shell
   # example location where the repo directory will be added:
   cd c:/users/localAccount/github/
   git clone https://github.com/MicrosoftEdge/Demos.git
   ```

   For details about cloning a repo, see:
   * [Clone the Demos repo](../sample-code/sample-code.md#clone-the-demos-repo) in _Sample code for DevTools_.<!-- todo: show git bash, not only VS Code's Source Control pane -->
   * [Clone the WebView2Samples repo](../../webview2/how-to/machine-setup.md#clone-the-webview2samples-repo) in _Set up your Dev environment for WebView2_.  Shows a different sample repo, but shows steps for several tools.
   * [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) - GitHub docs.

   Now you have a local folder of source files (such as `/demo-to-do/`) that match the files on the web server.

   **Select a local folder of source files as the Workspace:**

1. In the **Activity Bar** at the top of DevTools, select the **Sources** (![The Sources tool icon](./quick-source-tool-images/sources-icon.png)) tool, select the **Workspace** tab (grouped with the **Page** tab), and then in the **Workspace** tab, click the **Add folder** button.

   The **Select Folder** dialog opens.

1. Navigate to a folder, such as `C:\Users\localAccount\GitHub\Demos\demo-to-do`, and then click the **Select Folder** button.

   At the top of DevTools, a message reads **DevTools requests full access to \<path\>**.

1. Click the **Allow** button.

   The **Sources** tool is opened.

1. In the **Sources** tool, in the **Workspace** tab, expand the tree, and then click one or more files, such as `to-do.js`.

   The file opens in the **Sources** tool:

   ![The Sources tool with a file selected](./quick-source-tool-images/sources-tool-with-file-selected.png)

1. In the **Activity Bar** at the top of DevTools, select a tool other than the **Sources** tool, such as the **Elements** tool.

   The **Quick source** tool expands in **Quick View** at the bottom of DevTools, and has a tab for each open file:

   ![A file displayed in the Quick source tool](./quick-source-tool-images/file-displayed-in-quick-source.png)<!-- 2nd use -->

Now, when you edit the folder's files in DevTools, the edits are not only made to the transient file that's returned by the server, but are also saved to the source files on your local drive.  You can edit the file from within the **Quick source** tool at the same time as displaying another tool (or from within the **Sources** tool).

See also:
* [Select a local Workspace, to use DevTools to edit files and save changes to disk](../sources/index.md#select-a-local-workspace-to-use-devtools-to-edit-files-and-save-changes-to-disk) in _Sources tool overview_.
* [Edit files with Workspaces](../workspaces/index.md)
   * [Step 4: Save a JavaScript change to disk](../workspaces/index.md#edit-javascript-and-save-changes-to-the-source-file) in _Edit files with Workspaces_


<!-- ====================================================================== -->
## Open a file by using the Command Menu

Opening a file in the **Quick source** tool or **Sources** tool opens the file in both tools.


To open a file by using the **Open File** prompt of the **Command Menu**, do any of the following:

* Select **Sources tool** > **More options** (next to the **Page** tab) > **Open file**.

* Select **Customize and control DevTools** > **Open file**.

* Press **Ctrl+P** (Windows, Linux) or **Command+P** (macOS).

* When the **Quick source** tool (or **Sources** tool) is empty, click the **Open file** link in the instructions in the tool:

  ![The Open file Command Menu](./quick-source-tool-images/open-file-command-menu.png)

  The **Open File** prompt of the **Command Menu** is displayed.

  To display the **Open file** link in the instructions in the panel, you might need to scroll down, or drag the **Quick View** divider up to make the **Quick View** panel taller.


<!-- ------------------------------ -->
#### Close a file

To close a file, click the **x** button in the file's tab.

The file is closed in the **Quick source** tool and **Sources** tool.


<!-- ------------------------------ -->
#### Select a Workspace folder

To save your DevTools edits to the source files on your local drive, do any of the following:

* In the **Sources** tool, in the **Workspace** tab, click the **Add folder** button.

* Click the **Select folder** link in the instructions, if no file is displayed in the **Quick source** tool.

* Drag a folder that contains your source files onto the **Sources** tool, when no file is open in the tool.


<!-- ------------------------------ -->
#### Open the Command Menu

To open the **Command Menu**, do any of the following:

* Select **Customize and control DevTools** > **Run command**.

* Press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS).

* Click the **Run command** link in the empty **Quick source** tool (or **Sources** tool).


<!-- ====================================================================== -->
## See also

* [Displaying source files when using a different tool](../sources/index.md#displaying-source-files-when-using-a-different-tool) in _Sources tool overview_
