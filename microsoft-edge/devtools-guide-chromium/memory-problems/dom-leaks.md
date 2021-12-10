---
title: Debug DOM memory leaks
description: Use the Detached Elements tool in the Microsoft Edge DevTools to find and fix DOM memory leaks.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/30/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, detached elements, document object model, dom, memory, leak, node
---

# Debug DOM memory leaks with the Detached Elements tool

A memory leak can occur in your application when an element is no longer attached to the Document Object Model (DOM) tree, but is still referenced by some JavaScript running on the page. These elements are called *detached elements*. For the browser to garbage collect (GC) the detached element, the element must not be referenced from either the DOM tree or JavaScript code.

This article describes how to use the **Detached Elements** tool in Microsoft Edge DevTools to find detached elements that the browser cannot GC in a demo application and identify the JavaScript that is still referencing the detached element. By changing your JavaScript to release the element, you reduce the number of detached elements on your page.

For more information about heap snapshots and detached elements, read [Discover detached DOM tree memory leaks with Heap Snapshots](index.md#discover-detached-dom-tree-memory-leaks-with-heap-snapshots).


<!-- ====================================================================== -->
## Open the Detached Elements tool

The **Detached Elements** tool is available by default in Microsoft Edge 97 and later. Check your version of Microsoft Edge by going to `edge://version`. If your version is less than 97, read [Turning an experiment on or off](../experimental-features/index.md#turning-an-experiment-on-or-off) for instructions about turning on the **Detached Elements** experiment.

To open the **Detached Elements** tool:

1. Open the [demo application](https://microsoftedge.github.io/Demos/detached-elements/).

1. [Open DevTools](../open/index.md).

1. Click the **+** button in the toolbar.

1. Click **Detached Elements**.

:::image type="content" source="./images/open-detached-elements.msft.png" alt-text="Open the Detached Elements tool." lightbox="./images/open-detached-elements.msft.png":::


<!-- ====================================================================== -->
## Get detached elements

The **Get Detached Elements** (![The Get Detached Elements icon.](images/get-detached-elements-icon-light-mode.png)) button in the **Detached Elements** tool finds and displays all of the detached elements on a web page.

To find detached elements:

1. In the demo application, make sure that the **Room 1** button is selected.

1. In the demo application, click the **Simulate high traffic** button.

1. After some messages are generated and displayed in the demo application, click the demo's **Stop** button.

:::image type="content" source="./images/detached-elements-demo-app.msft.png" alt-text="Generating some messages in the demo application." lightbox="./images/detached-elements-demo-app.msft.png":::

1. Click the **Room 2** button.

1. In the **Detached Elements** tool, click the **Get Detached Elements** (![The Get Detached Elements icon.](images/get-detached-elements-icon-light-mode.png)) icon.

:::image type="content" source="./images/get-detached-elements.msft.png" alt-text="Get Detached Elements using the Detached Elements tool." lightbox="./images/get-detached-elements.msft.png":::

The **Detached Elements** tool displays all of the detached elements of the page.  When you switch to **Room 2** in the demo application, the messages that were generated in **Room 1** are no longer attached to the DOM, but they are still referenced by JavaScript.


<!-- ====================================================================== -->
## Trigger garbage collection

Next, trigger garbage collection (GC) in the browser:

1. In the **Detached Elements** tool, click the **Collect garbage** (![The 'Collect garbage' icon.](images/collect-garbage-icon-light-mode.png)) icon.

1. Click the **Get Detached Elements** (![The Get Detached Elements icon.](images/get-detached-elements-icon-light-mode.png)) icon.

When you select **Collect garbage**, the browser runs garbage collection. When you select **Get Detached Elements**, the **Detached Elements** tool displays all detached elements that cannot be garbage collected. These detached elements may be memory leaks if they are not going to be reused by the application.


<!-- ====================================================================== -->
## Identify the JavaScript code that retains detached elements

Once you have found a detached element that cannot be garbage-collected, you can use the **Analyze** button in the **Detached Elements** tool to identify the JavaScript code running on the page that is still referencing the detached element. The **Analyze** button takes a heap snapshot and populates the **Id** of the detached element with its location in the heap. For more information about heap snapshots, read [Record heap snapshots](heap-snapshots.md).

:::image type="content" source="./images/analyze-detached-elements.msft.png" alt-text="Analyze Detached Elements in the Detached Elements tool." lightbox="./images/analyze-detached-elements.msft.png":::

To identify the JavaScript code that references a detached element:

1. In the **Detached Elements** tool, click the **Analyze** (![The Analyze icon.](images/analyze-icon-light-mode.png)) icon.

    The **Memory** tool opens in the bottom panel of DevTools.

1. From the **Detached Elements** tool, select the **Id** field of a detached element.

   The **Memory** tool in the bottom panel automatically selects the object in the heap that is referencing the detached element. We call these objects **Retainers**.

   :::image type="content" source="./images/detached-elements-heap-snapshot.msft.png" alt-text="Referencing a heap snapshot from the Detached Elements tool." lightbox="./images/detached-elements-heap-snapshot.msft.png":::

1. In the **Memory** tool in the bottom panel, select the link **room.js:13**.

   The **Sources** tool opens in the top panel to line 13 of the file **room.js**.

1. In the `hide()` function of **room.js**, the JavaScript code of the demo application adds each message in the room to an `unmounted` array. The `unmounted` array is the object that is referencing the detached element.

:::image type="content" source="./images/detached-elements-javascript-retainers.msft.png" alt-text="Identifying the JavaScript that is retaining the detached element." lightbox="./images/detached-elements-javascript-retainers.msft.png":::

You have now identified the retainer that is preventing the detached element from being garbage-collected by the browser!


<!-- ====================================================================== -->
## Identify the DOM node causing others to be retained

Because the DOM is a fully connected graph, when one DOM node is retained in memory by JavaScript it can cause other DOM nodes to be retained with it.

To identify the culprit node in a detached tree that is causing the entire tree to be retained:

1.  Click the **Detach Elements** (![The Detach Elements icon.](images/detach-elements-icon-light-mode.png)) icon to destroy the parent-child links inside the detached tree.

    :::image type="content" source="./images/detached-elements-remove-links.msft.png" alt-text="The Detach Elements button in the Detached Elements tool." lightbox="./images/detached-elements-remove-links.msft.png":::

1.  Click the **Collect garbage** (![The 'Collect garbage' icon.](images/collect-garbage-icon-light-mode.png)) icon.

Parent-child links are removed inside the detached tree.


<!-- ====================================================================== -->
## Change the selected target to a different origin

You can check for detached elements from different origins or frames using the **Selected target** dropdown. 

1.  Click the **Selected target** dropdown.

    :::image type="content" source="./images/detached-elements-target-dropdown.msft.png" alt-text="The 'Selected target' dropdown lets you select different origins." lightbox="./images/detached-elements-target-dropdown.msft.png":::

1.  Select a different origin.

The new origin is displayed in the **Detached Elements** tool.

   
<!-- ====================================================================== -->
## Additional considerations

When looking for memory leaks, remember that leaks can depend on the context of your application. For the demo application, you found detached elements that could not be garbage collected by the browser, and you identified the JavaScript that's retaining the detached elements. However, in the context of the demo application, it makes sense to retain the list of chat messages, so that if a user switches back to **Room 1**, the message log is preserved.

The following image shows detached elements in the form of messages that are reattached when a user navigates from **Room 2** back to **Room 1**. 

:::image type="content" source="./images/detached-elements-reattached.msft.png" alt-text="The detached elements are reattached to the DOM when switching back to Room 1." lightbox="./images/detached-elements-reattached.msft.png":::

Similarly, a feed in social media might detach elements as users scroll past them, and reattach them to the DOM when users scroll back up. Detached elements are not always an indication of a memory leak, and memory leaks are not always caused by detached elements.

For long-running apps, small memory leaks of only a few kilobytes can noticeably degrade performance over time. Web developers who use the React framework know that React maintains a virtualized copy of the DOM. Failing to properly unmount components can potentially lead to an application leaking large parts of the virtual DOM.

This demo app and its leaks are artificial. Test the Detached Elements tool on your production website or app. If you find potential problems with the Detached Elements tool, [contact the Microsoft Edge DevTools team](../contact.md) to send feedback about the **Detached Elements** tool and memory leak debugging.
