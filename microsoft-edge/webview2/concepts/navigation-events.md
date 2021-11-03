---
description: "Navigation events for WebView2: NavigationStarting, SourceChanged, ContentLoading, HistoryChanged, DOMContentLoaded, and NavigationCompleted."
title: Navigation events for WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/28/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Navigation events for WebView2

Supported platforms: Win32, Windows Forms, WinUi, WPF.

Navigation events run when specific asynchronous actions occur to the content that's displayed in a WebView2 instance.  For example, when a WebView2 user navigates to a new website, the native content listens for the change by listening for the `NavigationStarting` event.  When the navigation action completes, `NavigationCompleted` runs.  For an example of navigation events, see a platform-specific [Get started](../index.md#get-started) article.

<!--todo:  Move the relevant information out of the get started guide to better focus the content and leave the most concise elements in the get started guide.  -->

The normal sequence of navigation events is:
1. `NavigationStarting`
1. `SourceChanged`
1. `ContentLoading`
1. `HistoryChanged`
1. `DOMContentLoaded`
1. `NavigationCompleted`

The following events describe the state of WebView2 during each navigation action:

:::row:::
   :::column span="1":::
      :::image type="content" source="../media/navigation-graph.png" alt-text="The Microsoft Edge WebView2 Navigation Events." lightbox="../media/navigation-graph.png":::
   :::column-end:::
   :::column span="2":::
      | Sequence | Event name | Details |
      |:--- |:--- |:--- |
      | 1 | `NavigationStarting` |  WebView2 starts to navigate and the navigation results in a network request.  The host may disallow the request during the event. |
      | 2 | `SourceChanged` |  The source of WebView2 changes to a new URL.  The event may result from a navigation action that does not cause a network request such as a fragment navigation. |
      | 3 | `ContentLoading` |  WebView2 starts loading content for the new page. |
      | 4 | `HistoryChanged` |  The navigation causes the history of WebView2 to update. |
      | 5 | `DOMContentLoaded` |  WebView2 finishes parsing the DOM content but hasn't finished loading all images, script, and other content on the page. |
      | 6 | `NavigationCompleted` |  WebView2 completes loading content on the new page. |
   :::column-end:::
:::row-end:::

The above figure shows navigation events that have the same `NavigationId` property on the respective event argument.

Track navigation events to each new document by using the navigation ID (which is provided in the `NavigationId` event).  The `NavigationId` event of WebView2 changes every time a successful navigation to a new document completes.

Navigation events with different instances of `NavigationId` event may overlap.  For instance, when you start a navigation event, you must wait for the related `NavigationStarting` event.  If you then start another navigation, you'll see the following sequence:
1. The `NavigationStarting` event for the first navigation.
1. The `NavigationStarting` event for the second navigation.
1. The `NavigationCompleted` event for the first navigation.
1. All the rest of the appropriate navigation events for the second navigation.

In error cases, there may or may not be a `ContentLoading` event, depending on whether the navigation is continued to an error page.

If an HTTP redirect occurs, there are multiple `NavigationStarting` events in a row, where later event arguments have the `IsRedirect` property set; however, the `NavigationId` event remains the same.

Same-document navigation events, such as navigating to a fragment in the same document, don't cause a `NavigationStarting` event, and don't increment the `NavigationId` event.

To monitor or cancel navigation events inside subframes in a WebView2 instance, use the `FrameNavigationStarting` and `FrameNavigationCompleted` events.  Those events act like the equivalent non-frame, counterpart events.


<!-- ====================================================================== -->
## See also

*  [WebView2 Get Started Guides](../index.md#get-started)
*  [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
*  [WebView2 API reference](/dotnet/api/microsoft.web.webview2.wpf.webview2)
*  [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
