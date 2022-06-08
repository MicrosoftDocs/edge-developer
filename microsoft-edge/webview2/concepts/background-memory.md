---
title: Optimize idle memory usage
description: Best practices for managing idle / background memory for WebView2 host apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 06/08/2022
---
# Optimize idle memory usage
<!--
todo: update title elsewhere
# Optimize background memory usage
-->

<!-- 
define:
background memory
Visibility
Suspension

idle
suspend
sleeping
background
-->
Use these approaches and APIs to reduce the idle memory usage by your WebView2 host app.

Idle memory usage is memory usage when your app is not in use by the user.

Better control how your app uses resources when the app is not in use.

Audience: Developers working on a WebView2 app and focusing on optimizing performance.
<!--
hybrid app developers
Performance engineers
WebView2 app developers
suspend
visibility
-->

Best practices for managing background memory for WebView2 host apps.

Background memory usage is a top concern for hybrid native/web apps.

For an introduction, see also [blog post].


<!-- ====================================================================== -->
## Deciding which approach to use

You can do any one of the following approaches:
* Approach 1: Indicate app visibility to the WebView2.
* Approach 2: Instruct the WebView2 to use less memory. <!-- `MemoryUsageTargetLevel` property.-->
* Approach 3: Suspend the WebView2. <!-- `TrySuspend`-->
<!-- reverse would be better, to emphasize difference?:
* Approach 3: call `TrySuspend`, and also change the visibility as reported to the Microsoft Edge browser engine.
-->

These approaches are described below.


<!-- ====================================================================== -->
## Approach 1: Indicate app visibility to the WebView2
 <!-- (IsVisible property) -->

<!-- What is the approach? -->
In this approach, you change the visibility.<!--TODO: of _ -->

<!-- Why/when would you use this approach? -->

This approach has the lowest cost (difficulty) and the lowest benefit.  This approach is like having multiple tabs open in Microsoft Edge and the background tabs are suspended.

The first approach sets the visibility of your WebView2 control, as reported to Microsoft Edge.  Microsoft Edge has features to throttle tabs that aren't visible.  To take advantages of these features, your WebView2 app needs to report its visibility to Microsoft Edge.  _visibility_ means _.  Indicating the visibility state of your app as "not visible" might not be desirable for every case, such as when your app is showing a splash screen during initial load.  Therefore, your host app needs to explicitly inform the WebView2 control of the app's visibility, to get these Microsoft Edge throttling benefits when the app is minimized or hidden.

Add code to hide the WebView2 control when your app is minimized, and show the WebView2 control when your app is restored to visible.

Hiding your app's WebView2 control (that is, indicating to Microsoft Edge that your app is not visible) will:

*  Throttle animations.
*  Run certain tasks less frequently.
*  Purge some caches to reduce memory usage.
*  Activate Windows 11 Efficiency Mode/EcoQoS.


#### APIs
<!-- for section "Approach 1: Change the visibility (Indicate the visibility state of your app to Microsoft Edge)" -->

# [C#](#tab/c-sharp)

