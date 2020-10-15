---
description: Distribution options when releasing an app using Microsoft Edge WebView2
title: Distribution of Microsoft Edge WebView2 apps
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/19/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Distribution of apps using WebView2  

When distributing your WebView2 app, make sure the backing web platform - the [WebView2 Runtime](#understanding-the-webview2-runtime) is present before the app starts.  This article describes how you can install the WebView2 Runtime, and use the two distribution modes for your WebView2 app:  [Evergreen](#evergreen-distribution-mode) and [Fixed Version](#fixed-version-distribution-mode).  

## Evergreen distribution mode  

> [!NOTE]
> The Evergreen distribution mode is recommended for most developers \(you\).  

The Evergreen distribution mode ensures that your app is taking advantage of the latest features and security updates.  It has the following characteristics.  

*   The underlying web platform \(WebView2 Runtime\) updates automatically without additional effort from you.  
*   All apps that use the Evergreen distribution mode use a shared copy of the Evergreen WebView2 Runtime, which saves disk space.  
    
### Understanding the WebView2 Runtime  

WebView2 Runtime is a redistributable runtime and serves as the backing web platform for WebView2 apps.  This concept is similar to VC++ or .NET Runtime for C++/.NET apps.  The Runtime is modified Microsoft Edge \(Chromium\) binaries that are fine-tuned and tested for apps.  The Runtime does not appear as a user-visible browser upon installation.  For example, a user does not have a browser desktop shortcut or start menu entry.  

During development and testing, you may use either as the backing web platform.  

*   The WebView2 Runtime  
*   any Insider \(non-stable\) Microsoft Edge \(Chromium\) browser channel  

In production environments, you must ensure the Runtime is present on user devices before the app starts.  The Microsoft Edge Stable channel is unavailable for WebView2 usage to prevent apps from taking a dependency on the browser in production.

Do not take a dependency on the browser because:  

*   Microsoft Edge \(Chromium\) isn't guaranteed to be present on all user devices.  For example, devices disconnected from Windows Update or not managed by Microsoft directly \(a large portion of the Enterprise/EDU market\) may not have the browser.  Allowing you to distribute the WebView2 Runtime avoids taking a dependency on the browser as a pre-requisite for apps.  
*   Browsers and apps have different use cases, and so taking a dependency on a browser may have unintended side-effects on your apps.  For example, IT admins may version-control the browser for internal website compatibility.  WebView2 Runtime allows apps to stay evergreen while browser updates are being actively managed.  
*   As opposed to the browser, the Runtime is developed and tested for app scenarios and in some cases may include bug fixes not yet available in the browser.  
    
The Evergreen WebView2 Runtime is planned to ship inbox in future releases of Windows.  Deploy the Runtime along with your production app until the Runtime becomes more universally available.  

### Deploying the Evergreen WebView2 Runtime  

Only one installation of the Evergreen WebView2 Runtime is needed for all Evergreen apps on the device.  There are a number of tools available on the [WebView2 Runtime download page][Webview2Installer].  The following tools help you deploy the Evergreen Runtime.  

*   WebView2 Runtime Bootstrapper is a tiny \(approximately 2 MB\) installer.  This installer downloads and installs the Evergreen Runtime from Microsoft servers that matches the user's device architecture.  
*   Link to download the Bootstrapper is a link for you to programmatically download the bootstrapper.  
*   WebView2 Runtime Standalone Installer is a full installer that can install the Evergreen WebView2 Runtime in offline environments.  
    
Currently, both the bootstrapper and standalone installer only support per-machine install, which requires elevation.  If they are invoked without elevation, a Windows User Account Control prompt will appear to ask users to elevate permissions.  

We recommend the following workflows to ensure the Runtime is already installed before your app launches.  You may adjust your workflow depending on your scenario.  We also have sample code available in the [Samples repo][InstallerSample].  

#### Online-only deployment  

If you have an online-only deployment scenario where end users are assumed to have internet access, complete the following steps.  

*   During your app setup, check if the Runtime is already installed by either:  
    *   Inspecting if regkey `pv (REG_SZ)` exists and is not null/empty under `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}`, or  
    *   Calling the WebView2 API [GetAvailableCoreWebView2BrowserVersionString][ReferenceWin32Webview2IdlGetavailablecorewebview2browserversionstring] and check whether the `versionInfo` is `NULL`.  
*   If the Runtime isn't installed, use the link to programmatically download the bootstrapper.  
*   Invoke the bootstrapper from an elevated process or command prompt with `MicrosoftEdgeWebview2Setup.exe /silent /install` for silent install.  
    
This workflow has the following benefits.  

*   Install the Runtime only when needed or when you're not required to package installers.  
*   The bootstrapper will auto-detect device architecture and install the matching Runtime. 
*   Install the Runtime silently.  
    
You may also choose to package the bootstrapper with your app instead of programmatically downloading it on demand.  

#### Offline deployment  

If you have an offline deployment scenario where app deployment has to work entirely offline, complete the following steps.  

*   Download the [standalone installer][Webview2Installer].  
*   Include the installer in your app installer or updater.  
*   During your app setup, check if the Runtime is already installed by either:  
    *   Inspecting if regkey `pv (REG_SZ)` exists and is not null/empty under `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\Clients\{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}`, or  
    *   Calling WebView2 API [GetAvailableCoreWebView2BrowserVersionString][ReferenceWin32Webview2IdlGetavailablecorewebview2browserversionstring] and check whether the `versionInfo` is `NULL`.  
*   If the Runtime isn't installed, invoke the standalone installer from an elevated process or command prompt with `MicrosoftEdgeWebView2RuntimeInstaller{X64/X86/ARM64}.exe /silent /install` for silent install.  
    
### Stay compatible in Evergreen mode

Web is constantly evolving. The Evergreen WebView2 Runtime stays up to date to provide you with the latest features and security fixes.  To ensure your app stays compatible with the web, we recommend you set up some testing infrastructure.

Non-stable Microsoft Edge channels \(Beta/Dev/Canary\) provide a sneak peek into what is coming next into WebView2 Runtime.  Just like developing websites for Microsoft Edge, we recommend that you test your WebView2 app regularly against one of the non-stable channels, and adjust your app accordingly or [report issues][GithubMicrosoftedgeWebviewfeedback] to us if issues arise. Typically Dev and Betas are the recommended channels.  To help you decide which channel is right, navigate to [Overview of the Microsoft Edge channels][DeployEdgeMicrosoftEdgeChannels].  You can download the [non-stable Microsoft Edge channel][DownloadNonstableEdge] on your test environment, and use regkey or environment variable (see details [here][ReferenceWin3209622Webview2IdlCreatecorewebview2environmentwithoptions]) to indicate the channel preference for your testing app.  You may also use [WebDriver][HowtoWebdriver] to automate WebView2 testing.

## Fixed Version distribution mode  

> [!NOTE]
> The Fixed Version distribution mode is under Public Preview.  

The Fixed Version distribution mode was previously named bring-your-own.  

For constrained environments with strict compatibility requirements, you may want to consider using the Fixed Version distribution mode.  The Fixed Version distribution mode allows you to select and package a specific version of the WebView2 Runtime.  It allows you to control which version of the WebView2 Runtime is used by your app, when the Runtime is updated.  The Fixed Version distribution mode doesn't receive any automatic updates, and you should plan to apply updates themselves.  

To use the Fixed Version mode,  

*   [Download][Webview2Installer] the Fixed Version package, and decompress the package.  
*   Include the decompressed Fixed Version binaries in your project.  
*   Indicate the path to the Fixed Version binaries when creating the WebView2 environment.  
    *   For Win32 C/C++, you may create the environment via the [CreateCoreWebView2EnvironmentWithOptions][ReferenceWin3209622Webview2IdlCreatecorewebview2environmentwithoptions] function.  Use the `browserExecutableFolder` parameter to indicate the path to the Fixed Version binaries.  
    *   For .NET, you may do either of the below to specify the environment.  
        
        > [!NOTE]
        > You must be specify the environment before the WebView2 `Source` property is set to take effect.  
        
        *   Set the [CreationProperties][ReferenceWpf09515MicrosoftWebWebview2WpfWebview2Creationproperties] property on the WPF WebView2 element.  Use the `BrowserExecutableFolder` member in the [CoreWebView2CreationProperties][ReferenceWpf09515MicrosoftWebWebview2WpfCorewebview2creationpropertiesCorewebview2creationproperties] class to indicate the path to the Fixed Version binaries.  Equivalent functionality will be available for WinForms soon.  
        *   Use EnsureCoreWebView2Async \([WPF][ReferenceWpf09515MicrosoftWebWebview2WpfWebview2Ensurecorewebview2async]/[WinForms][ReferenceWinforms09515MicrosoftWebWebview2WinformsWebview2Ensurecorewebview2async]\) to specify the environment.  Use the `browserExecutableFolder` parameter in [CoreWebView2Environment.CreateAsync][ReferenceDotnet09538MicrosoftWebWebview2CoreCorewebview2environmentCreateasync] to indicate the path to the Fixed Version binaries.  
*   Package and ship the Fixed Version binaries with your app.  Update the binaries as appropriate.  
    
<!-- links -->  

[ConceptsVersioning]: ./versioning.md "Understanding browser versions and WebView2 | Microsoft Docs"  

[HowtoWebdriver]: ../howto/webdriver.md "Automating and testing WebView2 with Microsoft Edge Driver | Microsoft Docs"  

[ReferenceDotnet09538MicrosoftWebWebview2CoreCorewebview2environmentCreateasync]: ../reference/dotnet/0-9-538/microsoft-web-webview2-core-corewebview2environment.md#createasync "CreateAsync - 0.9.579 - Microsoft.Web.WebView2.Core.CoreWebView2Environment class | Microsoft Docs"  

[ReferenceWin3209622Webview2Idl]: ../reference/win32/0-9-622/webview2-idl.md  "Globals | Microsoft Docs"  
[ReferenceWin3209622Webview2IdlCreatecorewebview2environmentwithoptions]: ../reference/win32/0-9-622/webview2-idl.md#createcorewebview2environmentwithoptions "CreateCoreWebView2EnvironmentWithOptions - Globals | Microsoft Docs"  
[ReferenceWin32Webview2IdlGetavailablecorewebview2browserversionstring]: /microsoft-edge/webview2/reference/win32/webview2-idl#getavailablecorewebview2browserversionstring "GetAvailableCoreWebView2BrowserVersionString - Globals | Microsoft Docs"  

[ReferenceWinforms09515MicrosoftWebWebview2WinformsWebview2Ensurecorewebview2async]: ../reference/winforms/0-9-515/microsoft-web-webview2-winforms-webview2.md#ensurecorewebview2async "EnsureCoreWebView2Async - Microsoft.Web.WebView2.WinForms.WebView2 class | Microsoft Docs"  

[ReferenceWpf09515MicrosoftWebWebview2WpfCorewebview2creationpropertiesCorewebview2creationproperties]: ../reference/wpf/0-9-515/microsoft-web-webview2-wpf-corewebview2creationproperties.md#corewebview2creationproperties "CoreWebView2CreationProperties - Microsoft.Web.WebView2.Wpf.CoreWebView2CreationProperties class | Microsoft Docs"  
[ReferenceWpf09515MicrosoftWebWebview2WpfWebview2Creationproperties]: ../reference/wpf/0-9-515/microsoft-web-webview2-wpf-webview2.md#creationproperties "CreationProperties - Microsoft.Web.WebView2.Wpf.WebView2 class | Microsoft Docs"  
[ReferenceWpf09515MicrosoftWebWebview2WpfWebview2Ensurecorewebview2async]: ../reference/wpf/0-9-515/microsoft-web-webview2-wpf-webview2.md#ensurecorewebview2async "EnsureCoreWebView2Async -Microsoft.Web.WebView2.Wpf.WebView2 class | Microsoft Docs"  

[DeployEdgeMicrosoftEdgeChannels]: /deployedge/microsoft-edge-channels "Overview of the Microsoft Edge channels | Microsoft Docs"  

[Webview2Installer]: https://developer.microsoft.com/microsoft-edge/webview2 "WebView2 Installer"  

[InstallerSample]: https://aka.ms/wv2installersample "WebView2 Installer Sample"  

[DownloadNonstableEdge]: https://www.microsoftedgeinsider.com/download "Download Microsoft Edge Insider Channels"  

[GithubMicrosoftedgeWebviewfeedback]: https://github.com/MicrosoftEdge/WebViewFeedback "WebView Feedback | GitHub"  
