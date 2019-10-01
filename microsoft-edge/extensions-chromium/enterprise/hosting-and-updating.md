---
description: Extensions enterprise documentation for Edge (Chromium) Extensions.
title: Hosting and Updating
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/26/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, extensions development, browser extensions, addons, partner center, developer
---

# Web Store Hosting and Updating  

Most extensions are hosted in the [Microsoft Store][MicrosoftStoreExtensions] to best protect users from malicious extensions.  

## Hosting  

All extensions are distributed to users as a special ZIP file with a `.crx` suffix.  Extensions hosted in the Microsoft Store are uploaded as .zip files. The publishing process automatically converts the .zip into a `.crx` file.  

There are two exceptions to the Microsoft Store hosting rule:  

1.  Extensions that are distributed through the enterprise policy.  
1.  Unpacked extension directories from a local machine while in developer mode.  

## Updating  

The Microsoft Edge browser periodically checks for new versions of installed extensions and updates them without user intervention.  

> [!NOTE]
> Steps to update an extension on Microsoft store will be added soon.  

<!-- links -->  

[MicrosoftStoreExtensions]: https://microsoftedge.microsoft.com/insider-addons/category/EdgeExtensions "Extensions - Microsoft Edge Insider Addons"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/extensions/hosting/).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: http://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
