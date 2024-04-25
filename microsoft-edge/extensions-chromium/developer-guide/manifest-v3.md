---
title: Overview and timelines for migrating to Manifest V3
description: Migrating from Manifest V2 to V3 will help reduce fragmentation of the web for developers and enhance privacy, security, and performance for end users. This article covers the overview and timelines for migration from Manifest V2 to V3.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: extensions
ms.date: 02/27/2024
---
# Overview and timelines for migrating to Manifest V3

A _manifest file_ is the blueprint of an extension.  A manifest file for an extension includes information such as the version number of the extension, the title of the extension, and permissions needed to run the extension.  The manifest file follows the format specified by Manifest V2 or Manifest V3.  Support for Manifest V2 is being phased out.


<!-- ---------------------------------------------------------------------- -->
## Overview of changes in Manifest V3

Migrating from Manifest V2 to Manifest V3 will bring several structural changes to how extensions are handled by the browser.

In October 2020, Microsoft announced the [decision to embrace Manifest V3](https://blogs.windows.com/msedgedev/2020/10/14/extension-manifest-chromium-edge/) to help reduce fragmentation of the web for all developers and enhance privacy, security, and performance for end users.

Manifest V3 is an initiative of the [Chromium project](https://www.chromium.org/Home/).

An overview of the changes involved, as described in [Migrate to Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate):

* Service workers will replace background pages.

* Network request modifications will be handled by the new `declarativeNetRequest` API.

* Remotely hosted code will no longer be allowed. An extension will only be able to run JavaScript that is included within its own package.

* Promise support will be added to many methods. Callbacks will still be supported as an alternative.

* A number of minor feature improvements will also be introduced in Manifest V3.


<!-- ---------------------------------------------------------------------- -->
## Manifest timeline for the Chromium browser engine

Chromium has revised the timelines for ending support for Manifest V2.  See:

* [Manifest V2 support timeline](https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline)
* [The phase-out timeline](https://developer.chrome.com/blog/resuming-the-transition-to-mv3#the_phase-out_timeline) in _Resuming the transition to Manifest V3_.


<!-- ---------------------------------------------------------------------- -->
## Manifest timeline for Microsoft Edge and Partner Center

To help you plan the migration of your extension from Manifest V2 to Manifest V3, consider the following schedule for support for Manifest V2 and V3 in Microsoft Edge and Microsoft Partner Center.

The Microsoft Edge team will independently decide on MV3 migration timelines for Microsoft Edge Add-ons and share an update here.  We continue to analyze the concerns raised by extension developers and explore the optimal path for Microsoft Edge Add-ons ecosystem.  Meanwhile, to plan the migration of your extension from Manifest V2 to Manifest V3, see [Manifest timeline for the Chromium browser engine](#manifest-timeline-for-the-chromium-browser-engine), above.


**The Microsoft Edge team is currently in the process of updating this MV3 migration timeline.**

| Timeframe | Microsoft Partner Center changes | Microsoft Edge changes |
|--- |--- |--- |
| July 2022 (already in effect) | Microsoft Partner Center will no longer accept new Manifest V2 extensions with visibility set as `Hidden` or `Public`. | No change. |
| TBD | Microsoft Partner Center will no longer accept updates to existing Manifest V2 extensions. Developers can submit updates for migrating a V2 extension to V3. | Microsoft Edge stops running Manifest V2 extensions. Enterprises can allow Manifest V2 extensions to run on Microsoft Edge, by using enterprise policies. |
| TBD | No change. | Manifest V2 extensions will no longer function in Microsoft Edge, even with the use of enterprise policies. |


Microsoft continues to iteratively improve the platform and address the feedback shared by extension developers.

Share your questions, comments, and concerns with the team on Twitter [@MSEdgeDev](https://twitter.com/msedgedev/) or via the [Microsoft Edge Insider forums on TechCommunity](https://techcommunity.microsoft.com/t5/articles/manifest-v3-changes-are-now-available-in-microsoft-edge/m-p/1780254).


<!-- ---------------------------------------------------------------------- -->
## See also

* [Migrate to Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate)
* [Manifest V2 support timeline](https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline)
* [The phase-out timeline](https://developer.chrome.com/blog/resuming-the-transition-to-mv3#the_phase-out_timeline) in _Resuming the transition to Manifest V3_.
