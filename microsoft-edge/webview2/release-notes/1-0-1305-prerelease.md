---
title: Release Notes for WebView2 Prerelease SDK 1.0.1305-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 07/04/2022
---
# Release Notes for WebView2 Prerelease SDK 1.0.1305-prerelease

Release Date: July 4, 2022

[NuGet package for WebView2 SDK 1.0.1305-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1305-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 105.0.1305.0 or higher.


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


* The Favicon API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.FaviconChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.faviconchanged?view=webview2-dotnet-1.0.1305-prerelease&preserve-view=true)
* [CoreWebView2.FaviconUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.faviconuri?view=webview2-dotnet-1.0.1305-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.FaviconChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1305-prerelease&preserve-view=true#faviconchanged)
* [CoreWebView2.FaviconUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1305-prerelease&preserve-view=true#faviconuri)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_15::FaviconChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_15?view=webview2-1.0.1305-prerelease&preserve-view=true#add_faviconchanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_15?view=webview2-1.0.1305-prerelease&preserve-view=true#remove_faviconchanged)
* [ICoreWebView2_15::FaviconUri property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2_15?view=webview2-1.0.1305-prerelease&preserve-view=true#get_faviconuri)<!--no put-->

---


<!-- ====================================================================== -->
## Bug fixes

*  Fixed an issue where `PrintToPdfAsync` may hang for long time. ([Issue #1974](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1974))

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PrintToPdfAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfasync?view=webview2-dotnet-1.0.1305-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PrintToPdfAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1305-prerelease&preserve-view=true#printtopdfasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_7::PrintToPdf](/microsoft-edge/webview2/reference/win32/icorewebview2_7?view=webview2-1.0.1305-prerelease&preserve-view=true#printtopdf)

---

* Fixed regression where WebView2 would steal focus from the app when the WebView2 was made visible. ([Issue #862](https://github.com/MicrosoftEdge/WebView2Feedback/issues/862))


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
