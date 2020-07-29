---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2NavigationStartingEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2NavigationStartingEventArgs 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface IWebView2NavigationStartingEventArgs
  : public IUnknown
```

Event args for the NavigationStarting event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Uri](#get_uri) | The uri of the requested navigation.
[get_IsUserInitiated](#get_isuserinitiated) | True when the navigation was initiated through a user gesture as opposed to programmatic navigation.
[get_IsRedirected](#get_isredirected) | True when the navigation is redirected.
[get_RequestHeaders](#get_requestheaders) | The HTTP request headers for the navigation.
[get_Cancel](#get_cancel) | The host may set this flag to cancel the navigation.
[put_Cancel](#put_cancel) | Set the Cancel property.

## Members

#### get_Uri 

The uri of the requested navigation.

> public HRESULT [get_Uri](#get_uri)(LPWSTR * uri)

#### get_IsUserInitiated 

True when the navigation was initiated through a user gesture as opposed to programmatic navigation.

> public HRESULT [get_IsUserInitiated](#get_isuserinitiated)(BOOL * isUserInitiated)

#### get_IsRedirected 

True when the navigation is redirected.

> public HRESULT [get_IsRedirected](#get_isredirected)(BOOL * isRedirected)

#### get_RequestHeaders 

The HTTP request headers for the navigation.

> public HRESULT [get_RequestHeaders](#get_requestheaders)([IWebView2HttpRequestHeaders](IWebView2HttpRequestHeaders.md) ** requestHeaders)

Note, you cannot modify the HTTP request headers in a NavigationStarting event.

#### get_Cancel 

The host may set this flag to cancel the navigation.

> public HRESULT [get_Cancel](#get_cancel)(BOOL * cancel)

If set, it will be as if the navigation never happened and the current page's content will be intact. For performance reasons, GET HTTP requests may happen, while the host is responding. This means cookies can be set and used part of a request for the navigation.

#### put_Cancel 

Set the Cancel property.

> public HRESULT [put_Cancel](#put_cancel)(BOOL cancel)

