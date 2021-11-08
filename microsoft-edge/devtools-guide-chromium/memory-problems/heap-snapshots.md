---
description: Learn how to record heap snapshots with the Microsoft Edge DevTools heap profiler and find memory leaks.
title: Record heap snapshots
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
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
# Record heap snapshots

Learn how to record heap snapshots with the Microsoft Edge DevTools heap profiler and find memory leaks.

The Microsoft Edge DevTools heap profiler shows memory distribution by the JavaScript objects and related DOM nodes
of your page.  Use it to take JavaScript heap (JS heap) snapshots, analyze memory graphs, compare snapshots, and find memory leaks.  Navigate to [Objects retaining tree](./memory-101.md#objects-retaining-tree).


<!-- ====================================================================== -->
## Take a snapshot

On the **Memory** panel, choose **Take snapshot**, then choose **Start**.  You may also select `Ctrl`+`E` (Windows, Linux) or `Cmd`+`E` (macOS).

:::image type="complex" source="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots.msft.png" alt-text="Choose profiling type" lightbox="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots.msft.png":::
   Choose profiling type
:::image-end:::

**Snapshots** are initially stored in the renderer process memory.  Snapshots are transferred to the DevTools on demand, when you choose on the snapshot icon to view it.

After the snapshot has been loaded into DevTools and has been parsed, the number below the snapshot title appears and shows the [total size of the reachable JavaScript objects](./memory-101.md#object-sizes).

:::image type="complex" source="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-all.msft.png" alt-text="Total size of reachable objects" lightbox="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-all.msft.png":::
   Total size of reachable objects
:::image-end:::

> [!NOTE]
> Only reachable objects are included in snapshots.  Also, taking a snapshot always starts with a garbage collection.


<!-- ====================================================================== -->
## Clear snapshots

Choose **Clear all profiles** icon to remove snapshots (both from DevTools and any memory associated with the renderer process).

:::image type="complex" source="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-all-hover-clear-all-profiles.msft.png" alt-text="Remove snapshots" lightbox="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-all-hover-clear-all-profiles.msft.png":::
   Remove snapshots
:::image-end:::

Closing the DevTools window does not delete profiles from the memory associated with the renderer process.  When reopening DevTools, all previously taken snapshots reappear in the list of snapshots.

> [!NOTE]
> Try out this example of [scattered objects](https://microsoft-edge-chromium-devtools.glitch.me/static/memory/example-03.html) and profile it using the Heap Profiler.  A number of (object) item allocations are displayed.


<!-- ====================================================================== -->
## View snapshots

View snapshots from different perspectives for different tasks.

**Summary view** shows objects grouped by the constructor name.  Use it to hunt down objects (and the memory use) based on type grouped by constructor name.  It is particularly helpful for **tracking down DOM leaks**.

<!--todo: add profile memory problems memory diagnosis (tracking down DOM leaks) section when available  -->

**Comparison view**.  Displays the difference between two snapshots.  Use it to compare two (or more) memory snapshots from before and after an operation.  Inspecting the delta in freed memory and reference count lets you confirm the presence and cause of a memory leak.

**Containment view**.  Allows exploration of heap contents.  **Containment view** provides a better view of object structure, helping analyze objects referenced in the global namespace (window) to find out what is keeping objects around.  Use it to analyze closures and dive into your objects at a low level.

To switch between views, use the selector at the top of the view.

:::image type="complex" source="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-view-dropdown.msft.png" alt-text="Switch views selector" lightbox="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-view-dropdown.msft.png":::
   Switch views selector
:::image-end:::

> [!NOTE]
> Not all properties are stored on the JavaScript heap.  Properties implemented using getters that run native code are not captured.  Also, non-string values such as numbers are not captured.

### Summary view

Initially, a snapshot opens in the Summary view, displaying object totals, which may be expanded to show instances:

:::image type="complex" source="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-constructor-retainers.msft.png" alt-text="Summary view" lightbox="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-constructor-retainers.msft.png":::
   **Summary** view
:::image-end:::

Top-level entries are "total" lines.

| Top-level entries | Description |
|:--- |:--- |
| **Constructor** | Represents all objects created using this constructor.  |
| **Distance** | displays the distance to the root using the shortest simple path of nodes.  |
| **Shallow size** | Displays the sum of shallow sizes of all objects created by a certain constructor function.  The shallow size is the size of memory held by an object (generally, arrays and strings have larger shallow sizes).  Navigate to [Object sizes](./memory-101.md#object-sizes).  |
| **Retained size** | Displays the maximum retained size among the same set of objects.  The size of memory that you are able to free after an object is deleted (and the dependents are made no longer reachable) is called the retained size.  Navigate to [Object sizes](./memory-101.md#object-sizes).  |

<!--| **Number of object instances** | Displayed in the # column.  |  -->

After expanding a total line in the upper view, all of the instances are displayed.  For each instance, the shallow and retained sizes are displayed in the corresponding columns.  The number after the `@` character is the unique ID of the object, allowing you to compare heap snapshots on per-object basis.

Remember that yellow objects have JavaScript references and red objects are detached nodes which are referenced from one with a yellow background.

**What do the various constructor (group) entries in the Heap profiler correspond to?**

:::image type="complex" source="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-constructor-highlight.msft.png" alt-text="Constructor groups" lightbox="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-constructor-highlight.msft.png":::
   **Constructor** groups
:::image-end:::

| Constructor (group) entry | Description |
|:--- |:--- |
| **(global property)** | The intermediate objects between a global object (like `window`) and an object referenced by it.  If an object is created using a constructor `Person` and is held by a global object, the retaining path may be represented as `[global] > (global property) > Person`.  This contrasts with the norm, where objects directly reference each other.  Intermediate objects exist for performance reasons.  Globals are modified regularly and property access optimizations do a good job for non-global objects are not applicable for globals.  |
| **(roots)** | The root entries in the retaining tree view are the entities that have references to the selected object.  The entries may also be references created by the engine for engine-specific purposes.  The engine has caches which reference objects, but all such references are weak and do not prevent an object from being collected given that there are no truly strong references.  |
| **(closure)** | A count of references to a group of objects through function closures.  |
| **(array, string, number, regexp)** | A list of object types with properties which reference an Array, String, Number, or regular expression.  |
| **(compiled code)** | Everything related to compiled code.  Script is similar to a function, but corresponds to a `<script>` body.  SharedFunctionInfos (SFI) are objects standing between functions and compiled code.  Functions usually have a context, while SFIs do not.  |
| **HTMLDivElement**, **HTMLAnchorElement**, **DocumentFragment**, and so on.  | References to elements or document objects of a particular type referenced by your code.  |

<!--todo: add heap profiling summary section when available -->

### Comparison view

Find leaked objects by comparing multiple snapshots to each other.  To verify that a certain application operation does not create leaks (for example, usually a pair of direct and reverse operations, like opening a document, and then closing it, should not leave any garbage), you may follow the scenario below:

1.  Take a heap snapshot before performing an operation.
1.  Perform an operation (interact with a page in some way that you believe to be causing a leak).
1.  Perform a reverse operation (do the opposite interaction and repeat it a few times).
1.  Take a second heap snapshot and change the view of this one to **Comparison**, comparing it to **Snapshot 1**.

In the **Comparison** view, the difference between two snapshots is displayed.  When expanding a total entry, added and deleted object instances are shown.

:::image type="complex" source="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-comparison-dropdown.msft.png" alt-text="Comparison view" lightbox="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-comparison-dropdown.msft.png":::
   **Comparison** view
:::image-end:::

<!--todo: add HeapProfilingComparison section when available  -->

### Containment view

The **Containment** view is essentially a "bird's eye view" of the objects structure of your application.  It allows you to peek inside function closures, to observe virtual machine (VM) internal objects that together make up your JavaScript objects, and to understand how much memory your application uses at a very low level.

| Containment view entry points | Description |
|:--- |:--- |
| **DOMWindow objects** | Global objects for JavaScript code.  |
| **GC roots** | The actual GC roots used by the garbage of the VM.  GC roots are comprised of built-in object maps, symbol tables, VM thread stacks, compilation caches, handle scopes, and global handles.  |
| **Native objects** | Browser objects "pushed" inside the JavaScript virtual machine (JavaScript VM) to allow automation, for example, DOM nodes, CSS rules.  |

:::image type="complex" source="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-containment-dropdown.msft.png" alt-text="Containment view" lightbox="../media/memory-problems-gh-nodejs-benchmarks-run-memory-heap-snapshots-containment-dropdown.msft.png":::
   **Containment** view
:::image-end:::

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
> The followingcode snippet uses named functions.
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
> :::image type="complex" source="../media/memory-problems-domleaks.msft.png" alt-text="Name functions to distinguish between closures" lightbox="../media/memory-problems-domleaks.msft.png":::
>    Name functions to distinguish between closures
> :::image-end:::
> -->
>
> > [!NOTE]
> > Try out this example of [why `eval` is evil](https://microsoft-edge-chromium-devtools.glitch.me/static/memory/example-07.html) to analyze the impact of closures on memory.  You may also be interested in following it up with this example that takes you through recording [heap allocations](https://microsoft-edge-chromium-devtools.glitch.me/static/memory/example-08.html).
>


<!-- ====================================================================== -->
## Look up color coding

Properties and property values of objects have different types and are colored accordingly.  Each property has one of four types.

| Property Type | Description |
|:--- |:--- |
| **a: property** | A regular property with a name, accessed via the `.` (dot) operator, or via `[` `]` (brackets) notation, for example `["foo bar"]`.  |
| **0: element** | A regular property with a numeric index, accessed via `[` `]` (brackets) notation.  |
| **a: context var** |  A variable in a function context, accessible by the variable name from inside a function closure.  |
| **a: system prop** | A property added by the JavaScript VM, not accessible from JavaScript code.  |

Objects designated as `System` do not have a corresponding JavaScript type.  Each is part of the object system implementation of the Javascript VM.  V8 allocates most of the internal objects in the same heap as the user's JS objects.  So these are just V8 internals.


<!-- ====================================================================== -->
## Find a specific object

To find an object in the collected heap you may search using `Ctrl`+`F` and give the object ID.


<!-- ====================================================================== -->
## Uncover DOM leaks

The heap profiler has the ability to reflect bidirectional dependencies between browser native objects (DOM nodes, CSS rules) and JavaScript objects.
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

The `#leaf` maintains a reference to the relevant parent (parentNode) and recursively up to `#tree`, so only when leafRef is nullified is the WHOLE tree under `#tree` a candidate for GC.

:::image type="complex" source="../media/memory-problems-tree-gc.msft.png" alt-text="DOM subtrees" lightbox="../media/memory-problems-tree-gc.msft.png":::
   DOM subtrees
:::image-end:::

> [!NOTE]
> Examples:  Try this example of a [leaking DOM node](https://microsoft-edge-chromium-devtools.glitch.me/static/memory/example-06.html) to understand where it may leak and how to detect it.  You may also look at this example of [DOM leaks being bigger than expected](https://microsoft-edge-chromium-devtools.glitch.me/static/memory/example-09.html).

To read more about DOM leaks and memory analysis fundamentals checkout [Finding and debugging memory leaks with the Microsoft Edge DevTools](https://slid.es/gruizdevilla/memory) by Gonzalo Ruiz de Villa.

<!--
> [!NOTE]
> Example: Try this **demo** to play with detached DOM trees.
-->

<!-- todo: add heap profiling dom leaks section when available -->


<!-- ====================================================================== -->
<!--[heap profiling comparison](https://developer.alphabet.com/devtools/docs/heap-profiling-comparison) -->
<!--[heap profiling containment](https://developer.alphabet.com/devtools/docs/heap-profiling-containment) -->
<!--[heap profiling DOM leaks](https://developer.alphabet.com/devtools/docs/heap-profiling-dom-leaks) -->
<!--[heap profiling summary](https://developer.alphabet.com/devtools/docs/heap-profiling-summary) -->
<!--[narrow down causes of memory leaks](../profile/memory-problems/memory-diagnosis#narrow-down-causes-of-memory-leaks) -->


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots) and is authored by [Meggin Kearney](https://developers.google.com/web/resources/contributors#meggin-kearney) (Technical Writer).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
