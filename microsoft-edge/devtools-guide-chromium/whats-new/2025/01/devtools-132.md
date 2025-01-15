---
title: What's New in DevTools (Microsoft Edge 132)
description: "Can disable Edge experiment settings. View CSS selector stats information in Insights tab of sidebar panel in Performance tool. Fixed edit field to exit after pressing tab after auto-completion. Removed Visual Studio Code themes. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 1/16/2025
---
# What's New in DevTools (Microsoft Edge 132)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## CSS selector costs now include links in the Insights sidebar

<!-- Subtitle: Selectors have clickable links to their stylesheet in the Insights sidebar. -->

The left sidebar in the **Performance** tool displays the costs of CSS selectors in the **Insights** tab When the **Enable CSS selector stats (slow)** checkbox is enabled. Now, the selectors will have links to the stylesheets that contain them. Some selectors might have more than one link when they are defined in multiple locations in a stylesheet or defined in multiple stylesheets. For example, two links will be shown as `[1],[2]`. Selectors from user agent stylesheets or dynamically created stylesheets won't have links. 


![CSS selector costs links](./devtools-132-images/selector-stats-links.png)

<!-- ====================================================================== -->
## Move a tab left or right in the Quick View toolbar by right-clicking it

<!-- Subtitle: Move the tabs in the Quick View toolbar left or right by using the tab's right-click menu. -->

Previously, you could rearrange the tabs in **Quickk View** only by dragging them. This can be difficult for users who are using input devices such as a trackball or head pointer. Now, you can also move a tab left or right by right-clicking the tab and then selecting **Move left** or **Move right**:

![The context menu from right-clicking a tool's tab on the Quick View toolbar](./devtools-132-images/quick-view-context-menu.png)

See also:
* [Pin and rearrange tools in the Activity Bar](/microsoft-edge/devtools-guide-chromium/overview#pin-and-rearrange-tools-in-the-activity-bar) in _Overview of DevTools_.

<!-- ====================================================================== -->
## Heap snapshot objects are categorized by constructor names and source locations in the Memory tool

<!-- JS objects are grouped by their names and sources in the Memory tool.-->

Before, when JS objects in the heap snapshot Summary view were grouped by the names of their constructors, it was possible for distinct constructors to have the same name, meaning unrelated objects could end up in the same group. Now, JS objects are grouped together based on their constructor names and source locations. 

<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 132 also includes the following updates from the Chromium project:



<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 131)](https://developer.chrome.com/blog/new-in-devtools-131) and is authored by Sofia Emelianova. -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
