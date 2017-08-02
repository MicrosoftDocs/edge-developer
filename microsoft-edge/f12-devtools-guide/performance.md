---
ms.assetid: 6c0907d1-631c-4a1c-9167-3319d424597e
description: Learn how to use the Performance tool to profile your webpage’s frame rate and JavaScript execution times.
title: F12 devtools guide - Performance
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Performance

Using the **Performance** tool, profile your webpage's frame rate with the Timeline and JavaScript execution times with the JavaScript call stacks. The reports on different types of CPU usage and JavaScript execution profiling help you analyze UI performance problems.

## Speed matters

Whether it's a jittery animation or user interface elements that respond slowly, a user's experience on your site is diminished when the UI isn't smooth and responsive. The new **Performance** profiler helps you see what's happening behind the scenes when your pages are slowing down. This info can give clues to improve speed.

![Microsoft Edge F12 Tools Performance](./media/Edge_Performance.png)

### Recording a profiling session

When you first load the **Performance** tool, you'll see an instruction to **start profiling to begin a performance session** in the main pane. Click the instruction link or the arrow icon at the top of the tool to start profiling.

During profiling, perform the fewest actions you need to capture the slowness you're trying to analyze. Extra interactions with the page produce extra data, which clutters results. 

If you need accurate page load times in the report, visit the [**Network tool**](./network.md) and use its **clear browser cache** option before profiling. Using the **Network tool** ensures you're loading all page resources from the network, and then reloads the page as soon as you start profiling.

