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

# interface IWebView2ProcessFailedEventArgs 

```
interface IWebView2ProcessFailedEventArgs
  : public IUnknown
```

Event args for the ProcessFailed event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_ProcessFailedKind](#get_processfailedkind) | The kind of process failure that has occurred.

## Members

#### get_ProcessFailedKind 

The kind of process failure that has occurred.

> public HRESULT [get_ProcessFailedKind](#interface_i_web_view2_process_failed_event_args_1a47207f3a4cc9eafe4d71c2f05058902b)(WEBVIEW2_PROCESS_FAILED_KIND * processFailedKind)

