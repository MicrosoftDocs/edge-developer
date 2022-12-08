---
title: Working with content in WebView2 apps
description: Working with content in WebView2 apps.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 12/08/2022
---
# Working with content in WebView2 apps

<!-- copied from Overview of APIs article: -->
These APIs load, stop loading, and reload content to WebView2.  The content that's loaded can be:
*  Content from a URL.
*  A string of HTML.
*  Local content via virtual host name to local folder mapping.
*  Content from a constructed network request.


<!-- ====================================================================== -->
## Scenario, task, or concept

<!-- copied/modified from Overview of APIs article: -->

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.Navigate Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigate)
* [CoreWebView2.NavigateToString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatetostring)
* [CoreWebView2.NavigateWithWebResourceRequest Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatewithwebresourcerequest)
* [CoreWebView2.SetVirtualHostNameToFolderMapping Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.setvirtualhostnametofoldermapping)
* [CoreWebView2.ClearVirtualHostNameToFolderMapping Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.clearvirtualhostnametofoldermapping)
* [CoreWebView2.WebResourceRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.Navigate Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigate)
* [CoreWebView2.NavigateToString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigatetostring)
* [CoreWebView2.NavigateWithWebResourceRequest Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigatewithwebresourcerequest)
* [CoreWebView2.SetVirtualHostNameToFolderMapping Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#setvirtualhostnametofoldermapping)
* [CoreWebView2.ClearVirtualHostNameToFolderMapping Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#clearvirtualhostnametofoldermapping)
* [CoreWebView2.WebResourceRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#webresourcerequested)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::Navigate method](/microsoft-edge/webview2/reference/win32/icorewebview2#navigate)
* [ICoreWebView2::NavigateToString method](/microsoft-edge/webview2/reference/win32/icorewebview2#navigatetostring)
* [ICoreWebView2_2::NavigateWithWebResourceRequest method](/microsoft-edge/webview2/reference/win32/icorewebview2_2#navigatewithwebresourcerequest)
* [ICoreWebView2_3::SetVirtualHostNameToFolderMapping method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#setvirtualhostnametofoldermapping)
* [ICoreWebView2_3::ClearVirtualHostNameToFolderMapping method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#clearvirtualhostnametofoldermapping)
* [ICoreWebView2::WebResourceRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_webresourcerequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_webresourcerequested)

---


<!-- ====================================================================== -->
## See also

* [Manage content loaded into WebView2](./overview-features-apis.md#manage-content-loaded-into-webview2) in _Overview of WebView2 features and APIs_
