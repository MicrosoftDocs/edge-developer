---
title: Port a Chrome extension to Microsoft Edge
description: The process of porting a Chrome extension to Microsoft Edge.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 02/17/2021
---
# Port a Chrome extension to Microsoft Edge

Microsoft Edge allows you to port your Chrome extension to Microsoft Edge with minimal changes.  The Extension APIs and manifest keys supported by Chrome are code-compatible with Microsoft Edge.  For a list of APIs supported by Microsoft Edge, see [API support](api-support.md).

To port your Chrome extension:

1. Review the Chrome extension APIs used in your extensions with the Microsoft Edge extensions [supported APIs](api-support.md) list.

   If the extension uses APIs that aren't supported by Microsoft Edge, it might not port directly.

1. Remove the `update_url` field from the manifest file.

1. If `Chrome` is used in either the name or the description of your extension, rebrand the extension using `Microsoft Edge`.  To pass the certification process, the changes are required.

1. Test the extension to check if it works in Microsoft Edge by sideloading the extension.  See [Sideload an extension to install and test it locally](../getting-started/extension-sideloading.md).

1. If you encounter any issues, you can:
   * Debug the extension in Microsoft Edge by using DevTools; see [Overview of DevTools](../../devtools/overview.md).
   * [Contact the Microsoft Edge extensions team](../contact.md).

1. Publish the extension at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com); see [Publish a Microsoft Edge extension](../publish/publish-extension.md).


<!-- ====================================================================== -->
## Setting allowed_origins for a native app

If your extension exchanges messages with a native app by using `chrome.runtime.connectNative`, make sure that you set `allowed_origins` to `chrome-extension://[Microsoft-Catalog-extensionID]` in your native messaging host manifest file.  The setting allows the app to identify your extension.


<!-- ====================================================================== -->
## Next steps

After your extension package is ready to publish at [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com):
1. [Register as a Microsoft Edge extension developer](../publish/create-dev-account.md)
1. [Publish a Microsoft Edge extension](../publish/publish-extension.md)
