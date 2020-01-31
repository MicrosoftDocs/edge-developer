---
ms.assetid: c4397525-b978-4dc2-89bc-2198b3069742
description: See how to package your Microsoft Edge extension in a snap with ManifoldJS, the Node.js open source tool.
title: Using ManifoldJS to package extensions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/15/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
ms.custom: seodec18
---

# Using ManifoldJS to create extension AppX packages  

[!INCLUDE [deprecation-note](../../includes/deprecation-note.md)]  

ManifoldJS is an open source Node.js tool that allows you to quickly and painlessly create a package that you can then use for submission to the Microsoft Store.

If you use native messaging in your extension, you should skip this and go to [Native messaging in Microsoft Edge](../native-messaging.md#creating-an-extension-with-native-messaging) for packaging instruction. 

Before getting started, you will still need to read up on the following articles:

- [Extensions in the Windows Dev Center](./extensions-in-the-windows-dev-center.md)
- [Localizing extension packages](./localizing-extension-packages.md)

> [!NOTE]
> Submitting a Microsoft Edge extension to the Microsoft Store is currently a restricted capability. Once you've created, packaged and tested your extension, please submit a request on our [extension submission form](https://aka.ms/extension-request).


## Installing Node.js and ManifoldJS

The first things you'll need to do is install [Node.js LTS](https://nodejs.org/en/download/).
Once you have Node, from a command line (preferably PowerShell), run the following command to install ManifoldJS:

`npm install -g manifoldjs`

To verify that you've correctly installed ManifoldJS, run `manifoldjs` from the command line. If ManifoldJS wasn't recognized, add `%APPDATA%\npm` to your PATH variables.

## Packaging with ManifoldJS

To start the packaging process, you'll need to open a command line and change directories to a folder that will be the destination for your packaged extension.

For example:

`cd C:\manifoldJSTest`

> [!NOTE]
> ManifoldJS will output in the current directory and can overwrite content.



Now that you're in your destination folder, run the following command:

`manifoldjs -l debug -p edgeextension -f edgeextension -m <EXTENSION LOCATION>\manifest.json`


This command can be broken down into the following parts:
 -    **-l debug**: Changes the log level to "debug" to get a full print out.
 -    **-p edgeextension**: Sets the only platform to run the conversion on to edgeextension.
 -    **-f edgeextension**: Tells the program that the format of the manifest is an edgeextension format and not to care if it fails validation.
 -    **-m \<EXTENSION LOCATION>\manifest.json**: The path to the extension manifest that you want to convert.


After ManifoldJS has finished running, you'll have a folder with the following contents:

    My Extension
        edgeextension
            generationInfo.json
            manifest
                   appxmanifest.xml
                Assets
                    Square150x150Logo.png
                    Square44x44Logo.png
                    StoreLogo.png    
                Extension
                    manifest.json
                    popup.html
                    ...
                ...

The generationInfo.json file is a log produced by running ManifoldJS and won't be included in your extension package. Only the contents of the **manifest** folder will be packaged. Within the manifest folder, the Assets folder contains the images that will be used in the Windows and Microsoft Store UI, while the Extension folder has the contents of your extension within it.


Now that you have the correct files, you'll need to edit the generated AppXManifest file within the **manifest** folder. If the extension’s manifest.json file has an internationalized string for the "name" field, once ManifoldJS is run, the most top layer folder’s name will have no underscores and include "MSG".

For example, a manifest.json file with the following `"name"` field:

`"name" : "__MSG_appName__"`

will have a manifest folder that lives in `\<CURRENT DIRECTORY>\MSGappName\edgeextension\manifest`.

In the AppXManifest file, you'll need to:
 -    Replace the required Identity fields and PublisherDisplayName field as outlined [here](./creating-and-testing-extension-packages.md#app-identity-template-values). Note that if you're only packaging for testing purposes or for enterprise distribution, you can use placeholder values instead of registering for a Windows Dev Center account.
 -    Replace the placeholder icons in the Assets folder with icons for your extension with the same sizes (150x150, 50x50, 44x44) and names. See the [Design](./../design.md#icons-for-packaging) guide for information about where these icons are used.
 - If your extension is localized, follow the entire [Localizing Microsoft Edge extensions](./localizing-extension-packages.md) guide. If it isn't localized, only read the [Localizing name and description in the Microsoft Store](./localizing-extension-packages.md#localizing-name-and-description-in-the-microsoft-store) section.

Once your appxmanifest.xml file is sorted out, run the following command to create your package:

`manifoldjs -l debug -p edgeextension package <EXTENSION NAME>\edgeextension\manifest\`

Your package will now be in the **package** folder located within the edgeextension folder. See Creating and testing extension packages' [testing](./creating-and-testing-extension-packages.md#testing-an-appx-package) section for info on how to sideload your new package.

Once your package has been tested, feel free to submit a request on our [extension submission form](https://aka.ms/extension-request) in order to be considered for publication to the Microsoft Store.
