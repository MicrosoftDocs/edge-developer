---
title: What's New in DevTools (Microsoft Edge 129)
description: "Updated labels for selector stats. Fixed whitespace in Activity Bar right-click menus. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 09/19/2024
---
# What's New in DevTools (Microsoft Edge 129)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Improvements to breakpoints

<!-- Subtitle: Refreshed icons to help differentiate breakpoint types and the conditional breakpoint dialog alignment has been fixed.-->

Logpoint and conditional breakpoints now have unique colors and icons to help you differentiate them from regular breakpoints in the line number column. Previously, all types of breakpoints looked the same, with only the differentiating icon inline with the code.

Before:

![Old breakpoint icons](./devtools-129-images/old-breakpoints.png)

After:

![New breakpoint icons](./devtools-129-images/new-breakpoints.png)

Also, the dialog displayed for setting a conditional breakpoint has been fixed to prevent the width of the textbox from growing and causing alignment issues.

Before:

![Old conditional breakpoint dialog](./devtools-129-images/old-dialog.png)

After:

![New conditional breakpoint dialog](./devtools-129-images/new-dialog.png)


<!-- ====================================================================== -->
## Bug fixes in the Elements panel

<!-- Screen readers will announce the "Show element in the Elements panel" button and the context menu has been restored. -->

Under the Layout panel, screen readers now announce the **Show element in the Elements panel** button. 

Previously, the context menu wouldn't appear after right-clicking on selected text in the Elements panel. This issue has been fixed and the context menu has been restored.


<!-- ====================================================================== -->
## CSS selector stats copy table works now as expected

<!-- Subtitle: The Copy table function for CSS selector stats copies data with the values aligned with columns. -->

The **Copy table** function has been fixed to correctly copy the data in the order that the columns and values appear.

![Selector stats copy table function](./devtools-129-images/selector-stats-copy.png)


<!-- ====================================================================== -->
## Icons in the Activity Bar are restored

<!-- Subtitle: Icons in the Activity Bar help you quickly identify the tools. -->

Previously, the following tools were missing icons in the Activity Bar:
- Changes
- Network conditions
- Network request blocking
- Performance monitor
- Quick source
- Search

All the icons have been restored for these tools in Microsoft Edge 129.

<!-- ====================================================================== -->
## Fixed buttons and icons in the Security panel

<!-- Subtitle: Understand your webpage's security issues with the Security tool -->

The rendering of the buttons and icons in the Security tool showed a green overlay on-top:
![Security panel bug](./devtools-129-images/buggy-security-tool.png)

This issue has been resolved.
![Security panel fix](./devtools-129-images/fixed-security-tool.png)


<!-- ====================================================================== -->
## Device emulation mode is fixed

<!-- Subtitle: Use device emulation mode to simulate different devices. -->

Device emulation mode had a bug where if it was turned on and then DevTools was closed, then DevTools wouldn't reopen the next time. This has been fixed and device emulation mode is working correctly now.

<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 129 also includes the following updates from the Chromium project:


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 128)](https://developer.chrome.com/blog/new-in-devtools-128) and is authored by [Sofia Emelianova](https://developers.google.com/web/resources/contributors) (Senior Technical Writer working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
