---
description: Process model
title: Process model | WebView 2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
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
      Win32, Windows Forms, WinUI, WPF
   :::column-end:::
:::row-end:::  

The WebView2 Runtime uses the same process model as the Microsoft Edge browser.  For more information about the browser process model, navigate to [Browser Architecture - Inside look at modern web browser][GoogleDeveloperWebUpdates201809InsideBrowserPart1BrowserArchitecture].  


## Processes in the WebView2 Runtime
A collection of WebView2 Runtime processes, or WebView2 Process Group, is composed of the following processes:
*   A single browser process
*   One or more render processes
*   Other helper processes (such as the GPU process, or the Audio service process)

:::image type="complex" source="../media/process-model-1.png" alt-text="Process 1" lightbox="../media/process-model-1.png":::
   Process 1  
:::image-end:::    

Other than the browser process, the number and presence of processes in this collection can change as a WebView2 application makes use of WebView2 features. For example, creating a new WebView from the same `CoreWebView2Environment` with a different domain in the `Source` property will usually start a new renderer process. The logic that decides when these additional processes are created depends on the Chromium architecture, and is beyond the scope of the WebView2 Runtime.

For example, the number of render processes varies based on the following conditions.  

<!-- TODO:  which previous content?  -->  
*   Use of the website isolation feature (described in the previous content) in the WebView2 Runtime.  
*   The number of distinct disconnected origins rendered in instances of WebView2 using the same User Data Folder.  


## WebView2 Runtime processes and the User Data Folder
All processes in a WebView2 Runtime processes collection are tied to the browser process, which in turn is associated with a single User Data Folder (UDF).  If an application makes use of multiple User Data Folders, a WebView2 Runtime processes collection will be created for each of these User Data Folders. A User Data Folder can be shared by multiple applications, but applications choosing to do this should carefully consider the implications on performance and management. See [Manage the user data folder][WebView2ManageUDF] for more information.

:::image type="complex" source="../media/process-model-2.png" alt-text="Process 2" lightbox="../media/process-model-2.png":::
   Process 2  
:::image-end:::    

To make use of multiple User Data Folders, a WebView2 application needs to create different `CoreWebView2Environment` objects, each configured with a different User Data Folder value. When the first `WebView2` instance is created over a given User Data Folder (through the configured `CoreWebView2Environment`), the browser process for the WebView2 Runtime processes collection associacted to that UDF will be started, and all additional processes will be managed by its lifetime.

<!-- TODO: update with profile info -->
The `CoreWebView2Environment` represents a User Data Folder and the collection of processes associated to it.  A given render process is not associated to single `CoreWebView2` instance, as it can serve frames in multiple `CoreWebView2` instances using the same User Data Folder, depending on website isolation as previously described.  


## Handling process events and lifetime
To react to crashes and hangs in the browser and renderer processes, use the `ProcessFailed` event of `CoreWebView2`.  

To safely shut down associated browser and renderer processes, use the `Close` method of `CoreWebView2Controller`.  

To open the Browser Task Manager window from the **DevTools** window of a WebView2 instance, complete on of the following actions.  

*   Select `Shift`+`Escape`.  
*   Hover on the DevTools window title bar, open the contextual menu \(right-click\), and choose `Browser task manager`.  
    
All processes associated with the browser process of your WebView2 are displayed including their associated purposes.  

## See also  

*   To Get Started using WebView2, navigate to [WebView2 Get Started Guides][Webview2IndexGetStarted] guides.  
*   For a comprehensive example of WebView2 capabilities, navigate to [WebView2Samples repo][GithubMicrosoftedgeWebview2samples] on GitHub.  
*   For more detailed information about WebView2 APIs, navigate to [API reference][DotnetApiMicrosoftWebWebview2WpfWebview2].  
*   For more information about WebView2, navigate to [WebView2 Resources][Webview2IndexNextSteps].  
    
## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

[Webview2IndexGetStarted]: ../index.md#get-started "Get started - Introduction to Microsoft Edge WebView2 | Microsoft Docs"  
[Webview2IndexNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 | Microsoft Docs"  
[WebView2ManageUDF]: ./user-data-folder.md "Manage the user data folder | Microsoft Docs"

[DotnetApiMicrosoftWebWebview2WpfWebview2]: /dotnet/api/microsoft.web.webview2.wpf.webview2 "WebView2 Class | Microsoft Docs"  

[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  

[GoogleDeveloperWebUpdates201809InsideBrowserPart1BrowserArchitecture]: https://developers.google.com/web/updates/2018/09/inside-browser-part1#browser-architecture "Browser Architecture - Inside look at modern web browser (part 1)"  
