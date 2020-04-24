---
description: Host web content in your Win32 app with the Microsoft Edge WebView2 control
title: Microsoft Edge WebView2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/22/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Controller, browser control, edge html
---

# class Microsoft::Web::WebView2::Core::CoreWebView2DevToolsProtocolEventReceiver 

A Receiver is created for a particular DevTools Protocol event and allows you to subscribe and unsubscribe from that event.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[DevToolsProtocolEventReceived](#devtoolsprotocoleventreceived) | Subscribe to a DevToolsProtocol event.
[CoreWebView2DevToolsProtocolEventReceiver](#corewebview2devtoolsprotocoleventreceiver) | Initializes a new instance of the CoreWebView2DevToolsProtocolEventReceiver class.

Obtained from the WebView object via GetDevToolsProtocolEventReceiver.

## Members

#### DevToolsProtocolEventReceived 

Subscribe to a DevToolsProtocol event.

> {property} EventHandler< CoreWebView2DevToolsProtocolEventReceivedEventArgs > [DevToolsProtocolEventReceived](#devtoolsprotocoleventreceived)

The handler's Invoke method will be called whenever the corresponding DevToolsProtocol event fires. Invoke will be called with the an event args object containing the DevTools Protocol event's parameter object as a JSON string.

#### CoreWebView2DevToolsProtocolEventReceiver 

Initializes a new instance of the CoreWebView2DevToolsProtocolEventReceiver class.

> public inline  [CoreWebView2DevToolsProtocolEventReceiver](#corewebview2devtoolsprotocoleventreceiver)(Microsoft.Web.WebView2.Core.Raw.ICoreWebView2DevToolsProtocolEventReceiver rawCoreWebView2DevToolsProtocolEventReceiver)

