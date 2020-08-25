---
description: Native messaging documentation
title: Native Messaging
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/26/2020
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---

# Native Messaging  

Extensions can communicate with a native Win32 application installed on user’s device using message passing APIs. The native application host exchange messages with the extension using standard input and standard output. The extensions using native messaging are installed on the Edge browser like any other extension from Microsoft Edge add-ons store. However, the native application is not installed or managed by the browser. Either both the extension and the host are packaged together and when the user installs the package, both are installed, or the extension is installed by the user from the Store and the extension prompts the user to install the host. 

Refer to the steps below to setup your extension for using native messaging to communicate with a native application. 

### Extension manifest

Extensions can use native messaging by adding *nativeMessaging* permission in the extension’s **manifest.json** file. Below is an example of extension manifest.json:

```xml
    {
          "name": "Native Messaging Example",
          "version": "1.0",
          "manifest_version": 2, 
          "description": "Send a message to a native application.",
          "app": { 
              "launch": { 
                  "local_path": "main.html" } 
                 }, 
          "icons": { 
              "128": "icon-128.png"}, 
          "permissions": ["nativeMessaging"] 
    }
```

### Native messaging host
    
Native applications must provide a **native messaging host manifest** file that contains the path to the host executable, the method of communication with the extension, and a list of extensions that it can communicate with. To register a native messaging host, the application must install the manifest file that defines the native messaging host configuration. The browser reads and validates the app manifest but never installs or manages them. 

The host manifest must be a valid json file containing the following fields: 
    
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




| Name | Description |  
|:--- |:--- |  
| `name` | Name of the native messaging host. Clients pass this string to `runtime.connectNative` or `runtime.sendNativeMessage`.  This name must only contain lowercase alphanumeric characters, underscores, and dots.  The name must not start or end with a dot, and a dot must not be followed by another dot. |  
| `description` | Short application description. |  
| `path` | Path to the native messaging host binary. On Windows, the path may be relative to the directory in which the manifest file is located. On macOS and Linux, the path must be absolute. The host process is started with the current directory set to the directory that contains the host binary. For example, if this parameter is set to `C:\Application\nm_host.exe`, the binary is started using the current directory `C:\Application\`. |  
| `type` | Type of the interface used to communicate with the native messaging host.  Currently there is only one possible value for this parameter: `stdio`.  This value indicates that Edge should use `stdin` and `stdout` to communicate with the host. |  
| `allowed_origins` |  List of extensions that may have access to the native messaging host.  Enable your application to identify and communicate with an extension, set `allowed_origins` to `chrome-extension://[Microsoft-Catalog-extensionID]` in your native messaging host manifest file. |  


> [!NOTE]
> How do I generate the extension ID?
>
> While you are developing the native messaging host and extension, you can sideload the extension to test native messaging. Visit "edge://extensions" page and enable **Developer mode** toggle button. Then, load your extension by clicking on the **Load unpacked** button. Once you load the extension, you will be able to see the extension id on the same page. You can use this ID to specify in “allowed_origins” when you install the host manifest file. You may then test your native messaging host and extension. 


### Native messaging host location 

The location of the host manifest file is platform dependent.
    
1. On **Windows**, the manifest file may be located anywhere in the file system. The application installer must create registry key and set default value of that key to the full path to the manifest file.
    
    `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application`  
    or  
    `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application`,  
    
    You may use the following command as an example: 
    
    ```shell
    REG ADD "HKCU\Software\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application" /ve /t REG_SZ /d "C:\path\to\nmh-manifest.json" /f
    ```  
    
    or using the following .reg file:  
    
    ```shell
    Windows Registry Editor Version 5.00
    [HKEY_CURRENT_USER\Software\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application]
    @="C:\\path\\to\\nmh-manifest.json"
    ```  
    When Microsoft Edge looks for native messaging hosts, the 32-bit registry is queried first, then the 64-bit registry. If you are running it as part of batch script, ensure that you are running it in an admin command prompt.


2. On **macOS**, the system-wide native messaging hosts are looked up at a fixed location, while the user-level native messaging hosts are looked up in a subdirectory within the user profile directory called `NativeMessagingHosts`.

    Microsoft Edge on macOS \(system-wide\) :  
    `/Library/Microsoft/Edge/NativeMessagingHosts/com.my_company.my_application.json`

    Microsoft Edge on macOS \(user-specific, default path\):  
    `~/Library/Application Support/Microsoft Edge <ChannelName>/NativeMessagingHosts/com.my_company.my_application.json`

    `ChannelName` may be Canary, Dev, or Beta. For Stable channel, only `Microsoft Edge` should be used, `ChannelName` is not required.


3. On **Linux** the paths can be found here: 

    Microsoft Edge on macOS \(system-wide\) :
    `~/.config/microsoft-edge/NativeMessagingHosts`

    Microsoft Edge on macOS \(user-specific, default path\): 
    `/etc/opt/edge/native-messaging-hosts`


> [!NOTE]
> Please ensure that you provide read permission to the manifest file and execute permission to the host executable, otherwise it may not work. Use chmod +r host.json and chmod +x host.


> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/extensions/nativeMessaging).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  


<!-- image links -->  

<!-- links -->  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies
