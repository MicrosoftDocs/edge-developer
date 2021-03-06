---
description: Learn about best practices to use when developing your WebView2 application.
title: WebView2 development best practices  
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/04/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: webview
keywords: WebView2, webview2, WebView, webview, edge, best practices  
---
# WebView2 development best practices  

Every development team follows different practices when building their application. When you build WebView2 applications, there are best practices we recommend you follow. This article outlines those recommendations and best practices for you when building production based WebView2 applications.


## Use Evergreen WebView2 Runtime  

We generally recommend using the Evergreen WebView2 Runtime instead of the Fixed Version Runtime.  The Evergreen WebView2 Runtime updates automatically and includes the latest features and security patches available to your WebView2 application. The Evergreen WebView2 Runtime also requires less storage space on the disk.

Ensure the Evergreen WebView2 Runtime is installed before using your WebView2 application.  For more information, navigate to [Deploying the Evergreen WebView2 Runtime][Webview2ConceptsDistributionDeployingEvergreenWebview2Runtime].  

## Run regular compatibility tests

When using the Evergreen WebView2 Runtime, ensure you run regular compatibility tests. Because the runtime is automatically updated, you'll want to ensure that your WebView2 application performs as expected.  For more information, navigate to [Stay compatible in Evergreen mode][Webview2ConceptsDistributionStayCompatibleEvergreenMode].  

## Ensure APIs are supported by the installed WebView2 Runtime

WebView2 applications need both a Webview2 SDK, and a WebView2 Runtime installed on the computer to run. Both the SDK and the runtime are versioned. Since APIs are continually being added to WebView2, new versions of the runtime are also released to support the new APIs. You'll need to ensure that the APIs used by your WebView2 application are supported by the WebView2 Runtime that's installed on the computer. 

If you use the Evergreen WebView2 Runtime, consider the connectivity scenarios of your users. Some users may not be continually connected to the internet and may not use an updated runtime. When you push an update to your WebView2 application, the application may break because it uses newer APIs that are not available in the installed runtime. 
 
To solve this situation, you can test for the availability of the APIs in the installed runtime, before making a call to the API. To test for API availability in the installed runtime, use:
* The `queryinterface` in C/C++. For more information, navigate to <!--LINK-->
* A try/catch block in .Net or WinUI, as displayed in the following code sample. 

```csharp
    /// Add code snippet that demonstrates how to use the try/catch block
```
    
For more information, navigate to [Determine WebView2 Runtime requirement][Webview2ConceptsVersioningDetermineWebview2RuntimeRequirement].  

## Update the Fixed Version Runtime  

Depending on your environment, work stoppage due to applications going offline may significantly impact your business.  For example, certain financial or medical applications may have high availability requirements. In these scenarios, you may be required to use the Fixed Version Runtime to control updates to your application. If you use the Fixed Version Runtime, ensure you update your runtime regularly to reduce any potential security risk. When using 3rd-party content in Webview2 applications, always consider the content untrusted.  For more information, navigate to [Fixed Version distribution mode][Webview2ConceptsDistributionFixedVersionDistributionMode].  

## Manage new versions  

Whenever a new version of the Evergreen WebView2 Runtime has been downloaded to the device, running WebView2 applications continue to hold onto the browser process of the previous runtime. To use the new version of the runtime, you'll need to restart or quit the running application. The benefits of this model are any running WebView2 applications won't break and there's no additional memory allocated to a new browser process. A disadvantage of this model is there are additional binaries installed on the disk that won't get cleaned up.

To take action when a new version is available, such as notifying the user to restart the application, you can use the `new version available` event in your .Net and C++ code. If your code handles restarting the application, consider saving the user state before the WebView2 application exits. The following code sample shows how you can use the `new version available` event.

```cpp
    /// Add code snippet that demonstrates how to use the new version available event
```

```csharp
    /// Add code snippet that demonstrates how to use the new version available event

```

## Manage the lifetime of the user data folder 
When your WebView2 application is installed, a user data folder is created, and contains user data such as cookies, credentials, permissions, and so on.  After the folder is created, your app is responsible for managing and cleaning up the user data folder.  For more information, navigate to [Managing the User Data Folder][Webview2ConceptsUserdatafolder].  

## Follow recommended WebView2 security best practices 
For any WebView2 application, ensure you follow our recommended WebView2 security best practices.  For more information, navigate to [Best practices for developing secure WebView2 applications][Webview2ConceptsSecurity].  


<!-- links -->  

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
