---
title: Working with local content in WebView2 apps
description: Ways to work with local content in WebView2 apps, including navigating to a file URL, navigating to a string, virtual host name mapping, or the WebResourceRequested event.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 12/08/2022
---
# Working with local content in WebView2 apps

In addition to loading remote content, content can also be loaded locally into WebView2.  There are several different approaches that can be used to load local content into a WebView2 control, including: 
* Navigating to a file URL.
* Navigating to a string.
* Virtual host name mapping.
* The `WebResourceRequested` event.

This article will discuss these four approaches in more detail and compare their key features and differences.


<!-- ====================================================================== -->
## Navigate to a file URL

For example:

```
file:///C:/Users/username/Documents/GitHub/edge-developer/microsoft-edge/webview2/concepts/working-with-content.md
```

WebView2 allows navigations to file URLs, to load basic HTML or a PDF.  This is the most efficient and simples approach that satisfies the basic scenario.  However, it is less flexible than the other approaches.  This is the simplest approach to load local content.  However, like the browser, file URLs are limited in some capabilities. The document origin will be `null` for a file URL.  For each resource, the full path is needed to be specified.

File URLs behave like they do in the browser.  For example, you can't make an `xmlhttprequest` (XHR) in a file URL, because you're not working in the context of a _ page.  If it's loading local content, still came from bing.com (eg), versus a file that came from _.
For file URLs, it behaves the same as the browser.

You must specify the full path of the file.  Otherwise, _.  For example, suppose you switch between online and offline content, specify the virtual domain; vs. if use file URL, you have to _ each time you switch.
You can specify a folder each time you switch _.
With a file URL, the app navigates to a specific path; that's the only way the app can load local content.

Can't tell cross-origin resources for file URLs.

