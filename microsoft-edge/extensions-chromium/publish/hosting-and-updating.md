---
title: Extension hosting
description: Host and publish Microsoft Edge extensions in the enterprise.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 12/18/2023
---
# Extension hosting

Most extensions are published to the [Microsoft Edge Add-ons website](https://microsoftedge.microsoft.com/insider-addons/category/EdgeExtensions), to protect users from malicious extensions.


<!-- ====================================================================== -->
## Publish options for extensions

All extensions are distributed to users as a special archive (`.zip`) file with a `.crx` suffix.  Extensions published to the Microsoft Edge Add-ons website are uploaded as `.zip` files.  The publishing process automatically converts the `.zip` file into a `.crx` file.

The following two scenarios don't require you to publish your extension in the Microsoft Edge Add-ons website:
*  Extensions that are distributed using Enterprise policy.
*  Using unpacked extension directories on a local machine when Microsoft Edge is in developer mode.

In both cases, Microsoft Edge periodically checks extension hosts for new versions of installed extensions and automatically updates them without user intervention.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/extensions/how-to/distribute).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
