---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - WebView2 Win32 C++ ICoreWebView2WebResourceRequest
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - interface ICoreWebView2WebResourceRequest 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface ICoreWebView2WebResourceRequest
  : public IUnknown
```

An HTTP request used with the WebResourceRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Content](#get_content) | The HTTP request message body as stream.
[get_Headers](#get_headers) | The mutable HTTP request headers.
[get_Method](#get_method) | The HTTP request method.
[get_Uri](#get_uri) | The request URI.
[put_Content](#put_content) | Set the Content property.
[put_Method](#put_method) | Set the Method property.
[put_Uri](#put_uri) | Set the Uri property.

## Members

#### get_Content 

The HTTP request message body as stream.

> public HRESULT [get_Content](#get_content)(IStream ** content)

POST data would be here. If a stream is set, which will override the message body, the stream must have all the content data available by the time this response's WebResourceRequested event deferral is completed. Stream should be agile or be created from a background STA to prevent performance impact to the UI thread. Null means no content data. IStream semantics apply (return S_OK to Read calls until all data is exhausted)

#### get_Headers 

The mutable HTTP request headers.

> public HRESULT [get_Headers](#get_headers)([ICoreWebView2HttpRequestHeaders](icorewebview2httprequestheaders.md) ** headers)

#### get_Method 

The HTTP request method.

> public HRESULT [get_Method](#get_method)(LPWSTR * method)

#### get_Uri 

The request URI.

> public HRESULT [get_Uri](#get_uri)(LPWSTR * uri)

#### put_Content 

Set the Content property.

> public HRESULT [put_Content](#put_content)(IStream * content)

#### put_Method 

Set the Method property.

> public HRESULT [put_Method](#put_method)(LPCWSTR method)

#### put_Uri 

Set the Uri property.

> public HRESULT [put_Uri](#put_uri)(LPCWSTR uri)

