---
description: Distribution options when releasing an app using Microsoft Edge WebView2
title: Distribution of Microsoft Edge WebView2 Application
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/01/2020
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: IWebView2, IWebView2WebView, webview2, webview, wpf apps, wpf, edge, ICoreWebView2, ICoreWebView2Host, browser control, edge html
---

# Distribution of applications using WebView2  

The WebView2 control utilizes the Microsoft Edge \(Chromium\) platform.  When packaging and distributing your app, make sure a copy of the platform or the WebView2 Runtime is present before the app starts.  The following page describes how you \(the developer\) are able to ensure that the WebView2 Runtime is installed and use of the two distribution modes for your WebView2 application:  [Evergreen](#evergreen-distribution-mode) and [Fixed version](#fixed-version-distribution-mode).  

## Evergreen distribution mode  

The evergreen distribution mode ensures that your app is taking advantage of the latest features and security updates.  The evergreen distribution mode has the following characteristics.  

*   The web platform updates automatically without additional effort from you.  
*   All applications that leverage the evergreen distribution mode use a shared copy of the platform binaries, which saves disk space.  

There are multiple channels WebView2 that applications may use as the web platform.  By default, WebView2 targets the most stable channel available on the device that meets the minimum version requirement of the WebView2 SDK.  The following channels are listed in order from most to least stable channel.  

1.  WebView2 Runtime \(Preview\)  
1.  Microsoft Edge Beta Channel  
1.  Microsoft Edge Dev Channel  
1.  Microsoft Edge Canary Channel    

> [!NOTE]
> The evergreen distribution model is recommended for most developers.  

> [!IMPORTANT]
> Microsoft Edge Stable Channel is not a valid target for WebView2, and the reasons are described later.  

For more information about versioning, see [Versioning][ConceptsVersioning] and [Globals][ReferenceWin3209538WebviewIdl].  

### Understand the WebView2 Runtime and installer (Preview)  

Microsoft Edge Stable Channel may not be installed on all user machines where your application runs.  Instead of requiring that users install Microsoft Edge, your application may use the Evergreen WebView2 Runtime and Installer \(Preview\).  The WebView2 Runtime is a customized copy of the Microsoft Edge binaries that is used to run your WebView2 applications.  When the WebView2 Runtime is installed, users are not able to use it as a normal browser.  For example, there is no desktop shortcut, start menu entry, users are not able to open a browser window using the Runtime binaries, and so on.  All Evergreen WebView2 applications on the device may use a single Evergreen WebView2 Runtime installation.  

Today during the preview, the Evergreen WebView2 Runtime and Microsoft Edge Dev Channel are updated at the same time and have the same build.  In the future during the Preview, the WebView2 Team plans to update the WebView2 Runtime and match the same build as the Microsoft Edge Beta Channel.  In the future when WebView2 reaches General Availability \(GA\), the WebView2 Team plans to update the WebView2 Runtime and match the same build as the Microsoft Edge Stable Channel.  After GA, applications should use the WebView2 Runtime in production.  

> [!IMPORTANT]
> Do not ship WebView2 applications in production during the preview.  

Developers are recommended to ensure that the Evergreen WebView2 Runtime is installed before application launches. Below is an example workflow.  

1.  Download the latest [Evergreen WebView2 Runtime Installer][Webview2Installer].  
1.  Include the installer in your application installer or updater.  
1.  During your application installation or update, check if the Evergreen WebView2 Runtime is already installed on the user machine, by using the [GetAvailableCoreWebView2BrowserVersionString](../reference/win32/0-9-538/webview2-idl.md#getavailablecorewebview2browserversionstring) API and checking whether the versionInfo is NULL. If not installed, the application installer/updater can silently invoke the runtime installer from an elevated process or command prompt with `MicrosoftEdgeWebView2RuntimeInstallerX64.exe /silent /install`. 

Depending on your scenario, you may need to change the above workflow.  For example, your application installer may download the Evergreen WebView2 Runtime Installer instead of including it in your application package.  

> [!NOTE]
> Both the WebView2 Runtime and WebView2 Runtime installer are in preview.  The preview has a limited initial scope and is only available as a standalone, per-machine install on Windows 10 on x64.  In the future, support for Windows 7, x86, and ARM64 is planned.  

### Best practices for using WebView2 Runtime and non-stable Microsoft Edge channels  

Consider the following recommendations during the preview.  

*   Make sure to use the [Evergreen WebView2 Runtime and Installer][Webview2Installer] to develop or test your packaging and distribution pipeline.  In the future, your production application should include the installer.  
*   For developing your application, you may use the Evergreen WebView2 Runtime.  However, as the runtime shifts from the Dev Channel to the Beta Channel or Stable Channel, the runtime build number may not meet the most recent preview WebView2 SDK minimum version requirements.  If you wish to use the most recent SDK, install the Microsoft Edge Canary channel to ensure a compatible build is available on the device.  For more information about versioning, see [Versioning][ConceptsVersioning].  
*   To test your web content for compatibility with changes to the platform not available in the Stable Channel, use the appropriate non-Stable Channel as required.  

## Fixed version distribution mode  

> [!NOTE]
> The fixed version distribution model is currently not available.  

For constrained environments, there are plans to support a fixed version \(previously named bring-your-own\) distribution mode.  The fixed version distribution mode allows you to select and package a specific version of the WebView2 Runtime.  The fixed version distribution mode allows you to control which version of the WebView2 Runtime is used by your application, and when user machines are updated.  The fixed version distribution mode does not receive any automatic updates, and you should plan to manually apply updates.  

<!-- links -->  

[ConceptsVersioning]: ./versioning.md "Understanding browser versions and WebView2 | Microsoft Docs"  
[ReferenceWin3209538WebviewIdl]: ../reference/win32/0-9-538/webview2-idl.md  "Globals | Microsoft Docs"  

[Webview2Installer]: https://developer.microsoft.com/microsoft-edge/webview2 "WebView2 Installer"  
