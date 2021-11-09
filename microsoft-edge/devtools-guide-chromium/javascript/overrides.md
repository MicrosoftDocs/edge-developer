---
description: The Overrides feature is a feature within the Sources tool of Microsoft Edge DevTools that allows you to copy webpage resources to your hard drive.  When you refresh the webpage, DevTools do not load the resource but replace it with your local copy instead.
title: Override webpage resources with local copies using Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/11/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Override webpage resources with local copies using Microsoft Edge DevTools

Sometimes you need to try out some possible fixes for a webpage, but you don't have access to the source files, or changing the page requires a slow and complex build process.  You may debug and fix all kind of problems in DevTools.  But the changes do not persist; after you refresh the local file, all your work is gone.  The Overrides feature in the [Sources](../sources/index.md) tool helps you solve this problem.

You may now take a resource of the current webpage and store it locally.  When you refresh the webpage, the browser does not load the resource from the server.  Instead the browser replaces it with your local copy of the resource.


<!-- ====================================================================== -->
## Setting up your local folder to store Overrides

1.  Navigate to the **Sources** tool.
1.  In the **Navigator** pane (on the left), choose the **Overrides** tab.  If the **Overrides** tab is not displayed, choose the <code>&#x0226B;</code><!--`≫`--> icon.

    :::row:::
       :::column span="":::
          :::image type="complex" source="../media/javascript-overrides-overflow-menu.msft.png" alt-text="Sources tool with not enough space to show the overrides option" lightbox="../media/javascript-overrides-overflow-menu.msft.png":::
             **Sources** tool with not enough space to show the overrides option
          :::image-end:::
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/javascript-overrides-menu.msft.png" alt-text="Choose the overrides option" lightbox="../media/javascript-overrides-menu.msft.png":::
             Choose the overrides option
          :::image-end:::
       :::column-end:::
    :::row-end:::

1.  Choose a folder on your local computer to store the resource files that you want to replace.
     *   To search for a folder, choose **+ Select folder for overrides**.

    :::image type="complex" source="../media/javascript-overrides-select-folder.msft.png" alt-text="Choose a folder to use for overrides" lightbox="../media/javascript-overrides-select-folder.msft.png":::
       Choose a folder to use for overrides
    :::image-end:::

1.  DevTools warns you that must have full access to the folder and that you should not reveal any sensitive information.  On the warning bar, choose **Allow** to grant access.

    :::image type="complex" source="../media/javascript-overrides-give-access-to-folder.msft.png" alt-text="grant DevTools access to folder" lightbox="../media/javascript-overrides-give-access-to-folder.msft.png":::
       Grant DevTools access to folder
    :::image-end:::

1.  In the **Overrides** tab, a checkbox is shown next to **Enable Local Overrides**.  To the right of **Enable Local Overrides** is a **Clear configuration** icon that allows you to delete your local overrides settings.  You are now done setting up your folder and are ready to replace live resources with local ones.

    :::image type="complex" source="../media/javascript-overrides-folder-setup-complete.msft.png" alt-text="Successful setup of an overrides folder" lightbox="../media/javascript-overrides-folder-setup-complete.msft.png":::
       Successful setup of an overrides folder
    :::image-end:::


<!-- ====================================================================== -->
## Adding files to your Overrides folder

To add files to your overrides folder, open the **Elements** tool and inspect the webpage.  To edit, choose the name of the CSS file in the **Styles** inspector.

:::image type="complex" source="../media/javascript-overrides-select-css-file.msft.png" alt-text="Choose a file in the Styles inspector" lightbox="../media/javascript-overrides-select-css-file.msft.png":::
   Choose a file in the **Styles** inspector
:::image-end:::

On the **Sources** editor, hover on the file name of your chosen file, open the contextual menu (right-click), and choose **Save for overrides**.

:::image type="complex" source="../media/javascript-overrides-file-name.msft.png" alt-text="In the Sources editor, add the name of the file to overrides" lightbox="../media/javascript-overrides-file-name.msft.png":::
   In the **Sources** editor, add the name of the file to overrides
:::image-end:::

:::image type="complex" source="../media/javascript-overrides-save-for-overrides.msft.png" alt-text="On the context menu, choose Save for overrides" lightbox="../media/javascript-overrides-save-for-overrides.msft.png":::
   On the context menu, choose **Save for overrides**
:::image-end:::

The file is stored in your overrides folder.  Verify that DevTools create a folder that is named using the URL of the file with the correct directory structure.  The file is stored inside.  The file name in the editor now also shows a purple dot that indicates that the file is local and not a live one.

:::image type="complex" source="../media/javascript-overrides-file-stored.msft.png" alt-text="Successfully stored the file in your overrides folder" lightbox="../media/javascript-overrides-file-stored.msft.png":::
   Successfully stored the file in your overrides folder
:::image-end:::

:::row:::
   :::column span="":::
      In the following example, you may now change the styles of the webpage.  To add a red border around the file, on the **Styles** editor, copy the following style, and add it to the body element.

      ```css
      border: 10px solid firebrick
      ```
   :::column-end:::
   :::column span="":::
      The file is automatically saved on your computer.  If you refresh the file, the border is displayed and none of your work is lost.

      :::image type="complex" source="../media/javascript-overrides-changing-styles.msft.png" alt-text="Change webpage styles persistently by editing a file in your overrides folder" lightbox="../media/javascript-overrides-changing-styles.msft.png":::
         Change webpage styles persistently by editing a file in your overrides folder
      :::image-end:::
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="":::
      On the **Sources** tool, in the **Page** section, hover on any file, open the contextual menu (right-click), and add it to overrides.  Again, files that are already in your overrides folder have a purple dot on the icon.

      :::image type="complex" source="../media/javascript-overrides-safe-from-sources.msft.png" alt-text="Choose a file from the Sources tool for overrides" lightbox="../media/javascript-overrides-safe-from-sources.msft.png":::
         Choose a file from the **Sources** tool for overrides
      :::image-end:::
   :::column-end:::
   :::column span="":::
      Alternatively, on the **Network** tool, hover on any file, open the contextual menu (right-click), and add it to overrides.  When overrides are in effect, files that are located on your computer and not from the live webpage.  When overrides are in effect, on the **Network** tool, locate a warning icon next to the file name.

      :::image type="complex" source="../media/javascript-overrides-network.msft.png" alt-text="Choose a file from the Network tool for overrides" lightbox="../media/javascript-overrides-network.msft.png":::
         Choose a file from the **Network** tool for overrides
      :::image-end:::
   :::column-end:::
:::row-end:::


<!-- ====================================================================== -->
## Two-way interaction of overrides

Use the editor provided with the **Sources** tool of DevTools or any editor you want to change the files.  Changes are synced across all the products that access the files in the overrides folder.
