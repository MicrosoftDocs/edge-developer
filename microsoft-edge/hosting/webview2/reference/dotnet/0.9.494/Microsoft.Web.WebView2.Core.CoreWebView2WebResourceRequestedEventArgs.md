---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# Microsoft.Web.WebView2.Core.CoreWebView2WebResourceRequestedEventArgs class 

Namespace: Microsoft.Web.WebView2.Core
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

### Properties

#### Request 

The HTTP request.

> public HttpRequestMessage [Request](#request)

#### ResourceContext 

The web resource request contexts.

> public [CoreWebView2WebResourceContext](Microsoft.Web.WebView2.Core.md) [ResourceContext](#resourcecontext)

#### Response 

The HTTP response.

> public HttpResponseMessage [Response](#response)

### Methods

#### GetDeferral 

Obtain a CoreWebView2Deferral object and put the event into a deferred state.

> public [CoreWebView2Deferral](Microsoft.Web.WebView2.Core.CoreWebView2Deferral.md) [GetDeferral](#getdeferral)()

You can use the CoreWebView2Deferral object to complete the network request at a later time.

