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

# interface IWebView2HttpRequestHeaders 

> [!NOTE]
> This interface may be altered or unavailable for releases after SDK version 0.8.355. Please refer to [Reference (WebView2)](../../../reference-webview2.md) for the latest API reference.

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

Used to inspect the HTTP request on WebResourceRequested event and NavigationStarting event. Note, you can modify the HTTP request headers from a WebResourceRequested event, but not from a NavigationStarting event.

## Members

#### GetHeader 

Gets the header value matching the name.

> public HRESULT [GetHeader](#getheader)(LPCWSTR name,LPWSTR * value)

#### Contains 

Checks whether the headers contain an entry matching the header name.

> public HRESULT [Contains](#contains)(LPCWSTR name,BOOL * contains)

#### SetHeader 

Adds or updates header that matches the name.

> public HRESULT [SetHeader](#setheader)(LPCWSTR name,LPCWSTR value)

#### RemoveHeader 

Removes header that matches the name.

> public HRESULT [RemoveHeader](#removeheader)(LPCWSTR name)

#### GetIterator 

Gets an iterator over the collection of request headers.

> public HRESULT [GetIterator](#getiterator)([IWebView2HttpHeadersCollectionIterator](IWebView2HttpHeadersCollectionIterator.md) ** iterator)

