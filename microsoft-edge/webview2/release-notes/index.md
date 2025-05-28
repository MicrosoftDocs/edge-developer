---
title: Release Notes for the WebView2 SDK
description: Release notes for Microsoft Edge WebView2, covering new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/02/2025
---
# Release Notes for the WebView2 SDK

These Release Notes provide information about new features and bug fixes that are included in the WebView2 Release SDK and the WebView2 Prerelease SDK.

<!--
the template to copy for incoming sections is at end of this file

this webpage covers the most recent ~5 months; periodically move oldest h2 sections from bottom of present file to archive.md.  eg covers: 
Jun 2025
May 2025
Apr 2025
Mar 2025
Feb 2025

moved to archive:
Jan 2025
[Dec 2024]
-->


<!-- June 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.3296.44

Release Date: June 02, 2025

[NuGet package for WebView2 SDK 1.0.3296.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3296.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 137.0.3296.44 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ---------- -->
###### Set default background color on WebView2 initialization (DefaultBackgroundColor API)

The DefaultBackgroundColor API allows users to set the `DefaultBackgroundColor` property at initialization.  This prevents a disruptive white flash during the WebView2 loading process.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ControllerOptions` Class:
  * [CoreWebView2ControllerOptions.DefaultBackgroundColor Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.defaultbackgroundcolor?view=webview2-dotnet-1.0.3296.44&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ControllerOptions` Class:
  * [CoreWebView2ControllerOptions.DefaultBackgroundColor Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.3296.44&preserve-view=true#defaultbackgroundcolor)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ControllerOptions3](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions3?view=webview2-1.0.3296.44&preserve-view=true)
  * [ICoreWebView2ControllerOptions3::get_DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions3?view=webview2-1.0.3296.44&preserve-view=true#get_defaultbackgroundcolor)
  * [ICoreWebView2ControllerOptions3::put_DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions3?view=webview2-1.0.3296.44&preserve-view=true#put_defaultbackgroundcolor)
 
---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed the margins in the printed PDF.

<!-- end of June 2025 Release SDK -->


<!-- June 2025 Prerelease SDK -->
<!-- ====================================================================== -->
## 1.0.3344-prerelease

Release Date: June 02, 2025

[NuGet package for WebView2 SDK 1.0.3344-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3344-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires the WebView2 Runtime that ships with Microsoft Edge version 138.0.3344.0 or higher.


<!-- ------------------------------ -->
#### Experimental APIs

No Experimental APIs have been added in this Prerelease SDK.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.


<!-- ---------- -->
###### Allow input event messages to pass through the browser window

The `CoreWebView2ControllerOptions` class now has an `AllowHostInputProcessing` property, which allows user input event messages (keyboard, mouse, touch, or pen) to pass through the browser window, to be received by an app process window.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ControllerOptions` Class:
  * [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.allowhostinputprocessing?view=webview2-dotnet-1.0.3344-prerelease&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ControllerOptions` Class:
  * [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.3344-prerelease&preserve-view=true#allowhostinputprocessing)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ControllerOptions4](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3344-prerelease&preserve-view=true)
  * [ICoreWebView2ControllerOptions4::get_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3344-prerelease&preserve-view=true#get_allowhostinputprocessing)
  * [ICoreWebView2ControllerOptions4::put_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3344-prerelease&preserve-view=true#put_allowhostinputprocessing)

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
###### Runtime-only

* Fixed a bug where a mouse event doesn't fire after a touch event.
* Disabled Web capture on the WebView2 control.
* Fixed the **Downloads** dialog.
* Fixed an issue with downloads in the default browser frame.  ([Issue #5196](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5196))
* Fixed the margins in the printed PDF.

<!-- end of June 2025 Prerelease SDK -->


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
