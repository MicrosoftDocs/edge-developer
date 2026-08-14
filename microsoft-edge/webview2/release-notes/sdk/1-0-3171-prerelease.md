---
title: Prerelease SDK 1.0.3171-prerelease, for Runtime 135 (Mar. 10, 2025)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.3171-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 03/10/2025
---
# Prerelease SDK 1.0.3171-prerelease, for Runtime 135 (Mar. 10, 2025)

Release notes for Microsoft Edge WebView2 Prerelease SDK, release date: Mar. 10, 2025.

[NuGet package for WebView2 SDK 1.0.3171-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3171-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 135.0.3171.0 or later; see [Runtime 135.0.3179.45 (Apr. 7, 2025)](../runtime/135.md).


<!-- ====================================================================== -->
## Bug fixes

* Fixed host object async method exception handling.  (Runtime and SDK)  ([Issue #3402](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3402))

* Fixed documentation for `CoreWebVIew2.Navigate`.  (Runtime and SDK)  ([Issue #5091](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5091))

* Fixed a crash that could occur when the Garbage Collector calls `Finalize` on a thread other than the main thread.


<!-- ====================================================================== -->
## See also

* [Runtime 135.0.3179.45 (Apr. 7, 2025)](../runtime/135.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
