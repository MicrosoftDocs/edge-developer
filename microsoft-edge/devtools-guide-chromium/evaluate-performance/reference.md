---
title: Performance features reference
description: A reference on all the ways to record and analyze performance in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 05/04/2021
---
<!-- Copyright Kayce Basques

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Performance features reference

This page is a comprehensive reference of DevTools features that are related to analyzing performance.

For a step-by-step tutorial on how to analyze the performance of a page using the **Performance** tool, see [Get started analyzing runtime performance](index.md).


<!-- ====================================================================== -->
## Record performance

### Record runtime performance

Record runtime performance when you want to analyze the performance of a page as it is running, as opposed to loading.

1. Go to the page that you want to analyze.

1. Click the **Performance** tool in DevTools.

1. Click the **Record** (![Record icon.](../media/record-icon.msft.png)) button.

   ![Record.](../media/evaluate-performance-performance-record-highlight.msft.png)

1. Interact with the page.  DevTools records all page activity that occurs as a result of your interactions.

1. Click **Record** again or click **Stop** to stop recording.

### Record load performance

Record load performance when you want to analyze the performance of a page as it is loading, as opposed to running.

1. Go to the page that you want to analyze.

1. In DevTools, open the **Performance** tool.

1. Click the **Refresh page** (![Refresh Page.](../media/refresh-page-icon.msft.png)) button.  DevTools records performance metrics while the page refreshes and then automatically stops the recording a couple seconds after the load finishes.

![Refresh page.](../media/evaluate-performance-performance-refresh-button.msft.png)

DevTools automatically zooms in on the portion of the recording where most of the activity occurred.

![A page-load recording.](../media/evaluate-performance-performance-refreshed.msft.png)

### Capture screenshots while recording

To capture a screenshot of every frame while recording, select the **Screenshots** checkbox.

![The Screenshots checkbox.](../media/evaluate-performance-performance-capture-screenshots-checkbox.msft.png)

