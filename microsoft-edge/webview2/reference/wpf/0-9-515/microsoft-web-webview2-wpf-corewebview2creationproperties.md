---
description: Embed web technologies (HTML, CSS, and JavaScript) in your native applications with the Microsoft Edge WebView2 control
title: Microsoft.Web.WebView2.Wpf.CoreWebView2CreationProperties
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/17/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: Microsoft.Web.WebView2, Core, webview2, webview, dotnet, wpf, winforms, app, edge, CoreWebView2, CoreWebView2Controller, browser control, edge html, Microsoft.Web.WebView2.Wpf.CoreWebView2CreationProperties
---

# Microsoft.Web.WebView2.Wpf.CoreWebView2CreationProperties class 

Namespace: Microsoft.Web.WebView2.Wpf\
Assembly: Microsoft.Web.WebView2.Wpf.dll

```
class Microsoft.Web.WebView2.Wpf.CoreWebView2CreationProperties
  : public DependencyObject
```

This class is a bundle of the most common parameters used to create a CoreWebView2Environment.

## Summary

 Members                        | Descriptions
--------------------------------|---------------------------------------------
[BrowserExecutableFolder](#browserexecutablefolder) | Gets or sets the value to pass as the browserExecutableFolder parameter of CoreWebView2Environment.CreateAsync when creating an environment with this instance.
[Language](#language) | Gets or sets the value to use for the Language property of the CoreWebView2EnvironmentOptions parameter passed to CoreWebView2Environment.CreateAsync when creating an environment with this instance.
[UserDataFolder](#userdatafolder) | Gets or sets the value to pass as the userDataFolder parameter of CoreWebView2Environment.CreateAsync when creating an environment with this instance.
[CoreWebView2CreationProperties](#corewebview2creationproperties) | Creates a new instance of CoreWebView2CreationProperties with default data for all properties.

Its main purpose is to be set to [WebView2.CreationProperties](microsoft-web-webview2-wpf-webview2.md) in order to customize the environment used by a [WebView2](microsoft-web-webview2-wpf-webview2.md) during implicit initialization. It is also a nice WPF integration utility which allows commonly used environment parameters to be dependency properties and be created and used in markup.

This class isn't intended to contain all possible environment customization options. If you need complete control over the environment used by a WebView2 control then you'll need to initialize the control explicitly by creating your own environment with CoreWebView2Environment.CreateAsync and passing it to [WebView2.EnsureCoreWebView2Async](microsoft-web-webview2-wpf-webview2.md)*before* you set the [WebView2.Source](microsoft-web-webview2-wpf-webview2.md) property to anything. See the [WebView2](microsoft-web-webview2-wpf-webview2.md) class documentation for an initialization overview.

## Members

#### BrowserExecutableFolder 

Gets or sets the value to pass as the browserExecutableFolder parameter of CoreWebView2Environment.CreateAsync when creating an environment with this instance.

> public string [BrowserExecutableFolder](#browserexecutablefolder)

#### Language 

Gets or sets the value to use for the Language property of the CoreWebView2EnvironmentOptions parameter passed to CoreWebView2Environment.CreateAsync when creating an environment with this instance.

> public string [Language](#language)

#### UserDataFolder 

Gets or sets the value to pass as the userDataFolder parameter of CoreWebView2Environment.CreateAsync when creating an environment with this instance.

> public string [UserDataFolder](#userdatafolder)

#### CoreWebView2CreationProperties 

Creates a new instance of CoreWebView2CreationProperties with default data for all properties.

> public [CoreWebView2CreationProperties](#corewebview2creationproperties)()

