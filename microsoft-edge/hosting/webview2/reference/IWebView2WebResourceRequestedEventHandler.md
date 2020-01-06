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

# interface IWebView2WebResourceRequestedEventHandler 

```
interface IWebView2WebResourceRequestedEventHandler
  : public IUnknown
```

Fires when an HTTP request is made in the webview.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

The host can override request, response headers and response content.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#invoke)([IWebView2WebView](IWebView2WebView.md#iwebview2webview) * webview,[IWebView2WebResourceRequestedEventArgs](IWebView2WebResourceRequestedEventArgs.md#iwebview2webresourcerequestedeventargs) * args)

