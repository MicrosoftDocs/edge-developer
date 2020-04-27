---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/27/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# class Microsoft::Web::WebView2::Core::CoreWebView2ScriptDialogOpeningEventArgs 

Event args for the ScriptDialogOpening event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[uri](#uri) | The URI of the page that requested the dialog box.
[Kind](#kind) | The kind of JavaScript dialog box.
[Message](#message) | The message of the dialog box.
[DefaultText](#defaulttext) | The second parameter passed to the JavaScript prompt dialog.
[ResultText](#resulttext) | The return value from the JavaScript prompt function if Accept is called.
[Accept](#accept) | The host may call this to respond with OK to confirm, prompt, and beforeunload dialogs or not call this method to indicate cancel.
[GetDeferral](#getdeferral) | GetDeferral can be called to return a CoreWebView2Deferral object.

## Members

### Properties

#### uri 

The URI of the page that requested the dialog box.

> {property} string [uri](#uri)

#### Kind 

The kind of JavaScript dialog box.

> {property} CoreWebView2ScriptDialogKind [Kind](#kind)

Accept, confirm, prompt, or beforeunload.

#### Message 

The message of the dialog box.

> {property} string [Message](#message)

From JavaScript this is the first parameter passed to alert, confirm, and prompt and is empty for beforeunload.

#### DefaultText 

The second parameter passed to the JavaScript prompt dialog.

> {property} string [DefaultText](#defaulttext)

This is the default value to use for the result of the prompt JavaScript function.

#### ResultText 

The return value from the JavaScript prompt function if Accept is called.

> {property} string [ResultText](#resulttext)

This is ignored for dialog kinds other than prompt. If Accept is not called this value is ignored and false is returned from prompt.

#### Accept 

The host may call this to respond with OK to confirm, prompt, and beforeunload dialogs or not call this method to indicate cancel.

> public inline void [Accept](#accept)()

From JavaScript, this means that the confirm and beforeunload function returns true if Accept is called. And for the prompt function it returns the value of ResultText if Accept is called and returns false otherwise.

#### GetDeferral 

GetDeferral can be called to return a CoreWebView2Deferral object.

> public inline CoreWebView2Deferral [GetDeferral](#getdeferral)()

You can use this to complete the event at a later time.

