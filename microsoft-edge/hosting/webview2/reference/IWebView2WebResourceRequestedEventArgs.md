---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2019
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
[GetDeferral](#getdeferral) | Obtain an [IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) object and put the event into a deferred state.

## Members

#### get_Request 

The HTTP request.

> public HRESULT [get_Request](#interface_i_web_view2_web_resource_requested_event_args_1ad9eca76602af8853ee01d4e8d52f19da)([IWebView2WebResourceRequest](IWebView2WebResourceRequest.md#interface_i_web_view2_web_resource_request) ** request)

#### get_Response 

The HTTP response.

> public HRESULT [get_Response](#interface_i_web_view2_web_resource_requested_event_args_1a826565dee212b438b8be92ea8e14f8e9)([IWebView2WebResourceResponse](IWebView2WebResourceResponse.md#interface_i_web_view2_web_resource_response) ** response)

#### put_Response 

Set the Response property.

> public HRESULT [put_Response](#interface_i_web_view2_web_resource_requested_event_args_1a5df2fb8d4f7473897cfef1eb841dfcbf)([IWebView2WebResourceResponse](IWebView2WebResourceResponse.md#interface_i_web_view2_web_resource_response) * response)

#### GetDeferral 

Obtain an [IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) object and put the event into a deferred state.

> public HRESULT [GetDeferral](#interface_i_web_view2_web_resource_requested_event_args_1a443caf53deaabd61ace4406ac2068c00)([IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) ** deferral)

You can use the [IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) object to complete the network request at a later time.

