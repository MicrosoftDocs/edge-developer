---
description: The timeline events mode displays all events triggered while making a recording.  Use the timeline event reference to learn more about each timeline event type.
title: Timeline Event reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Meggin Kearney and Flavio Copes

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Timeline Event reference

The timeline events mode displays all events triggered while making a recording.  Use the timeline event reference to learn more about each timeline event type.


<!-- ====================================================================== -->
## Common timeline event properties

Certain details are present in events of all types, while some only apply to certain event types.  This section lists properties common to different event types.  Properties specific to certain event types are listed in the references for those event types that follow.

| Property | When is it shown |
|:--- |:--- |
| Aggregated time | For events with **nested events**, the time taken by each category of events. |
| Call Stack | For events with **child events**, the time taken by each category of events. |
| CPU time | How much CPU time the recorded event took. |
| Details | Other details about the event. |
| Duration (at time-stamp) | How long it took the event with all of its children to complete; timestamp is the time at which the event occurred, relative to when the recording started. |
| Self time | How long the event took without any of its children. |
| Used Heap Size | Amount of memory being used by the application when the event was recorded, and the delta (+/-) change in used heap size since the last sampling. |

<!--todo: add nested and child events (timelinetool) section when available -->


<!-- ====================================================================== -->
## Loading events

This section lists events that belong to Loading category and their properties.

| Event | Description |
|:--- |:--- |
| Parse HTML |  Microsoft Edge ran the HTML parsing algorithm. |
| Finish Loading |  A network request completed. |
| Receive Data |  Data for a request was received.  There are one or more Receive Data events. |
| Receive Response |  The initial HTTP response from a request. |
| Send Request |  A network request has been sent. |

### Loading event properties

| Property | Description |
|:--- |:--- |
| Resource | The URL of the requested resource. |
| Preview | Preview of the requested resource (images only). |
| Request Method | HTTP method used for the request (`GET` or `POST`, for example). |
| Status Code | HTTP response code. |
| MIME Type | MIME type of the requested resource. |
| Encoded Data Length | Length of requested resource in bytes. |


<!-- ====================================================================== -->
## Scripting events

This section lists events that belong to the Scripting category and their properties.

| Event | Description |
|:--- |:--- |
| Animation Frame Fired | A scheduled animation frame fired, and its callback handler invoked. |
| Cancel Animation Frame |  A scheduled animation frame was canceled. |
| GC Event |  Garbage collection occurred. |
| DOMContentLoaded |  The [DOMContentLoaded event](https://developer.mozilla.org/docs/Web/Events/DOMContentLoaded) was fired by the browser.  This event is fired when all of the DOM content of the page is loaded and parsed. |
| Evaluate Script | A script was evaluated. |
| Event | A JavaScript event (for example, `mousedown`, or `key`). |
| Function Call | A top-level JavaScript function call was made (only appears when browser enters JavaScript engine). |
| Install Timer | A timer was created with [setInterval()](https://developer.mozilla.org/docs/Web/API/WindowTimers/setInterval) or [setTimeout()](https://developer.mozilla.org/docs/Web/API/WindowTimers/setTimeout). |
| Request Animation Frame | A `requestAnimationFrame()` call scheduled a new frame. |
| Remove Timer | A previously created timer was cleared. |
| Time |  A script called [console.time()](/microsoft-edge/devtools-guide-chromium/console/api#time). |
| Time End | A script called [console.timeEnd()](/microsoft-edge/devtools-guide-chromium/console/api#timeend). |
| Timer Fired | A timer fired that was scheduled with `setInterval()` or `setTimeout()`. |
| XHR Ready State Change | The ready state of an XMLHTTPRequest changed. |
| XHR Load | An `XMLHTTPRequest` finished loading. |

### Scripting event properties

| Property | Description |
|:--- |:--- |
| Timer ID | The timer ID. |
| Timeout | The timeout specified by the timer. |
| Repeats | Boolean that specifies if the timer repeats. |
| Function Call | A function that was invoked. |


<!-- ====================================================================== -->
## Rendering events

This section lists events that belong to Rendering category and their properties.

| Event | Description |
|:--- |:--- |
| Invalidate layout | The page layout was invalidated by a DOM change. |
| Layout | A page layout was completed. |
| Recalculate style | Microsoft Edge recalculated element styles. |
| Scroll | The content of nested view was scrolled. |

### Rendering event properties

| Property | Description |
|:--- |:--- |
| Layout invalidated | For Layout records, the stack trace of the code that caused the layout to be invalidated. |
| Nodes that need layout | For Layout records, the number of nodes that were marked as needing layout before the relayout started.  These are normally those nodes that were invalidated by developer code, plus a path upward to relayout root. |
| Layout tree size | For Layout records, the total number of nodes under the relayout root (the node that Microsoft Edge starts the relayout). |
| Layout scope | Possible values are `Partial` (the re-layout boundary is a portion of the DOM) or `Whole document`. |
| Elements affected | For Recalculate style records, the number of elements affected by a style recalculation. |
| Styles invalidated | For Recalculate style records, provides the stack trace of the code that caused the style invalidation. |


<!-- ====================================================================== -->
## Painting events

This section lists events that belong to Painting category and their properties.

| Event | Description |
|:--- |:--- |
| Composite Layers | The composited image layers for the Microsoft Edge rendering engine. |
| Image Decode | An image resource was decoded. |
| Image Resize | An image was resized from its native dimensions. |
| Paint | Composited layers were painted to a region of the display.  Hovering over a Paint record highlights the region of the display that was updated. |

### Painting event properties

| Property | Description |
|:--- |:--- |
| Location | For Paint events, the x and y coordinates of the paint rectangle. |
| Dimensions | For Paint events, the height and width of the painted region. |


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/performance-reference) and is authored by [Meggin Kearney](https://developers.google.com/web/resources/contributors#meggin-kearney) (Technical Writer) and [Flavio Copes](https://developers.google.com/web/resources/contributors#flavio-copes) (Full Stack Developer).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
