---
description: Process of porting Chrome extension to Microsoft Edge
title: Port a Chrome extension to Microsoft Edge
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/17/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: edge-chromium, extensions development, browser extensions, addons, partner center, developer
---
# Port a Chrome extension to Microsoft Edge

Microsoft Edge allows you to port your Chrome extension to Microsoft Edge with minimal changes.  The Extension APIs and manifest keys supported by Chrome are code-compatible with Microsoft Edge.  For a list of APIs supported by Microsoft Edge, navigate to [API support](./api-support.md).

To port your Chrome extension, complete the following steps.

1.  Review the Chrome extension APIs used in your extensions with the Microsoft Edge extensions [supported APIs](./api-support.md) list.

    > [!NOTE]
    > If your extension uses APIs that are not supported by Microsoft Edge, it may not port directly.

1.  In the manifest file, set the `update_URL` field to `https://edge.microsoft.com/extensionwebstorebase/v1/crx`.  The value points to the `.crx` file of your extension in the Microsoft Edge Add-ons website and allows Microsoft Edge to check for extension updates.
1.  If `Chrome` is used in either the name or the description of your extension, rebrand your extension using `Microsoft Edge`.  To pass the certification process, the changes are required.
1.  Test your extension to check if it works in Microsoft Edge by [sideloading your extension](../getting-started/extension-sideloading.md).
1.  If you face any issues, you may debug your extensions in Microsoft Edge by using the DevTools, or [contact us](mailto:ext_dev_support@microsoft.com).
1.  Follow the [publishing guidelines](../publish/publish-extension.md) to publish your extension on Microsoft Edge Add-ons website.

    > [!NOTE]
    > If your extension exchanges messages with a native app using `chrome.runtime.connectNative`, ensure that you set `allowed_origins` to `extension://[Microsoft-Catalog-extensionID]` in your native messaging host manifest file.  The setting allows the app to identify your extension.


<!-- ====================================================================== -->
## Next steps

After your extension package is ready to publish in the Microsoft Edge Add-ons website, [create a developer account](../publish/create-dev-account.md) and [publish your extension](../publish/publish-extension.md).
