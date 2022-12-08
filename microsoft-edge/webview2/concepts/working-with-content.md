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
In addition to remote content, content can be loaded locally from WebView2. WebView2 provides a number of ways to load local content as described.

## Navigate to a file URL
WebView2 allows navigations to file URLs, which is the simplest approach here to load some file content. However like the browser, file URLs are limited in any capabilites. The document origin will be null for a file URL and for each resource the full path is needed to be specified.

## Navigate to string
WebView2 also lets you use the NavigateToString method to load the content directly from a string. This can be useful if you will be packaging the content via the app code or if you'd like to dynamically create the content.

Another scenario where navigating to a string might be useful is if you want to load content that is not accessible via a URL. For example, if you have an in-memory representation of an HTML document, you could use the NavigateToString method to load that content into the WebView2 control. This can be useful if you want to avoid the need to write the content to a file or server before loading it into the control.

## Virtual host name mapping
A way to load local content in a WebView2 control is to use virtual host mapping. This involves mapping a local domain name to the WebView2 control, so that when the control attempts to load a resource from that domain, it will load the content from the specified local folder location instead. The origin of the document will also be the virtual host name. 

## WebResourceRequested event
Another way that can be used to host local content would be relying on the `WebResourceRequested` event. This event is triggered when the control attempts to load a resource, and it allows the developer to intercept the request and provide their own content instead.

## Comparison between the different approaches
The main advantage of using the WebResourceRequested event to load local content in a WebView2 control is that it allows the developer to customize the behavior on a per-request basis. This means that they can decide which requests to intercept and provide their own content for, and which requests to let the control handle normally. This can be useful for implementing features like offline mode, where only certain types of requests need to be handled differently.

Another advantage of using the WebResourceRequested event is that it gives the developer more control over the content that is loaded into the WebView2 control. They can provide custom content for each request, which can be useful for loading content from a local source or for simulating a production environment.

However, there are also some disadvantages to using the WebResourceRequested event. One disadvantage is that it requires more code and may be more difficult to implement than other methods, such as virtual host mapping and need knowledge of HTTP to be able to construct a proper response. From WebView2's perspective the resource will have come via the network and WebView2 will adhere to the headers that are set by the app as part of the response. 

Another disadvantage of using the WebResourceRequested event is that it can be less efficient than other methods. Because the developer has to intercept each request and provide their own content, it can add an extra layer of overhead to the process of loading content into the WebView2 control. This can make the control slower to load content and may affect the overall performance of the application.


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
