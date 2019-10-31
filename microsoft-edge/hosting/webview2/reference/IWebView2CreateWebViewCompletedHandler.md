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

# interface IWebView2CreateWebViewCompletedHandler 

```
interface IWebView2CreateWebViewCompletedHandler
  : public IUnknown
```

The caller implements this interface to receive the WebView created via CreateWebView.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

## Members

#### Invoke 

Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

> public HRESULT [Invoke](#interface_i_web_view2_create_web_view_completed_handler_1a0833e8801703846362ab69bbe3ac145f)(HRESULT result,[IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view) * webView)

