---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - WebView2 Win32 C++ ICoreWebView2WebResourceRequestedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - interface ICoreWebView2WebResourceRequestedEventArgs 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface ICoreWebView2WebResourceRequestedEventArgs
  : public IUnknown
```

Event args for the WebResourceRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Request](#get_request) | The HTTP request.
[get_ResourceContext](#get_resourcecontext) | The web resource request contexts.
[get_Response](#get_response) | The HTTP response.
[GetDeferral](#getdeferral) | Obtain an [ICoreWebView2Deferral](icorewebview2deferral.md) object and put the event into a deferred state.
[put_Response](#put_response) | Set the Response property.

## Members

#### get_Request 

The HTTP request.

> public HRESULT [get_Request](#get_request)([ICoreWebView2WebResourceRequest](icorewebview2webresourcerequest.md) ** request)

#### get_ResourceContext 

The web resource request contexts.

> public HRESULT [get_ResourceContext](#get_resourcecontext)(COREWEBVIEW2_WEB_RESOURCE_CONTEXT * context)

#### get_Response 

The HTTP response.

> public HRESULT [get_Response](#get_response)([ICoreWebView2WebResourceResponse](icorewebview2webresourceresponse.md) ** response)

#### GetDeferral 

Obtain an [ICoreWebView2Deferral](icorewebview2deferral.md) object and put the event into a deferred state.

> public HRESULT [GetDeferral](#getdeferral)([ICoreWebView2Deferral](icorewebview2deferral.md) ** deferral)

You can use the [ICoreWebView2Deferral](icorewebview2deferral.md) object to complete the network request at a later time.

#### put_Response 

Set the Response property.

> public HRESULT [put_Response](#put_response)([ICoreWebView2WebResourceResponse](icorewebview2webresourceresponse.md) * response)

