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

# interface IWebView2WebView2 

```
interface IWebView2WebView2
  : public IUnknown
```

Additional functionality implemented by the primary WebView object.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Stop](#stop) | Stop all navigations and pending resource fetches.

You can QueryInterface for this interface from the object that implements [IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view). See the [IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view) interface for more details.

## Members

#### Stop 

Stop all navigations and pending resource fetches.

> public HRESULT [Stop](#interface_i_web_view2_web_view2_1aa15faaa3d7dd58fd1fe43853ec10dbd8)()

