---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: WebView2 Win32 C++ ICoreWebView2ExperimentalNewWindowRequestedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html, ICoreWebView2ExperimentalNewWindowRequestedEventArgs
---

# interface ICoreWebView2ExperimentalNewWindowRequestedEventArgs 

[!INCLUDE [prerelease-note](../../includes/prerelease-note.md)]

```
interface ICoreWebView2ExperimentalNewWindowRequestedEventArgs
  : public IUnknown
```

Event args for the NewWindowRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_WindowFeatures](#get_windowfeatures) | Window features specified by the window.open call.

The event is fired when content inside webview requested to a open a new window (through window.open() and so on.)

## Members

#### get_WindowFeatures 

Window features specified by the window.open call.

> public HRESULT [get_WindowFeatures](#get_windowfeatures)([ICoreWebView2ExperimentalWindowFeatures](icorewebview2experimentalwindowfeatures.md) ** windowFeatures)

These features can be considered for positioning and sizing of new webview windows.

