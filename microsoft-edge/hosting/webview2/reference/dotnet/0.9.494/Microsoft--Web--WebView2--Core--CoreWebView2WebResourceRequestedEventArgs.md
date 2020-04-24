---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/22/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# class Microsoft::Web::WebView2::Core::CoreWebView2WebResourceRequestedEventArgs 

Event args for the WebResourceRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Request](#request) | The HTTP request.
[Response](#response) | The HTTP response.
[ResourceContext](#resourcecontext) | The web resource request contexts.
[CoreWebView2WebResourceRequestedEventArgs](#corewebview2webresourcerequestedeventargs) | Initializes a new instance of the [CoreWebView2WebResourceRequestedEventArgs](#microsoft::web::webview2::core::corewebview2webresourcerequestedeventargs) class.
[GetDeferral](#getdeferral) | Obtain a [CoreWebView2Deferral](Microsoft--Web--WebView2--Core--CoreWebView2Deferral.md) object and put the event into a deferred state.

## Members

#### Request 

The HTTP request.

> {property} HttpRequestMessage [Request](#request)

#### Response 

The HTTP response.

> {property} HttpResponseMessage [Response](#response)

#### ResourceContext 

The web resource request contexts.

> {property} [CoreWebView2WebResourceContext](Microsoft--Web--WebView2--Core.md) [ResourceContext](#resourcecontext)

#### CoreWebView2WebResourceRequestedEventArgs 

Initializes a new instance of the [CoreWebView2WebResourceRequestedEventArgs](#microsoft::web::webview2::core::corewebview2webresourcerequestedeventargs) class.

> public inline  [CoreWebView2WebResourceRequestedEventArgs](#corewebview2webresourcerequestedeventargs)(Microsoft.Web.WebView2.Core.Raw.ICoreWebView2WebResourceRequestedEventArgs rawCoreWebView2WebResourceRequestedEventArgs)

#### GetDeferral 

Obtain a [CoreWebView2Deferral](Microsoft--Web--WebView2--Core--CoreWebView2Deferral.md) object and put the event into a deferred state.

> public inline [CoreWebView2Deferral](Microsoft--Web--WebView2--Core--CoreWebView2Deferral.md) [GetDeferral](#getdeferral)()

You can use the [CoreWebView2Deferral](Microsoft--Web--WebView2--Core--CoreWebView2Deferral.md) object to complete the network request at a later time.

