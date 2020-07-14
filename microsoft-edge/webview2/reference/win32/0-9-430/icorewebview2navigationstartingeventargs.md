---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.430 - WebView2 Win32 C++ ICoreWebView2NavigationStartingEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/14/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# 0.9.430 - interface ICoreWebView2NavigationStartingEventArgs 

> [!NOTE]
> This interface may be altered or unavailable for releases after SDK version 0.9.430. Please refer to [Reference](../../../webview2-api-reference.md) for the latest API reference.

```
interface ICoreWebView2NavigationStartingEventArgs
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
[get_NavigationId](#get_navigationid) | The ID of the navigation.

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

> public HRESULT [get_RequestHeaders](#get_requestheaders)([ICoreWebView2HttpRequestHeaders](ICoreWebView2HttpRequestHeaders.md) ** requestHeaders)

Note, you cannot modify the HTTP request headers in a NavigationStarting event.

#### get_Cancel 

The host may set this flag to cancel the navigation.

> public HRESULT [get_Cancel](#get_cancel)(BOOL * cancel)

If set, it will be as if the navigation never happened and the current page's content will be intact. For performance reasons, GET HTTP requests may happen, while the host is responding. This means cookies can be set and used part of a request for the navigation.

#### put_Cancel 

Set the Cancel property.

> public HRESULT [put_Cancel](#put_cancel)(BOOL cancel)

#### get_NavigationId 

The ID of the navigation.

> public HRESULT [get_NavigationId](#get_navigationid)(UINT64 * navigation_id)

