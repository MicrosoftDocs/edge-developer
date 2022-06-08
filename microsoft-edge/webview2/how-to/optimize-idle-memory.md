---
title: Optimize idle memory usage
description: Managing idle memory (background memory) for WebView2 host apps.  Reduce the memory usage by your WebView2 host app when your app is open but not in use.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 06/08/2022
---
# Optimize idle memory usage

Use these approaches and APIs to reduce the memory usage by your WebView2 host app when your app is open but not in use.  Idle memory usage, including background memory usage, is a top concern for hybrid native/web apps.

To minimize memory usage by your WebView2 app when it's idle, you can do any of the following approaches:
* Approach 1: Indicate app visibility to the WebView2.
* Approach 2: Instruct the WebView2 to use less memory.
* Approach 3: Suspend the WebView2.

These approaches are described below.


<!-- ====================================================================== -->
## Approach 1: Indicate app visibility to the WebView2

#### Description of this approach

In this first approach, you set the visibility of your WebView2 control as reported to Microsoft Edge, by setting the `IsVisible` property.  Microsoft Edge has features to throttle tabs that aren't visible.  To take advantages of these features, your WebView2 app needs to report its visibility to Microsoft Edge.

This approach is like having multiple tabs open in Microsoft Edge and the background tabs are suspended.

Add code to hide the WebView2 control when your app is minimized, and show the WebView2 control when your app is restored to visible.

Hiding your app's WebView2 control (that is, indicating to Microsoft Edge that your app is not visible) will:

*  Throttle animations.
*  Run certain tasks less frequently.
*  Purge some caches to reduce memory usage.
*  Activate Windows 11 Efficiency Mode/EcoQoS.

#### When to use this approach

This approach has the lowest cost (difficulty) and the lowest benefit.

Indicating the visibility state of your app as "not visible" might not be desirable for every case, such as when your app is showing a splash screen during initial load.  Therefore, your host app needs to explicitly inform the WebView2 control of the app's visibility, to get these Microsoft Edge throttling benefits when the app is minimized or hidden.

#### API Reference and sample code

# [C#](#tab/c-sharp)

