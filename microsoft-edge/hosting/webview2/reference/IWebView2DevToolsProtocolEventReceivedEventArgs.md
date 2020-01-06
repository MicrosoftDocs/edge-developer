---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/09/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2DevToolsProtocolEventReceivedEventArgs 

```
interface IWebView2DevToolsProtocolEventReceivedEventArgs
  : public IUnknown
```

Event args for the DevToolsProtocolEventReceived event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_ParameterObjectAsJson](#get_parameterobjectasjson) | The parameter object of the corresponding DevToolsProtocol event represented as a JSON string.

## Members

#### get_ParameterObjectAsJson 

The parameter object of the corresponding DevToolsProtocol event represented as a JSON string.

> public HRESULT [get_ParameterObjectAsJson](#get_parameterobjectasjson)(LPWSTR * parameterObjectAsJson)

