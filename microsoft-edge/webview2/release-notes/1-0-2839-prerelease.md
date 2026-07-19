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
## Experimental APIs (Phase 1: Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ====================================================================== -->
## Bug fixes


<!-- ------------------------------ -->
#### Runtime-only

* Fixed an issue where focusing on a WebView2 control in WinAppSDK with the Windows "Scroll inactive windows" setting disabled caused scrolling to fail.
* Blocked `edge://wallet` in WebView2.  ([Issue #4710](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4710))
* Cleared the environment variable for default background color in .NET WebView2 controls after the controller has finished creation.
* Enabled accessibility support for Webview2 in visual hosting mode.
* Fixed a bug with removing a "web resource requested" filter for multiple sources when one of them is Document.
* Fixed a regression where `DataList` was not visible in WinUI or in other visually hosted WebView2 instances.


<!-- ------------------------------ -->
#### SDK-only

* Fixed an SDK dependency for .NET projects.  ([Issue #4743](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4743))
* Fixed a compatibility issue when calling `GetAvailableBrowserVersionString()` with an older `WebView2Loader.dll`.  ([Issue #4395](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4395))
* Fixed issues when compiling wv2winrt-generated code with the `cpp20` and `/permissive-` options.
* Added the .NET 8 `TargetFramework` for C# WinRT, enabled AOT (ahead-of-time) compatibility, and disabled runtime marshalling.

<!-- end of Prerelease SDK 1.0.2839-prerelease, for Runtime 130 (Sep. 23, 2024) -->
