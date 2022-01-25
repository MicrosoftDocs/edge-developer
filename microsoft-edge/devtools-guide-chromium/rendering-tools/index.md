---
description: Users expects interactive and smooth pages.  Each stage in the pixel pipeline represents an opportunity to introduce jank.  Learn about tools and strategies to identify and fix common problems that slow down runtime performance.
title: Analyze runtime performance
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
   limitations under the License.  -->
# Analyze runtime performance

Users expects interactive and smooth pages.  Each stage in the pixel pipeline represents an opportunity to introduce jank.  Learn about tools and strategies to identify and fix common problems that slow down runtime performance.

### Summary

*   Do not write JavaScript that forces the browser to recalculate layout.  Separate read and write functions, and perform reads first.
*   Do not over-complicate your CSS.  Use less CSS and keep your CSS selectors simple.
*   Avoid layout as much as possible.  Choose CSS that does not trigger layout at all.
*   Painting may take up more time than any other rendering activity.  Watch out for paint bottlenecks.


<!-- ====================================================================== -->
## JavaScript

JavaScript calculations, especially ones that trigger extensive visual changes, may stall application performance.  Do not let badly-timed or long-running JavaScript interfere with user interactions.

### JavaScript: Tools

Take a recording in the **Performance** tool and look for suspiciously long `Evaluate Script` events.  <!--If you find any, you are able to enable the **JS Profiler** and re-do your recording to get more detailed information about exactly which JavaScript functions were used and how long each took.  -->

<!--todo: add Recording section when available  -->
<!--todo: add Profile JavaScript (JS Profiler) section when available  -->

If you notice quite a bit of jank (interruptions of rendering) in your JavaScript, you may need to take your analysis to the next level and collect a JavaScript CPU profile.  CPU profiles show where runtime is spent within the functions of your page.  Learn how to create CPU profiles in [Speed up JavaScript runtime](./js-runtime.md).

### JavaScript: Problems

The following table describes some common JavaScript problems and potential solutions.

