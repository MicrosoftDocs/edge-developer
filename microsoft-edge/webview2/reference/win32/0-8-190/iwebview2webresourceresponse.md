---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2WebResourceResponse
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/14/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2WebResourceResponse 

> [!NOTE]
> This interface may be altered or unavailable for releases after SDK version 0.8.355. Please refer to [Reference](../../../webview2-api-reference.md) for the latest API reference.

```
interface IWebView2WebResourceResponse
  : public IUnknown
```

An HTTP response used with the WebResourceRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Content](#get_content) | HTTP response content as stream.
[put_Content](#put_content) | Set the Content property.
[get_Headers](#get_headers) | Overridden HTTP response headers.
[get_StatusCode](#get_statuscode) | The HTTP response status code.
[put_StatusCode](#put_statuscode) | Set the StatusCode property.
[get_ReasonPhrase](#get_reasonphrase) | The HTTP response reason phrase.
[put_ReasonPhrase](#put_reasonphrase) | Set the ReasonPhrase property.

## Members

#### get_Content 

HTTP response content as stream.

> public HRESULT [get_Content](#get_content)(IStream ** content)

Stream must have all the content data available by the time this response's WebResourceRequested event deferral is completed. Stream should be agile or be created from a background thread to prevent performance impact to the UI thread. Null means no content data. IStream semantics apply (return S_OK to Read calls until all data is exhausted)

#### put_Content 

Set the Content property.

> public HRESULT [put_Content](#put_content)(IStream * content)

#### get_Headers 

Overridden HTTP response headers.

> public HRESULT [get_Headers](#get_headers)([IWebView2HttpResponseHeaders](IWebView2HttpResponseHeaders.md) ** headers)

#### get_StatusCode 

The HTTP response status code.

> public HRESULT [get_StatusCode](#get_statuscode)(int * statusCode)

#### put_StatusCode 

Set the StatusCode property.

> public HRESULT [put_StatusCode](#put_statuscode)(int statusCode)

#### get_ReasonPhrase 

The HTTP response reason phrase.

> public HRESULT [get_ReasonPhrase](#get_reasonphrase)(LPWSTR * reasonPhrase)

#### put_ReasonPhrase 

Set the ReasonPhrase property.

> public HRESULT [put_ReasonPhrase](#put_reasonphrase)(LPCWSTR reasonPhrase)

