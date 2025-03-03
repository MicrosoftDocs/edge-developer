---
title: Release Notes for the WebView2 SDK
description: Release notes for Microsoft Edge WebView2, covering new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/10/2025
---
# Release Notes for the WebView2 SDK

These Release Notes provide information about new features and bug fixes that are included in the WebView2 Release SDK and the WebView2 Prerelease SDK.

<!--
the template to copy for incoming sections is at end of this file

this webpage covers the most recent ~5 months; periodically move oldest h2 sections from bottom of present file to archive.md.  eg covers: 
Feb 2024
Jan 2024
[Dec 2024]
Nov 2024
Oct 2024
Sep 2024

moved to archive:
Aug 2024
-->


<!-- Feb 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.3065.39

Release Date: February 10, 2025

[NuGet package for WebView2 SDK 1.0.3065.39](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3065.39)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 133.0.3065.39 or higher.


<!-- ------------------------------ -->
#### Promotions

No additional APIs have been promoted to Stable and added in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Added the missing **Close** button in the **Download** flyout.
* Fixed a race condition that occurred when the Web Request Response event never occurs.

<!-- end of Feb 2025 Release SDK -->


<!-- Feb 2025 Prerelease SDK -->
<!-- ====================================================================== -->
## 1.0.3116-prerelease

Release Date: February 10, 2025

