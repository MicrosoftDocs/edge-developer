---
title: Fix Memory Problems
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/10/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->





# Fix Memory Problems   



Learn how to use Microsoft Edge and DevTools to find memory issues that affect page performance, including memory leaks, memory bloat, and frequent garbage collections.  

### Summary  

*   Find out how much memory your page is currently using with the Microsoft Edge Task Manager.  
*   Visualize memory usage over time with Timeline recordings.  
*   Identify detached DOM trees \(a common cause of memory leaks\) with Heap Snapshots.  
*   Find out when new memory is being allocated in your JavaScript heap \(JS heap\) with Allocation Timeline recordings.  

## Overview  

In the spirit of the **RAIL** performance model, the focus of your performance efforts should be your users.  

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

## Monitor memory use in realtime with the Microsoft Edge Task Manager  

Use the Microsoft Edge Task Manager as a starting point to your memory issue investigation.  The Task Manager is a realtime monitor that tells you how much memory a page is currently using.  

1.  Press `Shift`+`Esc` or go to the Microsoft Edge main menu and select **More tools** > **Task manager** to open the Task Manager.  
    
    > ##### Figure 1  
    > Opening the task manager  
    > ![Opening the task manager][ImageTaskManager]  
    
1.  Right-click on the table header of the Task Manager and enable **JavaScript memory**.  
    
    > ##### Figure 2  
    > Enable javascript memory  
    > ![Enable javascript memory][ImageJavascriptMemory]  
    
These two columns tell you different things about how your page is using memory:  

*   The **Memory** column represents native memory.  DOM nodes are stored in native memory.  If this value is increasing, DOM nodes are getting created.  
*   The **JavaScript Memory** column represents the JS heap.  This column contains two values.  The value you are interested in is the live number \(the number in parentheses\).  The live number represents how much memory the reachable objects on your page are using.  If this number is increasing, either new objects are being created, or the existing objects are growing.  

<!--*   live number reference: https://groups.google.com/d/msg/google-chrome-developer-tools/aTMVGoNM0VY/bLmf3l2CpJ8J  -->  

## Visualize memory leaks with Timeline recordings  

You may also use the Timeline panel as another starting point in your investigation.  The Timeline panel helps you visualize the memory use of a page over time.  

1.  Open the **Timeline** panel on DevTools.  
1.  Enable the **Memory** checkbox.  
1.  Make a **recording**.  

<!--todo: add make a recoding section when available.  -->  

> [!TIP]
> It is a good practice to start and end your recording with a forced garbage collection.  Click the **collect garbage** ![force garbage collection][ImageForceGarbageCollectionIcon] button while recording to force garbage collection.  

To demonstrate Timeline memory recordings, consider the code below:  

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

