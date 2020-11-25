---
description: Process of porting Chrome extension to Microsoft Edge.
title: Port Chrome extension To Microsoft Edge
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/25/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---
# Port your extension  

Microsoft Edge helps you port your Chrome extension with minimal changes.  The Extension APIs and manifest keys supported by Chrome are code-compatible with Microsoft Edge.  For a list of APIs supported by Microsoft Edge, navigate to [API support][ExtensionApiSupport].  

To port your Chrome extension, complete the following steps.  

1.  Review the Chrome extension APIs used in your extensions with the [supported APIs][ExtensionApiSupport] list.  
    
    > [!NOTE]
    > If your extension uses APIs that are not supported by Microsoft Edge, it may not port directly.  
    
1.  If the name `Chrome` is being used in either the name or the description of the extension, rebrand the extension for `Microsoft Edge`.  This step is required to pass the certification process.  
1.  Test your extension to check if it works in Microsoft Edge by [sideloading your extension][ExtensionsGettingStartedExtensionSideloading].  
1.  If you face any issues, you may debug your extensions in Microsoft Edge by using the DevTools, or [contact us][mailtoExtensionMicrosoft].  
1.  Follow the [publishing guidelines][ExtensionsPublishPublishExtension] to publish your extension on Microsoft Edge Add-ons store.  
    
    > [!NOTE]
    > If the extension exchanges messages with a native app using `chrome.runtime.connectNative` API, ensure that you set `allowed_origins` to `extension://[Microsoft-Catalog-extensionID]` in your native messaging host manifest file.  This enables the app to identify the extension.  
    
## Next steps  

Once your extension package is ready to be published to Microsoft Edge add-ons store, [create a developer account][ExtensionsPublishCreateDevAccount] and [publish your extension][ExtensionsPublishPublishExtension].  

<!-- links -->  

[ExtensionApiSupport]: ./api-support.md "API support | Microsoft Docs"  
[ExtensionsGettingStartedExtensionSideloading]: ../getting-started/extension-sideloading.md "Sideload your extension | Microsoft Docs"  
[ExtensionsPublishCreateDevAccount]: ../publish/create-dev-account.md "Developer registration | Microsoft Docs"  
[ExtensionsPublishPublishExtension]: ../publish/publish-extension.md "Publish your extension | Microsoft Docs"  

[ChromeDeveloperWebStorePayments]: https://developer.chrome.com/webstore/one_time_payments "One-Time Payments | Chrome Developer"  

[mailtoExtensionMicrosoft]: mailto:ext_dev_support@microsoft.com "ext_dev_support@microsoft.com"  
