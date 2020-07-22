---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - WebView2 Win32 C++ ICoreWebView2DevToolsProtocolEventReceivedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - interface ICoreWebView2DevToolsProtocolEventReceivedEventArgs 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface ICoreWebView2DevToolsProtocolEventReceivedEventArgs
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

