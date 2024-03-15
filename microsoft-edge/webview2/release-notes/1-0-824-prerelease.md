---
title: Release Notes for WebView2 Prerelease SDK 1.0.824-prerelease
description: New features, APIs, and fixes in WebView2 Prerelease SDK 1.0.824-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 03/08/2021
---
# Release Notes for WebView2 Prerelease SDK 1.0.824-prerelease

Release Date: March 8, 2021

[NuGet package for WebView2 SDK 1.0.824-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.824-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 91.0.824.0 or higher.


<!-- ====================================================================== -->
## Features

*  Extended the `ProcessFailed` event.  It now raises for non-renderer child processes and frame renderers.
*  Added experimental [AreBrowserAcceleratorKeysEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings2?view=webview2-1.0.824&preserve-view=true#get_arebrowseracceleratorkeysenabled) setting.  You can prevent the browser from responding to keyboard shortcuts related to navigation, printing, saving, and other browser-specific functions.
*  Added `iframe` element support for `AddScriptToExecuteOnDocumentCreated`.


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  [UserAgent](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_webresourceresponsereceived).

*  Rasterization Scale APIs:
   *  [RasterizationScale property](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_rasterizationscale)
   *  [RasterizationScaleChanged event](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#add_rasterizationscalechanged)
   *  [BoundsMode property](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_boundsmode)
   *  [ShouldDetectMonitorScaleChanges property](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_shoulddetectmonitorscalechanges)


<!-- ====================================================================== -->
## Bug fixes

*  Expanded supported C++ and .NET project types such as MFC and ATL.  ([Issue #506](https://github.com/MicrosoftEdge/WebViewFeedback/issues/506), [Issue #669](https://github.com/MicrosoftEdge/WebViewFeedback/issues/669), and [Issue #851](https://github.com/MicrosoftEdge/WebViewFeedback/issues/851)).
*  Fixed a bug that Evergreen WebView2 Runtime leaks Inbound firewall entry.
*  Fixed setting Response during `WebResourceRequested` event.  ([Issue #568](https://github.com/MicrosoftEdge/WebViewFeedback/issues/568)).
*  Fixed a bug that navigating to `edge://` causes browser process to exit.  ([Issue #604](https://github.com/MicrosoftEdge/WebViewFeedback/issues/604)).
*  Fixed a bug that limited WebView2 bounds to size of screen in Visual Hosting mode.


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
