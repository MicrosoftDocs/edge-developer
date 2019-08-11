---
ms.assetid: c4544a19-de78-4c69-a042-c0415726548f
description: Learn how to create a new submission for publishing extension on Microsoft Edge Addons Store.
title: create-new-submission
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/08/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, extensions development, browser extensions, addons, partner center, developer
---

# Web Store hosting and updating

Most extensions are hosted in the Microsoft Store to best protect users from malicious extensions.

## Hosting

All extensions are distributed to users as a special ZIP file with a .crx suffix. Extensions hosted in the Microsoft Store are uploaded through the Developer Dashboard as .zip files. The publishing process automatically converts the .zip into a .crx file.

There are three exceptions to the Microsoft Store hosting rule:

1. Extensions that are distributed through the enterprise policy.
1. Unpacked extension directories from a local machine while in developer mode.
1. Linux installation.

## Updating

The Microsoft Browser periodically checks for new versions of installed extensions and updates them without user intervention.

To release an update to an extension, increase the number in the “version” field of the manifest.

```
{
    ...
    "version": "1.5",
    ...
    }
}
```
```
{
    ...
    "version": "1.6",
    ...
    }
}
```
Convert the updated extension directory into a ZIP file and locate the old version in the Developer Dashboard. Select Edit, upload the new package, and hit Publish. The browser will will automatically update the extension for users after the new version is published.
