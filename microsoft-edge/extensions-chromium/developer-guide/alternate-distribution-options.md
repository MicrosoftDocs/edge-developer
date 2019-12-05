---
description: The process of distributing extension by mechanism other than verified stores
title: Alternate Method of Distributing Extension
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/05/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---

# Alternate Method of Distributing Extension  

If you are a developer who wants to distribute an Extension as part of the installation process for other software, or a network admin that want to distribute an Extension throughout their organization, Microsoft Edge supports the following Extension installation methods:  

*   **Using the Windows registry \(Windows only\)**  

Microsoft Edge supports installing an Extension hosted at an `update_URL`.  On Windows, the `update_URL` must point to the Microsoft Edge Addons catalog \(Microsoft Edge Addons\) where the Extension must be hosted.  

> [!NOTE]
> External installation of Extension via a preferences json file for macOS <!--and Linux--> are not supported yet.  This feature support will soon be available.

## Using the Windows registry  

First, publish the Extension in the Microsoft Edge Addons, or package a .crx file and make sure that it installs successfully.  

The steps to install Extension via registry in windows are:  

*   Find or create the following key in the registry:  
    *   32-bit Windows:  `HKEY_LOCAL_MACHINE\Software\Microsoft\Edge\Extensions`  
    *   64-bit Windows:  `HKEY_LOCAL_MACHINE\Software\Wow6432Node\Microsoft\Edge\Extensions`  
*   Create a new key \(folder\) under the Extensions key with the same name as the ID of your Extension \(for example, `aaaaaaaaaabbbbbbbbbbcccccccccc`\).  
*   In your Extension key, create a property, `update_url`, and set it to the value: `https://edge.microsoft.com/extensionwebstorebase/v1/crx`,  \(this points to the crx of your extension in the Microsoft Edge Addons\).  

```javascript
{
    "update_url": "https://edge.microsoft.com/extensionwebstorebase/v1/crx"
}
```  

*   Launch the browser and go to `edge://extensions`; you should see the extension listed.  

## Updating and uninstalling  

Microsoft Edge scans the metadata entries in the registry each time the browser starts, and makes any necessary changes to the installed external extensions.  

To update your extension to a new version, update the file, and then update the version in the registry.  

To uninstall your extension \(for example, if your software is uninstalled\), remove your preference file \(`aaaaaaaaaabbbbbbbbbbcccccccccc.json`\) or the metadata from the registry.  

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
