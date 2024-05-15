---
title: Crash analyzer tool
description: How to use the Crash analyzer tool in DevTools to analyze and diagnose crashes of your production web app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 05/14/2024
---
# Crash analyzer tool

Use the **Crash analyzer** tool to analyze and quickly diagnose crashes of your production web app.  In the **Crash analyzer** tool, you can input a JavaScript stack trace, such as for non-fatal JavaScript exceptions, and then have your source maps applied to the stack trace so that you can debug faster.  The **Crash analyzer** tool enables you to take a minified JavaScript stack trace and rapidly work backwards to determine what lines of code caused the error.

![The Crash analyzer tool](./index-images/crash-analyzer.png)
<!-- todo: Create new demo page & use it in this article.
Or, use page/file:
https://devblogs.microsoft.com/oldnewthing/
devtools://devtools/bundled/panels/elements/elements.js
devtools://devtools/bundled/ui/components/tree_outline/tree_outline.js

show stacktrace content in DevTools
-->

When a web app crashes or hangs unexpectedly, this can result in data loss and a poor user experience.  The **Crash analyzer** tool helps you identify the cause of these crashes.  Use the **Crash analyzer** tool to analyze the memory state of your web app at the time of a crash.  You can access The **Crash analyzer** tool from the **Memory** tool, which displays a list of recent crashes<!-- todo: true? --> that occurred in your web app.

As a web developer, you collect stack traces from customers in production, and then use the **Crash analyzer** tool to "beautify" the stack traces in DevTools.  DevTools only does the analysis of the stack traces, not the collecting of stack traces.

As an alternative approach, you can collect local stack traces by triggering a crash dump manually by clicking the **Take snapshot** button in the **Memory** tool.<!-- todo: true? -->

When you select a crash from the list, you can see a detailed report of the crash, including:
* The call stack.
* The heap snapshot.
* The exception message.

You can also inspect the values of the variables and objects in the heap, to see how they relate to the code that caused the crash.  This helps pinpoint the exact line of code that triggered the crash, and identify any memory leaks, infinite loops, or other bugs that may have contributed to it.

The **Crash analyzer** tool helps debug and diagnose crashes that occur in any web app, regardless of the framework or library you use.  This tool can also help you test and optimize your web app for different browsers and devices, by comparing the crash reports from different scenarios and environments.


<!-- ====================================================================== -->
## Overview of steps to produce and analyze stack traces

To analyze crash stack traces in the **Crash analyzer** tool (end-to-end high-level steps):

1. It's recommended that you store source maps using Azure Artifacts Symbol Server.  See [Store source maps using Azure Artifacts Symbol Server](#store-source-maps-using-azure-artifacts-symbol-server), below.

