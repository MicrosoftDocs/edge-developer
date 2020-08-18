---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: WebView2 Win32 C++ ICoreWebView2WebResourceRequestedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/16/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html, ICoreWebView2WebResourceRequestedEventArgs
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
[get_Request](#get_request) | The Web resource request.
[get_ResourceContext](#get_resourcecontext) | The web resource request context.
[get_Response](#get_response) | A placeholder for the web resource response object.
[GetDeferral](#getdeferral) | Obtain an [ICoreWebView2Deferral](icorewebview2deferral.md) object and put the event into a deferred state.
[put_Response](#put_response) | Set the Response property.

## Members

#### get_Request 

The Web resource request.

> public HRESULT [get_Request](#get_request)([ICoreWebView2WebResourceRequest](icorewebview2webresourcerequest.md) ** request)

The request object may be missing some headers that are added by network stack later on.

#### get_ResourceContext 

The web resource request context.

> public HRESULT [get_ResourceContext](#get_resourcecontext)(COREWEBVIEW2_WEB_RESOURCE_CONTEXT * context)

#### get_Response 

A placeholder for the web resource response object.

> public HRESULT [get_Response](#get_response)([ICoreWebView2WebResourceResponse](icorewebview2webresourceresponse.md) ** response)

If this object is set, the web resource request will be completed with this response.

#### GetDeferral 

Obtain an [ICoreWebView2Deferral](icorewebview2deferral.md) object and put the event into a deferred state.

> public HRESULT [GetDeferral](#getdeferral)([ICoreWebView2Deferral](icorewebview2deferral.md) ** deferral)

You can use the [ICoreWebView2Deferral](icorewebview2deferral.md) object to complete the request at a later time.

#### put_Response 

Set the Response property.

> public HRESULT [put_Response](#put_response)([ICoreWebView2WebResourceResponse](icorewebview2webresourceresponse.md) * response)

An empty Web resource response object can be created with CreateWebResourceResponse and then modified to construct the response.

