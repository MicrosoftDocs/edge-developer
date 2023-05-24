---
title: What's new in DevTools (Microsoft Edge 113)
description: "Debug JavaScript error stack traces with the experimental Crash analyzer tool. The Memory tool can now unminify object names in heap snapshots. The Issues tool has better support for keyboard navigation. Entry 4. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 05/23/2023
---
# What's New in DevTools (Microsoft Edge 113)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]

> [!TIP]
> The **Microsoft Build 2023** conference was on May 23-25.  Learn more about new features for memory, performance, and production debugging in DevTools and new capabilities for PWAs in the sidebar, WebView2, and Chat Plugins in the following videos:
> * [Microsoft Edge | State of web developer tools](https://www.youtube.com/watch?v=yDFmQNu3TSg&list=PL4z1-7pjJU6zJT3PBQ4mTbNg2wtX7Lt52)
> * [Microsoft Edge | Building Progressive Web Apps for the sidebar](https://www.youtube.com/watch?v=9u8lRzRUayw&list=PL4z1-7pjJU6zJT3PBQ4mTbNg2wtX7Lt52)
> * [Microsoft Edge | Bringing WebView2 to Microsoft Teams and beyond](https://www.youtube.com/watch?v=s3tDUvaoCP4&list=PL4z1-7pjJU6zJT3PBQ4mTbNg2wtX7Lt52)
> * [Building Chat Plugins for Microsoft Bing and Edge](https://www.youtube.com/watch?v=Q-5M7EYjl6U&list=PL4z1-7pjJU6zJT3PBQ4mTbNg2wtX7Lt52)

<!-- ====================================================================== -->
## Debug JavaScript error stack traces with the experimental Crash Analyzer tool

<!-- Subtitle: Turn on the "Enable Crash Analyzer" experiment and paste in your error stack trace with source map references for faster debugging. -->
<!-- Reviewer: Rob Paveza -->

The new **Crash analyzer** tool is available as an experiment in Microsoft Edge 113. You can access the **Crash analyzer** tool by selecting the "Enable Crash Analyzer" experiment from **Settings** > **Experiments**.  See [Turning an experiment on or off](../../../experimental-features/index.md#turning-an-experiment-on-or-off) for more info.

With the "Enable Crash Analyzer" experiment turned on, you can now access the **Crash analyzer** tool.  In the **Crash analyzer** tool, you can input a JavaScript stack trace, like one for non-fatal JavaScript exceptions, and have your sourcemaps applied to the stack trace so that you can debug faster.

You may report non-fatal JavaScript exceptions or similar data to tools like [Azure Application Insights](https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview?tabs=net).  You can copy the stack trace from one of these exceptions out of Application Insights and paste it into the left pane of the **Crash analyzer** tool.  You will also need to include a custom section called `Source modules`, which contains the sourcemap references to the JavaScript functions that were part of the error stack trace.  You can leverage this [npm package](https://www.npmjs.com/package/@microsoft/edge-devtools-crash-analyzer-support) to produce the stack traces needed by the **Crash analyzer** tool.

Now, select the **Analyze** button in the **Crash analyzer** tool and the right pane of the tool will populate with the original file and function names that make up the stack trace. You can click through the individual stack frames to see the lines in your original code that caused the error.

<!-- See [Crash Analyzer PR docs TBD TO-DO Zoher](../../../crash-analyzer/index.md) for more info. -->

![Using the Crash analyzer tool to debug a non-fatal JavaScript exception](./devtools-113-images/crash-analyzer-tool.png)

See also:
* [throw - JavaScript | MDN Web Docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/throw)
* [Application Insights overview](https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview?tabs=net)
* [Crash Analyzer Support | npm](https://www.npmjs.com/package/@microsoft/edge-devtools-crash-analyzer-support)

<!-- ====================================================================== -->
## The Memory tool can now unminify object names in heap snapshots

<!-- Subtitle: DevTools will apply your sourcemaps to a heap snapshot in the Memory tool so that you can see unminified object names. -->
<!-- Reviewer: Christy Chen -->

In Microsoft Edge 113, the **Memory** tool now automatically provides the original object names when taking a heap snapshot, as long as source maps are loaded. Source maps can be loaded reliably and securely by hosting them on Azure Artifacts Symbol Server.

In the following image, you see the minified object name `e` in a heap snapshot in the **Memory tool** 

![A heap snapshot in the Memory tool displays minified object names](./devtools-113-images/minified-object-name-memory-tool.png)

Now in Microsoft Edge 113, the **Memory** tool automatically unminifies object names in the heap snapshot:

![A heap snapshot in the Memory tool displays unminified object names](./devtools-113-images/unminified-object-name-memory-tool.png)

See also:
* [Securely debug original code by publishing source maps to the Azure Artifacts symbol server](../../../javascript/publish-source-maps-to-azure.md)
* [Securely debug original code by using Azure Artifacts symbol server source maps](../../../javascript/consume-source-maps-from-azure.md)
* [Take a snapshot](../../../memory-problems/heap-snapshots.md#take-a-snapshot) in _Record heap snapshots using the Memory tool_.

<!-- ====================================================================== -->
## The Issues tool has better support for keyboard navigation

<!-- Subtitle: In previous versions of Microsoft Edge, certain Close buttons in the issues tool were not displayed when navigating via the keyboard. In Microsoft Edge 113, this issue has been fixed. -->
<!-- Reviewer: Elorm Coch -->

In previous versions of Microsoft Edge, changing the **Severity** or **Browser** filters in the **Issues** tool displayed an info bar at the top of the tool to **Regenerate issues**.  However, navigating this info bar with the keyboard caused the **Close** button to disappear.  In Microsoft Edge 113, this issue has been fixed.

![Navigating the Issues tool with the keyboard no longer causes the Close button to disappear](./devtools-113-images/issues-tool-regenerate-infobar-close-button.png)

See also:
* [Filter issues](../../../issues/index.md##filter-issues) in _Find and fix problems using the Issues tool_
* [Navigate DevTools with assistive technology](../../../accessibility/navigation.md)

<!-- ====================================================================== -->
## In Focus Mode, hovering over a tool no longer makes the title of each tool disappear in the Activity Bar

<!-- Subtitle: With the Activity Bar in the horizontal orientation, you can now see the title of each tool and hover over the tool icon to see a tooltip. -->
<!-- Reviewer: Yanling Wang -->

In previous versions of Microsoft Edge, in Focus Mode, hovering over a tool in the Activity Bar would cause all the titles of the tools in the Activity Bar to disappear.  In Microsoft Edge 113, this issue has been fixed.  With the Activity Bar at the top, you can hover over tool icons to see the name of the tool in a tooltip and you can still see all of the titles of the tools in the toolbar.

![Hovering over a tool icon in the Activity Bar produces a tooltip with the name of the tool](./devtools-113-images/focus-mode-tooltip.png)

See also:
* [Simplify DevTools using Focus Mode](../../../experimental-features/focus-mode.md)

## Context menus in the DevTools better support themes from VS Code

<!-- Subtitle: Customize DevTools to match VS Code with themes like Solarized Light, Kimbie Dark, Monokai, or Tomorrow Night Blue. -->
<!-- Reviewer: Irene Cho -->

In previous versions of Microsoft Edge, applying themes from VS Code like Solarized Light or Kimbie Dark caused low contrast issues when hovering over an item in a context menu.  In Microsoft Edge 113, this issue has been fixed.  Context menus now display better, with sufficient color contrast, when using themes in DevTools.

![Sufficient color contrast in a context menu in DevTools with the Solarized Light theme](./devtools-113-images/themes-contrast-in-context-menu.png)

See also:
* [Apply a color theme to DevTools](../../../customize/theme.md)
* [Test text-color contrast using the Color Picker](../../../accessibility/color-picker.md)
* [Check text-color contrast in the default state using the Inspect tool](../../../accessibility/test-inspect-text-contrast.md)

## The Node types filter in the Memory tool now only displays in the Summary view of a heap snapshot

In [Microsoft Edge 100](../../2022/03/devtools-100.md#filter-heap-snapshots-summary-by-node-type), we added a **Node Types** filter to the **Memory** tool so that you could focus on only specific types of objects, like `Array` or `String`, when looking at a heap snapshot.  However, this **Node Types** filter only applies to the objects that are displayed in the **Summary** view of a heap snapshot. The filter does not apply to the **Containment** or **Statistics** views of the heap snapshot.  

In Microsoft Edge 113, the **Node Types** filter is only displayed when the **Summary** view is selected.

![The Node Types filter is displayed in the Summary view of a heap snapshot](./devtools-113-images/memory-tool-node-filter-summary.png)

The filter is no longer displayed, since it doesn't apply, to the **Containment** or **Statistics** views.

![The Node Types filter is not displayed in the Containment view of a heap snapshot](./devtools-113-images/memory-tool-node-filter-containment.png)

See also:
* [Filter heap snapshots summary by node type](../../2022/03/devtools-100.md#filter-heap-snapshots-summary-by-node-type)  in _What's New in DevTools (Microsoft Edge 100)_
* [Take a snapshot](../../../memory-problems/heap-snapshots.md#take-a-snapshot) in _Record heap snapshots using the Memory tool_.

<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 113 also includes the following updates from the Chromium project:

* [Override network response headers](https://developer.chrome.com/blog/new-in-devtools-113/#network)
* [Nuxt, Vite, and Rollup debugging improvements](https://developer.chrome.com/blog/new-in-devtools-113/#debug)
* [CSS improvements in Elements > Styles](https://developer.chrome.com/blog/new-in-devtools-113/#css)
   * [Invalid CSS properties and values](https://developer.chrome.com/blog/new-in-devtools-113/#invalid-css)
   * [Links to key frames in the animation shorthand property](https://developer.chrome.com/blog/new-in-devtools-113/#animation-key-frames)
* [New Console setting: Autocomplete on Enter](https://developer.chrome.com/blog/new-in-devtools-113/#console)
* [Command Menu emphasizes authored files](https://developer.chrome.com/blog/new-in-devtools-113/#command-menu)
* [JavaScript Profiler deprecation: Stage two](https://developer.chrome.com/blog/new-in-devtools-113/#js-profiler)

<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 113)](https://developer.chrome.com/blog/new-in-devtools-113) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
