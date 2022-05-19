---
title: Visual Studio Code for web development
description: Microsoft Edge and Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 05/19/2022
---
# Visual Studio Code for web development

Visual Studio Code includes built-in support for JavaScript, TypeScript, and Node.js, so it's a great tool for web developers.  Visual Studio Code is a lightweight but powerful source code editor that's available for Windows, Linux, and macOS.


<!-- ====================================================================== -->
## Microsoft Edge DevTools extension for Visual Studio Code

The Microsoft Edge DevTools extension for Visual Studio Code lets you use the **Elements** tool and **Network** tool of the Microsoft Edge browser from within Visual Studio Code.

Without leaving Visual Studio Code, use Microsoft Edge DevTools to connect to an instance of Microsoft Edge and then:
* View the runtime HTML structure.
* Change the layout.
* Change styles (CSS).
* Read console messages.
* View network requests.

See [Microsoft Edge DevTools extension for Visual Studio Code](microsoft-edge-devtools-extension.md).


<!-- ====================================================================== -->
## Open source files in Visual Studio Code

The **Open source files in Visual Studio Code** experiment allows you to use Microsoft Edge DevTools, but then edit your files in Visual Studio Code instead of in the code editor of the DevTools **Sources** tool.

When you use this experiment, if you use Visual Studio Code and you use DevTools to change your CSS rules, you no longer have to use the code editor in the Sources tool of DevTools.  You can simply use the code editor in Visual Studio Code.  When you turn on this experiment,
local files will get a different treatment.<!--TODO: be specific-->

See [Opening source files in Visual Studio Code](../devtools-guide-chromium/sources/opening-sources-in-vscode.md).


<!-- ====================================================================== -->
## Debug Microsoft Edge in Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com) includes a built-in debugger for Microsoft Edge, which can launch the browser or attach to an already running browser.

This built-in debugger lets you debug your front-end JavaScript code line-by-line and see `console.log()` statements directly from Visual Studio Code.

See [Debug Microsoft Edge in Visual Studio Code](debugger-for-edge.md).


<!-- what to do with this section?  present page is supposed to have h2 for each child page of TOC node, where h2 contains only 1 paragraph and link to child page -->
<!-- ====================================================================== -->
## The webhint extension for Visual Studio Code

Use webhint, a customizable linting tool, to improve the functionality of your site, including:

*   Accessibility.
*   Performance.
*   Cross-browser compatibility.
*   PWA compatibility.
*   Security.

webhint checks your code for best practices and common errors.  Identify and fix problems in your files, including HTML, CSS, JavaScript, and TypeScript.  Hints appear as wavy underlines in the text editor, and are summarized in the **Problems** pane.

<!-- todo: don't have png files in this nav page.  delete png (only used here) -->
<!-- ![The webhint extension for Visual Studio Code.](media/webhint-extension.png) -->

Instead of webhint, see [Microsoft Edge DevTools extension for Visual Studio Code](microsoft-edge-devtools-extension.md).


<!-- ====================================================================== -->
## See also

*  [Download Visual Studio Code](https://code.visualstudio.com)
*  [Getting Started](https://code.visualstudio.com/Docs) - Documentation for Visual Studio Code.
