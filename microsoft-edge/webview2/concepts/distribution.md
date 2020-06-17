---
description: Distribution options when releasing an app using Microsoft Edge WebView2
title: Distribution of Microsoft Edge WebView2 Application
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/17/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Distribution of applications using WebView2  

The WebView2 control utilizes the Microsoft Edge \(Chromium\) platform.  When distributing your app, make sure a copy of the web platform is present before the app starts.  The following page describes how a developer verifies the web platform is present and the two modes of distribution WebView2 supports - [Evergreen](#evergreen-webview2) and [Fixed version](#fixed-version-webview2).  

## Evergreen WebView2  

Evergreen is the recommended distribution model for most developers.  In the mode, all evergreen WebView2 apps depend on a common copy of the platform binaries, and platform updates are pushed automatically without additional effort from developers.  The evergreen model ensures that your app is taking advantage of the latest features and security updates for hosted web content.  Various channels may be used for evergreen WebView2 depending on your purposes - namely evergreen WebView2 Runtime, Microsoft Edge Beta build, Microsoft Edge Dev build, and Microsoft Edge Canary build.  

> [!NOTE]
> Microsoft Edge Stable build is not a valid target for WebView2, and the motivation is explained later in this document.  

When multiple such channels are present, WebView2 by default targets the most stable channel \(Runtime > Beta > Dev > Canary\) that meets the minimum version requirement of the WebView2 SDK.  For more information about mode details, see [versioning][ConceptsVersioning].  

### Deploy evergreen WebView2 Runtime  

The WebView team recognizes that the Microsoft Edge browser may not be available on all machines where your application is running.  To ensure your application runs on all machines, independent of the installed Microsoft Edge browser, the WebView team previewed the evergreen Microsoft Edge WebView2 Runtime.  The evergreen Microsoft Edge WebView2 Runtime is a customized copy of Microsoft Edge binaries for WebView2 usage.  An [installer][Webview2Installer] is provided for app to chain-install WebView2 Runtime.  You may run the installer silently, and not install a user accessible browser while installing the Runtime \(for example there is no Microsoft Edge desktop shortcut, start menu item, and so on\).  After the evergreen Runtime is installed, all subsequent apps on the machine are able to use it to create with WebView2.  

The following workflow is suggested for developers.  Depending on the exact scenario, your app should be able to do some variation of it, such as pulling the evergreen WebView2 installer dynamically from CDN rather than carried with the app installer.  

1.  The app installer/updater carries the evergreen installer, and checks if the Runtime is already installed.
1.  If none is installed, invoke the installer.
1.  After WebView2 runtime is successfully installed, start the app and create WebView2 windows.

<!--  Insert sample code or step-by-step guides  -->  

> [!NOTE]
> Currently evergreen WebView2 runtime and installer are in preview.  The preview has a limited initial scope and is only available as a standalone per-machine installer for Windows 10 running on an x64 machine.  In future releases of preview, support for Windows 7 and support for x86 and ARM64 machines is planned.  During preview, the runtime contains is currently synchronized with Microsoft Edge Dev build \(as in, Runtime and Microsoft Edge Dev build ship and update on the same cadence roughly and have the same builds\) so that you are able to deliver early changes to developers and iterate on the product faster.  In the future, the runtime is planned to synchronize with Microsoft Edge Beta build.  For WebView2 GA, the runtime is planned to synchronize with Microsoft Edge Stable build.  The transition on the runtime happens automatically without any effort or re-deployment from the developer.  In the future when WebView2 GA and apps goes into production, the runtime should be the platform evergreen apps target, rather than Microsoft Edge Insider channels.  

During WebView2 preview phrase, we recommend developers to at least use the WebView2 Runtime and installer to develop/test your app setup pipeline.  You may also develop your WebView2 app targeting the Runtime, but beware that as Runtime begins to stabilize and be in sync with Microsoft Edge Beta and Microsoft Edge Stable builds, it may not always satisfy the minimum build requirement when a new preview SDK is released.  If you always want to use the latest preview SDK WebView2 provides, consider using Microsoft Edge Canary build.  

### Develop and test using Microsoft Edge Insider channels  

Besides the evergreen WebView2 Runtime, WebView2 may also target Microsoft Edge Insider channels:  Beta, Dev, and Canary.  You may appreciate you are developing and trying to use a new preview SDK that does not yet work with stabler platform, or want to do compatibility-testing against non-stable channels before web platform changes flow into runtime.  

## Fixed version WebView2  

For constrained environments, there is support for a fixed version \(also known as bring-your-own\) distribution model.  In this model, your application selects and packages a specific version of WebView2 Runtime.  Updates to the Runtime do not occur automatically, and are the responsibility of the application.  The fixed version model is beneficial when you need to control the Runtime version and update cadence.  

In the future, Fixed version WebView2 is planned to be available.  

<!-- links -->  

[ConceptsVersioning]: ./versioning.md "Understanding browser versions and WebView2 | Microsoft Docs"  

[Webview2Installer]: https://aka.ms/webview2installer "WebView2 Installer"  
