---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/24/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# interface ICoreWebView2SourceChangedEventArgs 

> [!NOTE]
> This interface may be altered or unavailable for releases after SDK version 0.9.430. Please refer to [Reference (WebView2)](../../../reference-webview2.md) for the latest API reference.

```
interface ICoreWebView2SourceChangedEventArgs
  : public IUnknown
```

Event args for the SourceChanged event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[get_IsNewDocument](#get_isnewdocument) | True if the page being navigated to is a new document.

## Members

#### get_IsNewDocument 

True if the page being navigated to is a new document.

> public HRESULT [get_IsNewDocument](#get_isnewdocument)(BOOL * isNewDocument)

