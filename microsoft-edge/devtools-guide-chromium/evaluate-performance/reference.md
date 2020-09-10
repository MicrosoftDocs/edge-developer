---
description: A reference on all the ways to record and analyze performance in Microsoft Edge DevTools.
title: Performance Analysis Reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/01/2020 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
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







# Performance analysis reference   



This page is a comprehensive reference of Microsoft Edge DevTools features related to analyzing performance.  

See [Get Started With Analyzing Runtime Performance][DevtoolsEvaluatePerformanceGettingStarted] for a guided tutorial on how to analyze the performance of a page using [Microsoft Edge DevTools][MicrosoftEdgeDevTools].  

## Record performance   

### Record runtime performance   

Record runtime performance when you want to analyze the performance of a page as it is running, as opposed to loading.  

1.  Go to the page that you want to analyze.  
1.  Click the **Performance** tab in DevTools.  
1.  Click **Record** \(![Record][ImageRecordIcon]\).  
    
    :::image type="complex" source="../media/evaluate-performance-performance-record-highlight.msft.png" alt-text="Record" lightbox="../media/evaluate-performance-performance-record-highlight.msft.png":::
       **Record**  
    :::image-end:::  
    
1.  Interact with the page.  DevTools records all page activity that occurs as a result of your interactions.  
1.  Click **Record** again or click **Stop** to stop recording.  
    
### Record load performance   

Record load performance when you want to analyze the performance of a page as it is loading, as opposed to running.  

1.  Go to the page that you want to analyze.  
1.  Open the **Performance** panel of DevTools.  
1.  Click **Refresh page** \(![Refresh Page][ImageRefreshPageIcon]\).  DevTools records performance metrics while the page refreshes and then automatically stops the recording a couple seconds after the load finishes.  
    
    :::image type="complex" source="../media/evaluate-performance-performance-refresh-button.msft.png" alt-text="Refresh page" lightbox="../media/evaluate-performance-performance-refresh-button.msft.png":::
       **Refresh page**  
    :::image-end:::  
    
DevTools automatically zooms in on the portion of the recording where most of the activity occurred.  

:::image type="complex" source="../media/evaluate-performance-performance-refreshed.msft.png" alt-text="A page-load recording" lightbox="../media/evaluate-performance-performance-refreshed.msft.png":::
   A page-load recording  
:::image-end:::  

### Capture screenshots while recording   

Enable the **Screenshots** checkbox to capture a screenshot of every frame while recording.  

:::image type="complex" source="../media/evaluate-performance-performance-capture-screenshots-checkbox.msft.png" alt-text="The Screenshots checkbox" lightbox="../media/evaluate-performance-performance-capture-screenshots-checkbox.msft.png":::
   The **Screenshots** checkbox  
:::image-end:::  

