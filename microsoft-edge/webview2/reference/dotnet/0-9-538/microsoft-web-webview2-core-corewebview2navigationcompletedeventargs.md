---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2NavigationCompletedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/08/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2NavigationCompletedEventArgs
---

# Microsoft.Web.WebView2.Core.CoreWebView2NavigationCompletedEventArgs class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

Event args for the NavigationCompleted event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[IsSuccess](#issuccess) | True when the navigation is successful.
[NavigationId](#navigationid) | The ID of the navigation.
[WebErrorStatus](#weberrorstatus) | The error code if the navigation failed.

## Members

#### IsSuccess 

True when the navigation is successful.

> public bool [IsSuccess](#issuccess)

This is false for a navigation that ended up in an error page (failures due to no network, DNS lookup failure, HTTP server responds with 4xx), but could also be false for additional things such as window.stop() called on navigated page.

#### NavigationId 

The ID of the navigation.

> public ulong [NavigationId](#navigationid)

#### WebErrorStatus 

The error code if the navigation failed.

> public CoreWebView2WebErrorStatus [WebErrorStatus](#weberrorstatus)

