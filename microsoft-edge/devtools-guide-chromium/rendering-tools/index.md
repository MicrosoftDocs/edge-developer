---
title: Analyze Runtime Performance
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/30/2020
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
   limitations under the License.  -->

# Analyze Runtime Performance   

Users expects interactive and smooth pages.  Each stage in the pixel pipeline represents an opportunity to introduce jank.  Learn about tools and strategies to identify and fix common problems that slow down runtime performance.  

### Summary  

*   Do not write JavaScript that forces the browser to recalculate layout.  Separate read and write functions, and perform reads first.  
*   Do not over-complicate your CSS.  Use less CSS and keep your CSS selectors simple.  
*   Avoid layout as much as possible.  Choose CSS that does not trigger layout at all.  
*   Painting may take up more time than any other rendering activity.  Watch out for paint bottlenecks.  

## JavaScript  

JavaScript calculations, especially ones that trigger extensive visual changes, may stall application performance.  Do not let badly-timed or long-running JavaScript interfere with user interactions.  

### JavaScript: Tools  

Take a recording in the **Performance** panel and look for suspiciously long `Evaluate Script` events.  <!--If you find any, you are able to enable the **JS Profiler** and re-do your recording to get more detailed information about exactly which JavaScript functions were used and how long each took.  -->  

<!--todo: add Recording section when available  -->  
<!--todo: add Profile JavaScript (JS Profiler) section when available  -->  

f you noticing quite a bit of jank in your JavaScript, you may need to take your analysis to the next level and collect a JavaScript CPU profile.  CPU profiles show where runtime is spent within the functions of your page.  Learn how to create CPU profiles in [Speed Up JavaScript Runtime][DevtoolsRenderingToolsJavascriptRuntime].

### JavaScript: Problems  

The following table describes some common JavaScript problems and potential solutions:  

