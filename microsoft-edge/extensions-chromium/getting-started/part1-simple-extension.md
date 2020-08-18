---
description: Extensions Getting Started Part 1
title: Build A Simple Extension That Pops Up NASA Picture Of The Day
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/08/2020
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Build A Simple Extension That Pops Up NASA Picture Of The Day  

[Completed Extension Package Source for This Part][ArchiveExtensionGettingStartedPart1]  

## Overview  

In part 1, the goal is to build a very simple Edge Chromium Extension starting with an empty directory.  The goal for this Extension is to complete the following tasks.  

*   Create icons for the Extension that may be used in multiple places and in different sizes  
*   Create a simple `manifest.json` file  
*   Display a launch icon that when selected displays a pop-up window containing the NASA picture of the day  

## The manifest file basics  

Every Extension package must have a `manifest.json` file at the root.  You should think of this as the blueprint for the Extension.  It tells the browser engine what version of the Extension API the Extension expects, the name and description of the Extension, and lots of other details, many of which are discussed in this multi-part Extension Getting Started guide.  

Below is the simple  `manifest.json`  

```json
{
    "name": "NASA Picture of the day viewer",
    "version": "0.0.0.1",
    "manifest_version": 2,
    "description": "A Chromium Extension to show the NASA Picture of the Day."
}
```  

## Extension icons setup  

Next add some icons to `manifest.json` file \(and create a new `/icons` directory with the icons files\).  The icons are used for the background image of the button the user selects to launch the extension \(if there is one\), and other places that are appropriate.  

`PNG` is the recommended format, but you may also use `BMP`, `GIF`, `ICO` and `JPEG`.  It is recommended to always have at least a 128x128 pixels size icon and the browser automatically resizes it as necessary.  

Your directory structure should look like the following diagram.  

<!--  
:::image type="complex" source="./media/part1-heirarchy.png" alt-text="Directory Structure":::
   Directory Structure
:::image-end:::
-->  

<!--![Directory Structure][ImagePart1Heirarchy]  -->  

```shell
└── part1
    ├── _manifest.json
    └── icons
        ├── nasapod16x16.png
        ├── nasapod32x32.png
        ├── nasapod48x48.png
        └── nasapod128x128.png
```  

Your updated `manifest.json` file should appear as follows.  

```json
{
    "name": "NASA Picture of the day viewer",
    "version": "0.0.0.1",
    "manifest_version": 2,
    "description": "A chromium extension to show the NASA Picture of the Day.",
    "icons": {
        "16": "icons/nasapod16x16.png",
        "32": "icons/nasapod32x32.png",
        "48": "icons/nasapod48x48.png",
        "128": "icons/nasapod128x128.png"
    }
}
```  

> [!NOTE]
> The icon `png` files listed previous code are available in the zip download mentioned at the top of this page.  

## Adding a default pop-up dialog  

Now, create an `HTML` file that is automatically run when the user selects on the extension icon.  

:::image type="complex" source="./media/part1-badge1.png" alt-text="Toolbar Badge Icon":::
   Toolbar Badge Icon
:::image-end:::

<!--![Toolbar Badge Icon][ImagePart1Badge1]  -->  

The HTML file is named `popup/popup.html`.  Selecting the Extension icon launches `popup/popup.html` as modal dialog that stays up until you select outside the dialog.  

For this, register the file as a default pop-up in the `manifest.json` under `browser_action` in the following code.  

```json
{
    "name": "NASA Picture of the day viewer",
    "version": "0.0.0.1",
    "manifest_version": 2,
    "description": "A chromium Extension to show the NASA Picture of the Day.",
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

In the `popup` directory , add the file `popup.html` and have it render the stars image.  Here is the `popup.html` file.  

```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>NASA Picture of the Day</title>
    </head>
    <body>
        <div>
            <img src="/images/stars.jpeg" alt="stars" />
        </div>
    </body>
</html>
```  

 Also, add an image file `images/stars.jpeg` that is referenced in the `popup.html` file.  

The directory structure for the example Extension is displayed in the following diagram.  

<!--  
:::image type="complex" source="./media/part1-heirarchy1.png" alt-text="Directory Structure for Extension":::
   Directory Structure for Extension
:::image-end:::
-->  

<!--![Directory Structure for Extension][ImagePart1Heirarchy1]  -->  

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

> [!NOTE]
> The `images/stars.jpeg` file listed in the previous image is available in the [zip download][ArchiveExtensionGettingStartedPart1].  

That is everything you need to build a working Extension.  All that is left to is test it.  

The next section explains how to load the Extension \(sometimes called side loading\) into the Microsoft Edge \(Chromium\) browser to test it.  

## Run your Extension locally in your browser while developing it \(side-loading\)  

The Microsoft Edge \(Chromium\) browser provides a safe and simple way for you to run as well as debug your Extensions while you are developing.  

The process is quite simple.  You must first select the three dots at the top of your browser.  Next, choose `Extensions` from the context menu as shown in the following image.  

:::image type="complex" source="./media/part1-threedots.png" alt-text="Choose Extensions":::
   Choose Extensions
:::image-end:::

<!--![Choose Extensions][ImagePart1Threedots]  -->  

When you are on the **Extensions** page as shown in the following image, enable the **Developer mode** by enabling the toggle at the bottom left of the page as shown in the following image.  

:::image type="complex" source="./media/part1-developermode-toggle.png" alt-text="Enable Developer Mode":::
   Enable Developer Mode
:::image-end:::

<!--![Enable Developer Mode][ImagePart1DevelopermodeToggle]  -->  

## Installing and updating side-loaded Extensions  

The first time you want to install your Extension, you choose the `Load Unpacked` option as shown in the following image.  This prompts you for a directory where you have your Extension assets file by file.  This installs the Extension as if you had downloaded it from a store.  

:::image type="complex" source="./media/part1-installed-extension.png" alt-text="Installed Extensions":::
   Installed Extensions
:::image-end:::

<!--![Installed Extensions][ImagePart1InstalledExtension]  -->  

After you install your Extension, you may update it by selecting the `Reload` button under your Extension listing.  

To remove the Extension from your browser, click the `Remove` button on the bottom of the Extension listing.  

## Debugging Extensions  

Debugging Extensions is quite easy and supports all of the features in Edge Chromium DevTools.  Those details however are not covered in this getting started guide but are very important to successfully build Extensions.  

<!-- image links -->  

<!--[ImagePart1Heirarchy]: ./media/part1-heirarchy.png "Directory Structure"  -->  
<!--[ImagePart1Badge1]: ./media/part1-badge1.png "Toolbar Badge Icon"  -->  
<!--[ImagePart1Heirarchy1]: ./media/part1-heirarchy1.png "Directory Structure for Extension"  -->  
<!--[ImagePart1Threedots]: ./media/part1-threedots.png "Choose Extensions"  -->  
<!--[ImagePart1DevelopermodeToggle]: ./media/part1-developermode-toggle.png "Enable Developer Mode"  -->  
<!--[ImagePart1InstalledExtension]: ./media/part1-installed-extension.png "Installed Extensions"  -->  

<!-- links -->  

[ArchiveExtensionGettingStartedPart1]: ./extension-source/extension-getting-started-part1.zip "Completed Extension Package Source for This Part | Microsoft Docs"  
