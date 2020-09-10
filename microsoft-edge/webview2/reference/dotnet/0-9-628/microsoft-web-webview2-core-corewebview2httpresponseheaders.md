---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2HttpResponseHeaders
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/10/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2HttpResponseHeaders
---

# Microsoft.Web.WebView2.Core.CoreWebView2HttpResponseHeaders class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

HTTP response headers.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[AppendHeader](#appendheader) | Appends header line with name and value.
[Contains](#contains) | Checks whether the headers contain entries matching the header name.
[GetHeader](#getheader) | Gets the first header value in the collection matching the name.
[GetHeaders](#getheaders) | Gets the header values matching the name.
[GetIterator](#getiterator) | Gets an iterator over the collection of entire response headers.

Used to construct a WebResourceResponse for the WebResourceRequested event.

## Members

#### AppendHeader 

Appends header line with name and value.

> public void [AppendHeader](#appendheader)(string name, string value)

#### Contains 

Checks whether the headers contain entries matching the header name.

> public bool [Contains](#contains)(string name)

#### GetHeader 

Gets the first header value in the collection matching the name.

> public string [GetHeader](#getheader)(string name)

#### GetHeaders 

Gets the header values matching the name.

> public CoreWebView2HttpHeadersCollectionIterator [GetHeaders](#getheaders)(string name)

#### GetIterator 

Gets an iterator over the collection of entire response headers.

> public CoreWebView2HttpHeadersCollectionIterator [GetIterator](#getiterator)()

