---
title: Release Notes for the WebView2 SDK
description: Release notes for Microsoft Edge WebView2, covering new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 03/25/2024
---
# Release Notes for the WebView2 SDK

These Release Notes provide information about new features and bug fixes that are included in the WebView2 Release SDK and the WebView2 Prerelease SDK.


<!-- this webpage covers the most recent ~5 months; periodically move oldest h2 sections from bottom of present file to archive.md.  eg covers:
Mar 2024
Feb 2024
Jan 2024
Dec 2023
Nov 2023
Oct 2023 - can move to archive.md
-->


<!-- template for Release and Prerelease (omit Experimental APIs section from Release) -->
<!-- ======================================================================
## 1.0.####.##
## 1.0.####-prerelease
 
Release Date: Monthname nn, 2024
 
[NuGet package for WebView2 SDK 1.0.####.##](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.####.##)
[NuGet package for WebView2 SDK 1.0.####-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.####-prerelease)
 
For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version ###.0.####.## or higher.
For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version ###.0.####.0 or higher.
 
#### General features
 
#### Experimental APIs
No Experimental APIs have been added in this Prerelease SDK.
The following Experimental APIs have been added in this Prerelease SDK.
##### [.NET/C#](#tab/dotnetcsharp)
##### [WinRT/C#](#tab/winrtcsharp)
##### [Win32/C++](#tab/win32cpp)
---
 
#### Promotions
No additional APIs have been promoted to Stable and added in this Release SDK.
The following APIs have been promoted to Stable and are now included in this Release SDK.
No APIs have been promoted from Experimental to Stable in this Prerelease SDK.
The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.
##### [.NET/C#](#tab/dotnetcsharp)
##### [WinRT/C#](#tab/winrtcsharp)
##### [Win32/C++](#tab/win32cpp)
---
 
#### Bug fixes
###### Runtime and SDK
###### Runtime-only
###### SDK-only
-->
 
<!-- end of Mar. 2024 Release SDK -->
<!-- end of Mar. 2024 Prerelease SDK -->
<!-- end of template -->


<!-- ====================================================================== -->
## 1.0.2420.47

Release Date: March 25, 2024

[NuGet package for WebView2 SDK 1.0.2420.47](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2420.47)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 123.0.2420.47 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ---------- -->
* Added a new API to provide hit-testing results on the regions that a WebView2 contains.  This API is useful for visually hosted applications that want to handle mouse events on the non-client area of the WebView2 window.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.GetNonClientRegionAtPoint Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.getnonclientregionatpoint?view=webview2-dotnet-1.0.2420.47&preserve-view=true)
   * [CoreWebView2CompositionController.NonClientRegionChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.nonclientregionchanged?view=webview2-dotnet-1.0.2420.47&preserve-view=true)
   * [CoreWebView2CompositionController.QueryNonClientRegion Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.querynonclientregion?view=webview2-dotnet-1.0.2420.47&preserve-view=true)

* `CoreWebView2NonClientRegionChangedEventArgs` Class:
   * [CoreWebView2NonClientRegionChangedEventArgs.RegionKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionchangedeventargs.regionkind?view=webview2-dotnet-1.0.2420.47&preserve-view=true)

* [CoreWebView2NonClientRegionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2420.47&preserve-view=true)
   * `Caption`
   * `Client`
   * `Nowhere`

* `CoreWebView2ProcessFailedEventArgs` Class:
   * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.failuresourcemodulepath?view=webview2-dotnet-1.0.2420.47&preserve-view=true)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsNonClientRegionSupportEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isnonclientregionsupportenabled?view=webview2-dotnet-1.0.2420.47&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.GetNonClientRegionAtPoint Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2420.47&preserve-view=true#getnonclientregionatpoint)
   * [CoreWebView2CompositionController.NonClientRegionChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2420.47&preserve-view=true#nonclientregionchanged)
   * [CoreWebView2CompositionController.QueryNonClientRegion Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2420.47&preserve-view=true#querynonclientregion)

* `CoreWebView2NonClientRegionChangedEventArgs` Class:
   * [CoreWebView2NonClientRegionChangedEventArgs.RegionKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionchangedeventargs?view=webview2-winrt-1.0.2420.47&preserve-view=true#regionkind)

* [CoreWebView2NonClientRegionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionkind?view=webview2-winrt-1.0.2420.47&preserve-view=true)
   * `Caption`
   * `Client`
   * `Nowhere`

* `CoreWebView2ProcessFailedEventArgs` Class:
   * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs?view=webview2-winrt-1.0.2420.47&preserve-view=true#failuresourcemodulepath)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsNonClientRegionSupportEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.2420.47&preserve-view=true#isnonclientregionsupportenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController4](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2420.47&preserve-view=true)
   * [ICoreWebView2CompositionController4::add_NonClientRegionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2420.47&preserve-view=true#add_nonclientregionchanged)
   * [ICoreWebView2CompositionController4::GetNonClientRegionAtPoint](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2420.47&preserve-view=true#getnonclientregionatpoint)
   * [ICoreWebView2CompositionController4::QueryNonClientRegion](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2420.47&preserve-view=true#querynonclientregion)
   * [ICoreWebView2CompositionController4::remove_NonClientRegionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2420.47&preserve-view=true#remove_nonclientregionchanged)

* [ICoreWebView2NonClientRegionChangedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventargs?view=webview2-1.0.2420.47&preserve-view=true)
   * [ICoreWebView2NonClientRegionChangedEventArgs::get_RegionKind](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventargs?view=webview2-1.0.2420.47&preserve-view=true#get_regionkind)<!--no put-->

* [ICoreWebView2NonClientRegionChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventhandler?view=webview2-1.0.2420.47&preserve-view=true)<!-- Win32-only -->

* [ICoreWebView2RegionRectCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2regionrectcollectionview?view=webview2-1.0.2420.47&preserve-view=true)<!-- Win32-only -->

* [ICoreWebView2Settings9](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2420.47&preserve-view=true)
   * [ICoreWebView2Settings9::get_IsNonClientRegionSupportEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2420.47&preserve-view=true#get_isnonclientregionsupportenabled)
   * [ICoreWebView2Settings9::put_IsNonClientRegionSupportEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2420.47&preserve-view=true#put_isnonclientregionsupportenabled)

* [COREWEBVIEW2_NON_CLIENT_REGION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2420.47&preserve-view=true#corewebview2_non_client_region_kind)
   * `COREWEBVIEW2_NON_CLIENT_REGION_KIND_CAPTION`
   * `COREWEBVIEW2_NON_CLIENT_REGION_KIND_CLIENT`
   * `COREWEBVIEW2_NON_CLIENT_REGION_KIND_NOWHERE`

---


<!-- ---------- -->
* Added the `FailureSourceModulePath` property to the `ProcessFailedEventArgs` type, to specify the full path of the module that caused the crash in cases of Windows code integrity failures - that is, when a process exited with `STATUS_INVALID_IMAGE_HASH`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class:
    * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.failuresourcemodulepath?view=webview2-dotnet-1.0.2420.47&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class:
    * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs?view=webview2-winrt-1.0.2420.47&preserve-view=true#failuresourcemodulepath)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ProcessFailedEventArgs3](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs3?view=webview2-1.0.2420.47&preserve-view=true)
    * [ICoreWebView2ProcessFailedEventArgs3::get_FailureSourceModulePath](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs3?view=webview2-1.0.2420.47&preserve-view=true#get_failuresourcemodulepath)

---


<!-- ------------------------------ -->
#### Bug fixes


###### SDK-only

* The .NET assemblies for WinForms and WPF are now shipped with optimization enabled.  ([Issue #4409](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4409))

<!-- end of Mar. 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2470-prerelease

Release Date: March 25, 2024

[NuGet package for WebView2 SDK 1.0.2470-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2470-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires WebView2 Runtime version 124.0.2470.0 or higher.



<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
* Support for the Fluent Style Overlay Scrollbar.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ScrollBarStyle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.scrollbarstyle?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)

* [CoreWebView2ScrollbarStyle Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2scrollbarstyle?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * `Default`
   * `FluentOverlay`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ScrollBarStyle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#scrollbarstyle)

* [CoreWebView2ScrollbarStyle Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scrollbarstyle?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true)
   * `Default`
   * `FluentOverlay`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalEnvironmentOptions2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.2470-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironmentOptions2::get_ScrollBarStyle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.2470-prerelease&preserve-view=true#get_scrollbarstyle)
   * [ICoreWebView2ExperimentalEnvironmentOptions2::put_ScrollBarStyle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.2470-prerelease&preserve-view=true#put_scrollbarstyle)

* [COREWEBVIEW2_SCROLLBAR_STYLE enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2470-prerelease&preserve-view=true#corewebview2_scrollbar_style)
   * `COREWEBVIEW2_SCROLLBAR_STYLE_DEFAULT`
   * `COREWEBVIEW2_SCROLLBAR_STYLE_FLUENT_OVERLAY`

---


<!-- ---------- -->
* Updated the WebMessageObjects API to allow injecting DOM objects into WebView2 content that's constructed via the app and via the `CoreWebView2.PostWebMessage` API in the other direction.  Added a new web object type to represent a file system handle that can be posted to the web content to provide it with filesystem access.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostWebMessageAsJsonWithAdditionalObjects Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postwebmessageasjsonwithadditionalobjects?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateWebFileSystemDirectoryHandle Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createwebfilesystemdirectoryhandle?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * [CoreWebView2Environment.CreateWebFileSystemFileHandle Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createwebfilesystemfilehandle?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)

* `CoreWebView2FileSystemHandle` Class:
   * [CoreWebView2FileSystemHandle.Kind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandle.kind?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * [CoreWebView2FileSystemHandle.Path Property](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandle.path?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * [CoreWebView2FileSystemHandle.Permission Property](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandle.permission?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)

* [CoreWebView2FileSystemHandleKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandlekind?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * `File`
   * `Directory`

* [CoreWebView2FileSystemHandlePermission Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandlepermission?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * `ReadOnly`
   * `ReadWrite`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostWebMessageAsJsonWithAdditionalObjects Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#postwebmessageasjsonwithadditionalobjects)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateWebFileSystemDirectoryHandle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#createwebfilesystemdirectoryhandle)
   * [CoreWebView2Environment.CreateWebFileSystemFileHandle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#createwebfilesystemfilehandle)

* `CoreWebView2FileSystemHandle` Class:
   * [CoreWebView2FileSystemHandle.Kind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandle?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#kind)
   * [CoreWebView2FileSystemHandle.Path Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandle?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#path)
   * [CoreWebView2FileSystemHandle.Permission Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandle?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#permission)

* [CoreWebView2FileSystemHandleKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandlekind?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true)
   * `File`
   * `Directory`

* [CoreWebView2FileSystemHandlePermission Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandlepermission?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true)
   * `ReadOnly`
   * `ReadWrite`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental24](/microsoft-edge/webview2/reference/win32/icorewebview2experimental24?view=webview2-1.0.2470-prerelease&preserve-view=true)
   * [ICoreWebView2Experimental24::PostWebMessageAsJsonWithAdditionalObjects](/microsoft-edge/webview2/reference/win32/icorewebview2experimental24?view=webview2-1.0.2470-prerelease&preserve-view=true#postwebmessageasjsonwithadditionalobjects)

* [ICoreWebView2ExperimentalEnvironment14](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment14?view=webview2-1.0.2470-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironment14::CreateObjectCollection](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment14?view=webview2-1.0.2470-prerelease&preserve-view=true#createobjectcollection)<!--win32 only-->
   * [ICoreWebView2ExperimentalEnvironment14::CreateWebFileSystemDirectoryHandle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment14?view=webview2-1.0.2470-prerelease&preserve-view=true#createwebfilesystemdirectoryhandle)
   * [ICoreWebView2ExperimentalEnvironment14::CreateWebFileSystemFileHandle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment14?view=webview2-1.0.2470-prerelease&preserve-view=true#createwebfilesystemfilehandle)

* [ICoreWebView2ExperimentalFileSystemHandle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfilesystemhandle?view=webview2-1.0.2470-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalFileSystemHandle::get_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfilesystemhandle?view=webview2-1.0.2470-prerelease&preserve-view=true#get_kind)
   * [ICoreWebView2ExperimentalFileSystemHandle::get_Path](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfilesystemhandle?view=webview2-1.0.2470-prerelease&preserve-view=true#get_path)
   * [ICoreWebView2ExperimentalFileSystemHandle::get_Permission](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfilesystemhandle?view=webview2-1.0.2470-prerelease&preserve-view=true#get_permission)

* [ICoreWebView2ExperimentalObjectCollection](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalobjectcollection?view=webview2-1.0.2470-prerelease&preserve-view=true)<!--win32 only-->
   * [ICoreWebView2ExperimentalObjectCollection::InsertValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalobjectcollection?view=webview2-1.0.2470-prerelease&preserve-view=true#insertvalueatindex)<!--win32 only-->
   * [ICoreWebView2ExperimentalObjectCollection::RemoveValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalobjectcollection?view=webview2-1.0.2470-prerelease&preserve-view=true#removevalueatindex)<!--win32 only-->

* [COREWEBVIEW2_FILE_SYSTEM_HANDLE_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2470-prerelease&preserve-view=true#corewebview2_file_system_handle_kind)
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_KIND_FILE`
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_KIND_DIRECTORY`

* [COREWEBVIEW2_FILE_SYSTEM_HANDLE_PERMISSION enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2470-prerelease&preserve-view=true#corewebview2_file_system_handle_permission)
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_PERMISSION_READ_ONLY`
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_PERMISSION_READ_WRITE`

---


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ---------- -->
* Added the Runtime selection feature to support more prerelease testing and flighting scenarios.  You can specify `ReleaseChannels` to choose which channels are searched for during environment creation, and `ChannelSearchKind` to select a search order.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ChannelSearchKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.channelsearchkind?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * [CoreWebView2EnvironmentOptions.ReleaseChannels Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.releasechannels?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)

* [CoreWebView2ChannelSearchKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2channelsearchkind?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * `MostStable`
   * `LeastStable`

* [CoreWebView2ReleaseChannels Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2releasechannels?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * `None`
   * `Stable`
   * `Beta`
   * `Dev`
   * `Canary`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ChannelSearchKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#channelsearchkind)
   * [CoreWebView2EnvironmentOptions.ReleaseChannels Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#releasechannels)

* [CoreWebView2ChannelSearchKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2channelsearchkind?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true)
   * `MostStable`
   * `LeastStable`

* [CoreWebView2ReleaseChannels Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2releasechannels?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true)
   * `None`
   * `Stable`
   * `Beta`
   * `Dev`
   * `Canary`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions7](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2470-prerelease&preserve-view=true)
   * [ICoreWebView2EnvironmentOptions7::get_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2470-prerelease&preserve-view=true#get_channelsearchkind)
   * [ICoreWebView2EnvironmentOptions7::put_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2470-prerelease&preserve-view=true#put_channelsearchkind)
   * [ICoreWebView2EnvironmentOptions7::get_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2470-prerelease&preserve-view=true#get_releasechannels)
   * [ICoreWebView2EnvironmentOptions7::put_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2470-prerelease&preserve-view=true#put_releasechannels)

* [COREWEBVIEW2_CHANNEL_SEARCH_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2470-prerelease&preserve-view=true#corewebview2_channel_search_kind)
   * `COREWEBVIEW2_CHANNEL_SEARCH_KIND_MOST_STABLE`
   * `COREWEBVIEW2_CHANNEL_SEARCH_KIND_LEAST_STABLE`

* [COREWEBVIEW2_RELEASE_CHANNELS enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2470-prerelease&preserve-view=true#corewebview2_release_channels)
   * `COREWEBVIEW2_RELEASE_CHANNELS_NONE`
   * `COREWEBVIEW2_RELEASE_CHANNELS_STABLE`
   * `COREWEBVIEW2_RELEASE_CHANNELS_BETA`
   * `COREWEBVIEW2_RELEASE_CHANNELS_DEV`
   * `COREWEBVIEW2_RELEASE_CHANNELS_CANARY`

---


<!-- ---------- -->
* Added the `FailureSourceModulePath` property to the `ProcessFailedEventArgs` type, to specify the full path of the module that caused the crash in cases of Windows code integrity failures - that is, when a process exited with `STATUS_INVALID_IMAGE_HASH`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class:
   * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.failuresourcemodulepath?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class:
   * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#failuresourcemodulepath)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ProcessFailedEventArgs3](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs3?view=webview2-1.0.2470-prerelease&preserve-view=true)
   * [ICoreWebView2ProcessFailedEventArgs3::get_FailureSourceModulePath](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs3?view=webview2-1.0.2470-prerelease&preserve-view=true#get_failuresourcemodulepath)<!--no put-->

---


<!-- ------------------------------ -->
#### Bug fixes


###### Runtime-only

* Fixed a reliability regression that could crash the application process when an old version of WebView2 client DLL is unloaded.
* Ensured that the WebView2 temporary download folder is unique per user data folder, and doesn't interfere with other apps or the browser.

<!-- end of Mar. 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2365.46

Release Date: February 26, 2024

[NuGet package for WebView2 SDK 1.0.2365.46](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2365.46)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 122.0.2365.46 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ------------------------------ -->
*  Added support for `WebResourceRequested` for workers, which allows setting filters in order to receive `WebResourceRequested` events for service workers, shared workers, and different-origin iframes.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.AddWebResourceRequestedFilter Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.2365.46&preserve-view=true)
   * [CoreWebView2.RemoveWebResourceRequestedFilter Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.removewebresourcerequestedfilter?view=webview2-dotnet-1.0.2365.46&preserve-view=true)

* `CoreWebView2WebResourceRequestedEventArgs` Class:
   * [CoreWebView2WebResourceRequestedEventArgs.RequestedSourceKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestedeventargs.requestedsourcekind?view=webview2-dotnet-1.0.2365.46&preserve-view=true)

* [CoreWebView2WebResourceRequestSourceKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestsourcekinds?view=webview2-dotnet-1.0.2365.46&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.AddWebResourceRequestedFilter Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2365.46&preserve-view=true#addwebresourcerequestedfilter)
   * [CoreWebView2.RemoveWebResourceRequestedFilter Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2365.46&preserve-view=true#removewebresourcerequestedfilter)

* `CoreWebView2WebResourceRequestedEventArgs` Class:
   * [CoreWebView2WebResourceRequestedEventArgs.RequestedSourceKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestedeventargs?view=webview2-winrt-1.0.2365.46&preserve-view=true#requestedsourcekind)

* [CoreWebView2WebResourceRequestSourceKinds Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestsourcekinds?view=webview2-winrt-1.0.2365.46&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_22](/microsoft-edge/webview2/reference/win32/icorewebview2_22?view=webview2-1.0.2365.46&preserve-view=true)
    * [ICoreWebView2_22::AddWebResourceRequestedFilterWithRequestSourceKinds](/microsoft-edge/webview2/reference/win32/icorewebview2_22?view=webview2-1.0.2365.46&preserve-view=true#addwebresourcerequestedfilterwithrequestsourcekinds)
    * [ICoreWebView2_22::RemoveWebResourceRequestedFilterWithRequestSourceKinds](/microsoft-edge/webview2/reference/win32/icorewebview2_22?view=webview2-1.0.2365.46&preserve-view=true#removewebresourcerequestedfilterwithrequestsourcekinds)

* [ICoreWebView2WebResourceRequestedEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventargs2?view=webview2-1.0.2365.46&preserve-view=true)
    * [ICoreWebView2WebResourceRequestedEventArgs2::get_RequestedSourceKind](/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventargs2?view=webview2-1.0.2365.46&preserve-view=true#get_requestedsourcekind)

* [COREWEBVIEW2_WEB_RESOURCE_REQUEST_SOURCE_KINDS enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2365.46&preserve-view=true#corewebview2_web_resource_request_source_kinds)

---


<!-- ------------------------------ -->
* To support browser extensions in WebView2, added `GetBrowserExtensions` for WinRT:

##### [.NET/C#](#tab/dotnetcsharp)

N/A

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
    * [CoreWebView2Profile.GetBrowserExtensionsAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.2365.46&preserve-view=true#getbrowserextensionsasync)

##### [Win32/C++](#tab/win32cpp)

N/A

---


<!-- ------------------------------ -->
#### Bug fixes

###### Runtime-only

* Fixed a regression that affected handling of the `NewWindowRequested` event when the new window is set to be the source WebView.  ([Issue #4250](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4250))

* Fixed a bug where closing a WebView that has an embedded PDF viewer could lead to a crash.  ([Issue #3832](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3832))

* Fixed a regression where mouse-clicks stopped working when the application enabled `SetWindowDisplayAffinity`.  ([Issue #4325](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4325))

<!-- end of Feb 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2415-prerelease

Release Date: February 26, 2024

[NuGet package for WebView2 SDK 1.0.2415-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2415-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 123.0.2415.0 or higher.


<!-- ------------------------------ -->
#### Breaking changes


<!-- ---------- -->
* The behavior of the `InitiatingOrigin` property of `CoreWebView2LaunchingExternalUriSchemeEventArgs` has changed.  If the `InitiatingOrigin` is an [opaque origin](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque), the `InitiatingOrigin` that's reported in the event args is its precursor origin.  The _precursor origin_ is the origin that created the opaque origin.  For example, if a frame that's at `example.com` opens a subframe that has a different opaque origin, the subframe's precursor origin is `example.com`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2LaunchingExternalUriSchemeEventArgs` Class:
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.initiatingorigin?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2LaunchingExternalUriSchemeEventArgs` Class:
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#initiatingorigin)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2LaunchingExternalUriSchemeEventArgs`:
   * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_InitiatingOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.2415-prerelease&preserve-view=true#get_initiatingorigin)<!--no put-->

---


<!-- ---------- -->
* The members of the `CoreWebView2TextureStreamErrorKind` enum have been renamed:

##### [.NET/C#](#tab/dotnetcsharp)

Old member names:
* [CoreWebView2TextureStreamErrorKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
   * `CoreWebView2TextureStreamErrorNoVideoTrackStarted`
   * `CoreWebView2TextureStreamErrorTextureError`
   * `CoreWebView2TextureStreamErrorTextureInUse`

New member names:
* [CoreWebView2TextureStreamErrorKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)
   * `NoVideoTrackStarted`
   * `TextureError`
   * `TextureInUse`

##### [WinRT/C#](#tab/winrtcsharp)

Old member names:
* [CoreWebView2TextureStreamErrorKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true)
   * `CoreWebView2TextureStreamErrorNoVideoTrackStarted`
   * `CoreWebView2TextureStreamErrorTextureError`
   * `CoreWebView2TextureStreamErrorTextureInUse`

New member names:
* [CoreWebView2TextureStreamErrorKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true)
   * `NoVideoTrackStarted`
   * `TextureError`
   * `TextureInUse`

##### [Win32/C++](#tab/win32cpp)

Old member names:
* [COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2357-prerelease&preserve-view=true#corewebview2_texture_stream_error_kind)
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_NO_VIDEO_TRACK_STARTED`
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_TEXTURE_ERROR`
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_TEXTURE_IN_USE`

New member names:
* [COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2415-prerelease&preserve-view=true#corewebview2_texture_stream_error_kind)
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND_NO_VIDEO_TRACK_STARTED`
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND_TEXTURE_ERROR`
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND_TEXTURE_IN_USE`

---


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.

* The `CoreWebView2ControllerOptions` class now has an `AllowHostInputProcessing` property, which allows user input messages (keyboard, mouse, touch, and pen) to pass through the browser window to be received by an app process window.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.allowhostinputprocessing?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#allowhostinputprocessing)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalControllerOptions2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions2?view=webview2-1.0.2415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalControllerOptions2::get_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions2?view=webview2-1.0.2415-prerelease&preserve-view=true#get_allowhostinputprocessing)
   * [ICoreWebView2ExperimentalControllerOptions2::put_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions2?view=webview2-1.0.2415-prerelease&preserve-view=true#put_allowhostinputprocessing)

---


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
* Added a new API to provide hit-testing results on the regions that a WebView2 contains.  This API is useful for visually hosted applications that want to handle mouse events on the non-client area of the WebView2 window.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.GetNonClientRegionAtPoint Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.getnonclientregionatpoint?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)
   * [CoreWebView2CompositionController.QueryNonClientRegion Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.querynonclientregion?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)
   * [CoreWebView2CompositionController.NonClientRegionChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.nonclientregionchanged?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

* [CoreWebView2NonClientRegionChangedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionchangedeventargs?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)
   * [CoreWebView2NonClientRegionChangedEventArgs.RegionKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionchangedeventargs.regionkind?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

* [CoreWebView2NonClientRegionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsNonClientRegionSupportEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isnonclientregionsupportenabled?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.GetNonClientRegionAtPoint Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#getnonclientregionatpoint)
   * [CoreWebView2CompositionController.QueryNonClientRegion Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#querynonclientregion)
   * [CoreWebView2CompositionController.NonClientRegionChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#nonclientregionchanged)

* [CoreWebView2NonClientRegionChangedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionchangedeventargs?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true)
   * [CoreWebView2NonClientRegionChangedEventArgs.RegionKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionchangedeventargs?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#regionkind)

* [CoreWebView2NonClientRegionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionkind?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsNonClientRegionSupportEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#isnonclientregionsupportenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController4](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true)
   * [ICoreWebView2CompositionController4::GetNonClientRegionAtPoint](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true#getnonclientregionatpoint)
   * [ICoreWebView2CompositionController4::QueryNonClientRegion](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true#querynonclientregion)
   * [ICoreWebView2CompositionController4::add_NonClientRegionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true#add_nonclientregionchanged)
   * [ICoreWebView2CompositionController4::remove_NonClientRegionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true#remove_nonclientregionchanged)

* [ICoreWebView2NonClientRegionChangedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventargs?view=webview2-1.0.2415-prerelease&preserve-view=true)
   * [ICoreWebView2NonClientRegionChangedEventArgs::get_RegionKind](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventargs?view=webview2-1.0.2415-prerelease&preserve-view=true#get_regionkind)<!--no put-->

* [ICoreWebView2NonClientRegionChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventhandler?view=webview2-1.0.2415-prerelease&preserve-view=true)

* [ICoreWebView2RegionRectCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2regionrectcollectionview?view=webview2-1.0.2415-prerelease&preserve-view=true)

* [ICoreWebView2Settings9](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2415-prerelease&preserve-view=true)
   * [ICoreWebView2Settings9::get_IsNonClientRegionSupportEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2415-prerelease&preserve-view=true#get_isnonclientregionsupportenabled)
   * [ICoreWebView2Settings9::put_IsNonClientRegionSupportEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2415-prerelease&preserve-view=true#put_isnonclientregionsupportenabled)

* [COREWEBVIEW2_NON_CLIENT_REGION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2415-prerelease&preserve-view=true#corewebview2_non_client_region_kind)

---


<!-- ------------------------------ -->
#### Bug fixes

###### Runtime-only

* Fixed the camera or mic not being able to open in Google Meet or Microsoft Teams meetings when the permission request is set to "not persisted" (that is, `SavesInProfile = false`).  ([Issue #3592](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3592))

* Fixed appending an empty `--edge-webview-custom-scheme` command-line switch in a WebView2 browser process.

* Disabled the global `UserDataFolder` registry key, so that this registry key can only be applied per-app.

* Fixed the `NewWindowRequested` event not being fired when opened by a browser extension. ([Issue #3841](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3841))

* Fixed the `NewWindowRequested` event not being fired when opening a view source. ([Issue #4162](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4162))

* Fixed an issue to fire `StateChanged` and `BytesReceivedChanged` events when a download involves navigation.

* Fixed a bug where the `BeforeUnload` dialog caused the WebView2 window to unexpectedly jump position. ([Issue #4350](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4350))

* Fixed an issue where `PrintAsync` prints a blank page if it is called too soon, before the PDF is fully loaded.  ([Issue #3779](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3779))

<!-- end of Feb 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2277.86

Release Date: February 5, 2024

[NuGet package for WebView2 SDK 1.0.2277.86](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2277.86)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 121.0.2277.86 or higher.


<!-- ------------------------------ -->
#### Breaking changes

> [!IMPORTANT]
> **Breaking Change**: Navigations to `about:blank` are now cancellable via the `NavigationStarting` event.  To revert to the old behavior, disable the `msWebView2CancellableAboutNavigations` feature flag.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ------------------------------ -->
* `ExecuteScriptWithResult` provides exception information if the script failed.  `TryGetResultAsString` gets the script execution result as a string rather than as JSON, to make it more convenient to interact with string results:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
    * [CoreWebView2.ExecuteScriptWithResultAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.executescriptwithresultasync?view=webview2-dotnet-1.0.2277.86&preserve-view=true)

* [CoreWebView2ExecuteScriptResult Class](/dotnet/api/microsoft.web.webview2.core.corewebview2executescriptresult?view=webview2-dotnet-1.0.2277.86&preserve-view=true)
    * [CoreWebView2ExecuteScriptResult.Exception Property](/dotnet/api/microsoft.web.webview2.core.corewebview2executescriptresult.exception?view=webview2-dotnet-1.0.2277.86&preserve-view=true)
    * [CoreWebView2ExecuteScriptResult.ResultAsJson Property](/dotnet/api/microsoft.web.webview2.core.corewebview2executescriptresult.resultasjson?view=webview2-dotnet-1.0.2277.86&preserve-view=true)
    * [CoreWebView2ExecuteScriptResult.Succeeded Property](/dotnet/api/microsoft.web.webview2.core.corewebview2executescriptresult.succeeded?view=webview2-dotnet-1.0.2277.86&preserve-view=true)
    * [CoreWebView2ExecuteScriptResult.TryGetResultAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2executescriptresult.trygetresultasstring?view=webview2-dotnet-1.0.2277.86&preserve-view=true)

* [CoreWebView2ScriptException Class](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception?view=webview2-dotnet-1.0.2277.86&preserve-view=true)
    * [CoreWebView2ScriptException.ColumnNumber Property](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception.columnnumber?view=webview2-dotnet-1.0.2277.86&preserve-view=true)
    * [CoreWebView2ScriptException.LineNumber Property](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception.linenumber?view=webview2-dotnet-1.0.2277.86&preserve-view=true)
    * [CoreWebView2ScriptException.Message Property](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception.message?view=webview2-dotnet-1.0.2277.86&preserve-view=true)
    * [CoreWebView2ScriptException.Name Property](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception.name?view=webview2-dotnet-1.0.2277.86&preserve-view=true)
    * [CoreWebView2ScriptException.ToJson Property](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception.tojson?view=webview2-dotnet-1.0.2277.86&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
    * [CoreWebView2.ExecuteScriptWithResultAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2277.86&preserve-view=true#executescriptwithresultasync)

* [CoreWebView2ExecuteScriptResult Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2executescriptresult?view=webview2-winrt-1.0.2277.86&preserve-view=true)
    * [CoreWebView2ExecuteScriptResult.Exception Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2executescriptresult?view=webview2-winrt-1.0.2277.86&preserve-view=true#exception)
    * [CoreWebView2ExecuteScriptResult.ResultAsJson Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2executescriptresult?view=webview2-winrt-1.0.2277.86&preserve-view=true#resultasjson)
    * [CoreWebView2ExecuteScriptResult.Succeeded Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2executescriptresult?view=webview2-winrt-1.0.2277.86&preserve-view=true#succeeded)
    * [CoreWebView2ExecuteScriptResult.TryGetResultAsString Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2executescriptresult?view=webview2-winrt-1.0.2277.86&preserve-view=true#trygetresultasstring)

* [CoreWebView2ScriptException Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.2277.86&preserve-view=true)
    * [CoreWebView2ScriptException.ColumnNumber Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.2277.86&preserve-view=true#columnnumber)
    * [CoreWebView2ScriptException.LineNumber Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.2277.86&preserve-view=true#linenumber)
    * [CoreWebView2ScriptException.Message Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.2277.86&preserve-view=true#message)
    * [CoreWebView2ScriptException.Name Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.2277.86&preserve-view=true#name)
    * [CoreWebView2ScriptException.ToJson Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.2277.86&preserve-view=true#tojson)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_21](/microsoft-edge/webview2/reference/win32/icorewebview2_21?view=webview2-1.0.2277.86&preserve-view=true)
    * [ICoreWebView2_21::ExecuteScriptWithResult](/microsoft-edge/webview2/reference/win32/icorewebview2_21?view=webview2-1.0.2277.86&preserve-view=true#executescriptwithresult)

* [ICoreWebView2ExecuteScriptResult](/microsoft-edge/webview2/reference/win32/icorewebview2executescriptresult?view=webview2-1.0.2277.86&preserve-view=true)
    * [ICoreWebView2ExecuteScriptResult::get_Exception](/microsoft-edge/webview2/reference/win32/icorewebview2executescriptresult?view=webview2-1.0.2277.86&preserve-view=true#get_exception)<!--no put-->
    * [ICoreWebView2ExecuteScriptResult::get_ResultAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2executescriptresult?view=webview2-1.0.2277.86&preserve-view=true#get_resultasjson)<!--no put-->
    * [ICoreWebView2ExecuteScriptResult::get_Succeeded](/microsoft-edge/webview2/reference/win32/icorewebview2executescriptresult?view=webview2-1.0.2277.86&preserve-view=true#get_succeeded)<!--no put-->
    * [ICoreWebView2ExecuteScriptResult::TryGetResultAsString](/microsoft-edge/webview2/reference/win32/icorewebview2executescriptresult?view=webview2-1.0.2277.86&preserve-view=true#trygetresultasstring)

* [ICoreWebView2ExecuteScriptWithResultCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2executescriptwithresultcompletedhandler?view=webview2-1.0.2277.86&preserve-view=true)<!-- handler is Win32-only -->

* [ICoreWebView2ScriptException](/microsoft-edge/webview2/reference/win32/icorewebview2scriptexception?view=webview2-1.0.2277.86&preserve-view=true)
    * [ICoreWebView2ScriptException::get_ColumnNumber](/microsoft-edge/webview2/reference/win32/icorewebview2scriptexception?view=webview2-1.0.2277.86&preserve-view=true#get_columnnumber)<!--no put-->
    * [ICoreWebView2ScriptException::get_LineNumber](/microsoft-edge/webview2/reference/win32/icorewebview2scriptexception?view=webview2-1.0.2277.86&preserve-view=true#get_linenumber)<!--no put-->
    * [ICoreWebView2ScriptException::get_Message](/microsoft-edge/webview2/reference/win32/icorewebview2scriptexception?view=webview2-1.0.2277.86&preserve-view=true#get_message)<!--no put-->
    * [ICoreWebView2ScriptException::get_Name](/microsoft-edge/webview2/reference/win32/icorewebview2scriptexception?view=webview2-1.0.2277.86&preserve-view=true#get_name)<!--no put-->
    * [ICoreWebView2ScriptException::get_ToJson](/microsoft-edge/webview2/reference/win32/icorewebview2scriptexception?view=webview2-1.0.2277.86&preserve-view=true#get_tojson)<!--no put-->

---



<!-- ------------------------------ -->
#### Bug fixes

###### Runtime-only

* Ensured that the spellcheck language matches `put_Language` programmatically.  The customized context menu is also updated with correct spellchecks.  (Runtime-only)

* Fixed a bug that stopped raising the `NavigationCompleted` event for some websites that load AV1-encoded videos.  (Runtime-only)  ([Issue #3801](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3801))

* Fixed an issue where host-process COM resources would be released during WebView tear-down.  (Runtime-only)  ([Issue #4226](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4226))

* Fixed a bug that broke loading some social media apps such as Facebook, Twitter, and Linkedin.  This change is Runtime-specific.  (Runtime-only)  ([Issue #4281](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4281))

<!-- end of Jan (into Feb) 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2357-prerelease

Release Date: January 30, 2024

[NuGet package for WebView2 SDK 1.0.2357-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2357-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 122.0.2357.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
* Added the Runtime selection feature to support more prerelease testing and flighting scenarios.  Developers can specify `ReleaseChannels` to choose which channels are searched for during environment creation, and `ChannelSearchKind` to select a search order.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class:
    * [CoreWebView2EnvironmentOptions.ChannelSearchKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.channelsearchkind?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2EnvironmentOptions.ReleaseChannels Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.releasechannels?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* [CoreWebView2ChannelSearchKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2channelsearchkind?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* [CoreWebView2ReleaseChannels Class](/dotnet/api/microsoft.web.webview2.core.corewebview2releasechannels?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class:
    * [CoreWebView2EnvironmentOptions.ChannelSearchKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#channelsearchkind)
    * [CoreWebView2EnvironmentOptions.ReleaseChannels Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#releasechannels)

* [CoreWebView2ChannelSearchKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2channelsearchkind?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true)

* [CoreWebView2ReleaseChannels Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2releasechannels?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalEnvironmentOptions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.2357-prerelease&preserve-view=true)
    * [ICoreWebView2ExperimentalEnvironmentOptions::get_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.2357-prerelease&preserve-view=true#get_channelsearchkind)
    * [ICoreWebView2ExperimentalEnvironmentOptions::get_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.2357-prerelease&preserve-view=true#get_releasechannels)
    * [ICoreWebView2ExperimentalEnvironmentOptions::put_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.2357-prerelease&preserve-view=true#put_channelsearchkind)
    * [ICoreWebView2ExperimentalEnvironmentOptions::put_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.2357-prerelease&preserve-view=true#put_releasechannels)

* [COREWEBVIEW2_CHANNEL_SEARCH_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2357-prerelease&preserve-view=true#corewebview2_channel_search_kind)

* [COREWEBVIEW2_RELEASE_CHANNELS enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2357-prerelease&preserve-view=true#corewebview2_release_channels)

---


<!-- ---------- -->
* Added a new API to provide hit-testing results on the regions that a WebView2 contains.  This API is useful for visually hosted applications that want to handle mouse events on the non-client area of the WebView2 window.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.GetNonClientRegionAtPoint Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.getnonclientregionatpoint?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
   * [CoreWebView2CompositionController.QueryNonClientRegion Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.querynonclientregion?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
   * [CoreWebView2CompositionController.NonClientRegionChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.nonclientregionchanged?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* [CoreWebView2NonClientRegionChangedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionchangedeventargs?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
   * [CoreWebView2NonClientRegionChangedEventArgs.RegionKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionchangedeventargs.regionkind?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsNonClientRegionSupportEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isnonclientregionsupportenabled?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* [CoreWebView2NonClientRegionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.GetNonClientRegionAtPoint Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#getnonclientregionatpoint)
   * [CoreWebView2CompositionController.QueryNonClientRegion Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#querynonclientregion)
   * [CoreWebView2CompositionController.NonClientRegionChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#nonclientregionchanged)

* [CoreWebView2NonClientRegionChangedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionchangedeventargs?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true)
   * [CoreWebView2NonClientRegionChangedEventArgs.RegionKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionchangedeventargs?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#regionkind)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsNonClientRegionSupportEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#isnonclientregionsupportenabled)

* [CoreWebView2NonClientRegionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionkind?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalCompositionController5](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller5?view=webview2-1.0.2357-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalCompositionController5::add_NonClientRegionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller5?view=webview2-1.0.2357-prerelease&preserve-view=true#add_nonclientregionchanged)
   * [ICoreWebView2ExperimentalCompositionController5::GetNonClientRegionAtPoint](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller5?view=webview2-1.0.2357-prerelease&preserve-view=true#getnonclientregionatpoint)
   * [ICoreWebView2ExperimentalCompositionController5::QueryNonClientRegion](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller5?view=webview2-1.0.2357-prerelease&preserve-view=true#querynonclientregion)
   * [ICoreWebView2ExperimentalCompositionController5::remove_NonClientRegionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller5?view=webview2-1.0.2357-prerelease&preserve-view=true#remove_nonclientregionchanged)

* [ICoreWebView2ExperimentalNonClientRegionChangedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnonclientregionchangedeventargs?view=webview2-1.0.2357-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalNonClientRegionChangedEventArgs::get_RegionKind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnonclientregionchangedeventargs?view=webview2-1.0.2357-prerelease&preserve-view=true#get_regionkind)<!--no put-->

* [ICoreWebView2ExperimentalNonClientRegionChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnonclientregionchangedeventhandler?view=webview2-1.0.2357-prerelease&preserve-view=true)<!-- handler in Win32 only -->

* [ICoreWebView2ExperimentalRegionRectCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalregionrectcollectionview?view=webview2-1.0.2357-prerelease&preserve-view=true)<!-- collection type in Win32 only -->

* [ICoreWebView2ExperimentalSettings8](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings8?view=webview2-1.0.2357-prerelease&preserve-view=true)<!-- new type/link in Win32 only -->
   * [ICoreWebView2ExperimentalSettings8::get_IsNonClientRegionSupportEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings8?view=webview2-1.0.2357-prerelease&preserve-view=true#get_isnonclientregionsupportenabled)
   * [ICoreWebView2ExperimentalSettings8::put_IsNonClientRegionSupportEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings8?view=webview2-1.0.2357-prerelease&preserve-view=true#put_isnonclientregionsupportenabled)

---

<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
* `CoreWebView2AcceleratorKeyPressedEventArgs` has a new `IsBrowserAcceleratorKeyEnabled` property to allow you to control whether the browser handles accelerator keys (shortcut keys), such as **Ctrl+P** or **F3**:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2AcceleratorKeyPressedEventArgs` Class:
    * [CoreWebView2AcceleratorKeyPressedEventArgs.IsBrowserAcceleratorKeyEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2acceleratorkeypressedeventargs.isbrowseracceleratorkeyenabled?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2AcceleratorKeyPressedEventArgs` Class:
    * [CoreWebView2AcceleratorKeyPressedEventArgs.IsBrowserAcceleratorKeyEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2acceleratorkeypressedeventargs?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#isbrowseracceleratorkeyenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2AcceleratorKeyPressedEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2acceleratorkeypressedeventargs2?view=webview2-1.0.2357-prerelease&preserve-view=true)
    * [ICoreWebView2AcceleratorKeyPressedEventArgs2::get_IsBrowserAcceleratorKeyEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2acceleratorkeypressedeventargs2?view=webview2-1.0.2357-prerelease&preserve-view=true#get_isbrowseracceleratorkeyenabled)
    * [ICoreWebView2AcceleratorKeyPressedEventArgs2::put_IsBrowserAcceleratorKeyEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2acceleratorkeypressedeventargs2?view=webview2-1.0.2357-prerelease&preserve-view=true#put_isbrowseracceleratorkeyenabled)

---


<!-- ------------------------------ -->
* The Frame Process Info API, including `GetProcessExtendedInfos`, provides a snapshot collection of all frames that are actively running in the associated renderer process.  This API enables the host application to detect which part of WebView2 is consuming resources such as memory or CPU usage:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Environment` Class:
    * [CoreWebView2Environment.GetProcessExtendedInfosAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.getprocessextendedinfosasync?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* `CoreWebView2ProcessExtendedInfo` Class:
    * [CoreWebView2ProcessExtendedInfo.AssociatedFrameInfos Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processextendedinfo.associatedframeinfos?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2ProcessExtendedInfo.ProcessInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processextendedinfo.processinfo?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* `CoreWebView2` Class:
    * [CoreWebView2.FrameId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.frameid?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* `CoreWebView2Frame` Class:
    * [CoreWebView2Frame.FrameId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.frameid?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* `CoreWebView2FrameInfo` Class:
    * [CoreWebView2FrameInfo.FrameId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2frameinfo.frameid?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2FrameInfo.FrameKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2frameinfo.framekind?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2FrameInfo.ParentFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2frameinfo.parentframeinfo?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* [CoreWebView2FrameKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2framekind?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Environment` Class:
    * [CoreWebView2Environment.GetProcessExtendedInfosAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#getprocessextendedinfosasync)

* `CoreWebView2ProcessExtendedInfo` Class:
    * [CoreWebView2ProcessExtendedInfo.AssociatedFrameInfos Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processextendedinfo?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#associatedframeinfos)
    * [CoreWebView2ProcessExtendedInfo.ProcessInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processextendedinfo?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#processinfo)

* `CoreWebView2` Class:
    * [CoreWebView2.FrameId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#frameid)

* `CoreWebView2Frame` Class:
    * [CoreWebView2Frame.FrameId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#frameid)

* `CoreWebView2FrameInfo` Class:
    * [CoreWebView2FrameInfo.FrameId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frameinfo?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#frameid)
    * [CoreWebView2FrameInfo.FrameKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frameinfo?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#framekind)
    * [CoreWebView2FrameInfo.ParentFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frameinfo?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#parentframeinfo)

* [CoreWebView2FrameKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2framekind?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Environment13](/microsoft-edge/webview2/reference/win32/icorewebview2environment13?view=webview2-1.0.2357-prerelease&preserve-view=true)
    * [ICoreWebView2Environment13::GetProcessExtendedInfos](/microsoft-edge/webview2/reference/win32/icorewebview2environment13?view=webview2-1.0.2357-prerelease&preserve-view=true#getprocessextendedinfos)

* [ICoreWebView2GetProcessExtendedInfosCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2getprocessextendedinfoscompletedhandler?view=webview2-1.0.2357-prerelease&preserve-view=true)<!-- handler is Win32 only -->

* [ICoreWebView2ProcessExtendedInfo](/microsoft-edge/webview2/reference/win32/icorewebview2processextendedinfo?view=webview2-1.0.2357-prerelease&preserve-view=true)
    * [ICoreWebView2ProcessExtendedInfo::get_AssociatedFrameInfos](/microsoft-edge/webview2/reference/win32/icorewebview2processextendedinfo?view=webview2-1.0.2357-prerelease&preserve-view=true#get_associatedframeinfos)<!--no put-->
    * [ICoreWebView2ProcessExtendedInfo::get_ProcessInfo](/microsoft-edge/webview2/reference/win32/icorewebview2processextendedinfo?view=webview2-1.0.2357-prerelease&preserve-view=true#get_processinfo)<!--no put-->

* [ICoreWebView2ProcessExtendedInfoCollection](/microsoft-edge/webview2/reference/win32/icorewebview2processextendedinfocollection?view=webview2-1.0.2357-prerelease&preserve-view=true)<!-- collection is Win32 only -->

* [ICoreWebView2_20](/microsoft-edge/webview2/reference/win32/icorewebview2_20?view=webview2-1.0.2357-prerelease&preserve-view=true)
    * [ICoreWebView2_20::get_FrameId](/microsoft-edge/webview2/reference/win32/icorewebview2_20?view=view=webview2-1.0.2357-prerelease&preserve-view=true#get_frameid)<!--no put-->

* [ICoreWebView2Frame5](/microsoft-edge/webview2/reference/win32/icorewebview2frame5?view=webview2-1.0.2357-prerelease&preserve-view=true)
    * [ICoreWebView2Frame5::get_FrameId](/microsoft-edge/webview2/reference/win32/icorewebview2frame5?view=webview2-1.0.2357-prerelease&preserve-view=true#get_frameid)<!--no put-->

* [ICoreWebView2FrameInfo2](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfo2?view=webview2-1.0.2357-prerelease&preserve-view=true)
    * [ICoreWebView2FrameInfo2::get_FrameId](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfo2?view=webview2-1.0.2357-prerelease&preserve-view=true#get_frameid)<!--no put-->
    * [ICoreWebView2FrameInfo2::get_FrameKind](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfo2?view=webview2-1.0.2357-prerelease&preserve-view=true#get_framekind)<!--no put-->
    * [ICoreWebView2FrameInfo2::get_ParentFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfo2?view=webview2-1.0.2357-prerelease&preserve-view=true#get_parentframeinfo)<!--no put-->

* [COREWEBVIEW2_FRAME_KIND Enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2357-prerelease&preserve-view=true#corewebview2_frame_kind)

---


<!-- ------------------------------ -->
* `ExecuteScriptWithResult` provides exception information if the script failed.  `TryGetResultAsString` gets the script execution result as a string rather than as JSON, to make it more convenient to interact with string results:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
    * [CoreWebView2.ExecuteScriptWithResultAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.executescriptwithresultasync?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* [CoreWebView2ExecuteScriptResult Class](/dotnet/api/microsoft.web.webview2.core.corewebview2executescriptresult?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2ExecuteScriptResult.Exception Property](/dotnet/api/microsoft.web.webview2.core.corewebview2executescriptresult.exception?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2ExecuteScriptResult.ResultAsJson Property](/dotnet/api/microsoft.web.webview2.core.corewebview2executescriptresult.resultasjson?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2ExecuteScriptResult.Succeeded Property](/dotnet/api/microsoft.web.webview2.core.corewebview2executescriptresult.succeeded?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2ExecuteScriptResult.TryGetResultAsString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2executescriptresult.trygetresultasstring?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* [CoreWebView2ScriptException Class](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2ScriptException.ColumnNumber Property](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception.columnnumber?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2ScriptException.LineNumber Property](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception.linenumber?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2ScriptException.Message Property](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception.message?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2ScriptException.Name Property](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception.name?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2ScriptException.ToJson Property](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception.tojson?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
    * [CoreWebView2.ExecuteScriptWithResultAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#executescriptwithresultasync)

* [CoreWebView2ExecuteScriptResult Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2executescriptresult?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2ExecuteScriptResult.Exception Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2executescriptresult?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#exception)
    * [CoreWebView2ExecuteScriptResult.ResultAsJson Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2executescriptresult?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#resultasjson)
    * [CoreWebView2ExecuteScriptResult.Succeeded Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2executescriptresult?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#succeeded)
    * [CoreWebView2ExecuteScriptResult.TryGetResultAsString Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2executescriptresult?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#trygetresultasstring)

* [CoreWebView2ScriptException Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true)
    * [CoreWebView2ScriptException.ColumnNumber Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#columnnumber)
    * [CoreWebView2ScriptException.LineNumber Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#linenumber)
    * [CoreWebView2ScriptException.Message Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#message)
    * [CoreWebView2ScriptException.Name Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#name)
    * [CoreWebView2ScriptException.ToJson Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#tojson)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_21](/microsoft-edge/webview2/reference/win32/icorewebview2_21?view=webview2-1.0.2357-prerelease&preserve-view=true)
    * [ICoreWebView2_21::ExecuteScriptWithResult](/microsoft-edge/webview2/reference/win32/icorewebview2_21?view=webview2-1.0.2357-prerelease&preserve-view=true#executescriptwithresult)

* [ICoreWebView2ExecuteScriptResult](/microsoft-edge/webview2/reference/win32/icorewebview2executescriptresult?view=webview2-1.0.2357-prerelease&preserve-view=true)
    * [ICoreWebView2ExecuteScriptResult::get_Exception](/microsoft-edge/webview2/reference/win32/icorewebview2executescriptresult?view=webview2-1.0.2357-prerelease&preserve-view=true#get_exception)<!--no put-->
    * [ICoreWebView2ExecuteScriptResult::get_ResultAsJson](/microsoft-edge/webview2/reference/win32/icorewebview2executescriptresult?view=webview2-1.0.2357-prerelease&preserve-view=true#get_resultasjson)<!--no put-->
    * [ICoreWebView2ExecuteScriptResult::get_Succeeded](/microsoft-edge/webview2/reference/win32/icorewebview2executescriptresult?view=webview2-1.0.2357-prerelease&preserve-view=true#get_succeeded)<!--no put-->
    * [ICoreWebView2ExecuteScriptResult::TryGetResultAsString](/microsoft-edge/webview2/reference/win32/icorewebview2executescriptresult?view=webview2-1.0.2357-prerelease&preserve-view=true#trygetresultasstring)

* [ICoreWebView2ExecuteScriptWithResultCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2executescriptwithresultcompletedhandler?view=webview2-1.0.2357-prerelease&preserve-view=true)<!-- handler is Win32-only -->

* [ICoreWebView2ScriptException](/microsoft-edge/webview2/reference/win32/icorewebview2scriptexception?view=webview2-1.0.2357-prerelease&preserve-view=true)
    * [ICoreWebView2ScriptException::get_ColumnNumber](/microsoft-edge/webview2/reference/win32/icorewebview2scriptexception?view=webview2-1.0.2357-prerelease&preserve-view=true#get_columnnumber)<!--no put-->
    * [ICoreWebView2ScriptException::get_LineNumber](/microsoft-edge/webview2/reference/win32/icorewebview2scriptexception?view=webview2-1.0.2357-prerelease&preserve-view=true#get_linenumber)<!--no put-->
    * [ICoreWebView2ScriptException::get_Message](/microsoft-edge/webview2/reference/win32/icorewebview2scriptexception?view=webview2-1.0.2357-prerelease&preserve-view=true#get_message)<!--no put-->
    * [ICoreWebView2ScriptException::get_Name](/microsoft-edge/webview2/reference/win32/icorewebview2scriptexception?view=webview2-1.0.2357-prerelease&preserve-view=true#get_name)<!--no put-->
    * [ICoreWebView2ScriptException::get_ToJson](/microsoft-edge/webview2/reference/win32/icorewebview2scriptexception?view=webview2-1.0.2357-prerelease&preserve-view=true#get_tojson)<!--no put-->

---


<!-- ------------------------------ -->
* `CreateFromComICoreWebView2` wraps an existing `ICoreWebView2` object in a `CoreWebView2` instance, to allow .NET devs to interact with an control that was created in C++.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
    * [CoreWebView2.CreateFromComICoreWebView2 Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.createfromcomicorewebview2?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

N/A

##### [Win32/C++](#tab/win32cpp)

N/A

---


<!-- ------------------------------ -->
* To support browser extensions in WebView2, added `GetBrowserExtensions` for WinRT:

##### [.NET/C#](#tab/dotnetcsharp)

N/A

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
    * [CoreWebView2Profile.GetBrowserExtensionsAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#getbrowserextensionsasync)

##### [Win32/C++](#tab/win32cpp)

N/A

---


<!-- ------------------------------ -->
*  Added support for `WebResourceRequested` for workers, which allows setting filters in order to receive `WebResourceRequested` events for service workers, shared workers, and different origin iframes.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.AddWebResourceRequestedFilter Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
   * [CoreWebView2.RemoveWebResourceRequestedFilter Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.removewebresourcerequestedfilter?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* `CoreWebView2WebResourceRequestedEventArgs` Class:
   * [CoreWebView2WebResourceRequestedEventArgs.RequestedSourceKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestedeventargs.requestedsourcekind?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

* [CoreWebView2WebResourceRequestSourceKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestsourcekinds?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.AddWebResourceRequestedFilter Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#addwebresourcerequestedfilter)
   * [CoreWebView2.RemoveWebResourceRequestedFilter Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#removewebresourcerequestedfilter)

* `CoreWebView2WebResourceRequestedEventArgs` Class:
   * [CoreWebView2WebResourceRequestedEventArgs.RequestedSourceKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestedeventargs?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true#requestedsourcekind)

* [CoreWebView2WebResourceRequestSourceKinds Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestsourcekinds?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_22](/microsoft-edge/webview2/reference/win32/icorewebview2_22?view=webview2-1.0.2357-prerelease&preserve-view=true)
    * [ICoreWebView2_22::AddWebResourceRequestedFilterWithRequestSourceKinds](/microsoft-edge/webview2/reference/win32/icorewebview2_22?view=webview2-1.0.2357-prerelease&preserve-view=true#addwebresourcerequestedfilterwithrequestsourcekinds)
    * [ICoreWebView2_22::RemoveWebResourceRequestedFilterWithRequestSourceKinds](/microsoft-edge/webview2/reference/win32/icorewebview2_22?view=webview2-1.0.2357-prerelease&preserve-view=true#removewebresourcerequestedfilterwithrequestsourcekinds)

* [ICoreWebView2WebResourceRequestedEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventargs2?view=webview2-1.0.2357-prerelease&preserve-view=true)
    * [ICoreWebView2WebResourceRequestedEventArgs2::get_RequestedSourceKind](/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventargs2?view=webview2-1.0.2357-prerelease&preserve-view=true#get_requestedsourcekind)

* [COREWEBVIEW2_WEB_RESOURCE_REQUEST_SOURCE_KINDS enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2357-prerelease&preserve-view=true#corewebview2_web_resource_request_source_kinds)

---


<!-- ------------------------------ -->
#### Bug fixes

###### Runtime-only

* Fixed a bug where closing a WebView control that has an embedded PDF viewer could lead to a crash.  (Runtime-only)  ([Issue #3832](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3832))

* Fixed issues with stacking of child-process taskbar icons.  (Runtime-only)  ([Issue #3245](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3245))

* Fixed a bug that sent an unnecessary network request for Edge Cloud Config Service.  (Runtime-only)  ([Issue #4180](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4180))

* Updated the behavior of the `app-region` CSS property so that changes to its value trigger a page re-layout.  (Runtime-only)

* Fixed an issue where `put_AreBrowserAcceleratorKeysEnabled` wasn't able to update settings for WebView2 when no `AcceleratorKeyPressed` event handler is registered. (Runtime-only)  ([Issue #4278](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4278))

###### SDK-only

* Fixed an issue where the WebView2 control in .NET was failing to find the `WebView2Loader.dll` on UNC paths.  (SDK-only)  ([Issue #4081](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4081))

* Fixed some issues causing instances of `InvalidOperationException` in .NET controls, that weren't helpful to developers.  (SDK-only)  ([Issue #4272](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4272))

<!-- end of Jan 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2210.55

Release Date: December 11, 2023

[NuGet package for WebView2 SDK 1.0.2210.55](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2210.55)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 120.0.2210.55 or higher.


<!-- ------------------------------ -->
#### Breaking changes

> [!IMPORTANT]
> **Breaking Change**: If you're developing an unpackaged Win32 app using Fixed Version Runtime v120 or above and targeting Windows 10 devices, you need to run a couple of ACL shell commands (`icacls`), to avoid crashing, because of a new security feature implemented in WebView2.  See [[Breaking Change] Unpackaged Win32 app using Fixed Version v120+ on Win10 need ACL](https://github.com/MicrosoftEdge/WebView2Announcements/issues/82).  The fix is in the article _Distribute your app and the WebView2 Runtime_, section [Details about the Fixed Version runtime distribution mode](../concepts/distribution.md#details-about-the-fixed-version-runtime-distribution-mode), step "On Windows 10 devices, starting with Fixed Version 120, developers of unpackaged Win32 applications using Fixed Version are required to run the following commands."


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ------------------------------ -->
* Support for browser extensions in WebView2:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2BrowserExtension Class](/dotnet/api/microsoft.web.webview2.core.corewebview2browserextension?view=webview2-dotnet-1.0.2210.55&preserve-view=true)
   * [CoreWebView2BrowserExtension.Id Property](/dotnet/api/microsoft.web.webview2.core.corewebview2browserextension.id?view=webview2-dotnet-1.0.2210.55&preserve-view=true)
   * [CoreWebView2BrowserExtension.IsEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2browserextension.isenabled?view=webview2-dotnet-1.0.2210.55&preserve-view=true)
   * [CoreWebView2BrowserExtension.Name Property](/dotnet/api/microsoft.web.webview2.core.corewebview2browserextension.name?view=webview2-dotnet-1.0.2210.55&preserve-view=true)
   * [CoreWebView2BrowserExtension.EnableAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2browserextension.enableasync?view=webview2-dotnet-1.0.2210.55&preserve-view=true)
   * [CoreWebView2BrowserExtension.RemoveAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2browserextension.removeasync?view=webview2-dotnet-1.0.2210.55&preserve-view=true)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.AreBrowserExtensionsEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.arebrowserextensionsenabled?view=webview2-dotnet-1.0.2210.55&preserve-view=true)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AddBrowserExtensionAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.addbrowserextensionasync?view=webview2-dotnet-1.0.2210.55&preserve-view=true)
   * [CoreWebView2Profile.GetBrowserExtensionsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.getbrowserextensionsasync?view=webview2-dotnet-1.0.2210.55&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2BrowserExtension Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserextension?view=webview2-winrt-1.0.2210.55&preserve-view=true)
   * [CoreWebView2BrowserExtension.Id Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserextension?view=webview2-winrt-1.0.2210.55&preserve-view=true#id)
   * [CoreWebView2BrowserExtension.IsEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserextension?view=webview2-winrt-1.0.2210.55&preserve-view=true#isenabled)
   * [CoreWebView2BrowserExtension.Name Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserextension?view=webview2-winrt-1.0.2210.55&preserve-view=true#name)
   * [CoreWebView2BrowserExtension.EnableAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserextension?view=webview2-winrt-1.0.2210.55&preserve-view=true#enableasync)
   * [CoreWebView2BrowserExtension.RemoveAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserextension?view=webview2-winrt-1.0.2210.55&preserve-view=true#removeasync)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.AreBrowserExtensionsEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2210.55&preserve-view=true#arebrowserextensionsenabled)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AddBrowserExtensionAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.2210.55&preserve-view=true#addbrowserextensionasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2BrowserExtension](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2210.55&preserve-view=true)
    * [ICoreWebView2BrowserExtension::Enable](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2210.55&preserve-view=true#enable)
    * [ICoreWebView2BrowserExtension::get_Id](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2210.55&preserve-view=true#get_id)<!-- no put -->
    * [ICoreWebView2BrowserExtension::get_IsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2210.55&preserve-view=true#get_isenabled)<!-- no put -->
    * [ICoreWebView2BrowserExtension::get_Name](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2210.55&preserve-view=true#get_name)<!-- no put -->
    * [ICoreWebView2BrowserExtension::Remove](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2210.55&preserve-view=true#remove)

* [ICoreWebView2BrowserExtensionEnableCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionenablecompletedhandler?view=webview2-1.0.2210.55&preserve-view=true)<!-- handler: Win32-only -->

* [ICoreWebView2BrowserExtensionRemoveCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionremovecompletedhandler?view=webview2-1.0.2210.55&preserve-view=true)<!-- handler: Win32-only -->

* [ICoreWebView2BrowserExtensionList](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionlist?view=webview2-1.0.2210.55&preserve-view=true)<!-- list: Win32-only -->
    * [ICoreWebView2BrowserExtensionList::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionlist?view=webview2-1.0.2210.55&preserve-view=true#get_count)
    * [ICoreWebView2BrowserExtensionList::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionlist?view=webview2-1.0.2210.55&preserve-view=true#getvalueatindex)

* [ICoreWebView2EnvironmentOptions6](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions6?view=webview2-1.0.2210.55&preserve-view=true)
    * [ICoreWebView2EnvironmentOptions6::get_AreBrowserExtensionsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions6?view=webview2-1.0.2210.55&preserve-view=true#get_arebrowserextensionsenabled)
    * [ICoreWebView2EnvironmentOptions6::put_AreBrowserExtensionsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions6?view=webview2-1.0.2210.55&preserve-view=true#put_arebrowserextensionsenabled)

* [ICoreWebView2Profile7](/microsoft-edge/webview2/reference/win32/icorewebview2profile7?view=webview2-1.0.2210.55&preserve-view=true)
    * [ICoreWebView2Profile7::AddBrowserExtension](/microsoft-edge/webview2/reference/win32/icorewebview2profile7?view=webview2-1.0.2210.55&preserve-view=true#addbrowserextension)
    * [ICoreWebView2Profile7::GetBrowserExtensions](/microsoft-edge/webview2/reference/win32/icorewebview2profile7?view=webview2-1.0.2210.55&preserve-view=true#getbrowserextensions)

* [ICoreWebView2ProfileAddBrowserExtensionCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2profileaddbrowserextensioncompletedhandler?view=webview2-1.0.2210.55&preserve-view=true)<!-- handler: Win32-only -->

* [ICoreWebView2ProfileGetBrowserExtensionsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2profilegetbrowserextensionscompletedhandler?view=webview2-1.0.2210.55&preserve-view=true)<!-- handler: Win32-only -->

---


<!-- ------------------------------ -->
* The Frame Process Info API, including `GetProcessExtendedInfos`, provides a snapshot collection of all frames that are actively running in the associated renderer process. This API enables the host application to detect which part of WebView2 is consuming resources such as memory or CPU usage:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Environment` Class:
    * [CoreWebView2Environment.GetProcessExtendedInfosAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.getprocessextendedinfosasync?view=webview2-dotnet-1.0.2210.55&preserve-view=true)

* `CoreWebView2ProcessExtendedInfo` Class:
    * [CoreWebView2ProcessExtendedInfo.AssociatedFrameInfos Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processextendedinfo.associatedframeinfos?view=webview2-dotnet-1.0.2210.55&preserve-view=true)
    * [CoreWebView2ProcessExtendedInfo.ProcessInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processextendedinfo.processinfo?view=webview2-dotnet-1.0.2210.55&preserve-view=true)

* `CoreWebView2` Class:
    * [CoreWebView2.FrameId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.frameid?view=webview2-dotnet-1.0.2210.55&preserve-view=true)

* `CoreWebView2Frame` Class:
    * [CoreWebView2Frame.FrameId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.frameid?view=webview2-dotnet-1.0.2210.55&preserve-view=true)

* `CoreWebView2FrameInfo` Class:
    * [CoreWebView2FrameInfo.FrameId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2frameinfo.frameid?view=webview2-dotnet-1.0.2210.55&preserve-view=true)
    * [CoreWebView2FrameInfo.FrameKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2frameinfo.framekind?view=webview2-dotnet-1.0.2210.55&preserve-view=true)
    * [CoreWebView2FrameInfo.ParentFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2frameinfo.parentframeinfo?view=webview2-dotnet-1.0.2210.55&preserve-view=true)

* [CoreWebView2FrameKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2framekind?view=webview2-dotnet-1.0.2210.55&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Environment` Class:
    * [CoreWebView2Environment.GetProcessExtendedInfosAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2210.55&preserve-view=true#getprocessextendedinfosasync)

* `CoreWebView2ProcessExtendedInfo` Class:
    * [CoreWebView2ProcessExtendedInfo.AssociatedFrameInfos Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processextendedinfo?view=webview2-winrt-1.0.2210.55&preserve-view=true#associatedframeinfos)
    * [CoreWebView2ProcessExtendedInfo.ProcessInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processextendedinfo?view=webview2-winrt-1.0.2210.55&preserve-view=true#processinfo)

* `CoreWebView2` Class:
    * [CoreWebView2.FrameId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2210.55&preserve-view=true#frameid)

* `CoreWebView2Frame` Class:
    * [CoreWebView2Frame.FrameId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.2210.55&preserve-view=true#frameid)

* `CoreWebView2FrameInfo` Class:
    * [CoreWebView2FrameInfo.FrameId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frameinfo?view=webview2-winrt-1.0.2210.55&preserve-view=true#frameid)
    * [CoreWebView2FrameInfo.FrameKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frameinfo?view=webview2-winrt-1.0.2210.55&preserve-view=true#framekind)
    * [CoreWebView2FrameInfo.ParentFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frameinfo?view=webview2-winrt-1.0.2210.55&preserve-view=true#parentframeinfo)

* [CoreWebView2FrameKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2framekind?view=webview2-winrt-1.0.2210.55&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Environment13](/microsoft-edge/webview2/reference/win32/icorewebview2environment13?view=webview2-1.0.2210.55&preserve-view=true)
    * [ICoreWebView2Environment13::GetProcessExtendedInfos](/microsoft-edge/webview2/reference/win32/icorewebview2environment13?view=webview2-1.0.2210.55&preserve-view=true#getprocessextendedinfos)

* [ICoreWebView2GetProcessExtendedInfosCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2getprocessextendedinfoscompletedhandler?view=webview2-1.0.2210.55&preserve-view=true)<!-- handler is Win32-only -->

* [ICoreWebView2ProcessExtendedInfo](/microsoft-edge/webview2/reference/win32/icorewebview2processextendedinfo?view=webview2-1.0.2210.55&preserve-view=true)
    * [ICoreWebView2ProcessExtendedInfo::get_AssociatedFrameInfos](/microsoft-edge/webview2/reference/win32/icorewebview2processextendedinfo?view=webview2-1.0.2210.55&preserve-view=true#get_associatedframeinfos)
    * [ICoreWebView2ProcessExtendedInfo::get_ProcessInfo](/microsoft-edge/webview2/reference/win32/icorewebview2processextendedinfo?view=webview2-1.0.2210.55&preserve-view=true#get_processinfo)

* [ICoreWebView2ProcessExtendedInfoCollection](/microsoft-edge/webview2/reference/win32/icorewebview2processextendedinfocollection?view=webview2-1.0.2210.55&preserve-view=true)<!-- collection is Win32-only -->

* [ICoreWebView2_20](/microsoft-edge/webview2/reference/win32/icorewebview2_20?view=webview2-1.0.2210.55&preserve-view=true)
   * [ICoreWebView2_20::get_FrameId](/microsoft-edge/webview2/reference/win32/icorewebview2_20?view=webview2-1.0.2210.55&preserve-view=true#get_frameid)

* [ICoreWebView2Frame5](/microsoft-edge/webview2/reference/win32/icorewebview2frame5?view=webview2-1.0.2210.55&preserve-view=true)
    * [ICoreWebView2Frame5::get_FrameId](/microsoft-edge/webview2/reference/win32/icorewebview2frame5?view=webview2-1.0.2210.55&preserve-view=true#get_frameid)

* [ICoreWebView2FrameInfo2](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfo2?view=webview2-1.0.2210.55&preserve-view=true)
    * [ICoreWebView2FrameInfo2::get_FrameId](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfo2?view=webview2-1.0.2210.55&preserve-view=true#get_frameid)
    * [ICoreWebView2FrameInfo2::get_FrameKind](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfo2?view=webview2-1.0.2210.55&preserve-view=true#get_framekind)
    * [ICoreWebView2FrameInfo2::get_ParentFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2frameinfo2?view=webview2-1.0.2210.55&preserve-view=true#get_parentframeinfo)

* [COREWEBVIEW2_FRAME_KIND Enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2210.55&preserve-view=true#corewebview2_frame_kind)

---


<!-- ------------------------------ -->
* `ICoreWebView2AcceleratorKeyPressedEventArgs` has a new `IsBrowserAcceleratorKeyEnabled` property to allow developers to control whether the browser handles accelerator keys (shortcut keys), such as **Ctrl+P** or **F3**:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2AcceleratorKeyPressedEventArgs` Class:
    * [CoreWebView2AcceleratorKeyPressedEventArgs.IsBrowserAcceleratorKeyEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2acceleratorkeypressedeventargs.isbrowseracceleratorkeyenabled?view=webview2-dotnet-1.0.2210.55&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2AcceleratorKeyPressedEventArgs` Class:
    * [CoreWebView2AcceleratorKeyPressedEventArgs.IsBrowserAcceleratorKeyEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2acceleratorkeypressedeventargs?view=webview2-winrt-1.0.2210.55&preserve-view=true#isbrowseracceleratorkeyenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2AcceleratorKeyPressedEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2acceleratorkeypressedeventargs2?view=webview2-1.0.2210.55&preserve-view=true)
    * [ICoreWebView2AcceleratorKeyPressedEventArgs2::get_IsBrowserAcceleratorKeyEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2acceleratorkeypressedeventargs2?view=webview2-1.0.2210.55&preserve-view=true#get_isbrowseracceleratorkeyenabled)
    * [ICoreWebView2AcceleratorKeyPressedEventArgs2::put_IsBrowserAcceleratorKeyEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2acceleratorkeypressedeventargs2?view=webview2-1.0.2210.55&preserve-view=true#put_isbrowseracceleratorkeyenabled)

---


<!-- ------------------------------ -->
* Added support for managing profile deletion:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile` Class:
    * [CoreWebView2Profile.Delete Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.delete?view=webview2-dotnet-1.0.2210.55&preserve-view=true)
    * [CoreWebView2Profile.Deleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.deleted?view=webview2-dotnet-1.0.2210.55&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
    * [CoreWebView2Profile.Delete Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.2210.55&preserve-view=true#delete)
    * [CoreWebView2Profile.Deleted Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.2210.55&preserve-view=true#deleted)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Profile8](/microsoft-edge/webview2/reference/win32/icorewebview2profile8?view=webview2-1.0.2210.55&preserve-view=true)
    * [ICoreWebView2Profile8::add_Deleted](/microsoft-edge/webview2/reference/win32/icorewebview2profile8?view=webview2-1.0.2210.55&preserve-view=true#add_deleted)
    * [ICoreWebView2Profile8::Delete](/microsoft-edge/webview2/reference/win32/icorewebview2profile8?view=webview2-1.0.2210.55&preserve-view=true#delete)
    * [ICoreWebView2Profile8::remove_Deleted](/microsoft-edge/webview2/reference/win32/icorewebview2profile8?view=webview2-1.0.2210.55&preserve-view=true#remove_deleted)

* [ICoreWebView2ProfileDeletedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2profiledeletedeventhandler?view=webview2-1.0.2210.55&preserve-view=true)<!-- handler is Win32-only -->

---


<!-- ------------------------------ -->
#### Bug fixes

* Added support for promise cancellation on host objects' async methods in WinRT JS projection.  For information about `AddHostObjectToScript`, see [Call native-side WinRT code from web-side code](../how-to/winrt-from-js.md).  (Runtime and SDK)

* Disabled automatic HTTPS upgrades for WebView2 API navigations.  (Runtime-only)  ([Issue #4104](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4104))

<!-- end of Dec 2023 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2151.40

Release Date: November 6, 2023

[NuGet package for WebView2 SDK 1.0.2151.40](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2151.40)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 119.0.2151.40 or higher.


<!-- ------------------------------ -->
#### General Availability

> [!IMPORTANT]
> **Announcement**: Xbox WebView2 SDK is now Generally Available (GA) and is available on Xbox October 2310 version (231018-2200). For more details, see [WebView2 for Xbox announcement](https://blogs.windows.com/msedgedev/2023/11/01/webview2-for-xbox-announcement/).


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

* Added source frame info to the `NewWindowRequested` event arguments, to identify the source of the request:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2NewWindowRequestedEventArgs` Class:
    * [CoreWebView2NewWindowRequestedEventArgs.OriginalSourceFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2newwindowrequestedeventargs.originalsourceframeinfo?view=webview2-dotnet-1.0.2151.40&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2NewWindowRequestedEventArgs` Class:
    * [CoreWebView2NewWindowRequestedEventArgs.OriginalSourceFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2newwindowrequestedeventargs?view=webview2-winrt-1.0.2151.40&preserve-view=true#originalsourceframeinfo)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2NewWindowRequestedEventArgs3](/microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs3?view=webview2-1.0.2151.40&preserve-view=true)
    * [ICoreWebView2NewWindowRequestedEventArgs3::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs3?view=webview2-1.0.2151.40&preserve-view=true#get_originalsourceframeinfo)<!--no put-->

---

* For WinRT, options have been added to manage custom scheme registration when creating a `CoreWebView2Environment`:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2CustomSchemeRegistration` Class:
    * [CoreWebView2CustomSchemeRegistration.AllowedOrigins Property](/dotnet/api/microsoft.web.webview2.core.corewebview2customschemeregistration.allowedorigins?view=webview2-dotnet-1.0.2151.40&preserve-view=true)
    * [CoreWebView2CustomSchemeRegistration.SchemeName Property](/dotnet/api/microsoft.web.webview2.core.corewebview2customschemeregistration.schemename?view=webview2-dotnet-1.0.2151.40&preserve-view=true)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.CustomSchemeRegistrations Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.customschemeregistrations?view=webview2-dotnet-1.0.2151.40&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2CustomSchemeRegistration` Class:
    * [CoreWebView2CustomSchemeRegistration.AllowedOrigins Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2customschemeregistration?view=webview2-winrt-1.0.2151.40&preserve-view=true#allowedorigins)
    * [CoreWebView2CustomSchemeRegistration.SchemeName Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2customschemeregistration?view=webview2-winrt-1.0.2151.40&preserve-view=true#schemename)

* `CoreWebView2EnvironmentOptions` Class:
    * [CoreWebView2EnvironmentOptions.CustomSchemeRegistrations Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2151.40&preserve-view=true#customschemeregistrations)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2CustomSchemeRegistration`:
    * [ICoreWebView2CustomSchemeRegistration::get_SchemeName](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.2151.40&preserve-view=true#get_schemename)<!--no put-->
    * [ICoreWebView2CustomSchemeRegistration::GetAllowedOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.2151.40&preserve-view=true#getallowedorigins)
    * [ICoreWebView2CustomSchemeRegistration::SetAllowedOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.2151.40&preserve-view=true#setallowedorigins)

* [ICoreWebView2EnvironmentOptions4](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.2151.40&preserve-view=true)
   * [ICoreWebView2EnvironmentOptions4::GetCustomSchemeRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.2151.40&preserve-view=true#getcustomschemeregistrations)
   * [ICoreWebView2EnvironmentOptions4::SetCustomSchemeRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.2151.40&preserve-view=true#setcustomschemeregistrations)

---


<!-- ------------------------------ -->
#### Bug fixes

* Fixed a reliability issue where multiple WebView creations could lead to a crash.  (Runtime-only)  ([Issue #3793](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3793))

<!-- end of Nov 2023 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2194-prerelease

Release Date: November 6, 2023

[NuGet package for WebView2 SDK 1.0.2194-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2194-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 120.0.2194.0 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

* Support for browser extensions in WebView2:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2BrowserExtension Class](/dotnet/api/microsoft.web.webview2.core.corewebview2browserextension?view=webview2-dotnet-1.0.2194-prerelease&preserve-view=true)
* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.AreBrowserExtensionsEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.arebrowserextensionsenabled?view=webview2-dotnet-1.0.2194-prerelease&preserve-view=true)
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AddBrowserExtensionAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.addbrowserextensionasync?view=webview2-dotnet-1.0.2194-prerelease&preserve-view=true)
   * [CoreWebView2Profile.GetBrowserExtensionsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.getbrowserextensionsasync?view=webview2-dotnet-1.0.2194-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2BrowserExtension Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserextension?view=webview2-winrt-1.0.2194-prerelease&preserve-view=true)
* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.AreBrowserExtensionsEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2194-prerelease&preserve-view=true#arebrowserextensionsenabled)
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AddBrowserExtensionAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.2194-prerelease&preserve-view=true#addbrowserextensionasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2BrowserExtension](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2194-prerelease&preserve-view=true)
    * [ICoreWebView2BrowserExtension::get_Id](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2194-prerelease&preserve-view=true#get_id)
    * [ICoreWebView2BrowserExtension::get_Name](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2194-prerelease&preserve-view=true#get_name)
    * [ICoreWebView2BrowserExtension::Remove](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2194-prerelease&preserve-view=true#remove)
    * [ICoreWebView2BrowserExtension::get_IsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2194-prerelease&preserve-view=true#get_isenabled)
    * [ICoreWebView2BrowserExtension::Enable](/microsoft-edge/webview2/reference/win32/icorewebview2browserextension?view=webview2-1.0.2194-prerelease&preserve-view=true#enable)
* [ICoreWebView2BrowserExtensionEnableCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionenablecompletedhandler?view=webview2-1.0.2194-prerelease&preserve-view=true)
* [ICoreWebView2BrowserExtensionRemoveCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionremovecompletedhandler?view=webview2-1.0.2194-prerelease&preserve-view=true)
* [ICoreWebView2BrowserExtensionList](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionlist?view=webview2-1.0.2194-prerelease&preserve-view=true)
    * [ICoreWebView2BrowserExtensionList::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionlist?view=webview2-1.0.2194-prerelease&preserve-view=true#get_count)
    * [ICoreWebView2BrowserExtensionList::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2browserextensionlist?view=webview2-1.0.2194-prerelease&preserve-view=true#getvalueatindex)
* [ICoreWebView2EnvironmentOptions6](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions6?view=webview2-1.0.2194-prerelease&preserve-view=true)
    * [ICoreWebView2EnvironmentOptions6::get_AreBrowserExtensionsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions6?view=webview2-1.0.2194-prerelease&preserve-view=true#get_arebrowserextensionsenabled)
    * [ICoreWebView2EnvironmentOptions6::put_AreBrowserExtensionsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions6?view=webview2-1.0.2194-prerelease&preserve-view=true#put_arebrowserextensionsenabled)
* [ICoreWebView2Profile7](/microsoft-edge/webview2/reference/win32/icorewebview2profile7?view=webview2-1.0.2194-prerelease&preserve-view=true)
    * [ICoreWebView2Profile7::AddBrowserExtension](/microsoft-edge/webview2/reference/win32/icorewebview2profile7?view=webview2-1.0.2194-prerelease&preserve-view=true#addbrowserextension)
    * [ICoreWebView2Profile7::GetBrowserExtensions](/microsoft-edge/webview2/reference/win32/icorewebview2profile7?view=webview2-1.0.2194-prerelease&preserve-view=true#getbrowserextensions)
* [ICoreWebView2ProfileAddBrowserExtensionCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2profileaddbrowserextensioncompletedhandler?view=webview2-1.0.2194-prerelease&preserve-view=true)
* [ICoreWebView2ProfileGetBrowserExtensionsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2profilegetbrowserextensionscompletedhandler?view=webview2-1.0.2194-prerelease&preserve-view=true)

---


<!-- ------------------------------ -->
#### Bug fixes

* Fixed an issue where WebView2 would sometimes render blurry content or no content after changing monitor scale or switching between RDP and docking modes.  (Runtime-only)
* Fixed an issue in `TextServicesFoundation` causing a crash when a WebView2 instance was destroyed.  (Runtime-only)
* Fixes a memory leak in .NET when web messages are sent from WebView2, but aren't read from the application side.  (Runtime and SDK)  ([Issue #3794](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3794))
* Fixed an issue causing the `ScaleFactor` setting to not work properly for all WebView2 Print APIs.  (Runtime-only)  ([Issue #4082](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4082))

<!-- end of Nov 2023 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2088.41

Release Date: October 16, 2023

[NuGet package for WebView2 SDK 1.0.2088.41](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2088.41)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 118.0.2088.41 or higher.


<!-- ------------------------------ -->
#### Promotions

No additional APIs have been promoted to Stable and added in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

* Fixed an issue causing some UWP apps to be unable to input text.  (Runtime-only)  ([Issue #3805](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3805))
* Fixed an initialization failure for apps that were using the Windows `PerProcessSystemDPIForceOff` compatibility setting.  (Runtime-only)  ([Issue #3692](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3692))
* Fixed a Dialog Position Offset bug in WebView2.  (Runtime-only)  ([Issue #3763](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3763))

<!-- end of Oct 2023 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2164-prerelease

Release Date: October 18, 2023

[NuGet package for WebView2 SDK 1.0.2164-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2164-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 120.0.2164.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
* Added the `FailureSourceModulePath` property to the `ProcessFailedEventArgs` type, to specify the full path of the module that caused the crash in cases of Windows code integrity failures - that is, when a process exited with `STATUS_INVALID_IMAGE_HASH`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class:
    * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.failuresourcemodulepath?view=webview2-dotnet-1.0.2164-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class:
    * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs?view=webview2-winrt-1.0.2164-prerelease&preserve-view=true#failuresourcemodulepath)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalProcessFailedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessfailedeventargs?view=webview2-1.0.2164-prerelease&preserve-view=true)
    * [ICoreWebView2ExperimentalProcessFailedEventArgs::get_FailureSourceModulePath](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessfailedeventargs?view=webview2-1.0.2164-prerelease&preserve-view=true#get_failuresourcemodulepath)

---


<!-- ------------------------------ -->
#### Bug fixes

* Added support for additional page settings (`PageRange` and `PagesPerSheet`) in the PrintToPDF API.  (Runtime-only)  ([Issue #3719](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3719))
* Navigation to an Extension Resource file was not handled correctly, and has now been fixed with the correct handling method.  (Runtime-only)  ([Issue #3728](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3728))
* Fixed an issue causing some UWP apps to be unable to input text.  (Runtime-only)  ([Issue #3805](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3805))
* Fixed an initialization failure for apps that were using the Windows `PerProcessSystemDPIForceOff` compatibility setting.  (Runtime-only)  ([Issue #3692](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3692))
* Removed monitors that were collecting data when the system default browser setting changes.  (Runtime-only)
* Fixed a Dialog Position Offset bug in WebView2.  (Runtime-only)  ([Issue #3763](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3763))
* Fixed a crash in the `NewWindowRequested` event if the `NewWindow` is set to `null`.  (Runtime-only)

<!-- end of Oct 2023 Prerelease SDK -->


<!-- ====================================================================== -->
## See also

* [About Release Notes for the WebView2 SDK](./about.md)
* [Archived Release Notes for the WebView2 SDK](./archive.md)
* [Overview of WebView2 features and APIs](../concepts/overview-features-apis.md) - outlines many of the APIs, by feature area, that are in Release SDK packages.
* [Contacting the Microsoft Edge WebView2 team](../contact.md)
