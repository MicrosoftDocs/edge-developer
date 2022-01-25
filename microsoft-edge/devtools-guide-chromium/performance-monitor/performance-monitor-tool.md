---
description: The Performance monitor tool provides real-time performance metrics to help investigate performance issues.
title: Performance monitor
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/28/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Performance monitor

Use the **Performance monitor** tool in Microsoft Edge DevTools to get a real-time view of the runtime performance of a webpage.

The **Performance monitor** tool helps determine where performance problems come from.  There are various reasons why a website might run slowly.  This tool provides clues to understand whether the problems are related to causes such as the following:
*  High memory or CPU usage.
*  Too frequent layout and style calculations.
*  Too many DOM nodes and event listeners.


<!-- ====================================================================== -->
## Open the Performance monitor tool

To open the Performance monitor:

1. [Open DevTools](../open/index.md), such as by pressing `F12`.

1. Click **More Tools** (`+`), and then select **Performance monitor**.

:::image type="content" source="../media/performance-monitor-tool/open-performance-monitor.png" alt-text="The More Tools menu, showing the Performance monitor menu command.":::

The Performance monitor shows graphs of various performance metrics that update in real time.

:::image type="content" source="../media/performance-monitor-tool/performance-monitor-first-open.png" alt-text="What the Performance monitor tool looks like when it is first opened." lightbox="../media/performance-monitor-tool/performance-monitor-first-open.png":::


<!-- ====================================================================== -->
## Select performance metrics to monitor

The **Performance monitor** tool shows three performance metrics by default, and additional metrics are available.

| Performance metric | Description |
|---|---|
| **CPU usage** | The percentage of CPU used by the web page.  Shown by default. |
| **JS heap size** | The amount of memory used by the JavaScript program on the page.  Shown by default. |
| **DOM Nodes** | The number of DOM nodes in the browser (across tabs).  Shown by default. |
| **JS event listeners** | The number of JavaScript event listeners in the browser (across tabs). |
| **Documents** | The number of document objects in the browser (across tabs). |
| **Document Frames** | The number of document frames in the browser (across tabs). |
| **Layouts / sec** | The number of times per second the browser engine constructs the layout of the page. |
| **Style recalcs / sec** | The number of times per second the browser engine calculates the CSS style of the page. |

To enable or disable any of the available performance metrics, click the labels in the side bar.

:::image type="content" source="../media/performance-monitor-tool/performance-monitor-metrics.png" alt-text="The Performance monitor sidebar, showing various metrics that can be toggled." lightbox="../media/performance-monitor-tool/performance-monitor-metrics.png":::
