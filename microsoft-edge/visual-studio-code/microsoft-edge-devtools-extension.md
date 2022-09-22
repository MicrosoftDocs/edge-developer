---
title: Microsoft Edge DevTools extension for Visual Studio Code
description: Using the Microsoft Edge Developer Tools extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 09/07/2022
---
# Microsoft Edge DevTools extension for Visual Studio Code
<!-- this is the main landing (firstchild) page for the DevTools extension TOC bucket -->

<!-- heading convention in these files: skip h3's; tag subheadings as h4's instead -->

<!-- lexicon (except when quoting a UI string):
Microsoft Edge DevTools extension for Visual Studio Code
Microsoft Edge DevTools extension
CSS Mirroring
CSS mirror editing (lowercased in UI, initcapped at gh)
-->

<!-- todo:
why sometimes localhost 8080 vs c: path?
-->


The [Microsoft Edge DevTools extension for Visual Studio Code](https://aka.ms/devtools-for-code) lets you use the Microsoft Edge Browser and Developer Tools right from within Visual Studio Code.  Visual Studio Code includes built-in support for JavaScript, TypeScript, and Node.js, so it's a great tool for web developers.  Visual Studio Code is a lightweight but powerful source code editor that's available for Windows, Linux, and macOS.

![Microsoft Edge Developer Tools and browser preview in Visual Studio Code](microsoft-edge-devtools-extension-images/devtools-extension-v201.png)

This extension enables you to:
*  Develop webpages and use DevTools without leaving Visual Studio Code; without having to work within DevTools within the browser window.
*  Emulate devices, in terms of viewport size in which your webpage is displayed.
*  Test the accessibility of your webpages from within Visual Studio Code.
*  Live-edit CSS and SASS and see your changes reflected immediately in a browser instance while editing your actual source files (rather than a copy of the files returned from the server).


The extension allows you to:

| Task | Section |
|---|---|
| Get live analysis of problems in your source code. | [Inline and live issue analysis](./microsoft-edge-devtools-extension/inline-live-issue-analysis.md) |
| Start a new browser instance with DevTools for your project. | [Opening a browser instance in the extension](./microsoft-edge-devtools-extension/opening-browser-instance.md) |
| Emulate different devices and see your project in different display modes. | [Device and state emulation](./microsoft-edge-devtools-extension/device-state-emulation.md) |
| View the runtime DOM structure and layout of your page using the **Elements** tool. | [Opening source files from the Elements tool](./microsoft-edge-devtools-extension/opening-source-files-from-elements-tool.md) |
| Analyze and change CSS styles of your project with live preview and live changes to your project's source files. | [Syncing live changes from the Styles tool by using CSS mirror editing](./microsoft-edge-devtools-extension/sync-live-changes-styles-tool-css-mirror-editing.md) |
| Analyze site traffic using the **Network** tool. | [Network tool integration](./microsoft-edge-devtools-extension/network-tool-integration.md) |
| Log information, try out JavaScript, and access the Window/DOM using the **Console** tool. | [Console integration](./microsoft-edge-devtools-extension/console-integration.md) |
| Inspect storage and Service Workers using the **Application** tool. | [Application tool integration](./microsoft-edge-devtools-extension/application-tool-integration.md) |
| Use the extension in the Visual Studio Code debugging workflow. | [Automatically opening the browser and DevTools when debugging in Visual Studio Code](./microsoft-edge-devtools-extension/extension-debugging-workflow.md) |

The following tools are included in the DevTools extension:
*  Elements tool
*  Console tool
*  Network tool
*  Application tool
*  Issues tool
*  Network conditions tool
*  Network request blocking tool
*  Inspect tool
*  Device emulation

For the list of all tools that are in the Microsoft Edge browser version of DevTools, see [Overview of all tools](../devtools-guide-chromium/about-tools.md#overview-of-all-tools) in _About the list of tools_.


<!-- ====================================================================== -->
## See also

* [vscode-edge-devtools repo](https://github.com/microsoft/vscode-edge-devtools) - source code for the Microsoft Edge Developer Tools extension for Visual Studio Code, at GitHub.
* [Download Visual Studio Code](https://code.visualstudio.com)
* [Getting Started](https://code.visualstudio.com/Docs) - Documentation for Visual Studio Code.
