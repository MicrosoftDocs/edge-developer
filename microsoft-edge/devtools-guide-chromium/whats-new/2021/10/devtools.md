---
description: Changes in the CSS Styles editor now show up in your CSS files inside Visual Studio Code.  All console errors and warnings now have a Search Web icon.  Improved keyboard access for defining User-Agent Client Hints.  Improved filtering for grouped messages in the Console.
title: What's new in DevTools (Microsoft Edge 95)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/20/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# What's New in DevTools (Microsoft Edge 95)

The top of this page lists announcements from the Microsoft Edge DevTools team, and then the bottom of this page describes selected features from the Chromium project.  To try new features in Microsoft Edge DevTools, including in the DevTools extension for Visual Studio Code, read these announcements.

To stay up to date with the latest and greatest features, follow the Microsoft Edge DevTools team on [Twitter](https://twitter.com/EdgeDevTools).

If you are on Windows, Linux, or macOS, consider using the [Canary preview channel of Microsoft Edge](https://www.microsoftedgeinsider.com/download) as your default development browser.  The preview channels (Beta, Dev, and Canary) give you access to the latest features of Microsoft Edge DevTools.


<!-- ====================================================================== -->
## Sync live changes from the Styles tool in the Visual Studio Code extension

<!-- Title: CSS Mirror Editing in Visual Studio Code -->
<!-- Subtitle: Changes in the CSS Styles editor now show up in your CSS files inside Visual Studio Code. -->

The [Microsoft Edge DevTools extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools) now features an experiment called **CSS Mirror Editing**.  Using this feature, you can use the **Styles** tool to adjust your CSS, and the changes you apply are automatically added to the CSS source files in the Visual Studio Code editor.  You can toggle this functionality on and off.

For more information, see [Syncing live changes from the Styles tool by using CSS Mirror Editing](../../../../visual-studio-code/microsoft-edge-devtools-extension.md#syncing-live-changes-from-the-styles-tool-by-using-css-mirror-editing).

To provide feedback, in Visual Studio Code, in the **Activity Bar**, click **Microsoft Edge Tools**, and then in the **CSS Mirror Editing** section, click the **leaving feedback here** link.

:::image type="content" source="../../media/2021/10/css-mirror-editing-button.msft.png" alt-text="Changes in the CSS Styles editor now show up in your CSS files inside Visual Studio Code." lightbox="../../media/2021/10/css-mirror-editing-button.msft.png":::


<!-- ====================================================================== -->
## All error and warning messages in the Console now have a Search Web icon

<!-- Title: All console errors and warnings now have a Search Web icon -->
<!-- Subtitle: You can now search for any of your console errors and warnings right from DevTools. -->

The **Search for this message on the Web** icon is now available for all errors and warnings in the **Console**.  Previously, this icon only appeared for some of the common errors and warnings.  Now the icon has been added on the remaining errors and warnings.  Click the **Search for this message on the Web** icon to search the web using the relevant error or warning string.

For more information, see [Search for Console errors on the web](../09/devtools.md#search-for-console-errors-on-the-web).

:::image type="content" source="../../media/2021/10/console-message-search-web-button.png" alt-text="All error and warning messages in the Console now have a Search Web icon." lightbox="../../media/2021/10/console-message-search-web-button.png":::


<!-- ====================================================================== -->
## Improved keyboard access for defining User-Agent Client Hints

<!-- Title: Improved keyboard access when navigating to User agent client hints in Settings -->
<!-- Subtitle: When adding a custom device to emulate in DevTools, you can now expand the User agent client hints section more easily. -->

Starting with [Microsoft Edge version 92](../05/devtools.md#user-agent-client-hints-for-devices-in-the-network-conditions-tab), you can specify User-Agent Client Hints.  You can specify User-Agent Client Hints in either of two places:

*  [When defining the user agent string in the Network conditions tool](../../../device-mode/override-user-agent.md).
*  [When adding a custom device to emulate in Settings](../../../device-mode/index.md#add-a-custom-mobile-device).

In Microsoft Edge prior to version 95, when adding a custom device to emulate from the **Devices** section of **Settings**, selecting the **User agent client hints** button with the keyboard caused the incorrect UI item to be activated.  Instead of expanding the **User agent client hints** section for you to fill it in, it selected the **Add** button.  The device you were starting to define was immediately added, using empty fields in the **User agent client hints** section.

In Microsoft Edge version 95, this issue has been fixed.  Selecting the **User agent client hints** button by using the keyboard now expands a form, in which you can specify client hints for the custom device.

To learn more about User-Agent Client Hints, see [Detecting Microsoft Edge from your website](../../../../web-platform/user-agent-guidance.md#user-agent-client-hints).

:::image type="content" source="../../media/2021/10/keyboard-define-ua-client-hints.png" alt-text="Description" lightbox="../../media/2021/10/keyboard-define-ua-client-hints.png":::

To view the history of this feature in the Chromium open-source project, see [Issue 1243827: User agent client hints form accessibility](https://bugs.chromium.org/p/chromium/issues/detail?id=1243827).


<!-- ====================================================================== -->
## Console filters now display grouped messages if the filter matches the group title

<!-- Title: Improved filtering for grouped messages in the Console -->
<!-- Subtitle: Filters in the Console is now more intuitive, displaying grouped messages only when the filter matches the group label. -->

You can use `console.group()` to label a group of messages and provide some organization for Console messages.  In earlier versions of Microsoft Edge, there were several problems when trying to filter grouped messages in the Console.  When filtering to a group label, the Console wouldn't display individual messages inside the group.  Also, filtering wouldn't hide group labels, even if the label didn't match the filter.

In Microsoft Edge version 95, these problems have been fixed.  Filtering to a label now displays the group label and the individual messages inside of the group.  When the filter doesn't match the group label, the entire group is hidden.

To learn more about the `group()` API for the Console in DevTools, navigate to [Console API reference: group](../../../../devtools-guide-chromium/console/api.md#group).

When the filter string matches a group label, the group and its members are displayed:

:::image type="content" source="../../media/2021/10/filter-matches-group-label.png" alt-text="When the filter string matches a group label, the group and its members are displayed." lightbox="../../media/2021/10/filter-matches-group-label.png":::

When the filter string doesn't match a group label, neither the group nor its members are displayed:

:::image type="content" source="../../media/2021/10/filter-matches-group-label-asdf.png" alt-text="When the filter string doesn't match a group label, neither the group nor its members are displayed." lightbox="../../media/2021/10/filter-matches-group-label-asdf.png":::

To view the history of this feature in the Chromium open-source project, see [Issue 363796: ☂ Console filter inappropriately hides grouped content and doesn't hide group titles](https://bugs.chromium.org/p/chromium/issues/detail?id=363796).


<!-- ====================================================================== -->
## Announcements from the Chromium project

The following are some of the additional features that are available in Microsoft Edge version 95 that were contributed to the open-source Chromium project.


<!-- ====================================================================== -->
## New CSS length authoring tools

DevTools added an easier yet more flexible way to update lengths in CSS.

In the Styles pane, look for any CSS property with length, such as `height` or `padding`.

Hover over the unit type, and notice that the unit type is underlined.  Click the unit type to select a unit type from the dropdown.

<!-- mp4 video here, with no alt text -->

When you hover over the unit value, the mouse pointer changes to a horizontal cursor.  Drag horizontally to increase or decrease the value.  To adjust the value by 10, hold the `Shift` key while dragging.

<!-- mp4 video here, with no alt text -->

You can still edit the unit value as text—just<!-- em dash --> click the value and start editing.

<!-- mp4 video here, with no alt text -->

For videos demonstrating this feature, see [New CSS length authoring tools](https://developer.chrome.com/blog/new-in-devtools-95/#length) at _What's New In DevTools (Chrome 95)_.

Chromium issues: [1126178](https://crbug.com/1126178), [1172993](https://crbug.com/1172993).


<!-- ====================================================================== -->
## Improved the display of properties

DevTools improves the display of properties by:
*  Always bolding and sorting own properties first, in the **Console**, **Sources** panel, and **Properties** pane.
*  Flattening the properties display in the **Properties** pane.

For example, the snippet below creates an [URL](https://developer.mozilla.org/docs/Web/API/URL) object `link` with two own properties: `user` and `access`, and then updates the value of an inherited property, `search`.

```javascript
/* example.js */
const link = new URL('https://goo.gle/devtools-blog');
link.user = { id: 1, name: 'Jane Doe' };
link.access = 'admin';
link.search = `?access=${link.access}`;
```

Try logging `link` in the **Console**.  Own properties are now bold and are first in the sort order.  These changes make it easier to spot custom properties, especially for [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) (such as `URL`) that have many inherited properties.

<!-- image here, with alt text = "Own properties are bold and sorted first" -->

Apart from these changes, the properties in the Properties pane are also flattened now for a better experience when debugging DOM properties, especially for [Web components](https://www.webcomponents.org/introduction).

<!-- image here, with alt text = "Flatten properties" -->

For Chrome screen captures, see [Improved the display of properties](https://developer.chrome.com/blog/new-in-devtools-95/#properties) at _What's New In DevTools (Chrome 95)_.

Chromium issues: [1076820](https://crbug.com/1076820), [1119900](https://crbug.com/1119900).


<!-- ====================================================================== -->
## Snippets are now sorted in the Sources panel

Snippets in the **Snippets** pane in the **Sources** panel are now sorted alphabetically.  Previously, the snippets weren't sorted.

Use the snippets feature to run commands quicker.  Watch this video for a tip!  [Chrome 85 - What's New in DevTools](https://youtu.be/NOal2gTzftI?t=176)

<!-- image here, with alt text = "Sorted snippets in the Sources panel" -->

For more information about snippets, see [Run snippets of JavaScript on any webpage with Microsoft Edge DevTools](../../../javascript/snippets.md).

For Chrome screen captures, see [Sort snippets in the Sources panel](https://developer.chrome.com/blog/new-in-devtools-95/#snippets) at _What's New In DevTools (Chrome 95)_.

Chromium issue: [1243976](https://crbug.com/1243976).


<!-- ====================================================================== -->
## Improved UI for DevTools command menu

Do you find it hard to search for a file in the [Command Menu](../../../command-menu/index.md)?  Good news: the **Command Menu** user interface has been enhanced.

Open the **Command Menu** to search for a file with keyboard shortcut `Control+P` in Windows and Linux, or `Command+P` in macOS.

The UI improvements of the Command Menu are still ongoing; stay tuned for more updates.

<!-- image here, with alt text = "Command Menu" -->

For Chrome screen captures, see [Improved UI for DevTools command menu](https://developer.chrome.com/blog/new-in-devtools-95/#command-menu) at _What's New In DevTools (Chrome 95)_.

Chromium issue: [1201997](https://crbug.com/1201997).


<!-- ====================================================================== -->
> [!NOTE]
> The "Announcements from the Chromium project" section of this page is a modification based on work that is created and shared by Google per [Site Policies](https://developers.google.com/terms/site-policies), and is used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).  The original page for the Announcements from the Chromium project is [What's New In DevTools (Chrome 95)](https://developer.chrome.com/blog/new-in-devtools-95), authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelynyeen), a Developer advocate working on Chrome DevTools at Google.

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
