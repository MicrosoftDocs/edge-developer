---
title: Release Notes for WebView2 Prerelease SDK 1.0.1369-prerelease
description: New features, APIs, and fixes in WebView2 Prerelease SDK 1.0.1369-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 09/06/2022
---
# Release Notes for WebView2 Prerelease SDK 1.0.1369-prerelease

Release Date: September 6, 2022

[NuGet package for WebView2 SDK 1.0.1369-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1369-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 106.0.1369.0 or higher.


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


*  The drag and drop API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController.DragLeave Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.dragleave?view=webview2-dotnet-1.0.1369-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2compositioncontroller-dragleave)

##### [WinRT/C#](#tab/winrtcsharp)

* [ICoreWebView2CompositionControllerInterop2.DragEnter Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2?view=webview2-winrt-1.0.1369-prerelease&preserve-view=true#dragenter)
* [ICoreWebView2CompositionControllerInterop2.DragLeave Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2?view=webview2-winrt-1.0.1369-prerelease&preserve-view=true#dragleave)
* [ICoreWebView2CompositionControllerInterop2.DragOver Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2?view=webview2-winrt-1.0.1369-prerelease&preserve-view=true#dragover)
* [ICoreWebView2CompositionControllerInterop2.Drop Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2?view=webview2-winrt-1.0.1369-prerelease&preserve-view=true#drop)
* [CoreWebView2CompositionController.DragLeave Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.1369-prerelease&preserve-view=true#dragleave)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController3::DragEnter](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3?view=webview2-1.0.1369-prerelease&preserve-view=true#dragenter)
* [ICoreWebView2CompositionController3::DragLeave](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3?view=webview2-1.0.1369-prerelease&preserve-view=true#dragleave)
* [ICoreWebView2CompositionController3::DragOver](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3?view=webview2-1.0.1369-prerelease&preserve-view=true#dragover)
* [ICoreWebView2CompositionController3::Drop](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3?view=webview2-1.0.1369-prerelease&preserve-view=true#drop)

---


<!-- ====================================================================== -->
## Bug fixes

*  Fixed a bug where WPF apps would crash when windows with WebView2 were closed.  ([Issue #640](https://github.com/MicrosoftEdge/WebView2Feedback/issues/640))
*  Fixed a bug that produced simultaneous WebView creation failure.  (Runtime-only)  ([Issue #2703](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2703))
*  Fixed print settings paper size to support dimensions as small as 0.01 inches.  (Runtime-only)
*  Fixed a bug where the WebView2 print dialog reset the **Scale** setting to **Fit to printable area** every time.  ([Issue #2523](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2523))
*  Fixed a bug in the **wv2winrt** tool where a WinMD file wasn't referenced in some projects.


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
