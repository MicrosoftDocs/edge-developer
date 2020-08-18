---
title: How to Record Heap Snapshots
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/03/2020
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
   limitations under the License.  -->





# How to Record Heap Snapshots   



Learn how to record heap snapshots with the Microsoft Edge DevTools heap profiler and find memory leaks.  

The Microsoft Edge DevTools heap profiler shows memory distribution by the JavaScript objects and related DOM nodes
of your page.  Use it to take JavaScript heap \(JS heap\) snapshots, analyze memory graphs, compare snapshots, and find memory leaks.  See also [Objects retaining tree][DevtoolsMemoryProblems101ObjectsRetainingTree].  

## Take a snapshot  

On the **Memory** panel, choose **Take snapshot**, then click **Start**.  You may also press `Ctrl`+`E` \(Windows\) or `Cmd`+`E` \(macOS\).  

> ##### Figure 1  
> Select profiling type  
> ![Select profiling type][ImageProfilingType]  

**Snapshots** are initially stored in the renderer process memory.  Snapshots are transferred to the DevTools on demand, when you click on the snapshot icon to view it.  

After the snapshot has been loaded into DevTools and has been parsed, the number below the snapshot title appears and shows the [total size of the reachable JavaScript objects][DevtoolsMemoryProblems101ObjectSizes].  

> ##### Figure 2  
> Total size of reachable objects  
> ![Total size of reachable objects][ImageTotalSize]  

> [!NOTE]
> Only reachable objects are included in snapshots.  Also, taking a snapshot always starts with a garbage collection.  

## Clear snapshots  

Click **Clear all profiles** icon to remove snapshots \(both from DevTools and any memory associated with the renderer process\).  

> ##### Figure 3  
> Remove snapshots  
> ![Remove snapshots][ImageRemoveSnapshots]  

Closing the DevTools window does not delete profiles from the memory associated with the renderer process.  When reopening DevTools, all previously taken snapshots reappear in the list of snapshots.  

> [!NOTE]
> Try out this example of [scattered objects][GlitchDevtoolsMemoryExample03] and profile it using the Heap Profiler.  You should see a number of \(object\) item allocations.  

## View snapshots  

View snapshots from different perspectives for different tasks.  

**Summary view** shows objects grouped by the constructor name.  Use it to hunt down objects \(and the memory use\) based on type grouped by constructor name.  It is particularly helpful for **tracking down DOM leaks**.

<!--todo: add profile memory problems memory diagnosis (tracking down DOM leaks) section when available  -->  

**Comparison view**.  Displays the difference between two snapshots.  Use it to compare two \(or more\) memory snapshots from before and after an operation.  Inspecting the delta in freed memory and reference count lets you confirm the presence and cause of a memory leak.  

**Containment view**.  Allows exploration of heap contents.  **Containment view** provides a better view of object structure, helping analyze objects referenced in the global namespace \(window\) to find out what is keeping objects around.  Use it to analyze closures and dive into your objects at a low level.  

To switch between views, use the selector at the top of the view.  

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

Top-level entries are "total" lines.  

| Top-level entries | Description |  
|:--- |:--- |  
| **Constructor** | Represents all objects created using this constructor.  |  
| **Distance** | displays the distance to the root using the shortest simple path of nodes.  |  
| **Shallow size** | Displays the sum of shallow sizes of all objects created by a certain constructor function.  The shallow size is the size of memory held by an object \(generally, arrays and strings have larger shallow sizes\).  See also [Object sizes][DevtoolsMemoryProblems101ObjectSizes].  |  
| **Retained size** | Displays the maximum retained size among the same set of objects.  The size of memory that you are able to free after an object is deleted \(and the dependents are made no longer reachable\) is called the retained size.  See also [Object sizes][DevtoolsMemoryProblems101ObjectSizes].  |  

<!--| **Number of object instances** | Displayed in the # column.  |  -->  

After expanding a total line in the upper view, all of the instances are displayed.  For each instance, the shallow and retained sizes are displayed in the corresponding columns.  The number after the `@` character is the unique ID of the object, allowing you to compare heap snapshots on per-object basis.  

Remember that yellow objects have JavaScript references and red objects are detached nodes which are referenced from one with a yellow background.  

**What do the various constructor \(group\) entries in the Heap profiler correspond to?**  

> ##### Figure 6  
> Constructor groups  
> ![Constructor groups][ImageConstructorGroups]  

