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
* Navigating to an HTML string.
* Virtual host name mapping.
* Handling the `WebResourceRequested` event.

These approaches are described below.


<!-- ====================================================================== -->
## Navigate to a file URL

WebView2 allows navigations to file URLs, to load basic HTML or a PDF.  This is the most efficient and simples approach that satisfies the basic scenario.  However, it is less flexible than the other approaches.  This is the simplest approach to load local content.  However, like the browser, file URLs are limited in some capabilities. The document origin will be `null` for a file URL.  For each resource, the full path is needed to be specified.

File URLs behave like they do in the browser.  For example, you can't make an `XMLHttpRequest` (XHR) in a file URL, because you're not working in the context of a webpage.  If the WebView2 control is loading local content, still came from a remote source (such as Bing.com), versus a file that came from local.

#### Offline (local) vs. online (remote) content

You must specify the full path of the file, for every resource.  For example:

```
C:\Users\username\Documents\GitHub\Demos\demo-to-do\index.html
```

<!-- TODO: Dev polish wording: -->
For example, suppose you switch between online (remote, such as Bing.com) and offline (local path) content, you must specify the virtual domain.
In contrast, if you navigate to a file URL, you have to replace it with the full path each time you switch between remote and local content.

You can specify a folder each time you switch between online (remote) and offline (local) content.

With a file URL, the app navigates to a specific path; that's the only way the app can load local content.

You can't use cross-origin resources for navigating to a file URL.  `document.origin` is null.


##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.Navigate Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigate)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.Navigate Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigate)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::Navigate method](/microsoft-edge/webview2/reference/win32/icorewebview2#navigate)

---


<!-- ------------------------------ -->
#### Example of a file URL

Here's an example of a file URL, for a cloned repo copy of the Demo To Do webpage:

```
file:///C:/Users/username/Documents/GitHub/Demos/demo-to-do/index.html
```

