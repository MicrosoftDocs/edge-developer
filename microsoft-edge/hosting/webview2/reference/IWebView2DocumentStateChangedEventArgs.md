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

# interface IWebView2DocumentStateChangedEventArgs 

```
interface IWebView2DocumentStateChangedEventArgs
  : public IUnknown
```

Event args for the DocumentStateChanged event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_IsNewDocument](#get_isnewdocument) | True if the page being navigated to is a new document.
[get_IsErrorPage](#get_iserrorpage) | True if the loaded content is an error page.

## Members

#### get_IsNewDocument 

True if the page being navigated to is a new document.

> public HRESULT [get_IsNewDocument](#interface_i_web_view2_document_state_changed_event_args_1a59d9f5098ba71cd42570442e203bf72f)(BOOL * isNewDocument)

#### get_IsErrorPage 

True if the loaded content is an error page.

> public HRESULT [get_IsErrorPage](#interface_i_web_view2_document_state_changed_event_args_1ab8b1a1c78b48632015fc06b05c7b8c3d)(BOOL * isErrorPage)

