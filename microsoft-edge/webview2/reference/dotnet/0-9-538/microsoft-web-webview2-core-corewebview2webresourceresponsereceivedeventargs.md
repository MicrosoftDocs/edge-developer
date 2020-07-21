---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2WebResourceResponseReceivedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2WebResourceResponseReceivedEventArgs
---

# Microsoft.Web.WebView2.Core.CoreWebView2WebResourceResponseReceivedEventArgs class 

[!INCLUDE [prerelease-note](../../includes/prerelease-note.md)]

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

Event args for the WebResourceResponseReceived event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Request](#request) | Web resource request object.
[Response](#response) | Web resource response object.
[PopulateResponseContentAsync](#populateresponsecontentasync) | Async method to request the Content stream of the response.

## Members

#### Request 

Web resource request object.

> public HttpRequestMessage [Request](#request)

Any modifications to this object will be ignored.

#### Response 

Web resource response object.

> public HttpResponseMessage [Response](#response)

Any modifications to this object will be ignored.

#### PopulateResponseContentAsync 

Async method to request the Content stream of the response.

> public async Task [PopulateResponseContentAsync](#populateresponsecontentasync)()

