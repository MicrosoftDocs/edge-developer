---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Core.CoreWebView2DevToolsProtocolEventReceiver
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/08/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Core.CoreWebView2DevToolsProtocolEventReceiver
---

# Microsoft.Web.WebView2.Core.CoreWebView2DevToolsProtocolEventReceiver class 

Namespace: Microsoft.Web.WebView2.Core\
Assembly: Microsoft.Web.WebView2.Core.dll

A Receiver is created for a particular DevTools Protocol event and allows you to subscribe and unsubscribe from that event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[DevToolsProtocolEventReceived](#devtoolsprotocoleventreceived) | Subscribe to a DevToolsProtocol event.

Obtained from the WebView object via GetDevToolsProtocolEventReceiver.

## Members

#### DevToolsProtocolEventReceived 

Subscribe to a DevToolsProtocol event.

> public event EventHandler< [CoreWebView2DevToolsProtocolEventReceivedEventArgs](microsoft-web-webview2-core-corewebview2devtoolsprotocoleventreceivedeventargs.md) > [DevToolsProtocolEventReceived](#devtoolsprotocoleventreceived)

The handler's Invoke method will be called whenever the corresponding DevToolsProtocol event fires. Invoke will be called with the an event args object containing the DevTools Protocol event's parameter object as a JSON string.

