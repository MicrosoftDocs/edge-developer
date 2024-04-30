---
title: Analyze CSS selector performance during Recalculate Style events
description: Use the Selector Stats tab in the Performance tool to understand which of your CSS selectors are taking up the most time during Recalculate Style events.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 04/30/2023
---
# Analyze CSS selector performance during Recalculate Style events

The **Performance** tool highlights each long-running task with a red triangle in the upper right corner, to indicate work on the main thread that takes a long time to run and has slow performance:

![Long-Running Task indicators for events on the main thread with slow performance](./selector-stats-images/long-running-task.png)

In your performance recordings, some of these long-running tasks may be **Recalculate Style** events.  A **Recalculate Style** event tracks the time it takes for the browser to do the following:
* Iterate through the DOM elements on a page, to find all of the CSS style rules that match a given element.
* Compute each element's actual style, based on the matching CSS style rules.

CSS styles need to be recalculated whenever the applicability of CSS rules may have changed, such as:

* When elements are added to or removed from the DOM.
* When an element's attributes are changed, such as the value of a `class` or `id` attribute.
* When user input occurs, such as a mouse move or a change of which element in a webpage has focus, which can affect `:hover` rules.

When you have long-running **Recalculate Style** events, you can use the **Selector Stats** tab to understand which of your CSS selectors are taking up the most time and resulting in slow performance.

The **Selector Stats** tab provides statistics about the CSS rule selectors that were involved in one or more **Recalculate Style** events within a performance recording.


<!-- ====================================================================== -->
## Record a performance trace with Selector Stats enabled

To view the statistics of your CSS rule selectors during long-running **Recalculate Style** events, first record a performance trace with the Selector Stats feature (advanced rendering instrumentation) enabled.

The Selector Stats feature isn't always enabled, because it adds more overhead to your performance recordings.  You should only leave it turned on when you need to investigate the performance of **Recalculate Style** events and other rendering information.

To record a performance trace with selector statistics:

1. Open a webpage in a new window or tab, such as the [Photo Gallery](https://microsoftedge.github.io/Demos/photo-gallery/) demo page.

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).  DevTools opens.

1. In DevTools, on the **Activity Bar**, select the **Performance** (![Performance tool icon](./selector-stats-images/performance-tool-icon.png)) tab.  If that tab isn't visible, select **More tools** (![More tools icon](./selector-stats-images/more-tools-icon.png)) > **Performance**.

1. In the **Performance** tool, click **Capture settings** (![Capture settings icon](./selector-stats-images/capture-settings-icon.png)).

1. Select the **Enable advanced rendering instrumentation (slow)** checkbox:

   ![The "Enable advanced rendering instrumentation" checkbox in the Performance tool](./selector-stats-images/enable-feature.png)
 
1. Click **Record**, and then run the scenario that you want to improve for your website or app.

1. Click **Stop**.

Next, view CSS selector statistics, as described in the sections below.


<!-- ====================================================================== -->
## View CSS rule selector statistics for a single event

To view the statistics of the CSS rule selectors that are involved in a single **Recalculate Style** event:

1. Do the steps in [Record a performance trace with Selector Stats enabled](#record-a-performance-trace-with-selector-stats-enabled), above.

1. Find a **Recalculate Style** event in your performance recording and click it.

1. In the bottom section of the **Performance** tool, click the **Selector Stats** tab:

   ![The "Selector Stats" tab in the Performance tool](./selector-stats-images/single-event.png)

The **Selector Stats** tab in the **Performance** tool shows a table of CSS selectors that displays the following information for each selector:

* The amount of time the browser spent matching this selector. This time is given in microseconds (µs), where 1 µs is 1/1000 of a millisecond (ms) and 1/1,000,000 of a second.

* The number of elements the browser engine attempted to match with this selector, and the number of elements it actually matched.

* The CSS style sheet that contains the CSS selector.


<!-- ====================================================================== -->
## View CSS rule selector statistics for multiple events

To view aggregate statistics of the CSS rule selectors that are involved in multiple **Recalculate Style** events, copy multiple **Selector Stats** tables into a spreadsheet:

1. Do the steps in [Record a performance trace with Selector Stats enabled](#record-a-performance-trace-with-selector-stats-enabled), above.

1. Find the first **Recalculate Style** event you're interested in, and then click it.

1. In the bottom section of the **Performance** tool, click **Selector Stats**.

1. Right-click the **Selector Stats** table, and then select **Copy Table**:

   ![The Copy Table menu item in the Selector Stats table](./selector-stats-images/copy-table.png)

1. Paste the table into a spreadsheet, such as Microsoft Excel.

1. Repeat the previous steps with the other **Recalculate Style** events you're interested in.


<!-- ====================================================================== -->
## View aggregate CSS rule selector statistics for the full recording

To view aggregate statistics of the CSS rule selectors that are involved in the entire performance recording:

1. Do the steps in [Record a performance trace with Selector Stats enabled](#record-a-performance-trace-with-selector-stats-enabled), above.

1. Deselect any event that's selected in the performance recording, by clicking an empty area of the flame chart.

1. Select the entire recording range. To do this, double-click in the **CPU** chart at the top of the **Performance** tool or, using your mouse, hover over the flame chart and scroll up until the entire chart is displayed.

1. In the bottom section of the **Performance** tool, click **Selector Stats**:

   ![The Selector Stats table for the full recording](./selector-stats-images/full-recording.png)


<!-- ====================================================================== -->
## Analyze Selector Stats

To sort the data that's displayed in the **Selector Stats** table in ascending or descending order, click a column header.  For example, to see which selectors take up the most time, click the **Elapsed (µs)** column header:

![The Selector Stats table with the selectors sorted by elapsed time, in descending order](./selector-stats-images/sort-by-elapsed-time.png)

If you find a CSS selector that took the browser a long time to calculate and was matched many times, it's a good candidate to try to improve.  Try to change your CSS selector so it requires less time to calculate, and matches fewer elements on the page.  How to improve your CSS selectors depends on your particular use case.  Repeat the steps from the previous section, to confirm that your changes helped decrease the **Recalculate Style** event duration.


<!-- ====================================================================== -->
## See also

* [Introduction to the Performance tool](./index.md) - An introduction to analyzing runtime performance in DevTools.
* [Performance features reference](./reference.md) - Covers many of the features in the **Performance** tool.
* [The truth about CSS selector performance](https://blogs.windows.com/msedgedev/2023/01/17/the-truth-about-css-selector-performance/) - Windows blog post.
