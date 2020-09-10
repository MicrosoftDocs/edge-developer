---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2WebResourceResponse
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/10/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2WebResourceResponse
---

# Microsoft.Web.WebView2.Core.CoreWebView2WebResourceResponse class 

[!INCLUDE [prerelease-note](../../includes/prerelease-note.md)]

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

An HTTP response used with the WebResourceRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Content](#content) | HTTP response content as stream.
[Headers](#headers) | Overridden HTTP response headers.
[ReasonPhrase](#reasonphrase) | The HTTP response reason phrase.
[StatusCode](#statuscode) | The HTTP response status code.

## Members

#### Content 

HTTP response content as stream.

> public Stream? [Content](#content)

Stream must have all the content data available by the time this response's WebResourceRequested event deferral is completed. Stream should be agile or be created from a background thread to prevent performance impact to the UI thread. Null means no content data. IStream semantics apply (return S_OK to Read calls until all data is exhausted).

#### Headers 

Overridden HTTP response headers.

> public [CoreWebView2HttpResponseHeaders](microsoft-web-webview2-core-corewebview2httpresponseheaders.md)? [Headers](#headers)

#### ReasonPhrase 

The HTTP response reason phrase.

> public string [ReasonPhrase](#reasonphrase)

#### StatusCode 

The HTTP response status code.

> public int [StatusCode](#statuscode)

