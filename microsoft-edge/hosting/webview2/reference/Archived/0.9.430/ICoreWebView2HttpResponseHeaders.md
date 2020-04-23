---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/26/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# interface ICoreWebView2HttpResponseHeaders 

> [!NOTE]
> This interface may be altered or unavailable for releases after SDK version 0.9.430. Please refer to [Reference (WebView2)](../../../reference-webview2.md) for the latest API reference.

```
interface ICoreWebView2HttpResponseHeaders
  : public IUnknown
```

HTTP response headers.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[AppendHeader](#appendheader) | Appends header line with name and value.
[Contains](#contains) | Checks whether the headers contain entries matching the header name.
[GetHeader](#getheader) | Gets the first header value in the collection matching the name.
[GetHeaders](#getheaders) | Gets the header values matching the name.
[GetIterator](#getiterator) | Gets an iterator over the collection of entire response headers.

Used to construct a WebResourceResponse for the WebResourceRequested event.

## Members

#### AppendHeader 

Appends header line with name and value.

> public HRESULT [AppendHeader](#appendheader)(LPCWSTR name,LPCWSTR value)

#### Contains 

Checks whether the headers contain entries matching the header name.

> public HRESULT [Contains](#contains)(LPCWSTR name,BOOL * contains)

#### GetHeader 

Gets the first header value in the collection matching the name.

> public HRESULT [GetHeader](#getheader)(LPCWSTR name,LPWSTR * value)

#### GetHeaders 

Gets the header values matching the name.

> public HRESULT [GetHeaders](#getheaders)(LPCWSTR name,[ICoreWebView2HttpHeadersCollectionIterator](ICoreWebView2HttpHeadersCollectionIterator.md) ** iterator)

#### GetIterator 

Gets an iterator over the collection of entire response headers.

> public HRESULT [GetIterator](#getiterator)([ICoreWebView2HttpHeadersCollectionIterator](ICoreWebView2HttpHeadersCollectionIterator.md) ** iterator)

