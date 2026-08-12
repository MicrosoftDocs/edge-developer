---
title: Prerelease SDK 1.0.2065-prerelease, for Runtime 118 (Aug. 30, 2023)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.2065-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.2065-prerelease, for Runtime 118 (Aug. 30, 2023)

Release Date: Aug. 30, 2023

[NuGet package for WebView2 SDK 1.0.2065-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2065-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 118.0.2065.0 or later.


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Added source frame info to the `NewWindowRequested` event

Added source frame info to `NewWindowRequested`, to support identifying the source.

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

* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
