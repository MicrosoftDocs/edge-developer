---
title: Release Notes for WebView2 Prerelease SDK 1.0.2164-prerelease
description: New features, APIs, and fixes in WebView2 Prerelease SDK 1.0.2164-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 10/18/2023
---
# Release Notes for WebView2 Prerelease SDK 1.0.2164-prerelease

Release Date: October 18, 2023

[NuGet package for WebView2 SDK 1.0.2164-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2164-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 120.0.2164.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:


<!-- ------------------------------ -->
* Added the `FailureSourceModulePath` property to the `ProcessFailedEventArgs` type, to specify the full path of the module that caused the crash in cases of Windows code integrity failures - that is, when a process exited with `STATUS_INVALID_IMAGE_HASH`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class:
    * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.failuresourcemodulepath?view=webview2-dotnet-1.0.2164-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class:
    * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs?view=webview2-winrt-1.0.2164-prerelease&preserve-view=true#failuresourcemodulepath)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalProcessFailedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessfailedeventargs?view=webview2-1.0.2164-prerelease&preserve-view=true)
    * [ICoreWebView2ExperimentalProcessFailedEventArgs::get_FailureSourceModulePath](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessfailedeventargs?view=webview2-1.0.2164-prerelease&preserve-view=true#get_failuresourcemodulepath)

---


<!-- ====================================================================== -->
## Bug fixes

* Added support for additional page settings (`PageRange` and `PagesPerSheet`) in the PrintToPDF API.  (Runtime-only)  ([Issue #3719](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3719))
* Navigation to an Extension Resource file was not handled correctly, and has now been fixed with the correct handling method.  (Runtime-only)  ([Issue #3728](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3728))
* Fixed an issue causing some UWP apps to be unable to input text.  (Runtime-only)  ([Issue #3805](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3805))
* Fixed an initialization failure for apps that were using the Windows `PerProcessSystemDPIForceOff` compatibility setting.  (Runtime-only)  ([Issue #3692](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3692))
* Removed monitors that were collecting data when the system default browser setting changes.  (Runtime-only)
* Fixed a Dialog Position Offset bug in WebView2.  (Runtime-only)  ([Issue #3763](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3763))
* Fixed a crash in the `NewWindowRequested` event if the `NewWindow` is set to `null`.  (Runtime-only)


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)

