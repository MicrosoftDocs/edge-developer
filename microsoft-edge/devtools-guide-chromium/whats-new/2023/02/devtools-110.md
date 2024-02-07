---
title: What's New in DevTools (Microsoft Edge 110)
description: "Faster heap snapshots in Memory tool. Move tools between Activity Bar and Quick View in Focus Mode. Screen readers report when More Tools is expanded. Change Dock and Activity Bar location via keyboard. Screen readers announce which theme is selected. Improved support for contrast themes. And more."
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 02/09/2023
---
# What's New in DevTools (Microsoft Edge 110)

[!INCLUDE [Microsoft Edge team note for top of What's New](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Taking heap snapshots in the Memory tool is now faster

<!-- Subtitle: When taking a heap snapshot greater than 1 GB in size, the time spent generating the snapshot in the Memory tool is at least 70% faster. -->

In previous versions of Microsoft Edge, generating large heap snapshots (over 1 GB) in the **Memory** tool could take anywhere from 2 to 15 minutes, depending on the size of your website or app, and how many elements were stored in memory.

In Microsoft Edge 110, the **Memory** tool is now 70% to 86% faster at taking heap snapshots.  For larger heap snapshots, we're seeing the greatest improvement in speed.  If you've noticed that taking heap snapshots is much faster, please leave us feedback in [[Feedback] Taking heap snapshots in the Memory tool is now faster #131](https://github.com/MicrosoftEdge/DevTools/issues/131).

![Taking a heap snapshot in the Memory tool](./devtools-110-images/faster-heap-snapshot.png)

See also:
* [Record heap snapshots using the Memory tool](../../../memory-problems/heap-snapshots.md#take-a-snapshot)


<!-- ====================================================================== -->
## Move tools between the Activity Bar and Quick View more easily in Focus Mode

<!-- Subtitle: Customize both the Activity Bar and Quick View in Focus Mode to see only the tools you care about. -->

Microsoft Edge 110 contains various improvements to Focus Mode in DevTools.  The following changes make it easier to customize the **Activity Bar** and the **Quick View** panel, to show only the tools that you're currently interested in.


<!-- ------------------------------ -->
#### When moving a tool, the right-click menu shows the current placement of the destination toolbar

The right-click menu command for moving a tool between the **Quick View** panel and the **Activity Bar** now indicates the placement of the destination toolbar, such as:
* **Move to bottom Quick View**
* **Move to side Quick View**
* **Move to top Activity Bar**
* **Move to left Activity Bar**

![Right-click menu showing 'Move to bottom Quick View'](./devtools-110-images/move-to-bottom-quick-view.png)


<!-- ------------------------------ -->
#### The right-click menu is no longer displayed over the tool's tab in the toolbar

The right-click menu for moving a tool between the **Activity Bar** and the **Quick View** toolbar no longer obscures the tool's name in the toolbar.

For example, the **Network Conditions** tool name remains visible when you right-click the tool's tab in the **Quick View** toolbar:

![The right-click menu in Quick View](./devtools-110-images/focus-mode-moving-tools-context-menu.png)

As another example, the **Network** tool name remains visible when you right-click the tool's tab in the **Activity Bar**:

![The right-click menu in the Activity Bar](./devtools-110-images/tool-name-remains-visible.png)


<!-- ------------------------------ -->
#### Focus is preserved in Activity Bar or Quick View when moving a tool between them

For keyboard shortcut and assistive technology users, focus is preserved in the **Activity Bar** or **Quick View** toolbar when moving the currently selected tool from one toolbar to the other, or when removing a tool from the toolbar.

For example, suppose the **Network** tool has been moved to the **Quick View** toolbar, and you right-click the **Network** tab on the **Quick View** toolbar:

![Right-clicking the Network tool in Quick View](./devtools-110-images/right-click-network-tool-to-move.png)

If you then select **Remove from Quick View**, focus stays in the **Quick View** toolbar and moves to the **Network conditions** tool, which is the next tool in the **Quick View** toolbar:

![Focus stays in the Quick View toolbar and moves to another tool in the Quick View toolbar](./devtools-110-images/focus-moves-to-other-tool-same-toolbar.png)


<!-- ====================================================================== -->
## Accessibility improvements for themes, customizing locations, and the More Tools button

<!-- Subtitle: Using assistive technology such as screen readers and keyboard shortcuts with DevTools is now easier. -->

The following accessibility issues have been fixed, and using assistive technology such as screen readers and keyboard shortcuts with DevTools is now easier.


<!-- ------------------------------ -->
#### Screen readers correctly report when the More Tools menu is expanded

In previous versions of Microsoft Edge, screen readers reported that the **More tools** (![Plus sign](./devtools-110-images/more-tools-focus-mode-icon.png)) button was collapsed, when the **More tools** menu was actually expanded.  In Microsoft Edge 110, this issue has been fixed.

Screen readers now correctly report when the **More tools** (![Plus sign icon](./devtools-110-images/more-tools-focus-mode-icon.png)) menu is expanded:

![The 'More tools' menu in Focus Mode](./devtools-110-images/a11y-focus-mode-more-tools.png)


<!-- ------------------------------ -->
#### Change Dock location and Activity Bar location by using the keyboard

In previous versions of Microsoft Edge, in Focus Mode, it wasn't possible to change the **Dock location** or the **Activity Bar location** via the keyboard.  In Microsoft Edge 110, this issue has been fixed.

In Focus Mode, you can now change the Dock location and the **Activity Bar** location from the **Customize and control DevTools** (![Ellipses icon](./devtools-110-images/customize-devtools-focus-mode-icon.png)) menu by using the arrow keys:

![Changing the Dock location in Focus Mode by pressing arrow keys](./devtools-110-images/a11y-focus-mode-dock-location.png)


<!-- ------------------------------ -->
#### Screen readers announce which theme is currently selected when scrolling through themes

In previous versions of Microsoft Edge, when scrolling through the list of themes for DevTools, screen readers didn't announce whether or not a theme was selected.  In Microsoft Edge 110, this issue has been fixed.

Screen readers now announce which theme is currently selected when you are moving among the themes in the **Customize and control DevTools** (![The Ellipses icon](./devtools-110-images/customize-devtools-focus-mode-icon.png)) menu:

![Navigating among the themes in Focus Mode](./devtools-110-images/a11y-focus-mode-themes-menu.png)


See also:
* [Navigate DevTools with assistive technology](../../../accessibility/navigation.md)


<!-- ====================================================================== -->
## The Network, Console, Issues, and Sources tools have improved support for contrast themes

<!-- Subtitle: When a Windows contrast theme is applied, using DevTools is now easier. -->

DevTools in Microsoft Edge 110 now has better support for Windows contrast themes.  The **Network**, **Console**, **Issues**, and **Sources** tools have all been improved so that the tools render correctly with contrast themes.

In the **Issues** tool, with the **Desert** contrast theme applied in Windows, when you put focus on a particular issue, the details about the issue were displayed against a solid background, which made the text hard to read.  In Microsoft Edge 110, this has been fixed, by using an outline instead of a solid background:

![The Issues tool with the Desert contrast theme applied](./devtools-110-images/hc-mode-issues-tool.png)

In the **Network** tool, with the **Desert** contrast theme applied in Windows, selecting a particular request made the text and icon for the request hard to see.  In Microsoft Edge 110, this has been fixed:

![The Network tool with the Desert contrast theme applied](./devtools-110-images/hc-mode-network-tool.png)

See also:
* [Apply a color theme to DevTools](../../../customize/theme.md)
* [Check for contrast issues with dark theme and light theme](../../../accessibility/test-dark-mode.md)
* [Change color contrast in Windows](https://support.microsoft.com/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696)


<!-- ====================================================================== -->
## Announcements from the Chromium project

Microsoft Edge 110 also includes the following updates from the Chromium project:

* [Clearing Performance Panel on reload](https://developer.chrome.com/blog/new-in-devtools-110/#perf)
* [Automatic in-place pretty print](https://developer.chrome.com/blog/new-in-devtools-110/#pretty-print)
* [Better syntax highlight and inline preview for Vue, SCSS and more](https://developer.chrome.com/blog/new-in-devtools-110/#syntax)
* [Ergonomic and consistent Autocomplete in the Console](https://developer.chrome.com/blog/new-in-devtools-110/#console)


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- > [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New in DevTools (Chrome 110)](https://developer.chrome.com/blog/new-in-devtools-110) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen) (Developer advocate working on Chrome DevTools at Google). -->


<!-- ====================================================================== -->
<!-- uncomment if content is copied from developer.chrome.com to this page -->

<!-- [![Creative Commons License](../../../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0). -->
