---
title: Prerelease SDK 1.0.2839-prerelease, for Runtime 130 (Sep. 23, 2024)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.2839-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.2839-prerelease, for Runtime 130 (Sep. 23, 2024)

Release Date: Sep. 23, 2024

[NuGet package for WebView2 SDK 1.0.2839-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2839-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 130.0.2839.0 or later.


<!-- ====================================================================== -->
## Bug fixes

* Fixed an SDK dependency for .NET projects.  ([Issue #4743](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4743))

* Fixed a compatibility issue when calling `GetAvailableBrowserVersionString()` with an older `WebView2Loader.dll`.  ([Issue #4395](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4395))

* Fixed issues when compiling wv2winrt-generated code with the `cpp20` and `/permissive-` options.

* Added the .NET 8 `TargetFramework` for C# WinRT, enabled AOT (ahead-of-time) compatibility, and disabled runtime marshalling.


<!-- ====================================================================== -->
## See also

* [Runtime 130.0.2849.39 (Oct. 21, 2024)](../runtime/130.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
