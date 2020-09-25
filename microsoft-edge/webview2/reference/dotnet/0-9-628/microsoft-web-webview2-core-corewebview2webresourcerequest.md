---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2WebResourceRequest
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/10/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2WebResourceRequest
---

# Microsoft.Web.WebView2.Core.CoreWebView2WebResourceRequest class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

An HTTP request used with the WebResourceRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Content](#content) | The HTTP request message body as stream.
[Headers](#headers) | The mutable HTTP request headers.
[Method](#method) | The HTTP request method.
[Uri](#uri) | The request URI.

## Members

#### Content 

The HTTP request message body as stream.

> public Stream [Content](#content)

POST data would be here. If a stream is set, which will override the message body, the stream must have all the content data available by the time this response's WebResourceRequested event deferral is completed. Stream should be agile or be created from a background STA to prevent performance impact to the UI thread. Null means no content data. IStream semantics apply (return S_OK to Read calls until all data is exhausted).

#### Headers 

The mutable HTTP request headers.

> public [CoreWebView2HttpRequestHeaders](microsoft-web-webview2-core-corewebview2httprequestheaders.md) [Headers](#headers)

#### Method 

The HTTP request method.

> public string [Method](#method)

#### Uri 

The request URI.

> public string [Uri](#uri)

