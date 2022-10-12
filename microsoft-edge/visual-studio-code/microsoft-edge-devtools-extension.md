---
title: Microsoft Edge DevTools extension for Visual Studio Code
description: Using the Microsoft Edge Developer Tools extension for Visual Studio Code.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 10/06/2022
---
# Microsoft Edge DevTools extension for Visual Studio Code

<!-- main page for DevTools extension -->

<!-- use h2/h4/h6, skip h3/h5 -->

<!-- lexicon (except ui strings):
Microsoft Edge DevTools extension for Visual Studio Code
Microsoft Edge DevTools extension
CSS Mirroring
CSS mirror editing (lowercased in UI, init capped at github)
-->

The Microsoft Edge DevTools extension for Visual Studio Code lets you use Microsoft Edge DevTools and an embedded version of the Microsoft Edge Browser including Device Emulation, right from within Visual Studio Code.  Visual Studio Code includes built-in support for JavaScript, TypeScript, and Node.js, so it's a great tool for web developers, especially with this DevTools extension.  Visual Studio Code is a lightweight but powerful source code editor that's available for Windows, Linux, and macOS.

![Microsoft Edge Developer Tools and browser preview in Visual Studio Code](microsoft-edge-devtools-extension-images/devtools-extension-v211.png)

This DevTools extension for Visual Studio Code enables you to:

*  Develop webpages and use DevTools without leaving Visual Studio Code.  This extension gives you an alternative to using DevTools for webpage development within the browser window.

*  Emulate devices, such as displaying your webpage in various viewport sizes during development.

*  Test the accessibility of your webpages from within Visual Studio Code.

*  Live-edit CSS and SASS and see your changes reflected immediately in a browser instance while editing your actual source files.  DevTools opens and edits your `.css` files, but without automatically saving the files, so that you can decide and control whether to save the changes that you made within the **Styles** tab of the **Elements** tool.


<!-- ====================================================================== -->
## Tasks supported by the developer tools

The DevTools extension for Visual Studio Code allows you to:

| Task | Article |
|---|---|
| Get live analysis of problems in your source code. | [Inline and live issue analysis](./microsoft-edge-devtools-extension/inline-live-issue-analysis.md) |
| Start a new browser instance with DevTools for your project. | [Opening DevTools and the embedded DevTools browser](./microsoft-edge-devtools-extension/open-devtools-and-embedded-browser.md) |
| Emulate different devices and see your project in different display modes. | [Device and state emulation](./microsoft-edge-devtools-extension/device-state-emulation.md) |
| View the runtime DOM structure and layout of your page using the **Elements** tool. | [Opening source files from the Elements tool](./microsoft-edge-devtools-extension/opening-source-files-from-elements-tool.md) |
| Analyze and change CSS styles of your project with live preview and live changes to your project's source files. | [Update .css files from within the Styles tool (CSS mirror editing)](./microsoft-edge-devtools-extension/css-mirror-editing-styles-tab.md) |
| Analyze site traffic using the **Network** tool. | [Network tool integration](./microsoft-edge-devtools-extension/network-tool-integration.md) |
| Log information, try out JavaScript, and access the Window/DOM using the **Console** tool. | [Console integration](./microsoft-edge-devtools-extension/console-integration.md) |
| Inspect storage and Service Workers using the **Application** tool. | [Application tool integration](./microsoft-edge-devtools-extension/application-tool-integration.md) |
| Use the extension in the Visual Studio Code debugging workflow. | [Automatically opening the browser and DevTools when debugging in Visual Studio Code](./microsoft-edge-devtools-extension/debugging-a-webpage.md) |


<!-- ====================================================================== -->
## Overview of the developer tools

The following tools are included in the DevTools extension for Visual Studio Code.  The following articles are not specifically focused on the DevTools extension for Visual Studio Code, but are for the Microsoft Edge browser DevTools.

| Tool | Purpose | Article |
| --- | --- | --- |
| **Elements** tool | Inspect, edit, and debug your HTML and CSS.  You can edit in the tool while displaying the changes live in the browser.  Debug your HTML using the DOM tree, and inspect and work on the CSS for your webpage. | [Inspect, edit, and debug HTML and CSS with the Elements tool](../devtools-guide-chromium/elements-tool/elements-tool.md) |
| **Console** tool | An intelligent, rich command line within DevTools.  A great companion tool to use with others tools.  Provides a powerful way to script functionality, inspect the current webpage, and manipulate the current webpage using JavaScript. | [Console overview](../devtools-guide-chromium/console/index.md) |
| **Network** tool | Use the **Network** tool to make sure that resources are being downloaded or uploaded as expected.  Inspect the properties of an individual resource, such as the HTTP headers, content, or size. | [Inspect network activity](../devtools-guide-chromium/network/index.md) |
| **Application** tool | Use the **Application** tool to manage storage for web app pages, including manifest, service workers, local storage, cookies, cache storage, and background services. | [The Application tool, to manage storage](../devtools-guide-chromium/storage/application-tool.md) |
| **Issues** tool | The **Issues** tool automatically analyzes the current webpage, reports issues grouped by type, and provides documentation to help explain and resolve the issues. | [Find and fix problems using the Issues tool](../devtools-guide-chromium/issues/index.md) |
| **Network conditions** tool | Use the **Network conditions** tool to disable the browser cache, set network throttling, set the user agent string, and set Content-Encodings such as deflate, gzip, and br. | [Network conditions tool](../devtools-guide-chromium/network-conditions/network-conditions-tool.md) |
| **Network request blocking** tool | Use the **Network request blocking** tool to test blocking network requests to a specified URL pattern and see how a webpage behaves. | [Network request blocking tool](../devtools-guide-chromium/network-request-blocking/network-request-blocking-tool.md) |
| **Inspect** tool | Use the **Inspect** tool to see information about an item within a rendered webpage.  When the **Inspect** tool is active, you _hover_ over items in the webpage, and DevTools adds an information overlay and grid highlighting on the webpage. | [Analyze pages using the Inspect tool](../devtools-guide-chromium/css/inspect.md) |
| **Device Emulation** | Use the **Device Emulation** tool, also called _Device Simulation Mode_ or _Device Mode_, to approximate how your page looks and responds on a mobile device. | [Emulate mobile devices (Device Emulation)](../devtools-guide-chromium/device-mode/index.md) |

For the list of all tools that are in the Microsoft Edge browser version of DevTools, see [Overview of all tools](../devtools-guide-chromium/about-tools.md#overview-of-all-tools) in _About the list of tools_.


<!-- ====================================================================== -->
## See also

* [Get started using the DevTools extension for Visual Studio Code](./microsoft-edge-devtools-extension/get-started.md)
* [Supercharging VS Code Live Server](https://dev.to/codepo8/supercharging-vs-code-live-server-1bgi) - If you use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in Visual Studio Code to see the changes in your web products live, you can improve the experience even more by getting a browser and DevTools embedded in Visual Studio Code using the Microsoft Edge DevTools extension for Visual Studio Code.
* [Getting Started](https://code.visualstudio.com/Docs) - Documentation for Visual Studio Code.
* [vscode-edge-devtools repo](https://github.com/microsoft/vscode-edge-devtools) - source code for the Microsoft Edge Developer Tools extension for Visual Studio Code.
* [Microsoft Edge DevTools extension for Visual Studio Code](https://aka.ms/devtools-for-code) in the Visual Studio Marketplace.
