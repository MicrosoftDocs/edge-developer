---
title: Release Notes for WebView2 Prerelease SDK 1.0.1248-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 05/09/2022
---
# Release Notes for WebView2 Prerelease SDK 1.0.1248-prerelease

Release Date: May 9, 2022

[NuGet package for WebView2 SDK 1.0.1248-prelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1248-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 102.0.1248.0 or higher.


<!-- ====================================================================== -->
## General features

* Added support for WinRT Object projection into JavaScript by adding WinRT JS Projection tool (**wv2winrt**) in NuGet package. For instructions about using the WinRT JS Projection tool see [Call native-side WinRT code from web-side code](/microsoft-edge/webview2/how-to/winrt-from-js).


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

* The [Server Certificate API](/microsoft-edge/webview2/reference/win32/icorewebview2_14?view=webview2-1.0.1248-prerelease&preserve-view=true) which provides an option to trust the server's TLS certificate at the application level and render the page without prompting the user about TLS or providing the ability to cancel the web request.

* The [ClearBrowsingData API](/microsoft-edge/webview2/reference/win32/icorewebview2profile2?view=webview2-1.0.1248-prerelease&preserve-view=true) which allows developers to programmatically clear specific data types for a duration:
   * `clearBrowsingDataInTimeRange`
   * `clearBrowsingDataAll`


<!-- ====================================================================== -->
## Bug fixes

* Fixed an unavoidable crash that occurred in the WPF control's `OnWindowPositionChanged` event. ([Issue #1531](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1531))
* Fixed the issue with `CoreWebView2EnvironmentOptions.ExclusiveUserDataFolderAccess` not working properly in .NET SDK. ([Issue #2363](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2363))
* Fixed a runtime regression that caused some Office Add-ins which use host objects to crash during operations that previously worked. ([Issue #2337](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2337))
* Fixed an issue where WebView2 content can become blurry when moving between monitors with different scaling.
* Fixed a regression to make sure that WebView2 creation fails quickly with `HRESULT_FROM_WIN32(ERROR_INVALID_STATE)` instead of time out.
* Fixed a bug where changes from Chromium broke WebView2 background color.


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
