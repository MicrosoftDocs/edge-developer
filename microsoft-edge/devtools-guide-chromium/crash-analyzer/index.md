---
title: Crash analyzer tool
description: How to use the Crash analyzer tool in DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 05/09/2024
---
# Crash analyzer tool

Use the **Crash analyzer** tool to analyze Microsoft Edge crashes.  In the **Crash analyzer** tool, you can input a JavaScript stack trace, such as for non-fatal JavaScript exceptions, and then have your sourcemaps applied to the stack trace so that you can debug faster.

![The Crash analyzer tool](./index-images/crash-analyzer.png)
<!-- todo: 
maybe use page/file:
https://devblogs.microsoft.com/oldnewthing/
devtools://devtools/bundled/panels/elements/elements.js
devtools://devtools/bundled/ui/components/tree_outline/tree_outline.js

show stacktrace content in DevTools
-->

When a web app crashes or hangs unexpectedly, this can result in data loss and a poor user experience.  The **Crash analyzer** tool helps you identify the cause of these crashes.  Use the **Crash analyzer** tool to analyze the memory state of your web app at the time of a crash.  You can access The **Crash analyzer** tool from the **Memory** tool, which displays a list of recent crashes that occurred in your web app.  You can also trigger a crash dump manually by clicking the **Take snapshot** button.
 
When you select a crash from the list, you can see a detailed report of the crash, including:
* The call stack.
* The heap snapshot.
* The exception message.

You can also inspect the values of the variables and objects in the heap, to see how they relate to the code that caused the crash.  This helps pinpoint the exact line of code that triggered the crash, and identify any memory leaks, infinite loops, or other bugs that may have contributed to it.

The **Crash analyzer** tool helps debug and diagnose crashes that occur in any web app, regardless of the framework or library you use.  This tool can also help you test and optimize your web app for different browsers and devices, by comparing the crash reports from different scenarios and environments.


<!-- ====================================================================== -->
## Open the Crash analyzer tool

The **Crash analyzer** tool is a Quick View tool; by default, it opens in the **Quick View** panel, so that you can use it alongside the other tools that are open in the **Activity bar**.


<!-- ------------------------------ -->
#### From the More tools menu

To open the **Crash analyzer** tool by using the DevTools **More tools** menu:

1. In Microsoft Edge, select **Settings and more** (![Edge "Settings and more" icon](./index-images/edge-settings-and-more-icon.png)) > **More tools** > **Open Developer tools** (**Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS)).  DevTools opens.

1. In DevTools, press **Esc** to open the **Quick View** toolbar at the bottom (if not open already).  In the **Quick View** toolbar, click the **More tools** (![The "More tools" icon](./index-images/more-tools-icon.png)) button, and then select **Crash analyzer**.


<!-- ------------------------------ -->
#### From the Command Menu

To open the **Crash analyzer** tool by using the Command Menu:

1. In Microsoft Edge, select **Settings and more** (![Edge "Settings and more" icon](./index-images/edge-settings-and-more-icon.png)) > **More tools** > **Open Developer tools** (**Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS)).  DevTools opens.

1. In DevTools, click the **Customize and control DevTools** (![The "Customize and control DevTools" icon](./index-images/customize-and-control-devtools-icon.png)) button, and then select **Run command**.  Or, when DevTools has focus, press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS).  The Command Menu opens.

1. Start typing **crash analyzer**, and then select the **Show Crash analyzer [Quick View]** command.  The **Crash analyzer** tool opens in the **Quick View** panel.


<!-- ====================================================================== -->
## Reporting non-fatal JavaScript exceptions or similar data to tools

To report non-fatal JavaScript exceptions (or similar data) to tools such as Azure Application Insights:

1. Produce a specially-formatted stack trace that includes a section called `Source modules`.  The `Source modules` section contains the sourcemap references to the JavaScript functions that were part of the error stack trace.  You can produce such a stack trace by using the [Crash Analyzer Support](https://www.npmjs.com/package/@microsoft/edge-devtools-crash-analyzer-support) npm package.  To install that npm package, at a command prompt, such as git bash, enter the install command that's shown at the above page: `npm i @microsoft/edge-devtools-crash-analyzer-support`.

1. Receive the stack trace from a browser that's running your code.  One way to do this is by using Azure Application Insights; see [Application Insights overview](/azure/azure-monitor/app/app-insights-overview).

1. Once you have a stack trace, paste it into the left pane of the **Crash analyzer** tool.

1. In the **Crash analyzer** tool, click the **Analyze** button (or press **Ctrl+Enter**).  The right-hand pane shows the original file names and function names that make up the stack trace:

   ![Using the Crash analyzer tool to debug a non-fatal JavaScript exception](./index-images/crash-analyzer-tool.png)
   <!-- todo: update png, and write out all steps in this list to reproduce the screenshot -->

1. Click through the individual stack frames, to see the lines in your original code that caused the error.


<!-- ====================================================================== -->
## UI items
<!-- todo: rewrite as task-oriented sections -->

The **Crash analyzer** tool has the following UI items:

| UI item | Description |
|---|---|
| Left pane | The stack trace (annotated crash dump) to analyze. |
| Right pane | Displays the original file names and function names that make up the stack trace. |
| The **New analysis** (![The 'New analysis' icon](./index-images/new-analysis-icon.png)) button | Creates a new analysis. |
| The **Analyze** (![The 'Analyze' icon](./index-images/analyze-icon.png)) button | Creates a new analysis. |
| The **Analyses** (![The 'Analyses' dropdown list](./index-images/analyses-dropdown-list.png)) dropdown list | Shows the list of analyses. |
| The **Remove this analysis** (![the 'Remove this analysis' icon](./index-images/remove-this-analysis-icon.png)) button | Removes the present analysis. |
| The **Copy unminified stack trace** (![the Copy unminified stack trace' icon](./index-images/copy-unminified-stack-trace-icon.png)) button | Copies the full, unminified stack trace, as a stack trace in the conventional V8 stack trace format, except with resolved function names, source file names, and line and column numbers. |
| The **Open Symbol Server settings** (![the 'Open Symbol Server settings' icon](./index-images/open-symbol-server-settings-icon.png)) button | Display or modify the Symbol Server settings. |
| The **How to use** (![the 'How to use' icon](./index-images/how-to-use-icon.png)) button | Opens the present article. |


<!-- ====================================================================== -->
## See also

* [Map the processed code to your original source code, for debugging](../javascript/source-maps.md) - source maps.
* [Crash analyzer tool is available by default](../whats-new/2024/03/devtools-123.md#crash-analyzer-tool-is-available-by-default) in _What's New in DevTools (Microsoft Edge 123)_.
* [Debug JavaScript error stack traces by using the Crash Analyzer tool](../whats-new/2023/05/devtools-113.md#debug-javascript-error-stack-traces-by-using-the-crash-analyzer-tool) in _What's New in DevTools (Microsoft Edge 113)_.
* [throw - JavaScript | MDN Web Docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/throw)
* [Application Insights overview](/azure/azure-monitor/app/app-insights-overview)
* [Crash Analyzer Support npm module](https://www.npmjs.com/package/@microsoft/edge-devtools-crash-analyzer-support)
* [devtools-console demo page](https://microsoftedge.github.io/Demos/devtools-console/error.html)
* [devtools-explain-error demo page](https://microsoftedge.github.io/Demos/devtools-explain-error/)
* [Fix JavaScript errors that are reported in the Console](../console/console-debug-javascript.md)
