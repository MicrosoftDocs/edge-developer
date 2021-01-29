---
description: Distribute extensions using the Windows registry
title: Alternate methods to distribute extensions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/28/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, add-ons, partner center, developer
---

# Alternate methods to distribute extensions  

If you are a developer who wants to distribute extensions as part of the installation process for other software, or a network admin that wants to distribute extensions throughout their organization, Microsoft Edge supports installation on Windows using the Windows registry. Microsoft Edge supports installing an extension hosted at a URL, which will be referred to as `update_URL`.  On Windows, the `update_URL` must point to the Microsoft Edge Add-ons catalog where the extension must be hosted.  

> [!NOTE]
> External installation of extensions using a JSON file for macOS <!--and Linux--> for preferences is not supported.  This feature support will soon be available.

## Add key to the Windows registry  

Ensure your extension is published to the Microsoft Edge Add-ons catalog, or package the CRX file and install the extension using the CRX file on the client.  

The steps to install extensions using the registry in Windows are:  

1.   Find or create the following key in the registry:  
     *   32-bit Windows:  `HKEY_LOCAL_MACHINE\Software\Microsoft\Edge\Extensions`  
     *   64-bit Windows:  `HKEY_LOCAL_MACHINE\Software\Wow6432Node\Microsoft\Edge\Extensions`  
1.   Create a new key, or folder, under the `Extensions` key with the same name as the ID of your extension. For example, the ID may be `aaaaaaaaaabbbbbbbbbbcccccccccc`.  
1.   In the new key, create a property called `update_url`, and set the value to the following JSON code. If your CRX is in the Microsoft Edge Add-ons catalog, use `https://edge.microsoft.com/extensionwebstorebase/v1/crx` for the value of `update_url`. If your extension is in the Chrome Web Store, use `https://clients2.google.com/service/update2/crx`.  
    
    ```javascript
    {
        "update_url": "https://edge.microsoft.com/extensionwebstorebase/v1/crx"
    }
    ```  

1.   Launch the browser and go to `edge://extensions` to confirm that the extension is listed.  

## Update or uninstall extensions from the Windows registry  

Microsoft Edge scans the metadata entries in the registry each time the browser starts, and makes changes to the installed extensions.   

To update installed extensions to a newer version, first update the CRX file, and then update the key in the registry.  

You may want to remove your extension as part of your uninstall process when removing other software from the client computer. To uninstall your extension, remove your preferences file, for example `aaaaaaaaaabbbbbbbbbbcccccccccc.json`, or delete the key from the registry.  

<!-- image links -->  

<!-- links -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/apps/external_extensions).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies
