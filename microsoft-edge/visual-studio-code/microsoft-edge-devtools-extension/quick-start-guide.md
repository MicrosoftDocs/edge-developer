---
title: "Quick start guide: DevTools extension for Visual Studio Code"
description: Starting, stopping, editing CSS, and debugging a webpage using the Microsoft Edge DevTools extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 09/29/2022
---
# Quick start guide: DevTools extension for Visual Studio Code

This page summarizes the least you need to know to use the Microsoft Edge DevTools extension for Visual Studio Code.

_This page will be merged with the Get Started guide to cover launching both local .html files and URLs._
<!-- todo -->


<!-- ====================================================================== -->
## Installing

1. [Download Visual Studio Code](https://code.visualstudio.com/Download).

1. In Visual Studio Code, in the Activity Bar on the left, click the **Extensions** (![Extensions icon](./quick-start-guide-images/extensions-icon.png)) button.

1. In the **Search Extensions in Marketplace** text box, enter **Microsoft Edge Tools for VS Code**.

1. Select the **Microsoft Edge Tools for VS Code**, and then click the **Install** button:

   ![Installing the Microsoft Edge DevTools extension for Visual Studio Code](./quick-start-guide-images/vscode-edge-tools-install.png)

1. Install Node.js and npm, to get live Issues analysis.  See [Step 3: Install Node.js and Node Package Manager (npm)](./get-started.md#step-3-install-nodejs-and-node-package-manager-npm).


<!-- ====================================================================== -->
## Starting DevTools


#### Opening DevTools for an .html file in an opened folder

This is the simple scenario; try this approach first.

1. In Visual Studio Code, open a folder.

1. Right-click an `.html` file, such as `index.html`, and then select **Open with Edge** > **Open Browser with DevTools**.  The following components open:
   *  The **Edge DevTools** tab.
   *  The **Edge DevTools: Browser** tab, displaying the Success page, by default.
   *  The Debug toolbar.

   ![The two Edge DevTools tabs and the Debug toolbar](./quick-start-guide-images/devtools-extension-v211.png)

To try this by using the **demo-to-do** sample app, see [Step 3: Clone the Microsoft Edge Demos repo](./get-started.md#step-3-clone-the-microsoft-edge-demos-repo).


#### Opening DevTools for a URL using the Launch Instance button

This is the more flexible and advanced scenario; try this approach after you learn how to right-click an `.html` file as described above.

1. In Visual Studio Code, in the Activity Bar, click the Microsoft Edge Tools button.

1. Click the **Launch Instance** button.  The following components open:
   *  The **Edge DevTools** tab.
   *  The **Edge DevTools: Browser** tab, displaying the Success page, by default.

   When loading the default, **Success** page this way, the Debug toolbar doesn't open.

1. Copy a URL such as a `localhost:8080` path from an existing browser address bar.

   Or, in Visual Studio Code, in the Activity Bar, click the **Explorer** (![Explorer icon](./quick-start-guide-images/explorer-icon.png)) button.  In the **Explorer**, right-click an `.html` file, and then select **Copy path**.

1. In the **Edge DevTools: Browser** tab, paste the URL (or file path) into the address bar.

   To open the Debug toolbar: close the DevTools instance, then generate a `launch.json` file that starts a URL that uses a `.js` file, or that opens an `.html` file that uses a `.js` file, as described below.<!--todo: any other way to open Debug toolbar?  how load a URL that causes it to appear, starting from this state?-->


###### Optionally using a launch.json file

If you want to use the **Launch Instance** button instead of right-clicking an `.html` file, and you want to avoid having to paste the URL or file path to replace the default, **Success** page, you can optionally create a `launch.json` file.  The `launch.json` file is a convention used by Visual Studio Code to control debugging.

1. Click the **Generate launch.json** button.  In Visual Studio Code's **Explorer** pane, note where the `launch.json` file is placed.

1. In several places in the `launch.json` file, paste the URL (or an `.html` file path).  Because this is a JSON string and needs escaping, change each `/` to `//`, or `\` to `\\`.  Save the file.

   *  For a repo, such as the Demos repo, if you open the entire repo folder, the **Generate launch.json** button creates a `launch.json` file near the root, for the entire repo directory.

   *  If you open a particular, smaller folder, the **Generate launch.json** button puts a `launch.json` file in that folder only.

1. Click Activity Bar > **Microsoft Edge Tools** > **Launch Project** button.


<!-- ====================================================================== -->
## Editing CSS

1. In the **Edge DevTools** tab, in the **Elements** tool > **Styles** tab, edit CSS selectors, rules, and values.

1. In some scenarios, when the **CSS Mirror Editing** checkbox is selected in the **Styles** tab (which is the default setting), editing CSS values in the **Styles** tab automatically edits your local hard drive `.css` source file - it doesn't save that file, though; you need to Save if you want to preserve the CSS changes.


<!-- ====================================================================== -->
## Debugging

1. In Visual Studio Code, if you open a `.html` file from your hard drive (as described above), use Activity Bar > **Explorer** > open a `.js` file.

   If you opened a server URL, such as `https://localhost:8080` (as described above), select **Edge DevTools** tab > **Elements** tool > **Styles** tab > click a `.js` filename.  This opens a downloaded copy of a `.js` file, that was returned by a web server.

1. In the `.js` file, click to the left of a line number to set a breakpoint.  For example, in `Demos\demo-to-do\to-do.js`, set a breakpoint in the top of the `addTask` or `changeTask` function body.  (To get `to-do.js`, see [Step 3: Clone the Microsoft Edge Demos repo](./get-started.md#step-3-clone-the-microsoft-edge-demos-repo) in _Get started with the DevTools extension for Visual Studio Code_.)

1. Enter data in the webpage, then submit - or equivalent.  For example, in `Demos\demo-to-do\index.html`, click a "done" option button next to an entered task, to trigger a JavaScript function that you've set a breakpoint on.


<!-- ====================================================================== -->
## Stopping and closing the DevTools extension

Do any of the following:

*  Select **File** > **Close Folder**.

*  In the Debug toolbar, click the **Stop** button.

*  On the **Run** menu, select **Stop Debugging**.

*  Select Activity Bar > **Microsoft Edge Tools** > **Targets** > hover on a target > click **Close instance** (`X`).  This action automatically closes the **Edge DevTools** tab as well.  If necessary, close an external browser opened by the extension.

   *  For some scenarios, clicking **Close instance** (**x**) doesn't have an effect.  If needed, use another approach.  For example, if you open a folder that has no `launch.json` file, right-click an `.html` file and select **Open with Edge** > **Open Browser with DevTools**, and then select Activity Bar > **Microsoft Edge Tools** > **Targets** > click **Close instance** (**x**) on a target, DevTools continues running, because of how it was launched.

*  Click **Close** (**X**) on the **Edge DevTools** tab and on the **Edge DevTools: Browser** tab.  If using an external browser window started by the extension (rather than embedded browser/headless mode), close the automation-controlled external browser window.

*  Close the Visual Studio Code window.


<!-- ====================================================================== -->
## See also

* [Get started with the DevTools extension for Visual Studio Code](./get-started.md)
* [Microsoft Edge DevTools extension for Visual Studio Code](../microsoft-edge-devtools-extension.md)