Every time that the button referenced in the code is pressed, ten thousand `div` nodes are appended to the document body, and a string of one million `x` characters is pushed onto the `x` array.  Running this code produces a Timeline recording like [Figure 3](#figure-3).  

> ##### Figure 3  
> Simple growth  
> ![Simple growth][ImageSimpleGrowth]  

First, an explanation of the user interface.  The **HEAP** graph in the **Overview** pane \(below **NET**\) represents the JS heap.  Below the **Overview** pane is the **Counter** pane.  Here you are able to see memory usage broken down by JS heap \(same as **HEAP** graph in the **Overview** pane\), documents, DOM nodes, listeners, and GPU memory.  Disabling a checkbox hides it from the graph.  

Now, an analysis of the code compared with [Figure 3](#figure-3).  If you look at the node counter \(the green graph\) you are able to see that it matches up cleanly with the code.  The node count increases in discrete steps.  You may presume that each increase in the node count is a call to `grow()`.  The JS heap graph \(the blue graph\) is not as straightforward.  In keeping with best practices, the first dip is actually a forced garbage collection \(achieved by pressing the  **collect garbage** ![force garbage collection][ImageForceGarbageCollectionIcon] button\).  
As the recording progresses you are able to see that the JS heap size spikes.  This is natural and expected:  the JavaScript code is creating the DOM nodes on every button click and doing a lot of work when it creates the string of one million characters.  The key thing here is the fact that the JS heap ends higher than it began \(the "beginning" here being the point after the forced garbage collection\).  In the real world, if you saw this pattern of increasing JS heap size or node size, it may potentially define a memory leak.  

## Discover detached DOM tree memory leaks with Heap Snapshots  

A DOM node is only garbage collected when there are no references to the node from either the DOM tree or JavaScript code of the page.  A node is said to be "detached" when it is removed from the DOM tree but some JavaScript still references it.  Detached DOM nodes are a common cause of memory leaks.  This section teaches you how to use the heap profilers in DevTools to identify detached nodes.  

Here is a simple example of detached DOM nodes.  

```javascript
var detachedNodes;
function create() {
    var ul = document.createElement('ul');
    for (var i = 0; i < 10; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);
    }
    detachedNodes = ul;
}
document.getElementById('create').addEventListener('click', create);
```  

Clicking the button referenced in the code creates a `ul` node with ten `li` children.  These nodes are referenced by the code but do not exist in the DOM tree, so each is detached.  

Heap snapshots are one way to identify detached nodes.  As the name implies, heap snapshots show you how memory is distributed among the JS objects and DOM nodes for your page at the point of time of the snapshot.  

To create a snapshot, open DevTools and go to the **Profiles** panel, select the **Take Heap Snapshot** radio button, and then press the **Take Snapshot** button.  

> ##### Figure 4  
> Take heap snapshot  
> ![Take heap snapshot][ImageTakeHeapSnapshot]  

The snapshot may take some time to process and load.  After it is finished, select it from the left-hand panel \(named **HEAP SNAPSHOTS**\).  

Type `Detached` in the **Class filter** textbox to search for detached DOM trees.  

> ##### Figure 5  
> Filtering for detached nodes  
> ![Filtering for detached nodes][ImageFilteringForDetachedNodes]  

Expand the carats to investigate a detached tree.  

> ##### Figure 6  
> Investigating detached tree  
> ![Investigating detached tree][ImageInvestigatingDetachedTree]  

Nodes highlighted yellow have direct references to them from the JavaScript code.  Nodes highlighted red do not have direct references.  They are only alive because they are part of the tree for the yellow node.  In general, you want to focus on the yellow nodes.  Fix your code so that the yellow node is not alive for longer than it needs to be, and you also get rid of the red nodes that are part of the tree for the yellow node.  

Click on a yellow node to investigate it further.  In the **Objects** pane you are able to see more information about the code that is referencing it.  For example, in [Figure 7](#figure-7) you are able to see that the `detachedTree` variable is referencing the node.  To fix this particular memory leak, you should study the code that uses `detachedTree` and ensure that the reference to the node is removed when it is no longer needed.

> ##### Figure 7  
> Investigating a yellow node  
> ![Investigating a yellow node][ImageInvestigatingYellowNode]  

## Identify JS heap memory leaks with Allocation Timelines  

The Allocation Timeline is another tool that may help you track down memory leaks in your JS heap.  

To demonstrate the Allocation Timeline consider the following code:  

```javascript
var x = [];
function grow() {
    x.push(new Array(1000000).join('x'));
}
document.getElementById('grow').addEventListener('click', grow);
```

Every time that the button referenced in the code is pushed, a string of one million characters is added to the `x` array.  

To record an Allocation Timeline, open DevTools, go to the **Profiles** panel, select the **Record Allocation Timeline** radio button, press the **Start** button, perform the action that you suspect is causing the memory leak, and then press the **stop recording** ![stop recording][ImageStopRecordingIcon] button when you are done.  

As you are recording, notice if any blue bars show up on the Allocation Timeline, like in [Figure 8](#figure-8).  

> ##### Figure 8  
> New allocations  
> ![New allocations][ImageNewAllocations]  

Those blue bars represent new memory allocations.  Those new memory allocations are your candidates for memory leaks.  You are able to zoom on a bar to filter the **Constructor** pane to only show objects that were allocated during the specified timeframe.  

> ##### Figure 9  
> Zoomed allocation timeline  
> ![Zoomed allocation timeline][ImageZoomedAllocationTimeline]  

Expand the object and click on the value to view more details in the **Object** pane.  For example, in [Figure 10](#figure-10), by viewing the details of the object that was newly allocated, you should be able to see that it was allocated to the `x` variable in the `Window` scope.  

> ##### Figure 10 
> Object details  
> ![Object details][ImageObjectDetail]  

## Investigate memory allocation by function   

Use the **Record Allocation Profiler** type to view memory allocation by JavaScript function.  

> ##### Figure 11  
> Record Allocation Profiler  
> ![Record Allocation Profiler][ImageRecordAllocationProfiler]  

1.  Select the **Record Allocation Profiler** radio button.  If there is a worker on the page, you are able to select that as the profiling target using the dropdown menu next to the **Start** button.  
1.  Press the **Start** button.  
1.  Perform the actions on the page which you want to investigate.  
1.  Press the **Stop** button when you have finished all of your actions.  

DevTools shows you a breakdown of memory allocation by function.  The default view is **Heavy (Bottom Up)**, which displays the functions that allocated the most memory at the top.  

> ##### Figure 12  
> Allocation profile  
>![Allocation profile][ImageAllocationProfile]  

## Spot frequent garbage collections  

If your page appears to pause frequently, then you may have garbage collection issues.  

You are able to use either the Microsoft Edge Task Manager or Timeline memory recordings to spot frequent garbage collections.  In the Task Manager, frequently rising and falling **Memory** or **JavaScript Memory** values represent frequent garbage collections.  In Timeline recordings, frequently rising and falling JS heap or node count graphs indicate frequent garbage collections.  

Once you have identified the problem, you are able to use an Allocation Timeline recording to find out where memory is being allocated and which functions are causing the allocations.  

<!--## Feedback   -->  



<!-- image links -->  

[ImageForceGarbageCollectionIcon]: images/collect-garbage-icon.msft.png  
[ImageStopRecordingIcon]: images/stop-recording-icon.msft.png  

[ImageTaskManager]: images/task-manager.msft.png "Figure 1: Opening the task manager"  
[ImageJavascriptMemory]: images/js-memory.msft.png "Figure 2: Enable javascript memory"  
[ImageSimpleGrowth]: images/simple-growth.msft.png "Figure 3: Simple Growth"  
[ImageTakeHeapSnapshot]: images/take-heap-snapshot.msft.png "Figure 4: Take heap snapshot"  
[ImageFilteringForDetachedNodes]: images/detached-filter.msft.png "Figure 5: Filtering for detached nodes"  
[ImageInvestigatingDetachedTree]: images/expanded-detached.msft.png "Figure 6: Investigating detached tree"  
[ImageInvestigatingYellowNode]: images/yellow-node.msft.png "Figure 7 : Investigating a yellow node"  
[ImageNewAllocations]: images/new-allocations.msft.png "Figure 8: New allocations"  
[ImageZoomedAllocationTimeline]: images/zoomed-allocation-timeline.msft.png "Figure 9: Zoomed allocation timeline"  
[ImageObjectDetail]: images/object-details.msft.png "Figure 10: Object details"  
[ImageRecordAllocationProfiler]: images/record-allocation-profile.msft.png "Figure 11: Record Allocation Profiler"  
[ImageAllocationProfile]: images/allocation-profile.msft.png "Figure 12: Allocation profile"  

<!-- links -->  

<!--[RAIL]: /profile/evaluate-performance/rail  -->
<!--[recording]: /profile/evaluate-performance/timeline-tool#make-a-recording ""  -->  

<!--[hngd]: https://jsfiddle.net/kaycebasques/tmtbw8ef/  -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/memory-problems/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
