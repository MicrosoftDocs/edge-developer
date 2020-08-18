---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2WebResourceRequestedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2WebResourceRequestedEventArgs 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface IWebView2WebResourceRequestedEventArgs
  : public IUnknown
```

Event args for the WebResourceRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Request](#get_request) | The HTTP request.
[get_Response](#get_response) | The HTTP response.
[put_Response](#put_response) | Set the Response property.
[GetDeferral](#getdeferral) | Obtain an [IWebView2Deferral](IWebView2Deferral.md) object and put the event into a deferred state.

## Members

#### get_Request 

The HTTP request.

> public HRESULT [get_Request](#get_request)([IWebView2WebResourceRequest](IWebView2WebResourceRequest.md) ** request)

#### get_Response 

The HTTP response.

> public HRESULT [get_Response](#get_response)([IWebView2WebResourceResponse](IWebView2WebResourceResponse.md) ** response)

#### put_Response 

Set the Response property.

> public HRESULT [put_Response](#put_response)([IWebView2WebResourceResponse](IWebView2WebResourceResponse.md) * response)

#### GetDeferral 

Obtain an [IWebView2Deferral](IWebView2Deferral.md) object and put the event into a deferred state.

> public HRESULT [GetDeferral](#getdeferral)([IWebView2Deferral](IWebView2Deferral.md) ** deferral)

You can use the [IWebView2Deferral](IWebView2Deferral.md) object to complete the network request at a later time.

