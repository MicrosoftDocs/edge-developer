---
title: Handle files in Progressive Web Apps
description: Learn how to register your PWA as a file handler to more deeply integrate it in the operating system.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/01/2021
ms.topic: conceptual
ms.prod: microsoft-edge
ms.technology: pwa
keywords: progressive web apps, PWA, Edge, JavaScript, files
---
# Handle files in Progressive Web Apps

Progressive Web Apps that can handle files feel more native to users and better integrated in the operating system.  

Websites can already let users upload files by [using the `<input type="file">` or drag and drop][MDNFileUpload], but PWAs go one step further and can register as file handlers on the operating system.  

When a PWA is registered as a file handler for certain file types, the operating system can automatically open it those files are opened by the user, similar to how Microsoft Word handles `.docx` files.  

## Enable the File Handling API  

The File Handling feature is experimental, to enable it:  

1.  Navigate to `edge://flags` in Microsoft Edge.  
1.  Select **Search flags** and type "file handling API".  
1.  Select **Default** > **Enabled** > **Restart**.  

    :::image type="complex" source="../media/enable-file-handling-experiment.png" alt-text="Enable the File Handling API experiment" lightbox="../media/enable-file-handling-experiment.png":::
       Enable the File Handling API experiment  
    :::image-end:::  

## Define which files your app handles  

The first thing to do is declare which types of files your app handles. This is done in your app [manifest file][ManifestFileDoc], using the `file_handlers` array member.

Each entry in the `file_handlers` array needs to have two properties:  

*  `action`: The URL the operating system should request when opening your PWA.
*  `accept`: An object of accepted file types. Keys are MIME-types (partial types, using the wildcard symbol `*`, are accepted), and values are arrays of accepted file extensions.  

Consider the following example:  

```json
{
    "file_handlers": [
        {
            "action": "/newEmail",
            "accept": {
                "image/*": [
                    ".png",
                    ".jpg"
                ],
                "text/*": [
                    ".txt"
                ]
            }
        }
    ]
}
```  

In the above example, one file handler is registered by the app. It will make the operating system present the app as a choice for the user to use when `.png` or `.jpg` image files or `.txt` text files are opened.

## Detect if the File Handling API is available  

Before handling the files, your app needs to check if the File Handling API is available on the device and browser running your app.

The check if the API is available use the following code:  

```javascript
if ('launchQueue' in window) {
    console.log('File Handling API is supported!');
} else {
    console.error('File Handling API is not supported!');
}
```  

## Handle files in your app  

When your app starts because of a file being handled, that's your chance to use the file (or files) content.

Use the following JavaScript code to process the file content, if any:  

```javascript
if ('launchQueue' in window) {
    console.log('File handling API is supported!');

    launchQueue.setConsumer((launchParams) => {
        if (!launchParams.files.length) {
            // No files to handle.
            return;
        }
        // Handle the first file only.
        handleFiles(launchParams.files);
    });
} else {
    console.error('File handling API is not supported!');
}

async function handleFiles(files) {
    for (const file of files) {
        const blob = await file.getFile();
        blob.handle = file;
        const text = await blob.text();

        console.log(`${file.name} handled, content: ${text}`);
    }
}
```  

The `launchQueue` object queues all the launched files until a consumer is set with `setConsumer`. To learn more about the `launchQueue` and `launchParams` objects, navigate to the [File Handling explainer][WICGFileHandlingExplainer].  

## Sample app  

**TODO** Link to an app on our sample catalog that uses this API, and link to its source code on GitHub.

<!-- links -->  

[MDNFileUpload]: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
[ManifestFileDoc]: ../webappmanifests.md "Use the Web App Manifest to integrate your Progressive Web App into the Operating System | Microsoft Docs"  
[WICGFileHandlingExplainer]: https://github.com/WICG/file-handling/blob/main/explainer.md#launch "WICG File Handling explainer | GitHub"
