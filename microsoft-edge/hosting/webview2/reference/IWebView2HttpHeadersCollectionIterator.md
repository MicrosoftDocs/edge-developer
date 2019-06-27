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

# interface IWebView2HttpHeadersCollectionIterator 

```
interface IWebView2HttpHeadersCollectionIterator
  : public IUnknown
```

Iterator for collection of HTTP headers.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[GetCurrentHeader](#getcurrentheader) | 
[MoveNext](#movenext) | 

## Members

#### GetCurrentHeader 

> public HRESULT [GetCurrentHeader](#interface_i_web_view2_http_headers_collection_iterator_1a8d61b76e65ed87aedea6abad210f2498)(LPWSTR * name,LPWSTR * value)

#### MoveNext 

> public HRESULT [MoveNext](#interface_i_web_view2_http_headers_collection_iterator_1ac81f6122f8cadcfe54f818a0629efc2d)(BOOL * has_next)

