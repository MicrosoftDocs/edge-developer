---
title: 
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





# Memory Terminology   



This section describes common terms used in memory analysis, and is applicable to a variety of memory profiling tools for different languages.  

The terms and notions described here refer to the **Memory** panel.  If you have ever worked with either the Java, .NET, or some other memory profiler, then this may be a refresher.  

<!--todo: add /memory-problems/heap-snapshots when available  -->  

## Object sizes  

Think of memory as a graph with primitive types \(like numbers and strings\) and objects \(associative arrays\).  It might visually be represented as a graph with a number of interconnected points as follows:  

> ##### Figure 1  
> Visual representation of memory  
>![Visual representation of memory][ImageThinkGraph]  

An object may hold memory in two ways:  

*   Directly by the object.  

*   Implicitly by holding references to other objects, and therefore preventing those objects from being automatically disposed by a garbage collector \(**GC** for short\).  

When working with the **Memory** panel in DevTools \(a tool for investigating memory issues found under "Memory"\), you may find yourself looking at a few different columns of information.  Two that stand out are **Shallow Size** and **Retained Size**, but what do these represent?  

> ##### Figure 2  
> Shallow and Retained Size  
>![Shallow and Retained Size][ImageShallowRetained]  

### Shallow size  

This is the size of memory that is held by the object.  

Typical JavaScript objects have some memory reserved for their description and for storing immediate values.  Usually, only arrays and strings are able to have a significant shallow size.  However, strings and external arrays often have their main storage in renderer memory, exposing only a small wrapper object on the JavaScript heap.  

Renderer memory is all memory of the process where an inspected page is rendered: native memory + JS heap memory of the page + JS heap memory of all dedicated workers started by the page.  Nevertheless, even a small object is able to hold a large amount of memory indirectly, by preventing other objects from being disposed of by the automatic garbage collection process.  

### Retained size  

This is the size of memory that is freed once the object is deleted along with the dependent objects that were made unreachable from **GC roots**.  

**GC roots** are made up of **handles** that are created \(either local or global\) when making a reference from native code to a JavaScript object outside of V8.  All such handles may be found within a heap snapshot under **GC roots** > **Handle scope** and **GC roots** > **Global handles**.  Describing the handles in this documentation without diving into details of the browser implementation may be confusing.  Both GC roots and the handles are not something you need to worry about.  

There are lots of internal GC roots most of which are not interesting for the users.  From the applications standpoint there are following kinds of roots:  

* Window global object \(in each iframe\).  There is a distance field in the heap snapshots which is the number of property references on the shortest retaining path from the window.  

* Document DOM tree consisting of all native DOM nodes reachable by traversing the document.  Not all of the nodes may have JS wrappers but if a node has a wrapper, it is alive while the document is alive.  

* Sometimes objects may be retained by the debugger context in the **Sources** panel and the **Console** \(for example after Console evaluation\).  Create heap snapshots with a cleared **Console** panel and no active breakpoints in the debugger in the **Sources** panel.

>[!TIP]
> Clear the **Console** panel by running `clear()` and deactivate breakpoints in the **Sources** panel before taking a heap snapshot in the **Memory** panel

The memory graph starts with a root, which may be the `window` object of the browser or the `Global` object of a Node.js module.  You do not control how this root object is GCd.  

> ##### Figure 3  
> You are not able to control how the root object is GCd.  
>![You are not able to control how the root object is GCd.][ImageDontControl]  

Whatever is not reachable from the root gets GCd.  

