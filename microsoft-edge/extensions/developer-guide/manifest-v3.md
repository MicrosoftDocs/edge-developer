---
title: Timeline for migrating to Manifest V3
description: Timeline for migration from Manifest V2 to V3, which reduces fragmentation of the web for developers and enhances privacy, security, and performance for end users.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 08/07/2026
---
# Timeline for migrating to Manifest V3

To plan the migration of your extension from Manifest V2 to Manifest V3, the following timeline shows the planned support for Manifest V2:
* At Microsoft Partner Center.
* At the [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) store.
* In Microsoft Edge.

If your extension still uses Manifest V2, migrate to Manifest V3 now; see [Migrate an extension from Manifest V2 to V3](./migrate-your-extension-from-manifest-v2-to-v3.md).  After the Manifest V3 version of your extension is ready, submit the update through Partner Center.

In Oct. 2020, Microsoft announced the decision to embrace Manifest V3, to help reduce fragmentation of the web for all developers and enhance privacy, security, and performance for end users.  See [Manifest V3 changes are now available to test in Microsoft Edge](https://blogs.windows.com/msedgedev/2020/10/14/extension-manifest-chromium-edge/).

Manifest V3 is an initiative of the [Chromium project](https://www.chromium.org/Home/).


<!-- ---------------------------------------------------------------------- -->
## Manifest timeline for Partner Center and Microsoft Edge

| Date | Changes |
|---|---|
| Jul. 2022 | Partner Center (and the Edge Add-ons store) no longer accepts new Manifest V2 extensions that have `Public` or `Hidden` visibility.  <br/>* To publish a new extension, use Manifest V3. |
| Aug. 2026 | If your extension uses Manifest V2:  <br/>* At Partner Center, a Manifest V2 deprecation warning is displayed.  <br/>* At the Edge Add-ons store, on the extension's product detail page, a Manifest V2 deprecation warning is displayed, for some end-users (and later, for everyone).  <br/>* In Microsoft Edge, on the **Manage extensions** page, a Manifest V2 deprecation warning is displayed, for some end-users (and later, for everyone). |
| TBD | For enterprise users, in Microsoft Edge, support for Manifest V2 will be removed:  <br/>* The [ExtensionManifestV2Availability](/deployedge/microsoft-edge-policies/extensionmanifestv2availability) policy will be removed.  <br/>* Extensions that use Manifest V2 will no longer work, even on enterprise-managed devices. |
| TBD | Partner Center (and the Edge Add-ons store) will no longer accept updates to extensions that continue to use Manifest V2.  <br/>* You can submit an update that migrates a Manifest V2 extension to Manifest V3. |

For enterprise customers:
* Extensions that use Manifest V2 will continue to be supported until further notice.
* Deprecation of Manifest V2 extensions is expected to begin in early 2027.


<!-- ====================================================================== -->
## Manifest timeline for the Chromium browser engine

Chromium has revised the timelines for ending support for Manifest V2.

See:
* [Manifest V2 support timeline](https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline)<!-- chrome link ok here -->
* [The phase-out timeline](https://developer.chrome.com/blog/resuming-the-transition-to-mv3#the_phase-out_timeline)<!-- chrome link ok here --> in _Resuming the transition to Manifest V3_.


<!-- ====================================================================== -->
## Overview of changes in Manifest V3

Migrating an extension from using Manifest V2 to using Manifest V3 brings several structural changes to how extensions are handled by the browser.

When moving from Manifest V2 to Manifest V3:

* Background pages have been replaced by service workers.

* Network request modifications are now handled by the new `declarativeNetRequest` API.

* Remotely hosted code is no longer allowed.  An extension can only run JavaScript that's included within its own package.

* Support for Promises has been added to many methods.  Callbacks are still supported, as an alternative.

* Various minor feature improvements.

For details, see [Migrate an extension from Manifest V2 to V3](./migrate-your-extension-from-manifest-v2-to-v3.md).


<!-- ---------------------------------------------------------------------- -->
## See also
<!-- all links in article -->

<!-- local: -->
* [Migrate an extension from Manifest V2 to V3](./migrate-your-extension-from-manifest-v2-to-v3.md)

Chromium docs: 
* [Chromium project](https://www.chromium.org/Home/)
* [Manifest V2 support timeline](https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline)<!-- chrome link ok here -->
* [The phase-out timeline](https://developer.chrome.com/blog/resuming-the-transition-to-mv3#the_phase-out_timeline)<!-- chrome link ok here --> in _Resuming the transition to Manifest V3_.

External:
* [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) store.
* [Manifest V3 changes are now available to test in Microsoft Edge](https://blogs.windows.com/msedgedev/2020/10/14/extension-manifest-chromium-edge/) - blog post.
* [ExtensionManifestV2Availability](/deployedge/microsoft-edge-policies/extensionmanifestv2availability) in _Microsoft Edge - Policies_ docs.
