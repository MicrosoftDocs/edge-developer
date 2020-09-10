---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2WebResourceRequestedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/10/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2WebResourceRequestedEventArgs
---

# Microsoft.Web.WebView2.Core.CoreWebView2WebResourceRequestedEventArgs class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

Event args for the WebResourceRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Request](#request) | The Web resource request.
[ResourceContext](#resourcecontext) | The web resource request context.
[Response](#response) | A placeholder for the web resource response object.
[GetDeferral](#getdeferral) | Obtain a CoreWebView2Deferral object and put the event into a deferred state.

## Members

#### Request 

The Web resource request.

> public [CoreWebView2WebResourceRequest](microsoft-web-webview2-core-corewebview2webresourcerequest.md) [Request](#request)

The request object may be missing some headers that are added by network stack later on.

#### ResourceContext 

The web resource request context.

> public [CoreWebView2WebResourceContext](./namespace-microsoft-web-webview2-core.md) [ResourceContext](#resourcecontext)

#### Response 

A placeholder for the web resource response object.

> public [CoreWebView2WebResourceResponse](microsoft-web-webview2-core-corewebview2webresourceresponse.md) [Response](#response)

If this object is set, the web resource request will be completed with this response. An empty Web resource response object can be created with CreateWebResourceResponse and then modified to construct the response.

#### GetDeferral 

Obtain a CoreWebView2Deferral object and put the event into a deferred state.

> public [CoreWebView2Deferral](microsoft-web-webview2-core-corewebview2deferral.md) [GetDeferral](#getdeferral)()

You can use the CoreWebView2Deferral object to complete the request at a later time.