> [!NOTE]
> Both the [Shallow size](#shallow-size) and [Retained size](#retained-size) columns represent data in bytes.  

## Objects retaining tree  

The heap is a network of interconnected objects.  In the mathematical world, this structure is called a **graph** or memory graph.  A graph is constructed from **nodes** connected by means of **edges**, both of which are given labels.  

*   **Nodes**  \(or **objects**\) are labelled using the name of the **constructor** function that was used to build them.  
*   **Edges**  are labelled using the names of **properties**.  

<!--Learn [how to record a profile using the Heap Profiler](../profile/memory-problems/heap-snapshots).  -->  
Some of the eye-catching things that you may see in the Heap Snapshot recording in the **Memory** panel below include distance: the distance from the GC root. If almost all the objects of the same type are at the same distance, and a few are at a bigger distance, that is something worth investigating.  

> ##### Figure 4  
> Distance from root  
>![Distance from root][ImageRoot]  

<!--todo: add how to record a profile using the Heap Profiler section when available  -->  

## Dominators  

Dominator objects are comprised of a tree structure because each object has exactly one dominator.  A dominator of an object may lack direct references to an object it dominates; that is, the tree of the dominator is not a spanning tree of the graph.  

In the diagram below:  

*   Node 1 dominates node 2  
*   Node 2 dominates nodes 3, 4 and 6  
*   Node 3 dominates node 5  
*   Node 5 dominates node 8  
*   Node 6 dominates node 7  

> ##### Figure 5  
> Dominator tree structure  
>![Dominator tree structure][ImageDominatorsSpanning]  

In the example below, node `#3` is the dominator of `#10`, but `#7` also exists in every simple path from GC to `#10`.  Therefore, an object B is a dominator of an object A if B exists in every simple path from the root to the object A.  

> ##### Figure 6  
> Animated dominator illustration  
>![Animated dominator illustration][ImageDominators]  

## V8 specifics  

When profiling memory, it is helpful to understand why heap snapshots look a certain way.  This section describes some memory-related topics specifically corresponding to the **V8 JavaScript virtual machine** \(V8 VM or VM\).  

### JavaScript object representation  

There are three primitive types:  

*   Numbers \(for example `3.14159...`\)  
*   Booleans \(`true` or `false`\)  
*   Strings \(for example `"Werner Heisenberg"`\)  

Primitives are not able to reference other values and are always leafs or terminating nodes.  

**Numbers** are able to be stored as either:  

*   an immediate 31-bit integer values called **small integers** \(**SMI**s\), or  
*   heap objects, referred to as **heap numbers**. Heap numbers are used for storing values that do not fit into the SMI form, such as **doubles**, or when a value needs to be **boxed**, such as setting properties on it.  

**Strings** are able to be stored in either:  

*   the **VM heap**, or
*   externally in the **memory of the renderer**.  A **wrapper object** is created and used for accessing external storage where, for example, script sources and other content that is received from the Web is stored, rather than copied onto the VM heap.

Memory for new JavaScript objects is allocated from a dedicated JavaScript heap \(or **VM heap**\).  These objects are managed by the garbage collector in V8 and therefore, stay alive as long as there is at least one strong reference to them.  

Anything not in the JavaScript heap is called a **native object**.  Native objects, in contrast to heap objects, are not managed by the V8 garbage collector throughout their lifetime, and may only be accessed from JavaScript using the JavaScript wrapper object.  

**Cons string** is an object that consists of pairs of strings stored and then joined, and is a result of concatenation.  The joining of the **cons string** contents occurs only as needed. An example would be when a substring of a joined string needs to be constructed.

For example, if you concatenate `a` and `b`, you get a string `(a, b)` which represents the result of concatenation.  If you later concatenated `d` with that result, you get another **cons string**: `((a, b, d)`.  

**Array** is an object with numeric keys. **Arrays** are used extensively in the V8 VM for storing large amounts of data. Sets of key-value pairs, like dictionaries, are backed up by **arrays**.  

A typical JavaScript object is stored as only one of two **array** types:  

*   named properties, and  
*   numeric elements  

When there are a small number of properties, the properties are stored internally in the JavaScript object.  

**Map** is an object that describes both the kind of object it is and the layout. For example, maps are used to describe implicit object hierarchies for [fast property access](https://v8.dev/#prop_access).  

### Object groups  

Each **native objects** group is made up of objects that hold mutual references to each other.  Consider, for example, a DOM subtree where every node has a link to the relative parent and links to the next child and next sibling, thus forming a connected graph.  Note that native objects are not represented in the JavaScript heap  —  that is why native objects have zero size. Instead, wrapper objects are created.  

Each wrapper object holds a reference to the corresponding native object, for redirecting commands to it.  In turn, an object group holds wrapper objects.  However, this does not create an uncollectable cycle, as GC is smart enough to release object groups whose wrappers are no longer referenced. But forgetting to release a single wrapper holds the whole group and associated wrappers.  

<!--## Feedback   -->  



<!-- image links -->  

[ImageThinkGraph]: images/thinkgraph.msft.png "Figure 1: Visual representation of memory"  
[ImageShallowRetained]: images/shallow-retained.msft.png "Figure 2: Shallow and Retained Size"  
[ImageDontControl]: images/dontcontrol.msft.png "Figure 3: You are not able to control how the root object is GCd."  
[ImageRoot]: images/root.msft.png "Figure 4: Distance from root"  
[ImageDominatorsSpanning]: images/dominatorsspanning.msft.png "Figure 5: Dominator tree structure"  
[ImageDominators]: images/dominators.msft.gif "Figure 6: Animated dominator illustration"  

<!-- links -->  

<!--[DevtoolsProfileMemoryProblemsHeapSnapshots]: ../profile/memory-problems/heap-snapshots ""  -->  
<!--[DevToolsV8DesignPropAccess]: /v8/design.html#prop_access ""  -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/memory-problems/memory-101) and is authored by [Meggin Kearney][MegginKearney] \(Technical Writer\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
[MegginKearney]: https://developers.google.com/web/resources/contributors/megginkearney
