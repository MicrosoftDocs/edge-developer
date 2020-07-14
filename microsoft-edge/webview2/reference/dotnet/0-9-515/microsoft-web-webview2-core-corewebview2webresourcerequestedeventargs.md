---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - Microsoft.Web.WebView2.Core.CoreWebView2WebResourceRequestedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/14/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - Microsoft.Web.WebView2.Core.CoreWebView2WebResourceRequestedEventArgs class 

> [!NOTE]
> This reference may be altered or unavailable for releases after SDK version 0.9.515. Please refer to [WebView2 API reference](../../../webview2-api-reference.md) for the latest API reference.

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

Event args for the WebResourceRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Request](#request) | The HTTP request.
[ResourceContext](#resourcecontext) | The web resource request contexts.
[Response](#response) | The HTTP response.
[GetDeferral](#getdeferral) | Obtain a CoreWebView2Deferral object and put the event into a deferred state.

## Members

#### Request 

The HTTP request.

> public HttpRequestMessage [Request](#request)

#### ResourceContext 

The web resource request contexts.

> public [CoreWebView2WebResourceContext](./namespace-microsoft-web-webview2-core.md) [ResourceContext](#resourcecontext)

#### Response 

The HTTP response.

> public HttpResponseMessage [Response](#response)

#### GetDeferral 

Obtain a CoreWebView2Deferral object and put the event into a deferred state.

> public [CoreWebView2Deferral](microsoft-web-webview2-core-corewebview2deferral.md) [GetDeferral](#getdeferral)()

You can use the CoreWebView2Deferral object to complete the network request at a later time.

