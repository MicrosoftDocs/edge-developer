---
description: Use the Detached Elements tool in the Microsoft Edge DevTools to find and fix DOM memory leaks.
title: Debug DOM memory leaks
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/29/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools, detached elements, dom, memory, leak, node
---

# Debug DOM memory leaks with the Detached Elements tool

A memory leak can occur in your application when an element is no longer attached to the DOM tree but is still referenced by some JavaScript running on the page. These elements are called **detached elements**. In order for the browser to garbage collect (GC) the detached element, there must be no references to the element from either the DOM tree or JavaScript code.

The following sections show you how to use the **Detached Elements** tool in the Microsoft Edge DevTools to find detached elements that the browser cannot GC in a demo application and identify the JavaScript that is still referencing the detached element. By changing your JavaScript to release the element, you will be able to reduce the number of detached elements on your page.

For more information about heap snapshots and detached elements, read [Discover detached DOM tree memory leaks with Heap Snapshots](/devtools-guide-chromium/memory-problems/#discover-detached-dom-tree-memory-leaks-with-heap-snapshots).

## Open the Detached Elements tool

The **Detached Elements** tool is available as an experiment since Microsoft Edge version 93 and is available by default in Microsoft Edge version 97. Check your version of Microsoft Edge by navigating to `edge://version`. If your version number is less than 97, read [Turning an experiment on or off
](/devtools-guide-chromium/experimental-features/#turning-an-experiment-on-or-off) for instructions on turning the `Detached Elements` experiment on.

To open the **Detached Elements** tool against our demo application, complete the following steps.

1. Navigate to the [demo application](https://microsoftedge.github.io/Demos/detached-elements/).
1. [Open DevTools](/devtools-guide-chromium/#opening-devtools).
1. Select the + button in the toolbar.
1. Select the **Detached Elements** entry in the menu.

:::image type="complex" source="./images/open-detached-elements.msft.png" alt-text="Open the Detached Elements tool." lightbox="./images/open-detached-elements.msft.png":::
   Open the Detached Elements tool
:::image-end:::

## Get Detached Elements

The **Get Detached Elements** button in the **Detached Elements** tool will find all of the detached elements on the page and display them. To find detached elements in our demo application, complete the following steps.

1. Ensure you are in **Room 1** in the demo application.
1. Select the **Simulate high traffic** button in the demo application.
1. Select **Stop** after generating some messages in the demo application.
1. Select **Room 2** in the demo application.
1. Select **Get Detached Elements** in the **Detached Elements** tool.

:::image type="complex" source="./images/get-detached-elements.msft.png" alt-text="Get Detached Elements in the Detached Elements tool." lightbox="./images/get-detached-elements.msft.png":::
   Get Detached Elements in the Detached Elements tool
:::image-end:::

The **Detached Elements** tool displays a list of all of the detached elements on the page.  All of the messages that were generated in **Room 1** are no longer attached to the DOM when you switch to **Room 2** in the demo application but they are still referenced by JavaScript.  

## Trigger Garbage Collection

You can trigger garbage collection (GC) in the browser from the **Detached Elements** tool. Complete the following steps.

1. Select the **Collect Garbage** button in the **Detached Elements** tool.
1. Select the **Get Detached Elements** button in the **Detached Elements** tool.

By selecting the **Collect Garbage** button, the browser will run GC, and by selecting the **Get Detached Elements** button, the **Detached Elements** tool will display all detached elements that cannot be GC'd. These detached elements may be memory leaks if they are not going to be reused by the application.

## Analyze

Now that you have found a detached element that the browser cannot GC, you can use the **Analyze** button in the **Detached Elements** tool to identify the JavaScript code running on the page that is still referencing the detached element. The **Analyze** button will take a heap snapshot and populate the **Id** of the detached element with its location in the heap. For more information about heap snapshots, read [Record heap snapshots](/devtools-guide-chromium/memory-problems/heap-snapshots).

:::image type="complex" source="./images/analyze-detached-elements.msft.png" alt-text="Analyze Detached Elements in the Detached Elements tool." lightbox="./images/analyze-detached-elements.msft.png":::
   Analyze Detached Elements in the Detached Elements tool
:::image-end:::

Complete the following steps.

1. Select the **Analyze** button in the **Detached Elements** tool.
1. The **Memory** tool will open in the bottom panel of the DevTools. From the **Detached Elements** tool, select the **Id** field of a detached element.
1. The **Memory** tool in the bottom panel will automatically select the object in the heap that is referencing the detached element. We call these objects **Retainers**.

:::image type="complex" source="./images/detached-elements-heap-snapshot.msft.png" alt-text="Referencing a heap snapshot from the Detached Elements tool." lightbox="./images/detached-elements-heap-snapshot.msft.png":::
   Referencing a heap snapshot from the Detached Elements tool.
:::image-end:::

1. From the **Memory** tool in the bottom panel, select the link **room.js:13**.
1. The **Sources** tool now opens in the top panel to line 13 of the file **room.js**.
1. In the `hide()` function of **room.js**, you will find that the JavaScript code of the demo application adds each message in the room to an `unmounted` array. The `unmounted` array is the object that is referencing the detached element.

:::image type="complex" source="./images/detached-elements-javascript-retainers.msft.png" alt-text="Identifying the JavaScript that is retaining the detached element." lightbox="./images/detached-elements-javascript-retainers.msft.png":::
   Identifying the JavaScript that is retaining the detached element
:::image-end:::

You have now identified the retainer that is preventing the detached element from being GC'd by the browser!

## Next steps

When looking for memory leaks, remember that leaks can depend on the context of your application. For the demo application, you found detached elements that could not be GC'd by the browser and identified the JavaScript that is retaining the detached elements.  However, in the context of the demo application, it makes sense to retain the list of chat messages so that if a user switches back to **Room 1**, the message log is preserved.

:::image type="complex" source="./images/detached-elements-reattached.msft.png" alt-text="The detached elements are reattached to the DOM when switching back to Room 1." lightbox="./images/detached-elements-reattached.msft.png":::
   The detached elements are reattached to the DOM when switching back to Room 1
:::image-end:::

Similarly, a feed in social media might detached elements as users scroll past them and reattach them to the DOM when users scroll back up. Detached elements are not always an indication of a memory leak and memory leaks are not always because of detached elements. 

For long-running apps, small memory leaks of only a few kilobytes can add up to noticeably degrade performance over time. Web developers who use the React framework know that React maintains a virtualized copy of the DOM and that failing to properly unmount components can potentially lead to an application leaking large parts of the virtual DOM.

The demo app and leaks were artificial and you should try the tool on your production website or app to see if you can find potential problems. If you do, please [contact the Microsoft Edge DevTools team](../devtools-guide-chromium/contact.md) to send feedback about the **Detached Elements** tool and memory leak debugging.

## Additional features

- Select the **Detach Elements** button to destroy the parent-child links inside of a detached tree in the **Detached Elements** tool. Select **Collect garbage** to identify the culprit node in a detached tree that is causing the entire tree to be retained.
- Change the target in the **Selected target** dropdown to select the origin you want to target with the **Detached Elements** tool. You may use this dropdown to select different frames or origins for the tool.