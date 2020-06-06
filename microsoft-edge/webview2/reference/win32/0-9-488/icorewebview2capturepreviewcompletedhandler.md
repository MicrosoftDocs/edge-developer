---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/16/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# interface ICoreWebView2CapturePreviewCompletedHandler 

```
interface ICoreWebView2CapturePreviewCompletedHandler
  : public IUnknown
```

The caller implements this method to receive the result of the CapturePreview method.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the completion status of the corresponding asynchronous method call.

The result is written to the stream provided in the CapturePreview method call.

## Members

#### Invoke 

Called to provide the implementer with the completion status of the corresponding asynchronous method call.

> public HRESULT [Invoke](#invoke)(HRESULT result)
