---
description: The process of distributing extension by mechanism other than verified stores
title: Alternate Method of Distributing Extension
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/05/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---
# Alternative extension distribution methods  

All Microsoft Edge extensions must be distributed using one of two methods.

*   The Edge add-ons store.  
*   The methods described in this article.  
    
Other scenarios exist in which you \(a developer\) may want to distribute your extension using some alternative method.  The following two use cases are typical.  

1.  An extension is associated with other software and it should be installed whenever the user installs the software.  
1.  A network admin for an organization wants to distribute an extension throughout it.  
    
## Before you begin  

Before you begin, publish your extension in the Microsoft Edge Add-ons or package a `.crx` file and ensure that it installs successfully.  If you install using the `update_URL`, ensure your extension is properly hosted.  

Before you edit the preferences file or the registry, find and record the following information.  

1.  The intended location of the `.crx` file of your extension, or the `update_URL` from which you serve it.  
1.  The version of your extension.  The version is found in your manifest file or in Microsoft Edge Extensions after you load the packed extension.  
    *   To display the version in Microsoft Edge Extensions after you load the packed extension, open Microsoft Edge and navigate to `edge://extensions`.  
1.  The ID of your extension.  
    *   To display the ID in Microsoft Edge Extensions after you load the packed extension, open Microsoft Edge and navigate to `edge://extensions`.  
    
## Alternative methods to distribute an extension  

An extension not installed from the Edge add-ons store is called an external installation.  Microsoft Edge supports the following alternative extension installation methods.  

1.  Use the Windows registry \(Windows only\)
1.  Use a preferences JSON file \(macOS and Linux\)
    
The following examples assume the version is `1.0` and the ID is `aaaaaaaaaabbbbbbbbbbcccccccccc`.  

### 1 - Use the Windows registry (Windows only)  

1.  Find or create the following key in the registry:  
    *   32-bit Windows:  `HKEY_LOCAL_MACHINE\Software\Microsoft\Edge\Extensions`  
    *   64-bit Windows:  `HKEY_LOCAL_MACHINE\Software\Wow6432Node\Microsoft\Edge\Extensions`  
1.  Create a new key \(folder\) under the **Extensions** key with the same name as the ID of your extension \(for example, `aaaaaaaaaabbbbbbbbbbcccccccccc`\).  
1.  In your extension key, create the `update_url` property, and set it to the `https://edge.microsoft.com/extensionwebstorebase/v1/crx` value.  The `update_url` property points to the `.crx` file of your extension in the Microsoft Edge Add-ons store.  
    
    > [!NOTE]
    > If you want to install an extension from the Chrome Web Store provide the Chrome Web Store update URL `https://clients2.google.com/service/update2/crx`.  
    
    ```javascript
    {
        "update_url": "https://edge.microsoft.com/extensionwebstorebase/v1/crx"
    }
    ```  
    
1.  To display Microsoft Edge Extensions, open Microsoft Edge and navigate to `edge://extensions`.  
    
### 2 - Use a preferences file  

1.  If you install from a file on Linux, make the `.crx` extension file available to the machine on which you want to install your extension.  Copy it to a local directory or to a network share.  For example, `\\\server\share\extension.crx` or `/home/share/extension.crx`.  
1.  Create a file with the following name in one of the following folders.  Use the `aaaaaaaaaabbbbbbbbbbcccccccccc.json` file name, where the file name \(without your extension\) corresponds to the ID of your extension.  The location depends on your operating system.  
    *   **macOS**  
        *   User specific: `~USERNAME/Library/Application Support/Microsoft Edge/External Extensions/`  
        *   All users: `/Library/Application Support/Microsoft/Edge/External Extensions/`  
        
        The external extension file for all users is read only if the following conditions are met.  
        
        *   Every directory in the path is owned by the user root.  
        *   Every directory in the path is assigned to the `admin` or `wheel` group.  
        *   Every directory in the path isn't world writable.  
        *   The path must also be free of symbolic links.  
            
        The restrictions prevent an unprivileged user from installing an extension for all users.  
        
    *   **Linux**  
        *   User specific: `~/.config/microsoft-edge/External Extensions/`  
        *   All users: `/usr/share/microsoft-edge/extensions/`  
1.  If you install from a file, specify the location and version of your extension with the `external_crx` and `external_version` fields.  
    
    Example specifying the location and version of your extension. \(Linux only\)  
    
    ```javascript
    {
        "external_crx": "/home/share/extension.crx",
        "external_version": "1.0"
    }
    ```  
    
1.  If you install from an `update_URL`, specify the update URL of your extension in the `external_update_url` field.  
    
    Example of installation from local `.crx` file. \(Linux only\)  
    
    ```javascript
    {
        "external_update_url": "http://myhost.com/mytestextension/updates.xml"
    }
    ```  
    
    Example of installation from the Microsoft Edge add-ons store. \(macOS and Linux\)  
    
    ```javascript
    {
        "external_update_url": "https://edge.microsoft.com/extensionwebstorebase/v1/crx"
    }
    ```  
    
1.  If you want to install extension only for some browser locales, you may list multiple supported locales in the `supported_locale` field.  Locale may specify parent locale, such as `en`.  If you specify a parent locale, your extension is installed for all English locales including `en-US`, `en-GB`, and so on.  If a user of your extension selects an unsupported browser locale, the external extensions are uninstalled.  If the `supported_locales` field is missing, your extension is installed for any locale.  

    ```javascript
    {
        "external_update_url": "https://edge.microsoft.com/extensionwebstorebase/v1/crx",
        "supported_locales": [ "en", "fr", "de" ]
    }
    ```  

1.  Save the JSON file.  
1.  To display Microsoft Edge Extensions, open Microsoft Edge and navigate to `edge://extensions`.  

## Updating and uninstalling  

Microsoft Edge scans the metadata entries in the registry each time the browser starts, and makes any necessary changes to the installed external extensions.  

To update your extension to a new version, update the file, and then update the version in the registry.  

To uninstall your extension, remove your preference file or the metadata from the registry.  A good reason to uninstall your extension is if your software is uninstalled.  For example, your preference file is named `aaaaaaaaaabbbbbbbbbbcccccccccc.json`

<!-- links -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  The original page is found [here](https://developer.chrome.com/apps/external_extensions).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
