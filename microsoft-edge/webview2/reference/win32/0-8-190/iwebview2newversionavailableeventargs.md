---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2NewVersionAvailableEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2NewVersionAvailableEventArgs 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface IWebView2NewVersionAvailableEventArgs
  : public IUnknown
```

Event args for the NewVersionAvailable event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_NewVersion](#get_newversion) | The browser version info of the current [IWebView2Environment](IWebView2Environment.md).

## Members

#### get_NewVersion 

The browser version info of the current [IWebView2Environment](IWebView2Environment.md).

> public HRESULT [get_NewVersion](#get_newversion)(LPWSTR * newVersion)

