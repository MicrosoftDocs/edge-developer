---
ms.assetid: ab9a9230-27dd-4351-b808-a0c5f5b301e6
description: Learn how to add support for folder uploading to your website by using a picker or drag-and-drop.
title: Dev guide - Folder upload
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Folder upload

Microsoft Edge supports uploading files, folders, and combinations of files and folders using APIs that are interoperable with Chrome.

| API | Description |
| --- | ----------- |
| DataTransferItem.[webkitGetAsEntry](https://msdn.microsoft.com/library/mt709130) method | Returns the `WebKitEntry` object (a file or directory) corresponding to the `DataTransferItem`. |
| [WebKitEntry](https://msdn.microsoft.com/library/mt732557) interface | Represents a file or directory. (Use the `isDirectory` and `isFile` properties to determine what it is.) |
| [WebKitDirectoryReader](https://msdn.microsoft.com/library/mt732554) interface | Provides the `readEntries` method to traverse the files in the given directory. |
| [WebKitFileSystem](https://msdn.microsoft.com/library/mt732564) interface | Provides an interface to the (sandboxed) file system for the upload. You can use the `filesystem` property of a `WebKitEntry` object to get the globally unique name and the root folder of the file system being used for the drag and drop (or file/folder picker) operation. Current support is scoped to drag-and-drop scenarios via `webkitGetAsEntry` (and not file/folder picker). |

## Example

This snippet demonstrates how to differentiate between the files and folders of an item
that's been selected for upload.

<div class="codepen-wrap"><p data-height="300" data-theme-id="23761" data-slug-hash="wWwBqa?editors=1010" data-default-tab="result" data-user="MSEdgeDev" data-embed-version="2" data-editable="true" class="codepen">See this example by <a href="https://codepen.io/MSEdgeDev">Microsoft Edge Docs</a> on <a href="https://codepen.io/MSEdgeDev/pen/wWwBqa?editors=1010">CodePen</a>.</p></div><script async src="//assets.codepen.io/assets/embed/ei.js"></script>



## API Reference

[FileSystem API](https://msdn.microsoft.com/library/mt732552)

## Specification

[FileSystem API](https://wiki.whatwg.org/wiki/DragAndDropEntries)
