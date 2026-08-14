---
title: Extension hosting
description: Host and publish a Microsoft Edge extension in the enterprise.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 12/18/2023
---
# Extension hosting

Most extensions are published at the [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) website, to protect users from malicious extensions.


<!-- ====================================================================== -->
## Publish options for extensions

All extensions are distributed to users as a special archive (`.zip`) file with a `.crx` suffix.  An extension that's published at the Microsoft Edge Add-ons website is uploaded as a `.zip` file.  The publishing process automatically converts the `.zip` file into a `.crx` file.

The following two scenarios don't require you to publish the extension at the Microsoft Edge Add-ons website:
* Using an unpacked extension directory on a local machine, when Microsoft Edge is in developer mode.
* An extension that's distributed by using Enterprise policy.

In both cases, Microsoft Edge periodically checks extension hosts for new versions of installed extensions, and automatically updates the extension without user intervention.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/extensions/how-to/distribute).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
