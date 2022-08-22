---
title: Debug DOM memory leaks with the Detached Elements tool
description: Use the Detached Elements tool in the Microsoft Edge DevTools to find and fix DOM memory leaks.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 11/30/2021
---
# Debug DOM memory leaks with the Detached Elements tool

Use the **Detached Elements** tool to find detached elements that the browser cannot garbage-collect, and locate the JavaScript object that is still referencing the detached element.  By changing your JavaScript to release the element, you reduce the number of detached elements on your page.

A memory leak can occur in your application when an element is no longer attached to the Document Object Model (DOM) tree, but is still referenced by some JavaScript running on the page. These elements are called *detached elements*.  For the browser to garbage-collect (GC) the detached element, the element must not be referenced from the DOM tree or from JavaScript code.

For more information about heap snapshots and detached elements, read [Discover detached DOM tree memory leaks with Heap Snapshots](index.md#discover-detached-dom-tree-memory-leaks-with-heap-snapshots).

As explained in [Fix memory problems](index.md), memory issues affect page performance, including memory leaks, memory bloat, and frequent garbage collections.  Symptoms for your users include:

*  The performance of a page gets progressively worse over time.
*  The performance of a page is consistently bad.
*  The performance of a page is delayed or appears to pause frequently.


<!-- ====================================================================== -->
## Open the Detached Elements tool

To open the **Detached Elements** tool and load the demo page:

1. Open the [Detached Elements demo application](https://microsoftedge.github.io/Demos/detached-elements/) in a new window or tab.

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press `Ctrl`+`Shift`+`I` (Windows, Linux) or `Command`+`Option`+`I` (macOS).  DevTools opens.

1. In DevTools, in the Activity Bar, click the **More tools** (+) icon,  **Detached Elements** tab.  If that tab isn't visible, click the **More tabs** (![More tabs icon](../media/more-tabs-icon-light-theme.png)) button, or else the **More Tools** (![More Tools icon](../media/more-tools-icon-light-theme.png)) button:

   ![Open the Detached Elements tool](images/open-detached-elements.msft.png)


<!-- ====================================================================== -->
## Get detached elements

The **Get Detached Elements** (![The Get Detached Elements icon](images/get-detached-elements-icon-light-mode.png)) button in the **Detached Elements** tool finds and displays all of the detached elements on a web page.

To find detached elements:

1. In the demo application, make sure that the **Room 1** button is selected.

1. In the demo application, click the **Simulate high traffic** button.

1. After some messages are generated and displayed in the demo application, click the demo's **Stop** button:

   ![Generating some messages in the demo application](images/detached-elements-demo-app.msft.png)

1. Click the **Room 2** button.

1. In the **Detached Elements** tool, click the **Get Detached Elements** (![The Get Detached Elements icon](images/get-detached-elements-icon-light-mode.png)) icon:

   ![Get Detached Elements using the Detached Elements tool](images/get-detached-elements.msft.png)

The **Detached Elements** tool displays all of the detached elements of the page.  When you switched to **Room 2** in the demo application, the messages that were generated in **Room 1** are no longer attached to the DOM, but they are still referenced by JavaScript.


<!-- ====================================================================== -->
## Trigger garbage collection

Next, trigger garbage collection (GC) in the browser:

1. In the **Detached Elements** tool, click the **Collect garbage** (![The 'Collect garbage' icon](images/collect-garbage-icon-light-mode.png)) icon.

   The browser runs garbage collection.

1. Click the **Get Detached Elements** (![The Get Detached Elements icon](images/get-detached-elements-icon-light-mode.png)) icon.

   Now the **Detached Elements** tool displays all detached elements that cannot be garbage collected.  These remaining detached elements may be memory leaks, if they aren't going to be reused by the application.


<!-- ====================================================================== -->
## Identify the JavaScript code that retains detached elements

Next, after you have found a detached element that cannot be garbage-collected, you can use the **Analyze** button in the **Detached Elements** tool to identify the JavaScript code running on the page that is still referencing the detached element. The **Analyze** button takes a heap snapshot and populates the **ID** of the detached element with its location in the heap:

![Analyze Detached Elements in the Detached Elements tool](images/analyze-detached-elements.msft.png)

To identify the JavaScript code that references a detached element:

1. In the **Detached Elements** tool, click the **Analyze** (![The Analyze icon](images/analyze-icon-light-mode.png)) icon.  The **Id** column shows heap locations:

   ![Analyze result: IDs are shown](./images/analyze-result-ids-shown.png)

1. Click a row for a detached element.  The **Memory** tool opens, displaying the retainer object in the heap that is referencing the detached element:

   ![Referencing a heap snapshot from the Detached Elements tool](images/detached-elements-heap-snapshot.msft.png)

1. Switch back to the **Memory** tool.  (You might need to click **More tools** (+).)

1. In the **Retainers** section at the bottom, click the link **room.js:13**.  The **Sources** tool opens and displays line 13 of the file **room.js**:

   ![Line 13 of room.js in the Sources tool](./images/line-13.png)

1. In the `hide()` function of **room.js**, the JavaScript code of the demo application adds each message in the room to an `unmounted` array. The `unmounted` array is the object that is referencing the detached element:

   ![Identifying the JavaScript that is retaining the detached element](images/detached-elements-javascript-retainers.msft.png)

You have now identified the retainer that is preventing the detached element from being garbage-collected by the browser!

See also:
* [Record heap snapshots using the Memory tool](heap-snapshots.md)


<!-- ====================================================================== -->
## Identify the DOM node causing others to be retained

Because the DOM is a fully connected graph, when one DOM node is retained in memory by JavaScript it can cause other DOM nodes to be retained with it.

To identify the culprit node in a detached tree that is causing the entire tree to be retained:

1. In the **Detached Elements** tool, click the **Detach Elements** (![The Detach Elements icon](images/detach-elements-icon-light-mode.png)) icon to destroy the parent-child links inside the detached tree:

   ![The Detach Elements button in the Detached Elements tool](images/detached-elements-remove-links.msft.png)

1. Click the **Collect garbage** (![The 'Collect garbage' icon](images/collect-garbage-icon-light-mode.png)) icon.

Parent-child links are removed inside the detached tree.


<!-- ====================================================================== -->
## Change the selected target to a different origin

To check for detached elements from different origins or frames:

1. Click the **Selected target** dropdown list:

   ![The 'Selected target' dropdown list lets you select different origins](images/detached-elements-target-dropdown.msft.png)

1. Select a different origin.

The new origin is displayed in the **Detached Elements** tool.

   
<!-- ====================================================================== -->
## Additional considerations


#### Detached elements might get reattached and should be retained

When looking for memory leaks, remember that leaks can depend on the context of your application. For the demo application, you found detached elements that could not be garbage collected by the browser, and you identified the JavaScript that's retaining the detached elements. However, in the context of the demo application, it makes sense to retain the list of chat messages, so that if a user switches back to **Room 1**, the message log is preserved.

The following image shows detached elements in the form of messages that are reattached when a user navigates from **Room 2** back to **Room 1**:

1. Assume you did the main steps above to view detached elements when the **Room 2** button of the demo page is selected.

   The elements were loaded when **Room 1** button was selected, but became detached when **Room 2** was selected.

1. Click the **Room 1** button to return to the room that created the elements.

1. Click the **Get Detached Elements** (![Get Detached Elements icon](images/get-detached-elements-icon-light-mode.png)) icon.  Now there are no detached elements, because the elements became reattached when returning to Room 1:

   ![The detached elements are reattached to the DOM when switching back to Room 1](images/detached-elements-reattached.msft.png)


#### Detached doesn't necessarily mean leak

Similarly, a feed in social media might detach elements as users scroll past them, and reattach them to the DOM when users scroll back up. Detached elements aren't always an indication of a memory leak, and memory leaks aren't always caused by detached elements.


#### Properly unmount components to avoid virtual DOM leaks

For long-running apps, small memory leaks of only a few kilobytes can noticeably degrade performance over time.  Web developers who use the React framework know that React maintains a virtualized copy of the DOM.  Failing to properly unmount components can potentially lead to an application leaking large parts of the virtual DOM.


#### Test the Detached Elements tool on your production website or app

This demo app and its leaks are artificial.  Test the Detached Elements tool on your production website or app.

If you find potential problems with the Detached Elements tool, [contact the Microsoft Edge DevTools team](../contact.md) to send feedback about the **Detached Elements** tool and memory leak debugging.


<!-- ====================================================================== -->
## See also

* [MicrosoftEdge/Demos > detached-elements](https://github.com/MicrosoftEdge/Demos/tree/main/detached-elements) - source code for the demo page
