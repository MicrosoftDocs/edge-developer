---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - WebView2 Win32 C++ ICoreWebView2NewWindowRequestedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - interface ICoreWebView2NewWindowRequestedEventArgs 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface ICoreWebView2NewWindowRequestedEventArgs
  : public IUnknown
```

Event args for the NewWindowRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Handled](#get_handled) | Gets whether the NewWindowRequestedEvent is handled by host.
[get_IsUserInitiated](#get_isuserinitiated) | IsUserInitiated is true when the new window request was initiated through a user gesture such as clicking an anchor tag with target.
[get_NewWindow](#get_newwindow) | Gets the new window.
[get_Uri](#get_uri) | The target uri of the NewWindowRequest.
[GetDeferral](#getdeferral) | Obtain an [ICoreWebView2Deferral](icorewebview2deferral.md) object and put the event into a deferred state.
[put_Handled](#put_handled) | Sets whether the NewWindowRequestedEvent is handled by host.
[put_NewWindow](#put_newwindow) | Sets a WebView as a result of the NewWindowRequest.

The event is fired when content inside webview requested to a open a new window (through window.open() and so on.)

## Members

#### get_Handled 

Gets whether the NewWindowRequestedEvent is handled by host.

> public HRESULT [get_Handled](#get_handled)(BOOL * handled)

#### get_IsUserInitiated 

IsUserInitiated is true when the new window request was initiated through a user gesture such as clicking an anchor tag with target.

> public HRESULT [get_IsUserInitiated](#get_isuserinitiated)(BOOL * isUserInitiated)

#### get_NewWindow 

Gets the new window.

> public HRESULT [get_NewWindow](#get_newwindow)([ICoreWebView2](icorewebview2.md) ** newWindow)

#### get_Uri 

The target uri of the NewWindowRequest.

> public HRESULT [get_Uri](#get_uri)(LPWSTR * uri)

#### GetDeferral 

Obtain an [ICoreWebView2Deferral](icorewebview2deferral.md) object and put the event into a deferred state.

> public HRESULT [GetDeferral](#getdeferral)([ICoreWebView2Deferral](icorewebview2deferral.md) ** deferral)

You can use the [ICoreWebView2Deferral](icorewebview2deferral.md) object to complete the window open request at a later time. While this event is deferred the opener window will be returned a WindowProxy to an unnavigated window, which will navigate when the deferral is complete.

#### put_Handled 

Sets whether the NewWindowRequestedEvent is handled by host.

> public HRESULT [put_Handled](#put_handled)(BOOL handled)

If this is false and no NewWindow is set, the WebView will open a popup window and it will be returned as opened WindowProxy. If set to true and no NewWindow is set for a window.open call, the opened WindowProxy will be for an dummy window object and no window will load. Default is false.

#### put_NewWindow 

Sets a WebView as a result of the NewWindowRequest.

> public HRESULT [put_NewWindow](#put_newwindow)([ICoreWebView2](icorewebview2.md) * newWindow)

The target webview should not be navigated. If the NewWindow is set, its top level window will return as the opened WindowProxy.

