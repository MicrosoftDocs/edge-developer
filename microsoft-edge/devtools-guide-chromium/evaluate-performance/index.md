---
description: Learn how to evaluate runtime performance in Microsoft Edge DevTools.
title: Get started with analyzing Runtime performance
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
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
# Get started with analyzing Runtime performance

> [!NOTE]
> To learn how to make your pages load faster, navigate to [Optimize Website Speed](../speed/get-started.md).

Runtime performance is how your page performs when it is running, as opposed to loading.  The following tutorial article teaches you how to use the Microsoft Edge DevTools Performance panel to analyze runtime performance.  In terms of the **RAIL** model, the skills you learn in this tutorial are useful for analyzing the Response, Animation, and Idle phases of your page.

<!--todo: add rail link when section is ready -->


<!-- ====================================================================== -->
## Get started

In the following tutorial, you open DevTools on a live page and use the **Performance** panel to find a performance bottleneck on the page.

1.  Open Microsoft Edge in **InPrivate Mode**.  InPrivate Mode ensures that Microsoft Edge runs in a clean state.  For example, if you have a lot of extensions installed, the extensions may create noise in your performance measurements.

    <!--TODO: replace section when updated for new Edge  -->

1.  Load the following page in your InPrivate window.  The page is the demo that you are going to profile.  The page shows a bunch of little icons moving up and down.

    ```https
    https://microsoft-edge-chromium-devtools.glitch.me/sluggish/
    ```

1.  Select `Control`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS) to open DevTools.

    :::image type="complex" source="../media/evaluate-performance-get-started-side-by-side.msft.png" alt-text="The demo on the left, and DevTools on the right" lightbox="../media/evaluate-performance-get-started-side-by-side.msft.png":::
       The demo on the left, and DevTools on the right
    :::image-end:::

    > [!NOTE]
    > For the rest of the figures, DevTools is [undocked to a separate window](../customize/placement.md) to better focus on the contents.

### Simulate a mobile CPU

Mobile devices have much less CPU power than desktops and laptops.  Whenever you profile a page, use CPU Throttling to simulate how your page performs on mobile devices.

1.  In DevTools, choose the **Performance** tool.
1.  Ensure the you choose the checkbox next to **Screenshots**.
1.  Choose **Capture Settings** (![Capture Settings](../media/capture-settings-icon.msft.png)).  DevTools reveals settings related to how it captures performance metrics.
1.  For **CPU**, choose **4x slowdown**.  DevTools throttles your CPU so that it is 4 times slower than usual.

    :::image type="complex" source="../media/evaluate-performance-performance-capture-settings.msft.png" alt-text="CPU throttle" lightbox="../media/evaluate-performance-performance-capture-settings.msft.png":::
       CPU throttle
    :::image-end:::

    > [!NOTE]
    > When testing other pages; if you want to ensure that each page works well on low-end mobile devices, set CPU Throttling to **6x slowdown**.  The demo does not work well with 6x slowdown, so it just uses 4x slowdown for instructional purposes.

### Set up the demo

It is hard to create a runtime performance demo that works consistently for all readers of the website.  The following section lets you customize the demo to
ensure that your experience is relatively consistent with the screenshots and descriptions, regardless of your particular set up.

1.  Choose the **Add 10** button until the blue icons move noticeably slower than before.  On a high-end machine, you may to choose it about 20 times.
1.  Choose **Optimize**.  The blue icons should move faster and more smoothly.

    > [!NOTE]
    > To better display a difference between the optimized and un-optimized versions, choose the **Subtract 10** button a few times and try again.
    > If you add too many blue icons, you may max out the CPU and then you may not observe a major difference in the results for the two versions.

1.  Choose **Un-Optimize**.  The blue icons move slower and with more sluggishness again.

### Record runtime performance

When you ran the optimized version of the page, the blue icons move faster.  Why is that?  Both versions are supposed to move the icons the same amount of space in the same amount of time.  Take a recording in the Performance panel to learn how to detect the performance bottleneck in the un-optimized version.

1.  In DevTools, choose **Record** (![Record](../media/record-icon.msft.png)).  DevTools captures performance metrics as the page runs.

    :::image type="complex" source="../media/evaluate-performance-performance-profiling.msft.png" alt-text="Profile the page" lightbox="../media/evaluate-performance-performance-profiling.msft.png":::
       Profile the page
    :::image-end:::

1.  Wait a few seconds.
1.  Choose **Stop**.  DevTools stops recording, processes the data, then displays the results on the Performance panel.

    :::image type="complex" source="../media/evaluate-performance-performance-capture-results.msft.png" alt-text="The results of the profile" lightbox="../media/evaluate-performance-performance-capture-results.msft.png":::
       The results of the profile
    :::image-end:::

Wow, that is an overwhelming amount of data.  do not worry, soon the process makes more sense.


<!-- ====================================================================== -->
## Analyze the results

After you record the performance of the page, measure the quality of the performance of the page and find the any causes.

