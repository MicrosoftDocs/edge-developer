---
title: Microsoft Edge IDE integration
description: IDE integration of Microsoft Edge, Visual Studio Code, and Visual Studio.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.date: 07/05/2022
---
# Microsoft Edge IDE integration

Various features of Microsoft tools provide integration of development using Microsoft Edge, Visual Studio Code, and Visual Studio, to develop your products, webpages, and web apps that use and work with full integration in Microsoft Edge.


<!-- ====================================================================== -->
## Microsoft Edge DevTools extension for Visual Studio Code

<!-- keep this section short and similar to top of linked article: -->

The Microsoft Edge DevTools extension for Visual Studio Code lets you use the **Elements** tool and **Network** tool of the Microsoft Edge browser from within Visual Studio Code.

Without leaving Visual Studio Code, use Microsoft Edge DevTools to attach to an instance or launch an instance of Microsoft Edge, and then:
* View the runtime HTML structure.
* Change the webpage layout.
* Change CSS styles and fix styling issues.
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
<!-- keep in sync:
[webhint extension for Visual Studio Code](../test-and-automation/webhint.md)
[The webhint extension for Visual Studio Code]() in _Visual Studio Code for web development_.
-->

Use webhint, a customizable linting tool, to improve the functionality of your site, including:

*   Accessibility.
*   Performance.
*   Cross-browser compatibility.
*   PWA compatibility.
*   Security.

webhint checks your code for best practices and common errors.  Identify and fix problems in your files, including HTML, CSS, JavaScript, and TypeScript.  Hints appear as wavy underlines in the text editor, and are summarized in the **Problems** pane.

**Note:** As of April 2022, the webhint extension for Visual Studio Code is no longer being maintained.  See [Microsoft Edge DevTools extension for Visual Studio Code](microsoft-edge-devtools-extension.md).


<!-- ====================================================================== -->
## Visual Studio for web development

Microsoft [Visual Studio](https://visualstudio.microsoft.com/vs) is an integrated development environment (IDE).   Use it to edit, debug, build, and publish your web apps.  It's a feature-rich program that can be used for many aspects of your web development.

In addition to the standard editor and debugger that most IDEs provide, Visual Studio includes features to ease your development process, including:

*   Compilers.
*   Code completion tools.
*   Graphical designers.
*   And many more features.

See [Visual Studio for web development](../visual-studio/index.md).
