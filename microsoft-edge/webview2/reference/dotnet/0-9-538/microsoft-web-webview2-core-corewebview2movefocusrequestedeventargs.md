---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2MoveFocusRequestedEventArgs
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/08/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2MoveFocusRequestedEventArgs
---

# Microsoft.Web.WebView2.Core.CoreWebView2MoveFocusRequestedEventArgs class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

Event args for the MoveFocusRequested event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[Handled](#handled) | Indicate whether the event has been handled by the app.
[Reason](#reason) | The reason for WebView to fire the MoveFocus Requested event.

## Members

#### Handled 

Indicate whether the event has been handled by the app.

> public bool [Handled](#handled)

If the app has moved the focus to its desired location, it should set Handled property to TRUE. When Handled property is false after the event handler returns, default action will be taken. The default action is to try to find the next tab stop child window in the app and try to move focus to that window. If there is no other such window to move focus to, focus will be cycled within the WebView's web content.

#### Reason 

The reason for WebView to fire the MoveFocus Requested event.

> public CoreWebView2MoveFocusReason [Reason](#reason)