[NuGet package for WebView2 SDK 1.0.3116-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3116-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 134.0.3116.0 or higher.


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

* Added the missing **Close** button in the **Download** flyout.
* Fixed a race condition that occurred when the Web Request Response event never occurs.


<!-- ---------- -->
###### SDK-only

* Fixed .NET and Win32 documentation of the `CoreWebView2Find.FindNext` method that incorrectly mentioned `FindPrevious`.  The method summary now mentions `FindNext` instead.  ([Issue #5059](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5059))

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Find.FindNext Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.findnext?view=webview2-dotnet-1.0.3116-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Find.FindNext Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3116-prerelease&preserve-view=true#findnext)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalFind::FindNext](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfind?view=webview2-1.0.3116-prerelease&preserve-view=true#findnext)
<!-- todo: make sure Win32 API Ref 3116 has "Next" not "Previous" in summary -->

---


<!-- end of Feb 2025 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2957.106

Release Date: January 20, 2025

[NuGet package for WebView2 SDK 1.0.2957.106](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2957.106)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 132.0.2957.106 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ---------- -->
###### Show WPF elements on top of the WebView2 layer (WebView2CompositionControl)

The `WebView2CompositionControl` prevents the WebView2 control from being the topmost layer in a WPF app and obscuring any WPF elements.  `Microsoft.Web.WebView2.Wpf.WebView2CompositionControl` is a drop-in replacement for the standard WPF WebView2 control.  Both the WebView2 control and `WebView2CompositionControl` implement the `Microsoft.Web.WebView2.Wpf.IWebView2` interface.  Both of them derive from `FrameworkElement`, as follows:
* `FrameworkElement` -> `HwndHost` -> `WebView2`.
* `FrameworkElement` -> `Control` -> `WebView2CompositionControl`.

Background: If you're building a Windows Presentation Foundation (WPF) app and using the WebView2 control, you may find that your app runs into "airspace" issues, where the WebView2 control is always displayed on top, hiding any WPF elements in the same location, even if you try to specify the WPF elements to be above the WebView2 control (using visual tree order or the z-index property, for example).

This issue occurs because the WPF control uses the WPF `HwndHost` to host the Win32 WebView2 control, and `HwndHost` has an issue with airspace.

See also:
* [Mitigating Airspace Issues In WPF Applications](https://dwayneneed.github.io/wpf/2013/02/26/mitigating-airspace-issues-in-wpf-applications.html)
* [WPF Airspace - WebView2CompositionControl](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/WPF_WebView2CompositionControl.md) - Spec.

##### [.NET/C#](#tab/dotnetcsharp)

* [WebView2CompositionControl Class](/dotnet/api/microsoft.web.webview2.wpf.webview2compositioncontrol?view=webview2-dotnet-1.0.2957.106&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

n/a

##### [Win32/C++](#tab/win32cpp)

n/a

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed a regression where display changes can cause WebView2 to render smaller than the app window.


<!-- ---------- -->
###### SDK-only

* Fixed an issue in the WPF `WebView2CompositionControl` where it's not displayed if it's initialized with size (0,0), such as when it's initialized in a `TabItem` of a `TabControl`.  ([Issue #4941](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4941))


<!-- end of Jan 2025 Release SDK -->


<!-- ====================================================================== -->
## 1.0.3079-prerelease

Release Date: January 24, 2025

[NuGet package for WebView2 SDK 1.0.3079-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3079-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 134.0.3079.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
###### Customize the Find behavior (Find API)

The Find API allows you to programmatically control **Find** operations, and enables adding the following functionality to your app:
* Customize **Find** options, including **Find Term**, **Case Sensitivity**, **Word Matching**, **Match Highlighting**, and **Default UI Suppression**.
* Find text strings and navigate among them within a WebView2 control.
* Programmatically initiate **Find** operations, and navigate **Find** results.
* Suppress the default **Find** UI.
* Track the status of **Find** operations.

There are known issues with the Find API for PDF documents.  When you view a PDF document within a WebView2 control, the **Find** feature currently only provides the first index and the number of matches found.  For example, if the string occurs three times in a PDF, the UI would say **1/3** and would not support programmatically calling **Next** or **Previous**.  We are actively investigating these issues, and we encourage you to report any problems you encounter, by using the [WebView2Feedback](https://github.com/MicrosoftEdge/WebViewFeedback) repo.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.Find Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.find?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)

* [CoreWebView2Environment.CreateFindOptions Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createfindoptions?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)

* [CoreWebView2Find Class](/dotnet/api/microsoft.web.webview2.core.corewebview2find?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2Find.ActiveMatchIndex Property](/dotnet/api/microsoft.web.webview2.core.corewebview2find.activematchindex?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2Find.ActiveMatchIndexChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2find.activematchindexchanged?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2Find.FindNext Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.findnext?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2Find.FindPrevious Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.findprevious?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2Find.MatchCount Property](/dotnet/api/microsoft.web.webview2.core.corewebview2find.matchcount?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2Find.MatchCountChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2find.matchcountchanged?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2Find.StartAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.startasync?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2Find.Stop Method](/dotnet/api/microsoft.web.webview2.core.corewebview2find.stop?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)

* [CoreWebView2FindOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2FindOptions.FindTerm Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.findterm?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2FindOptions.IsCaseSensitive Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.iscasesensitive?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2FindOptions.ShouldHighlightAllMatches Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.shouldhighlightallmatches?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2FindOptions.ShouldMatchWord Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.shouldmatchword?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2FindOptions.SuppressDefaultFindDialog Property](/dotnet/api/microsoft.web.webview2.core.corewebview2findoptions.suppressdefaultfinddialog?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.Find Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#find)

* [CoreWebView2Environment Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2Environment.CreateFindOptions Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#createfindoptions)

* [CoreWebView2Find Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2Find.ActiveMatchIndex Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#activematchindex)
   * [CoreWebView2Find.ActiveMatchIndexChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#activematchindexchanged)
   * [CoreWebView2Find.FindNext Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#findnext)
   * [CoreWebView2Find.FindPrevious Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#findprevious)
   * [CoreWebView2Find.MatchCount Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#matchcount)
   * [CoreWebView2Find.MatchCountChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#matchcountchanged)
   * [CoreWebView2Find.StartAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2find?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#startasync)

* [CoreWebView2FindOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true)
   * [CoreWebView2FindOptions.FindTerm Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#findterm)
   * [CoreWebView2FindOptions.IsCaseSensitive Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#iscasesensitive)
   * [CoreWebView2FindOptions.ShouldHighlightAllMatches Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#shouldhighlightallmatches)
   * [CoreWebView2FindOptions.ShouldMatchWord Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#shouldmatchword)
   * [CoreWebView2FindOptions.SuppressDefaultFindDialog Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2findoptions?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#suppressdefaultfinddialog)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental29](/microsoft-edge/webview2/reference/win32/icorewebview2experimental29?view=webview2-1.0.3079-prerelease&preserve-view=true)
  * [ICoreWebView2Experimental29::get_Find](/microsoft-edge/webview2/reference/win32/icorewebview2experimental29?view=webview2-1.0.3079-prerelease&preserve-view=true#get_find)

* [ICoreWebView2ExperimentalEnvironment18](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment18?view=webview2-1.0.3079-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalEnvironment18::CreateFindOptions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment18?view=webview2-1.0.3079-prerelease&preserve-view=true#createfindoptions)

* [ICoreWebView2ExperimentalFind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfind?view=webview2-1.0.3079-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalFind::add_ActiveMatchIndexChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfind?view=webview2-1.0.3079-prerelease&preserve-view=true#add_activematchindexchanged)
  * [ICoreWebView2ExperimentalFind::add_MatchCountChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfind?view=webview2-1.0.3079-prerelease&preserve-view=true#add_matchcountchanged)
  * [ICoreWebView2ExperimentalFind::FindNext](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfind?view=webview2-1.0.3079-prerelease&preserve-view=true#findnext)
  * [ICoreWebView2ExperimentalFind::FindPrevious](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfind?view=webview2-1.0.3079-prerelease&preserve-view=true#findprevious)
  * [ICoreWebView2ExperimentalFind::get_ActiveMatchIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfind?view=webview2-1.0.3079-prerelease&preserve-view=true#get_activematchindex)
  * [ICoreWebView2ExperimentalFind::get_MatchCount](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfind?view=webview2-1.0.3079-prerelease&preserve-view=true#get_matchcount)
  * [ICoreWebView2ExperimentalFind::remove_ActiveMatchIndexChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfind?view=webview2-1.0.3079-prerelease&preserve-view=true#remove_activematchindexchanged)
  * [ICoreWebView2ExperimentalFind::remove_MatchCountChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfind?view=webview2-1.0.3079-prerelease&preserve-view=true#remove_matchcountchanged)
  * [ICoreWebView2ExperimentalFind::Start](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfind?view=webview2-1.0.3079-prerelease&preserve-view=true#start)
  * [ICoreWebView2ExperimentalFind::Stop](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfind?view=webview2-1.0.3079-prerelease&preserve-view=true#stop)

* [ICoreWebView2ExperimentalFindActiveMatchIndexChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindactivematchindexchangedeventhandler?view=webview2-1.0.3079-prerelease&preserve-view=true)

* [ICoreWebView2ExperimentalFindMatchCountChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindmatchcountchangedeventhandler?view=webview2-1.0.3079-prerelease&preserve-view=true)

* [ICoreWebView2ExperimentalFindOptions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindoptions?view=webview2-1.0.3079-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalFindOptions::get_FindTerm](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindoptions?view=webview2-1.0.3079-prerelease&preserve-view=true#get_findterm)
  * [ICoreWebView2ExperimentalFindOptions::get_IsCaseSensitive](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindoptions?view=webview2-1.0.3079-prerelease&preserve-view=true#get_iscasesensitive)
  * [ICoreWebView2ExperimentalFindOptions::get_ShouldHighlightAllMatches](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindoptions?view=webview2-1.0.3079-prerelease&preserve-view=true#get_shouldhighlightallmatches)
  * [ICoreWebView2ExperimentalFindOptions::get_ShouldMatchWord](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindoptions?view=webview2-1.0.3079-prerelease&preserve-view=true#get_shouldmatchword)
  * [ICoreWebView2ExperimentalFindOptions::get_SuppressDefaultFindDialog](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindoptions?view=webview2-1.0.3079-prerelease&preserve-view=true#get_suppressdefaultfinddialog)
  * [ICoreWebView2ExperimentalFindOptions::put_FindTerm](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindoptions?view=webview2-1.0.3079-prerelease&preserve-view=true#put_findterm)
  * [ICoreWebView2ExperimentalFindOptions::put_IsCaseSensitive](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindoptions?view=webview2-1.0.3079-prerelease&preserve-view=true#put_iscasesensitive)
  * [ICoreWebView2ExperimentalFindOptions::put_ShouldHighlightAllMatches](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindoptions?view=webview2-1.0.3079-prerelease&preserve-view=true#put_shouldhighlightallmatches)
  * [ICoreWebView2ExperimentalFindOptions::put_ShouldMatchWord](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindoptions?view=webview2-1.0.3079-prerelease&preserve-view=true#put_shouldmatchword)
  * [ICoreWebView2ExperimentalFindOptions::put_SuppressDefaultFindDialog](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindoptions?view=webview2-1.0.3079-prerelease&preserve-view=true#put_suppressdefaultfinddialog)

* [ICoreWebView2ExperimentalFindStartCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfindstartcompletedhandler?view=webview2-1.0.3079-prerelease&preserve-view=true)

---


<!-- ---------- -->
###### Customize the drag and drop behavior (DragStarting API)

The `DragStarting` API overrides the default drag and drop behavior when running in visual hosting mode.  The `DragStarting` event notifies your app when the user starts a drag operation in the WebView2, and provides the state that's necessary to override the default WebView2 drag operation with your own logic.

* Use `DragStarting` on the `ICoreWebView2ExperimentalCompositionController6` to add an event handler that's invoked when the drag operation is starting.
* Use `ICoreWebView2ExperimentalDragStartingEventArgs` to start your own drag operation.
   * Use the `GetDeferral` method to execute any async drag logic and call back into the WebView at a later time.
   * Use the `Handled` property to let the WebView2 know whether to use its own drag logic.

##### [.NET/C#](#tab/dotnetcsharp)

n/a

##### [WinRT/C#](#tab/winrtcsharp)

n/a

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalCompositionController6](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller6?view=webview2-1.0.3079-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalCompositionController6::add_DragStarting](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller6?view=webview2-1.0.3079-prerelease&preserve-view=true#add_dragstarting)
  * [ICoreWebView2ExperimentalCompositionController6::remove_DragStarting](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller6?view=webview2-1.0.3079-prerelease&preserve-view=true#remove_dragstarting)

* [ICoreWebView2ExperimentalCompositionControllerInterop3](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontrollerinterop3?view=webview2-1.0.3079-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalCompositionControllerInterop3::add_DragStarting](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontrollerinterop3?view=webview2-1.0.3079-prerelease&preserve-view=true#add_dragstarting)
  * [ICoreWebView2ExperimentalCompositionControllerInterop3::remove_DragStarting](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontrollerinterop3?view=webview2-1.0.3079-prerelease&preserve-view=true#remove_dragstarting)

* [ICoreWebView2ExperimentalDragStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldragstartingeventargs?view=webview2-1.0.3079-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalDragStartingEventArgs::get_AllowedDropEffects](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldragstartingeventargs?view=webview2-1.0.3079-prerelease&preserve-view=true#get_alloweddropeffects)
  * [ICoreWebView2ExperimentalDragStartingEventArgs::get_Data](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldragstartingeventargs?view=webview2-1.0.3079-prerelease&preserve-view=true#get_data)
  * [ICoreWebView2ExperimentalDragStartingEventArgs::get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldragstartingeventargs?view=webview2-1.0.3079-prerelease&preserve-view=true#get_handled)
  * [ICoreWebView2ExperimentalDragStartingEventArgs::get_Position](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldragstartingeventargs?view=webview2-1.0.3079-prerelease&preserve-view=true#get_position)
  * [ICoreWebView2ExperimentalDragStartingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldragstartingeventargs?view=webview2-1.0.3079-prerelease&preserve-view=true#getdeferral)
  * [ICoreWebView2ExperimentalDragStartingEventArgs::put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldragstartingeventargs?view=webview2-1.0.3079-prerelease&preserve-view=true#put_handled)

* [ICoreWebView2ExperimentalDragStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaldragstartingeventhandler?view=webview2-1.0.3079-prerelease&preserve-view=true)

---


<!-- ---------- -->
###### Track navigation history for nested iframes (FrameCreatedEvent API)

The FrameCreatedEvent API supports nested iframes, such as recording the navigation history for a second-level iframe.  Without this API, WebView2 only tracks first-level iframes, which are the direct child iframes of the main frame.  Using this API, your app can subscribe to the nested iframe creation event, giving the app access to all properties, methods, and events of `CoreWebView2Frame` for the nested iframe.

Use this API to manage iframe tracking on a page that contains multiple levels of iframes.  You can choose to track any of the following:
* Only the main page and first-level iframes (the default behavior).
* A partial WebView2 frames tree with specific iframes of interest.
* The full WebView2 frames tree.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.FrameCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.framecreated?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.FrameCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#framecreated)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalFrame8](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe8?view=webview2-1.0.3079-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalFrame8::add_FrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe8?view=webview2-1.0.3079-prerelease&preserve-view=true#add_framecreated)
  * [ICoreWebView2ExperimentalFrame8::remove_FrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe8?view=webview2-1.0.3079-prerelease&preserve-view=true#remove_framecreated)

* [ICoreWebView2ExperimentalFrameChildFrameCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframechildframecreatedeventhandler?view=webview2-1.0.3079-prerelease&preserve-view=true)

---


<!-- ---------- -->
###### Set default background color on WebView2 initialization (DefaultBackgroundColor API)

The DefaultBackgroundColor API allows users to set the `DefaultBackgroundColor` property at initialization.  This prevents a disruptive white flash during the WebView2 loading process.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.DefaultBackgroundColor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.defaultbackgroundcolor?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.DefaultBackgroundColor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#defaultbackgroundcolor)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalControllerOptions3](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions3?view=webview2-1.0.3079-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalControllerOptions3::get_DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions3?view=webview2-1.0.3079-prerelease&preserve-view=true#get_defaultbackgroundcolor)
  * [ICoreWebView2ExperimentalControllerOptions3::put_DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions3?view=webview2-1.0.3079-prerelease&preserve-view=true#put_defaultbackgroundcolor)

---


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ---------- -->
###### Show WPF elements on top of the WebView2 layer (WebView2CompositionControl)

The `WebView2CompositionControl` prevents the WebView2 control from being the topmost layer in a WPF app and obscuring any WPF elements.  `Microsoft.Web.WebView2.Wpf.WebView2CompositionControl` is a drop-in replacement for the standard WPF WebView2 control.  Both the WebView2 control and `WebView2CompositionControl` implement the `Microsoft.Web.WebView2.Wpf.IWebView2` interface.  Both of them derive from `FrameworkElement`, as follows:
* `FrameworkElement` -> `HwndHost` -> `WebView2`.
* `FrameworkElement` -> `Control` -> `WebView2CompositionControl`.

Background: If you're building a Windows Presentation Foundation (WPF) app and using the WebView2 control, you may find that your app runs into "airspace" issues, where the WebView2 control is always displayed on top, hiding any WPF elements in the same location, even if you try to specify the WPF elements to be above the WebView2 control (using visual tree order or the z-index property, for example).

This issue occurs because the WPF control uses the WPF `HwndHost` to host the Win32 WebView2 control, and `HwndHost` has an issue with airspace.

See also:
* [Mitigating Airspace Issues In WPF Applications](https://dwayneneed.github.io/wpf/2013/02/26/mitigating-airspace-issues-in-wpf-applications.html)
* [WPF Airspace - WebView2CompositionControl](https://github.com/MicrosoftEdge/WebView2Feedback/blob/main/specs/WPF_WebView2CompositionControl.md) - Spec.

##### [.NET/C#](#tab/dotnetcsharp)

* [WebView2CompositionControl Class](/dotnet/api/microsoft.web.webview2.wpf.webview2compositioncontrol?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

n/a

##### [Win32/C++](#tab/win32cpp)

n/a

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed a regression where display changes can cause WebView2 to render smaller than app window.
* Enabled the `IsolateSandboxedIframes` upstream feature for WebView2.
* Prevented deleting a service worker when the version changes.
* The `CleanUpSome` API in `Hostobject` now only does garbage collection for the full heap.  `CleanUpSome` has been removed from the V8 engine.
* Fixed a regression of `AreBrowserAcceleratorKeysEnabled`.  ([Issue #5033](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5033))
* Fixed a bug where `IsDefaultDownloadDialogOpenChanged` wasn't triggered when a dialog is closed by using the keyboard.  ([Issue #4807](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4807))


<!-- ---------- -->
###### SDK-only

* Fixed an issue in the WPF `WebView2CompositionControl` where it's not displayed if it's initialized with size (0,0), such as when it's initialized in a `TabItem` of a `TabControl`.  ([Issue #4941](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4941))



<!-- end of Jan 2024 Prerelease SDK -->


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

Added a new `ScreenCaptureStarting` event.  This event is raised whenever the WebView2 and/or iframe that corresponds to the `CoreWebView2Frame` (or to any of its descendant iframes) requests permission to use the Screen Capture API before the UI is shown.  The app can then block the UI from being displayed, or allow the UI to be displayed.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ScreenCaptureStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.screencapturestarting?view=webview2-dotnet-1.0.2903.40&preserve-view=true)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.ScreenCaptureStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.screencapturestarting?view=webview2-dotnet-1.0.2903.40&preserve-view=true)

* `CoreWebView2NonClientRegionKind` Enum:
   * [CoreWebView2NonClientRegionKind.Minimize](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
   * [CoreWebView2NonClientRegionKind.Maximize](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
   * [CoreWebView2NonClientRegionKind.Close](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2903.40&preserve-view=true)

* [CoreWebView2ScreenCaptureStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.Cancel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.cancel?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.Handled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.handled?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.OriginalSourceFrameInfo Property](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.originalsourceframeinfo?view=webview2-dotnet-1.0.2903.40&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2screencapturestartingeventargs.getdeferral?view=webview2-dotnet-1.0.2903.40&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.ScreenCaptureStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2903.40&preserve-view=true#screencapturestarting)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.ScreenCaptureStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.2903.40&preserve-view=true#screencapturestarting)

* `CoreWebView2NonClientRegionKind` Enum:
   * [CoreWebView2NonClientRegionKind.Minimize](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionkind?view=webview2-winrt-1.0.2903.40&preserve-view=true)
   * [CoreWebView2NonClientRegionKind.Maximize](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionkind?view=webview2-winrt-1.0.2903.40&preserve-view=true)
   * [CoreWebView2NonClientRegionKind.Close](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionkind?view=webview2-winrt-1.0.2903.40&preserve-view=true)

* [CoreWebView2ScreenCaptureStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2903.40&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.Cancel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2903.40&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.Handled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2903.40&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.OriginalSourceFrameInfo Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2903.40&preserve-view=true)
   * [CoreWebView2ScreenCaptureStartingEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2screencapturestartingeventargs?view=webview2-winrt-1.0.2903.40&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_27](/microsoft-edge/webview2/reference/win32/icorewebview2_27?view=webview2-1.0.2903.40&preserve-view=true)
  * [ICoreWebView2_27::add_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2_27?view=webview2-1.0.2903.40&preserve-view=true#add_screencapturestarting)
  * [ICoreWebView2_27::remove_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2_27?view=webview2-1.0.2903.40&preserve-view=true#remove_screencapturestarting)

* [ICoreWebView2Frame6](/microsoft-edge/webview2/reference/win32/icorewebview2frame6?view=webview2-1.0.2903.40&preserve-view=true)
  * [ICoreWebView2Frame6::add_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2frame6?view=webview2-1.0.2903.40&preserve-view=true#add_screencapturestarting)
  * [ICoreWebView2Frame6::remove_ScreenCaptureStarting](/microsoft-edge/webview2/reference/win32/icorewebview2frame6?view=webview2-1.0.2903.40&preserve-view=true#remove_screencapturestarting)

* [ICoreWebView2FrameScreenCaptureStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2framescreencapturestartingeventhandler?view=webview2-1.0.2903.40&preserve-view=true)<!-- win32 only -->

* [ICoreWebView2ScreenCaptureStartingEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::get_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true#get_cancel)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true#get_handled)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true#get_originalsourceframeinfo)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true#getdeferral)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::put_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true#put_cancel)
  * [ICoreWebView2ScreenCaptureStartingEventArgs::put_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2903.40&preserve-view=true#put_handled)

* [ICoreWebView2ScreenCaptureStartingEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventhandler?view=webview2-1.0.2903.40&preserve-view=true)<!-- win32 only -->

* `COREWEBVIEW2_NON_CLIENT_REGION_KIND` enum:
  * [COREWEBVIEW2_NON_CLIENT_REGION_KIND_MINIMIZE](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2903.40&preserve-view=true#corewebview2_non_client_region_kind)
  * [COREWEBVIEW2_NON_CLIENT_REGION_KIND_MAXIMIZE](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2903.40&preserve-view=true#corewebview2_non_client_region_kind)
  * [COREWEBVIEW2_NON_CLIENT_REGION_KIND_CLOSE](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2903.40&preserve-view=true#corewebview2_non_client_region_kind)

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Allowed the **Download** dialog to receive initial focus on launch.


<!-- ------------------------------ -->
#### General changes

* The Microsoft Edge WebView2 Runtime is no longer listed in Windows **Settings** > **Apps** > **Installed apps**, because it is a persistent system component.


<!-- end of Nov 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2950-prerelease

Release Date: November 18, 2024

[NuGet package for WebView2 SDK 1.0.2950-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2950-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 132.0.2950.0 or higher.


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

* Allowed the **Download** dialog to receive initial focus on launch.
* Fixed a crash while cancelling navigation to certain sites in `FrameNavigationStarting`.  ([Issue #4843](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4843))
* Postponed customizing the context menu when the touch selection menu is being displayed.  ([Issue #4737](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4737))


<!-- ---------- -->
###### SDK-only

* Added Arm64ec support.
* Fixed an issue where WebView2 running in "Window to Visual" mode couldn't receive accelerator input.

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
* Added the .NET 8 `TargetFramework` for C# WinRT, enabled AOT (ahead-of-time) compatibility, and disabled runtime marshalling.


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
  * [ICoreWebView2ScreenCaptureStartingEventArgs::get_OriginalSourceFrameInfo](/microsoft-edge/webview2/reference/win32/icorewebview2screencapturestartingeventargs?view=webview2-1.0.2895-prerelease&preserve-view=true#get_originalsourceframeinfo)<!-- no put -->
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
* Added the .NET 8 `TargetFramework` for C# WinRT, enabled AOT (ahead-of-time) compatibility, and disabled runtime marshalling.


<!-- end of Sep 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## See also

* [About Release Notes for the WebView2 SDK](./about.md)
* [Archived Release Notes for the WebView2 SDK](./archive.md)
* [Overview of WebView2 APIs](../concepts/overview-features-apis.md) - outlines many of the APIs, by feature area, that are in Release SDK packages.
* [Contacting the Microsoft Edge WebView2 team](../contact.md)
* [Release notes for Microsoft Edge web platform](../../web-platform/release-notes/index.md)


<!--
template for Release and Prerelease
omit the "Experimental APIs" section from actual Release section
-->
<!-- ====================================================================== --
## 1.0.####.##
## 1.0.####-prerelease

Release Date: Monthname nn, 2024

[NuGet package for WebView2 SDK 1.0.####.##](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.####.##)
[NuGet package for WebView2 SDK 1.0.####-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.####-prerelease)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version ###.0.####.## or higher.
For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version ###.0.####.0 or higher.


<!-- ------------------------------ --
#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.
The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- --
###### heading

description

##### [.NET/C#](#tab/dotnetcsharp)

##### [WinRT/C#](#tab/winrtcsharp)

##### [Win32/C++](#tab/win32cpp)

---


<!-- ------------------------------ --
#### Promotions

No additional APIs have been promoted to Stable and added in this Release SDK.
The following APIs have been promoted to Stable and are now included in this Release SDK.

No APIs have been promoted from Experimental to Stable in this Prerelease SDK.
The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ---------- --
###### heading

description

##### [.NET/C#](#tab/dotnetcsharp)

##### [WinRT/C#](#tab/winrtcsharp)

##### [Win32/C++](#tab/win32cpp)

---


<!-- ------------------------------ --
#### Bug fixes


<!-- ---------- --
###### Runtime and SDK

* item
* item


<!-- ---------- --
###### Runtime-only

* item
* item


<!-- ---------- --
###### SDK-only

* item
* item

-->


<!-- end of Mar 2025 Release SDK -->
<!-- end of Mar 2025 Prerelease SDK -->
<!-- end of template -->
