---
title: Get Started With Analyzing Runtime Performance
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright 06/07/2019 Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License. -->







# Get Started With Analyzing Runtime Performance   



<!--
> [!NOTE]
> See [Optimize Website Speed][OptimizeWebsiteSpeed] to learn how make your pages load faster.  
-->  

<!--todo: add speed section when available -->  

Runtime performance is how your page performs when it is running, as opposed to loading.  This tutorial teaches you how to use the Microsoft Edge DevTools Performance panel to analyze runtime performance.  In terms of the **RAIL** model, the skills you learn in this tutorial are useful for analyzing the Response, Animation, and Idle phases of your page.  

<!--todo: add rail link when section is ready -->  

## Get started   

In this tutorial, you open DevTools on a live page and use the Performance panel to find a performance bottleneck on the page.  

1.  Open Microsoft Edge in **InPrivate Mode**.  InPrivate Mode ensures that Microsoft Edge runs in a clean state.  For example, if you have a lot of extensions installed, those extensions might create noise in your performance measurements.  
    
    <!--TODO: replace section when updated for new Edge  -->
    
1.  Load the following page in your InPrivate window.  This is the demo that you're going to profile.  The page shows a bunch of little icons moving up and down.  
    
    ```https
    https://microsoft-edge-chromium-devtools.glitch.me/jank/
    ```  

1.  Press `Control`+`Shift`+`I` \(Windows\) or `Command`+`Option`+`I` \(macOS\) to open DevTools.  
    
    > ###### Figure 1  
    > The demo on the left, and DevTools on the right  
    > ![The demo on the left, and DevTools on the right][ImageGetStarted]  
    
    > [!NOTE]
    > For the rest of the screenshots, DevTools is **undocked to a separate window** so that you can see the contents better.  
    
<!-- todo: add ui placement (undocked in separate window) section when available -->  

### Simulate a mobile CPU  

Mobile devices have much less CPU power than desktops and laptops.  Whenever you profile a page, use CPU Throttling to simulate how your page performs on mobile devices.  

1.  In DevTools, click the **Performance** tab.  

1.  Make sure that the **Screenshots** checkbox is enabled.  

1.  Click **Capture Settings** ![Capture Settings][ImageCaptureSettingsIcon].  
    DevTools reveals settings related to how it captures performance metrics.  

1.  For **CPU**, select **4x slowdown**.  DevTools throttles your CPU so that it's 4 times slower than usual.  
    
    > ###### Figure 2  
    > CPU throttling  
    > ![CPU throttling][ImageCPUThrottling]  
    
    > [!NOTE]
    > When testing other pages, if you want to ensure that they work well on low-end mobile devices, set CPU Throttling to **6x slowdown**.  This demo doesn't work well with 6x slowdown, so it just uses 4x slowdown for instructional purposes.  

### Set up the demo  

It's hard to create a runtime performance demo that works consistently for all readers of this website.  This section lets you customize the demo to
ensure that your experience is relatively consistent with the screenshots and descriptions you see in this tutorial, regardless of your particular setup.

1.  Keep clicking **Add 10** until the blue icons move noticeably slower than before.  On a high-end machine, it may take about 20 clicks.  

1.  Click **Optimize**.  The blue icons should move faster and more smoothly.  

    > [!NOTE]
    > If you don't see a noticeable difference between the optimized and un-optimized versions, try clicking **Subtract 10** a few times and trying again.  
    > If you add too many blue icons, you're just going to max out the CPU and you're not going to see a major difference in the results for the two versions.  

1.  Click **Un-Optimize**.  The blue icons move slower and with more jank again.  

### Record runtime performance   

When you ran the optimized version of the page, the blue icons move faster.  
Why is that?  Both versions are supposed to move the icons the same amount of space in the same amount of time.  Take a recording in the Performance panel to learn how to detect the performance bottleneck in the un-optimized version.  

1.  In DevTools, click **Record** ![Record][ImageRecordIcon].  
    DevTools captures performance metrics as the page runs.  
    
    > ###### Figure 3 
    > Profiling the page  
    > ![Profiling the page][ImagePageProfiling]  
    
