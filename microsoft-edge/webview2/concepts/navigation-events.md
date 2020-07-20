---
description: Navigation
title: Navigation
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/06/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Navigation events  

The normal sequence of navigation events is `NavigationStarting`, `SourceChanged`, `ContentLoading`, `HistoryChanged`, and then `NavigationCompleted`.  The following events describe the state of WebView2 during each navigation.  

| Sequence | Event name | Details |  
|:--- |:--- |:--- |  
| 1 | `NavigationStarting`  |  WebView2 is starting to navigate and the navigation results in a network request.  The host is able to disallow the request during the event.  |  
| 2 | `SourceChanged`  |  The source of WebView2 is changed to a new URL.  The event may result from a navigation that does not cause a network request such as a fragment navigation.  |  
| 3 | `HistoryChanged`  |  The history of WebView2 has been updated as a result of the navigation.  |  
| 4 | `ContentLoading`  |  WebView has started loading content for the new page.  |  
| 5 | `NavigationCompleted`  |  WebView2 has completed loading content on the new page.    |  

Track `navigations` to each new document using the `NavigationId`.  The `NavigationId` of WebView changes every time there is a successful navigation to a new document.

:::image type="complex" source="../media/navigation-graph.png" alt-text="dot inline dotgraph" lightbox="../media/navigation-graph.png":::
   The Microsoft Edge WebView2 Navigation Events  
:::image-end:::  

> [!NOTE]
> The image above represents navigation events with the same `NavigationId` property on their event arg.

 `Navigations` events with different `NavigationId`'s may overlap.  For instance, if you start a navigation, wait for the related `NavigationStarting` event, and then start another navigation you should see the `NavigationStarting` for the first navigate followed by the `NavigationStarting` of the second navigate, followed by the `NavigationCompleted` for the first navigation and then all the rest of the appropriate navigation events for the second navigation.  
 
 In error cases there may or may not be a `ContentLoading` event depending on whether the navigation is continued to an error page.  
 
 In the case of an HTTP redirect, there are multiple `NavigationStarting` events in a row, where subsequent event args have the `IsRedirect` property set, however the navigation ID remains the same.  
 
 Same document `navigations`, for instance navigating to a fragment, do not result in the `NavigationStarting` event and do not increment the navigation ID.  

To monitor or cancel `navigations` inside subframes in the WebView, use the `FrameNavigationStarting` and the `FrameNavigationCompleted` events which act just like their non-frame counterpart events.  

<!-- links -->  
