---
description: Navigation
title: Navigation | WebView 2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/06/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Navigation events  

:::row:::
   :::column span="1":::
      Supported platforms:
   :::column-end:::
   :::column span="2":::
      Win32, Windows Forms, WinUi, WPF
   :::column-end:::
:::row-end:::  

Navigation events run when specific asynchronous actions occur to the content displayed in a WebView2 instance.  For example, when a WebView2 user navigates to a new website, the native content listens for the change using `NavigationStarting` event.  When the navigation action completes, `NavigationCompleted` runs.  For a good example of navigation events, navigate to [WebView2 Get Started guide][Webview2IndexGetStarted].  

<!--todo:  Move the relevant information out of the get started guide to better focus the content and leave the most concise elements in the get started guide.  -->   

The normal sequence of navigation events is `NavigationStarting`, `SourceChanged`, `ContentLoading`, `HistoryChanged`, and then `NavigationCompleted`.  The following events describe the state of WebView2 during each navigation.  

:::row:::
   :::column span="1":::
      :::image type="complex" source="../media/navigation-graph.png" alt-text="The Microsoft Edge WebView2 Navigation Events" lightbox="../media/navigation-graph.png":::
         The Microsoft Edge WebView2 Navigation Events  
      :::image-end:::  
      
      > [!NOTE]
      > The figure represents navigation events with the same `NavigationId` property on the respective event argument.  
   :::column-end:::
   :::column span="2":::
      | Sequence | Event name | Details |  
      |:--- |:--- |:--- |  
      | 1 | `NavigationStarting`  |  WebView2 starts to navigate and the navigation results in a network request.  The host may disallow the request during the event.  |  
      | 2 | `SourceChanged`  |  The source of WebView2 changes to a new URL.  The event may result from a navigation action that does not cause a network request such as a fragment navigation.  |  
      | 3 | `ContentLoading`  |  WebView starts loading content for the new page.  |  
      | 4 | `HistoryChanged`  |  The navigation causes the history of WebView2 to update.  |  
      | 5 | `NavigationCompleted`  |  WebView2 completes loading content on the new page.  |  
   :::column-end:::
:::row-end:::

Track navigation events to each new document using the navigation ID \(`NavigationId` event\).  The `NavigationId` event of WebView changes every time a successful navigation to a new document completes.  

 Navigation events with different instances of `NavigationId` event may overlap.  For instance, when you start a navigation event, you must wait for the related `NavigationStarting` event.  If you then start another navigation, you should see the `NavigationStarting` event for the first navigate followed by the `NavigationStarting` event for the second navigate, followed by the `NavigationCompleted` event for the first navigation and then all the rest of the appropriate navigation events for the second navigation.  
 
 In error cases, there may or may not be a `ContentLoading` event depending on whether the navigation is continued to an error page.  
 
 If an HTTP redirect occurs, there are multiple `NavigationStarting` events in a row, where later event arguments have the `IsRedirect` property set, however the `NavigationId` event remains the same.  
 
 Same document navigation events, such as navigating to a fragment, do not result in the `NavigationStarting` event and do not increment the `NavigationId` event.  

To monitor or cancel navigation events inside subframes in a WebView2 instance, use the `FrameNavigationStarting` and `FrameNavigationCompleted` events that act just like the equivalent non-frame counterpart events.  

## See also  

*   To get started using WebView2, navigate to [WebView2 Get Started Guides][Webview2IndexGetStarted] guides.  
*   For a comprehensive example of WebView2 capabilities, navigate to [WebView2Samples repo][GithubMicrosoftedgeWebview2samples] on GitHub.  
*   For more detailed information about WebView2 APIs, navigate to [API reference][DotnetApiMicrosoftWebWebview2WpfWebview2].  
*   For more information about WebView2, navigate to [WebView2 Resources][Webview2IndexNextSteps].  

## Getting in touch with the Microsoft Edge WebView team  

[!INCLUDE [contact WebView team note](../includes/contact-webview-team-note.md)]  

<!-- links -->  

[Webview2IndexGetStarted]: ../index.md#get-started "Get started - Introduction to Microsoft Edge WebView2 | Microsoft Docs"  
[Webview2IndexNextSteps]: ../index.md#next-steps "Next steps - Introduction to Microsoft Edge WebView2 | Microsoft Docs"  

[DotnetApiMicrosoftWebWebview2WpfWebview2]: /dotnet/api/microsoft.web.webview2.wpf.webview2 "WebView2 Class | Microsoft Docs"  

[GithubMicrosoftedgeWebview2samples]: https://github.com/MicrosoftEdge/WebView2Samples "WebView2 Samples - MicrosoftEdge/WebView2Samples | GitHub"  
