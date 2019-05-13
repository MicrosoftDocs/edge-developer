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

# interface IWebView2NavigationStartingEventHandler 

```
interface IWebView2NavigationStartingEventHandler
  : public IUnknown
```

The caller implements this interface to receive the NavigationStarting event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#interface_i_web_view2_navigation_starting_event_handler_1a8c6fc057f7580bde07a7bf8d16a24eb1)([IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view) * webview,[IWebView2NavigationStartingEventArgs](IWebView2NavigationStartingEventArgs.md#interface_i_web_view2_navigation_starting_event_args) * args)

