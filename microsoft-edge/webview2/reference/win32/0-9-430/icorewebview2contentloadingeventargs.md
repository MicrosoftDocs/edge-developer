---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.430 - WebView2 Win32 C++ ICoreWebView2ContentLoadingEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/14/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# 0.9.430 - interface ICoreWebView2ContentLoadingEventArgs 

> [!NOTE]
> This interface may be altered or unavailable for releases after SDK version 0.9.430. Please refer to [Reference](../../../webview2-api-reference.md) for the latest API reference.

```
interface ICoreWebView2ContentLoadingEventArgs
  : public IUnknown
```

Event args for the ContentLoading event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_IsErrorPage](#get_iserrorpage) | True if the loaded content is an error page.
[get_NavigationId](#get_navigationid) | The ID of the navigation.

## Members

#### get_IsErrorPage 

True if the loaded content is an error page.

> public HRESULT [get_IsErrorPage](#get_iserrorpage)(BOOL * isErrorPage)

#### get_NavigationId 

The ID of the navigation.

> public HRESULT [get_NavigationId](#get_navigationid)(UINT64 * navigation_id)

