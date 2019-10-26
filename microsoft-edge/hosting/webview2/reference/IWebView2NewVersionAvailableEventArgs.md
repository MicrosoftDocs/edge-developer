---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/25/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2NewVersionAvailableEventArgs 

```
interface IWebView2NewVersionAvailableEventArgs
  : public IUnknown
```

Event args for the NewVersionAvailable event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_NewVersion](#get_newversion) | The browser version info of the current [IWebView2Environment](IWebView2Environment.md#interface_i_web_view2_environment).

## Members

#### get_NewVersion 

The browser version info of the current [IWebView2Environment](IWebView2Environment.md#interface_i_web_view2_environment).

> public HRESULT [get_NewVersion](#interface_i_web_view2_new_version_available_event_args_1a36c62c9ea1b2e8ad69a857e6fd295fb7)(LPWSTR * newVersion)

