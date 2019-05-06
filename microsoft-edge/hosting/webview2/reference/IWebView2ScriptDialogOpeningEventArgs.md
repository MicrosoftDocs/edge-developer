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

# interface IWebView2ScriptDialogOpeningEventArgs 

```
interface IWebView2ScriptDialogOpeningEventArgs
  : public IUnknown
```

Event args for the [IWebView2WebView::add_ScriptDialogOpening](IWebView2WebView.md#interface_i_web_view2_web_view_1a09b052357bb9c498f21124b4113184e0) event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Uri](#get_uri) | The URI of the page that requested the dialog box.
[get_Kind](#get_kind) | The kind of JavaScript dialog box.
[get_Message](#get_message) | The message of the dialog box.
[Accept](#accept) | The host may call this to respond with OK to confirm and prompt dialogs or not call this method to indicate cancel.
[get_DefaultText](#get_defaulttext) | The second parameter passed to the JavaScript prompt dialog.
[get_ResultText](#get_resulttext) | The return value from the JavaScript prompt function if Accept is called.
[put_ResultText](#put_resulttext) | Set the result text.
[GetDeferral](#getdeferral) | GetDeferral can be called to return an [IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) object.

## Members

#### get_Uri 

The URI of the page that requested the dialog box.

> public HRESULT [get_Uri](#interface_i_web_view2_script_dialog_opening_event_args_1a0d71559c52bfe71bf07baa9577e30010)(LPWSTR * uri)

#### get_Kind 

The kind of JavaScript dialog box.

> public HRESULT [get_Kind](#interface_i_web_view2_script_dialog_opening_event_args_1af421b6f908afd30922ab430bf32e994e)(WEBVIEW2_SCRIPT_DIALOG_KIND * kind)

#### get_Message 

The message of the dialog box.

> public HRESULT [get_Message](#interface_i_web_view2_script_dialog_opening_event_args_1ae03a776cf41fd6a0709a08de6926f229)(LPWSTR * message)

From JavaScript this is the first parameter passed to alert, confirm, and prompt.

#### Accept 

The host may call this to respond with OK to confirm and prompt dialogs or not call this method to indicate cancel.

> public HRESULT [Accept](#interface_i_web_view2_script_dialog_opening_event_args_1a8c641f9f69f57d7d1beca71f6b9a9405)()

From JavaScript this means that the confirm function returns true if Accept is called. And for the prompt function it returns the value of ResultText if Accept is called and returns false otherwise.

#### get_DefaultText 

The second parameter passed to the JavaScript prompt dialog.

> public HRESULT [get_DefaultText](#interface_i_web_view2_script_dialog_opening_event_args_1a0b433c195bdc20a10af9d540afa0467f)(LPWSTR * defaultText)

This is the the default value to use for the result of the prompt JavaScript function.

#### get_ResultText 

The return value from the JavaScript prompt function if Accept is called.

> public HRESULT [get_ResultText](#interface_i_web_view2_script_dialog_opening_event_args_1a29d00a43fb7ccaf60afb1594e9e05f88)(LPWSTR * resultText)

This is ignored for dialog kinds other than prompt. If Accept is not called this value is ignored and false is returned from prompt.

#### put_ResultText 

Set the result text.

> public HRESULT [put_ResultText](#interface_i_web_view2_script_dialog_opening_event_args_1a588201fa46a9127161885befbcc53d00)(LPCWSTR resultText)

#### GetDeferral 

GetDeferral can be called to return an [IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) object.

> public HRESULT [GetDeferral](#interface_i_web_view2_script_dialog_opening_event_args_1aec056d570a28f67a824a2225d422a724)([IWebView2Deferral](IWebView2Deferral.md#interface_i_web_view2_deferral) ** deferral)

You can use this to complete the event at a later time.

