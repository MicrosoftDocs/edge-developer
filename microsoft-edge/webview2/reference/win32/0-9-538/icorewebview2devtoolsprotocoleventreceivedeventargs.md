---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: WebView2 Win32 C++ ICoreWebView2DevToolsProtocolEventReceivedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/08/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html, ICoreWebView2DevToolsProtocolEventReceivedEventArgs
---

# interface ICoreWebView2DevToolsProtocolEventReceivedEventArgs 

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

