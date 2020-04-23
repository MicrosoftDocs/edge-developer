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

# interface ICoreWebView2ExperimentalCursorChangedEventHandler 

> [!NOTE]
> This an experimental API that is shipped with our prerelease SDK version .

```
interface ICoreWebView2ExperimentalCursorChangedEventHandler
  : public IUnknown
```

The caller implements this interface to receive CursorChanged events.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

Use the Cursor property to get the new cursor.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#invoke)([ICoreWebView2ExperimentalCompositionController](ICoreWebView2ExperimentalCompositionController.md) * sender,IUnknown * args)

There are no event args and the args parameter will be null.

