---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView 2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2CallDevToolsProtocolMethodCompletedHandler 

```
interface IWebView2CallDevToolsProtocolMethodCompletedHandler
  : public IUnknown
```

The caller implements this interface to receive CallDevToolsProtocolMethod completion results.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

## Members

#### Invoke 

Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

> public HRESULT [Invoke](#interface_i_web_view2_call_dev_tools_protocol_method_completed_handler_1af38a2c7eab0e220a80a8506ee4b8f0a5)(HRESULT errorCode,LPCWSTR returnObjectAsJson)

