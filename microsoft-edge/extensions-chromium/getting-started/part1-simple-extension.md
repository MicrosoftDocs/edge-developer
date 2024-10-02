---
title: "Tutorial part 1: Create a simple extension"
description: Build an extension that pops up the NASA picture of the day.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 09/25/2024
---
# Tutorial part 1: Create a simple extension

The goal for this tutorial is to build a Microsoft Edge extension, starting with an empty directory.  You are building an extension that pops up the NASA picture of the day, named "NASA picture of the day viewer".  In this tutorial, you'll learn how to create an extension by:

*   Creating a `manifest.json` file.
*   Adding icons.
*   Opening a default pop-up dialog.

If you want to test out the completed extension that you are building in this tutorial, either:
* Clone the [microsoft / MicrosoftEdge-Extensions](https://github.com/microsoft/MicrosoftEdge-Extensions) repo to your local drive.  Use repo directory `/extension-getting-started-part1/`.
* Download the source code from the repo directory [MicrosoftEdge-Extensions repo > extension-getting-started-part1](https://github.com/microsoft/MicrosoftEdge-Extensions/tree/main/Extension%20samples/extension-getting-started-part1/part1).


<!-- ====================================================================== -->
## Step 1: Create a manifest.json file

Every extension package must have a `manifest.json` file at the root.  The manifest provides details of your extension, the extension package version, the extension name and description, and so on.

*   In a directory on your machine, using an editor, such as Visual Studio Code, create a `manifest.json` file that contains the following lines:

    ```json
    {
        "name": "NASA picture of the day viewer",
        "version": "0.0.0.1",
        "manifest_version": 3,
        "description": "An extension to display the NASA picture of the day."
    }
    ```
    

<!-- ====================================================================== -->
## Step 2: Add icons

1.  Create an `icons` directory in your project, in the same directory as the manifest file, to store the icon image files.  The icons are used for the background image of the button that users select to launch the extension.

    ![Icon on the toolbar to open your extension](./part1-simple-extension-images/part1-badge1.png)

    For icons:
    *   We recommend using `PNG` format, but you can also use `BMP`, `GIF`, `ICO` or `JPEG` formats.
    *   We recommend using images that are 128 x 128 px, which are resized by the browser if necessary.
    
1.  Make sure the directories of your project are similar to the following structure:

    ```shell
    └── part1
        ├── manifest.json
        └── icons
            ├── nasapod16x16.png
            ├── nasapod32x32.png
            ├── nasapod48x48.png
            └── nasapod128x128.png
    ```
    
1.  Obtain the `.png` files from the repo:
    * `nasapod16x16.png`
    * `nasapod32x32.png`
    * `nasapod48x48.png`
    * `nasapod128x128.png`

    For example, individually download the files from the repo directory [/extension-getting-started-part1/part1/icons](https://github.com/microsoft/MicrosoftEdge-Extensions/tree/main/Extension%20samples/extension-getting-started-part1/part1/icons) and place them in your `/icons/` directory.

1.  List the icons in the `manifest.json` file, as follows:

    ```json
    {
        "name": "NASA picture of the day viewer",
        "version": "0.0.0.1",
        "manifest_version": 3,
        "description": "An extension to display the NASA picture of the day.",
        "icons": {
            "16": "icons/nasapod16x16.png",
            "32": "icons/nasapod32x32.png",
            "48": "icons/nasapod48x48.png",
            "128": "icons/nasapod128x128.png"
        }
    }
    ```
    

<!-- ====================================================================== -->
## Step 3: Open a default pop-up dialog

Create a `HTML` file to run when the user launches your extension.  When the user clicks the icon to launch the extension, this file will be displayed as a modal dialog.

1.  Create the HTML file named `popup.html` in a directory named `popup`.  

1.  Add the following code to `popup.html`, to display the stars image:

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
    
1.  Add the file `stars.jpeg` in the `images` folder.  For example, download the file from the repo directory [/extension-getting-started-part1/part1/images](https://github.com/microsoft/MicrosoftEdge-Extensions/tree/main/Extension%20samples/extension-getting-started-part1/part1/images).

1.  Make sure the directories of your project are similar to the following structure:

    ```shell
    └── part1
        ├── manifest.json
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
    
1.  Register the pop-up in `manifest.json` under `action`, as follows:

    ```json
    {
        "name": "NASA picture of the day viewer",
        "version": "0.0.0.1",
        "manifest_version": 3,
        "description": "An extension to display the NASA picture of the day.",
        "icons": {
            "16": "icons/nasapod16x16.png",
            "32": "icons/nasapod32x32.png",
            "48": "icons/nasapod48x48.png",
            "128": "icons/nasapod128x128.png"
        },
        "action": {
            "default_popup": "popup/popup.html"
        }
    }
    ```
    

<!-- ====================================================================== -->
## Next steps

That's everything you need to develop a working extension.  Next, install and run the extension; see [Sideload an extension to install and test it locally](extension-sideloading.md).


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Tutorial part 2: Add JavaScript to the extension](./part2-content-scripts.md)<!-- not linked in present article -->
* [Sideload an extension to install and test it locally](extension-sideloading.md)
* [MicrosoftEdge-Extensions repo > extension-getting-started-part1](https://github.com/microsoft/MicrosoftEdge-Extensions/tree/main/Extension%20samples/extension-getting-started-part1/part1) - source code of the completed extension that you build in this tutorial.
