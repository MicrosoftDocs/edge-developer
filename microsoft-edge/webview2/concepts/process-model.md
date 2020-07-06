---
description: Process model
title: Process model
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/06/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Process model  

WebView2 uses the same process model as the Microsoft Edge browser.  Any WebView requesting process that specifies a user data directory in a user session uses the same Microsoft Edge browser process associated with the same user data directory.  Likewise, a single Microsoft Edge browser process may be serving multiple requesting processes and one requesting process may be using multiple Microsoft Edge browser processes.  

:::image type="complex" source="../media/dot-inline-dotgraph-2.png" alt-text="Dot inline Dotgraph 2" lightbox="../media/dot-inline-dotgraph-2.png":::
   Dot inline Dotgraph 2  
:::image-end:::  

From a browser process there are several renderer processes.  The processes are created, as required, to service potentially multiple frames in different WebViews.  The number of renderer processes varies based on the site isolation browser feature and the number of distinct disconnected origins rendered in associated WebViews.  

:::image type="complex" source="../media/dot-inline-dotgraph-3.png" alt-text="Dot inline Dotgraph 3" lightbox="../media/dot-inline-dotgraph-3.png":::
   Dot inline Dotgraph 3  
:::image-end:::  

You are able to react to crashes and hangs in the specific browser and renderer processes using the `ProcessFailure` event.  

You may safely shutdown associated browser and renderer processes using the `Close` method.  

## Threading model  

The WebView2 must be created on a UI thread.  Specifically a thread with a message pump.  All callbacks occur on the same thread and requests into the WebView must be done on the same thread.  It is not safe to use the WebView from another thread.  

Callbacks, including event handlers and completion handlers, run serially.  If you have an event handler running and begin a message loop, all other reentrant code is stopped for event handlers and completion callbacks.  


<!-- links -->  
