---
title: Fix memory problems
description: Use Microsoft Edge DevTools to find memory issues that affect page performance, including memory leaks, memory bloat, and frequent garbage collections.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 10/18/2024
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
# Fix memory problems

Use Microsoft Edge and DevTools to find memory issues that affect page performance, including memory leaks, memory bloat, and frequent garbage collections.

<!-- todo:
move content out to the dedicated articles, present an overview of each tool/feature in this article, w/ link to the detailed article

as an overview of the profiling types, incorp text from old Memory tool's option buttons:

* **Heap snapshot** - Heap snapshot profiles show memory distribution among your page's JavaScript objects and related DOM nodes.

* **Allocation instrumentation on timeline** - Allocation timelines show instrumented JavaScript memory allocations over time.  Once profile is recorded you can select a time interval to see objects that were allocated within it and still alive by the end of recording.  Use this profile type to isolate memory leaks.

* **Allocation sampling** - Record memory allocations using sample method.  This profile type has minimal performance overhead and can be used for long running operations.  It provides good approximation of allocations broken down by JavaScript execution stack.

* **Detached elements** - _no such option button & text existed; assume the above intentions have been modified by adding this prof type and are now outdated advice/positioning_
-->


<!-- ------------------------------ -->
#### Tools for investigating memory usage

