---
title: Using frames in WebView2 apps
description: Using iFrames in WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 10/17/2022
---
# Using frames in WebView2 apps

Frames allow you to embed other webpages into your own webpage.  A _frame_ is a small subpage or area within a webpage, like a webpage within a webpage.  

An iFrame is one type of frame.  WebView2 currently supports top-level iFrames.  In WebView2, you can:  
* Find out when iFrames are created.
* Find out when iFrames are navigating.  This works the same as state machine Navigation events for WebView2 apps.  link to diagram.
* Communicating between the host app and iFrames.
* Allow bypassing x-frame options.<!-- TODO: ask SME if we want to explicitly have this point -->


<!-- ====================================================================== -->
## Subscribing to the iFrameCreated event
<!-- TODO: change iFrameCreated to FrameCreated? is there an API Ref link for an iFrameCreated event? -->

To receive the frame object, you must subscribe to the `iFrameCreated` event.
<!-- TODO: change iFrameCreated to FrameCreated? is there an API Ref link for an iFrameCreated event? -->

* `Deleted` event
<!-- TODO: no such?  is there a Deleted API Ref link for frame or iframe? -->


##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.FrameCreated Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.framecreated)
   * [CoreWebView2FrameCreatedEventArgs Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2framecreatedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.FrameCreated Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framecreated)
   * [CoreWebView2FrameCreatedEventArgs Class](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2framecreatedeventargs)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_4::FrameCreated event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_4#add_framecreated), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_4#remove_framecreated)
   * [ICoreWebView2FrameCreatedEventArgs interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2framecreatedeventargs)

---

