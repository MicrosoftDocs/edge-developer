---
ms.assetid: 9834cb7f-fa17-499d-adc9-a08d5d3efa72
description: See guides for perfromance APIs and features within Microsoft Edge like the Animation Timing API.
title: Dev guide - Realtime communication
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Performance features

## Animation Timing API

The [Animation Timing API](./performance/animation-Timing-API.md) provides a smoother and more efficient way to create animated webpages by calling the animation frame when the system is ready to paint the frame. This helps you avoid overdrawn animations, wasted CPU cycles, and unnecessary power usage.

## Beacon API

The [Beacon API](./performance/beacon-API.md) provides a way to efficiently send beacons of critical information to a server.

## Efficient Script Yielding

Use [`setImmediate`](./performance/efficient-script-yielding.md) to solve the problems of using `setTimeout` by addressing the core performance problem without negatively impacting power consumption. Flush the browser event queue and receive an immediate callback without the minimum delays enforced by `setTimeout`.

## Fetch API

The [Fetch API](./performance/fetch-API.md) is the modern-day replacement for `XMLHttpRequest` that allows for low-level handling of responses and requests, as well as the ability to stream data.

## Navigation Timing API

The [Navigation Timing API](./performance/navigation-Timing-API.md) makes it easy to measure the real-world speed and performance of websites and locate problem areas that need tuning.

## Page Visibility API

The [Page Visibility API](./performance/page-Visibility-API.md) provides a means for developers to determine the current visibility of a document (or whether the page is in focus) and be notified when the visibility changes.

## Prerender and prefetch support

[Prerender and prefetch support](./performance/prerender-and-prefetch-support.md) enables content to download before it is needed so that resources are instantly available when the user wants them.

## Resource Timing API

The [Resource Timing API](./performance/resource-Timing-API.md) allows web applications to access network timing information regarding how long it takes for resources to load in a document.

## Streams API

The [Streams API](./performance/streams-API.md) enables streaming of chunks of data from streams.

## User Timing API

The [User Timing API](./performance/user-Timing-API.md) enables developers to accurately measure the length of AJAX requests, report on performance, and create benchmarks for JavaScript code using high precision timestamps.

## XMLHttpRequest

Use [XMLHttpRequest](./performance/XMLHttpRequest.md) to transfer data to and from a client and server.