| Constructor \(group\) entry | Description |  
|:--- |:--- |  
| **\(global property\)** | The intermediate objects between a global object \(like `window`\) and an object referenced by it.  If an object is created using a constructor `Person` and is held by a global object, the retaining path would look like `[global] > \(global property\) > Person`.  This contrasts with the norm, where objects directly reference each other.  Intermediate objects exist for performance reasons.  Globals are modified regularly and property access optimizations do a good job for non-global objects are not applicable for globals.  |  
| **\(roots\)** | The root entries in the retaining tree view are the entities that have references to the selected object.  The entries may also be references created by the engine for engine-specific purposes.  The engine has caches which reference objects, but all such references are weak and do not prevent an object from being collected given that there are no truly strong references.  |  
| **\(closure\)** | A count of references to a group of objects through function closures.  |  
| **\(array, string, number, regexp\)** | A list of object types with properties which reference an Array, String, Number, or regular expression.  |  
| **\(compiled code\)** | Everything related to compiled code.  Script is similar to a function, but corresponds to a `<script>` body.  SharedFunctionInfos \(SFI\) are objects standing between functions and compiled code.  Functions usually have a context, while SFIs do not.  |  
| **HTMLDivElement**, **HTMLAnchorElement**, **DocumentFragment**, and so on.  | References to elements or document objects of a particular type referenced by your code.  |  

<!--todo: add heap profiling summary section when available -->  

### Comparison view  

Find leaked objects by comparing multiple snapshots to each other.  To verify that a certain application operation does not create leaks \(for example, usually a pair of direct and reverse operations, like opening a document, and then closing it, should not leave any garbage\), you may follow the scenario below:  

1.  Take a heap snapshot before performing an operation.  
1.  Perform an operation \(interact with a page in some way that you believe to be causing a leak\).  
1.  Perform a reverse operation \(do the opposite interaction and repeat it a few times\).  
1.  Take a second heap snapshot and change the view of this one to **Comparison**, comparing it to **Snapshot 1**.  

In the **Comparison** view, the difference between two snapshots is displayed.  When expanding a total entry, added and deleted object instances are shown.  

> ##### Figure 7  
> Comparison view  
> ![Comparison view][ImageComparisonView]  

<!--todo: add HeapProfilingComparison section when available  -->  

### Containment view  

The **Containment** view is essentially a "bird's eye view" of the objects structure of your application.  It allows you to peek inside function closures, to observe virtual machine \(VM\) internal objects that together make up your JavaScript objects, and to understand how much memory your application uses at a very low level.  

| Containment view entry points | Description |  
|:--- |:--- |  
| **DOMWindow objects** | Global objects for JavaScript code.  |  
| **GC roots** | The actual GC roots used by the garbage of the VM.  GC roots are comprised of built-in object maps, symbol tables, VM thread stacks, compilation caches, handle scopes, and global handles.  |  
| **Native objects** | Browser objects "pushed" inside the JavaScript virtual machine \(JavaScript VM\) to allow automation, for example, DOM nodes, CSS rules.  |  

> ##### Figure 8  
> Containment view  
> ![Containment view][ImageContainmentView]  

<!--todo: add heap profiling containment section when available  -->  

> [!TIP]
> A tip about closures.  Name the functions so you are able to easily distinguish between closures in the snapshot.  For example, this example does not use named functions.  
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
> This example uses named functions:  
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
> <!--  
> > ##### old Figure 9  
> > Name functions to distinguish between closures  
> > ![Name functions to distinguish between closures][ImageDomLeaks]  
> -->  
> 
> > [!NOTE]
> > Try out this example of [why `eval` is evil][GlitchDevtoolsMemoryExample07] to analyze the impact of closures on memory.  You may also be interested in following it up with this example that takes you through recording [heap allocations][GlitchDevtoolsMemoryExample08].  
> 

## Look up color coding  

Properties and property values of objects have different types and are colored accordingly.  Each property has one of four types.  

| Property Type | Description |  
|:--- |:--- |  
| **a: property** | A regular property with a name, accessed via the `.` \(dot\) operator, or via `[` `]` \(brackets\) notation, for example `["foo bar"]`.  |  
| **0: element** | A regular property with a numeric index, accessed via `[` `]` \(brackets\) notation.  |  
| **a: context var** |  A variable in a function context, accessible by the variable name from inside a function closure.  |  
| **a: system prop** | A property added by the JavaScript VM, not accessible from JavaScript code.  |  

Objects designated as `System` do not have a corresponding JavaScript type.  Each is part of the object system implementation of the Javascript VM.  V8 allocates most of the internal objects in the same heap as the user's JS objects.  So these are just V8 internals.  

## Find a specific object  

To find an object in the collected heap you may search using `Ctrl`+`F` and give the object ID.  

## Uncover DOM leaks  

The heap profiler has the ability to reflect bidirectional dependencies between browser native objects \(DOM nodes, CSS rules\) and JavaScript objects.
This helps to discover otherwise invisible leaks happening due to forgotten detached DOM subtrees floating around.  

DOM leaks may be bigger than you think.  Consider the following sample.  When is the #tree GC?  

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

