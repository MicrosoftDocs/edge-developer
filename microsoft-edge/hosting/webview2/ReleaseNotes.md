---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView 2 for Win32 apps Release Notes
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/17/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# WebView2 SDK release notes  

Release notes for [WebView2 SDK][WebView2NuGetGallery].  

## 0.8.230  

[NuGet package][WebView2NuGetGallery0.8.230] | minimum Microsoft Edge version 77.0.230.0.  

**Re-compile your app after updating the NuGet package.**  

*   Added `Stop` API to stop all navigation and pending resource fetches \([\#28][MicrosoftEdgeWebViewFeedbackIssue28]\).  
*   Added .tlb file to the Nuget package \([\#22][MicrosoftEdgeWebViewFeedbackIssue22]\).  
*   Added .NET projects to the installer list in the NuGet package \([\#32][MicrosoftEdgeWebViewFeedbackIssue32]\).  

## 0.8.190  

[NuGet package][WebView2NuGetGallery0.8.190] | minimum Microsoft Edge version 77.0.190.0.  

**Re-compile your app after updating the NuGet package.**  

*   Added `get_AreDevToolsEnabled`/`put_AreDevToolsEnabled` to control if users are able to open DevTools \([\#16][MicrosoftEdgeWebViewFeedbackIssue12]\).  
*   Added `get_IsStatusBarEnabled`/`put_IsStatusBarEnabled` to control if the status bar is displayed \([\#19][MicrosoftEdgeWebViewFeedbackIssue19]\).  
*   Added `get_CanGoBack`/`GoBack`/`get_CanGoForward`/`GoForward` for going back and forward through navigation history.  
*   Added HTTP header types (`IWebView2HttpHeadersCollectionIterator`/`IWebView2HttpRequestHeaders`/`IWebView2HttpRequestHeaders`) for viewing and modifying HTTP headers in WebView.  
*   Added 32-bit WebView support on 64-bit machines \([\#13][MicrosoftEdgeWebViewFeedbackIssue13]\).  
*   Added WebView IDL to the SDK \([\#14][MicrosoftEdgeWebViewFeedbackIssue14]\).  
*   Added lib to support IID\_\* interface id objects \([\#12][MicrosoftEdgeWebViewFeedbackIssue12]\).  
*   Added include path, linking, and auto-copying of DLL files to NuGet TARGET file in SDK.  
*   Enabled requesting `window.open` in script.  

## 0.8.149  

[NuGet package][WebView2NuGetGallery0.8.149] | minimum Microsoft Edge version 76.0.149.0.  

Initial developer preview release.  

<!-- image links -->

<!-- Links -->
[MicrosoftEdgeWebViewFeedbackIssue12]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/12 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 12"  
[MicrosoftEdgeWebViewFeedbackIssue13]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/13 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 13"  
[MicrosoftEdgeWebViewFeedbackIssue14]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/14 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 14"  
[MicrosoftEdgeWebViewFeedbackIssue16]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/16 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 16"  
[MicrosoftEdgeWebViewFeedbackIssue19]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/19 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 19"  
[MicrosoftEdgeWebViewFeedbackIssue22]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/22 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 22"  
[MicrosoftEdgeWebViewFeedbackIssue28]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/28 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 28"  
[MicrosoftEdgeWebViewFeedbackIssue32]: https://github.com/MicrosoftEdge/WebViewFeedback/issues/32 "Feedback repo for MicrosoftEdge/WebViewFeedback Issue 32"  

[WebView2NuGetGallery]: https://aka.ms/webviewnuget "NuGet Gallery | Microsoft.Web.WebView2"  
[WebView2NuGetGallery0.8.149]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.149 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.149"  
[WebView2NuGetGallery0.8.190]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.190 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.190"  
[WebView2NuGetGallery0.8.230]: https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.230 "NuGet Gallery | Microsoft.Web.WebView2 v0.8.230" 

[WebViewsGlobalsCreateWebView2EnvironmentWithDetails]: reference/webview2.idl.md#CreateWebView2EnvironmentWithDetails "WebView Globals - CreateWebView2EnvironmentWithDetails function"  
