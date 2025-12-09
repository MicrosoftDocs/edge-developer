---
title: What's New in DevTools (Microsoft Edge 143)
description: Activity Bar will only appear horizontally in Edge 144. View objects retained by event handlers in the Memory tool. And more.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 12/04/2025
---
# What's New in DevTools (Microsoft Edge 143)

These are the latest features in the Stable release of Microsoft Edge DevTools.


<!-- ====================================================================== -->
## Activity Bar will only appear horizontally in Edge 144

<!-- Subtitle: Starting with Microsoft Edge 144, the vertical Activity Bar will no longer be supported.-->

Upcoming change:

Starting with Microsoft Edge 144, the **Activity Bar** will always be displayed horizontally, at the top of the DevTools window.  Displaying the **Activity Bar** vertically will no longer be supported.

![Horizontal Activity Bar](./devtools-143-images/activity-bar.png)


<!-- ====================================================================== -->
## View objects retained by event handlers in the Memory tool

<!-- Subtitle: Use the new heap snapshot filter to show objects retained by event handlers.-->

Use the new filter in the **Memory tool** to identify heap snapshot objects that are retained by event handlers. 

![Objects retained by event handlers filter](./devtools-143-images/objects-retained-by-event-handlers-filter.png)

Exmaple use case: Components that call `addEventListener` and forget to call `removeEventListener` are a common cause of memory leaks. This filter makes it easier to debug memory leaks related to event listeners.


<!-- ====================================================================== -->
## Updated performance trace export options

<!-- Subtitle: Export and share performance traces with annotations, resource content, and source maps.-->

When you export a performance trace, you can choose to include 
* Annotations
* Resource content (HTML, CSS, and JavaScript content)
* Script source maps

You can also choose whether the trace file is compressed. 

Exporting a trace with this additional data is useful when sharing traces with others for debugging.

![Save performance trace dialog](./devtools-143-images/save-performance-trace-dialog.png)

See also:
* [Share performance traces with more data](../../../performance/share-performance-traces.md) <!-- Waiting on PR 3615 to go live. -->
* [Improved trace sharing](https://developer.chrome.com/blog/new-in-devtools-143#trace-sharing)


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 143 also includes the following updates from the Chromium project:

* [Improved trace sharing](https://developer.chrome.com/blog/new-in-devtools-143#trace-sharing) <!-- Do we need to include this again here? -->
* [Support for @starting-style](https://developer.chrome.com/blog/new-in-devtools-143#starting-style)
* [Editor widget for display: masonry](https://developer.chrome.com/blog/new-in-devtools-143#masonry)

<!-- ====================================================================== -->
## See also

* [What's New in Microsoft Edge DevTools](./whats-new.md)
* [Release notes for Microsoft Edge web platform](../../web-platform/release-notes/index.md)
