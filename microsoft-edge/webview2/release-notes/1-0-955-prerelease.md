---
title: Release Notes for WebView2 Prerelease SDK 1.0.955-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 07/26/2021
---
# Release Notes for WebView2 Prerelease SDK 1.0.955-prerelease

Release Date: July 26, 2021

[NuGet package for WebView2 SDK 1.0.955-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.955-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 93.0.967.0 or higher.


<!-- ====================================================================== -->
## General features

*  WebView2 performance improvements.
*  Added partial Event Tracing for Windows (ETW) support.
*  Removed Microsoft branding from `edge://history`.
*  New default Download UI.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:

*  Added [OpenTaskManagerWindow](/microsoft-edge/webview2/reference/win32/icorewebview2experimental4?view=webview2-1.0.955-prerelease&preserve-view=true#opentaskmanagerwindow) to launch a WebView2 browser task manager.
*  Added [NewWindowRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnewwindowrequestedeventargs?view=webview2-1.0.955-prerelease&preserve-view=true#get_name).
*  Added support for virtual host name mapping to work with Service Workers.
*  Added [HiddenPdfToolbarItems](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings6?view=webview2-1.0.955-prerelease&preserve-view=true#get_hiddenpdftoolbaritems) to customize the PDF toolbar items.


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  [add_ClientCertificateRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_5?view=webview2-1.0.955-prerelease&preserve-view=true#add_clientcertificaterequested)


<!-- ====================================================================== -->
## Bug fixes

*  Fixed bug that broke the `edge://downloads` and `edge://history` pages. This change is Runtime-specific.
*  Fixed bugs to improve reliability in the WebView2Loader.dll.
*  Fixed bug in which `NewWindowRequested` event handler launched two windows when handling links that use `target=_blank`.
*  Fixed a bug in WebView2 visual hosting that flickered before startup.
*  Fixed bug when `add_WebResourceRequested` didn't work on WebView2 controls created using `add_NewWindowRequested`. ([Issue #616](https://github.com/MicrosoftEdge/WebViewFeedback/issues/616))
*  Allow the host app to set foreground on a different application in response to events including `NavigationStarting`, `AddHostObjectToScript` methods, `WebMessageReceived`, and `NewWindowRequested`. ([Issue #1092](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1092))
*  Fix bug to trigger the `PermissionRequested` event for the microphone. This change is Runtime-specific.([Issue #1462](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1462))
*  Fixed bug when `ExecuteScriptAsync` blocked after several successful runs. This change is Runtime-specific. ([Issue #1348](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1348))
*  Fixed bug preventing non-ASCII file names from being used in `ResultFilePath` in `DownloadStartingEventArgs`. ([Issue #1428](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1428))
*  Fixed bug where the title bar on the default pop-up wasn't displayed completely. This change is Runtime-specific. ([Issue #1016](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1016))


<!-- ====================================================================== -->
## .NET


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed an issue in WebView2 .NET API reference documentation that caused only the first exception to be displayed.
*  .NET core libraries are now built in release mode. To debug, ensure you clear the **Just my code** checkbox.
*  Fixed a bug that crashed WebView2 on forms with child forms. The child form, with the find in page bar open, caused WebView2 to crash when the child form was closed. ([Issue #1097](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1097))


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
