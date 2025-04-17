---
title: Release Notes for the WebView2 SDK
description: Release notes for Microsoft Edge WebView2, covering new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 05/05/2025
---
# Release Notes for the WebView2 SDK

These Release Notes provide information about new features and bug fixes that are included in the WebView2 Release SDK and the WebView2 Prerelease SDK.

<!--
the template to copy for incoming sections is at end of this file

this webpage covers the most recent ~5 months; periodically move oldest h2 sections from bottom of present file to archive.md.  eg covers: 
May 2025
Apr 2025
Mar 2025
Feb 2025
Jan 2025
[Dec 2024]

moved to archive:
Nov 2024
-->


<!-- May 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.####.##

Release Date: Monthname nn, 2025

[NuGet package for WebView2 SDK 1.0.####.##](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.####.##)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version ###.0.####.## or higher.


<!-- ------------------------------ -->
#### Promotions

No additional APIs have been promoted to Stable and added in this Release SDK.
The following APIs have been promoted to Stable and are now included in this Release SDK.


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

* Fixed behavior.  ([Issue #]())


<!-- ---------- -->
###### Runtime-only

* Fixed behavior.  ([Issue #]())


<!-- ---------- -->
###### SDK-only

* Fixed behavior.  ([Issue #]())

<!-- end of May 2025 Release SDK -->


<!-- May 2025 Prerelease SDK -->
<!-- ====================================================================== -->
## 1.0.####-prerelease

Release Date: Monthname nn, 2025

[NuGet package for WebView2 SDK 1.0.####-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.####-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version ###.0.####.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.
The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
###### heading

description

##### [.NET/C#](#tab/dotnetcsharp)

##### [WinRT/C#](#tab/winrtcsharp)

##### [Win32/C++](#tab/win32cpp)

---


<!-- ------------------------------ -->
#### Promotions

No APIs have been promoted from Experimental to Stable in this Prerelease SDK.
The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


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

* Fixed behavior.  ([Issue #]())


<!-- ---------- -->
###### Runtime-only

* Fixed behavior.  ([Issue #]())


<!-- ---------- -->
###### SDK-only

* Fixed behavior.  ([Issue #]())

<!-- end of May 2025 Prerelease SDK -->


<!-- Apr 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.3179.45

Release Date: April 07, 2025

[NuGet package for WebView2 SDK 1.0.3179.45](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3179.45)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 135.0.3179.45 or higher.


<!-- ------------------------------ -->
#### Promotions

No additional APIs have been promoted to Stable and added in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed the HTML Select element (\<select\>) to make it selectable, in WPF apps.
* Fixed navigation of `edge://crashes` within a WebView2 control.
* Fixed potential crash and UI issues when invoking the Windows Credentials UI from a WebView2 instance.<!-- https://www.bing.com/search?q=Windows+Credential+UI -->
* Fixed a bug where users were unable to type in an input field with autofill info.  ([Issue #5144](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5144))

<!-- end of Apr 2025 Release SDK -->


<!-- Apr 2025 Prerelease SDK -->
<!-- ====================================================================== -->
## 1.0.3230-prerelease

Release Date: April 07, 2025

[NuGet package for WebView2 SDK 1.0.3230-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3230-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 136.0.3230.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ---------- -->
###### Track navigation history for nested iframes (FrameCreatedEvent API)

The FrameCreatedEvent API supports nested iframes, such as recording the navigation history for a second-level iframe. Without this API, WebView2 only tracks first-level iframes, which are the direct child iframes of the main frame. Using this API, your app can subscribe to the nested iframe creation event, giving the app access to all properties, methods, and events of CoreWebView2Frame for the nested iframe.

Use this API to manage iframe tracking on a page that contains multiple levels of iframes. You can choose to track any of the following:

* Only the main page and first-level iframes (the default behavior).
* A partial WebView2 frames tree with specific iframes of interest.
* The full WebView2 frames tree.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.FrameCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.framecreated?view=webview2-dotnet-1.0.3230-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.FrameCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.3230-prerelease&preserve-view=true#framecreated)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Frame7](/microsoft-edge/webview2/reference/win32/icorewebview2frame7?view=webview2-1.0.3230-prerelease&preserve-view=true)<!-- vs. ICoreWebView2ExperimentalFrame8 -->
  * [ICoreWebView2Frame7::add_FrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame7?view=webview2-1.0.3230-prerelease&preserve-view=true#add_framecreated)
  * [ICoreWebView2Frame7::remove_FrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame7?view=webview2-1.0.3230-prerelease&preserve-view=true#remove_framecreated)

* [ICoreWebView2FrameChildFrameCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2framechildframecreatedeventhandler?view=webview2-1.0.3230-prerelease&preserve-view=true)<!-- win32 only --><!-- vs. ICoreWebView2ExperimentalFrameChildFrameCreatedEventHandler -->

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed an issue in WPF where the \<datalist\> dropdown closed when the mouse moved outside the WebView2 control bounds.
* Fixed navigation of `edge://crashes` within a WebView2 control.
* Fixed the HTML Select element (\<select\>) to make it selectable, in WPF apps.
* Fixed potential crash and UI issues when invoking the Windows Credentials UI from a WebView2 instance.<!-- https://www.bing.com/search?q=Windows+Credential+UI -->
* Fixed bug where users unable to type in input field with autofill info. ([Issue #5144](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5144))
* Fixed a regression in the [Status bar](../concepts/overview-features-apis.md#status-bar) APIs.


<!-- ---------- -->
###### SDK-only

* Fixed **Tab**, **Shift+Tab**, and **Arrow** keys in Window to Visual hosting mode.

<!-- end of Apr 2025 Prerelease SDK -->


<!-- Mar 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.3124.44

Release Date: March 10, 2025

[NuGet package for WebView2 SDK 1.0.3124.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3124.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 134.0.3124.44 or higher.


<!-- ------------------------------ -->
#### Promotions

No additional APIs have been promoted to Stable and added in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Extensions won't get disabled in WebView2 by using `AddBrowserExtensionAsync`, regardless of whether developer mode is on.  ([Issue #5113](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5113))
* Disabled background update of network time.  ([Issue #5047](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5047))
* Fixed the download popup not being displayed when `target="_blank"`.  ([Issue #5063](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5063))

<!-- end of Mar 2025 Release SDK -->


<!-- Mar 2025 Prerelease SDK -->
<!-- ====================================================================== -->
## 1.0.3171-prerelease

Release Date: March 10, 2025

[NuGet package for WebView2 SDK 1.0.3171-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3171-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 135.0.3171.0 or higher.


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

<!-- end of Mar 2025 Prerelease SDK -->


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


<!-- Jan 2025 Release SDK -->
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


<!-- Jan 2024 Prerelease SDK -->
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
<!-- June 2025 Release SDK --
<!-- June 2025 Prerelease SDK --
<!-- ====================================================================== --
## 1.0.####.##
## 1.0.####-prerelease

Release Date: Monthname nn, 2025

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

* Fixed behavior.  ([Issue #]())


<!-- ---------- --
###### Runtime-only

* Fixed behavior.  ([Issue #]())


<!-- ---------- --
###### SDK-only

* Fixed behavior.  ([Issue #]())

-->


<!-- end of June 2025 Release SDK -->
<!-- end of June 2025 Prerelease SDK -->
<!-- end of template -->
