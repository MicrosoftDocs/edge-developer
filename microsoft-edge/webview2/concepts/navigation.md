---
description: Navigation
title: Navigation
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/02/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Navigation events  

The normal sequence of navigation events is `NavigationStarting`, `SourceChanged`, `ContentLoading`, and then `NavigationCompleted`.  The following events describe the state of WebView during each navigation.  

| Sequence | Event name | Details |  
|:--- |:--- |:--- |  
| 1 | `NavigationStarting`  |  WebView is starting to navigate and the navigation results in a network request.  The host is able to disallow the request during the event.  |  
| 2 | `SourceChanged`  |  The source of WebView is changed to a new URL.  The event may result from a navigation that does not cause a network request such as a fragment navigation.  |  
| 3a | `HistoryChanged`  |  The history of WebView has been updated as a result of the navigation.  |  
| 3b | `ContentLoading`  |  WebView has started loading new content.  |  
| 4 | `NavigationCompleted`  |  WebView has completed loading content on the new page.  You, the developer, are able to track `navigations` to each new document by the navigation ID.  The navigation ID of WebView changes every time there is a successful navigation to a new document.  |  

:::image type="complex" source="../media/dot-inline-dotgraph-1.png" alt-text="dot inline dotgraph" lightbox="../media/dot-inline-dotgraph-1.png":::
   The Microsoft Edge DevTools in high contrast mode  
:::image-end:::  

> [!NOTE]
> The following is true for navigation events with the same `NavigationId` event arg.  `Navigations` events with different NavigationId event args may overlap.  For instance, if you start a navigation wait for the related `NavigationStarting` event and then start another navigation you should see the `NavigationStarting` for the first navigate followed by the `NavigationStarting` of the second navigate, followed by the `NavigationCompleted` for the first navigation and then all the rest of the appropriate navigation events for the second navigation.  In error cases there may or may not be a `ContentLoading` event depending on whether the navigation is continued to an error page.  In case of an HTTP redirect, there are multiple `NavigationStarting` events in a row, with ones following the first is the associated `IsRedirect` flag set, however navigation ID remains the same.  Same document `navigations` do not result in `NavigationStarting` event and also do not increment the navigation ID.  

To monitor or cancel `navigations` inside subframes in the WebView, use `FrameNavigationStarting`.  

<!-- links -->  