| Problem | Example | Solution |  
|:--- |:--- |:--- |  
| Expensive input handlers affecting response or animation.  | Touch, parallax scrolling.  | Let the browser handle touch and scrolls, or bind the listener as late as possible.  See [Expensive Input Handlers in Paul Lewis' runtime performance checklist][WebPerformanceCalendarRuntimeChecklist].  |  
| Badly-timed JavaScript affecting response, animation, load.  | User scrolls right after page load, setTimeout / setInterval.  | Optimize JavaScript runtime: use `requestAnimationFrame`, spread DOM manipulation over frames, use [Web Workers][MDNUsingWebWorkers].  |  
| Long-running JavaScript affecting response.  | The [DOMContentLoaded event][MDNUsingWebWorkers] stalls as it is swamped with JS work.  | Move pure computational work to [Web Workers][MDNUsingWebWorkers].  If you need DOM access, use `requestAnimationFrame`.  <!--See also [Optimize JavaScript Execution][WebFundamentalsPerformanceRenderingOptimizeJavascriptRuntime].  -->  |  
| Garbage-y scripts affecting response or animation.  | Garbage collection may happen anywhere.  | Write less garbage-y scripts.  See [Garbage Collection in Animation in Paul Lewis' runtime performance checklist][WebPerformanceCalendarRuntimeChecklist].  |  

<!--todo: add Optimize JavaScript runtime section when available  -->  

## Style  

Style changes are costly, especially if those changes affect more than one element in the DOM.  Any time you apply styles to an element, the browser figures out the impact on all related elements, recalculates the layout, and repaints.  

<!--Related Guides:  

*   [Reduce the Scope and Complexity of Styles Calculations][WebFundamentalsPerformanceRenderingReduceScope]  
-->  

<!--todo: add Reduce the Scope and Complexity of Styles Calculations section when available -->  

### Style: Tools  

Take a recording in the **Performance** panel.  Check the recording for large `Recalculate Style` events \(displayed in purple\).  

<!--todo: add Recording section when available  -->  

Click on a `Recalculate Style` event to view more information about it in the **Details** pane.  If the style changes are taking a long time, that is a performance hit.  If the style calculations are affecting a large number of elements, that is another area with room for improvement.  

> ##### Figure 1  
> Long recalculate style  
> ![Long recalculate style][ImageLongRecalculateStyle]

To reduce the impact of `Recalculate Style` events:  

*   Use the [CSS Triggers][CssTriggers] to learn which CSS properties trigger layout, paint, and composite.  These properties have the worst impact on rendering performance.  
*   Switch to properties that have less impact.  <!--See [Stick to compositor-only properties and manage layer count][WebFundamentalsPerformanceRenderingCompositorOnlyProperties] for more guidance.  -->  

<!--todo: add Stick to compositor-only properties and manage layer count section when available -->  

### Style: Problems  

The following table describes some common style problems and potential solutions:  

| Problem | Example | Solution |  
|:--- |:--- |:--- |  
| Expensive style calculations affecting response or animation.  | Any CSS property that changes the geometry of an element, like the width, height, or position; the browser checks all other elements and recalculates the layout.  | Avoid CSS that triggers layouts |  
| Complex selectors affecting response or animation.  | Nested selectors force the browser to know everything about all the other elements, including parents and children.  | Reference an element in your CSS with just a class.  |  

<!--todo: add Avoid CSS that triggers layouts section when available -->  
<!--todo: add Reduce the Scope and Complexity of Styles Calculations (Reference an element in your CSS with just a class) section when available -->  

<!--Related Guides:  

*   [Reduce the Scope and Complexity of Styles Calculations][WebFundamentalsPerformanceRenderingReduceScope]  -->  

<!--todo: add Reduce the Scope and Complexity of Styles Calculations section when available -->  

## Layout  

Layout (or reflow in Firefox) is the process by which the browser calculates the positions and sizes of all the elements on a page.  The layout model of the web means that one element may affect others; for example, the width of the `<body>` element typically affects the widths of any child elements, and so on, all the way up and down the tree.  The process may be quite involved for the browser.  

As a general rule of thumb, if you ask for a geometric value back from the DOM before a frame is complete, you are going to find yourself with "forced synchronous layouts", which may be a big performance bottleneck if repeated frequently or performed for a large DOM tree.  

<!--Related Guides:  

*   [Avoid Layout Thrashing][WebFundamentalsPerformanceRenderingAvoidLargeComplexLayouts]  
*   [Diagnose Forced Synchronous Layouts][DevtoolsRenderingToolsForcedSynchronousLayouts]  -->  

<!--todo: add Avoid CSS that triggers layouts (Avoid Layout Thrashing) section when available -->  
<!--todo: add Diagnose Forced Synchronous Layouts section when available  -->  

### Layout: Tools  

The **Performance** pane identifies when a page causes forced synchronous layouts.  These `Layout` events are marked with red bars.  

> ##### Figure 2  
> Forced synchronous layout  
> ![Forced synchronous layout][ImageForcedSynchronousLayout]  

"Layout thrashing" is a repetition of forced synchronous layout conditions.  This occurs when JavaScript writes and reads from the DOM repeatedly, which forces the browser to recalculate the layout over and over.  To identify layout thrashing, look for a pattern of multiple forced synchronous layout warnings.  See [Figure 2](#figure-2).  

### Layout: Problems  

The following table describes some common layout problems and potential solutions:  

| Problem | Example | Solution |  
|:--- |:--- |:--- |  
| Forced synchronous layout affecting response or animation.  | Forcing the browser to perform layout earlier in the pixel pipeline, resulting in repeating steps in the rendering process.  | Batch your style reads first, then do any writes.  <!--See also [Avoid large, complex layouts and layout thrashing][WebFundamentalsPerformanceRenderingAvoidLargeComplexLayouts].  -->  |  
| Layout thrashing affecting response or animation.  | A loop that puts the browser into a read-write-read-write cycle, forcing the browser to recalculate layout over and over again.  | Automatically batch read-write operations using [FastDom library][GitHubWilsonpageFastdom].  |  

<!--todo: add Avoid CSS that triggers layouts (Avoid large, complex layouts and layout thrashing) section when available -->  

## Paint and composite  

Paint is the process of filling in pixels.  It is often the most costly part of the rendering process.  If you noticed that your page is janky in any way, it is likely that you have paint problems.  

Compositing is where the painted parts of the page are put together for displaying on screen.  For the most part, if you stick to compositor-only properties and avoid paint altogether, you should see a major improvement in performance, but you need to watch out for excessive layer counts.  <!--See also [Stick to compositor-only properties and manage layer count][WebFundamentalsPerformanceRenderingCompositorOnlyProperties].  -->  

<!--todo: add Stick to compositor-only properties and manage layer count section when available  -->  

### Paint and composite: Tools  

Want to know how long painting takes or how often painting occurs?  Check the [Enable advanced paint instrumentation][DevtoolsChromiumEvaluatePerformanceReferenceEnableadvancedpaintinstrumentation] setting in the **Performance** panel and then take a recording.  If most of your rendering time is spent painting, you have paint problems.  

<!--
> ##### Old Figure 3  
> Long paint times in timeline recording  
> ![Long paint times in timeline recording][ImageLongPaintTimes]  
-->  

<!--
Check out the **Rendering** panel for further configurations that are able to help you diagnose paint problems.  -->  

<!--todo: link Rendering panel in ../evaluate-performance/timeline-tool  sub-section when live  -->  

### Paint and composite: Problems  

The following table describes some common paint and composite problems and potential solutions:  

| Problem | Example | Solution |  
|:--- |:--- |:--- |  
| Paint storms affecting response or animation.  | Big paint areas or expensive paints affecting response or animation.  | Avoid paint, promote elements that are moving to their own layer, use transforms and opacity.  <!--See [Simplify paint complexity and reduce paint areas][WebFundamentalsPerformanceRenderingSimplifyPaintComplexity].  -->  |  
| Layer explosions affecting animations.  | Overpromotion of too many elements with `translateZ(0)` greatly affects animation performance.  | Promote to layers sparingly, and only when you know it offers tangible improvements.  <!--See [Stick to composite-only properties and manage layer count][WebFundamentalsPerformanceRenderingCompositorOnlyProperties].  -->  |  

<!--todo: add Simplify paint complexity and reduce paint areas section when available  -->  
<!--todo: add Stick to compositor-only properties and manage layer count section when available  -->  

<!--## Feedback   -->  

<!-- image links -->  

[ImageLongRecalculateStyle]: /microsoft-edge/devtools-guide-chromium/media/rendering-tools-performance-recalculate-style-summary.msft.png "Figure 1: Long recalculate style"  
[ImageForcedSynchronousLayout]: /microsoft-edge/devtools-guide-chromium/media/rendering-tools-jank-performance-recalculate-style-summary.msft.png "Figure 2: Forced synchronous layout"  
<!--[ImageLongPaintTimes]: /microsoft-edge/devtools-guide-chromium/media/rendering-tools-jank-performance-advanced-paint-instrumentation-summary.msft.png "Old Figure 3: Long paint times in timeline recording"  -->  

<!-- links -->  

[DevtoolsRenderingToolsJavascriptRuntime]: /microsoft-edge/devtools-guide-chromium/rendering-tools/js-runtime "Speed Up JavaScript Runtime"  

[DevtoolsChromiumEvaluatePerformanceReferenceEnableadvancedpaintinstrumentation]: /microsoft-edge/devtools-guide-chromium/evaluate-performance/reference#enable-advanced-paint-instrumentation "Enable advanced paint instrumentation - Performance Analysis Reference"

<!--[DevtoolsRenderingToolsForcedSynchronousLayouts]: /microsoft-edge/devtools-guide-chromium/rendering-tools/forced-synchronous-layouts "Diagnose Forced Synchronous Layouts"  -->  

<!-- The Timeline Tool page is deprecated  -->  
<!--[DevtoolsEvaluatePerformanceTimelineToolProfileJavascript]: /microsoft-edge/devtools-guide-chromium/evaluate-performance/timeline-tool#profile-javascript "Profile JavaScript - How to Use the Timeline Tool"  -->  
<!--[DevtoolsEvaluatePerformanceTimelineToolProfilePainting]: /microsoft-edge/devtools-guide-chromium/evaluate-performance/timeline-tool#profile-painting "Profile painting - How to Use the Timeline Tool"  -->  
<!--[DevtoolsEvaluatePerformanceTimelineToolRecording]: /microsoft-edge/devtools-guide-chromium/evaluate-performance/timeline-tool#make-a-recording "Make a recording - How to Use the Timeline Tool"  -->  
<!--[DevtoolsEvaluatePerformanceTimelineToolRenderingSettings]: /microsoft-edge/devtools-guide-chromium/evaluate-performance/timeline-tool#rendering-settings "Rendering settings - How to Use the Timeline Tool"  -->  

<!--[WebFundamentalsPerformanceRenderingAvoidLargeComplexLayouts]: /web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing "Avoid Large, Complex Layouts, and Layout Thrashing"  -->  
<!--[WebFundamentalsPerformanceRenderingOptimizeJavascriptRuntime]: /web/fundamentals/performance/rendering/optimize-javascript-execution "Optimize JavaScript Runtime"  -->  
<!--[WebFundamentalsPerformanceRenderingReduceScope]: /web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations "Reduce the Scope and Complexity of Style Calculations"  -->  
<!--[WebFundamentalsPerformanceRenderingSimplifyPaintComplexity]: /web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas "Simplify Paint Complexity and Reduce Paint Areas"  -->  
<!--[WebFundamentalsPerformanceRenderingCompositorOnlyProperties]: /web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count "Stick to Compositor-Only Properties and Manage Layer Count"  -->  

[CssTriggers]: https://csstriggers.com "CSS Triggers"  

[MDNUsingWebWorkers]: https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Using_web_workers "Using Web Workers | MDN"  

[WebPerformanceCalendarRuntimeChecklist]: https://calendar.perfplanet.com/2013/the-runtime-performance-checklist/ "The Runtime Performance Checklist - Web Performance Calendar"  

[GitHubWilsonpageFastdom]: https://github.com/wilsonpage/fastdom "wilsonpage/fastdom | GitHub"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\) and [Meggin Kearney][MegginKearney] \(Tech Writer\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
[MegginKearney]: https://developers.google.com/web/resources/contributors/megginkearney  
