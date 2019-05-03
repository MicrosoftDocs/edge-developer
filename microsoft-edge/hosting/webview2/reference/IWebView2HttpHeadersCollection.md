---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView 2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2HttpHeadersCollection 

```
interface IWebView2HttpHeadersCollection
  : public IUnknown
```

A collection of HTTP headers.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[GetHeaderValue](#getheadervalue) | Gets the first header value that matches the name.
[SetHeaderValue](#setheadervalue) | Sets (overwrites if existing) a header entry.
[Contains](#contains) | Checks if a name exists.
[get_Size](#get_size) | Gets the size of collection.
[GetHeaderValueByIndex](#getheadervaluebyindex) | Gets header value by index.

Used with the [IWebView2WebResourceRequest](IWebView2WebResourceRequest.md#interface_i_web_view2_web_resource_request) and [IWebView2WebResourceResponse](IWebView2WebResourceResponse.md#interface_i_web_view2_web_resource_response) interfaces.

## Members

#### GetHeaderValue 

Gets the first header value that matches the name.

> public HRESULT [GetHeaderValue](#interface_i_web_view2_http_headers_collection_1a60f6b17f0db42f3c482f115713745cd5)(LPCWSTR name,LPWSTR * value)

#### SetHeaderValue 

Sets (overwrites if existing) a header entry.

> public HRESULT [SetHeaderValue](#interface_i_web_view2_http_headers_collection_1aa15793632b8f8947069aaa4fd12469e6)(LPCWSTR name,LPCWSTR value)

#### Contains 

Checks if a name exists.

> public HRESULT [Contains](#interface_i_web_view2_http_headers_collection_1a8dda96a37f218bd31df21656f7f14dfc)(LPCWSTR name,BOOL * contains)

#### get_Size 

Gets the size of collection.

> public HRESULT [get_Size](#interface_i_web_view2_http_headers_collection_1a88296536bf6d03aae4cc5c875fd9fe2a)(UINT32 * size)

#### GetHeaderValueByIndex 

Gets header value by index.

> public HRESULT [GetHeaderValueByIndex](#interface_i_web_view2_http_headers_collection_1a3a71308c4b75fd12cd032d6484a9ad5e)(UINT32 index,LPWSTR * name,LPWSTR * value)