* [CoreWebView2Controller Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
   * [IsVisible Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.isvisible)


# [C++](#tab/cpp)

* [ICoreWebView2Controller](/microsoft-edge/webview2/reference/win32/icorewebview2controller)<!-- c# links to "CoreWebView2Controller Class" -->
   * [put_IsVisible](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_isvisible)<!-- c# links to "IsVisible Property" -->
   * [get_IsVisible](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_isvisible)<!-- c# links to "IsVisible Property" --><!-- more info than put -->

---

If you're using WebView2 to host your own web content, you can leverage the visibility state even further by using the `Document` object's [visibilitychange event](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event) on the web side, to optimize what your web content is doing while your app is in the hidden state.

Properly setting the visibility of your app is an easy way to reduce some of the memory and CPU overhead of your app when your app is not in use, without impacting anything that your hosted contents might be doing.


#### Example: Changing the visibility

link to WebView2Samples repo?

# [C#](#tab/c-sharp)

# [C++](#tab/cpp)

---


<!-- ====================================================================== -->
## Approach 2: Instruct the WebView2 to use less memory
<!-- 
`MemoryUsageTargetLevel` property
-->


<!-- What is the approach? -->

In this approach, you use the `MemoryUsageTargetLevel` property.

<!-- Why/when would you use this approach? -->

This approach has medium cost (difficulty) and medium benefit.  This approach tells Microsoft Edge to garbage-collect the JavaScript heap; clean up after itself, act like you're in a _ environment.  If your code is going to be momentarily suspended, use this approach.

This approach is useful for apps that are minimized to the system tray, or when you know that your app is going to be idle for a while.  WebView2's `MemoryUsageTargetLevel` property allows you to direct WebView2 to reduce its memory usage, while not impacting other timers or running tasks for your web code.

The `MemoryUsageTargetLevel` property tells WebView2 to behave as if it's in a low-memory environment.  The specific details may vary by OS version, but in every case WebView2 will run various garbage collection features and allow Windows to page out its memory more liberally. A simple use-case for this might be to move to a low-memory state after your app is hidden for some period of time.

Be sure to set the memory usage target back to normal<!-- todo: how? --> once your app is in use again; otherwise, you may hit performance issues if your memory is being paged out while your app is in use.


#### APIs
<!-- for section "Approach 2: Use the `MemoryUsageTargetLevel` property" -->

# [C#](#tab/c-sharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [MemoryUsageTargetLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.memoryusagetargetlevel)


# [C++](#tab/cpp)

* [ICoreWebView2Experimental5](/microsoft-edge/webview2/reference/win32/icorewebview2experimental5)<!-- c# links to "" - prop not found -->
   * [put_MemoryUsageTargetLevel](/microsoft-edge/webview2/reference/win32/icorewebview2experimental5#put_memoryusagetargetlevel)<!-- c# links to "" - not found -->

---


#### Example: 

# [C#](#tab/c-sharp)

# [C++](#tab/cpp)

---


<!-- ====================================================================== -->
## Approach 3: Suspend the WebView2 <!-- `TrySuspend`-->

<!-- What is the approach? -->

In this approach, you change the visibility of _, and also call `TrySuspend`.  

<!-- Why/when would you use this approach? -->

This approach has highest benefit, and is most complex to implement.  You have to design-in this approach into your code, to handle this approach.  This approach is equivalent to the Sleeping Tabs feature of Microsoft Edge; this approach stops the webpage from doing anything, and puts the webpage into a low-memory suspended state; consuming almost no CPU usage.



Finally, WebView2's TrySuspend API offers the biggest benefit to background performance, but does require some planning. WebView2's suspension functionality is built on-top of Microsoft Edge's sleeping tabs feature.

In contrast to memory usage target, suspension requires that your WebView2 be hidden, and will automatically be resumed when the visibility is changed. 

Suspension is a powerful feature to minimize the impact of your application, but there are some constraints on when it can be used and what web features are limited when web content is suspended. You can see details on what might prevent an app from entering suspension in the Sleeping Tabs FAQ.


#### APIs
<!-- for section "Approach 3: Change the visibility and also call `TrySuspend`" -->

# [C#](#tab/c-sharp)

<!-- todo: copied from APIs PR, delete some? -->

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
   * [IsSuspended Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.issuspended)
   * [Resume Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.resume)
   * [TrySuspendAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.trysuspendasync)

* [CoreWebView2Controller Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
   * [IsVisible Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.isvisible)


# [C++](#tab/cpp)

<!-- todo: copied from APIs PR, delete some? -->

* [ICoreWebView2_3](/microsoft-edge/webview2/reference/win32/icorewebview2_3)<!-- c# links to "CoreWebView2 Class" -->
   * [get_IsSuspended](/microsoft-edge/webview2/reference/win32/icorewebview2_3#get_issuspended)<!-- c# links to "IsSuspended Property" -->
   * [Resume](/microsoft-edge/webview2/reference/win32/icorewebview2_3#resume)<!-- c# links to "Resume Method" -->
   * [TrySuspend](/microsoft-edge/webview2/reference/win32/icorewebview2_3#trysuspend)<!-- c# links to "TrySuspendAsync Method" -->

* [ICoreWebView2Controller](/microsoft-edge/webview2/reference/win32/icorewebview2controller)<!-- c# links to "CoreWebView2Controller Class" -->
   * [put_IsVisible](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_isvisible)<!-- c# links to "IsVisible Property" -->
   * [get_IsVisible](/microsoft-edge/webview2/reference/win32/icorewebview2controller#get_isvisible)<!-- c# links to "IsVisible Property" --><!-- more info than put -->

---


#### Example: Changing the visibility and also calling `TrySuspend`

link to WebView2Samples repo?

# [C#](#tab/c-sharp)

# [C++](#tab/cpp)

---


<!-- 
Link to scenario: in work item
Link to specs/explainers: in work item
There will be a screencast/gif/demo
-->

This is a cross-browser feature and a cross-browser API.  This API leverages Edge's Sleeping Tabs.  At the Microsoft Edge Blog, see [Sleeping Tabs in Microsoft Edge: Delivering better browser performance](https://blogs.windows.com/msedgedev/2020/12/09/sleeping-tabs-beta-performance/).


<!-- ====================================================================== -->
<!-- ## Remarks -->

<!-- copied from https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.memoryusagetargetlevel -->

<!-- 
An app may set `MemoryUsageTargetLevel` to indicate desired memory consumption level of WebView.
Scripts will not be impacted and continue to run.
This is useful for inactive apps that still want to run scripts and/or keep network connections alive and therefore could not call `TrySuspendAsync` and `Resume` to reduce memory consumption.
These apps can set memory usage target level to Low when the app becomes inactive, and set back to Normal when the app becomes active.

It is not necessary to set `CoreWebView2Controller`'s `IsVisible` property to false when setting the property.

It is a best effort operation to change memory usage level, and the API will return before the operation completes.

Setting the level to Low could potentially cause memory for some WebView browser processes to be swapped out to disk in some circumstances. It is a best effort to reduce memory usage as much as possible. If a script runs after its related memory has been swapped out, the memory will be swapped back in to ensure the script can still run, but performance might be impacted. Therefore, the app should set the level back to Normal when the app becomes active again. Setting memory usage target level back to normal will not happen automatically.

An app should choose to use either the combination of TrySuspendAsync() and Resume() or the combination of setting MemoryUsageTargetLevel to Low and Normal. It is not advisable to mix them. Trying to set MemoryUsageTargetLevel while suspended will be ignored. The TrySuspendAsync() and Resume() methods will change the MemoryUsageTargetLevel. TrySuspendAsync() will automatically set MemoryUsageTargetLevel to Low while Resume() on suspended WebView will automatically set MemoryUsageTargetLevel to Normal. Calling Resume() when the WebView is not suspended would not change MemoryUsageTargetLevel. -->


<!--
also read cpp Remarks: 
[ICoreWebView2Experimental5::put_MemoryUsageTargetLevel property](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental5#put_memoryusagetargetlevel)

We want to bring the two API Ref pages paragraphs to be as identical as possible, lang permitting; only the lang should be different, not the discussion points & wording.
-->


<!-- ====================================================================== -->
## API Reference overview

<!-- delete section, since per-section links are above?
Make this as comprehensive as [Performance optimizations/tools and debugging](https://review.docs.microsoft.com/en-us/microsoft-edge/webview2/concepts/apis-capabilities?branch=pr-en-us-1971&tabs=c-sharp#performance-optimizationstools-and-debugging) in _Survey of WebView2 APIs and their capabilities_?
-->

# [C#](#tab/c-sharp)

* [CoreWebView2Controller.IsVisible Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controller.isvisible#microsoft-web-webview2-core-corewebview2controller-isvisible)

* [CoreWebView2.MemoryUsageTargetLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.memoryusagetargetlevel)<!-- read both .net & c++ remarks on "same" equiv prop -->

* [CoreWebView2.TrySuspendAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.trysuspendasync)

# [C++](#tab/cpp)

* [ICoreWebView2Controller::put_IsVisible property](/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_isvisible)

* [ICoreWebView2Experimental5::put_MemoryUsageTargetLevel property](/microsoft-edge/webview2/reference/win32/icorewebview2experimental5#put_memoryusagetargetlevel)

* [ICoreWebView2_3::TrySuspend method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#trysuspend)

---

Tip: See remarks in the API Reference pages for both languages.


<!-- ====================================================================== -->
## See also

* [blog post] about the use of these APIs.
* [EcoQoS](https://devblogs.microsoft.com/performance-diagnostics/introducing-ecoqos/) - Windows 11 Efficiency Mode.
<!--
pending:
* [Performance optimizations/tools and debugging](https://review.docs.microsoft.com/en-us/microsoft-edge/webview2/concepts/apis-capabilities?branch=pr-en-us-1971&tabs=c-sharp#performance-optimizationstools-and-debugging) in _Survey of WebView2 APIs and their capabilities_.
-->
