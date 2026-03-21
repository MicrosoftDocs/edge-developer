---
title: Archived release notes for the WebView2 SDK
description: Release notes for older releases of Microsoft Edge WebView2, covering new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 03/18/2026
---
# Archived release notes for the WebView2 SDK
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
## Prerelease SDK 1.0.3171-prerelease, for Runtime 135 (Mar. 10, 2025)

Release Date: Mar. 10, 2025, Runtime 135

[NuGet package for WebView2 SDK 1.0.3171-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3171-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 135.0.3171.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime and SDK

* Fixed host object async method exception handling.  ([Issue #3402](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3402))
* Fixed documentation for `CoreWebVIew2.Navigate`.  ([Issue #5091](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5091))


<!-- ---------- -->
###### Runtime-only

* Fixed an "Add to Chrome" store installation regression.
* Fixed folder uploads in UWP and WinUI.  ([Issue #3275](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3275))
* Extensions won't get disabled in WebView2 by using `AddBrowserExtensionAsync`, regardless of whether developer mode is on.  ([Issue #5113](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5113))
* Disabled background update of network time.  ([Issue #5047](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5047))
* Fixed the download popup not being displayed when `target="_blank"`.  ([Issue #5063](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5063))


<!-- ---------- -->
###### SDK-only

* Fixes a crash that could occur when the Garbage Collector calls `Finalize` on a thread other than the main thread.

<!-- end of Prerelease SDK 1.0.3171-prerelease, for Runtime 135 (Mar. 10, 2025) -->


<!-- ====================================================================== -->
## Release SDK 1.0.3124.44, for Runtime 134 (Mar. 10, 2025)

Release Date: Mar. 10, 2025, Runtime 134

[NuGet package for WebView2 SDK 1.0.3124.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3124.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 134.0.3124.44 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Extensions won't get disabled in WebView2 by using `AddBrowserExtensionAsync`, regardless of whether developer mode is on.  ([Issue #5113](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5113))
* Disabled background update of network time.  ([Issue #5047](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5047))
* Fixed the download popup not being displayed when `target="_blank"`.  ([Issue #5063](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5063))

<!-- end of Release SDK 1.0.3124.44, for Runtime 134 (Mar. 10, 2025) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.3116-prerelease, for Runtime 134 (Feb. 10, 2025)

Release Date: Feb. 10, 2025, Runtime 134

[NuGet package for WebView2 SDK 1.0.3116-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3116-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 134.0.3116.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


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

---

<!-- end of Prerelease SDK 1.0.3116-prerelease, for Runtime 134 (Feb. 10, 2025) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.3079-prerelease, for Runtime 134 (Jan. 24, 2025)

Release Date: Jan. 24, 2025

[NuGet package for WebView2 SDK 1.0.3079-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3079-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 134.0.3079.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

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

* `CoreWebView2` Class:
   * [CoreWebView2.Find Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.find?view=webview2-dotnet-1.0.3079-prerelease&preserve-view=true)

* `CoreWebView2Environment` Class:
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

* `CoreWebView2` Class:
   * [CoreWebView2.Find Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.3079-prerelease&preserve-view=true#find)

* `CoreWebView2Environment` Class:
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

* [ICoreWebView2ExperimentalFrameChildFrameCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframechildframecreatedeventhandler?view=webview2-1.0.3079-prerelease&preserve-view=true)<!-- win32 only -->

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
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


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

<!-- end of Prerelease SDK 1.0.3079-prerelease, for Runtime 134 (Jan. 24, 2025) -->


<!-- ====================================================================== -->
## Release SDK 1.0.3065.39, for Runtime 133 (Feb. 10, 2025)

Release Date: Feb. 10, 2025, Runtime 133

[NuGet package for WebView2 SDK 1.0.3065.39](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3065.39)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 133.0.3065.39 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Added the missing **Close** button in the **Download** flyout.
* Fixed a race condition that occurred when the Web Request Response event never occurs.

<!-- end of Release SDK 1.0.3065.39, for Runtime 133 (Feb. 10, 2025) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2957.106, for Runtime 132 (Jan. 20, 2025)

Release Date: Jan. 20, 2025

[NuGet package for WebView2 SDK 1.0.2957.106](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2957.106)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 132.0.2957.106 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


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

<!-- end of Release SDK 1.0.2957.106, for Runtime 132 (Jan. 20, 2025) -->


<!-- Dec 2024 Prerelease SDK -->
<!-- ====================================================================== -->
<!-- n/a -->
<!-- end of Dec 2024 Prerelease SDK -->


<!-- Dec 2024 Release SDK -->
<!-- ====================================================================== -->
<!-- n/a -->
<!-- end of Dec 2024 Release SDK -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2950-prerelease, for Runtime 132 (Nov. 18, 2024)

Release Date: Nov. 18, 2024

[NuGet package for WebView2 SDK 1.0.2950-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2950-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 132.0.2950.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


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

<!-- end of Prerelease SDK 1.0.2950-prerelease, for Runtime 132 (Nov. 18, 2024) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2903.40, for Runtime 131 (Nov. 18, 2024)

Release Date: Nov. 18, 2024

[NuGet package for WebView2 SDK 1.0.2903.40](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2903.40)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 131.0.2903.40 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


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

<!-- end of Release SDK 1.0.2903.40, for Runtime 131 (Nov. 18, 2024) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2895-prerelease, for Runtime 131 (Oct. 21, 2024)

Release Date: Oct. 21, 2024

[NuGet package for WebView2 SDK 1.0.2895-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2895-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 131.0.2895.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

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
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


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

<!-- end of Prerelease SDK 1.0.2895-prerelease, for Runtime 131 (Oct. 21, 2024) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2849.39, for Runtime 130 (Oct. 21, 2024)

Release Date: Oct. 21, 2024

[NuGet package for WebView2 SDK 1.0.2849.39](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2849.39)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 130.0.2849.39 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


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

<!-- end of Release SDK 1.0.2849.39, for Runtime 130 (Oct. 21, 2024) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2839-prerelease, for Runtime 130 (Sep. 23, 2024)

Release Date: Sep. 23, 2024

[NuGet package for WebView2 SDK 1.0.2839-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2839-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 130.0.2839.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


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

<!-- end of Prerelease SDK 1.0.2839-prerelease, for Runtime 130 (Sep. 23, 2024) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2792.45, for Runtime 129 (Sep. 23, 2024)

Release Date: Sep. 23, 2024

[NuGet package for WebView2 SDK 1.0.2792.45](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2792.45)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 129.0.2792.45 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### SDK-only

* Fixed an SDK dependency for .NET projects.  ([Issue #4743](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4743))

<!-- end of Release SDK 1.0.2792.45, for Runtime 129 (Sep. 23, 2024) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2783-prerelease, for Runtime 129 (Aug. 26, 2024)

Release Date: Aug. 26, 2024

[NuGet package for WebView2 SDK 1.0.2783-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2783-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 129.0.2783.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


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

<!-- end of Prerelease SDK 1.0.2783-prerelease, for Runtime 129 (Aug. 26, 2024) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2739.15, for Runtime 128 (Aug. 26, 2024)

Release Date: Aug. 26, 2024

[NuGet package for WebView2 SDK 1.0.2739.15](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2739.15)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 128.0.2739.15 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


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

<!-- end of Release SDK 1.0.2739.15, for Runtime 128 (Aug. 26, 2024) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2730-prerelease, for Runtime 128 (Aug. 7, 2024)

Release Date: Aug. 7, 2024

[NuGet package for WebView2 SDK 1.0.2730-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2730-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 128.0.2730.0 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

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
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


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

<!-- end of Prerelease SDK 1.0.2730-prerelease, for Runtime 128 (Aug. 7, 2024) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2651.64, for Runtime 127 (Aug. 13, 2024)

Release Date: Aug. 13, 2024

[NuGet package for WebView2 SDK 1.0.2651.64](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2651.64)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 127.0.2651.64 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


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

<!-- end of Release SDK 1.0.2651.64, for Runtime 127 (Aug. 13, 2024) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2646-prerelease, for Runtime 128 (Jun. 19, 2024)

Release Date: Jun. 19, 2024

[NuGet package for WebView2 SDK 1.0.2646-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2646-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 128.0.2646.0 or higher.


<!-- ------------------------------ -->
#### General features

* Added support for C#/WinRT .NET 6+.


<!-- ------------------------------ -->
#### Experimental features

* Introduced the feature flag `msWebView2EnableDownloadContentInWebResourceResponseReceived`, an an Experimental feature (rather than as a Stable feature).  When this flag is enabled, this allows responses of navigations that become downloads to be available in `WebResourceResponseReceived`.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
* Added a new `SaveFileSecurityCheckStarting` event.  As a developer, you can register a handler on this event to get the file path, filename extension, and document origin URI information.  Then you can apply your own rules to do actions such as the following:
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


<!-- ---------- -->
* Added a new `ScreenCaptureStarting` event.  This event is raised whenever the WebView2 and/or iframe that corresponds to the `CoreWebView2Frame` (or to any of its descendant iframes) requests permission to use the Screen Capture API before the UI is shown.  As a developer, you can then choose to block the UI from being displayed, or allow the UI to be displayed.

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


<!-- ---------- -->
* Added a new `GetComICoreWebView2` method to the `CoreWebView2` .NET class that enables you to convert a `CoreWebView2` between .NET and COM.  Added a new WinRT interface that enables you to convert a `CoreWebView2` between WinRT and COM.  This allows you to interoperate between libraries that are written in different languages.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.GetComICoreWebView2 Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.getcomicorewebview2?view=webview2-dotnet-1.0.2646-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `ICoreWebView2Interop2` Interface:
   * [ICoreWebView2Interop2::GetComICoreWebView2 Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2interop2?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#getcomicorewebview2)

##### [Win32/C++](#tab/win32cpp)

Not applicable.

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ---------- -->
* Updated the WebMessageObjects API to allow injecting DOM objects into WebView2 content that's constructed via the app, and via the `CoreWebView2.PostWebMessage` API in the other direction.  Added a new web object type to represent a file system handle that can be posted to the web content to provide it with filesystem access.

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
   * [CoreWebView2.PostWebMessageAsJsonWithAdditionalObjects Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#postwebmessageasjsonwithadditionalobjects)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateWebFileSystemDirectoryHandle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#createwebfilesystemdirectoryhandle)
   * [CoreWebView2Environment.CreateWebFileSystemFileHandle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2646-prerelease&preserve-view=true#createwebfilesystemfilehandle)

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


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed a bug in owned-window activation logic for visual hosting.

<!-- end of Prerelease SDK 1.0.2646-prerelease, for Runtime 128 (Jun. 19, 2024) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2592.51, for Runtime 126 (Jun. 19, 2024)

Release Date: Jun. 19, 2024

[NuGet package for WebView2 SDK 1.0.2592.51](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2592.51)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 126.0.2592.51 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

No additional APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Disabled `BreakoutBoxPreferCaptureTimestampInVideoFrame` for WebView2 `TextureStream`.

* Fixed a regression where the `WindowCloseRequested` event only fires for first `window.close()` call.

* Fixed a regression where typed arrays in WinRT JavaScript projection could not be handled as `IDispatch` in the host.

* Fixed a bug where the autofill popup dismisses immediately and causes a focus change.

* Fixed a bug where WebView2 fails to load because of `AppPolicyGetWindowingModel`.  ([Issue #4591](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4591))

<!-- end of Release SDK 1.0.2592.51, for Runtime 126 (Jun. 19, 2024) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2584-prerelease, for Runtime 126 (May 28, 2024)

Release Date: May 28, 2024

[NuGet package for WebView2 SDK 1.0.2584-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2584-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 126.0.2584.0 or higher.


<!-- ------------------------------ -->
#### Experimental features

* Introduced an option to cancel the initial navigation in WebView2, to improve startup performance.  This change is disabled by default, and can be enabled by using the `msWebView2CancelInitialNavigation` feature flag.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

No APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, in this Prerelease SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime and SDK

* Fixed a crash when .NET host object async methods return a null result.  ([Issue #4509](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4509))


<!-- ---------- -->
###### Runtime-only

* Fixed a WebView2 memory leak issue when the window is closed.  ([Issue #4286](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4286))

* Fixed an issue where `ignoreMemberNotFoundError` wasn't working for .NET objects.  ([Issue #4497](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4497))

* Now returns a proper error code when `CreateSharedBuffer` is called with 0 buffer size.  ([Issue #4554](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4554))

* Fixed an activation issue for the caret browsing dialog.

* Fixed an issue where the WebView2 Visual Hosting `CursorChanged` event wasn't firing for custom cursors.

<!-- end of Prerelease SDK 1.0.2584-prerelease, for Runtime 126 (May 28, 2024) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2535.41, for Runtime 125 (May 28, 2024)

Release Date: May 28, 2024

[NuGet package for WebView2 SDK 1.0.2535.41](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2535.41)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 125.0.2535.41 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ---------- -->
* Support for the Fluent Style Overlay Scrollbar.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ScrollBarStyle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.scrollbarstyle?view=webview2-dotnet-1.0.2535.41&preserve-view=true)

* [CoreWebView2ScrollbarStyle Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2scrollbarstyle?view=webview2-dotnet-1.0.2535.41&preserve-view=true)
   * `Default`
   * `FluentOverlay`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ScrollBarStyle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2535.41&preserve-view=true#scrollbarstyle)

* [CoreWebView2ScrollbarStyle Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scrollbarstyle?view=webview2-winrt-1.0.2535.41&preserve-view=true)
   * `Default`
   * `FluentOverlay`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions8](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions8?view=webview2-1.0.2535.41&preserve-view=true)
  * [ICoreWebView2EnvironmentOptions8::get_ScrollBarStyle](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions8?view=webview2-1.0.2535.41&preserve-view=true#get_scrollbarstyle)
  * [ICoreWebView2EnvironmentOptions8::put_ScrollBarStyle](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions8?view=webview2-1.0.2535.41&preserve-view=true#put_scrollbarstyle)

* [COREWEBVIEW2_SCROLLBAR_STYLE enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2535.41&preserve-view=true#corewebview2_scrollbar_style)
   * `COREWEBVIEW2_SCROLLBAR_STYLE_DEFAULT`
   * `COREWEBVIEW2_SCROLLBAR_STYLE_FLUENT_OVERLAY`

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed a bug where if the `LaunchingExternalURIScheme` event handler is attached, and the **always remember** checkbox is enabled, and the user selects this checkbox, the dialog is incorrectly displayed again.

* Fixed an issue where text edit controls in visual hosting would duplicate IME input when losing and then regaining focus.

* Fixed an issue where full-trust UWP apps couldn't display owned windows.


<!-- ---------- -->
###### SDK-only

* Fixed an issue in the SDK causing erroneous \<Platform\> values in the .NET project platforms list.  ([Issue #1755](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1755))

<!-- end of Release SDK 1.0.2535.41, for Runtime 125 (May 28, 2024) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2526-prerelease, for Runtime 125 (Apr. 22, 2024)

Release Date: Apr. 22, 2024

[NuGet package for WebView2 SDK 1.0.2526-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2526-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 125.0.2526.0 or higher.


<!-- ------------------------------ -->
#### Breaking changes


<!-- ---------- -->
###### Minimum .NET Framework version

The minimum .NET Framework version requirement for .NET WebView2, including WPF and WinForms controls, has been updated from .NET Framework 4.5 to .NET Framework 4.6.2.


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.

* Added `SaveAs` APIs that allow you to programmatically perform the **Save as** operation.  You can use these APIs to block the default **Save as** dialog, and then either save silently, or build your own UI for **Save as**.  These APIs pertain only to the **Save as** dialog, not the **Download** dialog, which continues to use the existing Download APIs.

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
  * [CoreWebView2.ShowSaveAsUIAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2526-prerelease&preserve-view=true#showsaveasuiasync)

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


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ---------- -->
* Support for the Fluent Style Overlay Scrollbar.

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


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime and SDK

* Fixed a bug in WinRT JavaScript projection where passing in a typed array resulted in an "Interface Not Supported" error.  ([Issue #3486](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3486))

* Added support for handling `out` array parameters in WinRT JavaScript projection.


<!-- ---------- -->
###### Runtime-only

* Fixed a bug where the Image Auto-captioning feature was enabled by default.

* Fixed a bug where if the `LaunchingExternalURIScheme` event handler is attached, if the **always remember** checkbox is enabled and the user selects this checkbox, the dialog will incorrectly be shown again.

* Fixed `GetNonClientRegionAtPoint` incorrectly returning `Nowhere` for some points.

* Fixed a bug where the Text Services Framework would disconnect upon dropping a file onto a WebView2 region.

* Fixed a bug where the View Source **Ctrl+U** keyboard shortcut remained enabled when the `AreDevToolsEnabled` setting was `false`.

* Fixed a bug where a composable IME was duplicated upon regaining focus.  ([Issue #1610](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1610))

* Ensured that `devicePixelRatio` is synchronized with custom rasterization scales.  ([Issue #3060](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3060))

* Fixed a race condition when using `CallDevToolsProtocolMethod` events in `NewWindowRequested`.  ([Issue #4181](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4181))

* Fixed a crash that can occur in WPF `TabIntoCore` when the `Controller` has been destroyed but the user tries to tab into the control (pressing the **Tab** key).  ([Issue #4452](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4452))

* Ensured that spellcheck takes input language with case-insensitive format.

* Made the Language API more robust regarding user input.

* Fixed a bug where the **Save password?** prompt is not displayed.


<!-- ---------- -->
###### SDK-only

* Fixed missing `AreBrowserExtensionsEnabled` API in WinRT projection.

<!-- end of Prerelease SDK 1.0.2526-prerelease, for Runtime 125 (Apr. 22, 2024) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2478.35, for Runtime 124 (Apr. 22, 2024)

Release Date: Apr. 22, 2024

[NuGet package for WebView2 SDK 1.0.2478.35](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2478.35)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 124.0.2478.35 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ---------- -->
* Added the Runtime selection feature to support more prerelease testing and flighting scenarios.  You can specify `ReleaseChannels` to choose which channels are searched for during environment creation, and `ChannelSearchKind` to select a search order.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ChannelSearchKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.channelsearchkind?view=webview2-dotnet-1.0.2478.35&preserve-view=true)
   * [CoreWebView2EnvironmentOptions.ReleaseChannels Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.releasechannels?view=webview2-dotnet-1.0.2478.35&preserve-view=true)

* [CoreWebView2ChannelSearchKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2channelsearchkind?view=webview2-dotnet-1.0.2478.35&preserve-view=true)
   * `MostStable`
   * `LeastStable`

* [CoreWebView2ReleaseChannels Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2releasechannels?view=webview2-dotnet-1.0.2478.35&preserve-view=true)
   * `None`
   * `Stable`
   * `Beta`
   * `Dev`
   * `Canary`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ChannelSearchKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2478.35&preserve-view=true#channelsearchkind)
   * [CoreWebView2EnvironmentOptions.ReleaseChannels Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2478.35&preserve-view=true#releasechannels)

* [CoreWebView2ChannelSearchKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2channelsearchkind?view=webview2-winrt-1.0.2478.35&preserve-view=true)
   * `MostStable`
   * `LeastStable`

* [CoreWebView2ReleaseChannels Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2releasechannels?view=webview2-winrt-1.0.2478.35&preserve-view=true)
   * `None`
   * `Stable`
   * `Beta`
   * `Dev`
   * `Canary`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions7](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2478.35&preserve-view=true)
   * [ICoreWebView2EnvironmentOptions7::get_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2478.35&preserve-view=true#get_channelsearchkind)
   * [ICoreWebView2EnvironmentOptions7::put_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2478.35&preserve-view=true#put_channelsearchkind)
   * [ICoreWebView2EnvironmentOptions7::get_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2478.35&preserve-view=true#get_releasechannels)
   * [ICoreWebView2EnvironmentOptions7::put_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2478.35&preserve-view=true#put_releasechannels)

* [COREWEBVIEW2_CHANNEL_SEARCH_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2478.35&preserve-view=true#corewebview2_channel_search_kind)
   * `COREWEBVIEW2_CHANNEL_SEARCH_KIND_MOST_STABLE`
   * `COREWEBVIEW2_CHANNEL_SEARCH_KIND_LEAST_STABLE`

* [COREWEBVIEW2_RELEASE_CHANNELS enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2478.35&preserve-view=true#corewebview2_release_channels)
   * `COREWEBVIEW2_RELEASE_CHANNELS_NONE`
   * `COREWEBVIEW2_RELEASE_CHANNELS_STABLE`
   * `COREWEBVIEW2_RELEASE_CHANNELS_BETA`
   * `COREWEBVIEW2_RELEASE_CHANNELS_DEV`
   * `COREWEBVIEW2_RELEASE_CHANNELS_CANARY`

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixes a potential integer overflow that could lead to a crash when using `AdditionalObjects` in the WebMessage API.

<!-- end of Release SDK 1.0.2478.35, for Runtime 124 (Apr. 22, 2024) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2470-prerelease, for Runtime 124 (Mar. 25, 2024)

Release Date: Mar. 25, 2024

[NuGet package for WebView2 SDK 1.0.2470-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2470-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires WebView2 Runtime version 124.0.2470.0 or higher.



<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
* Support for the Fluent Style Overlay Scrollbar.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ScrollBarStyle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.scrollbarstyle?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)

* [CoreWebView2ScrollbarStyle Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2scrollbarstyle?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * `Default`
   * `FluentOverlay`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ScrollBarStyle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#scrollbarstyle)

* [CoreWebView2ScrollbarStyle Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scrollbarstyle?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true)
   * `Default`
   * `FluentOverlay`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalEnvironmentOptions2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.2470-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironmentOptions2::get_ScrollBarStyle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.2470-prerelease&preserve-view=true#get_scrollbarstyle)
   * [ICoreWebView2ExperimentalEnvironmentOptions2::put_ScrollBarStyle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.2470-prerelease&preserve-view=true#put_scrollbarstyle)

* [COREWEBVIEW2_SCROLLBAR_STYLE enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2470-prerelease&preserve-view=true#corewebview2_scrollbar_style)
   * `COREWEBVIEW2_SCROLLBAR_STYLE_DEFAULT`
   * `COREWEBVIEW2_SCROLLBAR_STYLE_FLUENT_OVERLAY`

---


<!-- ---------- -->
* Updated the WebMessageObjects API to allow injecting DOM objects into WebView2 content that's constructed via the app and via the `CoreWebView2.PostWebMessage` API in the other direction.  Added a new web object type to represent a file system handle that can be posted to the web content to provide it with filesystem access.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostWebMessageAsJsonWithAdditionalObjects Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postwebmessageasjsonwithadditionalobjects?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateWebFileSystemDirectoryHandle Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createwebfilesystemdirectoryhandle?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * [CoreWebView2Environment.CreateWebFileSystemFileHandle Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createwebfilesystemfilehandle?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)

* `CoreWebView2FileSystemHandle` Class:
   * [CoreWebView2FileSystemHandle.Kind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandle.kind?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * [CoreWebView2FileSystemHandle.Path Property](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandle.path?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * [CoreWebView2FileSystemHandle.Permission Property](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandle.permission?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)

* [CoreWebView2FileSystemHandleKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandlekind?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * `File`
   * `Directory`

* [CoreWebView2FileSystemHandlePermission Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2filesystemhandlepermission?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * `ReadOnly`
   * `ReadWrite`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostWebMessageAsJsonWithAdditionalObjects Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#postwebmessageasjsonwithadditionalobjects)

* `CoreWebView2Environment` Class:
   * [CoreWebView2Environment.CreateWebFileSystemDirectoryHandle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#createwebfilesystemdirectoryhandle)
   * [CoreWebView2Environment.CreateWebFileSystemFileHandle Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#createwebfilesystemfilehandle)

* `CoreWebView2FileSystemHandle` Class:
   * [CoreWebView2FileSystemHandle.Kind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandle?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#kind)
   * [CoreWebView2FileSystemHandle.Path Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandle?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#path)
   * [CoreWebView2FileSystemHandle.Permission Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandle?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#permission)

* [CoreWebView2FileSystemHandleKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandlekind?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true)
   * `File`
   * `Directory`

* [CoreWebView2FileSystemHandlePermission Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2filesystemhandlepermission?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true)
   * `ReadOnly`
   * `ReadWrite`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental24](/microsoft-edge/webview2/reference/win32/icorewebview2experimental24?view=webview2-1.0.2470-prerelease&preserve-view=true)
   * [ICoreWebView2Experimental24::PostWebMessageAsJsonWithAdditionalObjects](/microsoft-edge/webview2/reference/win32/icorewebview2experimental24?view=webview2-1.0.2470-prerelease&preserve-view=true#postwebmessageasjsonwithadditionalobjects)

* [ICoreWebView2ExperimentalEnvironment14](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment14?view=webview2-1.0.2470-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironment14::CreateObjectCollection](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment14?view=webview2-1.0.2470-prerelease&preserve-view=true#createobjectcollection)<!--win32 only-->
   * [ICoreWebView2ExperimentalEnvironment14::CreateWebFileSystemDirectoryHandle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment14?view=webview2-1.0.2470-prerelease&preserve-view=true#createwebfilesystemdirectoryhandle)
   * [ICoreWebView2ExperimentalEnvironment14::CreateWebFileSystemFileHandle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment14?view=webview2-1.0.2470-prerelease&preserve-view=true#createwebfilesystemfilehandle)

* [ICoreWebView2ExperimentalFileSystemHandle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfilesystemhandle?view=webview2-1.0.2470-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalFileSystemHandle::get_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfilesystemhandle?view=webview2-1.0.2470-prerelease&preserve-view=true#get_kind)
   * [ICoreWebView2ExperimentalFileSystemHandle::get_Path](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfilesystemhandle?view=webview2-1.0.2470-prerelease&preserve-view=true#get_path)
   * [ICoreWebView2ExperimentalFileSystemHandle::get_Permission](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalfilesystemhandle?view=webview2-1.0.2470-prerelease&preserve-view=true#get_permission)

* [ICoreWebView2ExperimentalObjectCollection](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalobjectcollection?view=webview2-1.0.2470-prerelease&preserve-view=true)<!--win32 only-->
   * [ICoreWebView2ExperimentalObjectCollection::InsertValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalobjectcollection?view=webview2-1.0.2470-prerelease&preserve-view=true#insertvalueatindex)<!--win32 only-->
   * [ICoreWebView2ExperimentalObjectCollection::RemoveValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalobjectcollection?view=webview2-1.0.2470-prerelease&preserve-view=true#removevalueatindex)<!--win32 only-->

* [COREWEBVIEW2_FILE_SYSTEM_HANDLE_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2470-prerelease&preserve-view=true#corewebview2_file_system_handle_kind)
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_KIND_FILE`
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_KIND_DIRECTORY`

* [COREWEBVIEW2_FILE_SYSTEM_HANDLE_PERMISSION enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2470-prerelease&preserve-view=true#corewebview2_file_system_handle_permission)
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_PERMISSION_READ_ONLY`
   * `COREWEBVIEW2_FILE_SYSTEM_HANDLE_PERMISSION_READ_WRITE`

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ---------- -->
* Added the Runtime selection feature to support more prerelease testing and flighting scenarios.  You can specify `ReleaseChannels` to choose which channels are searched for during environment creation, and `ChannelSearchKind` to select a search order.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ChannelSearchKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.channelsearchkind?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * [CoreWebView2EnvironmentOptions.ReleaseChannels Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.releasechannels?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)

* [CoreWebView2ChannelSearchKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2channelsearchkind?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * `MostStable`
   * `LeastStable`

* [CoreWebView2ReleaseChannels Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2releasechannels?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)
   * `None`
   * `Stable`
   * `Beta`
   * `Dev`
   * `Canary`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class:
   * [CoreWebView2EnvironmentOptions.ChannelSearchKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#channelsearchkind)
   * [CoreWebView2EnvironmentOptions.ReleaseChannels Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#releasechannels)

* [CoreWebView2ChannelSearchKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2channelsearchkind?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true)
   * `MostStable`
   * `LeastStable`

* [CoreWebView2ReleaseChannels Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2releasechannels?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true)
   * `None`
   * `Stable`
   * `Beta`
   * `Dev`
   * `Canary`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions7](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2470-prerelease&preserve-view=true)
   * [ICoreWebView2EnvironmentOptions7::get_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2470-prerelease&preserve-view=true#get_channelsearchkind)
   * [ICoreWebView2EnvironmentOptions7::put_ChannelSearchKind](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2470-prerelease&preserve-view=true#put_channelsearchkind)
   * [ICoreWebView2EnvironmentOptions7::get_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2470-prerelease&preserve-view=true#get_releasechannels)
   * [ICoreWebView2EnvironmentOptions7::put_ReleaseChannels](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions7?view=webview2-1.0.2470-prerelease&preserve-view=true#put_releasechannels)

* [COREWEBVIEW2_CHANNEL_SEARCH_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2470-prerelease&preserve-view=true#corewebview2_channel_search_kind)
   * `COREWEBVIEW2_CHANNEL_SEARCH_KIND_MOST_STABLE`
   * `COREWEBVIEW2_CHANNEL_SEARCH_KIND_LEAST_STABLE`

* [COREWEBVIEW2_RELEASE_CHANNELS enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2470-prerelease&preserve-view=true#corewebview2_release_channels)
   * `COREWEBVIEW2_RELEASE_CHANNELS_NONE`
   * `COREWEBVIEW2_RELEASE_CHANNELS_STABLE`
   * `COREWEBVIEW2_RELEASE_CHANNELS_BETA`
   * `COREWEBVIEW2_RELEASE_CHANNELS_DEV`
   * `COREWEBVIEW2_RELEASE_CHANNELS_CANARY`

---


<!-- ---------- -->
* Added the `FailureSourceModulePath` property to the `ProcessFailedEventArgs` type, to specify the full path of the module that caused the crash in cases of Windows code integrity failures - that is, when a process exited with `STATUS_INVALID_IMAGE_HASH`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class:
   * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.failuresourcemodulepath?view=webview2-dotnet-1.0.2470-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class:
   * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs?view=webview2-winrt-1.0.2470-prerelease&preserve-view=true#failuresourcemodulepath)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ProcessFailedEventArgs3](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs3?view=webview2-1.0.2470-prerelease&preserve-view=true)
   * [ICoreWebView2ProcessFailedEventArgs3::get_FailureSourceModulePath](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs3?view=webview2-1.0.2470-prerelease&preserve-view=true#get_failuresourcemodulepath)<!--no put-->

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed a reliability regression that could crash the application process when an old version of WebView2 client DLL is unloaded.

* Ensured that the WebView2 temporary download folder is unique per user data folder, and doesn't interfere with other apps or the browser.

<!-- end of Prerelease SDK 1.0.2470-prerelease, for Runtime 124 (Mar. 25, 2024) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2420.47, for Runtime 123 (Mar. 25, 2024)

Release Date: Mar. 25, 2024

[NuGet package for WebView2 SDK 1.0.2420.47](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2420.47)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 123.0.2420.47 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ---------- -->
* Added a new API to provide hit-testing results on the regions that a WebView2 contains.  This API is useful for visually hosted applications that want to handle mouse events on the non-client area of the WebView2 window.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.GetNonClientRegionAtPoint Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.getnonclientregionatpoint?view=webview2-dotnet-1.0.2420.47&preserve-view=true)
   * [CoreWebView2CompositionController.NonClientRegionChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.nonclientregionchanged?view=webview2-dotnet-1.0.2420.47&preserve-view=true)
   * [CoreWebView2CompositionController.QueryNonClientRegion Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.querynonclientregion?view=webview2-dotnet-1.0.2420.47&preserve-view=true)

* `CoreWebView2NonClientRegionChangedEventArgs` Class:
   * [CoreWebView2NonClientRegionChangedEventArgs.RegionKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionchangedeventargs.regionkind?view=webview2-dotnet-1.0.2420.47&preserve-view=true)

* [CoreWebView2NonClientRegionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2420.47&preserve-view=true)
   * `Caption`
   * `Client`
   * `Nowhere`

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsNonClientRegionSupportEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isnonclientregionsupportenabled?view=webview2-dotnet-1.0.2420.47&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.GetNonClientRegionAtPoint Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2420.47&preserve-view=true#getnonclientregionatpoint)
   * [CoreWebView2CompositionController.NonClientRegionChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2420.47&preserve-view=true#nonclientregionchanged)
   * [CoreWebView2CompositionController.QueryNonClientRegion Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2420.47&preserve-view=true#querynonclientregion)

* `CoreWebView2NonClientRegionChangedEventArgs` Class:
   * [CoreWebView2NonClientRegionChangedEventArgs.RegionKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionchangedeventargs?view=webview2-winrt-1.0.2420.47&preserve-view=true#regionkind)

* [CoreWebView2NonClientRegionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionkind?view=webview2-winrt-1.0.2420.47&preserve-view=true)
   * `Caption`
   * `Client`
   * `Nowhere`

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsNonClientRegionSupportEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.2420.47&preserve-view=true#isnonclientregionsupportenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController4](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2420.47&preserve-view=true)
   * [ICoreWebView2CompositionController4::add_NonClientRegionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2420.47&preserve-view=true#add_nonclientregionchanged)
   * [ICoreWebView2CompositionController4::GetNonClientRegionAtPoint](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2420.47&preserve-view=true#getnonclientregionatpoint)
   * [ICoreWebView2CompositionController4::QueryNonClientRegion](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2420.47&preserve-view=true#querynonclientregion)
   * [ICoreWebView2CompositionController4::remove_NonClientRegionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2420.47&preserve-view=true#remove_nonclientregionchanged)

* [ICoreWebView2NonClientRegionChangedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventargs?view=webview2-1.0.2420.47&preserve-view=true)
   * [ICoreWebView2NonClientRegionChangedEventArgs::get_RegionKind](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventargs?view=webview2-1.0.2420.47&preserve-view=true#get_regionkind)<!--no put-->

* [ICoreWebView2NonClientRegionChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventhandler?view=webview2-1.0.2420.47&preserve-view=true)<!-- Win32-only -->

* [ICoreWebView2RegionRectCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2regionrectcollectionview?view=webview2-1.0.2420.47&preserve-view=true)<!-- Win32-only -->

* [ICoreWebView2Settings9](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2420.47&preserve-view=true)
   * [ICoreWebView2Settings9::get_IsNonClientRegionSupportEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2420.47&preserve-view=true#get_isnonclientregionsupportenabled)
   * [ICoreWebView2Settings9::put_IsNonClientRegionSupportEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2420.47&preserve-view=true#put_isnonclientregionsupportenabled)

* [COREWEBVIEW2_NON_CLIENT_REGION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2420.47&preserve-view=true#corewebview2_non_client_region_kind)
   * `COREWEBVIEW2_NON_CLIENT_REGION_KIND_CAPTION`
   * `COREWEBVIEW2_NON_CLIENT_REGION_KIND_CLIENT`
   * `COREWEBVIEW2_NON_CLIENT_REGION_KIND_NOWHERE`

---


<!-- ---------- -->
* Added the `FailureSourceModulePath` property to the `ProcessFailedEventArgs` type, to specify the full path of the module that caused the crash in cases of Windows code integrity failures - that is, when a process exited with `STATUS_INVALID_IMAGE_HASH`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class:
    * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2processfailedeventargs.failuresourcemodulepath?view=webview2-dotnet-1.0.2420.47&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ProcessFailedEventArgs` Class:
    * [CoreWebView2ProcessFailedEventArgs.FailureSourceModulePath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2processfailedeventargs?view=webview2-winrt-1.0.2420.47&preserve-view=true#failuresourcemodulepath)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ProcessFailedEventArgs3](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs3?view=webview2-1.0.2420.47&preserve-view=true)
    * [ICoreWebView2ProcessFailedEventArgs3::get_FailureSourceModulePath](/microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs3?view=webview2-1.0.2420.47&preserve-view=true#get_failuresourcemodulepath)

---


<!-- ------------------------------ -->
#### Bug fixes


###### SDK-only

* The .NET assemblies for WinForms and WPF are now shipped with optimization enabled.  ([Issue #4409](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4409))

<!-- end of Release SDK 1.0.2420.47, for Runtime 123 (Mar. 25, 2024) -->


<!-- ====================================================================== -->
## Prerelease SDK 1.0.2415-prerelease, for Runtime 123 (Feb. 26, 2024)

Release Date: Feb. 26, 2024

[NuGet package for WebView2 SDK 1.0.2415-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2415-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 123.0.2415.0 or higher.


<!-- ------------------------------ -->
#### Breaking changes


<!-- ---------- -->
* The behavior of the `InitiatingOrigin` property of `CoreWebView2LaunchingExternalUriSchemeEventArgs` has changed.  If the `InitiatingOrigin` is an [opaque origin](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque), the `InitiatingOrigin` that's reported in the event args is its precursor origin.  The _precursor origin_ is the origin that created the opaque origin.  For example, if a frame that's at `example.com` opens a subframe that has a different opaque origin, the subframe's precursor origin is `example.com`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2LaunchingExternalUriSchemeEventArgs` Class:
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.initiatingorigin?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2LaunchingExternalUriSchemeEventArgs` Class:
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#initiatingorigin)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2LaunchingExternalUriSchemeEventArgs`:
   * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_InitiatingOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.2415-prerelease&preserve-view=true#get_initiatingorigin)<!--no put-->

---


<!-- ---------- -->
* The members of the `CoreWebView2TextureStreamErrorKind` enum have been renamed:

##### [.NET/C#](#tab/dotnetcsharp)

Old member names:
* [CoreWebView2TextureStreamErrorKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.2357-prerelease&preserve-view=true)
   * `CoreWebView2TextureStreamErrorNoVideoTrackStarted`
   * `CoreWebView2TextureStreamErrorTextureError`
   * `CoreWebView2TextureStreamErrorTextureInUse`

New member names:
* [CoreWebView2TextureStreamErrorKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)
   * `NoVideoTrackStarted`
   * `TextureError`
   * `TextureInUse`

##### [WinRT/C#](#tab/winrtcsharp)

Old member names:
* [CoreWebView2TextureStreamErrorKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.2357-prerelease&preserve-view=true)
   * `CoreWebView2TextureStreamErrorNoVideoTrackStarted`
   * `CoreWebView2TextureStreamErrorTextureError`
   * `CoreWebView2TextureStreamErrorTextureInUse`

New member names:
* [CoreWebView2TextureStreamErrorKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true)
   * `NoVideoTrackStarted`
   * `TextureError`
   * `TextureInUse`

##### [Win32/C++](#tab/win32cpp)

Old member names:
* [COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2357-prerelease&preserve-view=true#corewebview2_texture_stream_error_kind)
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_NO_VIDEO_TRACK_STARTED`
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_TEXTURE_ERROR`
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_TEXTURE_IN_USE`

New member names:
* [COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.2415-prerelease&preserve-view=true#corewebview2_texture_stream_error_kind)
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND_NO_VIDEO_TRACK_STARTED`
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND_TEXTURE_ERROR`
   * `COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND_TEXTURE_IN_USE`

---


<!-- ------------------------------ -->
#### Promotions to Phase 1 (Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.

* The `CoreWebView2ControllerOptions` class now has an `AllowHostInputProcessing` property, which allows user input messages (keyboard, mouse, touch, and pen) to pass through the browser window to be received by an app process window.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.allowhostinputprocessing?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#allowhostinputprocessing)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalControllerOptions2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions2?view=webview2-1.0.2415-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalControllerOptions2::get_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions2?view=webview2-1.0.2415-prerelease&preserve-view=true#get_allowhostinputprocessing)
   * [ICoreWebView2ExperimentalControllerOptions2::put_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions2?view=webview2-1.0.2415-prerelease&preserve-view=true#put_allowhostinputprocessing)

---


<!-- ------------------------------ -->
#### Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK.


<!-- ------------------------------ -->
* Added a new API to provide hit-testing results on the regions that a WebView2 contains.  This API is useful for visually hosted applications that want to handle mouse events on the non-client area of the WebView2 window.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.GetNonClientRegionAtPoint Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.getnonclientregionatpoint?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)
   * [CoreWebView2CompositionController.QueryNonClientRegion Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.querynonclientregion?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)
   * [CoreWebView2CompositionController.NonClientRegionChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.nonclientregionchanged?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

* [CoreWebView2NonClientRegionChangedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionchangedeventargs?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)
   * [CoreWebView2NonClientRegionChangedEventArgs.RegionKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionchangedeventargs.regionkind?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

* [CoreWebView2NonClientRegionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2nonclientregionkind?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsNonClientRegionSupportEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isnonclientregionsupportenabled?view=webview2-dotnet-1.0.2415-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2CompositionController` Class:
   * [CoreWebView2CompositionController.GetNonClientRegionAtPoint Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#getnonclientregionatpoint)
   * [CoreWebView2CompositionController.QueryNonClientRegion Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#querynonclientregion)
   * [CoreWebView2CompositionController.NonClientRegionChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#nonclientregionchanged)

* [CoreWebView2NonClientRegionChangedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionchangedeventargs?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true)
   * [CoreWebView2NonClientRegionChangedEventArgs.RegionKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionchangedeventargs?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#regionkind)

* [CoreWebView2NonClientRegionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2nonclientregionkind?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true)

* `CoreWebView2Settings` Class:
   * [CoreWebView2Settings.IsNonClientRegionSupportEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.2415-prerelease&preserve-view=true#isnonclientregionsupportenabled)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController4](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true)
   * [ICoreWebView2CompositionController4::GetNonClientRegionAtPoint](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true#getnonclientregionatpoint)
   * [ICoreWebView2CompositionController4::QueryNonClientRegion](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true#querynonclientregion)
   * [ICoreWebView2CompositionController4::add_NonClientRegionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true#add_nonclientregionchanged)
   * [ICoreWebView2CompositionController4::remove_NonClientRegionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller4?view=webview2-1.0.2415-prerelease&preserve-view=true#remove_nonclientregionchanged)

* [ICoreWebView2NonClientRegionChangedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventargs?view=webview2-1.0.2415-prerelease&preserve-view=true)
   * [ICoreWebView2NonClientRegionChangedEventArgs::get_RegionKind](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventargs?view=webview2-1.0.2415-prerelease&preserve-view=true#get_regionkind)<!--no put-->

* [ICoreWebView2NonClientRegionChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2nonclientregionchangedeventhandler?view=webview2-1.0.2415-prerelease&preserve-view=true)<!-- Win32-only -->

* [ICoreWebView2RegionRectCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2regionrectcollectionview?view=webview2-1.0.2415-prerelease&preserve-view=true)

* [ICoreWebView2Settings9](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2415-prerelease&preserve-view=true)
   * [ICoreWebView2Settings9::get_IsNonClientRegionSupportEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2415-prerelease&preserve-view=true#get_isnonclientregionsupportenabled)
   * [ICoreWebView2Settings9::put_IsNonClientRegionSupportEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings9?view=webview2-1.0.2415-prerelease&preserve-view=true#put_isnonclientregionsupportenabled)

* [COREWEBVIEW2_NON_CLIENT_REGION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2415-prerelease&preserve-view=true#corewebview2_non_client_region_kind)

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed the camera or mic not being able to open in Google Meet or Microsoft Teams meetings when the permission request is set to "not persisted" (that is, `SavesInProfile = false`).  ([Issue #3592](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3592))

* Fixed appending an empty `--edge-webview-custom-scheme` command-line switch in a WebView2 browser process.

* Disabled the global `UserDataFolder` registry key, so that this registry key can only be applied per-app.

* Fixed the `NewWindowRequested` event not being fired when opened by a browser extension. ([Issue #3841](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3841))

* Fixed the `NewWindowRequested` event not being fired when opening a view source. ([Issue #4162](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4162))

* Fixed an issue to fire `StateChanged` and `BytesReceivedChanged` events when a download involves navigation.

* Fixed a bug where the `BeforeUnload` dialog caused the WebView2 window to unexpectedly jump position. ([Issue #4350](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4350))

* Fixed an issue where `PrintAsync` prints a blank page if it is called too soon, before the PDF is fully loaded.  ([Issue #3779](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3779))

<!-- end of Prerelease SDK 1.0.2415-prerelease, for Runtime 123 (Feb. 26, 2024) -->


<!-- ====================================================================== -->
## Release SDK 1.0.2365.46, for Runtime 122 (Feb. 26, 2024)

Release Date: Feb. 26, 2024

[NuGet package for WebView2 SDK 1.0.2365.46](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2365.46)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 122.0.2365.46 or higher.


<!-- ------------------------------ -->
#### Promotions to Phase 3 (Stable in Release)

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ------------------------------ -->
*  Added support for `WebResourceRequested` for workers, which allows setting filters in order to receive `WebResourceRequested` events for service workers, shared workers, and different-origin iframes.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.AddWebResourceRequestedFilter Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.2365.46&preserve-view=true)
   * [CoreWebView2.RemoveWebResourceRequestedFilter Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.removewebresourcerequestedfilter?view=webview2-dotnet-1.0.2365.46&preserve-view=true)

* `CoreWebView2WebResourceRequestedEventArgs` Class:
   * [CoreWebView2WebResourceRequestedEventArgs.RequestedSourceKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestedeventargs.requestedsourcekind?view=webview2-dotnet-1.0.2365.46&preserve-view=true)

* [CoreWebView2WebResourceRequestSourceKinds Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestsourcekinds?view=webview2-dotnet-1.0.2365.46&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.AddWebResourceRequestedFilter Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2365.46&preserve-view=true#addwebresourcerequestedfilter)
   * [CoreWebView2.RemoveWebResourceRequestedFilter Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.2365.46&preserve-view=true#removewebresourcerequestedfilter)

* `CoreWebView2WebResourceRequestedEventArgs` Class:
   * [CoreWebView2WebResourceRequestedEventArgs.RequestedSourceKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestedeventargs?view=webview2-winrt-1.0.2365.46&preserve-view=true#requestedsourcekind)

* [CoreWebView2WebResourceRequestSourceKinds Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestsourcekinds?view=webview2-winrt-1.0.2365.46&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_22](/microsoft-edge/webview2/reference/win32/icorewebview2_22?view=webview2-1.0.2365.46&preserve-view=true)
    * [ICoreWebView2_22::AddWebResourceRequestedFilterWithRequestSourceKinds](/microsoft-edge/webview2/reference/win32/icorewebview2_22?view=webview2-1.0.2365.46&preserve-view=true#addwebresourcerequestedfilterwithrequestsourcekinds)
    * [ICoreWebView2_22::RemoveWebResourceRequestedFilterWithRequestSourceKinds](/microsoft-edge/webview2/reference/win32/icorewebview2_22?view=webview2-1.0.2365.46&preserve-view=true#removewebresourcerequestedfilterwithrequestsourcekinds)

* [ICoreWebView2WebResourceRequestedEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventargs2?view=webview2-1.0.2365.46&preserve-view=true)
    * [ICoreWebView2WebResourceRequestedEventArgs2::get_RequestedSourceKind](/microsoft-edge/webview2/reference/win32/icorewebview2webresourcerequestedeventargs2?view=webview2-1.0.2365.46&preserve-view=true#get_requestedsourcekind)

* [COREWEBVIEW2_WEB_RESOURCE_REQUEST_SOURCE_KINDS enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.2365.46&preserve-view=true#corewebview2_web_resource_request_source_kinds)

---


<!-- ------------------------------ -->
* To support browser extensions in WebView2, added `GetBrowserExtensions` for WinRT:

##### [.NET/C#](#tab/dotnetcsharp)

N/A

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
    * [CoreWebView2Profile.GetBrowserExtensionsAsync Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.2365.46&preserve-view=true#getbrowserextensionsasync)

##### [Win32/C++](#tab/win32cpp)

N/A

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed a regression that affected handling of the `NewWindowRequested` event when the new window is set to be the source WebView.  ([Issue #4250](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4250))

* Fixed a bug where closing a WebView that has an embedded PDF viewer could lead to a crash.  ([Issue #3832](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3832))

* Fixed a regression where mouse-clicks stopped working when the application enabled `SetWindowDisplayAffinity`.  ([Issue #4325](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4325))

<!-- end of Release SDK 1.0.2365.46, for Runtime 122 (Feb. 26, 2024) -->


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
## See also

* [About release notes for the WebView2 SDK](./about.md)
* [Release notes for the WebView2 SDK](./index.md)
* [Overview of WebView2 APIs](../concepts/overview-features-apis.md) - outlines many of the APIs, by feature area, that are in Release SDK packages.
* [Contacting the Microsoft Edge WebView2 team](../contact.md)
