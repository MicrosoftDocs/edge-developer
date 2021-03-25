---
description: Host and publish extensions in the enterprise for Microsoft Edge (Chromium).
title: Publish and update extensions in the Microsoft Edge Add-ons store
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/10/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---
# Publish and update extensions in the Microsoft Edge Add-ons store  

Most extensions are published to the [Microsoft Edge Add-ons store][MicrosoftMicrosoftedgeInsiderAddonsEdgeextensions] to protect users from malicious extensions.  

## Publish options for extensions  

All extensions are distributed to users as a special archive \(`.zip`\) file with a `.crx` suffix.  Extensions published to the Microsoft Edge Add-ons store are uploaded as `.zip` files.  The publishing process automatically converts the `.zip` file into a `.crx` file.  

The following two scenarios don't require you to publish your extension in the Microsoft Edge Add-ons store.  

*   Extensions distributed using Enterprise policy.  
*   Using unpacked extension directories on a local machine when Microsoft Edge is in developer mode.  

## Updates to extensions

The Microsoft Edge browser automatically checks for new versions of installed Extensions. Updates are installed without user intervention.  


<!-- image links -->

<!-- links -->  

[MicrosoftMicrosoftedgeInsiderAddonsEdgeextensions]: https://microsoftedge.microsoft.com/insider-addons/category/EdgeExtensions "Extensions - Microsoft Edge Insider Addons | Microsoft"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/extensions/hosting).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
