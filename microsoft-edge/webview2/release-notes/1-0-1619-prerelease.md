---
title: Release Notes for WebView2 Prerelease SDK 1.0.1619-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 01/19/2023
---
# Release Notes for WebView2 Prerelease SDK 1.0.1619-prerelease

Release Date: January 19, 2023

[NuGet package for WebView2 SDK 1.0.1619-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1619-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 111.0.1619.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:


<!-- ------------------------------ -->
*  Added support for the Permission management API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2PermissionRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionrequestedeventargs?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2PermissionRequestedEventArgs.SavesInProfile Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionrequestedeventargs.savesinprofile?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
* [CoreWebView2Profile Class](/dotnet/api/microsoft.web.webview2.core.corewebview2profile?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.getnondefaultpermissionsettingsasync?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.setpermissionstateasync?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
* [CoreWebView2PermissionSetting Class](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionkind?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2PermissionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
      * `MultipleAutomaticDownloads`
      * `FileReadWrite`
      * `Autoplay`
      * `LocalFonts`
      * `MidiSystemExclusiveMessageAccess`
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionorigin?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionState Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionstate?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2PermissionRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionrequestedeventargs?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2PermissionRequestedEventArgs.SavesInProfile Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionrequestedeventargs?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#savesinprofile)
* [CoreWebView2Profile Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#getnondefaultpermissionsettingsasync)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#setpermissionstateasync)
* [CoreWebView2PermissionSetting Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#permissionkind)
   * [CoreWebView2PermissionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
      * `MultipleAutomaticDownloads`
      * `FileReadWrite`
      * `Autoplay`
      * `LocalFonts`
      * `MidiSystemExclusiveMessageAccess`
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#permissionorigin)
   * [CoreWebView2PermissionSetting.PermissionState Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#permissionstate)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalPermissionRequestedEventArgs3](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionrequestedeventargs3?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalPermissionRequestedEventArgs3::SavesInProfile property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionrequestedeventargs3?view=webview2-1.0.1619-prerelease&preserve-view=true#get_savesinprofile), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionrequestedeventargs3?view=webview2-1.0.1619-prerelease&preserve-view=true#put_savesinprofile)
* [ICoreWebView2ExperimentalSetPermissionStateCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsetpermissionstatecompletedhandler?view=webview2-1.0.1619-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalGetNonDefaultPermissionSettingsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalgetnondefaultpermissionsettingscompletedhandler?view=webview2-1.0.1619-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalProfile6](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile6?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile6::GetNonDefaultPermissionSettings](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile6?view=webview2-1.0.1619-prerelease&preserve-view=true#getnondefaultpermissionsettings)
   * [ICoreWebView2ExperimentalProfile6::SetPermissionState](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile6?view=webview2-1.0.1619-prerelease&preserve-view=true#setpermissionstate)
* [ICoreWebView2ExperimentalPermissionSettingCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsettingcollectionview?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalPermissionSettingCollectionView::Count property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsettingcollectionview?view=webview2-1.0.1619-prerelease&preserve-view=true#get_count)<!--no put-->
   * [ICoreWebView2ExperimentalPermissionSettingCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsettingcollectionview?view=webview2-1.0.1619-prerelease&preserve-view=true#getvalueatindex)
* [ICoreWebView2ExperimentalPermissionSetting](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsetting?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalPermissionSetting::PermissionKind property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsetting?view=webview2-1.0.1619-prerelease&preserve-view=true#get_permissionkind)<!--no put-->
   * [COREWEBVIEW2_PERMISSION_KIND Enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1619-prerelease&preserve-view=true#corewebview2_permission_kind)
      * `COREWEBVIEW2_PERMISSION_KIND_MULTIPLE_AUTOMATIC_DOWNLOADS`
      * `COREWEBVIEW2_PERMISSION_KIND_FILE_READ_WRITE`
      * `COREWEBVIEW2_PERMISSION_KIND_AUTOPLAY`
      * `COREWEBVIEW2_PERMISSION_KIND_LOCAL_FONTS`
      * `COREWEBVIEW2_PERMISSION_KIND_MIDI_SYSTEM_EXCLUSIVE_MESSAGE_ACCESS`
   * [ICoreWebView2ExperimentalPermissionSetting::PermissionOrigin property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsetting?view=webview2-1.0.1619-prerelease&preserve-view=true#get_permissionorigin)<!--no put-->
   * [ICoreWebView2ExperimentalPermissionSetting::PermissionState property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsetting?view=webview2-1.0.1619-prerelease&preserve-view=true#get_permissionstate)<!--no put-->

---


<!-- ------------------------------ -->
*  Added support for API to disable back and forward navigation:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2NavigationStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2NavigationStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationstartingeventargs?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalNavigationStartingEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnavigationstartingeventargs2?view=webview2-1.0.1619-prerelease&preserve-view=true)

---


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
*  The Custom Scheme Registration API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2EnvironmentOptions.CustomSchemeRegistrations Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.customschemeregistrations?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
* [CoreWebView2CustomSchemeRegistration Class](/dotnet/api/microsoft.web.webview2.core.corewebview2customschemeregistration?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
* [CoreWebView2CustomSchemeRegistration Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2customschemeregistration?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions4](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2EnvironmentOptions4::GetCustomSchemeRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.1619-prerelease&preserve-view=true#getcustomschemeregistrations)
   * [ICoreWebView2EnvironmentOptions4::SetCustomSchemeRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.1619-prerelease&preserve-view=true#setcustomschemeregistrations)
* [ICoreWebView2CustomSchemeRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2CustomSchemeRegistration::GetAllowedOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#getallowedorigins)
   * [ICoreWebView2CustomSchemeRegistration::SetAllowedOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#setallowedorigins)
   * [ICoreWebView2CustomSchemeRegistration::HasAuthorityComponent property (get](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#get_hasauthoritycomponent), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#put_hasauthoritycomponent)
   * [ICoreWebView2CustomSchemeRegistration::SchemeName property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#get_schemename)<!--no put-->
   * [ICoreWebView2CustomSchemeRegistration::TreatAsSecure property (get](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#get_treatassecure), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#put_treatassecure)

---


<!-- ------------------------------ -->
*  The Tracking Prevention API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.enabletrackingprevention?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
* [CoreWebView2Profile Class](/dotnet/api/microsoft.web.webview2.core.corewebview2profile?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.preferredtrackingpreventionlevel?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#enabletrackingprevention)
* [CoreWebView2Profile Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#preferredtrackingpreventionlevel)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions5](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2EnvironmentOptions5::EnableTrackingPrevention property (get](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5?view=webview2-1.0.1619-prerelease&preserve-view=true#get_enabletrackingprevention), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5?view=webview2-1.0.1619-prerelease&preserve-view=true#put_enabletrackingprevention)
* [ICoreWebView2Profile3](/microsoft-edge/webview2/reference/win32/icorewebview2profile3?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2Profile3::PreferredTrackingPreventionLevel property (get](/microsoft-edge/webview2/reference/win32/icorewebview2profile3?view=webview2-1.0.1619-prerelease&preserve-view=true#get_preferredtrackingpreventionlevel), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2profile3?view=webview2-1.0.1619-prerelease&preserve-view=true#put_preferredtrackingpreventionlevel)

---


<!-- ====================================================================== -->
## Bug fixes

*  Disabled **Open link as Profile** in the WebView2 context menu.
*  Fixed post data missing in form submit with Ctrl-click. ([Issue #2652](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2652))
*  Fixed a bug where the user is not able to get the custom context menu on PDF Viewer. ([Issue #2607](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2607))
*  Fixed a bug where the entire toolbar is blank when simultaneously hiding the **Bookmarks**, **Search**, and **PageSelector** buttons. ([Issue #2866](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2866))
*  Fixed a bug where the app crashes when trying to move focus to WebView2 when it is disabled.
*  Fixed drag and drop within the WebView2 for composition-hosted WebViews.
*  Removed read-aloud icon in address bar in a WebView2 popup window.
*  Fixed unexpected items in the context menu of popup windows in WebView2.


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