| Problem | Example | Solution |
|:--- |:--- |:--- |
| Expensive input handlers affecting response or animation.  | Touch, parallax scrolling.  | Let the browser handle touch and scrolls, or bind the listener as late as possible.  See [Expensive Input Handlers in Paul Lewis' runtime performance checklist](https://calendar.perfplanet.com/2013/the-runtime-performance-checklist/).  |
| Badly-timed JavaScript affecting response, animation, load.  | User scrolls right after page load, setTimeout / setInterval.  | Optimize JavaScript runtime: use `requestAnimationFrame`, spread DOM manipulation over frames, use [Web Workers](https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Using_web_workers).  |
| Long-running JavaScript affecting response.  | The [DOMContentLoaded event](https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Using_web_workers) stalls as it is swamped with JS work.  | Move pure computational work to [Web Workers](https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Using_web_workers).  If you need DOM access, use `requestAnimationFrame`.  <!--See [Optimize JavaScript Execution](/web/fundamentals/performance/rendering/optimize-javascript-execution).  -->  |
| Garbage-y scripts affecting response or animation.  | Garbage collection may happen anywhere.  | Write less garbage-y scripts.  See [Garbage Collection in Animation in Paul Lewis' runtime performance checklist](https://calendar.perfplanet.com/2013/the-runtime-performance-checklist/).  |

<!--todo: add Optimize JavaScript runtime section when available  -->


<!-- ====================================================================== -->
## Style

Style changes are costly, especially if those changes affect more than one element in the DOM.  Any time you apply styles to an element, the browser figures out the impact on all related elements, recalculates the layout, and repaints.

<!--Related Guides:

*   [Reduce the Scope and Complexity of Styles Calculations](/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations)
-->

<!--todo: add Reduce the Scope and Complexity of Styles Calculations section when available -->

### Style: Tools

Take a recording in the **Performance** tool.  Check the recording for large `Recalculate Style` events (displayed in purple).

<!--todo: add Recording section when available  -->

Choose a `Recalculate Style` event to view more information about it in the **Details** pane.  If the style changes are taking a long time, that is a performance hit.  If the style calculations are affecting a large number of elements, that is another area with room for improvement.

:::image type="complex" source="../media/rendering-tools-performance-recalculate-style-summary.msft.png" alt-text="Long recalculate style" lightbox="../media/rendering-tools-performance-recalculate-style-summary.msft.png":::
   Long recalculate style
:::image-end:::

To reduce the impact of `Recalculate Style` events:

*   Use the [CSS Triggers](https://csstriggers.com) to learn which CSS properties trigger layout, paint, and composite.  These properties have the worst impact on rendering performance.
*   Switch to properties that have less impact.  <!--For more guidance, See [Stick to compositor-only properties and manage layer count](/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count).  -->

<!--todo: add Stick to compositor-only properties and manage layer count section when available -->

### Style: Problems

The following table describes some common style problems and potential solutions.

| Problem | Example | Solution |
|:--- |:--- |:--- |
| Expensive style calculations affecting response or animation.  | Any CSS property that changes the geometry of an element, like the width, height, or position; the browser checks all other elements and recalculates the layout.  | Avoid CSS that triggers layouts |
| Complex selectors affecting response or animation.  | Nested selectors force the browser to know everything about all the other elements, including parents and children.  | Reference an element in your CSS with just a class.  |

<!--todo: add Avoid CSS that triggers layouts section when available -->
<!--todo: add Reduce the Scope and Complexity of Styles Calculations (Reference an element in your CSS with just a class) section when available -->

<!--Related Guides:

*   [Reduce the Scope and Complexity of Styles Calculations](/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations)  -->

<!--todo: add Reduce the Scope and Complexity of Styles Calculations section when available -->


<!-- ====================================================================== -->
## Layout

Layout (or reflow in Firefox) is the process by which the browser calculates the positions and sizes of all the elements on a page.  The layout model of the web means that one element may affect others; for example, the width of the `<body>` element typically affects the widths of any child elements, and so on, all the way up and down the tree.  The process may be quite involved for the browser.

As a general rule of thumb, if you ask for a geometric value back from the DOM before a frame is complete, you are going to find yourself with "forced synchronous layouts", which may be a big performance bottleneck if repeated frequently or performed for a large DOM tree.

<!--Related Guides:

*   [Avoid Layout Thrashing](/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing)
*   [Diagnose Forced Synchronous Layouts](rendering-tools/forced-synchronous-layouts.md)  -->

<!--todo: add Avoid CSS that triggers layouts (Avoid Layout Thrashing) section when available -->
<!--todo: add Diagnose Forced Synchronous Layouts section when available  -->

### Layout: Tools

The **Performance** pane identifies when a page causes forced synchronous layouts.  These `Layout` events are marked with red bars.

:::image type="complex" source="../media/rendering-tools-jank-performance-recalculate-style-summary.msft.png" alt-text="Forced synchronous layout" lightbox="../media/rendering-tools-jank-performance-recalculate-style-summary.msft.png":::
   Forced synchronous layout
:::image-end:::

"Layout thrashing" is a repetition of forced synchronous layout conditions.  This occurs when JavaScript writes and reads from the DOM repeatedly, which forces the browser to recalculate the layout over and over.  To identify layout thrashing, look for a pattern of multiple forced synchronous layout warnings.  Review the previous figure.

### Layout: Problems

The following table describes some common layout problems and potential solutions.

| Problem | Example | Solution |
|:--- |:--- |:--- |
| Forced synchronous layout affecting response or animation.  | Forcing the browser to perform layout earlier in the pixel pipeline, resulting in repeating steps in the rendering process.  | Batch your style reads first, then do any writes.  <!--See [Avoid large, complex layouts and layout thrashing](/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing).  -->  |
| Layout thrashing affecting response or animation.  | A loop that puts the browser into a read-write-read-write cycle, forcing the browser to recalculate layout over and over again.  | Automatically batch read-write operations using [FastDom library](https://github.com/wilsonpage/fastdom).  |

<!--todo: add Avoid CSS that triggers layouts (Avoid large, complex layouts and layout thrashing) section when available -->


<!-- ====================================================================== -->
## Paint and composite

Paint is the process of filling in pixels.  It is often the most costly part of the rendering process.  If you noticed that your page is not working as designed in any way, it is likely that you have paint problems.

Compositing is where the painted parts of the page are put together for displaying on screen.  For the most part, if you stick to compositor-only properties and avoid paint altogether, you should notice a major improvement in performance, but you need to watch out for excessive layer counts.  <!--See [Stick to compositor-only properties and manage layer count](/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count).  -->

<!--todo: add Stick to compositor-only properties and manage layer count section when available  -->

### Paint and composite: Tools

Want to know how long painting takes or how often painting occurs?  Check the [Enable advanced paint instrumentation](../evaluate-performance/reference.md#turn-on-advanced-paint-instrumentation) setting in the **Performance** panel and then take a recording.  If most of your rendering time is spent painting, you have paint problems.

<!--
:::image type="complex" source="../media/rendering-tools-jank-performance-advanced-paint-instrumentation-summary.msft.png" alt-text="Long paint times in timeline recording" lightbox="../media/rendering-tools-jank-performance-advanced-paint-instrumentation-summary.msft.png":::
   Long paint times in timeline recording
:::image-end:::
-->

<!--
Check out the **Rendering** panel for further configurations that are able to help you diagnose paint problems.
todo: link Rendering panel in ../evaluate-performance/timeline-tool  sub-section when live.
The Timeline Tool page is deprecated.
-->


### Paint and composite: Problems

The following table describes some common paint and composite problems and potential solutions.

| Problem | Example | Solution |
|:--- |:--- |:--- |
| Paint storms affecting response or animation.  | Big paint areas or expensive paints affecting response or animation.  | Avoid paint, promote elements that are moving to their own layer, use transforms and opacity.  <!--See [Simplify paint complexity and reduce paint areas](/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas).  -->  |
| Layer explosions affecting animations.  | Overpromotion of too many elements with `translateZ(0)` greatly affects animation performance.  | Promote to layers sparingly, and only when you know it offers tangible improvements.  <!--See [Stick to composite-only properties and manage layer count](/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count).  -->  |

<!--todo: add Simplify paint complexity and reduce paint areas section when available  -->
<!--todo: add Stick to compositor-only properties and manage layer count section when available  -->


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/index) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse) and [Meggin Kearney](https://developers.google.com/web/resources/contributors#meggin-kearney) (Technical Writer).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
