---
description: The process of distributing extension by mechanism other than verified stores
title: Microsoft Edge (Chromium) Extensions
author: xxx
ms.author: xxx
ms.date: 11/25/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, extensions development, browser extensions, addons, partner center, developer
---

# ALternate method of distributing extension

If you are a developer who wants to distribute an extension as part of the installation process for other software, or a network admin that want to distribute an extension throughout their organization, Microsoft Edge supports the following extension installation methods:

- **Using the Windows registry (for Windows only)**

It supports installing an extension hosted at an `update_URL`. On Windows, the update_URL must point to the Microsoft Edge Addons store where the extension must be hosted.

## Using the Windows registry
First, publish the extension in the  Microsoft Edge Addons store, or package a .crx file and make sure that it installs successfully.

The steps to install extension via registry in windows are:
- Find or create the following key in the registry:
    - 32-bit Windows: HKEY_LOCAL_MACHINE\Software\Microsoft\Edge\Extensions
    - 64-bit Windows: HKEY_LOCAL_MACHINE\Software\Wow6432Node\Microsoft\Edge\Extensions
- Create a new key (folder) under the Extensions key with the same name as the ID of your extension (for example, aaaaaaaaaabbbbbbbbbbcccccccccc).
- In your extension key, create a property, "update_url", and set it to the value: “https://edge.microsoft.com/extensionwebstorebase/v1/crx”,  (this points to your extension's crx in the Microsoft Edge Addons Store).  

``` js
{
    "update_url": "https://edge.microsoft.com/extensionwebstorebase/v1/crx"
}
```
- Launch the browser and go to edge://extensions; you should see the extension listed

## Updating and uninstalling
Microsoft Edge scans the metadata entries in the registry each time the browser starts, and makes any necessary changes to the installed external extensions.

To update your extension to a new version, update the file, and then update the version in the registry.

To uninstall your extension (for example, if your software is uninstalled), remove your preference file (aaaaaaaaaabbbbbbbbbbcccccccccc.json) or the metadata from the registry.

>[!NOTE]
> External installation of extension via a preferences json file for Mac and linux are not supported yet. This feature support will be implemented soon.