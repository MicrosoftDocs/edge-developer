---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2ScriptDialogOpeningEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2ScriptDialogOpeningEventArgs 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface IWebView2ScriptDialogOpeningEventArgs
  : public IUnknown
```

Event args for the [IWebView2WebView::add_ScriptDialogOpening](IWebView2WebView.md#add_scriptdialogopening) event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_Uri](#get_uri) | The URI of the page that requested the dialog box.
[get_Kind](#get_kind) | The kind of JavaScript dialog box.
[get_Message](#get_message) | The message of the dialog box.
[Accept](#accept) | The host may call this to respond with OK to confirm and prompt dialogs or not call this method to indicate cancel.
[get_DefaultText](#get_defaulttext) | The second parameter passed to the JavaScript prompt dialog.
[get_ResultText](#get_resulttext) | The return value from the JavaScript prompt function if Accept is called.
[put_ResultText](#put_resulttext) | Set the ResultText property.
[GetDeferral](#getdeferral) | GetDeferral can be called to return an [IWebView2Deferral](IWebView2Deferral.md) object.

## Members

#### get_Uri 

The URI of the page that requested the dialog box.

> public HRESULT [get_Uri](#get_uri)(LPWSTR * uri)

#### get_Kind 

The kind of JavaScript dialog box.

> public HRESULT [get_Kind](#get_kind)(WEBVIEW2_SCRIPT_DIALOG_KIND * kind)

#### get_Message 

The message of the dialog box.

> public HRESULT [get_Message](#get_message)(LPWSTR * message)

From JavaScript this is the first parameter passed to alert, confirm, and prompt.

#### Accept 

The host may call this to respond with OK to confirm and prompt dialogs or not call this method to indicate cancel.

> public HRESULT [Accept](#accept)()

From JavaScript this means that the confirm function returns true if Accept is called. And for the prompt function it returns the value of ResultText if Accept is called and returns false otherwise.

#### get_DefaultText 

The second parameter passed to the JavaScript prompt dialog.

> public HRESULT [get_DefaultText](#get_defaulttext)(LPWSTR * defaultText)

This is the default value to use for the result of the prompt JavaScript function.

#### get_ResultText 

The return value from the JavaScript prompt function if Accept is called.

> public HRESULT [get_ResultText](#get_resulttext)(LPWSTR * resultText)

This is ignored for dialog kinds other than prompt. If Accept is not called this value is ignored and false is returned from prompt.

#### put_ResultText 

Set the ResultText property.

> public HRESULT [put_ResultText](#put_resulttext)(LPCWSTR resultText)

#### GetDeferral 

GetDeferral can be called to return an [IWebView2Deferral](IWebView2Deferral.md) object.

> public HRESULT [GetDeferral](#getdeferral)([IWebView2Deferral](IWebView2Deferral.md) ** deferral)

You can use this to complete the event at a later time.