### Analyze frames per second

The main metric for measuring the performance of any animation is frames per second (FPS).  Users are happy when animations run at 60 FPS.

1.  Review the **FPS** chart.  Whenever a red bar is displayed above **FPS**, it means that the framerate dropped so low that it is probably harming the user experience.  In general, the higher the green bar, the higher the FPS.

    :::image type="complex" source="../media/evaluate-performance-performance-fps-chart.msft.png" alt-text="The FPS chart" lightbox="../media/evaluate-performance-performance-fps-chart.msft.png":::
       The **FPS** chart
    :::image-end:::

1.  Below the **FPS** chart, the **CPU** chart is displayed.  The colors in the **CPU** chart correspond to the colors in the **Summary** panel, at the bottom of the Performance panel.  The fact that the **CPU** chart is full of color means that the CPU was maxed out during the recording.  Whenever the CPU maxed out for long periods, it is an indicator that you should find ways to do less work.

    :::image type="complex" source="../media/evaluate-performance-performance-cpu-chart.msft.png" alt-text="The CPU chart and Summary panel" lightbox="../media/evaluate-performance-performance-cpu-chart.msft.png":::
       The **CPU** chart and **Summary** panel
    :::image-end:::

1.  Hover on the **FPS**, **CPU**, or **NET** charts.  DevTools shows a screenshot of the page at that point in time.  Move your mouse left and right to replay the recording.  The action is referenced as scrubbing, and it is useful for manually analyzing the progression of animations.

    :::image type="complex" source="../media/evaluate-performance-performance-screenshot-hover.msft.png" alt-text="View a screenshot of the page around the 2500ms mark of the recording" lightbox="../media/evaluate-performance-performance-screenshot-hover.msft.png":::
       View a screenshot of the page around the 2500ms mark of the recording
    :::image-end:::

1.  In the **Frames** section, hover on one of the green squares.  DevTools shows you the FPS for that particular frame.  Each frame is probably well below the target of 60 FPS.

    :::image type="complex" source="../media/evaluate-performance-performance-frame-hover.msft.png" alt-text="Hover on a frame" lightbox="../media/evaluate-performance-performance-frame-hover.msft.png":::
       Hover on a frame
    :::image-end:::

Of course, the display indicates that the webpage is not performing well.  But in real scenarios, it may not be so clear, so having all of the tools to make measurements comes in handy.

#### Bonus: Open the FPS meter

Another handy tool is the FPS meter, which provides real-time estimates for FPS as the page runs.

1.  Select `Control`+`Shift`+`P` (Windows, Linux) or `Command`+`Shift`+`P` (macOS) to open the **Command Menu**.
1.  Start typing `Rendering` in the **Command Menu** and choose **Show Rendering**.
1.  In the **Rendering** tool, turn on **FPS Meter**.  A new overlay appears in the top-right of your viewport.

    :::image type="complex" source="../media/evaluate-performance-fps-meter-overlay.msft.png" alt-text="The FPS meter" lightbox="../media/evaluate-performance-fps-meter-overlay.msft.png":::
       The **FPS meter**
        :::image-end:::

1.  Turn off the **FPS Meter** and select `Escape` to close the **Rendering** tool.  You are not using **FPS Meter** in this tutorial.

### Find the bottleneck

After you measured and verified that the animation is not performing well, the next step is to answer the question "why?".

1.  When no events are chosen, the **Summary** panel shows you a breakdown of activity.  The page spent most of the time rendering.  Since performance is the art of doing less work, your goal is to reduce the amount of time spent doing rendering work.

    :::image type="complex" source="../media/evaluate-performance-performance-summary-tab.msft.png" alt-text="The Summary panel" lightbox="../media/evaluate-performance-performance-summary-tab.msft.png":::
       The **Summary** panel
    :::image-end:::

1.  Expand the **Main** section.  DevTools shows you a flame chart of activity on the main thread, over time.  The x-axis represents the recording, over time.  Each bar represents an event.  A wider bar means that event took longer.  The y-axis represents the call stack.  When events are stacked on top of each other, it means the upper events caused the lower events.

    :::image type="complex" source="../media/evaluate-performance-performance-main.msft.png" alt-text="The Main section" lightbox="../media/evaluate-performance-performance-main.msft.png":::
       The **Main** section
    :::image-end:::

1.  There is a lot of data in the recording.  To Zoom into a single event; choose, hold, and dragg your cursor over the **Overview**, which is the section that includes the **FPS**, **CPU**, and **NET** charts.  The **Main** section and **Summary** panel only display information for the chosen portion of the recording.

    :::image type="complex" source="../media/evaluate-performance-performance-main-zoomed.msft.png" alt-text="Zoom into an event" lightbox="../media/evaluate-performance-performance-main-zoomed.msft.png":::
       Zoom into an event
    :::image-end:::

    > [!NOTE]
    > Another way to zoom, focus the **Main** section, choose the background or an event, and select `W`, `A`, `S`, or `D`.

    1.  Focus on the red triangle in the top-right of the **Animation Frame Fired** event.  Whenever a red triangle is displayed, it is a warning that there may be an issue related to the event.

    > [!NOTE]
    > The **Animation Frame Fired** event occurs whenever a [requestAnimationFrame() callback](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame) is run.

