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


<!-- ====================================================================== -->
## Installing

1. [Download Visual Studio Code](https://code.visualstudio.com/Download).

1. In Visual Studio Code, in the Activity Bar on the left, click the **Extensions** (![Extensions icon](./quick-start-guide-images/extensions-icon.png)) button.

1. In the **Search Extensions in Marketplace** text box, enter **Microsoft Edge Tools for VS Code**.

1. Select the **Microsoft Edge Tools for VS Code**, and then click the **Install** button:

   ![Installing the Microsoft Edge DevTools extension for Visual Studio Code](./quick-start-guide-images/vscode-edge-tools-install.png)


<!-- ====================================================================== -->
## Starting DevTools


#### Opening DevTools for an .html file in an opened folder

This is the simple scenario; try this approach first.

1. In Visual Studio Code, open a folder.

1. Right-click an `.html` file, such as `index.html`, and then select **Open with Edge** > **Open Browser with DevTools**.  The following components open:
   *  The **Edge DevTools** tab.
   *  The **Edge DevTools: Browser** tab, displaying the Success page, by default.
   *  The Debug toolbar.

   ![The two Edge DevTools tabs and the Debug toolbar](todo)

To try this by using the **demo-to-do** sample app, see [Step 3: Clone the Microsoft Edge Demos repo](./get-started.md#step-3-clone-the-microsoft-edge-demos-repo).


#### Opening DevTools for a URL using the Launch Instance button

This is the more flexible and advanced scenario; try this approach after you learn how to right-click an `.html` file as described above.

1. In Visual Studio Code, in the Activity Bar, click the Microsoft Edge Tools button.

1. Click the **Launch Instance** button.  The following components open:
   *  The **Edge DevTools** tab.
   *  The **Edge DevTools: Browser** tab, displaying the Success page, by default.

   The Debug toolbar doesn't open.

   ![DevTools components that are opened by Launch Instance button](todo)

1. Copy a URL such as a `localhost:8080` path from an existing browser address bar.

   Or, in Visual Studio Code, in the Activity Bar, click the **Explorer** (![Explorer icon]()) button.  In the **Explorer**, right-click an `.html` file, and then select **Copy path**.

1. In the **Edge DevTools: Browser** tab, paste the URL (or file path) into the address bar.

   To open the Debug toolbar, [todo].


###### Optionally using a launch.json file

If you want to use the **Launch Instance** button instead of right-clicking an `.html` file, and you want to avoid having to paste the URL or file path to replace the default, **Success** page, you can optionally create a `launch.json` file.  The `launch.json` file is a convention used by Visual Studio Code to control debugging.

1. Click the **Generate launch.json** button.  In Visual Studio Code's **Explorer** pane, note where the `launch.json` file is placed.

1. In several places in the `launch.json` file, paste the URL (or an .html file path).  Because this is a JSON string and needs escaping, change each `/` to `//`, or `\` to `\\`.  Save the file.

   *  For a repo, such as the Demos repo, if you open the entire repo folder, the **Generate launch.json** button creates a `launch.json` file near the root, for the entire repo directory.

   *  If you open a particular, smaller folder, the **Generate launch.json** button puts a `launch.json` file in that particular folder only.


<!-- ====================================================================== -->
## Editing CSS

1. In the **Edge DevTools** tab, in the **Elements** tool > **Styles** tab, edit CSS selectors, rules, and values.

1. In some scenarios, when the **CSS Mirror Editing** checkbox is selected in the **Styles** tab (which is the default setting), editing CSS values in the **Styles** tab automatically edits your local hard drive `.css` source file - it doesn't save that file, though; you need to Save if you want to preserve the CSS changes.


<!-- ====================================================================== -->
## Debugging

You might have a local .js file open, or a downloaded copy of a .js file returned by a web server.

1. Open Visual Studio Code.

<!-- 1. If you're using local filepaths instead of a server URL, open a folder, and then open a `.js` file. -->

1. In Visual Studio Code, in the Activity Bar, click the Explorer icon, and then open  Set a breakpoint in a `.js` file.

1. Enter data in the webpage, then submit - or equivalent.  For example, in demo-to-do, click a "done" option button next to an entered task, to trigger a JavaScript function that you've set a breakpoint on.


<!-- ====================================================================== -->
## Stopping and closing the DevTools extension

1.  If the Debug toolbar is open, click the **Stop** button on the Debug toolbar.
(Complicated way: Activity Bar > Microsoft Edge Tools button > Targets pane/sidebar > Close instance (X) button.)
Or, File > Close Folder.
Or, click X on the extension's two tabs, and close separate tool-controlled browser if not using Headless mode.


<!-- ====================================================================== -->
## See also

* [Get started with the DevTools extension for Visual Studio Code](./get-started.md)
