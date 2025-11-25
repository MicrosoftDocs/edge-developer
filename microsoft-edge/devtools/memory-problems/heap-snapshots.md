---
title: Record heap snapshots using the Memory tool ("Heap snapshot" profiling type)
description: How to record heap snapshots with the Microsoft Edge DevTools heap profiler and find memory leaks, using the Memory tool.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 09/16/2024
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
# Record heap snapshots using the Memory tool ("Heap snapshot" profiling type)

Use the heap profiler in the **Memory** tool to do the following:

*  Record JavaScript heap (JS heap) snapshots.
*  Analyze memory graphs.
*  Compare snapshots.
*  Find memory leaks.

The DevTools heap profiler shows the memory distribution used by the JavaScript objects and by related DOM nodes on the rendered webpage.

<!-- You can view the source files for the Heap Snapshots demo pages at the [MicrosoftEdge/Demos > devtools-memory-heap-snapshot](https://github.com/MicrosoftEdge/Demos/tree/main/devtools-memory-heap-snapshot) repo folder.

This article uses demo webpages sourced at https://github.com/MicrosoftEdge/Demos/tree/main/devtools-memory-heap-snapshot -
*  [Example 3: Scattered objects](https://microsoftedge.github.io/Demos/devtools-memory-heap-snapshot/example-03.html)
*  [Example 6: Leaking DOM nodes](https://microsoftedge.github.io/Demos/devtools-memory-heap-snapshot/example-06.html)
*  [Example 7: Eval is evil](https://microsoftedge.github.io/Demos/devtools-memory-heap-snapshot/example-07.html)
*  [Example 8: Recording heap allocations](https://microsoftedge.github.io/Demos/devtools-memory-heap-snapshot/example-08.html) - not linked to
*  [Example 9: DOM leaks bigger than expected](https://microsoftedge.github.io/Demos/devtools-memory-heap-snapshot/example-09.html)
-->


<!-- ====================================================================== -->
## Take a snapshot

1. Open the webpage you want to analyze. For example, open the [Scattered objects](https://microsoftedge.github.io/Demos/devtools-memory-heap-snapshot/example-03.html) demo page in a new window or tab.

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).  DevTools opens.

1. In DevTools, on the **Activity Bar**, select the **Memory** tab.  If that tab isn't visible, click the **More tools** (![More tools icon](./heap-snapshots-images/more-tools-icon.png)) button.

1. In the **Select profiling type** section, select the **Heap snapshot** option button.

1. Under **Select JavaScript VM instance**, select the JavaScript VM that you want to profile.

1. Click the **Take snapshot** button:

  ![The Memory tool, the Heap snapshot option is selected, and the Take snapshot button is highlighted](./heap-snapshots-images/heap-snapshots.png)

After the newly recorded heap snapshot has been loaded into DevTools and has been parsed, the snapshot is displayed and a new entry appears in the **Profiles** sidebar under **Heap snapshots**:

![Total size of reachable objects](./heap-snapshots-images/heap-snapshots-all.png)

The number below the new sidebar item shows the total size of the reachable JavaScript objects. To learn more about object sizes in the heap snapshot, see [Object sizes and distances](./memory-101.md#object-sizes-and-distances) in _Memory terminology_.

The snapshot only displays the objects from the memory graph that are reachable from the global object. Taking a snapshot always starts with a garbage collection.


<!-- ------------------------------ -->
#### Take another snapshot

To take another snapshot when one is already displayed in the **Memory** tool, in the sidebar, click **Profiles** above the existing snapshot:

![The Profiles button to take another snapshot](./heap-snapshots-images/take-another-snapshot.png)


<!-- ====================================================================== -->
## Clear snapshots

To clear all snapshots from the **Memory** tool, click the **Clear all profiles** (![The clear icon](./heap-snapshots-images/clear-icon.png)) icon:

![Remove snapshots](./heap-snapshots-images/heap-snapshots-all-hover-clear-all-profiles.png)


<!-- ====================================================================== -->
## View snapshots

Heap snapshots can be viewed in multiple different ways in the **Memory** tool. Each way of viewing a heap snapshot in the UI corresponds to a different task:

| View | Content | Use for |
|---|---|---|
| **Summary** | Shows objects grouped by their constructor name. | Finding objects, and the memory they use, based on types that are grouped by constructor name. Helpful for tracking down DOM leaks. |
| **Comparison** | Displays the differences between two snapshots. | Comparing two (or more) memory snapshots from before and after an operation. Inspecting the delta in freed memory and inspecting the reference count helps you confirm the presence and cause of a memory leak, and helps determine its cause. |
| **Containment** | Allows exploration of heap contents. | Provides a better view of object structure, helping analyze objects referenced in the global namespace (window) to find out what is keeping objects around. Use it to analyze closures and dive into your objects at a low level. |

<!--todo: add profile memory problems memory diagnosis (tracking down DOM leaks) section when available  -->

To switch between views, use the dropdown list at the top of the **Memory** tool:

![Switch views selector](./heap-snapshots-images/heap-snapshots-view-dropdown.png)


<!-- ------------------------------ -->
#### Items omitted from heap snapshots

Properties that are implemented using getters that run native code aren't captured in the heap snapshot, because such properties are not stored on the JavaScript heap.

Non-string values, such as numbers, aren't captured.


<!-- ------------------------------ -->
#### Summary view

The **Summary** view in the **Memory** tool lists:
* Object constructor groups.
* Special category names, such as **(array)**, **(compiled code)**, or a list of properties such as **{foo, bar, baz}**.

Initially, a heap snapshot opens in the **Summary** view, which displays a list of constructors:

![Summary view](./heap-snapshots-images/heap-snapshots-constructor-retainers.png)

Each constructor in the list can be expanded to show the objects that were instantiated using that constructor.

For each constructor in the list, the **Summary** view also shows a number such as **×123**, indicating the total number of objects created with the constructor. The **Summary** view also shows the following columns:

| Column name | Description |
|:--- |:--- |
| **Distance** | Displays the distance to the root using the shortest simple path of nodes.  See [Distance](./memory-101.md#distance) in _Memory terminology_. |
| **Shallow size** | Displays the sum of shallow sizes of all objects created by a certain constructor function.  The _shallow size_ is the size of the JavaScript heap that's _directly_ held by an object. The shallow size of an object is usually small, because a JavaScript object often only stores its description of the object, not the values, in the object's directly held memory. Most JavaScript objects store their values in a _backing store_ that's elsewhere in the JavaScript heap, and only expose a small wrapper object on the portion of the JavaScript heap that's directly owned by the object. See [Shallow size](./memory-101.md#shallow-size) in _Memory terminology_. |
| **Retained size** | Displays the maximum retained size among the same set of objects.  The size of memory that you can free after an object is deleted (and the dependents are made no longer reachable) is called the retained size.  See [Retained size](./memory-101.md#retained-size) in _Memory terminology_. |

After expanding a constructor in the **Summary** view, all of the constructor's instances are displayed.  For each instance, the shallow and retained sizes are displayed in the corresponding columns.  The number after the `@` character is the unique ID of the object, allowing you to compare heap snapshots on per-object basis.


<!-- ---------- -->
###### Constructor entries

The **Summary** view in the **Memory** tool lists object constructor groups:

![Constructor groups](./heap-snapshots-images/heap-snapshots-constructor-highlight.png)

The constructor groups in the **Summary** view might be built-in functions such as `Array` or `Object`, or they might be functions that are defined in your own code.

To reveal the list of objects that were instantiated by a given constructor, expand the constructor group.


<!-- ---------- -->
###### Special category names

<!-- from https://github.com/sethbrenith/sethbrenith.github.io/blob/main/heap-snapshot-names.md -->

The **Summary** view in the **Memory** tool includes the following special category names, which aren't based on constructors.  Most of these category names are displayed in parentheses.

| Category name | Description |
|:--- |:--- |
| **(array)** | Various internal array-like objects that don't directly correspond to objects visible from JavaScript, such as the contents of JavaScript arrays, or the named properties of JavaScript objects. |
| **(compiled code)** | Internal data that V8 (Microsoft Edge's JavaScript engine) needs to run functions defined by JavaScript or WebAssembly. V8 automatically manages memory usage in this category: if a function runs many times, V8 uses more memory for that function so that the function runs faster. If a function hasn't run in a while, V8 might delete the internal data for that function. |
| **(concatenated string)** | When two strings are concatenated together, such as when using the JavaScript `+` operator, V8 might choose to represent the result internally as a _concatenated string_. Rather than copying all of the characters of the two strings into a new string, V8 creates a small object which points to the two strings. |
| **(object shape)** | Information about objects, such as the number of properties they have and a reference to their prototypes, which V8 maintains internally when objects are created and updated. This allows V8 to efficiently represent objects with the same properties. |
| **(sliced string)** | When creating a substring, such as when using the JavaScript `substring` method, V8 might choose to create a _sliced string_ object rather than copying all of the relevant characters from the original string. This new object contains a pointer to the original string and describes which range of characters from the original string to use. |
| **(system)** | Various internal objects that haven't yet been categorized in any more meaningful way. |
| **{foo, bar, baz}** | Plain JavaScript objects categorized by interface (property list), in curly braces.  Plain JavaScript objects are not listed in a category named **Object**, but are instead represented by names and categories that are based on the properties that the object contains, such as **{foo, bar, baz}**. |
| **InternalNode**  | Objects allocated outside of V8, such as C++ objects defined by Blink, Microsoft Edge's rendering engine. |
| **system / Context** | Local variables from a JavaScript scope which can be accessed by some nested function. Every function instance contains an internal pointer to the context in which it executes, so that it can access those variables. |


<!-- ------------------------------ -->
#### Comparison view

To find leaked objects, compare multiple snapshots to each other.  In a web application, usually, doing an action and then the reverse action shouldn't lead to more objects in memory. For example, when opening a document and then closing it, the number of objects in memory should be the same as before opening the document.

To verify that certain operations don't create leaks:

1. Take a heap snapshot before performing an operation.

1. Perform the operation.  That is, interact with the page in some way that might be causing a leak.

1. Perform the reverse operation.  That is, do the opposite interaction and repeat it a few times.

1. Take a second heap snapshot.

1. In the second heap snapshot, change the view to **Comparison**, comparing it to **Snapshot 1**.

In the **Comparison** view, the difference between two snapshots is displayed:

![Comparison view](./heap-snapshots-images/heap-snapshots-comparison-dropdown.png)

When expanding a constructor in the list, added and deleted object instances are shown.

<!--todo: add HeapProfilingComparison section when available  -->


<!-- ------------------------------ -->
#### Containment view

The **Containment** view allows you to peek inside function closures, to observe virtual machine (VM) internal objects that make up your JavaScript objects, and to understand how much memory your application uses at a very low level:

![Containment view](./heap-snapshots-images/heap-snapshots-containment-dropdown.png)

The **Containment** view shows the following types of objects:

| Containment view entry points | Description |
|:--- |:--- |
| **DOMWindow objects** | Global objects for JavaScript code.  |
| **GC roots** | The GC roots used by the garbage collector of the JavaScript virtual machine.  GC roots are comprised of built-in object maps, symbol tables, VM thread stacks, compilation caches, handle scopes, and global handles.  |
| **Native objects** | Objects created by the browser such as DOM nodes and CSS rules, which are shown in the JavaScript virtual machine to allow automation. |

<!--todo: add heap profiling containment section when available  -->


<!-- ------------------------------ -->
#### The Retainers section

The **Retainers** section is displayed at the bottom of the **Memory** tool and shows all the objects which point to the selected object. The **Retainers** section is updated when you select a different object in the **Summary**, **Containment**, or **Comparison** view.

In the following screenshot, a string object was selected in the **Summary** view, and the **Retainers** section shows that the string is retained by the `x` property of an instance of the `Item` class, found in the `example-03.js` file:

![The Retainers section](./heap-snapshots-images/retainers-section.png)


<!-- ---------- -->
###### Hide cycles

In the **Retainers** section, when you analyze the objects which retain the selected object, you might encounter _cycles_. Cycles occur when the same object appears more than once in the retainer path of the selected object. In the **Retainers** section, a cycled object is indicated by being grayed out.

To help simplify the retainer path, hide cycles in the **Retainers** section by clicking the **Filter edges** dropdown menu and then selecting **Hide cycled**:

![The Filter edges dropdown menu in the Retainers section, 'Hide cycled' is selected](./heap-snapshots-images/filters-retainers-memory-tool-no-hide-cycled.png)


<!-- ---------- -->
###### Hide internal nodes

_Internal nodes_ are objects that are specific to V8 (the JavaScript engine in Microsoft Edge).

To hide internal nodes from the **Retainers** section, in the **Filter edges** dropdown menu, select **Hide internal**.


<!-- ====================================================================== -->
## Filter heap snapshots by node types

Use filters to focus on specific parts of a heap snapshot. When looking at all the objects in a heap snapshot in the **Memory** tool, it can be difficult to focus on specific objects or retaining paths.

To focus only on specific types of nodes, use the **Node Types** filter, in the upper right.  For example, to see only the arrays and string objects in the heap snapshot:

1. To open the **Node Types** filter, click **Default** in the upper right.

1. Select the **Array** and **String** entries.

   The heap snapshot is updated to show only the array and string objects:

   ![Node Types in a heap snapshot in the Memory tool](heap-snapshots-images/node-types-heap-snapshot.png)


<!-- ====================================================================== -->
## Find a specific object

To find an object in the collected heap, you can search using **Ctrl+F** and give the object ID.


<!-- ====================================================================== -->
## Uncover DOM leaks

The **Memory** tool has the ability to show the bidirectional dependencies that sometimes exist between browser native objects (DOM nodes, CSS rules) and JavaScript objects.  This helps to discover memory leaks that happen because of forgotten, detached DOM nodes that remain in memory.

For detached elements, see also [Find DOM tree memory leaks ("Heap snapshot" profiling type > Detached)](#find-dom-tree-memory-leaks-heap-snapshot-profiling-type--detached), below.


Consider the following DOM tree:

![DOM subtrees](./heap-snapshots-images/memory-problems-tree-gc.png)

The following code sample creates the JavaScript variables `treeRef` and `leafRef`, which reference two of the DOM nodes in the tree:

```javascript
// Get a reference to the #tree element.
const treeRef = document.querySelector("#tree");

// Get a reference to the #leaf element,
// which is a descendant of the #tree element.
const leafRef = document.querySelector("#leaf");
```

In the following code sample, the `<div id="tree">` element is removed from the DOM tree:

```javascript
// Remove the #tree element from the DOM.
document.body.removeChild(treeRef);
```

The `<div id="tree">` element can't be garbage-collected because the JavaScript variable `treeRef` still exists. The `treeRef` variable directly references the `<div id="tree">` element. In the following code sample, the `treeRef` variable is nullified:

```javascript
// Remove the treeRef variable.
treeRef = null;
```

The `<div id="tree">` element still can't be garbage-collected because the JavaScript variable `leafRef` still exists. The `leafRef.parentNode` property references the `<div id="tree">` element. In the following code sample, the `leafRef` variable is nullified:

```javascript
// Remove the leafRef variable.
leafRef = null;
```

At this point, the `<div id="tree">` element can be garbage-collected. Both `treeRef` and `leafRef` must first be nullified, for the whole DOM tree under the `<div id="tree">` element to be garbage-collected.


<!-- ------------------------------ -->
#### Demo webpage: Example 6: Leaking DOM nodes

To understand where DOM nodes might leak, and how to detect such leakage, open the example webpage [Example 6: Leaking DOM nodes](https://microsoftedge.github.io/Demos/devtools-memory-heap-snapshot/example-06.html) in a new window or tab.

<!-- You can view the source files for the Heap Snapshots demo pages at the [MicrosoftEdge/Demos > devtools-memory-heap-snapshot](https://github.com/MicrosoftEdge/Demos/tree/main/devtools-memory-heap-snapshot) repo folder. -->


<!-- ------------------------------ -->
#### Demo webpage: Example 8: Recording heap allocations

Open the example webpage [Example 8: Recording heap allocations](https://microsoftedge.github.io/Demos/devtools-memory-heap-snapshot/example-08.html) in a new window or tab.


<!-- ------------------------------ -->
#### Demo webpage: Example 9: DOM leaks bigger than expected

To see why a DOM leak might be bigger than expected, open the example webpage [Example 9: DOM leaks bigger than expected](https://microsoftedge.github.io/Demos/devtools-memory-heap-snapshot/example-09.html) in a new window or tab.

<!-- You can view the source files for the Heap Snapshots demo pages at the [MicrosoftEdge/Demos > devtools-memory-heap-snapshot](https://github.com/MicrosoftEdge/Demos/tree/main/devtools-memory-heap-snapshot) repo folder. -->

<!-- Example: Try this **demo** to play with detached DOM trees. -->

<!-- todo: add heap profiling dom leaks section when available -->


<!-- ====================================================================== -->
<!--[heap profiling comparison](https://developer.alphabet.com/devtools/docs/heap-profiling-comparison) -->
<!--[heap profiling containment](https://developer.alphabet.com/devtools/docs/heap-profiling-containment) -->
<!--[heap profiling DOM leaks](https://developer.alphabet.com/devtools/docs/heap-profiling-dom-leaks) -->
<!--[heap profiling summary](https://developer.alphabet.com/devtools/docs/heap-profiling-summary) -->
<!--[narrow down causes of memory leaks](../profile/memory-problems/memory-diagnosis#narrow-down-causes-of-memory-leaks) -->


<!-- ====================================================================== -->
## Analyze the impact of closures on memory

To analyze the impact of closures on memory, try out this example:

1. Open the [Eval is evil](https://microsoftedge.github.io/Demos/devtools-memory-heap-snapshot/example-07.html) demo webpage in a new window or tab.

1. Record a heap snapshot.

1. In the rendered webpage, click the **Closures with eval** button.

1. Record a second heap snapshot.

   In the sidebar, the number below the second snapshot should be larger than the number below the first snapshot. This indicates that more memory is being used by the webpage after clicking the **Closures with eval** button.

1. In the second heap snapshot, change the view to **Comparison**, and then compare the second heap snapshot to the first heap snapshot.

   The **Comparison** view shows that new strings were created in the second heap snapshot:

   ![The Comparison view, showing that new strings were created in the second snapshot](./heap-snapshots-images/closure-retained-strings.png)

1. In the **Comparison** view, expand the **(string)** constructor.

1. Click the first **(string)** entry.

   The **Retainers** section is updated and shows that the `largeStr` variable retains the string selected in the **Comparison** view.

   The `largeStr` entry is automatically expanded and shows that the variable is retained by the `eC` function, which is the closure where the variable is defined:

   ![The Retainers section, showing that the string is retained by the eC function](./heap-snapshots-images/closure-retained-strings-details.png)


<!-- ------------------------------ -->
#### Tip: Name functions to differentiate between closures in a snapshot

To easily distinguish between JavaScript closures in a heap snapshot, give your functions names.

The following example uses an unnamed function to return the `largeStr` variable:

```javascript
function createLargeClosure() {
    const largeStr = 'x'.repeat(1000000).toLowerCase();

    // This function is unnamed.
    const lC = function() {
        return largeStr;
    };

    return lC;
}
```

The following example names the function, which makes it easier to distinguish between closures in the heap snapshot:

```javascript
function createLargeClosure() {
    const largeStr = 'x'.repeat(1000000).toLowerCase();

    // This function is named.
    const lC = function lC() {
        return largeStr;
    };

    return lC;
}
```


<!-- ====================================================================== -->
## Save and export strings from a heap snapshot to JSON

When taking a heap snapshot in the **Memory** tool, you can export all string objects from the snapshot to a JSON file.  In the **Memory** tool, in the **Constructor** section, click the **Save all to file** button next to the `(string)` entry:

![Save all strings from a heap snapshot to JSON](heap-snapshots-images/save-heap-snapshot-strings-json.png)

The **Memory** tool exports a JSON file that contains all of the string objects from the heap snapshot:

![Strings from the heap snapshot, in the JSON file](heap-snapshots-images/heap-snapshot-strings-json-file.png)



<!-- ====================================================================== -->
## Find DOM tree memory leaks ("Heap snapshot" profiling type > Detached)

One way to find and display all of the detached elements on a webpage is to use the **Memory** tool's **Heap snapshot** profiling type, then type **Detached** in the **Filter by class** text box, as follows.  See also [Tools for investigating detached elements](./index.md#tools-for-investigating-detached-elements) in _Fix memory problems_.

The following code produces detached DOM nodes:

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

This code creates a `ul` node with ten `li` children.  The nodes are referenced by the code, but they don't exist in the DOM tree, so each node is detached.

Heap snapshots are one way to identify detached nodes.  A heap snapshot shows how memory is distributed among the JS objects and DOM nodes for your page at the point of time of the snapshot.


<!-- ------------------------------ -->
#### Use the "Heap snapshot" profiling type to find detached elements

To use the **Heap snapshot** profiling type to find detached elements:

1. Open a webpage, such as the [Detached Elements demo webpage](https://microsoftedge.github.io/Demos/detached-elements/), in a new window or tab.

1. Right-click the webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).

   DevTools opens.

1. In DevTools, in the **Activity Bar**, select the **Memory** (![Memory tool icon](./heap-snapshots-images/memory-tool-icon.png)) tool.

   If that tab isn't visible, click the **More Tools** (![More Tools icon](./heap-snapshots-images/more-tools-icon.png)) button, and then select **Memory**.  The **Memory** tool opens:

   ![Open the Memory tool](./heap-snapshots-images/memory-tool-heap-snapshot-option-button.png)

   If the **Heap snapshot** option button isn't shown, because a profile is already displayed, in the upper left, click **Profiles** (![the Profiles icon](./heap-snapshots-images/profiles-icon.png)).

   You don't need to select the **Heap snapshot** option button at this point, because the webpage hasn't generated any detached elements yet.

   <!-- ------------------------------ -->
   **Generate messages, which will be stored by the JavaScript instance of the Room class:**

1. In the demo webpage, click the **Fast traffic** button.

   The demo webpage begins generating messages and displaying them in the webpage:

   ![Generating some messages in the demo webpage](./heap-snapshots-images/fast-traffic-stop.png)

1. After some messages are displayed, click the **Stop** button in the demo webpage.

   Each message is a `<div class="message">` element that's referenced by the Room 1 instance of the `Room` class.  There are no detached elements in the webpage DOM tree, because all of the message elements are attached to the present, Room 1 instance of the **Room** class.


   <!-- ------------------------------ -->
   **Change to a different instance of the Room class, so elements become detached:**

1. In the demo webpage, click the **Room 2** button, which corresponds to another instance of the `Room` class.

   In the webpage, the messages disappear:

   ![Room 2 initial view](./heap-snapshots-images/room-2-initial-view.png)

   The messages that were generated for the Room 1 instance of the **Room** class (`<div class="message">` elements) are no longer attached to the DOM, but they're still referenced by the Room 1 instance of the **Room** class.  They are detached elements, which can cause memory leaks, unless they are going to be used again by the webpage.


   <!-- ------------------------------ -->
   **Get the list of detached elements:**

1. In DevTools, in the **Memory** tool, click the **Collect garbage** (![The 'Collect garbage' icon](./heap-snapshots-images/collect-garbage-icon.png)) icon:

   ![Taking a heap snapshot](./heap-snapshots-images/room-2-take-snapshot.png)

   The browser runs garbage collection, removing any nodes that are no longer referenced by a JavaScript object.

1. In the **Memory** tool, select the **Heap snapshot** option button.

1. Click the **Take snapshot** button at the bottom of the **Memory** tool.

   The snapshot is processed, loaded, and then listed in the **Profiles** sidebar, in the **Heap snapshots** section.

1. In the **Filter by class** text box, type **detached**:

   ![Filtering for detached nodes, and expanding a detached node](./heap-snapshots-images/memory-heap-snapshot-filter-detached.png)

   The detached DOM elements that can't be garbage-collected are displayed.


   <!-- ------------------------------ -->
   **Identify the JavaScript code that references a particular detached element:**

1. In the heap snapshot, expand a **Detached** object, such as **Detached \<div\>**, and then select a **Detached \<div class="message"\>** node.

   Information is displayed in the **Retainers** pane at the bottom of the **Memory** tool.

   <!-- old text:
   Nodes that are highlighted yellow have direct references to them from the JavaScript code.  Nodes that are highlighted in red don't have direct references.  They are only alive because they are part of the tree for the yellow node.  In general, you want to focus on the yellow nodes.  Fix your code so that the yellow node isn't alive for longer than it needs to be, and you also get rid of the red nodes that are part of the tree for the yellow node.
   -->

1. In the **Retainers** pane, click the `room.js:13` link for an **unmounted in Room** item under **Array**.  The **Sources** tool opens, displaying `room.js`, scrolled to line 13:

   ![The JavaScript source code in the **Sources** tool](./heap-snapshots-images/js-in-sources-tool.png)

1. To inspect the possible memory leak, study the code that uses the `unmounted` array and make sure that the reference to the node is removed when it is no longer needed.

1. To return to the **Memory** tool, in the **Address Bar**, select the **Memory** tool.


For additional ways to see detached elements, see [Tools for investigating detached elements](./index.md#tools-for-investigating-detached-elements) in _Fix memory problems_.

<!--todo old: the allocation timeline doesn't appear in the DevTools in Edge  -->


<!-- ====================================================================== -->
## See also
<!-- todo: all links in article -->

* [Tools for investigating detached elements](./index.md#tools-for-investigating-detached-elements) in _Fix memory problems_.
* [Memory terminology](./memory-101.md)

External:
* [Finding and debugging memory leaks in JavaScript with Chrome DevTools](https://slid.es/gruizdevilla/memory) - slide deck (by Gonzalo Ruiz de Villa), which also applies to Microsoft Edge DevTools.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/) and is authored by Meggin Kearney.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
