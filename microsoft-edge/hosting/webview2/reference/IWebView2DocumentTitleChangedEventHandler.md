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

# interface IWebView2DocumentTitleChangedEventHandler 

```
interface IWebView2DocumentTitleChangedEventHandler
  : public IUnknown
```

The caller implements this interface to receive DocumentTitleChanged events.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

Use the DocumentTitle property to get the modified title.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#interface_i_web_view2_document_title_changed_event_handler_1a164126be8b6d11f57ad047b5cf6c2e75)([IWebView2WebView3](IWebView2WebView3.md#interface_i_web_view2_web_view3) * webview,IUnknown * args)

There are no event args and the args parameter will be null.

