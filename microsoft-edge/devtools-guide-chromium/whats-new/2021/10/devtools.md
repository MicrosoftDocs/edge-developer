---
description: Changes in the CSS Styles editor now show up in your CSS files inside Visual Studio Code.  All console errors and warnings now have a Search Web link.  Improved keyboard access for defining User-Agent Client Hints.  Improved filtering for grouped messages in the Console.
title: What's new in DevTools (Microsoft Edge 95)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/06/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# What's New in DevTools (Microsoft Edge 95)

[!INCLUDE [note about What's New announcements from the Microsoft Edge DevTools team](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Sync live changes from the Styles tool by using CSS Mirror Editing

<!-- Title: CSS Mirror Editing in VS Code -->
<!-- Subtitle: Changes in the CSS Styles editor now show up in your CSS files inside Visual Studio Code. -->

The Microsoft Edge DevTools extension for Visual Studio Code now features an experiment called **CSS Mirror Editing**.  Using this feature, you can use the **Styles** tool to adjust your CSS, and the changes you apply are automatically added to the CSS source files in the editor.  You can toggle this functionality on and off.

For more information, see [Microsoft Edge DevTools extension for Visual Studio Code](../../../../visual-studio-code/microsoft-edge-devtools-extension.md#syncing-live-changes-from-the-styles-tool-by-using-css-mirror-editing).

To provide feedback, in Visual Studio Code, in the **Activity Bar**, click **Microsoft Edge Tools**, and then in the **CSS Mirror Editing** section, click the **leaving feedback here** link.

:::image type="content" source="../../media/2021/10/css-mirror-editing-button.msft.png" alt-text="Changes in the CSS Styles editor now show up in your CSS files inside Visual Studio Code." lightbox="../../media/2021/10/css-mirror-editing-button.msft.png":::


<!-- ====================================================================== -->
## All error and warning messages in the Console now have a Search Web link

<!-- Title: All console errors and warnings now have a Search Web link -->
<!-- Subtitle: You can now search for any of your console errors and warnings right from DevTools. -->

The **Search for this message on the Web** link is now available on all errors and warnings in the **Console**.  Previously, this link only appeared on some of the common errors and warnings.  Now the link has been added on the remaining errors and warnings.  The relevant error or warning string is used as the search string.

For more information, see [Search for Console errors on the web](../09/devtools.md#search-for-console-errors-on-the-web).

:::image type="content" source="../../media/2021/10/console-message-search-web-link.png" alt-text="All error and warning messages in the Console now have a Search Web link." lightbox="../../media/2021/10/console-message-search-web-link.png":::


<!-- ====================================================================== -->
## Improved keyboard access for defining User-Agent Client Hints

<!-- Title: When adding a custom device to emulate in DevTools, specify user agent client hints more easily -->
<!-- Subtitle: We've improved keyboard access when navigating to user agent clients from Settings. -->

Starting with [Microsoft Edge version 92](../05/devtools.md#user-agent-client-hints-for-devices-in-the-network-conditions-tab), you can specify User-Agent Client Hints when defining the user agent string in the **Network conditions** tool or when adding a custom device to emulate in **Settings**.

In earlier versions of Microsoft Edge, when adding a custom device to emulate from the **Devices** section of **Settings**, selecting the **User agent client hints** button with the keyboard moved focus to the **Add custom device** button and a new device would be added automatically.

In Microsoft Edge version 95, this issue has been fixed.  Selecting the **User agent client hints** button now expands into a form where you can specify client hints for the custom device.

To view the history of this feature in the Chromium open-source project, see [Issue 1243827: User agent client hints form accessibility](https://bugs.chromium.org/p/chromium/issues/detail?id=1243827).

To learn more about User-Agent Client Hints, see [Detecting Microsoft Edge from your website](../../../../web-platform/user-agent-guidance.md#user-agent-client-hints).

:::image type="content" source="../../media/2021/10/keyboard-define-ua-client-hints.png" alt-text="Description" lightbox="../../media/2021/10/keyboard-define-ua-client-hints.png":::


<!-- ====================================================================== -->
## Console filters now display grouped messages if the filter matches the group title

<!-- Title: Improved filtering for grouped messages in the Console -->
<!-- Subtitle: Filters in the Console is now more intuitive, displaying grouped messages only when the filter matches the group label. -->

In earlier versions of Microsoft Edge, there were several problems when trying to filter grouped messages in the Console. You can use `console.group()` to label a group of messages and provide some organization for Console messages. However, when filtering to a group label, the Console wouldn't display individual messages inside the group.  Also, filtering wouldn't hide group labels, even if the label didn't match the filter.

In Microsoft Edge version 95, these problems have been fixed.  Filtering to a label now displays the group label and the individual messages inside of the group.  When the filter doesn't match the group label, the entire group is hidden.

To learn more about the `group()` API for the Console in DevTools, navigate to [Console API reference: group](../../../../devtools-guide-chromium/console/api.md#group).

To view the history of this feature in the Chromium open-source project, see [Issue 363796: ☂ Console filter inappropriately hides grouped content and doesn't hide group titles](https://bugs.chromium.org/p/chromium/issues/detail?id=363796).

When the filter string matches a group label, the group and its members are displayed:

:::image type="content" source="../../media/2021/10/filter-matches-group-label.png" alt-text="When the filter string matches a group label, the group and its members are displayed." lightbox="../../media/2021/10/filter-matches-group-label.png":::

When the filter string doesn't match a group label, neither the group nor its members are displayed:

:::image type="content" source="../../media/2021/10/filter-matches-group-label-asdf.png" alt-text="When the filter string doesn't match a group label, neither the group nor its members are displayed." lightbox="../../media/2021/10/filter-matches-group-label-asdf.png":::


<!-- ====================================================================== -->
<!--
Chrome What's New items to add:
## New CSS length authoring tools
## Improved the display of properties
## Sort snippets in the Sources panel
## Improved UI for DevTools command menu
-->


<!-- ====================================================================== -->
## Download the Microsoft Edge preview channels

If you are on Windows, Linux, or macOS, consider using the [Canary preview channel of Microsoft Edge](https://www.microsoftedgeinsider.com/download) as your default development browser.  The preview channels give you access to the latest features of Microsoft Edge DevTools.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page for announcements from the Chromium project is [What's New In DevTools (Chrome 95)](https://developer.chrome.com/blog/new-in-devtools-95) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors/jecelynyeen) (Developer advocate working on Chrome DevTools at Google).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
