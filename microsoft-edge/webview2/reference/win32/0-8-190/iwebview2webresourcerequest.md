---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2WebResourceRequest
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2WebResourceRequest 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface IWebView2WebResourceRequest
  : public IUnknown
```

An HTTP request used with the WebResourceRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Uri](#get_uri) | The request URI.
[put_Uri](#put_uri) | Set the Uri property.
[get_Method](#get_method) | The HTTP request method.
[put_Method](#put_method) | Set the Method property.
[get_Content](#get_content) | The HTTP request message body as stream.
[put_Content](#put_content) | Set the Content property.
[get_Headers](#get_headers) | The mutable HTTP request headers.

## Members

#### get_Uri 

The request URI.

> public HRESULT [get_Uri](#get_uri)(LPWSTR * uri)

#### put_Uri 

Set the Uri property.

> public HRESULT [put_Uri](#put_uri)(LPCWSTR uri)

#### get_Method 

The HTTP request method.

> public HRESULT [get_Method](#get_method)(LPWSTR * method)

#### put_Method 

Set the Method property.

> public HRESULT [put_Method](#put_method)(LPCWSTR method)

#### get_Content 

The HTTP request message body as stream.

> public HRESULT [get_Content](#get_content)(IStream ** content)

POST data would be here. If a stream is set, which will override the message body, the stream must have all the content data available by the time this response's WebResourceRequested event deferral is completed. Stream should be agile or be created from a background STA to prevent performance impact to the UI thread. Null means no content data. IStream semantics apply (return S_OK to Read calls until all data is exhausted)

#### put_Content 

Set the Content property.

> public HRESULT [put_Content](#put_content)(IStream * content)

#### get_Headers 

The mutable HTTP request headers.

> public HRESULT [get_Headers](#get_headers)([IWebView2HttpRequestHeaders](IWebView2HttpRequestHeaders.md) ** headers)

