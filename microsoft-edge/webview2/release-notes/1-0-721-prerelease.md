---
title: Release Notes for WebView2 Prerelease SDK 1.0.721-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 12/08/2020
---
# Release Notes for WebView2 Prerelease SDK 1.0.721-prerelease

Release Date: December 8, 2020

[NuGet package for WebView2 SDK 1.0.721-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.721-prerelease)

This prerelease version of the WebView2 SDK requires Microsoft Edge version 86.0.616.0 or higher.


<!-- ====================================================================== -->
## Breaking changes

> [!IMPORTANT]
> **Breaking Change**:  WebView2 prerelease package 1.0.707 and package 0.9.628 are deprecated.  Discontinue development with package 1.0.707 and  package0.9.628.


<!-- ====================================================================== -->
## Features

*  Added [WebView2 Group Policies](/deployedge/microsoft-edge-webview-policies).  For best practices, see [group policies for WebView2](concepts/enterprise.md#group-policies-for-webview2).
*  > [!IMPORTANT]
   > **Breaking Change**: Deprecated the old registry location.
   >
   > ```text
   > {Root}\Software\Policies\Microsoft\EmbeddedBrowserWebView\LoaderOverride\{AppId}
   > ```

*  Added support for [Drag and Drop](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller3?view=webview2-1.0.721-prerelease&preserve-view=true) in WebView2.
*  Added APIs to handle DPI support.
   *  Added [RasterizationScale](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_rasterizationscale) property to change the DPI scale for WebView2 content and UI pop-ups, and associated [RasterizationScaleChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#add_rasterizationscalechanged) event.
   *  Added [ShouldDetectMonitorScaleChanges](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_shoulddetectmonitorscalechanges) property to automatically update `RasterizationScale` property if needed.
   *  Added [BoundsMode property](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_boundsmode) to specify that the bounds are logic pixels and allow WebView2 to use `RasterizationScale` for WebView2 pixel display, and WebView2 use the `RasterizationScale` with the `Bounds` to get the physical size.
*  Updated `NewWindowRequested` event to handle **Ctrl+click** and **Shift+click**.  ([Issue #168](https://github.com/MicrosoftEdge/WebViewFeedback/issues/168) and [Issue #371](https://github.com/MicrosoftEdge/WebViewFeedback/issues/371)).


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  [WebResourceResponseReceived API](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_webresourceresponsereceived)
*  [NavigateWithWebResourceRequest API](/microsoft-edge/webview2/reference/win32/icorewebview2environment2?view=webview2-1.0.721-prerelease&preserve-view=true#createwebresourcerequest)
*  [Cookie management API](/microsoft-edge/webview2/reference/win32/icorewebview2cookiemanager?view=webview2-1.0.721-prerelease&preserve-view=true)
*  [DOMContentLoaded API](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_domcontentloaded)
*  [Environment property](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#get_environment)


<!-- ====================================================================== -->
## .NET


<!-- ------------------------------ -->
#### Features

*  Turned on WinForms designer in .NET Core 3.1+ and .NET 5.
*  Improved .NET cookie management.  ([Issue #611](https://github.com/MicrosoftEdge/WebViewFeedback/issues/611)).
*  Replaced `CoreWebView2Ready` with [CoreWebView2InitializationCompleted](/dotnet/api/microsoft.web.webview2.core.corewebview2initializationcompletedeventargs).


<!-- ------------------------------ -->
#### Bug fixes

*  Added [AcceleratorKeyPressed](/dotnet/api/microsoft.web.webview2.wpf.webview2.acceleratorkeypressed) event to support `AcceleratorKey` select in WebView2.  ([Issue #288](https://github.com/MicrosoftEdge/WebViewFeedback/issues/288)).
*  Removed unnecessary files from being output to WebView2 folders.  ([Issue #461](https://github.com/MicrosoftEdge/WebViewFeedback/issues/461)).
*  Improved host object API.  ([Issue #335](https://github.com/MicrosoftEdge/WebViewFeedback/issues/335) and [Issue #525](https://github.com/MicrosoftEdge/WebViewFeedback/issues/525)).


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
