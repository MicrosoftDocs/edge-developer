---
description: Native messaging documentation
title: Native Messaging
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/01/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---

# Native messaging  

Extensions communicate with a native Win32 application installed on a user's device using message passing APIs.  The native application host sends and receives messages with extensions using standard input and standard output.  Extensions using native messaging are installed in Microsoft Edge similar to any other extension.  However, native applications are not installed or managed by Microsoft Edge.  

To acquire the extension and native application host, you have two distribution models.  

*   Package your extension and the host together.  When a user installs the package, both the extension and the host are installed.
*   Install your extension using the [Microsoft Edge Add-ons store][EdgeAddons], and your extension prompts users to install the host.  

To create your extension to send and receive messages with native application hosts, refer to the following steps.  

### Step 1 - Add permissions to the extension manifest  

Add the `nativeMessaging` permission to the **manifest.json** file of the extension.  The following code snippet is an example of **manifest.json**.  

```json
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

### Step 2 - Create your native messaging host manifest file  
    
Native applications must provide a native messaging host manifest file.  the manifest file contains the path to the native messaging host runtime, the method of communication with the extension, and a list of allowed extensions to which it communicates.  The browser reads and validates the native messaging host manifest.  The browser does not install or manage the manifest file.  
    
```json
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

The host manifest file must be a valid JSON file that contains the following keys.  

:::row:::
   :::column span="1":::
      `name`  
   :::column-end:::
   :::column span="2":::
      Specifies the name of the native messaging host.  Clients pass this string to `runtime.connectNative` or `runtime.sendNativeMessage`.  
      
      *   This value must only contain lowercase alphanumeric characters, underscores, and dots.  
      *   This value must not start or end with a dot, and a dot must not be followed by another dot.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      `description`  
   :::column-end:::
   :::column span="2":::
      Describes the application.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      `path`  
   :::column-end:::
   :::column span="2":::
      Specifies the path to the native messaging host binary.  
      
      *   On Windows devices, you may use relative paths to the directory that contains the manifest file.  
      *   On macOS and Linux, the path must be absolute.  
      
      The host process starts with the current directory set to the directory that contains the host binary.  For example \(Windows\), if this parameter is set to `C:\Application\nm_host.exe`, the binary is started using the current directory \(`C:\Application\`\).  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      `type`  
   :::column-end:::
   :::column span="2":::
      Specifies the type of the interface used to communicate with the native messaging host.  This value instructs Microsoft Edge to use `stdin` and `stdout` to communicate with the host.  
      The only acceptable value is `stdio`.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      `allowed_origins` 
   :::column-end:::
   :::column span="2":::
      Specifies the list of extensions that have access to the native messaging host.  To enable your application to identify and communicate with an extension, in your native messaging host manifest file set the following value.  
      
      ```json
      "allowed_origins": ["chrome-extension://{microsoft_catalog_extension_id}"]
      ```  
   :::column-end:::
:::row-end:::  

Sideload your extension to test native messaging with the host.  
To sideload of your extension during development, complete the following steps.  

1.  Navigate to `edge://extensions`, and then turn on the Developer mode toggle button.  
1.  Choose **Load unpacked**, and then select your extension package to sideload.  
1.  Choose **OK**.
1.  Navigate to `edge://extensions` page and verify your extension is listed.  
1.  Copy the key from ID from the extension listing on the page.

When you are ready to distribute your extension to users, publish your extension to the Microsoft Edge add-ons store.  The extension ID of the published extension may differ from the ID used while sideloading your extension.  If the ID changed, update `allowed_origins` in the host manifest file with the ID of your published extension.  

### Step 3 - Copy the native messaging host manifest file to your system  

The final step involves copying the native messaging host manifest file to your computer, and ensuring it is configured correctly.  To ensure your manifest file is placed in the expected location, complete the following the steps.  The location varies by platform.  

#### [Windows](#tab/windows/)  

<a id="copy-manifest-file"></a>  

The manifest file may be located anywhere in the file system.  The application installer must create a registry key and set the default value of that key to the full path of the manifest file.  The following commands are examples of registry keys.  

```text
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application
```

```text
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application
```

:::row:::
   :::column span="1":::
      To add a registry key to the directory with the manifest file.  
      
      1.  Run the following command at a command prompt.  
          
          ```shell
          REG ADD "HKCU\Software\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application" /ve /t REG_SZ /d "C:\path\to\nmh-manifest.json" /f
          ```  
   :::column-end:::
   :::column span="2":::
      An alternative method to add the registry key.  
      
      1.  Copy the following command into a `.reg` file.  
          
          ```shell
          Windows Registry Editor Version 5.00
          [HKEY_CURRENT_USER\Software\Microsoft\Edge\NativeMessagingHosts\com.my_company.my_application]
          @="C:\\path\\to\\nmh-manifest.json"
          ```  
          
      1.  Run the `.reg` file.  
   :::column-end:::
:::row-end:::

Microsoft Edge queries the 32-bit registry first, and then the 64-bit registry to identify native messaging hosts.  If you run the above `.reg` file as part of a batch script, ensure you run it using an administrator command prompt.  

#### [macOS](#tab/macos/)  

<a id="copy-manifest-file"></a>  

To store the manifest file, complete the following steps.  

1.  System-wide native messaging hosts, which are available to all users, are stored in a fixed location.  For example, the manifest file must be stored in following location. 
    
    ```bash
    /Library/Microsoft/Edge/NativeMessagingHosts/com.my_company.my_application.json
    ```  
    
1.  User-specific native messaging hosts, which are available to the current user only, are located in the `NativeMessagingHosts` subdirectory in the user profile directory.  For example, the manifest file must be stored in following location.  
    
    ```bash
    ~/Library/Application Support/Microsoft Edge {Channel_Name}/NativeMessagingHosts/com.my_company.my_application.json
    ```  
    
    The  `{Channel_Name}` in `Microsoft Edge {Channel_Name}` must be one of the following values.  
    
    *   Canary  
    *   Dev  
    *   Beta  

    When using the Stable channel, `{Channel_Name}` is not required.  

#### [Linux](#tab/linux/)  

<a id="copy-manifest-file"></a>  

The manifest file must be stored as follows:  

1.  System-wide native messaging hosts:  
    
    ```bash
    ~/.config/microsoft-edge/NativeMessagingHosts
    ```  
    
1.  User-specific native messaging hosts:  
    
    ```bash
    /etc/opt/edge/native-messaging-hosts
    ```

* * *  

> [!NOTE]
> Ensure that you provide read permissions on the manifest file, and run permissions on the host runtime.  

<!-- links -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/extensions/nativeMessaging).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[EdgeAddons]: https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home "Microsoft Edge Add-ons"
[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies
