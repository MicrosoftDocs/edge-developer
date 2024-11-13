---
title: What's New in DevTools (Microsoft Edge 129)
description: "Unique breakpoint icons. Fixed CSS selector stats Copy table. Added Activity Bar icons. Fixed Security tool icons and device emulation. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 09/20/2024
---
# What's New in DevTools (Microsoft Edge 129)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Improvements for breakpoints

<!-- Subtitle: Refreshed icons to help differentiate breakpoint types, and the textbox width has been fixed in the UI for setting a conditional breakpoint.-->

The **Sources** tool has the following improvements related to setting breakpoints for debugging.


<!-- ------------------------------ -->
#### Unique icons for logpoint and conditional breakpoints

Logpoint and conditional breakpoints now have unique colors and icons to help you differentiate them from regular breakpoints in the line number column.  Previously, all types of breakpoints looked the same, with only the differentiating icon inline with the code.

Before:

![Old breakpoint icons](./devtools-129-images/old-breakpoints.png)

After:

![New breakpoint icons](./devtools-129-images/new-breakpoints.png)


<!-- ------------------------------ -->
#### Alignment in UI for setting a conditional breakpoint

The UI that's displayed for setting a conditional breakpoint has been fixed to prevent the width of the textbox from growing and causing alignment issues.

Before:

![Old conditional breakpoint dialog](./devtools-129-images/old-dialog.png)

After:

![New conditional breakpoint dialog](./devtools-129-images/new-dialog.png)


<!-- ====================================================================== -->
## Bug fixes in the Elements tool

<!-- Screen readers announce the "Show element in the Elements panel" button, and the context menu opens when right-clicking a selected text node in the DOM tree. -->


<!-- ------------------------------ -->
#### Screen readers announce the "Show element in the Elements panel" button

In the **Layout** tab, screen readers now announce the **Show element in the Elements panel** (![The "Show element in the Elements panel" icon](./devtools-129-images/show-element-icon.png)) button that's next to each element name:

![The "Show element in the Elements panel" button](./devtools-129-images/show-element-button.png)


<!-- ------------------------------ -->
#### Context menu opens when right-click a selected text node in the DOM tree

Previously, the context menu didn't open after double-clicking a text node in the DOM tree to select the text node, and then right-clicking the text node.  This issue has been fixed; the context menu opens:

![Right-click menu for a selected text node in the DOM tree](./devtools-129-images/context-menu-for-dom-text-node.png)


<!-- ====================================================================== -->
## CSS selector stats "Copy table" has same order of columns and values

<!-- Subtitle: The 'Copy table' command for CSS selector stats copies data with the values aligned with columns. -->

In the **Selector stats** tab of the **Performance** tool, the **Copy table** menuitem command has been fixed to correctly copy the data in the order that the columns and values appear.

![Selector stats "Copy table" command](./devtools-129-images/selector-stats-copy.png)


<!-- ====================================================================== -->
## Icons in the Activity Bar are restored

<!-- Subtitle: Icons in the Activity Bar help you quickly identify the tools. -->

In recent releases, in the **Activity Bar** tabs, the icons were missing for the following tools:
* **Changes**
* **Network conditions**
* **Network request blocking**
* **Performance monitor**
* **Quick source**
* **Search**

The icons have been restored in these **Activity Bar** tabs.


<!-- ====================================================================== -->
## Fixed buttons and icons in the Security tool

<!-- Subtitle: Understand your webpage's security issues with the Security tool -->

Previously, buttons and icons in the **Security** tool had a square overlay and were not readable:

![Security tool bug](./devtools-129-images/buggy-security-tool.png)

Now, buttons and icons in the **Security** tool are clearly visible:

![Security tool fix](./devtools-129-images/fixed-security-tool.png)


<!-- ====================================================================== -->
## Device emulation mode is fixed

<!-- Subtitle: DevTools opens again after closing DevTools with device emulation mode still on. -->

Device emulation mode had a bug where if it was turned on and then DevTools was closed, DevTools wouldn't reopen the next time you tried to open it.  This has been fixed; device emulation mode is working correctly.


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 129 also includes the following updates from the Chromium project:

* [Recorder supports export to Puppeteer for Firefox](https://developer.chrome.com/blog/new-in-devtools-129#puppeteer-export)
* [Performance panel improvements](https://developer.chrome.com/blog/new-in-devtools-129#perf)
   * [Live metrics observations](https://developer.chrome.com/blog/new-in-devtools-129#observations)
   * [Search requests in the Network track](https://developer.chrome.com/blog/new-in-devtools-129#perf-network-search)
   * [See stack traces of performance.mark and performance.measure calls](https://developer.chrome.com/blog/new-in-devtools-129#extension-stack-traces)
* [Elements panel improvements](https://developer.chrome.com/blog/new-in-devtools-129#elements)
   * [Force more states for specific elements](https://developer.chrome.com/blog/new-in-devtools-129#specific-element-states)
   * [Elements > Styles now autocompletes more grid properties](https://developer.chrome.com/blog/new-in-devtools-129#grid-autocomplete)



<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 129)](https://developer.chrome.com/blog/new-in-devtools-129) and is authored by Sofia Emelianova. -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
