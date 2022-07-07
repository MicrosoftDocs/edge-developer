---
title: Debug WebView2 apps with Microsoft Edge DevTools
description: How to debug WebView2 apps with Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 02/11/2022
---
# Debug WebView2 apps with Microsoft Edge DevTools

Use Microsoft Edge Developer Tools to debug web content displayed in WebView2 controls, in the same way that you can debug another webpage that's displayed in Microsoft Edge.

When you're using a WebView2 app, there are several ways to open DevTools:

*  Press `F12`.
*  Press `Ctrl`+`Shift`+`I`.
*  Right-click the page and then select `Inspect`.

Apps can also use the `CoreWebView2.OpenDevToolsWindow` / `ICoreWebView2::OpenDevToolswindow` API to programmatically open a DevTools window if they remove those hotkeys and the context menu items. In the event none of those options are possible, adding `--auto-open-devtools-for-tabs` to additional browser arguments via an environment variable or registry key will open a DevTools window when a WebView2 is created.

![DevTools debugging.](media/f12.png)

_To zoom, right-click > **Open image in new tab**._



<!-- ====================================================================== -->
## See also

* [Overview of DevTools](../index.md).
* [Get started with WebView2](../get-started/get-started.md)
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
* [WebView2 API reference](../webview2-api-reference.md)
* [See also](../index.md#see-also) in _Introduction to Microsoft Edge WebView2_.
