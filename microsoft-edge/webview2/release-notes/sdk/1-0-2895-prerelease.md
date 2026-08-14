---
title: Prerelease SDK 1.0.2895-prerelease, for Runtime 131 (Oct. 21, 2024)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.2895-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 10/21/2024
---
# Prerelease SDK 1.0.2895-prerelease, for Runtime 131 (Oct. 21, 2024)

Release notes for Microsoft Edge WebView2 Prerelease SDK, release date: Oct. 21, 2024.

[NuGet package for WebView2 SDK 1.0.2895-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2895-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 131.0.2895.0 or later.

**Detailed contents:**
* [Experimental APIs (Phase 1: Experimental in Prerelease)](#experimental-apis-phase-1-experimental-in-prerelease)
   * [RestartRequested event when WebView2 needs to restart](#restartrequested-event-when-webview2-needs-to-restart)
* [Promotions to Phase 2 (Stable in Prerelease)](#promotions-to-phase-2-stable-in-prerelease)
   * [Control whether the screen capture UI is shown (ScreenCaptureStarting event)](#control-whether-the-screen-capture-ui-is-shown-screencapturestarting-event)
   * [Configure the security warning when saving a file (SaveFileSecurityCheckStarting event)](#configure-the-security-warning-when-saving-a-file-savefilesecuritycheckstarting-event)
* [Bug fixes](#bug-fixes)
* [See also](#see-also)


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### `RestartRequested` event when WebView2 needs to restart

Added a new `RestartRequested` event.  The `RestartRequested` event is raised whenever WebView2 needs to restart to apply updates or configuration changes.  You can use this API to detect when WebView2 needs to restart, and take appropriate actions.  The `Priority` property of the `RestartRequested` event arguments indicates the priority of the restart request:
* `High` indicates that the app should prompt users to restart as soon as possible.
* `Normal` indicates that the app should remind users to restart, on a best-effort basis.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.RestartRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.restartrequested?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)

* `CoreWebView2RestartRequestedEventArgs` Class:
   * [CoreWebView2RestartRequestedEventArgs.Priority Property](/dotnet/api/microsoft.web.webview2.core.corewebview2restartrequestedeventargs.priority?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)

* [CoreWebView2RestartRequestedPriority Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2restartrequestedpriority?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)
   * `CoreWebView2RestartRequestedPriority.Normal`
   * `CoreWebView2RestartRequestedPriority.High`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.RestartRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#restartrequested)

* `CoreWebView2RestartRequestedEventArgs` Class:
   * [CoreWebView2RestartRequestedEventArgs.Priority Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2restartrequestedeventargs?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#priority)

* [CoreWebView2RestartRequestedPriority Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2restartrequestedpriority?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true)
   * `CoreWebView2RestartRequestedPriority.Normal`
   * `CoreWebView2RestartRequestedPriority.High`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalEnvironment15](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment15?view=webview2-1.0.2895-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalEnvironment15::add_RestartRequested](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment15?view=webview2-1.0.2895-prerelease&preserve-view=true#add_restartrequested)
  * [ICoreWebView2ExperimentalEnvironment15::remove_RestartRequested](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment15?view=webview2-1.0.2895-prerelease&preserve-view=true#remove_restartrequested)

* [ICoreWebView2ExperimentalRestartRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalrestartrequestedeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalRestartRequestedEventArgs::get_Priority](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalrestartrequestedeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#get_priority)<!-- no put -->
* [ICoreWebView2ExperimentalRestartRequestedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalrestartrequestedeventhandler?view=webview2-1.0.2895-prerelease&preserve-view=true)

* [COREWEBVIEW2_RESTART_REQUESTED_PRIORITY enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2895-prerelease&preserve-view=true#corewebview2_restart_requested_priority)
  * `COREWEBVIEW2_RESTART_REQUESTED_PRIORITY_NORMAL`
  * `COREWEBVIEW2_RESTART_REQUESTED_PRIORITY_HIGH`

---


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### Control whether the screen capture UI is shown (`ScreenCaptureStarting` event)

Added a new `ScreenCaptureStarting` event.  This event is raised whenever the WebView2 and/or iframe that corresponds to the `CoreWebView2Frame` (or to any of its descendant iframes) requests permission to use the Screen Capture API before the UI is shown.  The app can then block the UI from being displayed, or allow the UI to be displayed.

Previous phase: [Control whether the screen capture UI is shown (`ScreenCaptureStarting` event)](./1-0-2646-prerelease.md#control-whether-the-screen-capture-ui-is-shown-screencapturestarting-event) in _Prerelease SDK 1.0.2646-prerelease, for Runtime 128 (Jun. 19, 2024)_.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ScreenCaptureStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.screencapturestarting?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.ScreenCaptureStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.screencapturestarting?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)

* `CoreWebView2ScreenCaptureStartingEventArgs` Class:
   * [CoreWebView2ScreenCaptureStartingEventArgs.Cancel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.cancel?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.Handled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.handled?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.OriginalSourceFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.originalsourceframeinfo?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.getdeferral?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ScreenCaptureStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#screencapturestarting)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.ScreenCaptureStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#screencapturestarting)

* `CoreWebView2ScreenCaptureStartingEventArgs` Class:
   * [CoreWebView2ScreenCaptureStartingEventArgs.Cancel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#cancel)
   * [CoreWebView2ScreenCaptureStartingEventArgs.Handled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#handled)
   * [CoreWebView2ScreenCaptureStartingEventArgs.OriginalSourceFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#originalsourceframeinfo)
   * [CoreWebView2ScreenCaptureStartingEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#getdeferral)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_27](/microsoft-edge/webview2/reference/win32/icorewebview2_27?view=webview2-1.0.2895-prerelease&preserve-view=true)
  * [ICoreWebView2_27::add_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2_27?view=webview2-1.0.2895-prerelease&preserve-view=true#add_screencapturestarting)
  * [ICoreWebView2_27::remove_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2_27?view=webview2-1.0.2895-prerelease&preserve-view=true#remove_screencapturestarting)

* [ICoreWebView2Frame6](/microsoft-edge/webview2/reference/win32/icorewebview2frame6?view=webview2-1.0.2895-prerelease&preserve-view=true)
  * [ICoreWebView2Frame6::add_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2frame6?view=webview2-1.0.2895-prerelease&preserve-view=true#add_screencapturestarting)
  * [ICoreWebView2Frame6::remove_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2frame6?view=webview2-1.0.2895-prerelease&preserve-view=true#remove_screencapturestarting)

* [ICoreWebView2FrameScreenCaptureStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2framescreencapturestartingeventhandler?view=webview2-1.0.2895-prerelease&preserve-view=true)

* [ICoreWebView2ScreenCaptureStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::get_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#get_cancel)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#get_handled)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#get_originalsourceframeinfo)<!-- no put -->
  * [ICoreWebView2ScreenCaptureStartingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#getdeferral)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::put_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#put_cancel)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#put_handled)

* [ICoreWebView2ScreenCaptureStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventhandler?view=webview2-1.0.2895-prerelease&preserve-view=true)

---


<!-- ------------------------------ -->
#### Configure the security warning when saving a file (`SaveFileSecurityCheckStarting` event)

Added a new `SaveFileSecurityCheckStarting` event.  Your app can register a handler on this event to get the file path, filename extension, and document origin URI information.  You can then apply your own rules to do actions such as the following:
* Allow saving the file without presenting a default security-warning UI about the file-type policy.
* Cancel the saving.
* Create your own UI to manage runtime file-type policies.

Previous phase: [Configure the security warning when saving a file (`SaveFileSecurityCheckStarting` event)](./1-0-2646-prerelease.md#configure-the-security-warning-when-saving-a-file-savefilesecuritycheckstarting-event) in _Prerelease SDK 1.0.2646-prerelease, for Runtime 128 (Jun. 19, 2024)_.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.SaveFileSecurityCheckStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.savefilesecuritycheckstarting?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)

* [CoreWebView2SaveFileSecurityCheckStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.CancelSave Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.cancelsave?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.DocumentOriginUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.documentoriginuri?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.FileExtension Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.fileextension?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.FilePath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.filepath?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.SuppressDefaultPolicy Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.suppressdefaultpolicy?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.getdeferral?view=webview2-dotnet-1.0.2895-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.SaveFileSecurityCheckStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#savefilesecuritycheckstarting)

* [CoreWebView2SaveFileSecurityCheckStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.CancelSave Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#cancelsave)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.DocumentOriginUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#documentoriginuri)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.FileExtension Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#fileextension)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.FilePath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#filepath)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.SuppressDefaultPolicy Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#suppressdefaultpolicy)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2895-prerelease&preserve-view=true#getdeferral)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_26](/microsoft-edge/webview2/reference/win32/icorewebview2_26?view=webview2-1.0.2895-prerelease&preserve-view=true)
  * [ICoreWebView2_26::add_SaveFileSecurityCheckStarting](/microsoft-edge/webview2/reference/win32/icorewebview2_26?view=webview2-1.0.2895-prerelease&preserve-view=true#add_savefilesecuritycheckstarting)
  * [ICoreWebView2_26::remove_SaveFileSecurityCheckStarting](/microsoft-edge/webview2/reference/win32/icorewebview2_26?view=webview2-1.0.2895-prerelease&preserve-view=true#remove_savefilesecuritycheckstarting)

* [ICoreWebView2SaveFileSecurityCheckStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::get_CancelSave](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#get_cancelsave)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::get_DocumentOriginUri](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#get_documentoriginuri)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::get_FileExtension](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#get_fileextension)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::get_FilePath](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#get_filepath)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::get_SuppressDefaultPolicy](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#get_suppressdefaultpolicy)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#getdeferral)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::put_CancelSave](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#put_cancelsave)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::put_SuppressDefaultPolicy](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#put_suppressdefaultpolicy)

* [ICoreWebView2SaveFileSecurityCheckStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventhandler?view=webview2-1.0.2895-prerelease&preserve-view=true)

---


<!-- ====================================================================== -->
## Bug fixes

* Fixed Arm64 incompatibility with WindowsAppSDK 1.6.

* Removed extra `WebView2Loader.dll` in WinAppSDK case.

* Using `CoreWebView2.AddWebResourceRequestedFilter` without a `CoreWebView2WebResourceRequestSourceKinds` parameter is now deprecated.  See the .NET [CoreWebView2.AddWebResourceRequestedFilter Method](https://go.microsoft.com/fwlink/?linkid=2286319).<!-- points to WebView2Announcements -->


<!-- ====================================================================== -->
## See also

* [Runtime 131.0.2903.40 (Nov. 18, 2024)](../runtime/131.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
