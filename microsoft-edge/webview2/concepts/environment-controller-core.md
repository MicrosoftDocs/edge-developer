---
title: "How the top-level classes work: CoreWebView2, Controller, and Environment"
description: "Overview of how the top-level WebView2 classes work: CoreWebView2, Controller, and Environment."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 06/24/2022
---
# How the top-level classes work: CoreWebView2, Controller, and Environment

<!-- keep sync'd:
* topmost content in [How the top-level classes work: CoreWebView2, Controller, and Environment](environment-controller-core.md).
* [Overview of the top-level classes](overview-features-apis.md#overview-of-the-top-level-classes) in _Overview of WebView2 features and APIs_.
-->

The three top-level `CoreWebView2`, `*Controller`, and `*Environment` classes (or interfaces) work together so your app can host a WebView2 browser control.  These large, top-level classes or interfaces contain properties, methods, and events that provide a variety of features for your apps.

The `*Environment` class (or interface) represents a group of WebView2 controls that share the same WebView2 browser process, user data folder, and renderer.  From the `Environment` class (or interface), you create `CoreWebView2` and `*Controller` pairs.
*  The `CoreWebView2` class (or interface) is for the web-specific parts of the WebView2 control, including networking, navigation, script, and parsing and rendering HTML.
*  The `*Controller` class (or interface) is responsible for hosting-related functionality such as focus, visibility, size, and input, where your app hosts the WebView2 control.

<!-- / keep sync'd -->


#### [C#](#tab/c-sharp)

* [CoreWebView2 Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2)
* [CoreWebView2Controller Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
* [CoreWebView2Environment Class](https://docs.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2environment)

#### [C++](#tab/cpp)

* [ICoreWebView2](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2)
* [ICoreWebView2Controller](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2controller)
* [ICoreWebView2Environment](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2environment)

---

Cross-platform API implementation: Most of the WebView2 APIs are initially developed for C++, and then most of the C++ APIs are wrapped as C# APIs.  This way, there is a consistent parallelism and equivalence across platforms and programming languages.


### Overview of the top-level classes

Overview of:
* `CoreWebView2Environment`
* `CoreWebView2`
* `CoreWebView2Controller` vs. `WebView2` classes (UI framework-specific WebView2 element class like the WPF, WinForms, or WinUI `WebView2` classes).

or, equivalently:
* `ICoreWebView2Environment`
* `ICoreWebView2`
* `ICoreWebView2Controller`

`CoreWebView2Environment` represents a group of WebView2 controls that all share the following:
*  They share the same WebView2 browser process.
*  They share the same user data folder.
*  They potentially share WebView2 renderer and other WebView2 processes.

From the `CoreWebView2Environment`, you create `CoreWebView2Controller` and `CoreWebView2` pairs.  They always come together as a `CoreWebView2Controller` and a corresponding `CoreWebView2`.
*  The `CoreWebView2Controller` is responsible for all hosting-related functionality such as focus, visibility, size, and input.
*  The `CoreWebView2` is for the web-specific parts of the WebView2 control, including networking, navigation, script, and parsing and rendering HTML.


#### UI framework-specific WebView2 element class such as WPF, WinForms, or WinUI WebView2 classes

It's different if you are using a UI framework-specific WebView2 element class like our WPF, WinForms, or WinUI WebView2 classes. 

Then, the WebView2 class can optionally take a `CoreWebView2Environment` to use, and otherwise it will create a default `CoreWebView2Environment`.  Internally, the WebView2 class creates its `CoreWebView2Controller` and `CoreWebView2` from the `CoreWebView2Environment`.  The `WebView2` exposes its `CoreWebView2` as a `CoreWebView2` property, but the `CoreWebView2Controller` is kept private to the `WebView2` class.  This is because the `WebView2` class is responsible for connecting all of the `CoreWebView2Controller` functionality to the UI framework.


<!-- ====================================================================== -->
<!-- ## See also -->

<!--
* []()
* []()
-->
