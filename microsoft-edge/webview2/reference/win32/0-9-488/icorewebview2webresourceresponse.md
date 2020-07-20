---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - WebView2 Win32 C++ ICoreWebView2WebResourceResponse
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - interface ICoreWebView2WebResourceResponse 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface ICoreWebView2WebResourceResponse
  : public IUnknown
```

An HTTP response used with the WebResourceRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Content](#get_content) | HTTP response content as stream.
[get_Headers](#get_headers) | Overridden HTTP response headers.
[get_ReasonPhrase](#get_reasonphrase) | The HTTP response reason phrase.
[get_StatusCode](#get_statuscode) | The HTTP response status code.
[put_Content](#put_content) | Set the Content property.
[put_ReasonPhrase](#put_reasonphrase) | Set the ReasonPhrase property.
[put_StatusCode](#put_statuscode) | Set the StatusCode property.

## Members

#### get_Content 

HTTP response content as stream.

> public HRESULT [get_Content](#get_content)(IStream ** content)

Stream must have all the content data available by the time this response's WebResourceRequested event deferral is completed. Stream should be agile or be created from a background thread to prevent performance impact to the UI thread. Null means no content data. IStream semantics apply (return S_OK to Read calls until all data is exhausted)

#### get_Headers 

Overridden HTTP response headers.

> public HRESULT [get_Headers](#get_headers)([ICoreWebView2HttpResponseHeaders](icorewebview2httpresponseheaders.md) ** headers)

#### get_ReasonPhrase 

The HTTP response reason phrase.

> public HRESULT [get_ReasonPhrase](#get_reasonphrase)(LPWSTR * reasonPhrase)

#### get_StatusCode 

The HTTP response status code.

> public HRESULT [get_StatusCode](#get_statuscode)(int * statusCode)

#### put_Content 

Set the Content property.

> public HRESULT [put_Content](#put_content)(IStream * content)

#### put_ReasonPhrase 

Set the ReasonPhrase property.

> public HRESULT [put_ReasonPhrase](#put_reasonphrase)(LPCWSTR reasonPhrase)

#### put_StatusCode 

Set the StatusCode property.

> public HRESULT [put_StatusCode](#put_statuscode)(int statusCode)

