---
title: Release Notes for WebView2 Prerelease SDK 1.0.2065-prerelease
description: New features, APIs, and fixes in WebView2 Prerelease SDK 1.0.2065-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 08/30/2023
---
# Release Notes for WebView2 Prerelease SDK 1.0.2065-prerelease

Release Date: August 30, 2023

[NuGet package for WebView2 SDK 1.0.2065-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2065-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 118.0.2065.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:


<!-- ------------------------------ -->
* Added source frame info to `NewWindowRequested`, to support identifying the source:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2NewWindowRequestedEventArgs` Class
    * [CoreWebView2NewWindowRequestedEventArgs.OriginalSourceFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2newwindowrequestedeventargs.originalsourceframeinfo?view=webview2-dotnet-1.0.2065-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2NewWindowRequestedEventArgs` Class
    * [CoreWebView2NewWindowRequestedEventArgs.OriginalSourceFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2newwindowrequestedeventargs?view=webview2-winrt-1.0.2065-prerelease&preserve-view=true#originalsourceframeinfo)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalNewWindowRequestedEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnewwindowrequestedeventargs2?view=webview2-1.0.2065-prerelease&preserve-view=true)
    * [ICoreWebView2ExperimentalNewWindowRequestedEventArgs2::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnewwindowrequestedeventargs2?view=webview2-1.0.2065-prerelease&preserve-view=true#get_originalsourceframeinfo)

---


<!-- ====================================================================== -->
## Bug fixes

* Disabled installing CRX in WebView2.  (Runtime-only)
* Fixed an initialization failure when the app has a DPI awareness compatibility setting applied.  (Runtime-only)  ([Issue #3008](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3008))
* Fixed a bug where visual hosted owned windows couldn't take character input.  (Runtime-only)


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
