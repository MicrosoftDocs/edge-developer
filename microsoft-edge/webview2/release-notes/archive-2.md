---
title: Archived release notes 2 for the WebView2 SDK
description: Release notes for older releases of Microsoft Edge WebView2, covering new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 03/18/2026
---
# Archived release notes 2 for the WebView2 SDK
<!--
https://learn.microsoft.com/microsoft-edge/webview2/release-notes/archive

move sections older than 1 year from ./index.md to ./archive.md, & enter work item: update links in announcements
https://github.com/MicrosoftEdge/WebView2Announcements/issues?q=is%3Aissue%20state%3Aopen%20SDK%20Release

if change h2 headings pattern, enter work item: update links in announcements
-->

<!-- todo: update links in announcements -->

The following features and bug fixes are in the WebView2 Release SDK and Prerelease SDK, for SDKs over one year old.

<!-- sequence of entries matches [Microsoft.Web.WebView2](https://www.nuget.org/packages/Microsoft.Web.WebView2/) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2357-prerelease, for Runtime 122 (Jan. 30, 2024)

Release Date: Jan. 30, 2024

[NuGet package for WebView2 SDK 1.0.2357-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2357-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 122.0.2357.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

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
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


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


<!-- ---------- -->
###### Runtime-only

* Fixed a bug where closing a WebView control that has an embedded PDF viewer could lead to a crash.  (Runtime-only)  ([Issue #3832](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3832))

* Fixed issues with stacking of child-process taskbar icons.  (Runtime-only)  ([Issue #3245](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3245))

* Fixed a bug that sent an unnecessary network request for Edge Cloud Config Service.  (Runtime-only)  ([Issue #4180](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4180))

* Updated the behavior of the `app-region` CSS property so that changes to its value trigger a page re-layout.  (Runtime-only)

* Fixed an issue where `put_AreBrowserAcceleratorKeysEnabled` wasn't able to update settings for WebView2 when no `AcceleratorKeyPressed` event handler is registered. (Runtime-only)  ([Issue #4278](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4278))


<!-- ---------- -->
###### SDK-only

* Fixed an issue where the WebView2 control in .NET was failing to find the `WebView2Loader.dll` on UNC paths.  (SDK-only)  ([Issue #4081](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4081))

* Fixed some issues causing instances of `InvalidOperationException` in .NET controls, that weren't helpful to developers.  (SDK-only)  ([Issue #4272](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4272))

<!-- end of Prerelease SDK 1.0.2357-prerelease, for Runtime 122 (Jan. 30, 2024) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2277.86, for Runtime 121 (Feb. 5, 2024)

Release Date: Feb. 5, 2024

[NuGet package for WebView2 SDK 1.0.2277.86](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2277.86)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 121.0.2277.86 or higher.


<!-- ------------------------------ -->
#### Breaking changes


<!-- ---------- -->
###### Navigations to `about:blank` cancellable via `NavigationStarting` event

Navigations to `about:blank` are now cancellable via the `NavigationStarting` event.  To revert to the old behavior, disable the `msWebView2CancellableAboutNavigations` feature flag.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


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


<!-- ---------- -->
###### Runtime-only

* Ensured that the spellcheck language matches `put_Language` programmatically.  The customized context menu is also updated with correct spellchecks.  (Runtime-only)

* Fixed a bug that stopped raising the `NavigationCompleted` event for some websites that load AV1-encoded videos.  (Runtime-only)  ([Issue #3801](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3801))

* Fixed an issue where host-process COM resources would be released during WebView tear-down.  (Runtime-only)  ([Issue #4226](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4226))

* Fixed a bug that broke loading some social media apps such as Facebook, Twitter, and Linkedin.  This change is Runtime-specific.  (Runtime-only)  ([Issue #4281](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4281))

<!-- end of Release SDK 1.0.2277.86, for Runtime 121 (Feb. 5, 2024) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2210.55, for Runtime 120 (Dec. 11, 2023)

Release Date: Dec. 11, 2023

[NuGet package for WebView2 SDK 1.0.2210.55](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2210.55)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 120.0.2210.55 or higher.


<!-- ------------------------------ -->
#### Breaking changes


<!-- ---------- -->
###### Unpackaged Win32 app using Fixed Version 120+ on Windows 10

If you're developing an unpackaged Win32 app using Fixed Version Runtime v120 or above and targeting Windows 10 devices, you need to run a couple of ACL shell commands (`icacls`), to avoid crashing, because of a new security feature implemented in WebView2.  See [[Breaking Change] Unpackaged Win32 app using Fixed Version v120+ on Win10 need ACL](https://github.com/MicrosoftEdge/WebView2Announcements/issues/82).

The fix is in the article _Distribute your app and the WebView2 Runtime_, section [The Fixed Version runtime distribution mode](../concepts/distribution.md#the-fixed-version-runtime-distribution-mode), step "On Windows 10 devices, starting with Fixed Version 120, developers of unpackaged Win32 applications using Fixed Version are required to run the following commands."


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


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

<!-- end of Release SDK 1.0.2210.55, for Runtime 120 (Dec. 11, 2023) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2194-prerelease, for Runtime 120 (Nov. 6, 2023)

Release Date: Nov. 6, 2023

[NuGet package for WebView2 SDK 1.0.2194-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2194-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 120.0.2194.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.

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

<!-- end of Prerelease SDK 1.0.2194-prerelease, for Runtime 120 (Nov. 6, 2023) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2164-prerelease, for Runtime 120 (Oct. 18, 2023)

Release Date: Oct. 18, 2023

[NuGet package for WebView2 SDK 1.0.2164-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2164-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 120.0.2164.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

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

<!-- end of Prerelease SDK 1.0.2164-prerelease, for Runtime 120 (Oct. 18, 2023) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2151.40, for Runtime 119 (Nov. 6, 2023)

Release Date: Nov. 6, 2023

[NuGet package for WebView2 SDK 1.0.2151.40](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2151.40)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 119.0.2151.40 or higher.


<!-- ------------------------------ -->
#### General Availability

> [!IMPORTANT]
> **Announcement**: Xbox WebView2 SDK is now Generally Available (GA) and is available on Xbox Oct. 2310 version (231018-2200). For more details, see [WebView2 for Xbox announcement](https://blogs.windows.com/msedgedev/2023/11/01/webview2-for-xbox-announcement/).


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.

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

<!-- end of Release SDK 1.0.2151.40, for Runtime 119 (Nov. 6, 2023) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2106-prerelease, for Runtime 119 (Sep. 20, 2023)

Release Date: Sep. 20, 2023

[NuGet package for WebView2 SDK 1.0.2106-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2106-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 119.0.2106.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


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


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


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


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime

* Updated the Screen Capture UI to remove mention of tabs.  (Runtime-only)

* Fixed a bug where `PrintAsync` doesn't print using the default DPI on the printer.  (Runtime-only)  ([Issue #3709](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3709))

* Fix a WebView creation failure when app is running as a different admin user.  (Runtime-only)  ([Issue #3738](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3738))

* Fixed a bug that prevented setting an automation name for the WebView2 control on WinUI 3.  (Runtime-only)

* Enabled the new inter-process communication implementation for apps that are using very old SDKs.  (Runtime-only)


<!-- ---------- -->
###### SDK

* Fixed a bug where the `CoreWebView2EnvironmentOptions.Language` property doesn't change the `accept-language` HTTP header.  (SDK-only)  ([Issue #3635](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3635))

* Added support for longer runtime installation paths.  (SDK-only)

* The custom URI scheme registration API now works in WinRT.  For API names and links, in the **Promotions** section above, see the "custom scheme registration" entry.  (SDK-only)


<!-- ---------- -->
###### Runtime and SDK

* Fixed a bug where the Runtime exits unexpectedly when calling `SetPermissionState` with an invalid enum value.  (Runtime and SDK)

<!-- end of Prerelease SDK 1.0.2106-prerelease, for Runtime 119 (Sep. 20, 2023) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2088.41, for Runtime 118 (Oct. 16, 2023)

Release Date: Oct. 16, 2023

[NuGet package for WebView2 SDK 1.0.2088.41](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2088.41)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 118.0.2088.41 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

* Fixed an issue causing some UWP apps to be unable to input text.  (Runtime-only)  ([Issue #3805](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3805))

* Fixed an initialization failure for apps that were using the Windows `PerProcessSystemDPIForceOff` compatibility setting.  (Runtime-only)  ([Issue #3692](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3692))

* Fixed a Dialog Position Offset bug in WebView2.  (Runtime-only)  ([Issue #3763](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3763))

<!-- end of Release SDK 1.0.2088.41, for Runtime 118 (Oct. 16, 2023) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2065-prerelease, for Runtime 118 (Aug. 30, 2023)

Release Date: Aug. 30, 2023

[NuGet package for WebView2 SDK 1.0.2065-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2065-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 118.0.2065.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
* Added source frame info to `NewWindowRequested`, to support identifying the source:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2NewWindowRequestedEventArgs` Class
    * [CoreWebView2NewWindowRequestedEventArgs.OriginalSourceFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2newwindowrequestedeventargs.originalsourceframeinfo?view=webview2-dotnet-1.0.2065-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2NewWindowRequestedEventArgs` Class
    * [CoreWebView2NewWindowRequestedEventArgs.OriginalSourceFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2newwindowrequestedeventargs?view=webview2-winrt-1.0.2065-prerelease&preserve-view=true#originalsourceframeinfo)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalNewWindowRequestedEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnewwindowrequestedeventargs2?view=webview2-1.0.2065-prerelease&preserve-view=true)
    * [ICoreWebView2ExperimentalNewWindowRequestedEventArgs2::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnewwindowrequestedeventargs2?view=webview2-1.0.2065-prerelease&preserve-view=true#get_originalsourceframeinfo)

---


<!-- ------------------------------ -->
#### Bug fixes

* Disabled installing CRX in WebView2.  (Runtime-only)

* Fixed an initialization failure when the app has a DPI awareness compatibility setting applied.  (Runtime-only)  ([Issue #3008](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3008))

* Fixed a bug where visual hosted owned windows couldn't take character input.  (Runtime-only)

<!-- end of Prerelease SDK 1.0.2065-prerelease, for Runtime 118 (Aug. 30, 2023) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2045.28, for Runtime 117 (Sep. 18, 2023)

Release Date: Sep. 18, 2023

[NuGet package for WebView2 SDK 1.0.2045.28](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2045.28)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 117.0.2045.28 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

* Disabled the Mouse Gesture feature by default.  (Runtime-only)  ([Issue #3737](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3737))

* Fixed a bug where mouse wheel scrolling was intermittently broken for visual hosting.  (Runtime-only)

* Fixed a bug where downloading APK files in WebView2 crashes the WebView2 browser process.  (Runtime-only)  ([Issue #3569](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3569))

<!-- end of Release SDK 1.0.2045.28, for Runtime 117 (Sep. 18, 2023) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.1988-prerelease, for Runtime 117 (Jul. 24, 2023)

Release Date: Jul. 24, 2023

[NuGet package for WebView2 SDK 1.0.1988-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1988-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 117.0.1988.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
* Supports desktop notifications through WebView2:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.NotificationReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.notificationreceived?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)
* [CoreWebView2Notification Class](/dotnet/api/microsoft.web.webview2.core.corewebview2notification?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)
* [CoreWebView2NotificationReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2notificationreceivedeventargs?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.NotificationReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true#notificationreceived)
* [CoreWebView2Notification Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true)
* [CoreWebView2NotificationReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notificationreceivedeventargs?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental22](/microsoft-edge/webview2/reference/win32/icorewebview2experimental22?view=webview2-1.0.1988-prerelease&preserve-view=true)
   * [ICoreWebView2Experimental22::add_NotificationReceived event](/microsoft-edge/webview2/reference/win32/icorewebview2experimental22?view=webview2-1.0.1988-prerelease&preserve-view=true#add_notificationreceived)
   * [ICoreWebView2Experimental22::remove_NotificationReceived event](/microsoft-edge/webview2/reference/win32/icorewebview2experimental22?view=webview2-1.0.1988-prerelease&preserve-view=true#remove_notificationreceived)
* [ICoreWebView2ExperimentalNotification](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnotification?view=webview2-1.0.1988-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalNotificationCloseRequestedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnotificationcloserequestedeventhandler?view=webview2-1.0.1988-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalNotificationReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnotificationreceivedeventargs?view=webview2-1.0.1988-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalNotificationReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnotificationreceivedeventhandler?view=webview2-1.0.1988-prerelease&preserve-view=true)

---


<!-- ------------------------------ -->
* Supports monitoring iframe's runtime memory usage by getting process info details of iframes.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.FrameId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.frameid?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)
* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.GetProcessInfosWithDetailsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.getprocessinfoswithdetailsasync?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.FrameId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.frameid?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)
* `CoreWebView2FrameInfo` Class:
   * [CoreWebView2FrameInfo.FrameId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2frameinfo.frameid?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)
   * [CoreWebView2FrameInfo.FrameKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2frameinfo.framekind?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)
   * [CoreWebView2FrameInfo.ParentFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2frameinfo.parentframeinfo?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)
* [CoreWebView2FrameKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2framekind?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)
   * `Iframe`
   * `MainFrame`
   * `Other`
* `CoreWebView2ProcessInfo` Class:
   * [CoreWebView2ProcessInfo.AssociatedFrameInfos Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processinfo.associatedframeinfos?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.FrameId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true#frameid)
* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.GetProcessInfosWithDetailsAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true#getprocessinfoswithdetailsasync)
* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.FrameId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true#frameid)
* `CoreWebView2FrameInfo` Class:
   * [CoreWebView2FrameInfo.FrameId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frameinfo?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true#frameid)
   * [CoreWebView2FrameInfo.FrameKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frameinfo?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true#framekind)
   * [CoreWebView2FrameInfo.ParentFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frameinfo?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true#parentframeinfo)
* [CoreWebView2FrameKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2framekind?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true)
   * `Other`
   * `MainFrame`
   * `Iframe`
* `CoreWebView2ProcessInfo` Class:
   * [CoreWebView2ProcessInfo.AssociatedFrameInfos Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processinfo?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true#associatedframeinfos)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental23](/microsoft-edge/webview2/reference/win32/icorewebview2experimental23?view=webview2-1.0.1988-prerelease&preserve-view=true)
   * [ICoreWebView2Experimental23::get_FrameId](/microsoft-edge/webview2/reference/win32/icorewebview2experimental23?view=webview2-1.0.1988-prerelease&preserve-view=true#get_frameid)<!--no put-->
* [ICoreWebView2ExperimentalEnvironment11](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment11?view=webview2-1.0.1988-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironment11::GetProcessInfosWithDetails](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment11?view=webview2-1.0.1988-prerelease&preserve-view=true#getprocessinfoswithdetails)
* [ICoreWebView2ExperimentalFrame5](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe5?view=webview2-1.0.1988-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalFrame5::get_FrameId](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe5?view=webview2-1.0.1988-prerelease&preserve-view=true#get_frameid)<!--no put-->
* [ICoreWebView2ExperimentalFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframeinfo?view=webview2-1.0.1988-prerelease&preserve-view=true)
   * [ICoreWebView2FrameInfo::get_FrameId](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframeinfo?view=webview2-1.0.1988-prerelease&preserve-view=true#get_frameid)<!--no put-->
   * [ICoreWebView2FrameInfo::get_FrameKind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframeinfo?view=webview2-1.0.1988-prerelease&preserve-view=true#get_framekind)<!--no put-->
   * [ICoreWebView2FrameInfo::get_ParentFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframeinfo?view=webview2-1.0.1988-prerelease&preserve-view=true#get_parentframeinfo)<!--no put-->
* [COREWEBVIEW2_FRAME_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.1988-prerelease&preserve-view=true#corewebview2_frame_kind)
   * `COREWEBVIEW2_FRAME_KIND_OTHER`
   * `COREWEBVIEW2_FRAME_KIND_MAIN_FRAME`
   * `COREWEBVIEW2_FRAME_KIND_IFRAME`
* [ICoreWebView2ExperimentalGetProcessInfosWithDetailsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalgetprocessinfoswithdetailscompletedhandler?view=webview2-1.0.1988-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalProcessInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessinfo?view=webview2-1.0.1988-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProcessInfo::get_AssociatedFrameInfos](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessinfo?view=webview2-1.0.1988-prerelease&preserve-view=true#get_associatedframeinfos)<!--no put-->

---


<!-- ------------------------------ -->
* Supports extensions in WebView2.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2BrowserExtension Class](/dotnet/api/microsoft.web.webview2.core.corewebview2browserextension?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)
* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.AreBrowserExtensionsEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.arebrowserextensionsenabled?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AddBrowserExtensionAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.addbrowserextensionasync?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)
   * [CoreWebView2Profile.GetBrowserExtensionsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.getbrowserextensionsasync?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2BrowserExtension Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browserextension?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true)
* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.AreBrowserExtensionsEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true#arebrowserextensionsenabled)
* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.AddBrowserExtensionAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true#addbrowserextensionasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalBrowserExtension](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalbrowserextension?view=webview2-1.0.1988-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalBrowserExtension::get_IsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalbrowserextension?view=webview2-1.0.1988-prerelease&preserve-view=true#get_isenabled)<!--no put-->
   * [ICoreWebView2ExperimentalBrowserExtension::get_Name](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalbrowserextension?view=webview2-1.0.1988-prerelease&preserve-view=true#get_name)<!--no put-->
* [ICoreWebView2ExperimentalBrowserExtensionEnableCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalbrowserextensionenablecompletedhandler?view=webview2-1.0.1988-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalBrowserExtensionList](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalbrowserextensionlist?view=webview2-1.0.1988-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalBrowserExtensionRemoveCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalbrowserextensionremovecompletedhandler?view=webview2-1.0.1988-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalEnvironmentOptions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.1988-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironmentOptions::get_AreBrowserExtensionsEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.1988-prerelease&preserve-view=true#get_arebrowserextensionsenabled)
   * [ICoreWebView2ExperimentalEnvironmentOptions::put_AreBrowserExtensionsEnabled property](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.1988-prerelease&preserve-view=true#put_arebrowserextensionsenabled)
* [ICoreWebView2ExperimentalProfile12](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile12?view=webview2-1.0.1988-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile12::AddBrowserExtension](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile12?view=webview2-1.0.1988-prerelease&preserve-view=true#addbrowserextension)
   * [ICoreWebView2ExperimentalProfile12::GetBrowserExtensions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile12?view=webview2-1.0.1988-prerelease&preserve-view=true#getbrowserextensions)
* [ICoreWebView2ExperimentalProfileAddBrowserExtensionCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofileaddbrowserextensioncompletedhandler?view=webview2-1.0.1988-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalProfileGetBrowserExtensionsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofilegetbrowserextensionscompletedhandler?view=webview2-1.0.1988-prerelease&preserve-view=true)

---


<!-- ------------------------------ -->
* The `TextDirectionKind` enum specifies the text direction as left to right or right to left.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2TextDirectionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2textdirectionkind?view=webview2-dotnet-1.0.1988-prerelease&preserve-view=true)
   * `Default`
   * `LeftToRight`
   * `RightToLeft`

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2TextDirectionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2textdirectionkind?view=webview2-winrt-1.0.1988-prerelease&preserve-view=true)
   * `Default`
   * `LeftToRight`
   * `RightToLeft`

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_TEXT_DIRECTION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.1988-prerelease&preserve-view=true#corewebview2_text_direction_kind)
   * `COREWEBVIEW2_TEXT_DIRECTION_KIND_DEFAULT`
   * `COREWEBVIEW2_TEXT_DIRECTION_KIND_LEFT_TO_RIGHT`
   * `COREWEBVIEW2_TEXT_DIRECTION_KIND_RIGHT_TO_LEFT`

---


<!-- ------------------------------ -->
#### Bug fixes

* Fixed a `CoreWebView2Frame.ExecuteScriptAsync` hang that occurred when a frame was destroyed during script execution. [Issue 3124](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3124)

* Fixed a `COMException` when reading `WebResourceResponse` content after a redirect. [Issue 3229](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3229)

* Fixed a regression where calling `CoreWebView2.AddHostObjectToScript` twice for the same name hangs.  (Runtime-only)  [Issue 3539](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3539)

* Fixed an issue where `PrintAsync` fails when `PrinterName` contains Chinese characters. [Issue 3379](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3379)

* Fixed an issue to disable the context menu in print pages when `AreDefaultContextMenusEnabled` is set to `false`. [Issue 3548](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3548)

* Removed visual search from the web capture context menu.  (Runtime-only)  [Issue 3426](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3426)

* Fixed an issue that caused `PrintAsync` and `PrintToPdfStreamAsync` to fail when print settings are `null`.

* Removed the **Launch game** button from the default **No Internet Connection** error page.  (Runtime-only)

* Fixed an issue to ensure that `WebVivew2Loader` can be loaded from a UNC path. [Issue 3465](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3465)

* Fixed invalid `CoreWebView2PdfToolbarItems.FullScreen` and `CoreWebView2PdfToolbarItems.MoreSettings`.

* Added a lock for host object access from multithread.  (Runtime-only)

* Fixed configuration options that (`CoreWebView2PdfToolbarItems.MoreSettings`, `CoreWebView2PdfToolbarItems.FullScreen`) are not valid in PDF preview mode. [Issue 3324](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3324)

* Removed the **Hide all annotations** option in PDF **Settings and more**.  (Runtime-only)

* Removed the **Show all saved passwords** context menu item.  (Runtime-only)

<!-- end of Prerelease SDK 1.0.1988-prerelease, for Runtime 117 (Jul. 24, 2023) -->


<!-- ====================================================================== -->
## Release SDK 1.0.1938.49, for Runtime 116 (Aug. 28, 2023)

Release Date: Aug. 28, 2023

[NuGet package for WebView2 SDK 1.0.1938.49](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1938.49)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 116.0.1938.49 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

* Fixed a handle tracking bug where `TextureStream` API usage could fail.  (Runtime-only)

* Fixed a bug where a WebView2 created in a background thread doesn't come to the foreground when created.  (Runtime-only)  ([Issue #3584](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3584))

* Fixed a bug where the WebView2 content sometimes renders at the incorrect size after changing the display configuration (such as laptop sleeping; remoting; or connecting or disconnecting an external display).  (Runtime-only)  ([Issue 3429](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3429))

* Fixed a bug where a bluescreen happens when using WebView2 apps on certain hardware configurations.  (Runtime-only)  ([Issue #3679](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3679))

<!-- end of Release SDK 1.0.1938.49, for Runtime 116 (Aug. 28, 2023) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.1905-prerelease, for Runtime 116 (Jun. 12, 2023)

Release Date: Jun. 12, 2023

[NuGet package for WebView2 SDK 1.0.1905-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1905-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 116.0.1905.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
* `NavigationKind` gets the navigation kind of each navigation, such as Back/Forward, Reload, or navigation to a new document.

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
* The `ServiceWorkers` enum value in the `BrowsingDataKinds` enum specifies service workers that are registered for an origin.

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
* The `LaunchingExternalUriScheme` event is raised when there's an attempt to launch a URI scheme that is registered with the OS (an external URI scheme).

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
* `MemoryUsageTargetLevel` specifies memory consumption levels, such as `low` or `normal`.

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


<!-- ------------------------------ -->
#### Bug fixes

* Using `wv2winrt webhosthidden` entered an infinite loop when enumerating some `webhosthidden` types.  (SDK-only)

* In code that's generated by the **wv2winrt** tool, when calling an async method, it would crash if it succeeded but returned `null` instead of an `IAsyncAction`.  (SDK-only)

<!-- end of Prerelease SDK 1.0.1905-prerelease, for Runtime 116 (Jun. 12, 2023) -->


<!-- ====================================================================== -->
## Release SDK 1.0.1901.177, for Runtime 115 (Jul. 24, 2023)

Release Date: Jul. 24, 2023

[NuGet package for WebView2 SDK 1.0.1901.177](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1901.177)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 115.0.1901.177 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ------------------------------ -->
* `NavigationKind` gets the navigation kind of each navigation, such as Back/Forward, Reload, or navigation to a new document.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2NavigationStartingEventArgs` Class:
   * [CoreWebView2NavigationStartingEventArgs.NavigationKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs.navigationkind?view=webview2-dotnet-1.0.1901.177&preserve-view=true)
* [CoreWebView2NavigationKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationkind?view=webview2-dotnet-1.0.1901.177&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2NavigationStartingEventArgs` Class:
   * [CoreWebView2NavigationStartingEventArgs.NavigationKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationstartingeventargs?view=webview2-winrt-1.0.1901.177&preserve-view=true#navigationkind)
* [CoreWebView2NavigationKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationkind?view=webview2-winrt-1.0.1901.177&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2NavigationStartingEventArgs3](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs3?view=webview2-1.0.1901.177&preserve-view=true)
    * [ICoreWebView2NavigationStartingEventArgs3::get_NavigationKind](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs3?view=webview2-1.0.1901.177&preserve-view=true#get_navigationkind)<!--no put-->
* [COREWEBVIEW2_NAVIGATION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1901.177&preserve-view=true#corewebview2_navigation_kind)

---


<!-- ------------------------------ -->
* The `ServiceWorkers` enum value in the `BrowsingDataKinds` enum specifies service workers that are registered for an origin.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2BrowsingDataKinds` Enum:
   * [CoreWebView2BrowsingDataKinds.ServiceWorkers Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds?view=webview2-dotnet-1.0.1901.177&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2BrowsingDataKinds` Enum:
   * [CoreWebView2BrowsingDataKinds.ServiceWorkers Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browsingdatakinds?view=webview2-winrt-1.0.1901.177&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* `COREWEBVIEW2_BROWSING_DATA_KINDS` enum:
   * [COREWEBVIEW2_BROWSING_DATA_KINDS_SERVICE_WORKERS enum value](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1901.177&preserve-view=true#corewebview2_browsing_data_kinds)

---


<!-- ------------------------------ -->
#### Bug fixes

* Fixed a bug where the entire toolbar is blank when hiding the Bookmarks, Search, and PageSelector buttons simultaneously.  (Runtime-only)  [Issue 2866](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2866)

<!-- end of Release SDK 1.0.1901.177, for Runtime 115 (Jul. 24, 2023) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.1829-prerelease, for Runtime 115 (May 8, 2023)

Release Date: May 8, 2023

[NuGet package for WebView2 SDK 1.0.1829-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1829-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 115.0.1829.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
* Enhanced support for multiple profiles, to allow configuring General Autofill and Password Autosave settings for different profiles.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.IsGeneralAutofillEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.isgeneralautofillenabled?view=webview2-dotnet-1.0.1829-prerelease&preserve-view=true)
   * [CoreWebView2Profile.IsPasswordAutosaveEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.ispasswordautosaveenabled?view=webview2-dotnet-1.0.1829-prerelease&preserve-view=true)


##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.IsGeneralAutofillEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1829-prerelease&preserve-view=true#isgeneralautofillenabled)
   * [CoreWebView2Profile.IsPasswordAutosaveEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1829-prerelease&preserve-view=true#ispasswordautosaveenabled)


##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Profile6` interface:
   * [ICoreWebView2Profile6::get_IsPasswordAutosaveEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1829-prerelease&preserve-view=true#get_ispasswordautosaveenabled)
   * [ICoreWebView2Profile6::put_IsPasswordAutosaveEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1829-prerelease&preserve-view=true#put_ispasswordautosaveenabled)
   * [ICoreWebView2Profile6::get_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1829-prerelease&preserve-view=true#get_isgeneralautofillenabled)
   * [ICoreWebView2Profile6::put_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1829-prerelease&preserve-view=true#put_isgeneralautofillenabled)

---


<!-- ------------------------------ -->
#### Bug fixes

* Disabled the Chrome Web Store info banner that displays the option to allow extensions installation. ([Issue #3312](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3312))

* Fixed an issue where a custom menu item wasn't firing. ([Issue #3300](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3300))

* Fixed a crash during initialization when creating a WebView2 using WPF and SDK version 1.0.1722.32, which is now deprecated.  (See [SDK 1.0.1722.32 is deprecated](#sdk-10172232-is-deprecated) below.)  ([Issue #3375](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3375))

*  Fixed a bug in `PostSharedBufferToScript` that stops after about 32000x1MB buffers are posted.  (Runtime-only)  ([Issue #3360](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3360))

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postsharedbuffertoscript)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#postsharedbuffertoscript)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2_17` interface:
   * [ICoreWebView2_17::PostSharedBufferToScript](/microsoft-edge/webview2/reference/win32/icorewebview2_17#postsharedbuffertoscript)

---

* Fixed an issue where navigation will always take place within a `ScriptDialogOpening` event callback.  (Runtime-only)  ([Issue #3355](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3355))

* Fixed an issue to support the `BackForwardCache` flag.  (Runtime-only)

* Fixed an issue with visual hosted owned windows, where clicking into the Find bar from outside the window didn't activate the Find bar.

<!-- end of Prerelease SDK 1.0.1829-prerelease, for Runtime 115 (May 8, 2023) -->


<!-- ====================================================================== -->
## Release SDK 1.0.1823.32, for Runtime 114 (Jun. 5, 2023)

Release Date: Jun. 5, 2023

[NuGet package for WebView2 SDK 1.0.1823.32](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1823.32)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 114.0.1823.32 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ------------------------------ -->
* The `LaunchingExternalUriScheme` event is raised when there's an attempt to launch a URI scheme that is registered with the OS (an external URI scheme).

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.LaunchingExternalUriScheme Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.launchingexternalurischeme?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
* [CoreWebView2LaunchingExternalUriSchemeEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
    * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Cancel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.cancel?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
    * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.initiatingorigin?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
    * [CoreWebView2LaunchingExternalUriSchemeEventArgs.IsUserInitiated Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.isuserinitiated?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
    * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Uri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.uri?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
    * [CoreWebView2LaunchingExternalUriSchemeEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.getdeferral?view=webview2-dotnet-1.0.1823.32&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.LaunchingExternalUriScheme Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1823.32&preserve-view=true#launchingexternalurischeme)
* [CoreWebView2LaunchingExternalUriSchemeEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1823.32&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Cancel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1823.32&preserve-view=true#cancel)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1823.32&preserve-view=true#initiatingorigin)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.IsUserInitiated Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1823.32&preserve-view=true#isuserinitiated)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Uri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1823.32&preserve-view=true#uri)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.GetDeferral Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1823.32&preserve-view=true#getdeferral)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_18](/microsoft-edge/webview2/reference/win32/icorewebview2_18?view=webview2-1.0.1823.32&preserve-view=true)
    * [ICoreWebView2_18::add_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2_18?view=webview2-1.0.1823.32&preserve-view=true#add_launchingexternalurischeme)
    * [ICoreWebView2_18::remove_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2_18?view=webview2-1.0.1823.32&preserve-view=true#remove_launchingexternalurischeme)
* [ICoreWebView2LaunchingExternalUriSchemeEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventhandler?view=webview2-1.0.1823.32&preserve-view=true)
* [ICoreWebView2LaunchingExternalUriSchemeEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true)
    * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true#get_cancel)
    * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_InitiatingOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true#get_initiatingorigin)<!--no put-->
    * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_IsUserInitiated](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true#get_isuserinitiated)<!--no put-->
    * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_Uri](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true#get_uri)<!--no put-->
    * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true#getdeferral)
    * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::put_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true#put_cancel)

---


<!-- ------------------------------ -->
* `MemoryUsageTargetLevel` specifies memory consumption levels, such as `low` or `normal`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.MemoryUsageTargetLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.memoryusagetargetlevel?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
* [CoreWebView2MemoryUsageTargetLevel Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2memoryusagetargetlevel?view=webview2-dotnet-1.0.1823.32&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.MemoryUsageTargetLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#memoryusagetargetlevel?view=webview2-winrt-1.0.1823.32&preserve-view=true)
* [CoreWebView2MemoryUsageTargetLevel Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2memoryusagetargetlevel?view=webview2-winrt-1.0.1823.32&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_19](/microsoft-edge/webview2/reference/win32/icorewebview2_19?view=webview2-1.0.1823.32&preserve-view=true)
    * [ICoreWebView2_19::get_MemoryUsageTargetLevel](/microsoft-edge/webview2/reference/win32/icorewebview2_19?view=webview2-1.0.1823.32&preserve-view=true#get_memoryusagetargetlevel)
    * [ICoreWebView2_19::put_MemoryUsageTargetLevel](/microsoft-edge/webview2/reference/win32/icorewebview2_19?view=webview2-1.0.1823.32&preserve-view=true#put_memoryusagetargetlevel)
* [COREWEBVIEW2_MEMORY_USAGE_TARGET_LEVEL enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1823.32&preserve-view=true#corewebview2_memory_usage_target_level)

---


<!-- ------------------------------ -->
* Enhanced support for multiple profiles, to allow configuring General Autofill and Password Autosave settings for different profiles.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.IsGeneralAutofillEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.isgeneralautofillenabled?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
   * [CoreWebView2Profile.IsPasswordAutosaveEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.ispasswordautosaveenabled?view=webview2-dotnet-1.0.1823.32&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.IsGeneralAutofillEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1823.32&preserve-view=true#isgeneralautofillenabled)
   * [CoreWebView2Profile.IsPasswordAutosaveEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1823.32&preserve-view=true#ispasswordautosaveenabled)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Profile6`:
   * [ICoreWebView2Profile6::get_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1823.32&preserve-view=true#get_isgeneralautofillenabled)
   * [ICoreWebView2Profile6::get_IsPasswordAutosaveEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1823.32&preserve-view=true#get_ispasswordautosaveenabled)
   * [ICoreWebView2Profile6::put_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1823.32&preserve-view=true#put_isgeneralautofillenabled)
   * [ICoreWebView2Profile6::put_IsPasswordAutosaveEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1823.32&preserve-view=true#put_ispasswordautosaveenabled)

---

<!-- end of Release SDK 1.0.1823.32, for Runtime 114 (Jun. 5, 2023) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.1777-prerelease, for Runtime 114 (Apr. 10, 2023)

Release Date: Apr. 10, 2023

[NuGet package for WebView2 SDK 1.0.1777-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1777-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 114.0.1777.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


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


<!-- ------------------------------ -->
#### Bug fixes

* Fixed a crash when releasing the WebView from a different thread.  (Runtime-only)  ([Issue #3062](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3062))

* Fixed a bug where focus was trapped inside the WebView2 control when wrapped in a `ContainerControl`.  ([Issue #2835](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2835))

* Fixed the issue by disabling the editable `.pdf` temporary cached data recovery function in WebView2.  ([Issue #3274](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3274))

* Disabled the Chrome Web Store info banner that displays the option to allow extensions installation.  ([Issue #3312](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3312))

* Fixed an issue with new download items not getting called out by screen readers.

* Fixed a bug where visual hosted owned windows didn't map mouse pointer input correctly.

* Fixed a bug where `DownloadStarting` was getting raised for a canceled **Save As** dialog.  (Runtime-only)

<!-- end of Prerelease SDK 1.0.1777-prerelease, for Runtime 114 (Apr. 10, 2023) -->


<!-- ====================================================================== -->
## Release SDK 1.0.1774.30, for Runtime 113 (May 8, 2023)

Release Date: May 8, 2023

[NuGet package for WebView2 SDK 1.0.1774.30](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1774.30)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 113.0.1774.30 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ------------------------------ -->
* The File API allows accessing a DOM `File` object passed via `WebMessage`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2File Class](/dotnet/api/microsoft.web.webview2.core.corewebview2file?view=webview2-dotnet-1.0.1774.30&preserve-view=true)
   * [CoreWebView2File.Path Property](/dotnet/api/microsoft.web.webview2.core.corewebview2file.path?view=webview2-dotnet-1.0.1774.30&preserve-view=true)
* `CoreWebView2WebMessageReceivedEventArgs` Class:
   * [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webmessagereceivedeventargs.additionalobjects?view=webview2-dotnet-1.0.1774.30&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2File Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2file?view=webview2-winrt-1.0.1774.30&preserve-view=true)
   * [CoreWebView2File.Path Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2file?view=webview2-winrt-1.0.1774.30&preserve-view=true#path)
* `CoreWebView2WebMessageReceivedEventArgs` Class:
   * [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webmessagereceivedeventargs?view=webview2-winrt-1.0.1774.30&preserve-view=true#additionalobjects)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2File](/microsoft-edge/webview2/reference/win32/icorewebview2file?view=webview2-1.0.1774.30&preserve-view=true)
   * [ICoreWebView2File::get_Path](/microsoft-edge/webview2/reference/win32/icorewebview2file?view=webview2-1.0.1774.30&preserve-view=true#get_path)<!--no put-->
* [ICoreWebView2ObjectCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollectionview?view=webview2-1.0.1774.30&preserve-view=true)
   * [ICoreWebView2ObjectCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollectionview?view=webview2-1.0.1774.30&preserve-view=true#get_count)<!--no put-->
   * [ICoreWebView2ObjectCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollectionview?view=webview2-1.0.1774.30&preserve-view=true#getvalueatindex)
* [ICoreWebView2WebMessageReceivedEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs2?view=webview2-1.0.1774.30&preserve-view=true)
   * [ICoreWebView2WebMessageReceivedEventArgs2::get_AdditionalObjects](/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs2?view=webview2-1.0.1774.30&preserve-view=true#get_additionalobjects)<!--no put-->

---


<!-- ------------------------------ -->
* The Profile Cookie Manager API supports profile management.  The `CookieManager` property enables the host app to get the cookie manager for the profile.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.CookieManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.cookiemanager?view=webview2-dotnet-1.0.1774.30&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.CookieManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1774.30&preserve-view=true#cookiemanager)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Profile5`:
   * [ICoreWebView2Profile5::get_CookieManager](/microsoft-edge/webview2/reference/win32/icorewebview2profile5?view=webview2-1.0.1774.30&preserve-view=true#get_cookiemanager)<!--no put-->

---


<!-- ------------------------------ -->
#### Bug fixes

* Fixed an issue to allow an app to inject initial scripts by calling `AddScriptToExecuteOnDocumentCreated` before a new window is created.  ([Issue #2491](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2491))

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addscripttoexecuteondocumentcreatedasync)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addscripttoexecuteondocumentcreatedasync)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2`:
   * [ICoreWebView2::AddScriptToExecuteOnDocumentCreated](/microsoft-edge/webview2/reference/win32/icorewebview2#addscripttoexecuteondocumentcreated)

---

*  Fixed an issue that was causing the `X-Edge-Shopping-Flag` header to be added to web requests that are coming from WebView2.  (Runtime-only)  ([Issue #3365](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3365))

<!-- end of Release SDK 1.0.1774.30, for Runtime 113 (May 8, 2023) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.1724-prerelease, for Runtime 113 (Mar. 20, 2023)

Release Date: Mar. 20, 2023

[NuGet package for WebView2 SDK 1.0.1724-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1724-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 113.0.1724.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
*  Added `AdditionalObjects` for WebMessage received:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webmessagereceivedeventargs.additionalobjects?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webmessagereceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#additionalobjects)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalWebMessageReceivedEventArgs::get_AdditionalObjects](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebmessagereceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_additionalobjects)

---


<!-- ------------------------------ -->
*  Added Window Management permission type:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2PermissionKind.WindowManagement Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2PermissionKind.WindowManagement Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_PERMISSION_KIND_WINDOW_MANAGEMENT Enum Value](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1724-prerelease&preserve-view=true#corewebview2_permission_kind)

---


<!-- ------------------------------ -->
*  Added support for launching external URIs:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.LaunchingExternalUriScheme Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.launchingexternalurischeme?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

* [CoreWebView2LaunchingExternalUriSchemeEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Cancel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.cancel?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.getdeferral?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.initiatingorigin?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.IsUserInitiated Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.isuserinitiated?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Uri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.uri?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.LaunchingExternalUriScheme Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#launchingexternalurischeme)

* [CoreWebView2LaunchingExternalUriSchemeEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Cancel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#cancel)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#getdeferral)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#initiatingorigin)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.IsUserInitiated Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#isuserinitiated)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Uri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#uri)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental21::add_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2experimental21?view=webview2-1.0.1724-prerelease&preserve-view=true#add_launchingexternalurischeme)

* [ICoreWebView2Experimental21::remove_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2experimental21?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_launchingexternalurischeme)

* [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventHandler::Invoke](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true#invoke)<!-- keep this Invoke, b/c listed in api ref -->

* [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::get_Uri](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_uri)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::get_InitiatingOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_initiatingorigin)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::get_IsUserInitiated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_isuserinitiated)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::get_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_cancel)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::put_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#put_cancel)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#getdeferral)

---


<!-- ------------------------------ -->
*  Added support for texture streaming:

##### [.NET/C#](#tab/dotnetcsharp)

The `Environment` interface that returns the `TextureStream` interface:
* [CoreWebView2Environment.CreateTextureStream Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createtexturestream?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2Environment.RenderAdapterLUIDChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.renderadapterluidchanged?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2Environment.RenderAdapterLUID Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.renderadapterluid?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

The `TextureStream` interface:
* [CoreWebView2TextureStream Class](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.AddAllowedOrigin Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.addallowedorigin?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.CloseTexture Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.closetexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.CreateTexture Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.createtexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.ErrorReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.errorreceived?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.GetAvailableTexture Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.getavailabletexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.Id Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.id?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.PresentTexture Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.presenttexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.RemoveAllowedOrigin Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.removeallowedorigin?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.SetD3DDevice Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.setd3ddevice?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.StartRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.startrequested?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.Stop Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.stop?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.Stopped Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.stopped?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.WebTextureReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.webtexturereceived?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.WebTextureStreamStopped Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.webtexturestreamstopped?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

ErrorReceivedEventArgs:
* [CoreWebView2TextureStreamErrorReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorreceivedeventargs?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorReceivedEventArgs.Kind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorreceivedeventargs.kind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorReceivedEventArgs.texture Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorreceivedeventargs.texture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

WebTextureReceivedEventArgs:
* [CoreWebView2TextureStreamWebTextureReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamwebtexturereceivedeventargs?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2TextureStreamWebTextureReceivedEventArgs.WebTexture Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamwebtexturereceivedeventargs.webtexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

TextureStream error kind enum:
* [CoreWebView2TextureStreamErrorKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorNoVideoTrackStarted Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorTextureError Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorTextureInUse Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

The `Texture` interface that the host writes to so that the Renderer will render on it:
* [CoreWebView2Texture Class](/dotnet/api/microsoft.web.webview2.core.corewebview2texture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Texture.Handle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texture.handle?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Texture.Resource Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texture.resource?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Texture.Timestamp Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texture.timestamp?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

The received `WebTexture` interface that the Renderer writes to so that the host will read on it:
* [CoreWebView2WebTexture Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webtexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2WebTexture.Handle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webtexture.handle?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2WebTexture.Resource Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webtexture.resource?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2WebTexture.Timestamp Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webtexture.timestamp?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

The `Environment` interface that returns the `TextureStream` interface:
* [CoreWebView2Environment.CreateTextureStream Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#createtexturestream)
* [CoreWebView2Environment.RenderAdapterLUIDChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#renderadapterluidchanged)
* [CoreWebView2Environment.RenderAdapterLUID Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#renderadapterluid)

The `TextureStream` interface:
* [CoreWebView2TextureStream Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.AddAllowedOrigin Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#addallowedorigin)
    * [CoreWebView2TextureStream.CloseTexture Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#closetexture)
    * [CoreWebView2TextureStream.CreateTexture Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#createtexture)
    * [CoreWebView2TextureStream.ErrorReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#errorreceived)
    * [CoreWebView2TextureStream.GetAvailableTexture Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#getavailabletexture)
    * [CoreWebView2TextureStream.Id Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#id)
    * [CoreWebView2TextureStream.PresentTexture Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#presenttexture)
    * [CoreWebView2TextureStream.RemoveAllowedOrigin Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#removeallowedorigin)
    * [CoreWebView2TextureStream.SetD3DDevice Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#setd3ddevice)
    * [CoreWebView2TextureStream.StartRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#startrequested)
    * [CoreWebView2TextureStream.Stop Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#stop)
    * [CoreWebView2TextureStream.Stopped Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#stopped)
    * [CoreWebView2TextureStream.WebTextureReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#webtexturereceived)
    * [CoreWebView2TextureStream.WebTextureStreamStopped Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#webtexturestreamstopped)

ErrorReceivedEventArgs:
* [CoreWebView2TextureStreamErrorReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorreceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorReceivedEventArgs.Kind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorreceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#kind)

WebTextureReceivedEventArgs:
* [CoreWebView2TextureStreamWebTextureReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamwebtexturereceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamWebTextureReceivedEventArgs.WebTexture Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamwebtexturereceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#webtexture)

TextureStream error kind enum:
* [CoreWebView2TextureStreamErrorKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorNoVideoTrackStarted Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorTextureError Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorTextureInUse Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)

The `Texture` interface that the host writes to so that the Renderer will render on it:
* [CoreWebView2Texture Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Texture.Resource Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#resource)
   * [CoreWebView2Texture.Timestamp Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#timestamp)

The received `WebTexture` interface that the Renderer writes to so that the host will read on it:
* [CoreWebView2WebTexture Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webtexture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2WebTexture.Resource Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webtexture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#resource)
   * [CoreWebView2WebTexture.Timestamp Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webtexture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#timestamp)

##### [Win32/C++](#tab/win32cpp)

The `Environment` interface that returns the `TextureStream` interface:
* [ICoreWebView2ExperimentalEnvironment12](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment12?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironment12::CreateTextureStream](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment12?view=webview2-1.0.1724-prerelease&preserve-view=true#createtexturestream)
   * [ICoreWebView2ExperimentalEnvironment12::RenderAdapterLUID (get)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment12?view=webview2-1.0.1724-prerelease&preserve-view=true#get_renderadapterluid)
   * [ICoreWebView2ExperimentalEnvironment12::RenderAdapterLUIDChanged (add, remove)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment12?view=webview2-1.0.1724-prerelease&preserve-view=true#add_renderadapterluidchanged)

The `TextureStream` interface:
* [ICoreWebView2ExperimentalTextureStream](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalTextureStream::add_ErrorReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_errorreceived)
   * [ICoreWebView2ExperimentalTextureStream::add_StartRequested](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_startrequested)
   * [ICoreWebView2ExperimentalTextureStream::add_Stopped](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_stopped)
   * [ICoreWebView2ExperimentalTextureStream::add_WebTextureReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_webtexturereceived)
   * [ICoreWebView2ExperimentalTextureStream::add_WebTextureStreamStopped](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_webtexturestreamstopped)
   * [ICoreWebView2ExperimentalTextureStream::AddAllowedOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#addallowedorigin)
   * [ICoreWebView2ExperimentalTextureStream::CloseTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#closetexture)
   * [ICoreWebView2ExperimentalTextureStream::CreateTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#createtexture)
   * [ICoreWebView2ExperimentalTextureStream::get_Id](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#get_id)
   * [ICoreWebView2ExperimentalTextureStream::GetAvailableTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#getavailabletexture)
   * [ICoreWebView2ExperimentalTextureStream::PresentTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#presenttexture)
   * [ICoreWebView2ExperimentalTextureStream::remove_ErrorReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_errorreceived)
   * [ICoreWebView2ExperimentalTextureStream::remove_StartRequested](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_startrequested)
   * [ICoreWebView2ExperimentalTextureStream::remove_Stopped](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_stopped)
   * [ICoreWebView2ExperimentalTextureStream::remove_WebTextureReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_webtexturereceived)
   * [ICoreWebView2ExperimentalTextureStream::remove_WebTextureStreamStopped](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_webtexturestreamstopped)
   * [ICoreWebView2ExperimentalTextureStream::RemoveAllowedOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#removeallowedorigin)
   * [ICoreWebView2ExperimentalTextureStream::SetD3DDevice](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#setd3ddevice)
   * [ICoreWebView2ExperimentalTextureStream::Stop](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#stop)

Supplemental `TextureStream*` interfaces:
* [ICoreWebView2ExperimentalTextureStreamStartRequestedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamstartrequestedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalTextureStreamStoppedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamstoppedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalTextureStreamErrorReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamerrorreceivedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalTextureStreamErrorReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamerrorreceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalTextureStreamErrorReceivedEventArgs::get_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamerrorreceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_kind)
   * [ICoreWebView2ExperimentalTextureStreamErrorReceivedEventArgs::get_Texture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamerrorreceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_texture)
* [ICoreWebView2ExperimentalTextureStreamWebTextureReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamwebtexturereceivedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalTextureStreamWebTextureReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamwebtexturereceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalTextureStreamWebTextureReceivedEventArgs::get_WebTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamwebtexturereceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_webtexture)
* [ICoreWebView2ExperimentalTextureStreamWebTextureStreamStoppedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamwebtexturestreamstoppedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)

TextureStream error kind enum:
* [COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND Enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.1724-prerelease&preserve-view=true#corewebview2_texture_stream_error_kind)

Other interfaces (`RenderAdapter`):
* [ICoreWebView2ExperimentalRenderAdapterLUIDChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalrenderadapterluidchangedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)

The `Texture` interface that the host writes to so that the Renderer will render on it:
* [ICoreWebView2ExperimentalTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalTexture::get_Handle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_handle)
   * [ICoreWebView2ExperimentalTexture::get_Resource](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_resource)
   * [ICoreWebView2ExperimentalTexture::get_Timestamp](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_timestamp)
   * [ICoreWebView2ExperimentalTexture::put_Timestamp](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true#put_timestamp)

The received `WebTexture` interface that the Renderer writes to so that the host will read on it:
* [ICoreWebView2ExperimentalWebTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebtexture?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalWebTexture::get_Handle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebtexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_handle)
   * [ICoreWebView2ExperimentalWebTexture::get_Resource](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebtexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_resource)
   * [ICoreWebView2ExperimentalWebTexture::get_Timestamp](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebtexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_timestamp)

---


<!-- ------------------------------ -->
*  Added support for profile management: custom data partition, cookie manager and profile deletion:

##### [.NET/C#](#tab/dotnetcsharp)

Added support for custom data partition:
* [CoreWebView2.CustomDataPartitionId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.customdatapartitionid?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2Profile.ClearCustomDataPartitionAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearcustomdatapartitionasync?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

Added support for cookie manager:
* [CoreWebView2Profile.CookieManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.cookiemanager?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

Add support for managing profile deletion:
* [CoreWebView2Profile.Delete Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.delete?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2Profile.Deleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.deleted?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

Added support for custom data partition:
* [CoreWebView2.CustomDataPartitionId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#customdatapartitionid)
* [CoreWebView2Profile.ClearCustomDataPartitionAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#clearcustomdatapartitionasync)

Added support for cookie manager:
* [CoreWebView2Profile.CookieManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#cookiemanager)

Add support for managing profile deletion:
* [CoreWebView2Profile.Delete Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#delete)
* [CoreWebView2Profile.Deleted Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#deleted)

##### [Win32/C++](#tab/win32cpp)

Added support for custom data partition:
* [ICoreWebView2Experimental20](/microsoft-edge/webview2/reference/win32/icorewebview2experimental20?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2Experimental20::get_CustomDataPartitionId](/microsoft-edge/webview2/reference/win32/icorewebview2experimental20?view=webview2-1.0.1724-prerelease&preserve-view=true#get_customdatapartitionid)
   * [ICoreWebView2Experimental20::put_CustomDataPartitionId](/microsoft-edge/webview2/reference/win32/icorewebview2experimental20?view=webview2-1.0.1724-prerelease&preserve-view=true#put_customdatapartitionid)
* [ICoreWebView2ExperimentalProfile7](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile7?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile7::ClearCustomDataPartition](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile7?view=webview2-1.0.1724-prerelease&preserve-view=true#clearcustomdatapartition)
* [ICoreWebView2ExperimentalClearCustomDataPartitionCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearcustomdatapartitioncompletedhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)

Added support for cookie manager:
* [ICoreWebView2ExperimentalProfile8](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile8?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile8::get_CookieManager](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile8?view=webview2-1.0.1724-prerelease&preserve-view=true#get_cookiemanager)

Add support for managing profile deletion:
* [ICoreWebView2ExperimentalProfile10](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile10?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile10::Delete](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile10?view=webview2-1.0.1724-prerelease&preserve-view=true#delete)
   * [ICoreWebView2ExperimentalProfile10::add_Deleted](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile10?view=webview2-1.0.1724-prerelease&preserve-view=true#add_deleted)
   * [ICoreWebView2ExperimentalProfile10::remove_Deleted](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile10?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_deleted)
* [ICoreWebView2ExperimentalProfileDeletedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofiledeletedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
*  Managing smartscreen API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isreputationcheckingrequired?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Settings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#isreputationcheckingrequired)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings8](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2Settings8::get_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1724-prerelease&preserve-view=true#get_isreputationcheckingrequired)
   * [ICoreWebView2Settings8::put_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1724-prerelease&preserve-view=true#put_isreputationcheckingrequired)

---


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed a bug in `PrintAsync` and `PrintToPdfStreamAsync` that throws an exception when print settings are null.

*  Improved handling of apps running elevated.  (Runtime-only)

*  Added support for window management permission kind.  (Runtime and SDK)

*  Reliability improvement.  (Runtime-only)

<!-- end of Prerelease SDK 1.0.1724-prerelease, for Runtime 113 (Mar. 20, 2023) -->


<!-- ====================================================================== -->
## Release SDK 1.0.1722.45, for Runtime 112 (Apr. 13, 2023)

Release Date: Apr. 13, 2023

[NuGet package for WebView2 SDK 1.0.1722.45](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1722.45)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 112.0.1722.45 or higher.


<!-- ------------------------------ -->
#### SDK 1.0.1722.32 is deprecated

WebView2 SDK 1.0.1722.32 is deprecated, and that package has been removed from the listing at NuGet.  Discontinue development with package 1.0.1722.32.  If your WebView2 app uses that package, we recommend that you move to a newer package, such as WebView2 SDK 1.0.1722.45 or later.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ------------------------------ -->
* The Managing SmartScreen API controls whether SmartScreen is enabled.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Settings`
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isreputationcheckingrequired?view=webview2-dotnet-1.0.1722.45&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Settings`
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.1722.45&preserve-view=true#isreputationcheckingrequired)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings8](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1722.45&preserve-view=true)
   * [ICoreWebView2Settings8::get_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1722.45&preserve-view=true#get_isreputationcheckingrequired)
   * [ICoreWebView2Settings8::put_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1722.45&preserve-view=true#put_isreputationcheckingrequired)

---


<!-- ------------------------------ -->
* The `PermissionKind.WindowManagement` API indicates the kind of a permission request.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2PermissionKind` Enum
   * [CoreWebView2PermissionKind.WindowManagement Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.1722.45&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2PermissionKind` Enum
   * [CoreWebView2PermissionKind.WindowManagement Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind?view=webview2-winrt-1.0.1722.45&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* `COREWEBVIEW2_PERMISSION_KIND` Enum
   * [COREWEBVIEW2_PERMISSION_KIND_WINDOW_MANAGEMENT enum value](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1722.45&preserve-view=true#corewebview2_permission_kind)

---

<!-- end of Release SDK 1.0.1722.45, for Runtime 112 (Apr. 13, 2023) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.1671-prerelease, for Runtime 112 (Feb. 15, 2023)

Release Date: Feb. 15, 2023

[NuGet package for WebView2 SDK 1.0.1671-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1671-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 112.0.1671.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
*  Added support for the Experimental File API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2File Class](/dotnet/api/microsoft.web.webview2.core.corewebview2file?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2File.Path Property](/dotnet/api/microsoft.web.webview2.core.corewebview2file.path?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
* [CoreWebView2WebMessageReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webmessagereceivedeventargs?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2File Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2file?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2File.Path Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2file?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#path)
* [CoreWebView2WebMessageReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webmessagereceivedeventargs?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalFile](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfile?view=webview2-1.0.1671-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalFile::get_Path](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfile?view=webview2-1.0.1671-prerelease&preserve-view=true#get_path)
* [ICoreWebView2ExperimentalWebMessageReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebmessagereceivedeventargs?view=webview2-1.0.1671-prerelease&preserve-view=true)

Also added support for Experimental Object Collection View API:

* [ICoreWebView2ExperimentalObjectCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalobjectcollectionview?view=webview2-1.0.1671-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalObjectCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalobjectcollectionview?view=webview2-1.0.1671-prerelease&preserve-view=true#get_count)
   * [ICoreWebView2ExperimentalObjectCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalobjectcollectionview?view=webview2-1.0.1671-prerelease&preserve-view=true#getvalueatindex)

The above interface is currently being used for:

* [ICoreWebView2ExperimentalWebMessageReceivedEventArgs::get_AdditionalObjects](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebmessagereceivedeventargs?view=webview2-1.0.1671-prerelease&preserve-view=true#get_additionalobjects)

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
*  The SharedBuffer API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2 Class](/dotnet/api/microsoft.web.webview2.core.corewebview2?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postsharedbuffertoscript?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
* [CoreWebView2Environment Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environment?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [ICoreWebView2Environment.CreateSharedBuffer Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createsharedbuffer?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
* [CoreWebView2Frame Class](/dotnet/api/microsoft.web.webview2.core.corewebview2frame?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2Frame.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postsharedbuffertoscript?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
* [CoreWebView2SharedBuffer Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2SharedBuffer.Buffer Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.buffer?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2SharedBuffer.FileMappingHandle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.filemappinghandle?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2SharedBuffer.Size Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.size?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2SharedBuffer.Close Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.close?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2SharedBuffer.OpenStream Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.openstream?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2 Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#postsharedbuffertoscript)
* [CoreWebView2Environment Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true)
   * [ICoreWebView2Environment.CreateSharedBuffer Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#createsharedbuffer)
* [CoreWebView2Frame Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2Frame.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#postsharedbuffertoscript)
* [CoreWebView2SharedBuffer Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2SharedBuffer.Buffer Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#buffer)
   * [CoreWebView2SharedBuffer.Size Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#size)
   * [CoreWebView2SharedBuffer.Close Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#close)
   * [CoreWebView2SharedBuffer.OpenStream Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#openstream)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_17](/microsoft-edge/webview2/reference/win32/icorewebview2_17?view=webview2-1.0.1671-prerelease&preserve-view=true)
   * [ICoreWebView2_17::PostSharedBufferToScript](/microsoft-edge/webview2/reference/win32/icorewebview2_17?view=webview2-1.0.1671-prerelease&preserve-view=true#postsharedbuffertoscript)
* [ICoreWebView2Environment12](/microsoft-edge/webview2/reference/win32/icorewebview2environment12?view=webview2-1.0.1671-prerelease&preserve-view=true)
   * [ICoreWebView2Environment12::CreateSharedBuffer](/microsoft-edge/webview2/reference/win32/icorewebview2environment12?view=webview2-1.0.1671-prerelease&preserve-view=true#createsharedbuffer)
* [ICoreWebView2Frame4](/microsoft-edge/webview2/reference/win32/icorewebview2frame4?view=webview2-1.0.1671-prerelease&preserve-view=true)
   * [ICoreWebView2Frame4::PostSharedBufferToScript](/microsoft-edge/webview2/reference/win32/icorewebview2frame4?view=webview2-1.0.1671-prerelease&preserve-view=true#postsharedbuffertoscript)
* [ICoreWebView2SharedBuffer](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1671-prerelease&preserve-view=true)
   * [ICoreWebView2SharedBuffer::OpenStream](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1671-prerelease&preserve-view=true#openstream)
   * [ICoreWebView2SharedBuffer::Close](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1671-prerelease&preserve-view=true#close)
   * [ICoreWebView2SharedBuffer::get_Size](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1671-prerelease&preserve-view=true#get_size)
   * [ICoreWebView2SharedBuffer::get_Buffer](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1671-prerelease&preserve-view=true#get_buffer)
   * [ICoreWebView2SharedBuffer::get_FileMappingHandle](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1671-prerelease&preserve-view=true#get_filemappinghandle)

---


<!-- ------------------------------ -->
*  The Permission API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2PermissionSetting Class](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionkind?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionorigin?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionState Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionstate?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
* [CoreWebView2Profile Class](/dotnet/api/microsoft.web.webview2.core.corewebview2profile?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.getnondefaultpermissionsettingsasync?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.setpermissionstateasync?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2PermissionSetting Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#permissionkind)
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#permissionorigin)
   * [CoreWebView2PermissionSetting.PermissionState Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#permissionstate)
* [CoreWebView2Profile Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#getnondefaultpermissionsettingsasync)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#setpermissionstateasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2GetNonDefaultPermissionSettingsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2getnondefaultpermissionsettingscompletedhandler?view=webview2-1.0.1671-prerelease&preserve-view=true)
* [ICoreWebView2PermissionSetting](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting?view=webview2-1.0.1671-prerelease&preserve-view=true)
   * [ICoreWebView2PermissionSetting::get_PermissionKind](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting?view=webview2-1.0.1671-prerelease&preserve-view=true#get_permissionkind)
   * [ICoreWebView2PermissionSetting::get_PermissionOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting?view=webview2-1.0.1671-prerelease&preserve-view=true#get_permissionorigin)
   * [ICoreWebView2PermissionSetting::get_PermissionState](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting?view=webview2-1.0.1671-prerelease&preserve-view=true#get_permissionstate)
* [ICoreWebView2PermissionSettingCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsettingcollectionview?view=webview2-1.0.1671-prerelease&preserve-view=true)
   * [ICoreWebView2PermissionSettingCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsettingcollectionview?view=webview2-1.0.1671-prerelease&preserve-view=true#getvalueatindex)
   * [ICoreWebView2PermissionSettingCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsettingcollectionview?view=webview2-1.0.1671-prerelease&preserve-view=true#get_count)
* [ICoreWebView2Profile4](/microsoft-edge/webview2/reference/win32/icorewebview2profile4?view=webview2-1.0.1671-prerelease&preserve-view=true)
   * [ICoreWebView2Profile4::SetPermissionState](/microsoft-edge/webview2/reference/win32/icorewebview2profile4?view=webview2-1.0.1671-prerelease&preserve-view=true#setpermissionstate)
   * [ICoreWebView2Profile4::GetNonDefaultPermissionSettings](/microsoft-edge/webview2/reference/win32/icorewebview2profile4?view=webview2-1.0.1671-prerelease&preserve-view=true#getnondefaultpermissionsettings)
* [ICoreWebView2SetPermissionStateCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2setpermissionstatecompletedhandler?view=webview2-1.0.1671-prerelease&preserve-view=true)

---


<!-- ------------------------------ -->
*  The ScriptLocale API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ControllerOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2ControllerOptions.ScriptLocale Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.scriptlocale?view=webview2-dotnet-1.0.1671-prerelease&preserve-view=true)

Previous name in 1619-prerelease:
* [CoreWebView2ControllerOptions.LocaleRegion Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.localeregion?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)<!--keep 1619-->

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ControllerOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true)
   * [CoreWebView2ControllerOptions.ScriptLocale Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.1671-prerelease&preserve-view=true#scriptlocale)

Previous name in 1619-prerelease:
* [CoreWebView2ControllerOptions.LocaleRegion Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#localeregion)<!--keep 1619-->

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ControllerOptions2](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2?view=webview2-1.0.1671-prerelease&preserve-view=true)
   * [ICoreWebView2ControllerOptions2::get_ScriptLocale](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2?view=webview2-1.0.1671-prerelease&preserve-view=true#get_scriptlocale)
   * [ICoreWebView2ControllerOptions2::put_ScriptLocale](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2?view=webview2-1.0.1671-prerelease&preserve-view=true#put_scriptlocale)

Previous name in 1619-prerelease:
* [ICoreWebView2ExperimentalControllerOptions::get_LocaleRegion](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions?view=webview2-1.0.1619-prerelease&preserve-view=true#get_localeregion)<!--keep 1619-->
* [ICoreWebView2ExperimentalControllerOptions::put_LocaleRegion](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions?view=webview2-1.0.1619-prerelease&preserve-view=true#put_localeregion)<!--keep 1619-->

---


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed a bug where WebView2 was not closing properly when a `BeforeUnload` event was received.  (Runtime-only)  ([Issue #2677](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2677))

*  In the `DownloadStarting` event, the `ResultFilePath` previously wasn't showing the correct download location for UWP applications when the `DownloadStarting` event handler was attached.  This has been fixed; the correct `ResultFilePath` is now shown.

*  Fixed a bug where `System.ArgumentException` was thrown when a call to the `HostObject` method returns a non-generic task.  ([Issue #2787](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2787))

*  Fixed an issue in the `SharedBuffer` API where the stream object didn't work well with `StreamWriter`.  (Runtime-only)  ([Issue #3108](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3108))

*  DOM speech-synthesis APIs, such as `SpeechSynthesis.getVoices()`, will now work in UWP apps.  (Runtime-only)

*  Fixed a crash that occurred on frame destruction.  (Runtime-only)  ([Issue #3062](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3062))

*  Fixed a bug where the app crashes when trying to call `CreateWebResourceResponse` with a `null` `reason` phrase.  (Runtime-only)

*  The `CoreWebView2.AddHostObjectToScript` option `chrome.webview.hostObjects.options.ignoreMemberNotFoundError` now works in non-English locales.  (Runtime-only)

*  Fully enabled **Open file** dialog support for elevated apps on Windows 7.

*  Fixed a bug where owned windows were not appearing for UWP.

<!-- end of Prerelease SDK 1.0.1671-prerelease, for Runtime 112 (Feb. 15, 2023) -->


<!-- ====================================================================== -->
## Release SDK 1.0.1661.34, for Runtime 111 (Mar. 20, 2023)

Release Date: Mar. 20, 2023

[NuGet package for WebView2 SDK 1.0.1661.34](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1661.34)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 111.0.1661.34 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ------------------------------ -->
*  The SharedBuffer API:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class
   * [CoreWebView2.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postsharedbuffertoscript?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* `CoreWebView2Environment` Class
   * [ICoreWebView2Environment.CreateSharedBuffer Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createsharedbuffer?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* `CoreWebView2Frame` Class
   * [CoreWebView2Frame.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postsharedbuffertoscript?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* [CoreWebView2SharedBuffer Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.Buffer Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.buffer?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.FileMappingHandle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.filemappinghandle?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.Size Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.size?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.Close Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.close?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.Dispose Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.dispose?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.OpenStream Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.openstream?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* [CoreWebView2SharedBufferAccess Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbufferaccess?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * `ReadOnly`
   * `ReadWrite`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class
   * [CoreWebView2.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1661.34&preserve-view=true#postsharedbuffertoscript)

* `CoreWebView2Environment` Class
   * [ICoreWebView2Environment.CreateSharedBuffer Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1661.34&preserve-view=true#createsharedbuffer)

* `CoreWebView2Frame` Class
   * [CoreWebView2Frame.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.1661.34&preserve-view=true#postsharedbuffertoscript)

* [CoreWebView2SharedBuffer Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.Buffer Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1661.34&preserve-view=true#buffer)
   * [CoreWebView2SharedBuffer.Size Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1661.34&preserve-view=true#size)
   * [CoreWebView2SharedBuffer.Close Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1661.34&preserve-view=true#close)
   * [CoreWebView2SharedBuffer.OpenStream Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1661.34&preserve-view=true#openstream)

* [CoreWebView2SharedBufferAccess Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbufferaccess?view=webview2-winrt-1.0.1661.34&preserve-view=true)
   * `ReadOnly`
   * `ReadWrite`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_17](/microsoft-edge/webview2/reference/win32/icorewebview2_17?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2_17::PostSharedBufferToScript](/microsoft-edge/webview2/reference/win32/icorewebview2_17?view=webview2-1.0.1661.34&preserve-view=true#postsharedbuffertoscript)

* [ICoreWebView2Environment12](/microsoft-edge/webview2/reference/win32/icorewebview2environment12?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2Environment12::CreateSharedBuffer](/microsoft-edge/webview2/reference/win32/icorewebview2environment12?view=webview2-1.0.1661.34&preserve-view=true#createsharedbuffer)

* [ICoreWebView2Frame4](/microsoft-edge/webview2/reference/win32/icorewebview2frame4?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2Frame4::PostSharedBufferToScript](/microsoft-edge/webview2/reference/win32/icorewebview2frame4?view=webview2-1.0.1661.34&preserve-view=true#postsharedbuffertoscript)

* [ICoreWebView2SharedBuffer](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2SharedBuffer::OpenStream](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1661.34&preserve-view=true#openstream)
   * [ICoreWebView2SharedBuffer::Close](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1661.34&preserve-view=true#close)
   * [ICoreWebView2SharedBuffer::get_Size](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1661.34&preserve-view=true#get_size)
   * [ICoreWebView2SharedBuffer::get_Buffer](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1661.34&preserve-view=true#get_buffer)
   * [ICoreWebView2SharedBuffer::get_FileMappingHandle](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1661.34&preserve-view=true#get_filemappinghandle)

* [COREWEBVIEW2_SHARED_BUFFER_ACCESS](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1661.34&preserve-view=true#corewebview2_shared_buffer_access)
   * `COREWEBVIEW2_SHARED_BUFFER_ACCESS_READ_ONLY`
   * `COREWEBVIEW2_SHARED_BUFFER_ACCESS_READ_WRITE`

---


<!-- ------------------------------ -->
*  APIs for managing permissions:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2PermissionKind` Enum
   * [CoreWebView2PermissionKind.MidiSystemExclusiveMessages Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* `CoreWebView2PermissionRequestedEventArgs` Event
   * [CoreWebView2PermissionRequestedEventArgs.SavesInProfile Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionrequestedeventargs.savesinprofile?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* [CoreWebView2PermissionSetting Class](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionkind?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionorigin?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionState Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionstate?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.getnondefaultpermissionsettingsasync?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.setpermissionstateasync?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2PermissionKind` Enum
   * [CoreWebView2PermissionKind.MidiSystemExclusiveMessages Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind?view=webview2-winrt-1.0.1661.34&preserve-view=true)

* `CoreWebView2PermissionRequestedEventArgs` Event
   * [CoreWebView2PermissionRequestedEventArgs.SavesInProfile Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionrequestedeventargs?view=webview2-winrt-1.0.1661.34&preserve-view=true#savesinprofile)

* [CoreWebView2PermissionSetting Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1661.34&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1661.34&preserve-view=true#permissionkind)
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1661.34&preserve-view=true#permissionorigin)
   * [CoreWebView2PermissionSetting.PermissionState Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1661.34&preserve-view=true#permissionstate)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1661.34&preserve-view=true#getnondefaultpermissionsettingsasync)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1661.34&preserve-view=true#setpermissionstateasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2GetNonDefaultPermissionSettingsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2getnondefaultpermissionsettingscompletedhandler?view=webview2-1.0.1661.34&preserve-view=true)

* [ICoreWebView2PermissionRequestedEventArgs3](/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs3?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2PermissionRequestedEventArgs3::get_SavesInProfile](/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs3?view=webview2-1.0.1661.34&preserve-view=true#get_savesinprofile)
   * [ICoreWebView2PermissionRequestedEventArgs3::put_SavesInProfile](/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs3?view=webview2-1.0.1661.34&preserve-view=true#put_savesinprofile)

* [ICoreWebView2PermissionSetting](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2PermissionSetting::get_PermissionKind](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting?view=webview2-1.0.1661.34&preserve-view=true#get_permissionkind)
   * [ICoreWebView2PermissionSetting::get_PermissionOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting?view=webview2-1.0.1661.34&preserve-view=true#get_permissionorigin)
   * [ICoreWebView2PermissionSetting::get_PermissionState](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting?view=webview2-1.0.1661.34&preserve-view=true#get_permissionstate)

* [ICoreWebView2PermissionSettingCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsettingcollectionview?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2PermissionSettingCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsettingcollectionview?view=webview2-1.0.1661.34&preserve-view=true#getvalueatindex)
   * [ICoreWebView2PermissionSettingCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsettingcollectionview?view=webview2-1.0.1661.34&preserve-view=true#get_count)

* [ICoreWebView2Profile4](/microsoft-edge/webview2/reference/win32/icorewebview2profile4?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2Profile4::GetNonDefaultPermissionSettings](/microsoft-edge/webview2/reference/win32/icorewebview2profile4?view=webview2-1.0.1661.34&preserve-view=true#getnondefaultpermissionsettings)
   * [ICoreWebView2Profile4::SetPermissionState](/microsoft-edge/webview2/reference/win32/icorewebview2profile4?view=webview2-1.0.1661.34&preserve-view=true#setpermissionstate)

* [ICoreWebView2SetPermissionStateCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2setpermissionstatecompletedhandler?view=webview2-1.0.1661.34&preserve-view=true)

* `COREWEBVIEW2_PERMISSION_KIND` Enum
   * [COREWEBVIEW2_PERMISSION_KIND_MIDI_SYSTEM_EXCLUSIVE_MESSAGES enum value](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1661.34&preserve-view=true#corewebview2_permission_kind)

---


<!-- ------------------------------ -->
APIs for managing tracking prevention:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class
   * [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.enabletrackingprevention?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.preferredtrackingpreventionlevel?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* [CoreWebView2TrackingPreventionLevel Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2trackingpreventionlevel?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
    * `None`
    * `Basic`
    * `Balanced`
    * `Strict`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class
   * [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1661.34&preserve-view=true#enabletrackingprevention)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1661.34&preserve-view=true#preferredtrackingpreventionlevel)

* [CoreWebView2TrackingPreventionLevel Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2trackingpreventionlevel?view=webview2-winrt-1.0.1661.34&preserve-view=true)
    * `None`
    * `Basic`
    * `Balanced`
    * `Strict`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions5](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2EnvironmentOptions5::EnableTrackingPrevention property (get](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5?view=webview2-1.0.1661.34&preserve-view=true#get_enabletrackingprevention), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5?view=webview2-1.0.1661.34&preserve-view=true#put_enabletrackingprevention)

* [ICoreWebView2Profile3](/microsoft-edge/webview2/reference/win32/icorewebview2profile3?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2Profile3::PreferredTrackingPreventionLevel property (get](/microsoft-edge/webview2/reference/win32/icorewebview2profile3?view=webview2-1.0.1661.34&preserve-view=true#get_preferredtrackingpreventionlevel), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2profile3?view=webview2-1.0.1661.34&preserve-view=true#put_preferredtrackingpreventionlevel)

* [COREWEBVIEW2_TRACKING_PREVENTION_LEVEL enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1661.34&preserve-view=true#corewebview2_tracking_prevention_level)
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_NONE`
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_BASIC`
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_BALANCED`
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_STRICT`

---


<!-- ------------------------------ -->
*  APIs to manage the value of the controller's script locale:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ControllerOptions` Class
   * [CoreWebView2ControllerOptions.ScriptLocale Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.scriptlocale?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ControllerOptions` Class
   * [CoreWebView2ControllerOptions.ScriptLocale Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.1661.34&preserve-view=true#scriptlocale)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ControllerOptions2](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2ControllerOptions2::get_ScriptLocale](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2?view=webview2-1.0.1661.34&preserve-view=true#get_scriptlocale)
   * [ICoreWebView2ControllerOptions2::put_ScriptLocale](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2?view=webview2-1.0.1661.34&preserve-view=true#put_scriptlocale)

---

<!-- end of Release SDK 1.0.1661.34, for Runtime 111 (Mar. 20, 2023) -->


<!-- ====================================================================== -->
## See also

* [About release notes for the WebView2 SDK](./about.md)
* [Release notes for the WebView2 SDK](./index.md)
* [Overview of WebView2 APIs](../concepts/overview-features-apis.md) - outlines many of the APIs, by feature area, that are in Release SDK packages.
* [Contacting the Microsoft Edge WebView2 team](../contact.md)
