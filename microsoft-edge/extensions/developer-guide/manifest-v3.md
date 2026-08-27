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

To plan the migration of your extension from Manifest V2 to Manifest V3, the following timeline shows the planned end of support for Manifest V2 at Microsoft Partner Center, at the [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) website, and in Microsoft Edge.

| Date | Changes |
|---|---|
| Jul. 2022 | Partner Center (and the Microsoft Edge Add-ons website) no longer accepts new Manifest V2 extensions.  To publish a new extension, use Manifest V3. |
| Aug. 2026 | At Partner Center, if your extension uses Manifest V2, a Manifest V2 deprecation warning is displayed. |
| Mid Sept. 2026 | Deprecation warnings are displayed to some users, for extensions that continue to use Manifest V2, in the **Manage extensions** page of Microsoft Edge, and at the [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) website. |
| Early 2027 | For enterprise customers, deprecation of Manifest V2 extensions is expected to begin. |
| TBD | Partner Center (and the Microsoft Edge Add-ons website) will no longer accept updates to extensions that continue to use Manifest V2.  You can submit an update that migrates a Manifest V2 extension to Manifest V3. |


<!-- ====================================================================== -->
## Migrate your extension to Manifest V3

If your extension still uses Manifest V2, migrate to Manifest V3 now.  After the Manifest V3 version of your extension is ready, submit the update through Partner Center.

See [Migrate an extension from Manifest V2 to V3](./migrate-your-extension-from-manifest-v2-to-v3.md).


<!-- ====================================================================== -->
## Background

In Oct. 2020, Microsoft announced the decision to embrace Manifest V3, which:
* Reduces fragmentation of the web, for developers.
* Enhances privacy, security, and performance, for end users.

See [Manifest V3 changes are now available to test in Microsoft Edge](https://blogs.windows.com/msedgedev/2020/10/14/extension-manifest-chromium-edge/).


<!-- ====================================================================== -->
## Timeline for Chromium changes

Microsoft Edge is based on the Chromium browser engine.  Manifest V3 is an initiative of the [Chromium project](https://www.chromium.org/Home/).

For information about end of support for Manifest V2 extensions in the Chromium browser engine project, see:
* [Manifest V2 support timeline](https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline)<!-- chrome link ok here -->
* [The phase-out timeline](https://developer.chrome.com/blog/resuming-the-transition-to-mv3#the_phase-out_timeline)<!-- chrome link ok here --> in _Resuming the transition to Manifest V3_.


<!-- ====================================================================== -->
## See also
<!-- all links in article -->

* [Migrate an extension from Manifest V2 to V3](./migrate-your-extension-from-manifest-v2-to-v3.md)
* [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com) website
* [Manifest V3 changes are now available to test in Microsoft Edge](https://blogs.windows.com/msedgedev/2020/10/14/extension-manifest-chromium-edge/) blog post

Chromium docs: 
* [Chromium project](https://www.chromium.org/Home/)
* [Manifest V2 support timeline](https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline)<!-- chrome link ok here -->
* [The phase-out timeline](https://developer.chrome.com/blog/resuming-the-transition-to-mv3#the_phase-out_timeline)<!-- chrome link ok here --> in _Resuming the transition to Manifest V3_.
