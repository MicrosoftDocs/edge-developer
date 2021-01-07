---
description: Process model
title: Process model
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/07/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Process model  

WebView2 uses the same process model as the Microsoft Edge browser.  For more information about the browser process model, navigate to [Browser Architecture - Inside look at modern web browser][GoogleDeveloperWebUpdates201809InsideBrowserPart1BrowserArchitecture]. 

One browser process is associated with the renderer processes and other utility processes as described in that article.  Additionally, in the case of WebView2, there are host app requesting processes using WebView2.  

:::image type="complex" source="../media/process-model-1.png" alt-text="Process 1" lightbox="../media/process-model-1.png":::
   Process 1  
:::image-end:::  

One browser process is specified per user data folder in a user session that serve any WebView2 requesting process that specifies that user data folder.  This means one browser process may be serving multiple requesting processes and one requesting process may be using multiple browser processes.  

:::image type="complex" source="../media/process-model-2.png" alt-text="Process 2" lightbox="../media/process-model-2.png":::
   Process 2  
:::image-end:::  

A browser process has some number of associated renderer processes.  The browser processes are created as required to service potentially multiple frames in different instances of WebView2.  The number of renderer processes varies based on the site isolation browser feature and the number of distinct disconnected origins rendered in associated instances of WebView2.  The site isolation browser feature is described in the previous content.  

The `CoreWebView2Environment` represents a user data folder and browser process.  The `CoreWebView2` does not directly correspond to any one set of processes since various renderer processes are used by a WebView2 depending on site isolation as previously described.  

You are able to react to crashes and hangs in these browser and renderer processes using the `ProcessFailed` event of `CoreWebView2`.  

You are able to safely shutdown associated browser and renderer processes using the `Close` method of `CoreWebView2Controller`.  

To open the Browser Task Manager window from the **DevTools** window of a WebView2 instance, you are able to select `Shift`+`Escape` or hover on the DevTools window title bar, open the contextual menu \(right-click\), and choose `Browser task manager`.  All processes associated with the browser process of your WebView2 are displayed including associated purposes.  

<!-- links -->  

[GoogleDeveloperWebUpdates201809InsideBrowserPart1BrowserArchitecture]: https://developers.google.com/web/updates/2018/09/inside-browser-part1#browser-architecture "Browser Architecture - Inside look at modern web browser (part 1)"  
