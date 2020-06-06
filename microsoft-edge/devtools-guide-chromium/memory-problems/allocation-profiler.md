---
title: How to Use Allocation Instrumentation on Timeline
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/29/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
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

# How to Use Allocation Instrumentation on Timeline  

Use **Allocation instrumentation on timeline** to find objects that are not being properly garbage collected, and continue to retain memory.  

## How Allocation instrumentation on timeline works  

**Allocation instrumentation on timeline** combines the detailed snapshot information of the **heap profiler** with the incremental updating and tracking of the **Performance** panel.  Similarly, tracking heap allocation for objects involves starting a recording, performing a sequence of actions, and stopping the recording for analysis.  

<!--todo: add profile memory problems (heap profiler) section when available  -->  
<!--todo: add profile evaluate performance (Performance panel) section when available  -->  

**Allocation instrumentation on timeline** takes heap snapshots periodically throughout the recording \(as frequently as every 50 ms!\) and one final snapshot at the end of the recording.  

> ##### Figure 1  
> **Allocation instrumentation on timeline**  
> ![Allocation instrumentation on timeline][ImageObjectTracker]  

> [!NOTE]
> The number after the `@` is an object ID that persists across the multiple snapshots taken during the recording session.  The persistent object ID enables precise comparison between heap states.  Objects are moved during garbage collections, so displaying the address of an object makes no sense.  

## Enable Allocation Instrumentation on Timeline  

Follow these steps to begin using **Allocation instrumentation on timeline**.  

1.  [Open the DevTools][DevtoolsOpenIndex].  
1.  Open the **Memory** panel, select the **Allocation instrumentation on timeline** radio button.  
1.  Start recording.  

> ##### Figure 2  
> Record heap allocations profiler  
> ![Record heap allocations profiler][ImageRecordHeap]  

## Read a heap allocation timeline  

The heap allocation timeline shows where objects are being created and identifies the retaining path.  In [Figure 3](#figure-3), the bars at the top indicate when new objects are found in the heap.  

The height of each bar corresponds to the size of the recently allocated objects, and the color of the bars indicate whether or not those objects are still live in the final heap snapshot.  Blue bars indicate objects that are still live at the end of the timeline, Gray bars indicate objects that were allocated during the timeline, but have since been garbage collected.  

> ##### Figure 3  
> **Allocation instrumentation on timeline** snapshot  
> ![Allocation instrumentation on timeline snapshot][ImageCollected]  

<!--In [Figure 4](#figure-4), an action was performed 3 times.  The sample program caches five objects, so the last five blue bars are expected.  But the left-most blue bar indicates a potential problem.  -->  
<!--todo: redo figure 4 with multiple click actions  -->  

You are able to use the sliders in the timeline above to zoom into that particular snapshot and see the objects that were recently allocated at that point:  

> ##### Figure 4  
> Zoom into snapshot  
> ![Zoom into snapshot][ImageSliders]  

Clicking on a specific object in the heap shows the retaining tree in the bottom portion of the heap snapshot.  Examining the retaining path to the object should give you enough information to understand why the object was not collected, and you should make the necessary code changes to remove the unnecessary reference.  

## View memory allocation by function   

You are able to view memory allocation by JavaScript function.  See [Investigate memory allocation by function][DevtoolsMemoryProblemsIndexInvestigateMemoryAllocationFunction] for more information.  

<!--## Feedback   -->  

<!-- image links -->  

[ImageObjectTracker]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-memory-allocation-timeline-snapshot-highlighted.msft.png "Figure 1: Allocation instrumentation on timeline"  
[ImageRecordHeap]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-memory-allocation-instrumentation-on-timeline-selected.msft.png "Figure 2: Record heap allocations profiler"  
[ImageCollected]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-memory-allocation-timelines-snapshot.msft.png "Figure 3: Allocation instrumentation on timeline snapshot"  
[ImageSliders]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-memory-allocation-timeline-snapshot-highlighted-annotated.msft.png "Figure 4: Zoom into snapshot"  

<!-- links -->  

[DevToolsOpenIndex]: /microsoft-edge/devtools-guide-chromium/open "Open Microsoft Edge (Chromium) DevTools"
[DevtoolsMemoryProblemsIndexInvestigateMemoryAllocationFunction]: /microsoft-edge/devtools-guide-chromium/memory-problems/index#investigate-memory-allocation-by-function "Investigate memory allocation by function - Fix Memory Problems"  

<!--[HeapProfiler]: ../profile/memory-problems/heap-snapshots ""  -->  
<!--[PerformancePanel]: ../profile/evaluate-performance/timeline-tool ""  -->  

[MicrosoftEdgeChannel]: https://www.microsoftedgeinsider.com/download "Download a Microsoft Edge Channel"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/memory-problems/allocation-profiler) and is authored by [Meggin Kearney][MegginKearney] \(Technical Writer\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
[MegginKearney]: https://developers.google.com/web/resources/contributors/megginkearney  
