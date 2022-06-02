---
title: Optimize background memory usage
description: Best practices for managing background memory for WebView2 host apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 06/02/2022
---
# Optimize background memory usage

Use these approaches and APIs to reduce the background memory usage by your WebView2 host app.

Audience: Developers working on a WebView2 app and focusing on optimizing performance.
<!--
hybrid app developers
Performance engineers
WebView2 app developers -->

Best practices for managing background memory for WebView2 host apps.

Background memory usage is a top concern for hybrid native/web apps.

For an introduction, see also [blog post].


<!-- ====================================================================== -->
## Deciding which approach to use

You can do any one of the following approaches:
* Approach 1: Change the visibility.<!--TODO: of _ -->
* Approach 2: Use the `MemoryUsageTargetLevel` property.
* Approach 3: Change the visibility and also call `TrySuspend`.

These approaches are described below.


<!-- ====================================================================== -->
## Approach 1: Change the visibility

<!-- What is the approach? -->

In this approach, you change the visibility.<!--TODO: of _ -->

<!-- Why/when would you use this approach? -->

This approach has the lowest cost (difficulty) and the lowest benefit.  This approach is like having multiple tabs open in Microsoft Edge and the background tabs are suspended.


<!-- experiment: h3's: -->
### APIs

# [C#](#tab/c-sharp)

# [C++](#tab/cpp)

---


### Example: Changing the visibility

# [C#](#tab/c-sharp)

# [C++](#tab/cpp)

---


link to WebView2Samples repo?


<!-- ====================================================================== -->
## Approach 2: Use the `MemoryUsageTargetLevel` property

<!-- What is the approach? -->

In this approach, you use the `MemoryUsageTargetLevel` property.

<!-- Why/when would you use this approach? -->

This approach has medium cost (difficulty) and medium benefit.  This approach tells Microsoft Edge to garbage-collect the JavaScript heap; clean up after itself, act like you're in a _ environment.  If your code is going to be momentarily suspended, use this approach.

<!-- experiment: h4's: -->

#### APIs

# [C#](#tab/c-sharp)

# [C++](#tab/cpp)

---


#### Example: 

# [C#](#tab/c-sharp)

# [C++](#tab/cpp)

---


<!-- ====================================================================== -->
## Approach 3: Change the visibility and also call `TrySuspend`

<!-- What is the approach? -->

In this approach, you change the visibility of _, and also call `TrySuspend`.  

<!-- Why/when would you use this approach? -->

This approach has highest benefit, and is most complex to implement.  You have to design-in this approach into your code, to handle this approach.  This approach is equivalent to the Sleeping Tabs feature of Microsoft Edge; this approach stops the webpage from doing anything, and puts the webpage into a low-memory suspended state; consuming almost no CPU usage.


<!-- experiment: h5's: -->
##### APIs

# [C#](#tab/c-sharp)

# [C++](#tab/cpp)

---


##### Example: Changing the visibility and also calling `TrySuspend`

# [C#](#tab/c-sharp)

# [C++](#tab/cpp)

---


link to WebView2Samples repo?


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

# [C#](#tab/c-sharp)

* [CoreWebView2.MemoryUsageTargetLevel Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.memoryusagetargetlevel)<!-- read both .net & c++ remarks on "same" equiv prop -->
* [CoreWebView2.TrySuspendAsync Method](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.trysuspendasync)
* [CoreWebView2Controller.IsVisible Property](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2controller.isvisible#microsoft-web-webview2-core-corewebview2controller-isvisible)

# [C++](#tab/cpp)

* [ICoreWebView2Experimental5::put_MemoryUsageTargetLevel property](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2experimental5#put_memoryusagetargetlevel)
* [ICoreWebView2_3::TrySuspend method](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_3#trysuspend)
* [ICoreWebView2Controller::put_IsVisible property](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller#put_isvisible)

---

Tip: See remarks in the API Reference pages for both languages.


<!-- ====================================================================== -->
## See also

* [blog post] about the use of these APIs.
