---
description: Use the Detached Elements tool in the Microsoft Edge DevTools to find and fix DOM memory leaks.
title: Debug DOM memory leaks
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/29/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, detached elements, document object model, dom, memory, leak, node
---

# Debug DOM memory leaks with the Detached Elements tool

A memory leak can occur in your application when an element is no longer attached to the Document Object Model (DOM) tree, but is still referenced by some JavaScript running on the page. These elements are called *detached elements*. For the browser to garbage collect (GC) the detached element, the element must not be referenced from either the DOM tree or JavaScript code.

This article describes how to use the **Detached Elements** tool in Microsoft Edge DevTools to find detached elements that the browser cannot GC in a demo application and identify the JavaScript that is still referencing the detached element. By changing your JavaScript to release the element, you reduce the number of detached elements on your page.

For more information about heap snapshots and detached elements, read [Discover detached DOM tree memory leaks with Heap Snapshots](/devtools-guide-chromium/memory-problems/#discover-detached-dom-tree-memory-leaks-with-heap-snapshots).

## Open the Detached Elements tool

The **Detached Elements** tool is available as an experiment beginning with Microsoft Edge version 93 and is available by default in Microsoft Edge version 97 and later. Check your version of Microsoft Edge by navigating to `edge://version`. If your version is less than 97, read [Turning an experiment on or off](/devtools-guide-chromium/experimental-features/#turning-an-experiment-on-or-off) for instructions about turning on the **Detached Elements** experiment.

To open the **Detached Elements** tool for the demo application:

1. Open the [demo application](https://microsoftedge.github.io/Demos/detached-elements/).

1. [Open DevTools](/devtools-guide-chromium/#opening-devtools).

1. Click the **+** button in the toolbar.

1. Click **Detached Elements**.

:::image type="complex" source="./images/open-detached-elements.msft.png" alt-text="Open the Detached Elements tool." lightbox="./images/open-detached-elements.msft.png":::
   Open the Detached Elements tool
:::image-end:::

## Get Detached Elements

The **Get Detached Elements** button in the **Detached Elements** tool will find and display all of the detached elements on the page. To find detached elements in the demo application, complete the following steps:

1. Make sure you are in **Room 1** of the demo application.

1. Click the **Simulate high traffic** button.

1. Click **Stop** after generating some messages in the demo application.

1. Click **Room 2**.

1. In the **Detached Elements** tool, click **Get Detached Elements**.

:::image type="complex" source="./images/get-detached-elements.msft.png" alt-text="Get Detached Elements using the Detached Elements tool." lightbox="./images/get-detached-elements.msft.png":::
   Get Detached Elements using the Detached Elements tool.
:::image-end:::

The **Detached Elements** tool displays all of the detached elements on the page. All of the messages that were generated in **Room 1** are no longer attached to the DOM when you switch to **Room 2** in the demo application, but they are still referenced by JavaScript.  

## Trigger Garbage Collection

You can trigger garbage collection (GC) in the browser from the **Detached Elements** tool. Complete the following steps;

1. In the **Detached Elements** tool, click **Collect Garbage**.

1. Click **Get Detached Elements**.

When you select **Collect Garbage**, the browser run GC. When you select **Get Detached Elements**, the **Detached Elements** tool displays all detached elements that cannot be garbage collected. These detached elements may be memory leaks if they are not going to be reused by the application.

## Analyze

Once you have found a detached element that the browser cannot GC, you can use the **Analyze** button in the **Detached Elements** tool to identify the JavaScript code running on the page that is still referencing the detached element. The **Analyze** button will take a heap snapshot and populate the **ID** of the detached element with its location in the heap. For more information about heap snapshots, read [Record heap snapshots](/devtools-guide-chromium/memory-problems/heap-snapshots).

:::image type="complex" source="./images/analyze-detached-elements.msft.png" alt-text="Analyze Detached Elements in the Detached Elements tool." lightbox="./images/analyze-detached-elements.msft.png":::
   Analyze Detached Elements in the Detached Elements tool
:::image-end:::

Complete the following steps:

1. In the **Detached Elements** tool, click **Analyze**.

The **Memory** tool opens in the bottom panel of DevTools.

1. From the **Detached Elements** tool, select the **ID** field of a detached element.

The **Memory** tool in the bottom panel automatically selects the object in the heap that is referencing the detached element. We call these objects **Retainers**.

:::image type="complex" source="./images/detached-elements-heap-snapshot.msft.png" alt-text="Referencing a heap snapshot from the Detached Elements tool." lightbox="./images/detached-elements-heap-snapshot.msft.png":::
   Referencing a heap snapshot from the Detached Elements tool.
:::image-end:::

1. From the **Memory** tool in the bottom panel, select the link **room.js:13**.

The **Sources** tool opens in the top panel to line 13 of the file **room.js**.

1. In the `hide()` function of **room.js**, you can see that the JavaScript code of the demo application adds each message in the room to an `unmounted` array. The `unmounted` array is the object that is referencing the detached element.

:::image type="complex" source="./images/detached-elements-javascript-retainers.msft.png" alt-text="Identifying the JavaScript that is retaining the detached element." lightbox="./images/detached-elements-javascript-retainers.msft.png":::
   Identifying the JavaScript that is retaining the detached element.
:::image-end:::

You have now identified the retainer that is preventing the detached element from being garbage collected by the browser!

## Next steps

When looking for memory leaks, remember that leaks can depend on the context of your application. For the demo application, you found detached elements that could not be garbage collected by the browser and identified the JavaScript retaining the detached elements. However, in the context of the demo application, it makes sense to retain the list of chat messages so that if a user switches back to **Room 1**, the message log is preserved.

:::image type="complex" source="./images/detached-elements-reattached.msft.png" alt-text="The detached elements are reattached to the DOM when switching back to Room 1." lightbox="./images/detached-elements-reattached.msft.png":::
   The detached elements are reattached to the DOM when switching back to Room 1.
:::image-end:::

Similarly, a feed in social media might detach elements as users scroll past them and reattach them to the DOM when users scroll back up. Detached elements are not always an indication of a memory leak and memory leaks are not always caused by detached elements.

For long-running apps, small memory leaks of only a few kilobytes can noticeably degrade performance over time. Web developers who use the React framework know that React maintains a virtualized copy of the DOM. Failing to properly unmount components can potentially lead to an application leaking large parts of the virtual DOM.

The demo app and leaks were artificial. Test the tool on your production website or app to see if you can find potential problems. If you do, [contact the Microsoft Edge DevTools team](../contact.md) to send feedback about the **Detached Elements** tool and memory leak debugging.

## Additional features

* In the **Detached Elements** tool, select the **Detach Elements** button to destroy the parent-child links inside a detached tree. Select **Collect garbage** to identify the culprit node in a detached tree that is causing the entire tree to be retained.

* In the **Detached Elements** tool, change the target in the **Selected target** dropdown to select a different origin. Use this dropdown to select different frames or origins for the tool.
