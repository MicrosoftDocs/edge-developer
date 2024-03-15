---
title: Release Notes for WebView2 Prerelease SDK 1.0.902-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/01/2021
---
# Release Notes for WebView2 Prerelease SDK 1.0.902-prerelease

Release Date: June 1, 2021

[NuGet package for WebView2 SDK 1.0.902-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.902-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 92.0.902.0 or higher.


<!-- ====================================================================== -->
## General features

*  Improved WebView2 startup performance and disk footprint.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:

*  Added [IsSwipeNavigationEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings5?view=webview2-1.0.902-prerelease&preserve-view=true#get_isswipenavigationenabled) property to enable or disable the ability of the end user to use swiping gesture on touch input-enabled devices to navigate in WebView2.
*  Added [BrowserProcessExited](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment4?view=webview2-1.0.902-prerelease&preserve-view=true#add_browserprocessexited) event.
*  Added [add_ClientCertificateRequested API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental3?view=webview2-1.0.902-prerelease&preserve-view=true#add_clientcertificaterequested). It allows showing a client certificate dialog prompt if desired and enables access to required metadata to replace default client certificate dialog prompt.


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  [Download API](/microsoft-edge/webview2/reference/win32/icorewebview2_4?view=webview2-1.0.902-prerelease&preserve-view=true#add_downloadstarting).
*  [PinchZoom API](/microsoft-edge/webview2/reference/win32/icorewebview2settings5?view=webview2-1.0.902-prerelease&preserve-view=true#get_ispinchzoomenabled).
*  [AddFrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2_4?view=webview2-1.0.902-prerelease&preserve-view=true#add_framecreated).
*  [AddHostObjectToScriptWithOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2frame?view=webview2-1.0.902-prerelease&preserve-view=true#addhostobjecttoscriptwithorigins) API promoted to Stable with iframe element support.
*  [Autofill API](/microsoft-edge/webview2/reference/win32/icorewebview2settings4?view=webview2-1.0.902-prerelease&preserve-view=true#get_isgeneralautofillenabled).
   > [!NOTE]
   > There is no current API to delete the locally stored general autofill and password autosave information.  Please provide a control to delete the data, which will involve deleting the entire user data folder.


<!-- ====================================================================== -->
## Bug fixes

*  Fix a bug where mouse left click doesn't dismiss context menu. This change is Runtime-specific.
*  Fixed a bug where WebView2 creation fails when exe files for apps sharing the same user data folder have inconsistent version info.
*  Fixed a bug where special browser keys such as `Refresh`, `Home`, and `Back` can't be disabled by `AreBrowserAcceleratorKeysEnabled`. This change is Runtime-specific.
*  Fixed a bug in WebView2 .NET controls, where WebView2 windows are blank when created in the background.  ([Issue #1077](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1077))
*  Dismissing a file picker dialog by pressing **Enter** or **Esc** no longer crashes WPF applications using WebView2 control.  ([Issue #1099](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1099))
*  Fixed a bug that [AllowSingleSignOnUsingOSPrimaryAccount](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#get_allowsinglesignonusingosprimaryaccount) doesn't work properly with WebView2 when a `WebResourceRequested` event handler is attached. This change is Runtime-specific.  ([Issue #1183](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1183))
*  Downloading a file no longer breaks WebView2 `DefaultBackgroundColor` transparency. This change is Runtime-specific.  ([Issue #1108](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1108))
*  Removed screen sharing media picker message that contains Microsoft branding.  ([Issue #940](https://github.com/MicrosoftEdge/WebViewFeedback/issues/940))
*  Fixed a bug in WebView2 WinForm control where hiding the parent form doesn't hide the WebView2 control.  ([Issue #828](https://github.com/MicrosoftEdge/WebViewFeedback/issues/828) and [Issue #1079](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1079))
*  Added static WS_CLIPCHILDREN style to WebView2's WPF windows. ([Issue #1013](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1013)).
*  Fixed a bug where right-clicking a link crashes the WebView2 host app. This change is Runtime-specific.
*  Fixed a reliability bug that could crash the host app process when moving to a newer Edge WebView2 Runtime version.
*  **DEPRECATION**: Officially deprecated the `DefaultBackgroundColor` API for Windows 7.


<!-- ====================================================================== -->
## .NET


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed a bug in WebView2 WinForm control where WebView2 window visibility isn't updated properly after parent window is disposed.  ([Issue #1282](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1282) and [Issue #828](https://github.com/MicrosoftEdge/WebViewFeedback/issues/828))
*  Fixed a bug in WebView2 WPF control that Source property binding in WPF OneWay binding mode isn't working properly.  ([Issue #619](https://github.com/MicrosoftEdge/WebViewFeedback/issues/619) and [Issue #608](https://github.com/MicrosoftEdge/WebViewFeedback/issues/608))


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
