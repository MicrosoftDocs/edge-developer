---
title: Prerelease SDK 1.0.2783-prerelease, for Runtime 129 (Aug. 26, 2024)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.2783-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 08/26/2024
---
# Prerelease SDK 1.0.2783-prerelease, for Runtime 129 (Aug. 26, 2024)

Release Date: Aug. 26, 2024

[NuGet package for WebView2 SDK 1.0.2783-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2783-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 129.0.2783.0 or later.


<!-- ====================================================================== -->
## Bug fixes

* Re-enabled the default behavior of `SetUserAgent`: by default, `SetUserAgent` is effective for cross-origin iframes.  (Runtime and SDK)

* C# WinRT projection now works on UWP.

* Fixed an issue to ensure that `GeneratedFilesDir` no longer appears in Visual Studio for C# WinRT projection.


<!-- ====================================================================== -->
## See also

* [Runtime 129.0.2792.45 (Sep. 23, 2024)](../runtime/129.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
