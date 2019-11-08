---
description: Process of porting Chrome extension to Microsoft Edge.
title: Microsoft Edge (Chromium) Extensions
author: MSEdgeTeam
ms.author: shahina
ms.date: 11/08/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, extensions development, browser extensions, addons, partner center, developer
---

# Port Chrome Extension To Microsoft Edge  

The process of porting a Chrome Extension to Microsoft Edge is very straightforward. Extensions written for Chromium, in most cases, run on Microsoft Edge with minimal changes.  The Extension APIs and manifest keys supported by Chrome are code-compatible with Microsoft Edge.  However, Microsoft Edge does not support the following Extension APIs: 

- **chrome.gcm**
- **chrome.identity.getAccounts**
- **chrome.identity.getAuthToken**
- **chrome.identity.getProfileUserInfo**
- **chrome.instanceID**

**Payments**: Microsoft Edge does not directly support an Extension that uses [Chrome Web Store payments](https://developer.chrome.com/webstore/one_time_payments) due to the requirement to use the **identity.getAuthtoken** request to get the token for signed-in users to send the REST-based licensing API request.  Microsoft Edge does not support the **getAuthtoken** request, so this flow does not work.  
 
To port your Chrome Extension, follow these steps:  
1.	Review the Chrome Extension APIs used in your Extensions.  If you are using features or APIs that are not supported by Microsoft Edge, you may not be able to port your Extension.  
> [!Note]
> The **getAuthToken** API does not work with Microsoft Edge, however you may use **launchWebAuthFlow** to fetch an OAuth2 token to authenticate users.  

2.	If you are using “**Chrome**” in the name or description of your Extension, re-brand the Extension for **Microsoft Edge**.  It is **mandatory** to pass the certification process. 
 
3.	To test your Extension on Microsoft Edge, turn on “Developer mode > Load unpacked” and then select the directory in which your Extension files live.  

4.	If you have any issues, debug your Extensions in Microsoft Edge by using the DevTools, or contact us ExtensionPartnerOps@microsoft.com. 

5.	Your Extension is now ready to be published on the Microsoft Edge Addons catalog (Edge Addons)!  
> [!NOTE]
> If your Extension exchanges messages with a native application using **chrome.runtime.connectNative** API, ensure that you set **allowedorigins** to “**chrome-extension://[Microsoft-Catalog-extensionID]**” in your native messaging host manifest file. This enables the app to identify the Extension.   
