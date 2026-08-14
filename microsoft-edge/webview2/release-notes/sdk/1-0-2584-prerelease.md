---
title: Prerelease SDK 1.0.2584-prerelease, for Runtime 126 (May 28, 2024)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.2584-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 05/28/2024
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
## Bug fixes

* Fixed a crash when .NET host object async methods return a null result.  (Runtime and SDK)  ([Issue #4509](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4509))


<!-- ====================================================================== -->
## See also

* [Runtime 126.0.2592.51 (Jun. 19, 2024)](../runtime/126.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
