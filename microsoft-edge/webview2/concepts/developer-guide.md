---
description: Learn about development best practices to use when developing your WebView2 application.
title: WebView2 development best practices  
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/11/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, edge, best practices  
---
# WebView2 development best practices  

Every development team follows different practices when building their application. When you build WebView2 applications, there are practices we recommend you follow. This article outlines those recommendations and best practices for you when building production-based WebView2 applications.

## Use Evergreen WebView2 Runtime (recommended)  

While Fixed Version has its use cases for apps that have strict compatibility requirements, we generally recommend using the Evergreen WebView2 Runtime.  The Evergreen WebView2 Runtime updates automatically and includes the latest features and security patches available to your WebView2 application. The Evergreen WebView2 Runtime also requires less storage space on the disk.

Ensure the Evergreen WebView2 Runtime is installed before using your WebView2 application.  For more information, navigate to [Deploying the Evergreen WebView2 Runtime][Webview2ConceptsDistributionDeployingEvergreenWebview2Runtime].  

## Run compatibility tests regularly when using the Evergreen WebView2 Runtime

When using the Evergreen WebView2 Runtime, the runtime updates automatically, so you must regularly run compatibility tests. Test the web content in the WebView2 control against the non-stable versions of Microsoft Edge, to ensure that your WebView2 application works as expected.

This guidance is similar to the guidance that we give to web developers. For more information, navigate to [Stay compatible in Evergreen mode][Webview2ConceptsDistributionStayCompatibleEvergreenMode].

## Ensure APIs are supported by the installed WebView2 Runtime

WebView2 applications need both a Webview2 SDK, and a WebView2 Runtime installed on the computer to run. Both the SDK and the runtime are versioned. Since APIs are continually being added to WebView2, new versions of the runtime are also released to support the new APIs. Make sure the APIs that are used by your WebView2 application are supported by the WebView2 Runtime that's installed on the computer. 

If you use the Evergreen WebView2 Runtime, there are some scenarios where the runtime may not be updated to use the latest version. For example, when users don't have internet access, the runtime isn't automatically updated in that environment. Additionally, using some group policies pause WebView2 updates. When you push an update to your WebView2 application, the application may break because it uses newer APIs that aren't available in the installed runtime.   
 
To solve this situation, you can test for the availability of the APIs in the installed runtime, before your code calls the API. This test for newer functionality is similar to other web development best practices that detect supported features before using new web APIs. To test for API availability in the installed runtime, use:  

*   The `queryinterface` in C/C++. 
*   A try/catch block in .NET or WinUI. 
    
For more information, navigate to [Determine WebView2 Runtime requirement][Webview2ConceptsVersioningDetermineWebview2RuntimeRequirement].  

## Update the Fixed Version Runtime  

If you use the Fixed Version Runtime, ensure you update your runtime regularly to reduce any potential security risk. When using 3rd-party content in Webview2 applications, always consider the content untrusted.  For more information, navigate to [Fixed Version distribution mode][Webview2ConceptsDistributionFixedVersionDistributionMode].  

## Manage new versions of the runtime  

When a new version of the Evergreen WebView2 Runtime is downloaded to the device, any WebView2 applications that are running continue to use the previous runtime, until the browser process is released.  This behavior allows applications to run continuously, and prevents the previous runtime from being deleted.  To use the new version of the runtime, you'll need to release all references to the previous WebView2 environment objects or restart your application.  The next time you create a new WebView2 environment, it will use the new version.

When a new version is available, you can automatically take action, such as notifying the user to restart the application.  To detect that a new version is available, you can use the [add_NewBrowserVersionAvailable(Win32)][Webview2ReferenceaddNewBrowserVersionAvailable] or [CoreWebView2Environment.NewBrowserVersionAvailable(.NET)][Webview2ReferenceNewBrowserVersionAvailable] event in your code. If your code handles restarting the application, consider saving the user state before the WebView2 application exits.  

## Manage the lifetime of the user data folder 
WebView2 apps create a user data folder to store data such as cookies, credentials, and permissions.  After creating the folder, your app is responsible for managing the lifetime of the user data folder.  For example, your app must do cleanup when the app is uninstalled.  For more information, navigate to [Managing the user data folder][Webview2ConceptsUserDataFolder].  

## Handle runtime-process failures
Your WebView2 app should listen for and handle the `ProcessFailed` event, so the app can recover from failures of runtime processes that support the WebView2 app process.

WebView2 apps are supported by a collection of runtime processes that run alongside the app process. These supporting runtime processes can fail for various reasons, such as running out of memory, or being terminated by the user. When a supporting runtime process fails, WebView2 notifies the application by raising the [ProcessFailed event][WebView2ProcessFailedEvent].

## Follow recommended WebView2 security best practices 
For any WebView2 application, ensure you follow our recommended WebView2 security best practices.  For more information, navigate to [Best practices for developing secure WebView2 applications][Webview2ConceptsSecurity].  

<!-- links -->  

[Webview2ConceptsDistributionDeployingEvergreenWebview2Runtime]: ../concepts/distribution.md#deploying-the-evergreen-webview2-runtime "Deploying the Evergreen WebView2 Runtime - Distribution of apps using WebView2 | Microsoft Docs"  
[Webview2ConceptsDistributionFixedVersionDistributionMode]: ../concepts/distribution.md#fixed-version-distribution-mode "Fixed Version distribution mode - Distribution of apps using WebView2 | Microsoft Docs"  
[Webview2ConceptsDistributionStayCompatibleEvergreenMode]: ../concepts/distribution.md#stay-compatible-in-evergreen-mode "Stay compatible in Evergreen mode - Distribution of apps using WebView2 | Microsoft Docs"  
[Webview2ConceptsSecurity]: ../concepts/security.md "Best practices for developing secure WebView2 applications | Microsoft Docs"  
[Webview2ConceptsUserDataFolder]: ../concepts/user-data-folder.md "Manage the user data folder | Microsoft Docs"  
[Webview2ConceptsVersioningDetermineWebview2RuntimeRequirement]: ../concepts/versioning.md#determine-webview2-runtime-requirement "Determine WebView2 Runtime requirement - Understand WebView2 SDK versions | Microsoft Docs"  
[Webview2GetStartedWin32]: ../get-started/win32.md "Get started with WebView2 | Microsoft Docs"  
[Webview2GetStartedWinforms]: ../get-started/winforms.md "Get started with WebView2 in Windows Forms | Microsoft Docs"  
[Webview2GetStartedWinui]: ../get-started/winui.md "Get started with WebView2 in WinUI 3 (Preview) | Microsoft Docs"  
[Webview2GetStartedWpf]: ../get-started/wpf.md "Get started with WebView2 in WPF | Microsoft Docs"  

[Webview2ReferenceaddNewBrowserVersionAvailable]: /microsoft-edge/webview2/reference/win32/icorewebview2environment#add_newbrowserversionavailable "add_NewBrowserVersionAvailable | Microsoft Docs"  

[Webview2ReferenceNewBrowserVersionAvailable]: /dotnet/api/microsoft.web.webview2.core.corewebview2environment.newbrowserversionavailable "CoreWebView2Environment.NewBrowserVersionAvailable Event | Microsoft Docs"  
[WebView2ProcessFailedEvent]: /microsoft-edge/webview2/reference/win32/icorewebview2processfailedeventargs "ICoreWebView2ProcessFailedEventArgs | Microsoft Docs"  

