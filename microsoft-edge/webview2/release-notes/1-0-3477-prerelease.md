---
title: Prerelease SDK 1.0.3477-prerelease, for Runtime 140 (Aug. 11, 2025)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.3477-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.3477-prerelease, for Runtime 140 (Aug. 11, 2025)

Release Date: Aug. 11, 2025

[NuGet package for WebView2 SDK 1.0.3477-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3477-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 140.0.3477.0 or later.


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

* Fixed `put_UserAgent` not working for service workers.
* Fixed a crash in Devtools on Windows Server and Windows 10.
* Removed browser process tracking after calling `remove_BrowserProcessExited`.
* Fixed a memory leak issue in `hostObject` async function calls.
* Fixed touch not working in visual hosting after a long tap.
