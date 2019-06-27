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

# interface IWebView2HttpRequestHeaders 

```
interface IWebView2HttpRequestHeaders
  : public IUnknown
```

HTTP request headers.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[GetHeader](#getheader) | Gets the header value matching the name.
[Contains](#contains) | Checks whether the headers contain an entry matching the header name.
[SetHeader](#setheader) | Adds or updates header that matches the name.
[RemoveHeader](#removeheader) | Removes header that matches the name.
[GetIterator](#getiterator) | Gets an iterator over the collection of request headers.

Used to inspect or modify the HTTP request on WebResourceRequested event and NavigationStarting event.

## Members

#### GetHeader 

Gets the header value matching the name.

> public HRESULT [GetHeader](#interface_i_web_view2_http_request_headers_1af36bd1213f8518e8aa0355b473bbc23c)(LPCWSTR name,LPWSTR * value)

#### Contains 

Checks whether the headers contain an entry matching the header name.

> public HRESULT [Contains](#interface_i_web_view2_http_request_headers_1a431d0b98a18169e5379fe49642f102ac)(LPCWSTR name,BOOL * contains)

#### SetHeader 

Adds or updates header that matches the name.

> public HRESULT [SetHeader](#interface_i_web_view2_http_request_headers_1a2258686c0bf6b0248feb4668a4f77396)(LPCWSTR name,LPCWSTR value)

#### RemoveHeader 

Removes header that matches the name.

> public HRESULT [RemoveHeader](#interface_i_web_view2_http_request_headers_1ab6a94e7152c096d81947e900545023c4)(LPCWSTR name)

#### GetIterator 

Gets an iterator over the collection of request headers.

> public HRESULT [GetIterator](#interface_i_web_view2_http_request_headers_1aa64b958a33ae04cff83a83396257c15b)([IWebView2HttpHeadersCollectionIterator](IWebView2HttpHeadersCollectionIterator.md#interface_i_web_view2_http_headers_collection_iterator) ** iterator)

