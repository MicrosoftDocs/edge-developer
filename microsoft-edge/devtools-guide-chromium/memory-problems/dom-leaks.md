---
title: Debug DOM memory leaks by using the Detached Elements tool
description: Find and fix DOM memory leaks by using the Detached Elements tool, in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 10/17/2024
---
# Debug DOM memory leaks by using the Detached Elements tool

The **Detached Elements** tool is one way to find and display all of the detached elements on a webpage.  For additional ways to assess memory leaks, see, see [Tools for investigating detached elements](./index.md#tools-for-investigating-detached-elements) in _Fix memory problems_.


> [!IMPORTANT]
> The **Detached Elements** tool is being deprecated.  Starting with Microsoft Edge 130, the **Detached Elements** tool has a message stating that the tool is deprecated; instead, in the **Memory** tool, in the initial **Select profiling type** screen, select the **Detached elements** option button.  The Edge-only Chrome DevTools Protocol (CDP) function `EdgeDOMMemory.getDetachedNodesIds` continues to work, but use `DOM.getDetachedDomNodes` instead.
> 
> In Microsoft Edge 133, the **Detached Elements** tool will be removed; instead, in the **Memory** tool, in the initial **Select profiling type** screen, select the **Detached elements** option button.  The CDP function `EdgeDOMMemory.getDetachedNodesIds` will be removed; use `DOM.getDetachedDomNodes` instead.


<!-- copied paragraph to article "Debug DOM memory leaks ("Detached elements" profiling type)" -->
To increase the performance of your webpage, find the elements that are detached from the DOM tree and which you didn't expect to still be referenced by JavaScript code.  Find the detached elements that the browser can't garbage-collect because your code still references them, and then release the JavaScript code references to the detached elements.

![The Detached Elements tool, showing list of detached elements](./dom-leaks-images/detached-elements-tool.png)

The **Detached Elements** tool, showing retainers in the **Memory** tool, with links to open the JavaScript code in the **Sources** tool:

![The Detached Elements tool, showing retainers](./dom-leaks-images/heap-snapshot.png)

See also:
* [Tools for investigating detached elements](./index.md#tools-for-investigating-detached-elements) in _Fix memory problems_ - comparison of tools to view detached elements.
   * [Find DOM tree memory leaks ("Detached elements" profiling type)](./index.md#find-dom-tree-memory-leaks-detached-elements-profiling-type) in _Fix memory problems_.
   * [Find DOM tree memory leaks ("Heap snapshot" profiling type > Detached)](./index.md#find-dom-tree-memory-leaks-heap-snapshot-profiling-type--detached) in _Fix memory problems_.
   * [Record heap snapshots using the Memory tool ("Heap snapshot" profiling type)](./heap-snapshots.md)


<!-- ------------------------------ -->
#### Video: Debug memory leaks with the Microsoft Edge Detached Elements tool

[![Thumbnail image for video "Debug memory leaks with the Microsoft Edge Detached Elements tool"](./dom-leaks-images/detached-elements.png)](https://www.youtube.com/watch?v=v2iy17ptmBk)


<!-- ------------------------------ -->
#### Strategy to fix memory leaks by using the Detached Elements tool

1. Open a webpage to analyze.
1. Open the **Detached Elements** tool.
1. Run garbage collection, removing all nodes that are no longer referenced by a JavaScript object.
1. Get all detached elements, which couldn't be garbage-collected.
1. Analyze a particular detached element and its JavaScript, to identify the culprit node in a detached tree that is causing the entire tree to be retained.


<!-- ====================================================================== -->
## Get detached elements and analyze a detached element's JavaScript

To analyze a detached element by using the **Detached Elements** demo webpage:

1. Open the [Detached Elements demo webpage](https://microsoftedge.github.io/Demos/detached-elements/) in a new window or tab.

   The **Room 1** button is initially selected.  In the JavaScript code of the demo webpage, an instance of the `Room` class is used to manage the messages in Room 1.

1. Right-click the webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).

   DevTools opens.

1. In DevTools, in the **Activity Bar**, select the **Detached Elements** (![The Detached Elements tool icon](./dom-leaks-images/detached-elements-tool-icon.png)) tab.  If that tab isn't visible, click the **More Tools** (![More Tools icon](./dom-leaks-images/more-tools-icon.png)) button, or make DevTools wider.  The **Detached Elements** tool opens:

   ![Open the Detached Elements tool](./dom-leaks-images/open-detached-elements.png)


   <!-- ------------------------------ -->
   **Generate messages, which will be stored by the JavaScript instance of the Room class:**

1. In the demo webpage, click the **Fast traffic** button.

   The demo webpage begins generating messages and displaying them in the webpage:

   ![Generating some messages in the demo webpage](./dom-leaks-images/demo-app.png)

1. After some messages are displayed, click the **Stop** button in the demo webpage.

   Each message is a `<div class="message">` element that's referenced by the Room 1 instance of the `Room` class.  There are no detached elements in the webpage DOM tree, because all of the message elements are attached to the present, Room 1 instance of the **Room** class.


   <!-- ------------------------------ -->
   **Change to a different instance of the Room class, so elements become detached:**

1. In the demo webpage, click the **Room 2** button, which corresponds to another instance of the `Room` class.

   In the webpage, the messages disappear:

   ![Room 2 initial view](./dom-leaks-images/room-2-initial-view.png)

   The messages that were generated for the Room 1 instance of the **Room** class (`<div class="message">` elements) are no longer attached to the DOM, but they're still referenced by the Room 1 instance of the **Room** class.  They are detached elements, which can cause memory leaks, unless they are going to be used again by the webpage.


   <!-- ------------------------------ -->
   **Get the list of detached elements:**

1. In DevTools, in the **Detached Elements** tool, click the **Collect garbage** (![The 'Collect garbage' icon](./dom-leaks-images/collect-garbage-icon.png)) icon.

   The browser runs garbage collection, removing any nodes that are no longer referenced by a JavaScript object.

1. In the **Detached Elements** tool, click the **Get Detached Elements** (![The Get Detached Elements icon](./dom-leaks-images/get-detached-elements-icon.png)) button.

   The detached DOM elements that can't be garbage-collected are displayed:

   ![The Get Detached Elements button](./dom-leaks-images/get-detached-elements.png)

   These detached elements are memory leaks, if they aren't going to be reused by the application.


   <!-- the remainder is not in the article about Memory tool > DE profiling type; the above content is essentially same there -->
   <!-- ------------------------------ -->
   **Identify the JavaScript code that references a particular detached element:**

1. In the **Detached Elements** tool, click the **Analyze** (![The Analyze icon](./dom-leaks-images/analyze-icon.png)) button.

   A message is briefly displayed at the bottom of the **Detached Elements** tool, **Taking a memory heap snapshot...**, and then the message **All done**.  The **Memory** tool opens in the **Quick View** panel at the bottom of DevTools:

   ![Analyze Detached Elements in the Detached Elements tool](./dom-leaks-images/analyze-detached-elements.png)

   If **Profiling type** option buttons are displayed in the **Memory** tool instead of a **Summary** and **Retainers** UI, click the **Analyze** (![The Analyze icon](./dom-leaks-images/analyze-icon.png)) button again.

1. In the **Detached Elements** tool, in the **Id** column, double-click an ID, such as **@21299** or **@21783**.

   This is the unique identifier of one of the `<div class="message">` elements in the memory heap snapshot.  The **Memory** tool displays retainers in the **Retainers** tab:

   ![Referencing a heap snapshot from the Detached Elements tool](./dom-leaks-images/heap-snapshot.png)

   The **Memory** tool automatically selects the object in the heap that is referencing the detached element.  Such an object is called a _retainer_.

1. In the **Retainers** tab, in a retainer sub-entry about the `unmounted` member, such as **unmounted in Room @54011**, click the link **room.js:13**.

   The **Sources** tool opens in the **Activity Bar** and shows line 13 of the file **room.js** (the `Room` constructor):

   ![Line 13 in room.js: the Room constructor](./dom-leaks-images/room-js-line-13.png)

   `unmounted` is an array member of the `Room` class, defined in line 19 in the constructor: `this.unmounted = [];`.

1. Scroll down to line 49, `this.unmounted.push(el);` within the `hide` method of the `Room` class:

   ![Identifying the JavaScript that is retaining the detached element](./dom-leaks-images/javascript-retainers.png)

   The code adds each message in the room to the `unmounted` array.  The `unmounted` array is the object that is referencing the detached element.

In the JavaScript code, you have now identified the retainer object (the `unmounted` array) that's preventing the detached element from being garbage-collected by the browser.

You've found detached elements that the browser can't garbage-collect, and located the JavaScript object that's still referencing the detached element.  You can then change the JavaScript code to release the element, to reduce the number of detached elements on the webpage, increasing webpage performance and responsiveness.


<!-- section not relevant for article "Debug DOM memory leaks ("Detached elements" profiling type)" -->
<!-- ====================================================================== -->
## Identify the DOM node that's causing other DOM nodes to be retained
<!-- optional detailed UI after the above standard steps -->

Because the DOM is a fully connected graph, when one DOM node is retained in memory by JavaScript it can cause other DOM nodes to be retained with it.

To identify the culprit node in a detached tree that is causing the entire tree to be retained:

1. Click the **Detach Elements** (![The Detach Elements icon](./dom-leaks-images/detach-elements-icon.png)) icon to destroy the parent-child links inside the detached tree.

1. Click the **Collect garbage** (![The 'Collect garbage' icon](./dom-leaks-images/collect-garbage-icon.png)) icon.

   Parent-child links are removed inside the detached tree, and the remaining item is the DOM node that caused other DOM nodes to be retained:

   ![The Detach Elements button in the Detached Elements tool](./dom-leaks-images/remove-links.png)


<!-- section not relevant for article "Debug DOM memory leaks ("Detached elements" profiling type)" -->
<!-- ====================================================================== -->
## Change the selected target to a different origin
<!-- optional detailed UI after the above standard steps -->

To check for detached elements from different origins or frames by using the **Selected target** dropdown list:

1. Click the **Selected target** dropdown list:

   ![Use the 'Selected target' dropdown list to select different origins](./dom-leaks-images/target-dropdown.png)

1. Select a different origin.

The new origin is displayed in the **Detached Elements** tool.

   
<!-- section copied into article "Debug DOM memory leaks ("Detached elements" profiling type)", but w/o DE tool's UI controls -->
<!-- ====================================================================== -->
## About detached elements and memory leaks

Detached elements aren't always an indication of a memory leak, and memory leaks aren't always caused by detached elements.  Memory leaks depend on the context of your application.

A memory leak can occur in your application when an element is no longer attached to the Document Object Model (DOM) tree, but is still referenced by some JavaScript running on the webpage. These elements are called *detached elements*.  For the browser to garbage-collect (GC) the detached element, the element must not be referenced from the DOM tree or from JavaScript code.

Memory issues affect webpage performance, including memory leaks, memory bloat, and frequent garbage collections.  Symptoms for your users include:

*  The performance of a webpage gets progressively worse over time.
*  The performance of a webpage is consistently bad.
*  The performance of a webpage is delayed or appears to pause frequently.


<!-- section not relevant for article "Debug DOM memory leaks ("Detached elements" profiling type)" -->
<!-- ====================================================================== -->
## Run GC before getting detached elements, to show only elements that can't be GC'd

To only show the elements that are detached from the DOM tree and that can't be garbage-collected, always click **Collect Garbage** first, and then click **Get Detached Elements**.

Even though some elements might appear as detached at one point in time, you won't know whether they are actually still referenced by JavaScript code in the webpage until you run GC.  When switching between chat rooms in the demo app, the web page removes the elements that are used to display messages from the DOM.  But switching to a different instance of the `Room` class doesn't delete these elements entirely and references to these elements still exist, so, these elements stay in memory.


<!-- copied (& trimmed) section into article "Debug DOM memory leaks ("Detached elements" profiling type)" -->
<!-- ====================================================================== -->
## Re-attaching elements

To use the demo webpage, you find detached elements that can't be garbage-collected by the browser, and you identify the JavaScript that's retaining the detached elements.  However, in the context of the demo webpage, it makes sense to retain the list of chat messages, so that if a user switches back to **Room 1**, the message log is preserved.

The following image shows detached elements in the form of messages that are reattached when a user navigates from **Room 2** back to **Room 1**:

![The detached elements are reattached to the DOM when switching back to Room 1](./dom-leaks-images/reattached.png)

Similarly, a feed in social media might detach elements as users scroll past them, and reattach them to the DOM when users scroll back up.

When the **Detached elements** tool reports detached elements, it's not necessarily a memory leak.  It's up to you to decide what's a memory leak and what's not.  Maybe your app will re-attach those elements later (instead of having to re-create them, which could be slower).

Detaching DOM nodes is a useful approach, as long as you eventually reuse those detached elements (or delete them).  The value of the **Detached elements** tool is, when you suspect a memory leak, you can check whether there are an increasing number of unexpected detached DOM elements being reported by the tool.


<!-- copied section into article "Debug DOM memory leaks ("Detached elements" profiling type)" -->
<!-- ====================================================================== -->
## Long-running apps and unmounting components

Be sure to unmount components.  For long-running apps, small memory leaks of only a few kilobytes can noticeably degrade performance over time.  For webpages that use the React framework, React maintains a virtualized copy of the DOM.  Failing to properly unmount components can potentially lead to an application leaking large parts of the virtual DOM.


<!-- section not copied into article "Debug DOM memory leaks ("Detached elements" profiling type)" -->
<!-- ====================================================================== -->
## Reporting issues

If you find issues with how the **Detached Elements** feature works, [contact the Microsoft Edge DevTools team](../contact.md) to send feedback about the **Detached Elements** feature and memory leak debugging.


<!-- ====================================================================== -->
## See also

* [Tools for investigating detached elements](./index.md#tools-for-investigating-detached-elements) in _Fix memory problems_ - comparison of tools to view detached elements.

Demo:
* [Detached Elements demo webpage](https://microsoftedge.github.io/Demos/detached-elements/)
* [MicrosoftEdge/Demos > detached-elements](https://github.com/MicrosoftEdge/Demos/tree/main/detached-elements) repo folder - source code.