1.  Choose the **Animation Frame Fired** event.  The **Summary** panel now shows you information about that event.  Note the **Reveal** link.  After you choose it, DevTools to highlights the event that initiated the **Animation Frame Fired** event.  Also, focus on the **app.js:95** link.  After you choose it, the relevant line in the source code is displayed.

    :::image type="complex" source="../media/evaluate-performance-performance-animation-frame-fired.msft.png" alt-text="More information about the Animation Frame Fired event" lightbox="../media/evaluate-performance-performance-animation-frame-fired.msft.png":::
       More information about the **Animation Frame Fired** event
    :::image-end:::

    > [!NOTE]
    > After choosing an event, use the arrow keys to select the events next to it.

1.  Under the **app.update** event, there is a bunch of purple events.  If each purple event was wider, it looks as though each one may have a red triangle on it.
1.  Choose one of the purple **Layout** events.  DevTools provides more information about the event in the **Summary** panel.  Indeed, there is a warning about forced reflows (another word for layout).

1.  In the **Summary** panel, choose the **app.js:71** link under **Layout Forced**.  DevTools takes you to the line of code that forced the layout.

    :::image type="complex" source="../media/evaluate-performance-sources-app-update.msft.png" alt-text="The line of code that caused the forced layout" lightbox="../media/evaluate-performance-sources-app-update.msft.png":::
       The line of code that caused the forced layout
    :::image-end:::

    > [!NOTE]
    > The problem with the code is that, in each animation frame, it changes the style for each icon, and then queries the position of each icon on the page.  Because the styles changed, the browser does not know if each icon position changed, so it has to re-layout the icon in order to compute the new position.
    <!--
    > To learn more, see [Avoid forced synchronous layouts](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid_forced_synchronous_layouts).
    -->

That was a lot to learn.  You now have a solid foundation in the basic workflow for analyzing runtime performance.  Good job.

### Bonus: Analyze the optimized version

Using the workflows and tools that you just learned, choose **Optimize** on the demo to turn on the optimized code, take another performance recording, and then analyze the results.  From the improved framerate to the reduction in events in the flame chart in the **Main** section, the optimized version of the app does much less work, resulting in better performance.

> [!NOTE]
> Even the optimized version is not great, because it manipulates the `top` property of every icon.  A better approach is to stick to properties that only affect compositing.  <!--  > For more information, see [Use transform and opacity changes for animations](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count#use_transform_and_opacity_changes_for_animations). todo: add rendering section when available -->


<!-- ====================================================================== -->
## Next steps

<!--The foundation for understanding performance is the RAIL model.  The RAIL model teaches you the performance metrics that are most important to your users.
To learn more, navigate to [Measure Performance With The RAIL Model](https://developers.google.com/web/fundamentals/performance/rail). -->

To get more comfortable with the **Performance** tool, practice makes perfect.  Try profiling your pages and analyzing the results.  If you have any questions about your results, use the **Send Feedback** icon, select `Alt`+`Shift`+`I` (Windows, Linux), select `Option`+`Shift`+`I` (macOS), or [tweet the DevTools team](https://twitter.com/intent/tweet?text=@EdgeDevTools).  Include screenshots or links to reproducible pages, if possible.

:::image type="complex" source="../media/evaluate-performance-feedback-icon.msft.png" alt-text="The **Feedback** icon in the Microsoft Edge DevTools" lightbox="../media/evaluate-performance-feedback-icon.msft.png":::
   The **Send Feedback** icon in the Microsoft Edge DevTools
:::image-end:::

<!-- To really become an expert in runtime performance, you must learn how the browser translates HTML, CSS, and JS into pixels on a screen.  The best place to start is the [Rendering Performance Overview](https://developers.google.com/web/fundamentals/performance/rendering).  [The Anatomy Of A Frame](https://aerotwist.com/blog/the-anatomy-of-a-frame/) dives into even more detail. -->

Last, there are many ways to improve runtime performance.  This article focused on one particular animation bottleneck to give you a focused tour through the Performance panel, but it is only one of many bottlenecks you may encounter.  <!--  The rest of the Rendering Performance series has a lot of good tips for improving various aspects of runtime performance, such as:  -->

<!--
*   [Optimizing JS Execution](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution)
*   [Reduce The Scope And Complexity Of Style Calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations)
*   [Avoid Large, Complex Layouts And Layout Thrashing](/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing)
*   [Simplify Paint Complexity And Reduce Paint Areas](/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas)
*   [Stick To Compositor-Only Properties And Manage Layer Count](/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count)
*   [Debounce Your Input Handlers](/web/fundamentals/performance/rendering/debounce-your-input-handlers)
-->


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/index) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
