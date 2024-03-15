---
title: Release Notes for WebView2 Prerelease SDK 1.0.1671-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/15/2023
---
# Release Notes for WebView2 Prerelease SDK 1.0.1671-prerelease

Release Date: February 15, 2023

[NuGet package for WebView2 SDK 1.0.1671-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1671-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 112.0.1671.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:

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


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


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


<!-- ====================================================================== -->
## Bug fixes

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


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
