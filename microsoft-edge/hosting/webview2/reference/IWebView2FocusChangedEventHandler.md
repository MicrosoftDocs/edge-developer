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

# interface IWebView2FocusChangedEventHandler 

```
interface IWebView2FocusChangedEventHandler
  : public IUnknown
```

The caller implements this method to receive the GotFocus and LostFocus events.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

There are no event args for this event.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#interface_i_web_view2_focus_changed_event_handler_1ae412248ebcebf2abafef6fd0a1a7f300)([IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view) * webview,IUnknown * args)

There are no event args and the args parameter will be null.

