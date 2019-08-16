---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/29/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2ExecuteScriptCompletedHandler 

```
interface IWebView2ExecuteScriptCompletedHandler
  : public IUnknown
```

The caller implements this interface to receive the result of the ExecuteScript method.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

## Members

#### Invoke 

Called to provide the implementer with the completion status and result of the corresponding asynchronous method call.

> public HRESULT [Invoke](#interface_i_web_view2_execute_script_completed_handler_1ab6829bc120e77b7037cb0bc4288cb726)(HRESULT errorCode,LPCWSTR resultObjectAsJson)

