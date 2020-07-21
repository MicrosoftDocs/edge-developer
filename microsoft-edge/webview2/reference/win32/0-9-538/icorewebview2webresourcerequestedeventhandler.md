---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: WebView2 Win32 C++ ICoreWebView2WebResourceRequestedEventHandler
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/16/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html, ICoreWebView2WebResourceRequestedEventHandler
---

# interface ICoreWebView2WebResourceRequestedEventHandler 

```
interface ICoreWebView2WebResourceRequestedEventHandler
  : public IUnknown
```

Fires when a URL request (through network, file etc.) is made in the webview for a Web resource matching resource context filter and URL specified in AddWebResourceRequestedFilter.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

The host can view and modify the request or provide a response in a similar pattern to HTTP, in which case the request immediately completed. This may not contain any request headers that are added by the network stack, such as Authorization headers.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#invoke)([ICoreWebView2](icorewebview2.md) * sender, [ICoreWebView2WebResourceRequestedEventArgs](icorewebview2webresourcerequestedeventargs.md) * args)

