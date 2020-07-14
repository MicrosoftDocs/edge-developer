---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - WebView2 Win32 C++ ICoreWebView2HistoryChangedEventHandler
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/07/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# 0.9.515 - interface ICoreWebView2HistoryChangedEventHandler 

> [!NOTE]
> This reference may be altered or unavailable for releases after SDK version 0.9.515. Please refer to [WebView2 API reference](../../../webview2-api-reference.md) for the latest API reference.

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

