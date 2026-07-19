---
title: Prerelease SDK 1.0.2584-prerelease, for Runtime 126 (May 28, 2024)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.2584-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.2584-prerelease, for Runtime 126 (May 28, 2024)

Release Date: May 28, 2024

[NuGet package for WebView2 SDK 1.0.2584-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2584-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 126.0.2584.0 or later.


<!-- ====================================================================== -->
## Experimental features


<!-- ------------------------------ -->
#### Cancel initial navigation

Introduced an option to cancel the initial navigation in WebView2, to improve startup performance.  This change is disabled by default, and can be enabled by using the `msWebView2CancelInitialNavigation` feature flag.


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ====================================================================== -->
## Bug fixes


<!-- ------------------------------ -->
#### Runtime and SDK

* Fixed a crash when .NET host object async methods return a null result.  ([Issue #4509](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4509))


<!-- ------------------------------ -->
#### Runtime-only

* Fixed a WebView2 memory leak issue when the window is closed.  ([Issue #4286](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4286))

* Fixed an issue where `ignoreMemberNotFoundError` wasn't working for .NET objects.  ([Issue #4497](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4497))

* Now returns a proper error code when `CreateSharedBuffer` is called with 0 buffer size.  ([Issue #4554](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4554))

* Fixed an activation issue for the caret browsing dialog.

* Fixed an issue where the WebView2 Visual Hosting `CursorChanged` event wasn't firing for custom cursors.


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
