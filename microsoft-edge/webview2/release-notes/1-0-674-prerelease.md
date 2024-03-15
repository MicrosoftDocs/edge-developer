---
title: Release Notes for WebView2 Prerelease SDK 1.0.674-prerelease
description: Release notes for Microsoft Edge WebView2 for Win32, WPF, and WinForms, covering new features, APIs, and fixes.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 10/19/2020
---
# Release Notes for WebView2 Prerelease SDK 1.0.674-prerelease

Release Date: October 19, 2020

[NuGet package for WebView2 SDK 1.0.674-prerelease](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.674-prerelease)

This prerelease version of the WebView2 SDK requires WebView2 Runtime version 86.0.616.0 or higher.


<!-- ====================================================================== -->
## General features

*  Added [NavigateWithWebResourceRequest](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#navigatewithwebresourcerequest) method to provide post data or other request headers during navigation.
*  Added [DOMContentLoaded](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#add_domcontentloaded) event that runs when the initial HTML document is loaded and parsed.
*  Added the [Environment](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#get_environment) property on WebView2.  This property exposes the WebView2 environment where an instance of WebView2 was created.
*  Added [cookie management](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#get_cookiemanager) APIs that allow developers to authenticate the WebView2 session, or retrieve cookies from WebView2 to authenticate other tools.  The WebView2 team plans to make language or framework-specific improvements.  See [API Review: Cookie Management](https://github.com/MicrosoftEdge/WebView2Announcement/issues/2).
*  Updated the [WebResourceResponseReceived](/microsoft-edge/webview2/reference/win32/icorewebview2experimental?view=webview2-1.0.674-prerelease&preserve-view=true#add_webresourceresponsereceived) event, and added immutable [WebResourceResponseView](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourceresponseview?view=webview2-1.0.674-prerelease&preserve-view=true) and [WebResourceResponseReceivedEventArgs::PopulateResponseContent](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourceresponsereceivedeventargs?view=webview2-0.9.628-prerelease&preserve-view=true#populateresponsecontent) to [WebResourceResponseView::GetContent](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalwebresourceresponseview?view=webview2-1.0.674-prerelease&preserve-view=true#getcontent).
*  Turned off [Microsoft Defender Application Guard (WDAG)](/windows/security/threat-protection/microsoft-defender-application-guard/md-app-guard-overview) in WebView2.
*  Added [SystemCursorId](/microsoft-edge/webview2/reference/win32/icorewebview2experimentalcompositioncontroller2?view=webview2-1.0.674-prerelease&preserve-view=true#get_systemcursorid) for Visual Hosting.
*  Added bug fixed for Input Method in Visual Hosting.
*  Removed include requirement for `version.lib` when using WebView2 static library.


<!-- ====================================================================== -->
## .NET

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
## See also

* [Release Notes for the WebView2 SDK](./index.md)
* [WebView2 Roadmap](../roadmap.md)
