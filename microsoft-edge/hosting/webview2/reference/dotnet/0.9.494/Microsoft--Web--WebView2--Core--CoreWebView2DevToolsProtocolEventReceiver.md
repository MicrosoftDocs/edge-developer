---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/28/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# class Microsoft.Web.WebView2.Core.CoreWebView2DevToolsProtocolEventReceiver 

A Receiver is created for a particular DevTools Protocol event and allows you to subscribe and unsubscribe from that event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[DevToolsProtocolEventReceived](#devtoolsprotocoleventreceived) | Subscribe to a DevToolsProtocol event.

Obtained from the WebView object via GetDevToolsProtocolEventReceiver.

## Members

### Properties

#### DevToolsProtocolEventReceived 

Subscribe to a DevToolsProtocol event.

> public event EventHandler< [CoreWebView2DevToolsProtocolEventReceivedEventArgs](Microsoft--Web--WebView2--Core--CoreWebView2DevToolsProtocolEventReceivedEventArgs.md) > [DevToolsProtocolEventReceived](#devtoolsprotocoleventreceived)

The handler's Invoke method will be called whenever the corresponding DevToolsProtocol event fires. Invoke will be called with the an event args object containing the DevTools Protocol event's parameter object as a JSON string.

