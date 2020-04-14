---
description: Host web content in your Win32 app with the Microsoft Edge WebView 2 control
title: Microsoft Edge WebView 2 for Win32 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/20/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, win32 apps, win32, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Microsoft Edge WebView2 (developer preview)

The Microsoft Edge WebView2 control enables you to host web content in your application using [Microsoft Edge (Chromium)](https://www.microsoftedgeinsider.com/) as the rendering engine.

The WebView2 control is currently in developer preview, during which you can prototype your solutions and share feedback with us to shape the future stable API. There will likely be some breaking changes as we evolve the API during preview, and when this happens, you will need to have both the WebView2 SDK and the Microsoft Edge (Chromium) browser updated. Breaking changes will be noted in the [release notes](webview2/releasenotes.md) of the SDK. This will lock down as WebView2 approaches beta and stable.

## Supported Platforms

A developer preview is available for Win32 C++ on Windows 10, Windows 8.1, Windows 8, Windows 7, Windows Server 2016, Windows Server 2012/2012R2, and Windows Server 2008 R2. An Alpha version for WinUI 3.0 is available [here](https://docs.microsoft.com/uwp/toolkits/winui3/). In the future, we plan to support WebView2 on .NET.  

## Getting Started

To build and test your application using the WebView2 control, you need to have both [Microsoft Edge (Chromium)](https://www.microsoftedgeinsider.com/download/) and the [WebView2 SDK](https://aka.ms/webviewnuget) installed. See [Getting Started](webview2/gettingstarted.md) for detailed instructions, [WebView2 API Sample](https://github.com/MicrosoftEdge/WebView2Samples/tree/master/WebView2APISample) for an interactive guide, [API reference](webview2/reference-webview2.md) to learn about the API, and [Release Notes](webview2/releasenotes.md) for changes made between releases.

## WebView2 Samples

The [WebView2 Samples](https://github.com/MicrosoftEdge/WebView2Samples) repository contains samples that demonstrate all of the WebView2 SDK's features and their API use patterns. As we add more features to the WebView2 SDK, we will regularly update our sample applications.

## Feedback

Help us build a richer WebView2 experience by sharing your feedback! Visit our [feedback repo](https://aka.ms/webviewfeedback) to submit feature requests or bug reports. It’s also a good place to search for known issues.
During developer preview, we will also be collecting telemetry data to help us build a better WebView. Users can turn off WebView data collection by navigating to edge://settings/privacy in the browser and turning off browser data collection.

## Evergreen vs. Fixed Version

The WebView2 control utilizes the Microsoft Edge (Chromium) browser. To ensure your application will run on all machines, independent of the install status of the client Microsoft Edge browser, WebView2 depends on the Microsoft Edge WebView2 Runtime. Two distribution options will be available to developers to choose from when utilizing WebView2, evergreen or fixed version.

Evergreen is the recommended distribution model for most developers. In this mode updates to the WebView2 Runtime will be fully managed by Microsoft keeping you up to date automatically without effort from your application. With this self-updating model you can be assured that your app is taking advantage of the latest features and security updates for hosted web content.

In a future release we will also support a fixed version distribution model. In this model your application will select and package a specific WebView version. Updates to the WebView version will be the responsibility of the application and will be independent of any managed Microsoft update mechanisms. You should choose this model if it is crucial to be able to have absolute control over the browser version and update times your application is taking advantage of.

## Microsoft Edge WebView2 Runtime

The Microsoft Edge WebView2 Runtime is a packaging of the browser binaries optimized for use by WebView2 applications. It will function stand alone or side-by-side with a client Edge Browser install. A single install of the run-time will support any number of WebView2 applications. Install of the runtime will not appear as a browser install to end-user, i.e. no desktop shortcuts, start menu entry, or protocol registration.

An application utilizing WebView2 must ensure the installation of the Microsoft Edge WebView2 Runtime has occurred. At application install time you should check the current install status, which can be determined by using [GetCoreWebView2BrowserVersionInfo](https://docs.microsoft.com/microsoft-edge/hosting/webview2/reference/webview2.idl#getcorewebview2browserversioninfo). If the WebView2 Runtime is not available, you should chain the Microsoft Edge WebView2 Runtime Installer to your install flow.

## Browser Channels

Developers can target different [channels](https://www.microsoftedgeinsider.com/download/) of the Microsoft Edge (Chromium) browser to power the WebView2 control. Production releases of your application should target the Microsoft Edge WebView2 Runtime. 

For development you may want to target Beta, Dev, or Canary to ensure your application will work with upcoming versions or to take adavntage of upcoming features. All pre-released channels are provided by the installed client Microsoft Edge browser. To target one of these channels ensure the installed Edge browser on your development machine is the channel you'd like. The WebView2 API allows developers to programmatically target either the most stable or the least stable channel installed on users’ machine. Alternatively, developers can also use the below registry key to enforce a channel. See more details in [CreateWebView2EnvironmentWithDetails](webview2/reference/webview2.idl.md) function.

## Debugging WebView2

### DevTools

You can use [Microsoft Edge (Chromium) Developer Tools](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium) to debug web content displayed in WebView, just as you would in the browser. While having focus on the WebView window, press `F12`, or press `Ctrl` + `Shift` + `I`, or Right Click + choose `Inspect` to open Developer Tools.

![F12](webview2/images/F12.PNG)

**Note when debugging application in Visual Studio with the native debugger attached, `F12` may trigger the native debugger instead of Developer Tools. Use `Ctrl` + `Shift` + `I`, or Right Click + `Inspect` to avoid potential hotkey conflict.**

### Visual Studio

You can use the script debugger in Visual Studio 2019 (minimum version 16.4 Preview 2) to debug your script within WebView2 right from the IDE. Make sure the **JavaScript diagnostics** component in **Desktop development with C++** workload is installed.

![VSJSDiagnostics](webview2/images/VSJSDiagnostics.jpg)

Right click on your project and select **Properties**. Under **Configuration Properties** > **Debugging** > **Debugger Type**,  choose the **JavaScript (WebView2)** option to enable WebView2 script debugging. More details to follow soon.

![VSScriptDebugger](webview2/images/VSScriptDebugger.jpg)

### Visual Studio Code

You can also use Visual Studio Code to debug your script within the WebView2 right from the IDE. For more details click [here](https://github.com/microsoft/vscode-edge-debug2/blob/master/README.md#microsoft-edge-chromium-webview-applications).