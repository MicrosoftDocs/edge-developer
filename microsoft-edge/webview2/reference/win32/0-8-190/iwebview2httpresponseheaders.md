---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2HttpResponseHeaders
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2HttpResponseHeaders 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

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

> public HRESULT [AppendHeader](#appendheader)(LPCWSTR name,LPCWSTR value)

#### Contains 

Checks whether the headers contain entries matching the header name.

> public HRESULT [Contains](#contains)(LPCWSTR name,BOOL * contains)

#### GetHeaders 

Gets the header values matching the name.

> public HRESULT [GetHeaders](#getheaders)(LPCWSTR name,[IWebView2HttpHeadersCollectionIterator](IWebView2HttpHeadersCollectionIterator.md) ** iterator)

#### GetIterator 

Gets an iterator over the collection of entire response headers.

> public HRESULT [GetIterator](#getiterator)([IWebView2HttpHeadersCollectionIterator](IWebView2HttpHeadersCollectionIterator.md) ** iterator)

