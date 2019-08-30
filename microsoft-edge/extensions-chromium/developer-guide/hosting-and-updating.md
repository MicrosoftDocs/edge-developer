---
description: Extensions enterprise docs
title: Hosting and Updating
author: shahina
ms.author: msedgedevrel
ms.date: 01/08/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, extensions development, browser extensions, addons, partner center, developer
---

# Web Store hosting and updating

Most extensions are hosted in the [Microsoft Store] to best protect users from malicious extensions.

## Hosting

All extensions are distributed to users as a special ZIP file with a .crx suffix. Extensions hosted in the Microsoft Store are uploaded through the Developer Dashboard as .zip files. The publishing process automatically converts the .zip into a .crx file.

There are two exceptions to the Microsoft Store hosting rule:

1. Extensions that are distributed through the enterprise policy.
1. Unpacked extension directories from a local machine while in developer mode.

## Updating

The Microsoft Browser periodically checks for new versions of installed extensions and updates them without user intervention.

>[!Note]
> Steps to update an extension on Microsoft store will be added soon.

[Microsoft Store]: https://microsoftedge.microsoft.com/insider-addons/category/EdgeExtensions

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google] and used according to terms described in the [Creative Commons Attribution 4.0 International License]. The original page can be found [here].

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

[shared by Google]: https://developers.google.com/terms/site-policies
[Creative Commons Attribution 4.0 International License]: https://creativecommons.org/licenses/by/4.0/
[here]: https://developer.chrome.com/extensions/hosting