See [View a screenshot](#view-a-screenshot) to learn how to interact with screenshots.  

### Force garbage collection while recording   

While you are recording a page, click **Collect garbage** \(![Collect garbage][ImageCollectGarbageIcon]\) to force garbage collection.  

:::image type="complex" source="../media/evaluate-performance-performance-collect-garbage-button.msft.png" alt-text="Collect garbage" lightbox="../media/evaluate-performance-performance-collect-garbage-button.msft.png":::
   Collect garbage  
:::image-end:::  

### Show recording settings   

Click **Capture settings** \(![Capture settings][ImageCaptureSettingsIcon]\) to expose more settings related to how DevTools captures performance recordings.  

:::image type="complex" source="../media/evaluate-performance-performance-capture-settings-button-open-drawer.msft.png" alt-text="The Capture Settings section" lightbox="../media/evaluate-performance-performance-capture-settings-button-open-drawer.msft.png":::
   The **Capture Settings** section  
:::image-end:::  

### Disable JavaScript samples   

By default, the **Main** section of a recording displays detailed call stacks of JavaScript functions that were called during the recording.  To disable these call stacks:  

1.  Open the **Capture settings** menu.  See [Show recording settings](#show-recording-settings).  
1.  Enable the **Disable JavaScript Samples** checkbox.  
1.  Take a recording of the page.  
    
The following 2 figures display the difference between disabling and enabling JavaScript samples.  The **Main** section of the recording is much shorter when sampling is disabled, because it omits all of the JavaScript call stacks.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-on.msft.png" alt-text="An example of a recording when JS samples are disabled" lightbox="../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-on.msft.png":::
         An example of a recording when JS samples are disabled  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off.msft.png" alt-text="An example of a recording when JS samples are enabled" lightbox="../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off.msft.png":::
         An example of a recording when JS samples are enabled  
      :::image-end:::  
   :::column-end:::
:::row-end:::

### Throttle the network while recording   

To throttle the network while recording:  

1.  Open the **Capture settings** menu.  See [Show recording settings](#show-recording-settings).  
1.  Set **Network** to the desired level of throttling.  
    
### Throttle the CPU while recording   

To throttle the CPU while recording:  

1.  Open the **Capture settings** menu.  See [Show recording settings](#show-recording-settings).  
1.  Set **CPU** to the desired level of throttling.  
    
Throttling is relative to the capabilities of your computer.  For example, the **2x slowdown** option makes your CPU operate 2 times slower than normal.  DevTools do not truly simulate the CPUs of mobile devices, because the architecture of mobile devices is very different from that of desktops and laptops.  

### Enable advanced paint instrumentation   

To view detailed paint instrumentation:  

1.  Open the **Capture settings** menu.  See [Show recording settings](#show-recording-settings).  
1.  Check the **Enable advanced paint instrumentation (slow)** checkbox.  

To learn how to interact with the paint information, see [View layers](#view-layers-information) and [View paint profiler](#view-paint-profiler).  

## Save a recording   

To save a recording, right-click and select **Save Profile**.  

:::image type="complex" source="../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off-save-profile.msft.png" alt-text="Save Profile" lightbox="../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off-save-profile.msft.png":::
   **Save Profile**  
:::image-end:::  

## Load a recording   

To load a recording, right-click and select **Load Profile**.  

:::image type="complex" source="../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off-load-profile.msft.png" alt-text="Load Profile" lightbox="../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off-load-profile.msft.png":::
   **Load Profile**  
:::image-end:::  

## Clear the previous recording   

After making a recording, press **Clear recording** \(![Clear recording][ImageClearRecordingIcon]\) to clear that recording from the **Performance** panel.  

:::image type="complex" source="../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off-clear-button.msft.png" alt-text="Clear recording" lightbox="../media/evaluate-performance-performance-refreshed-disable-javascript-samples-checkbox-off-clear-button.msft.png":::
   **Clear recording**  
:::image-end:::  

## Analyze a performance recording   

After you [record runtime performance](#record-runtime-performance) or [record load performance](#record-load-performance), the **Performance** panel provides a lot of data for analyzing the performance of what just happened.  

### Select a portion of a recording   

Drag your mouse left or right across the **Overview** to select a portion of a recording.  The **Overview** is the section that contains the **FPS**, **CPU**, and **NET** charts.  

:::image type="complex" source="../media/evaluate-performance-performance-zoom-highlighted.msft.png" alt-text="Drag the mouse across the Overview to zoom" lightbox="../media/evaluate-performance-performance-zoom-highlighted.msft.png":::
   Drag the mouse across the **Overview** to zoom  
:::image-end:::  

To select a portion using the keyboard:  

1.  Click on the background of the **Main** section, or any of the sections next to it, such as **Interactions**, **Network**, or **GPU**.  This keyboard workflow only works when one of these sections is in focus.  
1.  Use the `W`, `A`, `S`, `D` keys to zoom in, move left, zoom out, and move right, respectively.  

To select a portion using a trackpad:  

1.  Hover your mouse over the **Overview** section or the **Details** section.  The **Overview** section is the area containing the **FPS**, **CPU**, and **NET** charts.  The **Details** section is the area containing the **Main** section, the **Interactions** section, and so on.  
1.  Using two fingers, swipe up to zoom out, swipe left to move left, swipe down to zoom in, and swipe right to move right.  

To scroll a long flame chart in the **Main** section or any of the neighbors, click and hold while dragging up and down.  Drag left and right to move what portion of the recording is selected.  

### Search activities   

Press `Control`+`F` \(Windows\) or `Command`+`F` \(macOS\) to open the search box at the bottom of the **Performance** panel.  

:::image type="complex" source="../media/evaluate-performance-performance-search-regex.msft.png" alt-text="The search box" lightbox="../media/evaluate-performance-performance-search-regex.msft.png":::
   The search box  
:::image-end:::  

To navigate activities that match your query:  

*   Use the **Previous** \(![Previous][ImagePreviousIcon]\) and **Next** \(![Next][ImageNextIcon]\) buttons.  
*   Press `Shift`+`Enter` to select the previous or `Enter` to select the next.  

To modify query settings:  

*   Press **Case sensitive** \(![Case sensitive][ImageSearchCaseIcon]\) to make the query case sensitive.  
*   Press **Regex** \(![Regex][ImageSearchRegexIcon]\) to use a regular expression in your query.  

To hide the search box, press **Cancel**.  

### View main thread activity   

Use the **Main** section to view activity that occurred on the main thread of the page.  

:::image type="complex" source="../media/evaluate-performance-performance-main-zoomed.msft.png" alt-text="The Main section" lightbox="../media/evaluate-performance-performance-main-zoomed.msft.png":::
   The **Main** section  
:::image-end:::  

Click on an event to view more information about it in the **Summary** tab.  DevTools outlines the selected event.  

:::image type="complex" source="../media/evaluate-performance-performance-summary-me.msft.png" alt-text="More information about the anonymous function in the Summary tab" lightbox="../media/evaluate-performance-performance-summary-me.msft.png":::
   More information about the `anonymous` function in the **Summary** tab  
:::image-end:::  

DevTools represents main thread activity with a flame chart.  The x-axis represents the recording over time.  The y-axis represents the call stack.  The events on top cause the events below it.  

:::image type="complex" source="../media/evaluate-performance-performance-main-flame-chart.msft.png" alt-text="A flame chart" lightbox="../media/evaluate-performance-performance-main-flame-chart.msft.png":::
   A flame chart  
:::image-end:::  

In the previous figure, a `click` event caused a `Function Call` in `activitytabs.js` on line 53.  Below `Function Call` you see that an anonymous function was called.  The anonymous function called `a`, which called `wait`, which called `Minor GC`.  

DevTools assigns scripts random colors.  In the previous figure, function calls from one script are colored light green.  Calls from another script are colored beige.  The darker yellow represents scripting activity, and the purple event represents rendering activity.  These darker yellow and purple events are consistent across all recordings.  

See [Disable JavaScript samples](#disable-javascript-samples) if you want to hide the detailed flame chart of JavaScript calls.  When JS samples are disabled, you only see high-level events such as `Event: click` and `Function Call` from the previous figure.  

### View activities in a table   

After recording a page, you do not need to rely solely on the **Main** section to analyze activities.  DevTools also provides three tabular views for analyzing activities.  Each view gives you a different perspective on the activities:  

*   When you want to view the root activities that cause the most work, use [the Call Tree tab](#the-call-tree-tab).  
*   When you want to view the activities where the most time was directly spent, use [the Bottom-Up tab](#the-bottom-up-tab).  
*   When you want to view the activities in the order in which they occurred during the recording, use [the Event Log tab](#the-event-log-tab).  
    
> [!NOTE]
> The next three sections all refer to the same demo.  Run the demo yourself at [Activity Tabs Demo][ActivityTabsDemo].  

#### Root activities   

Here is an explanation of the **root activities** concept that is mentioned in the **Call Tree** tab, **Bottom-Up** tab, and **Event Log** sections.  

Root activities are those which cause the browser to do some work.  For example, when you click a page, the browser fires an `Event` activity as the root activity.  That `Event` might cause a handler to run, and so on.  

In the flame chart of the **Main** section, root activities are at the top of the chart.  In the **Call Tree** and **Event Log** tabs, root activities are the top-level items.  

See [The Call Tree tab](#the-call-tree-tab) for an example of root activities.  

#### The Call Tree tab   

Use the **Call Tree** tab to view which [root activities](#root-activities) cause the most work.  

The **Call Tree** tab only displays activities during the selected portion of the recording.  See [Select a portion of a recording](#select-a-portion-of-a-recording) to learn how to select portions.  

:::image type="complex" source="../media/evaluate-performance-performance-call-tree.msft.png" alt-text="The Call Tree tab" lightbox="../media/evaluate-performance-performance-call-tree.msft.png":::
   The **Call Tree** tab  
:::image-end:::  

In the previous figure, the top-level of items in the **Activity** column, such as `Evaluate Script` and `Parse HTML` are root activities.  The nesting represents the call stack.  For example, in the previous figure, `Parse HTML` which caused `Evaluate Script` which caused `Compile Script` and `(anonymous)`.  

**Self Time** represents the time directly spent in that activity.  **Total Time** represents the time spent in that activity or any of the children.  

Click **Self Time**, **Total Time**, or **Activity** to sort the table by that column.  

Use the **Filter** text box to filter events by activity name.  

By default the **Grouping** menu is set to **No Grouping**.  Use the **Grouping** menu to sort the activity table based on various criteria.  

Click **Show Heaviest Stack** \(![Show Heaviest Stack][ImageShowHeaviestStackIcon]\) to reveal another table to the right of the **Activity** table.  Click on an activity to populate the **Heaviest Stack** table.  The **Heaviest Stack** table shows you which children of the selected activity took the longest time to run.  

#### The Bottom-Up tab   

Use the **Bottom-Up** tab to view which activities directly took up the most time in aggregate.  

The **Bottom-Up** tab only displays activities during the selected portion of the recording.  See [Select a portion of a recording](#select-a-portion-of-a-recording) to learn how to select portions.  

:::image type="complex" source="../media/evaluate-performance-performance-bottoms-up.msft.png" alt-text="The Bottom-Up tab" lightbox="../media/evaluate-performance-performance-bottoms-up.msft.png":::
   The **Bottom-Up** tab  
:::image-end:::  

In the **Main** section flame chart of the previous figure, see that almost practically all of the time was spent running `Parse HTML`.  The top activity in the **Bottom-Up** tab of the previous figure is `Parse HTML`.  <!--In the flame chart of the previous figure, the yellow below the calls to `wait` are actually thousands of `Minor GC` calls.  -->  See in the **Bottom-Up** tab, the next most expensive activity is `Layout`.  

The **Self Time** column represents the aggregated time spent directly in that activity, across all of the occurrences.  

The **Total Time** column represents aggregated time spent in that activity or any of the children.  

#### The Event Log tab   

Use the **Event Log** tab to view activities in the order in which they occurred during the recording.  

The **Event Log** tab only displays activities during the selected portion of the recording.  See [Select a portion of a recording](#select-a-portion-of-a-recording) to learn how to select portions.  

:::image type="complex" source="../media/evaluate-performance-performance-event-log.msft.png" alt-text="The Event Log tab" lightbox="../media/evaluate-performance-performance-event-log.msft.png":::
   The **Event Log** tab  
:::image-end:::  

The **Start Time** column represents the point at which that activity started, relative to the start of the recording.  For example, the start time of `175.7 ms` for the selected item in the previous figure means that activity started 175.7 ms after the recording started.  

The **Self Time** column represents the time spent directly in that activity.  

The **Total Time** columns represents time spent directly in that activity or in any of the children.  

Click **Start Time**, **Self Time**, or **Total Time** to sort the table by that column.

Use the **Filter** text box to filter activities by name.  

Use the **Duration** menu to filter out any activities that took less than 1 ms or 15 ms.  By default the **Duration** menu is set to **All**, meaning all activities are shown.  

Disable the **Loading**, **Scripting**, **Rendering**, or **Painting** checkboxes to filter out all activities from those categories.  

### View GPU activity   

View GPU activity in the **GPU** section.  

:::image type="complex" source="../media/evaluate-performance-performance-gpu-zoomed.msft.png" alt-text="The GPU section" lightbox="../media/evaluate-performance-performance-gpu-zoomed.msft.png":::
   The **GPU** section  
:::image-end:::  

### View raster activity   

View raster activity in the **Raster** section.  

:::image type="complex" source="../media/evaluate-performance-performance-raster.msft.png" alt-text="The Raster section" lightbox="../media/evaluate-performance-performance-raster.msft.png":::
   The **Raster** section  
:::image-end:::  

### View interactions   

Use the **Interactions** section to find and analyze user interactions that happened during the recording.  

:::image type="complex" source="../media/evaluate-performance-performance-interactions-animation.msft.png" alt-text="The Interactions section" lightbox="../media/evaluate-performance-performance-interactions-animation.msft.png":::
   The **Interactions** section  
:::image-end:::  

A red line at the bottom of an interaction represents time spent waiting for the main thread.  

Click an interaction to view more information about it in the **Summary** tab.  

### Analyze frames per second (FPS)   

DevTools provides numerous ways to analyze frames per second:  

*   Use [the FPS chart](#the-fps-chart) to get an overview of FPS over the duration of the recording.  
*   Use [the Frames section](#the-frames-section) to view how long a particular frame took.  
*   Use the **FPS meter** for a realtime estimate of FPS as the page runs.  See [View frames per second in realtime with the FPS meter](#view-frames-per-second-in-realtime-with-the-fps-meter).  
    
#### The FPS chart   

The **FPS** chart provides an overview of the frame rate across the duration of a recording.  In general, the higher the green bar, the better the frame
rate.  

A red bar above the **FPS** chart is a warning that the frame rate dropped so low that it probably harmed the user's experience.  

:::image type="complex" source="../media/evaluate-performance-performance-fps-highlight.msft.png" alt-text="The FPS chart" lightbox="../media/evaluate-performance-performance-fps-highlight.msft.png":::
   The **FPS** chart  
:::image-end:::  

#### The Frames section   

The **Frames** section tells you exactly how long a particular frame took.  

Hover over a frame to view a tooltip with more information about it.  

:::image type="complex" source="../media/evaluate-performance-performance-frames-hover.msft.png" alt-text="Hover over a frame" lightbox="../media/evaluate-performance-performance-frames-hover.msft.png":::
   Hover over a frame  
:::image-end:::  

Click on a frame to view even more information about the frame in the **Summary** tab.  DevTools outlines the selected frame in blue.  

:::image type="complex" source="../media/evaluate-performance-performance-frames-summary.msft.png" alt-text="View a frame in the Summary tab" lightbox="../media/evaluate-performance-performance-frames-summary.msft.png":::
   View a frame in the **Summary** tab  
:::image-end:::  

### View network requests   

Expand the **Network** section to view a waterfall of network requests that occurred during the recording.  

:::image type="complex" source="../media/evaluate-performance-performance-network.msft.png" alt-text="The Network section" lightbox="../media/evaluate-performance-performance-network.msft.png":::
   The **Network** section  
:::image-end:::  

Requests are color-coded as follows:  

*   HTML: Blue  
*   CSS: Purple  
*   JS: Yellow  
*   Images: Green  
    
Click on a request to view more information about it in the **Summary** tab.  For example, in the previous figure, the **Summary** tab is displaying more information about the blue request that is selected in the **Network** section.  

A darker-blue square in the top-left of a request means it is a higher-priority request.  A lighter-blue square means lower-priority.  For example, in the previous figure, the blue, selected request is higher-priority, and the green one below it is lower-priority.  

In the 1st of the following figures, the request for `www.bing.com` is represented by a line on the left, a bar in the middle with a dark portion and a light portion, and a line on the right.  In the 2nd of the following figures shows the corresponding representation of the same request in the **Timing** tab of the **Network** panel.  Here is how these two representations map to each other:

*   The left line is everything up to the `Connection Start` group of events, inclusive.  In other words, it is everything before `Request Sent`, exclusive.  
*   The light portion of the bar is `Request Sent` and `Waiting (TTFB)`.  
*   The dark portion of the bar is `Content Download`.  
*   The right line is essentially time spent waiting for the main thread.  This is not represented in the **Timing** tab.  
    
:::row:::
   :::column span="":::
      :::image type="complex" source="../media/evaluate-performance-bing-performance-network.msft.png" alt-text="The line-bar representation of the www.bing.com request" lightbox="../media/evaluate-performance-bing-performance-network.msft.png":::
         The line-bar representation of the `www.bing.com` request  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/evaluate-performance-bing-network-timing.msft.png" alt-text="The Network section" lightbox="../media/evaluate-performance-bing-network-timing.msft.png":::
         The **Network** section  
:      ::image-end:::  
   :::column-end:::
:::row-end:::

### View memory metrics   

Enable the **Memory** checkbox to view memory metrics from the last recording.  

:::image type="complex" source="../media/evaluate-performance-performance-memory-highlight.msft.png" alt-text="The Memory checkbox" lightbox="../media/evaluate-performance-performance-memory-highlight.msft.png":::
   The **Memory** checkbox  
:::image-end:::  

DevTools displays a new **Memory** chart, above the **Summary** tab.  There is also a new chart below the **NET** chart, called **HEAP**.  The **HEAP** chart provides the same information as the **JS Heap** line in the **Memory** chart.  

:::image type="complex" source="../media/evaluate-performance-performance-memory-chart.msft.png" alt-text="Memory metrics" lightbox="../media/evaluate-performance-performance-memory-chart.msft.png":::
   Memory metrics  
:::image-end:::  

The colored lines on the chart map to the colored checkboxes above the chart.  
Disable a checkbox to hide that category from the chart.  

The chart only displays the region of the recording that is currently selected.  For example, in the previous figure, the **Memory** chart is only showing memory usage from around the 400 ms mark to the 1750 ms mark.  

### View the duration of a portion of a recording   

When analyzing a section like **Network** or **Main**, sometimes you need a more precise estimate of how long certain events took.  Hold `Shift`, click and hold, and drag left or right to select a portion of the recording.  At the bottom of your selection, DevTools shows how long that portion took.  

:::image type="complex" source="../media/evaluate-performance-performance-main-duration.msft.png" alt-text="View the duration of a portion of a recording" lightbox="../media/evaluate-performance-performance-main-duration.msft.png":::
   View the duration of a portion of a recording  
:::image-end:::  

### View a screenshot   

See [Capture screenshots while recording](#capture-screenshots-while-recording) to learn how to enable screenshots.  

Hover over the **Overview** to view a screenshot of how the page looked during that moment of the recording.  The **Overview** is the section that contains the **CPU**, **FPS**, and **NET** charts.  

:::image type="complex" source="../media/evaluate-performance-performance-screenshots-hover.msft.png" alt-text="View a screenshot" lightbox="../media/evaluate-performance-performance-screenshots-hover.msft.png":::
   View a screenshot  
:::image-end:::  

You may also view screenshots by clicking a frame in the **Frames** section.  DevTools displays a small version of the screenshot in the **Summary** tab.  

:::image type="complex" source="../media/evaluate-performance-performance-summary-preview.msft.png" alt-text="View a screenshot in the Summary tab" lightbox="../media/evaluate-performance-performance-summary-preview.msft.png":::
   View a screenshot in the **Summary** tab  
:::image-end:::  

Click the thumbnail in the **Summary** tab to zoom in on the screenshot.  

:::image type="complex" source="../media/evaluate-performance-performance-summary-preview-select.msft.png" alt-text="Zoom into a screenshot from the Summary tab" lightbox="../media/evaluate-performance-performance-summary-preview-select.msft.png":::
   Zoom into a screenshot from the **Summary** tab  
:::image-end:::  

### View layers information   

To view advanced layers information about a frame:  

1.  [Enable advanced paint instrumentation](#enable-advanced-paint-instrumentation).  
1.  Select a frame in the **Frames** section.  DevTools displays information about the layers in the new **Layers** tab, next to the **Event Log** tab.  
    
    :::image type="complex" source="../media/evaluate-performance-layers-all.msft.png" alt-text="The Layers pane" lightbox="../media/evaluate-performance-layers-all.msft.png":::
       The **Layers** pane  
    :::image-end:::  
    
Hover over a layer to highlight it in the diagram.  

:::image type="complex" source="../media/evaluate-performance-performance-frames-document-nav-bar-highlighted.msft.png" alt-text="Highlight a layer" lightbox="../media/evaluate-performance-performance-frames-document-nav-bar-highlighted.msft.png":::
   Highlight a layer  
:::image-end:::  

To move the diagram:  

*   Click **Pan Mode** \(![Pan Mode][ImagePanModeIcon]\) to move along the X and Y axes.  
*   Click **Rotate Mode** \(![Rotate Mode][ImageRotateModeIcon]\) to rotate along the Z axis.  
*   Click **Reset Transform** \(![Reset Transform][ImageResetTransformIcon]\) to reset the diagram to the original position.  
    
### View paint profiler   

To view advanced information about a paint event:  

1.  [Enable advanced paint instrumentation](#enable-advanced-paint-instrumentation).  
1.  Select a **Paint** event in the **Main** section.  
    
    :::image type="complex" source="../media/evaluate-performance-paint-profiler.msft.png" alt-text="The Paint Profiler tab" lightbox="../media/evaluate-performance-paint-profiler.msft.png":::
       The **Paint Profiler** tab  
    :::image-end:::  
    
## Analyze rendering performance with the Rendering tab   

Use the features of the **Rendering** tab to help visualize the rendering performance of your page.  

To open the **Rendering** tab:  

1.  [Open the Command Menu][DevToolsCommandMenu].  
1.  Start typing `Rendering` and select `Show Rendering`.  DevTools displays the **Rendering** tab at the bottom of your DevTools window.  
    
    :::image type="complex" source="../media/evaluate-performance-console-drawer-rendering.msft.png" alt-text="The Rendering tab" lightbox="../media/evaluate-performance-console-drawer-rendering.msft.png":::
       The **Rendering** tab  
    :::image-end:::  
    
### View frames per second in realtime with the FPS meter   

The **FPS meter** is an overlay that appears in the top-right corner of your viewport.  It provides a realtime estimate of FPS as the page runs.  To open the **FPS meter**:  

1.  Open the **Rendering** tab.  See [Analyze rendering performance with the Rendering tab](#analyze-rendering-performance-with-the-rendering-tab).  
1.  Enable the **FPS Meter** checkbox.  
    
    :::image type="complex" source="../media/evaluate-performance-jank-console-rendering-frame-rate.msft.png" alt-text="The FPS meter" lightbox="../media/evaluate-performance-jank-console-rendering-frame-rate.msft.png":::
       The **FPS meter**  
    :::image-end:::  
    
### View painting events in realtime with Paint Flashing   

Use Paint Flashing to get a realtime view of all paint events on the page.  Whenever a part of the page gets re-painted, DevTools outlines that section in green.  

To enable Paint Flashing:  

1.  Open the **Rendering** tab.  See [Analyze rendering performance with the Rendering tab](#analyze-rendering-performance-with-the-rendering-tab).  
1.  Enable the **Paint Flashing** checkbox.  
    
    :::image type="complex" source="../media/evaluate-performance-jank-console-rendering-paint-flashing.msft.png" alt-text="Paint Flashing" lightbox="../media/evaluate-performance-jank-console-rendering-paint-flashing.msft.png":::
       **Paint Flashing**  
    :::image-end:::  
    
### View an overlay of layers with Layer Borders   

Use **Layer Borders** to view an overlay of layer borders and tiles on top of the page.  

To enable Layer Borders:  

1.  Open the **Rendering** tab.  See [Analyze rendering performance with the Rendering tab](#analyze-rendering-performance-with-the-rendering-tab).  
1.  Enable the **Layer Borders** checkbox.  
    
    :::image type="complex" source="../media/evaluate-performance-devtools-console-rendering-layer-borders.msft.png" alt-text="Layer Borders" lightbox="../media/evaluate-performance-devtools-console-rendering-layer-borders.msft.png":::
       **Layer Borders**  
    :::image-end:::  
    
See the comments in [`debug_colors.cc`][ChromiumDebugColors] for an explanation of the color-codings.  

### Find scroll performance issues in realtime   

Use Scrolling Performance Issues to identify elements of the page that have event listeners related to scrolling that may harm the performance of the page.  
DevTools outlines the potentially-problematic elements in teal.  

To view scroll performance issues:  

1.  Open the **Rendering** tab.  See [Analyze rendering performance with the Rendering tab](#analyze-rendering-performance-with-the-rendering-tab).  
1.  Enable the **Scrolling Performance Issues** checkbox.  
    
    :::image type="complex" source="../media/evaluate-performance-bing-console-drawer-rendering-scrolling-performance-issues.msft.png" alt-text="Scrolling Performance Issues indicates that non-layer viewport-constrained objects may harm scroll performance" lightbox="../media/evaluate-performance-bing-console-drawer-rendering-scrolling-performance-issues.msft.png":::
       **Scrolling Performance Issues** indicates that non-layer viewport-constrained objects may harm scroll performance  
    :::image-end:::  
    
<!--  
<!--    


-->  

<!-- image links -->  

[ImageCaptureSettingsIcon]: ../media/capture-settings-icon.msft.png  
[ImageClearRecordingIcon]: ../media/clear-recording-icon.msft.png  
[ImageCollectGarbageIcon]: ../media/collect-garbage-icon.msft.png  
[ImageNextIcon]: ../media/next-icon.msft.png  
[ImagePanModeIcon]: ../media/pan-mode-icon.msft.png  
[ImagePreviousIcon]: ../media/previous-icon.msft.png  
[ImageRecordIcon]: ../media/record-icon.msft.png
[ImageRefreshPageIcon]: ../media/refresh-page-icon.msft.png  
[ImageResetTransformIcon]: ../media/reset-transform-icon.msft.png  
[ImageRotateModeIcon]: ../media/rotate-mode-icon.msft.png  
[ImageSearchCaseIcon]: ../media/search-case-icon.msft.png  
[ImageSearchRegexIcon]: ../media/search-regex-icon.msft.png  
[ImageShowHeaviestStackIcon]: ../media/show-heaviest-stack-icon.msft.png  

<!-- links -->  

[MicrosoftEdgeDevTools]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer tools | Microsoft Docs"  
[DevToolsCommandMenu]: ../command-menu/index.md#open-the-command-menu "Open the Command Menu - Run commands with the Microsoft Edge DevTools Command Menu | Microsoft Docs"  
[DevtoolsEvaluatePerformanceGettingStarted]: ./index.md "Get started with analyzing runtime performance | Microsoft Docs"  

[ActivityTabsDemo]: https://microsoft-edge-chromium-devtools.glitch.me/perf/activitytabs.html "Activity Tabs Demo | glitch"  

[ChromiumDebugColors]: https://cs.chromium.org/chromium/src/cc/debug/debug_colors.cc "debug_colors.cc - Code Search"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
