---
title: Visual vs. windowed hosting of WebView2
description: Learn about hosting WebView2 in visual and windowed environments.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
ms.date: 08/19/2022
---
# Visual vs. windowed hosting of WebView2

Before hosting the WebView2 control in your app, it's important to understand visual and windowed hosting. In addition to having different requirements, each form of hosting has its own constraints and benefits. Hosting is about how to get WebView2 onto different platforms.

Both approaches implement a whiteboard or container approach for storing and presenting information. The hosting form determines how the application works and the key differences are as follows:

*  Visual: The host app takes spatial input (for example, mouse, touch) from the user. The app sends this input to the WebView2 control.
*  Windowed: The WebView2 control takes input from the operating system (OS).  The OS sends the input to the WebView2.


<!-- ====================================================================== -->
## Compatibility and constraints

Key compatibility limitations include the operating system and rendering in framework and non-framework applications.

#### Operating system

Windows 7 and Windows 8 can only do windowed hosting.
  
#### Rendering WebView2 in framework and non-framework applications

If you're using a UI framework for your application, you should use the corresponding WebView2 element for that UI framework. If you aren't using a UI framework for your application (for example, Win32, React Native, etc.) or your UI framework doesn't have a WebView2 element, then the developer will need to create `CoreWebView2Controller` and render it into the desired application. 

 If your application UI is built using `DirectComposition` or `Windows.UI.Composition`, then you should use `CoreWebView2CompositionController`, otherwise you should use `CoreWebView2Controller`. 

`CoreWebView2Controller` properties and methods:

##### [.NET/C#](#tab/dotnetcsharp)

* [CoreWebView2Controller.CoreWebView2 Property](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.corewebview2?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Controller.Close Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2controller.close?view=webview2-dotnet-1.0.1293.44)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2environment.createcorewebview2controllerasync)

##### [WinRT/C#](#tab/winrtcsharp)

* [CoreWebView2Controller.CoreWebView2 Property](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44)
* [CoreWebView2Controller.Close Method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2controller?view=webview2-winrt-1.0.1293.44#close)
* [CoreWebView2Environment.CreateCoreWebView2ControllerAsync Method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2environment)

##### [Win32/C++](#tab/win32cpp)

* [ICoreWebView2Controller Property](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44)
* [ICoreWebView2Controller::Close Method](https://docs.microsoft.com/en-us/microsoft-edge/webview2/reference/win32/icorewebview2controller?view=webview2-1.0.1293.44#close)
* [CoreWebView2Environment::CreateCoreWebView2ControllerAsync Method]()


<!-- ====================================================================== -->
## Second major heading


#### Minor heading


#### Minor heading


<!-- ====================================================================== -->
## See also

*  [link text]<!--(relative path)-->
