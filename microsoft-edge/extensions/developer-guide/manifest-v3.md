---
title: Overview and timelines for migrating to Manifest V3
description: Timelines for migration from Manifest V2 to V3, and overview of V3, which reduces fragmentation of the web for developers and enhances privacy, security, and performance for end users.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 08/04/2026
---
# Overview and timelines for migrating to Manifest V3

A _manifest file_ is the blueprint of an extension.  A manifest file for an extension includes information such as the version number of the extension, the title of the extension, and permissions needed to run the extension.  The manifest file follows the format specified by Manifest V2 or Manifest V3.

Users browse and install extensions for Microsoft Edge from [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com).


<!-- ---------------------------------------------------------------------- -->
## Overview of changes in Manifest V3

Migrating from Manifest V2 to Manifest V3 brings several structural changes to how extensions are handled by the browser.

In Oct. 2020, Microsoft announced the [decision to embrace Manifest V3](https://blogs.windows.com/msedgedev/2020/10/14/extension-manifest-chromium-edge/) to help reduce fragmentation of the web for all developers and enhance privacy, security, and performance for end users.

Manifest V3 is an initiative of the [Chromium project](https://www.chromium.org/Home/).

An overview of the changes involved, as described in [Migrate an extension from Manifest V2 to V3](./migrate-your-extension-from-manifest-v2-to-v3.md):

* Background pages have been replaced by service workers.

* Network request modifications are now handled by the new `declarativeNetRequest` API.

* Remotely hosted code is no longer allowed.  An extension can only run JavaScript that's included within its own package.

* Support for Promises has been added to many methods.  Callbacks are still supported, as an alternative.

* Various minor feature improvements.


<!-- ---------------------------------------------------------------------- -->
## Manifest timeline for the Chromium browser engine

Chromium has revised the timelines for ending support for Manifest V2.

See:
* [Manifest V2 support timeline](https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline)<!-- chrome link ok, section is re: v2-v3 migration in chromium -->
* [The phase-out timeline](https://developer.chrome.com/blog/resuming-the-transition-to-mv3#the_phase-out_timeline)<!-- chrome link ok, section is re: v2-v3 migration in chromium --> in _Resuming the transition to Manifest V3_.


<!-- ---------------------------------------------------------------------- -->
## Manifest timeline for Microsoft Edge and Partner Center

To help you plan the migration of your extension from Manifest Version 2 to Manifest Version 3, the following schedule shows the planned support for Manifest Version 2 and V3 at Microsoft Partner Center (and the Edge Add-ons store), and in Microsoft Edge.

If your extension still uses Manifest Version 2, migrate to Manifest Version 3 now; see [Migrate an extension from Manifest V2 to V3](./migrate-your-extension-from-manifest-v2-to-v3.md).  After the Manifest Version 3 version of your extension is ready, submit the update through Microsoft Partner Center.

For enterprise customers, extensions that use Manifest Version 2 will continue to be supported until further notice.  Deprecation of Manifest Version 2 extensions for enterprise customers is expected to begin in early 2027.

| Date | Changes |
|---|---|
| Jul. 2022 | Partner Center (and the Edge Add-ons store) no longer accepts new Manifest Version 2 extensions with visibility set to `Public` or `Hidden`.  <br/>To publish a new extension, use Manifest Version 3. |
| Aug. 2026 | If your extension uses Manifest Version 2:  <br/>At Partner Center, a Manifest Version 2 deprecation warning is displayed.  <br/>At the Edge Add-ons store, on the extension's product detail page, a Manifest Version 2 deprecation warning is displayed, for some end-users (and later, for everyone).  <br/>In Microsoft Edge, on the **Manage extensions** page, a Manifest Version 2 deprecation warning is displayed, for some end-users (and later, for everyone). |
| TBD | For enterprise users, in Microsoft Edge, support for Manifest Version 2 will be removed:  <br/>The `ExtensionManifestV2Availability` policy will be removed.  <br/>Extensions that use Manifest Version 2 will no longer work, even on enterprise-managed devices. |
| TBD | Microsoft Partner Center (and thus the Edge Add-ons store) no longer accepts updates to extensions that continue to use Manifest Version 2.  <br/>You can submit an update that migrates a Manifest Version 2 extension to Manifest Version 3. |


<!-- ---------------------------------------------------------------------- -->
## See also

* [Migrate an extension from Manifest V2 to V3](./migrate-your-extension-from-manifest-v2-to-v3.md)
* [Contact the Microsoft Edge extensions team](../contact.md)

Chromium docs: 
* [Manifest V2 support timeline](https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline)<!-- chrome link ok, section is re: v2-v3 migration in chromium -->
* [The phase-out timeline](https://developer.chrome.com/blog/resuming-the-transition-to-mv3#the_phase-out_timeline)<!-- chrome link ok, section is re: v2-v3 migration in chromium --> in _Resuming the transition to Manifest V3_.

External:
* [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) - Browse and install extensions for Microsoft Edge.
* [Microsoft Edge Insider](https://techcommunity.microsoft.com/t5/microsoft-edge-insider/ct-p/MicrosoftEdgeInsider) - forum about Microsoft Edge at Microsoft Tech Community.
