---
title: WebView2 API Reference
description: API Reference for Microsoft Edge WebView2 SDK.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/08/2023
---
# WebView2 API Reference

The Microsoft Edge WebView2 control enables you to host web content in your application using Chromium-based Microsoft Edge as the rendering engine.

WebView2 is available for the following frameworks or platforms:


##### [.NET/C#](#tab/dotnetcsharp)

* [Core](/dotnet/api/microsoft.web.webview2.core)
* [WPF](/dotnet/api/microsoft.web.webview2.wpf)
* [Windows Forms](/dotnet/api/microsoft.web.webview2.winforms)
* [Unity/HoloLens 2](/windows/mixed-reality/develop/advanced-concepts/webview2-unity-plugin)
<!--
dest. title:
   API Reference for Mixed Reality WebView plugin
dest. TOC title:
   WebView2 Unity Plugin API
-->

##### [WinRT/C#](#tab/winrtcsharp)

* [Microsoft.Web.WebView2.Core](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/index) - Common to all WinRT frameworks.
* [COM Interop/C++](/microsoft-edge/webview2/reference/winrt/interop/index) - Common to all WinRT frameworks.
*  WinUI 2 (UWP)
   * [Microsoft.UI.Xaml.Controls.WebView2 Class](/windows/winui/api/microsoft.ui.xaml.controls.webview2)
*  WinUI 3 (Windows App SDK)
   * [Microsoft.UI.Xaml.Controls.WebView2 Class](/windows/windows-app-sdk/api/winrt/microsoft.ui.xaml.controls.webview2)


##### [Win32/C++](#tab/win32cpp)

* [API Reference for WebView2 Win32 C++](/microsoft-edge/webview2/reference/win32)

---


<!-- ------------------------------ -->
#### JavaScript

On the web side of a WebView2 app, WebView2 exposes JavaScript APIs to the HTML documents that are running within the WebView2 control.  These JavaScript APIs are mostly to support communication with the host application.

* [JavaScript](/microsoft-edge/webview2/reference/javascript/)


<!-- ====================================================================== -->
## See also

* [Overview of Microsoft Edge WebView2](index.md)
* [Get started with WebView2](get-started/get-started.md)
