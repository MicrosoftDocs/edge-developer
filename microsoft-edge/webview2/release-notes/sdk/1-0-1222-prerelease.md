---
title: Prerelease SDK 1.0.1222-prerelease, for Runtime 102 (Apr. 12, 2022)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.1222-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.1222-prerelease, for Runtime 102 (Apr. 12, 2022)

Release Date: Apr. 12, 2022

[NuGet package for WebView2 SDK 1.0.1222-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1222-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 102.0.1222.0 or later.

**Detailed contents:**
* [Experimental APIs](#experimental-apis)
   * [Server Certificate API](#server-certificate-api)
   * [Favicon API](#favicon-api)
* [Promotions to Phase 2 (Stable in Prerelease)](#promotions-to-phase-2-stable-in-prerelease)
   * [Multiple user profiles](#multiple-user-profiles)
   * [Theming API](#theming-api)
   * [Default Download API](#default-download-api)
* [Bug fixes](#bug-fixes)
* [See also](#see-also)


<!-- ====================================================================== -->
## Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Server Certificate API

Added the [Server Certificate API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental15?view=webview2-1.0.1222-prerelease&preserve-view=true) which provides an option to trust the server's TLS certificate at the application level and render the page without prompting the user about TLS or providing the ability to cancel the web request.


<!-- ------------------------------ -->
#### Favicon API

Added the [Favicon API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental12?view=webview2-1.0.1222-prerelease&preserve-view=true) which provides a way to get the favicon when it changes or is set at a website.


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### Multiple user profiles

Support for [multiple user profiles](/microsoft-edge/webview2/reference/win32/icorewebview2environment10?view=webview2-1.0.1222-prerelease&preserve-view=true) in WebView2.

Previous phase: [Multiple user profiles](./1-0-1018-prerelease.md#multiple-user-profiles) in _Prerelease SDK 1.0.1018-prerelease, for Runtime 95 (Sep. 20, 2021)_.


<!-- ------------------------------ -->
#### Theming API

[Theming API](/microsoft-edge/webview2/reference/win32/icorewebview2profile?view=webview2-1.0.1222-prerelease&viewFallbackFrom=webview2-1.0.1185.39&preserve-view=true)<!-- todo: fix fallback --> which provides a way to customize the WebView2 color theme as `light`, `dark`, or `system`.

The previous phase isn't in the release notes.


<!-- ------------------------------ -->
#### Default Download API

[Default Download API](/microsoft-edge/webview2/reference/win32/icorewebview2profile?view=webview2-1.0.1222-prerelease&viewFallbackFrom=webview2-1.0.1185.39&preserve-view=true) which provides a way to customize the default download location.

The previous phase isn't in the release notes.


<!-- ====================================================================== -->
## Bug fixes

* Fixed `ZoomFactor` issue that incorrectly sets `ZoomFactor` value to the maximum value when it is out of bounds.

* Fixed an issue in which WebView2 content can become blurry when moving between monitors with different scaling.

* Fixed a bug where `MouseEvent.movementX` and `MouseEvent.movementY` will always be **0** in visual hosting mode. ([Issue #2220](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2220))

* Fixed log in issue caused by a password regression in WebView2. ([Issue #2291](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2291))

* Fixed a failure caused when a user opens a new app window and the webpage does not have a navigation entry assigned.

* Made a runtime change to fix a bug in WinUI 2 (UWP) in which owned windows were not showing up.

* Fixed `ICoreWebView2Frame::PostWebMessage` functionality after source update. ([Issue #2267](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2267))


<!-- ====================================================================== -->
## See also

* [Runtime 102.0.1245.22 (Jun. 14, 2022)](../runtime/102.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
