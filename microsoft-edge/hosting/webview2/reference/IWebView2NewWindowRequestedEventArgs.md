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

# interface IWebView2NewWindowRequestedEventArgs 

```
interface IWebView2NewWindowRequestedEventArgs
  : public IUnknown
```

Event args for the NewWindowRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Uri](#get_uri) | The target uri of the NewWindowRequest.
[put_NewWindow](#put_newwindow) | Sets a WebView as a result of the NewWindowRequest.
[get_NewWindow](#get_newwindow) | Gets the new window.
[put_Handled](#put_handled) | Sets whether the NewWindowRequestedEvent is handled by host.
[get_Handled](#get_handled) | Gets whether the NewWindowRequestedEvent is handled by host.
[get_IsUserInitiated](#get_isuserinitiated) | IsUserInitiated is true when the new window request was initiated through a user gesture such as clicking an anchor tag with target.
[GetDeferral](#getdeferral) | Obtain an [IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) object and put the event into a deferred state.

The event is fired when content inside webview requested to a open a new window (through window.open() etc.)

## Members

#### get_Uri 

The target uri of the NewWindowRequest.

> public HRESULT [get_Uri](#interface_i_web_view2_new_window_requested_event_args_1ab9b4ef66827c183409200f15ad4e6991)(LPWSTR * uri)

#### put_NewWindow 

Sets a WebView as a result of the NewWindowRequest.

> public HRESULT [put_NewWindow](#interface_i_web_view2_new_window_requested_event_args_1a337aca839f78c7807f6361cd8f4142b9)([IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view) * newWindow)

The target webview should not be navigated. If the NewWindow is set, its top level window will return as the opened WindowProxy.

#### get_NewWindow 

Gets the new window.

> public HRESULT [get_NewWindow](#interface_i_web_view2_new_window_requested_event_args_1a658691345c22823b6ca011687dad1baa)([IWebView2WebView](IWebView2WebView.md#interface_i_web_view2_web_view) ** newWindow)

#### put_Handled 

Sets whether the NewWindowRequestedEvent is handled by host.

> public HRESULT [put_Handled](#interface_i_web_view2_new_window_requested_event_args_1a04237283cb6cab3eb7e3aa291692c19a)(BOOL handled)

If this is false and no NewWindow is set, the WebView will open a popup window and it will be returned as opened WindowProxy. If set to true and no NewWindow is set for a window.open call, the opened WindowProxy will be for an dummy window object and no window will load. Default is false.

#### get_Handled 

Gets whether the NewWindowRequestedEvent is handled by host.

> public HRESULT [get_Handled](#interface_i_web_view2_new_window_requested_event_args_1addca228064a32334726b5fdbaef42e89)(BOOL * handled)

#### get_IsUserInitiated 

IsUserInitiated is true when the new window request was initiated through a user gesture such as clicking an anchor tag with target.

> public HRESULT [get_IsUserInitiated](#interface_i_web_view2_new_window_requested_event_args_1aa39306ddb798ac2618447007dbe762e7)(BOOL * isUserInitiated)

#### GetDeferral 

Obtain an [IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) object and put the event into a deferred state.

> public HRESULT [GetDeferral](#interface_i_web_view2_new_window_requested_event_args_1aef7e38d450123bfa7ac8d32e23d30845)([IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) ** deferral)

You can use the [IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) object to complete the window open request at a later time. While this event is deferred the opener window will be returned a WindowProxy to an unnavigated window, which will navigate when the deferral is complete.

