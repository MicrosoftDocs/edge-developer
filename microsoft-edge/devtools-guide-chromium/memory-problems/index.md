---
description: Learn how to use Microsoft Edge and DevTools to find memory issues that affect page performance, including memory leaks, memory bloat, and frequent garbage collections.
title: Fix memory problems
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
# Fix memory problems

Learn how to use Microsoft Edge and DevTools to find memory issues that affect page performance, including memory leaks, memory bloat, and frequent garbage collections.

### Summary

*   Find out how much memory your page is currently using with the Microsoft Edge Browser Task Manager.
*   Visualize memory usage over time with the **Memory** panel.
*   Identify detached DOM trees (a common cause of memory leaks) with **Heap snapshot**.
*   Find out when new memory is being allocated in your JavaScript heap (JS heap) with **Allocation instrumentation on timeline**.


<!-- ====================================================================== -->
## Overview

In the spirit of the **RAIL**<!-- [RAIL](/profile/evaluate-performance/rail) --> performance model, the focus of your performance efforts should be your users.

<!--todo: add RAIL section when available  -->

Memory issues are important because they are often perceivable by users.  Users may perceive memory issues in the following
ways:

*   **The performance of a page gets progressively worse over time**.  This is possibly a symptom of a memory leak.  A memory leak is when a bug in the page causes the page to progressively use more and more memory over time.
*   **The performance of a page is consistently bad**.  This is possibly a symptom of memory bloat.  Memory bloat is when a page uses more memory than is necessary for optimal page speed.
*   **The performance of a page is delayed or appears to pause frequently**.  This is possibly a symptom of frequent garbage collections.  Garbage collection is when the browser reclaims memory.  The browser decides when this happens.  During collections, all script running is paused.  So if the browser is garbage collecting a lot, script runtime is going to get paused a lot.

### Memory bloat: how much is "too much"?

A memory leak is easy to define.  If a site is progressively using more and more memory, then you have a leak.  But memory bloat is a bit harder to pin down.  What qualifies as "using too much memory"?

There are no hard numbers here, because different devices and browsers have different capabilities.  The same page that
runs smoothly on a high-end smartphone may crash on a low-end smartphone.

The key here is to use the RAIL model and focus on your users.  Find out what devices are popular with your users, and then test out your page on those devices.  If the experience is consistently bad, the page may be exceeding the memory capabilities of those devices.


<!-- ====================================================================== -->
## Monitor memory use in realtime with the Microsoft Edge Browser Task Manager

Use the Microsoft Edge Browser Task Manager as a starting point to your memory issue investigation.  The Microsoft Edge Browser Task Manager is a realtime monitor that tells you how much memory a page is currently using.

1.  Select `Shift`+`Esc` or navigate to the Microsoft Edge main menu and choose **More tools** > **Browser Task Manager** to open the Microsoft Edge Browser Task Manager.

    :::image type="complex" source="../media/memory-problems-bing-settings-more-tools-browser-task-manager.msft.png" alt-text="Opening the Microsoft Edge Browser Task Manager" lightbox="../media/memory-problems-bing-settings-more-tools-browser-task-manager.msft.png":::
       Figure 1:  Opening the Microsoft Edge Browser Task Manager
    :::image-end:::

1.  Hover on the table header of the Microsoft Edge Browser Task Manager, open the contextual menu (right-click), and enable **JavaScript memory**.

    :::image type="complex" source="../media/memory-problems-bing-browser-task-manager-javascript-memory.msft.png" alt-text="Enable JavaScript memory" lightbox="../media/memory-problems-bing-browser-task-manager-javascript-memory.msft.png":::
       Figure 2:  Enable JavaScript memory
    :::image-end:::

These two columns tell you different things about how your page is using memory.

*   The **Memory** column represents native memory.  DOM nodes are stored in native memory.  If this value is increasing, DOM nodes are getting created.
*   The **JavaScript Memory** column represents the JS heap.  This column contains two values.  The value you are interested in is the live number (the number in parentheses).  The live number represents how much memory the reachable objects on your page are using.  If this number is increasing, either new objects are being created, or the existing objects are growing.

<!--*   live number reference: https://groups.google.com/d/msg/google-chrome-developer-tools/aTMVGoNM0VY/bLmf3l2CpJ8J  -->


<!-- ====================================================================== -->
## Visualize memory leaks with Performance panel

You may also use the Performance panel as another starting point in your investigation.  The Performance panel helps you visualize the memory use of a page over time.

