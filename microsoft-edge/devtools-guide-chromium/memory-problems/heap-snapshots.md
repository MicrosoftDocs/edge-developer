---
title: How to Record Heap Snapshots
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/12/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Meggin Kearney 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License. -->





# How to Record Heap Snapshots   



Learn how to record heap snapshots with the Microsoft Edge DevTools heap profiler and find memory leaks.  

The Microsoft Edge DevTools heap profiler shows memory distribution by the JavaScript objects and related DOM nodes
of your page.  <!--See also [Objects retaining tree][DevtoolsProfileMemoryProblems101ObjectsRetainingTree].  -->  
Use it to take JS heap snapshots, analyze memory graphs, compare snapshots, and find memory leaks.  

<!--todo: Add profile memory problems memory 101 (Objects retaining tree) section when available  -->  

## Take a snapshot  

On the Profiles panel, choose **Take Heap Snapshot**, then click **Start** or press `Cmd`+`E` or `Ctrl`+`E`:  

> ##### Figure 1  
> Select profiling type  
> ![Select profiling type][ImageProfilingType]  

**Snapshots** are initially stored in the renderer process memory.  
They are transferred to the DevTools on demand, when you click on the snapshot icon to view it.  

After the snapshot has been loaded into DevTools and has been parsed, the number below the snapshot title appears and shows the total size of the **reachable JavaScript objects**:  

<!--todo: add profile memory problems memory 101 (reachable JavaScript objects) section when available  -->  

> ##### Figure 2  
> Total size of reachable objects  
> ![Total size of reachable objects][ImageTotalSize]  

> [!NOTE]
> Only reachable objects are included in snapshots.  Also, taking a snapshot always starts with a garbage collection.  

## Clear snapshots  

Remove snapshots \(both from DevTools and renderers memory\) by pressing the Clear all profiles icon:  

> ##### Figure 3  
> Remove snapshots  
> ![Remove snapshots][ImageRemoveSnapshots]  

Closing the DevTools window does not delete profiles from the renderers memory.  When reopening DevTools, all previously taken snapshots reappear in the list of snapshots.  

> [!NOTE]
> Example:  Try out this example of [scattered objects][DevtoolsMemoryExample3] and profile it using the Heap Profiler.  You should see a number of \(object\) item allocations.  

## View snapshots  

View snapshots from different perspectives for different tasks.  

**Summary view** shows objects grouped by the constructor name.  Use it to hunt down objects \(and the memory use\) based on type grouped by constructor name.  It is particularly helpful for **tracking down DOM leaks**.

<!--todo: add profile memory problems memory diagnosis (tracking down DOM leaks) section when available  -->  

**Comparison view** displays difference between two snapshots. Use it to compare two (or more) memory snapshots of before and after an operation.  Inspecting the delta in freed memory and reference count lets you confirm the presence and cause of a memory leak.  

**Containment view** allows exploration of heap contents.  It provides a better view of object structure, helping analyze objects referenced in the global namespace \(window\) to find out what is keeping them around.  Use it to analyze closures and dive into your objects at a low level.  

**Dominators view** shows the **dominators tree** and may be useful to find accumulation points.  
This view helps confirm that no unexpected references to objects are still hanging around and that deletion/garbage collection is actually working.  

<!--todo: add profile memory problems memory 101 (dominators tree) section when available  -->  

To switch between views, use the selector at the bottom of the view:  

> ##### Figure 4  
> Switch views selector  
> ![Switch views selector][ImageSwitchViews]  

> [!NOTE]
> Not all properties are stored on the JavaScript heap.  Properties implemented using getters that run native code are not captured.  Also, non-string values such as numbers are not captured.  

### Summary view  

Initially, a snapshot opens in the Summary view, displaying object totals, which may be expanded to show instances:  

> ##### Figure 5  
> Summary view  
> ![Summary view][ImageSummaryView]  

Top-level entries are "total" lines.  The entries display:  

