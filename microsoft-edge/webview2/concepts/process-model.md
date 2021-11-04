---
description: The WebView2 Runtime process model, and how it works with the user data folder and site isolation.
title: The WebView2 process model
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/21/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# The WebView2 process model

Supported platforms: Win32, Windows Forms, WinUI, WPF.

The WebView2 Runtime uses the same process model as the Microsoft Edge browser.  This browser process model is described at [Inside look at modern web browser (part 1)](https://developers.google.com/web/updates/2018/09/inside-browser-part1#browser-architecture).


<!-- ====================================================================== -->
## Processes in the WebView2 Runtime

A _WebView2 process group_ is a collection of WebView2 Runtime processes.  A WebView2 process group includes the following:
*  A single browser process.
*  One or more renderer processes.
*  Other helper processes, such as the GPU process and the Audio service process.

:::image type="complex" source="../media/process-model-1.png" alt-text="Process 1" lightbox="../media/process-model-1.png":::
   Process 1
:::image-end:::

The number and presence of processes in a WebView2 process group can change as a WebView2 application makes use of WebView2 features.  (However, there's only a single, specific browser process in a WebView2 process group.)  For example, creating a new WebView from the same `CoreWebView2Environment`, but with a different domain in the `Source` property, will usually start a new renderer process.

The number of renderer processes can vary based on the following conditions:
*   Use of the _Site Isolation_ feature in the WebView2 Runtime.  See [Per-frame renderer processes - Site Isolation](https://developers.google.com/web/updates/2018/09/inside-browser-part1#site-isolation).
*   The number of distinct disconnected origins that are rendered in instances of WebView2 that use the same user data folder.

The logic that controls when these extra processes are created depends on the Chromium architecture, and is beyond the scope of the WebView2 Runtime.


<!-- ====================================================================== -->
## WebView2 Runtime processes and the user data folder

All processes in a WebView2 Runtime processes collection are tied to the browser process, which in turn is associated with a single user data folder (UDF).  If an application makes use of multiple user data folders, a collection of WebView2 Runtime processes will be created for each of these user data folders.

A user data folder can be shared by multiple applications, but be sure to consider the implications on performance and management, as described in [Manage the user data folder](./user-data-folder.md).

:::image type="complex" source="../media/process-model-2.png" alt-text="Process 2" lightbox="../media/process-model-2.png":::
   Process 2
:::image-end:::

To make use of multiple user data folders, a WebView2 application needs to create different `CoreWebView2Environment` objects.  A `WebView2` instance is created for a given user data folder through the configured `CoreWebView2Environment` object.  Each `CoreWebView2Environment` object needs to be configured with a different user data folder value.

When the first `WebView2` instance is created for a given user data folder, the browser process for the WebView2 Runtime processes collection that is associated with that UDF will be started.  All additional processes will be managed by the lifetime of that browser process.

<!-- TODO: update with profile info -->
The `CoreWebView2Environment` represents a user data folder and the collection of processes associated with it.  A given renderer process is not associated with a single `CoreWebView2` instance, because the renderer process can serve frames in multiple `CoreWebView2` instances that use the same user data folder, depending on website isolation.  See [Per-frame renderer processes - Site Isolation](https://developers.google.com/web/updates/2018/09/inside-browser-part1#site-isolation).


<!-- ====================================================================== -->
## Handling process events and lifetime

To react to crashes and hangs in the browser and renderer processes, use the `ProcessFailed` event of `CoreWebView2`.

<!-- todo: add info about the new APIs BrowserProcessExited and ProcessInfo -->

To safely shut down associated browser and renderer processes, use the `Close` method of `CoreWebView2Controller`.

To open the **Browser Task Manager** window from the **DevTools** window of a WebView2 instance, do either of the following:
*   Select `Shift`+`Escape`.
*   Hover on the DevTools window title bar, open the contextual menu (right-click), and select `Browser task manager`.

All processes that are associated with the browser process of your WebView2 are displayed, including their associated purposes.


<!-- ====================================================================== -->
## See also

*  [Inside look at modern web browser (part 1)](https://developers.google.com/web/updates/2018/09/inside-browser-part1#browser-architecture) - the browser process model that's used by the WebView2 Runtime and the Microsoft Edge browser.
*  [WebView2 Get Started Guides](../index.md#get-started)
*  [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
*  [WebView2 API reference](/dotnet/api/microsoft.web.webview2.wpf.webview2)
*  [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
