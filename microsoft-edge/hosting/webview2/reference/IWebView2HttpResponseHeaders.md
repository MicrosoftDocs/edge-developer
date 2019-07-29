---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/29/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2HttpResponseHeaders 

```
interface IWebView2HttpResponseHeaders
  : public IUnknown
```

HTTP response headers.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[AppendHeader](#appendheader) | Appends header line with name and value.
[Contains](#contains) | Checks whether the headers contain entries matching the header name.
[GetHeaders](#getheaders) | Gets the header values matching the name.
[GetIterator](#getiterator) | Gets an iterator over the collection of entire response headers.

Used to construct a WebResourceResponse for the WebResourceRequested event.

## Members

#### AppendHeader 

Appends header line with name and value.

> public HRESULT [AppendHeader](#interface_i_web_view2_http_response_headers_1a53d7c9d79912d1582fe4f474ccc91438)(LPCWSTR name,LPCWSTR value)

#### Contains 

Checks whether the headers contain entries matching the header name.

> public HRESULT [Contains](#interface_i_web_view2_http_response_headers_1af1b5304689ac83a5ce2291dbbe6d938f)(LPCWSTR name,BOOL * contains)

#### GetHeaders 

Gets the header values matching the name.

> public HRESULT [GetHeaders](#interface_i_web_view2_http_response_headers_1abe2e755105dbe5e596a67ae546cc9621)(LPCWSTR name,[IWebView2HttpHeadersCollectionIterator](IWebView2HttpHeadersCollectionIterator.md#interface_i_web_view2_http_headers_collection_iterator) ** iterator)

#### GetIterator 

Gets an iterator over the collection of entire response headers.

> public HRESULT [GetIterator](#interface_i_web_view2_http_response_headers_1aa7b7d316138e4a19da829443d10be581)([IWebView2HttpHeadersCollectionIterator](IWebView2HttpHeadersCollectionIterator.md#interface_i_web_view2_http_headers_collection_iterator) ** iterator)