*   **Constructor** represents all objects created using this constructor.  
*   **Number of object instances** is displayed in the # column.  
*   **Shallow size** column displays the sum of shallow sizes of all objects created by a certain constructor function.  The shallow size is the size of memory held by an object \(generally, arrays and strings have larger shallow sizes\).  See also **Object sizes**.  
*   **Retained size** column displays the maximum retained size among the same set of objects.  The size of memory that younare able to free after an object is deleted \(and the dependents are made no longer reachable\) is called the retained size.  See also **Object sizes**.  
*   **Distance** displays the distance to the root using the shortest simple path of nodes.  

<!--todo: add profile memory problems memory 101 (Object sizes) section when available  -->  

After expanding a total line in the upper view, all of the instances are displayed. For each instance, the shallow and retained sizes are displayed in the corresponding columns.  The number after the `@` character is the unique ID of the object, allowing you to compare heap snapshots on per-object basis.  

Remember that yellow objects have JavaScript references on them and red objects are detached nodes which are referenced from one with a yellow background.  

**What do the various constructor \(group\) entries in the Heap profiler correspond to?**  

> ##### Figure 6  
> Constructor groups  
> ![Constructor groups][ImageConstructorGroups]  

*   **(global property)**  –  intermediate objects between a global object \(like `window`\) and an object referenced by it.  If an object is created using a constructor Person and is held by a global object, the retaining path would look like [global] > \(global property\) > Person.  This contrasts with the norm, where objects directly reference each other.  We have intermediate objects for performance reasons.  Globals are modified regularly and property access optimizations do a good job for non-global objects are not applicable for globals.  

*   **(roots)**  –  The root entries in the retaining tree view are the entities that have references to the selected object.  The entries may also be references created by the engine for engine-specific purposes.  The engine has caches which reference objects, but all such references are weak and do not prevent an object from being collected given that there are no truly strong references.  

*   **(closure)**  –  a count of references to a group of objects through function closures  

*   **(array, string, number, regexp)**  –  a list of object types with properties which reference an Array, String, Number, or regular expression.  

*   **(compiled code)**  –  simply, everything related to compiled code.  Script is similar to a function but corresponds to a `<script>` body.  SharedFunctionInfos \(SFI\) are objects standing between functions and compiled code.  Functions are usually have a context, while SFIs do not.  

*   **HTMLDivElement**, **HTMLAnchorElement**, **DocumentFragment**, and so on  –  references to elements or document objects of a particular type referenced by your code.  

> [!NOTE]
> Example:  Try this **demo page** to understand how the Summary view may be used.  

<!--todo: add heap profiling summary section when available -->  

### Comparison view  

Find leaked objects by comparing multiple snapshots to each other.  To verify that a certain application operation does not create leaks \(for example, usually a pair of direct and reverse operations, like opening a document, and then closing it, should not leave any garbage\), you may follow the scenario below:  

1.  Take a heap snapshot before performing an operation.  
1.  Perform an operation \(interact with a page in some way that you believe to be causing a leak\).  
1.  Perform a reverse operation \(do the opposite interaction and repeat it a few times\).  
1.  Take a second heap snapshot and change the view of this one to Comparison, comparing it to snapshot 1.  

In the Comparison view, the difference between two snapshots is displayed.  When expanding a total entry, added and deleted object instances are shown:  

> ##### Figure 7  
> Comparison view  
> ![Comparison view][ImageComparisonView]  

> [!NOTE]
> Example:  Try this **demo page** to get an idea how to use snapshot comparison for detecting leaks.  

<!--todo: add HeapProfilingComparison section when available  -->  

### Containment view  

The Containment view is essentially a "bird's eye view" of the objects structure of your application.  It allows you to peek inside function closures, to observe VM internal objects that together make up your JavaScript objects, and to understand how much memory your application uses at a very low level.  

The view provides several entry points:  

*   **DOMWindow objects** are objects considered as "global" objects for JavaScript code.  
*   **GC roots** are the actual GC roots used by the garbage of the VM.  GC roots are comprised of built-in object maps, symbol tables, VM thread stacks, compilation caches, handle scopes, and global handles.  
*   **Native objects** are browser objects "pushed" inside the JavaScript virtual machine to allow automation, for example, DOM nodes, CSS rules.  

> ##### Figure 8  
> Containment view  
> ![Containment view][ImageContainmentView]  

> [!NOTE]
> Example:  Try this **demo page** for finding out how to explore closures and event handlers using the view.  

