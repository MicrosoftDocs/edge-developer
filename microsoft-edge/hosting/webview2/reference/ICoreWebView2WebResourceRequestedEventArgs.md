---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/24/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# interface ICoreWebView2WebResourceRequestedEventArgs 

```
interface ICoreWebView2WebResourceRequestedEventArgs
  : public IUnknown
```

Event args for the WebResourceRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Request](#get_request) | The HTTP request.
[get_Response](#get_response) | The HTTP response.
[put_Response](#put_response) | Set the Response property.
[GetDeferral](#getdeferral) | Obtain an [ICoreWebView2Deferral](ICoreWebView2Deferral.md#icorewebview2deferral) object and put the event into a deferred state.
[get_ResourceContext](#get_resourcecontext) | The web resource request contexts.

## Members

#### get_Request 

The HTTP request.

> public HRESULT [get_Request](#get_request)([ICoreWebView2WebResourceRequest](ICoreWebView2WebResourceRequest.md#icorewebview2webresourcerequest) ** request)

#### get_Response 

The HTTP response.

> public HRESULT [get_Response](#get_response)([ICoreWebView2WebResourceResponse](ICoreWebView2WebResourceResponse.md#icorewebview2webresourceresponse) ** response)

#### put_Response 

Set the Response property.

> public HRESULT [put_Response](#put_response)([ICoreWebView2WebResourceResponse](ICoreWebView2WebResourceResponse.md#icorewebview2webresourceresponse) * response)

#### GetDeferral 

Obtain an [ICoreWebView2Deferral](ICoreWebView2Deferral.md#icorewebview2deferral) object and put the event into a deferred state.

> public HRESULT [GetDeferral](#getdeferral)([ICoreWebView2Deferral](ICoreWebView2Deferral.md#icorewebview2deferral) ** deferral)

You can use the [ICoreWebView2Deferral](ICoreWebView2Deferral.md#icorewebview2deferral) object to complete the network request at a later time.

#### get_ResourceContext 

The web resource request contexts.

> public HRESULT [get_ResourceContext](#get_resourcecontext)(CORE_WEBVIEW2_WEB_RESOURCE_CONTEXT * context)

