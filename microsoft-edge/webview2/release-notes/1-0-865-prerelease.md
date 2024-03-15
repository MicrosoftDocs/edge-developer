---
title: Release Notes for WebView2 Prerelease SDK 1.0.865-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 04/26/2021
---
# Release Notes for WebView2 Prerelease SDK 1.0.865-prerelease

Release Date: April 26, 2021

[NuGet package for WebView2 SDK 1.0.865-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.865-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 91.0.865.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:

*  Added [IsPinchZoomEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings4?view=webview2-1.0.865-prerelease&preserve-view=true#ispinchzoomenabled) setting. It allows you to turn on or off page scale zoom control in a setting.
*  Added Custom [add_DownloadStarting](/microsoft-edge/webview2/reference/win32/icorewebview2experimental2?view=webview2-1.0.865-prerelease&preserve-view=true#add_downloadstarting) API.  It allows you to block downloads, save to a different path, and access the required metadata to build custom download UI.
*  Added `iframe` element support from [AddHostObjectToScriptWithOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe?view=webview2-1.0.865-prerelease&preserve-view=true#addhostobjecttoscriptwithorigins).
*  Added sample code for [WPF sample app](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2WpfBrowser) to use the API to turn off browser function keys.
*  Added the [UpdateRuntime](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment3?view=webview2-1.0.865-prerelease&preserve-view=true#updateruntime) API, to easily update the WebView2 Runtime.


<!-- ====================================================================== -->
## Bug fixes

*  Fixed handler for a `Chromium DevTools Protocol` message with `POST` binary data in WebView2.
*  Turned off the `OpenSaveAsAwareness` download UI, because it included links to `edge://settings`.  ([Issue #1120](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1120)).
*  Removed branding from screen share dialog.  ([Issue #940](https://github.com/MicrosoftEdge/WebViewFeedback/issues/940)).
*  Fixed bug where the [SetWindowDisplayAffinity](/windows/win32/api/winuser/nf-winuser-setwindowdisplayaffinity) function broke WebView2 when it stopped screen capture in an WebView2 app.  ([Issue #841](https://github.com/MicrosoftEdge/WebViewFeedback/issues/841)).
*  Fixed bug for composition hosting where mouse input stopped working if any pen input was sent to WebView2.
*  Fixed bug that broke mouse input after any pen input.  This change is Runtime-specific.


<!-- ====================================================================== -->
## .NET


<!-- ------------------------------ -->
#### Experimental APIs

*  Added WebView2 designer tool to WPF Toolbox.  ([Issue #210](https://github.com/MicrosoftEdge/WebViewFeedback/issues/210)).
*  Added WebView2 UI element in .NET Designer Mode.


<!-- ------------------------------ -->
#### Bug fixes

*  Improved COM Exception descriptions by wrapping each in a more detailed .NET exception.  ([Issue #338](https://github.com/MicrosoftEdge/WebViewFeedback/issues/338)).  This change is Runtime-specific.
*  Fixed bug caused when you select **Tab** to shift focus caused WebView2 control to crash in Microsoft Visual Studio Tools for Office.  ([Issue #589](https://github.com/MicrosoftEdge/WebViewFeedback/issues/589) and [Issue #933](https://github.com/MicrosoftEdge/WebViewFeedback/issues/933)).  This change is Runtime-specific.
*  Improved .NET framework loader down level to be more robust.  ([Issue #946](https://github.com/MicrosoftEdge/WebViewFeedback/issues/946))
*  Fixed bug that caused crash when you try to refresh before first navigation completed.  ([Issue #1011](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1011))
*  Fixed initialization so navigation occurs during `CoreWebView2InitializationCompleted`.  ([Issue #1050](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1050))
*  Improved .NET browser process crash error handling.  You can now recreate controls after you handle a `ProcessFailed` event, without a crash.  ([Issue #996](https://github.com/MicrosoftEdge/WebViewFeedback/issues/996))


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
