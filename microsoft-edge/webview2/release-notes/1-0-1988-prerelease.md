---
title: Release Notes for WebView2 Prerelease SDK 1.0.1988-prerelease
description: New features, APIs, and fixes in WebView2 Prerelease SDK 1.0.1988-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 07/24/2023
---
# Release Notes for WebView2 Prerelease SDK 1.0.1988-prerelease

Release Date: July 24, 2023

[NuGet package for WebView2 SDK 1.0.1988-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1988-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 117.0.1988.0 or higher.


<!-- ====================================================================== -->
## Experimental APIs

This Prerelease SDK adds the following experimental APIs:


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


<!-- ====================================================================== -->
## Bug fixes

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


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
