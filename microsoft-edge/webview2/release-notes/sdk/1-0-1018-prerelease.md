---
title: Prerelease SDK 1.0.1018-prerelease, for Runtime 95 (Sep. 20, 2021)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.1018-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.1018-prerelease, for Runtime 95 (Sep. 20, 2021)

Release notes for Microsoft Edge WebView2 Prerelease SDK, release date: Sep. 20, 2021.

[NuGet package for WebView2 SDK 1.0.1018-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1018-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires Microsoft Edge version 95.0.1018.0 or later; see [Runtime 95.0.1020.30 (Oct. 25, 2021)](../runtime/95.md).


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Media API

Added a [media API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental9?view=webview2-1.0.1018-prerelease&preserve-view=true#summary) that enables developers to mute/unmute media within WebView2.


<!-- ------------------------------ -->
#### Multiple user profiles

Added support for [multiple user profiles](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment8?view=webview2-1.0.1018-prerelease&preserve-view=true) with WebView2.


<!-- ====================================================================== -->
## Bug fixes

* Fixed a bug where WebView2 stops rendering when the app is spanning monitors and the monitor scale changes.

* Fixed a bug where closing the download UI crashes WebView2 when multiple download windows are open.  ([Issue #1723](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1723))

* Fixed a build/initialization error when PlatformTarget isn't set in the user's .NET project.  ([Issue #730](https://github.com/MicrosoftEdge/WebViewFeedback/issues/730) and [Issue #1548](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1548))


<!-- ====================================================================== -->
## See also

* [Runtime 95.0.1020.30 (Oct. 25, 2021)](../runtime/95.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
