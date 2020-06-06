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

# interface IWebView2WebResourceRequestedEventArgs2 

> [!NOTE]
> This interface may be altered or unavailable for releases after SDK version 0.8.355. Please refer to [Reference](../../../webview2-api-reference.md) for the latest API reference.

```
interface IWebView2WebResourceRequestedEventArgs2
  : public IWebView2WebResourceRequestedEventArgs
```

Event args for the WebResourceRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_ResourceContext](#get_resourcecontext) | The web resource request contexts.

## Members

#### get_ResourceContext 

The web resource request contexts.

> public HRESULT [get_ResourceContext](#get_resourcecontext)(WEBVIEW2_WEB_RESOURCE_CONTEXT * context)
