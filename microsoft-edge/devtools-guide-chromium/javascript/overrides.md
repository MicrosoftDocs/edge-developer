---
title: Override webpage resources with local copies (Overrides tab)
description: The Overrides feature is a feature within the Sources tool of Microsoft Edge DevTools that allows you to copy webpage resources to your hard drive.  When you refresh the webpage, DevTools doesn't load the resource, but replaces it with your local copy instead.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 09/25/2023
---
# Override webpage resources with local copies (Overrides tab)

Sometimes you need to try out some possible fixes for a webpage, but you don't have access to the source files, or changing the page requires a slow and complex build process.  You can debug and fix all kind of problems in DevTools.  But the changes don't persist; after you refresh the local file, all your work is gone.  The Overrides feature in the [Sources](../sources/index.md) tool helps you solve this problem.

You can now take a resource of the current webpage and store it locally.  When you refresh the webpage, the browser doesn't load the resource from the server; instead, the browser replaces the server resource with your local copy of the resource.


<!-- ====================================================================== -->
## Setting up your local folder to store Overrides

1. Right-click a webpage, such as https://microsoftedge.github.io/Demos/demo-to-do/, and then select **Inspect**.  DevTools opens.

1. Select the **Sources** (![Sources icon](./overrides-images/sources-tool-icon.png)) tool.

1. In the **Navigator** pane (on the left), click the **Overrides** tab (grouped with the **Page** tab); if needed, click the **More tabs** (**v**) button:

   ![Sources tool with insufficient space to show the overrides option](./overrides-images/javascript-overrides-overflow-menu.png)

1. Select the **Overrides** tab and then click the **More tabs** button again to collapse the tabs:

   ![Selecting the Overrides tab](./overrides-images/javascript-overrides-menu.png)

1. Click **+ Select folder for overrides**:

   ![Selecting a folder to use for overrides](./overrides-images/javascript-overrides-select-folder.png)

1. In the file navigation dialog, select a folder on your local computer to store the resource files that you want to replace, such as `C:\Users\myusername\overrides`, and then click the **Select Folder** button.

   DevTools warns you that must have full access to the folder and that you should not reveal any sensitive information:

   ![Granting DevTools access to a folder](./overrides-images/javascript-overrides-give-access-to-folder.png)

1. Click the **Allow** button.

   In the **Overrides** tab, a checkbox is shown next to **Enable Local Overrides**.  To the right of **Enable Local Overrides** is a **Clear configuration** icon that allows you to delete your local overrides settings.  You are now done setting up your folder, and are ready to replace live resources with local resources:

   ![Successful setup of an overrides folder](./overrides-images/javascript-overrides-folder-setup-complete.png)


<!-- ====================================================================== -->
## Adding files to your Overrides folder

Next, add files to your Overrides folder, as follows.  This example will add a CSS file.

1. Select the **Elements** tool, and then in the **Styles** tab, click the name of a CSS file, such as `to-do-styles.css`:

   ![Selecting a file in the Styles inspector](./overrides-images/javascript-overrides-select-css-file.png)

   The **Sources** tool opens, with the selected file opened in a tab in the editor pane.

1. In the editor pane, right-click the file's tab, such as **to-do-styles.css**, and then select **Override content**:

   ![Right-click a file name and then select 'Save for overrides'](./overrides-images/javascript-overrides-save-for-overrides.png)

   In the file's tab, a page icon with a purple dot is added, and in the **Overrides** tab, the file is added:

   ![In the Sources editor, adding the name of the file to the overrides list](./overrides-images/javascript-overrides-file-name.png)

   In this example, the file is listed as: `microsoftedge.github.io/Demos/demo-to-do/styles > to-do-styles.css`

   The file is stored in a new directory that's in your overrides folder (such as in `C:\Users\myusername\overrides`).
 
1. In File Explorer or Finder, verify that DevTools created a subfolder that is named using the URL of the file (such as **microsoftedge.github.io**) and contains the correct directory structure, such as `C:\Users\myusername\overrides\microsoftedge.github.io\Demos\demo-to-do\styles`.  The overriding file is stored in this directory.

   In the editor pane of the **Sources** tool, a page icon with a purple dot is added to the file's tab. The purple dot indicates that the file is a local file that overrides the file that's returned from the web server:

   ![Storing the file in your overrides folder adds a purple dot to the page icon](./overrides-images/javascript-overrides-file-stored.png)


<!-- ====================================================================== -->
## Changing the style by using the override file

Continuing from above, you can now change the styles of the webpage by using your local override CSS file (in this example, `to-do-styles.css`).  Add a thick red border around the rendered webpage body, as follows:

1. In DevTools, select the **Elements** (![Elements tool icon](./overrides-images/elements-tool-icon.png)) tool, and then make sure the **Styles** tab is selected.

1. Copy the following CSS style property, and then paste it into the existing `body` element CSS rule that's in your CSS override file, such as `to-do-styles.css`:

   ```css
   border: 10px solid firebrick
   ```

   ![Changing the webpage styles persistently by editing a file in your overrides folder](./overrides-images/javascript-overrides-changing-styles.png)

   A thick red ("firebrick") border is added around the body of the rendered webpage, and the modified CSS file is automatically saved on your computer, in your Overrides directory.

1. Refresh the webpage.

   The thick red border remains displayed, and none of your work is lost, as it would have been if rendering the CSS file that's returned by the web server instead of using the local override file.


<!-- ====================================================================== -->
## Adding files to Overrides from within other tabs or tools

1. Continuing from above, select the **Sources** (![Sources icon.](./overrides-images/sources-tool-icon.png)) tool, and then on the left, select the **Page** tab (grouped with the **Overrides** tab).

1. In the tree of resource files for the page, expand the **styles** folder.  Files that are already placed in your overrides folder (by using the **Overrides** tab), such as `to-do-styles.css`, have a purple dot on the icon.

1. Right-click a different file, such as **(index)** (which is `index.html`), and then select **Override content**:

   ![Selecting a file from the Sources tool for overrides](./overrides-images/javascript-overrides-safe-from-sources.png)

   In the **Page** tab and **Overrides** tab in the **Sources** tool, the file's icon changes to a page icon with a purple dot (such as for `index.html`), and the file is added to your local drive's Overrides directory.

1. Select the **Network** (![Network tool icon](./overrides-images/network-tool-icon.png)) tool, right-click a resource file for the webpage, such as **to-do.js**, and then select **Override content**:

   ![Selecting a file from the Network tool for overrides](./overrides-images/javascript-overrides-network.png)

   Throughout the DevTools UI, the file's icon changes to a page icon with a purple dot (such as for `to-do.js`), and the file is added to your local drive's Overrides directory.

   When overrides are in effect, resource files that are located on your computer in your Overrides folder are used, rather than resource files that are returned by the web server.
   <!--When overrides are in effect, on the **Network** tool, there's a yellow warning icon next to the file name.-->


<!-- ====================================================================== -->
## Two-way interaction of overrides

Use the editor provided with the **Sources** tool of DevTools or any editor you want to change the files.  Changes are synced across all the products that access the files in the overrides folder.


<!-- ====================================================================== -->
<!-- ## See also -->
