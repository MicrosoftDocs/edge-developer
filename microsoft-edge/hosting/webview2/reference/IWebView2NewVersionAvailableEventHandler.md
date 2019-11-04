---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/25/2019
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge
---

# interface IWebView2NewVersionAvailableEventHandler 

```
interface IWebView2NewVersionAvailableEventHandler
  : public IUnknown
```

The caller implements this interface to receive NewVersionAvailable events.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Invoke](#invoke) | Called to provide the implementer with the event args for the corresponding event.

Use the get_NewVersion method of [IWebView2NewVersionAvailableEventArgs](IWebView2NewVersionAvailableEventArgs.md#interface_i_web_view2_new_version_available_event_args) to get the new version number.

## Members

#### Invoke 

Called to provide the implementer with the event args for the corresponding event.

> public HRESULT [Invoke](#interface_i_web_view2_new_version_available_event_handler_1aa5d11462620d613a972baa8c4da1094b)([IWebView2Environment](IWebView2Environment.md#interface_i_web_view2_environment) * webviewEnvironment,[IWebView2NewVersionAvailableEventArgs](IWebView2NewVersionAvailableEventArgs.md#interface_i_web_view2_new_version_available_event_args) * args)

