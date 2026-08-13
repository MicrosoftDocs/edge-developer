---
title: Prerelease SDK 1.0.1158-prerelease, for Runtime 100 (Feb. 6, 2022)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.1158-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.1158-prerelease, for Runtime 100 (Feb. 6, 2022)

Release Date: Feb. 6, 2022

[NuGet package for WebView2 SDK 1.0.1158-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1158-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 100.0.1158.0 or later.


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.

* Added [Status bar API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental13?view=webview2-1.0.1158-prerelease&preserve-view=true) to provide info when webiew is showing status message, URL, or empty string.

* Added [CDP API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental14?view=webview2-1.0.1158-prerelease&preserve-view=true) to provide possibility for developers have multiple `DevToolsProtocol` targets in WebView2.


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.

* Rename ICoreWebView2ClientCertificate to [ICoreWebView2Certificate](/microsoft-edge/webview2/reference/win32/icorewebview2certificate?view=webview2-1.0.1158-prerelease&preserve-view=true).
* New [APIs for iframes](/microsoft-edge/webview2/reference/win32/icorewebview2frame3?view=webview2-1.0.1158-prerelease&preserve-view=true):
   * `add_PermissionRequested`
   * `remove_PermissionRequested`


<!-- ====================================================================== -->
## Bug fixes

* Fixed an issue causing erroneous warnings in the Visual Studio Error List window.  ([Issue #1722](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1722))

* Fixed a bug where NewWindowRequested was not getting raised when opening PDF downloads.

* Resolved a bug in WinUI 3 where select dropdowns would not show up.  ([Issue #1693](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1693))

* Added the ability to toggle WebView2 mute state, even when there is no audio playing.


<!-- ====================================================================== -->
## See also

* [Runtime 100 (Apr. 12, 2022)](../runtime/100.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
