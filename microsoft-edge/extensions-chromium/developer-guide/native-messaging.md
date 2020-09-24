---
description: Native messaging documentation
title: Native Messaging
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/15/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---

# Native messaging  

Extensions can communicate with a native Win32 application installed on a user’s device using message passing APIs. The native application host can send and receive messages with extensions using standard input and standard output. Extensions using native messaging are installed in Microsoft Edge similar to any other extension. However, native applications are not installed or managed by Microsoft Edge.

To acquire the extension and native application host, you can:

1. Package the extension and the host together. When users install the package, both the extension and the host are installed.
1. Install the extension from the [Microsoft Edge Add-ons store][EdgeAddons], and have your extension prompt users to install the host. 

Refer to the steps below to setup your extension to send and receive messages with native application hosts.

### Step 1: Add permissions to the extension manifest

Add the nativeMessaging permission to the extension’s **manifest.json** file. Below is an example of manifest.json:

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

### Step 2: Create your native messaging host manifest file
    
Native applications must provide a **native messaging host manifest** file. This manifest file contains the path to the native messaging host executable, the method of communication with the extension, and a list of allowed extensions it can communicate with. Browsers read and validate the native messaging host manifest, but it’s never installed or managed by the browser. 
The host manifest must be a valid json file containing the following fields.

    
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
| `description` | Brief description of the application. |  
| `path` | Path to the native messaging host binary. On Windows devices, you may use relative paths to the directory that contains the manifest file. On macOS and Linux, the path must be absolute. The host process is started with the current directory set to the directory that contains the host binary. For example, if this parameter is set to `C:\Application\nm_host.exe`, the binary is started using the current directory `C:\Application\`. |  
| `type` | Type of the interface used to communicate with the native messaging host.  Currently there is only one possible value for this parameter: `stdio`.  This value indicates that Edge should use `stdin` and `stdout` to communicate with the host. |  
| `allowed_origins` |  List of extensions that may have access to the native messaging host.  Enable your application to identify and communicate with an extension, set `allowed_origins` to `chrome-extension://[Microsoft-Catalog-extensionID]` in your native messaging host manifest file. |  


While developing, you can sideload your extension to test native messaging with the host by:
1. Navigating to `edge://extensions`, and then turning on the Developer mode toggle button. 
1. Choose Load unpacked, and then select your extension package to sideload.  
1. Choose OK.
1. Verify the `edge://extensions` page now lists your extension. 
1. Copy the key from ID from the extension listing on the page.

When you are ready to distribute your extension to users, publish your extension to the Microsoft Edge add-ons store [publish documentation link]. The extension ID of the published extension may be different to the ID used while sideloading your extension. If the ID changed, update `allowed_origins` in the host manifest file with the ID of your published extension. 



### Step 3: Copy the native messaging host manifest file to your system

The final step involves copying the native messaging host manifest file to your computer, and ensuring it’s configured correctly. Follow the steps below to ensure the native messaging host file is placed in the expected location because it varies by platform.
    
**Windows**. The manifest file may be located anywhere in the file system. The application installer must create registry key and set default value of that key to the full path to the manifest file. The following commands are examples of registry keys.
    
`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application`  
    or
`HKEY_CURRENT_USER\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application`,  
    
    Run the following command at a command prompt to add a registry key to the folder with the manifest file.
    
    ```shell
    REG ADD "HKCU\Software\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application" /ve /t REG_SZ /d "C:\path\to\nmh-manifest.json" /f
    ```  
    
    Alternatively, copy the following command to a .reg file and run it to add the registry key. 
    
    ```shell
    Windows Registry Editor Version 5.00
    [HKEY_CURRENT_USER\Software\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application]
    @="C:\\path\\to\\nmh-manifest.json"
    ```  
  Microsoft Edge queries the 32-bit registry first, and then the 64-bit registry to identify native messaging hosts. If you run the above .reg file as part of a batch script, ensure you run it using an administrator command prompt.


**macOS**. The manifest file must be stored as follows:

1. System-wide native messaging hosts, which are available to all users, are stored in a fixed location. For example, the manifest file must be stored in
    `/Library/Microsoft/Edge/NativeMessagingHosts/com.my_company.my_application.json`

1. User-specific native messaging hosts, which is available to the current user only, are located in the NativeMessagingHosts  subdirectory in the user profile directory. For example, the manifest file must be stored in  
    `~/Library/Application Support/Microsoft Edge <ChannelName>/NativeMessagingHosts/com.my_company.my_application.json`

    where `ChannelName` may be Canary, Dev, or Beta. When using the Stable channel, `ChannelName` is not required.


**Linux** The manifest file must be stored as follows:

1. System-wide native messaging hosts:
    `~/.config/microsoft-edge/NativeMessagingHosts`

1. User-specific native messaging hosts: 
    `/etc/opt/edge/native-messaging-hosts`


> [!NOTE]
> Ensure that you provide read permissions on the manifest file, and execute permissions on the host executable.


> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/extensions/nativeMessaging).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  


<!-- image links -->  

<!-- links -->  

[EdgeAddons]: https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home "Microsoft Edge Add-ons"
[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies
