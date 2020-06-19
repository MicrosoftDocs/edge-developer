---
description: Distribution options when releasing an app using Microsoft Edge WebView2
title: Distribution of Microsoft Edge WebView2 Application
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/19/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Distribution of applications using WebView2  

The WebView2 control utilizes the Microsoft Edge \(Chromium\) platform.  When distributing your app, make sure a copy of the web platform is present before the app starts.  The following page describes how you, the developer, verify the web platform is present and the two modes of distribution WebView2 supports:  [Evergreen](#evergreen-distribution-model) and [Fixed version](#fixed-version-distribution-model).  

## Evergreen distribution model  

The evergreen distribution model ensures that your app is taking advantage of the latest features and security updates.  When you use  the evergreen distribution mode, be aware of the following conditions.  

*   WebView2 applications use a shared copy of the platform binaries.  
*   Platform updates are pushed automatically to user machines without additional effort from you.  

> [!NOTE]
> The evergreen distribution model is recommended for most developers.  

Microsoft Edge Stable Channel runtime is not a valid target for WebView2, and the reasons are described later in this article.  
WebView2 applications use APIs available in a WebView2 SDK.  To meet the minimum version requirements of the SDK, when multiple channels are available on a user machine, the most stable channel is selected to run your WebView2 application in the following order.  

1.  WebView2 Runtime \(Preview\)  
1.  Microsoft Edge Beta Channel  
1.  Microsoft Edge Dev Channel  
1.  Microsoft Edge Canary Channel    

For more information, see [Versioning][ConceptsVersioning].

### Understand the WebView2 Runtime  

> [!NOTE]
> The following information supports the WebView2 Runtime (Preview).  

For user machines that do not have the Microsoft Edge browser installed, you may use the WebView2 Runtime.  The WebView2 Runtime is an evergreen copy of the Microsoft Edge binaries that may be used to run your WebView2 applications.  The WebView2 Runtime is not a browser available to your users.  

To chain-install the WebView2 Runtime with your app, ensure you install the WebView2 Runtime installer.  After installing the [WebView2 Runtime installer][Webview2Installer], all Webview2 applications on the user machine may use the WebView2 Runtime.  

Consider the following recommendations during the preview.  

*   The WebView team recommends that you use the WebView2 Runtime and WebView Runtime installer to develop and test your application installer.  
*   The WebView2 Runtime and Microsoft Edge Dev Channel is released at the same time and have the same builds.  During the preview, the WebView team plans to support the Microsoft Edge Beta Channel in WebView2 Runtime \(not available today\).  For GA, The WebView team plans to support the Microsoft Edge Stable Channel in WebView2 Runtime.  At GA, WebView2 applications in production should use the WebView2 Runtime instead of the Microsoft Edge Insider channels.
*   When support for the Microsoft Edge Beta Channel and Microsoft Edge Stable Channel is released, re-test your WebView2 application.  If your WebView2 application uses WebView2 SDK \(Preview\), you should use the Microsoft Edge Canary Channel \(not available today\).

### Deploy WebView2 Runtime  

> [!NOTE]
> The following information supports the WebView2 Runtime (Preview).  

The WebView team recommends the following workflow when deploying WebView2 Runtime \(Preview\).  

1.  Include the WebView2 Runtime in your application installer.  
1.  During installation, the application installer checks if the WebView2 Runtime is already installed on the user machine.  If the WebView2 Runtime installer is not installed, the application installer invokes the WebView2 Runtime installer.  

After WebView2 Runtime is successfully installed, the user is able to use your WebView2 application.  Depending on your scenario, you may need to change the deployment workflow.  For example, you may want to download and install the WebView2 Runtime installer from a CDN rather than include it in your application installer.  

> [!IMPORTANT]
> Both the WebView2 Runtime and WebView2 Runtime installer are available as part of the preview.  The preview has a limited initial scope and is only available as a standalone, per-machine installs on Windows 10 on x64 machines.  In the future, the WebView team plans to support Windows 7, x86 machines, and ARM64 machines for the WebView2 Runtime and WebView2 Runtime installer.  

<!--  Insert sample code or step-by-step guide to package the webview2 runtime in Visual Studio  -->  

## Fixed version distribution model   

> [!NOTE]
> The following information supports the fixed version distribution model.  The fixed version distribution model is currently not available.  

For constrained environments, the WebView team plans to support a fixed version \(previously called bring-your-own\) distribution model.  The fixed version distribution model has the following benefits and limitations.  

*   Allows you to select and package a specific version of the WebView2 Runtime in your application installer.  
*   Allows you to control which version of the WebView2 Runtime is used by your application, and when user machines are updated.  
*   Does not support automatic updates to the WebView2 Runtime.  
*   Requires you to re-package and re-distribute your WebView2 application when updates are available.  

<!-- links -->  

[ConceptsVersioning]: ./versioning.md "Understanding browser versions and WebView2 | Microsoft Docs"  

[Webview2Installer]: https://aka.ms/webview2installer "WebView2 Installer"  
