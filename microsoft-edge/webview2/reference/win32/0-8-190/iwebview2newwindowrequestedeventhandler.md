---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2NewWindowRequestedEventHandler
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/14/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2NewWindowRequestedEventHandler 

> [!NOTE]
> This interface may be altered or unavailable for releases after SDK version 0.8.355. Please refer to [Reference](../../../webview2-api-reference.md) for the latest API reference.

```
interface IWebView2NewWindowRequestedEventHandler
  : public IUnknown
```

The caller implements this interface to receive NewWindowRequested events.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#invoke)([IWebView2WebView](IWebView2WebView.md) * webview,[IWebView2NewWindowRequestedEventArgs](IWebView2NewWindowRequestedEventArgs.md) * args)

