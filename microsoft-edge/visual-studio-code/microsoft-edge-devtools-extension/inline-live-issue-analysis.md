---
title: Inline and live issue analysis
description: Inline and live issue analysis in the Microsoft Edge Developer Tools extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 09/14/2022
---
# Inline and live issue analysis

Issues in your source code are highlighted with wavy underlines. You can inspect the issue and get detailed information about what the problem is, how to fix it, and where to find more information.  To inspect the issue, select the code that has the wavy underline:

![An accessibility issue reported inside a piece of code showing how to fix the problem, and where to find more information](../microsoft-edge-devtools-extension-images/inline-issue-reporting.png)

To see all the issues in the file, select **View Problem**:

![A highlighted issue in the source code with a navigation bar explaining the problem and buttons to move to the next and previous issues](../microsoft-edge-devtools-extension-images/navigating-issues.png)

The **Problems** tab in the lower panel lists all the issues in the currently open files:

![The Problems tab in the lower panel of Visual Studio Code, listing all the issues that are found in the project's files](../microsoft-edge-devtools-extension-images/issues-in-lower-panel.png)


<!-- ====================================================================== -->
## Live updating of issues reporting

Issues are evaluated live while you edit your code.  As you type, you get feedback about any issues that are found, and how to fix them:

![A possible issue being explained on an output element](../microsoft-edge-devtools-extension-images/live-issue-reporting.png)


<!-- ====================================================================== -->
## Automated Quick Fixes and issue filtering

<!--
bold "Quick Fix" when focusing on the UI
the UI label string is "Quick Fix", not "Quick Fixes"
-->

The Microsoft Edge DevTools extension for Visual Studio Code includes a **Quick Fix** feature.  By using Quick Fixes, you can customize the error reporting of the extension to meet the needs of the current project.

When you hover over an element that has an issue, you get a lightbulb icon indicating that there are Quick Fixes available:

![An anchor element with a protocol-specific href attribute highlighted as a problem, by a wavy underline and lightbulb icon above it](../microsoft-edge-devtools-extension-images/light-bulb.png)

Clicking the lightbulb icon shows a list of options. For example, if you added a link that has a protocol-relative URL, you get the following **Quick Fix** list to choose from:

![The Quick Fix panel opened next to the anchor element with the error, offering several Quick Fix options](../microsoft-edge-devtools-extension-images/quick-fix-options.png)

You can select whichever **Quick Fix** you want to use to resolve the issue or to stop reporting it as an issue:

* **Fix "no-protocol-relative-urls" issue** - Adds the missing URL prefix `https://` to the link.

* **Disable "no-protocol-relative-urls" hints in this project** - Creates a `.hintrc` configuration file in the project folder, and tells the extension never to report this issue again.

* **Edit .hintrc for this project** - Opens the `.hintrc` configuration file so you can edit it to customize the extension's error reporting.


<!-- ====================================================================== -->
## See also

*  [Microsoft Edge DevTools extension for Visual Studio Code](./microsoft-edge-devtools-extension.md)
