---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2HttpRequestHeaders
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/10/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2HttpRequestHeaders
---

# Microsoft.Web.WebView2.Core.CoreWebView2HttpRequestHeaders class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

HTTP request headers.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Contains](#contains) | Checks whether the headers contain an entry matching the header name.
[GetHeader](#getheader) | Gets the header value matching the name.
[GetHeaders](#getheaders) | Gets the header value matching the name via an iterator.
[GetIterator](#getiterator) | Gets an iterator over the collection of request headers.
[RemoveHeader](#removeheader) | Removes header that matches the name.
[SetHeader](#setheader) | Adds or updates header that matches the name.

Used to inspect the HTTP request on WebResourceRequested event and NavigationStarting event. Note, you can modify the HTTP request headers from a WebResourceRequested event, but not from a NavigationStarting event.

## Members

#### Contains 

Checks whether the headers contain an entry matching the header name.

> public bool [Contains](#contains)(string name)

#### GetHeader 

Gets the header value matching the name.

> public string [GetHeader](#getheader)(string name)

#### GetHeaders 

Gets the header value matching the name via an iterator.

> public CoreWebView2HttpHeadersCollectionIterator [GetHeaders](#getheaders)(string name)

#### GetIterator 

Gets an iterator over the collection of request headers.

> public CoreWebView2HttpHeadersCollectionIterator [GetIterator](#getiterator)()

#### RemoveHeader 

Removes header that matches the name.

> public void [RemoveHeader](#removeheader)(string name)

#### SetHeader 

Adds or updates header that matches the name.

> public void [SetHeader](#setheader)(string name, string value)

