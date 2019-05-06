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

# interface IWebView2ScriptDialogOpeningEventHandler 

```
interface IWebView2ScriptDialogOpeningEventHandler
  : public IUnknown
```

The caller implements this interface to receive the ScriptDialogOpening event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#interface_i_web_view2_script_dialog_opening_event_handler_1af7224bf970411d54ae407aad75573a00)([IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view) * webview,[IWebView2ScriptDialogOpeningEventArgs](IWebView2ScriptDialogOpeningEventArgs.md#interface_i_web_view2_script_dialog_opening_event_args) * args)

