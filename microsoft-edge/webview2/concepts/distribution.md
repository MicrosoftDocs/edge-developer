---
description: Distribution options when releasing an app using Microsoft Edge WebView2
title: Distribution of Microsoft Edge WebView2 Applications
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/21/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Distribution of applications using WebView2  

When distributing your WebView2 application, make sure the backing web platform - the [WebView2 Runtime](#understanding-the-webview2-runtime) is present before the app starts.  This article describes how developers can install the WebView2 Runtime, and use the two distribution modes for your WebView2 application:  [Evergreen](#evergreen-distribution-mode) and [Fixed Version](#fixed-version-distribution-mode).  

## Evergreen distribution mode  

> [!NOTE]
> The Evergreen distribution mode is recommended for most developers.  

The Evergreen distribution mode ensures that your app is taking advantage of the latest features and security updates.  It has the following characteristics.  

*   The underlying web platform \(WebView2 Runtime\) updates automatically without additional effort from developers.  
*   All applications that use the Evergreen distribution mode use a shared copy of the Evergreen WebView2 Runtime, which saves disk space.  

### Understanding the WebView2 Runtime  

WebView2 Runtime is a re-distributable runtime and serves as the backing web platform for WebView2 applications.  This concept is similar to VC++ or .NET Runtime for C++/.NET apps.  Under the hood, the Runtime is modified Microsoft Edge \(Chromium\) binaries that are fine-tuned and tested for applications.  The Runtime won't appear as a user-visible browser upon installation, for example, users won't have a browser desktop shortcut or start menu entry.  

For development and testing, developers may use the Runtime or any non-stable Microsoft Edge \(Chromium\) browser channel for the backing web platform.  In production environments, developers must ensure the Runtime is present on user devices before the application starts.  The Microsoft Edge Stable channel is unavailable for WebView2 usage to prevent apps from taking a dependency on the browser in production.  

Developers must not take a dependency on the browser because:  

*   Microsoft Edge \(Chromium\) isn't guaranteed to be present on all user devices.  For example, devices disconnected from Windows Update or not managed by Microsoft directly \(a large portion of the Enterprise/EDU market\) may not have the browser.  Allowing developers to distribute the WebView2 Runtime avoids taking a dependency on the browser as a pre-requisite for apps.
*   Browsers and apps have different use cases, and so taking a dependency on a browser may have unintended side-effects on your apps.  For example, IT admins may version-control the browser for internal website compatibility.  WebView2 Runtime allows apps to stay evergreen while browser updates are being actively managed.  
*   As opposed to the browser, the Runtime is developed and tested for application scenarios and in some cases may include bug fixes not yet available in the browser.  

The Evergreen WebView2 Runtime is planned to ship inbox in future releases of Windows.  Before the Runtime becomes more universally available, developers are recommended to deploy the Runtime along with their production application.  

### Deploying the Evergreen WebView2 Runtime  

Only one installation of the Evergreen WebView2 Runtime is needed for all Evergreen apps on the device.  There are a number of tools available on the [WebView2 Runtime download page][Webview2Installer] to help developers deploy the Evergreen Runtime, such as:  

*   WebView2 Runtime Bootstrapper \(to be released soon\) is a tiny \(approximately 2 MB\) installer.  This installer downloads and installs the Evergreen Runtime from Microsoft servers that matches the user's device architecture.  
*   Link to download the Bootstrapper \(to be released soon\) is a link for developers to programmatically download the bootstrapper.
*   WebView2 Runtime Standalone Installer is a full installer that can install the Evergreen WebView2 Runtime in offline environments.  

Currently, both the bootstrapper and standalone installer only support per-machine install, which requires elevation.  When run without elevation, a Windows User Account Control prompt appears to ask users to elevate permissions.  

We recommend the following workflows to ensure the Runtime is already installed before your application launches.  You may adjust your workflow depending on your scenario.  We'll also provide sample code in the future.  

#### Online-only deployment  

If you have an online-only deployment scenario where end users are assumed to have internet access, perform the following steps:  

*   During your application setup, check if the Runtime is already installed by either:  
    *   Inspecting if regkey `pv (REG_SZ)` exists under `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\ClientState\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}`, or  
    *   Calling WebView2 API [GetAvailableCoreWebView2BrowserVersionString](/microsoft-edge/webview2/reference/win32/webview2-idl#getavailablecorewebview2browserversionstring) and check whether the versionInfo is NULL.  
*   If the Runtime isn't installed, use the link to programmatically download the bootstrapper.  
*   Invoke the bootstrapper from an elevated process or command prompt with `MicrosoftEdgeWebview2Setup.exe /silent /install` for silent install.  

This workflow ensures you install the Runtime only when it's needed, you're not required to package installers or detect the architecture of user devices, and can install the Runtime silently.  You may also choose to package the bootstrapper with your application instead of programmatically downloading it on demand.  

#### Offline deployment  

If you have an offline deployment scenario where app deployment has to work entirely offline, perform the following steps:  

*   Download the [standalone installer][Webview2Installer].  
*   Include the installer in your application installer or updater.  
*   During your application setup, check if the Runtime is already installed by either:  
    *   Inspecting if regkey `pv (REG_SZ)` exists under `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\ClientState\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}`, or  
    *   Calling WebView2 API [GetAvailableCoreWebView2BrowserVersionString](/microsoft-edge/webview2/reference/win32/webview2-idl#getavailablecorewebview2browserversionstring) and check whether the versionInfo is NULL.  
*   If the Runtime isn't installed, invoke the standalone installer from an elevated process or command prompt with `MicrosoftEdgeWebView2RuntimeInstaller{X64/X86/ARM64}.exe /silent /install` for silent install.  

## Fixed Version distribution mode  

> [!NOTE]
> The Fixed Version distribution mode is not available yet.  

For constrained environments, there are plans to support a Fixed Version, previously named bring-your-own, distribution mode.  The Fixed Version distribution mode allows developers to select and package a specific version of the WebView2 Runtime.  The Fixed Version distribution mode allows you to control which version of the WebView2 Runtime is used by your application, and when user machines are updated.  The Fixed Version distribution mode doesn't receive any automatic updates, and developers should plan to apply updates themselves.  


<!-- links -->  

[ConceptsVersioning]: ./versioning.md "Understanding browser versions and WebView2 | Microsoft Docs"  
[ReferenceWin3209622WebviewIdl]: /microsoft-edge/webview2/reference/win32/webview2-idl  "Globals | Microsoft Docs"  

[Webview2Installer]: https://developer.microsoft.com/microsoft-edge/webview2 "WebView2 Installer"  
