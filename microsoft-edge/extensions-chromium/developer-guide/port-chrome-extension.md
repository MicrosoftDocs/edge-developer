---
description: Process of porting Chrome extension to Microsoft Edge.
title: Port Chrome extension To Microsoft Edge
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/15/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---

# Port your extension

With the new Microsoft Edge, you can directly port your Chrome extension with minimal changes. The Extension APIs and manifest keys supported by Chrome are code-compatible with Microsoft Edge. Refer to the supported APIs documentation to see the list of [supported APIs][APISupport] by Microsoft Edge.  


To port your Chrome extension, follow these steps:  

1.  Review the Chrome extension APIs used in your extensions with the [supported APIs][APISupport] list. If the extension is using APIs unsupported by Microsoft Edge, you may not be able to port your extension directly.  
    
1.  If the name `Chrome` is being used in either the name or the description of the extension, rebrand the extension for `Microsoft Edge`.  This step is needed to pass the certification process.  
    
1.  Test your extension to check if it works in Microsoft Edge by [sideloading your extension][ExtensionSideloading].
    
1.  If you face any issues, you may debug your extensions in Microsoft Edge by using the DevTools, or [contact us][mailtoExtensionMicrosoft].  
    
1. Follow our [publishing guidelines][PublishExtension] to publish your extension on Microsoft Edge Add-ons store.  
    
    > [!NOTE]
    > If the extension exchanges messages with a native application using `chrome.runtime.connectNative` API, ensure that you set `allowed_origins` to "`extension://[Microsoft-Catalog-extensionID]`" in your native messaging host manifest file.  This enables the app to identify the extension.



## Next steps

Once your extension package is ready to be published to Microsoft Edge add-ons store, [create a developer account][DeveloperRegistration] and [publish your extension][PublishExtension].


<!-- image links -->  

<!-- links -->  

[APISupport]: ./api-support.md "API support"

[DeveloperRegistration]: ../publish/create-dev-account.md "Developer registration"

[ExtensionSideloading]: ../getting-started/extension-sideloading.md "Sideload your extension"

[PublishExtension]: ../publish/publish-extension.md "Publish your extension"  

[mailtoExtensionMicrosoft]: mailto:ext_dev_support@microsoft.com "ext_dev_support@microsoft.com"  

[ChromeDeveloperWebStorePayments]: https://developer.chrome.com/webstore/one_time_payments "One-Time Payments - Google Chrome"  
