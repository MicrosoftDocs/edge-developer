---
title: Release Notes for WebView2 Prerelease SDK 1.0.1018-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 09/20/2021
---
# Release Notes for WebView2 Prerelease SDK 1.0.1018-prerelease

Release Date: September 20, 2021

[NuGet package for WebView2 SDK 1.0.1018-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1018-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 95.0.1018.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:

*  Added a [media API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental9?view=webview2-1.0.1018-prerelease&preserve-view=true#summary) that enables developers to mute/unmute media within WebView2.
*  Added support for [multiple user profiles](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment8?view=webview2-1.0.1018-prerelease&preserve-view=true) with WebView2.


<!-- ====================================================================== -->
## Bug fixes

*  Fixed a bug where WebView2 stops rendering when the app is spanning monitors and the monitor scale changes.
*  Fixed a bug where closing the download UI crashes WebView2 when multiple download windows are open.  ([Issue #1723](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1723))
*  Fixed a build/initialization error when PlatformTarget isn't set in the user's .NET project.  ([Issue #730](https://github.com/MicrosoftEdge/WebViewFeedback/issues/730) and [Issue #1548](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1548))


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
