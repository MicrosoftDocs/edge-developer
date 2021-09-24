---
description: Automating a WebView2 instance in an already-running application by attaching WebDriver.
title: Attaching WebDriver to WebView2
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/23/2021
ms.topic: how-to
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---
# Attaching WebDriver to WebView2

<!-- how do you turn on remote debugging? -->

This article explains how to attach WebDriver to an already-running WebView2 instance.

To automate a WebView2-based app, you sometimes first need to perform some actions in the native GUI in order to launch the WebView2 control.  In this scenario, you launch your app using a tool other than WebDriver (such as WinAppDriver), trigger the WebView2 creation, and then use WebDriver to attach to the running WebView2 instance.

To do this, first you need to configure your WebView2 instance with the `--remote-debugging-port=<port>` additional command-line parameter using one of the recommended approaches in [Globals, in WebView2 Win32 C++ Reference](https://docs.microsoft.com/microsoft-edge/webview2/reference/win32/0-9-538/webview2-idl). 

Next, use WebDriver's `EdgeOptions.DebuggerAddress` parameter to tell WebDriver to connect to an existing remote debugger instead of launching a new application:

```javascript
EdgeOptions edgeOptions = new EdgeOptions();
edgeOptions.UseChromium = true;
edgeOptions.UseWebView = true;
edgeOptions.DebuggerAddress = "localhost:9222";
EdgeDriver edgeDriver = new EdgeDriver(edgeOptions);
```
