---
description: Native messaging difference from the Chrome documentation
title: Native Messaging
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/05/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---

# Native Messaging  

Microsoft Edge now allows Extension installed from Microsoft Edge Addons catalog \(Microsoft Edge Addons\) to exchange messages with a native application using message passing APIs.  To enable the feature, you need to make sure of following things while implementing native messaging host of your Native Application.  

> [!NOTE]
> Native messaging is currently not supported on macOS and Linux version of Microsoft Edge.  This feature support is planned to be implemented soon.  

1.  **Native messaging host**:  
    
    In order to register a native messaging host the application must install a manifest file that defines the native messaging host configuration.  Below is an example of the manifest file:  
    
    ```xml
    {
        "name": "com.my_company.my_application",
        "description": "My Application",
        "path": "C:\\Program Files\\My Application\\chrome_native_messaging_host.exe",
        "type": "stdio",
        "allowed_origins": [
            "chrome-extension://knldjmfmopnpolahpmmgbagdohdnhkik/"
        ]
    }
    ```  
    
    The `allowed_origins` field is the list of Extension that should access to the native messaging host.  To enable your Native Application identify and communicate with Microsoft Edge Addons Extension, set `allowedorigins` to `extension://[Microsoft-Catalog-extensionID]` in your native messaging host manifest file.  
    
1.  **Native messaging host location**  
    
    The location of the manifest file depends on the platform.  
    
    On Windows, the manifest file may be located anywhere in the file system.  The application installer must create registry key  
    
    `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application`  
    or  
    `HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts\com.my_company.my_application`,  
    
    and set default value of that key to the full path to the manifest file.  For example, using the following command:  
    
    ```shell
    REG ADD "HKCU\Software\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application" /ve /t REG_SZ /d "C:\path\to\nmh-manifest.json" /f
    ```  
    
    or using the following .reg file:  
    
    ```shell
    Windows Registry Editor Version 5.00
    [HKEY_CURRENT_USER\Software\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application]
    @="C:\\path\\to\\nmh-manifest.json"
    ```  
    
    When Microsoft Edge looks for native messaging hosts, the 32-bit registry is queried first, then the 64-bit registry.  

<!-- image links -->  

<!-- links -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/extensions/nativeMessaging).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies
