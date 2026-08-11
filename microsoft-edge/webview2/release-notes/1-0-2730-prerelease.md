---
title: Prerelease SDK 1.0.2730-prerelease, for Runtime 128 (Aug. 7, 2024)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.2730-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.2730-prerelease, for Runtime 128 (Aug. 7, 2024)

Release Date: Aug. 7, 2024

[NuGet package for WebView2 SDK 1.0.2730-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2730-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 128.0.2730.0 or later.

**Detailed contents:**
* [Experimental APIs (Phase 1: Experimental in Prerelease)](#experimental-apis-phase-1-experimental-in-prerelease)
   * [Throttling Controls APIs](#throttling-controls-apis)
* [Promotions to Phase 2 (Stable in Prerelease)](#promotions-to-phase-2-stable-in-prerelease)
   * [SaveAs APIs to programmatically perform Save as](#saveas-apis-to-programmatically-perform-save-as)
   * [Web notification handling, for non-persistent notifications](#web-notification-handling-for-non-persistent-notifications)
* [Bug fixes](#bug-fixes)
   * [Runtime-only](#runtime-only)
   * [SDK-only](#sdk-only)
* [See also](#see-also)


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Throttling Controls APIs

Added new Throttling Controls APIs which allows for efficient resource management by allowing you to throttle JavaScript timers.  This is helpful in scenarios where a WebView2 control needs to remain visible, but needs to consume fewer resources (such as when the user isn't interacting with the content).  These Throttling Controls APIs allow you to:

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


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### `SaveAs` APIs to programmatically perform Save as

Added `SaveAs` APIs that allow you to programmatically perform the **Save as** operation.  You can use these APIs to block the default **Save as** dialog, and then either save silently, or build your own UI for **Save as**.

These APIs pertain only to the **Save as** dialog, not the **Download** dialog, which continues to use the existing Download APIs.

Previous phase: [`SaveAs` APIs to programmatically perform Save as](./1-0-2526-prerelease.md#saveas-apis-to-programmatically-perform-save-as) in _Prerelease SDK 1.0.2526-prerelease, for Runtime 125 (Apr. 22, 2024)_.

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
  * [CoreWebView2.ShowSaveAsUIAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2730-prerelease&preserve-view=true#showsaveasuiasync)

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


<!-- ------------------------------ -->
#### Web notification handling, for non-persistent notifications

Added support for Web Notification, for non-persistent notifications.  The `NotificationReceived` event for `CoreWebView2` controls web notification handling, allowing customization or suppression by the host app.  Unhandled notifications default to WebView2's UI.

Previous phase: [Desktop notifications through WebView2](./1-0-1988-prerelease.md#desktop-notifications-through-webview2) in _Prerelease SDK 1.0.1988-prerelease, for Runtime 117 (Jul. 24, 2023)_.

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


<!-- ====================================================================== -->
## Bug fixes


<!-- ------------------------------ -->
#### Runtime-only

* Fixed an issue where the app window couldn't be controlled via system commands (such as **Alt+F4** or **Alt+Spacebar**) when the focus was in WebView2 for Visual hosting mode.  ([Issue #2961](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2961))

* Fixed a bug in WebView2 UWP where the Find bar couldn't be clicked into from the host app.


<!-- ------------------------------ -->
#### SDK-only

* Adding the missing WinRT `CoreWebView2Notification.VibrationPattern` API.  This WinRT API can be combined with the stable notification API promotion release notes; see "Web Notification" and `NotificationReceived` for WinRT, immediately above.

* Fixed an issue where `KeyDown` events from the WinForms WebView2 control didn't include the correct `ModifierKeys` information.  ([Issue #1216](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1216))

* Fixed x86 for WinRT C# projection.

* Made `CreateCoreWebView2Environment` and `GetAvailableCoreWebView2BrowserVersionString` more robust against potential race condition during Runtime update.


<!-- ====================================================================== -->
## See also

* [Release notes for WebView2](./index.md)
