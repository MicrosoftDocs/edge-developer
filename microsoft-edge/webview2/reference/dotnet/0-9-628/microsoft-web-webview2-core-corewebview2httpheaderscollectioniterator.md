---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2HttpHeadersCollectionIterator
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/10/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2HttpHeadersCollectionIterator
---

# Microsoft.Web.WebView2.Core.CoreWebView2HttpHeadersCollectionIterator class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

Iterator for a collection of HTTP headers.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[HasCurrentHeader](#hascurrentheader) | True when the iterator hasn't run out of headers.
[MoveNext](#movenext) | Move the iterator to the next HTTP header in the collection.

See CoreWebView2HttpRequestHeaders and CoreWebView2HttpResponseHeaders.

## Members

#### HasCurrentHeader 

True when the iterator hasn't run out of headers.

> public bool [HasCurrentHeader](#hascurrentheader)

If the collection over which the iterator is iterating is empty or if the iterator has gone past the end of the collection then this is false.

#### MoveNext 

Move the iterator to the next HTTP header in the collection.

> public bool [MoveNext](#movenext)()

The hasNext parameter will be set to FALSE if there are no more HTTP headers. After this occurs the GetCurrentHeader method will fail if called.

