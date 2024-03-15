---
title: Release Notes for WebView2 Prerelease SDK 1.0.790-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 02/10/2021
---
# Release Notes for WebView2 Prerelease SDK 1.0.790-prerelease

Release Date: February 10, 2021

[NuGet package for WebView2 SDK 1.0.790-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.790-prerelease)

This prerelease version of the WebView2 SDK requires Microsoft Edge version 86.0.616.0 or higher.


<!-- ====================================================================== -->
## Breaking changes

> [!IMPORTANT]
> **Breaking Change**:  WebView2 prerelease package 1.0.781 is deprecated.  Discontinue development with package 1.0.781.

> [!IMPORTANT]
> WebView2 prerelease package 0.9.430 is deprecated, and is removed with the next release.  If your WebView2 app uses the package, the WebView2 team recommends that you move to a newer package.


<!-- ====================================================================== -->
## Features

*  Added [TrySuspend and Resume](/microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.790-prerelease&preserve-view=true#trysuspend) method to suspend and resume WebViews.
*  Added [SetVirtualHostNameToFolderMapping](/microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.790-prerelease&preserve-view=true#setvirtualhostnametofoldermapping) method that maps a virtual host name to a directory path.  ([Issue #37](https://github.com/MicrosoftEdge/WebViewFeedback/issues/37), [Issue #161](https://github.com/MicrosoftEdge/WebViewFeedback/issues/161), and [Issue #212](https://github.com/MicrosoftEdge/WebViewFeedback/issues/212)).
*  Added the [DefaultBackgroundColor](/microsoft-edge/webview2/reference/win32/icorewebview2controller2?view=webview2-1.0.790-prerelease&preserve-view=true#get_defaultbackgroundcolor) property to set the color and alpha-channel of the background.  ([Issue #414](https://github.com/MicrosoftEdge/WebViewFeedback/issues/414)).
*  Added the [UserAgent](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalsettings?view=webview2-1.0.790-prerelease&preserve-view=true#get_useragent) property to get or set the User Agent.  ([Issue #122](https://github.com/MicrosoftEdge/WebViewFeedback/issues/122)).
*  Replaced the `CreateCookieWithCookie` method with the `CopyCookie` method.
*  Added visual hosting support using the [ICoreWebView2CompositionController](/microsoft-edge/webview2/reference/win32/icorewebview2compositioncontroller?view=webview2-1.0.790-prerelease&preserve-view=true) interface, which is created using the new `CreateCoreWebView2CompositionController` method from `ICoreWebView2Environment3`.


<!-- ====================================================================== -->
## Promotions

The following APIs have been promoted from Experimental to Stable in this Prerelease SDK.

*  Visual Hosting APIs
*  [SetVirtualHostNameToFolderMapping](/microsoft-edge/webview2/reference/win32/icorewebview2_3?view=webview2-1.0.790-prerelease&preserve-view=true#setvirtualhostnametofoldermapping)


<!-- ====================================================================== -->
## Bug fixes

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


<!-- ====================================================================== -->
## .NET


<!-- ------------------------------ -->
#### Bug fixes

*  Fixed bug that crashed WebView2 apps that use the WPF SDK.  The crash occurred when pressing **F4** to close a window.  ([Issue #399](https://github.com/MicrosoftEdge/WebViewFeedback/issues/399)).
*  The WebView2 initialization screen is now transparent, instead of gray.  ([Issue #196](https://github.com/MicrosoftEdge/WebViewFeedback/issues/196)).


<!-- ====================================================================== -->
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