| Task | Tool | Docs |
|---|---|---|
| Find out how much memory your page is currently using, by using the Microsoft Edge Browser Task Manager | Microsoft Edge Browser Task Manager | [Monitor memory use in realtime (Microsoft Edge Browser Task Manager)](#monitor-memory-use-in-realtime-microsoft-edge-browser-task-manager) |
| Visualize memory usage over time | **Performance** tool > **Memory** checkbox | [Visualize memory leaks (Performance tool: Memory checkbox)](#visualize-memory-leaks-performance-tool-memory-checkbox) |
| Spot frequent garbage collections | Microsoft Edge Browser Task Manager, or **Performance** tool > **Memory** checkbox | [Spot frequent garbage collections (Microsoft Edge Browser Task Manager, Performance tool's Memory checkbox)](#spot-frequent-garbage-collections-microsoft-edge-browser-task-manager-performance-tools-memory-checkbox) |
| Record a heap snapshot | **Memory** tool > <!--[1]--> **Heap snapshot** option button | [Record heap snapshots using the Memory tool ("Heap snapshot" profiling type)](./heap-snapshots.md) |
| Find out when new memory is being allocated in your JavaScript heap (JS heap) | **Memory** tool > <!--[2]--> **Allocations on timeline** option button | [Use Allocation instrumentation on timeline ("Allocations on timeline" profiling type)](./allocation-profiler.md) |
| Investigate memory allocation by function | **Memory** tool > <!--[3]--> **Allocation sampling** option button | [Speed up JavaScript runtime ("Allocation sampling" profiling type)](../rendering-tools/js-runtime.md) |
| Find DOM tree memory leaks | **Memory** tool > <!--[4]--> **Detached elements** option button | [Debug DOM memory leaks ("Detached elements" profiling type)](./dom-leaks-memory-tool-detached-elements.md) |


<!-- ------------------------------ -->
#### The Memory tool

The main tool for investigating memory issues is the **Memory** tool:

![The Memory tool](./index-images/memory-tool.png)

A Detached Elements profile in the **Memory** tool:

![A Detached Elements profile](./index-images/detached-elements-profile.png)

To return to the list of option buttons for profiling types, in the upper left of the **Memory** tool, click **Profiles** (![the Profiles icon](./index-images/profiles-icon.png)).


<!-- ====================================================================== -->
## Overview of fixing memory problems

In the spirit of the **RAIL**<!-- [RAIL](/profile/evaluate-performance/rail) --> performance model, the focus of your performance efforts should be your users.

<!--todo old: add RAIL section when available  -->

Memory issues are important because they are often perceivable by users.  Users may perceive memory issues in the following ways:

*  **The performance of a page gets progressively worse over time**.  This is possibly a symptom of a memory leak.  A memory leak is when a bug in the page causes the page to progressively use more and more memory over time.

*  **The performance of a page is consistently bad**.  This is possibly a symptom of memory bloat.  Memory bloat is when a page uses more memory than is necessary for optimal page speed.

*  **The performance of a page is delayed or appears to pause frequently**.  This is possibly a symptom of frequent garbage collections.  Garbage collection is when the browser reclaims memory.  The browser decides when this happens.  During collections, all script running is paused.  So if the browser is garbage collecting a lot, script runtime is going to get paused a lot.


<!-- ------------------------------ -->
#### Memory bloat: How much is "too much"?

A memory leak is easy to define.  If a site is progressively using more and more memory, then you have a leak.  But memory bloat is a bit harder to pin down.  What qualifies as "using too much memory"?

There are no hard numbers here, because different devices and browsers have different capabilities.  The same page that runs smoothly on a high-end smartphone may crash on a low-end smartphone.

The key here is to use the RAIL model and focus on your users.  Find out what devices are popular with your users, and then test out your page on those devices.  If the experience is consistently bad, the page may be exceeding the memory capabilities of those devices.


<!-- Microsoft Edge Browser Task Manager -->
<!-- ====================================================================== -->
## Monitor memory use in realtime (Microsoft Edge Browser Task Manager)

Use the Microsoft Edge Browser Task Manager as a starting point to your memory issue investigation.  The Microsoft Edge Browser Task Manager is a realtime monitor that tells you how much memory a page is currently using.

1. Press **Shift+Esc** or go to the Microsoft Edge main menu and select **More tools** > **Browser Task Manager** to open the Microsoft Edge Browser Task Manager.

   ![Opening the Microsoft Edge Browser Task Manager](./index-images/bing-settings-more-tools-browser-task-manager.png)

1. Right-click the table header of the Microsoft Edge Browser Task Manager, and then enable **JavaScript memory**.

   ![Enabling JavaScript memory](./index-images/bing-browser-task-manager-javascript-memory.png)

These two columns tell you different things about how your page is using memory:

*  The **Memory** column represents native memory.  DOM nodes are stored in native memory.  If this value is increasing, DOM nodes are getting created.

*  The **JavaScript Memory** column represents the JS heap.  This column contains two values.  The value you are interested in is the live number (the number in parentheses).  The live number represents how much memory the reachable objects on your page are using.  If this number is increasing, either new objects are being created, or the existing objects are growing.

<!--*  live number reference: https://groups.google.com/d/msg/google-chrome-developer-tools/aTMVGoNM0VY/bLmf3l2CpJ8J  -->


<!-- Performance tool >  Memory checkbox -->
<!-- ====================================================================== -->
## Visualize memory leaks (Performance tool: Memory checkbox)

You can also use the **Performance** tool as another starting point in your investigation.  The **Performance** tool helps you visualize the memory use of a page over time.

1. In DevTools, open the **Performance** tool.

1. Select the **Memory** checkbox.

1. [Make a recording](../evaluate-performance/reference.md#record-performance).

It's a good practice to start and end your recording with a forced garbage collection.  To force garbage collection, click the **collect garbage** ![force garbage collection](./index-images/collect-garbage-icon.png) button while recording.

To demonstrate memory recordings, consider the following code:

```javascript
var x = [];
function grow() {
    for (var i = 0; i < 10000; i++) {
        document.body.appendChild(document.createElement('div'));
    }
    x.push(new Array(1000000).join('x'));
}
document.getElementById('grow').addEventListener('click', grow);
```

Every time that the button referenced in the code is clicked, 10,000 `div` nodes are appended to the document body, and a string of 1,000,000 `x` characters is pushed onto the `x` array.  Running the previous code produces a recording in the **Performance** tool:

![Simple growth](./index-images/performance-memory.png)

First, an explanation of the user interface.  The **HEAP** graph in the **Overview** pane (below **NET**) represents the JS heap.  Below the **Overview** pane is the **Counter** pane.  The memory usage is broken down by JS heap (same as **HEAP** graph in the **Overview** pane), documents, DOM nodes, listeners, and GPU memory.  Clear a checkbox to hide it from the graph.

Now, an analysis of the code compared with the previous figure.  If you review the node counter (the green graph), it matches up cleanly with the code.  The node count increases in discrete steps.  You can presume that each increase in the node count is a call to `grow()`.

The JS heap graph (the blue graph) is not as straightforward.  In keeping with best practices, the first dip is actually a forced garbage collection (click the  **collect garbage** ![force garbage collection](./index-images/collect-garbage-icon.png) button).

As the recording progresses, the JS heap size spikes are displayed.  This is natural and expected: the JavaScript code is creating the DOM nodes on every button you click, and is doing a lot of work when it creates the string of one million characters.

The key thing here is the fact that the JS heap ends higher than it began (the "beginning" here being the point after the forced garbage collection).  In the real world, if you saw this pattern of increasing JS heap size or node size, it would potentially indicate a memory leak.

<!--todo old: the Heap snapshots and Profiles panel aren't found in Edge  -->


<!-- Performance tool > Memory checkbox -->
<!-- ====================================================================== -->
## Spot frequent garbage collections (Microsoft Edge Browser Task Manager, Performance tool's Memory checkbox)

If your page appears to pause frequently, then you may have garbage collection issues.  To spot frequent garbage collection, you can use either:

* Microsoft Edge Browser Task Manager.  Frequently rising and falling **Memory** or **JavaScript Memory** values represent frequent garbage collection.

* The **Performance** tool's **Memory** checkbox.  In Performance memory recordings, frequent changes (rising and falling) to the JS heap or node count graphs indicate frequent garbage collection.

After you have identified the problem by using either of those tool, you can then use an **Allocations on timeline** recording to find out where memory is being allocated, and which functions are causing the allocations.


<!--[1]-->
<!-- ====================================================================== -->
## Record a heap snapshot ("Heap snapshot" profiling type)

See:
* [Record heap snapshots using the Memory tool ("Heap snapshot" profiling type)](./heap-snapshots.md).
* [Find DOM tree memory leaks ("Heap snapshot" profiling type > Detached)](#find-dom-tree-memory-leaks-heap-snapshot-profiling-type--detached), below.


<!--[2]-->
<!-- ====================================================================== -->
## Identify JS heap memory leaks ("Allocations on timeline" profiling type)

See [Use Allocation instrumentation on timeline ("Allocations on timeline" profiling type)](./allocation-profiler.md).


<!--[3]-->
<!-- ====================================================================== -->
## Investigate memory allocation by function ("Allocation sampling" profiling type)

See [Speed up JavaScript runtime ("Allocation sampling" profiling type)](../rendering-tools/js-runtime.md).


<!-- ====================================================================== -->
## Find DOM tree memory leaks from detached elements

A DOM node is only garbage-collected by the browser when there are no references to the node from either the DOM tree or JavaScript code running on the page.  A node is said to be "detached" when it is removed from the DOM tree but some JavaScript still references it.  Detached DOM nodes are a common cause of memory leaks.


<!-- ------------------------------ -->
#### Tools for investigating detached elements

| Tool | Use case | Docs |
|---|---|---|
| **Memory** tool > **Detached elements** option button (profiling type) | Shows detached elements only, as DOM tree nodes.  | [Debug DOM memory leaks ("Detached elements" profiling type)](./dom-leaks-memory-tool-detached-elements.md) |
| **Memory** tool > **Heap snapshot** option button (profiling type) > **Detached** | Shows all objects in memory, including detached elements, which requires filtering, with links to the JavaScript source code in the **Retainers** panel. | [Find DOM tree memory leaks ("Heap snapshot" profiling type > Detached)](./heap-snapshots.md#find-dom-tree-memory-leaks-heap-snapshot-profiling-type--detached) in _Record heap snapshots using the Memory tool ("Heap snapshot" profiling type)_. |
| **Detached Elements** tool | Shows detached elements only, as DOM tree nodes, with links to the JavaScript source code. | [Debug DOM memory leaks by using the Detached Elements tool](./dom-leaks.md) |


<!--[4]-->
<!-- ====================================================================== -->
## Find DOM tree memory leaks ("Detached elements" profiling type)

See [Debug DOM memory leaks ("Detached elements" profiling type)](./dom-leaks-memory-tool-detached-elements.md).


<!--[1]-->
<!-- ====================================================================== -->
## Find DOM tree memory leaks ("Heap snapshot" profiling type > Detached)

See [Record heap snapshots using the Memory tool ("Heap snapshot" profiling type)](./heap-snapshots.md).


<!-- ====================================================================== -->
## See also
<!-- todo: all links in article -->

* [Use Allocation instrumentation on timeline ("Allocations on timeline" profiling type)](./allocation-profiler.md)
* [Debug DOM memory leaks by using the Detached Elements tool](./dom-leaks.md)
* [Record heap snapshots using the Memory tool ("Heap snapshot" profiling type)](./heap-snapshots.md)
<!--
* [Detached Elements profiling type in Memory tool](../whats-new/2024/10/devtools-130.md#detached-elements-profiling-type-in-memory-tool) in _What's New in DevTools (Microsoft Edge 130)_.
-->

External:
* [Finding and debugging memory leaks in JavaScript with Chrome DevTools](https://slid.es/gruizdevilla/memory) - slide deck (by Gonzalo Ruiz de Villa), which also applies to Microsoft Edge DevTools.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/memory-problems/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).

<!-- [recording](/profile/evaluate-performance/timeline-tool#make-a-recording) -->
<!-- [hngd](https://jsfiddle.net/kaycebasques/tmtbw8ef/) -->