1.  Wait a few seconds.  
1.  Click **Stop**.  DevTools stops recording, processes the data, then displays the results on the Performance panel.  
    
    > ###### Figure 4  
    > The results of the profile  
    > ![The results of the profile][ImageProfileResults]  

Wow, that's an overwhelming amount of data.  Don't worry, it'll all make more sense shortly.  

## Analyze the results   

Once you've got a recording of the page's performance, you can measure how poor the page's performance is, and find the cause\(s\).  

### Analyze frames per second  

The main metric for measuring the performance of any animation is frames per second \(FPS\).  Users are happy when animations run at 60 FPS.  

1.  Look at the **FPS** chart.  Whenever you see a red bar above **FPS**, it means that the framerate dropped so low that it's probably harming the user experience. In general, the higher the green bar, the higher the FPS.  
    
    > ###### Figure 5  
    > The FPS chart  
    > ![The FPS chart][ImageFPSChart]  

1.  Below the **FPS** chart you see the **CPU** chart.  The colors in the **CPU** chart correspond to the colors in the **Summary** tab, at the bottom of the Performance panel.  The fact that the **CPU** chart is full of color means that the CPU was maxed out during the recording.  Whenever you see the CPU maxed out for long periods, it's a cue to find ways to do less work.  
    
    > ###### Figure 6  
    > The CPU chart and Summary tab  
    > ![The CPU chart and Summary tab][ImageCPUSummary]  

1.  Hover your mouse over the **FPS**, **CPU**, or **NET** charts.  DevTools shows a screenshot of the page at that point in time.  Move your mouse left and right to replay the recording.  This is called scrubbing, and it's useful for manually analyzing the progression of animations.  
    
    > ###### Figure 7  
    > Viewing a screenshot of the page around the 2500ms mark of the recording  
    > ![Viewing a screenshot of the page around the 2500ms mark of the recording][ImageViewingScreenshot]  

1.  In the **Frames** section, hover your mouse over one of the green squares.  DevTools shows you the FPS for that particular frame.  Each frame is probably well below the target of 60 FPS.  
    
    > ###### Figure 8  
    > Hovering over a frame  
    > ![Hovering over a frame][ImageFrameHover]  

Of course, with this demo, it's pretty obvious that the page is not performing well. But in real scenarios, it may not be so clear, so having all of these tools to make measurements comes in handy.  

#### Bonus: Open the FPS meter  

Another handy tool is the FPS meter, which provides real-time estimates for FPS as the page runs.  

1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the Command Menu.  
1.  Start typing `Rendering` in the Command Menu and select **Show Rendering**.  
1.  In the **Rendering** tab, enable **FPS Meter**.  A new overlay appears in the top-right of your viewport.  
    
    > ###### Figure 9  
    > The FPS meter  
    > ![The FPS meter][ImageFPSMeter]  

1.  Disable the **FPS Meter** and press `Escape` to close the **Rendering** tab.  You won't be using it in this tutorial.  

### Find the bottleneck  

Now that you've measured and verified that the animation is not performing well, the next question to answer is:  why?  

1.  Note the summary tab.  When no events are selected, this tab shows you a breakdown of activity.  The page spent most of its time rendering.  Since performance is the art of doing less work, your goal is to reduce the amount of time spent doing rendering work.  
    
    > ###### Figure 10  
    > The Summary tab  
    > ![The Summary tab][ImageSummaryTab]  

1.  Expand the **Main** section.  DevTools shows you a flame chart of activity on the main thread, over time.  The x-axis represents the recording, over time.  Each bar represents an event.  A wider bar means that event took longer.  The y-axis represents the call stack.  When you see events stacked on top of each other, it means the upper events caused the lower events.  
    
    > ##### Figure 11  
    > The Main section  
    > ![The Main section][ImageMainSection]  

1.  There's a lot of data in the recording.  Zoom in on a single event by clicking, holding, and dragging your mouse over the **Overview**, which is the section that includes the **FPS**, **CPU**, and **NET** charts.  The **Main** section and **Summary** tab only display information for the selected portion of the recording.  
    
    > ###### Figure 12  
    > Zoomed in on a single event  
    > ![Zoomed in on a event][ImageZoomedAnimation]  
    
    > [!NOTE]
    > Another way to zoom is to focus the **Main** section by clicking its background or selecting an event, and then press the `W`, `A`, `S`, and `D` keys.  
    
    1.  Note the red triangle in the top-right of the **Animation Frame Fired** event.  Whenever you see a red triangle, it's a warning that there may be an issue related to this event.  
    
    > [!NOTE]
    > The **Animation Frame Fired** event occurs whenever a [`requestAnimationFrame()` callback][WebRequestAnimationFrame] is run.  
    
