---
description: The process of distributing extension by mechanism other than verified stores
title: Alternate Method of Distributing Extension
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/15/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---

# Alternative extension distribution methods  

All Edge extensions must be distributed either directly via the Edge add-ons store or via using the methods described below. There may be scenarios in which a developer may want to distribute their extension via some alternative methods. There are typically two such use cases.
1. An extension is associated with another software and should be installed whenever the user installs that software.
1. A network admin wants to distribute an extension throughout their organization.
 

## Before you begin

Before you begin, publish the extension in the Microsoft Edge Add-ons or package a .crx file and make sure that it installs successfully. If installing from an `update_URL`, ensure that the extension is properly hosted.

Before you edit the preferences file or the registry, make a note of the following:
1. The intended location of the extension's .crx file, or the `update_URL` from which it is served.
1. The extension's version (from the manifest file or the edge://extensions page).
1. The extension's ID (from the edge://extensions page when you've loaded the packed extension).




## Alternative methods of distributing an extension

An extension that is not installed from the Edge add-ons store is called an _external installation_. Microsoft Edge supports the following alternative extension installation methods:  

1. Using the Windows registry (Windows only)
1. Using a preferences JSON file (for MacOS X and Linux only)

The following examples assume the version is 1.0 and the ID is aaaaaaaaaabbbbbbbbbbcccccccccc.


### 1. Using the Windows registry \(Windows only\)

1. Find or create the following key in the registry:  
    *   32-bit Windows:  `HKEY_LOCAL_MACHINE\Software\Microsoft\Edge\Extensions`  
    *   64-bit Windows:  `HKEY_LOCAL_MACHINE\Software\Wow6432Node\Microsoft\Edge\Extensions`  
2. Create a new key \(folder\) under the **Extensions** key with the same name as the ID of your extension \(for example, aaaaaaaaaabbbbbbbbbbcccccccccc\).  
3. In your extension key, create a property, `update_url`, and set it to the value: `https://edge.microsoft.com/extensionwebstorebase/v1/crx`,  \(this points to the CRX of your extension in the Microsoft Edge Add-ons store\). If you want to install an extension from the Chrome Web Store, do provide the Chrome Web Store update URL, `https://clients2.google.com/service/update2/crx`.  
    
    ```javascript
    {
        "update_url": "https://edge.microsoft.com/extensionwebstorebase/v1/crx"
    }
    ```  
    
4. Launch the browser and go to `edge://extensions`; you should see the extension listed.  



### 2. Using a preferences file

1. If you are installing from a file on Linux, make the .crx extension file available to the machine you want to install the extension on. (Copy it to a local directory or to a network share for example, \\\server\share\extension.crx or /home/share/extension.crx.)
2. Create a file with the following name in one of the folders listed below: aaaaaaaaaabbbbbbbbbbcccccccccc.json where the file name (without the extension) corresponds to your extension's ID. The location depends on the operating system.
    * **Mac OS X**
        * User specific: `~USERNAME/Library/Application Support/Microsoft Edge/External Extensions/`
        * All users: `/Library/Application Support/Microsoft/Edge/External Extensions/`
    
        The external extension file for all users is read only if every directory in the path is owned by the user root, has the group admin or wheel, and is not world writable. The path must also be free of symbolic links. These restrictions prevent an unprivileged user from causing extensions to be installed for all users.
    * **Linux**
        * User specific: `~/.config/microsoft-edge/External Extensions/`
        * All users: `/usr/share/microsoft-edge/extensions/`

3. Linux only: If you are installing from a file, specify the extension's location and version with fields named "external_crx" and "external_version" in the file created above.
    
    ```javascript
    {
        "external_crx": "/home/share/extension.crx",
        "external_version": "1.0"
    }
    ```

4. If you are installing from an `update_URL`, specify the extension's update URL with field name "external_update_url".
5. Example of installation from local .crx file (Linux only):

    ```javascript
    {
        "external_update_url": "http://myhost.com/mytestextension/updates.xml"
    }
    ```

6. Example of installation from the Edge add-ons store (Mac and Linux):

    ```javascript
    {
        "external_update_url": "https://edge.microsoft.com/extensionwebstorebase/v1/crx"
    }
    ```

7. If you would like to install extension only for some browser locales, you can list supported locales in field name "supported_locale". Locale may specify parent locale like "en", in this case the extension will be installed for all English locales like "en-US", "en-GB", etc. If another browser locale is selected that is not supported by the extension, the external extensions will be uninstalled. If "supported_locales" list is missing, the extension will be installed for any locale.

    ```javascript
    {
        "external_update_url": "https://edge.microsoft.com/extensionwebstorebase/v1/crx",
        "supported_locales": [ "en", "fr", "de" ]
    }
    ```

8. Save the JSON file.
9. Launch Microsoft Edge and go to edge://extensions; you should see the extension listed.



## Updating and uninstalling  

Microsoft Edge scans the metadata entries in the registry each time the browser starts, and makes any necessary changes to the installed external extensions.  

To update your extension to a new version, update the file, and then update the version in the registry.  

To uninstall your extension \(for example, if your software is uninstalled\), remove your preference file \(aaaaaaaaaabbbbbbbbbbcccccccccc.json\) or the metadata from the registry.  



<!-- image links -->  

<!-- links -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL]. The original page is found [here](https://developer.chrome.com/apps/external_extensions).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies
