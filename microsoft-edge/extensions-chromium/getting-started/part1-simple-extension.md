---
description: Build an extension that pops up the NASA picture of the day
title: Create an extension tutorial - Part 1
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/23/2020
ms.topic: conceptual
ms.prod: microsoft-edge
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Create an extension tutorial - Part 1  

## Overview  

The goal for this tutorial is to build a Microsoft Edge (Chromium) extension starting with an empty directory. We'll build an extension that pops up the NASA picture of the day. 
In this tutorial, you'll learn how to create an extension by:

*   Creating a `manifest.json` file.  
*   Adding icons.  
*   Opening a default pop-up dialog.  

## Before you Begin

If you'd like to test out the completed extension that you'll build in this tutorial, download the [source code][ArchiveExtensionGettingStartedPart1].  

## Step 1: Create a `manifest.json` file

Every extension package must have a `manifest.json` file at the root.  The manifest provides details of your extension, the version of the extension API to use, the extension name and description, and so on.  

The following code snippet outlines the basic information needed in your `manifest.json` file.  

```json
{
    "name": "NASA picture of the day viewer",
    "version": "0.0.0.1",
    "manifest_version": 2,
    "description": "A Chromium extension to displays the NASA picture of the day."
}
```  

## Step 2: Add icons  

Next add some icons to the `manifest.json` file. Start by creating the `icons` directory in your project to store the icon image files.  The icons are used for the background image of the button the user selects to launch the extension.  

:::image type="complex" source="./media/part1-badge1.png" alt-text="Icon on the toolbar to open your extension":::
   Icon on the toolbar to open your extension
:::image-end:::

For icons, we recommend using: 
*   `PNG` format for icons, but you may also use `BMP`, `GIF`, `ICO` or `JPEG` formats.  
*   Icons that are 128 x 128 px, which are resized by the browser if necessary.  

The directories of your project should be similar to the following structure.   

```shell
└── part1
    ├── _manifest.json
    └── icons
        ├── nasapod16x16.png
        ├── nasapod32x32.png
        ├── nasapod48x48.png
        └── nasapod128x128.png
```  

Update your `manifest.json` file with the icons information so that it matches the following code snippet. The `png` files listed in the following code are available in the download file mentioned earlier in this article.  

```json
{
    "name": "NASA picture of the day viewer",
    "version": "0.0.0.1",
    "manifest_version": 2,
    "description": "A chromium extension to show the NASA picture of the day.",
    "icons": {
        "16": "icons/nasapod16x16.png",
        "32": "icons/nasapod32x32.png",
        "48": "icons/nasapod48x48.png",
        "128": "icons/nasapod128x128.png"
    }
}
```  

## Step 3: Adding a default pop-up dialog  

Now, create a `HTML` file that's run when the user chooses the icon to launch your extension.  Create the HTML file called `popup.html` in a directory called `popup`.  When users select the icon, `popup/popup.html` is displayed as a modal dialog.  

Add the code from the following code snippet to `popup.html` to display the stars image.  

```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>NASA picture of the day</title>
    </head>
    <body>
        <div>
            <img src="/images/stars.jpeg" alt="Display the stars image" />
        </div>
    </body>
</html>
```  

Ensure that you add the image file `images/stars.jpeg` to the images folder.  The directories of your project should be similar to the following structure.   

```shell
└── part1
    ├── _manifest.json
    ├── icons
    │   ├── nasapod16x16.png
    │   ├── nasapod32x32.png
    │   ├── nasapod48x48.png
    │   └── nasapod128x128.png
    ├── images
    │   └── stars.jpeg
    └── popup
        └── popup.html
```  

Finally, ensure you register the pop-up in the `manifest.json` under `browser_action`, as shown in the following code snippet.  

```json
{
    "name": "NASA picture of the day viewer",
    "version": "0.0.0.1",
    "manifest_version": 2,
    "description": "A chromium extension to display the NASA picture of the day.",
    "icons": {
        "16": "icons/nasapod16x16.png",
        "32": "icons/nasapod32x32.png",
        "48": "icons/nasapod48x48.png",
        "128": "icons/nasapod128x128.png"
    },
    "browser_action": {
        "default_popup": "popup/popup.html"
    }
}
```  

## Next steps
That's everything you need to develop a working extension. Now, continue on to sideload and run your extension. For more information, see [Sideload an extension][TestExtensionSideload].  


<!-- image links -->  

<!--[ImagePart1Heirarchy]: ./media/part1-heirarchy.png "Directory Structure"  -->  
<!--[ImagePart1Badge1]: ./media/part1-badge1.png "Toolbar Badge Icon"  -->  
<!--[ImagePart1Heirarchy1]: ./media/part1-heirarchy1.png "Directory Structure for Extension"  -->  
<!--[ImagePart1Threedots]: ./media/part1-threedots.png "Choose Extensions"  -->  
<!--[ImagePart1DevelopermodeToggle]: ./media/part1-developermode-toggle.png "Enable Developer Mode"  -->  
<!--[ImagePart1InstalledExtension]: ./media/part1-installed-extension.png "Installed Extensions"  -->  

<!-- links -->  

[ArchiveExtensionGettingStartedPart1]: ./extension-source/extension-getting-started-part1.zip "Completed Extension Package Source for This Part | Microsoft Docs"

[TestExtensionSideload]: ./extension-sideloading.md "Test your extension (Sideloading) | Microsoft Docs"
