---
title: Release Notes for WebView2 Prerelease SDK 1.0.1777-prerelease
description: New features, APIs, and fixes in WebView2 Prerelease SDK 1.0.1777-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 04/10/2023
---
# Release Notes for WebView2 Prerelease SDK 1.0.1777-prerelease

Release Date: April 10, 2023

[NuGet package for WebView2 SDK 1.0.1777-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1777-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 114.0.1777.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:

No Experimental APIs are added in this Prerelease SDK.


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
* The File API allows accessing a DOM `File` object passed via `WebMessage`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2File](/dotnet/api/microsoft.web.webview2.core.corewebview2file?view=webview2-dotnet-1.0.1777-prerelease&preserve-view=true)
   * [CoreWebView2File.path property](/dotnet/api/microsoft.web.webview2.core.corewebview2file.path?view=webview2-dotnet-1.0.1777-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2file-path)

* `CoreWebView2WebMessageReceivedEventArgs`
   * [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects property](/dotnet/api/microsoft.web.webview2.core.corewebview2webmessagereceivedeventargs.additionalobjects?view=webview2-dotnet-1.0.1777-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2webmessagereceivedeventargs-additionalobjects)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2File](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2file?view=webview2-winrt-1.0.1777-prerelease&preserve-view=true)
   * [CoreWebView2File.path property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2file?view=webview2-winrt-1.0.1777-prerelease&preserve-view=true#path)

* `CoreWebView2WebMessageReceivedEventArgs`
   * [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webmessagereceivedeventargs?view=webview2-winrt-1.0.1777-prerelease&preserve-view=true#additionalobjects)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2File](/microsoft-edge/webview2/reference/win32/icorewebview2file?view=webview2-1.0.1777-prerelease&preserve-view=true)
   * [ICoreWebView2File::get_path](/microsoft-edge/webview2/reference/win32/icorewebview2file?view=webview2-1.0.1777-prerelease&preserve-view=true#get_path)

* [ICoreWebView2WebMessageReceivedEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs2?view=webview2-1.0.1777-prerelease&preserve-view=true)
   * [ICoreWebView2WebMessageReceivedEventArgs2::get_AdditionalObjects](/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs2?view=webview2-1.0.1777-prerelease&preserve-view=true#get_AdditionalObjects)

* [ICoreWebView2ObjectCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollectionview?view=webview2-1.0.1777-prerelease&preserve-view=true)
   * [ICoreWebView2ObjectCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollectionview?view=webview2-1.0.1777-prerelease&preserve-view=true#get_Count)
   * [ICoreWebView2ObjectCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollectionview?view=webview2-1.0.1777-prerelease&preserve-view=true#GetValueAtIndex)

---


<!-- ------------------------------ -->
* The Profile Cookie Manager API supports profile management.  The `CookieManager` property enables the host app to get the cookie manager for the profile.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile`
   * [CoreWebView2Profile.CookieManager property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.cookiemanager?view=webview2-dotnet-1.0.1777-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2profile-cookiemanager)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile`
   * [CoreWebView2Profile.CookieManager property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1777-prerelease&preserve-view=true#cookiemanager)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Profile5](/microsoft-edge/webview2/reference/win32/icorewebview2profile5?view=webview2-1.0.1777-prerelease&preserve-view=true)
   * [ICoreWebView2Profile5::get_CookieManager](/microsoft-edge/webview2/reference/win32/icorewebview2profile5?view=webview2-1.0.1777-prerelease&preserve-view=true#get_cookiemanager)

---


<!-- ====================================================================== -->
## Bug fixes

* Fixed a crash when releasing the WebView from a different thread.  (Runtime-only)  ([Issue #3062](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3062))
* Fixed a bug where focus was trapped inside the WebView2 control when wrapped in a `ContainerControl`.  ([Issue #2835](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2835))
* Fixed the issue by disabling the editable `.pdf` temporary cached data recovery function in WebView2.  ([Issue #3274](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3274))
* Disabled the Chrome Web Store info banner that displays the option to allow extensions installation.  ([Issue #3312](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3312))
* Fixed an issue with new download items not getting called out by screen readers.
* Fixed a bug where visual hosted owned windows didn't map mouse pointer input correctly.
* Fixed a bug where `DownloadStarting` was getting raised for a canceled **Save As** dialog.  (Runtime-only)


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
