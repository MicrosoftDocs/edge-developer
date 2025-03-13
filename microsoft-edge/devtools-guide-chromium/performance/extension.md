---
title: Customize your performance data with extensibility API
description: Customize performance data with the extensibility API.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 03/13/2025
---
<!-- Copyright Andrés Olivares and Sofia Emelianova

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# Customize your performance data with extensibility API

**Detailed contents:**
* [Overview](#overview)
* [Key features](#key_features)
* [Inject your data with the User Timings API](#inject_your_data_with_the_user_timings_api)
   * [devtools object](#devtools_object)
* [Inject your data with console.timeStamp](#inject_your_data_with_consoletimestamp)
* [View your data in the timeline](#view-custom-data)
* [Code examples](#code_examples)
   * [User Timings API Examples:](#user_timings_api_examples)
   * [Custom tracks and entries](#tracks)
   * [Markers](#markers)
   * [console.timeStamp API Examples:](#consoletimestamp_api_examples)


<!-- ====================================================================== -->
## Overview

The Performance panel supports the performance extensibility API, enabling the addition of custom data to the Performance timeline. This lets you inject your measurements and events directly into the performance timeline as a custom track or in the Timings track. This may be useful for developers of frameworks, libraries, and complex applications with custom instrumentation to gain a more comprehensive understanding of performance.

This API offers two distinct mechanisms:

1. The User Timings API (using performance.mark and performance.measure)

This API leverages the existing User Timings API https://developer.mozilla.org/docs/Web/API/Performance_API/User_timing . It also adds entries to the browser's internal performance timeline https://developer.mozilla.org/docs/Web/API/Performance_API , allowing for further analysis and integration with other performance tools.

2. The console.timeStamp API (extended for DevTools)

This API provides a high-performance method for instrumenting applications and surfacing timing data exclusively to the Performance panel in DevTools. It's designed for minimal runtime overhead, making it suitable for instrumenting hot paths and production builds. It does not add entries to the browser's internal performance timeline.



<!-- ====================================================================== -->
## Key features
Both APIs offer:

Custom Tracks: Add entries to custom tracks and track groups.
Entries: Populate tracks with entries representing events or measurements.
Color Customization: Color-code entries for visual differentiation.
Key Differences and when to use each API:

User Timings API (performance.mark, performance.measure):
Adds entries to both the Performance panel and the browser's internal performance timeline.
Allows for rich data, including tooltips and detailed properties.
Allows for adding markers: Highlight specific moments in the timeline with visual markers.
Suitable for detailed performance analysis and when integration with other performance tools is required.
Use when you need to store extra data with each entry, and when you are already using the User Timings API.
console.timeStamp API:
Adds entries only to the Performance panel.
Offers significantly higher performance, especially in production environments.
Ideal for instrumenting hot paths and performance-critical code.
No extra data such as tooltips or properties can be added.
Use when performance overhead is a primary concern, and you need to quickly instrument code.


<!-- ====================================================================== -->
## Inject your data with the User Timings API
To inject custom data, include a devtools object within the detail property of performance.mark https://developer.mozilla.org/docs/Web/API/Performance/mark#detail and performance.measure https://developer.mozilla.org/docs/Web/API/Performance/measure#detail methods. The structure of this devtools object determines how your data is displayed in the Performance panel.

Use performance.mark https://developer.mozilla.org/docs/Web/API/Performance/mark to record an instant event or timestamp in the timeline. You can mark the start or end of a specific operation or any point of interest that doesn't have a duration. When you include a devtools object within the detail property, the Performance panel shows a custom marker in the Timings track.

Use performance.measure https://developer.mozilla.org/docs/Web/API/Performance/measure#detail to measure the duration of a task or process. When you include a devtools object within the detail property, the Performance panel shows custom measurement entries in the timeline in a custom track. If you're using performance.mark as a reference point to create a performance.measure, you don't need to include the devtools object in performance.mark calls.


<!-- ------------------------------ -->
#### devtools object
These types define the structure of the devtools object for different extension features:

```
type DevToolsColor =
  "primary" | "primary-light" | "primary-dark" |
  "secondary" | "secondary-light" | "secondary-dark" |
  "tertiary" | "tertiary-light" | "tertiary-dark" |
  "error";

interface ExtensionTrackEntryPayload {
  dataType?: "track-entry"; // Defaults to "track-entry"
  color?: DevToolsColor;    // Defaults to "primary"
  track: string;            // Required: Name of the custom track
  trackGroup?: string;      // Optional: Group for organizing tracks
  properties?: [string, string][]; // Key-value pairs for detailed view
  tooltipText?: string;     // Short description for tooltip
}

interface ExtensionMarkerPayload {
  dataType: "marker";       // Required: Identifies as a marker
  color?: DevToolsColor;    // Defaults to "primary"
  properties?: [string, string][]; // Key-value pairs for detailed view
  tooltipText?: string;     // Short description for tooltip
}
```


<!-- ====================================================================== -->
## Inject your data with console.timeStamp

The console.timeStamp API is extended to allow for the creation of custom timing entries in the Performance panel with minimal overhead.


```
console.timeStamp(label: string, start?: string, end?: string, trackName?: string, trackGroup?: string, color?: DevToolsColor);
```

label: The label for the timing entry.
start: The name of a previously recorded timestamp (using console.timeStamp(timeStampName)). If undefined, the current time is used.
end: The name of a previously recorded timestamp. If undefined, the current time is used.
trackName: The name of the custom track.
trackGroup: The name of the track group.
color: The color of the entry.


<!-- ====================================================================== -->
## View your data in the timeline

To see your custom data in the timeline, in the Performance panel, turn on settings Capture settings > check_box Extension data.

![The 'Extension data' checkbox in the 'Capture settings' of the Performance panel](todo: extension-data.png)

Try it on this demo page  https://corgi-collage.vercel.app/ .  Turn on Extension data, start a performance recording, click Add new Corgi on the demo page, then stop the recording. You'll see a custom track in the trace that contains events with custom tooltips and details in the Summary tab.



<!-- ====================================================================== -->
## Code examples

Here are a few examples of how to use the API to add your own data to the Performance panel using each available mechanism.



<!-- ------------------------------ -->
#### User Timings API Examples

In the next sections, see the examples of code that showcase how to add the following to the performance timeline:

Custom tracks and entries to the timeline  https://developer.chrome.com/docs/devtools/performance/extension#tracks
Markers to the Timings track https://developer.chrome.com/docs/devtools/performance/extension#markers


<!-- ---------- -->
###### Custom tracks and entries

Create custom tracks and populate them with entries to visualize your performance data in a custom track. For example:

```
// Mark used to represent the start of the image processing task
// The start time is defaulted to now
performance.mark("Image Processing Start");

// ... later in your code

// Track entry representing the completion of image processing
// with additional details and a tooltip
// The start time is a marker from earlier
// The end time is defaulted to now
performance.measure("Image Processing Complete", {
  start: "Image Processing Start",
  detail: {
    devtools: {
      dataType: "track-entry",
      track: "Image Processing Tasks",
      trackGroup: "My Tracks", // Group related tracks together
      color: "tertiary-dark",
      properties: [
        ["Filter Type", "Gaussian Blur"],
        ["Resize Dimensions", "500x300"]
      ],
      tooltipText: "Image processed successfully"
    }
  }
});
```

This results in the following custom track entry in the performance timeline, along with its tooltip text and properties:

![A custom track in the performance timeline](todo: custom-track.png)


<!-- ---------- -->
###### Markers

Visually highlight specific points of interest in the timeline with custom markers that span across all tracks. For example:

```
// Marker indicating when the processed image was uploaded
performance.mark("Image Upload", {
  detail: {
    devtools: {
      dataType: "marker",
      color: "secondary",
      properties: [
        ["Image Size", "2.5MB"],
        ["Upload Destination", "Cloud Storage"]
      ],
      tooltipText: "Processed image uploaded"
    }
  }
});
```

This results in the following marker in the Timings track, along with its tooltip text and properties:

![A custom marker in the Timings track](todo: marker-in-timings.png)


<!-- ------------------------------ -->
#### console.timeStamp API Examples

```
// Record a start timestamp
console.timeStamp("start");

// Measure duration from start to now
console.timeStamp("measure 1", "start", undefined, "My Track", "My Group", "primary-light");

// Record an end timestamp
console.timeStamp("end");

// Measure duration from start to end
console.timeStamp("measure 2", "start", "end", "My Track", "My Group", "secondary-dark");
```

This results in the following custom track entry in the performance timeline:

![A custom track with custom entries added with the console.timeStamp API](todo: custom-track-console-timestamp.png)


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

pending


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). 
> The original page is found [here](https://developer.chrome.com/docs/devtools/performance/extension) and is authored by Andrés Olivares and Sofia Emelianova.

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
