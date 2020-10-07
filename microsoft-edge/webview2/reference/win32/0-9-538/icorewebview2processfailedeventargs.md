---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: WebView2 Win32 C++ ICoreWebView2ProcessFailedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/08/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html, ICoreWebView2ProcessFailedEventArgs
---

# interface ICoreWebView2ProcessFailedEventArgs 

```
interface ICoreWebView2ProcessFailedEventArgs
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

> public HRESULT [get_ProcessFailedKind](#get_processfailedkind)(COREWEBVIEW2_PROCESS_FAILED_KIND * processFailedKind)

