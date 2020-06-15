---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/05/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# interface ICoreWebView2ZoomFactorChangedEventHandler 

```
interface ICoreWebView2ZoomFactorChangedEventHandler
  : public IUnknown
```

The caller implements this interface to receive ZoomFactorChanged events.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

Use the ICoreWebView2Controller.ZoomFactor property to get the modified zoom factor.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#invoke)([ICoreWebView2Controller](icorewebview2controller.md) * sender, IUnknown * args)

There are no event args and the args parameter will be null.

