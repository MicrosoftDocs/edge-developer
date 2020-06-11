---
description: Distribution options when releasing an app using Microsoft Edge WebView2
title: Distribution of Microsoft Edge WebView2 Application
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/11/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Distribution of applications using WebView2 

The WebView2 control utilizes the Microsoft Edge \(Chromium\) platform. When distributing your app, make sure a copy of the web platform is present before the app starts. This document covers how developers can make sure the web platform is present and the two modes of distribution WebView2 supports - [Evergreen](#evergreen-webview2) and [Fixed version](#fixed-version-webview2).

## Evergreen WebView2

Evergreen is the recommended distribution model for most developers. In this mode, all evergreen WebView2 apps depend on a common copy of the platform binaries, and platform updates are pushed automatically without additional effort from developers. The evergreen model ensures that your app is taking advantage of the latest features and security updates for hosted web content. Various channels can be used for evergreen WebView2 depending on your purposes - namely evergreen WebView2 Runtime, Edge Beta, Edge Dev, and Edge Canary. **Note that Edge Stable is not a valid target for WebView2, and the motivation is explained later in this document.**

When multiple such channels are present, WebView2 by default targets the most stable channel (Runtime > Beta > Dev > Canary) that meets the minimum version requirement of the WebView2 SDK. Mode details in [versioning](versioning.md).

### Deploy evergreen WebView2 Runtime

We recognize that the Edge browser may not be available on all user machines where your application will run. To ensure your application runs on all machines, independent of the installed Microsoft Edge browser, we previewed the evergreen Microsoft Edge WebView2 Runtime - a customized copy of Edge binaries for WebView2 usage. An [installer](https://aka.ms/webview2installer) is provided for app to chain-install WebView2 Runtime. The installer can be run silently, and will not install a browser from end users' perspective while installing the Runtime (i.e. no Edge desktop shortcut, start menu item, etc.). Once the evergreen Runtime is installed, all subsequent apps on the machine can use it to create WebView2. 

Below is a suggested workflow for developers, and depending on the exact scenario, app can choose to do some variation of it, such as pulling the evergreen WebView2 installer dynamically from CDN rather than carried with the app installer.

1. The app installer/updater carries the evergreen installer, and checks if the Runtime is already installed.
2. If none is installed, invoke the installer.
3. After WebView2 runtime is successfully installed, start the app and create WebView2 windows.

**Insert sample code or step-by-step guides**

**Note**: currently evergreen WebView2 Runtime and its installer is **under preview**, which has a limited initial scope - Win10-only, x64-only, per-machine-install-only, standalone-installer-only. Over time, more support such as Win7 and x86/ARM64 will be added to the preview. During preview, the platform Runtime contains is currently in sync with Edge Dev (as in, Runtime and Edge Dev ship/update  on the same cadence roughly and have the same builds) so that we can get early changes to developers and iterate on the product faster. The Runtime will migrate to be in sync with Edge Beta later, and eventually Edge Stable when WebView2 GA. This transition on the Runtime happens automatically without any effort or re-deployment from the developer. In the future when WebView2 GA and apps goes into production, WebView2 Runtime should be the platform evergreen apps target, rather than non-stable browser channels.

During WebView2 preview phrase, we recommend developers to at least use the WebView2 Runtime and installer to develop/test your app setup pipeline. You can also develop your WebView2 app targeting the Runtime, but beware that as Runtime begins to stabilize and be in sync with Beta and Stable, it may not always satisfy the minimum build requirement when a new preview SDK is released. If you always want to use the latest preview SDK WebView2 provides, consider using Edge Canary.

### Develop/test against Edge Beta/Dev/Canary

Besides the evergreen WebView2 Runtime, WebView2 can also target non-stable browser channels - Edge Beta, Dev, and Canary. This is most helpful when you're developing and trying to use a new preview SDK that does not yet work with stabler platform, or want to do compat-testing against non-stable channels before web platform changes flow into Runtime.

## Fixed version WebView2

For constrained environments, there will be support for a fixed version (also known as bring-your-own) distribution model. In this model, your application selects and packages a specific version of WebView2 Runtime. Updates to the Runtime do not occur automatically, and will be the responsibility of the application. The fixed version model is beneficial when you need to control the Runtime version and update cadence.

Fixed version WebView2 will be available for preview later.
