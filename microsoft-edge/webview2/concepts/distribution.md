---
description: Distribution options when releasing an app using Microsoft Edge WebView2
title: Distribution of Microsoft Edge WebView2 Application
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/15/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Distribution of applications using WebView2  

When distributing your WebView2 application, make sure the backing web platform - the [WebView2 Runtime](#understanding-the-webview2-runtime) is present before the app starts. The following page describes how you (the developer) are able to ensure that the WebView2 Runtime is installed and use of the two distribution modes for your WebView2 application:  [Evergreen](#evergreen-distribution-mode) and [Fixed Version](#fixed-version-distribution-mode).  

## Evergreen distribution mode  

> [!NOTE]
> The Evergreen distribution model is recommended for most developers.  

The Evergreen distribution mode ensures that your app is taking advantage of the latest features and security updates.  It has the following characteristics.  

*   The underlying web platform (WebView2 Runtime) updates automatically without additional effort from developer.  
*   All applications that leverage the Evergreen distribution mode use a shared copy of the Evergreen WebView2 Runtime, which saves disk space.  

### Understanding the WebView2 Runtime  

WebView2 Runtime is a redistributable runtime and serves as the backing web platform for WebView2 applications, similar in concept to VC++ or .NET Runtime for C++/.NET apps. Under the hood, the Runtime is modified Microsoft Edge (Chromium) binaries that are fine-tuned and tested for applications. The Runtime will not appear as a user-visible browser upon installation, for example, users will not see any browser desktop shortcut or start menu entry.

For development and testing, developer may use the Runtime or any non-stable Microsoft Edge (Chromium) browser channel as the backing platform. In production environment, developer should make sure the Runtime is present on user device before the application starts, as opposed to taking a dependency on the browser, because

* Microsoft Edge (Chromium) is not guaranteed to be present on all user devices. For example, devices disconnected from Windows Update or not managed by Microsoft directly (a large portion of the Enterprise/EDU market) may not have the browser. Allowing developers to distribute the WebView2 Runtime avoids having the browser as a pre-requisite for apps.
* Browser and apps are different use cases and therefore browser may have unintended side-effects for apps. For example, IT admin may version-control the browser for internal website compatibility, and WebView2 Runtime allows apps to stay evergreen while browser updates are being actively managed.
* As opposed to the browser, the Runtime is developed and tested for application scenarios and in some cases may include bug fixes not yet available in the browser.

The Stable browser channel is currently disabled for WebView2 usage to prevent apps from taking dependency on the browser in production.

The Evergreen WebView2 Runtime is planned to ship inbox in future releases of Windows. Before the Runtime becomes more universally available, developers are strongly recommended to deploy the Runtime along with their production application.

### Deploying the Evergreen WebView2 Runtime

Only one installation of the Evergreen WebView2 Runtime is needed for all Evergreen apps on the device. There are a number of tools available on the [WebView2 Runtime download page][Webview2Installer] to help developers deploy the Evergreen Runtime, namely

* WebView2 Runtime Bootstrapper (to be released shortly) - a tiny (approximately 2 MB) installer that downloads the Evergreen Runtime matching device architecture from Microsoft Server and installs it locally.
* Link to download the Bootstrapper (to be released shortly) - a link for developers to programmatically download the bootstrapper.
* WebView2 Runtime Standalone Installer - a full-blown installer that can install the Evergreen Runtime in offline environment.

Currently, both bootstrapper and standalone installer only support per-machine install, which requires elevation. When run without elevation, a Windows User Account Control prompt will appear to ask permission from user to elevate.

We recommend the following workflows to ensure the Runtime is already installed before application launches. You may adjust your workflow depending on your scenario. We will also expose sample code in the future.

#### Online-only deployment

If you have an online-only deployment scenario where end users are assumed to have internet access,

* During your application setup, check if the Runtime is already installed by either
    * Inspect if regkey `pv (REG_SZ)` exists under `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\ClientState\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}`, or
    * Call WebView2 API [GetAvailableCoreWebView2BrowserVersionString](../reference/win32/0-9-622/webview2-idl.md#getavailablecorewebview2browserversionstring) and check whether the versionInfo is NULL.
* If not installed, use the Link to programmatically download the bootstrapper.
* Invoke the bootstrapper from an elevated process or command prompt with `MicrosoftEdgeWebview2Setup.exe /silent /install` for silent install. Not including the `/silent` flag with trigger install UI.

In this workflow, you're installing the Runtime only when needed, are not required to package any installer or do architecture detection, and can install silently. You may also choose to package the bootstrapper with your application instead of programmatically downloading it on demand.

#### Offline deployment

If you have an offline deployment scenario where app deployment has to work entirely offline,

* Download the [standalone installer][Webview2Installer].
* Include the installer in your application installer or updater.  
* During your application setup, check if the Runtime is already installed by either
    * Inspect if regkey `pv (REG_SZ)` exists under `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\ClientState\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}`, or
    * Call WebView2 API [GetAvailableCoreWebView2BrowserVersionString](../reference/win32/0-9-622/webview2-idl.md#getavailablecorewebview2browserversionstring) and check whether the versionInfo is NULL.
* If not installed, invoke the standalone from an elevated process or command prompt with `MicrosoftEdgeWebView2RuntimeInstaller{X64/X86/ARM64}.exe /silent /install` for silent install. Not including the `/silent` flag with trigger install UI.

## Fixed Version distribution mode  

> [!NOTE]
> The Fixed Version distribution model is not available yet.  

For constrained environments, there are plans to support a Fixed Version \(previously named bring-your-own\) distribution mode. The Fixed Version distribution mode allows developers to select and package a specific version of the WebView2 Runtime. The Fixed Version distribution mode allows you to control which version of the WebView2 Runtime is used by your application, and when user machines are updated. The Fixed Version distribution mode does not receive any automatic updates, and developers should plan to apply updates themselves.  


<!-- links -->  

[ConceptsVersioning]: ./versioning.md "Understanding browser versions and WebView2 | Microsoft Docs"  

[ReferenceWin3209622WebviewIdl]: ../reference/win32/0-9-622/webview2-idl.md  "Globals | Microsoft Docs"  

[Webview2Installer]: https://developer.microsoft.com/microsoft-edge/webview2 "WebView2 Installer"  
