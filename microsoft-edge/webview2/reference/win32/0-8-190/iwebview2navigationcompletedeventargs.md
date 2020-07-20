---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2NavigationCompletedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2NavigationCompletedEventArgs 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface IWebView2NavigationCompletedEventArgs
  : public IUnknown
```

Event args for the NavigationCompleted event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_IsSuccess](#get_issuccess) | True when the navigation is successful.
[get_WebErrorStatus](#get_weberrorstatus) | The error code if the navigation failed.

## Members

#### get_IsSuccess 

True when the navigation is successful.

> public HRESULT [get_IsSuccess](#get_issuccess)(BOOL * isSuccess)

This is false for a navigation that ended up in an error page (failures due to no network, DNS lookup failure, HTTP server responds with 4xx), but could also be false for additional things such as window.stop() called on navigated page.

#### get_WebErrorStatus 

The error code if the navigation failed.

> public HRESULT [get_WebErrorStatus](#get_weberrorstatus)(WEBVIEW2_WEB_ERROR_STATUS * WEBVIEW2_WEB_ERROR_STATUS)

