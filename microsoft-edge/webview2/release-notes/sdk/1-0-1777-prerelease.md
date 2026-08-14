---
title: Prerelease SDK 1.0.1777-prerelease, for Runtime 114 (Apr. 10, 2023)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.1777-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.1777-prerelease, for Runtime 114 (Apr. 10, 2023)

Release Date: Apr. 10, 2023

[NuGet package for WebView2 SDK 1.0.1777-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1777-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 114.0.1777.0 or later.

**Detailed contents:**
* [Promotions to Phase 2 (Stable in Prerelease)](#promotions-to-phase-2-stable-in-prerelease)
   * [File API allows accessing a DOM File object passed via WebMessage](#file-api-allows-accessing-a-dom-file-object-passed-via-webmessage)
   * [Profile Cookie Manager API CookieManager property](#profile-cookie-manager-api-cookiemanager-property)
* [Bug fixes](#bug-fixes)
* [See also](#see-also)


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### File API allows accessing a DOM `File` object passed via `WebMessage`

The File API allows accessing a DOM `File` object passed via `WebMessage`.

Previous phase: [Added `AdditionalObjects` for WebMessage received](./1-0-1724-prerelease.md#added-additionalobjects-for-webmessage-received) in _Prerelease SDK 1.0.1724-prerelease, for Runtime 113 (Mar. 20, 2023)_.

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
#### Profile Cookie Manager API `CookieManager` property

The Profile Cookie Manager API supports profile management.  The `CookieManager` property enables the host app to get the cookie manager for the profile.

Previous phase: [Profile management: custom data partition, cookie manager, and profile deletion](./1-0-1724-prerelease.md#profile-management-custom-data-partition-cookie-manager-and-profile-deletion) in _Prerelease SDK 1.0.1724-prerelease, for Runtime 113 (Mar. 20, 2023)_.

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

<!-- items not marked runtime-only; assume runtime & sdk: -->

* Fixed a bug where focus was trapped inside the WebView2 control when wrapped in a `ContainerControl`.  ([Issue #2835](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2835))

* Fixed the issue by disabling the editable `.pdf` temporary cached data recovery function in WebView2.  ([Issue #3274](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3274))

* Disabled the Chrome Web Store info banner that displays the option to allow extensions installation.  ([Issue #3312](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3312))

* Fixed an issue with new download items not getting called out by screen readers.

* Fixed a bug where visual hosted owned windows didn't map mouse pointer input correctly.

<!-- end items -->


<!-- ====================================================================== -->
## See also

* [Runtime 114.0.1823.32 (Jun. 5, 2023)](../runtime/114.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
