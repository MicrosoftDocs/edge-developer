---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/26/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# interface ICoreWebView2ZoomFactorChangedEventHandler 

> [!NOTE]
> This interface may be altered or unavailable for releases after SDK version 0.9.430. Please refer to [Reference](../../../webview2-api-reference.md) for the latest API reference.

```
interface ICoreWebView2ZoomFactorChangedEventHandler
  : public IUnknown
```

The caller implements this interface to receive ZoomFactorChanged events.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

Use the ICoreWebView2Host.ZoomFactor property to get the modified zoom factor.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#invoke)([ICoreWebView2Host](ICoreWebView2Host.md) * sender,IUnknown * args)

There are no event args and the args parameter will be null.
