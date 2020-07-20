---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.8.355 - WebView2 Win32 C++ IWebView2WebResourceRequestedEventArgs2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# 0.8.355 - interface IWebView2WebResourceRequestedEventArgs2 

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]

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

