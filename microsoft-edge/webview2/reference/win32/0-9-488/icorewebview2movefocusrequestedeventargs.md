---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# interface ICoreWebView2MoveFocusRequestedEventArgs 

> [!NOTE]
> This reference may be altered or unavailable for releases after SDK version 0.9.515. Please refer to [WebView2 API reference](../../../webview2-api-reference.md) for the latest API reference.

```
interface ICoreWebView2MoveFocusRequestedEventArgs
  : public IUnknown
```

Event args for the MoveFocusRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Handled](#get_handled) | Indicate whether the event has been handled by the app.
[get_Reason](#get_reason) | The reason for WebView to fire the MoveFocus Requested event.
[put_Handled](#put_handled) | Set the Handled property.

## Members

#### get_Handled 

Indicate whether the event has been handled by the app.

> public HRESULT [get_Handled](#get_handled)(BOOL * value)

If the app has moved the focus to its desired location, it should set Handled property to TRUE. When Handled property is false after the event handler returns, default action will be taken. The default action is to try to find the next tab stop child window in the app and try to move focus to that window. If there is no other such window to move focus to, focus will be cycled within the WebView's web content.

#### get_Reason 

The reason for WebView to fire the MoveFocus Requested event.

> public HRESULT [get_Reason](#get_reason)(COREWEBVIEW2_MOVE_FOCUS_REASON * value)

#### put_Handled 

Set the Handled property.

> public HRESULT [put_Handled](#put_handled)(BOOL value)