The `#leaf` maintains a reference to the relevant parent \(parentNode\) and recursively up to `#tree`, so only when leafRef is nullified is the WHOLE tree under `#tree` a candidate for GC.  

> ##### Figure 9  
> DOM subtrees  
> ![DOM subtrees][ImageTreeGc]  

> [!NOTE]
> Examples:  Try this example of a [leaking DOM node][GlitchDevtoolsMemoryExample06] to understand where it may leak and how to detect it.  You may also look at this example of [DOM leaks being bigger than expected][GlitchDevtoolsMemoryExample09].  

To read more about DOM leaks and memory analysis fundamentals checkout [Finding and debugging memory leaks with the Microsoft Edge DevTools][GonzaloRuizdeVillaMemory] by Gonzalo Ruiz de Villa.  

<!--  
> [!NOTE]
> Example: Try this **demo** to play with detached DOM trees.  
-->  

<!--todo: add heap profiling dom leaks section when available  -->  

<!--## Feedback   -->  



<!-- image links -->  

[ImageProfilingType]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots.msft.png "Figure 1: Select profiling type"  
[ImageTotalSize]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-all.msft.png "Figure 2: Total size of reachable objects"  
[ImageRemoveSnapshots]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-all-hover-clear-all-profiles.msft.png "Figure 3: Remove snapshots"  
[ImageSwitchViews]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-view-dropdown.msft.png "Figure 4: Switch views selector"  
[ImageSummaryView]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-constructor-retainers.msft.png "Figure 5: Summary view"  
[ImageConstructorGroups]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-constructor-highlight.msft.png "Figure 6: Constructor groups"  
[ImageComparisonView]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-comparison-dropdown.msft.png "Figure 7: Comparison view"  
[ImageContainmentView]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-containment-dropdown.msft.png "Figure 8: Containment view"  
<!--[ImageDomLeaks]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-domleaks.msft.png "old Figure 9: Name functions to distinguish between closures"  -->  
[ImageTreeGc]: /microsoft-edge/devtools-guide-chromium/media/memory-problems-tree-gc.msft.png "Figure 9: DOM subtrees"  

<!-- links -->  

[DevtoolsMemoryProblems101ObjectSizes]: /microsoft-edge/devtools-guide-chromium/memory-problems/memory-101#object-sizes "Object sizes - Memory Terminology"  
[DevtoolsMemoryProblems101ObjectsRetainingTree]: /microsoft-edge/devtools-guide-chromium/memory-problems/memory-101#objects-retaining-tree "Objects retaining tree - Memory Terminology"  

<!--[DevToolsHeapProfilingComparison]: https://developer.alphabet.com/devtools/docs/heap-profiling-comparison ""  -->  
<!--[DevToolsHeapProfilingContainment]: https://developer.alphabet.com/devtools/docs/heap-profiling-containment ""  -->  
<!--[DevtoolsHeapProfilingDomLeaks]: https://developer.alphabet.com/devtools/docs/heap-profiling-dom-leaks ""  -->  
<!--[DevToolsHeapProfilingSummary]: https://developer.alphabet.com/devtools/docs/heap-profiling-summary ""  -->  
<!--[DevtoolsProfileMemoryProblemsDiagnosisCausesMemoryLeaks]: ../profile/memory-problems/memory-diagnosis#narrow-down-causes-of-memory-leaks ""  -->  

[GlitchDevtoolsMemoryExample03]: https://microsoft-edge-chromium-devtools.glitch.me/static/memory/example-03.html "example-03.html - Microsoft Edge (Chromium) DevTools | Glitch"  
[GlitchDevtoolsMemoryExample06]: https://microsoft-edge-chromium-devtools.glitch.me/static/memory/example-06.html "example-06.html - Microsoft Edge (Chromium) DevTools | Glitch"  
[GlitchDevtoolsMemoryExample07]: https://microsoft-edge-chromium-devtools.glitch.me/static/memory/example-07.html "example-07.html - Microsoft Edge (Chromium) DevTools | Glitch"  
[GlitchDevtoolsMemoryExample08]: https://microsoft-edge-chromium-devtools.glitch.me/static/memory/example-08.html "example-08.html - Microsoft Edge (Chromium) DevTools | Glitch"  
[GlitchDevtoolsMemoryExample09]: https://microsoft-edge-chromium-devtools.glitch.me/static/memory/example-09.html "example-09.html - Microsoft Edge (Chromium) DevTools | Glitch"  
[GlitchDevtoolsMemoryExample10]: https://microsoft-edge-chromium-devtools.glitch.me/static/memory/example-10.html "example-10.html - Microsoft Edge (Chromium) DevTools | Glitch"  

[GonzaloRuizdeVillaMemory]: https://slid.es/gruizdevilla/memory "memory | Slides"  

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
