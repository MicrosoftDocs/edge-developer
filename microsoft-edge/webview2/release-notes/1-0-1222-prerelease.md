---
title: Release Notes for WebView2 Prerelease SDK 1.0.1222-prerelease
description: New features, APIs, and fixes in WebView2 Prerelease SDK 1.0.1222-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 04/12/2022
---
# Release Notes for WebView2 Prerelease SDK 1.0.1222-prerelease

Release Date: April 12, 2022

[NuGet package for WebView2 SDK 1.0.1222-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1222-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 102.0.1222.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

* Added the [Server Certificate API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental15?view=webview2-1.0.1222-prerelease&preserve-view=true) which provides an option to trust the server's TLS certificate at the application level and render the page without prompting the user about TLS or providing the ability to cancel the web request.

* Added the [Favicon API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental12?view=webview2-1.0.1222-prerelease&preserve-view=true) which provides a way to get the favicon when it changes or is set at a website.


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

* Support for [multiple user profiles](/microsoft-edge/webview2/reference/win32/icorewebview2environment10?view=webview2-1.0.1222-prerelease&preserve-view=true) in WebView2.

* [Theming API](/microsoft-edge/webview2/reference/win32/icorewebview2profile?view=webview2-1.0.1222-prerelease&viewFallbackFrom=webview2-1.0.1185.39&preserve-view=true) which provides a way to customize the WebView2 color theme as `light`, `dark`, or `system`.

* [Default Download API](/microsoft-edge/webview2/reference/win32/icorewebview2profile?view=webview2-1.0.1222-prerelease&viewFallbackFrom=webview2-1.0.1185.39&preserve-view=true) which provides a way to customize the default download location.


<!-- ====================================================================== -->
## Bug fixes

* Fixed `ZoomFactor` issue that incorrectly sets `ZoomFactor` value to the maximum value when it is out of bounds.
* Fixed an issue in which WebView2 content can become blurry when moving between monitors with different scaling.
* Fixed a bug where `MouseEvent.movementX` and `MouseEvent.movementY` will always be **0** in visual hosting mode. ([Issue #2220](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2220))
* Fixed log in issue caused by a password regression in WebView2. ([Issue #2291](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2291))
* Fixed a failure caused when a user opens a new app window and the web page does not have a navigation entry assigned.
* Made a runtime change to fix a bug in WinUI 2 (UWP) in which owned windows were not showing up.
* Fixed `ICoreWebView2Frame::PostWebMessage` functionality after source update. ([Issue #2267](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2267))


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
