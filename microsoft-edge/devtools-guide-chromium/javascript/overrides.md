---
description: Overrides is a feature within the Sources panel of Microsoft Edge DevTools that allows you to copy page resources to your hard drive. When you reload the page, DevTools will not load the resource but replace it with your local copy instead. 
title: Override page resources with local copies using Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/27/2020 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# Override page resources with local copies using Microsoft Edge DevTools  

Sometimes you need to fix a problem on a web site that you don't have access to or fixes involve a slow and complex build process. You can debug and fix all kind of problems in the browser DevTools but the problem is that the changes don't persist. Once you reload the document, all your work is gone. 

This is where Overrides in the [Sources][DevToolsSourcesPanel] panel help.  

You can take any of the page resources of the current web site and store them locally on your hard drive. When you reload the page the browser will not load the resource from the server but replace it with your local copy instead.

## Setting up your local folder to store Overrides

1. In the sources panel you find several sections on the left hand side. If you can't see the **Overrides** option, click the ≫ icon to get there.

:::image type="complex" source="../media/overrides-overflow-menu.png" alt-text="Sources Panel with not enough space to show the overrides option" lightbox="../media/overrides-overflow-menu.png":::
   Sources Panel with not enough space to show the overrides option 
:::image-end:::  

:::image type="complex" source="../media/overrides-menu.png" alt-text="Selecting the overrides option" lightbox="../media/overrides-menu.png":::
   Selecting the overrides option
:::image-end:::  

1. Once you selected the **Overrides** option you need to choose a folder on your local computer to store the files you want to replace. Click the "+ Select folder for overrides" to navigate to a folder. 

:::image type="complex" source="../media/overrides-select-folder.png" alt-text="Selecting a folder to use for overrides" lightbox="../media/overrides-select-folder.png":::
   Selecting a folder to use for overrides 
:::image-end:::  

1. DevTools warns you that it requests full access to this folder and that you shouldn't reveal any sensitive information. Click **Allow** on the warning bar to grant access and it will go away. 

:::image type="complex" source="../media/overrides-give-access-to-folder.png" alt-text="Allowing DevTools access to folder" lightbox="../media/overrides-give-access-to-folder":::
   Allowing DevTools access to folder 
:::image-end:::  

1. In the Overrides pane you will now see a checkbox allowing you to "Enable Local Overrides" and your overrides folder. Next to it is also an icon that allows you to delete your local overrides setup. You are now done setting up your folder and ready to replace live resources with local ones.

:::image type="complex" source="../media/overrides-folder-setup-complete.png" alt-text="Successful setup of an overrides folder" lightbox="../media/overrides-folder-setup-complete.png":::
   Successful setup of an overrides folder 
:::image-end:::  

## Adding files to your Overrides folder
  
  
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- image links -->  

[ImageMoreTabsIcon]: ../media/more-tabs-icon.msft.png  
[ImageRunSnippetIcon]: ../media/run-snippet-icon.msft.png  

<!-- links -->  

[DevtoolsConsoleIndex]: ../console/index.md "Console overview | Microsoft Docs"  
[DevToolsSourcesPanel]: ../sources.md "Sources panel overview | Microsoft Docs"  

[WikiBookmarklet]: https://en.wikipedia.org/wiki/Bookmarklet "Bookmarklet - Wikipedia"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/javascript/snippets) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