See also:
* [iFrames](./overview-features-apis.md#iframes) in _Overview of WebView2 features and APIs_.


<!-- ------------------------------ -->
#### Example of subscribing to the FrameCreated event

<!-- link to API Ref that contains an example code listing? -->

##### [.NET/C#](#tab/dotnetcsharp)

```javascript

```

##### [WinRT/C#](#tab/winrtcsharp)

```javascript

```

##### [Win32/C++](#tab/win32cpp)

```javascript

```

---


<!-- ====================================================================== -->
## Navigation and navigation events

iFrames use navigation and navigation events, such as `FrameNavigationStarting` and `NavigationCompleted`.

The article [Navigation events for WebView2 apps](https://learn.microsoft.com/microsoft-edge/webview2/concepts/navigation-events) is valid for frames as well as webpages.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.FrameNavigationCompleted Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationcompleted)
* [CoreWebView2.FrameNavigationStarting Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationstarting)

* [CoreWebView2Frame.NavigationCompleted Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationcompleted)
* [CoreWebView2Frame.NavigationStarting Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationstarting)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.FrameNavigationCompleted Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationcompleted)
* [CoreWebView2.FrameNavigationStarting Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framenavigationstarting)

* [CoreWebView2Frame.NavigationCompleted Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationcompleted)
* [CoreWebView2Frame.NavigationStarting Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#navigationstarting)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2addscripttoexecuteondocumentcreatedcompletedhandler?view=webview2-1.0.1343.22)
<!-- TODO: in that API Ref topic, link to the main type that uses that handler -->
* [ICoreWebView2::AddScriptToExecuteOnDocumentCreated method](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#addscripttoexecuteondocumentcreated) - This method can be used for iFrame as well. Your script must check whether it's an iFrame or not.

* [ICoreWebView2::FrameNavigationStarting event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationstarting), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationstarting)
   * [ICoreWebView2Frame2::NavigationStarting event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationstarting), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationstarting)

* [ICoreWebView2::FrameNavigationCompleted event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#add_framenavigationcompleted), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2#remove_framenavigationcompleted)
   * [ICoreWebView2Frame2::NavigationCompleted event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#add_navigationcompleted), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#remove_navigationcompleted)

---

See also:
* [Navigation events](./overview-features-apis.md#navigation-events) in _Overview of WebView2 features and APIs_.
* [Block unwanted navigating](./overview-features-apis.md#block-unwanted-navigating) in _Overview of WebView2 features and APIs_.


<!-- ------------------------------ -->
#### Example of navigation and navigation events

<!-- link to API Ref that contains an example code listing? -->

##### [.NET/C#](#tab/dotnetcsharp)

```javascript

```

##### [WinRT/C#](#tab/winrtcsharp)

```javascript

```

##### [Win32/C++](#tab/win32cpp)

```javascript

```

---


<!-- ====================================================================== -->
## Communicating between the host app and iFrames

A _remote object_ is an object that you create in the host app and then use in the webpage.<!--a webpage of the app, a webpage that's used by the app?  use in web-site code?-->

Web messages:
* Subscribing is for receiving messages from iFrames.
* Sending messages.

##### [.NET/C#](#tab/dotnetcsharp)

<!-- TODO: what apis? -->

##### [WinRT/C#](#tab/winrtcsharp)

##### [Win32/C++](#tab/win32cpp)

---

<!-- todo: after add api links above, remove the n/a links: -->
See also:
* [Script execution](./overview-features-apis.md#script-execution) in _Overview of WebView2 features and APIs_.
* [Web messaging](./overview-features-apis.md#web-messaging) in _Overview of WebView2 features and APIs_.
* [Permissions](./overview-features-apis.md#permissions) in _Overview of WebView2 features and APIs_.
* [Block unwanted navigating](./overview-features-apis.md#block-unwanted-navigating) in _Overview of WebView2 features and APIs_.
* [Navigation events](./overview-features-apis.md#navigation-events) in _Overview of WebView2 features and APIs_.
* [iFrames](./overview-features-apis.md#iframes) in _Overview of WebView2 features and APIs_.


<!-- ------------------------------ -->
#### Example of communicating between the host app and iFrames

<!-- link to API Ref that contains an example code listing? -->

##### [.NET/C#](#tab/dotnetcsharp)

```javascript

```

##### [WinRT/C#](#tab/winrtcsharp)

```javascript

```

##### [Win32/C++](#tab/win32cpp)

```javascript

```

---


<!-- ====================================================================== -->
## Running JavaScript code in iFrames by using ExecuteScript

The article [Navigation events for WebView2 apps](https://learn.microsoft.com/microsoft-edge/webview2/concepts/navigation-events) is valid for frames as well as webpages.
<!-- TODO: ask Dev if BasicAuth should be added to diagram https://learn.microsoft.com/microsoft-edge/webview2/media/navigation-graph.png -->

There are various kinds of frames.  WebView currently supports top-level iFrames.  WebView2 doesn't currently support nested iFrames.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Frame Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame)
   * [CoreWebView2Frame.ExecuteScriptAsync Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame.executescriptasync)
   * [WebView2.ExecuteScriptAsync Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync)
   * [CoreWebView2.ExecuteScriptAsync Method](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.executescriptasync#microsoft-web-webview2-core-corewebview2-executescriptasync(system-string))
<!-- todo: which types' method to link to? -->

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Frame Class](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame)
   * [CoreWebView2Frame.ExecuteScriptAsync Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame#executescriptasync)
   * [CoreWebView2.ExecuteScriptAsync Method](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#executescriptasync)

   <!-- * [WebView2.ExecuteScriptAsync Method]() -->

##### [Win32/C++](#tab/win32cpp)

<!-- sort by class alpha, then by member alpha, then indent -->

* [CoreWebView2Frame Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame)

* [ICoreWebView2Frame2::ExecuteScript](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame2#executescript)
<!-- todo: keep link? -->
* [interface ICoreWebView2ExecuteScriptCompletedHandler](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2executescriptcompletedhandler)
<!-- todo: keep link? -->

---

See also:
* [Script execution](./overview-features-apis.md#script-execution) in _Overview of WebView2 features and APIs_.


<!-- ------------------------------ -->
#### Example of running JavaScript code in iFrames by using ExecuteScript

<!-- link to API Ref that contains an example code listing? -->

##### [.NET/C#](#tab/dotnetcsharp)

```javascript

```

##### [WinRT/C#](#tab/winrtcsharp)

```javascript

```

##### [Win32/C++](#tab/win32cpp)

```javascript

```

---


<!-- ====================================================================== -->
## Challenges when working with iFrames

iFrames use the same navigation states as other WebView2 pages.  All navigation events except `SourceChanged` events, currently, are supported for iFrames the same way as in WebView2.

The article [Navigation events for WebView2 apps](https://learn.microsoft.com/microsoft-edge/webview2/concepts/navigation-events) is valid for frames as well as webpages.

<!-- TODO: is there an API ConvertWebView2ToFrame? -->


<!-- ====================================================================== -->
## API Reference overview

The following features, listed in [Overview of WebView2 features and APIs](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/overview-features-apis), include frame-related APIs:

* [iFrames](./overview-features-apis.md#iframes)
* [Script execution](./overview-features-apis.md#script-execution)
* [Web messaging](./overview-features-apis.md#web-messaging)
* [Permissions](./overview-features-apis.md#permissions)
* [Block unwanted navigating](./overview-features-apis.md#block-unwanted-navigating)
* [Navigation events](./overview-features-apis.md#navigation-events)


<!-- ====================================================================== -->
## See also

* [Navigation events for WebView2 apps](https://learn.microsoft.com/microsoft-edge/webview2/concepts/navigation-events) - valid for frames as well as webpages.

**External pages:**
* [HTML <iframe\> Tag](https://www.w3schools.com/tags/tag_iframe.asp)
