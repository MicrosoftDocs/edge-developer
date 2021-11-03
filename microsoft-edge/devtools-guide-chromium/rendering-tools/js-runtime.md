---
description: Identify expensive functions using the Microsoft Edge DevTools Memory panel.
title: Speed up JavaScript runtime
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques and Meggin Kearney

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License. -->
# Speed up JavaScript runtime

Identify expensive functions using the **Memory** tool.

:::image type="complex" source="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-heavy-bottom-up.msft.png" alt-text="Sample Profiles" lightbox="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-heavy-bottom-up.msft.png":::
   Sample Profiles
:::image-end:::

### Summary

*   Record exactly which functions were called and how much memory each requires with Allocation Sampling in the **Memory** tool.
*   Visualize your profiles as a flame chart.


<!-- ====================================================================== -->
## Record a Sampling Profile

If you notice jank in your JavaScript, collect a Sampling Profile.  Sampling Profiles show where running time is spent on functions in your page.

1.  Navigate to the **Memory** tool of DevTools.
1.  Choose the **Allocation sampling** radio button.
1.  Choose **Start**.
1.  Depending on what you are trying to analyze, you may either refresh the page, interact with the page, or just let the page run.
1.  Choose the **Stop** button when you are finished.

> [!NOTE]
> You may also use the [Console Utilities API](../console/utilities.md) to record and group profiles from the command line.


<!-- ====================================================================== -->
## View Sampling Profile

When you finish recording, DevTools automatically populates the **Memory** panel under **SAMPLING PROFILES** with the data from your recording.

The default view is **Heavy (Bottom Up)**.  This view allows you to review which functions had the most impact on performance and examine the requesting path for each function.

### Change sort order

To change the sorting order, select the dropdown menu next to the **focus selected function** (![focus selected function](../media/focus-icon.msft.png)) icon and then choose one of the following options.

**Chart**.  Displays a chronological chart of the recording.

:::image type="complex" source="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-chart.msft.png" alt-text="Flame chart" lightbox="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-chart.msft.png":::
   Flame chart
:::image-end:::

**Heavy (Bottom Up)**.  Lists functions by impact on performance and enables you to examine the calling paths to the functions.  This is the default view.

:::image type="complex" source="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-heavy-bottom-up.msft.png" alt-text="Heavy chart" lightbox="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-heavy-bottom-up.msft.png":::
   Heavy chart
:::image-end:::

**Tree (Top Down)**.  Shows an overall picture of the calling structure, starting at the top of the call stack.

:::image type="complex" source="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-tree-top-down.msft.png" alt-text="Tree chart" lightbox="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-tree-top-down.msft.png":::
   Tree chart
:::image-end:::

### Exclude functions

To exclude a function from your Sampling Profile, choose it and then choose the **exclude selected function** (![exclude selected function](../media/exclude-icon.msft.png)) button.  The requesting function (parent) of the excluded function (child) is charged with the allocated memory assigned to the excluded function (child).

Choose the **restore all functions** (![restore all functions](../media/restore-icon.msft.png)) button to restore all excluded functions back into the recording.


<!-- ====================================================================== -->
## View Sampling Profile as Chart

The Chart view provides a visual representation of the Sampling Profile over time.

After you [record a Sampling Profile](#record-a-sampling-profile), view the recording as a flame chart by [changing the sort order](#change-sort-order) to **Chart**.

:::image type="complex" source="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-chart.msft.png" alt-text="Flame chart view" lightbox="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-chart.msft.png":::
   Flame chart view
:::image-end:::

The flame chart is split into two parts.

| index | Part | Description |
| --- |:--- |:--- |
| 1 | Overview | A birds-eye view of the entire recording.  The height of the bars correspond to the depth of the call stack.  So, the higher the bar, the deeper the call stack.  |
| 2 | Call Stacks | This is an in-depth view of the functions that were called during the recording.  The horizontal axis is time and vertical axis is the call stack.  The stacks are organized top-down.  So, the function on top called the one below it, and so on.  |

Functions are colored randomly.  There is no correlation to the colors used in the other panels.  However, functions are always colored the same across invocations so that you may observe patterns in each runtime.

:::image type="complex" source="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-chart-highlighted.msft.png" alt-text="Annotated flame chart" lightbox="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-chart-highlighted.msft.png":::
   Annotated flame chart
:::image-end:::

A tall call stack is not necessarily significant, it just means that a lot of functions were called.  But a wide bar means that a function took a long time to complete.  These are candidates for optimization.

### Zoom in on specific parts of recording

Choose, hold, and drag your mouse left and right across the overview to zoom in on particular parts of the call stack.  After you zoom, the call stack automatically displays the portion of the recording that you selected.

:::image type="complex" source="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-chart-zoomed.msft.png" alt-text="Chart zoomed" lightbox="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-chart-zoomed.msft.png":::
   Chart zoomed
:::image-end:::

### View function details

Choose a function to view the definition in the **Sources** tool.

Hover on a function to display the name and timing data.  The following information is provided.

| Detail | Description |
|:--- |:--- |
| **Name** | The name of the function.  |
| **Self size** | The size of the current invocation of the function, including only the statements in the function.  |
| **Total size** | The size of the current invocation of this function and any functions that it called.  |
| **URL** | The location of the function definition in the form of `base.js:261` where `base.js` is the name of the file where the function is defined and `261` is the line number of the definition.  |
<!--*   **Aggregated self time**.  Aggregate time for all invocations of the function across the recording, not including functions called by this function.  -->
<!--*   **Aggregated total time**.  Aggregate total time for all invocations of the function, including functions called by this function.  -->
<!--*   **Not optimized**.  If the profiler has detected a potential optimization for the function it lists it here.  -->

:::image type="complex" source="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-chart-hover.msft.png" alt-text="View functions details in chart" lightbox="../media/rendering-tools-gh-nodejs-benchmarks-run-memory-sampling-profiles-chart-hover.msft.png":::
   View functions details in chart
:::image-end:::


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse) and [Meggin Kearney](https://developers.google.com/web/resources/contributors#meggin-kearney) (Technical Writer).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
