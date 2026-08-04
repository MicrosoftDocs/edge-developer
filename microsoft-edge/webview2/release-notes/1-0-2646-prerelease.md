---
title: Prerelease SDK 1.0.2646-prerelease, for Runtime 128 (Jun. 19, 2024)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.2646-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.2646-prerelease, for Runtime 128 (Jun. 19, 2024)

Release Date: Jun. 19, 2024

[NuGet package for WebView2 SDK 1.0.2646-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2646-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 128.0.2646.0 or later.

**Detailed contents:**
* [General features](#general-features)
* [Experimental features](#experimental-features)
* [Experimental APIs (Phase 1: Experimental in Prerelease)](#experimental-apis-phase-1-experimental-in-prerelease)
   * [Configure the security warning when saving a file (SaveFileSecurityCheckStarting event)](#configure-the-security-warning-when-saving-a-file-savefilesecuritycheckstarting-event)
   * [Control whether the screen capture UI is shown (ScreenCaptureStarting event)](#control-whether-the-screen-capture-ui-is-shown-screencapturestarting-event)
   * [GetComICoreWebView2 method](#getcomicorewebview2-method)
* [Promotions to Phase 2 (Stable in Prerelease)](#promotions-to-phase-2-stable-in-prerelease)
   * [WebMessageObjects API: Inject DOM objects; file system handle](#webmessageobjects-api-inject-dom-objects-file-system-handle)
* [Bug fixes](#bug-fixes)
   * [Runtime-only](#runtime-only)
* [See also](#see-also)


<!-- ====================================================================== -->
## General features

* Added support for C#/WinRT .NET 6+.


<!-- ====================================================================== -->
## Experimental features

* Introduced the feature flag `msWebView2EnableDownloadContentInWebResourceResponseReceived`, an an Experimental feature (rather than as a Stable feature).  When this flag is enabled, this allows responses of navigations that become downloads to be available in `WebResourceResponseReceived`.


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Configure the security warning when saving a file (`SaveFileSecurityCheckStarting` event)

Added a new `SaveFileSecurityCheckStarting` event.  Your app can register a handler on this event to get the file path, filename extension, and document origin URI information.  You can then apply your own rules to do actions such as the following:
* Allow saving the file without presenting a default security-warning UI about the file-type policy.
* Cancel the saving.
* Create your own UI to manage runtime file-type policies.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.SaveFileSecurityCheckStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.savefilesecuritycheckstarting?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)

* [CoreWebView2SaveFileSecurityCheckStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.CancelSave Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.cancelsave?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.DocumentOriginUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.documentoriginuri?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.FileExtension Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.fileextension?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.FilePath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.filepath?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.SuppressDefaultPolicy Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.suppressdefaultpolicy?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.getdeferral?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.SaveFileSecurityCheckStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#savefilesecuritycheckstarting)

* [CoreWebView2SaveFileSecurityCheckStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.CancelSave Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#cancelsave)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.DocumentOriginUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#documentoriginuri)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.FileExtension Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#fileextension)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.FilePath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#filepath)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.SuppressDefaultPolicy Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#suppressdefaultpolicy)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#getdeferral)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental27](/microsoft-edge/webview2/reference/win32/icorewebview2experimental27?view=webview2-1.0.2646-prerelease&preserve-view=true)
   * [ICoreWebView2Experimental27::add_SaveFileSecurityCheckStarting](/microsoft-edge/webview2/reference/win32/icorewebview2experimental27?view=webview2-1.0.2646-prerelease&preserve-view=true#add_savefilesecuritycheckstarting)
   * [ICoreWebView2Experimental27::remove_SaveFileSecurityCheckStarting](/microsoft-edge/webview2/reference/win32/icorewebview2experimental27?view=webview2-1.0.2646-prerelease&preserve-view=true#remove_savefilesecuritycheckstarting)

* [ICoreWebView2ExperimentalSaveFileSecurityCheckStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsavefilesecuritycheckstartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalSaveFileSecurityCheckStartingEventArgs::get_CancelSave](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsavefilesecuritycheckstartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#get_cancelsave)
   * [ICoreWebView2ExperimentalSaveFileSecurityCheckStartingEventArgs::get_DocumentOriginUri](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsavefilesecuritycheckstartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#get_documentoriginuri)
   * [ICoreWebView2ExperimentalSaveFileSecurityCheckStartingEventArgs::get_FileExtension](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsavefilesecuritycheckstartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#get_fileextension)
   * [ICoreWebView2ExperimentalSaveFileSecurityCheckStartingEventArgs::get_FilePath](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsavefilesecuritycheckstartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#get_filepath)
   * [ICoreWebView2ExperimentalSaveFileSecurityCheckStartingEventArgs::get_SuppressDefaultPolicy](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsavefilesecuritycheckstartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#get_suppressdefaultpolicy)
   * [ICoreWebView2ExperimentalSaveFileSecurityCheckStartingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsavefilesecuritycheckstartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#getdeferral)
   * [ICoreWebView2ExperimentalSaveFileSecurityCheckStartingEventArgs::put_CancelSave](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsavefilesecuritycheckstartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#put_cancelsave)
   * [ICoreWebView2ExperimentalSaveFileSecurityCheckStartingEventArgs::put_SuppressDefaultPolicy](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsavefilesecuritycheckstartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#put_suppressdefaultpolicy)

* [ICoreWebView2ExperimentalSaveFileSecurityCheckStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsavefilesecuritycheckstartingeventhandler?view=webview2-1.0.2646-prerelease&preserve-view=true)<!-- Win32-only -->

---


<!-- ------------------------------ -->
#### Control whether the screen capture UI is shown (`ScreenCaptureStarting` event)

Added a new `ScreenCaptureStarting` event.  This event is raised whenever the WebView2 and/or iframe that corresponds to the `CoreWebView2Frame` (or to any of its descendant iframes) requests permission to use the Screen Capture API before the UI is shown.  The app can then block the UI from being displayed, or allow the UI to be displayed.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ScreenCaptureStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.screencapturestarting?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.ScreenCaptureStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.screencapturestarting?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)

* `CoreWebView2ScreenCaptureStartingEventArgs` Class:
   * [CoreWebView2ScreenCaptureStartingEventArgs.Cancel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.cancel?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.Handled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.handled?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.OriginalSourceFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.originalsourceframeinfo?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.getdeferral?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ScreenCaptureStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#screencapturestarting)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.ScreenCaptureStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#screencapturestarting)

* `CoreWebView2ScreenCaptureStartingEventArgs` Class:
   * [CoreWebView2ScreenCaptureStartingEventArgs.Cancel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#cancel)
   * [CoreWebView2ScreenCaptureStartingEventArgs.Handled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#handled)
   * [CoreWebView2ScreenCaptureStartingEventArgs.OriginalSourceFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#originalsourceframeinfo)
   * [CoreWebView2ScreenCaptureStartingEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#getdeferral)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental26](/microsoft-edge/webview2/reference/win32/icorewebview2experimental26?view=webview2-1.0.2646-prerelease&preserve-view=true)
   * [ICoreWebView2Experimental26::add_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2experimental26?view=webview2-1.0.2646-prerelease&preserve-view=true#add_screencapturestarting)
   * [ICoreWebView2Experimental26::remove_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2experimental26?view=webview2-1.0.2646-prerelease&preserve-view=true#remove_screencapturestarting)

* [ICoreWebView2ExperimentalFrame6](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe6?view=webview2-1.0.2646-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalFrame6::add_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe6?view=webview2-1.0.2646-prerelease&preserve-view=true#add_screencapturestarting)
   * [ICoreWebView2ExperimentalFrame6::remove_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe6?view=webview2-1.0.2646-prerelease&preserve-view=true#remove_screencapturestarting)

* [ICoreWebView2ExperimentalFrameScreenCaptureStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframescreencapturestartingeventhandler?view=webview2-1.0.2646-prerelease&preserve-view=true)<!-- Win32-only -->

* [ICoreWebView2ExperimentalScreenCaptureStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalscreencapturestartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalScreenCaptureStartingEventArgs::get_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalscreencapturestartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#get_cancel)
   * [ICoreWebView2ExperimentalScreenCaptureStartingEventArgs::get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalscreencapturestartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#get_handled)
   * [ICoreWebView2ExperimentalScreenCaptureStartingEventArgs::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalscreencapturestartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#get_originalsourceframeinfo)
   * [ICoreWebView2ExperimentalScreenCaptureStartingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalscreencapturestartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#getdeferral)
   * [ICoreWebView2ExperimentalScreenCaptureStartingEventArgs::put_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalscreencapturestartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#put_cancel)
   * [ICoreWebView2ExperimentalScreenCaptureStartingEventArgs::put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalscreencapturestartingeventargs?view=webview2-1.0.2646-prerelease&preserve-view=true#put_handled)

* [ICoreWebView2ExperimentalScreenCaptureStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalscreencapturestartingeventhandler?view=webview2-1.0.2646-prerelease&preserve-view=true)<!-- Win32-only -->

---


<!-- ------------------------------ -->
#### `GetComICoreWebView2` method

Added a new `GetComICoreWebView2` method to the `CoreWebView2` .NET class that enables you to convert a `CoreWebView2` between .NET and COM.

Added a new WinRT interface that enables you to convert a `CoreWebView2` between WinRT and COM.  This allows you to interoperate between libraries that are written in different languages.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.GetComICoreWebView2 Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.getcomicorewebview2?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `ICoreWebView2Interop2` Interface:
   * [ICoreWebView2Interop2::GetComICoreWebView2 Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2interop2?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#getcomicorewebview2)

##### [Win32/C++](#tab/win32cpp)

Not applicable.

---


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### WebMessageObjects API: Inject DOM objects; file system handle

Updated the WebMessageObjects API to allow injecting DOM objects into WebView2 content that's constructed via the app, and via the `CoreWebView2.PostWebMessage` API in the other direction.

Added a new web object type (`CoreWebView2FileSystemHandle`) to represent a file system handle that can be posted to the web content to provide it with file system access.

Previous phase: [WebMessageObjects API: Inject DOM objects; file system handle](./1-0-2470-prerelease.md#webmessageobjects-api-inject-dom-objects-file-system-handle) in _Prerelease SDK 1.0.2470-prerelease, for Runtime 124 (Mar. 25, 2024)_.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostWebMessageAsJsonWithAdditionalObjects Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postwebmessageasjsonwithadditionalobjects?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateWebFileSystemDirectoryHandle Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createwebfilesystemdirectoryhandle?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * [CoreWebView2Environment.CreateWebFileSystemFileHandle Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createwebfilesystemfilehandle?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)

* `CoreWebView2FileSystemHandle` Class:
   * [CoreWebView2FileSystemHandle.Kind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandle.kind?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * [CoreWebView2FileSystemHandle.Path Property](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandle.path?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * [CoreWebView2FileSystemHandle.Permission Property](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandle.permission?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)

* [CoreWebView2FileSystemHandleKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandlekind?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * `File`
   * `Directory`

* [CoreWebView2FileSystemHandlePermission Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandlepermission?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)
   * `ReadOnly`
   * `ReadWrite`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostWebMessageAsJsonWithAdditionalObjects Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#postwebmessageasjsonwithadditionalobjects)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateWebFileSystemDirectoryHandle Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#createwebfilesystemdirectoryhandle)
   * [CoreWebView2Environment.CreateWebFileSystemFileHandle Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#createwebfilesystemfilehandle)

* `CoreWebView2FileSystemHandle` Class:
   * [CoreWebView2FileSystemHandle.Kind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandle?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#kind)
   * [CoreWebView2FileSystemHandle.Path Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandle?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#path)
   * [CoreWebView2FileSystemHandle.Permission Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandle?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#permission)

* [CoreWebView2FileSystemHandleKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandlekind?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true)
   * `File`
   * `Directory`

* [CoreWebView2FileSystemHandlePermission Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandlepermission?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true)
   * `ReadOnly`
   * `ReadWrite`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_23](/microsoft-edge/webview2/reference/win32/icorewebview2_23?view=webview2-1.0.2646-prerelease&preserve-view=true)
   * [ICoreWebView2_23::PostWebMessageAsJsonWithAdditionalObjects](/microsoft-edge/webview2/reference/win32/icorewebview2_23?view=webview2-1.0.2646-prerelease&preserve-view=true#postwebmessageasjsonwithadditionalobjects)

* [ICoreWebView2Environment14](/microsoft-edge/webview2/reference/win32/icorewebview2environment14?view=webview2-1.0.2646-prerelease&preserve-view=true)
   * [ICoreWebView2Environment14::CreateObjectCollection](/microsoft-edge/webview2/reference/win32/icorewebview2environment14?view=webview2-1.0.2646-prerelease&preserve-view=true#createobjectcollection)<!--win32 only-->
   * [ICoreWebView2Environment14::CreateWebFileSystemDirectoryHandle](/microsoft-edge/webview2/reference/win32/icorewebview2environment14?view=webview2-1.0.2646-prerelease&preserve-view=true#createwebfilesystemdirectoryhandle)
   * [ICoreWebView2Environment14::CreateWebFileSystemFileHandle](/microsoft-edge/webview2/reference/win32/icorewebview2environment14?view=webview2-1.0.2646-prerelease&preserve-view=true#createwebfilesystemfilehandle)

* [ICoreWebView2FileSystemHandle](/microsoft-edge/webview2/reference/win32/icorewebview2filesystemhandle?view=webview2-1.0.2646-prerelease&preserve-view=true)
   * [ICoreWebView2FileSystemHandle::get_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2filesystemhandle?view=webview2-1.0.2646-prerelease&preserve-view=true#get_kind)
   * [ICoreWebView2FileSystemHandle::get_Path](/microsoft-edge/webview2/reference/win32/icorewebview2filesystemhandle?view=webview2-1.0.2646-prerelease&preserve-view=true#get_path)
   * [ICoreWebView2FileSystemHandle::get_Permission](/microsoft-edge/webview2/reference/win32/icorewebview2filesystemhandle?view=webview2-1.0.2646-prerelease&preserve-view=true#get_permission)

* [ICoreWebView2ObjectCollection](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollection?view=webview2-1.0.2646-prerelease&preserve-view=true)
   * [ICoreWebView2ObjectCollection::InsertValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollection?view=webview2-1.0.2646-prerelease&preserve-view=true#insertvalueatindex)
   * [ICoreWebView2ObjectCollection::RemoveValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollection?view=webview2-1.0.2646-prerelease&preserve-view=true#removevalueatindex)

* [COREWEBVIEW2_FILE_SYSTEM_HANDLE_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2646-prerelease&preserve-view=true#corewebview2_file_system_handle_kind)
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_KIND_FILE`
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_KIND_DIRECTORY`

* [COREWEBVIEW2_FILE_SYSTEM_HANDLE_PERMISSION enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2646-prerelease&preserve-view=true#corewebview2_file_system_handle_permission)
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_PERMISSION_READ_ONLY`
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_PERMISSION_READ_WRITE`

---


<!-- ====================================================================== -->
## Bug fixes


<!-- ------------------------------ -->
#### Runtime-only

* Fixed a bug in owned-window activation logic for visual hosting.


<!-- ====================================================================== -->
## See also

* [Release notes for the WebView2 SDK](./index.md)
