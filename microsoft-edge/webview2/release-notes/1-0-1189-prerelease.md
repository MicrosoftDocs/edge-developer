---
title: Release Notes for WebView2 Prerelease SDK 1.0.1189-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 03/10/2022
---
# Release Notes for WebView2 Prerelease SDK 1.0.1189-prerelease

Release Date: March 10, 2022

[NuGet package for WebView2 SDK 1.0.1189-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1189-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 100.0.1189.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:

*   Added [ContextMenuRequested API](/microsoft-edge/webview2/reference/win32/icorewebview2_11?view=webview2-1.0.1189-prerelease&preserve-view=true) to enable host app to create or modify their own context menu.


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*    The [CallDevToolsProtocolMethodForSession API](/microsoft-edge/webview2/reference/win32/icorewebview2_11?view=webview2-1.0.1189-prerelease&preserve-view=true#calldevtoolsprotocolmethodforsession) that supports sessionId for CDP method calls.
*   The [StatusBarText API](/microsoft-edge/webview2/reference/win32/icorewebview2_12?view=webview2-1.0.1189-prerelease&preserve-view=true):
    *  `add_StatusBarTextChanged`
    *  `get_StatusBarText`
    *  `remove_StatusBarTextChanged`
*   The [AllowExternalDrop API](/microsoft-edge/webview2/reference/win32/icorewebview2controller4?view=webview2-1.0.1189-prerelease&preserve-view=true) that supports enable/disable external drop.
*    The [HiddenPdfToolbarItems API](/microsoft-edge/webview2/reference/win32/icorewebview2settings7?view=webview2-1.0.1189-prerelease&preserve-view=true) is available to customize the PDF toolbar items.
*  The [ExclusiveUserDataFolderAccess API](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions2?view=webview2-1.0.1189-prerelease&preserve-view=true) allows control of whether or not other processes can create WebView2 using the same user data folder.


<!-- ====================================================================== -->
## Bug fixes

*   Fixed a bug where WebView2 app gets stuck occasionally with UWP.
*   Fixed a bug where focus is not returned to the application after closing the **Find** bar for windowed mode.
*   Fixed bug in which the `DocumentTitleChanged` event was not being raised for backward/forward navigation in single-page apps.
*   Fixed bug in which the `HistoryChanged` event was not being raised for Iframe navigation.


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