1.  Open the **Performance** panel on DevTools.
1.  Enable the **Memory** checkbox.
1.  [Make a recording](../evaluate-performance/reference.md#record-performance).

> [!TIP]
> It is a good practice to start and end your recording with a forced garbage collection.  To force garbage collection, choose the **collect garbage** ![force garbage collection](../media/collect-garbage-icon.msft.png) button while recording.

To demonstrate memory recordings, consider the code below:

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

Every time that the button referenced in the code is chosen, ten thousand `div` nodes are appended to the document body, and a string of one million `x` characters is pushed onto the `x` array.  Running the previous code sample produces a recording in the **Performance** panel like the following figure.

:::image type="complex" source="../media/memory-problems-glitch-example-1-performance-memory.msft.png" alt-text="Simple growth" lightbox="../media/memory-problems-glitch-example-1-performance-memory.msft.png":::
   Figure 3:  Simple growth
:::image-end:::

First, an explanation of the user interface.  The **HEAP** graph in the **Overview** pane (below **NET**) represents the JS heap.  Below the **Overview** pane is the **Counter** pane.  The memory usage is broken down by JS heap (same as **HEAP** graph in the **Overview** pane), documents, DOM nodes, listeners, and GPU memory.  Turn off a checkbox to hide it from the graph.

Now, an analysis of the code compared with the previous figure.  If you review the node counter (the green graph), it matches up cleanly with the code.  The node count increases in discrete steps.  You may presume that each increase in the node count is a call to `grow()`.  The JS heap graph (the blue graph) is not as straightforward.  In keeping with best practices, the first dip is actually a forced garbage collection (choose the  **collect garbage** ![force garbage collection](../media/collect-garbage-icon.msft.png) button).  As the recording progresses, the JS heap size spikes are displayed.  This is natural and expected:  the JavaScript code is creating the DOM nodes on every button you choose and doing a lot of work when it creates the string of one million characters.  The key thing here is the fact that the JS heap ends higher than it began (the "beginning" here being the point after the forced garbage collection).  In the real world, if you saw this pattern of increasing JS heap size or node size, it may potentially define a memory leak.

<!--todo: the Heap snapshots and Profiles panel are not found in Edge  -->


<!-- ====================================================================== -->
## Discover detached DOM tree memory leaks with Heap Snapshots

A DOM node is only garbage collected when there are no references to the node from either the DOM tree or JavaScript code running on the page.  A node is said to be "detached" when it is removed from the DOM tree but some JavaScript still references it.  Detached DOM nodes are a common cause of memory leaks.  This section teaches you how to use the heap profilers in DevTools to identify detached nodes.

Here is a simple example of detached DOM nodes.

```javascript
var detachedTree;

function create() {
    var ul = document.createElement('ul');
    for (var i = 0; i < 10; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);
    }
    detachedTree = ul;
}
document.getElementById('create').addEventListener('click', create);
```

Choosing the button referenced in the code creates a `ul` node with ten `li` children.  The nodes are referenced by the code but do not exist in the DOM tree, so each is detached.

Heap snapshots are one way to identify detached nodes.  As the name implies, heap snapshots show you how memory is distributed among the JS objects and DOM nodes for your page at the point of time of the snapshot.

To create a snapshot, open DevTools and navigate to the **Memory** panel, choose the **Heap snapshot** radio button > **Take snapshot** button.

:::image type="complex" source="../media/memory-problems-glitch-example-12-memory-heap-snapshot.msft.png" alt-text="Take heap snapshot" lightbox="../media/memory-problems-glitch-example-12-memory-heap-snapshot.msft.png":::
   Figure 4:  Take heap snapshot
:::image-end:::

The snapshot may take some time to process and load.  After it is finished, select it from the left-hand panel (named **HEAP SNAPSHOTS**).

Type `Detached` in the **Class filter** textbox to search for detached DOM trees.

:::image type="complex" source="../media/memory-problems-glitch-example-12-memory-heap-snapshot-filter-detached.msft.png" alt-text="Filtering for detached nodes" lightbox="../media/memory-problems-glitch-example-12-memory-heap-snapshot-filter-detached.msft.png":::
   Figure 5:  Filtering for detached nodes
:::image-end:::

Expand the carats to investigate a detached tree.

:::image type="complex" source="../media/memory-problems-glitch-example-12-memory-heap-snapshot-filter-detached-expanded.msft.png" alt-text="Investigating detached tree" lightbox="../media/memory-problems-glitch-example-12-memory-heap-snapshot-filter-detached-expanded.msft.png":::
   Figure 6:  Investigating detached tree
:::image-end:::

<!--Nodes highlighted yellow have direct references to them from the JavaScript code.  Nodes highlighted red do not have direct references.  They are only alive because they are part of the tree for the yellow node.  In general, you want to focus on the yellow nodes.  Fix your code so that the yellow node is not alive for longer than it needs to be, and you also get rid of the red nodes that are part of the tree for the yellow node.  -->

Choose a node to investigate it further.  In the **Objects** pane, you may review more information about the code that is referencing it.  For example, in the following figure, the `detachedTree` variable is referencing the node.  To fix the particular memory leak, you should study the code that uses the `detachedTree` variable and ensure that the reference to the node is removed when it is no longer needed.

:::image type="complex" source="../media/memory-problems-glitch-example-12-memory-heap-snapshot-filter-detached-expanded-selected.msft.png" alt-text="Investigating a node" lightbox="../media/memory-problems-glitch-example-12-memory-heap-snapshot-filter-detached-expanded-selected.msft.png":::
   Figure 7:  Investigating a node
:::image-end:::

<!--todo: the allocation timeline does not appear in the DevTools in Edge  -->


<!-- ====================================================================== -->
## Identify JS heap memory leaks with Allocation instrumentation on timeline

**Allocation instrumentation on timeline** is another tool that may help you track down memory leaks in your JS heap.

Demonstrate **Allocation instrumentation on timeline**  using the following code.

```javascript
var x = [];
function grow() {
    x.push(new Array(1000000).join('x'));
}
document.getElementById('grow').addEventListener('click', grow);
```

Every time that the button referenced in the code is pushed, a string of one million characters is added to the `x` array.

To record an Allocation instrumentation on timeline, open DevTools, navigate to the **Memory** panel, choose the **Allocation instrumentation on timeline** radio button, choose the **Start** button, perform the action that you suspect is causing the memory leak, and then choose the **Stop recording heap profile** ![stop recording](../media/stop-recording-icon.msft.png) button when you are done.

As you are recording, notice if any blue bars show up on the Allocation instrumentation on timeline, like in the following figure.

:::image type="complex" source="../media/memory-problems-glitch-example-13-allocation-timeline-snapshot-all.msft.png" alt-text="New allocations" lightbox="../media/memory-problems-glitch-example-13-allocation-timeline-snapshot-all.msft.png":::
   Figure 8:  New allocations
:::image-end:::

Those blue bars represent new memory allocations.  Those new memory allocations are your candidates for memory leaks.  You are able to zoom on a bar to filter the **Constructor** pane to only show objects that were allocated during the specified timeframe.

:::image type="complex" source="../media/memory-problems-glitch-example-13-allocation-timeline-snapshot-focused.msft.png" alt-text="Zoomed allocation timeline" lightbox="../media/memory-problems-glitch-example-13-allocation-timeline-snapshot-focused.msft.png":::
   Figure 9:  Zoomed allocation timeline
:::image-end:::

Expand the object and select the value to view more details in the **Object** pane.  For example, in the following figure, in the details of the newly allocated object indicates that it was allocated to the `x` variable in the `Window` scope.

:::image type="complex" source="../media/memory-problems-glitch-example-13-allocation-timeline-snapshot-focused-constructor-expanded.msft.png" alt-text="Object details" lightbox="../media/memory-problems-glitch-example-13-allocation-timeline-snapshot-focused-constructor-expanded.msft.png":::
   Figure 10:  Object details
:::image-end:::


<!-- ====================================================================== -->
## Investigate memory allocation by function

Use the **Allocation sampling** profiling type to view memory allocation by JavaScript function.

:::image type="complex" source="../media/memory-problems-glitch-example-05-memory-allocation-sampling.msft.png" alt-text="Record Allocation sampling" lightbox="../media/memory-problems-glitch-example-05-memory-allocation-sampling.msft.png":::
   Figure 11:  Record Allocation sampling
:::image-end:::

1.  Choose the **Allocation sampling** radio button.  If there is a worker on the page, you are able to select that as the profiling target using the dropdown menu next to the **Start** button.
1.  Choose the **Start** button.
1.  Complete the actions on the webpage which you want to investigate.
1.  Choose the **Stop** button when you have finished all of your actions.

DevTools shows you a breakdown of memory allocation by function.  The default view is **Heavy (Bottom Up)**, which displays the functions that allocated the most memory at the top.

:::image type="complex" source="../media/memory-problems-glitch-example-05-memory-allocation-sampling-heavy-bottom-up.msft.png" alt-text="Allocation sampling" lightbox="../media/memory-problems-glitch-example-05-memory-allocation-sampling-heavy-bottom-up.msft.png":::
   Figure 12:  Allocation sampling
:::image-end:::


<!-- ====================================================================== -->
## Spot frequent garbage collections

If your page appears to pause frequently, then you may have garbage collection issues.

You are able to use either the Microsoft Edge Browser Task Manager or Performance memory recordings to spot frequent garbage collection.  In the Microsoft Edge Browser Task Manager, frequently rising and falling **Memory** or **JavaScript Memory** values represent frequent garbage collection.  In Performance recordings, frequent changes (rising and falling) to the JS heap or node count graphs indicate frequent garbage collection.

After you have identified the problem, you are able to use an **Allocation instrumentation on timeline** recording to find out where memory is being allocated and which functions are causing the allocations.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/memory-problems/index) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).

<!-- [recording](/profile/evaluate-performance/timeline-tool#make-a-recording) -->
<!-- [hngd](https://jsfiddle.net/kaycebasques/tmtbw8ef/) -->
