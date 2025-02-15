---
title: Debug WebView2 apps with Microsoft Edge DevTools
description: How to open Microsoft Edge DevTools when using a WebView2 app.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: webview
ms.date: 07/07/2022
---
# Debug WebView2 apps with Microsoft Edge DevTools

Use Microsoft Edge Developer Tools to debug web content displayed in WebView2 controls, in the same way that you can debug another webpage that's displayed in Microsoft Edge.

![DevTools debugging in a WebView2 control](./debug-devtools-images/f12.png)

When you're using a WebView2 app, there are several ways to open DevTools:

*  Press **F12**.
*  Press **Ctrl+Shift+I**.
*  Right-click the page and then select `Inspect`.

An app can also use the `OpenDevToolsWindow` API to programmatically open a DevTools window.  For example, you can use this approach if the above hotkeys and the context menu items have been removed.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.OpenDevToolsWindow Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.opendevtoolswindow)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.OpenDevToolsWindow Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#opendevtoolswindow)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::OpenDevToolsWindow method](/microsoft-edge/webview2/reference/win32/icorewebview2#opendevtoolswindow)

---

If none of the above approaches are available, you can add `--auto-open-devtools-for-tabs` to the browser arguments via an environment variable or registry key.  This approach will open a DevTools window when a WebView2 is created.

<!-- ====================================================================== -->
## Source maps with `WebResourceRequested` event or virtual host name mapping

Source maps are needed to debug the source code of compiled content like transpiled JavaScript (e.g. from TypeScript) or CSS (e.g. from SASS or SCSS). When content is loaded to WebView2 using 
[WebResourceRequested event](../concepts/working-with-local-content.md#loading-local-content-by-handling-the-webresourcerequested-event)
 or [virtual host name mapping](../concepts/working-with-local-content.md#loading-local-content-by-using-virtual-host-name-mapping), special care is needed to also load the corresponding source maps. See details and solutions for [WebResourceRequested event here](../concepts/working-with-local-content.md#source-maps-with-virtual-host-name-mapping), and for [virtual host name mapping here](../concepts/working-with-local-content.md#source-maps-with-virtual-host-name-mapping)

<!-- ====================================================================== -->
## See also

* [Overview of DevTools](../index.md).
* [Get started with WebView2](../get-started/get-started.md)
* [WebView2Samples repo](https://github.com/MicrosoftEdge/WebView2Samples) - a comprehensive example of WebView2 capabilities.
* [WebView2 API reference](../webview2-api-reference.md)
