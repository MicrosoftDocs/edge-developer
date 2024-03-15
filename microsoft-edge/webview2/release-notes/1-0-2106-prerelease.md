---
title: Release Notes for WebView2 Prerelease SDK 1.0.2106-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 09/20/2023
---
# Release Notes for WebView2 Prerelease SDK 1.0.2106-prerelease

Release Date: September 20, 2023

[NuGet package for WebView2 SDK 1.0.2106-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2106-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 119.0.2106.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:


<!-- ------------------------------ -->
* The Frame Process Info API, including `GetProcessExtendedInfos`, provides a snapshot collection of all frames that are actively running in the associated renderer process. This API enables the host application to detect which part of WebView2 is consuming resources such as memory or CPU usage:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Environment` Class:
    * [CoreWebView2Environment.GetProcessExtendedInfosAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.getprocessextendedinfosasync?view=webview2-dotnet-1.0.2106-prerelease&preserve-view=true)

* `CoreWebView2FrameKind` Enum:
    * [CoreWebView2FrameKind.Embed Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2framekind?view=webview2-dotnet-1.0.2106-prerelease&preserve-view=true)
    * [CoreWebView2FrameKind.Object Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2framekind?view=webview2-dotnet-1.0.2106-prerelease&preserve-view=true)
    * [CoreWebView2FrameKind.Unknown Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2framekind?view=webview2-dotnet-1.0.2106-prerelease&preserve-view=true)

* [CoreWebView2ProcessExtendedInfo Class](/dotnet/api/microsoft.web.webview2.core.corewebview2processextendedinfo?view=webview2-dotnet-1.0.2106-prerelease&preserve-view=true)
    * [CoreWebView2ProcessExtendedInfo.AssociatedFrameInfos Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processextendedinfo.associatedframeinfos?view=webview2-dotnet-1.0.2106-prerelease&preserve-view=true)
    * [CoreWebView2ProcessExtendedInfo.ProcessInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processextendedinfo.processinfo?view=webview2-dotnet-1.0.2106-prerelease&preserve-view=true)


##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Environment` Class:
    * [CoreWebView2Environment.GetProcessExtendedInfosAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2106-prerelease&preserve-view=true#getprocessextendedinfosasync)

* `CoreWebView2FrameKind` Enum:
    * [CoreWebView2FrameKind.Unknown Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2framekind?view=webview2-winrt-1.0.2106-prerelease&preserve-view=true)
    * [CoreWebView2FrameKind.Embed Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2framekind?view=webview2-winrt-1.0.2106-prerelease&preserve-view=true)
    * [CoreWebView2FrameKind.Object Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2framekind?view=webview2-winrt-1.0.2106-prerelease&preserve-view=true)

* [CoreWebView2ProcessExtendedInfo Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processextendedinfo?view=webview2-winrt-1.0.2106-prerelease&preserve-view=true)
    * [CoreWebView2ProcessExtendedInfo.AssociatedFrameInfos Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processextendedinfo?view=webview2-winrt-1.0.2106-prerelease&preserve-view=true#associatedframeinfos)
    * [CoreWebView2ProcessExtendedInfo.ProcessInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processextendedinfo?view=webview2-winrt-1.0.2106-prerelease&preserve-view=true#processinfo)


##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalEnvironment13](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment13?view=webview2-1.0.2106-prerelease&preserve-view=true)
    * [ICoreWebView2ExperimentalEnvironment13::GetProcessExtendedInfos](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment13?view=webview2-1.0.2106-prerelease&preserve-view=true#getprocessextendedinfos)

* [ICoreWebView2ExperimentalGetProcessExtendedInfosCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalgetprocessextendedinfoscompletedhandler?view=webview2-1.0.2106-prerelease&preserve-view=true)

* [ICoreWebView2ExperimentalProcessExtendedInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessextendedinfo?view=webview2-1.0.2106-prerelease&preserve-view=true)
    * [ICoreWebView2ExperimentalProcessExtendedInfo::get_AssociatedFrameInfos](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessextendedinfo?view=webview2-1.0.2106-prerelease&preserve-view=true#get_associatedframeinfos)<!--no put-->
    * [ICoreWebView2ExperimentalProcessExtendedInfo::get_ProcessInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessextendedinfo?view=webview2-1.0.2106-prerelease&preserve-view=true#get_processinfo)<!--no put-->

* [ICoreWebView2ExperimentalProcessExtendedInfoCollection](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessextendedinfocollection?view=webview2-1.0.2106-prerelease&preserve-view=true)
    * [ICoreWebView2ExperimentalProcessExtendedInfoCollection::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessextendedinfocollection?view=webview2-1.0.2106-prerelease&preserve-view=true#get_count)
    * [ICoreWebView2ExperimentalProcessExtendedInfoCollection::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessextendedinfocollection?view=webview2-1.0.2106-prerelease&preserve-view=true#getvalueatindex)

* `COREWEBVIEW2_FRAME_KIND` enum:
    * [COREWEBVIEW2_FRAME_KIND_UNKNOWN](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2106-prerelease&preserve-view=true#corewebview2_frame_kind)
    * [COREWEBVIEW2_FRAME_KIND_EMBED](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2106-prerelease&preserve-view=true#corewebview2_frame_kind)
    * [COREWEBVIEW2_FRAME_KIND_OBJECT](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2106-prerelease&preserve-view=true#corewebview2_frame_kind)

---


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
* For WinRT, options have been added to manage custom scheme registration when creating a `CoreWebView2Environment`:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2CustomSchemeRegistration` Class:
    * [CoreWebView2CustomSchemeRegistration.AllowedOrigins Property](/dotnet/api/microsoft.web.webview2.core.corewebview2customschemeregistration.allowedorigins?view=webview2-dotnet-1.0.2106-prerelease&preserve-view=true)
    * [CoreWebView2CustomSchemeRegistration.SchemeName Property](/dotnet/api/microsoft.web.webview2.core.corewebview2customschemeregistration.schemename?view=webview2-dotnet-1.0.2106-prerelease&preserve-view=true)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.CustomSchemeRegistrations Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.customschemeregistrations?view=webview2-dotnet-1.0.2106-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2CustomSchemeRegistration` Class:
    * [CoreWebView2CustomSchemeRegistration.AllowedOrigins Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2customschemeregistration?view=webview2-winrt-1.0.2106-prerelease&preserve-view=true#allowedorigins)
    * [CoreWebView2CustomSchemeRegistration.SchemeName Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2customschemeregistration?view=webview2-winrt-1.0.2106-prerelease&preserve-view=true#schemename)

* `CoreWebView2EnvironmentOptions` Class:
    * [CoreWebView2EnvironmentOptions.CustomSchemeRegistrations Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2106-prerelease&preserve-view=true#customschemeregistrations)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2CustomSchemeRegistration`:
    * [ICoreWebView2CustomSchemeRegistration::get_SchemeName](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.2106-prerelease&preserve-view=true#get_schemename)<!--no put-->
    * [ICoreWebView2CustomSchemeRegistration::GetAllowedOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.2106-prerelease&preserve-view=true#getallowedorigins)
    * [ICoreWebView2CustomSchemeRegistration::SetAllowedOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.2106-prerelease&preserve-view=true#setallowedorigins)

* [ICoreWebView2EnvironmentOptions4](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.2106-prerelease&preserve-view=true)
   * [ICoreWebView2EnvironmentOptions4::GetCustomSchemeRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.2106-prerelease&preserve-view=true#getcustomschemeregistrations)
   * [ICoreWebView2EnvironmentOptions4::SetCustomSchemeRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.2106-prerelease&preserve-view=true#setcustomschemeregistrations)

---


<!-- ------------------------------ -->
* Added source frame info to the `NewWindowRequested` event arguments, to identify the source of the request:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2NewWindowRequestedEventArgs` Class:
    * [CoreWebView2NewWindowRequestedEventArgs.OriginalSourceFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2newwindowrequestedeventargs.originalsourceframeinfo?view=webview2-dotnet-1.0.2106-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2NewWindowRequestedEventArgs` Class:
    * [CoreWebView2NewWindowRequestedEventArgs.OriginalSourceFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2newwindowrequestedeventargs?view=webview2-winrt-1.0.2106-prerelease&preserve-view=true#originalsourceframeinfo)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2NewWindowRequestedEventArgs3](/microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs3?view=webview2-1.0.2106-prerelease&preserve-view=true)
    * [ICoreWebView2NewWindowRequestedEventArgs3::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs3?view=webview2-1.0.2106-prerelease&preserve-view=true#get_originalsourceframeinfo)<!--no put-->

---


<!-- ====================================================================== -->
## Bug fixes


<!-- ------------------------------ -->
#### Runtime

* Updated the Screen Capture UI to remove mention of tabs.  (Runtime-only)
* Fixed a bug where `PrintAsync` doesn't print using the default DPI on the printer.  (Runtime-only)  ([Issue #3709](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3709))
* Fix a WebView creation failure when app is running as a different admin user.  (Runtime-only)  ([Issue #3738](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3738))
* Fixed a bug that prevented setting an automation name for the WebView2 control on WinUI 3.  (Runtime-only)
* Enabled the new inter-process communication implementation for apps that are using very old SDKs.  (Runtime-only)


<!-- ------------------------------ -->
#### SDK

* Fixed a bug where the `CoreWebView2EnvironmentOptions.Language` property doesn't change the `accept-language` HTTP header.  (SDK-only)  ([Issue #3635](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3635))
* Added support for longer runtime installation paths.  (SDK-only)
* The custom URI scheme registration API now works in WinRT.  For API names and links, in the **Promotions** section above, see the "custom scheme registration" entry.  (SDK-only)


<!-- ------------------------------ -->
#### Runtime and SDK

* Fixed a bug where the Runtime exits unexpectedly when calling `SetPermissionState` with an invalid enum value.  (Runtime and SDK)


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
