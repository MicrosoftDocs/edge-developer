---
title: Prerelease SDK 1.0.2526-prerelease, for Runtime 125 (Apr. 22, 2024)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.2526-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 04/22/2024
---
# Prerelease SDK 1.0.2526-prerelease, for Runtime 125 (Apr. 22, 2024)

Release notes for Microsoft Edge WebView2 Prerelease SDK, release date: Apr. 22, 2024.

[NuGet package for WebView2 SDK 1.0.2526-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2526-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 125.0.2526.0 or later; see [Runtime 125.0.2535.41 (May 28, 2024)](../runtime/125.md).

**Detailed contents:**
* [Breaking changes](#breaking-changes)
   * [Minimum .NET Framework version](#minimum-net-framework-version)
* [Experimental APIs (Phase 1: Experimental in Prerelease)](#experimental-apis-phase-1-experimental-in-prerelease)
   * [SaveAs APIs to programmatically perform Save as](#saveas-apis-to-programmatically-perform-save-as)
* [Promotions to Phase 2 (Stable in Prerelease)](#promotions-to-phase-2-stable-in-prerelease)
   * [Fluent Style Overlay Scrollbar](#fluent-style-overlay-scrollbar)
* [Bug fixes](#bug-fixes)
* [See also](#see-also)


<!-- ====================================================================== -->
## Breaking changes


<!-- ------------------------------ -->
#### Minimum .NET Framework version

The minimum .NET Framework version requirement for .NET WebView2, including WPF and WinForms controls, has been updated from .NET Framework 4.5 to .NET Framework 4.6.2.


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### `SaveAs` APIs to programmatically perform Save as

Added `SaveAs` APIs that allow you to programmatically perform the **Save as** operation.  You can use these APIs to block the default **Save as** dialog, and then either save silently, or build your own UI for **Save as**.

These APIs pertain only to the **Save as** dialog, not the **Download** dialog, which continues to use the existing Download APIs.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
  * [CoreWebView2.SaveAsUIShowing Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.saveasuishowing?view=webview2-dotnet-1.0.2526-prerelease&preserve-view=true)
  * [CoreWebView2.ShowSaveAsUIAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showsaveasuiasync?view=webview2-dotnet-1.0.2526-prerelease&preserve-view=true)

* [CoreWebView2SaveAsKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2saveaskind?view=webview2-dotnet-1.0.2526-prerelease&preserve-view=true)
   * `Complete`
   * `Default`
   * `HtmlOnly`
   * `SingleFile`

* [CoreWebView2SaveAsUIResult Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuiresult?view=webview2-dotnet-1.0.2526-prerelease&preserve-view=true)
   * `Cancelled`
   * `FileAlreadyExists`
   * `InvalidPath`
   * `KindNotSupported`
   * `Success`

* `CoreWebView2SaveAsUIShowingEventArgs` Class:
  * [CoreWebView2SaveAsUIShowingEventArgs.AllowReplace Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.allowreplace?view=webview2-dotnet-1.0.2526-prerelease&preserve-view=true)
  * [CoreWebView2SaveAsUIShowingEventArgs.Cancel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.cancel?view=webview2-dotnet-1.0.2526-prerelease&preserve-view=true)
  * [CoreWebView2SaveAsUIShowingEventArgs.ContentMimeType Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.contentmimetype?view=webview2-dotnet-1.0.2526-prerelease&preserve-view=true)
  * [CoreWebView2SaveAsUIShowingEventArgs.Kind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.kind?view=webview2-dotnet-1.0.2526-prerelease&preserve-view=true)
  * [CoreWebView2SaveAsUIShowingEventArgs.SaveAsFilePath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.saveasfilepath?view=webview2-dotnet-1.0.2526-prerelease&preserve-view=true)
  * [CoreWebView2SaveAsUIShowingEventArgs.SuppressDefaultDialog Property](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.suppressdefaultdialog?view=webview2-dotnet-1.0.2526-prerelease&preserve-view=true)
  * [CoreWebView2SaveAsUIShowingEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2saveasuishowingeventargs.getdeferral?view=webview2-dotnet-1.0.2526-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
  * [CoreWebView2.SaveAsUIShowing Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true#saveasuishowing)
  * [CoreWebView2.ShowSaveAsUIAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true#showsaveasuiasync)

* [CoreWebView2SaveAsKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveaskind?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true)
   * `Complete`
   * `Default`
   * `HtmlOnly`
   * `SingleFile`

* [CoreWebView2SaveAsUIResult Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuiresult?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true)
   * `Cancelled`
   * `FileAlreadyExists`
   * `InvalidPath`
   * `KindNotSupported`
   * `Success`

* `CoreWebView2SaveAsUIShowingEventArgs` Class:
   * [CoreWebView2SaveAsUIShowingEventArgs.AllowReplace Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true#allowreplace)
   * [CoreWebView2SaveAsUIShowingEventArgs.Cancel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true#cancel)
   * [CoreWebView2SaveAsUIShowingEventArgs.ContentMimeType Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true#contentmimetype)
   * [CoreWebView2SaveAsUIShowingEventArgs.Kind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true#kind)
   * [CoreWebView2SaveAsUIShowingEventArgs.SaveAsFilePath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true#saveasfilepath)
   * [CoreWebView2SaveAsUIShowingEventArgs.SuppressDefaultDialog Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true#suppressdefaultdialog)
   * [CoreWebView2SaveAsUIShowingEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2saveasuishowingeventargs?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true#getdeferral)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental25](/microsoft-edge/webview2/reference/win32/icorewebview2experimental25?view=webview2-1.0.2526-prerelease&preserve-view=true)
   * [ICoreWebView2Experimental25::add_SaveAsUIShowing](/microsoft-edge/webview2/reference/win32/icorewebview2experimental25?view=webview2-1.0.2526-prerelease&preserve-view=true#add_saveasuishowing)
   * [ICoreWebView2Experimental25::remove_SaveAsUIShowing](/microsoft-edge/webview2/reference/win32/icorewebview2experimental25?view=webview2-1.0.2526-prerelease&preserve-view=true#remove_saveasuishowing)
   * [ICoreWebView2Experimental25::ShowSaveAsUI](/microsoft-edge/webview2/reference/win32/icorewebview2experimental25?view=webview2-1.0.2526-prerelease&preserve-view=true#showsaveasui)

* [ICoreWebView2ExperimentalSaveAsUIShowingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventargs?view=webview2-1.0.2526-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalSaveAsUIShowingEventArgs::get_AllowReplace](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventargs?view=webview2-1.0.2526-prerelease&preserve-view=true#get_allowreplace)
   * [ICoreWebView2ExperimentalSaveAsUIShowingEventArgs::get_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventargs?view=webview2-1.0.2526-prerelease&preserve-view=true#get_cancel)
   * [ICoreWebView2ExperimentalSaveAsUIShowingEventArgs::get_ContentMimeType](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventargs?view=webview2-1.0.2526-prerelease&preserve-view=true#get_contentmimetype)
   * [ICoreWebView2ExperimentalSaveAsUIShowingEventArgs::get_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventargs?view=webview2-1.0.2526-prerelease&preserve-view=true#get_kind)
   * [ICoreWebView2ExperimentalSaveAsUIShowingEventArgs::get_SaveAsFilePath](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventargs?view=webview2-1.0.2526-prerelease&preserve-view=true#get_saveasfilepath)
   * [ICoreWebView2ExperimentalSaveAsUIShowingEventArgs::get_SuppressDefaultDialog](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventargs?view=webview2-1.0.2526-prerelease&preserve-view=true#get_suppressdefaultdialog)
   * [ICoreWebView2ExperimentalSaveAsUIShowingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventargs?view=webview2-1.0.2526-prerelease&preserve-view=true#getdeferral)
   * [ICoreWebView2ExperimentalSaveAsUIShowingEventArgs::put_AllowReplace](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventargs?view=webview2-1.0.2526-prerelease&preserve-view=true#put_allowreplace)
   * [ICoreWebView2ExperimentalSaveAsUIShowingEventArgs::put_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventargs?view=webview2-1.0.2526-prerelease&preserve-view=true#put_cancel)
   * [ICoreWebView2ExperimentalSaveAsUIShowingEventArgs::put_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventargs?view=webview2-1.0.2526-prerelease&preserve-view=true#put_kind)
   * [ICoreWebView2ExperimentalSaveAsUIShowingEventArgs::put_SaveAsFilePath](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventargs?view=webview2-1.0.2526-prerelease&preserve-view=true#put_saveasfilepath)
   * [ICoreWebView2ExperimentalSaveAsUIShowingEventArgs::put_SuppressDefaultDialog](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventargs?view=webview2-1.0.2526-prerelease&preserve-view=true#put_suppressdefaultdialog)

* [ICoreWebView2ExperimentalSaveAsUIShowingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsaveasuishowingeventhandler?view=webview2-1.0.2526-prerelease&preserve-view=true)<!-- Win32-only -->

* [ICoreWebView2ExperimentalShowSaveAsUICompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalshowsaveasuicompletedhandler?view=webview2-1.0.2526-prerelease&preserve-view=true)<!-- Win32-only -->
   * [ICoreWebView2ExperimentalShowSaveAsUICompletedHandler::Invoke](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalshowsaveasuicompletedhandler?view=webview2-1.0.2526-prerelease&preserve-view=true#invoke)<!-- listed in Ref docs as an anchor section -->

* [COREWEBVIEW2_SAVE_AS_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2526-prerelease&preserve-view=true#corewebview2_save_as_kind)
   * `COREWEBVIEW2_SAVE_AS_KIND_DEFAULT`
   * `COREWEBVIEW2_SAVE_AS_KIND_HTML_ONLY`
   * `COREWEBVIEW2_SAVE_AS_KIND_SINGLE_FILE`
   * `COREWEBVIEW2_SAVE_AS_KIND_COMPLETE`

* [COREWEBVIEW2_SAVE_AS_UI_RESULT enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2526-prerelease&preserve-view=true#corewebview2_save_as_ui_result)
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_SUCCESS`
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_INVALID_PATH`
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_FILE_ALREADY_EXISTS`
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_KIND_NOT_SUPPORTED`
   * `COREWEBVIEW2_SAVE_AS_UI_RESULT_CANCELLED`

---


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
#### Fluent Style Overlay Scrollbar

Support for the Fluent Style Overlay Scrollbar.

Previous phase: [Fluent Style Overlay Scrollbar](./1-0-2470-prerelease.md#fluent-style-overlay-scrollbar) in _Prerelease SDK 1.0.2470-prerelease, for Runtime 124 (Mar. 25, 2024)_.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ScrollBarStyle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.scrollbarstyle?view=webview2-dotnet-1.0.2526-prerelease&preserve-view=true)

* [CoreWebView2ScrollbarStyle Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2scrollbarstyle?view=webview2-dotnet-1.0.2526-prerelease&preserve-view=true)
   * `Default`
   * `FluentOverlay`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ScrollBarStyle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true#scrollbarstyle)

* [CoreWebView2ScrollbarStyle Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scrollbarstyle?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true)
   * `Default`
   * `FluentOverlay`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions8](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions8?view=webview2-1.0.2526-prerelease&preserve-view=true)
  * [ICoreWebView2EnvironmentOptions8::get_ScrollBarStyle](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions8?view=webview2-1.0.2526-prerelease&preserve-view=true#get_scrollbarstyle)
  * [ICoreWebView2EnvironmentOptions8::put_ScrollBarStyle](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions8?view=webview2-1.0.2526-prerelease&preserve-view=true#put_scrollbarstyle)

* [COREWEBVIEW2_SCROLLBAR_STYLE enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2526-prerelease&preserve-view=true#corewebview2_scrollbar_style)
   * `COREWEBVIEW2_SCROLLBAR_STYLE_DEFAULT`
   * `COREWEBVIEW2_SCROLLBAR_STYLE_FLUENT_OVERLAY`

---


<!-- ====================================================================== -->
## Bug fixes

* Fixed a bug in WinRT JavaScript projection where passing in a typed array resulted in an "Interface Not Supported" error.  (Runtime and SDK)  ([Issue #3486](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3486))

* Added support for handling `out` array parameters in WinRT JavaScript projection.  (Runtime and SDK)

* Fixed missing `AreBrowserExtensionsEnabled` API in WinRT projection.


<!-- ====================================================================== -->
## See also

* [Runtime 125.0.2535.41 (May 28, 2024)](../runtime/125.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
