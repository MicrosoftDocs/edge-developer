---
title: Prerelease SDK 1.0.2950-prerelease, for Runtime 132 (Nov. 18, 2024)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.2950-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.2950-prerelease, for Runtime 132 (Nov. 18, 2024)

Release Date: Nov. 18, 2024

[NuGet package for WebView2 SDK 1.0.2950-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2950-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 132.0.2950.0 or later.


<!-- ====================================================================== -->
## Bug fixes


<!-- ------------------------------ -->
#### Runtime-only

* Allowed the **Download** dialog to receive initial focus on launch.

* Fixed a crash while cancelling navigation to certain sites in `FrameNavigationStarting`.  ([Issue #4843](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4843))

* Postponed customizing the context menu when the touch selection menu is being displayed.  ([Issue #4737](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4737))


<!-- ------------------------------ -->
#### SDK-only

* Added Arm64ec support.

* Fixed an issue where WebView2 running in "Window to Visual" mode couldn't receive accelerator input.


<!-- ====================================================================== -->
## See also

* [Runtime 132 (Jan. 20, 2025)](../runtime/132.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
