---
title: Prerelease SDK 1.0.1010-prerelease, for Runtime 95 (Sep. 14, 2021)
description: Release notes for Microsoft Edge WebView2, for Prerelease SDK 1.0.1010-prerelease.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 06/11/2026
---
# Prerelease SDK 1.0.1010-prerelease, for Runtime 95 (Sep. 14, 2021)

Release notes for Microsoft Edge WebView2 Prerelease SDK, release date: Sep. 14, 2021.

[NuGet package for WebView2 SDK 1.0.1010-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.1010-prerelease)

For full API compatibility, this Prerelease version of the WebView2 SDK requires Microsoft Edge version 95.0.1010.0 or later.


<!-- ====================================================================== -->
## General features

* WebView2 performance improvements.

* Reliability fixes.  ([Issue #1605](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1605) and [Issue #1678](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1678))

* Added performance improvements during startup and when the host app is in the foreground.


<!-- ====================================================================== -->
## Experimental APIs (Phase 1: Experimental in Prerelease)

The following Experimental APIs have been added in this Prerelease SDK.

* Removed silent failures by using `EnsureCoreWebView2Async`, which throws an `ArgumentException` when called multiple times with incompatible parameters.

* Changed default handling of the [UserDataFolder](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironment5?view=webview2-1.0.1010-prerelease&preserve-view=true#get_userdatafolder) property in the environment object.

   > [!CAUTION]
   > **Breaking Change**:  The default handling for the user data folder, if the developer doesn't specify where to put it, will be changing.  See [Announcement: User directory folder default handling updates](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1410).

* Added [navigation & script APIs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalframe?view=webview2-1.0.1010-prerelease&preserve-view=true) for iframes.

* Added [MemoryUsageTargetLevel](/microsoft-edge/webview2/reference/win32/icorewebview2experimental5?view=webview2-1.0.1010-prerelease&preserve-view=true) which allows developers to specify memory consumption levels, such as low, or normal.

* Added [ExclusiveUserDataFolderAccess](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalenvironmentoptions?view=webview2-1.0.1010-prerelease&preserve-view=true) to environment options.

* Added [HiddenPdfToolbarItems](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings6?view=webview2-1.0.1010-prerelease&preserve-view=true) to customize PDF toolbar items.

* Added [PrintToPdf](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalprinttopdfcompletedhandler?view=webview2-1.0.1010-prerelease&preserve-view=true), which allows printing the current page to PDF. Also, you can use optional custom settings with this new API.
* Added [AllowExternalDrop](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller3?view=webview2-1.0.1010-prerelease&preserve-view=true) property to allow the dragging and dropping of objects from outside a WebView2 control into it.

* Added [ContextMenu APIs](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcontextmenuitem?view=webview2-1.0.1010-prerelease&preserve-view=true) which allow customization of the WebView2 context menu.


<!-- ====================================================================== -->
## Promotions to Phase 2 (Stable in Prerelease)

The following APIs have been promoted from Phase 1: Experimental in Prerelease, to Phase 2: Stable in Prerelease, and are included in this Prerelease SDK:
* `IsSwipeNavigationEnabled`
* `BrowserProcessExited`
* `OpenBrowserTaskManager`


<!-- ====================================================================== -->
## Bug fixes

* Improved how host objects exceptions are caught in your JavaScript code.

* Replaced WebView2 icon with a generic icon in DevTools windows.

* Turn on the Tab screen sharing option when `MediaDevices.getDisplayMedia()` is used. ([Issue #1566](https://github.com/MicrosoftEdge/WebViewFeedback/issues/1566))

* Fixed a bug where dropdown menus or lists were displayed behind the window that has focus. ([Issue #411](https://github.com/MicrosoftEdge/WebViewFeedback/issues/411))

* Fixed focus issues when using `put_IsVisible(false)`. ([Issue #238](https://github.com/MicrosoftEdge/WebViewFeedback/issues/238))

* Fixed a bug to apply `SetVirtualHostNameToFolderMapping` to pop-up windows.

* Fixed bugs where an `IDispatch` objects were returned as `IUnknown`.


<!-- ====================================================================== -->
## See also

* [Runtime 95.0.1020.30 (Oct. 25, 2021)](../runtime/95.md)
* [Release notes for WebView2](../index.md)
   * [Release notes for the WebView2 Runtime](../runtime/index.md)
   * [Release notes for WebView2 SDKs](./index.md)
