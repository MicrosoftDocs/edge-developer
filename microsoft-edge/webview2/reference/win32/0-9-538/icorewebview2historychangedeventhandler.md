---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: 0.9.579 - WebView2 Win32 C++ ICoreWebView2HistoryChangedEventHandler
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/10/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html, ICoreWebView2HistoryChangedEventHandler
---

# 0.9.579 - interface ICoreWebView2HistoryChangedEventHandler 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

```
interface ICoreWebView2HistoryChangedEventHandler
  : public IUnknown
```

The caller implements this interface to receive the HistoryChanged event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | There are no event args and the args parameter will be null.

## Members

#### Invoke 

There are no event args and the args parameter will be null.

> public HRESULT [Invoke](#invoke)([ICoreWebView2](icorewebview2.md) * webview, IUnknown * args)

