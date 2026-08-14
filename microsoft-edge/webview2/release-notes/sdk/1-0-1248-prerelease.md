---
title: Prerelease SDK 1.0.1248-prerelease, for Runtime 102 (May 9, 2022)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.1248-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.1248-prerelease, for Runtime 102 (May 9, 2022)

Release notes for Microsoft Edge WebView2 Prerelease SDK, release date: May 9, 2022.

[NuGet package for WebView2 SDK 1.0.1248-prelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1248-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 102.0.1248.0 or later.


<!-- ====================================================================== -->
## General features

* Added support for WinRT Object projection into JavaScript by adding WinRT JS Projection tool (**wv2winrt**) in NuGet package. For instructions about using the WinRT JS Projection tool see [Call native-side WinRT code from web-side code](/microsoft-edge/webview2/how-to/winrt-from-js).


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### Server Certificate API

The [Server Certificate API](/microsoft-edge/webview2/reference/win32/icorewebview2_14?view=webview2-1.0.1248-prerelease&preserve-view=true) provides an option to trust the server's TLS certificate at the application level and render the page without prompting the user about TLS or providing the ability to cancel the web request.

Previous phase: [Server Certificate API](./1-0-1222-prerelease.md#server-certificate-api) in _Prerelease SDK 1.0.1222-prerelease, for Runtime 102 (Apr. 12, 2022)_.


<!-- ------------------------------ -->
#### ClearBrowsingData API

Use the [ClearBrowsingData API](/microsoft-edge/webview2/reference/win32/icorewebview2profile2?view=webview2-1.0.1248-prerelease&preserve-view=true) to programmatically clear specific data types for a duration:
* `clearBrowsingDataInTimeRange`
* `clearBrowsingDataAll`

<!-- Previous phase: -->


<!-- ====================================================================== -->
## Bug fixes

* Fixed an unavoidable crash that occurred in the WPF control's `OnWindowPositionChanged` event. ([Issue #1531](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1531))

* Fixed the issue with `CoreWebView2EnvironmentOptions.ExclusiveUserDataFolderAccess` not working properly in .NET SDK. ([Issue #2363](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2363))

* Fixed an issue where WebView2 content can become blurry when moving between monitors with different scaling.

* Fixed a regression to make sure that WebView2 creation fails quickly with `HRESULT_FROM_WIN32(ERROR_INVALID_STATE)` instead of time out.

* Fixed a bug where changes from Chromium broke WebView2 background color.


<!-- ====================================================================== -->
## See also

* [Runtime 102.0.1245.22 (Jun. 14, 2022)](../runtime/102.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
