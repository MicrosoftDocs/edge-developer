---
title: Navigation events for WebView2 apps
description: "Navigation events for WebView2: NavigationStarting, SourceChanged, ContentLoading, HistoryChanged, DOMContentLoaded, and NavigationCompleted."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 11/07/2022
---
# Navigation events for WebView2 apps
<!-- old title: # Navigation events for WebView2 -->

<!--
maintenance links (keep)
This, main page:
* [Navigation events for WebView2 apps](../concepts/navigation-events.md) - main copy; update it and then propagate/copy to these h2 sections:
Derivative copies of this page's content, or links to this page:
* [Get started with WebView2 in Win32 apps](../get-started/win32.md#step-12---navigation-events)
* [Get started with WebView2 in WinForms apps](../get-started/winforms.md#step-7---navigation-events)
* [Get started with WebView2 in WinUI 2 (UWP) apps](../get-started/winui2.md#step-7---navigation-events)
* [Get started with WebView2 in WinUI 3 (Windows App SDK) apps](../get-started/winui.md#step-7---navigation-events)
* [Get started with WebView2 in WPF apps](../get-started/wpf.md#step-6---navigation-events)
-->

Supported platforms: Win32, Windows Forms, WinUI, WPF.

When the user of your WebView2 app goes to a different webpage, URL, or file path, this is a _navigation_.  Each navigation fires a sequence of navigation-related events.  The native portion of your WebView2 app listens for these navigation events and handles them.

Navigation events run when specific asynchronous actions occur to the content that's displayed in a WebView2 instance.  For example, when a WebView2 user navigates to a new website, the native content listens for the change by listening for the `NavigationStarting` event.  When the navigation action completes, `NavigationCompleted` runs.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.NavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigationstarting)
   * [CoreWebView2NavigationStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs)
* [CoreWebView2.FrameNavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationstarting)
* [CoreWebView2Frame.NavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationstarting)
   * [CoreWebView2NavigationStartingEventArgs Class](/dotnet/api/microsoft.web.webview2.core.corewebview2navigationstartingeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.NavigationStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigationstarting)
   * [CoreWebView2NavigationStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationstartingeventargs)
* [CoreWebView2.FrameNavigationStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationstarting)
* [CoreWebView2Frame.NavigationStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationstarting)
   * [CoreWebView2NavigationStartingEventArgs Class](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2navigationstartingeventargs)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::NavigationStarting event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_navigationstarting), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_navigationstarting)
   * [ICoreWebView2NavigationStartingEventArgs2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs2)<!--v2-->
* [ICoreWebView2::FrameNavigationStarting event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationstarting), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationstarting)
* [ICoreWebView2Frame2::NavigationStarting event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationstarting), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationstarting)
   * [ICoreWebView2NavigationStartingEventArgs2 interface](/microsoft-edge/webview2/reference/win32/icorewebview2navigationstartingeventargs2)<!--v2-->

---

For example code showing how to handle navigation events, see:
* [Learn about navigation events](https://learn.microsoft.com/en-us/microsoft-edge/webview2/get-started/winui2#learn-about-navigation-events) in _Get started with WebView2 in WinUI 2 (UWP) apps_ - no example code in the article; see other frameworks' articles.
* [Step 6 - Navigation events](https://learn.microsoft.com/en-us/microsoft-edge/webview2/get-started/winui#step-6---navigation-events) in _Get started with WebView2 in WinUI 3 (Windows App SDK) apps_.
* [Step 8 - Navigation events](https://learn.microsoft.com/en-us/microsoft-edge/webview2/get-started/wpf#step-8---navigation-events) in _Get started with WebView2 in WPF apps_.
* [Step 8 - Navigation events](https://learn.microsoft.com/en-us/microsoft-edge/webview2/get-started/winforms#step-8---navigation-events) in _Get started with WebView2 in WinForms apps_.
* [Step 14 - Navigation events](https://learn.microsoft.com/en-us/microsoft-edge/webview2/get-started/win32#step-14---navigation-events) in _Get started with WebView2 in Win32 apps_.


The normal sequence of navigation events is:
1. `NavigationStarting`
1. `SourceChanged`
1. `ContentLoading`
1. `HistoryChanged`
1. `BasicAuthenticationRequested`
1. `DOMContentLoaded`
1. `NavigationCompleted`


For information about `BasicAuthenticationRequested`, see [Basic authentication for WebView2 apps](./basic-authentication.md).


The following events describe the state of WebView2 during each navigation action:

![WebView2 Navigation Events](../media/navigation-graph.png)

| Sequence | Event name | Details |
| --- | --- | --- |
| 1 | `NavigationStarting` |  WebView2 starts to navigate and the navigation results in a network request.  The host may disallow the request during the event. |
| 2 | `SourceChanged` |  The source of WebView2 changes to a new URL.  The event may result from a navigation action that doesn't cause a network request such as a fragment navigation. |
| 3 | `ContentLoading` |  WebView2 starts loading content for the new page. |
| 4 | `HistoryChanged` |  The navigation causes the history of WebView2 to update. |
| 5 | `DOMContentLoaded` |  WebView2 finishes parsing the DOM content but hasn't finished loading all images, script, and other content on the page. |
| 6 | `NavigationCompleted` |  WebView2 completes loading content on the new page. |


<!-- ------------------------------ -->
#### Navigation IDs

The above figure shows navigation events that have the same `NavigationId` property on the respective `eventArgs` object.

Track navigation events to each new document by using the `NavigationId` property of each navigation event's `eventArgs` object.  Each navigation involves a sequence of navigation events.  The `NavigationId` value changes every time a successful navigation to a new document is completed.

Navigation events that have different Navigation IDs may overlap.  For instance, when you start a navigation event, you must wait for the related `NavigationStarting` event.  The `NavigationStarting` event is identified by the `NavigationId` property on the `NavigationStartingEventArgs` object.  If you then start another navigation, you'll see the following sequence:
1. The `NavigationStarting` event for the first navigation.
1. The `NavigationStarting` event for the second navigation.
1. The `NavigationCompleted` event for the first navigation.
1. All the rest of the appropriate navigation events for the second navigation.

In error cases, there may or may not be a `ContentLoading` event, depending on whether the navigation is continued to an error page.

If an HTTP redirect occurs, there are multiple `NavigationStarting` events in a row, where later event arguments have the `IsRedirect` property set; however, the Navigation ID remains the same.

Same-document navigation events, such as navigating to a fragment in the same document, don't cause a `NavigationStarting` event to be fired, and don't cause the Navigation ID to change.


<!-- ------------------------------ -->
#### Navigation in frames

To monitor or cancel navigation events inside frames in a WebView2 instance, use the equivalent frame-related APIs and events.  See [Using frames in WebView2 apps](./frames.md).


<!-- ====================================================================== -->
## API Reference overview

* [Navigate to pages and manage loaded content](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/overview-features-apis?tabs=dotnetcsharp#navigate-to-pages-and-manage-loaded-content) in _Overview of WebView2 features and APIs_


<!-- ====================================================================== -->
## See also

* [Get started with WebView2](../get-started/get-started.md)
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
* [WebView2 API reference](/dotnet/api/microsoft.web.webview2.wpf.webview2)
* [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
