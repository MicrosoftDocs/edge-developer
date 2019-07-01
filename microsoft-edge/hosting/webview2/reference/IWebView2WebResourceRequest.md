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

# interface IWebView2WebResourceRequest 

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

> public HRESULT [get_Uri](#interface_i_web_view2_web_resource_request_1a625ace0bf19e263cab0751cd9b9d46ea)(LPWSTR * uri)

#### put_Uri 

Set the Uri property.

> public HRESULT [put_Uri](#interface_i_web_view2_web_resource_request_1ae69c484c227b85a19a86b8839e9f05f0)(LPCWSTR uri)

#### get_Method 

The HTTP request method.

> public HRESULT [get_Method](#interface_i_web_view2_web_resource_request_1afac446fd237bc575b05ff8355c870862)(LPWSTR * method)

#### put_Method 

Set the Method property.

> public HRESULT [put_Method](#interface_i_web_view2_web_resource_request_1a78d16e3f9f7c5ed0535beeb48e5ab16f)(LPCWSTR method)

#### get_Content 

The HTTP request message body as stream.

> public HRESULT [get_Content](#interface_i_web_view2_web_resource_request_1a9e148c80d169a5a7d504003a1e9ba8c5)(IStream ** content)

POST data would be here. If a stream is set, which will override the message body, the stream must have all the content data available by the time this response's WebResourceRequested event deferral is completed. Stream should be agile or be created from a background STA to prevent performance impact to the UI thread. Null means no content data. IStream semantics apply (return S_OK to Read calls until all data is exhausted)

#### put_Content 

Set the Content property.

> public HRESULT [put_Content](#interface_i_web_view2_web_resource_request_1aa8cee7896752e1ad59829b5cdedab5b3)(IStream * content)

#### get_Headers 

The mutable HTTP request headers.

> public HRESULT [get_Headers](#interface_i_web_view2_web_resource_request_1a7ccf9a217ed26e1290ac858733f032c9)([IWebView2HttpRequestHeaders](IWebView2HttpRequestHeaders.md#interface_i_web_view2_http_request_headers) ** headers)

