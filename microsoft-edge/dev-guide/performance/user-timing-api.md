---
ms.assetid: 91486883-4495-4c18-8b46-5fc72e46106e
description: Learn how the User Timing API enables you to accurately measure requests and report on performance.
title: Dev guide - User Timing API
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# User Timing API

The [*User Timing API*](http://www.w3.org/TR/user-timing/) enables developers to accurately measure the length of [AJAX](https://msdn.microsoft.com/library/cc891506(v=vs.85).aspx) requests, report on performance, and create benchmarks for JavaScript code using high precision timestamps. With the *User Timing API*, you can insert API calls at different places in your Javascript and then extract a detailed trail of timing data to track where time is being spent.

> [!NOTE]
> The [User Timing API Specification](http://www.w3.org/TR/user-timing/) is a stable W3C Recommendation and has unprefixed supported in Microsoft Edge build 10240+. 



The *User Timing API* deals with two main event types: **Mark** and **Measure**. The first implements [`PerformanceMark`](https://msdn.microsoft.com/library/jj585582(v=vs.85).aspx), while the second implements [`PerformanceMeasure`](https://msdn.microsoft.com/library/jj585583(v=vs.85).aspx), and both extend [`PerformanceEntry`](https://msdn.microsoft.com/library/jj585577(v=vs.85).aspx).

## PerformanceMark

A *PerformanceMark* stores a timestamp that can be set at any location in the browser's performance timeline. The performance mark can be given a name and stored in the API along with the timestamp using [`performance.mark()`](https://msdn.microsoft.com/library/jj585582(v=vs.85).aspx) method. It is stored in the [`PerformanceMark`](https://msdn.microsoft.com/library/jj585582(v=vs.85).aspx) object. (The [`PerformanceResourceTiming`](https://msdn.microsoft.com/library/jj585584(v=vs.85).aspx) object can also used to store a series of pre-defined performance marks.)

Calling `mark()` at various places in your web application lets you determine the amount of time it took to hit that ‘mark’. The specification suggests several names for marks, such as ‘mark_fully_loaded’, ‘mark_fully_visible’, ‘mark_above_the_fold’, etc. representing relevant timing events. 

```JS
window.performance.mark('mark_fully_visible');
```

## PerformanceMeasure

*PerformanceMeasure* represents the time elapsed between two performance marks. It can be given a name and stored in the API along with the timestamped start and end time using the [`performance.measure()`](https://msdn.microsoft.com/library/jj585594(v=vs.85).aspx) method and stored using the [`PerformanceMeasure`](https://msdn.microsoft.com/library/jj585583(v=vs.85).aspx) object, with the ability to pass in the measure's name, along with the name's of the starting mark and ending mark.

```JS
performance.measure(measureName, startMarkName, endMarkName)
```

## PerformanceEntry

`PerformanceEntry` represents the base object for performance and timing objects, such as `PerformanceMark`, `PerformanceMeasure`, and `PerformanceResourceTiming`. 

`PerformanceEntry` includes the following properties, utilized with both mark and measure:

Property | Description
:------------ | :-------------
PerformanceEntry.name | The identifier for the recorded event (set to the name given when creating a mark or measure).
PerformanceEntry.entryType | A value representing the type of the recorded event. Values can represent recorded `mark`, `measure`, `navigation`, or `resource` events.
PerformanceEntry.startTime | The initial time associated with a recorded event (set to the timestamp when the method was called).
PerformanceEntry.duration | Value representing the duration of a recorded event (set using a `DOMHighResTimeStamp`, typically, the end mark time minus the start mark time). **Always 0 for a mark.*

## Retrieving User Timing Performance Information

The following methods can be used to retrieve User Timing performance information:

Method | Description
:------------ | :-------------
performance.getEntries() | Returns all `performanceEntry` objects in the performance timeline.
performance.getEntriesByName(name, entryType) | Returns all `performanceEntry` objects in the performance timeline with the specified name and entryType. Finding only mark entries requires checking each entry's entryType for "mark".
performance.getEntriesByType(entryType) | Returns all `performanceEntry` objects in the performance timeline with the specified entryType.
performance.getMarks() | Returns only `performanceEntry` objects with the entryType "mark" along with the associated timing value. Pass in a name to find a specific mark. 
performance.getMeasures() | Returns only `performanceEntry` objects with the entryType "measure" along with the associated timing values. Pass in a name to find a specific measure. 
performance.now() | Returns the number of milliseconds, accurate to a thousandth of a millisecond, from the start of document navigation to the time the now method was called.
performance.clearMarks() | Removes marks and their associated time values.
performance.clearMeasures() | Removes measures and their associated values.
performance.clearResourceTimings() | Clears the current list of saved PerformanceEntry objects, if any.

## Example

To calculate the time from the DOM being complete until your application state is fully loaded, use:

```JS
window.performance.measure('measure_load_from_dom', 'domComplete', 'mark_fully_loaded');
```

In this example, the [`measure`](https://msdn.microsoft.com/library/jj585594(v=vs.85).aspx) method is called on the [`performance`](https://msdn.microsoft.com/library/ff974680(v=vs.85).aspx) object of the [`window`](https://msdn.microsoft.com/library/ms535873(v=vs.85).aspx), passing in a `PerformanceMark` named 'measure_load_from_dom', the `domComplete` property of the [`performanceTiming`](https://msdn.microsoft.com/library/ff975075(v=vs.85).aspx) object, and finally a `PerformanceMark` named 'mark_fully_loaded'. The result will store the DOM completion duration in an independent `PerformanceMeasure` object that can be retrieved later. Storing times as your web application runs allows the application to remain responsive. The data can then be retrieved and analyzed after your application has completed a work task. 

[![User Timing API Demo](./../media/usertimingapi_image.png)](https://testdrive-archive.azurewebsites.net/Performance/performanceTiming/Default.html)





## API reference

[Timing and Performance APIs](https://msdn.microsoft.com/library/hh772738(v=vs.85).aspx)

[performanceTiming object](https://msdn.microsoft.com/library/ff975075(v=vs.85).aspx)


## Specification

[User Timing API Specification](http://go.microsoft.com/fwlink/p/?LinkId=248169)
