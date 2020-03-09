---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/09/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2NewVersionAvailableEventHandler 

> [!NOTE]
> This interface may be altered or unavailable for releases after SDK version 0.8.355. Please refer to [Reference (WebView2)](../../../reference-webview2.md) for the latest API reference.

```
interface IWebView2NewVersionAvailableEventHandler
  : public IUnknown
```

The caller implements this interface to receive NewVersionAvailable events.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

Use the get_NewVersion method of [IWebView2NewVersionAvailableEventArgs](IWebView2NewVersionAvailableEventArgs.md) to get the new version number.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#invoke)([IWebView2Environment](IWebView2Environment.md) * webviewEnvironment,[IWebView2NewVersionAvailableEventArgs](IWebView2NewVersionAvailableEventArgs.md) * args)