<!-- You navigate webview to a file URL. -->

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.Navigate Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigate)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.Navigate Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigate)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::Navigate method](/microsoft-edge/webview2/reference/win32/icorewebview2#navigate)

---

<!-- ---------------------------------------- -->
#### Example of navigating to a file URL

```javascript
todo
```


<!-- ====================================================================== -->
## Navigate to a string

Another method to load local content is the `NavigateToString` method.  This approach loads the content into WebView2 directly from a string.  This can be useful if you will be packaging the content via the app code, or if you'd like to dynamically create the content.

Another scenario where navigating to a string might be useful is if you want to load content that is not accessible via a URL. For example, if you have an in-memory representation of an HTML document, you could use the `NavigateToString` method to load that content into the WebView2 control.  This can be useful if you want to avoid the need to write the content to a file or server before loading it into the control.


#### Example of navigating to a string

As an example of a string, for the [Demo To Do](https://microsoftedge.github.io/Demos/demo-to-do/) page, the following is the string representation of the page.
You can obtain this string by entering `document.body.parentElement.outerHTML` in the DevTools Console.

The listing below has added line wrapping for readability.  In practice, these lines would be concatenated into a single long line:

```html
<html lang="en"><head>\n    
<meta charset="UTF-8">\n    
<meta name="viewport" content="width=device-width, initial-scale=1.0">\n    
<title>TODO app</title>\n    
<link rel="stylesheet" href="styles/light-theme.css" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)">\n    
<link rel="stylesheet" href="styles/dark-theme.css" media="(prefers-color-scheme: dark)">\n    
<link rel="stylesheet" href="styles/base.css">\n    
<link rel="stylesheet" href="styles/to-do-styles.css">\n    
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📋
</text></svg>">\n  
</head>\n\n  
<body>\n    
<h1>📋 My tasks</h1>\n    
<form>\n      
<div class="new-task-form" tabindex="0">\n        
<label for="new-task">➕ Add a task</label>\n        
<input id="new-task" autocomplete="off" type="text" placeholder="Try typing 'Buy milk'" title="Click to start adding a task">\n        
<input type="submit" value="➡️">\n      
</div>\n      
<ul id="tasks"><li class="divider">No tasks defined</li></ul>\n    
</form>\n\n    \x3Cscript src="to-do.js">\x3C/script>\n  \n\n
</body>
</html>`
```

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.NavigateToString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatetostring)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.NavigateToString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigatetostring)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::NavigateToString method](/microsoft-edge/webview2/reference/win32/icorewebview2#navigatetostring)

---


<!-- ====================================================================== -->
## Virtual host name mapping

Another way to load local content in a WebView2 control is to use virtual host mapping. This involves mapping a local domain name to the WebView2 control, so that when the control attempts to load a resource from that domain, it will load the content from the specified local folder location instead. The origin of the document will also be the virtual host name. 

This isn't as efficient as file URL, because on the WebView2 side, there's some translation to the actual path.  Due to a current implementation limitation, media files accessed using virtual host name can be very slow to load.<!-- when limitation is fixed, remove sentence -->

This approach lets you specify the cross-origin access using the `CoreWebView2HostResourceAccessKind` enum.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.SetVirtualHostNameToFolderMapping Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.setvirtualhostnametofoldermapping)
* [CoreWebView2.ClearVirtualHostNameToFolderMapping Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.clearvirtualhostnametofoldermapping)
* [CoreWebView2HostResourceAccessKind Enum](/dotnet/api/microsoft.web.webview2.core.corewebview2hostresourceaccesskind)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.SetVirtualHostNameToFolderMapping Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#setvirtualhostnametofoldermapping)
* [CoreWebView2.ClearVirtualHostNameToFolderMapping Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#clearvirtualhostnametofoldermapping)
* [CoreWebView2HostResourceAccessKind Enum](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2hostresourceaccesskind)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_3::SetVirtualHostNameToFolderMapping method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#setvirtualhostnametofoldermapping)
* [ICoreWebView2_3::ClearVirtualHostNameToFolderMapping method](/microsoft-edge/webview2/reference/win32/icorewebview2_3#clearvirtualhostnametofoldermapping)
* [COREWEBVIEW2_HOST_RESOURCE_ACCESS_KIND enum](/microsoft-edge/webview2/reference/win32/icorewebview2#corewebview2_host_resource_access_kind)

---


<!-- ---------------------------------------- -->
#### Example of virtual host name mapping

```javascript
todo
```


<!-- ====================================================================== -->
## The WebResourceRequested event

Another way that can be used to host local content would be relying on the `WebResourceRequested` event. This event is triggered when the control attempts to load a resource, and it allows the developer to intercept the request and provide their own content instead.

#### Advantages

The main advantage of using the `WebResourceRequested` event to load local content in a WebView2 control is that it allows the developer to customize the behavior on a per-request basis. This means that they can decide which requests to intercept and provide their own content for, and which requests to let the control handle normally. This can be useful for implementing features like offline mode, where only certain types of requests need to be handled differently.

Another advantage of using the WebResourceRequested event is that it gives the developer more control over the content that is loaded into the WebView2 control. They can provide custom content for each request, which can be useful for loading content from a local source or for simulating a production environment.

#### Disadvantages

There are also some disadvantages to using the `WebResourceRequested` event. One disadvantage is that it requires more code and may be more difficult to implement than other methods, such as virtual host mapping and need knowledge of HTTP to be able to construct a proper response. From WebView2's perspective the resource will have come via the network and WebView2 will adhere to the headers that are set by the app as part of the response. 

Another disadvantage of using the WebResourceRequested event is that it can be less efficient than other methods. Because the developer has to intercept each request and provide their own content, it can add an extra layer of overhead to the process of loading content into the WebView2 control. This can make the control slower to load content and may affect the overall performance of the application.


<!-- copied from Overview of APIs article: -->
These APIs load, stop loading, and reload content to WebView2.  The content that's loaded can be:
*  Content from a URL.
*  A string of HTML.
*  Local content via virtual host name to local folder mapping.
*  Content from a constructed network request.


##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.NavigateWithWebResourceRequest Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatewithwebresourcerequest)
* [CoreWebView2.WebResourceRequested Event](/dotnet/api/microsoft.web.webview2.core.corewebview2.webresourcerequested)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.NavigateWithWebResourceRequest Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigatewithwebresourcerequest)
* [CoreWebView2.WebResourceRequested Event](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#webresourcerequested)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2_2::NavigateWithWebResourceRequest method](/microsoft-edge/webview2/reference/win32/icorewebview2_2#navigatewithwebresourcerequest)
* [ICoreWebView2::WebResourceRequested event (add](/microsoft-edge/webview2/reference/win32/icorewebview2#add_webresourcerequested), [remove)](/microsoft-edge/webview2/reference/win32/icorewebview2#remove_webresourcerequested)

---

<!-- ---------------------------------------- -->
#### Example of the WebResourceRequested event

```javascript
todo
```


<!-- ====================================================================== -->
## See also

* [Manage content loaded into WebView2](./overview-features-apis.md#manage-content-loaded-into-webview2) in _Overview of WebView2 features and APIs_
