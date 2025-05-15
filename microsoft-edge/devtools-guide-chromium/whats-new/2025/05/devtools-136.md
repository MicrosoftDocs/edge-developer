---
title: What's New in DevTools (Microsoft Edge 136)
description: "DOM tree adorners in Elements panel for semantic errors. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 05/01/2025
---
# What's New in DevTools (Microsoft Edge 136)

These are the latest features in the Stable release of Microsoft Edge DevTools.


<!-- ====================================================================== -->
## DOM tree adorners in Elements panel highlight semantic errors

<!-- Subtitle: DOM elements with semantic errors will be highlighted with a squiggly line and tooltip. -->

You can now easily identify semantic issues(invalid descendant of `<select>`, mismatched ARIA definitions, missing ARIA attributes) in the DOM tree of the Elements panel. Each DOM node with an issue will display a red squiggly line and have a tooltip with details on the specific issue and link to in the Issues panel. 

You can enable this feature in the experiment setting: "Highlights a violating node or attribute in the Elements panel DOM tree.

![DOM adorner in Elements](./devtools-136-images/dom-adorner.png)


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 136 also includes the following updates from the Chromium project:


<!-- ====================================================================== -->
## See also

* [What's New in Microsoft Edge DevTools](../../whats-new.md)
* [Release notes for Microsoft Edge web platform](../../../../web-platform/release-notes/index.md)
