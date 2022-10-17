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

The article [Navigation events for WebView2 apps](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/navigation-events) is valid for frames as well as webpages.
<!-- TODO: copy "API Ref overview" tab-set between that article & present article -->

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.FrameNavigationStarting Event](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationstarting?view=webview2-dotnet-1.0.1370.28)
* [CoreWebView2.FrameNavigationCompleted Event](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.framenavigationcompleted?view=webview2-dotnet-1.0.1370.28)

* [CoreWebView2Frame.NavigationStarting Event](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationstarting?view=webview2-dotnet-1.0.1370.28)
* [CoreWebView2Frame.NavigationCompleted Event](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationcompleted?view=webview2-dotnet-1.0.1370.28)

##### [WinRT/C#](#tab/winrtcsharp)


##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler interface](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2addscripttoexecuteondocumentcreatedcompletedhandler?view=webview2-1.0.1343.22)
<!-- TODO: in that API Ref topic, link to the main type that uses that handler -->

* [ICoreWebView2::AddScriptToExecuteOnDocumentCreated method](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1370.28#addscripttoexecuteondocumentcreated) - This method can be used for iFrame as well. Your script must check whether it's an iFrame or not.


* [ICoreWebView2::FrameNavigationStarting event (add](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#add_framenavigationstarting), [remove)](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#remove_framenavigationstarting)
* [ICoreWebView2Frame2::NavigationStarting event (add](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1293.44#add_navigationstarting), [remove)](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1293.44#remove_navigationstarting)

* [ICoreWebView2::FrameNavigationCompleted event (add](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#add_framenavigationcompleted), [remove)](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#remove_framenavigationcompleted)
* [ICoreWebView2Frame2::NavigationCompleted event (add](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1293.44#add_navigationcompleted), [remove)](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1293.44#remove_navigationcompleted)


---


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

Remote objects - when you create object in the host app and then can use that object in the webpage.

Web messages:
* Subscribing is for receiving messages from iFrames.
* Sending messages.

##### [.NET/C#](#tab/dotnetcsharp)

##### [WinRT/C#](#tab/winrtcsharp)

##### [Win32/C++](#tab/win32cpp)

<!-- todo: what apis? -->

---

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

The article [Navigation events for WebView2 apps](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/navigation-events) is valid for frames as well as webpages.
<!-- TODO: ask Dev if BasicAuth should be added to diagram https://learn.microsoft.com/en-us/microsoft-edge/webview2/media/navigation-graph.png -->

There are various kinds of frames.  WebView currently supports top-level iFrames.  WebView2 doesn't yet support nested iFrames.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Frame Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame)
   * [CoreWebView2Frame.ExecuteScriptAsync Method](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2frame.executescriptasync?view=webview2-dotnet-1.0.1370.28)

* [WebView2.ExecuteScriptAsync Method](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.wpf.webview2.executescriptasync?view=webview2-dotnet-1.0.1370.28)
* [CoreWebView2.ExecuteScriptAsync Method](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.executescriptasync?view=webview2-dotnet-1.0.1370.28#microsoft-web-webview2-core-corewebview2-executescriptasync(system-string))
<!-- todo: which types' method to link to? -->

##### [WinRT/C#](#tab/winrtcsharp)


##### [Win32/C++](#tab/win32cpp)

* [CoreWebView2Frame Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame)

* [ICoreWebView2Frame2::ExecuteScript](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1370.28#executescript)
<!-- todo: keep link? -->
* [interface ICoreWebView2ExecuteScriptCompletedHandler](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2executescriptcompletedhandler?view=webview2-1.0.1370.28)
<!-- todo: keep link? -->

---


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

The article [Navigation events for WebView2 apps](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/navigation-events) is valid for frames as well as webpages.


##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.NavigationStarting Event](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.navigationstarting?view=webview2-dotnet-1.0.1370.28)
* [CoreWebView2Frame.NavigationStarting Event](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2frame.navigationstarting?view=webview2-dotnet-1.0.1370.28)

##### [WinRT/C#](#tab/winrtcsharp)


##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::FrameNavigationStarting event (add](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#add_framenavigationstarting), [remove)](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#remove_framenavigationstarting)
* [ICoreWebView2Frame2::NavigationStarting event (add](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1293.44#add_navigationstarting), [remove)](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1293.44#remove_navigationstarting)

* [ICoreWebView2::FrameNavigationCompleted event (add](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#add_framenavigationcompleted), [remove)](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#remove_framenavigationcompleted)
* [ICoreWebView2Frame2::NavigationCompleted event (add](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1293.44#add_navigationcompleted), [remove)](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1293.44#remove_navigationcompleted)

`ConvertWebView2ToFrame`
<!-- TODO: is there an API Ref link? -->

---


<!-- ====================================================================== -->
## API Reference overview

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Frame Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frame)
* [CoreWebView2FrameInfo Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2frameinfo)
* [CoreWebView2.FrameCreated Event](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2.framecreated)
   * [CoreWebView2FrameCreatedEventArgs Class](https://learn.microsoft.com/dotnet/api/microsoft.web.webview2.core.corewebview2framecreatedeventargs)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Frame Class](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frame)
* [CoreWebView2FrameInfo Class](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2frameinfo)
* [CoreWebView2.FrameCreated Event](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#framecreated)
   * [CoreWebView2FrameCreatedEventArgs Class](https://learn.microsoft.com/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2framecreatedeventargs)

##### [Win32/C++](#tab/win32cpp)

<!-- added links in this PR: TODO: add equivalent links in other platform tabs -->

* [ICoreWebView2AddScriptToExecuteOnDocumentCreatedCompletedHandler interface](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2addscripttoexecuteondocumentcreatedcompletedhandler?view=webview2-1.0.1343.22)
* [ICoreWebView2::AddScriptToExecuteOnDocumentCreated method](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1370.28#addscripttoexecuteondocumentcreated)

* [ICoreWebView2::FrameNavigationStarting event (add](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#add_framenavigationstarting), [remove)](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#remove_framenavigationstarting)
* [ICoreWebView2Frame2::NavigationStarting event (add](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1293.44#add_navigationstarting), [remove)](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1293.44#remove_navigationstarting)

* [ICoreWebView2::FrameNavigationCompleted event (add](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#add_framenavigationcompleted), [remove)](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2?view=webview2-1.0.1293.44#remove_framenavigationcompleted)
* [ICoreWebView2Frame2::NavigationCompleted event (add](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1293.44#add_navigationcompleted), [remove)](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2frame2?view=webview2-1.0.1293.44#remove_navigationcompleted)

<!-- / end of added links -->

* [ICoreWebView2Frame interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frame)
* [ICoreWebView2FrameInfo interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frameinfo)
   * [ICoreWebView2FrameInfoCollection interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frameinfocollection)<!--n/a for c#-->
   * [ICoreWebView2FrameInfoCollectionIterator interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2frameinfocollectioniterator)<!--n/a for c#-->
* [ICoreWebView2_4::FrameCreated event (add](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_4#add_framecreated), [remove)](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2_4#remove_framecreated)
   * [ICoreWebView2FrameCreatedEventArgs interface](https://learn.microsoft.com/microsoft-edge/webview2/reference/win32/icorewebview2framecreatedeventargs)

---


<!-- ====================================================================== -->
## See also

* [iFrames](./overview-features-apis.md#iframes) in _Overview of WebView2 features and APIs_.
* [Navigation events for WebView2 apps](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/navigation-events) is valid for frames as well as webpages.


**External pages:**
* [HTML <iframe\> Tag](https://www.w3schools.com/tags/tag_iframe.asp)
