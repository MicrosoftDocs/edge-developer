---
title: Prerelease SDK 1.0.1083-prerelease, for Runtime 97 (Nov. 29, 2021)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.1083-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 11/29/2021
---
# Prerelease SDK 1.0.1083-prerelease, for Runtime 97 (Nov. 29, 2021)

Release notes for Microsoft Edge WebView2 Prerelease SDK, release date: Nov. 29, 2021.

[NuGet package for WebView2 SDK 1.0.1083-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1083-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 97.0.1083.0 or later; see [Runtime 97.0.1072.54 (Jan. 13, 2022)](../runtime/97.md).


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.

* Added the following [APIs for iframes](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe2?view=webview2-1.0.1083-prerelease&preserve-view=true) in WebView2:
   * `PostWebMessageAsJson`
   * `PostWebMessageAsString`
   * `add_WebMessageReceived`
   * `remove_WebMessageReceived`

* Added ProcessInfo APIs to provide more information about WebView2 [processes](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessinfo?view=webview2-1.0.1083-prerelease&preserve-view=true) and [process collections](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessinfocollection?view=webview2-1.0.1083-prerelease&preserve-view=true).


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.

* The [Media API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental9?view=webview2-1.0.1083-prerelease&preserve-view=true#summary) that enables developers to mute/unmute media within WebView2.
* The [Download Positioning and Anchoring API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental11?view=webview2-1.0.1083-prerelease&preserve-view=true).  This API enables:
   * Changing the position of the download dialog, relative to the WebView2 bounds.  You can anchor the download dialog to the **Download** button, instead of the default position, which is the top-right corner.
   * Programmatically opening and closing the default download dialog.
   * Making changes in response to the dialog opening and closing.


<!-- ====================================================================== -->
## Bug fixes

* Fixed a focus issue after closing the file picker dialog.

* Fixed a bug where WebView2 doesn't receive spatial input on initial launch.

* Fixed an issue that prevented single sign-on in WebView2.

* Resolved a bug where the download dialog was not moving with the window on WPF and WinForms.

* Updated compatible command line check to prevent needing a version check for optional switches.

* Fixed an error that was causing "Microsoft Edge" branding to appear in the accessibility tree.


<!-- ====================================================================== -->
## See also

* [Runtime 97.0.1072.54 (Jan. 13, 2022)](../runtime/97.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
