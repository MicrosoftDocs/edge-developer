---
title: Release Notes for WebView2 Prerelease SDK 1.0.1158-prerelease
description: New features, APIs, and fixes in WebView2 Prerelease SDK 1.0.1158-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/06/2022
---
# Release Notes for WebView2 Prerelease SDK 1.0.1158-prerelease

Release Date: February 6, 2022

[NuGet package for WebView2 SDK 1.0.1158-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1158-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 100.0.1158.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:

*  Added [Status bar API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental13?view=webview2-1.0.1158-prerelease&preserve-view=true) to provide info when webiew is showing status message, URL, or empty string.
*  Added [CDP API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental14?view=webview2-1.0.1158-prerelease&preserve-view=true) to provide possibility for developers have multiple `DevToolsProtocol` targets in WebView2.


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  Rename ICoreWebView2ClientCertificate to [ICoreWebView2Certificate](/microsoft-edge/webview2/reference/win32/icorewebview2certificate?view=webview2-1.0.1158-prerelease&preserve-view=true).
*  New [APIs for iframes](/microsoft-edge/webview2/reference/win32/icorewebview2frame3?view=webview2-1.0.1158-prerelease&preserve-view=true):
   *  `add_PermissionRequested`
   *  `remove_PermissionRequested`


<!-- ====================================================================== -->
## Bug fixes

*  Fixed an issue causing erroneous warnings in the Visual Studio Error List window.  ([Issue #1722](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1722))
*  Fixed a bug where NewWindowRequested was not getting raised when opening PDF downloads.
*  Resolved a bug in WinUI 3 where select dropdowns would not show up.  ([Issue #1693](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1693))
*  Added the ability to toggle WebView2 mute state, even when there is no audio playing.


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