1.  Click the **Animation Frame Fired** event.  The **Summary** tab now shows you information about that event.  Note the **Reveal** link. Clicking that causes DevTools to highlight the event that initiated the **Animation Frame Fired** event.  Also note the **app.js:95** link.  Clicking that jumps you to the relevant line in the source code.
    
    > ##### Figure 13  
    > More information about the Animation Frame Fired event  
    > ![More information about the Animation Frame Fired event][ImageAnimationFrameFired]  
    
    > [!NOTE]
    > After selecting an event, use the arrow keys to select the events next to it.  

1.  Under the **app.update** event, there's a bunch of purple events.  If they were wider, it looks as though each one might have a red triangle on it.  Click one of the purple **Layout** events now. DevTools provides more information about the event in the **Summary** tab. Indeed, there's a warning about forced reflows \(another word for layout\).  

1.  In the **Summary** tab, click the **app.js:71** link under **Layout Forced**. DevTools takes you to the line of code that forced the layout.  
    
    > ##### Figure 14  
    > The line of code that caused the forced layout  
    > ![The line of code that caused the forced layout][ImageForcedLayoutSRC]  
    
    > [!NOTE]
    > The problem with this code is that, in each animation frame, it changes the style for each icon, and then queries the position of each icon on the page. Because the styles changed, the browser doesn't know if each icon position changed, so it has to re-layout the icon in order to compute its position.  <!--  See [Avoid forced synchronous layouts][RenderingAvoidSynchronousLayouts] to learn more.  -->

<!-- todo: add layouts section when available -->

Phew!  That was a lot to take in, but you now have a solid foundation in the basic workflow for analyzing runtime performance.  Good job.  

### Bonus: Analyze the optimized version  

Using the workflows and tools that you just learned, click **Optimize** on the demo to enable the optimized code, take another performance recording, and then analyze the results.  From the improved framerate to the reduction in events in the flame chart in the **Main** section, you can see that the optimized version of the app does much less work, resulting in better performance.  

> [!NOTE]
> Even this "optimized" version isn't that great, because it still manipulates the `top` property of each icon. A better approach is to stick to properties that only affect compositing.  
<!--  > See [Use transform and opacity changes for animations][RenderingCompositor] for more information.  -->  

<!--todo: add rendering section when available -->

## Next steps

<!--The foundation for understanding performance is the RAIL model.  This model teaches you the performance metrics that are most important to your users.  
See [Measure Performance With The RAIL Model][RAIL] to learn more.  -->  

To get more comfortable with the Performance panel, practice makes perfect. Try profiling your own pages and analyzing the results. If you have any questions about your results, use the **Feedback** icon, press `Alt` + `Shift` + `I` on Windows (`Option` + `Shift` + `I` on macOS), or [tweet at us][PostTweetEdgeDevTools]. Include screenshots or links to reproducible pages, if possible.

> ##### Figure 15
> The **Feedback** icon in the Microsoft Edge DevTools  
> ![The **Feedback** icon in the Microsoft Edge DevTools][ImageFeedbackIcon]

<!-- To really master runtime performance, you've got to learn how the browser translates HTML, CSS, and JS into pixels on a screen. The best place to start is the [Rendering Performance Overview][RenderingPerformance].  [The Anatomy Of A Frame][FrameAnatomy] dives into even more detail.  -->  

Last, there are many ways to improve runtime performance.  This tutorial focused on one particular animation bottleneck to give you a focused tour through the Performance panel, but it's only one of many bottlenecks you may encounter.  <!--  The rest of the Rendering Performance series has a lot of good tips for improving various aspects of runtime performance, such as:  -->

