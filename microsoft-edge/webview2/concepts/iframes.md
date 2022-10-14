---
title: Using iFrames in WebView2 apps
description: Using iFrames in WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 10/13/2022
---
# Using iFrames in WebView2 apps

iFrames allow you to embed other webpages into your own webpage.  In WebView2, you can:
*  Detect when iFrames are created.
*  Detect when iFrames are navigating.
*  Allow bypassing x-frame options.




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
