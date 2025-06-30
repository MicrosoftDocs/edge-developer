---
title: Release Notes for the WebView2 SDK
description: Release notes for Microsoft Edge WebView2, covering new features, APIs, and fixes for Win32, WPF, and WinForms.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/30/2025
---
# Release Notes for the WebView2 SDK

These Release Notes provide information about new features and bug fixes that are included in the WebView2 Release SDK and the WebView2 Prerelease SDK.

<!--
the templates to copy for incoming sections are in ./includes/templates.md

this webpage covers the most recent ~5 months; periodically move oldest h2 sections from bottom of present file to archive.md.  eg covers: 
Jun B 2025
Jun 2025
May 2025
Apr 2025
Mar 2025

moved to archive:
Feb 2025
-->


<!-- Jun B 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.3351.48

Release Date: June 30, 2025

[NuGet package for WebView2 SDK 1.0.3351.48](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3351.48)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 138.0.3351.48 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted from Phase 2: Stable in Prerelease, to Phase 3: Stable in Release, and are now included in this Release SDK.


<!-- ---------- -->
###### Allow input event messages to pass through the browser window

The `CoreWebView2ControllerOptions` class now has an `AllowHostInputProcessing` property, which allows user input event messages (keyboard, mouse, touch, or pen) to pass through the browser window, to be received by an app process window.

##### [.NET/C#](#tab/dotnetcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/dotnet/api/microsoft.web.webview2.core.corewebview2controlleroptions.allowhostinputprocessing?view=webview2-dotnet-1.0.3351.48&preserve-view=true)

##### [WinRT/C#](#tab/winrtcsharp)

* `CoreWebView2ControllerOptions` Class:
   * [CoreWebView2ControllerOptions.AllowHostInputProcessing Property](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controlleroptions?view=webview2-winrt-1.0.3351.48&preserve-view=true#allowhostinputprocessing)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2ControllerOptions4](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3351.48&preserve-view=true)
   * [ICoreWebView2ControllerOptions4::get_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3351.48&preserve-view=true#get_allowhostinputprocessing)
   * [ICoreWebView2ControllerOptions4::put_AllowHostInputProcessing](/microsoft-edge/webview2/reference/win32/icorewebview2controlleroptions4?view=webview2-1.0.3351.48&preserve-view=true#put_allowhostinputprocessing)

---


<!-- ------------------------------ -->
#### Bug fixes


<!-- ---------- -->
<!-- ###### Runtime and SDK -->

<!-- * Fixed behavior.  ([Issue #]()) -->


<!-- ---------- -->
###### Runtime-only

* Fixed a blackbox issue on dialogs in visual hosting.


<!-- ---------- -->
<!-- ###### SDK-only -->

<!-- * Fixed behavior.  ([Issue #]()) -->

<!-- end of Jun B 2025 Release SDK -->


<!-- Jun B 2025 Prerelease SDK -->
<!-- ====================================================================== -->
<!-- pending -->

<!-- end of Jun B 2025 Prerelease SDK -->


<!-- Jun 2025 Release SDK -->
<!-- ====================================================================== -->
## 1.0.3296.44

Release Date: June 03, 2025

[NuGet package for WebView2 SDK 1.0.3296.44](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.3296.44)

For full API compatibility, this Release version of the WebView2 SDK requires WebView2 Runtime version 137.0.3296.44 or higher.


<!-- ------------------------------ -->
#### Promotions

The following APIs have been promoted to Stable and are now included in this Release SDK.


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

<!-- end of Jun 2025 Release SDK -->


<!-- Jun 2025 Prerelease SDK -->
<!-- ====================================================================== -->
## 1.0.3344-prerelease

Release Date: June 03, 2025

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


<!-- ====================================================================== -->
## See also

* [About Release Notes for the WebView2 SDK](./about.md)
* [Archived Release Notes for the WebView2 SDK](./archive.md)
* [Overview of WebView2 APIs](../concepts/overview-features-apis.md) - outlines many of the APIs, by feature area, that are in Release SDK packages.
* [Contacting the Microsoft Edge WebView2 team](../contact.md)
* [Release notes for Microsoft Edge web platform](../../web-platform/release-notes/index.md)

API Reference:
* [WebView2 API Reference](../webview2-api-reference.md)
   * .NET: [Microsoft.Web.WebView2.Core Namespace](/dotnet/api/microsoft.web.webview2.core)<!-- https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core -->
   * WinRT: [Microsoft.Web.WebView2.Core Namespace](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/)<!-- https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/ -->
   * Win32: [Reference (WebView2 Win32 C++)](/microsoft-edge/webview2/reference/win32/)<!-- https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/ -->
