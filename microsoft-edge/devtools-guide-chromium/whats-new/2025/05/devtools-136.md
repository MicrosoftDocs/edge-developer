---
title: What's New in DevTools (Microsoft Edge 136)
description: "DOM tree adorners in Elements panel for semantic errors. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 05/05/2025
---
# What's New in DevTools (Microsoft Edge 136)

These are the latest features in the Stable release of Microsoft Edge DevTools.


<!-- ====================================================================== -->
## DOM tree adorners in Elements panel highlight semantic errors

<!-- Subtitle: DOM elements with semantic errors will be highlighted with a squiggly line and tooltip. -->

You can now easily identify semantic issues in the DOM tree of the Elements panel, such as: 
* An invalid descendant of `<select>`.
* Mismatched ARIA definitions.
* Missing ARIA attributes.

Each DOM node that has an issue displays a red wavy line, and has a tooltip with details about the specific issue and a link to the entry in the **Issues** tool. 

![DOM adorner in Elements](./devtools-136-images/dom-adorner.png)

To enable this feature, in DevTools experiments, select the checkbox [Highlights a violating node or attribute in the Elements panel DOM tree](../../../experimental-features/index.md#highlights-a-violating-node-or-attribute-in-the-elements-panel-dom-tree).

See also:
* [Turning an experiment on or off](../../../experimental-features/index.md#turning-an-experiment-on-or-off) in _Experimental features in Microsoft Edge DevTools_.


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 136 also includes the following updates from the Chromium project:

* [Performance panel improvements](https://developer.chrome.com/blog/new-in-devtools-136#perf)
* [New performance insights](https://developer.chrome.com/blog/new-in-devtools-136#perf-insights)
* [Click to highlight](https://developer.chrome.com/blog/new-in-devtools-136#click-to-highlight)
* [Server timings in Summary of network requests](https://developer.chrome.com/blog/new-in-devtools-136#server-timings)
* [Filter cookies in 'Privacy and security'](https://developer.chrome.com/blog/new-in-devtools-136#cookies-filter)
* [Sizes in kB units in tables across panels](https://developer.chrome.com/blog/new-in-devtools-136#kb-units)
* [Autocomplete supports corner-shape and corner-*- shape in Elements > Styles](https://developer.chrome.com/blog/new-in-devtools-136#corner-shape-autocomplete)
* [Experimental: Highlighting issues with elements and attributes in DOM](https://developer.chrome.com/blog/new-in-devtools-136#issues-in-dom)
* [Lighthouse 12.5.0](https://developer.chrome.com/blog/new-in-devtools-136#lighthouse)
* [Miscellaneous highlights](https://developer.chrome.com/blog/new-in-devtools-136#misc)


<!-- ====================================================================== -->
## See also

* [What's New in Microsoft Edge DevTools](../../whats-new.md)
* [Release notes for Microsoft Edge web platform](../../../../web-platform/release-notes/index.md)
