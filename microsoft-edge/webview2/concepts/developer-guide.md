---
description: Practices to enhance your WebView2 experience
title: WebView2 developer guide
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/02/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, edge, best practices  
---
# WebView2 developer guide  

This article outlines important practices for you to work on WebView2 that the WebView2 team want you to know.  

## Pre-requisites  

Read the getting started guide for your platform.  

*   [C/C++][Webview2GettingstartedWin32]  
*   [Windows Forms][Webview2GettingstartedWinforms]  
*   [WinUI 3][Webview2GettingstartedWinui]  
*   [WPF][Webview2GettingstartedWpf]  
    
## Intended audience  

A WebView2 developer  

## Guidelines  

Complete all of the following things.  

*   Use Evergreen mode instead of Fixed Version \(Bring-Your-Own\) mode.  Consider using the Evergreen runtime.  It provide the latest features and security patches for your WebView2 app.  
    *   When you choose Evergreen mode, ensure the Evergreen runtime is installed before you try to access your WebView2 app.  For more information, navigate to [Deploying the Evergreen WebView2 Runtime][Webview2ConceptsDistributionDeployingEvergreenWebview2Runtime].  
    *   When you choose Evergreen mode, ensure you run compatibility testing.  For more information, navigate to [Stay compatible in Evergreen mode][Webview2ConceptsDistributionStayCompatibleEvergreenMode].  
    *   When you choose Evergreen mode, ensure you use Query Interface in Win32 C/C++ or try-catch in .Net and WinUI when using newer WebView2 APIs with Evergreen runtime.  APIS exposed in newer releases may not work with older Evergreen runtime releases.  For more information, navigate to [Determine WebView2 Runtime requirement][Webview2ConceptsVersioningDetermineWebview2RuntimeRequirement].  
    *   Whenever a new version is available, it is downloaded automatically.  By default the current Evergreen runtime instance continues to run the existing version until it is restarted or quit.  Unless you specify otherwise, the existing Evergreen runtime and the new Evergreen runtime continue to reside locally.  Subscribe to the `new version available` event to notify you when a new version is available.  The notification helps you handle the update properly, such as restarting your app.  
*   If you choose Fixed Version mode, patch your binaries often to reduce security issues \(always 3rd-party content is untrusted\).  For more information, navigate to [Fixed Version distribution mode][Webview2ConceptsDistributionFixedVersionDistributionMode].  
*   A `User Data Folder` is created for your app and contains user data including cookies, credentials, permissions, and so on.  After it is created, your app is responsible for managing and cleaning up the `User Data Folder`.  For more information, navigate to [Managing the User Data Folder][Webview2ConceptsUserdatafolder].  
*   Follow the existing WebView2 security practices.  For more information, navigate to [Best practices for developing secure WebView2 applications][Webview2ConceptsSecurity].  
*   [perf??? tips and tricks][Webview2AnotherPerfArticle]  

<!-- links -->  

[Webview2AnotherPerfArticle]: ../another-perf-article.md "Another perf??? tips and tricks | Microsoft Docs"  
[Webview2ConceptsDistributionDeployingEvergreenWebview2Runtime]: ../concepts/distribution.md#deploying-the-evergreen-webview2-runtime "Deploying the Evergreen WebView2 Runtime - Distribution of apps using WebView2 | Microsoft Docs"  
[Webview2ConceptsDistributionFixedVersionDistributionMode]: ../concepts/distribution.md#fixed-version-distribution-mode "Fixed Version distribution mode - Distribution of apps using WebView2 | Microsoft Docs"  
[Webview2ConceptsDistributionStayCompatibleEvergreenMode]: ../concepts/distribution.md#stay-compatible-in-evergreen-mode "Stay compatible in Evergreen mode - Distribution of apps using WebView2 | Microsoft Docs"  
[Webview2ConceptsSecurity]: ../concepts/security.md "Best practices for developing secure WebView2 applications | Microsoft Docs"  
[Webview2ConceptsUserdatafolder]: ../concepts/userdatafolder.md "Managing the User Data Folder | Microsoft Docs"  
[Webview2ConceptsVersioningDetermineWebview2RuntimeRequirement]: ../concepts/versioning.md#determine-webview2-runtime-requirement "Determine WebView2 Runtime requirement - Understand WebView2 SDK versions | Microsoft Docs"  
[Webview2GettingstartedWin32]: ../gettingstarted/win32.md "Getting started with WebView2 | Microsoft Docs"  
[Webview2GettingstartedWinforms]: ../gettingstarted/winforms.md "Getting started with WebView2 in Windows Forms | Microsoft Docs"  
[Webview2GettingstartedWinui]: ../gettingstarted/winui.md "Getting started with WebView2 in WinUI 3 (Preview) | Microsoft Docs"  
[Webview2GettingstartedWpf]: ../gettingstarted/wpf.md "Getting started with WebView2 in WPF | Microsoft Docs"  

[MicrosoftstreamMsitVideo8855a1ff0400988a1905F1eb62608da9]: https://msit.microsoftstream.com/video/8855a1ff-0400-988a-1905-f1eb62608da9 " | Microsoft Stream"  