<!--todo: add heap profiling containment section when available  -->  

> [!TIP]
> A tip about closures.  Name the functions so you are able to easily distinguish between closures in the snapshot.  For example, this example does not use named functions:  
> 
> ```javascript
> function createLargeClosure() {
>     var largeStr = new Array(1000000).join('x');
>     var lC = function() { // this is NOT a named function
>         return largeStr;
>     };
>     return lC;
> }
> ```  
> 
> While this example does:  
> 
> ```javascript
> function createLargeClosure() {
>     var largeStr = new Array(1000000).join('x');
>     var lC = function lC() { // this IS a named function
>         return largeStr;
>     };
>     return lC;
> }
> ```  
> 
> > ##### Figure 9  
> > Name functions to distinguish between closures  
> > ![Name functions to distinguish between closures][ImageDomLeaks]  
> 
> > [!NOTE]
> > Examples:  Try out this example of [why eval is evil][DevtoolsMemoryExample7] to analyze the impact of closures on memory. You may also be interested in following it up with this example that takes you through recording [heap allocations][DevtoolsMemoryExample8].  
> 

### Dominators view  

The **Dominators** view shows the dominators tree for the heap graph.  
It looks similar to the Containment view, but lacks property names.  
This is because a dominator of an object may lack direct references to it; the dominators tree is not a spanning tree of the graph.  
But this only serves for good, as helps us to identify memory accumulation points quickly.  

<!--todo: add profile memory problems memory 101 (dominators tree) section when available  -->  

> [!NOTE]
> In Microsoft Edge Canary, Dominators view may be enabled by going to Settings > Show advanced heap snapshot properties and restarting the DevTools.  

> ##### Figure 10  
> Dominators view  
> ![Dominators view][ImageDominatorsView]  

> [!NOTE]
> Examples:  Try this **demo** to train yourself in finding accumulation points. Follow it up with this example of running into [retaining paths and dominators][DevToolsMemoryExample10].  

<!--todo: add heap profiling dominators section when available  -->  

## Look up color coding  

Properties and property values of objects have different types and are colored accordingly.  Each property has one of four types:  

*   **a:  property**  —  regular property with a name, accessed via the `.` \(dot\) operator, or via `[` `]` \(brackets\) notation, for example `["foo bar"]`;  
*   **0:  element**  —  regular property with a numeric index, accessed via `[` `]` \(brackets\) notation;  
*   **a:  context var**  -  variable in a function context, accessible by the name from inside a function closure;  
*   **a:  system prop**  -  property added by the JavaScript VM, not accessible from JavaScript code.  

Objects designated as `System` do not have a corresponding JavaScript type.  Each is part of the object system implementation of the Javascript VM.  V8 allocates most of the internal objects in the same heap as the user's JS objects.  So these are just v8 internals.  

## Find a specific object  

To find an object in the collected heap you may search using `Ctrl`+`F` and give the object ID.  

## Uncover DOM leaks  

The heap profiler has the ability to reflect bidirectional dependencies between browser native objects \(DOM nodes, CSS rules\) and JavaScript objects.
This helps to discover otherwise invisible leaks happening due to forgotten detached DOM subtrees floating around.  

DOM leaks may be bigger than you think.  
Consider the following sample  -  when is the #tree GC?  

```javascript
var select = document.querySelector;
var treeRef = select("#tree");
var leafRef = select("#leaf");
var body = select("body");
body.removeChild(treeRef);
//#tree in not GC yet due to treeRef
treeRef = null;
//#tree is not GC yet due to indirect
//reference from leafRef
leafRef = null;
//#NOW able to be #tree GC
```  

`#leaf` maintains a reference to the relevant parent \(parentNode\) and recursively up to `#tree`, so only when leafRef is nullified is the WHOLE tree under `#tree` a candidate for GC.  

> ##### Figure 11  
> DOM subtrees  
> ![DOM subtrees][ImageTreeGc]  

> [!NOTE]
> Examples:  Try out this example of [leaking DOM nodes][DevtoolsMemoryExample6] to understand where DOM nodes may leak and how to detect them. You can follow it up by also looking at this example of [DOM leaks being bigger than expected][DevtoolsMemoryExample9].  

