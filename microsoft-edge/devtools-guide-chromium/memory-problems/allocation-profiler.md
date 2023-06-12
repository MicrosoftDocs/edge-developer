---
title: Use Allocation instrumentation on timeline
description: Use Allocation instrumentation on timeline to find objects that aren't being properly garbage collected, and continue to retain memory.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 05/04/2021
---
<!-- Copyright Meggin Kearney

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License. -->
# Use Allocation instrumentation on timeline

<!-- title in other repo:
How to Use the Allocation Profiler Tool -->

In the **Memory** tool, use the **Allocation instrumentation on timeline** radio button to find objects that aren't being properly garbage-collected, and continue to retain memory.


<!-- ====================================================================== -->
## How Allocation instrumentation on timeline works

**Allocation instrumentation on timeline** combines the detailed snapshot information of the [heap profiler](heap-snapshots.md) with the incremental updating and tracking of the **Performance** tool.  Similarly, tracking heap allocation for objects involves starting a recording, performing a sequence of actions, and stopping the recording for analysis.

<!--todo: add profile memory problems (heap profiler) section when available  -->
<!--todo: add profile evaluate performance (Performance tool) section when available  -->

**Allocation instrumentation on timeline** takes heap snapshots periodically throughout the recording (as frequently as every 50 ms) and one final snapshot at the end of the recording.

![Allocation instrumentation on timeline](../media/memory-problems-memory-allocation-timeline-snapshot-highlighted.msft.png)

> [!NOTE]
> The number after the `@` is an object ID that persists across the multiple snapshots taken during the recording session.  The persistent object ID enables precise comparison between heap states.  Objects are moved during garbage collections, so displaying the address of an object makes no sense.


<!-- ====================================================================== -->
## Enable Allocation Instrumentation on Timeline

To begin using **Allocation instrumentation on timeline**:

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).  DevTools opens.

1. In DevTools, on the main toolbar, select the **Memory** tab.  If that tab isn't visible, click the **More tabs** (![More tabs icon](../media/more-tabs-icon-light-theme.png)) button, or else the **More Tools** (![More Tools icon](../media/more-tools-icon-light-theme.png)) button.

1. Select the **Allocation instrumentation on timeline** radio button.

1. Start recording.

The record heap allocations profiler:

![Record heap allocations profiler.  Use the 'Allocation instrumentation on timeline' radio button in the Memory tool](../media/memory-problems-memory-allocation-instrumentation-on-timeline-selected.msft.png)


<!-- ====================================================================== -->
## Read a heap allocation timeline

The heap allocation timeline shows where objects are being created and identifies the retaining path.  In the following figure, the bars at the top indicate when new objects are found in the heap.

The height of each bar corresponds to the size of the recently allocated objects, and the color of the bars indicate whether or not those objects are still live in the final heap snapshot.  Blue bars indicate objects that are still live at the end of the timeline, Gray bars indicate objects that were allocated during the timeline, but have since been garbage collected.

![Allocation instrumentation on timeline snapshot](../media/memory-problems-memory-allocation-timelines-snapshot.msft.png)

<!-- In the following figure, an action was performed 3 times.  The sample program caches five objects, so the last five blue bars are expected.  But the left-most blue bar indicates a potential problem. -->
<!-- todo: redo figure 4 with multiple click actions -->

You can use the sliders in the timeline above to zoom into that particular snapshot and review the objects that were recently allocated at that point:

![Zoom into snapshot](../media/memory-problems-memory-allocation-timeline-snapshot-highlighted-annotated.png)

Clicking on a specific object in the heap shows the retaining tree in the bottom portion of the heap snapshot.  Examining the retaining path to the object should give you enough information to understand why the object was not collected, and you should make the necessary code changes to remove the unnecessary reference.


<!-- ====================================================================== -->
## View memory allocation by function

You can view memory allocation by JavaScript function.  See [Investigate memory allocation by function](index.md#investigate-memory-allocation-by-function).


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/memory-problems/allocation-profiler/) and is authored by [Meggin Kearney](https://developers.google.com/web/resources/contributors#meggin-kearney) (Technical Writer).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
