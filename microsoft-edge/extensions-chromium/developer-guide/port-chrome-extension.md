---
description: Process of porting Chrome Extension to Microsoft Edge.
title: Port Chrome Extension To Microsoft (Chromium)Edge
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/05/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---

# Port Chrome Extension To Microsoft \(Chromium\) Edge  

The process of porting a Chrome Extension to Microsoft Edge is very straightforward.  Extensions written for Chromium, in most cases, run on Microsoft Edge with minimal changes.  The Extension APIs and manifest keys supported by Chrome are code-compatible with Microsoft Edge.  However, Microsoft Edge does not support the following Extension APIs:  

*   `chrome.gcm`  
*   `chrome.identity.getAccounts`  
*   `chrome.identity.getAuthToken`  
*   `chrome.identity.getProfileUserInfo`  
*   `chrome.instanceID`  

> [!IMPORTANT]
> **Payments**:  Microsoft Edge does not directly support an Extension that uses [Chrome Web Store payments][ChromeDeveloperWebStorePayments] due to the requirement to use the `identity.getAuthtoken` request to get the token for signed-in users to send the REST-based licensing API request.  Microsoft Edge does not support the `getAuthtoken` request, so this flow does not work.  

To port your Chrome Extension, follow these steps:  

1.  Review the Chrome Extension APIs used in your Extensions.  If you are using features or APIs that are not supported by Microsoft Edge, you may not be able to port your Extension.  
    
    > [!NOTE]
    > The `getAuthToken` API does not work with Microsoft Edge, however you may use `launchWebAuthFlow` to fetch an OAuth2 token to authenticate users.  
    
1.  If you are using "`Chrome`" in the name or description of your Extension, re-brand the Extension for `Microsoft Edge`.  You must pass the certification process.  
    
1.  Test your Extension to check if it works in Microsoft Edge.  The first step to do this is to ensure that you have Extension developer features turned on.  This enables you to side load Extension files in Microsoft Edge so that you are able to test your Extension while developing it.  
    
1.  If you have any issues, debug your Extensions in Microsoft Edge by using the DevTools, or contact us ExtensionPartnerOps@microsoft.com.  
    
1.  Now your Extension is finally polished up and ready to be packaged.  If you wish to prepare for submission to the Microsoft Edge Addons catalog \(Microsoft Edge Addons\), you do not need to package your Extension.  Further, follow our [publishing guidelines][ExtensionsPublishExtension] to publish your Extension on Microsoft Edge Addons.  
    
    > [!NOTE]
    > If your Extension exchanges messages with a native application using `chrome.runtime.connectNative` API, ensure that you set `allowedorigins` to "`extension://[Microsoft-Catalog-extensionID]`" in your native messaging host manifest file.  This enables the app to identify the Extension.  

<!-- image links -->  

<!-- links -->  

[ExtensionsPublishExtension]: ../publish/publish-extension.md "Publish An Extension"  

[ChromeDeveloperWebStorePayments]: https://developer.chrome.com/webstore/one_time_payments "One-Time Payments - Google Chrome"  
