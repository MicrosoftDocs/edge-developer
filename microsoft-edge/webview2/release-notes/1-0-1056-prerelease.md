---
title: Prerelease SDK 1.0.1056-prerelease, for Runtime 97 (Oct. 29, 2021)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.1056-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.1056-prerelease, for Runtime 97 (Oct. 29, 2021)

Release Date: Oct. 29, 2021

[NuGet package for WebView2 SDK 1.0.1056-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1056-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 97.0.1056.0 or later.


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
* The [Download Positioning and Anchoring API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental11?view=webview2-1.0.1056-prerelease&preserve-view=true).  This API enables:
   * Changing the position of the download dialog, relative to the WebView2 bounds.  You can anchor the download dialog to the **Download** button, instead of the default position, which is the top-right corner.
   * Programmatically opening and closing the default download dialog.
   * Making changes in response to the dialog opening and closing.


<!-- ---------- -->
* The [HTTP Authentication API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental10?view=webview2-1.0.1056-prerelease&preserve-view=true).


<!-- ====================================================================== -->
## Bug fixes

* General reliability improvements.

* The real process exit code is now provided as `ExitCode` in `ICoreWebView2ProcessFailedEventArgs2` for `COREWEBVIEW2_PROCESS_FAILED_KIND_BROWSER_PROCESS_EXITED` process failure.

* The `--js-flags` switch is now honored in the `AdditionalBrowserArguments` that are provided in `CoreWebView2EnvironmentOptions`.

* Fixed access to the `name` property for host objects in JavaScript. ([Issue #641](https://github.com/MicrosoftEdge/WebView2Feedback/issues/641))

* Fixed an `InvalidCastException` in the WPF control when it's implicitly initialized prior to the event loop starting. ([Issue #1577](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1577))

<!-- end of Prerelease SDK 1.0.1056-prerelease, for Runtime 97 (Oct. 29, 2021) -->