To learn how to interact with screenshots, see [View a screenshot](#view-a-screenshot).

### Force garbage collection while recording

While you are recording a page, click **Collect garbage** (![Collect garbage icon.](../media/collect-garbage-icon.msft.png)) to force garbage collection.

![Collect garbage.](../media/evaluate-performance-performance-collect-garbage-button.msft.png)

### Show recording settings

Click **Capture settings** (![Capture settings.](../media/capture-settings-icon.msft.png)) to expose more settings related to how DevTools captures performance recordings.

![The Capture Settings section.](../media/evaluate-performance-performance-capture-settings-button-open-drawer.msft.png)

### Disable JavaScript samples

By default, the **Main** section of a recording displays detailed call stacks of JavaScript functions that were called during the recording.  To disable these call stacks:

1. Open the **Capture settings** menu.  See [Show recording settings](#show-recording-settings).

1. Turn on the **Disable JavaScript Samples** checkbox.

1. Take a recording of the page.

The following two figures show the difference between disabling and enabling JavaScript samples.  The **Main** section of the recording is much shorter when sampling is disabled, because it omits all of the JavaScript call stacks.

An example of a recording when JS samples are disabled:

![An example of a recording when JS samples are disabled..](../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-on.msft.png)

An example of a recording when JS samples are turned on:

![An example of a recording when JS samples are turned on..](../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off.msft.png)

### Throttle the network while recording

To throttle the network while recording:

1. Open the **Capture settings** menu.  See [Show recording settings](#show-recording-settings).

1. Set **Network** to the desired level of throttling.

### Throttle the CPU while recording

To throttle the CPU while recording:

1. Open the **Capture settings** menu.  See [Show recording settings](#show-recording-settings).

1. Set **CPU** to the desired level of throttling.

Throttling is relative to the capabilities of your computer.  For example, the **2x slowdown** option makes your CPU operate 2 times slower than normal.  DevTools don't truly simulate the CPUs of mobile devices, because the architecture of mobile devices is very different from that of desktops and laptops.

### Turn on advanced paint instrumentation

To view detailed paint instrumentation:

1. Open the **Capture settings** menu.  See [Show recording settings](#show-recording-settings).

1. Check the **Enable advanced paint instrumentation (slow)** checkbox.

To learn how to interact with the paint information, see [View layers](#view-layers-information) and [View paint profiler](#view-paint-profiler).


<!-- ====================================================================== -->
## Save a recording

To save a recording, right-click the recording and then select **Save Profile**.

![Save Profile.](../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off-save-profile.msft.png)


<!-- ====================================================================== -->
## Load a recording

To load a recording, right-click the recording and then select **Load Profile**.

![Load Profile.](../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off-load-profile.msft.png)


<!-- ====================================================================== -->
## Clear the previous recording

After making a recording, click **Clear recording** (![Clear recording icon.](../media/clear-recording-icon.msft.png)) to clear that recording from the **Performance** tool.

![Clear recording.](../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off-clear-button.msft.png)


<!-- ====================================================================== -->
## Analyze a performance recording

After you [record runtime performance](#record-runtime-performance) or [record load performance](#record-load-performance), the **Performance** panel provides a lot of data for analyzing the performance of what just happened.

### Select a portion of a recording

Drag your mouse left or right across the **Overview** to select a portion of a recording.  The **Overview** is the section that contains the **CPU**, and **NET** charts.

![Drag the mouse across the Overview to zoom.](../media/evaluate-performance-performance-zoom-highlighted.msft.png)

To select a portion using the keyboard:

1. Select the background of the **Main** section, or any of the sections next to it, such as **Interactions**, **Network**, or **GPU**.  This keyboard workflow only works when one of these sections is in focus.

1. Use the `W`, `A`, `S`, `D` keys to zoom in, move left, zoom out, and move right, respectively.

To select a portion using a trackpad:

1. Hover your mouse over the **Overview** section or the **Details** section.  The **Overview** section is the area containing the  **CPU** and **NET** charts.  The **Details** section is the area containing the **Main** section, the **Interactions** section, and so on.

1. Using two fingers, swipe up to zoom out, swipe left to move left, swipe down to zoom in, and swipe right to move right.

To scroll a long flame chart in the **Main** section or any of the neighbors, click and hold while dragging up and down.  Drag left and right to move what portion of the recording is selected.

### Search activities

Press `Ctrl`+`F` (Windows, Linux) or `Command`+`F` (macOS) to open the search box at the bottom of the **Performance** panel.

![The search box.](../media/evaluate-performance-performance-search-regex.msft.png)

To navigate activities that match your query:

1. Click the **Previous** (![Previous.](../media/previous-icon.msft.png)) and **Next** (![Next.](../media/next-icon.msft.png)) buttons.

1. To select the next activity, press `Enter`.  To select the previous activity, press `Shift`+`Enter`.

To modify query settings:

*  To make the query case-sensitive, click the **Case sensitive** (![Case sensitive.](../media/search-case-icon.msft.png)) button.

*  To use a regular expression in your query, click the **Regex** (![Regex.](../media/search-regex-icon.msft.png)) button.

To hide the search box, click **Cancel**.

### View main thread activity

Use the **Main** section to view activity that occurred on the main thread of the page.

![The Main section.](../media/evaluate-performance-performance-main-zoomed.msft.png)

Select an event to view more information about it in the **Summary** panel.  DevTools outlines the selected event.

![More information about the anonymous function in the Summary panel.](../media/evaluate-performance-performance-summary-me.msft.png)

DevTools represents main thread activity with a flame chart.  The x-axis represents the recording over time.  The y-axis represents the call stack.  The events on top cause the events below it.

![A flame chart.](../media/evaluate-performance-performance-main-flame-chart.msft.png)

DevTools assigns scripts random colors.  In the previous figure, function requests from one script are colored light green.  Requests from another script are colored beige.  The darker yellow represents scripting activity, and the purple event represents rendering activity.  These darker yellow and purple events are consistent across all recordings.

If you want to hide the detailed flame chart of JavaScript requests, see [Disable JavaScript samples](#disable-javascript-samples), above.
When JS samples are disabled, only high-level events such as `Event: click` and `Function Call` from the previous figure <!--`str` (?)--> are displayed.
<!--When JS samples are disabled, you only see high-level events such as `Event (click)` and `Function Call` (script_foot_closure.js:53) from Figure 16.-->


### View activities in a table

After recording a page, you don't need to rely solely on the **Main** section to analyze activities.  DevTools also provides three tabular views for analyzing activities.  Each view gives you a different perspective on the activities:

*  To view the root activities that cause the most work, use the [Call Tree](#the-call-tree-tab) tab.

*  To view the activities where the most time was directly spent, use the [Bottom-Up](#the-bottom-up-panel) tab.

*  To view the activities in the order in which they occurred during the recording, use the [Event Log](#the-event-log-panel) tab.


#### Root activities

Open the [Activity Tabs Demo](https://microsoftedge.github.io/Demos/devtools-performance-activitytabs/) webpage in a new window or tab.

<!-- You can view the source files for the Activity Tabs Demo in the [MicrosoftEdge/Demos > devtools-performance-activitytabs](https://github.com/MicrosoftEdge/Demos/tree/main/devtools-performance-activitytabs) repo folder. -->

Here's an explanation of the **root activities** concept that is mentioned in the **Call Tree** panel, **Bottom-Up** panel, and **Event Log** panel.

_Root activities_ are those which cause the browser to do some work.  For example, when you click a webpage, the browser runs an `Event` activity as the root activity.  That `Event` may cause a handler to run, and so on.

In the flame chart of the **Main** section, root activities are at the top of the chart.  In the **Call Tree** and **Event Log** panels, root activities are the top-level items.

For an example of root activities, see the next section, "The Call Tree tab".

#### The Call Tree tab

Open the [Activity Tabs Demo](https://microsoftedge.github.io/Demos/devtools-performance-activitytabs/) webpage in a new window or tab.

Use the **Call Tree** tab to view which [root activities](#root-activities) cause the most work.

The **Call Tree** tab only displays activities during the selected portion of the recording.  See [Select a portion of a recording](#select-a-portion-of-a-recording) to learn how to select portions.

![The Call Tree panel.](../media/evaluate-performance-performance-call-tree.msft.png)

In the previous figure, the top-level of items in the **Activity** column, such as `Evaluate Script` and `Parse HTML` are root activities.  The nesting represents the call stack.  For example, in the previous figure, `Parse HTML` which caused `Evaluate Script` which caused `Compile Script` and `(anonymous)`.

**Self Time** represents the time directly spent in that activity.  **Total Time** represents the time spent in that activity or any of the children.

Click **Self Time**, **Total Time**, or **Activity** to sort the table by that column.

Use the **Filter** text box to filter events by activity name.

By default the **Grouping** menu is set to **No Grouping**.  Use the **Grouping** menu to sort the activity table based on various criteria.

Click **Show Heaviest Stack** (![Show Heaviest Stack.](../media/show-heaviest-stack-icon.msft.png)) to reveal another table to the right of the **Activity** table.  Click on an activity to populate the **Heaviest Stack** table.  The **Heaviest Stack** table displays which children of the selected activity took the longest time to run.

#### The Bottom-Up panel

Open the [Activity Tabs Demo](https://microsoftedge.github.io/Demos/devtools-performance-activitytabs/) webpage in a new window or tab.

Use the **Bottom-Up** panel to view which activities directly took up the most time in aggregate.

The **Bottom-Up** panel only displays activities during the selected portion of the recording.  See [Select a portion of a recording](#select-a-portion-of-a-recording) to learn how to select portions.

![The Bottom-Up panel.](../media/evaluate-performance-performance-bottoms-up.msft.png)

In the **Main** section flame chart of the previous figure, you can see that almost practically all of the time was spent running `Parse HTML`.  The top activity in the **Bottom-Up** panel of the previous figure is `Parse HTML`.  <!-- in orig article: In the flame chart of the previous figure, the yellow below the calls to `wait` are actually thousands of `Minor GC` calls.  -->  In the **Bottom-Up** tab, the next most expensive activity is `Layout`.

The **Self Time** column represents the aggregated time spent directly in that activity, across all of the occurrences.

The **Total Time** column represents aggregated time spent in that activity or any of the children.

#### The Event Log panel

Use the **Event Log** panel to view activities in the order in which they occurred during the recording.

The **Event Log** panel only displays activities during the selected portion of the recording.  See [Select a portion of a recording](#select-a-portion-of-a-recording) to learn how to select portions.

![The Event Log panel.](../media/evaluate-performance-performance-event-log.msft.png)

The **Start Time** column represents the point at which that activity started, relative to the start of the recording.  For example, the start time of `175.7 ms` for the selected item in the previous figure means that activity started 175.7 ms after the recording started.

The **Self Time** column represents the time spent directly in that activity.

The **Total Time** columns represents time spent directly in that activity or in any of the children.

Click **Start Time**, **Self Time**, or **Total Time** to sort the table by that column.

Use the **Filter** text box to filter activities by name.

Use the **Duration** menu to filter out any activities that took less than 1 ms or 15 ms.  By default the **Duration** menu is set to **All**, meaning all activities are shown.

Disable the **Loading**, **Scripting**, **Rendering**, or **Painting** checkboxes to filter out all activities from those categories.

### View GPU activity

View GPU activity in the **GPU** section.

![The GPU section.](../media/evaluate-performance-performance-gpu-zoomed.msft.png)

### View raster activity

View raster activity in the **Raster** section.

![The Raster section.](../media/evaluate-performance-performance-raster.msft.png)

### View interactions

Use the **Interactions** section to find and analyze user interactions that happened during the recording.

![The Interactions section.](../media/evaluate-performance-performance-interactions-animation.msft.png)

A red line at the bottom of an interaction represents time spent waiting for the main thread.

Click an interaction to view more information about it in the **Summary** panel.

### Analyze frames per second (FPS)

DevTools provides numerous ways to analyze frames per second:

*  Use [the FPS chart](#the-fps-chart) to get an overview of FPS over the duration of the recording.
*  Use [the Frames section](#the-frames-section) to view how long a particular frame took.
*  Use the **FPS meter** for a realtime estimate of FPS as the page runs.  See [View frames per second in realtime with the FPS meter](#view-frames-per-second-in-realtime-with-the-fps-meter).

#### The FPS chart

The **FPS** chart provides an overview of the frame rate across the duration of a recording.  In general, the higher the green bar, the better the frame
rate.

A red bar above the **FPS** chart is a warning that the frame rate dropped so low that it probably harmed the user's experience.

![The FPS chart.](../media/evaluate-performance-performance-fps-highlight.msft.png)

#### The Frames section

The **Frames** section tells you exactly how long a particular frame took.

Hover over a frame to view a tooltip with more information about it.

![Hovering on a frame.](../media/evaluate-performance-performance-frames-hover.msft.png)

Select a frame to view more information about the frame in the **Summary** panel.  DevTools outlines the selected frame in blue.

![View a frame in the Summary panel.](../media/evaluate-performance-performance-frames-summary.msft.png)

### View network requests

Expand the **Network** section to view a waterfall of network requests that occurred during the recording.

![The Network section.](../media/evaluate-performance-performance-network.msft.png)

Requests are color-coded as follows:
*  HTML: Blue
*  CSS: Purple
*  JS: Yellow
*  Images: Green

Click on a request to view more information about it in the **Summary** tab.  For example, in the previous figure, the **Summary** tab is displaying more information about the blue request that is selected in the **Network** section.

A darker-blue square in the top-left of a request means it's a higher-priority request.  A lighter-blue square means lower-priority.  For example, in the previous figure, the blue, selected request is higher-priority, and the green one below it is lower-priority.

In the first figure below, the request for `www.bing.com` is represented by a line on the left, a bar in the middle with a dark portion and a light portion, and a line on the right.  The second figure below shows the corresponding representation of the same request in the **Timing** tab of the **Network** tool.

Here's how these two representations map to each other:

*  The left line is everything up to the `Connection Start` group of events, inclusive.  In other words, it's everything before `Request Sent`, exclusive.

*  The light portion of the bar is `Request Sent` and `Waiting (TTFB)`.

*  The dark portion of the bar is `Content Download`.

*  The right line is essentially time spent waiting for the main thread.  This isn't represented in the **Timing** tab.

The line-bar representation of the `www.bing.com` request:

![The line-bar representation of the www.bing.com request.](../media/evaluate-performance-bing-performance-network.msft.png)

The **Network** tool:

![The Network tool.](../media/evaluate-performance-bing-network-timing.msft.png)

### View memory metrics

Turn on the **Memory** checkbox to view memory metrics from the last recording.

![The Memory checkbox.](../media/evaluate-performance-performance-memory-highlight.msft.png)

DevTools displays a new **Memory** chart, above the **Summary** panel.  There is also a new chart below the **NET** chart, called **HEAP**.  The **HEAP** chart provides the same information as the **JS Heap** line in the **Memory** chart.

![Memory metrics.](../media/evaluate-performance-performance-memory-chart.msft.png)

The colored lines on the chart map to the colored checkboxes above the chart.  Clear a checkbox to hide that category from the chart.

The chart only displays the region of the recording that is currently selected.  For example, in the previous figure, the **Memory** chart is only showing memory usage from around the 400 ms mark to the 1750 ms mark.

### View the duration of a portion of a recording

When analyzing a section like **Network** or **Main**, sometimes you need a more precise estimate of how long certain events took.  Hold `Shift`, click and hold, and drag left or right to select a portion of the recording.  At the bottom of your selection, DevTools shows how long that portion took.

![Viewing the duration of a portion of a recording.](../media/evaluate-performance-performance-main-duration.msft.png)

### View a screenshot

See [Capture screenshots while recording](#capture-screenshots-while-recording) to learn how to turn on screenshots.

Hover over the **Overview** to view a screenshot of how the page looked during that moment of the recording.  The **Overview** is the section that contains the **CPU**, **FPS**, and **NET** charts.

![Viewing a screenshot.](../media/evaluate-performance-performance-screenshots-hover.msft.png)

You can also view screenshots by selecting a frame in the **Frames** section.  DevTools displays a small version of the screenshot in the **Summary** panel.

![Viewing a screenshot in the Summary panel.](../media/evaluate-performance-performance-summary-preview.msft.png)

Click the thumbnail in the **Summary** panel to zoom in on the screenshot.

![Zooming into a screenshot from the Summary panel.](../media/evaluate-performance-performance-summary-preview-select.msft.png)

### View layers information

To view advanced layers information about a frame:

1. [Turn on advanced paint instrumentation](#turn-on-advanced-paint-instrumentation).

1. Select a frame in the **Frames** section.  DevTools displays information about the layers in the new **Layers** tab, next to the **Event Log** tab.

![The Layers pane.](../media/evaluate-performance-layers-all.msft.png)

Hover over a layer to highlight it in the diagram.

![Highlighting a layer.](../media/evaluate-performance-performance-frames-document-nav-bar-highlighted.msft.png)

To move the diagram:

*  Select **Pan Mode** (![Pan Mode.](../media/pan-mode-icon.msft.png)) to move along the X and Y axes.

*  Select **Rotate Mode** (![Rotate Mode.](../media/rotate-mode-icon.msft.png)) to rotate along the Z axis.

*  Select **Reset Transform** (![Reset Transform.](../media/reset-transform-icon.msft.png)) to reset the diagram to the original position.

### View paint profiler

To view advanced information about a paint event:

1. [Turn on](#turn-on-advanced-paint-instrumentation).

1. Select a **Paint** event in the **Main** section.

The **Paint Profiler** panel:

![The Paint Profiler panel.](../media/evaluate-performance-paint-profiler.msft.png)


<!-- ====================================================================== -->
## Analyze rendering performance with the Rendering tool

Use the features of the **Rendering** panel to help visualize the rendering performance of your page.

To open the **Rendering** tool:

1. [Open the Command Menu](../command-menu/index.md#open-the-command-menu).

1. Start typing `Rendering` and select `Show Rendering`.  DevTools displays the **Rendering** tool.

![The Rendering tool.](../media/evaluate-performance-console-drawer-rendering.msft.png)

### View frames per second in realtime with the FPS meter

The **FPS meter** is an overlay that appears in the top-right corner of your viewport.  It provides a realtime estimate of FPS as the page runs.  To open the **FPS meter**:

1. Open the **Rendering** tool.  [Analyze rendering performance with the Rendering tool](#analyze-rendering-performance-with-the-rendering-tool).

1. Select the **FPS Meter** checkbox.

![The FPS meter.](../media/evaluate-performance-jank-console-rendering-frame-rate.msft.png)

### View painting events in realtime with Paint Flashing

Use Paint Flashing to get a realtime view of all paint events on the page.  Whenever a part of the page gets re-painted, DevTools outlines that section in green.

To turn on Paint Flashing:

1. Open the **Rendering** tool.  See [Analyze rendering performance with the Rendering tool](#analyze-rendering-performance-with-the-rendering-tool).

1. Select the **Paint Flashing** checkbox.

   ![Paint Flashing.](../media/evaluate-performance-jank-console-rendering-paint-flashing.msft.png)

### View an overlay of layers with Layer Borders

Use **Layer Borders** to view an overlay of layer borders and tiles on top of the page.

To turn on Layer Borders:

1. Open the **Rendering** tool.  See [Analyze rendering performance with the Rendering tool](#analyze-rendering-performance-with-the-rendering-tool).

1. Select the **Layer Borders** checkbox.

![Layer Borders.](../media/evaluate-performance-devtools-console-rendering-layer-borders.msft.png)

See the comments in [debug_colors.cc](https://cs.chromium.org/chromium/src/cc/debug/debug_colors.cc) for an explanation of the color-codings.

### Find scroll performance issues in realtime

Use Scrolling Performance Issues to identify elements of the page that have event listeners related to scrolling that may harm the performance of the page.  DevTools outlines the potentially problematic elements in teal.

To view scroll performance issues:

1. Open the **Rendering** tool.  See [Analyze rendering performance with the Rendering tool](#analyze-rendering-performance-with-the-rendering-tool).

1. Select the **Scrolling Performance Issues** checkbox.

![Scrolling Performance Issues indicates that non-layer viewport-constrained objects may harm scroll performance.](../media/evaluate-performance-bing-console-drawer-rendering-scrolling-performance-issues.msft.png)

See also:
* [Slow scroll rects (checkbox)](../3d-view/index.md#slow-scroll-rects-checkbox) in _Navigate webpage layers, z-index, and DOM using the 3D View tool_.


<!-- ====================================================================== -->
## Disable local fonts

In **Rendering** tool, use the **Disable local fonts** checkbox to emulate missing `local()` sources in `@font-face` rules.

For example, when the `Rubik` font is installed on your device and the `@font-face src` rule uses it as a `local()` font, Microsoft Edge uses the local font file from your device.

When **Disable local fonts** is selected, DevTools ignores the `local()` fonts and fetches each font from the network:

![Emulate missing local fonts.](images/disable-local-fonts.png)
<!-- copied from edge-developer\microsoft-edge\devtools-guide-chromium\whats-new\2020\08\devtools.md   ../../media/2020/08/disable-font.msft.png -->

This feature is useful if you use two different copies of the same font during development, such as:
*  A local font for your design tools.
*  A web font for your code.

Use **Disable local fonts** to make it easier to:
*  Debug and measure loading performance and optimization of web fonts.
*  Verify accuracy of your CSS `@font-face` rules.
*  Discover differences between local versions installed on your device and a web font.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/evaluate-performance/reference/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License.](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
