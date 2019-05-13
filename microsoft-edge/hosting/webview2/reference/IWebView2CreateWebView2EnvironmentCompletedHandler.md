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

# interface IWebView2CreateWebView2EnvironmentCompletedHandler 

```
interface IWebView2CreateWebView2EnvironmentCompletedHandler
  : public IUnknown
```

The caller implements this interface to receive the WebView2Environment created via CreateWebView2Environment.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

## Members

#### Invoke 

Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

> public HRESULT [Invoke](#interface_i_web_view2_create_web_view2_environment_completed_handler_1a1b688d894c1c6e66bd438a632e9f5eb1)(HRESULT result,[IWebView2Environment](IWebView2Environment.md#interface_i_web_view2_environment) * webViewEnvironment)

