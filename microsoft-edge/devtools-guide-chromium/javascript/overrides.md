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

1.  In the sources panel you find several sections on the left hand side. If you can't see the **Overrides** option, click the ≫ icon to get there.

    :::image type="complex" source="images/overrides-overflow-menu.png" alt-text="Sources Panel with not enough space to show the overrides option" lightbox="images/overrides-overflow-menu.png":::
      Sources Panel with not enough space to show the overrides option 
    :::image-end:::  

    :::image type="complex" source="images//overrides-menu.png" alt-text="Selecting the overrides option" lightbox="images/overrides-menu.png":::
      Selecting the overrides option
    :::image-end:::  

1.  Once you selected the **Overrides** option you need to choose a folder on your local computer to store the files you want to replace. Click the "+ Select folder for overrides" to navigate to a folder. 

    :::image type="complex" source="images/overrides-select-folder.png" alt-text="Selecting a folder to use for overrides" lightbox="images/overrides-select-folder.png":::
      Selecting a folder to use for overrides 
    :::image-end:::  

1.  DevTools warns you that it requests full access to this folder and that you shouldn't reveal any sensitive information. Click **Allow** on the warning bar to grant access and it will go away. 

    :::image type="complex" source="images/overrides-give-access-to-folder.png" alt-text="Allowing DevTools access to folder" lightbox="images/overrides-give-access-to-folder":::
      Allowing DevTools access to folder 
    :::image-end:::  

1.  In the Overrides pane you will now see a checkbox allowing you to "Enable Local Overrides" and your overrides folder. Next to it is also an icon that allows you to delete your local overrides setup. You are now done setting up your folder and ready to replace live resources with local ones.

    :::image type="complex" source="images/overrides-folder-setup-complete.png" alt-text="Successful setup of an overrides folder" lightbox="images/overrides-folder-setup-complete.png":::
      Successful setup of an overrides folder 
    :::image-end:::  

## Adding files to your Overrides folder
  
To add files to your overrides folder you can start by inspecting the page using the **Elements** tab. Click the name of the CSS file in the **Styles** inspector that you want to edit. 

:::image type="complex" source="images/overrides-select-css-file.png" alt-text="Selecting a file in the styles inspector" lightbox="images/overrides-select-css-file.png":::
  Selecting a file in the styles inspector 
:::image-end:::  

This will take you to the **Sources** editor and open the file there. Right-click the file name in the tab and select "Save for overrides" from the menu. 

:::image type="complex" source="images/overrides-file-name.png" alt-text="Right-click the name of the file in the sources editor to add it to overrides" lightbox="images/overrides-file-name.png":::
  Right-click the name of the file in the sources editor to add it to overrides 
:::image-end:::  

:::image type="complex" source="images/overrides-save-for-overrides.png" alt-text="Select 'Save for overrides' from the context menu" lightbox="images/overrides-save-for-overrides.png":::
  Select 'Save for overrides' from the context menu 
:::image-end:::  

This will store the file in your overrides folder on your computer. You will see that DevTools creates a folder with the name of the URL of the file you stored and creates the correct folder structure inside it. The file name in the editor now also shows a purple dot, indicating that this is a local file and not a live one.

:::image type="complex" source="images/overrides-file-stored.png" alt-text="Successfully stored the file in your overrides folder" lightbox="images/overrides-file-stored.png":::
  Successfully stored the file in your overrides folder 
:::image-end:::  

In this example we can now change the styles of the page to add a red border around the document by adding a `border: 10px solid firebrick` to the body element in the **Styles** editor. This automatically saves it to the file on your computer. If you reload the document, the border will show up. None of your work is lost.

:::image type="complex" source="images/overrides-changing-styles.png" alt-text="Changing page styles persistantly by editing a file in your overrides folder" lightbox="images/overrides-changing-styles.png":::
  Changing page styles persistantly by editing a file in your overrides folder 
:::image-end:::  

You can also pick any files in the Page section of the **Sources** tab, right-click it and add it to overrides. Again, files that are already in your overrides folder have a purple dot on their icon.

:::image type="complex" source="images/overrides-safe-from-sources.png" alt-text="Selecting a file from the Sources pane for overrides" lightbox="images/overrides-safe-from-sources.png":::
  Selecting a file from the Sources pane for overrides 
:::image-end:::  

Or you can select any file from the **Network** tab, right-click it and add it to overrides. Also notice that when overrides are in effect, the **Network** tab shows a warning icon reminding you that some files are coming from your computer and not the live site.

:::image type="complex" source="images/overrides-network.png" alt-text="Selecting a file from the Network pane for overrides" lightbox="images/overrides-network.png":::
  Selecting a file from the Network pane for overrides 
:::image-end:::  

## Two way interaction of overrides

You can use the editor provided with the **Sources** tab of DevTools or any editor you want to change these files. Changes are synced across all the products that access the files in the overrides folder.
  
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleIndex]: ../console/index.md "Console overview | Microsoft Docs"  
[DevToolsSourcesPanel]: ../sources.md "Sources panel overview | Microsoft Docs"  

