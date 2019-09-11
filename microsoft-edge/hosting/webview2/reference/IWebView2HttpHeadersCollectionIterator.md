---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/11/2019
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

Iterator for a collection of HTTP headers.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[GetCurrentHeader](#getcurrentheader) | Get the name and value of the current HTTP header of the iterator.
[MoveNext](#movenext) | Move the iterator to the next HTTP header in the collection.

See [IWebView2HttpRequestHeaders](IWebView2HttpRequestHeaders.md#iwebview2httprequestheaders) and [IWebView2HttpResponseHeaders](IWebView2HttpResponseHeaders.md#iwebview2httpresponseheaders).

## Members

#### GetCurrentHeader 

Get the name and value of the current HTTP header of the iterator.

> public HRESULT [GetCurrentHeader](#getcurrentheader)(LPWSTR * name,LPWSTR * value)

This method will fail if the last call to MoveNext set has_next to FALSE.

#### MoveNext 

Move the iterator to the next HTTP header in the collection.

> public HRESULT [MoveNext](#movenext)(BOOL * has_next)

The has_next parameter will be set to FALSE if there are no more HTTP headers. After this occurs the GetCurrentHeader method will fail if called.

