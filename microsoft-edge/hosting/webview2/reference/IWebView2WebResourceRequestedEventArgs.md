---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/09/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2WebResourceRequestedEventArgs 

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
[GetDeferral](#getdeferral) | Obtain an [IWebView2Deferral](IWebView2Deferral.md#iwebview2deferral) object and put the event into a deferred state.

## Members

#### get_Request 

The HTTP request.

> public HRESULT [get_Request](#get_request)([IWebView2WebResourceRequest](IWebView2WebResourceRequest.md#iwebview2webresourcerequest) ** request)

#### get_Response 

The HTTP response.

> public HRESULT [get_Response](#get_response)([IWebView2WebResourceResponse](IWebView2WebResourceResponse.md#iwebview2webresourceresponse) ** response)

#### put_Response 

Set the Response property.

> public HRESULT [put_Response](#put_response)([IWebView2WebResourceResponse](IWebView2WebResourceResponse.md#iwebview2webresourceresponse) * response)

#### GetDeferral 

Obtain an [IWebView2Deferral](IWebView2Deferral.md#iwebview2deferral) object and put the event into a deferred state.

> public HRESULT [GetDeferral](#getdeferral)([IWebView2Deferral](IWebView2Deferral.md#iwebview2deferral) ** deferral)

You can use the [IWebView2Deferral](IWebView2Deferral.md#iwebview2deferral) object to complete the network request at a later time.