To read more about DOM leaks and memory analysis fundamentals checkout [Finding and debugging memory leaks with the Microsoft Edge DevTools][GonzaloRuizdeVillaMemory] by Gonzalo Ruiz de Villa.  

> [!NOTE]
> Example:  Try this **demo** to play with detached DOM trees.  

<!--todo: add heap profiling dom leaks section when available  -->  

<!--## Feedback   -->  



<!-- image links -->  

[ImageProfilingType]: images/profiling-type.msft.png "Figure 1: Select profiling type"  
[ImageTotalSize]: images/total-size.msft.png "Figure 2: Total size of reachable objects"  
[ImageRemoveSnapshots]: images/remove-snapshots.msft.png "Figure 3: Remove snapshots"  
[ImageSwitchViews]: images/switch-views.msft.png "Figure 4: Switch views selector"  
[ImageSummaryView]: images/summary-view.msft.png "Figure 5: Summary view"  
[ImageConstructorGroups]: images/constructor-groups.msft.msft.png "Figure 6: Constructor groups"  
[ImageComparisonView]: images/comparison-view.msft.png "Figure 7: Comparison view"  
[ImageContainmentView]: images/containment-view.msft.png "Figure 8: Containment view"  
[ImageDomLeaks]: images/domleaks.msft.png "Figure 9: Name functions to distinguish between closures"  
[ImageDominatorsView]: images/dominators-view.msft.png "Figure 10: Dominators view"  
[ImageTreeGc]: images/treegc.msft.png "Figure 11: DOM subtrees"  


<!-- links -->  

<!--[DevToolsHeapProfilingComparison]: https://developer.alphabet.com/devtools/docs/heap-profiling-comparison ""  -->  
<!--[DevToolsHeapProfilingContainment]: https://developer.alphabet.com/devtools/docs/heap-profiling-containment ""  -->  
<!--[DevtoolsHeapProfilingDomLeaks]: https://developer.alphabet.com/devtools/docs/heap-profiling-dom-leaks ""  -->  
<!--[DevtoolsHeapProfilingDominators]: https://developer.alphabet.com/devtools/docs/heap-profiling-dominators ""  -->  
<!--[DevToolsHeapProfilingSummary]: https://developer.alphabet.com/devtools/docs/heap-profiling-summary ""  -->  
<!--[DevtoolsProfileMemoryProblems101Dominators]: ../profile/memory-problems/memory-101#dominators ""  -->  
<!--[DevtoolsProfileMemoryProblems101ObjectsRetainingTree]: (../profile/memory-problems/memory-101#objects-retaining-tree ""  -->  
<!--[DevtoolsProfilesMemeoryProblems101ObjectSizes]: ../profile/memory-problems/memory-101#object-sizes) ""  -->  
<!--[DevtoolsProfileMemoryProblemsDiagnosisCausesMemoryLeaks]: ../profile/memory-problems/memory-diagnosis#narrow-down-causes-of-memory-leaks ""  -->  

[DevtoolsMemoryExample3]: https://github.com/GoogleChrome/devtools-docs/blob/master/docs/demos/memory/example3.html ""  
[DevtoolsMemoryExample6]: https://github.com/GoogleChrome/devtools-docs/blob/master/docs/demos/memory/example6.html ""  
[DevtoolsMemoryExample7]: https://github.com/GoogleChrome/devtools-docs/blob/master/docs/demos/memory/example7.html ""  
[DevtoolsMemoryExample8]: https://github.com/GoogleChrome/devtools-docs/blob/master/docs/demos/memory/example8.html ""  
[DevtoolsMemoryExample9]: https://github.com/GoogleChrome/devtools-docs/blob/master/docs/demos/memory/example9.html ""  
[DevToolsMemoryExample10]: https://github.com/GoogleChrome/devtools-docs/blob/master/docs/demos/memory/example10.html ""  

[GonzaloRuizdeVillaMemory]: http://slid.es/gruizdevilla/memory ""  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots) and is authored by [Meggin Kearney][MegginKearney] \(Technical Writer\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
[MegginKearney]: https://developers.google.com/web/resources/contributors/megginkearney