That path is from a clone of the following on Windows:
* [Demo To Do rendered page](https://microsoftedge.github.io/Demos/demo-to-do/)
* [Demo To Do source code](https://github.com/MicrosoftEdge/Demos/tree/main/demo-to-do)

To obtain the above string:

1. In Visual Studio Code, open the cloned folder: `C:\Users\username\Documents\GitHub\Demos\demo-to-do`

1. If you haven't already, on the Activity Bar, select **Extensions**, and then install the **Microsoft Edge Tools for VS Code** extension.

1. On the Activity Bar, select **Explorer**, right-click `index.html`, select **Open with Edge**, and then select **Open Browser with DevTools**.

1. In the **Edge DevTools: Browser** tab, copy the string from the address bar.

For details, see [Get started using the DevTools extension for Visual Studio Code](https://learn.microsoft.com/en-us/microsoft-edge/visual-studio-code/microsoft-edge-devtools-extension/get-started).


<!-- ---------------------------------------- -->
#### Example of navigating to a file URL

<!-- expect short & basic -->

##### [.NET/C#](#tab/dotnetcsharp)

```csharp
TODO
```

##### [WinRT/C#](#tab/winrtcsharp)

```csharp
TODO
```

##### [Win32/C++](#tab/win32cpp)

```cpp
TODO
```

---


<!-- ====================================================================== -->
## Navigate to an HTML string

Another method to load local content is the `NavigateToString` method.  This approach loads the content into WebView2 directly from a string.  This can be useful if you will be packaging the content via the app code, or if you'd like to dynamically create the content.

Another scenario where navigating to a string might be useful is if you want to load content that is not accessible via a URL. For example, if you have an in-memory representation of an HTML document, you could use the `NavigateToString` method to load that content into the WebView2 control.  This can be useful if you want to avoid the need to write the content to a file or server before loading it into the control.

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2.NavigateToString Method](/dotnet/api/microsoft.web.webview2.core.corewebview2.navigatetostring)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2.NavigateToString Method](/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2#navigatetostring)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2::NavigateToString method](/microsoft-edge/webview2/reference/win32/icorewebview2#navigatetostring)

---


<!-- ------------------------------ -->
#### Example string representation of a webpage

The following is the string representation of the **Demo To Do** webpage.  The listing below has added line wrapping for readability.  In practice, these lines are concatenated into a single long line:

```html
`<html lang="en"><head>\n    
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

To obtain the above string:

1. Go to [Demo To Do](https://microsoftedge.github.io/Demos/demo-to-do/).

1. Right-click the webpage and then select **Inspect** to open DevTools.

1. In the **Console** of DevTools, enter: `document.body.parentElement.outerHTML`.  The **Console** outputs a string representation of the webpage:

   ![A string representation of the Demo To Do webpage](./working-with-local-content-images/demo-todo-page-as-string.png)


<!-- ------------------------------ -->
#### Example of navigating to a string

<!-- expect short, need example here b/c maybe isn't elsewhere -->

##### [.NET/C#](#tab/dotnetcsharp)

```csharp
TODO
```

##### [WinRT/C#](#tab/winrtcsharp)

```csharp
TODO
```

##### [Win32/C++](#tab/win32cpp)

```cpp
TODO
```

---


<!-- ====================================================================== -->
## Virtual host name mapping

Another way to load local content in a WebView2 control is to use virtual host name mapping.  This involves mapping a local domain name to a local folder, so that when the WebView2 control attempts to load a resource for that domain, it will load the content from the specified local folder location instead. The origin of the document will also be the virtual host name. 

Due to a current limitation, media files that are accessed using a virtual host name can be slow to load.<!-- when limitation is fixed, remove sentence -->

This approach lets you specify the cross-origin access, by using the `CoreWebView2HostResourceAccessKind` enum.

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
#### Example of a virtual host name

TODO


<!-- ---------------------------------------- -->
#### Example of virtual host name mapping

<!-- expect nontrivial short listings -->

##### [.NET/C#](#tab/dotnetcsharp)

```csharp
TODO
```

##### [WinRT/C#](#tab/winrtcsharp)

```csharp
TODO
```

##### [Win32/C++](#tab/win32cpp)

```cpp
TODO
```

---


<!-- ====================================================================== -->
## Handling the WebResourceRequested event

Another way you can host local content in a WebView2 control is by relying on the `WebResourceRequested` event.  This event is triggered when the control attempts to load a resource.  You can use this event to intercept the request and provide the local content, as described in [Custom management of network requests](../how-to/webresourcerequested.md).

#### Advantages

The main advantage of using the `WebResourceRequested` event to load local content in a WebView2 control is that it allows the developer to customize the behavior on a per-request basis. This means that they can decide which requests to intercept and provide their own content for, and which requests to let the control handle normally. This can be useful for implementing features like offline mode, where only certain types of requests need to be handled differently.

Another advantage of using the `WebResourceRequested` event is that it gives the developer more control over the content that is loaded into the WebView2 control. They can provide custom content for each request, which can be useful for loading content from a local source or for simulating a production environment.

#### Disadvantages

There are also some disadvantages to using the `WebResourceRequested` event. One disadvantage is that it requires more code and may be more difficult to implement than other methods, such as virtual host mapping and need knowledge of HTTP to be able to construct a proper response. From WebView2's perspective the resource will have come via the network and WebView2 will adhere to the headers that are set by the app as part of the response. 

Another disadvantage of using the `WebResourceRequested` event is that it can be less efficient than other methods. Because the developer has to intercept each request and provide their own content, it can add an extra layer of overhead to the process of loading content into the WebView2 control. This can make the control slower to load content and may affect the overall performance of the application.


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
#### Example of handling the WebResourceRequested event

<!-- expect medium-length listings -->

##### [.NET/C#](#tab/dotnetcsharp)

```csharp
todo
```

##### [WinRT/C#](#tab/winrtcsharp)

See the .NET/C# example.
<!-- or delete the above line and copy the same code listing into both tabs -->

<!--
```csharp
todo
```
-->

##### [Win32/C++](#tab/win32cpp)

```cpp
todo
```

---


<!-- ====================================================================== -->
## See also

* [Manage content loaded into WebView2](./overview-features-apis.md#manage-content-loaded-into-webview2) in _Overview of WebView2 features and APIs_
* [Demo To Do rendered page](https://microsoftedge.github.io/Demos/demo-to-do/)
   * [Demo To Do source code](https://github.com/MicrosoftEdge/Demos/tree/main/demo-to-do)
