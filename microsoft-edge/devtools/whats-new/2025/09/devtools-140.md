---
title: What's New in DevTools (Microsoft Edge 140)
description: "DOM tree in Elements tool highlights semantic errors. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 09/04/2025
---
# What's New in DevTools (Microsoft Edge 140)

These are the latest features in the Stable release of Microsoft Edge DevTools.


<!-- ====================================================================== -->
## Invalidation count in CSS selector stats

<!-- Subtitle: Identify expensive selectors with the new column in CSS selctor stats (Performance panel) to reduce costly style recalculations. -->

We updated the Selector stats table view in the Performance panel with a new column: Invalidation count. This indicates an aggregated count of DOM nodes matched by a selector that were invalidated and had their style recalculated. Note. a node can be invalidated multiple times and by multiple selectors.
 
During a recalculate style event, the browser may invalidate many DOM nodes depending on the selector. Inefficient selectors can impact your webpage's performance and if you have high style recalculation costs, then it may be due to over-invalidation. You can use this new insight to identify selectors that have a high invalidation count and reduce over-invalidation by refining your style rules.


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 140 also includes the following updates from the Chromium project:



<!-- ====================================================================== -->
## See also

* [What's New in Microsoft Edge DevTools](../../whats-new.md)
* [Release notes for Microsoft Edge web platform](../../../../web-platform/release-notes/index.md)
