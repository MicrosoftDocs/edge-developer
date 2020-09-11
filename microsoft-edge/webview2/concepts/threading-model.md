---
description: Threading model
title: Threading model
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/23/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Threading model 
The WebView2 control is based on the [Component Object Model (COM)](https://docs.microsoft.com/en-us/windows/win32/com/the-component-object-model) and must run on a [Single Threaded Apartments (STA)](https://docs.microsoft.com/en-us/windows/win32/com/single-threaded-apartments) thread.

## Thread safety  

The WebView2 must be created on a UI thread.  Specifically a thread with a message pump.  All callbacks occur on that thread and requests into the WebView2 must be done on that thread.  It is not safe to use the WebView2 from another thread.  

The only exception is for the `Content` property of `CoreWebView2WebResourceRequest`.  The `Content` property stream is read from a background thread.  The stream should be agile or be created from a background STA to prevent performance impact to the UI thread.  

## Reentrancy  

Callbacks including event handlers and completion handlers run serially.  If you have an event handler running and begin a message loop, no other event handlers or completion callbacks are able to begin running in a reentrant manner.  

## Deferrals  

Some WebView2 events read values set on their event args or perform some action after the event handler completes.  If you also need to run an asynchronous operation such an event handler, you may use the `GetDeferral` method on the event args of the associated events.  The returned Deferral object ensures the event handler is not considered complete until the `Complete` method of the `Deferral` is requested.  

For instance, you may use the `NewWindowRequested` event to provide a `CoreWebView2` to connect as a child window when the event handler completes.  But if you need to asynchronously create the `CoreWebView2`, request the `GetDeferral` method on the `NewWindowRequestedEventArgs`.  After you have asynchronously created the `CoreWebView2` and set the `NewWindow` property on the `NewWindowRequestedEventArgs`, request `Complete` on the `Deferral` object be returned using the `GetDeferral` method.  

<!-- links -->  