* [CoreWebView2Controller Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
   * [IsVisible Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2controller.isvisible)

# [C++](#tab/cpp)

* [ICoreWebView2Controller](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller)<!-- c# links to "CoreWebView2Controller Class" -->
   * [put_IsVisible](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_isvisible)<!-- c# links to "IsVisible Property" -->
   * [get_IsVisible](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_isvisible)<!-- c# links to "IsVisible Property" -->

---

If you're using WebView2 to host your own web content, you can leverage the visibility state even further by using the `Document` object's [visibilitychange event](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event) on the web side, to optimize what your web content is doing while your app is in the hidden state.

Properly setting the visibility of your app is an easy way to reduce some of the memory and CPU overhead of your app when your app is not in use, without impacting anything that your hosted contents might be doing.


<!-- ====================================================================== -->
## Approach 2: Instruct the WebView2 to use less memory

#### Description of this approach

This approach tells Microsoft Edge to garbage-collect the JavaScript heap; clean up after itself, act like you're in a _ environment.

In this approach, you use the `MemoryUsageTargetLevel` property.  WebView2's `MemoryUsageTargetLevel` property allows you to direct WebView2 to reduce its memory usage, while not impacting other timers or running tasks for your web code.

The `MemoryUsageTargetLevel` property tells WebView2 to behave as if it's in a low-memory environment.  The specific details may vary by OS version, but in every case WebView2 will run various garbage collection features and allow Windows to page out its memory more liberally. 

Be sure to set the memory usage target back to normal<!-- todo: how? --> once your app is in use again; otherwise, you may hit performance issues if your memory is being paged out while your app is in use.

#### When to use this approach

This approach has medium cost (difficulty) and medium benefit.  

If your code is going to be momentarily suspended, use this approach.

This approach is useful for apps that are minimized to the system tray, or when you know that your app is going to be idle for a while.

A simple use-case for this might be to move to a low-memory state after your app is hidden for some period of time.

#### API Reference and sample code

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [MemoryUsageTargetLevel Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.memoryusagetargetlevel)

# [C++](#tab/cpp)

* [ICoreWebView2Experimental5](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental5)<!-- c# links to "" - prop not found -->
   * [put_MemoryUsageTargetLevel](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental5#put_memoryusagetargetlevel)<!-- c# links to "MemoryUsageTargetLevel Property" -->

---


<!-- ====================================================================== -->
## Approach 3: Suspend the WebView2 <!-- `TrySuspend`-->

#### Description of this approach

In this approach, you call `TrySuspend`.  

This approach is equivalent to the Sleeping Tabs feature of Microsoft Edge; this approach stops the webpage from doing anything, and puts the webpage into a low-memory suspended state; consuming almost no CPU usage.

This approach works in conjunction with reporting the visibility of your app, as described above.

#### When to use this approach

This approach has highest benefit, and is most complex to implement.  You have to design-in this approach into your code, to handle this approach.

The WebView2 `TrySuspend` API offers the biggest benefit to background performance, but does require some planning.

In contrast to memory usage target, suspension requires that your WebView2 be hidden, and will automatically be resumed when the visibility is changed. 

Suspension is a powerful feature to minimize the impact of your application, but there are some constraints on when it can be used and what web features are limited when web content is suspended.

WebView2's suspension functionality is built on-top of Microsoft Edge's sleeping tabs feature.  You can see details on what might prevent an app from entering suspension in the Sleeping Tabs FAQ.

#### API Reference and sample code

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [IsSuspended Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.issuspended)
   * [Resume Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.resume)
   * [TrySuspendAsync Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.trysuspendasync)

* [CoreWebView2Controller Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
   * [IsVisible Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2controller.isvisible)


# [C++](#tab/cpp)

* [ICoreWebView2_3](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_3)<!-- c# links to "CoreWebView2 Class" -->
   * [get_IsSuspended](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_3#get_issuspended)<!-- c# links to "IsSuspended Property" -->
   * [Resume](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_3#resume)<!-- c# links to "Resume Method" -->
   * [TrySuspend](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_3#trysuspend)<!-- c# links to "TrySuspendAsync Method" -->

* [ICoreWebView2Controller](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller)<!-- c# links to "CoreWebView2Controller Class" -->
   * [put_IsVisible](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_isvisible)<!-- c# links to "IsVisible Property" -->
   * [get_IsVisible](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_isvisible)<!-- c# links to "IsVisible Property" --><!-- more info than put -->

---

This is a cross-browser feature and a cross-browser API.  This API leverages Edge's Sleeping Tabs.  At the Microsoft Edge Blog, see [Sleeping Tabs in Microsoft Edge: Delivering better browser performance](https://blogs.windows.com/msedgedev/2020/12/09/sleeping-tabs-beta-performance/).


<!-- ====================================================================== -->
## API Reference overview

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [IsSuspended Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.issuspended)
   * [Resume Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.resume)
   * [TrySuspendAsync Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.trysuspendasync)
   * [MemoryUsageTargetLevel Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.memoryusagetargetlevel)<!-- read both .net & c++ remarks on "same" equiv prop -->

* [CoreWebView2Controller Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
   * [IsVisible Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2controller.isvisible)

# [C++](#tab/cpp)

* [ICoreWebView2_3](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_3)<!-- c# links to "CoreWebView2 Class" -->
   * [get_IsSuspended](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_3#get_issuspended)<!-- c# links to "IsSuspended Property" -->
   * [Resume](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_3#resume)<!-- c# links to "Resume Method" -->
   * [TrySuspend](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_3#trysuspend)<!-- c# links to "TrySuspendAsync Method" -->

* [ICoreWebView2Controller](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller)<!-- c# links to "CoreWebView2Controller Class" -->
   * [put_IsVisible](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_isvisible)<!-- c# links to "IsVisible Property" -->
   * [get_IsVisible](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_isvisible)<!-- c# links to "IsVisible Property" -->

* [ICoreWebView2Experimental5](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental5)
    * [put_MemoryUsageTargetLevel](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental5#put_memoryusagetargetlevel)

---

Tip: See Remarks in the API Reference pages for both languages.


<!-- ====================================================================== -->
## See also

* [blog post] about the use of these APIs.
* [EcoQoS](https://devblogs.microsoft.com/performance-diagnostics/introducing-ecoqos/) - Windows 11 Efficiency Mode.
