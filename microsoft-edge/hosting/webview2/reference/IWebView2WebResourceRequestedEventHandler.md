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

# interface IWebView2WebResourceRequestedEventHandler 

```
interface IWebView2WebResourceRequestedEventHandler
  : public IUnknown
```

Fires when an HTTP request is made in the webview.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

The host can override request, response headers and response content.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#interface_i_web_view2_web_resource_requested_event_handler_1a17a5cf180f8ca35b9b95546846624a67)([IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view) * webview,[IWebView2WebResourceRequestedEventArgs](IWebView2WebResourceRequestedEventArgs.md#interface_i_web_view2_web_resource_requested_event_args) * args)

