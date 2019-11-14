---
description: Extensions Getting Started Part 1
title: Build a simple extension that pops up NASA picture of the day.
author: MSEdgeTeam
ms.author: xxx
ms.date: 11/11/2019
ms.topic: article
ms.prod: microsoft-edge-chromium
keywords: edge-chromium, web development, html, css, javascript, developer, extensions
---

# Build a simple extension that pops up NASA picture of the day

* Extension technologies covered in this part 1
  * Manifest basics
  * Icons associated with the extension
  * Default modal popup when the extension icon is clicked

<a href = "./extension-source/extension-getting-started-part1.zip" download>Completed Extension Package Source for This Part </a>  

## Overview

In part 1, our goal is to build a very simple Edge Chromium extension starting with an empty directory. Our goal for this extension is to do the following:

* Create icons for the extension that will be used in multiple places and in different sizes
* Create a simple `manifest.json` file
* Display a launch icon that when clicked displays a popup window containing the NASA picture of the day

## The manifest file basics

Every extension must have a `manifest.json` file in its root.  You can think of this as the blueprint for the extension. It tells the browser engine what version of the extension API the extension expects, the name and description of the extension, and lots of other details, many of which we will get to in this multi-part Extension Getting Started Guide. 

Below is the simple  `manifest.json`

```JSON
{
  "name": "NASA Picture of the day viewer",
  "version": "0.0.0.1",
  "manifest_version": 2,
  "description": "A chromium extension to show NASA's Picture of the Day."
}
```

## Extension icons setup

Next thing is to add some icons to `manifest.json` file (and create a new `/icons` directory with the icons files). These icons will be used for the background image of the button the user clicks to launch the extension (if there is one), and other places that are appropriate.  

`PNG` is the recommended format, but you can also use `BMP`, `GIF`, `ICO` and `JPEG`. It is recommended to always have at least a 128x128 pixels size icon and the browser will automatically resize it as necessary.

Your directory structure will now look like this

```
.
│   _manifest.json  
│
└───icons
│   │   nasapod16x16.png
│   │   nasapod32x32.png  
│   │   nasapod48x48.png  
│   │   nasapod128x128.png  
```

and your updated `manifest.json` file is as follows.

```JSON
{
  "name": "NASA Picture of the day viewer",
  "version": "0.0.0.1",
  "manifest_version": 2,
  "description": "A chromium extension to show NASA's Picture of the Day.",
  "icons": {
    "16": "icons/nasapod16x16.png",
    "32": "icons/nasapod32x32.png",
    "48": "icons/nasapod48x48.png",
    "128": "icons/nasapod128x128.png"
  }
}
```

>[!NOTE]
>The icon `png` files listed above are available in the zip download mentioned at the top of this page.

## Adding a default popup dialog

As I said earlier, the `manifest.json` is the blueprint (or brains) of the extension. That said, without doing any custom programming, we can add to the extension an `HTML` file that will automatically run when the user clicks on the extension icon as shown here.

![Toolbar Badge Icon](media/part1-badge1.png)

  The entry we need to add to the `manifest.json` file is `browser_action` and just like `name` and `description`, it's a top level entry. We've named it `popup/popup.html` because, well, it's a popup but we could call it anything. Clicking on the extension icon launches `popup/popup.html` as modal dialog that stays up until you click outside the dialog.

  Adding our `popup/popup.html` as our default popup for our extensions gives us an updated `manifest.json` as follows.

```JSON
{
  "name": "NASA Picture of the day viewer",
  "version": "0.0.0.1",
  "manifest_version": 2,
  "description": "A chromium extension to show NASA's Picture of the Day.",
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

Now, we'll create a `popup.html` (in a folder off the root of our extension), but for now, let's bring into our project an image file `images/stars.jpeg` so we have something built into our extension that can display in our `popup.html` file.

In folder popup, let's add the file `popup.html` and let's have it render our stars image. Here's the `popup.html` file.

```HTML
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

Our folder structure for our extension is this.

```
.
│   _manifest.json  
│
└───icons
│   │   nasapod16x16.png
│   │   nasapod32x32.png  
│   │   nasapod48x48.png  
│   │   nasapod128x128.png    
│   
└───popup
|   │   popup.html
|     
└───images
    │   stars.jpeg 
```

>[!NOTE]
>The `images/stars.jpeg` file listed above is available in the zip download mentioned at the top of this page.

That's everything we need to build a working extension. All that's left to is test it.  

The next section explains how to load the extension (we call that side loading) into the Edge  browser to test it.
