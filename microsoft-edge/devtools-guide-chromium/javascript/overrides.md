---
title: Override webpage resources with local copies
description: The Overrides feature is a feature within the Sources tool of Microsoft Edge DevTools that allows you to copy webpage resources to your hard drive.  When you refresh the webpage, DevTools do not load the resource but replace it with your local copy instead.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
ms.date: 12/11/2020
---
# Override webpage resources with local copies

Sometimes you need to try out some possible fixes for a webpage, but you don't have access to the source files, or changing the page requires a slow and complex build process.  You can debug and fix all kind of problems in DevTools.  But the changes do not persist; after you refresh the local file, all your work is gone.  The Overrides feature in the [Sources](../sources/index.md) tool helps you solve this problem.

You can now take a resource of the current webpage and store it locally.  When you refresh the webpage, the browser does not load the resource from the server.  Instead, the browser replaces the server resource with your local copy of the resource.


<!-- ====================================================================== -->
## Setting up your local folder to store Overrides

1.  Navigate to the **Sources** tool.
1.  In the **Navigator** pane (on the left), click the **Overrides** tab.  If the **Overrides** tab isn't displayed, click the <code>&#x0226B;</code><!--`≫`--> icon.

    The **Sources** tool with insufficient space to display the **Overrides** tab:

    :::image type="content" source="../media/javascript-overrides-overflow-menu.msft.png" alt-text="Sources tool with insufficient space to show the overrides option." lightbox="../media/javascript-overrides-overflow-menu.msft.png":::

    Selecting the **Overrides** tab:

    :::image type="content" source="../media/javascript-overrides-menu.msft.png" alt-text="Selecting the Overrides tab." lightbox="../media/javascript-overrides-menu.msft.png":::

1.  Select a folder on your local computer to store the resource files that you want to replace.  To search for a folder, click **+ Select folder for overrides**.

    :::image type="content" source="../media/javascript-overrides-select-folder.msft.png" alt-text="Selecting a folder to use for overrides." lightbox="../media/javascript-overrides-select-folder.msft.png":::

1.  DevTools warns you that must have full access to the folder and that you should not reveal any sensitive information.  Select **Allow** to grant access.

    :::image type="content" source="../media/javascript-overrides-give-access-to-folder.msft.png" alt-text="Granting DevTools access to a folder." lightbox="../media/javascript-overrides-give-access-to-folder.msft.png":::

1.  In the **Overrides** tab, a checkbox is shown next to **Enable Local Overrides**.  To the right of **Enable Local Overrides** is a **Clear configuration** icon that allows you to delete your local overrides settings.  You are now done setting up your folder, and are ready to replace live resources with local resources.

    :::image type="content" source="../media/javascript-overrides-folder-setup-complete.msft.png" alt-text="Successful setup of an overrides folder." lightbox="../media/javascript-overrides-folder-setup-complete.msft.png":::


<!-- ====================================================================== -->
## Adding files to your Overrides folder

To add files to your overrides folder, open the **Elements** tool and inspect the webpage.  To edit, click the name of the CSS file in the **Styles** inspector.

Selecting a file in the **Styles** inspector:

:::image type="content" source="../media/javascript-overrides-select-css-file.msft.png" alt-text="Selecting a file in the Styles inspector." lightbox="../media/javascript-overrides-select-css-file.msft.png":::

In the **Sources** editor, right-click the file name of your chosen file, and then click **Save for overrides**.

In the Sources editor, adding the name of the file to the overrides list:

:::image type="content" source="../media/javascript-overrides-file-name.msft.png" alt-text="In the Sources editor, adding the name of the file to the overrides list." lightbox="../media/javascript-overrides-file-name.msft.png":::

Right-click a file name and then select **Save for overrides**:

:::image type="content" source="../media/javascript-overrides-save-for-overrides.msft.png" alt-text="Right-click a file name and then select 'Save for overrides'." lightbox="../media/javascript-overrides-save-for-overrides.msft.png":::

The file is stored in your overrides folder.  Verify that DevTools create a folder that is named using the URL of the file with the correct directory structure.  The file is stored inside.  The file name in the editor now also shows a purple dot that indicates that the file is local and not a live one.

Successfully stored the file in your overrides folder:

:::image type="content" source="../media/javascript-overrides-file-stored.msft.png" alt-text="Successfully stored the file in your overrides folder." lightbox="../media/javascript-overrides-file-stored.msft.png":::

In the following example, you can now change the styles of the webpage.  To add a red border around the file, on the **Styles** editor, copy the following style, and add it to the body element.

```css
border: 10px solid firebrick
```

The file is automatically saved on your computer.  If you refresh the file, the border is displayed and none of your work is lost.

Changing the webpage styles persistently by editing a file in your overrides folder:

:::image type="content" source="../media/javascript-overrides-changing-styles.msft.png" alt-text="Changing the webpage styles persistently by editing a file in your overrides folder." lightbox="../media/javascript-overrides-changing-styles.msft.png":::

On the **Sources** tool, in the **Page** section, right-click a file and then add it to overrides.  Files that are already in your overrides folder have a purple dot on the icon.

Selecting a file from the **Sources** tool for overrides:

:::image type="content" source="../media/javascript-overrides-safe-from-sources.msft.png" alt-text="Selecting a file from the Sources tool for overrides." lightbox="../media/javascript-overrides-safe-from-sources.msft.png":::

Alternatively, on the **Network** tool, right-click a file and then add it to overrides.  When overrides are in effect, files that are located on your computer and not from the live webpage.  When overrides are in effect, on the **Network** tool, locate a warning icon next to the file name.

Selecting a file from the **Network** tool for overrides:

:::image type="content" source="../media/javascript-overrides-network.msft.png" alt-text="Selecting a file from the Network tool for overrides." lightbox="../media/javascript-overrides-network.msft.png":::


<!-- ====================================================================== -->
## Two-way interaction of overrides

Use the editor provided with the **Sources** tool of DevTools or any editor you want to change the files.  Changes are synced across all the products that access the files in the overrides folder.
