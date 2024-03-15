---
title: Release Notes for WebView2 Prerelease SDK 1.0.1133-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 01/13/20222
---
# Release Notes for WebView2 Prerelease SDK 1.0.1133-prerelease

Release Date: January 13, 2022

[NuGet package for WebView2 SDK 1.0.1133-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1133-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 99.0.1133.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:

*  Added support for [theming](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile2?view=webview2-1.0.1133-prerelease&preserve-view=true) (overall color scheme - light, dark, system) of WebView2.
*  Added a way to set [default download path](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile3?view=webview2-1.0.1133-prerelease&preserve-view=true).
*  Added support for [clearing browser data](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4?view=webview2-1.0.1133-prerelease&preserve-view=true).
*  Added [permission requested](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe3?view=webview2-1.0.1133-prerelease&preserve-view=true) support for iframes.


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  New [APIs for iframes](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe2?view=webview2-1.0.1133-prerelease&preserve-view=true):
   *  `PostWebMessageAsJson`
   *  `PostWebMessageAsString`
   *  `add_WebMessageReceived`
   *  `remove_WebMessageReceived`
*  The ProcessInfo APIs provides more information about WebView2 [processes](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessinfo?view=webview2-1.0.1133-prerelease&preserve-view=true) and [process collections](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessinfocollection?view=webview2-1.0.1133-prerelease&preserve-view=true).
*  The [HTTP Authentication API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental10?view=webview2-1.0.1133-prerelease&preserve-view=true).


<!-- ====================================================================== -->
## Bug fixes

*  Fixed a bug that prevented `Set-Cookies` header from showing up in the `WebResourceResponseReceived` event.
*  Resolved a bug where pop-ups and owned windows would jump to a different position before closing instead of closing
along with the app window. This bug was only active for a very short window of time.
*  Fixed focus issue after closing file picker dialog.
*  Fixed bug where Find on Page UI visibility did not change with WebView2 visibility.
*  Fixed bug where `GetAvailableBrowserVersionString()` fails to locate/load `WebView2Loader.dll`. ([Issue #1236](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1236))
*  Fixed size and position of the new window created with `window.open` when `NewWindowRequested` event was not
handled. ([Issue #1343](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1343))
*  Fixed bug where mini menu was still displaying on selected text when context menus were disabled. This change is Runtime-specific. ([Issue #1345](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1345))
*  Fixed bug where focus returns to wrong location after switching apps in WinForms.


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
