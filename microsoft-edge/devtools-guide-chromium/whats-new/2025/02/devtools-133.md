---
title: What's New in DevTools (Microsoft Edge 133)
description: "CSS selector costs include links in Insights sidebar. Right-click a tab to move it left or right in Quick View. Heap snapshot objects categorized by constructor names and source locations in Memory tool. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 2/06/2025
---
# What's New in DevTools (Microsoft Edge 133)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Move a tab left or right in the tab menus in Elements and Sources tools

<!-- Subtitle: Move the tabs in Elements and Sources tab menus left or right by using the tab's right-click menu. -->

Previously, you could rearrange the tabs in menus only by dragging them.  This can be difficult for users who are using input devices such as a trackball or head pointer.  Now, you can also move a tab left or right by right-clicking the tab and then selecting **Move left** or **Move right**:

![The context menu from right-clicking a tab in a menu in Elements](./devtools-133-images/elements-tab-menu.png)

![The context menu from right-clicking a tab in a menu in Sources](./devtools-133-images/sources-tab-menu.png)

<!-- ====================================================================== -->
## Screen reader improvements

<!-- Subtitle: Screen reader improvements in Developer resources, Elements, and CSS Overview.-->

The screen reader has been improved for various tools:
* **Developer resources**: When searching in 'Filter by URL and error' text box, it will announce the results information. If no results are available, then it will announce 'no appeared results'.
![The Filter box in Developer resources](./devtools-133-images/developer-resources-filter-box.png)

* **Elements**: Announces the expand/collapse state of the 'More tabs" button
![The tab menu in Elements](./devtools-133-images/elements-more-tabs-invoked.png)

* **CSS Overview**: When navigating to a tab, announces the tab label. After entering a tab and navigating to an 'occurrences' button', its label will be announced.
![The CSS Overview panel](./devtools-133-images/css-overview.png)


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 133 also includes the following updates from the Chromium project:

* [Performance panel improvements](https://developer.chrome.com/blog/new-in-devtools-133#perf)
   * [Image delivery insight](https://developer.chrome.com/blog/new-in-devtools-133#perf-image-delivery)
   * [Classic and modern keyboard navigation](https://developer.chrome.com/blog/new-in-devtools-133#perf-nav)
   * [Ignore irrelevant scripts in the flame chart](https://developer.chrome.com/blog/new-in-devtools-133#ignore-list)
   * [Timeline marker and range highlighting on hover](https://developer.chrome.com/blog/new-in-devtools-133#hover-highlight)
   * [Recommended throttling settings](https://developer.chrome.com/blog/new-in-devtools-133#throttling)
   * [Timings markers in an overlay](https://developer.chrome.com/blog/new-in-devtools-133#markers)
   * [Stack traces of JavaScript calls in Summary](https://developer.chrome.com/blog/new-in-devtools-133#perf-stack-traces)
* [Badge settings moved to menu in Elements](https://developer.chrome.com/blog/new-in-devtools-133#badge-settings)
 
<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 132)](https://developer.chrome.com/blog/new-in-devtools-132) and is authored by Sofia Emelianova. -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
