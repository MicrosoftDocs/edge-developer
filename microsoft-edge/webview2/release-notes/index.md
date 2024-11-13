---
title: Release Notes for the WebView2 SDK
description: Release notes for Microsoft Edge WebView2, covering new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 11/18/2024
---
# Release Notes for the WebView2 SDK

These Release Notes provide information about new features and bug fixes that are included in the WebView2 Release SDK and the WebView2 Prerelease SDK.

<!-- this webpage covers the most recent ~5 months; periodically move oldest h2 sections from bottom of present file to archive.md.  eg covers:
Nov 2024
Oct 2024
Sep 2024
Aug 2024
Jul 2024

moved to archive:
Jun 2024
May 2024
-->


<!-- ====================================================================== -->
## 1.0.2903.40

Release Date: November 18, 2024

[NuGet package for WebView2 SDK 1.0.2903.40](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2903.40)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 131.0.2903.40 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ---------- -->
###### Control whether the screen capture UI is shown (ScreenCaptureStarting event)

Added a new ScreenCaptureStarting event. This event is raised whenever the WebView2 and/or iframe that corresponds to the CoreWebView2Frame (or to any of its descendant iframes) requests permission to use the Screen Capture API before the UI is shown. The app can then block the UI from being displayed, or allow the UI to be displayed.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.ScreenCaptureStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.screencapturestarting?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
* [CoreWebView2Frame.ScreenCaptureStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.screencapturestarting?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
* [CoreWebView2NonClientRegionKind.Close Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
* [CoreWebView2NonClientRegionKind.Maximize Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
* [CoreWebView2NonClientRegionKind.Minimize Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
* [CoreWebView2ScreenCaptureStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
* [CoreWebView2ScreenCaptureStartingEventArgs.Cancel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.cancel?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
* [CoreWebView2ScreenCaptureStartingEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.getdeferral?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
* [CoreWebView2ScreenCaptureStartingEventArgs.Handled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.handled?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
* [CoreWebView2ScreenCaptureStartingEventArgs.OriginalSourceFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.originalsourceframeinfo?view=webview2-dotnet-1.0.2903.40&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2 Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2903.40&preserve-view=true)
* [CoreWebView2.Cancel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2903.40&preserve-view=true#cancel)
* [CoreWebView2.GetDeferral Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2903.40&preserve-view=true#getdeferral)
* [CoreWebView2.Handled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2903.40&preserve-view=true#handled)
* [CoreWebView2.OriginalSourceFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2903.40&preserve-view=true#originalsourceframeinfo)
* [CoreWebView2.ScreenCaptureStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2903.40&preserve-view=true#screencapturestarting)
* [CoreWebView2Frame Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.2903.40&preserve-view=true)
* [CoreWebView2Frame.ScreenCaptureStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.2903.40&preserve-view=true#screencapturestarting)
* [CoreWebView2ScreenCaptureStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2903.40&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

  * `COREWEBVIEW2_NON_CLIENT_REGION_KIND_CLOSE`
  * `COREWEBVIEW2_NON_CLIENT_REGION_KIND_MAXIMIZE`
  * `COREWEBVIEW2_NON_CLIENT_REGION_KIND_MINIMIZE`
* [ICoreWebView2_27](/microsoft-edge/webview2/reference/win32/icorewebview2_27?view=webview2-1.0.2903.40&preserve-view=true)
  * [ICoreWebView2_27::add_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2_27?view=webview2-1.0.2903.40&preserve-view=true#add_screencapturestarting)
  * [ICoreWebView2_27::remove_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2_27?view=webview2-1.0.2903.40&preserve-view=true#remove_screencapturestarting)
* [ICoreWebView2Frame6](/microsoft-edge/webview2/reference/win32/icorewebview2frame6?view=webview2-1.0.2903.40&preserve-view=true)
  * [ICoreWebView2Frame6::add_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2frame6?view=webview2-1.0.2903.40&preserve-view=true#add_screencapturestarting)
  * [ICoreWebView2Frame6::remove_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2frame6?view=webview2-1.0.2903.40&preserve-view=true#remove_screencapturestarting)
* [ICoreWebView2FrameScreenCaptureStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2framescreencapturestartingeventhandler?view=webview2-1.0.2903.40&preserve-view=true)
* [ICoreWebView2ScreenCaptureStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::get_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true#get_cancel)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true#get_handled)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true#get_originalsourceframeinfo)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true#getdeferral)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::put_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true#put_cancel)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true#put_handled)
* [ICoreWebView2ScreenCaptureStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventhandler?view=webview2-1.0.2903.40&preserve-view=true)


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Allow download dialog to receive initial focus on launch


<!-- ---------- -->


<!-- end of Nov 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.####-prerelease

Release Date: November 18, 2024

[NuGet package for WebView2 SDK 1.0.2950-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2950-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 132.0.2950.0 or higher.

<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
###### heading

description

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2NonClientRegionKind.Close Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2950-prerelease&preserve-view=true)
* [CoreWebView2NonClientRegionKind.Maximize Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2950-prerelease&preserve-view=true)
* [CoreWebView2NonClientRegionKind.Minimize Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2950-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)


##### [Win32/C++](#tab/win32cpp)

---
<!-- ------------------------------ -->
#### Promotions

<!-- ---------- -->
###### heading

description

##### [.NET/C#](#tab/dotnetcsharp)

##### [WinRT/C#](#tab/winrtcsharp)

##### [Win32/C++](#tab/win32cpp)

---

<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime and SDK



<!-- ---------- -->
###### Runtime-only

* Allow download dialog to receive initial focus on launch
* Fixed a crash while cancelling navigation to certain sites in FrameNavigationStarting ([Issue #4843](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4843))
* Postponed customize context menu when touch selection menu is showing ([Issue #4737](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4737))


<!-- ---------- -->
###### SDK-only

* Added Arm64ec support
* Fixed an issue where WebView2 running in Window to Visual mode could not receive accelerator input. (SDK)


<!-- end of Nov 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2849.39

Release Date: October 21, 2024

[NuGet package for WebView2 SDK 1.0.2849.39](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2849.39)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 130.0.2849.39 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

<!-- ---------- -->
###### Configure the security warning when saving a file (`SaveFileSecurityCheckStarting` event)

<!--
promoted to Stable in Oct Release SDK
promoted from Experimental to Stable in Oct Prerelease SDK
-->

Added a new `SaveFileSecurityCheckStarting` event.  Your app can register a handler on this event to get the file path, filename extension, and document origin URI information.  You can then apply your own rules to do actions such as the following:
   * Allow saving the file without presenting a default security-warning UI about the file-type policy.
   * Cancel the saving.
   * Create your own UI to manage runtime file-type policies.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.SaveFileSecurityCheckStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.savefilesecuritycheckstarting?view=webview2-dotnet-1.0.2849.39&preserve-view=true)

* [CoreWebView2SaveFileSecurityCheckStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs?view=webview2-dotnet-1.0.2849.39&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.CancelSave Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.cancelsave?view=webview2-dotnet-1.0.2849.39&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.DocumentOriginUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.documentoriginuri?view=webview2-dotnet-1.0.2849.39&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.FileExtension Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.fileextension?view=webview2-dotnet-1.0.2849.39&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.FilePath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.filepath?view=webview2-dotnet-1.0.2849.39&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.SuppressDefaultPolicy Property](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.suppressdefaultpolicy?view=webview2-dotnet-1.0.2849.39&preserve-view=true)
   * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2savefilesecuritycheckstartingeventargs.getdeferral?view=webview2-dotnet-1.0.2849.39&preserve-view=true)
   
##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
    * [CoreWebView2.SaveFileSecurityCheckStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2849.39&preserve-view=true#savefilesecuritycheckstarting)

* [CoreWebView2SaveFileSecurityCheckStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2849.39&preserve-view=true)
    * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.CancelSave Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2849.39&preserve-view=true#cancelsave)
    * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.DocumentOriginUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2849.39&preserve-view=true#documentoriginuri)
    * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.FileExtension Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2849.39&preserve-view=true#fileextension)
    * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.FilePath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2849.39&preserve-view=true#filepath)
    * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.SuppressDefaultPolicy Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2849.39&preserve-view=true#suppressdefaultpolicy)
    * [CoreWebView2SaveFileSecurityCheckStartingEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2savefilesecuritycheckstartingeventargs?view=webview2-winrt-1.0.2849.39&preserve-view=true#getdeferral)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_26](/microsoft-edge/webview2/reference/win32/icorewebview2_26?view=webview2-1.0.2849.39&preserve-view=true)
  * [ICoreWebView2_26::add_SaveFileSecurityCheckStarting](/microsoft-edge/webview2/reference/win32/icorewebview2_26?view=webview2-1.0.2849.39&preserve-view=true#add_savefilesecuritycheckstarting)
  * [ICoreWebView2_26::remove_SaveFileSecurityCheckStarting](/microsoft-edge/webview2/reference/win32/icorewebview2_26?view=webview2-1.0.2849.39&preserve-view=true#remove_savefilesecuritycheckstarting)

* [ICoreWebView2SaveFileSecurityCheckStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2849.39&preserve-view=true)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::get_CancelSave](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2849.39&preserve-view=true#get_cancelsave)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::get_DocumentOriginUri](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2849.39&preserve-view=true#get_documentoriginuri)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::get_FileExtension](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2849.39&preserve-view=true#get_fileextension)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::get_FilePath](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2849.39&preserve-view=true#get_filepath)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::get_SuppressDefaultPolicy](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2849.39&preserve-view=true#get_suppressdefaultpolicy)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2849.39&preserve-view=true#getdeferral)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::put_CancelSave](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2849.39&preserve-view=true#put_cancelsave)
  * [ICoreWebView2SaveFileSecurityCheckStartingEventArgs::put_SuppressDefaultPolicy](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventargs?view=webview2-1.0.2849.39&preserve-view=true#put_suppressdefaultpolicy)

* [ICoreWebView2SaveFileSecurityCheckStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2savefilesecuritycheckstartingeventhandler?view=webview2-1.0.2849.39&preserve-view=true)<!-- Win32-only -->

---  


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed a **Download** dialog focus issue when pressing **Tab** or **Shift+Tab** to switch into the Webview2 control.


<!-- ---------- -->
###### SDK-only

* Using `CoreWebView2.AddWebResourceRequestedFilter` without a `CoreWebView2WebResourceRequestSourceKinds` parameter is now deprecated.  See the .NET [CoreWebView2.AddWebResourceRequestedFilter Method](https://go.microsoft.com/fwlink/?linkid=2286319).<!-- points to WebView2Announcements -->


<!-- end of Oct 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2895-prerelease

Release Date: October 21, 2024

[NuGet package for WebView2 SDK 1.0.2895-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2895-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 131.0.2895.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
###### `RestartRequested` event when WebView2 needs to restart

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

* [COREWEBVIEW2_RESTART_REQUESTED_PRIORITY Enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2895-prerelease&preserve-view=true#corewebview2_restart_requested_priority)
  * `COREWEBVIEW2_RESTART_REQUESTED_PRIORITY_NORMAL`
  * `COREWEBVIEW2_RESTART_REQUESTED_PRIORITY_HIGH`

---


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ---------- -->
###### Control whether the screen capture UI is shown (`ScreenCaptureStarting` event)

Added a new `ScreenCaptureStarting` event.  This event is raised whenever the WebView2 and/or iframe that corresponds to the `CoreWebView2Frame` (or to any of its descendant iframes) requests permission to use the Screen Capture API before the UI is shown.  The app can then block the UI from being displayed, or allow the UI to be displayed.

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
  * [ICoreWebView2ScreenCaptureStartingEventArgs::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#get_originalsourceframeinfo)<!-- todo: no put? -->
  * [ICoreWebView2ScreenCaptureStartingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#getdeferral)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::put_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#put_cancel)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#put_handled)

* [ICoreWebView2ScreenCaptureStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventhandler?view=webview2-1.0.2895-prerelease&preserve-view=true)

---


<!-- ---------- -->
###### Configure the security warning when saving a file (`SaveFileSecurityCheckStarting` event)

<!--
promoted to Stable in Oct Release SDK
promoted from Experimental to Stable in Oct Prerelease SDK
-->

Added a new `SaveFileSecurityCheckStarting` event.  Your app can register a handler on this event to get the file path, filename extension, and document origin URI information.  You can then apply your own rules to do actions such as the following:
   * Allow saving the file without presenting a default security-warning UI about the file-type policy.
   * Cancel the saving.
   * Create your own UI to manage runtime file-type policies.

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

<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
##### SDK-only

* Fixed Arm64 incompatibility with WindowsAppSDK 1.6.
* Removed extra `WebView2Loader.dll` in WinAppSDK case.
* Using `CoreWebView2.AddWebResourceRequestedFilter` without a `CoreWebView2WebResourceRequestSourceKinds` parameter is now deprecated.  See the .NET [CoreWebView2.AddWebResourceRequestedFilter Method](https://go.microsoft.com/fwlink/?linkid=2286319).<!-- points to WebView2Announcements -->


<!-- end of Oct 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2792.45

Release Date: September 23, 2024

[NuGet package for WebView2 SDK 1.0.2792.45](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2792.45)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 129.0.2792.45 or higher.


<!-- ------------------------------ -->
#### Promotions

No additional APIs have been promoted to Stable and added in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### SDK-only

* Fixed an SDK dependency for .NET projects.  ([Issue #4743](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4743))


<!-- end of Sep 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2839-prerelease

Release Date: September 23, 2024

[NuGet package for WebView2 SDK 1.0.2839-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2839-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 130.0.2839.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions

No APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed an issue where focusing on a WebView2 control in WinAppSDK with the Windows "Scroll inactive windows" setting disabled caused scrolling to fail.
* Blocked `edge://wallet` in WebView2.  ([Issue #4710](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4710))
* Cleared the environment variable for default background color in .NET WebView2 controls after the controller has finished creation.
* Enabled accessibility support for Webview2 in visual hosting mode.
* Fixed a bug with removing a "web resource requested" filter for multiple sources when one of them is Document.
* Fixed a regression where `DataList` was not visible in WinUI or in other visually hosted WebView2 instances.


<!-- ---------- -->
###### SDK-only

* Fixed an SDK dependency for .NET projects.  ([Issue #4743](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4743))
* Fixed a compatibility issue when calling `GetAvailableBrowserVersionString()` with an older `WebView2Loader.dll`.  ([Issue #4395](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4395))
* Fixed issues when compiling wv2winrt-generated code with the `cpp20` and `/permissive-` options.


<!-- end of Sep 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2739.15

Release Date: August 26, 2024

[NuGet package for WebView2 SDK 1.0.2739.15](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2739.15)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 128.0.2739.15 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ---------- -->
###### Web notification handling

Added support for Web Notification, for non-persistent notifications.  The `NotificationReceived` event for `CoreWebView2` controls web notification handling, allowing customization or suppression by the host app.  Unhandled notifications default to WebView2's UI.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.NotificationReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.notificationreceived?view=webview2-dotnet-1.0.2739.15&preserve-view=true)

* [CoreWebView2Notification Class](/dotnet/api/microsoft.web.webview2.core.corewebview2notification?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.BadgeUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.badgeuri?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.Body Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.body?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.BodyImageUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.bodyimageuri?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.Direction Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.direction?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.IconUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.iconuri?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.IsSilent Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.issilent?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.Language Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.language?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.RequiresInteraction Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.requiresinteraction?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.ShouldRenotify Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.shouldrenotify?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.Tag Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.tag?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.Timestamp Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.timestamp?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.Title Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.title?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.VibrationPattern Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.vibrationpattern?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.ReportClicked Method](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.reportclicked?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.ReportClosed Method](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.reportclosed?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.ReportShown Method](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.reportshown?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.CloseRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2notification.closerequested?view=webview2-dotnet-1.0.2739.15&preserve-view=true)

* [CoreWebView2NotificationReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2notificationreceivedeventargs?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2NotificationReceivedEventArgs.Handled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notificationreceivedeventargs.handled?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2NotificationReceivedEventArgs.Notification Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notificationreceivedeventargs.notification?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2NotificationReceivedEventArgs.SenderOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2notificationreceivedeventargs.senderorigin?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2NotificationReceivedEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2notificationreceivedeventargs.getdeferral?view=webview2-dotnet-1.0.2739.15&preserve-view=true)

* [CoreWebView2TextDirectionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2textdirectionkind?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * `Default`
   * `LeftToRight`
   * `RightToLeft`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.NotificationReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2739.15&preserve-view=true#notificationreceived)

* [CoreWebView2Notification Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true)
   * [CoreWebView2Notification.BadgeUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#badgeuri)
   * [CoreWebView2Notification.Body Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#body)
   * [CoreWebView2Notification.BodyImageUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#bodyimageuri)
   * [CoreWebView2Notification.Direction Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#direction)
   * [CoreWebView2Notification.IconUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#iconuri)
   * [CoreWebView2Notification.IsSilent Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#issilent)
   * [CoreWebView2Notification.Language Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#language)
   * [CoreWebView2Notification.RequiresInteraction Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#requiresinteraction)
   * [CoreWebView2Notification.ShouldRenotify Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#shouldrenotify)
   * [CoreWebView2Notification.Tag Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#tag)
   * [CoreWebView2Notification.Timestamp Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#timestamp)
   * [CoreWebView2Notification.Title Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#title)
   * [CoreWebView2Notification.VibrationPattern Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#vibrationpattern)
   * [CoreWebView2Notification.ReportClicked Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#reportclicked)
   * [CoreWebView2Notification.ReportClosed Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#reportclosed)
   * [CoreWebView2Notification.ReportShown Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#reportshown)
   * [CoreWebView2Notification.CloseRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2739.15&preserve-view=true#closerequested)

* [CoreWebView2NotificationReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notificationreceivedeventargs?view=webview2-winrt-1.0.2739.15&preserve-view=true)
   * [CoreWebView2NotificationReceivedEventArgs.Handled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notificationreceivedeventargs?view=webview2-winrt-1.0.2739.15&preserve-view=true#handled)
   * [CoreWebView2NotificationReceivedEventArgs.Notification Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notificationreceivedeventargs?view=webview2-winrt-1.0.2739.15&preserve-view=true#notification)
   * [CoreWebView2NotificationReceivedEventArgs.SenderOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notificationreceivedeventargs?view=webview2-winrt-1.0.2739.15&preserve-view=true#senderorigin)
   * [CoreWebView2NotificationReceivedEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notificationreceivedeventargs?view=webview2-winrt-1.0.2739.15&preserve-view=true#getdeferral)

* [CoreWebView2TextDirectionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2textdirectionkind?view=webview2-winrt-1.0.2739.15&preserve-view=true)
   * `Default`
   * `LeftToRight`
   * `RightToLeft`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_24](/microsoft-edge/webview2/reference/win32/icorewebview2_24?view=webview2-1.0.2739.15&preserve-view=true)
   * [ICoreWebView2_24::add_NotificationReceived](/microsoft-edge/webview2/reference/win32/icorewebview2_24?view=webview2-1.0.2739.15&preserve-view=true#add_notificationreceived)
   * [ICoreWebView2_24::remove_NotificationReceived](/microsoft-edge/webview2/reference/win32/icorewebview2_24?view=webview2-1.0.2739.15&preserve-view=true#remove_notificationreceived)

* [ICoreWebView2Notification](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true)
   * [ICoreWebView2Notification::add_CloseRequested](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#add_closerequested)
   * [ICoreWebView2Notification::get_BadgeUri](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#get_badgeuri)
   * [ICoreWebView2Notification::get_Body](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#get_body)
   * [ICoreWebView2Notification::get_BodyImageUri](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#get_bodyimageuri)
   * [ICoreWebView2Notification::get_Direction](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#get_direction)
   * [ICoreWebView2Notification::get_IconUri](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#get_iconuri)
   * [ICoreWebView2Notification::get_IsSilent](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#get_issilent)
   * [ICoreWebView2Notification::get_Language](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#get_language)
   * [ICoreWebView2Notification::get_RequiresInteraction](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#get_requiresinteraction)
   * [ICoreWebView2Notification::get_ShouldRenotify](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#get_shouldrenotify)
   * [ICoreWebView2Notification::get_Tag](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#get_tag)
   * [ICoreWebView2Notification::get_Timestamp](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#get_timestamp)
   * [ICoreWebView2Notification::get_Title](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#get_title)
   * [ICoreWebView2Notification::GetVibrationPattern](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#getvibrationpattern)
   * [ICoreWebView2Notification::remove_CloseRequested](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#remove_closerequested)
   * [ICoreWebView2Notification::ReportClicked](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#reportclicked)
   * [ICoreWebView2Notification::ReportClosed](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#reportclosed)
   * [ICoreWebView2Notification::ReportShown](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2739.15&preserve-view=true#reportshown)

* [ICoreWebView2NotificationCloseRequestedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2notificationcloserequestedeventhandler?view=webview2-1.0.2739.15&preserve-view=true)<!-- Win32-only -->

* [ICoreWebView2NotificationReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2notificationreceivedeventargs?view=webview2-1.0.2739.15&preserve-view=true)
   * [ICoreWebView2NotificationReceivedEventArgs::get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2notificationreceivedeventargs?view=webview2-1.0.2739.15&preserve-view=true#get_handled)
   * [ICoreWebView2NotificationReceivedEventArgs::get_Notification](/microsoft-edge/webview2/reference/win32/icorewebview2notificationreceivedeventargs?view=webview2-1.0.2739.15&preserve-view=true#get_notification)
   * [ICoreWebView2NotificationReceivedEventArgs::get_SenderOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2notificationreceivedeventargs?view=webview2-1.0.2739.15&preserve-view=true#get_senderorigin)
   * [ICoreWebView2NotificationReceivedEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2notificationreceivedeventargs?view=webview2-1.0.2739.15&preserve-view=true#getdeferral)
   * [ICoreWebView2NotificationReceivedEventArgs::put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2notificationreceivedeventargs?view=webview2-1.0.2739.15&preserve-view=true#put_handled)

* [ICoreWebView2NotificationReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2notificationreceivedeventhandler?view=webview2-1.0.2739.15&preserve-view=true)<!-- Win32-only -->

* [`COREWEBVIEW2_TEXT_DIRECTION_KIND` Enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2739.15&preserve-view=true#corewebview2_text_direction_kind)
   * `COREWEBVIEW2_TEXT_DIRECTION_KIND_DEFAULT`
   * `COREWEBVIEW2_TEXT_DIRECTION_KIND_LEFT_TO_RIGHT`
   * `COREWEBVIEW2_TEXT_DIRECTION_KIND_RIGHT_TO_LEFT`

---


<!-- ---------- -->
###### Save as

Added `SaveAs` APIs that allow you to programmatically perform the **Save as** operation.  You can use these APIs to block the default **Save as** dialog, and then either save silently, or build your own UI for **Save as**.  These APIs pertain only to the **Save as** dialog, not the **Download** dialog, which continues to use the existing Download APIs.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ShowSaveAsUIAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showsaveasuiasync?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2.SaveAsUIShowing Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.saveasuishowing?view=webview2-dotnet-1.0.2739.15&preserve-view=true)

* [CoreWebView2SaveAsKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2saveaskind?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * `Complete`
   * `Default`
   * `HtmlOnly`
   * `SingleFile`

* [CoreWebView2SaveAsUIResult Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuiresult?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * `Cancelled`
   * `FileAlreadyExists`
   * `InvalidPath`
   * `KindNotSupported`
   * `Success`

* [CoreWebView2SaveAsUIShowingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2SaveAsUIShowingEventArgs.AllowReplace Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.allowreplace?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2SaveAsUIShowingEventArgs.Cancel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.cancel?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2SaveAsUIShowingEventArgs.ContentMimeType Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.contentmimetype?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2SaveAsUIShowingEventArgs.Kind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.kind?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2SaveAsUIShowingEventArgs.SaveAsFilePath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.saveasfilepath?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2SaveAsUIShowingEventArgs.SuppressDefaultDialog Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.suppressdefaultdialog?view=webview2-dotnet-1.0.2739.15&preserve-view=true)
   * [CoreWebView2SaveAsUIShowingEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.getdeferral?view=webview2-dotnet-1.0.2739.15&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ShowSaveAsUIAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2739.15&preserve-view=true#showsaveasuiasync)
   * [CoreWebView2.SaveAsUIShowing Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2739.15&preserve-view=true#saveasuishowing)

* [CoreWebView2SaveAsKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveaskind?view=webview2-winrt-1.0.2739.15&preserve-view=true)
   * `Default`
   * `HtmlOnly`
   * `SingleFile`
   * `Complete`

* [CoreWebView2SaveAsUIResult Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuiresult?view=webview2-winrt-1.0.2739.15&preserve-view=true)
   * `Success`
   * `InvalidPath`
   * `FileAlreadyExists`
   * `KindNotSupported`
   * `Cancelled`

* [CoreWebView2SaveAsUIShowingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2739.15&preserve-view=true)
   * [CoreWebView2SaveAsUIShowingEventArgs.AllowReplace Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2739.15&preserve-view=true#allowreplace)
   * [CoreWebView2SaveAsUIShowingEventArgs.Cancel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2739.15&preserve-view=true#cancel)
   * [CoreWebView2SaveAsUIShowingEventArgs.ContentMimeType Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2739.15&preserve-view=true#contentmimetype)
   * [CoreWebView2SaveAsUIShowingEventArgs.Kind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2739.15&preserve-view=true#kind)
   * [CoreWebView2SaveAsUIShowingEventArgs.SaveAsFilePath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2739.15&preserve-view=true#saveasfilepath)
   * [CoreWebView2SaveAsUIShowingEventArgs.SuppressDefaultDialog Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2739.15&preserve-view=true#suppressdefaultdialog)
   * [CoreWebView2SaveAsUIShowingEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2739.15&preserve-view=true#getdeferral)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_25](/microsoft-edge/webview2/reference/win32/icorewebview2_25?view=webview2-1.0.2739.15&preserve-view=true)
   * [ICoreWebView2_25::add_SaveAsUIShowing](/microsoft-edge/webview2/reference/win32/icorewebview2_25?view=webview2-1.0.2739.15&preserve-view=true#add_saveasuishowing)
   * [ICoreWebView2_25::remove_SaveAsUIShowing](/microsoft-edge/webview2/reference/win32/icorewebview2_25?view=webview2-1.0.2739.15&preserve-view=true#remove_saveasuishowing)
   * [ICoreWebView2_25::ShowSaveAsUI](/microsoft-edge/webview2/reference/win32/icorewebview2_25?view=webview2-1.0.2739.15&preserve-view=true#showsaveasui)

* [ICoreWebView2SaveAsUIShowingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventhandler?view=webview2-1.0.2739.15&preserve-view=true)<!-- Win32-only -->

* [ICoreWebView2SaveAsUIShowingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2739.15&preserve-view=true)
   * [ICoreWebView2SaveAsUIShowingEventArgs::get_AllowReplace](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2739.15&preserve-view=true#get_allowreplace)
   * [ICoreWebView2SaveAsUIShowingEventArgs::get_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2739.15&preserve-view=true#get_cancel)
   * [ICoreWebView2SaveAsUIShowingEventArgs::get_ContentMimeType](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2739.15&preserve-view=true#get_contentmimetype)
   * [ICoreWebView2SaveAsUIShowingEventArgs::get_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2739.15&preserve-view=true#get_kind)
   * [ICoreWebView2SaveAsUIShowingEventArgs::get_SaveAsFilePath](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2739.15&preserve-view=true#get_saveasfilepath)
   * [ICoreWebView2SaveAsUIShowingEventArgs::get_SuppressDefaultDialog](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2739.15&preserve-view=true#get_suppressdefaultdialog)
   * [ICoreWebView2SaveAsUIShowingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2739.15&preserve-view=true#getdeferral)
   * [ICoreWebView2SaveAsUIShowingEventArgs::put_AllowReplace](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2739.15&preserve-view=true#put_allowreplace)
   * [ICoreWebView2SaveAsUIShowingEventArgs::put_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2739.15&preserve-view=true#put_cancel)
   * [ICoreWebView2SaveAsUIShowingEventArgs::put_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2739.15&preserve-view=true#put_kind)
   * [ICoreWebView2SaveAsUIShowingEventArgs::put_SaveAsFilePath](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2739.15&preserve-view=true#put_saveasfilepath)
   * [ICoreWebView2SaveAsUIShowingEventArgs::put_SuppressDefaultDialog](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2739.15&preserve-view=true#put_suppressdefaultdialog)

* [ICoreWebView2ShowSaveAsUICompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2showsaveasuicompletedhandler?view=webview2-1.0.2739.15&preserve-view=true)<!-- Win32-only -->

* [`COREWEBVIEW2_SAVE_AS_KIND` Enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2739.15&preserve-view=true#corewebview2_save_as_kind)
   * `COREWEBVIEW2_SAVE_AS_KIND_DEFAULT`
   * `COREWEBVIEW2_SAVE_AS_KIND_HTML_ONLY`
   * `COREWEBVIEW2_SAVE_AS_KIND_SINGLE_FILE`
   * `COREWEBVIEW2_SAVE_AS_KIND_COMPLETE`

* [`COREWEBVIEW2_SAVE_AS_UI_RESULT` Enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2739.15&preserve-view=true#corewebview2_save_as_ui_result)
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_SUCCESS`
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_INVALID_PATH`
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_FILE_ALREADY_EXISTS`
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_KIND_NOT_SUPPORTED`
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_CANCELLED`
   
---


<!-- ------------------------------ -->
#### Bug fixes

There are no bug fixes in this Release SDK.


<!-- end of Aug 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2783-prerelease

Release Date: August 26, 2024

[NuGet package for WebView2 SDK 1.0.2783-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2783-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 129.0.2783.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions

No APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime and SDK

* Re-enabled the default behavior of `SetUserAgent`: by default, `SetUserAgent` is effective for cross-origin iframes. 


<!-- ---------- -->
###### Runtime-only

* Enabled the interactive dragging feature by default.  See `edge-webview-interactive-dragging` in [WebView2 browser flags](../concepts/webview-features-flags.md).

* Disabled `IsolateSandboxedIframes` for WebView2.

* Fixed an issue where WebView creation fails when multiple instances are launched at the same time.  ([Issue #4731](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4731))

* Fixed a bug in WinRT JavaScript projection where caching existing properties in objects whose name contains `Proxy` or `Function` caused an error due to name collision.

* Fixed a bug where the WebView2 control became the wrong size after disconnecting and reconnecting a monitor.

* Fixed an issue where "mailto:" links leave an untitled popup window open, instead of automatically closing the popup window.


<!-- ---------- -->
###### SDK-only

* C# WinRT projection now works on UWP.

* Fixed an issue to ensure that `GeneratedFilesDir` no longer appears in Visual Studio for C# WinRT projection.


<!-- end of Aug 2024 Prerelease SDK -->


<!-- ====================================================================== -->
<!-- July/August 2024 Release SDK -->
## 1.0.2651.64

Release Date: August 13, 2024

[NuGet package for WebView2 SDK 1.0.2651.64](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2651.64)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 127.0.2651.64 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ---------- -->
* Updated the WebMessageObjects API to allow injecting DOM objects into WebView2 content that's constructed via the app, and via the `CoreWebView2.PostWebMessage` API in the other direction.  Added a new web object type (`CoreWebView2FileSystemHandle`) to represent a file system handle that can be posted to the web content to provide it with filesystem access.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostWebMessageAsJson(webMessageAsJson, additionalObjects) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postwebmessageasjson?view=webview2-dotnet-1.0.2651.64&preserve-view=true#microsoft-web-webview2-core-corewebview2-postwebmessageasjson(system-string-system-collections-generic-list((system-object))))<!-- overload w/ "additionalObjects" param, keep detailed anchor -->

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateWebFileSystemDirectoryHandle Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createwebfilesystemdirectoryhandle?view=webview2-dotnet-1.0.2651.64&preserve-view=true)
   * [CoreWebView2Environment.CreateWebFileSystemFileHandle Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createwebfilesystemfilehandle?view=webview2-dotnet-1.0.2651.64&preserve-view=true)

* `CoreWebView2FileSystemHandle` Class:
   * [CoreWebView2FileSystemHandle.Kind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandle.kind?view=webview2-dotnet-1.0.2651.64&preserve-view=true)
   * [CoreWebView2FileSystemHandle.Path Property](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandle.path?view=webview2-dotnet-1.0.2651.64&preserve-view=true)
   * [CoreWebView2FileSystemHandle.Permission Property](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandle.permission?view=webview2-dotnet-1.0.2651.64&preserve-view=true)

* [CoreWebView2FileSystemHandleKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandlekind?view=webview2-dotnet-1.0.2651.64&preserve-view=true)
   * `File`
   * `Directory`

* [CoreWebView2FileSystemHandlePermission Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandlepermission?view=webview2-dotnet-1.0.2651.64&preserve-view=true)
   * `ReadOnly`
   * `ReadWrite`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostWebMessageAsJson(webMessageAsJson, additionalObjects) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2651.64&preserve-view=true#postwebmessageasjson)<!-- overload w/ "additionalObjects" param.  currently the first overload in Ref page so no -1 appended.  url will need to append -1 or -2 if addl overloads are later added above this one in Ref page -->

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateWebFileSystemDirectoryHandle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2651.64&preserve-view=true#createwebfilesystemdirectoryhandle)
   * [CoreWebView2Environment.CreateWebFileSystemFileHandle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2651.64&preserve-view=true#createwebfilesystemfilehandle)

* `CoreWebView2FileSystemHandle` Class:
   * [CoreWebView2FileSystemHandle.Kind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandle?view=webview2-winrt-1.0.2651.64&preserve-view=true#kind)
   * [CoreWebView2FileSystemHandle.Path Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandle?view=webview2-winrt-1.0.2651.64&preserve-view=true#path)
   * [CoreWebView2FileSystemHandle.Permission Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandle?view=webview2-winrt-1.0.2651.64&preserve-view=true#permission)

* [CoreWebView2FileSystemHandleKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandlekind?view=webview2-winrt-1.0.2651.64&preserve-view=true)
   * `File`
   * `Directory`

* [CoreWebView2FileSystemHandlePermission Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandlepermission?view=webview2-winrt-1.0.2651.64&preserve-view=true)
   * `ReadOnly`
   * `ReadWrite`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_23](/microsoft-edge/webview2/reference/win32/icorewebview2_23?view=webview2-1.0.2651.64&preserve-view=true)
   * [ICoreWebView2_23::PostWebMessageAsJsonWithAdditionalObjects](/microsoft-edge/webview2/reference/win32/icorewebview2_23?view=webview2-1.0.2651.64&preserve-view=true#postwebmessageasjsonwithadditionalobjects)<!-- long name, not overload + param -->

* [ICoreWebView2Environment14](/microsoft-edge/webview2/reference/win32/icorewebview2environment14?view=webview2-1.0.2651.64&preserve-view=true)
   * [ICoreWebView2Environment14::CreateObjectCollection](/microsoft-edge/webview2/reference/win32/icorewebview2environment14?view=webview2-1.0.2651.64&preserve-view=true#createobjectcollection)<!--win32 only-->
   * [ICoreWebView2Environment14::CreateWebFileSystemDirectoryHandle](/microsoft-edge/webview2/reference/win32/icorewebview2environment14?view=webview2-1.0.2651.64&preserve-view=true#createwebfilesystemdirectoryhandle)
   * [ICoreWebView2Environment14::CreateWebFileSystemFileHandle](/microsoft-edge/webview2/reference/win32/icorewebview2environment14?view=webview2-1.0.2651.64&preserve-view=true#createwebfilesystemfilehandle)

* [ICoreWebView2FileSystemHandle](/microsoft-edge/webview2/reference/win32/icorewebview2filesystemhandle?view=webview2-1.0.2651.64&preserve-view=true)
   * [ICoreWebView2FileSystemHandle::get_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2filesystemhandle?view=webview2-1.0.2651.64&preserve-view=true#get_kind)
   * [ICoreWebView2FileSystemHandle::get_Path](/microsoft-edge/webview2/reference/win32/icorewebview2filesystemhandle?view=webview2-1.0.2651.64&preserve-view=true#get_path)
   * [ICoreWebView2FileSystemHandle::get_Permission](/microsoft-edge/webview2/reference/win32/icorewebview2filesystemhandle?view=webview2-1.0.2651.64&preserve-view=true#get_permission)

* [ICoreWebView2ObjectCollection](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollection?view=webview2-1.0.2651.64&preserve-view=true)
   * [ICoreWebView2ObjectCollection::InsertValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollection?view=webview2-1.0.2651.64&preserve-view=true#insertvalueatindex)
   * [ICoreWebView2ObjectCollection::RemoveValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollection?view=webview2-1.0.2651.64&preserve-view=true#removevalueatindex)

* [COREWEBVIEW2_FILE_SYSTEM_HANDLE_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2651.64&preserve-view=true#corewebview2_file_system_handle_kind)
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_KIND_FILE`
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_KIND_DIRECTORY`

* [COREWEBVIEW2_FILE_SYSTEM_HANDLE_PERMISSION enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2651.64&preserve-view=true#corewebview2_file_system_handle_permission)
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_PERMISSION_READ_ONLY`
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_PERMISSION_READ_WRITE`

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed a regression where `WebResourceRequested` events crash on certain sites.  ([Issue #4602](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4602))


<!-- ---------- -->
###### SDK-only

* Fixed x86 for WinRT C# projection.


<!-- end of Jul/Aug 2024 Release SDK -->


<!-- ====================================================================== -->
<!-- July/August 2024 Prerelease SDK -->
## 1.0.2730-prerelease

Release Date: August 7, 2024

[NuGet package for WebView2 SDK 1.0.2730-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2730-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 128.0.2730.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
* Added new Throttling Controls APIs which allows for efficient resource management by allowing you to throttle JavaScript timers.  This is helpful in scenarios where a WebView2 control needs to remain visible, but needs to consume fewer resources (such as when the user isn't interacting with the content).  These Throttling Controls APIs allow you to:
   * Customize script timers (`setTimeout` and `setInterval`) throttling under different page states (foreground, background, and background with intensive throttling).
   * Throttle script timers in select hosted iframes.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.UseOverrideTimerWakeInterval Property](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.useoverridetimerwakeinterval?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.PreferredBackgroundTimerWakeInterval Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.preferredbackgroundtimerwakeinterval?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)
   * [CoreWebView2Settings.PreferredForegroundTimerWakeInterval Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.preferredforegroundtimerwakeinterval?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)
   * [CoreWebView2Settings.PreferredIntensiveTimerWakeInterval Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.preferredintensivetimerwakeinterval?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)
   * [CoreWebView2Settings.PreferredOverrideTimerWakeInterval Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.preferredoverridetimerwakeinterval?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.UseOverrideTimerWakeInterval Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#useoverridetimerwakeinterval)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.PreferredBackgroundTimerWakeInterval Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#preferredbackgroundtimerwakeinterval)
   * [CoreWebView2Settings.PreferredForegroundTimerWakeInterval Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#preferredforegroundtimerwakeinterval)
   * [CoreWebView2Settings.PreferredIntensiveTimerWakeInterval Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#preferredintensivetimerwakeinterval)
   * [CoreWebView2Settings.PreferredOverrideTimerWakeInterval Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#preferredoverridetimerwakeinterval)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalFrame7](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe7?view=webview2-1.0.2730-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalFrame7::get_UseOverrideTimerWakeInterval](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe7?view=webview2-1.0.2730-prerelease&preserve-view=true#get_useoverridetimerwakeinterval)
   * [ICoreWebView2ExperimentalFrame7::put_UseOverrideTimerWakeInterval](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe7?view=webview2-1.0.2730-prerelease&preserve-view=true#put_useoverridetimerwakeinterval)

* [ICoreWebView2ExperimentalSettings9](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings9?view=webview2-1.0.2730-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalSettings9::get_PreferredBackgroundTimerWakeIntervalInMilliseconds](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings9?view=webview2-1.0.2730-prerelease&preserve-view=true#get_preferredbackgroundtimerwakeintervalinmilliseconds)
   * [ICoreWebView2ExperimentalSettings9::get_PreferredForegroundTimerWakeIntervalInMilliseconds](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings9?view=webview2-1.0.2730-prerelease&preserve-view=true#get_preferredforegroundtimerwakeintervalinmilliseconds)
   * [ICoreWebView2ExperimentalSettings9::get_PreferredIntensiveTimerWakeIntervalInMilliseconds](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings9?view=webview2-1.0.2730-prerelease&preserve-view=true#get_preferredintensivetimerwakeintervalinmilliseconds)
   * [ICoreWebView2ExperimentalSettings9::get_PreferredOverrideTimerWakeIntervalInMilliseconds](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings9?view=webview2-1.0.2730-prerelease&preserve-view=true#get_preferredoverridetimerwakeintervalinmilliseconds)
   * [ICoreWebView2ExperimentalSettings9::put_PreferredBackgroundTimerWakeIntervalInMilliseconds](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings9?view=webview2-1.0.2730-prerelease&preserve-view=true#put_preferredbackgroundtimerwakeintervalinmilliseconds)
   * [ICoreWebView2ExperimentalSettings9::put_PreferredForegroundTimerWakeIntervalInMilliseconds](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings9?view=webview2-1.0.2730-prerelease&preserve-view=true#put_preferredforegroundtimerwakeintervalinmilliseconds)
   * [ICoreWebView2ExperimentalSettings9::put_PreferredIntensiveTimerWakeIntervalInMilliseconds](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings9?view=webview2-1.0.2730-prerelease&preserve-view=true#put_preferredintensivetimerwakeintervalinmilliseconds)
   * [ICoreWebView2ExperimentalSettings9::put_PreferredOverrideTimerWakeIntervalInMilliseconds](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings9?view=webview2-1.0.2730-prerelease&preserve-view=true#put_preferredoverridetimerwakeintervalinmilliseconds)

---


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ---------- -->
* Added `SaveAs` APIs that allow you to programmatically perform the **Save as** operation.  You can use these APIs to block the default **Save as** dialog, and then either save silently, or build your own UI for **Save as**.  These APIs pertain only to the **Save as** dialog, not the **Download** dialog, which continues to use the existing Download APIs.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
  * [CoreWebView2.SaveAsUIShowing Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.saveasuishowing?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)
  * [CoreWebView2.ShowSaveAsUIAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showsaveasuiasync?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)

* [CoreWebView2SaveAsKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2saveaskind?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)
   * `Default`
   * `HtmlOnly`
   * `SingleFile`
   * `Complete`
 
* [CoreWebView2SaveAsUIResult Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuiresult?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)
   * `Success`
   * `InvalidPath`
   * `FileAlreadyExists`
   * `KindNotSupported`
   * `Cancelled`

* [CoreWebView2SaveAsUIShowingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)
  * [CoreWebView2SaveAsUIShowingEventArgs.AllowReplace Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.allowreplace?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)
  * [CoreWebView2SaveAsUIShowingEventArgs.Cancel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.cancel?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)
  * [CoreWebView2SaveAsUIShowingEventArgs.ContentMimeType Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.contentmimetype?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)
  * [CoreWebView2SaveAsUIShowingEventArgs.Kind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.kind?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)
  * [CoreWebView2SaveAsUIShowingEventArgs.SaveAsFilePath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.saveasfilepath?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)
  * [CoreWebView2SaveAsUIShowingEventArgs.SuppressDefaultDialog Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.suppressdefaultdialog?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)
  * [CoreWebView2SaveAsUIShowingEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.getdeferral?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
  * [CoreWebView2.SaveAsUIShowing Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#saveasuishowing)
  * [CoreWebView2.ShowSaveAsUIAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#showsaveasuiasync)

* [CoreWebView2SaveAsKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveaskind?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true)
   * `Default`
   * `HtmlOnly`
   * `SingleFile`
   * `Complete`

* [CoreWebView2SaveAsUIResult Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuiresult?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true)
   * `Success`
   * `InvalidPath`
   * `FileAlreadyExists`
   * `KindNotSupported`
   * `Cancelled`

* [CoreWebView2SaveAsUIShowingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true)
   * [CoreWebView2SaveAsUIShowingEventArgs.AllowReplace Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#allowreplace)
   * [CoreWebView2SaveAsUIShowingEventArgs.Cancel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#cancel)
   * [CoreWebView2SaveAsUIShowingEventArgs.ContentMimeType Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#contentmimetype)
   * [CoreWebView2SaveAsUIShowingEventArgs.Kind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#kind)
   * [CoreWebView2SaveAsUIShowingEventArgs.SaveAsFilePath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#saveasfilepath)
   * [CoreWebView2SaveAsUIShowingEventArgs.SuppressDefaultDialog Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#suppressdefaultdialog)
   * [CoreWebView2SaveAsUIShowingEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#getdeferral)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_25](/microsoft-edge/webview2/reference/win32/icorewebview2_25?view=webview2-1.0.2730-prerelease&preserve-view=true)
   * [ICoreWebView2_25::add_SaveAsUIShowing](/microsoft-edge/webview2/reference/win32/icorewebview2_25?view=webview2-1.0.2730-prerelease&preserve-view=true#add_saveasuishowing)
   * [ICoreWebView2_25::remove_SaveAsUIShowing](/microsoft-edge/webview2/reference/win32/icorewebview2_25?view=webview2-1.0.2730-prerelease&preserve-view=true#remove_saveasuishowing)
   * [ICoreWebView2_25::ShowSaveAsUI](/microsoft-edge/webview2/reference/win32/icorewebview2_25?view=webview2-1.0.2730-prerelease&preserve-view=true#showsaveasui)

* [ICoreWebView2SaveAsUIShowingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true)
   * [ICoreWebView2SaveAsUIShowingEventArgs::get_AllowReplace](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true#get_allowreplace)
   * [ICoreWebView2SaveAsUIShowingEventArgs::get_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true#get_cancel)
   * [ICoreWebView2SaveAsUIShowingEventArgs::get_ContentMimeType](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true#get_contentmimetype)
   * [ICoreWebView2SaveAsUIShowingEventArgs::get_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true#get_kind)
   * [ICoreWebView2SaveAsUIShowingEventArgs::get_SaveAsFilePath](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true#get_saveasfilepath)
   * [ICoreWebView2SaveAsUIShowingEventArgs::get_SuppressDefaultDialog](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true#get_suppressdefaultdialog)
   * [ICoreWebView2SaveAsUIShowingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true#getdeferral)
   * [ICoreWebView2SaveAsUIShowingEventArgs::put_AllowReplace](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true#put_allowreplace)
   * [ICoreWebView2SaveAsUIShowingEventArgs::put_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true#put_cancel)
   * [ICoreWebView2SaveAsUIShowingEventArgs::put_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true#put_kind)
   * [ICoreWebView2SaveAsUIShowingEventArgs::put_SaveAsFilePath](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true#put_saveasfilepath)
   * [ICoreWebView2SaveAsUIShowingEventArgs::put_SuppressDefaultDialog](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true#put_suppressdefaultdialog)

* [ICoreWebView2SaveAsUIShowingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2saveasuishowingeventhandler?view=webview2-1.0.2730-prerelease&preserve-view=true)<!-- Win32-only -->

* [ICoreWebView2ShowSaveAsUICompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2showsaveasuicompletedhandler?view=webview2-1.0.2730-prerelease&preserve-view=true)<!-- Win32-only -->

* [COREWEBVIEW2_SAVE_AS_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2730-prerelease&preserve-view=true#corewebview2_save_as_kind)
   * `COREWEBVIEW2_SAVE_AS_KIND_DEFAULT`
   * `COREWEBVIEW2_SAVE_AS_KIND_HTML_ONLY`
   * `COREWEBVIEW2_SAVE_AS_KIND_SINGLE_FILE`
   * `COREWEBVIEW2_SAVE_AS_KIND_COMPLETE`

* [COREWEBVIEW2_SAVE_AS_UI_RESULT enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2730-prerelease&preserve-view=true#corewebview2_save_as_ui_result)
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_SUCCESS`
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_INVALID_PATH`
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_FILE_ALREADY_EXISTS`
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_KIND_NOT_SUPPORTED`
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_CANCELLED`

---


<!-- ---------- -->
* Added support for Web Notification, for non-persistent notifications.  The `NotificationReceived` event for `CoreWebView2` controls web notification handling, allowing customization or suppression by the host app.  Unhandled notifications default to WebView2's UI.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.NotificationReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.notificationreceived?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)

* [CoreWebView2Notification Class](/dotnet/api/microsoft.web.webview2.core.corewebview2notification?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)

* [CoreWebView2NotificationReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2notificationreceivedeventargs?view=webview2-dotnet-1.0.2730-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.NotificationReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#notificationreceived)

* [CoreWebView2Notification Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notification?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true)

* [CoreWebView2NotificationReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2notificationreceivedeventargs?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_24](/microsoft-edge/webview2/reference/win32/icorewebview2_24?view=webview2-1.0.2730-prerelease&preserve-view=true)
   * [ICoreWebView2_24::add_NotificationReceived](/microsoft-edge/webview2/reference/win32/icorewebview2_24?view=webview2-1.0.2730-prerelease&preserve-view=true#add_notificationreceived)
   * [ICoreWebView2_24::remove_NotificationReceived](/microsoft-edge/webview2/reference/win32/icorewebview2_24?view=webview2-1.0.2730-prerelease&preserve-view=true#remove_notificationreceived)

* [ICoreWebView2Notification](/microsoft-edge/webview2/reference/win32/icorewebview2notification?view=webview2-1.0.2730-prerelease&preserve-view=true)

* [ICoreWebView2NotificationCloseRequestedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2notificationcloserequestedeventhandler?view=webview2-1.0.2730-prerelease&preserve-view=true)<!-- Win32-only -->

* [ICoreWebView2NotificationReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2notificationreceivedeventargs?view=webview2-1.0.2730-prerelease&preserve-view=true)

* [ICoreWebView2NotificationReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2notificationreceivedeventhandler?view=webview2-1.0.2730-prerelease&preserve-view=true)<!-- Win32-only -->

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed an issue where the app window couldn't be controlled via system commands (such as **Alt+F4** or **Alt+Spacebar**) when the focus was in WebView2 for Visual hosting mode.  ([Issue #2961](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2961))

* Fixed a bug in WebView2 UWP where the Find bar couldn't be clicked into from the host app.


<!-- ---------- -->
###### SDK-only

* Adding the missing WinRT `CoreWebView2Notification.VibrationPattern` API.  This WinRT API can be combined with the stable notification API promotion release notes; see "Web Notification" and `NotificationReceived` for WinRT, immediately above.

* Fixed an issue where `KeyDown` events from the WinForms WebView2 control didn't include the correct `ModifierKeys` information.  ([Issue #1216](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1216))

* Fixed x86 for WinRT C# projection.

* Made `CreateCoreWebView2Environment` and `GetAvailableCoreWebView2BrowserVersionString` more robust against potential race condition during Runtime update.


<!-- end of Jul/Aug 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## See also

* [About Release Notes for the WebView2 SDK](./about.md)
* [Archived Release Notes for the WebView2 SDK](./archive.md)
* [Overview of WebView2 features and APIs](../concepts/overview-features-apis.md) - outlines many of the APIs, by feature area, that are in Release SDK packages.
* [Contacting the Microsoft Edge WebView2 team](../contact.md)