<!--
*   [Optimizing JS Execution][RenderingOptimizeJS]  
*   [Reduce The Scope And Complexity Of Style Calculations][RenderingReduceScope]  
*   [Avoid Large, Complex Layouts And Layout Thrashing][RenderingAvoidThrashing]  
*   [Simplify Paint Complexity And Reduce Paint Areas][RenderingSimplifyPaint]  
*   [Stick To Compositor-Only Properties And Manage Layer Count][RenderingManageLayers]  
*   [Debounce Your Input Handlers][RenderingDebounceInputs]  
-->

<!-- image links -->  

[ImageCaptureSettingsIcon]: images/capture-settings-icon.msft.png  
[ImageRecordIcon]: images/record-icon.msft.png  

[ImageAnimationFrameFired]: images/performance-animation-frame-fired.msft.png "Figure 13: More information about the Animation Frame Fired event"  
[ImageCPUSummary]: images/performance-cpu-chart.msft.png "Figure 6: The CPU chart and Summary tab, outlined in blue"  
[ImageCPUThrottling]: images/performance-capture-settings.msft.png "Figure 2: CPU throttling"  
[ImageForcedLayoutSRC]: images/sources-app-update.msft.png "Figure 14: The line of code that caused the forced layout"  
[ImageFPSChart]: images/performance-fps-chart.msft.png "Figure 5: The FPS chart"  
[ImageFPSMeter]: images/fps-meter-overlay.msft.png "Figure 9: The FPS meter"  
[ImageFrameHover]: images/performance-frame-hover.msft.png "Figure 8: Hovering over a frame"  
[ImageGetStarted]: images/get-started-side-by-side.msft.png "Figure 1: The demo on the left, and DevTools on the right"  
[ImageMainSection]: images/performance-main.msft.png "Figure 11: The Main section"  
[ImagePageProfiling]: images/performance-profiling.msft.png "Figure 3: Profiling the page"  
[ImageProfileResults]: images/performance-capture-results.msft.png "Figure 4: The results of the profile"  
[ImageSummaryTab]: images/performance-summary-tab.msft.png "Figure 10: The Summary tab"  
[ImageViewingScreenshot]: images/performance-screenshot-hover.msft.png "Figure 7: Viewing a screenshot of the page around the 2500ms mark of the recording"  
[ImageZoomedAnimation]: images/performance-main-zoomed.msft.png "Figure 12: Zoomed in on a single Animation Frame Fired event"  
[ImageFeedbackIcon]: images/feedback-icon.msft.png "Figure 15: The **Feedback** icon in the Microsoft Edge DevTools"

<!-- links -->

[WebRequestAnimationFrame]: https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame "Window.requestAnimationFrame\(\) | MDN"  
[PostTweetEdgeDevTools]: https://aka.ms/tweet/edgedevtools "@EdgeDevTools | Post a Tweet" 
<!--[FrameAnatomy]: https://aerotwist.com/blog/the-anatomy-of-a-frame  -->  
<!--[InPrivate]: https://support.microsoft.com/help/4026200/microsoft-edge-browse-inprivate "Browse InPrivate in Microsoft Edge"  -->
<!--[OptimizeWebsiteSpeed]: speed/get-started  -->  
<!--[RAIL]: /web/fundamentals/performance/rail  -->  
<!--[RenderingAvoidSynchronousLayouts]: /web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid_forced_synchronous_layouts  -->  
<!--[RenderingAvoidThrashing]: /web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing  -->  
<!--[RenderingCompositor]: /web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count#use_transform_and_opacity_changes_for_animations  -->  
<!--[RenderingDebounceInputs]: /web/fundamentals/performance/rendering/debounce-your-input-handlers  -->
<!--[RenderingManageLayers]: /web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count  -->  
<!--[RenderingOptimizeJS]: /web/fundamentals/performance/rendering/optimize-javascript-execution  -->  
<!--[RenderingPerformance]: /web/fundamentals/performance/rendering  -->  
<!--[RenderingReduceScope]: /web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations  -->  
<!--[RenderingSimplifyPaint]: /web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas  -->  
<!--[StackOverflowAlphabetBrowserDevtools]: https://stackoverflow.com/questions/ask?tags=alphabet-browser-devtools "Alphabet Browser - Stack Overflow"  -->  
<!--[UIPlacement]: ui#placement  -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
