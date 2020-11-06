---
description: Process model
title: Process model
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/05/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Process model  

:::row:::
   :::column span="1":::
      Supported platforms:
   :::column-end:::
   :::column span="2":::
      Win32, Windows Forms, WinUi, WPF
   :::column-end:::
:::row-end:::  

WebView2 uses the same process model as the Microsoft Edge browser.  For more information about the browser process model, navigate to [Browser Architecture - Inside look at modern web browser][GoogleDeveloperWebUpdates201809InsideBrowserPart1BrowserArchitecture].  

One browser process is associated with the renderer processes and other utility processes as described in that article.  Additionally, if WebView2 is specified, the host app requesting processes use WebView2.  

:::image type="complex" source="../media/process-model-1.png" alt-text="Process 1" lightbox="../media/process-model-1.png":::
   Process 1  
:::image-end:::  

One browser process is specified per user data folder.  Any later request process that specifies the same user data folder uses the same browser process. If a request process specifies a different user data folder, it runs under the browser process for the other user data folder.  In summary, one browser process may be serving multiple request processes and one request process may be using multiple browser processes.  

:::image type="complex" source="../media/process-model-2.png" alt-text="Process 2" lightbox="../media/process-model-2.png":::
   Process 2  
:::image-end:::  

A browser process has some number of associated renderer processes.  The browser processes are created as required to service potentially multiple frames in different instances of WebView2.  The number of renderer processes varies based on the website isolation browser feature and the number of distinct disconnected origins rendered in associated instances of WebView2.  The website isolation browser feature is described in the previous content.  

The `CoreWebView2Environment` represents a user data folder and browser process.  The `CoreWebView2` does not directly correspond to any one set of processes since various renderer processes are used by a WebView2 depending on website isolation as previously described.  

React to crashes and hangs in the browser and renderer processes using the `ProcessFailed` event of `CoreWebView2`.  

Safely shut down associated browser and renderer processes using the `Close` method of `CoreWebView2Controller`.  

To open the Browser Task Manager window from the **DevTools** window of a WebView2 instance, you may select `Shift`+`Escape` or hover on the DevTools window title bar, open the contextual menu \(right-click\), and choose `Browser task manager`.  All processes associated with the browser process of your WebView2 are displayed including associated purposes.  

## See also  

*   To Get Started using WebView2, navigate to [WebView2 Getting Started Guides][Webview2IndexGettingStarted] guides.  
*   For a comprehensive example of WebView2 capabilities, navigate to [WebView2Samples repo][GithubMicrosoftedgeWebview2samples] on GitHub.  
*   For more detailed information about WebView2 APIs, navigate to [API reference][DotnetApiMicrosoftWebWebview2WpfWebview2].  
*   For more information about WebView2, navigate to [WebView2 Resources][Webview2IndexNextSteps].  

## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

[Webview2IndexGettingStarted]: ../index.md#getting-started "Getting started - Introduction to Microsoft Edge WebView2 | Microsoft Docs"  
[Webview2IndexNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 | Microsoft Docs"  

[DotnetApiMicrosoftWebWebview2WpfWebview2]: /dotnet/api/microsoft.web.webview2.wpf.webview2 "WebView2 Class | Microsoft Docs"  

[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  

[GoogleDeveloperWebUpdates201809InsideBrowserPart1BrowserArchitecture]: https://developers.google.com/web/updates/2018/09/inside-browser-part1#browser-architecture "Browser Architecture - Inside look at modern web browser (part 1)"  
