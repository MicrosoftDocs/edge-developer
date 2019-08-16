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

# interface IWebView2MoveFocusRequestedEventArgs 

```
interface IWebView2MoveFocusRequestedEventArgs
  : public IUnknown
```

Event args for the MoveFocusRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Reason](#get_reason) | The reason for WebView to fire the MoveFocus Requested event.
[get_Handled](#get_handled) | Indicate whether the event has been handled by the app.
[put_Handled](#put_handled) | Set the Handled property.

## Members

#### get_Reason 

The reason for WebView to fire the MoveFocus Requested event.

> public HRESULT [get_Reason](#interface_i_web_view2_move_focus_requested_event_args_1a532b3454cd5914d947571c2579510f2f)(WEBVIEW2_MOVE_FOCUS_REASON * value)

#### get_Handled 

Indicate whether the event has been handled by the app.

> public HRESULT [get_Handled](#interface_i_web_view2_move_focus_requested_event_args_1abffc9940c5028d47eda26482e0af490c)(BOOL * value)

If the app has moved the focus to its desired location, it should set Handled property to TRUE. When Handled property is false after the event handler returns, default action will be taken. The default action is to try to find the next tab stop child window in the app and try to move focus to that window. If there is no other such window to move focus to, focus will be cycled within the WebView's web content.

#### put_Handled 

Set the Handled property.

> public HRESULT [put_Handled](#interface_i_web_view2_move_focus_requested_event_args_1af73472c9e8c9b67543666ff0efb584f1)(BOOL value)

