---
title: Background memory best practices
description: Best practices for managing background memory for WebView2 host apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 05/25/2022
---
# Background memory best practices

Use these APIs to reduced background memory usage by your WebView2 host app.

Audience: Hybrid app developers, Performance engineers.

Best practices for managing background memory for WebView2 host apps.

Background memory usage is a top concern for hybrid native/web apps.

This article points you to key APIs.

WebView2 Background Best Practices


<!-- 
Link to scenario: in work item
Link to specs/explainers: in work item
There will be a screencast/gif/demo
-->

This is a cross-browser feature and a cross-browser API.  This API leverages Edge's Sleeping Tabs.  At the Microsoft Edge Blog, see [Sleeping Tabs in Microsoft Edge: Delivering better browser performance](https://blogs.windows.com/msedgedev/2020/12/09/sleeping-tabs-beta-performance/).


<!-- ====================================================================== -->
## Example code

A code sample is available in WebView2 API Samples.  [link]<!-- todo -->


<!-- ====================================================================== -->
## API Reference overview


# [C#](#tab/c-sharp)

* [CoreWebView2.MemoryUsageTargetLevel Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.memoryusagetargetlevel) - see the Remarks section.
* [CoreWebView2.TrySuspendAsync Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.trysuspendasync) - see the Remarks section.


# [C++](#tab/cpp)

* [interface ICoreWebView2Experimental5](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental5?view=webview2-1.0.1248-prerelease#get_memoryusagetargetlevel)
   *  `get_MemoryUsageTargetLevel`
   *  `put_MemoryUsageTargetLevel`

* [interface ICoreWebView2TrySuspendCompletedHandler](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2trysuspendcompletedhandler?view=webview2-1.0.1248-prerelease)

---


<!-- ====================================================================== -->
## See also

* [blog post] about the use of these APIs.
