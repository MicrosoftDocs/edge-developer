---
title: Prerelease SDK 1.0.1189-prerelease, for Runtime 100 (Mar. 10, 2022)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.1189-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.1189-prerelease, for Runtime 100 (Mar. 10, 2022)

Release Date: Mar. 10, 2022

[NuGet package for WebView2 SDK 1.0.1189-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1189-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 100.0.1189.0 or later.

**Detailed contents:**
* [Experimental APIs (Phase 1: Experimental in Prerelease)](#experimental-apis-phase-1-experimental-in-prerelease)
   * [Context menu (right-click menu)](#context-menu-right-click-menu)
* [Promotions to Phase 2 (Stable in Prerelease)](#promotions-to-phase-2-stable-in-prerelease)
   * [CallDevToolsProtocolMethodForSession API](#calldevtoolsprotocolmethodforsession-api)
   * [StatusBarText API](#statusbartext-api)
   * [AllowExternalDrop API](#allowexternaldrop-api)
   * [HiddenPdfToolbarItems API](#hiddenpdftoolbaritems-api)
   * [ExclusiveUserDataFolderAccess API](#exclusiveuserdatafolderaccess-api)
* [Bug fixes](#bug-fixes)
* [See also](#see-also)


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Context menu (right-click menu)

Added the `ContextMenuRequested` API, to enable the host app to create or modify its own context menu.

Win32:
* [ContextMenuRequested API](/microsoft-edge/webview2/reference/win32/icorewebview2_11?view=webview2-1.0.1189-prerelease&preserve-view=true)


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### CallDevToolsProtocolMethodForSession API

The [CallDevToolsProtocolMethodForSession API](/microsoft-edge/webview2/reference/win32/icorewebview2_11?view=webview2-1.0.1189-prerelease&preserve-view=true#calldevtoolsprotocolmethodforsession) that supports sessionId for CDP method calls.

The previous phase isn't in the release notes.


<!-- ------------------------------ -->
#### StatusBarText API

The [StatusBarText API](/microsoft-edge/webview2/reference/win32/icorewebview2_12?view=webview2-1.0.1189-prerelease&preserve-view=true):
* `add_StatusBarTextChanged`
* `get_StatusBarText`
* `remove_StatusBarTextChanged`

<!-- Previous phase: -->


<!-- ------------------------------ -->
#### AllowExternalDrop API

The [AllowExternalDrop API](/microsoft-edge/webview2/reference/win32/icorewebview2controller4?view=webview2-1.0.1189-prerelease&preserve-view=true) that supports enable/disable external drop.

<!-- Previous phase: -->


<!-- ------------------------------ -->
#### HiddenPdfToolbarItems API

The [HiddenPdfToolbarItems API](/microsoft-edge/webview2/reference/win32/icorewebview2settings7?view=webview2-1.0.1189-prerelease&preserve-view=true) is available to customize the PDF toolbar items.

<!-- Previous phase: -->


<!-- ------------------------------ -->
#### ExclusiveUserDataFolderAccess API

The [ExclusiveUserDataFolderAccess API](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions2?view=webview2-1.0.1189-prerelease&preserve-view=true) allows control of whether or not other processes can create WebView2 using the same user data folder.

<!-- Previous phase: -->


<!-- ====================================================================== -->
## Bug fixes

* Fixed a bug where WebView2 app gets stuck occasionally with UWP.

* Fixed a bug where focus is not returned to the application after closing the **Find** bar for windowed mode.

* Fixed bug in which the `DocumentTitleChanged` event was not being raised for backward/forward navigation in single-page apps.

* Fixed bug in which the `HistoryChanged` event was not being raised for Iframe navigation.


<!-- ====================================================================== -->
## See also

* [Release notes for WebView2](./index.md)
