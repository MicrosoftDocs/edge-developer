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

# interface IWebView2DevToolsProtocolEventReceivedEventHandler 

```
interface IWebView2DevToolsProtocolEventReceivedEventHandler
  : public IUnknown
```

The caller implements this interface to receive DevToolsProtocolEventReceived events from the [IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view).

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#interface_i_web_view2_dev_tools_protocol_event_received_event_handler_1a104c605a57cc807ecfde059a3ff9ccec)([IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view) * webview,[IWebView2DevToolsProtocolEventReceivedEventArgs](IWebView2DevToolsProtocolEventReceivedEventArgs.md#interface_i_web_view2_dev_tools_protocol_event_received_event_args) * args)