1. Use the [Crash Analyzer Support](https://www.npmjs.com/package/@microsoft/edge-devtools-crash-analyzer-support) npm package in your web app.  The Crash Analyzer Support package produces stack traces in the format that's needed by the **Crash analyzer** tool.  To use the library that's in the Crash Analyzer Support npm package, you import the Crash Analyzer Support library, and then call `installErrorStackModuleAnnotations(Error);`.  See [Use the Crash Analyzer Support npm package to collect stack traces](#use-the-crash-analyzer-support-npm-package-to-collect-stack-traces), below.

1. Put in place some kind of production stack trace collection system, such as Application Insights.  This way, when your web app crashes on a customer's machine, the stack trace that was thrown when the crash occurred is recorded somewhere in your system.  See [Use Application Insights to receive a stack trace from the web browser](#use-application-insights-to-receive-a-stack-trace-from-the-web-browser), below.

1. Then, later, use the **Crash analyzer** tool to unminify the specially formatted stack traces that you collected in production, which are specially formatted.  This step makes use of the Azure Artifacts Symbol Server configuration to unminify the stack trace.  This enables you to see exactly where the crash happened in the code, as if you were using the customer's machine when the crash occurred.  See [Analyze crash stack traces in the Crash analyzer tool](#analyze-crash-stack-traces-in-the-crash-analyzer-tool), below.


<!-- ====================================================================== -->
## Store source maps using Azure Artifacts Symbol Server

The **Crash analyzer** tool works best if your source maps are securely stored using Azure Artifacts Symbol Server.  This is because source maps are retrieved on demand when analyzing your error, and the exact version which produced the error message might not be cached on your development machine.

See [Securely debug original code by publishing source maps to the Azure Artifacts symbol server](../javascript/publish-source-maps-to-azure.md).


<!-- ====================================================================== -->
## Use the Crash Analyzer Support npm package to collect stack traces

Use the [Crash Analyzer Support](https://www.npmjs.com/package/@microsoft/edge-devtools-crash-analyzer-support) npm package in your web app.  The Crash Analyzer Support package produces stack traces in the format that's needed by the **Crash analyzer** tool.  To use the library that's in the Crash Analyzer Support npm package, you import the Crash Analyzer Support library, and then call `installErrorStackModuleAnnotations(Error);`.

Produce a specially-formatted stack trace that includes a section called `Source modules`.  The `Source modules` section contains the source map references to the JavaScript functions that were part of the error stack trace.  You can produce such a stack trace by using the [Crash Analyzer Support](https://www.npmjs.com/package/@microsoft/edge-devtools-crash-analyzer-support) npm package.

To install the Crash Analyzer Support npm package, at a command prompt, such as git bash, enter the install command that's shown at the above page:

```
npm i @microsoft/edge-devtools-crash-analyzer-support
```


<!-- ------------------------------ -->
#### Enhanced stack trace format

Your code must produce a stack trace in the format conventionally produced by the V8 JavaScript engine, with additional metadata about the scripts being executed.  Here's an example stack trace that was produced by Microsoft Edge DevTools:

```
Error: Could not instantiate model for frameId
    at Ei (devtools://devtools/bundled/panels/elements/elements.js:1:6669)
    at vi (devtools://devtools/bundled/panels/elements/elements.js:1:6756)
    at devtools://devtools/bundled/panels/elements/elements.js:1:7403
    at async Object.children (devtools://devtools/bundled/panels/elements/elements.js:1:7137)
    at async b (devtools://devtools/bundled/ui/components/tree_outline/tree_outline.js:1:4438)
    at async #v (devtools://devtools/bundled/ui/components/tree_outline/tree_outline.js:1:8182)

Source modules:
    devtools://devtools/bundled/panels/elements/elements.js 22994ef71c62ba25b9494e26da78b621c5995bff1830c183035b4c1eb7c6b12b
    devtools://devtools/bundled/ui/components/tree_outline/tree_outline.js bac7011989ae5c7870c7f2964e88a51306eb2d520236329f09be5f5850105a42
```

The additional metadata is the line `Source modules:` and the lines below it.  Each line in that section is parsed as follows:

* The line must end with a 64-character line of hexadecimal characters corresponding to the SHA-256 hash of the script being executed.  This is a byte-for-byte hash of the content for each JavaScript file.

* The rest of the line is trimmed and treated as the module name, such as `/panels/elements/elements.js`.  The module name should correspond to file names listed in the main part of the stack trace.


<!-- ====================================================================== -->
## Use Application Insights to receive a stack trace from the web browser

To use the **Crash analyzer** tool, you first use a production stack trace collection system, to receive the stack trace from a web browser that's running your app.  One such production stack trace collection system is the Application Insights feature of Azure Monitor.  Application Insights performs Application Performance Management (APM) for live web applications.

See [Application Insights overview](/azure/azure-monitor/app/app-insights-overview).<!-- https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview -->


<!-- ====================================================================== -->
## Analyze crash stack traces in the Crash analyzer tool


<!-- ------------------------------ -->
#### Open the Crash analyzer tool

The **Crash analyzer** tool is a Quick View tool; by default, it opens in the **Quick View** panel, so that you can use it alongside the other tools that are open in the **Activity bar**.


<!-- ---------- -->
###### From the More tools menu

To open the **Crash analyzer** tool by using the DevTools **More tools** menu:

1. In Microsoft Edge, select **Settings and more** (![Edge "Settings and more" icon](./index-images/edge-settings-and-more-icon.png)) > **More tools** > **Open Developer tools** (**Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS)).  DevTools opens.

1. In DevTools, press **Esc** to open the **Quick View** toolbar at the bottom (if not open already).  In the **Quick View** toolbar, click the **More tools** (![The "More tools" icon](./index-images/more-tools-icon.png)) button, and then select **Crash analyzer**.


<!-- ---------- -->
###### From the Command Menu

To open the **Crash analyzer** tool by using the Command Menu:

1. In Microsoft Edge, select **Settings and more** (![Edge "Settings and more" icon](./index-images/edge-settings-and-more-icon.png)) > **More tools** > **Open Developer tools** (**Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS)).  DevTools opens.

1. In DevTools, click the **Customize and control DevTools** (![The "Customize and control DevTools" icon](./index-images/customize-and-control-devtools-icon.png)) button, and then select **Run command**.  Or, when DevTools has focus, press **Ctrl+Shift+P** (Windows, Linux) or **Command+Shift+P** (macOS).  The Command Menu opens.

1. Start typing **crash analyzer**, and then select the **Show Crash analyzer [Quick View]** command.  The **Crash analyzer** tool opens in the **Quick View** panel.


<!-- ------------------------------ -->
#### Use a call stack trace in the Crash analyzer tool

To use the **Crash analyzer** tool in DevTools:

1. Open the **Crash analyzer** tool of DevTools, as described in [Open the Crash analyzer tool](#open-the-crash-analyzer-tool), above.

1. Paste your enhanced call stack trace into the left pane of the **Crash analyzer** tool:

   ![The Crash analyzer tool, with the enhanced call stack pasted in the left panel](./index-images/call-stack-pasted.png)

1. In the **Crash analyzer** tool, click the **Analyze** (![The 'Analyze' icon](./index-images/analyze-icon.png)) button (or press **Ctrl+Enter**).

   The right-hand pane shows the original file names and function names that make up the stack trace:

   ![Using the Crash analyzer tool to debug a non-fatal JavaScript exception](./index-images/crash-analyzer-tool.png)
   <!-- todo: update png, and write out all steps in this list to reproduce the screenshot -->

   This loads the source maps that correspond to the source modules, and attempts to unminify any stack frames for which JavaScript or TypeScript source content was contained in the source map.

1. If the source content was contained for a frame, click on the frame.  Click through the individual stack frames, to see the lines in your original code that caused the error.

   That opens that source content in the **Sources** tool and highlights the line in question:

   ![Unminified code file and line of code accessed by clicking in the right-hand pane of the Crash analyzer tab](./index-images/code-displayed-from-right-pane.png)

1. You can further copy the unminified stack trace by clicking the **Copy** button on the toolbar.  That produces (and copies to the clipboard) a stack trace in the conventional V8 stack trace format, except with resolved function names, source files, and line/column pairs also resolved:

```
Error: Could not instantiate model for frameId
    at getModel (devtools://devtools/bundled/panels/elements/AccessibilityTreeUtils.ts:22:11)
    at getRootNode (devtools://devtools/bundled/panels/elements/AccessibilityTreeUtils.ts:28:17)
    at getChildren (devtools://devtools/bundled/panels/elements/AccessibilityTreeUtils.ts:86:29)
    at children (devtools://devtools/bundled/panels/elements/AccessibilityTreeUtils.ts:104:13)
    at getNodeChildren (devtools://devtools/bundled/ui/components/tree_outline/TreeOutlineUtils.ts:183:9)
    at TreeOutline.#fetchNodeChildren (devtools://devtools/bundled/ui/components/tree_outline/TreeOutline.ts:282:11)
```


<!-- ------------------------------ -->
#### UI features

The **Crash analyzer** tool has the following UI features:

| UI item | Description |
|---|---|
| Left pane | The stack trace (annotated crash dump) to analyze. |
| Right pane | Displays the original file names and function names that make up the stack trace. |
| The **New analysis** (![The 'New analysis' icon](./index-images/new-analysis-icon.png)) button | Creates a new blank left pane, to paste a new stack trace. |
| The **Analyze** (![The 'Analyze' icon](./index-images/analyze-icon.png)) button | Creates a new analysis in the right-hand pane, based on the stack trace in the left pane. |
| The **Analyses** (![The 'Analyses' dropdown list](./index-images/analyses-dropdown-list.png)) dropdown list | Shows the list of analyses. |
| The **Remove this analysis** (![the 'Remove this analysis' icon](./index-images/remove-this-analysis-icon.png)) button | Removes the present analysis. |
| The **Copy unminified stack trace** (![the Copy unminified stack trace' icon](./index-images/copy-unminified-stack-trace-icon.png)) button | Copies the full, unminified stack trace, as a stack trace in the conventional V8 stack trace format, except with resolved function names, source file names, and line and column numbers. |
| The **Open Symbol Server settings** (![the 'Open Symbol Server settings' icon](./index-images/open-symbol-server-settings-icon.png)) button | Display or modify the Azure Artifacts Symbol Server settings. |
| The **How to use** (![the 'How to use' icon](./index-images/how-to-use-icon.png)) button | Opens the present article. |


<!-- ====================================================================== -->
## Provide feedback

Leave feedback in the [MicrosoftEdge / DevTools](https://github.com/microsoftedge/devtools) feedback repo and let us know what works well, what doesn't, and what you'd like for such features.


<!-- ====================================================================== -->
## See also

* [Map the processed code to your original source code, for debugging](../javascript/source-maps.md) - source maps.
* [Crash analyzer tool is available by default](../whats-new/2024/03/devtools-123.md#crash-analyzer-tool-is-available-by-default) in _What's New in DevTools (Microsoft Edge 123)_.
* [Debug JavaScript error stack traces by using the Crash Analyzer tool](../whats-new/2023/05/devtools-113.md#debug-javascript-error-stack-traces-by-using-the-crash-analyzer-tool) in _What's New in DevTools (Microsoft Edge 113)_.
* [throw - JavaScript | MDN Web Docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/throw)
* [Crash Analyzer Support npm module](https://www.npmjs.com/package/@microsoft/edge-devtools-crash-analyzer-support)
* [devtools-console demo page](https://microsoftedge.github.io/Demos/devtools-console/error.html)
* [devtools-explain-error demo page](https://microsoftedge.github.io/Demos/devtools-explain-error/)
* [Fix JavaScript errors that are reported in the Console](../console/console-debug-javascript.md)
