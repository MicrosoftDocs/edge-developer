---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView 2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/17/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# WebView2 SDK release notes

Release notes for [WebView2 SDK](https://www.nuget.org/packages/Microsoft.Web.WebView2/).

## 0.8.230

[NuGet package](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.230) | minimum Microsoft Edge version 77.0.230.0.

**Re-compile your app after updating the NuGet package.**

- Add `Stop` API to stop all navigations and pending resource fetches ([#28](https://github.com/MicrosoftEdge/WebViewFeedback/issues/28)).
- NuGet package now includes the .tlb file ([#22](https://github.com/MicrosoftEdge/WebViewFeedback/issues/22)).
- NuGet package can now installable in .NET projects ([#32](https://github.com/MicrosoftEdge/WebViewFeedback/issues/32)).

## 0.8.190

[NuGet package](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.190) | minimum Microsoft Edge version 77.0.190.0.

**Re-compile your app after updating the NuGet package.**

- Add `get_AreDevToolsEnabled`/`put_AreDevToolsEnabled` to control whether end users are able to open DevTools ([#16](https://github.com/MicrosoftEdge/WebViewFeedback/issues/16)).
- Add `get_IsStatusBarEnabled`/`put_IsStatusBarEnabled` to control whether whether the status bar will be displayed ([#19](https://github.com/MicrosoftEdge/WebViewFeedback/issues/19)).
- Add `get_CanGoBack`/`GoBack`/`get_CanGoForward`/`GoForward` for going back and forward through navigation history.
- Add HTTP headers types (`IWebView2HttpHeadersCollectionIterator`/`IWebView2HttpRequestHeaders`/`IWebView2HttpRequestHeaders`) for viewing and modifying HTTP headers in WebView.
- Support running 32-bit WebView on 64-bit machines ([#13](https://github.com/MicrosoftEdge/WebViewFeedback/issues/13)).
- Ship WebView IDL with the SDK ([#14](https://github.com/MicrosoftEdge/WebViewFeedback/issues/14)).
- Expose addition lib to support IID_* interface id objects ([#12](https://github.com/MicrosoftEdge/WebViewFeedback/issues/12)).
- Add NuGet TARGET file in SDK to add include path, linking, and auto-copying of DLL files.
- Enable calling `window.open` in script.

## 0.8.149

[NuGet package](https://www.nuget.org/packages/Microsoft.Web.WebView2/0.8.149) | minimum Microsoft Edge version 76.0.149.0.

Initial developer preview release.
