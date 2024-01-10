---
title: "Main classes for WebView2: Environment, Controller, and Core"
description: "Overview of how the top-level WebView2 classes or interfaces work together: CoreWebView2Environment, CoreWebView2Controller, and CoreWebView2."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/24/2022
---
# Main classes for WebView2: Environment, Controller, and Core

<!-- keep sync'd:
* [Main classes: Environment, Controller, and Core](overview-features-apis.md#main-classes-environment-controller-and-core) in _Overview of WebView2 features and APIs_.
* [Main classes for WebView2: Environment, Controller, and Core](environment-controller-core.md) - topmost content.
-->

The `CoreWebView2Environment`, `CoreWebView2Controller`, and `CoreWebView2` classes (or equivalent interfaces) work together so your app can host a WebView2 browser control and access its browser features.  These three large classes expose a wide range of APIs that your host app can access to provide many categories of browser-related features for your users.

*  The `CoreWebView2Environment` class represents a group of WebView2 controls that share the same WebView2 browser process, user data folder, and renderer.  From this `CoreWebView2Environment` class, you create pairs of `CoreWebView2Controller` and `CoreWebView2` instances.
*  The `CoreWebView2Controller` class is responsible for hosting-related functionality such as window focus, visibility, size, and input, where your app hosts the WebView2 control.
*  The `CoreWebView2` class is for the web-specific parts of the WebView2 control, including networking, navigation, script, and parsing and rendering HTML.

<!-- / keep sync'd -->

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2)
* [CoreWebView2Controller Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controller)
* [CoreWebView2Environment Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environment)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2 Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2)
* [CoreWebView2Controller Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller)
* [CoreWebView2Environment Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2)
* [ICoreWebView2Controller](/microsoft-edge/webview2/reference/win32/icorewebview2controller)
* [ICoreWebView2Environment](/microsoft-edge/webview2/reference/win32/icorewebview2environment)

---


Cross-platform API implementation: Most of the WebView2 APIs are initially developed for C++, and then most of the C++ APIs are wrapped as C# APIs.  This way, there is a consistent parallelism and equivalence across platforms and programming languages.


#### Overview of the top-level classes

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
