---
title: Archived Release Notes for the WebView2 SDK
description: Release Notes for older releases of Microsoft Edge WebView2, covering new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 11/03/2025
---
# Archived Release Notes for the WebView2 SDK

These Release Notes provide information about added features and bug fixes that are included in the WebView2 Release SDK and the WebView2 Prerelease SDK, for older releases.


<!-- May 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.3240.44

Release Date: May 05, 2025

[NuGet package for WebView2 SDK 1.0.3240.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3240.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 136.0.3240.44 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ---------- -->
###### Track navigation history for nested iframes (FrameCreatedEvent API)

The FrameCreatedEvent API supports nested iframes, such as recording the navigation history for a second-level iframe.  Without this API, WebView2 only tracks first-level iframes, which are the direct child iframes of the main frame.  Using this API, your app can subscribe to the nested iframe creation event, giving the app access to all properties, methods, and events of `CoreWebView2Frame` for the nested iframe.

Use this API to manage iframe tracking on a page that contains multiple levels of iframes.  You can choose to track any of the following:

* Only the main page and first-level iframes (the default behavior).
* A partial WebView2 frames tree with specific iframes of interest.
* The full WebView2 frames tree.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.FrameCreated Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.framecreated?view=webview2-dotnet-1.0.3240.44&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Frame` Class:
   * [CoreWebView2Frame.FrameCreated Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.3240.44&preserve-view=true#framecreated)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Frame7](/microsoft-edge/webview2/reference/win32/icorewebview2frame7?view=webview2-1.0.3240.44&preserve-view=true)
   * [ICoreWebView2Frame7::add_FrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame7?view=webview2-1.0.3240.44&preserve-view=true#add_framecreated)
   * [ICoreWebView2Frame7::remove_FrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2frame7?view=webview2-1.0.3240.44&preserve-view=true#remove_framecreated)

* [ICoreWebView2FrameChildFrameCreatedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2framechildframecreatedeventhandler?view=webview2-1.0.3240.44&preserve-view=true)<!-- win32 only -->

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed an issue where downloads from within the default browser frame didn't complete.  ([Issue #5196](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5196))
* Fixed an issue where the pipe name was incorrectly returned, leading to a crash in some UWP apps.

<!-- end of May 2025 Release SDK -->


<!-- May 2025 Prerelease SDK -->
<!-- ====================================================================== -->
## 1.0.3296-prerelease

Release Date: May 12, 2025

[NuGet package for WebView2 SDK 1.0.3296-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3296-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 137.0.3296.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ---------- -->
###### Set default background color on WebView2 initialization (DefaultBackgroundColor API)

The DefaultBackgroundColor API allows users to set the `DefaultBackgroundColor` property at initialization.  This prevents a disruptive white flash during the WebView2 loading process.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.DefaultBackgroundColor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.defaultbackgroundcolor?view=webview2-dotnet-1.0.3296-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.DefaultBackgroundColor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.3296-prerelease&preserve-view=true#defaultbackgroundcolor)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ControllerOptions3](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions3?view=webview2-1.0.3296-prerelease&preserve-view=true)
   * [ICoreWebView2ControllerOptions3::get_DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions3?view=webview2-1.0.3296-prerelease&preserve-view=true#get_defaultbackgroundcolor)
   * [ICoreWebView2ControllerOptions3::put_DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions3?view=webview2-1.0.3296-prerelease&preserve-view=true#put_defaultbackgroundcolor)

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed the **Find** bar no longer appearing after the window is shifted.
* Fixed a bug where the app wasn't able to cancel navigation to login pages via the `NavigationStarting` event.
* Fixed an issue where downloads from within the default browser frame didn't complete.  ([Issue #5196](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5196))
* Fixed an issue where the pipe name was incorrectly returned, leading to a crash in some UWP apps.

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

The FrameCreatedEvent API supports nested iframes, such as recording the navigation history for a second-level iframe.  Without this API, WebView2 only tracks first-level iframes, which are the direct child iframes of the main frame.  Using this API, your app can subscribe to the nested iframe creation event, giving the app access to all properties, methods, and events of `CoreWebView2Frame` for the nested iframe.

Use this API to manage iframe tracking on a page that contains multiple levels of iframes.  You can choose to track any of the following:

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
* Fixed bug where users unable to type in input field with autofill info.  ([Issue #5144](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5144))
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


<!-- Dec 2024 Release SDK -->
<!-- ====================================================================== -->
<!-- n/a -->
<!-- end of Dec 2024 Release SDK -->


<!-- Dec 2024 Prerelease SDK -->
<!-- ====================================================================== -->
<!-- n/a -->
<!-- end of Dec 2024 Prerelease SDK -->


<!-- Nov 2024 Release SDK -->
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


<!-- Nov 2024 Prerelease SDK -->
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


<!-- Oct 2024 Release SDK -->
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


<!-- end of July/August 2024 Release SDK -->


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


<!-- end of July/August 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2592.51

Release Date: June 19, 2024

[NuGet package for WebView2 SDK 1.0.2592.51](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2592.51)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 126.0.2592.51 or higher.


<!-- ------------------------------ -->
#### Promotions

No additional APIs have been promoted to Stable and added in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Disabled `BreakoutBoxPreferCaptureTimestampInVideoFrame` for WebView2 `TextureStream`.

* Fixed a regression where the `WindowCloseRequested` event only fires for first `window.close()` call.

* Fixed a regression where typed arrays in WinRT JavaScript projection could not be handled as `IDispatch` in the host.

* Fixed a bug where the autofill popup dismisses immediately and causes a focus change.

* Fixed a bug where WebView2 fails to load because of `AppPolicyGetWindowingModel`.  ([Issue #4591](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4591))


<!-- end of Jun 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2646-prerelease

Release Date: June 19, 2024

[NuGet package for WebView2 SDK 1.0.2646-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2646-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 128.0.2646.0 or higher.


<!-- ------------------------------ -->
#### General features

* Added support for C#/WinRT .NET 6+.


<!-- ------------------------------ -->
#### Experimental features

* Introduced the feature flag `msWebView2EnableDownloadContentInWebResourceResponseReceived`, an an Experimental feature (rather than as a Stable feature).  When this flag is enabled, this allows responses of navigations that become downloads to be available in `WebResourceResponseReceived`.


<!-- ------------------------------ -->
#### Experimental APIs

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
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


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

<!-- end of Jun 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2535.41

Release Date: May 28, 2024

[NuGet package for WebView2 SDK 1.0.2535.41](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2535.41)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 125.0.2535.41 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


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


<!-- end of May 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2584-prerelease

Release Date: May 28, 2024

[NuGet package for WebView2 SDK 1.0.2584-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2584-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 126.0.2584.0 or higher.


<!-- ------------------------------ -->
#### Experimental features

* Introduced an option to cancel the initial navigation in WebView2, to improve startup performance.  This change is disabled by default, and can be enabled by using the `msWebView2CancelInitialNavigation` feature flag.


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

* Fixed a crash when .NET host object async methods return a null result.  ([Issue #4509](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4509))


<!-- ---------- -->
###### Runtime-only

* Fixed a WebView2 memory leak issue when the window is closed.  ([Issue #4286](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4286))

* Fixed an issue where `ignoreMemberNotFoundError` wasn't working for .NET objects.  ([Issue #4497](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4497))

* Now returns a proper error code when `CreateSharedBuffer` is called with 0 buffer size.  ([Issue #4554](https://github.com/MicrosoftEdge/WebView2Feedback/issues/4554))

* Fixed an activation issue for the caret browsing dialog.

* Fixed an issue where the WebView2 Visual Hosting `CursorChanged` event wasn't firing for custom cursors.


<!-- end of May 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2478.35

Release Date: April 22, 2024

[NuGet package for WebView2 SDK 1.0.2478.35](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2478.35)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 124.0.2478.35 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


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


<!-- end of Apr 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2526-prerelease

Release Date: April 22, 2024

[NuGet package for WebView2 SDK 1.0.2526-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2526-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 125.0.2526.0 or higher.


<!-- ------------------------------ -->
#### Breaking changes


<!-- ---------- -->
###### Minimum .NET Framework version

The minimum .NET Framework version requirement for .NET WebView2, including WPF and WinForms controls, has been updated from .NET Framework 4.5 to .NET Framework 4.6.2.


<!-- ------------------------------ -->
#### Experimental APIs

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
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


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


<!-- end of Apr. 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2420.47

Release Date: March 25, 2024

[NuGet package for WebView2 SDK 1.0.2420.47](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2420.47)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 123.0.2420.47 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


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


<!-- end of Mar. 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2470-prerelease

Release Date: March 25, 2024

[NuGet package for WebView2 SDK 1.0.2470-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2470-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires WebView2 Runtime version 124.0.2470.0 or higher.



<!-- ------------------------------ -->
#### Experimental APIs

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
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


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


<!-- end of Mar. 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2365.46

Release Date: February 26, 2024

[NuGet package for WebView2 SDK 1.0.2365.46](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2365.46)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 122.0.2365.46 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


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


<!-- end of Feb 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2415-prerelease

Release Date: February 26, 2024

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
#### Experimental APIs

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
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


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


<!-- end of Feb 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2277.86

Release Date: February 5, 2024

[NuGet package for WebView2 SDK 1.0.2277.86](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2277.86)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 121.0.2277.86 or higher.


<!-- ------------------------------ -->
#### Breaking changes


<!-- ---------- -->
###### Navigations to `about:blank` cancellable via `NavigationStarting` event

Navigations to `about:blank` are now cancellable via the `NavigationStarting` event.  To revert to the old behavior, disable the `msWebView2CancellableAboutNavigations` feature flag.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


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


<!-- end of Jan (into Feb) 2024 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2357-prerelease

Release Date: January 30, 2024

[NuGet package for WebView2 SDK 1.0.2357-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2357-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 122.0.2357.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

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
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


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


<!-- end of Jan 2024 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2210.55

Release Date: December 11, 2023

[NuGet package for WebView2 SDK 1.0.2210.55](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2210.55)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 120.0.2210.55 or higher.


<!-- ------------------------------ -->
#### Breaking changes


<!-- ---------- -->
###### Unpackaged Win32 app using Fixed Version 120+ on Windows 10

If you're developing an unpackaged Win32 app using Fixed Version Runtime v120 or above and targeting Windows 10 devices, you need to run a couple of ACL shell commands (`icacls`), to avoid crashing, because of a new security feature implemented in WebView2.  See [[Breaking Change] Unpackaged Win32 app using Fixed Version v120+ on Win10 need ACL](https://github.com/MicrosoftEdge/WebView2Announcements/issues/82).

The fix is in the article _Distribute your app and the WebView2 Runtime_, section [The Fixed Version runtime distribution mode](../concepts/distribution.md#the-fixed-version-runtime-distribution-mode), step "On Windows 10 devices, starting with Fixed Version 120, developers of unpackaged Win32 applications using Fixed Version are required to run the following commands."


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


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


<!-- end of Dec 2023 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2151.40

Release Date: November 6, 2023

[NuGet package for WebView2 SDK 1.0.2151.40](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2151.40)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 119.0.2151.40 or higher.


<!-- ------------------------------ -->
#### General Availability

> [!IMPORTANT]
> **Announcement**: Xbox WebView2 SDK is now Generally Available (GA) and is available on Xbox October 2310 version (231018-2200). For more details, see [WebView2 for Xbox announcement](https://blogs.windows.com/msedgedev/2023/11/01/webview2-for-xbox-announcement/).


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

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


<!-- end of Nov 2023 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2194-prerelease

Release Date: November 6, 2023

[NuGet package for WebView2 SDK 1.0.2194-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2194-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 120.0.2194.0 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

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


<!-- end of Nov 2023 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2088.41

Release Date: October 16, 2023

[NuGet package for WebView2 SDK 1.0.2088.41](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2088.41)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 118.0.2088.41 or higher.


<!-- ------------------------------ -->
#### Promotions

No additional APIs have been promoted to Stable and added in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

* Fixed an issue causing some UWP apps to be unable to input text.  (Runtime-only)  ([Issue #3805](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3805))

* Fixed an initialization failure for apps that were using the Windows `PerProcessSystemDPIForceOff` compatibility setting.  (Runtime-only)  ([Issue #3692](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3692))

* Fixed a Dialog Position Offset bug in WebView2.  (Runtime-only)  ([Issue #3763](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3763))


<!-- end of Oct 2023 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2164-prerelease

Release Date: October 18, 2023

[NuGet package for WebView2 SDK 1.0.2164-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2164-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 120.0.2164.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

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


<!-- end of Oct 2023 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.2045.28

Release Date: September 18, 2023

[NuGet package for WebView2 SDK 1.0.2045.28](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2045.28)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 117.0.2045.28 or higher.


<!-- ------------------------------ -->
#### Promotions

No additional APIs have been promoted to Stable and added in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

* Disabled the Mouse Gesture feature by default.  (Runtime-only)  ([Issue #3737](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3737))

* Fixed a bug where mouse wheel scrolling was intermittently broken for visual hosting.  (Runtime-only)

* Fixed a bug where downloading APK files in WebView2 crashes the WebView2 browser process.  (Runtime-only)  ([Issue #3569](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3569))


<!-- end of Sep 2023 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2106-prerelease

Release Date: September 20, 2023

[NuGet package for WebView2 SDK 1.0.2106-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2106-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 119.0.2106.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

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
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


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


<!-- end of Sep 2023 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.1938.49

Release Date: August 28, 2023

[NuGet package for WebView2 SDK 1.0.1938.49](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1938.49)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 116.0.1938.49 or higher.


<!-- ------------------------------ -->
#### Promotions

No additional APIs have been promoted to Stable and added in this Release SDK.


<!-- ------------------------------ -->
#### Bug fixes

* Fixed a handle tracking bug where `TextureStream` API usage could fail.  (Runtime-only)

* Fixed a bug where a WebView2 created in a background thread doesn't come to the foreground when created.  (Runtime-only)  ([Issue #3584](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3584))

* Fixed a bug where the WebView2 content sometimes renders at the incorrect size after changing the display configuration (such as laptop sleeping; remoting; or connecting or disconnecting an external display).  (Runtime-only)  ([Issue 3429](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3429))

* Fixed a bug where a bluescreen happens when using WebView2 apps on certain hardware configurations.  (Runtime-only)  ([Issue #3679](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3679))


<!-- end of August 2023 Release SDK -->


<!-- ====================================================================== -->
## 1.0.2065-prerelease

Release Date: August 30, 2023

[NuGet package for WebView2 SDK 1.0.2065-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.2065-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 118.0.2065.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

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


<!-- end of August 2023 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.1901.177

Release Date: July 24, 2023

[NuGet package for WebView2 SDK 1.0.1901.177](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1901.177)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 115.0.1901.177 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ------------------------------ -->
* `NavigationKind` gets the navigation kind of each navigation, such as Back/Forward, Reload, or navigation to a new document.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2NavigationStartingEventArgs` Class:
   * [CoreWebView2NavigationStartingEventArgs.NavigationKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs.navigationkind?view=webview2-dotnet-1.0.1901.177&preserve-view=true)
* [CoreWebView2NavigationKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationkind?view=webview2-dotnet-1.0.1901.177&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2NavigationStartingEventArgs` Class:
   * [CoreWebView2NavigationStartingEventArgs.NavigationKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationstartingeventargs?view=webview2-winrt-1.0.1901.177&preserve-view=true#navigationkind)
* [CoreWebView2NavigationKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationkind?view=webview2-winrt-1.0.1901.177&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2NavigationStartingEventArgs3](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs3?view=webview2-1.0.1901.177&preserve-view=true)
    * [ICoreWebView2NavigationStartingEventArgs3::get_NavigationKind](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs3?view=webview2-1.0.1901.177&preserve-view=true#get_navigationkind)<!--no put-->
* [COREWEBVIEW2_NAVIGATION_KIND enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1901.177&preserve-view=true#corewebview2_navigation_kind)

---


<!-- ------------------------------ -->
* The `ServiceWorkers` enum value in the `BrowsingDataKinds` enum specifies service workers that are registered for an origin.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2BrowsingDataKinds` Enum:
   * [CoreWebView2BrowsingDataKinds.ServiceWorkers Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2browsingdatakinds?view=webview2-dotnet-1.0.1901.177&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2BrowsingDataKinds` Enum:
   * [CoreWebView2BrowsingDataKinds.ServiceWorkers Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2browsingdatakinds?view=webview2-winrt-1.0.1901.177&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* `COREWEBVIEW2_BROWSING_DATA_KINDS` enum:
   * [COREWEBVIEW2_BROWSING_DATA_KINDS_SERVICE_WORKERS enum value](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1901.177&preserve-view=true#corewebview2_browsing_data_kinds)

---


<!-- ------------------------------ -->
#### Bug fixes

* Fixed a bug where the entire toolbar is blank when hiding the Bookmarks, Search, and PageSelector buttons simultaneously.  (Runtime-only)  [Issue 2866](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2866)


<!-- end of July 2023 Release SDK -->


<!-- ====================================================================== -->
## 1.0.1988-prerelease

Release Date: July 24, 2023

[NuGet package for WebView2 SDK 1.0.1988-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1988-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 117.0.1988.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

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


<!-- end of July 2023 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.1823.32

Release Date: June 5, 2023

[NuGet package for WebView2 SDK 1.0.1823.32](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1823.32)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 114.0.1823.32 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ------------------------------ -->
* The `LaunchingExternalUriScheme` event is raised when there's an attempt to launch a URI scheme that is registered with the OS (an external URI scheme).

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.LaunchingExternalUriScheme Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.launchingexternalurischeme?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
* [CoreWebView2LaunchingExternalUriSchemeEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
    * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Cancel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.cancel?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
    * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.initiatingorigin?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
    * [CoreWebView2LaunchingExternalUriSchemeEventArgs.IsUserInitiated Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.isuserinitiated?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
    * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Uri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.uri?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
    * [CoreWebView2LaunchingExternalUriSchemeEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.getdeferral?view=webview2-dotnet-1.0.1823.32&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.LaunchingExternalUriScheme Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1823.32&preserve-view=true#launchingexternalurischeme)
* [CoreWebView2LaunchingExternalUriSchemeEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1823.32&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Cancel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1823.32&preserve-view=true#cancel)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1823.32&preserve-view=true#initiatingorigin)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.IsUserInitiated Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1823.32&preserve-view=true#isuserinitiated)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Uri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1823.32&preserve-view=true#uri)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.GetDeferral Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1823.32&preserve-view=true#getdeferral)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_18](/microsoft-edge/webview2/reference/win32/icorewebview2_18?view=webview2-1.0.1823.32&preserve-view=true)
    * [ICoreWebView2_18::add_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2_18?view=webview2-1.0.1823.32&preserve-view=true#add_launchingexternalurischeme)
    * [ICoreWebView2_18::remove_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2_18?view=webview2-1.0.1823.32&preserve-view=true#remove_launchingexternalurischeme)
* [ICoreWebView2LaunchingExternalUriSchemeEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventhandler?view=webview2-1.0.1823.32&preserve-view=true)
* [ICoreWebView2LaunchingExternalUriSchemeEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true)
    * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true#get_cancel)
    * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_InitiatingOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true#get_initiatingorigin)<!--no put-->
    * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_IsUserInitiated](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true#get_isuserinitiated)<!--no put-->
    * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::get_Uri](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true#get_uri)<!--no put-->
    * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true#getdeferral)
    * [ICoreWebView2LaunchingExternalUriSchemeEventArgs::put_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2launchingexternalurischemeeventargs?view=webview2-1.0.1823.32&preserve-view=true#put_cancel)

---


<!-- ------------------------------ -->
* `MemoryUsageTargetLevel` specifies memory consumption levels, such as `low` or `normal`.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.MemoryUsageTargetLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.memoryusagetargetlevel?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
* [CoreWebView2MemoryUsageTargetLevel Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2memoryusagetargetlevel?view=webview2-dotnet-1.0.1823.32&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.MemoryUsageTargetLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#memoryusagetargetlevel?view=webview2-winrt-1.0.1823.32&preserve-view=true)
* [CoreWebView2MemoryUsageTargetLevel Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2memoryusagetargetlevel?view=webview2-winrt-1.0.1823.32&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_19](/microsoft-edge/webview2/reference/win32/icorewebview2_19?view=webview2-1.0.1823.32&preserve-view=true)
    * [ICoreWebView2_19::get_MemoryUsageTargetLevel](/microsoft-edge/webview2/reference/win32/icorewebview2_19?view=webview2-1.0.1823.32&preserve-view=true#get_memoryusagetargetlevel)
    * [ICoreWebView2_19::put_MemoryUsageTargetLevel](/microsoft-edge/webview2/reference/win32/icorewebview2_19?view=webview2-1.0.1823.32&preserve-view=true#put_memoryusagetargetlevel)
* [COREWEBVIEW2_MEMORY_USAGE_TARGET_LEVEL enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1823.32&preserve-view=true#corewebview2_memory_usage_target_level)

---


<!-- ------------------------------ -->
* Enhanced support for multiple profiles, to allow configuring General Autofill and Password Autosave settings for different profiles.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.IsGeneralAutofillEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.isgeneralautofillenabled?view=webview2-dotnet-1.0.1823.32&preserve-view=true)
   * [CoreWebView2Profile.IsPasswordAutosaveEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.ispasswordautosaveenabled?view=webview2-dotnet-1.0.1823.32&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.IsGeneralAutofillEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1823.32&preserve-view=true#isgeneralautofillenabled)
   * [CoreWebView2Profile.IsPasswordAutosaveEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1823.32&preserve-view=true#ispasswordautosaveenabled)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Profile6`:
   * [ICoreWebView2Profile6::get_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1823.32&preserve-view=true#get_isgeneralautofillenabled)
   * [ICoreWebView2Profile6::get_IsPasswordAutosaveEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1823.32&preserve-view=true#get_ispasswordautosaveenabled)
   * [ICoreWebView2Profile6::put_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1823.32&preserve-view=true#put_isgeneralautofillenabled)
   * [ICoreWebView2Profile6::put_IsPasswordAutosaveEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1823.32&preserve-view=true#put_ispasswordautosaveenabled)

---

<!-- end of June 2023 Release SDK -->


<!-- ====================================================================== -->
## 1.0.1905-prerelease

Release Date: June 12, 2023

[NuGet package for WebView2 SDK 1.0.1905-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1905-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 116.0.1905.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


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


<!-- end of June 2023 Prerelease SDK -->


<!-- ====================================================================== -->
## 1.0.1774.30

Release Date: May 8, 2023

[NuGet package for WebView2 SDK 1.0.1774.30](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1774.30)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 113.0.1774.30 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ------------------------------ -->
* The File API allows accessing a DOM `File` object passed via `WebMessage`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2File Class](/dotnet/api/microsoft.web.webview2.core.corewebview2file?view=webview2-dotnet-1.0.1774.30&preserve-view=true)
   * [CoreWebView2File.Path Property](/dotnet/api/microsoft.web.webview2.core.corewebview2file.path?view=webview2-dotnet-1.0.1774.30&preserve-view=true)
* `CoreWebView2WebMessageReceivedEventArgs` Class:
   * [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webmessagereceivedeventargs.additionalobjects?view=webview2-dotnet-1.0.1774.30&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2File Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2file?view=webview2-winrt-1.0.1774.30&preserve-view=true)
   * [CoreWebView2File.Path Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2file?view=webview2-winrt-1.0.1774.30&preserve-view=true#path)
* `CoreWebView2WebMessageReceivedEventArgs` Class:
   * [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webmessagereceivedeventargs?view=webview2-winrt-1.0.1774.30&preserve-view=true#additionalobjects)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2File](/microsoft-edge/webview2/reference/win32/icorewebview2file?view=webview2-1.0.1774.30&preserve-view=true)
   * [ICoreWebView2File::get_Path](/microsoft-edge/webview2/reference/win32/icorewebview2file?view=webview2-1.0.1774.30&preserve-view=true#get_path)<!--no put-->
* [ICoreWebView2ObjectCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollectionview?view=webview2-1.0.1774.30&preserve-view=true)
   * [ICoreWebView2ObjectCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollectionview?view=webview2-1.0.1774.30&preserve-view=true#get_count)<!--no put-->
   * [ICoreWebView2ObjectCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollectionview?view=webview2-1.0.1774.30&preserve-view=true#getvalueatindex)
* [ICoreWebView2WebMessageReceivedEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs2?view=webview2-1.0.1774.30&preserve-view=true)
   * [ICoreWebView2WebMessageReceivedEventArgs2::get_AdditionalObjects](/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs2?view=webview2-1.0.1774.30&preserve-view=true#get_additionalobjects)<!--no put-->

---


<!-- ------------------------------ -->
* The Profile Cookie Manager API supports profile management.  The `CookieManager` property enables the host app to get the cookie manager for the profile.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.CookieManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.cookiemanager?view=webview2-dotnet-1.0.1774.30&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.CookieManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1774.30&preserve-view=true#cookiemanager)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Profile5`:
   * [ICoreWebView2Profile5::get_CookieManager](/microsoft-edge/webview2/reference/win32/icorewebview2profile5?view=webview2-1.0.1774.30&preserve-view=true#get_cookiemanager)<!--no put-->

---


<!-- ------------------------------ -->
#### Bug fixes

* Fixed an issue to allow an app to inject initial scripts by calling `AddScriptToExecuteOnDocumentCreated` before a new window is created.  ([Issue #2491](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2491))

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addscripttoexecuteondocumentcreatedasync)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#addscripttoexecuteondocumentcreatedasync)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2`:
   * [ICoreWebView2::AddScriptToExecuteOnDocumentCreated](/microsoft-edge/webview2/reference/win32/icorewebview2#addscripttoexecuteondocumentcreated)

---

*  Fixed an issue that was causing the `X-Edge-Shopping-Flag` header to be added to web requests that are coming from WebView2.  (Runtime-only)  ([Issue #3365](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3365))


<!-- ====================================================================== -->
## 1.0.1829-prerelease

Release Date: May 8, 2023

[NuGet package for WebView2 SDK 1.0.1829-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1829-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 115.0.1829.0 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
* Enhanced support for multiple profiles, to allow configuring General Autofill and Password Autosave settings for different profiles.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.IsGeneralAutofillEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.isgeneralautofillenabled?view=webview2-dotnet-1.0.1829-prerelease&preserve-view=true)
   * [CoreWebView2Profile.IsPasswordAutosaveEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.ispasswordautosaveenabled?view=webview2-dotnet-1.0.1829-prerelease&preserve-view=true)


##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile` Class:
   * [CoreWebView2Profile.IsGeneralAutofillEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1829-prerelease&preserve-view=true#isgeneralautofillenabled)
   * [CoreWebView2Profile.IsPasswordAutosaveEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1829-prerelease&preserve-view=true#ispasswordautosaveenabled)


##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2Profile6` interface:
   * [ICoreWebView2Profile6::get_IsPasswordAutosaveEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1829-prerelease&preserve-view=true#get_ispasswordautosaveenabled)
   * [ICoreWebView2Profile6::put_IsPasswordAutosaveEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1829-prerelease&preserve-view=true#put_ispasswordautosaveenabled)
   * [ICoreWebView2Profile6::get_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1829-prerelease&preserve-view=true#get_isgeneralautofillenabled)
   * [ICoreWebView2Profile6::put_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2profile6?view=webview2-1.0.1829-prerelease&preserve-view=true#put_isgeneralautofillenabled)

---


<!-- ------------------------------ -->
#### Bug fixes

* Disabled the Chrome Web Store info banner that displays the option to allow extensions installation. ([Issue #3312](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3312))

* Fixed an issue where a custom menu item wasn't firing. ([Issue #3300](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3300))

* Fixed a crash during initialization when creating a WebView2 using WPF and SDK version 1.0.1722.32, which is now deprecated.  (See [SDK 1.0.1722.32 is deprecated](#sdk-10172232-is-deprecated) below.)  ([Issue #3375](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3375))

*  Fixed a bug in `PostSharedBufferToScript` that stops after about 32000x1MB buffers are posted.  (Runtime-only)  ([Issue #3360](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3360))

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postsharedbuffertoscript)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class:
   * [CoreWebView2.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#postsharedbuffertoscript)

##### [Win32/C++](#tab/win32cpp)

* `ICoreWebView2_17` interface:
   * [ICoreWebView2_17::PostSharedBufferToScript](/microsoft-edge/webview2/reference/win32/icorewebview2_17#postsharedbuffertoscript)

---

* Fixed an issue where navigation will always take place within a `ScriptDialogOpening` event callback.  (Runtime-only)  ([Issue #3355](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3355))

* Fixed an issue to support the `BackForwardCache` flag.  (Runtime-only)

* Fixed an issue with visual hosted owned windows, where clicking into the Find bar from outside the window didn't activate the Find bar.


<!-- ====================================================================== -->
## 1.0.1722.45

Release Date: April 13, 2023

[NuGet package for WebView2 SDK 1.0.1722.45](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1722.45)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 112.0.1722.45 or higher.


<!-- ------------------------------ -->
#### SDK 1.0.1722.32 is deprecated

WebView2 SDK 1.0.1722.32 is deprecated, and that package has been removed from the listing at NuGet.  Discontinue development with package 1.0.1722.32.  If your WebView2 app uses that package, we recommend that you move to a newer package, such as WebView2 SDK 1.0.1722.45 or later.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ------------------------------ -->
* The Managing SmartScreen API controls whether SmartScreen is enabled.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Settings`
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isreputationcheckingrequired?view=webview2-dotnet-1.0.1722.45&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Settings`
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.1722.45&preserve-view=true#isreputationcheckingrequired)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings8](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1722.45&preserve-view=true)
   * [ICoreWebView2Settings8::get_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1722.45&preserve-view=true#get_isreputationcheckingrequired)
   * [ICoreWebView2Settings8::put_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1722.45&preserve-view=true#put_isreputationcheckingrequired)

---


<!-- ------------------------------ -->
* The `PermissionKind.WindowManagement` API indicates the kind of a permission request.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2PermissionKind` Enum
   * [CoreWebView2PermissionKind.WindowManagement Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.1722.45&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2PermissionKind` Enum
   * [CoreWebView2PermissionKind.WindowManagement Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind?view=webview2-winrt-1.0.1722.45&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* `COREWEBVIEW2_PERMISSION_KIND` Enum
   * [COREWEBVIEW2_PERMISSION_KIND_WINDOW_MANAGEMENT enum value](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1722.45&preserve-view=true#corewebview2_permission_kind)

---


<!-- ====================================================================== -->
## 1.0.1777-prerelease

Release Date: April 10, 2023

[NuGet package for WebView2 SDK 1.0.1777-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1777-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 114.0.1777.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
* The File API allows accessing a DOM `File` object passed via `WebMessage`.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2File](/dotnet/api/microsoft.web.webview2.core.corewebview2file?view=webview2-dotnet-1.0.1777-prerelease&preserve-view=true)
   * [CoreWebView2File.path property](/dotnet/api/microsoft.web.webview2.core.corewebview2file.path?view=webview2-dotnet-1.0.1777-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2file-path)

* `CoreWebView2WebMessageReceivedEventArgs`
   * [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects property](/dotnet/api/microsoft.web.webview2.core.corewebview2webmessagereceivedeventargs.additionalobjects?view=webview2-dotnet-1.0.1777-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2webmessagereceivedeventargs-additionalobjects)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2File](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2file?view=webview2-winrt-1.0.1777-prerelease&preserve-view=true)
   * [CoreWebView2File.path property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2file?view=webview2-winrt-1.0.1777-prerelease&preserve-view=true#path)

* `CoreWebView2WebMessageReceivedEventArgs`
   * [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webmessagereceivedeventargs?view=webview2-winrt-1.0.1777-prerelease&preserve-view=true#additionalobjects)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2File](/microsoft-edge/webview2/reference/win32/icorewebview2file?view=webview2-1.0.1777-prerelease&preserve-view=true)
   * [ICoreWebView2File::get_path](/microsoft-edge/webview2/reference/win32/icorewebview2file?view=webview2-1.0.1777-prerelease&preserve-view=true#get_path)

* [ICoreWebView2WebMessageReceivedEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs2?view=webview2-1.0.1777-prerelease&preserve-view=true)
   * [ICoreWebView2WebMessageReceivedEventArgs2::get_AdditionalObjects](/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs2?view=webview2-1.0.1777-prerelease&preserve-view=true#get_AdditionalObjects)

* [ICoreWebView2ObjectCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollectionview?view=webview2-1.0.1777-prerelease&preserve-view=true)
   * [ICoreWebView2ObjectCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollectionview?view=webview2-1.0.1777-prerelease&preserve-view=true#get_Count)
   * [ICoreWebView2ObjectCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2objectcollectionview?view=webview2-1.0.1777-prerelease&preserve-view=true#GetValueAtIndex)

---


<!-- ------------------------------ -->
* The Profile Cookie Manager API supports profile management.  The `CookieManager` property enables the host app to get the cookie manager for the profile.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2Profile`
   * [CoreWebView2Profile.CookieManager property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.cookiemanager?view=webview2-dotnet-1.0.1777-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2profile-cookiemanager)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2Profile`
   * [CoreWebView2Profile.CookieManager property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1777-prerelease&preserve-view=true#cookiemanager)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Profile5](/microsoft-edge/webview2/reference/win32/icorewebview2profile5?view=webview2-1.0.1777-prerelease&preserve-view=true)
   * [ICoreWebView2Profile5::get_CookieManager](/microsoft-edge/webview2/reference/win32/icorewebview2profile5?view=webview2-1.0.1777-prerelease&preserve-view=true#get_cookiemanager)

---


<!-- ------------------------------ -->
#### Bug fixes

* Fixed a crash when releasing the WebView from a different thread.  (Runtime-only)  ([Issue #3062](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3062))

* Fixed a bug where focus was trapped inside the WebView2 control when wrapped in a `ContainerControl`.  ([Issue #2835](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2835))

* Fixed the issue by disabling the editable `.pdf` temporary cached data recovery function in WebView2.  ([Issue #3274](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3274))

* Disabled the Chrome Web Store info banner that displays the option to allow extensions installation.  ([Issue #3312](https://github.com/MicrosoftEdge/WebView2Feedback/issues/3312))

* Fixed an issue with new download items not getting called out by screen readers.

* Fixed a bug where visual hosted owned windows didn't map mouse pointer input correctly.

* Fixed a bug where `DownloadStarting` was getting raised for a canceled **Save As** dialog.  (Runtime-only)


<!-- ====================================================================== -->
## 1.0.1661.34

Release Date: March 20, 2023

[NuGet package for WebView2 SDK 1.0.1661.34](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1661.34)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 111.0.1661.34 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ------------------------------ -->
*  The SharedBuffer API:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2` Class
   * [CoreWebView2.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postsharedbuffertoscript?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* `CoreWebView2Environment` Class
   * [ICoreWebView2Environment.CreateSharedBuffer Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createsharedbuffer?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* `CoreWebView2Frame` Class
   * [CoreWebView2Frame.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postsharedbuffertoscript?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* [CoreWebView2SharedBuffer Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.Buffer Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.buffer?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.FileMappingHandle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.filemappinghandle?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.Size Property](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.size?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.Close Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.close?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.Dispose Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.dispose?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.OpenStream Method](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer.openstream?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* [CoreWebView2SharedBufferAccess Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbufferaccess?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * `ReadOnly`
   * `ReadWrite`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2` Class
   * [CoreWebView2.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1661.34&preserve-view=true#postsharedbuffertoscript)

* `CoreWebView2Environment` Class
   * [ICoreWebView2Environment.CreateSharedBuffer Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1661.34&preserve-view=true#createsharedbuffer)

* `CoreWebView2Frame` Class
   * [CoreWebView2Frame.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.1661.34&preserve-view=true#postsharedbuffertoscript)

* [CoreWebView2SharedBuffer Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1661.34&preserve-view=true)
   * [CoreWebView2SharedBuffer.Buffer Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1661.34&preserve-view=true#buffer)
   * [CoreWebView2SharedBuffer.Size Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1661.34&preserve-view=true#size)
   * [CoreWebView2SharedBuffer.Close Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1661.34&preserve-view=true#close)
   * [CoreWebView2SharedBuffer.OpenStream Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1661.34&preserve-view=true#openstream)

* [CoreWebView2SharedBufferAccess Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbufferaccess?view=webview2-winrt-1.0.1661.34&preserve-view=true)
   * `ReadOnly`
   * `ReadWrite`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_17](/microsoft-edge/webview2/reference/win32/icorewebview2_17?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2_17::PostSharedBufferToScript](/microsoft-edge/webview2/reference/win32/icorewebview2_17?view=webview2-1.0.1661.34&preserve-view=true#postsharedbuffertoscript)

* [ICoreWebView2Environment12](/microsoft-edge/webview2/reference/win32/icorewebview2environment12?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2Environment12::CreateSharedBuffer](/microsoft-edge/webview2/reference/win32/icorewebview2environment12?view=webview2-1.0.1661.34&preserve-view=true#createsharedbuffer)

* [ICoreWebView2Frame4](/microsoft-edge/webview2/reference/win32/icorewebview2frame4?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2Frame4::PostSharedBufferToScript](/microsoft-edge/webview2/reference/win32/icorewebview2frame4?view=webview2-1.0.1661.34&preserve-view=true#postsharedbuffertoscript)

* [ICoreWebView2SharedBuffer](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2SharedBuffer::OpenStream](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1661.34&preserve-view=true#openstream)
   * [ICoreWebView2SharedBuffer::Close](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1661.34&preserve-view=true#close)
   * [ICoreWebView2SharedBuffer::get_Size](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1661.34&preserve-view=true#get_size)
   * [ICoreWebView2SharedBuffer::get_Buffer](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1661.34&preserve-view=true#get_buffer)
   * [ICoreWebView2SharedBuffer::get_FileMappingHandle](/microsoft-edge/webview2/reference/win32/icorewebview2sharedbuffer?view=webview2-1.0.1661.34&preserve-view=true#get_filemappinghandle)

* [COREWEBVIEW2_SHARED_BUFFER_ACCESS](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1661.34&preserve-view=true#corewebview2_shared_buffer_access)
   * `COREWEBVIEW2_SHARED_BUFFER_ACCESS_READ_ONLY`
   * `COREWEBVIEW2_SHARED_BUFFER_ACCESS_READ_WRITE`

---


<!-- ------------------------------ -->
*  APIs for managing permissions:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2PermissionKind` Enum
   * [CoreWebView2PermissionKind.MidiSystemExclusiveMessages Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* `CoreWebView2PermissionRequestedEventArgs` Event
   * [CoreWebView2PermissionRequestedEventArgs.SavesInProfile Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionrequestedeventargs.savesinprofile?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* [CoreWebView2PermissionSetting Class](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionkind?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionorigin?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionState Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionstate?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.getnondefaultpermissionsettingsasync?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.setpermissionstateasync?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2PermissionKind` Enum
   * [CoreWebView2PermissionKind.MidiSystemExclusiveMessages Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind?view=webview2-winrt-1.0.1661.34&preserve-view=true)

* `CoreWebView2PermissionRequestedEventArgs` Event
   * [CoreWebView2PermissionRequestedEventArgs.SavesInProfile Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionrequestedeventargs?view=webview2-winrt-1.0.1661.34&preserve-view=true#savesinprofile)

* [CoreWebView2PermissionSetting Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1661.34&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1661.34&preserve-view=true#permissionkind)
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1661.34&preserve-view=true#permissionorigin)
   * [CoreWebView2PermissionSetting.PermissionState Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1661.34&preserve-view=true#permissionstate)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1661.34&preserve-view=true#getnondefaultpermissionsettingsasync)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1661.34&preserve-view=true#setpermissionstateasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2GetNonDefaultPermissionSettingsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2getnondefaultpermissionsettingscompletedhandler?view=webview2-1.0.1661.34&preserve-view=true)

* [ICoreWebView2PermissionRequestedEventArgs3](/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs3?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2PermissionRequestedEventArgs3::get_SavesInProfile](/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs3?view=webview2-1.0.1661.34&preserve-view=true#get_savesinprofile)
   * [ICoreWebView2PermissionRequestedEventArgs3::put_SavesInProfile](/microsoft-edge/webview2/reference/win32/icorewebview2permissionrequestedeventargs3?view=webview2-1.0.1661.34&preserve-view=true#put_savesinprofile)

* [ICoreWebView2PermissionSetting](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2PermissionSetting::get_PermissionKind](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting?view=webview2-1.0.1661.34&preserve-view=true#get_permissionkind)
   * [ICoreWebView2PermissionSetting::get_PermissionOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting?view=webview2-1.0.1661.34&preserve-view=true#get_permissionorigin)
   * [ICoreWebView2PermissionSetting::get_PermissionState](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsetting?view=webview2-1.0.1661.34&preserve-view=true#get_permissionstate)

* [ICoreWebView2PermissionSettingCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsettingcollectionview?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2PermissionSettingCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsettingcollectionview?view=webview2-1.0.1661.34&preserve-view=true#getvalueatindex)
   * [ICoreWebView2PermissionSettingCollectionView::get_Count](/microsoft-edge/webview2/reference/win32/icorewebview2permissionsettingcollectionview?view=webview2-1.0.1661.34&preserve-view=true#get_count)

* [ICoreWebView2Profile4](/microsoft-edge/webview2/reference/win32/icorewebview2profile4?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2Profile4::GetNonDefaultPermissionSettings](/microsoft-edge/webview2/reference/win32/icorewebview2profile4?view=webview2-1.0.1661.34&preserve-view=true#getnondefaultpermissionsettings)
   * [ICoreWebView2Profile4::SetPermissionState](/microsoft-edge/webview2/reference/win32/icorewebview2profile4?view=webview2-1.0.1661.34&preserve-view=true#setpermissionstate)

* [ICoreWebView2SetPermissionStateCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2setpermissionstatecompletedhandler?view=webview2-1.0.1661.34&preserve-view=true)

* `COREWEBVIEW2_PERMISSION_KIND` Enum
   * [COREWEBVIEW2_PERMISSION_KIND_MIDI_SYSTEM_EXCLUSIVE_MESSAGES enum value](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1661.34&preserve-view=true#corewebview2_permission_kind)

---


<!-- ------------------------------ -->
APIs for managing tracking prevention:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2EnvironmentOptions` Class
   * [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.enabletrackingprevention?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.preferredtrackingpreventionlevel?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

* [CoreWebView2TrackingPreventionLevel Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2trackingpreventionlevel?view=webview2-dotnet-1.0.1661.34&preserve-view=true)
    * `None`
    * `Basic`
    * `Balanced`
    * `Strict`

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2EnvironmentOptions` Class
   * [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1661.34&preserve-view=true#enabletrackingprevention)

* `CoreWebView2Profile` Class
   * [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1661.34&preserve-view=true#preferredtrackingpreventionlevel)

* [CoreWebView2TrackingPreventionLevel Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2trackingpreventionlevel?view=webview2-winrt-1.0.1661.34&preserve-view=true)
    * `None`
    * `Basic`
    * `Balanced`
    * `Strict`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions5](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2EnvironmentOptions5::EnableTrackingPrevention property (get](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5?view=webview2-1.0.1661.34&preserve-view=true#get_enabletrackingprevention), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5?view=webview2-1.0.1661.34&preserve-view=true#put_enabletrackingprevention)

* [ICoreWebView2Profile3](/microsoft-edge/webview2/reference/win32/icorewebview2profile3?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2Profile3::PreferredTrackingPreventionLevel property (get](/microsoft-edge/webview2/reference/win32/icorewebview2profile3?view=webview2-1.0.1661.34&preserve-view=true#get_preferredtrackingpreventionlevel), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2profile3?view=webview2-1.0.1661.34&preserve-view=true#put_preferredtrackingpreventionlevel)

* [COREWEBVIEW2_TRACKING_PREVENTION_LEVEL enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1661.34&preserve-view=true#corewebview2_tracking_prevention_level)
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_NONE`
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_BASIC`
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_BALANCED`
  * `COREWEBVIEW2_TRACKING_PREVENTION_LEVEL_STRICT`

---


<!-- ------------------------------ -->
*  APIs to manage the value of the controller's script locale:

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ControllerOptions` Class
   * [CoreWebView2ControllerOptions.ScriptLocale Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.scriptlocale?view=webview2-dotnet-1.0.1661.34&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ControllerOptions` Class
   * [CoreWebView2ControllerOptions.ScriptLocale Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.1661.34&preserve-view=true#scriptlocale)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ControllerOptions2](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2?view=webview2-1.0.1661.34&preserve-view=true)
   * [ICoreWebView2ControllerOptions2::get_ScriptLocale](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2?view=webview2-1.0.1661.34&preserve-view=true#get_scriptlocale)
   * [ICoreWebView2ControllerOptions2::put_ScriptLocale](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions2?view=webview2-1.0.1661.34&preserve-view=true#put_scriptlocale)

---


<!-- ====================================================================== -->
## 1.0.1724-prerelease

Release Date: March 20, 2023

[NuGet package for WebView2 SDK 1.0.1724-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1724-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 113.0.1724.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
*  Added `AdditionalObjects` for WebMessage received:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webmessagereceivedeventargs.additionalobjects?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2WebMessageReceivedEventArgs.AdditionalObjects Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webmessagereceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#additionalobjects)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalWebMessageReceivedEventArgs::get_AdditionalObjects](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebmessagereceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_additionalobjects)

---


<!-- ------------------------------ -->
*  Added Window Management permission type:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2PermissionKind.WindowManagement Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2PermissionKind.WindowManagement Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [COREWEBVIEW2_PERMISSION_KIND_WINDOW_MANAGEMENT Enum Value](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1724-prerelease&preserve-view=true#corewebview2_permission_kind)

---


<!-- ------------------------------ -->
*  Added support for launching external URIs:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.LaunchingExternalUriScheme Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.launchingexternalurischeme?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

* [CoreWebView2LaunchingExternalUriSchemeEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Cancel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.cancel?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.GetDeferral Method](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.getdeferral?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.initiatingorigin?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.IsUserInitiated Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.isuserinitiated?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Uri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2launchingexternalurischemeeventargs.uri?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.LaunchingExternalUriScheme Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#launchingexternalurischeme)

* [CoreWebView2LaunchingExternalUriSchemeEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Cancel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#cancel)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.GetDeferral Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#getdeferral)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.InitiatingOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#initiatingorigin)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.IsUserInitiated Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#isuserinitiated)
   * [CoreWebView2LaunchingExternalUriSchemeEventArgs.Uri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2launchingexternalurischemeeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#uri)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental21::add_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2experimental21?view=webview2-1.0.1724-prerelease&preserve-view=true#add_launchingexternalurischeme)

* [ICoreWebView2Experimental21::remove_LaunchingExternalUriScheme](/microsoft-edge/webview2/reference/win32/icorewebview2experimental21?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_launchingexternalurischeme)

* [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventHandler::Invoke](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true#invoke)<!-- keep this Invoke, b/c listed in api ref -->

* [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::get_Uri](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_uri)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::get_InitiatingOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_initiatingorigin)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::get_IsUserInitiated](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_isuserinitiated)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::get_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_cancel)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::put_Cancel](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#put_cancel)
  * [ICoreWebView2ExperimentalLaunchingExternalUriSchemeEventArgs::GetDeferral](/microsoft-edge/webview2/reference/win32/icorewebview2experimentallaunchingexternalurischemeeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#getdeferral)

---


<!-- ------------------------------ -->
*  Added support for texture streaming:

##### [.NET/C#](#tab/dotnetcsharp)

The `Environment` interface that returns the `TextureStream` interface:
* [CoreWebView2Environment.CreateTextureStream Method](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createtexturestream?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2Environment.RenderAdapterLUIDChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.renderadapterluidchanged?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2Environment.RenderAdapterLUID Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.renderadapterluid?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

The `TextureStream` interface:
* [CoreWebView2TextureStream Class](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.AddAllowedOrigin Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.addallowedorigin?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.CloseTexture Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.closetexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.CreateTexture Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.createtexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.ErrorReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.errorreceived?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.GetAvailableTexture Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.getavailabletexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.Id Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.id?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.PresentTexture Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.presenttexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.RemoveAllowedOrigin Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.removeallowedorigin?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.SetD3DDevice Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.setd3ddevice?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.StartRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.startrequested?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.Stop Method](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.stop?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.Stopped Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.stopped?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.WebTextureReceived Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.webtexturereceived?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.WebTextureStreamStopped Event](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestream.webtexturestreamstopped?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

ErrorReceivedEventArgs:
* [CoreWebView2TextureStreamErrorReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorreceivedeventargs?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorReceivedEventArgs.Kind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorreceivedeventargs.kind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorReceivedEventArgs.texture Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorreceivedeventargs.texture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

WebTextureReceivedEventArgs:
* [CoreWebView2TextureStreamWebTextureReceivedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamwebtexturereceivedeventargs?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2TextureStreamWebTextureReceivedEventArgs.WebTexture Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamwebtexturereceivedeventargs.webtexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

TextureStream error kind enum:
* [CoreWebView2TextureStreamErrorKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorNoVideoTrackStarted Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorTextureError Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorTextureInUse Enum Value](/dotnet/api/microsoft.web.webview2.core.corewebview2texturestreamerrorkind?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

The `Texture` interface that the host writes to so that the Renderer will render on it:
* [CoreWebView2Texture Class](/dotnet/api/microsoft.web.webview2.core.corewebview2texture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Texture.Handle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texture.handle?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Texture.Resource Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texture.resource?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Texture.Timestamp Property](/dotnet/api/microsoft.web.webview2.core.corewebview2texture.timestamp?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

The received `WebTexture` interface that the Renderer writes to so that the host will read on it:
* [CoreWebView2WebTexture Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webtexture?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2WebTexture.Handle Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webtexture.handle?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2WebTexture.Resource Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webtexture.resource?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2WebTexture.Timestamp Property](/dotnet/api/microsoft.web.webview2.core.corewebview2webtexture.timestamp?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

The `Environment` interface that returns the `TextureStream` interface:
* [CoreWebView2Environment.CreateTextureStream Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#createtexturestream)
* [CoreWebView2Environment.RenderAdapterLUIDChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#renderadapterluidchanged)
* [CoreWebView2Environment.RenderAdapterLUID Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#renderadapterluid)

The `TextureStream` interface:
* [CoreWebView2TextureStream Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
    * [CoreWebView2TextureStream.AddAllowedOrigin Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#addallowedorigin)
    * [CoreWebView2TextureStream.CloseTexture Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#closetexture)
    * [CoreWebView2TextureStream.CreateTexture Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#createtexture)
    * [CoreWebView2TextureStream.ErrorReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#errorreceived)
    * [CoreWebView2TextureStream.GetAvailableTexture Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#getavailabletexture)
    * [CoreWebView2TextureStream.Id Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#id)
    * [CoreWebView2TextureStream.PresentTexture Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#presenttexture)
    * [CoreWebView2TextureStream.RemoveAllowedOrigin Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#removeallowedorigin)
    * [CoreWebView2TextureStream.SetD3DDevice Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#setd3ddevice)
    * [CoreWebView2TextureStream.StartRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#startrequested)
    * [CoreWebView2TextureStream.Stop Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#stop)
    * [CoreWebView2TextureStream.Stopped Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#stopped)
    * [CoreWebView2TextureStream.WebTextureReceived Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#webtexturereceived)
    * [CoreWebView2TextureStream.WebTextureStreamStopped Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestream?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#webtexturestreamstopped)

ErrorReceivedEventArgs:
* [CoreWebView2TextureStreamErrorReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorreceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorReceivedEventArgs.Kind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorreceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#kind)

WebTextureReceivedEventArgs:
* [CoreWebView2TextureStreamWebTextureReceivedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamwebtexturereceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamWebTextureReceivedEventArgs.WebTexture Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamwebtexturereceivedeventargs?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#webtexture)

TextureStream error kind enum:
* [CoreWebView2TextureStreamErrorKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorNoVideoTrackStarted Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorTextureError Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2TextureStreamErrorKind.CoreWebView2TextureStreamErrorTextureInUse Enum Value](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texturestreamerrorkind?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)

The `Texture` interface that the host writes to so that the Renderer will render on it:
* [CoreWebView2Texture Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Texture.Resource Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#resource)
   * [CoreWebView2Texture.Timestamp Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2texture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#timestamp)

The received `WebTexture` interface that the Renderer writes to so that the host will read on it:
* [CoreWebView2WebTexture Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webtexture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2WebTexture.Resource Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webtexture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#resource)
   * [CoreWebView2WebTexture.Timestamp Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webtexture?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#timestamp)

##### [Win32/C++](#tab/win32cpp)

The `Environment` interface that returns the `TextureStream` interface:
* [ICoreWebView2ExperimentalEnvironment12](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment12?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironment12::CreateTextureStream](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment12?view=webview2-1.0.1724-prerelease&preserve-view=true#createtexturestream)
   * [ICoreWebView2ExperimentalEnvironment12::RenderAdapterLUID (get)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment12?view=webview2-1.0.1724-prerelease&preserve-view=true#get_renderadapterluid)
   * [ICoreWebView2ExperimentalEnvironment12::RenderAdapterLUIDChanged (add, remove)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment12?view=webview2-1.0.1724-prerelease&preserve-view=true#add_renderadapterluidchanged)

The `TextureStream` interface:
* [ICoreWebView2ExperimentalTextureStream](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalTextureStream::add_ErrorReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_errorreceived)
   * [ICoreWebView2ExperimentalTextureStream::add_StartRequested](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_startrequested)
   * [ICoreWebView2ExperimentalTextureStream::add_Stopped](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_stopped)
   * [ICoreWebView2ExperimentalTextureStream::add_WebTextureReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_webtexturereceived)
   * [ICoreWebView2ExperimentalTextureStream::add_WebTextureStreamStopped](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#add_webtexturestreamstopped)
   * [ICoreWebView2ExperimentalTextureStream::AddAllowedOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#addallowedorigin)
   * [ICoreWebView2ExperimentalTextureStream::CloseTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#closetexture)
   * [ICoreWebView2ExperimentalTextureStream::CreateTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#createtexture)
   * [ICoreWebView2ExperimentalTextureStream::get_Id](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#get_id)
   * [ICoreWebView2ExperimentalTextureStream::GetAvailableTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#getavailabletexture)
   * [ICoreWebView2ExperimentalTextureStream::PresentTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#presenttexture)
   * [ICoreWebView2ExperimentalTextureStream::remove_ErrorReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_errorreceived)
   * [ICoreWebView2ExperimentalTextureStream::remove_StartRequested](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_startrequested)
   * [ICoreWebView2ExperimentalTextureStream::remove_Stopped](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_stopped)
   * [ICoreWebView2ExperimentalTextureStream::remove_WebTextureReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_webtexturereceived)
   * [ICoreWebView2ExperimentalTextureStream::remove_WebTextureStreamStopped](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_webtexturestreamstopped)
   * [ICoreWebView2ExperimentalTextureStream::RemoveAllowedOrigin](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#removeallowedorigin)
   * [ICoreWebView2ExperimentalTextureStream::SetD3DDevice](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#setd3ddevice)
   * [ICoreWebView2ExperimentalTextureStream::Stop](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestream?view=webview2-1.0.1724-prerelease&preserve-view=true#stop)

Supplemental `TextureStream*` interfaces:
* [ICoreWebView2ExperimentalTextureStreamStartRequestedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamstartrequestedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalTextureStreamStoppedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamstoppedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalTextureStreamErrorReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamerrorreceivedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalTextureStreamErrorReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamerrorreceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalTextureStreamErrorReceivedEventArgs::get_Kind](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamerrorreceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_kind)
   * [ICoreWebView2ExperimentalTextureStreamErrorReceivedEventArgs::get_Texture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamerrorreceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_texture)
* [ICoreWebView2ExperimentalTextureStreamWebTextureReceivedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamwebtexturereceivedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalTextureStreamWebTextureReceivedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamwebtexturereceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalTextureStreamWebTextureReceivedEventArgs::get_WebTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamwebtexturereceivedeventargs?view=webview2-1.0.1724-prerelease&preserve-view=true#get_webtexture)
* [ICoreWebView2ExperimentalTextureStreamWebTextureStreamStoppedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexturestreamwebtexturestreamstoppedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)

TextureStream error kind enum:
* [COREWEBVIEW2_TEXTURE_STREAM_ERROR_KIND Enum](/microsoft-edge/webview2/reference/win32/webview2experimental-idl?view=webview2-1.0.1724-prerelease&preserve-view=true#corewebview2_texture_stream_error_kind)

Other interfaces (`RenderAdapter`):
* [ICoreWebView2ExperimentalRenderAdapterLUIDChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalrenderadapterluidchangedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)

The `Texture` interface that the host writes to so that the Renderer will render on it:
* [ICoreWebView2ExperimentalTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalTexture::get_Handle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_handle)
   * [ICoreWebView2ExperimentalTexture::get_Resource](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_resource)
   * [ICoreWebView2ExperimentalTexture::get_Timestamp](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_timestamp)
   * [ICoreWebView2ExperimentalTexture::put_Timestamp](/microsoft-edge/webview2/reference/win32/icorewebview2experimentaltexture?view=webview2-1.0.1724-prerelease&preserve-view=true#put_timestamp)

The received `WebTexture` interface that the Renderer writes to so that the host will read on it:
* [ICoreWebView2ExperimentalWebTexture](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebtexture?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalWebTexture::get_Handle](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebtexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_handle)
   * [ICoreWebView2ExperimentalWebTexture::get_Resource](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebtexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_resource)
   * [ICoreWebView2ExperimentalWebTexture::get_Timestamp](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebtexture?view=webview2-1.0.1724-prerelease&preserve-view=true#get_timestamp)

---


<!-- ------------------------------ -->
*  Added support for profile management: custom data partition, cookie manager and profile deletion:

##### [.NET/C#](#tab/dotnetcsharp)

Added support for custom data partition:
* [CoreWebView2.CustomDataPartitionId Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.customdatapartitionid?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2Profile.ClearCustomDataPartitionAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.clearcustomdatapartitionasync?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

Added support for cookie manager:
* [CoreWebView2Profile.CookieManager Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.cookiemanager?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

Add support for managing profile deletion:
* [CoreWebView2Profile.Delete Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.delete?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
* [CoreWebView2Profile.Deleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.deleted?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

Added support for custom data partition:
* [CoreWebView2.CustomDataPartitionId Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#customdatapartitionid)
* [CoreWebView2Profile.ClearCustomDataPartitionAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#clearcustomdatapartitionasync)

Added support for cookie manager:
* [CoreWebView2Profile.CookieManager Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#cookiemanager)

Add support for managing profile deletion:
* [CoreWebView2Profile.Delete Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#delete)
* [CoreWebView2Profile.Deleted Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#deleted)

##### [Win32/C++](#tab/win32cpp)

Added support for custom data partition:
* [ICoreWebView2Experimental20](/microsoft-edge/webview2/reference/win32/icorewebview2experimental20?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2Experimental20::get_CustomDataPartitionId](/microsoft-edge/webview2/reference/win32/icorewebview2experimental20?view=webview2-1.0.1724-prerelease&preserve-view=true#get_customdatapartitionid)
   * [ICoreWebView2Experimental20::put_CustomDataPartitionId](/microsoft-edge/webview2/reference/win32/icorewebview2experimental20?view=webview2-1.0.1724-prerelease&preserve-view=true#put_customdatapartitionid)
* [ICoreWebView2ExperimentalProfile7](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile7?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile7::ClearCustomDataPartition](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile7?view=webview2-1.0.1724-prerelease&preserve-view=true#clearcustomdatapartition)
* [ICoreWebView2ExperimentalClearCustomDataPartitionCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalclearcustomdatapartitioncompletedhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)

Added support for cookie manager:
* [ICoreWebView2ExperimentalProfile8](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile8?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile8::get_CookieManager](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile8?view=webview2-1.0.1724-prerelease&preserve-view=true#get_cookiemanager)

Add support for managing profile deletion:
* [ICoreWebView2ExperimentalProfile10](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile10?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile10::Delete](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile10?view=webview2-1.0.1724-prerelease&preserve-view=true#delete)
   * [ICoreWebView2ExperimentalProfile10::add_Deleted](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile10?view=webview2-1.0.1724-prerelease&preserve-view=true#add_deleted)
   * [ICoreWebView2ExperimentalProfile10::remove_Deleted](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile10?view=webview2-1.0.1724-prerelease&preserve-view=true#remove_deleted)
* [ICoreWebView2ExperimentalProfileDeletedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofiledeletedeventhandler?view=webview2-1.0.1724-prerelease&preserve-view=true)

---


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
*  Managing smartscreen API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Settings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2settings?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isreputationcheckingrequired?view=webview2-dotnet-1.0.1724-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Settings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true)
   * [CoreWebView2Settings.IsReputationCheckingRequired Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.1724-prerelease&preserve-view=true#isreputationcheckingrequired)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Settings8](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1724-prerelease&preserve-view=true)
   * [ICoreWebView2Settings8::get_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1724-prerelease&preserve-view=true#get_isreputationcheckingrequired)
   * [ICoreWebView2Settings8::put_IsReputationCheckingRequired](/microsoft-edge/webview2/reference/win32/icorewebview2settings8?view=webview2-1.0.1724-prerelease&preserve-view=true#put_isreputationcheckingrequired)

---


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed a bug in `PrintAsync` and `PrintToPdfStreamAsync` that throws an exception when print settings are null.

*  Improved handling of apps running elevated.  (Runtime-only)

*  Added support for window management permission kind.  (Runtime and SDK)

*  Reliability improvement.  (Runtime-only)


<!-- ====================================================================== -->
## 1.0.1587.40

Release Date: February 15, 2023

[NuGet package for WebView2 SDK 1.0.1587.40](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1587.40)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 110.0.1587.40 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ------------------------------ -->
*  Additional options used to create a WebView2 Environment to manage custom scheme registration:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CustomSchemeRegistration Class](/dotnet/api/microsoft.web.webview2.core.corewebview2customschemeregistration?view=webview2-dotnet-1.0.1587.40&preserve-view=true)
* [CoreWebView2EnvironmentOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions?view=webview2-dotnet-1.0.1587.40&preserve-view=true)
   * [CoreWebView2EnvironmentOptions.CustomSchemeRegistrations Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.customschemeregistrations?view=webview2-dotnet-1.0.1587.40&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2CustomSchemeRegistration Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2customschemeregistration?view=webview2-winrt-1.0.1587.40&preserve-view=true)
* [CoreWebView2EnvironmentOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1587.40&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CustomSchemeRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1587.40&preserve-view=true)
   * [ICoreWebView2CustomSchemeRegistration::GetAllowedOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1587.40&preserve-view=true#getallowedorigins)
   * [ICoreWebView2CustomSchemeRegistration::SetAllowedOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1587.40&preserve-view=true#setallowedorigins)
   * [ICoreWebView2CustomSchemeRegistration::get_HasAuthorityComponent](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1587.40&preserve-view=true#get_hasauthoritycomponent)
   * [ICoreWebView2CustomSchemeRegistration::put_HasAuthorityComponent](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1587.40&preserve-view=true#put_hasauthoritycomponent)
   * [ICoreWebView2CustomSchemeRegistration::get_SchemeName](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1587.40&preserve-view=true#get_schemename)<!--no put-->
   * [ICoreWebView2CustomSchemeRegistration::get_TreatAsSecure](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1587.40&preserve-view=true#get_treatassecure)
   * [ICoreWebView2CustomSchemeRegistration::put_TreatAsSecure](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1587.40&preserve-view=true#put_treatassecure)
* [ICoreWebView2EnvironmentOptions4](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.1587.40&preserve-view=true)
   * [ICoreWebView2EnvironmentOptions4::GetCustomSchemeRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.1587.40&preserve-view=true#getcustomschemeregistrations)
   * [ICoreWebView2EnvironmentOptions4::SetCustomSchemeRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.1587.40&preserve-view=true#setcustomschemeregistrations)

---


<!-- ====================================================================== -->
## 1.0.1671-prerelease

Release Date: February 15, 2023

[NuGet package for WebView2 SDK 1.0.1671-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1671-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 112.0.1671.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
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


<!-- ------------------------------ -->
#### Promotions

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


<!-- ------------------------------ -->
#### Bug fixes

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
## 1.0.1518.46

Release Date: January 17, 2023

[NuGet package for WebView2 SDK 1.0.1518.46](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1518.46)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 109.0.1518.46 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ------------------------------ -->
*  The Print API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PrintAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printasync?view=webview2-dotnet-1.0.1518.46&preserve-view=true)
* [CoreWebView2.PrintToPdfStreamAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfstreamasync?view=webview2-dotnet-1.0.1518.46&preserve-view=true)
* [CoreWebView2.ShowPrintUI Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui?view=webview2-dotnet-1.0.1518.46&preserve-view=true)
* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings?view=webview2-dotnet-1.0.1518.46&preserve-view=true)
   * [CoreWebView2PrintSettings.Collation Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.collation?view=webview2-dotnet-1.0.1518.46&preserve-view=true)
   * [CoreWebView2PrintSettings.ColorMode Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.colormode?view=webview2-dotnet-1.0.1518.46&preserve-view=true)
   * [CoreWebView2PrintSettings.Copies Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.copies?view=webview2-dotnet-1.0.1518.46&preserve-view=true#microsoft-web-webview2-core-corewebview2printsettings-copies)
   * [CoreWebView2PrintSettings.Duplex Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.duplex?view=webview2-dotnet-1.0.1518.46&preserve-view=true)
   * [CoreWebView2PrintSettings.MediaSize Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.mediasize?view=webview2-dotnet-1.0.1518.46&preserve-view=true)
   * [CoreWebView2PrintSettings.PageRanges Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.pageranges?view=webview2-dotnet-1.0.1518.46&preserve-view=true)
   * [CoreWebView2PrintSettings.PagesPerSide Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.pagesperside?view=webview2-dotnet-1.0.1518.46&preserve-view=true)
   * [CoreWebView2PrintSettings.PrinterName Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.printername?view=webview2-dotnet-1.0.1518.46&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PrintAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1518.46&preserve-view=true#printasync)
* [CoreWebView2.PrintToPdfStreamAsync](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1518.46&preserve-view=true#printtopdfstreamasync)
* [CoreWebView2.ShowPrintUI Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1518.46&preserve-view=true#showprintui)
* [CoreWebView2PrintSettings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1518.46&preserve-view=true)
   * [CoreWebView2PrintSettings.Collation Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1518.46&preserve-view=true#collation)
   * [CoreWebView2PrintSettings.ColorMode Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1518.46&preserve-view=true#colormode)
   * [CoreWebView2PrintSettings.Copies Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1518.46&preserve-view=true#copies)
   * [CoreWebView2PrintSettings.Duplex Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1518.46&preserve-view=true#duplex)
   * [CoreWebView2PrintSettings.MediaSize Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1518.46&preserve-view=true#mediasize)
   * [CoreWebView2PrintSettings.PageRanges Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1518.46&preserve-view=true#pageranges)
   * [CoreWebView2PrintSettings.PagesPerSide Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1518.46&preserve-view=true#pagesperside)
   * [CoreWebView2PrintSettings.PrinterName Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1518.46&preserve-view=true#printername)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_16](/microsoft-edge/webview2/reference/win32/icorewebview2_16?view=webview2-1.0.1518.46&preserve-view=true)
   * [ICoreWebView2_16::Print](/microsoft-edge/webview2/reference/win32/icorewebview2_16?view=webview2-1.0.1518.46&preserve-view=true#print)
   * [ICoreWebView2_16::PrintToPdfStream](/microsoft-edge/webview2/reference/win32/icorewebview2_16?view=webview2-1.0.1518.46&preserve-view=true#printtopdfstream)
   * [ICoreWebView2_16::ShowPrintUI](/microsoft-edge/webview2/reference/win32/icorewebview2_16?view=webview2-1.0.1518.46&preserve-view=true#showprintui)
* [ICoreWebView2PrintCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2printcompletedhandler?view=webview2-1.0.1518.46&preserve-view=true)
* [ICoreWebView2PrintToPdfStreamCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2printtopdfstreamcompletedhandler?view=webview2-1.0.1518.46&preserve-view=true)
* [ICoreWebView2PrintSettings2](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true)
   * [ICoreWebView2PrintSettings2::Collation property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#get_collation), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#put_collation)
   * [ICoreWebView2PrintSettings2::ColorMode property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#get_colormode), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#put_colormode)
   * [ICoreWebView2PrintSettings2::Copies property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#get_copies), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#put_copies)
   * [ICoreWebView2PrintSettings2::Duplex property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#get_duplex), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#put_duplex)
   * [ICoreWebView2PrintSettings2::MediaSize property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#get_mediasize), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#put_mediasize)
   * [ICoreWebView2PrintSettings2::PageRanges property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#get_pageranges), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#put_pageranges)
   * [ICoreWebView2PrintSettings2::PagesPerSide property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#get_pagesperside), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#put_pagesperside)
   * [ICoreWebView2PrintSettings2::PrinterName property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#get_printername), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1518.46&preserve-view=true#put_printername)

---


<!-- ------------------------------ -->
*  The Custom Crash Reporting API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions.IsCustomCrashReportingEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.iscustomcrashreportingenabled?view=webview2-dotnet-1.0.1518.46&preserve-view=true)
* [CoreWebView2Environment.FailureReportFolderPath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.failurereportfolderpath?view=webview2-dotnet-1.0.1518.46&preserve-view=true#microsoft-web-webview2-core-corewebview2environment-failurereportfolderpath)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions.IsCustomCrashReportingEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1518.46&preserve-view=true#iscustomcrashreportingenabled)
* [CoreWebView2Environment.FailureReportFolderPath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1518.46&preserve-view=true#failurereportfolderpath)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions3::IsCustomCrashReportingEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions3?view=webview2-1.0.1518.46&preserve-view=true#get_iscustomcrashreportingenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions3?view=webview2-1.0.1518.46&preserve-view=true#put_iscustomcrashreportingenabled)
* [ICoreWebView2Environment11::FailureReportFolderPath property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2environment11?view=webview2-1.0.1518.46&preserve-view=true#get_failurereportfolderpath)<!--no put-->

---


<!-- ====================================================================== -->
## 1.0.1619-prerelease

Release Date: January 19, 2023

[NuGet package for WebView2 SDK 1.0.1619-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1619-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 111.0.1619.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
*  Added support for the Permission management API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2PermissionRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionrequestedeventargs?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2PermissionRequestedEventArgs.SavesInProfile Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionrequestedeventargs.savesinprofile?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
* [CoreWebView2Profile Class](/dotnet/api/microsoft.web.webview2.core.corewebview2profile?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.getnondefaultpermissionsettingsasync?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.setpermissionstateasync?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
* [CoreWebView2PermissionSetting Class](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionkind?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2PermissionKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionkind?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
      * `MultipleAutomaticDownloads`
      * `FileReadWrite`
      * `Autoplay`
      * `LocalFonts`
      * `MidiSystemExclusiveMessageAccess`
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionorigin?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionState Property](/dotnet/api/microsoft.web.webview2.core.corewebview2permissionsetting.permissionstate?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2PermissionRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionrequestedeventargs?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2PermissionRequestedEventArgs.SavesInProfile Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionrequestedeventargs?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#savesinprofile)
* [CoreWebView2Profile Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2Profile.GetNonDefaultPermissionSettingsAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#getnondefaultpermissionsettingsasync)
   * [CoreWebView2Profile.SetPermissionStateAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#setpermissionstateasync)
* [CoreWebView2PermissionSetting Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2PermissionSetting.PermissionKind Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#permissionkind)
   * [CoreWebView2PermissionKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionkind?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
      * `MultipleAutomaticDownloads`
      * `FileReadWrite`
      * `Autoplay`
      * `LocalFonts`
      * `MidiSystemExclusiveMessageAccess`
   * [CoreWebView2PermissionSetting.PermissionOrigin Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#permissionorigin)
   * [CoreWebView2PermissionSetting.PermissionState Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2permissionsetting?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#permissionstate)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalPermissionRequestedEventArgs3](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionrequestedeventargs3?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalPermissionRequestedEventArgs3::SavesInProfile property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionrequestedeventargs3?view=webview2-1.0.1619-prerelease&preserve-view=true#get_savesinprofile), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionrequestedeventargs3?view=webview2-1.0.1619-prerelease&preserve-view=true#put_savesinprofile)
* [ICoreWebView2ExperimentalSetPermissionStateCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsetpermissionstatecompletedhandler?view=webview2-1.0.1619-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalGetNonDefaultPermissionSettingsCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalgetnondefaultpermissionsettingscompletedhandler?view=webview2-1.0.1619-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalProfile6](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile6?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile6::GetNonDefaultPermissionSettings](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile6?view=webview2-1.0.1619-prerelease&preserve-view=true#getnondefaultpermissionsettings)
   * [ICoreWebView2ExperimentalProfile6::SetPermissionState](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile6?view=webview2-1.0.1619-prerelease&preserve-view=true#setpermissionstate)
* [ICoreWebView2ExperimentalPermissionSettingCollectionView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsettingcollectionview?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalPermissionSettingCollectionView::Count property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsettingcollectionview?view=webview2-1.0.1619-prerelease&preserve-view=true#get_count)<!--no put-->
   * [ICoreWebView2ExperimentalPermissionSettingCollectionView::GetValueAtIndex](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsettingcollectionview?view=webview2-1.0.1619-prerelease&preserve-view=true#getvalueatindex)
* [ICoreWebView2ExperimentalPermissionSetting](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsetting?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalPermissionSetting::PermissionKind property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsetting?view=webview2-1.0.1619-prerelease&preserve-view=true#get_permissionkind)<!--no put-->
   * [COREWEBVIEW2_PERMISSION_KIND Enum](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-1.0.1619-prerelease&preserve-view=true#corewebview2_permission_kind)
      * `COREWEBVIEW2_PERMISSION_KIND_MULTIPLE_AUTOMATIC_DOWNLOADS`
      * `COREWEBVIEW2_PERMISSION_KIND_FILE_READ_WRITE`
      * `COREWEBVIEW2_PERMISSION_KIND_AUTOPLAY`
      * `COREWEBVIEW2_PERMISSION_KIND_LOCAL_FONTS`
      * `COREWEBVIEW2_PERMISSION_KIND_MIDI_SYSTEM_EXCLUSIVE_MESSAGE_ACCESS`
   * [ICoreWebView2ExperimentalPermissionSetting::PermissionOrigin property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsetting?view=webview2-1.0.1619-prerelease&preserve-view=true#get_permissionorigin)<!--no put-->
   * [ICoreWebView2ExperimentalPermissionSetting::PermissionState property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpermissionsetting?view=webview2-1.0.1619-prerelease&preserve-view=true#get_permissionstate)<!--no put-->

---


<!-- ------------------------------ -->
*  Added support for API to disable back and forward navigation:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2NavigationStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2NavigationStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationstartingeventargs?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalNavigationStartingEventArgs2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnavigationstartingeventargs2?view=webview2-1.0.1619-prerelease&preserve-view=true)

---


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
*  The Custom Scheme Registration API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2EnvironmentOptions.CustomSchemeRegistrations Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.customschemeregistrations?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
* [CoreWebView2CustomSchemeRegistration Class](/dotnet/api/microsoft.web.webview2.core.corewebview2customschemeregistration?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
* [CoreWebView2CustomSchemeRegistration Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2customschemeregistration?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions4](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2EnvironmentOptions4::GetCustomSchemeRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.1619-prerelease&preserve-view=true#getcustomschemeregistrations)
   * [ICoreWebView2EnvironmentOptions4::SetCustomSchemeRegistrations](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions4?view=webview2-1.0.1619-prerelease&preserve-view=true#setcustomschemeregistrations)
* [ICoreWebView2CustomSchemeRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2CustomSchemeRegistration::GetAllowedOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#getallowedorigins)
   * [ICoreWebView2CustomSchemeRegistration::SetAllowedOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#setallowedorigins)
   * [ICoreWebView2CustomSchemeRegistration::HasAuthorityComponent property (get](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#get_hasauthoritycomponent), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#put_hasauthoritycomponent)
   * [ICoreWebView2CustomSchemeRegistration::SchemeName property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#get_schemename)<!--no put-->
   * [ICoreWebView2CustomSchemeRegistration::TreatAsSecure property (get](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#get_treatassecure), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2customschemeregistration?view=webview2-1.0.1619-prerelease&preserve-view=true#put_treatassecure)

---


<!-- ------------------------------ -->
*  The Tracking Prevention API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.enabletrackingprevention?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
* [CoreWebView2Profile Class](/dotnet/api/microsoft.web.webview2.core.corewebview2profile?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.preferredtrackingpreventionlevel?view=webview2-dotnet-1.0.1619-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#enabletrackingprevention)
* [CoreWebView2Profile Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true)
   * [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1619-prerelease&preserve-view=true#preferredtrackingpreventionlevel)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions5](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2EnvironmentOptions5::EnableTrackingPrevention property (get](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5?view=webview2-1.0.1619-prerelease&preserve-view=true#get_enabletrackingprevention), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions5?view=webview2-1.0.1619-prerelease&preserve-view=true#put_enabletrackingprevention)
* [ICoreWebView2Profile3](/microsoft-edge/webview2/reference/win32/icorewebview2profile3?view=webview2-1.0.1619-prerelease&preserve-view=true)
   * [ICoreWebView2Profile3::PreferredTrackingPreventionLevel property (get](/microsoft-edge/webview2/reference/win32/icorewebview2profile3?view=webview2-1.0.1619-prerelease&preserve-view=true#get_preferredtrackingpreventionlevel), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2profile3?view=webview2-1.0.1619-prerelease&preserve-view=true#put_preferredtrackingpreventionlevel)

---


<!-- ------------------------------ -->
#### Bug fixes

*  Disabled **Open link as Profile** in the WebView2 context menu.

*  Fixed post data missing in form submit with Ctrl-click. ([Issue #2652](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2652))

*  Fixed a bug where the user is not able to get the custom context menu on PDF Viewer. ([Issue #2607](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2607))

*  Fixed a bug where the entire toolbar is blank when simultaneously hiding the **Bookmarks**, **Search**, and **PageSelector** buttons. ([Issue #2866](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2866))

*  Fixed a bug where the app crashes when trying to move focus to WebView2 when it is disabled.

*  Fixed drag and drop within the WebView2 for composition-hosted WebViews.

*  Removed read-aloud icon in Address bar in a WebView2 popup window.

*  Fixed unexpected items in the context menu of popup windows in WebView2.


<!-- ====================================================================== -->
## 1.0.1462.37

Release Date: December 12, 2022

[NuGet package for WebView2 SDK 1.0.1462.37](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1462.37)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 108.0.1462.37 or higher.


<!-- ------------------------------ -->
#### Bug fixes

This WebView2 SDK release has the same bug fixes as [Bug fixes for 1.0.1466-prerelease](#bug-fixes-for-101466-prerelease).


<!-- ====================================================================== -->
## 1.0.1549-prerelease

Release Date: December 12, 2022

[NuGet package for WebView2 SDK 1.0.1549-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1549-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 110.0.1549.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
*  Added support for the Locale Region API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ControllerOptions.LocaleRegion Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.localeregion?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ControllerOptions.LocaleRegion Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#localeregion)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalControllerOptions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions?view=webview2-1.0.1549-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalControllerOptions::LocaleRegion property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions?view=webview2-1.0.1549-prerelease&preserve-view=true#get_localeregion), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontrolleroptions?view=webview2-1.0.1549-prerelease&preserve-view=true#put_localeregion)

---


<!-- ---------- -->
*  Added support for the tracking prevention API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.enabletrackingprevention?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
* [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/dotnet/api/microsoft.web.webview2.core.corewebview2profile.preferredtrackingpreventionlevel?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions.EnableTrackingPrevention Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#enabletrackingprevention)
* [CoreWebView2Profile.PreferredTrackingPreventionLevel Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2profile?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#preferredtrackingpreventionlevel)

##### [Win32/C++](#tab/win32cpp)

*  [ICoreWebView2ExperimentalEnvironmentOptions2](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions2?view=webview2-1.0.1549-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalEnvironmentOptions2::EnableTrackingPrevention property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_enabletrackingprevention), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_enabletrackingprevention)
* [ICoreWebView2ExperimentalProfile5](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile5?view=webview2-1.0.1549-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalProfile5::PreferredTrackingPreventionLevel property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile5?view=webview2-1.0.1549-prerelease&preserve-view=true#get_preferredtrackingpreventionlevel), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile5?view=webview2-1.0.1549-prerelease&preserve-view=true#put_preferredtrackingpreventionlevel)

---


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ------------------------------ -->
*  Added support for the Print API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PrintAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printasync?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
* [CoreWebView2.PrintToPdfStreamAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfstreamasync?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
* [CoreWebView2.ShowPrintUI Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.Collation Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.collation?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.ColorMode Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.colormode?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.Copies Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.copies?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2printsettings-copies)
   * [CoreWebView2PrintSettings.Duplex Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.duplex?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.MediaSize Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.mediasize?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.PageRanges Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.pageranges?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.PagesPerSide Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.pagesperside?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.PrinterName Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.printername?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PrintAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#printasync)
* [CoreWebView2.PrintToPdfStreamAsync](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#printtopdfstreamasync)
* [CoreWebView2.ShowPrintUI Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#showprintui)
* [CoreWebView2PrintSettings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.Collation Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#collation)
   * [CoreWebView2PrintSettings.ColorMode Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#colormode)
   * [CoreWebView2PrintSettings.Copies Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#copies)
   * [CoreWebView2PrintSettings.Duplex Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#duplex)
   * [CoreWebView2PrintSettings.MediaSize Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#mediasize)
   * [CoreWebView2PrintSettings.PageRanges Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#pageranges)
   * [CoreWebView2PrintSettings.PagesPerSide Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#pagesperside)
   * [CoreWebView2PrintSettings.PrinterName Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#printername)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_16](/microsoft-edge/webview2/reference/win32/icorewebview2_16?view=webview2-1.0.1549-prerelease&preserve-view=true)
   * [ICoreWebView2_16::Print](/microsoft-edge/webview2/reference/win32/icorewebview2_16?view=webview2-1.0.1549-prerelease&preserve-view=true#print)
   * [ICoreWebView2_16::PrintToPdfStream](/microsoft-edge/webview2/reference/win32/icorewebview2_16?view=webview2-1.0.1549-prerelease&preserve-view=true#printtopdfstream)
   * [ICoreWebView2_16::ShowPrintUI](/microsoft-edge/webview2/reference/win32/icorewebview2_16?view=webview2-1.0.1549-prerelease&preserve-view=true#showprintui)
* [ICoreWebView2PrintCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2printcompletedhandler?view=webview2-1.0.1549-prerelease&preserve-view=true)
* [ICoreWebView2PrintToPdfStreamCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2printtopdfstreamcompletedhandler?view=webview2-1.0.1549-prerelease&preserve-view=true)
* [ICoreWebView2PrintSettings2](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true)
   * [ICoreWebView2PrintSettings2::Collation property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_collation), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_collation)
   * [ICoreWebView2PrintSettings2::ColorMode property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_colormode), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_colormode)
   * [ICoreWebView2PrintSettings2::Copies property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_copies), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_copies)
   * [ICoreWebView2PrintSettings2::Duplex property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_duplex), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_duplex)
   * [ICoreWebView2PrintSettings2::MediaSize property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_mediasize), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_mediasize)
   * [ICoreWebView2PrintSettings2::PageRanges property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_pageranges), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_pageranges)
   * [ICoreWebView2PrintSettings2::PagesPerSide property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_pagesperside), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_pagesperside)
   * [ICoreWebView2PrintSettings2::PrinterName property (get](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#get_printername), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2printsettings2?view=webview2-1.0.1549-prerelease&preserve-view=true#put_printername)

---

*  Added support for Custom Crash Reporting API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions.IsCustomCrashReportingEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.iscustomcrashreportingenabled?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true)
* [CoreWebView2Environment.FailureReportFolderPath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.failurereportfolderpath?view=webview2-dotnet-1.0.1549-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2environment-failurereportfolderpath)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions.IsCustomCrashReportingEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#iscustomcrashreportingenabled)
* [CoreWebView2Environment.FailureReportFolderPath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1549-prerelease&preserve-view=true#failurereportfolderpath)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2EnvironmentOptions3::IsCustomCrashReportingEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions3?view=webview2-1.0.1549-prerelease&preserve-view=true#get_iscustomcrashreportingenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions3?view=webview2-1.0.1549-prerelease&preserve-view=true#put_iscustomcrashreportingenabled)
* [ICoreWebView2Environment11::FailureReportFolderPath property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2environment11?view=webview2-1.0.1549-prerelease&preserve-view=true#get_failurereportfolderpath)<!--no put-->

---


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed some nullptr issues where now some public APIs which take nullptr as input parameters do not crash the WebView2.

*  Disabled "Open link as Profile" in the WebView2 context menu.

*  Fixed bug where the whole tool bar will be blank when hiding Bookmarks, Search, and PageSelector buttons simultaneously. ([Issue #2866](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2866))

*  Fix post data missing in form submit with control click. ([Issue #2652](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2652))

*  Fixed a bug where the user is not able to get the custom context menu on PDF Viewer. ([Issue #2607](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2607))

*  Fix drag/drop within the WebView2 for composition hosted WebViews.

*  Fixed a bug where the app crashes when trying to move focus to WebView2 when it is disabled.

*  Remove read aloud icon in Address bar in a WebView2 popup window.

*  Fixed an issue where context menu shows unexpected items in WebView2 popup window.


<!-- ====================================================================== -->
## 1.0.1418.22

Release Date: October 31, 2022

[NuGet package for WebView2 SDK 1.0.1418.22](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1418.22)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 107.0.1418.22 or higher.


<!-- ------------------------------ -->
#### Bug fixes

This WebView2 SDK release has the same bug fixes as [Bug fixes for 1.0.1414-prerelease](#bug-fixes-for-101414-prerelease).


<!-- ====================================================================== -->
## 1.0.1466-prerelease

Release Date: October 31, 2022

[NuGet package for WebView2 SDK 1.0.1466-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1466-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 109.0.1466.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
* Added support for creating a shared memory based buffer with a specified size:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2SharedBuffer Class](/dotnet/api/microsoft.web.webview2.core.corewebview2sharedbuffer?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true)
    * `Buffer`
    * `FileMappingHandle`
    * `Size`
    * `Close`
    * `Dispose`
    * `OpenStream`

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2SharedBuffer Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2sharedbuffer?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true)
    * `Buffer`
    * `Size`
    * `Close`
    * `OpenStream`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalSharedBuffer](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsharedbuffer?view=webview2-1.0.1466-prerelease&preserve-view=true)
    * `Close`
    * `get_Buffer`
    * `get_FileMappingHandle`
    * `get_Size`
    * `OpenStream`

---

*  Added support for accessing a shared buffer object from the script of the main frame or `iframe`:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.postsharedbuffertoscript?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true)
* [CoreWebView2Frame.PostSharedBufferToScript Method](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.postsharedbuffertoscript?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true#postsharedbuffertoscript)
* [CoreWebView2Frame.PostSharedBufferToScript Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true#postsharedbuffertoscript)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental18::PostSharedBufferToScript](/microsoft-edge/webview2/reference/win32/icorewebview2experimental18?view=webview2-1.0.1466-prerelease&preserve-view=true#postsharedbuffertoscript)
* [ICoreWebView2ExperimentalFrame4::PostSharedBufferToScript](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe4?view=webview2-1.0.1466-prerelease&preserve-view=true#postsharedbuffertoscript)

---

*  Added support for running JavaScript code from the `JavaScript` parameter in the current top-level document:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2ScriptException Class](/dotnet/api/microsoft.web.webview2.core.corewebview2scriptexception?view=webview2-dotnet-1.0.1466-prerelease&preserve-view=true)
   * `ColumnNumber`
   * `LineNumber`
   * `Message`
   * `Name`
   * `ToJson`

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2ScriptException Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2scriptexception?view=webview2-winrt-1.0.1466-prerelease&preserve-view=true)
   * `ColumnNumber`
   * `LineNumber`
   * `Message`
   * `Name`
   * `ToJson`

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalScriptException](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalscriptexception?view=webview2-1.0.1466-prerelease&preserve-view=true)
   * `get_ColumnNumber`
   * `get_LineNumber`
   * `get_Message`
   * `get_Name`
   * `get_ToJson`

---


<!-- ------------------------------ -->
#### Bug fixes for 1.0.1466-prerelease
<!-- another section links to here -->

*   Fixed a bug in which the custom header title in print settings could be wrong. ([Issue #2093](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2093))

*   Display `AllowedCertificateAuthorities` in `add_ClientCertificateRequested` event as a `Base64` string.  (Runtime-only)  ([Issue #2346](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2346))

*   Fixed a bug in which the default footer URI in print settings is missing. ([Issue #2851](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2851))

*   Fixed a bug that produces a null pointer exception that's related to print settings.  (Runtime-only)  ([Issue #2858](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2858))

*   Fixed a bug that reports navigation failure when redirecting to a server that has been configured with Client Certificate Authentication and when the `WebResourceRequested` event is subscribed to.  (Runtime-only)

*   Fixed an `AddHostObjectToScript` bug in which, when JavaScript calls an async method and then a synchronous method, the async method call might fail.


<!-- ====================================================================== -->
## 1.0.1370.28

Release Date: October 11, 2022

[NuGet package for WebView2 SDK 1.0.1370.28](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1370.28)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 106.0.1370.28 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


<!-- ------------------------------ -->
*  The drag and drop API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController.DragLeave Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.dragleave?view=webview2-dotnet-1.0.1370.28&preserve-view=true#microsoft-web-webview2-core-corewebview2compositioncontroller-dragleave)

##### [WinRT/C#](#tab/winrtcsharp)

* [ICoreWebView2CompositionControllerInterop2.DragEnter Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2?view=webview2-winrt-1.0.1370.28&preserve-view=true#dragenter)
* [ICoreWebView2CompositionControllerInterop2.DragLeave Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2?view=webview2-winrt-1.0.1370.28&preserve-view=true#dragleave)
* [ICoreWebView2CompositionControllerInterop2.DragOver Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2?view=webview2-winrt-1.0.1370.28&preserve-view=true#dragover)
* [ICoreWebView2CompositionControllerInterop2.Drop Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2?view=webview2-winrt-1.0.1370.28&preserve-view=true#drop)
* [CoreWebView2CompositionController.DragLeave Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.1370.28&preserve-view=true#dragleave)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController3::DragEnter](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3?view=webview2-1.0.1370.28&preserve-view=true#dragenter)
* [ICoreWebView2CompositionController3::DragLeave](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3?view=webview2-1.0.1370.28&preserve-view=true#dragleave)
* [ICoreWebView2CompositionController3::DragOver](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3?view=webview2-1.0.1370.28&preserve-view=true#dragover)
* [ICoreWebView2CompositionController3::Drop](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3?view=webview2-1.0.1370.28&preserve-view=true#drop)

---


<!-- ====================================================================== -->
## 1.0.1414-prerelease

Release Date: October 11, 2022

[NuGet package for WebView2 SDK 1.0.1414-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1414-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 107.0.1414.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
*  Added support for the Print API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PrintAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printasync?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
* [CoreWebView2.PrintToPdfStreamAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfstreamasync?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
* [CoreWebView2.ShowPrintUI Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.showprintui?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
* [CoreWebView2PrintSettings Class](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.Collation Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.collation?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.ColorMode Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.colormode?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.Copies Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.copies?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2printsettings-copies)
   * [CoreWebView2PrintSettings.Duplex Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.duplex?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.MediaSize Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.mediasize?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.PageRanges Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.pageranges?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.PagesPerSide Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.pagesperside?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.PrinterName Property](/dotnet/api/microsoft.web.webview2.core.corewebview2printsettings.printername?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PrintAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#printasync)
* [CoreWebView2.PrintToPdfStreamAsync](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#printtopdfstreamasync)
* [CoreWebView2.ShowPrintUI Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#showprintui)
* [CoreWebView2PrintSettings Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true)
   * [CoreWebView2PrintSettings.Collation Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#collation)
   * [CoreWebView2PrintSettings.ColorMode Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#colormode)
   * [CoreWebView2PrintSettings.Copies Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#copies)
   * [CoreWebView2PrintSettings.Duplex Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#duplex)
   * [CoreWebView2PrintSettings.MediaSize Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#mediasize)
   * [CoreWebView2PrintSettings.PageRanges Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#pageranges)
   * [CoreWebView2PrintSettings.PagesPerSide Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#pagesperside)
   * [CoreWebView2PrintSettings.PrinterName Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2printsettings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#printername)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental17::Print](/microsoft-edge/webview2/reference/win32/icorewebview2experimental17?view=webview2-1.0.1414-prerelease&preserve-view=true#print)
* [ICoreWebView2Experimental17::PrintToPdfStream](/microsoft-edge/webview2/reference/win32/icorewebview2experimental17?view=webview2-1.0.1414-prerelease&preserve-view=true#printtopdfstream)
* [ICoreWebView2Experimental17::ShowPrintUI](/microsoft-edge/webview2/reference/win32/icorewebview2experimental17?view=webview2-1.0.1414-prerelease&preserve-view=true#showprintui)
* [ICoreWebView2ExperimentalPrintCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintcompletedhandler?view=webview2-1.0.1414-prerelease&preserve-view=true)
* [ICorewebView2ExperimentalPrintToPdfStreamCompletedHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprinttopdfstreamcompletedhandler?view=webview2-1.0.1414-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalPrintSettings2](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true)
   * [ICoreWebView2ExperimentalPrintSettings2::Collation property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_collation), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_collation)
   * [ICoreWebView2ExperimentalPrintSettings2::ColorMode property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_colormode), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_colormode)
   * [ICoreWebView2ExperimentalPrintSettings2::Copies property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_copies), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_copies)
   * [ICoreWebView2ExperimentalPrintSettings2::Duplex property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_duplex), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_duplex)
   * [ICoreWebView2ExperimentalPrintSettings2::MediaSize property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_mediasize), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_mediasize)
   * [ICoreWebView2ExperimentalPrintSettings2::PageRanges property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_pageranges), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_pageranges)
   * [ICoreWebView2ExperimentalPrintSettings2::PagesPerSide property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_pagesperside), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_pagesperside)
   * [ICoreWebView2ExperimentalPrintSettings2::PrinterName property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_printername), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprintsettings2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_printername)

---

*  Added support for SmartScreen API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Settings.IsReputationCheckingRequired Property](/dotnet/api/microsoft.web.webview2.core.corewebview2settings.isreputationcheckingrequired?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2settings-isreputationcheckingrequired)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Settings.IsReputationCheckingRequired Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#isreputationcheckingrequired)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalSettings7::IsReputationCheckingRequired property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings7?view=webview2-1.0.1414-prerelease&preserve-view=true#get_isreputationcheckingrequired), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings7?view=webview2-1.0.1414-prerelease&preserve-view=true#put_isreputationcheckingrequired)

---

*  Added support for Custom Crash Reporting API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions.IsCustomCrashReportingEnabled Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions.iscustomcrashreportingenabled?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2environmentoptions-iscustomcrashreportingenabled)

* [CoreWebView2Environment.FailureReportFolderPath Property](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.failurereportfolderpath?view=webview2-dotnet-1.0.1414-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2environment-failurereportfolderpath)


##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions.IsCustomCrashReportingEnabled Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#iscustomcrashreportingenabled)
* [CoreWebView2Environment.FailureReportFolderPath Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment?view=webview2-winrt-1.0.1414-prerelease&preserve-view=true#failurereportfolderpath)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalEnvironmentOptions2::IsCustomCrashReportingEnabled property (get](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.1414-prerelease&preserve-view=true#get_iscustomcrashreportingenabled), [put)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions2?view=webview2-1.0.1414-prerelease&preserve-view=true#put_iscustomcrashreportingenabled)
* [ICoreWebView2ExperimentalEnvironment::FailureReportFolderPath property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment?view=webview2-1.0.1414-prerelease&preserve-view=true#get_failurereportfolderpath)<!--no put-->

---


<!-- ------------------------------ -->
#### Bug fixes for 1.0.1414-prerelease
<!-- another section links to here -->

*   Removed three-dot menu with a broken link from the downloads page.  (Runtime-only)  ([Issue #2753](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2753))

*   Fixed a bug in the WebView2 WinRT JS Projection tool (wv2winrt) where C++20 projects failed to compile.  ([Issue #2768](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2768))

*   Fixed a crash which could occur with the WebView2 WinRT API while closing down WebView2 if you subscribed to any events, especially the `CoreWebView2.GetDevToolsEventReceiver` event.  (SDK-only)

*   Fixed a bug where it wasn't possible to dismiss the download popup after minimizing the window.  (Runtime-only)


<!-- ====================================================================== -->
## 1.0.1343.22

Release Date: September 6, 2022

[NuGet package for WebView2 SDK 1.0.1343.22](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1343.22)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 105.0.1343.22 or higher.


<!-- ------------------------------ -->
#### Bug fixes

This WebView2 SDK release has the same bug fixes as [Bug fixes for 1.0.1369-prerelease](#bug-fixes-for-101369-prerelease).


<!-- ====================================================================== -->
## 1.0.1369-prerelease

Release Date: September 6, 2022

[NuGet package for WebView2 SDK 1.0.1369-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1369-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 106.0.1369.0 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


*  The drag and drop API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2CompositionController.DragLeave Method](/dotnet/api/microsoft.web.webview2.core.corewebview2compositioncontroller.dragleave?view=webview2-dotnet-1.0.1369-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2compositioncontroller-dragleave)

##### [WinRT/C#](#tab/winrtcsharp)

* [ICoreWebView2CompositionControllerInterop2.DragEnter Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2?view=webview2-winrt-1.0.1369-prerelease&preserve-view=true#dragenter)
* [ICoreWebView2CompositionControllerInterop2.DragLeave Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2?view=webview2-winrt-1.0.1369-prerelease&preserve-view=true#dragleave)
* [ICoreWebView2CompositionControllerInterop2.DragOver Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2?view=webview2-winrt-1.0.1369-prerelease&preserve-view=true#dragover)
* [ICoreWebView2CompositionControllerInterop2.Drop Method](/microsoft-edge/webview2/reference/winrt/interop/icorewebview2compositioncontrollerinterop2?view=webview2-winrt-1.0.1369-prerelease&preserve-view=true#drop)
* [CoreWebView2CompositionController.DragLeave Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2compositioncontroller?view=webview2-winrt-1.0.1369-prerelease&preserve-view=true#dragleave)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2CompositionController3::DragEnter](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3?view=webview2-1.0.1369-prerelease&preserve-view=true#dragenter)
* [ICoreWebView2CompositionController3::DragLeave](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3?view=webview2-1.0.1369-prerelease&preserve-view=true#dragleave)
* [ICoreWebView2CompositionController3::DragOver](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3?view=webview2-1.0.1369-prerelease&preserve-view=true#dragover)
* [ICoreWebView2CompositionController3::Drop](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller3?view=webview2-1.0.1369-prerelease&preserve-view=true#drop)

---


<!-- ------------------------------ -->
#### Bug fixes for 1.0.1369-prerelease
<!-- another section links to here -->

*  Fixed a bug where WPF apps would crash when windows with WebView2 were closed.  ([Issue #640](https://github.com/MicrosoftEdge/WebView2Feedback/issues/640))

*  Fixed a bug that produced simultaneous WebView creation failure.  (Runtime-only)  ([Issue #2703](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2703))

*  Fixed print settings paper size to support dimensions as small as 0.01 inches.  (Runtime-only)

*  Fixed a bug where the WebView2 print dialog reset the **Scale** setting to **Fit to printable area** every time.  ([Issue #2523](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2523))

*  Fixed a bug in the **wv2winrt** tool where a WinMD file wasn't referenced in some projects.


<!-- ====================================================================== -->
## 1.0.1293.44

Release Date: August 8, 2022

[NuGet package for WebView2 SDK 1.0.1293.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1293.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 104.0.1293.44 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


* The Favicon API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.FaviconChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.faviconchanged?view=webview2-dotnet-1.0.1293.44&preserve-view=true)
* [CoreWebView2.FaviconUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.faviconuri?view=webview2-dotnet-1.0.1293.44&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.FaviconChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1293.44&preserve-view=true#faviconchanged)
* [CoreWebView2.FaviconUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1293.44&preserve-view=true#faviconuri)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_15::FaviconChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_15?view=webview2-1.0.1293.44&preserve-view=true#add_faviconchanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_15?view=webview2-1.0.1293.44&preserve-view=true#remove_faviconchanged)
* [ICoreWebView2_15::FaviconUri property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2_15?view=webview2-1.0.1293.44&preserve-view=true#get_faviconuri)<!--no put-->

---


<!-- ====================================================================== -->
## 1.0.1340-prerelease

Release Date: August 8, 2022

[NuGet package for WebView2 SDK 1.0.1340-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1340-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 105.0.1340.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
*  Added support for `WebResourceRequested` for workers which allows setting filters in order to receive `WebResourceRequested` events for service workers, shared workers, and different origin iframes.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.AddWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.addwebresourcerequestedfilter?view=webview2-dotnet-1.0.1340-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2-addwebresourcerequestedfilter(system-string-microsoft-web-webview2-core-corewebview2webresourcecontext-microsoft-web-webview2-core-corewebview2webresourcerequestsourcekinds))
* [CoreWebView2.RemoveWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.removewebresourcerequestedfilter?view=webview2-dotnet-1.0.1340-prerelease&preserve-view=true#microsoft-web-webview2-core-corewebview2-removewebresourcerequestedfilter(system-string-microsoft-web-webview2-core-corewebview2webresourcecontext-microsoft-web-webview2-core-corewebview2webresourcerequestsourcekinds))
* [CoreWebView2WebResourceRequestedEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2webresourcerequestedeventargs?view=webview2-dotnet-1.0.1340-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.AddWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1340-prerelease&preserve-view=true#addwebresourcerequestedfilter)
* [CoreWebView2.RemoveWebResourceRequestedFilter(uri, resourceContext, requestSourceKinds) Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1340-prerelease&preserve-view=true#removewebresourcerequestedfilter)
* [CoreWebView2WebResourceRequestedEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2webresourcerequestedeventargs?view=webview2-winrt-1.0.1340-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Experimental16.AddWebResourceRequestedFilterWithRequestSourceKinds](/microsoft-edge/webview2/reference/win32/icorewebview2experimental16?view=webview2-1.0.1340-prerelease&preserve-view=true#addwebresourcerequestedfilterwithrequestsourcekinds)
* [ICoreWebView2Experimental16.RemoveWebResourceRequestedFilterWithRequestSourceKinds](/microsoft-edge/webview2/reference/win32/icorewebview2experimental16?view=webview2-1.0.1340-prerelease&preserve-view=true#removewebresourcerequestedfilterwithrequestsourcekinds)
* [ICoreWebView2ExperimentalWebResourceRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourcerequestedeventargs?view=webview2-1.0.1340-prerelease&preserve-view=true)

---

*  Added support for custom scheme registration which allows WebView2 apps to be able to handle `WebResourceRequested` event for requests with the specified scheme and be able to navigate the WebView2 control to the custom scheme.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2EnvironmentOptions Class](/dotnet/api/microsoft.web.webview2.core.corewebview2environmentoptions?view=webview2-dotnet-1.0.1340-prerelease&preserve-view=true)
* [CoreWebView2CustomSchemeRegistration Class](/dotnet/api/microsoft.web.webview2.core.corewebview2customschemeregistration?view=webview2-dotnet-1.0.1340-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2EnvironmentOptions Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environmentoptions?view=webview2-winrt-1.0.1340-prerelease&preserve-view=true)
* [CoreWebView2CustomSchemeRegistration Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2customschemeregistration?view=webview2-winrt-1.0.1340-prerelease&preserve-view=true)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ExperimentalEnvironmentOptions](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.1340-prerelease&preserve-view=true)
* [ICoreWebView2ExperimentalCustomSchemeRegistration](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcustomschemeregistration?view=webview2-1.0.1340-prerelease&preserve-view=true)

---


<!-- ------------------------------ -->
#### Bug fixes

*   Added the ability for developers to explicitly specify the path from which to load the WebView2Loader.dll. ([Issue #767](https://github.com/MicrosoftEdge/WebView2Feedback/issues/767))

*   Added useful error messages when using `CallDevToolsProtocolMethod`. ([Issue #1609](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1609))

*   Fixed a bug in finding and loading the `WebView2Loader.dll` in some .NET apps. ([Issue #2372](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2372))

*   Fixed a bug where `DownloadStarting` event was not fired when retrying a download. ([Issue #2489](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2489))

*   Fixed an issue in service worker caching if the path was too long. ([Issue #1900](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1900))

*   Improved performance for **wv2winrt** `IMap` and `IMapView` projections into JavaScript.

*   Adding support for HWND_MESSAGE to be used as WebView2 parent window to support headless scenarios.  ([Issue #202](https://github.com/MicrosoftEdge/WebView2Feedback/issues/202))

*   Improved handling of running as admin user apps.

*   Fixed online/offline status and notifications when using WebView2 in UWP apps.

*   GDI scaling can now be enabled for WebView2.  WebView2 will respect the GDI scaling setting of the hosting application without additional work needed from the app.  ([Issue #1700](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1700))

*   Fixed a bug where focus is not returned to the application after closing the find bar for windowed mode. ([Issue #1225](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1225))


<!-- ====================================================================== -->
## 1.0.1264.42

Release Date: July 4, 2022

[NuGet package for WebView2 SDK 1.0.1264.42](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1264.42)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 103.0.1264.42 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


*  Added `ContextMenuRequested`API to enable host app to create or modify their own context menu.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.ContextMenuRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contextmenurequested?view=webview2-dotnet-1.0.1264.42&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.ContextMenuRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1264.42&preserve-view=true#contextmenurequested)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_11::add_ContextMenuRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_11?view=webview2-1.0.1264.42&preserve-view=true#add_contextmenurequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_11?view=webview2-1.0.1264.42&preserve-view=true#remove_contextmenurequested)

---


<!-- ====================================================================== -->
## 1.0.1305-prerelease

Release Date: July 4, 2022

[NuGet package for WebView2 SDK 1.0.1305-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1305-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 105.0.1305.0 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


* The Favicon API:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.FaviconChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.faviconchanged?view=webview2-dotnet-1.0.1305-prerelease&preserve-view=true)
* [CoreWebView2.FaviconUri Property](/dotnet/api/microsoft.web.webview2.core.corewebview2.faviconuri?view=webview2-dotnet-1.0.1305-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.FaviconChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1305-prerelease&preserve-view=true#faviconchanged)
* [CoreWebView2.FaviconUri Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1305-prerelease&preserve-view=true#faviconuri)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_15::FaviconChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_15?view=webview2-1.0.1305-prerelease&preserve-view=true#add_faviconchanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_15?view=webview2-1.0.1305-prerelease&preserve-view=true#remove_faviconchanged)
* [ICoreWebView2_15::FaviconUri property (get)](/microsoft-edge/webview2/reference/win32/icorewebview2_15?view=webview2-1.0.1305-prerelease&preserve-view=true#get_faviconuri)<!--no put-->

---


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed an issue where `PrintToPdfAsync` may hang for long time. ([Issue #1974](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1974))

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.PrintToPdfAsync Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.printtopdfasync?view=webview2-dotnet-1.0.1305-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.PrintToPdfAsync Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2?view=webview2-winrt-1.0.1305-prerelease&preserve-view=true#printtopdfasync)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_7::PrintToPdf](/microsoft-edge/webview2/reference/win32/icorewebview2_7?view=webview2-1.0.1305-prerelease&preserve-view=true#printtopdf)

---

* Fixed regression where WebView2 would steal focus from the app when the WebView2 was made visible. ([Issue #862](https://github.com/MicrosoftEdge/WebView2Feedback/issues/862))


<!-- ====================================================================== -->
## 1.0.1245.22

Release Date: June 14, 2022

[NuGet package for WebView2 SDK 1.0.1245.22](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1245.22)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 102.0.1245.22 or higher.

There is no corresponding prerelease package.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


* The [Server Certificate API](/microsoft-edge/webview2/reference/win32/icorewebview2_14?view=webview2-1.0.1245.22&preserve-view=true) which provides an option to trust the server's TLS certificate at the application level. It renders the page without prompting the user about TLS or providing the ability to cancel the web request.

*  The [ClearBrowsingData API](/microsoft-edge/webview2/reference/win32/icorewebview2profile2?view=webview2-1.0.1245.22&preserve-view=true) which allows developers to programmatically clear specific data types for a duration:
   * `ClearBrowsingData`
   * `ClearBrowsingDataAll`
   * `ClearBrowsingDataInTimeRange`

*  The [HttpStatusCode API](/microsoft-edge/webview2/reference/win32/icorewebview2navigationcompletedeventargs2?view=webview2-1.0.1245.22&preserve-view=true) which provides the HTTP status code for navigation requests in `NavigationCompleted` events.


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed an issue with the on-screen keyboard in which the keyboard doesn't reappear after it's closed by clicking the **X** button. Also fixed an issue in which the keyboard gets dismissed when users switch from one edit control to another within WebView2. ([Issue #460](https://github.com/MicrosoftEdge/WebView2Feedback/issues/460))

*  Fixed an issue when using a proxy from `AddHostObjectToScript` in script.  If you call `setHostProperty` and it failed, you could have received an internal error message structure rather than a JavaScript Error object.

*  Fixed regression where WebView2 would steal focus from the app when the WebView2 was made visible.  ([Issue #862](https://github.com/MicrosoftEdge/WebView2Feedback/issues/862))

*  Fixed a bug that caused increased memory usage with `WebResourceRequested` events using large data.  ([Issue #2171](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2171))

*  Fixed `StatusBarTextChanged` regression. The [StatusBarText API](/microsoft-edge/webview2/reference/win32/icorewebview2_12?view=webview2-1.0.1245.22&preserve-view=true) was made compatible with previous versions again. ([Issue #2414](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2414))

*  Better support for apps running as admin. ([Issue #2356](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2356))


<!-- ====================================================================== -->
## 1.0.1210.39

Release Date: May 9, 2022

[NuGet package for WebView2 SDK 1.0.1210.39](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1210.39)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 101.0.1210.39 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

* Support for [multiple user profiles](/microsoft-edge/webview2/reference/win32/icorewebview2environment10?view=webview2-1.0.1210.39&preserve-view=true) in WebView2.

* [Theming API](/microsoft-edge/webview2/reference/win32/icorewebview2profile?view=webview2-1.0.1210.39&preserve-view=true) which provides a way to customize the WebView2 color theme as `light`, `dark`, or `system`.

* [Default Download API](/microsoft-edge/webview2/reference/win32/icorewebview2profile?view=webview2-1.0.1210.39&preserve-view=true) which provides a way to customize the default download location.


<!-- ====================================================================== -->
## 1.0.1248-prerelease

Release Date: May 9, 2022

[NuGet package for WebView2 SDK 1.0.1248-prelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1248-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 102.0.1248.0 or higher.


<!-- ------------------------------ -->
#### General features

* Added support for WinRT Object projection into JavaScript by adding WinRT JS Projection tool (**wv2winrt**) in NuGet package. For instructions about using the WinRT JS Projection tool see [Call native-side WinRT code from web-side code](/microsoft-edge/webview2/how-to/winrt-from-js).


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

* The [Server Certificate API](/microsoft-edge/webview2/reference/win32/icorewebview2_14?view=webview2-1.0.1248-prerelease&preserve-view=true) which provides an option to trust the server's TLS certificate at the application level and render the page without prompting the user about TLS or providing the ability to cancel the web request.

* The [ClearBrowsingData API](/microsoft-edge/webview2/reference/win32/icorewebview2profile2?view=webview2-1.0.1248-prerelease&preserve-view=true) which allows developers to programmatically clear specific data types for a duration:
   * `clearBrowsingDataInTimeRange`
   * `clearBrowsingDataAll`


<!-- ------------------------------ -->
#### Bug fixes

* Fixed an unavoidable crash that occurred in the WPF control's `OnWindowPositionChanged` event. ([Issue #1531](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1531))

* Fixed the issue with `CoreWebView2EnvironmentOptions.ExclusiveUserDataFolderAccess` not working properly in .NET SDK. ([Issue #2363](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2363))

* Fixed a runtime regression that caused some Office Add-ins which use host objects to crash during operations that previously worked. ([Issue #2337](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2337))

* Fixed an issue where WebView2 content can become blurry when moving between monitors with different scaling.

* Fixed a regression to make sure that WebView2 creation fails quickly with `HRESULT_FROM_WIN32(ERROR_INVALID_STATE)` instead of time out.

* Fixed a bug where changes from Chromium broke WebView2 background color.


<!-- ====================================================================== -->
## 1.0.1185.39

Release Date: April 12, 2022

[NuGet package for WebView2 SDK 1.0.1185.39](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1185.39)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 100.0.1185.39 or higher.


<!-- ------------------------------ -->
#### General features

* Renamed `ICoreWebView2Certificate` to `ICoreWebView2ClientCertificate`.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

* The [CallDevToolsProtocolMethodForSession API](/microsoft-edge/webview2/reference/win32/icorewebview2_11?view=webview2-1.0.1185.39&preserve-view=true#calldevtoolsprotocolmethodforsession) that supports `sessionId` for CDP method calls.

* The [StatusBarText API](/microsoft-edge/webview2/reference/win32/icorewebview2_12?view=webview2-1.0.1185.39&preserve-view=true):
    *  `add_StatusBarTextChanged`
    *  `get_StatusBarText`
    *  `remove_StatusBarTextChanged`

* The [AllowExternalDrop API](/microsoft-edge/webview2/reference/win32/icorewebview2controller4?view=webview2-1.0.1185.39&preserve-view=true) that supports enable/disable for external drop operations.

* The [HiddenPdfToolbarItems API](/microsoft-edge/webview2/reference/win32/icorewebview2settings7?view=webview2-1.0.1185.39&preserve-view=true) is available to customize PDF toolbar items.

* The [ExclusiveUserDataFolderAccess API](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions2?view=webview2-1.0.1185.39&preserve-view=true) allows control of whether or not other processes can create WebView2 from `WebView2Environment` created with the same user data folder and therefore sharing the same WebView browser process instance.

* The [permission requested support for iframes](/microsoft-edge/webview2/reference/win32/icorewebview2frame3?view=webview2-1.0.1185.39&preserve-view=true):
    * `add_PermissionRequested`
    * `remove_PermissionRequested`


<!-- ====================================================================== -->
## 1.0.1222-prerelease

Release Date: April 12, 2022

[NuGet package for WebView2 SDK 1.0.1222-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1222-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 102.0.1222.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs for 1.0.1222-prerelease
<!-- another section links to here -->

The following Experimental APIs have been added in this Prerelease SDK.

* Added the [Server Certificate API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental15?view=webview2-1.0.1222-prerelease&preserve-view=true) which provides an option to trust the server's TLS certificate at the application level and render the page without prompting the user about TLS or providing the ability to cancel the web request.

* Added the [Favicon API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental12?view=webview2-1.0.1222-prerelease&preserve-view=true) which provides a way to get the favicon when it changes or is set at a website.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

* Support for [multiple user profiles](/microsoft-edge/webview2/reference/win32/icorewebview2environment10?view=webview2-1.0.1222-prerelease&preserve-view=true) in WebView2.

* [Theming API](/microsoft-edge/webview2/reference/win32/icorewebview2profile?view=webview2-1.0.1222-prerelease&viewFallbackFrom=webview2-1.0.1185.39&preserve-view=true) which provides a way to customize the WebView2 color theme as `light`, `dark`, or `system`.

* [Default Download API](/microsoft-edge/webview2/reference/win32/icorewebview2profile?view=webview2-1.0.1222-prerelease&viewFallbackFrom=webview2-1.0.1185.39&preserve-view=true) which provides a way to customize the default download location.


<!-- ------------------------------ -->
#### Bug fixes

* Fixed `ZoomFactor` issue that incorrectly sets `ZoomFactor` value to the maximum value when it is out of bounds.

* Fixed an issue in which WebView2 content can become blurry when moving between monitors with different scaling.

* Fixed a bug where `MouseEvent.movementX` and `MouseEvent.movementY` will always be **0** in visual hosting mode. ([Issue #2220](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2220))

* Fixed log in issue caused by a password regression in WebView2. ([Issue #2291](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2291))

* Fixed a failure caused when a user opens a new app window and the web page does not have a navigation entry assigned.

* Made a runtime change to fix a bug in WinUI 2 (UWP) in which owned windows were not showing up.

* Fixed `ICoreWebView2Frame::PostWebMessage` functionality after source update. ([Issue #2267](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2267))


<!-- ====================================================================== -->
## 1.0.1150.38

Release Date: March 10, 2022

[NuGet package for WebView2 SDK 1.0.1150.38](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1150.38)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 99.0.1150.38 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

*   The [BasicAuthentication API](/microsoft-edge/webview2/reference/win32/icorewebview2_10?view=webview2-1.0.1150.38&preserve-view=true) that enables developers to handle Basic HTTP Authentication request and response.


<!-- ====================================================================== -->
## 1.0.1189-prerelease

Release Date: March 10, 2022

[NuGet package for WebView2 SDK 1.0.1189-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1189-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 100.0.1189.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.

*   Added [ContextMenuRequested API](/microsoft-edge/webview2/reference/win32/icorewebview2_11?view=webview2-1.0.1189-prerelease&preserve-view=true) to enable host app to create or modify their own context menu.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*    The [CallDevToolsProtocolMethodForSession API](/microsoft-edge/webview2/reference/win32/icorewebview2_11?view=webview2-1.0.1189-prerelease&preserve-view=true#calldevtoolsprotocolmethodforsession) that supports sessionId for CDP method calls.
*   The [StatusBarText API](/microsoft-edge/webview2/reference/win32/icorewebview2_12?view=webview2-1.0.1189-prerelease&preserve-view=true):
    *  `add_StatusBarTextChanged`
    *  `get_StatusBarText`
    *  `remove_StatusBarTextChanged`
*   The [AllowExternalDrop API](/microsoft-edge/webview2/reference/win32/icorewebview2controller4?view=webview2-1.0.1189-prerelease&preserve-view=true) that supports enable/disable external drop.
*    The [HiddenPdfToolbarItems API](/microsoft-edge/webview2/reference/win32/icorewebview2settings7?view=webview2-1.0.1189-prerelease&preserve-view=true) is available to customize the PDF toolbar items.
*  The [ExclusiveUserDataFolderAccess API](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions2?view=webview2-1.0.1189-prerelease&preserve-view=true) allows control of whether or not other processes can create WebView2 using the same user data folder.


<!-- ------------------------------ -->
#### Bug fixes

*   Fixed a bug where WebView2 app gets stuck occasionally with UWP.

*   Fixed a bug where focus is not returned to the application after closing the **Find** bar for windowed mode.

*   Fixed bug in which the `DocumentTitleChanged` event was not being raised for backward/forward navigation in single-page apps.

*   Fixed bug in which the `HistoryChanged` event was not being raised for Iframe navigation.


<!-- ====================================================================== -->
## 1.0.1108.44

Release Date: February 6, 2022

[NuGet package for WebView2 SDK 1.0.1108.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1108.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 98.0.1108.44 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

*  The [AdditionalAllowedFrameAncestors API](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs2?view=webview2-1.0.1108.44&preserve-view=true) that enable developers to provide additional allowed frame ancestors.

*  The [ProcessInfo APIs](/microsoft-edge/webview2/reference/win32/icorewebview2processinfo?view=webview2-1.0.1108.44&preserve-view=true) provide more information about WebView2 processes and process collections.

*  New [APIs for iframes](/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1108.44&preserve-view=true):
   *  `add_NavigationStarting`
   *  `remove_NavigationStarting`
   *  `add_ContentLoading`
   *  `remove_ContentLoading`
   *  `add_NavigationCompleted`
   *  `remove_NavigationCompleted`
   *  `add_DOMContentLoaded`
   *  `remove_DOMContentLoaded`
   *  `ExecuteScript`
   *  `PostWebMessageAsJson`
   *  `PostWebMessageAsString`
   *  `add_WebMessageReceived`
   *  `remove_WebMessageReceived`


<!-- ====================================================================== -->
## 1.0.1158-prerelease

Release Date: February 6, 2022

[NuGet package for WebView2 SDK 1.0.1158-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1158-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 100.0.1158.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.

*  Added [Status bar API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental13?view=webview2-1.0.1158-prerelease&preserve-view=true) to provide info when webiew is showing status message, URL, or empty string.

*  Added [CDP API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental14?view=webview2-1.0.1158-prerelease&preserve-view=true) to provide possibility for developers have multiple `DevToolsProtocol` targets in WebView2.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  Rename ICoreWebView2ClientCertificate to [ICoreWebView2Certificate](/microsoft-edge/webview2/reference/win32/icorewebview2certificate?view=webview2-1.0.1158-prerelease&preserve-view=true).
*  New [APIs for iframes](/microsoft-edge/webview2/reference/win32/icorewebview2frame3?view=webview2-1.0.1158-prerelease&preserve-view=true):
   *  `add_PermissionRequested`
   *  `remove_PermissionRequested`


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed an issue causing erroneous warnings in the Visual Studio Error List window.  ([Issue #1722](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1722))

*  Fixed a bug where NewWindowRequested was not getting raised when opening PDF downloads.

*  Resolved a bug in WinUI 3 where select dropdowns would not show up.  ([Issue #1693](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1693))

*  Added the ability to toggle WebView2 mute state, even when there is no audio playing.


<!-- ====================================================================== -->
## 1.0.1072.54

Release Date: January 13, 2022

[NuGet package for WebView2 SDK 1.0.1072.54](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1072.54)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 97.0.1072.54 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

*  The [Media API](/microsoft-edge/webview2/reference/win32/icorewebview2_8?view=webview2-1.0.1072.54&preserve-view=true#summary) that enables developers to mute/unmute media within WebView2.

*  The [Download Positioning and Anchoring API](/microsoft-edge/webview2/reference/win32/icorewebview2_9?view=webview2-1.0.1072.54&preserve-view=true) enables:
   *  Changing the position of the download dialog, relative to the WebView2 bounds.  You can anchor the download dialog to the **Download** button, instead of the default position, which is the top-right corner.
   *  Programmatically open and close the default download dialog.
   *  Making changes in response to the dialog opening and closing.


<!-- ====================================================================== -->
## 1.0.1133-prerelease

Release Date: January 13, 2022

[NuGet package for WebView2 SDK 1.0.1133-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1133-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 99.0.1133.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.

*  Added support for [theming](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile2?view=webview2-1.0.1133-prerelease&preserve-view=true) (overall color scheme - light, dark, system) of WebView2.

*  Added a way to set [default download path](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile3?view=webview2-1.0.1133-prerelease&preserve-view=true).

*  Added support for [clearing browser data](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprofile4?view=webview2-1.0.1133-prerelease&preserve-view=true).

*  Added [permission requested](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe3?view=webview2-1.0.1133-prerelease&preserve-view=true) support for iframes.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  New [APIs for iframes](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe2?view=webview2-1.0.1133-prerelease&preserve-view=true):
   *  `PostWebMessageAsJson`
   *  `PostWebMessageAsString`
   *  `add_WebMessageReceived`
   *  `remove_WebMessageReceived`
*  The ProcessInfo APIs provides more information about WebView2 [processes](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessinfo?view=webview2-1.0.1133-prerelease&preserve-view=true) and [process collections](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessinfocollection?view=webview2-1.0.1133-prerelease&preserve-view=true).
*  The [HTTP Authentication API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental10?view=webview2-1.0.1133-prerelease&preserve-view=true).


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed a bug that prevented `Set-Cookies` header from showing up in the `WebResourceResponseReceived` event.

*  Resolved a bug where pop-ups and owned windows would jump to a different position before closing instead of closing
along with the app window. This bug was only active for a very short window of time.

*  Fixed focus issue after closing file picker dialog.

*  Fixed bug where Find on Page UI visibility did not change with WebView2 visibility.

*  Fixed bug where `GetAvailableBrowserVersionString()` fails to locate/load `WebView2Loader.dll`. ([Issue #1236](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1236))

*  Fixed size and position of the new window created with `window.open` when `NewWindowRequested` event was not
handled. ([Issue #1343](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1343))

*  Fixed bug where mini menu was still displaying on selected text when context menus were disabled. This change is Runtime-specific. ([Issue #1345](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1345))

*  Fixed bug where focus returns to wrong location after switching apps in WinForms.


<!-- ====================================================================== -->
## 1.0.1083-prerelease

Release Date: November 29, 2021

[NuGet package for WebView2 SDK 1.0.1083-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1083-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 97.0.1083.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.

* Added the following [APIs for iframes](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe2?view=webview2-1.0.1083-prerelease&preserve-view=true) in WebView2:
   *  `PostWebMessageAsJson`
   *  `PostWebMessageAsString`
   *  `add_WebMessageReceived`
   *  `remove_WebMessageReceived`

* Added ProcessInfo APIs to provide more information about WebView2 [processes](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessinfo?view=webview2-1.0.1083-prerelease&preserve-view=true) and [process collections](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprocessinfocollection?view=webview2-1.0.1083-prerelease&preserve-view=true).


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  The [Media API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental9?view=webview2-1.0.1083-prerelease&preserve-view=true#summary) that enables developers to mute/unmute media within WebView2.
*  The [Download Positioning and Anchoring API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental11?view=webview2-1.0.1083-prerelease&preserve-view=true).  This API enables:
   *  Changing the position of the download dialog, relative to the WebView2 bounds.  You can anchor the download dialog to the **Download** button, instead of the default position, which is the top-right corner.
   *  Programmatically opening and closing the default download dialog.
   *  Making changes in response to the dialog opening and closing.


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed a focus issue after closing the file picker dialog.

*  Fixed a bug where WebView2 doesn't receive spatial input on initial launch.

*  Fixed an issue that prevented single sign-on in WebView2.

*  Resolved a bug where the download dialog was not moving with the window on WPF and WinForms.

*  Updated compatible command line check to prevent needing a version check for optional switches.

*  Fixed an error that was causing "Microsoft Edge" branding to appear in the accessibility tree.


<!-- ====================================================================== -->
## 1.0.1054.31

Release Date: November 29, 2021

[NuGet package for WebView2 SDK 1.0.1054.31](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1054.31)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 96.0.1054.31 or higher.


<!-- ------------------------------ -->
#### Bug fixes

*  General reliability fixes.

*  Turned off the Control-flow Enforcement Technology (CET) Shadow Stack feature for v96 WebView2 Runtime.

*  Fixed an issue that was causing slow startup times when launching in a .NET single-file application. ([Issue #1909](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1909))

*  Fixed a crash caused by Microsoft Edge browser policies getting incorrectly applied to WebView2 as well. ([Issue #1860](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1860))

*  Fixed a crash that occurred when a pop-up window with a download dialog was closed. ([Issue #1765](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1765)) & ([Issue #1723](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1723))


<!-- ====================================================================== -->
## 1.0.1056-prerelease

Release Date: October 29, 2021

[NuGet package for WebView2 SDK 1.0.1056-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1056-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 97.0.1056.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.


<!-- ---------- -->
*  The [Download Positioning and Anchoring API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental11?view=webview2-1.0.1056-prerelease&preserve-view=true).  This API enables:
   *  Changing the position of the download dialog, relative to the WebView2 bounds.  You can anchor the download dialog to the **Download** button, instead of the default position, which is the top-right corner.
   *  Programmatically opening and closing the default download dialog.
   *  Making changes in response to the dialog opening and closing.


<!-- ---------- -->
*  The [HTTP Authentication API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental10?view=webview2-1.0.1056-prerelease&preserve-view=true).


<!-- ------------------------------ -->
#### Bug fixes

*  General reliability improvements.

*  The real process exit code is now provided as `ExitCode` in `ICoreWebView2ProcessFailedEventArgs2` for `COREWEBVIEW2_PROCESS_FAILED_KIND_BROWSER_PROCESS_EXITED` process failure.

*  The `--js-flags` switch is now honored in the `AdditionalBrowserArguments` that are provided in `CoreWebView2EnvironmentOptions`.

*  Fixed access to the `name` property for host objects in JavaScript. ([Issue #641](https://github.com/MicrosoftEdge/WebView2Feedback/issues/641))

*  Fixed an `InvalidCastException` in the WPF control when it's implicitly initialized prior to the event loop starting. ([Issue #1577](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1577))


<!-- ====================================================================== -->
## 1.0.1020.30

Release Date: October 25, 2021

[NuGet package for WebView2 SDK 1.0.1020.30](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1020.30)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 95.0.1020.30 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

*  [PrintToPdf API](/microsoft-edge/webview2/reference/win32/icorewebview2_7?view=webview2-1.0.1020.30&preserve-view=true#printtopdf).


<!-- ------------------------------ -->
#### Bug fixes

*  Updated `EnsureCoreWebView2Async` to not throw exceptions when the WPF source property is set. ([Issue #1781](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1781))

*  Fixed a bug where WebView2 crashes after interacting with multiple windows that show a download UI. ([Issue #1723](https://github.com/MicrosoftEdge/WebView2Feedback/issues/1723))


<!-- ====================================================================== -->
## 1.0.992.28

Release Date: September 27, 2021

[NuGet package for WebView2 SDK 1.0.992.28](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.992.28)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 94.0.992.31 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

*  [OpenTaskManagerWindow API](/microsoft-edge/webview2/reference/win32/icorewebview2_6?view=webview2-1.0.992.28&preserve-view=true#summary).
*  [isSwipeNavigationEnabled property](/microsoft-edge/webview2/reference/win32/icorewebview2settings6?view=webview2-1.0.992.28&preserve-view=true#summary).
*  [BrowserProcessExited API](/microsoft-edge/webview2/reference/win32/icorewebview2browserprocessexitedeventargs?view=webview2-1.0.992.28&preserve-view=true#summary).
*  [get_Name property](/microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs2?view=webview2-1.0.992.28#get_name&preserve-view=true#summary) on `ICoreWebView2NewWindowRequestedEventArgs2` interface.


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed missing WebView2 DLLs (which led to initialization failure) when `PlatformTarget` isn't set in the user's .NET project. ([Issue #1061](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1061))


<!-- ====================================================================== -->
## 1.0.1018-prerelease

Release Date: September 20, 2021

[NuGet package for WebView2 SDK 1.0.1018-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1018-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 95.0.1018.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.

*  Added a [media API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental9?view=webview2-1.0.1018-prerelease&preserve-view=true#summary) that enables developers to mute/unmute media within WebView2.

*  Added support for [multiple user profiles](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment8?view=webview2-1.0.1018-prerelease&preserve-view=true) with WebView2.


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed a bug where WebView2 stops rendering when the app is spanning monitors and the monitor scale changes.

*  Fixed a bug where closing the download UI crashes WebView2 when multiple download windows are open.  ([Issue #1723](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1723))

*  Fixed a build/initialization error when PlatformTarget isn't set in the user's .NET project.  ([Issue #730](https://github.com/MicrosoftEdge/WebViewFeedback/issues/730) and [Issue #1548](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1548))


<!-- ====================================================================== -->
## 1.0.1010-prerelease

Release Date: September 14, 2021

[NuGet package for WebView2 SDK 1.0.1010-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1010-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 95.0.1010.0 or higher.


<!-- ------------------------------ -->
#### General features

*  WebView2 performance improvements.
*  Reliability fixes.  ([Issue #1605](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1605) and [Issue #1678](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1678))
*  Added performance improvements during startup and when the host app is in the foreground.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.

*  Removed silent failures by using `EnsureCoreWebView2Async`, which throws an `ArgumentException` when called multiple times with incompatible parameters.

*  Changed default handling of the [UserDataFolder](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment5?view=webview2-1.0.1010-prerelease&preserve-view=true#get_userdatafolder) property in the environment object.

   > [!CAUTION]
   > **Breaking Change**:  The default handling for the user data folder, if the developer doesn't specify where to put it, will be changing.  See [Announcement: User directory folder default handling updates](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1410).

*  Added [navigation & script APIs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe?view=webview2-1.0.1010-prerelease&preserve-view=true) for iframes.

*  Added [MemoryUsageTargetLevel](/microsoft-edge/webview2/reference/win32/icorewebview2experimental5?view=webview2-1.0.1010-prerelease&preserve-view=true) which allows developers to specify memory consumption levels, such as low, or normal.

*  Added [ExclusiveUserDataFolderAccess](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.1010-prerelease&preserve-view=true) to environment options.

*  Added [HiddenPdfToolbarItems](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings6?view=webview2-1.0.1010-prerelease&preserve-view=true) to customize PDF toolbar items.

*  Added [PrintToPdf](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprinttopdfcompletedhandler?view=webview2-1.0.1010-prerelease&preserve-view=true), which allows printing the current page to PDF. Also, you can use optional custom settings with this new API.
*  Added [AllowExternalDrop](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller3?view=webview2-1.0.1010-prerelease&preserve-view=true) property to allow the dragging and dropping of objects from outside a WebView2 control into it.

*  Added [ContextMenu APIs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem?view=webview2-1.0.1010-prerelease&preserve-view=true) which allow customization of the WebView2 context menu.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  `IsSwipeNavigationEnabled`
*  `BrowserProcessExited`
*  `OpenBrowserTaskManager`


<!-- ------------------------------ -->
#### Bug fixes

*  Improved how host objects exceptions are caught in your JavaScript code.

*  Replaced WebView2 icon with a generic icon in DevTools windows.

*  Turn on the Tab screen sharing option when `MediaDevices.getDisplayMedia()` is used. ([Issue #1566](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1566))

*  Fixed a bug in the Client Certificate API, when the correct certificate was not selected. This is a Runtime change. ([Issue #1666](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1666))

*  Fixed bug where `window.chrome.webview` was unavailable in new windows in the same parent domain. This change is Runtime-specific. ([Issue #1144](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1144))

*  Fixed a bug where dropdown menus or lists were displayed behind the window that has focus. ([Issue #411](https://github.com/MicrosoftEdge/WebViewFeedback/issues/411))

*  Fixed focus issues when using `put_IsVisible(false)`. ([Issue #238](https://github.com/MicrosoftEdge/WebViewFeedback/issues/238))

*  Fixed a bug to apply `SetVirtualHostNameToFolderMapping` to pop-up windows.

*  Fixed bugs where an `IDispatch` objects were returned as `IUnknown`.


<!-- ====================================================================== -->
## 1.0.961.33

Release Date: September 8, 2021

[NuGet package for WebView2 SDK 1.0.961.33](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.961.33)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 93.0.961.44 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

*  [Client Certificate API](/microsoft-edge/webview2/reference/win32/icorewebview2_5?view=webview2-1.0.961.33&preserve-view=true#add_clientcertificaterequested).


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed a bug that caused `ERR_SSL_CLIENT_AUTH_CERT_NEEDED` errors. This is a Runtime change.

*  Fixed a bug that special browser keys like **Refresh**, **Home**, **Back**, and so on can't be turned off using `AreBrowserAcceleratorKeysEnabled`. This change is Runtime-specific.

*  Fixed a bug where the transparent background color isn't rendered.

*  Fixed a bug that caused a white flicker when loading WebView2.

*  Fixed a bug in WebView2 .NET controls where WebView2 windows were blank when created in the background. ([Issue #1077](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1077))

*  Fixed a bug where settings were not updated when the user navigated to or a new window displayed `about:blank` pages. This is a Runtime change.


<!-- ====================================================================== -->
## 1.0.955-prerelease

Release Date: July 26, 2021

[NuGet package for WebView2 SDK 1.0.955-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.955-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 93.0.967.0 or higher.


<!-- ------------------------------ -->
#### General features

*  WebView2 performance improvements.
*  Added partial Event Tracing for Windows (ETW) support.
*  Removed Microsoft branding from `edge://history`.
*  New default Download UI.


<!-- ------------------------------ -->
#### Experimental APIs

*  Added [OpenTaskManagerWindow](/microsoft-edge/webview2/reference/win32/icorewebview2experimental4?view=webview2-1.0.955-prerelease&preserve-view=true#opentaskmanagerwindow) to launch a WebView2 browser task manager.

*  Added [NewWindowRequestedEventArgs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnewwindowrequestedeventargs?view=webview2-1.0.955-prerelease&preserve-view=true#get_name).

*  Added support for virtual host name mapping to work with service workers.

*  Added [HiddenPdfToolbarItems](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings6?view=webview2-1.0.955-prerelease&preserve-view=true#get_hiddenpdftoolbaritems) to customize the PDF toolbar items.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  [add_ClientCertificateRequested](/microsoft-edge/webview2/reference/win32/icorewebview2_5?view=webview2-1.0.955-prerelease&preserve-view=true#add_clientcertificaterequested)


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed bug that broke the `edge://downloads` and `edge://history` pages. This change is Runtime-specific.

*  Fixed bugs to improve reliability in the WebView2Loader.dll.

*  Fixed bug in which `NewWindowRequested` event handler launched two windows when handling links that use `target=_blank`.

*  Fixed a bug in WebView2 visual hosting that flickered before startup.

*  Fixed bug when `add_WebResourceRequested` didn't work on WebView2 controls created using `add_NewWindowRequested`. ([Issue #616](https://github.com/MicrosoftEdge/WebViewFeedback/issues/616))

*  Allow the host app to set foreground on a different application in response to events including `NavigationStarting`, `AddHostObjectToScript` methods, `WebMessageReceived`, and `NewWindowRequested`. ([Issue #1092](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1092))

*  Fix bug to trigger the `PermissionRequested` event for the microphone. This change is Runtime-specific.([Issue #1462](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1462))

*  Fixed bug when `ExecuteScriptAsync` blocked after several successful runs. This change is Runtime-specific. ([Issue #1348](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1348))

*  Fixed bug preventing non-ASCII file names from being used in `ResultFilePath` in `DownloadStartingEventArgs`. ([Issue #1428](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1428))

*  Fixed bug where the title bar on the default pop-up wasn't displayed completely. This change is Runtime-specific. ([Issue #1016](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1016))


<!-- ------------------------------ -->
#### .NET


<!-- ---------- -->
###### Bug fixes

*  Fixed an issue in WebView2 .NET API reference documentation that caused only the first exception to be displayed.

*  .NET core libraries are now built in release mode. To debug, ensure you clear the **Just my code** checkbox.

*  Fixed a bug that crashed WebView2 on forms with child forms. The child form, with the find in page bar open, caused WebView2 to crash when the child form was closed. ([Issue #1097](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1097))


<!-- ====================================================================== -->
## 1.0.902.49

Release Date: July 26, 2021

[NuGet package for WebView2 SDK 1.0.902.49](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.902.49)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 92.0.902.49 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

*  [add_FrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2_4?view=webview2-1.0.902.49&preserve-view=true#add_framecreated).
*  [get_IsGeneralAutofillEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings4?view=webview2-1.0.902.49&preserve-view=true#get_isgeneralautofillenabled).
*  [get_IsPinchZoomEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings5?view=webview2-1.0.902.49&preserve-view=true#get_ispinchzoomenabled).
*  [The Download APIs](/microsoft-edge/webview2/reference/win32/icorewebview2_4?view=webview2-1.0.902-prerelease&preserve-view=true#add_downloadstarting).
*  [AddHostObjectToScriptWithOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2frame?view=webview2-1.0.902-prerelease&preserve-view=true#addhostobjecttoscriptwithorigins) API with iframe element support.


<!-- ------------------------------ -->
#### Bug fixes

*  Fix bug that broke the `IsBuiltInErrorPageEnabled` property, which turned off the error page that's displayed when there's a navigation failure or render process failure.  This change is Runtime-specific. ([Issue #634](https://github.com/MicrosoftEdge/WebViewFeedback/issues/634))

*  Fixed an issue where WebView2 controls took focus away from the user's focus.

*  Fixed bug when `AddScriptToExecuteOnDocumentCreated` didn't work on child windows. ([Issue #935](https://github.com/MicrosoftEdge/WebViewFeedback/issues/935))

*  Fixed a bug that caused inactive tabs to be automatically discarded. ([Issue #637](https://github.com/MicrosoftEdge/WebViewFeedback/issues/637))

*  Fixed a bug when a navigation event was interrupted by another navigation event resulting in the Navigation ID of `NavigationCompleted` events to be incorrect. ([Issue #1142](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1142))


<!-- ====================================================================== -->
## 1.0.902-prerelease

Release Date: June 1, 2021

[NuGet package for WebView2 SDK 1.0.902-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.902-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 92.0.902.0 or higher.


<!-- ------------------------------ -->
#### General features

*  Improved WebView2 startup performance and disk footprint.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.

*  Added [IsSwipeNavigationEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings5?view=webview2-1.0.902-prerelease&preserve-view=true#get_isswipenavigationenabled) property to enable or disable the ability of the end user to use swiping gesture on touch input-enabled devices to navigate in WebView2.

*  Added [BrowserProcessExited](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment4?view=webview2-1.0.902-prerelease&preserve-view=true#add_browserprocessexited) event.

*  Added [add_ClientCertificateRequested API](/microsoft-edge/webview2/reference/win32/icorewebview2experimental3?view=webview2-1.0.902-prerelease&preserve-view=true#add_clientcertificaterequested). It allows showing a client certificate dialog prompt if desired and enables access to required metadata to replace default client certificate dialog prompt.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  [Download API](/microsoft-edge/webview2/reference/win32/icorewebview2_4?view=webview2-1.0.902-prerelease&preserve-view=true#add_downloadstarting).
*  [PinchZoom API](/microsoft-edge/webview2/reference/win32/icorewebview2settings5?view=webview2-1.0.902-prerelease&preserve-view=true#get_ispinchzoomenabled).
*  [AddFrameCreated](/microsoft-edge/webview2/reference/win32/icorewebview2_4?view=webview2-1.0.902-prerelease&preserve-view=true#add_framecreated).
*  [AddHostObjectToScriptWithOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2frame?view=webview2-1.0.902-prerelease&preserve-view=true#addhostobjecttoscriptwithorigins) API promoted to Stable with iframe element support.
*  [Autofill API](/microsoft-edge/webview2/reference/win32/icorewebview2settings4?view=webview2-1.0.902-prerelease&preserve-view=true#get_isgeneralautofillenabled).
   > [!NOTE]
   > There is no current API to delete the locally stored general autofill and password autosave information.  Please provide a control to delete the data, which will involve deleting the entire user data folder.


<!-- ------------------------------ -->
#### Bug fixes

*  Fix a bug where mouse left click doesn't dismiss context menu. This change is Runtime-specific.

*  Fixed a bug where WebView2 creation fails when exe files for apps sharing the same user data folder have inconsistent version info.

*  Fixed a bug where special browser keys such as `Refresh`, `Home`, and `Back` can't be disabled by `AreBrowserAcceleratorKeysEnabled`. This change is Runtime-specific.

*  Fixed a bug in WebView2 .NET controls, where WebView2 windows are blank when created in the background.  ([Issue #1077](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1077))

*  Dismissing a file picker dialog by pressing **Enter** or **Esc** no longer crashes WPF applications using WebView2 control.  ([Issue #1099](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1099))

*  Fixed a bug that [AllowSingleSignOnUsingOSPrimaryAccount](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions#get_allowsinglesignonusingosprimaryaccount) doesn't work properly with WebView2 when a `WebResourceRequested` event handler is attached. This change is Runtime-specific.  ([Issue #1183](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1183))

*  Downloading a file no longer breaks WebView2 `DefaultBackgroundColor` transparency. This change is Runtime-specific.  ([Issue #1108](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1108))

*  Removed screen sharing media picker message that contains Microsoft branding.  ([Issue #940](https://github.com/MicrosoftEdge/WebViewFeedback/issues/940))

*  Fixed a bug in WebView2 WinForm control where hiding the parent form doesn't hide the WebView2 control.  ([Issue #828](https://github.com/MicrosoftEdge/WebViewFeedback/issues/828) and [Issue #1079](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1079))

*  Added static WS_CLIPCHILDREN style to WebView2's WPF windows. ([Issue #1013](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1013)).

*  Fixed a bug where right-clicking a link crashes the WebView2 host app. This change is Runtime-specific.

*  Fixed a reliability bug that could crash the host app process when moving to a newer Edge WebView2 Runtime version.

*  **DEPRECATION**: Officially deprecated the `DefaultBackgroundColor` API for Windows 7.


<!-- ------------------------------ -->
#### .NET


<!-- ---------- -->
###### Bug fixes

*  Fixed a bug in WebView2 WinForm control where WebView2 window visibility isn't updated properly after parent window is disposed.  ([Issue #1282](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1282) and [Issue #828](https://github.com/MicrosoftEdge/WebViewFeedback/issues/828))

*  Fixed a bug in WebView2 WPF control that Source property binding in WPF OneWay binding mode isn't working properly.  ([Issue #619](https://github.com/MicrosoftEdge/WebViewFeedback/issues/619) and [Issue #608](https://github.com/MicrosoftEdge/WebViewFeedback/issues/608))


<!-- ====================================================================== -->
## 1.0.864.35

Release Date: May 31, 2021

[NuGet package for WebView2 SDK 1.0.864.35](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.864.35)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 91.0.864.35 or higher.


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed a reliability bug that could crash the host app process when moving to a newer Edge WebView2 Runtime version.

*  Fixed a bug that prevented memory purge in some situations. This change is Runtime-specific.

*  Fixed error in 818 SDK release package where project couldn't find the `WebView2.h` file. ([Issue #1209](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1209)).

*  Fixed a bug which caused WebResourceRequested event to be dropped for some requests with binary bodies.

*  Improve `NewWindowRequested` documentation. ([Issue #448](https://github.com/MicrosoftEdge/WebViewFeedback/issues/448)).


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

*  [UserAgent API](/microsoft-edge/webview2/reference/win32/icorewebview2settings2?view=webview2-1.0.864.35&preserve-view=true#get_useragent)
*  [AreBrowserkeysenabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings3?view=webview2-1.0.864.35&preserve-view=true#get_arebrowseracceleratorkeysenabled)


<!-- ------------------------------ -->
#### .NET


<!-- ---------- -->
###### Bug fixes

*  Fixed a bug in WebView2 .NET controls that first header is missing when iterating `CoreWebView2WebResourceRequest` headers collection. ([Issue #1123](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1123)).


<!-- ====================================================================== -->
## 1.0.865-prerelease

Release Date: April 26, 2021

[NuGet package for WebView2 SDK 1.0.865-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.865-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 91.0.865.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

The following Experimental APIs have been added in this Prerelease SDK.

*  Added [IsPinchZoomEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings4?view=webview2-1.0.865-prerelease&preserve-view=true#ispinchzoomenabled) setting. It allows you to turn on or off page scale zoom control in a setting.

*  Added Custom [add_DownloadStarting](/microsoft-edge/webview2/reference/win32/icorewebview2experimental2?view=webview2-1.0.865-prerelease&preserve-view=true#add_downloadstarting) API.  It allows you to block downloads, save to a different path, and access the required metadata to build custom download UI.

*  Added `iframe` element support from [AddHostObjectToScriptWithOrigins](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe?view=webview2-1.0.865-prerelease&preserve-view=true#addhostobjecttoscriptwithorigins).

*  Added sample code for [WPF sample app](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2WpfBrowser) to use the API to turn off browser function keys.

*  Added the [UpdateRuntime](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment3?view=webview2-1.0.865-prerelease&preserve-view=true#updateruntime) API, to easily update the WebView2 Runtime.


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed handler for a `Chromium DevTools Protocol` message with `POST` binary data in WebView2.

*  Turned off the `OpenSaveAsAwareness` download UI, because it included links to `edge://settings`.  ([Issue #1120](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1120)).

*  Removed branding from screen share dialog.  ([Issue #940](https://github.com/MicrosoftEdge/WebViewFeedback/issues/940)).

*  Fixed bug where the [SetWindowDisplayAffinity](/windows/win32/api/winuser/nf-winuser-setwindowdisplayaffinity) function broke WebView2 when it stopped screen capture in an WebView2 app.  ([Issue #841](https://github.com/MicrosoftEdge/WebViewFeedback/issues/841)).

*  Fixed bug for composition hosting where mouse input stopped working if any pen input was sent to WebView2.

*  Fixed bug that broke mouse input after any pen input.  This change is Runtime-specific.


<!-- ------------------------------ -->
#### .NET


<!-- ---------- -->
###### Experimental APIs

The following Experimental APIs for .NET have been added in this Prerelease SDK.

*  Added WebView2 designer tool to WPF Toolbox.  ([Issue #210](https://github.com/MicrosoftEdge/WebViewFeedback/issues/210)).

*  Added WebView2 UI element in .NET Designer Mode.


<!-- ---------- -->
###### Bug fixes

*  Improved COM Exception descriptions by wrapping each in a more detailed .NET exception.  ([Issue #338](https://github.com/MicrosoftEdge/WebViewFeedback/issues/338)).  This change is Runtime-specific.

*  Fixed bug caused when you select **Tab** to shift focus caused WebView2 control to crash in Microsoft Visual Studio Tools for Office.  ([Issue #589](https://github.com/MicrosoftEdge/WebViewFeedback/issues/589) and [Issue #933](https://github.com/MicrosoftEdge/WebViewFeedback/issues/933)).  This change is Runtime-specific.

*  Improved .NET framework loader down level to be more robust.  ([Issue #946](https://github.com/MicrosoftEdge/WebViewFeedback/issues/946))

*  Fixed bug that caused crash when you try to refresh before first navigation completed.  ([Issue #1011](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1011))

*  Fixed initialization so navigation occurs during `CoreWebView2InitializationCompleted`.  ([Issue #1050](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1050))

*  Improved .NET browser process crash error handling.  You can now recreate controls after you handle a `ProcessFailed` event, without a crash.  ([Issue #996](https://github.com/MicrosoftEdge/WebViewFeedback/issues/996))


<!-- ====================================================================== -->
## 1.0.818.41

Release Date: April 21, 2021

[NuGet package for WebView2 SDK 1.0.818.41](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.818.41)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 90.0.818.41 or higher.


<!-- ------------------------------ -->
#### Features

*  Extended the `ProcessFailed` event.  It now raises for non-renderer child processes and frame renderers.
*  Added `iframe` element support for `AddScriptToExecuteOnDocumentCreated`.
*  Improved WebView2 code to be more resilient to `.exe` application files with malformatted version information.  ([Issue #850](https://github.com/MicrosoftEdge/WebViewFeedback/issues/850)).
*  Removed `--winhttp-proxy-resolver` from WebView2 browser process command-line, turned on other proxy command-line options for WebView2.


<!-- ====================================================================== -->
## 1.0.824-prerelease

Release Date: March 8, 2021

[NuGet package for WebView2 SDK 1.0.824-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.824-prerelease)

For full API compatibility, this prerelease version of the WebView2 SDK requires Microsoft Edge version 91.0.824.0 or higher.


<!-- ------------------------------ -->
#### Features

*  Extended the `ProcessFailed` event.  It now raises for non-renderer child processes and frame renderers.
*  Added experimental [AreBrowserAcceleratorKeysEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings2?view=webview2-1.0.824&preserve-view=true#get_arebrowseracceleratorkeysenabled) setting.  You can prevent the browser from responding to keyboard shortcuts related to navigation, printing, saving, and other browser-specific functions.
*  Added `iframe` element support for `AddScriptToExecuteOnDocumentCreated`.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  [UserAgent](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_webresourceresponsereceived).

*  Rasterization Scale APIs:
   *  [RasterizationScale property](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_rasterizationscale)
   *  [RasterizationScaleChanged event](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#add_rasterizationscalechanged)
   *  [BoundsMode property](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_boundsmode)
   *  [ShouldDetectMonitorScaleChanges property](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_shoulddetectmonitorscalechanges)


<!-- ------------------------------ -->
#### Bug fixes

*  Expanded supported C++ and .NET project types such as MFC and ATL.  ([Issue #506](https://github.com/MicrosoftEdge/WebViewFeedback/issues/506), [Issue #669](https://github.com/MicrosoftEdge/WebViewFeedback/issues/669), and [Issue #851](https://github.com/MicrosoftEdge/WebViewFeedback/issues/851)).

*  Fixed a bug that Evergreen WebView2 Runtime leaks Inbound firewall entry.

*  Fixed setting Response during `WebResourceRequested` event.  ([Issue #568](https://github.com/MicrosoftEdge/WebViewFeedback/issues/568)).

*  Fixed a bug that navigating to `edge://` causes browser process to exit.  ([Issue #604](https://github.com/MicrosoftEdge/WebViewFeedback/issues/604)).

*  Fixed a bug that limited WebView2 bounds to size of screen in Visual Hosting mode.


<!-- ====================================================================== -->
## 1.0.774.44

Release Date: March 8, 2021

[NuGet package for WebView2 SDK 1.0.774.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.774.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 89.0.774.44 or higher.


<!-- ------------------------------ -->
#### Features

*  Turned off various Microsoft Edge browser services in WebView2.
*  Visual Hosting APIs are now Generally Available.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

   *  [DPI support](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.774.44&preserve-view=true#add_webresourceresponsereceived) related APIs
   *  Visual hosting APIs
   *  [SetVirtualHostNameToFolderMapping](/microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.774.44&preserve-view=true#setvirtualhostnametofoldermapping)
   *  [TrySuspend and Resume](/microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.774.44&preserve-view=true#trysuspend)
   *  [DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controller2?view=webview2-1.0.774.44&preserve-view=true#get_defaultbackgroundcolor)


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed a bug that limited WebView2 bounds to size of screen in Visual Hosting mode.


<!-- ====================================================================== -->
## 1.0.790-prerelease

Release Date: February 10, 2021

[NuGet package for WebView2 SDK 1.0.790-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.790-prerelease)

This prerelease version of the WebView2 SDK requires Microsoft Edge version 86.0.616.0 or higher.


<!-- ------------------------------ -->
#### Breaking changes


<!-- ---------- -->
###### Prerelease package 1.0.781 is deprecated

WebView2 prerelease package 1.0.781 is deprecated.  Discontinue development with package 1.0.781.


<!-- ---------- -->
###### Prerelease package 0.9.430 is deprecated

WebView2 prerelease package 0.9.430 is deprecated, and is removed with the next release.  If your WebView2 app uses the package, the WebView2 team recommends that you move to a newer package.


<!-- ------------------------------ -->
#### Features

*  Added [TrySuspend and Resume](/microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.790-prerelease&preserve-view=true#trysuspend) method to suspend and resume WebViews.
*  Added [SetVirtualHostNameToFolderMapping](/microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.790-prerelease&preserve-view=true#setvirtualhostnametofoldermapping) method that maps a virtual host name to a directory path.  ([Issue #37](https://github.com/MicrosoftEdge/WebViewFeedback/issues/37), [Issue #161](https://github.com/MicrosoftEdge/WebViewFeedback/issues/161), and [Issue #212](https://github.com/MicrosoftEdge/WebViewFeedback/issues/212)).
*  Added the [DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controller2?view=webview2-1.0.790-prerelease&preserve-view=true#get_defaultbackgroundcolor) property to set the color and alpha-channel of the background.  ([Issue #414](https://github.com/MicrosoftEdge/WebViewFeedback/issues/414)).
*  Added the [UserAgent](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings?view=webview2-1.0.790-prerelease&preserve-view=true#get_useragent) property to get or set the User Agent.  ([Issue #122](https://github.com/MicrosoftEdge/WebViewFeedback/issues/122)).
*  Replaced the `CreateCookieWithCookie` method with the `CopyCookie` method.
*  Added visual hosting support using the [ICoreWebView2CompositionController](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller?view=webview2-1.0.790-prerelease&preserve-view=true) interface, which is created using the new `CreateCoreWebView2CompositionController` method from `ICoreWebView2Environment3`.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  Visual Hosting APIs
*  [SetVirtualHostNameToFolderMapping](/microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.790-prerelease&preserve-view=true#setvirtualhostnametofoldermapping)


<!-- ------------------------------ -->
#### Bug fixes

*  Turned off the Microsoft Edge Shopping feature in WebView2.

*  Turned off the context menu in the PDF viewer when `AreDefaultContextMenusEnabled` is `false`.  ([Issue #605](https://github.com/MicrosoftEdge/WebViewFeedback/issues/605)).

*  Fixed a bug that returned `E_NOINTERFACE` when querying `ICoreWebView2` for `ICoreWebView2Experimental`.  ([Issue #691](https://github.com/MicrosoftEdge/WebViewFeedback/issues/691)).

*  Fixed a bug that allowed navigation with malformed URIs when `CoreWebView2NavigationStartingEventArgs.Cancel` is set to `false`.  ([Issue #400](https://github.com/MicrosoftEdge/WebViewFeedback/issues/400)).

*  Fixed a bug that blocked `window.print()` on pop-up windows with event handlers attached to `NewWindowRequested` events.  ([Issue #409](https://github.com/MicrosoftEdge/WebViewFeedback/issues/409)).

*  Fixed Dynamic DPI issue when moving apps between different monitors.  ([Issue #58](https://github.com/MicrosoftEdge/WebViewFeedback/issues/58))

*  Improved the `HRESULT` instances passed by [ICoreWebView2WebResourceResponseViewGetContentCompletedHandler::Invoke](/microsoft-edge/webview2/reference/win32/icorewebview2webresourceresponseviewgetcontentcompletedhandler?view=webview2-1.0.790-prerelease&preserve-view=true#invoke).

*  Turned off autofill manage button.  ([Issue #585](https://github.com/MicrosoftEdge/WebViewFeedback/issues/585)).

*  Fixed Visual Studio crashes while you run `WebView2.Dispose` when hosted in multiple windows.  ([Issue #816](https://github.com/MicrosoftEdge/WebViewFeedback/issues/816)) and [Issue #442](https://github.com/MicrosoftEdge/WebViewFeedback/issues/442)).

*  Fixed bug to display WebView2 control in Visual Studio Toolbox.  ([Issue #210](https://github.com/MicrosoftEdge/WebViewFeedback/issues/210)).

*  Reduced high CPU usage issues.  ([Issue #878](https://github.com/MicrosoftEdge/WebViewFeedback/issues/878)).

*  Fixed issues with deprecated 1.0.781-prerelease package.  ([Issue #875](https://github.com/MicrosoftEdge/WebViewFeedback/issues/875) and [Issue #878](https://github.com/MicrosoftEdge/WebViewFeedback/issues/878)).


<!-- ------------------------------ -->
#### .NET


<!-- ---------- -->
###### Bug fixes

*  Fixed bug that crashed WebView2 apps that use the WPF SDK.  The crash occurred when pressing **F4** to close a window.  ([Issue #399](https://github.com/MicrosoftEdge/WebViewFeedback/issues/399)).

*  The WebView2 initialization screen is now transparent, instead of gray.  ([Issue #196](https://github.com/MicrosoftEdge/WebViewFeedback/issues/196)).


<!-- ====================================================================== -->
## 1.0.705.50

Release Date: January 25, 2021

[NuGet package for WebView2 SDK 1.0.705.50](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.705.50)

This version of the WebView2 SDK requires WebView2 Runtime version 86.0.616.0 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.

   *  [WebResourceResponseReceived API](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_webresourceresponsereceived)
   *  [NavigateWithWebResourceRequest API](/microsoft-edge/webview2/reference/win32/icorewebview2environment2?view=webview2-1.0.721-prerelease&preserve-view=true#createwebresourcerequest)
   *  [Cookie management API](/microsoft-edge/webview2/reference/win32/icorewebview2cookiemanager?view=webview2-1.0.721-prerelease&preserve-view=true)
   *  [DOMContentLoaded API](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_domcontentloaded)
   *  [Environment property](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#get_environment)


<!-- ====================================================================== -->
## 1.0.721-prerelease

Release Date: December 8, 2020

[NuGet package for WebView2 SDK 1.0.721-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.721-prerelease)

This prerelease version of the WebView2 SDK requires Microsoft Edge version 86.0.616.0 or higher.


<!-- ------------------------------ -->
#### Breaking changes

> [!IMPORTANT]
> **Breaking Change**:  WebView2 prerelease package 1.0.707 and package 0.9.628 are deprecated.  Discontinue development with package 1.0.707 and  package0.9.628.


<!-- ------------------------------ -->
#### Features

*  Added [WebView2 Group Policies](/deployedge/microsoft-edge-webview-policies).  For best practices, see [group policies for WebView2](../concepts/enterprise.md#group-policies-for-webview2).
*  > [!IMPORTANT]
   > **Breaking Change**: Deprecated the old registry location.
   >
   > ```text
   > {Root}\Software\Policies\Microsoft\EmbeddedBrowserWebView\LoaderOverride\{AppId}
   > ```

*  Added support for [Drag and Drop](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller3?view=webview2-1.0.721-prerelease&preserve-view=true) in WebView2.
*  Added APIs to handle DPI support.
   *  Added [RasterizationScale](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_rasterizationscale) property to change the DPI scale for WebView2 content and UI pop-ups, and associated [RasterizationScaleChanged](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#add_rasterizationscalechanged) event.
   *  Added [ShouldDetectMonitorScaleChanges](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_shoulddetectmonitorscalechanges) property to automatically update `RasterizationScale` property if needed.
   *  Added [BoundsMode property](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontroller?view=webview2-1.0.721-prerelease&preserve-view=true#get_boundsmode) to specify that the bounds are logic pixels and allow WebView2 to use `RasterizationScale` for WebView2 pixel display, and WebView2 use the `RasterizationScale` with the `Bounds` to get the physical size.
*  Updated `NewWindowRequested` event to handle **Ctrl+click** and **Shift+click**.  ([Issue #168](https://github.com/MicrosoftEdge/WebViewFeedback/issues/168) and [Issue #371](https://github.com/MicrosoftEdge/WebViewFeedback/issues/371)).


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  [WebResourceResponseReceived API](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_webresourceresponsereceived)
*  [NavigateWithWebResourceRequest API](/microsoft-edge/webview2/reference/win32/icorewebview2environment2?view=webview2-1.0.721-prerelease&preserve-view=true#createwebresourcerequest)
*  [Cookie management API](/microsoft-edge/webview2/reference/win32/icorewebview2cookiemanager?view=webview2-1.0.721-prerelease&preserve-view=true)
*  [DOMContentLoaded API](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#add_domcontentloaded)
*  [Environment property](/microsoft-edge/webview2/reference/win32/icorewebview2_2?view=webview2-1.0.721-prerelease&preserve-view=true#get_environment)


<!-- ------------------------------ -->
#### .NET


<!-- ---------- -->
###### Features

*  Turned on WinForms designer in .NET Core 3.1+ and .NET 5.
*  Improved .NET cookie management.  ([Issue #611](https://github.com/MicrosoftEdge/WebViewFeedback/issues/611)).
*  Replaced `CoreWebView2Ready` with [CoreWebView2InitializationCompleted](/dotnet/api/microsoft.web.webview2.core.corewebview2initializationcompletedeventargs).


<!-- ---------- -->
###### Bug fixes

*  Added [AcceleratorKeyPressed](/dotnet/api/microsoft.web.webview2.wpf.webview2.acceleratorkeypressed) event to support `AcceleratorKey` select in WebView2.  ([Issue #288](https://github.com/MicrosoftEdge/WebViewFeedback/issues/288)).

*  Removed unnecessary files from being output to WebView2 folders.  ([Issue #461](https://github.com/MicrosoftEdge/WebViewFeedback/issues/461)).

*  Improved host object API.  ([Issue #335](https://github.com/MicrosoftEdge/WebViewFeedback/issues/335) and [Issue #525](https://github.com/MicrosoftEdge/WebViewFeedback/issues/525)).


<!-- ====================================================================== -->
## 1.0.664.37

Release Date: November 20, 2020

[NuGet package for WebView2 SDK 1.0.664.37](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.664.37)

This version of the WebView2 SDK requires WebView2 Runtime version 86.0.616.0 or higher.


<!-- ------------------------------ -->
#### General Availability

> [!IMPORTANT]
> **Announcement**: .NET WPF/WinForms WebView2 SDKs are now Generally Available (GA).  Starting with this release, Release SDKs are forward-compatible.  For more details, see [GA announcement blog post](https://devblogs.microsoft.com/dotnet/announcing-general-availability-for-microsoft-edge-webview2-for-net-and-fixed-distribution-method).


<!-- ------------------------------ -->
#### Features

*  .NET WPF/WinForms WebView2 is now Generally Available (GA).
*  Fixed Distribution (Bring-your-own) mode reached GA.


<!-- ------------------------------ -->
#### .NET


<!-- ---------- -->
###### Bug fixes

*  `CoreWebView2NewWindowRequestedEventArgs.Handled` prevents new window from being opened.  ([Issue #549](https://github.com/MicrosoftEdge/WebViewFeedback/issues/549) and [Issue #560](https://github.com/MicrosoftEdge/WebViewFeedback/issues/560)).


<!-- ====================================================================== -->
## 1.0.674-prerelease

Release Date: October 19, 2020

[NuGet package for WebView2 SDK 1.0.674-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.674-prerelease)

This prerelease version of the WebView2 SDK requires WebView2 Runtime version 86.0.616.0 or higher.


<!-- ------------------------------ -->
#### General features

*  Added [NavigateWithWebResourceRequest](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#navigatewithwebresourcerequest) method to provide post data or other request headers during navigation.
*  Added [DOMContentLoaded](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#add_domcontentloaded) event that runs when the initial HTML document is loaded and parsed.
*  Added the [Environment](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#get_environment) property on WebView2.  This property exposes the WebView2 environment where an instance of WebView2 was created.
*  Added [cookie management](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#get_cookiemanager) APIs that allow developers to authenticate the WebView2 session, or retrieve cookies from WebView2 to authenticate other tools.  The WebView2 team plans to make language or framework-specific improvements.  See [API Review: Cookie Management](https://github.com/MicrosoftEdge/WebView2Announcement/issues/2).
*  Updated the [WebResourceResponseReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#add_webresourceresponsereceived) event, and added immutable [WebResourceResponseView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourceresponseview?view=webview2-1.0.674-prerelease&preserve-view=true) and [WebResourceResponseReceivedEventArgs::PopulateResponseContent](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourceresponsereceivedeventargs?view=webview2-0.9.628-prerelease&preserve-view=true#populateresponsecontent) to [WebResourceResponseView::GetContent](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourceresponseview?view=webview2-1.0.674-prerelease&preserve-view=true#getcontent).
*  Turned off [Microsoft Defender Application Guard (WDAG)](/windows/security/threat-protection/microsoft-defender-application-guard/md-app-guard-overview) in WebView2.
*  Added [SystemCursorId](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller2?view=webview2-1.0.674-prerelease&preserve-view=true#get_systemcursorid) for Visual Hosting.
*  Added bug fixed for Input Method in Visual Hosting.
*  Removed include requirement for `version.lib` when using WebView2 static library.


<!-- ------------------------------ -->
#### .NET

*  Updated [CoreWebView2](/dotnet/api/microsoft.web.webview2.core.corewebview2) class to expose the `CoreWebView2Environment` variable.
*  Changed implementations of custom EventArgs classes in `Microsoft.Web.WebView2.Core` namespace to subclasses of [System.EventArgs](/dotnet/api/system.eventargs) or [System.ComponentModel.CancelEventArgs](/dotnet/api/system.componentmodel.canceleventargs).  ([Issue #250](https://github.com/MicrosoftEdge/WebViewFeedback/issues/250))
*  Added support for [CoreWebView2CreationProperties](/dotnet/api/microsoft.web.webview2.winforms) in WinForms.  ([Issue #204](https://github.com/MicrosoftEdge/WebViewFeedback/issues/204)).
*  Added [WebResourceRequested](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested) .NET APIs.  ([Issue #219](https://github.com/MicrosoftEdge/WebViewFeedback/issues/219)).
*  Updated WinForms Designer [Source](/dotnet/api/microsoft.web.webview2.winforms.webview2.source) property to default or reset to null.  ([Issue #177](https://github.com/MicrosoftEdge/WebViewFeedback/issues/177)).
*  Updated WebView2 bounds in WebView2.Init() to support DPI modes that are less than 100%.  ([Issue #432](https://github.com/MicrosoftEdge/WebViewFeedback/issues/432)).
*  Updated [BuildWindowCore](/dotnet/api/microsoft.web.webview2.wpf.webview2.buildwindowcore) and [DestroyWindowCore](/dotnet/api/microsoft.web.webview2.wpf.webview2.destroywindowcore) to increase robustness.  ([Issue #382](https://github.com/MicrosoftEdge/WebViewFeedback/issues/382)).
*  Updated .NET Loader base to load on process bit instead of operating system architecture.  ([Issue #431](https://github.com/MicrosoftEdge/WebViewFeedback/issues/431)).
*  Renamed `EdgeNotFoundException` to [WebView2RuntimeNotFoundException](/dotnet/api/microsoft.web.webview2.core.webview2runtimenotfoundexception).


<!-- ====================================================================== -->
## 1.0.622.22

Release Date: October 19, 2020

[NuGet package for WebView2 SDK 1.0.622.22](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.622.22)

This version of the WebView2 SDK requires WebView2 Runtime version 86.0.616.0 or higher.

> [!IMPORTANT]
> **Announcement**:  Win32 C/C++ WebView2 is now Generally Available (GA).  Starting this release, Release SDKs are forward-compatible.  See [GA announcement blog post](https://blogs.windows.com/msedgedev/edge-webview2-general-availability).

*  The Evergreen WebView2 Runtime and installer are GA.  The bootstrapper, the downlink link for the Bootstrapper, and the Standalone Installer for the Evergreen WebView2 Runtime are available on [Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2/).  Sample code for the installation workflow is also available in the [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples).

For more information about the Runtime, Evergreen distribution, and Fixed Version distribution, see [Distribute your app and the WebView2 Runtime](../concepts/distribution.md).


<!-- ====================================================================== -->
## 0.9.622.11

Release Date: September 10, 2020

[NuGet package for WebView2 SDK 0.9.622.11](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.622.11)

This version of the WebView2 SDK requires WebView2 Runtime version 86.0.616.0 or higher.

*  > [!IMPORTANT]
   > **Announcement**: This SDK is the Release Candidate for WebView2 Win32 C/C++ GA.  The GA version is expected to use the same API interface and functionality.

*  Disconnected [browser policies](/deployedge/microsoft-edge-policies).
*  Added [AllowSingleSignOnUsingOSPrimaryAccount](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions?view=webview2-0.9.622&preserve-view=true#get_allowsinglesignonusingosprimaryaccount) property on WebView2 environment options to turn on conditional access for WebView2.
*  Updated `ICoreWebView2NewWindowRequestedEventArgs` to include [WindowFeatures](/microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs?view=webview2-0.9.622&preserve-view=true#get_windowfeatures) property, and the associated [ICoreWebView2WindowFeatures](/microsoft-edge/webview2/reference/win32/icorewebview2windowfeatures?view=webview2-0.9.622&preserve-view=true).  ([Issue #293](https://github.com/MicrosoftEdge/WebViewFeedback/issues/293)).
*  Updated `System.Windows.Rect`  to use `System.Drawing.Rectangle` instead of `System.Windows.Rect` ([Issue #235](https://github.com/MicrosoftEdge/WebViewFeedback/issues/235)).
*  Updated NewWindowRequested event to handle `window.open()` request without parameters.  ([Issue #293](https://github.com/MicrosoftEdge/WebViewFeedback/issues/293)).
*  [AdditionalBrowserArguments](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions?view=webview2-0.9.622&preserve-view=true#put_additionalbrowserarguments) specified with `ICoreWebView2EnvironmentOptions` aren't overridden with environment variables or registry values.  See [CreateCoreWebView2EnvironmentWithOptions](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.622&preserve-view=true#createcorewebview2environmentwithoptions).


<!-- ====================================================================== -->
## 0.9.579

Release Date: July 20, 2020

[NuGet package for WebView2 SDK 0.9.579](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.579)

This version of the WebView2 SDK requires Microsoft Edge version 86.0.579.0 or higher.


<!-- ------------------------------ -->
#### All platforms

*  > [!IMPORTANT]
   > **Announcement**: Evergreen WebView2 Runtime and installer is released for preview.  See [Distribute your app and the WebView2 Runtime](../concepts/distribution.md).

*  > [!IMPORTANT]
   > **Announcement**:  The following WebView2 SDK Versions are no longer supported after the next SDK release:
   >
   > *  [0.8.190](#08190)
   > *  [0.8.230](#08230)
   > *  [0.8.270](#08270)
   > *  [0.8.314](#08314)
   > *  [0.8.355](#08355)
   >
   > The WebView2 SDK Versions are also marked deprecated on nuget.org.  WebView2 recommends staying up to date with the latest version of WebView2.

*  Added WebView2 worker thread improvements.  ([Issue #318](https://github.com/MicrosoftEdge/WebViewFeedback/issues/318)).
*  Turned off the pop-up blocker in WebView2.  See the [IsUserInitiated](/microsoft-edge/webview2/reference/win32/icorewebview2newwindowrequestedeventargs?view=webview2-0.9.538&preserve-view=true#get_isuserinitiated) property in the `NewWindowRequested` event.
*  Ensured WebView2 navigation starting event is run for `about:blank`.  Now, `NavigationStarting` events are run for all navigation, but cancellations for `about:blank` or `srcdoc` of the `iframe` element aren't supported and ignored.
*  Blocked some `edge://` URI schemes in WebView2.
*  Added experimental [IsSingleSignOnUsingOSPrimaryAccountEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-0.9.538-prerelease&preserve-view=true#get_issinglesignonusingosprimaryaccountenabled) property on WebView2 environment options to turn on conditional access for WebView2.
*  Added experimental [WebResourceResponseReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-0.9.538-prerelease&preserve-view=true#add_webresourceresponsereceived) event that runs after the WebView2 receives and processes the response from a WebResource request.  Authentication headers, if any, are included in the response object.


<!-- ------------------------------ -->
#### .NET

*  Improved WPF focus handling.  ([Issue #185](https://github.com/MicrosoftEdge/WebViewFeedback/issues/185)).
*  Added `ZoomFactor` property on WPF Webview2 Controller.


<!-- ====================================================================== -->
## 0.9.538

Release Date: June 8, 2020

[NuGet package for WebView2 SDK 0.9.538](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.538)

This version of the WebView2 SDK requires Microsoft Edge version 85.0.538.0 or higher.


<!-- ------------------------------ -->
#### All platforms

*  Dropping support for WebView2 SDK Version [0.8.149](#08149).  WebView2 recommends staying up to date with the latest version of WebView2.
*  Updated group policy to account for when the profile path of the Microsoft Edge browser is modified  ([#179](https://github.com/MicrosoftEdge/WebViewFeedback/issues/179)).


<!-- ------------------------------ -->
#### Win32 C/C++

*  Added [ICoreWebView2ExperimentalNewWindowRequestedEventArgs::get_WindowFeatures](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalnewwindowrequestedeventargs?view=webview2-0.9.538-prerelease&preserve-view=true#get_windowfeatures), which fires when `window.open()` is run and associated with [ICoreWebView2ExperimentalWindowFeatures](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwindowfeatures?view=webview2-0.9.538-prerelease&preserve-view=true) ([#70](https://github.com/MicrosoftEdge/WebViewFeedback/issues/70)).
*  > [!IMPORTANT]
   > **Breaking Change**:  Deprecated [CreateCoreWebView2EnvironmentWithDetails](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.488&preserve-view=true#createcorewebview2environmentwithdetails) and replaced with [CreateCoreWebView2EnvironmentWithOptions](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.538&preserve-view=true#createcorewebview2environmentwithoptions).

*  > [!IMPORTANT]
   > **Breaking Change**:  In order to ensure the WebView2 API aligns with the Windows API naming conventions, the WebView2 team updated the names of the following.
   >
   > *  [AreRemoteObjectsAllowed](/microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.488&preserve-view=true#get_areremoteobjectsallowed) is now [AreHostObjectsAllowed](/microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.538&preserve-view=true#get_arehostobjectsallowed).

*  Updated [AddHostObjectToScript](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.538&preserve-view=true#addhostobjecttoscript).  The original host object serializer markers are now set to the proxy objects.  Then host object serializer markers are serialized back as a host object when passed as a parameter in the JavaScript callback ([#148](https://github.com/MicrosoftEdge/WebViewFeedback/issues/148)).


<!-- ------------------------------ -->
#### .NET (0.9.538 prerelease)

*  Released WinForms and WPF WebView2API Samples, which are comprehensive guides of the WebView2 SDK.  See [Samples Repo](https://github.com/MicrosoftEdge/WebView2Samples).
*  Added support for visual hosting and window features, as [experimental APIs](../concepts/versioning.md#experimental-apis).
*  > [!IMPORTANT]
   > **Breaking Change**:  The following deferrals now implement `IDisposable`:  [ScriptDialogOpening](/dotnet/api/microsoft.web.webview2.core.corewebview2.scriptdialogopening), [NewWindowRequested](/dotnet/api/microsoft.web.webview2.core.corewebview2.newwindowrequested), [WebResourceRequested](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested), and [PermissionRequested](/dotnet/api/microsoft.web.webview2.core.corewebview2.permissionrequested).

*  Added [GetAvailableBrowserVersionString](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.getavailablebrowserversionstring) and [CompareBrowserVersions](/dotnet/api/microsoft.web.webview2.core.corewebview2environment.comparebrowserversions) as [CoreWebView2Environment](/dotnet/api/microsoft.web.webview2.core.corewebview2environment) statics.


<!-- ====================================================================== -->
## 0.9.515-prerelease

Release Date: May 14, 2020

[NuGet package for WebView2 SDK 0.9.515-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.515-prerelease)

This prerelease version of the WebView2 SDK requires Microsoft Edge version 84.0.515.0 or higher.

*  > [!IMPORTANT]
   > **Announcement**:  WebView2 now supports Windows Forms and WPF on .NET Framework 4.6.2 or later and .NET Core 3.0 or later in the **prerelease package**.

*  For more information about building WPF apps, see [Get started with WebView2 in WPF apps](../get-started/wpf.md) and the WebView2 [WPF Reference](/dotnet/api/microsoft.web.webview2.wpf) for WPF-specific APIs.
*  For more information about building Windows Forms apps, see [Get started with WebView2 in WinForms apps](../get-started/winforms.md) and the WebView2 [Windows Forms Reference](/dotnet/api/microsoft.web.webview2.winforms) for Windows Forms specific APIs.
*  For more information about the CoreWebView2 APIs, see [.NET Reference](/dotnet/api/microsoft.web.webview2.core).
*  > [!CAUTION]
   > **Known Issues**:  The WebView2 team is aware of some issues in the prerelease that are being resolved in future releases.
   >
   > *  **DPI Awareness**:  WebView2 for WPF is currently not DPI aware.  When initializing WebView2 on high DPI monitors, there is a known issue where the WebView2 control at first initializes as a fraction of the window until the window is resized.
   > *  **WPF Designer**:  The WPF designer isn't currently supported.  Add the WebView2 control in your app by directly modifying the appropriate XAML in a text editor.


<!-- ====================================================================== -->
## 0.9.488

Release Date: April 20, 2020

[NuGet package for WebView2 SDK 0.9.488](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.488)

This version of the WebView2 SDK requires Microsoft Edge version 84.0.488.0 or higher.

*  > [!IMPORTANT]
   > **Announcement**:  Starting with the upcoming Microsoft Edge version 83, Evergreen WebView2 no longer targets the Stable browser channel.  Instead, it targets another set of binaries, branded Evergreen WebView2 Runtime, that you can chain-install through an installer that the WebView2 team is currently developing.  See [Distribute your app and the WebView2 Runtime](../concepts/distribution.md).

*  > [!IMPORTANT]
   > **Announcement**:  Moving forward, the WebView2 team releases two packages:
   > * A Prerelease SDK package containing Experimental APIs (for you to try out), and also APIs that have been promoted to Stable status.
   > * A Release SDK package that consists entirely of APIs that have reached Stable status (for your confidence).
   >
   > To learn about the differences, see [Prerelease and Release SDKs for WebView2](../concepts/versioning.md).

*  > [!IMPORTANT]
   > **Breaking Change**:  In order to ensure the WebView2 API aligns with the Windows API naming conventions, the WebView2 team updated the names of the following interfaces.
   >
   > *  `CORE_WEBVIEW2_*` prefix is now `COREWEBVIEW2_*`.
   > *  [GetCoreWebView2BrowserVersionInfo](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.430&preserve-view=true#getcorewebview2browserversioninfo) is now [GetAvailableCoreWebView2BrowserVersionString](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.488&preserve-view=true#getavailablecorewebview2browserversionstring).
   > *  [get_BrowserVersionInfo](/microsoft-edge/webview2/reference/win32/icorewebview2environment?view=webview2-0.9.430&preserve-view=true#get_browserversioninfo) is now [get_BrowserVersionString](/microsoft-edge/webview2/reference/win32/icorewebview2environment?view=webview2-0.9.488&preserve-view=true#get_browserversionstring).
   > *  [AddRemoteObject](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#addremoteobject) is now [AddHostObjectToScript](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.488&preserve-view=true#addhostobjecttoscript).
   > *  [RemoveRemoteObject](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#removeremoteobject) is now [RemoveHostObjectFromScript](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.488&preserve-view=true#removehostobjectfromscript).
   > *  `chrome.webview.remoteObjects` is now `chrome.webview.hostObjects`.

*  > [!IMPORTANT]
   > **Breaking Change**:  The `AddRemoteObject` JS proxy methods are also renamed.
   >
   > *  `getLocal` is now `getLocalProperty`.
   > *  `setLocal` is now `setLocalProperty`.
   > *  `getRemote` is now `getHostProperty`.
   > *  `setRemote` is now `setHostProperty`.
   > *  `applyRemote` is now `applyHostFunction`.

*  > [!IMPORTANT]
   > **Breaking Change**:  Deprecated [CreateCoreWebView2EnvironmentWithDetails](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.488&preserve-view=true#createcorewebview2environmentwithdetails) and replaced with [CreateCoreWebView2EnvironmentWithOptions](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.9.488&preserve-view=true#createcorewebview2environmentwithoptions).

*  Added [FrameNavigationCompleted](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.488&preserve-view=true#add_framenavigationcompleted) event.  Now, when an `iframe` element completes navigation, an event is run and returns the success of the navigation and the navigation ID.
*  Added [ICoreWebView2EnvironmentOptions](/microsoft-edge/webview2/reference/win32/icorewebview2environmentoptions?view=webview2-0.9.488&preserve-view=true) interface, which can be used to determine the version of the Evergreen WebView2 Runtime targeted by your app.
*  Added [IsBuiltInErrorPageEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.488&preserve-view=true#get_isbuiltinerrorpageenabled) setting.  Now, you can choose to turn on or off the built-in error webpage for navigation failure and render process failure.
*  Updated Remote Object Injection to support .NET `IDispatch` implementations ([#113](https://github.com/MicrosoftEdge/WebViewFeedback/issues/113)).
*  Updated [NewWindowRequested](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.488&preserve-view=true#add_newwindowrequested) event to handle requests from context menus ([#108](https://github.com/MicrosoftEdge/WebViewFeedback/issues/108)).
*  Released the first separate WebView2 prerelease package where you can access visual hosting APIs.  The WebView2 team updated [APISample](https://github.com/MicrosoftEdge/WebView2Samples) to include the new experimental APIs.
   *  Added [ICoreWebView2ExperimentalCompositionController](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller?view=webview2-0.9.488-prerelease&preserve-view=true) interface, to connect to a composition tree and provide input for the WebView2 control.
   *  Added [ICoreWebView2ExperimentalPointerInfo](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalpointerinfo?view=webview2-0.9.488-prerelease&preserve-view=true), which contains all the information from a `POINTER_INFO`.  This object is passed to SendPointerInput to inject pointer input into the WebView2.
   *  Added [ICoreWebView2ExperimentalCursorChangedEventHandler](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcursorchangedeventhandler?view=webview2-0.9.488-prerelease&preserve-view=true), which tells the app when the mouse cursor over the WebView2 control should be changed.  When mouse is over a text box in the WebView2, the cursor changes from the arrow to the selector.  The `cursor` property on the `CompositionController` tells the app what the mouse cursor should currently be for the WebView2.


<!-- ====================================================================== -->
## 0.9.430

<!-- Release Date: February 24, 2020 -->

[NuGet package for WebView2 SDK 0.9.430](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.9.430)

This version of the WebView2 SDK requires Microsoft Edge version 82.0.430.0 or higher.

The WebView2 SDK is the official Win32 C++ Beta version, which incorporates several feature requests from feedback.  The WebView2 team tries to limit the number of releases with breaking changes.  As general availability approaches, several major breaking changes are incorporated in the Beta release.

*  > [!IMPORTANT]
   > **Breaking Change**:  As the final release approaches the WebView2 team renamed the prefix `IWebView2WebView` to `ICoreWebView2` in order to make sure the WebView2 API aligns with the Windows API naming convention.  Additionally, in order to leverage the WebView2 SDK from UI frameworks, the WebView2 team separated `ICoreWebView2` into [ICoreWebView2](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true) and [ICoreWebView2Host](/microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true).  `ICoreWebView2Host` supports resizing, showing-and-hiding, focusing, and other functionality related to windowing and composition.  ICoreWebView2 supports all other WebView2 functionality.  To learn more about incorporating the changes, see the WebView2 [pull request](https://github.com/MicrosoftEdge/WebView2Samples/pull/17) in the WebView2 [APISample](https://github.com/MicrosoftEdge/WebView2Samples) project.

*  > [!IMPORTANT]
   > **Breaking Change**:  Split [DocumentStateChanged](/microsoft-edge/webview2/reference/win32/iwebview2webview?view=webview2-0.8.355&preserve-view=true#add_documentstatechanged) into three components:  [SourceChanged](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_sourcechanged), [ContentLoading](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_contentloading), and [HistoryChanged](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_historychanged).  Now, when the source URL changes the `SourceChanged` event is run.  When the history state is changed the `HistoryChanged` event is run.  The `ContentLoading` event is run before the initial script when a new document is being loaded.

*  Added support for ARM64 architecture.
*  Added Soft Input Panel (SIP) support for touch screen devices.
*  Added support for Windows Server 2008 R2, Windows Server 2012, Windows Server 2012 R2, and Windows Server 2016.
*  Added [NotifyParentWindowPositionChanged](/microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true#notifyparentwindowpositionchanged) for the status bar to follow the window in windowed mode.  Also, implement the change in windowless mode in order for accessibility features to work.
*  Added [AreRemoteObjectsAllowed](/microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.430&preserve-view=true#get_areremoteobjectsallowed) setting to globally control whether a webpage can be accessed by any remote objects.  By default, `AreRemoteObjectsAllowed` is turned on, so remote objects added by [AddRemoteObject](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#addremoteobject) are accessible from the webpage.  When `AreRemoteObjectsAllowed` is turned off, the objects aren't accessible from the webpage.  Changes are applied on the next navigation event.
*  Added [IsZoomControlEnabled](/microsoft-edge/webview2/reference/win32/icorewebview2settings?view=webview2-0.9.430&preserve-view=true#get_iszoomcontrolenabled) setting to prevent users from impacting the zoom of the WebView2 control using **Ctrl**+**+** and **Ctrl**+**-** (or **Ctrl**+ mouse wheel).  Zoom can still be set using [put_ZoomFactor](/microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true#put_zoomfactor) when the setting is turned off.
*  Changed ZoomFactor to only apply to the current WebView2 control.  Zoom changes to the current WebView2 control don't affect other WebViews that you navigated to using the same site of origin.  See [get_ZoomFactor](/microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true#get_zoomfactor).
*  Hid ZoomView UI for WebView2 control ([#95](https://github.com/MicrosoftEdge/WebViewFeedback/issues/95)).
*  Added [SetBoundsAndZoomFactor](/microsoft-edge/webview2/reference/win32/icorewebview2host?view=webview2-0.9.430&preserve-view=true#setboundsandzoomfactor).  Now, you can set the zoom factor and bounds of a WebView2 control at the same time.
*  Added [WindowCloseRequested](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_windowcloserequested) event.  See [add_WindowCloseRequested](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#add_windowcloserequested) ([#119](https://github.com/MicrosoftEdge/WebViewFeedback/issues/119)).
*  Added support for the `beforeunload` dialog type for JavaScript dialog events and added [CORE_WEBVIEW2_SCRIPT_DIALOG_KIND_BEFOREUNLOAD](/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-0.9.430&preserve-view=true#core_webview2_script_dialog_kind) enum entry.
*  Added [GetHeaders](/microsoft-edge/webview2/reference/win32/icorewebview2httprequestheaders?view=webview2-0.9.430&preserve-view=true#getheaders) to HttpRequestHeaders, [GetHeader](/microsoft-edge/webview2/reference/win32/icorewebview2httpresponseheaders?view=webview2-0.9.430&preserve-view=true#getheader) to HttpResponseHeaders, and [get_HasCurrentHeader](/microsoft-edge/webview2/reference/win32/icorewebview2httpheaderscollectioniterator?view=webview2-0.9.430&preserve-view=true#get_hascurrentheader) property to HttpHeadersCollectionIterator.
*  > [!IMPORTANT]
   > **Breaking Change**:  Modified `DevToolsProtocolEventReceived` behavior.  Now, you can create a [DevToolsProtocolEventReceiver](/microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver?view=webview2-0.9.430&preserve-view=true) for a particular DevTools Protocol event and subscribe/unsubscribe to such event using [add_DevToolsProtocolEventReceived](/microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver?view=webview2-0.9.430&preserve-view=true#add_devtoolsprotocoleventreceived)/[remove_DevToolsProtocolEventReceived](/microsoft-edge/webview2/reference/win32/icorewebview2devtoolsprotocoleventreceiver?view=webview2-0.9.430&preserve-view=true#remove_devtoolsprotocoleventreceived).

*  > [!IMPORTANT]
   > **Breaking Change**:  Changed `WebMessageReceivedEventArgs` [get_WebMessageAsString](/microsoft-edge/webview2/reference/win32/iwebview2webmessagereceivedeventargs?view=webview2-0.8.355&preserve-view=true#get_webmessageasstring) property to a [TryGetWebMessageAsString](/microsoft-edge/webview2/reference/win32/icorewebview2webmessagereceivedeventargs?view=webview2-0.9.430&preserve-view=true#trygetwebmessageasstring) method.

*  > [!IMPORTANT]
   > **Breaking Change**:  Changed `AcceleratorKeyPressedEventArgs` [Handle](/microsoft-edge/webview2/reference/win32/iwebview2acceleratorkeypressedeventargs?view=webview2-0.8.355&preserve-view=true#handle) method to a [get_Handled](/microsoft-edge/webview2/reference/win32/icorewebview2acceleratorkeypressedeventargs?view=webview2-0.9.430&preserve-view=true#get_handled) property.


<!-- ====================================================================== -->
## 0.8.355

Release Date: December 9, 2019

[NuGet package for WebView2 SDK 0.8.355](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.355)

This version of the WebView2 SDK requires Microsoft Edge version 80.0.355.0 or higher.

*  Released WebView2API Sample, a comprehensive guide of the WebView2 SDK.  See [API Sample](https://github.com/MicrosoftEdge/WebView2Samples/tree/main/SampleApps/WebView2APISample).
*  Added IME support for all languages besides English ([#30](https://github.com/MicrosoftEdge/WebViewFeedback/issues/30)).
*  Updated the API surface of the `WebResourceRequested` event in response to bug reports.  Simultaneously specifying a filter and an event on creation is now deprecated.  To create a web resource requested event, use [add_WebResourceRequested](/microsoft-edge/webview2/reference/win32/iwebview2webview5?view=webview2-0.8.355&preserve-view=true#add_webresourcerequested) to add the event and [AddWebResourceRequestedFilter](/microsoft-edge/webview2/reference/win32/iwebview2webview5?view=webview2-0.8.355&preserve-view=true#addwebresourcerequestedfilter) to add a filter.  [RemoveWebResourceRequestedFilter](/microsoft-edge/webview2/reference/win32/iwebview2webview5?view=webview2-0.8.355&preserve-view=true#removewebresourcerequestedfilter) removes the filter ([#36](https://github.com/MicrosoftEdge/WebViewFeedback/issues/36)) ([#74](https://github.com/MicrosoftEdge/WebViewFeedback/issues/74)).
*  > [!IMPORTANT]
   > **Breaking Change**:  Modified fullscreen behavior.  Deprecated [IsFullScreenAllowed](/microsoft-edge/webview2/reference/win32/iwebview2settings?view=webview2-0.8.355&preserve-view=true#get_isfullscreenallowed_deprecated).  Now, by default, if an element in a WebView2 control (such as a video) is set to full screen, it fills the bounds of the WebView2 control.  Use the [ContainsFullScreenElementChanged](/microsoft-edge/webview2/reference/win32/iwebview2containsfullscreenelementchangedeventhandler?view=webview2-0.8.355&preserve-view=true) event and [get_ContainsFullScreenElement](/microsoft-edge/webview2/reference/win32/iwebview2webview5?view=webview2-0.8.355&preserve-view=true#get_containsfullscreenelement) to specify how the app should resize the WebView2 control if an element wants to enter fullscreen mode.


<!-- ====================================================================== -->
## 0.8.314

Release Date: October 28, 2019

[NuGet package for WebView2 SDK 0.8.314](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.314)

This version of the WebView2 SDK requires Microsoft Edge version 80.0.314.0 or higher.


<!-- ------------------------------ -->
#### Changes

*  Added support for Windows 7, Windows 8, and Windows 8.1.  See [Supported Windows versions](../index.md#supported-windows-versions) in _Introduction to Microsoft Edge WebView2_.
*  Added Visual Studio and Visual Studio Code debug support for WebView2.  Now, debug your script in the WebView2 right from your IDE.  See [How to debug when developing with WebView2 controls](../how-to/debug.md).
*  Added `Native Object Injection` for the running script in WebView2 to access an IDispatch object from the Win32 component of the app and access the properties of the IDispatch object.  See [AddRemoteObject](/microsoft-edge/webview2/reference/win32/iwebview2webview4?view=webview2-0.8.355&preserve-view=true#addremoteobject) ([#17](https://github.com/MicrosoftEdge/WebViewFeedback/issues/17)).
*  Added `AcceleratorKeyPressed` event.  See [add_AcceleratorKeyPressed](/microsoft-edge/webview2/reference/win32/iwebview2webview4?view=webview2-0.8.355&preserve-view=true#add_acceleratorkeypressed) ([#57](https://github.com/MicrosoftEdge/WebViewFeedback/issues/57)).
*  Turned off the `Context Menus`.  See [put_AreDefaultContextMenusEnabled](/microsoft-edge/webview2/reference/win32/iwebview2settings2?view=webview2-0.8.355&preserve-view=true#put_aredefaultcontextmenusenabled) ([#57](https://github.com/MicrosoftEdge/WebViewFeedback/issues/57)).
*  Updated `DPI Awareness`.  Now, the DPI awareness of the WebView2 control is the same as the DPI awareness of the host app.

   > [!NOTE]
   > If another hybrid app is launched with a different DPI Awareness than the original WebView2 control instance, the new WebView2 control instance isn't launched if the `user data folder` is the same ([#1](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1)).

*  Updated `Notification Change Behavior` so WebView2 automatically rejects notification permission requests prompted by web content hosted in the WebView2 control.


<!-- ====================================================================== -->
## 0.8.270

Release Date: September 10, 2019

[NuGet package for WebView2 SDK 0.8.270](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.270)

This version of the WebView2 SDK requires Microsoft Edge version 78.0.270.0 or higher.


<!-- ------------------------------ -->
#### Changes

*  Added `DocumentTitleChanged` event to indicate document title change ([Issue #27](https://github.com/MicrosoftEdge/WebViewFeedback/issues/27)).

*  Added `GetWebView2BrowserVersionInfo` API ([Issue #18](https://github.com/MicrosoftEdge/WebViewFeedback/issues/18)).

*  Added `NewWindowRequested` event.

*  Updated `CreateWebView2EnvironmentWithDetails` function to remove `releaseChannelPreference`.  For more information about the `CreateWebView2EnvironmentWithDetails` function, see [CreateWebView2EnvironmentWithDetails](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.8.355&preserve-view=true#createwebview2environmentwithdetails).  The registry and environment variable override is still supported.  The default channel preference is used unless overridden.

   During the channel search, the WebView2 team skips any previous channel version that isn't compatible with the WebView2 SDK.

   The WebView2 team selects the more stable channel to ensure the most consistent behaviors for the end user.  When you test with the latest Canary build, you should create a script to set the `WEBVIEW2_RELEASE_CHANNEL_PREFERENCE` environment variable to `1` before launching the app.  See [Test upcoming APIs and features](../how-to/set-preview-channel.md).

*  Updated the `CreateWebView2EnvironmentWithDetails` function with logic for selecting `userDataFolder` when not specified.  For more information about the `CreateWebView2EnvironmentWithDetails` function, see [CreateWebView2EnvironmentWithDetails](/microsoft-edge/webview2/reference/win32/webview2-idl?view=webview2-0.8.355&preserve-view=true#createwebview2environmentwithdetails).  If you previously used the default `userDataFolder` location, when you switch to the new SDK the default `userDataFolder` is reset (set to a new location in the host code directory) and your state is also reset.  If the host process doesn't have permission to write to the specified directory, the `CreateWebView2EnvironmentWithDetails` function might fail.  You can copy the data from the old `user data folder` to the new directory.


<!-- ====================================================================== -->
## 0.8.230

Release Date: July 29, 2019

[NuGet package for WebView2 SDK 0.8.230](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.230)

This version of the WebView2 SDK requires Microsoft Edge version 77.0.230.0 or higher.


<!-- ------------------------------ -->
#### Changes

*  Added `Stop` API to stop all navigation and pending resource fetches ([Issue #28](https://github.com/MicrosoftEdge/WebViewFeedback/issues/28)).
*  Added `.tlb` file to the NuGet package ([Issue #22](https://github.com/MicrosoftEdge/WebViewFeedback/issues/22)).
*  Added .NET projects to the installer list in the NuGet package ([Issue #32](https://github.com/MicrosoftEdge/WebViewFeedback/issues/32)).


<!-- ====================================================================== -->
## 0.8.190

Release Date: June 17, 2019

[NuGet package for WebView2 SDK 0.8.190](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.190)

This version of the WebView2 SDK requires Microsoft Edge version 77.0.190.0 or higher.

*  Added `get_AreDevToolsEnabled`/`put_AreDevToolsEnabled` to control if users can open DevTools ([Issue #16](https://github.com/MicrosoftEdge/WebViewFeedback/issues/16)).
*  Added `get_IsStatusBarEnabled`/`put_IsStatusBarEnabled` to control if the status bar is displayed ([Issue #19](https://github.com/MicrosoftEdge/WebViewFeedback/issues/19)).
*  Added `get_CanGoBack`/`GoBack`/`get_CanGoForward`/`GoForward` for going back and forward through navigation history.
*  Added HTTP header types (`IWebView2HttpHeadersCollectionIterator`/`IWebView2HttpRequestHeaders`/`IWebView2HttpRequestHeaders`) for viewing and modifying HTTP headers in WebView2.
*  Added 32-bit WebView2 support on 64-bit machines ([Issue #13](https://github.com/MicrosoftEdge/WebViewFeedback/issues/13)).
*  Added WebView2 IDL to the SDK ([Issue #14](https://github.com/MicrosoftEdge/WebViewFeedback/issues/14)).
*  Added lib to support `IID\_\*` interface ID objects ([Issue #12](https://github.com/MicrosoftEdge/WebViewFeedback/issues/12)).
*  Added include path, linking, and autocopying of DLL files to NuGet `TARGET` file in SDK.
*  Turned on requesting `window.open()` in script.


<!-- ====================================================================== -->
## 0.8.149

Release Date: May 6, 2019

[NuGet package for WebView2 SDK 0.8.149](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.149)

This version of the WebView2 SDK requires Microsoft Edge version 76.0.149.0 or higher.

Initial developer preview release.


<!-- ====================================================================== -->
## See also

* [About Release Notes for the WebView2 SDK](./about.md)
* [Release Notes for the WebView2 SDK](./index.md)
* [Overview of WebView2 APIs](../concepts/overview-features-apis.md) - outlines many of the APIs, by feature area, that are in Release SDK packages.
* [Contacting the Microsoft Edge WebView2 team](../contact.md)