The **Performance** tool automatically marks **app lifecycle events**, such as [**DOMContentLoaded**](https://msdn.microsoft.com/library/hh869434.aspx). Use the [`performance.mark()`](https://msdn.microsoft.com/library/jj585593.aspx) method to set custom **user marks** from within your code.

When you've captured the behavior you want to profile, click **stop profiling to generate a report** or the square icon at the top of the tool.

Perhaps you don't have time to dig into the information now or want to look at the results of a prior profiling session. The import (folder icon or CTRL + O) and export (disk icon or CTRL + S) functions make it possible to inspect a profiling session at a later date without having to keep the browser and F12 developer tools open the whole time.

## The performance session report

### The ruler

![Microsoft Edge F12 Tools Ruler](./media/F12BlueResponsivenessRuler.png)

The ruler displays the amount of time the session ran as well as **app lifecycle events** and **user marks**. Hovering over events and marks displays their labels and helps orient yourself within a session. 

User marks can be given labels by using a string for the argument of the `performance.mark()` method.

**User marks** are made more useful with the [`performance.measure()`](https://msdn.microsoft.com/library/jj585594.aspx) API. After you have set **user marks**, set a **user measure** to group the events that happened between the two marks. For example, if you have two **user marks** labeled "Begin Rotation" and "End Rotation," use the following code to group them and label the group as "box cycler."

```javascript
performance.measure("box cycler","Begin Rotation","End Rotation");
```

![Microsoft Edge F12 Tools Performance Measure](./media/Edge_Performance_measure.png)

### The timeline

![Microsoft Edge F12 Tools Performance Measure](./media/gdr_f12_ResponsivenessTimeline.png)

The **timeline** shows two different measures: 


  - **CPU utilization** shows the amounts and types of activity occurring, broken down into color -coded categories. For a more detailed breakdown of the categories, see [Event categories](#event-categories-and-definitions).
  - **Visual throughput** shows the estimated frames-per-second display. Dips in the frame rate indicate where slowdowns are happening and a frame rate of zero means frames are being dropped.

Click and drag horizontally across an area on the **timeline** to highlight it. This filters the **Timeline details** to show just the details of the highlighted area. Zoom for more details. To the right of the zoom controls, at the top of the **Performance** tool is a **clear selection** icon that removes the highlight.

### The timeline details

![Microsoft Edge F12 Tools Performance Timeline Details](./media/gdr_f12_ResponsivenessTimelineDetails.png)

The **Timeline details** look deeper into the recorded events, breaking down the categories into their component events. This info provides details about the DOM elements they impact or the code they cause to run.

In the previous image, The `DOMContentLoaded` event has a very short *exclusive duration* time, which is the time it took for the event itself to fire. The longer *inclusive duration* includes not only the event, but several processes launched as a result of the event.

The **event type filter** offers filters for **background activity**, **network traffic**, **UI activity** and **user measures**. When one of those options is unselected, that kind of event is filtered out of the **Timeline details**. For example, while a page is loading, the details can be overwhelmed by **HTTP request** events. Click the **event type filter** and uncheck **network traffic** to make them disappear from view. 

In the image below, at the bottom of the dialog, a time filter is shown as set to filter out all events taking less than 1 millisecond, and a text box at the top is set to filter by text in the event's name.

![Microsoft Edge F12 Tools Performance Timeline Filter](./media/Edge_Performance_filters.png)

To the left of the updated filters button is the **Group top level events by frames** button, or **frame grouping**. This creates a set of pseudo-events based on the measured frame rate and groups events under them. When you're trying to determine why you're dropping frames in an animation, this helps break units of work by frame and identify where frames are taking longer to execute than others.

![Microsoft Edge F12 Tools Performance Timeline Grouping](./media/Edge_Performance_grouping.png)

For a quick overview of events that contributed to the inclusive duration, the event details pane shows a circular chart using the same color coding as the timeline. Because the colors represent categories of events, the chart might contain multiple segments in the same color. Placing your mouse over a segment shows a tooltip with its event label.

### Filtering to an event

Right-click events to see a context menu with three options:

  - **Filter to event** sets the zoom level to the event's inclusive time, so just the event and any events that happened at the same time are displayed.

  - **Clear selection** zooms out again.

  - **View Source** is only enabled for **Scripting** events. It switches to the [**Debugger**](./debugger.md), opens the file containing the code that generated the event, and moves the cursor to the point in the code where the event was generated.

### The details of the details

Each element in the **Timeline details** shows different info, depending on its type.

![Microsoft Edge F12 Tools Performance Timer Details](./media/F12BlueResponsivenessTimerDetails.png)

This timer was invoked by a [`setTimeout()`](https://msdn.microsoft.com/library/ms536753.aspx) which called the **autoNextSlide** function in **script.jsx**. When you click the file name, it opens in the [**Debugger tool**](./debugger.md) and navigates to the function for inspection.

The circular chart at the bottom shows that while **Scripting** made up a large part of the event's time, **Styling** took up a fair portion. Expanding the timer's event in the **Timeline details** shows more about the different **Styling** operations that contributed to the time it required.

When you select a portion of the timeline, that selection's summary information is presented in the event details pane like a timeline event until you select an event from the **Timeline details**.

![Microsoft Edge F12 Tools Performance Selection Summary](./media/Edge_Performance_selectionSummary.png)

## Event categories and definitions
The Responsiveness tool uses 7 main event categories on the timeline. These break down into a selection of events in **Timeline details**.

  - **Loading** contains events related to bootstrapping and loading a webpage's resources. This is recorded for the primary window and any frames within it. The events gathered within **Loading** are:
    - **CSS parsing**: New CSS content was found and needs to be analyzed. The details include the URL of the content or inline in parentheses after the event if the CSS is hardcoded into the webpage.
    - **HTML parsing**: New HTML content was found that needs to be divided into nodes and added to the DOM.
    - **HTTP request:** Makes an HTTP request to a server and receives the response. More than one response can appear at the same time and not consume significant resources. However, rendering might be delayed by waiting for a large or slow HTTP request to complete. The URL of the request and the response code are the type of details shown here.
    - **Speculative downloading**: The webpage's HTML content is searched for required resources so HTTP requests can be scheduled as quickly as possible.

  - **Scripting** contains events related to processing and executing JavaScript. These events are gathered within **Scripting**:
    - **Animation frame callback**: A new frame was being prepared and a registered callback was triggered so that it could contribute any visual changes. Details include the location of the callback within the webpage or external scripts.
    - **DOM event**: A [**DOM event**](https://msdn.microsoft.com/library/hh771866.aspx) was fired. Event listeners attached to it are shown as children of the event.
    - **Script evaluation**: Processing content within `<script>` elements. Details include the URL of the script or **inline** if it's part of the webpage.
    - **Timer**: An [interval](https://msdn.microsoft.com/library/ms536749.aspx) or [timeout](https://msdn.microsoft.com/library/ms536753.aspx) completed and triggered execution of its callback. The details include the location of the timer within the webpage or external scripts, the time it took, and the name of its callback function (if any). Actions triggered by the callback are shown as children of the event.
    - [**Media query listener**](https://msdn.microsoft.com/library/hh772369.aspx): When script that responds to a media query event runs, this is broken out as its own category.
    - [**Mutation observer**](https://msdn.microsoft.com/library/dn265034.aspx): Script responding to events fired by mutation observers is broken out as a category.

When a change is explicitly made to a style object via JavaScript (i.e. `element.style.height="20px"`), requiring the DOM to be updated, the individual changes and their exclusive times are shown as descendants of the Scripting event that caused them.

  - **GC**, garbage collection, is the identification and removal of items from memory when they are no longer needed. It's referred to by its full name in **Timeline details**.

  - **Styling** contains events related to CSS styles and element positioning. The events gathered within **Styling** are:

    - **Layout**: Changes were made to the DOM that required the size and/or position of all affected elements to be computed.
    - **Style calculation**: Changes were made to the DOM or new CSS content was added, requiring the style properties of all affected elements to be recalculated.

  - **Rendering** contains events related to putting elements on the screen. The events gathered within **Rendering** are:
    - **Paint**: Visual changes were made to the DOM that required all affected portions of the page to be redrawn. **Render layer** events may appear as child events and indicate a specific fragment of the DOM was redrawn. The coordinates (x,y) and dimensions of the layer impacted by a **Render layer** event are included in the details.

  - **Image Decoding** is the activity of turning compressed image file formats into the sequences of colored pixels that are painted to the screen. It's referred to by its name in **Timeline details**.

  - **Other**: Miscellaneous browser-related computing. Computing categorized as **Other** doesn't get displayed in **Timeline details**. In Windows 8.1 Update, **Other** is removed from the categories.

For a more specific demonstration of using the Performance tool, check out our demo and code sample: [Improving animation performance with the Performance tool](http://samples.msdn.microsoft.com/workshop/samples/UIPerformance/default.html).

## JavaScript Call Stacks
If you remember the F12 tools in Internet Explorer 11, you'll remember the **JavaScript profiler** tool. In Microsoft Edge, it's combined with the prior **UI responsiveness** tool to make the **Performance** tool. We found that the information for both tools was often needed together, so now whenever a **Performance** report is generated, the JavaScript call stack is timed and that profiling information is presented in the **JavaScript call stacks** tab.

![Microsoft Edge F12 Tools Performance Timeline Grouping](./media/Edge_Performance_callstacks.png)

The image above shows the initial load of the Microsoft homepage, a little navigation around it, and the JavaScript functions that were invoked. 

  - The **Inclusive CPU** (both % and ms) represent the amount of CPU resources and time to execute required both by that function and the other functions called as a result of running it.

  - The **Exclusive CPU** (both % and ms) represent the amount of CPU resources and time to execute required speficically by that function alone.

  - The **URL** provides the URL of the script where that function exists. Because of functions in your code calling libraries that reside in different files, you may see multiple URLs owning the child functions in a call stack.


## Performance profiling tips
**Test more than once**: The results you'll see in a profiling report are not just based on your code. They're influenced by other processes on your system competing for your processor and memory. A moment of slowness or a bad overall test might be due to a virus scan running in the background or too many tabs being open on your browser. Alternatively, if you test on a new machine under laboratory conditions, it might be so fast, your code just runs great. It's important to make sure you can reproduce slowness reliably, just like reproducing a bug. Then you can diagnose the cause.

**Consistency feels faster**: The **Performance** profiler's visual map of your frame rate over time can be very useful. Uneven frame rates or skipped frames can make your site feel slow. If it reduces skips and helps keep the frame rate consistent, slowing down your animation could make it feel faster. ["The secret to silky smooth JavaScript animations"](http://creativejs.com/resources/requestanimationframe/) provides a couple of suggestions for reducing frame rate while getting the power-saving and anti-skipping benefits of using [`window.requestAnimationFrame()`](https://msdn.microsoft.com/library/hh773174.aspx).

**How much of this CSS is necessary?** Many sites use a site-wide style sheet to make pages load faster. It can reduce the number of network requests and take advantage of caching on subsequent loads. However, every style in a style sheet must be parsed and adds to the complexity of **Styling** calculations whether the style is used in the page or not.

For most sites, this never becomes a problem. In very large sites with complex styling, lots of pages, lots of UI animations, and gigantic site-wide style sheets, you'll often see **Styling** operations become a primary cause of performance lags because of the overhead created by unused styles.

At this point, the question to ask is: is the cost of the unused styles bigger than the benefit of the single style sheet? Try a few different solutions and profile them. You'll have your answer soon enough.

## Related topics

[Improving animation performance with the Performance tool](http://samples.msdn.microsoft.com/workshop/samples/UIPerformance/default.html)

[The Performance tool in Visual Studio](https://msdn.microsoft.com/library/dn194502.aspx)

[Microsoft Edge Developer Tools on Twitter: Find helpful F12 hints and news updates](https://twitter.com/EdgeDevTools)
