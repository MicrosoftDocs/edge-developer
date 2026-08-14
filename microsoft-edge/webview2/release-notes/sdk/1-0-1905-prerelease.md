---
title: Prerelease SDK 1.0.1905-prerelease, for Runtime 116 (Jun. 12, 2023)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.1905-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.1905-prerelease, for Runtime 116 (Jun. 12, 2023)

Release Date: Jun. 12, 2023

[NuGet package for WebView2 SDK 1.0.1905-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1905-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 116.0.1905.0 or later.

**Detailed contents:**
* [Promotions to Phase 2 (Stable in Prerelease)](#promotions-to-phase-2-stable-in-prerelease)
   * [NavigationKind: Back/Forward, Reload, or navigation to a new page](#navigationkind-backforward-reload-or-navigation-to-a-new-page)
   * [ServiceWorkers in BrowsingDataKinds enum](#serviceworkers-in-browsingdatakinds-enum)
   * [LaunchingExternalUriScheme event when launch URI scheme registered with the OS](#launchingexternalurischeme-event-when-launch-uri-scheme-registered-with-the-os)
   * [MemoryUsageTargetLevel specifies memory consumption levels](#memoryusagetargetlevel-specifies-memory-consumption-levels)
* [Bug fixes](#bug-fixes)
* [See also](#see-also)


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### `NavigationKind`: Back/Forward, Reload, or navigation to a new page

`NavigationKind` gets the navigation kind of each navigation, such as Back/Forward, Reload, or navigation to a new document.

The previous phase isn't in the release notes.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2NavigationStartingEventArgs` Class:
   * [CoreWebView2NavigationStartingEventArgs.NavigationKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs.navigationkind?view=webview2-dotnet-1.0.1905-prerelease&preserve-view=true)
* [CoreWebView2NavigationKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationkind?view=webview2-dotnet-1.0.1905-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2NavigationStartingEventArgs` Class:
   * [CoreWebView2NavigationStartingEventArgs.NavigationKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationstartingeventargs?view=webview2-winrt-1.0.1905-prerelease&preserve-view=true#navigationkind)
* [CoreWebView2NavigationKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationkind?view=webview2-winrt-1.0.1905-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2NavigationStartingEventArgs3](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs3?view=webview2-1.0.1905-prerelease&preserve-view=true)
   * [ICoreWebView2NavigationStartingEventArgs3::get_NavigationKind property](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs3?view=webview2-1.0.1905-prerelease&preserve-view=true#get_navigationkind)<!--no put-->
* [COREWEBVIEW2_NAVIGATION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1905-prerelease&preserve-view=true#corewebview2_navigation_kind)

---


<!-- ------------------------------ -->
#### `ServiceWorkers` in `BrowsingDataKinds` enum

The `ServiceWorkers` enum value in the `BrowsingDataKinds` enum specifies service workers that are registered for an origin.

The previous phase isn't in the release notes.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2BrowsingDataKinds` Enum:
   * [CoreWebView2BrowsingDataKinds.ServiceWorkers Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds?view=webview2-dotnet-1.0.1905-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2BrowsingDataKinds` Enum:
   * [CoreWebView2BrowsingDataKinds.ServiceWorkers Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browsingdatakinds?view=webview2-winrt-1.0.1905-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* `COREWEBVIEW2_BROWSING_DATA_KINDS` enum:
   * [COREWEBVIEW2_BROWSING_DATA_KINDS_SERVICE_WORKERS enum value](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1905-prerelease&preserve-view=true#corewebview2_browsing_data_kinds)

---


<!-- ------------------------------ -->
#### `LaunchingExternalUriScheme` event when launch URI scheme registered with the OS

Added support for launching external URIs.  The `LaunchingExternalUriScheme` event is raised when there's an attempt to launch a URI scheme that is registered with the OS (an external URI scheme).

Previous phase: [`LaunchingExternalUriScheme` event when launch a URI scheme that's registered with the OS](./1-0-1724-prerelease.md#launchingexternalurischeme-event-when-launch-a-uri-scheme-thats-registered-with-the-os) in _Prerelease SDK 1.0.1724-prerelease, for Runtime 113 (Mar. 20, 2023)_.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.LaunchingExternalUriScheme Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.launchingexternalurischeme?view=webview2-dotnet-1.0.1905-prerelease&preserve-view=true)
* [CoreWebView2LaunchingExternalUriSchemeEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs?view=webview2-dotnet-1.0.1905-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Cancel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.cancel?view=webview2-dotnet-1.0.1905-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.initiatingorigin?view=webview2-dotnet-1.0.1905-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.IsUserInitiated Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.isuserinitiated?view=webview2-dotnet-1.0.1905-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Uri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.uri?view=webview2-dotnet-1.0.1905-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.getdeferral?view=webview2-dotnet-1.0.1905-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.LaunchingExternalUriScheme Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1905-prerelease&preserve-view=true#launchingexternalurischeme)
* [CoreWebView2LaunchingExternalUriSchemeEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1905-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Cancel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1905-prerelease&preserve-view=true#cancel)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1905-prerelease&preserve-view=true#initiatingorigin)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.IsUserInitiated Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1905-prerelease&preserve-view=true#isuserinitiated)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Uri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1905-prerelease&preserve-view=true#uri)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1905-prerelease&preserve-view=true#getdeferral)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_18](/microsoft-edge/webview2/reference/win32/icorewebview2_18?view=webview2-1.0.1905-prerelease&preserve-view=true)
   * [ICoreWebView2_18::add_LaunchingExternalUriScheme event](/microsoft-edge/webview2/reference/win32/icorewebview2_18?view=webview2-1.0.1905-prerelease&preserve-view=true#add_launchingexternalurischeme)
   * [ICoreWebView2_18::remove_LaunchingExternalUriScheme event](/microsoft-edge/webview2/reference/win32/icorewebview2_18?view=webview2-1.0.1905-prerelease&preserve-view=true#remove_launchingexternalurischeme)
* [ICoreWebView2LaunchingExternalUriSchemeEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventhandler?view=webview2-1.0.1905-prerelease&preserve-view=true)
* [ICoreWebView2LaunchingExternalUriSchemeEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1905-prerelease&preserve-view=true)
   * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_Cancel property](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1905-prerelease&preserve-view=true#get_cancel)
   * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_InitiatingOrigin property](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1905-prerelease&preserve-view=true#get_initiatingorigin)
   * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_IsUserInitiated property](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1905-prerelease&preserve-view=true#get_isuserinitiated)
   * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_Uri property](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1905-prerelease&preserve-view=true#get_uri)
   * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1905-prerelease&preserve-view=true#getdeferral)
   * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::put_Cancel property](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1905-prerelease&preserve-view=true#put_cancel)

---


<!-- ------------------------------ -->
#### `MemoryUsageTargetLevel` specifies memory consumption levels

`MemoryUsageTargetLevel` specifies memory consumption levels, such as `low` or `normal`.

The previous phase isn't in the release notes.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.MemoryUsageTargetLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.memoryusagetargetlevel?view=webview2-dotnet-1.0.1905-prerelease&preserve-view=true)
* [CoreWebView2MemoryUsageTargetLevel Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2memoryusagetargetlevel?view=webview2-dotnet-1.0.1905-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.MemoryUsageTargetLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1905-prerelease&preserve-view=true#memoryusagetargetlevel)
* [CoreWebView2MemoryUsageTargetLevel Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2memoryusagetargetlevel?view=webview2-winrt-1.0.1905-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_19](/microsoft-edge/webview2/reference/win32/icorewebview2_19?view=webview2-1.0.1905-prerelease&preserve-view=true)
   * [ICoreWebView2_19::get_MemoryUsageTargetLevel property](/microsoft-edge/webview2/reference/win32/icorewebview2_19?view=webview2-1.0.1905-prerelease&preserve-view=true#get_memoryusagetargetlevel)
   * [ICoreWebView2_19::put_MemoryUsageTargetLevel property](/microsoft-edge/webview2/reference/win32/icorewebview2_19?view=webview2-1.0.1905-prerelease&preserve-view=true#put_memoryusagetargetlevel)
* [COREWEBVIEW2_MEMORY_USAGE_TARGET_LEVEL enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1905-prerelease&preserve-view=true#corewebview2_memory_usage_target_level)

---


<!-- ====================================================================== -->
## Bug fixes

* Using `wv2winrt webhosthidden` entered an infinite loop when enumerating some `webhosthidden` types.

* In code that's generated by the **wv2winrt** tool, when calling an async method, it would crash if it succeeded but returned `null` instead of an `IAsyncAction`.


<!-- ====================================================================== -->
## See also

* [Runtime 116.0.1938.49 (Aug. 28, 2023)](../runtime/116.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
