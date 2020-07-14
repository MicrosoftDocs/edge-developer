---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: 0.9.515 - Microsoft.Web.WebView2.Core.CoreWebView2ContentLoadingEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/12/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# Microsoft.Web.WebView2.Core.CoreWebView2ContentLoadingEventArgs class 

> [!NOTE]
> This reference may be altered or unavailable for releases after SDK version 0.9.515. Please refer to [WebView2 API reference](../../../webview2-api-reference.md) for the latest API reference.

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

Event args for the ContentLoading event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[IsErrorPage](#iserrorpage) | True if the loaded content is an error page.
[NavigationId](#navigationid) | The ID of the navigation.

## Members

#### IsErrorPage 

True if the loaded content is an error page.

> public bool [IsErrorPage](#iserrorpage)

#### NavigationId 

The ID of the navigation.

> public ulong [NavigationId](#navigationid)

