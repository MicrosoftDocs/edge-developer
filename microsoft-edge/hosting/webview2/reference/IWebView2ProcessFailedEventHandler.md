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

# interface IWebView2ProcessFailedEventHandler 

```
interface IWebView2ProcessFailedEventHandler
  : public IUnknown
```

The caller implements this interface to receive ProcessFailed events.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#interface_i_web_view2_process_failed_event_handler_1a32f51fa88f2bfe4d50bdeb3158ff8a68)([IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view) * webview,[IWebView2ProcessFailedEventArgs](IWebView2ProcessFailedEventArgs.md#interface_i_web_view2_process_failed_event_args) * args)

