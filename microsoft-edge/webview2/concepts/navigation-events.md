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

When the user of your WebView2 app goes to a different webpage, URL, or file path, this is a _navigation_.  Each navigation fires a sequence of navigation-related events.  The native portion of your WebView2 app listens for these navigation events and handles them.

Navigation events run when specific asynchronous actions occur to the content that's displayed in a WebView2 instance.  For example, when a WebView2 user navigates to a new website, the native content listens for the change by listening for the `NavigationStarting` event.  When the navigation action completes, `NavigationCompleted` runs.


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
<!-- todo: it would be more useful to list what's not supported -->


<!-- ====================================================================== -->
## Standard sequence of events

The following is the normal sequence of events that are fired during each step of a navigation:

![WebView2 Navigation Events](../media/navigation-graph.png)

| Sequence | Event | Description | API Reference overview |
|---|---|---|---|
| 1 | `NavigationStarting` |  WebView2 starts to navigate and the navigation results in a network request.  The host may disallow the request during the event. | [Block unwanted navigating](/microsoft-edge/webview2/concepts/overview-features-apis.md#block-unwanted-navigating) |
| 2 | `SourceChanged` |  The source of WebView2 changes to a new URL.<!--todo: clarify-->  The event may result from a navigation action that doesn't cause a network request, such as a fragment<!--todo: anchor?--> navigation. | [Navigation history](./overview-features-apis.md#navigation-history) |
| 3 | `ContentLoading` |  WebView2 starts loading content for the new page. | [Navigation events](./overview-features-apis.md) |
| 4 | `HistoryChanged` |  The navigation causes the history of WebView2 to update. | [Navigation history](./overview-features-apis.md) |
| 5 | `BasicAuthenticationRequested` |  tbd<!--todo--> | [Authentication](./overview-features-apis.md) |
| 6 | `DOMContentLoaded` |  WebView2 finishes parsing the DOM content but hasn't finished loading all images, script, and other content on the page. | [Navigation events](./overview-features-apis.md) |
| 7 | `NavigationCompleted` |  WebView2 completes loading content on the new page. | [Navigation events](./overview-features-apis.md) |

For example code showing how to handle navigation events, see:
* [Learn about navigation events](https://learn.microsoft.com/microsoft-edge/webview2/get-started/winui2#learn-about-navigation-events) in _Get started with WebView2 in WinUI 2 (UWP) apps_ - no example code in the article; see other frameworks' articles.
* [Step 6 - Navigation events](https://learn.microsoft.com/microsoft-edge/webview2/get-started/winui#step-6---navigation-events) in _Get started with WebView2 in WinUI 3 (Windows App SDK) apps_.
* [Step 8 - Navigation events](https://learn.microsoft.com/microsoft-edge/webview2/get-started/wpf#step-8---navigation-events) in _Get started with WebView2 in WPF apps_.
* [Step 8 - Navigation events](https://learn.microsoft.com/microsoft-edge/webview2/get-started/winforms#step-8---navigation-events) in _Get started with WebView2 in WinForms apps_.
* [Step 14 - Navigation events](https://learn.microsoft.com/microsoft-edge/webview2/get-started/win32#step-14---navigation-events) in _Get started with WebView2 in Win32 apps_.


<!-- ====================================================================== -->
## Navigation IDs

The diagram above shows navigation events that have the same `NavigationId` property on the respective `eventArgs` object.

Track navigation events to each new document by using the `NavigationId` property of each navigation event's `eventArgs` object.  Each navigation involves a sequence of navigation events.  The `NavigationId` value changes every time a successful navigation to a new document is completed.

Navigation events that have different Navigation IDs may overlap.  For instance, when you start a navigation event, you must wait for the related `NavigationStarting` event.  The `NavigationStarting` event is identified by the `NavigationId` property on the `NavigationStartingEventArgs` object.  If you then start another navigation, you'll see the following sequence:
1. The `NavigationStarting` event for the first navigation.
1. The `NavigationStarting` event for the second navigation.
1. The `NavigationCompleted` event for the first navigation.
1. All the rest of the appropriate navigation events for the second navigation.

In error cases, there may or may not be a `ContentLoading` event, depending on whether the navigation is continued to an error page.

If an HTTP redirect occurs, there are multiple `NavigationStarting` events in a row, where later event arguments have the `IsRedirect` property set; however, the Navigation ID remains the same.

Same-document navigation events, such as navigating to a fragment in the same document, don't cause a `NavigationStarting` event to be fired, and don't cause the Navigation ID to change.


<!-- ====================================================================== -->
## Navigation in frames

To monitor or cancel navigation events inside frames in a WebView2 instance, use the equivalent frame-related APIs and events.  See [Using frames in WebView2 apps](./frames.md).


<!-- ====================================================================== -->
## API Reference overview

<!-- 
todo: the below list of links is arranged by sequence, unlike the "overview of APIs" article.  Copy into that article from here? 

Instead of manually building out a list of links below, it's easier to author & maintain links by improving Overview Of Apis and linking to there.  Get that cleaned up then copy/paste back to here, or link from here to there, or use import file.
-->

##### [.NET/C#](#tab/dotnetcsharp)

<!-- todo: finish adding Frame event -->

* [CoreWebView2.NavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigationstarting)
   * [CoreWebView2Frame.NavigationStarting Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationstarting)
* [CoreWebView2.SourceChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.sourcechanged)
* [CoreWebView2.ContentLoading Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.contentloading)
   * [CoreWebView2Frame.ContentLoading Event](/dotnet/api/microsoft.web.webview2.core.corewebview2frame.contentloading)
* [CoreWebView2.HistoryChanged Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.historychanged)
* [CoreWebView2.BasicAuthenticationRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.basicauthenticationrequested)
* [CoreWebView2.DOMContentLoaded Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.domcontentloaded)
* [CoreWebView2.NavigationCompleted Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigationcompleted)

##### [WinRT/C#](#tab/winrtcsharp)

<!-- todo: finish adding Frame event -->

* [CoreWebView2.NavigationStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigationstarting)
   * [CoreWebView2Frame.NavigationStarting Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationstarting)
* [CoreWebView2.SourceChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#sourcechanged)
* [CoreWebView2.ContentLoading Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#contentloading)
* [CoreWebView2.HistoryChanged Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#historychanged)
* [CoreWebView2.BasicAuthenticationRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#basicauthenticationrequested)
* [CoreWebView2.DOMContentLoaded Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#domcontentloaded)
* [CoreWebView2.NavigationCompleted Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigationcompleted)

##### [Win32/C++](#tab/win32cpp)

<!-- todo: finish adding Frame event -->

* [ICoreWebView2::NavigationStarting event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_navigationstarting), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_navigationstarting)
   * [ICoreWebView2Frame2::NavigationStarting event (add](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationstarting), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationstarting)
* [ICoreWebView2::SourceChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_sourcechanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_sourcechanged)
* [ICoreWebView2::ContentLoading event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_contentloading), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_contentloading)
* [ICoreWebView2::HistoryChanged event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_historychanged), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_historychanged)
* [ICoreWebView2_10::BasicAuthenticationRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_10#add_basicauthenticationrequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_10#remove_basicauthenticationrequested)
* [ICoreWebView2_2::DOMContentLoaded event (add](/microsoft-edge/webview2/reference/win32/icorewebview2_2#add_domcontentloaded), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2_2#remove_domcontentloaded)
* [ICoreWebView2::NavigationCompleted event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_navigationcompleted), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_navigationcompleted)

---


<!-- ====================================================================== -->
## See also

* [Navigate to pages and manage loaded content](./overview-features-apis.md#navigate-to-pages-and-manage-loaded-content) in _Overview of WebView2 features and APIs_
* [Basic authentication for WebView2 apps](./basic-authentication.md)
* [Get started with WebView2](../get-started/get-started.md)
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
* [WebView2 API reference](/dotnet/api/microsoft.web.webview2.wpf.webview2)
* [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
