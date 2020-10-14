---
description: Distribution options when releasing an app using Microsoft Edge WebView2
title: Distribution of Microsoft Edge WebView2 Applications
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/19/2020
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

*   WebView2 Runtime Bootstrapper is a tiny \(approximately 2 MB\) installer.  This installer downloads and installs the Evergreen Runtime from Microsoft servers that matches the user's device architecture.  
*   Link to download the Bootstrapper is a link for developers to programmatically download the bootstrapper.
*   WebView2 Runtime Standalone Installer is a full installer that can install the Evergreen WebView2 Runtime in offline environments.  

Currently, both the bootstrapper and standalone installer only support per-machine install, which requires elevation.  When run without elevation, a Windows User Account Control prompt appears to ask users to elevate permissions.  

We recommend the following workflows to ensure the Runtime is already installed before your application launches.  You may adjust your workflow depending on your scenario.  We also have sample code available in our [Samples repo][InstallerSample].  

#### Online-only deployment  

If you have an online-only deployment scenario where end users are assumed to have internet access, perform the following steps:  

*   During your application setup, check if the Runtime is already installed by either:  
    *   Inspecting if regkey `pv (REG_SZ)` exists under `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\ClientState\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}`, or  
    *   Calling WebView2 API [GetAvailableCoreWebView2BrowserVersionString](../reference/win32/0-9-622/webview2-idl.md#getavailablecorewebview2browserversionstring) and check whether the versionInfo is NULL.  
*   If the Runtime isn't installed, use the link to programmatically download the bootstrapper.  
*   Invoke the bootstrapper from an elevated process or command prompt with `MicrosoftEdgeWebview2Setup.exe /silent /install` for silent install.  

This workflow ensures you install the Runtime only when it's needed, you're not required to package installers or detect the architecture of user devices, and can install the Runtime silently.  You may also choose to package the bootstrapper with your application instead of programmatically downloading it on demand.  

#### Offline deployment  

If you have an offline deployment scenario where app deployment has to work entirely offline, perform the following steps:  

*   Download the [standalone installer][Webview2Installer].  
*   Include the installer in your application installer or updater.  
*   During your application setup, check if the Runtime is already installed by either:  
    *   Inspecting if regkey `pv (REG_SZ)` exists under `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\ClientState\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}`, or  
    *   Calling WebView2 API [GetAvailableCoreWebView2BrowserVersionString](../reference/win32/0-9-622/webview2-idl.md#getavailablecorewebview2browserversionstring) and check whether the versionInfo is NULL.  
*   If the Runtime isn't installed, invoke the standalone installer from an elevated process or command prompt with `MicrosoftEdgeWebView2RuntimeInstaller{X64/X86/ARM64}.exe /silent /install` for silent install.  

### Best practices for staying compatible in Evergreen mode

Web is constantly evolving, and the Evergreen WebView2 Runtime always stays up-to-date to provide developers with the latest features and security fixes. To ensure your app stays compatible with the web, we recommend that you set up some testing infrastructure.

Non-stable Microsoft Edge channels (Beta/Dev/Canary) provide a sneak peek into what is coming next into WebView2 Runtime. Just like developing websites for Microsoft Edge, we recommend that you test your WebView2 app regularly against one of the non-stable channels, and adjust your app accordingly or [report issues](https://github.com/MicrosoftEdge/WebViewFeedback) to us if issues arise. Typically Dev or Beta are the recommended channels, see [channel definition][EdgeChannels] to decide which channel is right for you. You can download the [non-stable Microsoft Edge channel][DownloadNonstableEdge] on your test environment, and use regkey or environment variable to indicate the channel preference for your testing app (see details [here][SetWebView2Channel]). You may also use [WebDriver](../howto/webdriver.md) to automate WebView2 testing.

## Fixed Version distribution mode  

> [!NOTE]
> The Fixed Version distribution mode is under Public Preview.  

For constrained environments with strict compatibility requirements, developers may want to consider the Fixed Version distribution mode, previously named bring-your-own.  The Fixed Version distribution mode allows developers to select and package a specific version of the WebView2 Runtime.  The Fixed Version distribution mode allows you to control which version of the WebView2 Runtime is used by your application, and when user machines are updated.  The Fixed Version distribution mode doesn't receive any automatic updates, and developers should plan to apply updates themselves.  

To use the Fixed Version mode,
*  ls [Download][Webview2Installer] the Fixed Version package, and decompress the package.
*   Include the decompressed Fixed Version binaries in your project.
*   Indicate the path to the Fixed Version binaries when creating the WebView2 environment.
    *   For Win32 C/C++, you may create the environment via the [CreateCoreWebView2EnvironmentWithOptions](../reference/win32/0-9-622/webview2-idl.md#createcorewebview2environmentwithoptions) function. Use the `browserExecutableFolder` param to indicate the path to the Fixed Version binaries.
    *   For .NET, you may do either of the below to specify the environment. Note the environment needs to be specified before the WebView2 `Source` property is set to take effect.
        *   Set the [CreationProperties](../reference/wpf/0-9-515/microsoft-web-webview2-wpf-webview2.md#creationproperties) property on the WPF WebView2 element. Use the `BrowserExecutableFolder` member in the [CoreWebView2CreationProperties](../reference/wpf/0-9-515/microsoft-web-webview2-wpf-corewebview2creationproperties.md#corewebview2creationproperties) class to indicate the path to the the Fixed Version binaries. Equivalent functionality will be available for WinForms soon. 
        *   Use EnsureCoreWebView2Async ([WPF](../reference/wpf/0-9-515/microsoft-web-webview2-wpf-webview2.md#ensurecorewebview2async)/[WinForms](../reference/winforms/0-9-515/microsoft-web-webview2-winforms-webview2.md#ensurecorewebview2async)) to specify the environment. Use the `browserExecutableFolder` param in [CoreWebView2Environment.CreateAsync](../reference/dotnet/0-9-538/microsoft-web-webview2-core-corewebview2environment.md#createasync) to indicate the path to the the Fixed Version binaries.
*   Package and ship the Fixed Version binaries with your application. Update the binaries as appropriate.

<!-- links -->  

[ConceptsVersioning]: ./versioning.md "Understanding browser versions and WebView2 | Microsoft Docs"  
[ReferenceWin3209622WebviewIdl]: ../reference/win32/0-9-622/webview2-idl.md  "Globals | Microsoft Docs"  
[Webview2Installer]: https://developer.microsoft.com/microsoft-edge/webview2 "WebView2 Installer"  
[InstallerSample]: https://aka.ms/wv2installersample "WebView2 Installer Sample"  
[DownloadNonstableEdge]: https://www.microsoftedgeinsider.com/download "Download non-stable Edge"
[EdgeChannels]: https://docs.microsoft.com/deployedge/microsoft-edge-channels "Edge channels"
[SetWebView2Channel]: ../reference/win32/0-9-622/webview2-idl.md#createcorewebview2environmentwithoptions "Set WebView2 Channel"
