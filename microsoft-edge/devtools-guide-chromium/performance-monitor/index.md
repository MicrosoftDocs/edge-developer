---
description: The Performance monitor tool provides real-time performance metrics to help investigate performance issues.
title: Performance monitor
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/20/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Performance monitor

Use the **Performance monitor** tool in Microsoft Edge DevTools to get a real-time view of a web page's runtime performance.

It helps determine where performance problems come from as different kinds of reasons can make a website run slow.

The tool provides clues to understand if the problems are related to high memory or CPU usage, too frequent layout and style calculations, or too many DOM nodes and event listeners.

## Open the Performance monitor tool

To open the tool:

1. [Open DevTools](../open/index.md).
1. Go to **More Tools**, and then select **Performance monitor**.

:::image type="content" source="../media/open-performance-monitor.png" alt-text="The More Tools menu, showing the Performance monitor menu item":::

Once opened, the tool shows real-time updating graphics of various performance metrics.

:::image type="content" source="../media/performance-monitor-first-open.png" alt-text="What the Performance monitor tool looks like when it is first opened":::

## Select performance metrics to monitor

By default, the **Performance monitor** tool shows three performance metrics:

* **CPU usage**: the percentage of CPU used by the web page.
* **JS heap size**: the amount of memory used by the JavaScript program on the page.
* **DOM Nodes**: the number of DOM nodes in the browser (across tabs).

The following performance metrics are also available:

* **JS event listeners**: the number of JavaScript event listeners in the browser (across tabs).
* **Documents**: the number of document objects in the browser (across tabs).
* **Document Frames**: the number of document frames in the browser (across tabs).
* **Layouts / sec**: the number of times per second the browser engine constructs the layout of the page.
* **Style recalcs / sec**: the number of times per second the browser engine calculates the CSS style of the page.

To enable or disable any of the available performance metrics, click on the labels in the side bar.

:::image type="content" source="../media/performance-monitor-metrics.png" alt-text="The Performance monitor sidebar, showing 8 different metrics that can be toggled":::
