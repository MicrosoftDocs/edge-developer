---
description: Emulate color vision deficiencies, Dock To Left in the Command Menu, and more.
title: What's new in DevTools (Microsoft Edge 83)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# What's New In DevTools (Microsoft Edge 83)

Following the updated Chromium schedule, we are adjusting our schedule for upcoming Microsoft Edge releases and cancelling the Microsoft Edge 82 release. Check out our [blog post](https://blogs.windows.com/msedgedev/2020/03/20) for more info.

Here are the new features available in the DevTools in Microsoft Edge 83.


<!-- ====================================================================== -->
## Announcements from the Microsoft Edge DevTools team

The following sections are a list of announcements you may have missed from the Microsoft Edge DevTools team.  Check out the announcements to try new features in the DevTools, Microsoft Visual Studio Code extensions, and more.  To stay up to date on all the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels](https://www.microsoftedgeinsider.com/download) and [follow us on Twitter](https://twitter.com/EdgeDevTools).

### Remotely debug Microsoft Edge on Windows 10 or later Devices

The [Remote Tools for Microsoft Edge (Beta)](https://www.microsoft.com/store/apps/9P6CMFV44ZLT) app is now available in the [Microsoft Store](https://www.microsoft.com/store/apps/windows). This app extends the [Windows Device Portal](/windows/uwp/debug-test-perf/device-portal). You can connect from Microsoft Edge running on your development machine to a remote Windows 10 or later device and display a list of targets. This list of targets includes all tabs in Microsoft Edge and [PWAs](../../../../progressive-web-apps-chromium/index.md) open on the Windows device. Use the DevTools on your development machine against a target running on the remote Windows device.

:::image type="complex" source="../../media/2020/03/remote-tools.msft.png" alt-text="The Remote Tools for Microsoft Edge (Beta) app available in the Microsoft Store" lightbox="../../media/2020/03/remote-tools.msft.png":::
   The [Remote Tools for Microsoft Edge (Beta)](https://www.microsoft.com/store/apps/9P6CMFV44ZLT) app available in the [Microsoft Store](https://www.microsoft.com/store/apps/windows)
:::image-end:::

[Read our guide for setting up your Windows 10 device and your development machine for remote debugging](../../../remote-debugging/windows.md).  Let us know about your remote debugging experience by [tweeting](https://twitter.com/intent/tweet?text=@EdgeDevTools) or choosing the [Send Feedback](../../../contact.md) icon!

### New ways to access Settings

There are tons of settings for the DevTools that you are able to customize to make the DevTools look, feel, and work the way you need. In Microsoft Edge 83, accessing [Settings](../../../customize/index.md#settings) in the DevTools is now much easier.  Open Settings with the gear icon next to Console alerts and the main menu.

:::image type="complex" source="../../media/2020/03/settings.msft.png" alt-text="The gear icon opens Settings in the DevTools" lightbox="../../media/2020/03/settings.msft.png":::
   The gear icon opens **Settings** in the DevTools
:::image-end:::

You are also able to open [Settings](../../../customize/index.md#settings) from the **Main Menu** under **More tools**.

:::image type="complex" source="../../media/2020/03/settings2.msft.png" alt-text="Main Menu > More tools > Settings" lightbox="../../media/2020/03/settings2.msft.png":::
   **Main Menu** > **More tools** > **Settings**
:::image-end:::

Chromium issue [#1050855](https://crbug.com/1050855)

### New and improved infobars

Informational notification bars (infobars) in DevTools now have an improved look and more functionality. In Microsoft Edge 83, infobars are easier to read and provide buttons so you are able to take the relevant action right away.

:::image type="complex" source="../../media/2020/03/infobar.msft.png" alt-text="Infobar for pretty-printing a minified file in Microsoft Edge 83" lightbox="../../media/2020/03/infobar.msft.png":::
   Infobar for pretty-printing a minified file in Microsoft Edge Version 83
:::image-end:::

Chromium issue [#1056348](https://crbug.com/1056348)

### Navigate the Color Picker with your keyboard

The [Color Picker](../../../css/reference.md#change-colors-with-the-color-picker) is a GUI in the [Elements panel](../../../css/index.md) for changing `color` and `background-color` declarations.  In previous versions of Microsoft Edge, you were not able to navigate the **Shades** section of the [Color Picker](../../../css/reference.md#change-colors-with-the-color-picker) with the keyboard.

:::image type="complex" source="../../media/2020/03/color-picker.msft.png" alt-text="You are now able to use your keyboard to move the selector in the Shades section of the Color Picker" lightbox="../../media/2020/03/color-picker.msft.png":::
   You are now able to use your keyboard to move the selector in the **Shades** section of the [Color Picker](../../../css/reference.md#change-colors-with-the-color-picker)
:::image-end:::

In Microsoft Edge 83, you are now able to use the keyboard to move the selector in the **Shades** section of the Color Picker.

Chromium issue [#963183](https://crbug.com/963183)

### Properties tab now populates after a page refresh

In Microsoft Edge 81 and earlier, the **Properties tab** in the [Elements panel](../../../css/index.md) was broken by page refreshes.  When you refreshed the page, the **Properties tab** did not populate the properties of the currently-selected element.

:::image type="complex" source="../../media/2020/03/properties-in-81.msft.png" alt-text="In Microsoft Edge 81 and earlier, the Properties tab was blank after a page refresh" lightbox="../../media/2020/03/properties-in-81.msft.png":::
   In Microsoft Edge 81 and earlier, the **Properties tab** was blank after a page refresh
:::image-end:::

In Microsoft Edge 83, you are now able to display the properties of the currently-selected element after a page refresh in the **Properties tab**.

:::image type="complex" source="../../media/2020/03/properties-in-82.msft.png" alt-text="In Microsoft Edge 83, the Properties tab displays the properties of the currently-selected element after a page refresh" lightbox="../../media/2020/03/properties-in-82.msft.png":::
   In Microsoft Edge 83, the **Properties tab** displays the properties of the currently-selected element after a page refresh
:::image-end:::

Chromium issue [#1050999](https://crbug.com/1050999)

### Use the arrow keys to scroll in the Changes tool

The **Changes tool** tracks any changes you have made to CSS or JavaScript in the DevTools.  You are able to use the **Changes tool** to quickly display all your changes and take those back to your editor/IDE.

To open the **Changes tool**, select `Ctrl`+`Shift`+`P` in the DevTools to open the [Command Menu](../../../command-menu/index.md) and type `changes`.  choose and run the **Show Changes** command to open the **Changes tool** in the DevTools drawer.

When you have made a change to a minified file, the **Changes tool** enables you to scroll horizontally to display all of your minified code.  Starting in Microsoft Edge 83, you may now scroll horizontally using the arrow keys on your keyboard.

:::image type="complex" source="../../media/2020/03/changes.msft.png" alt-text="In Microsoft Edge 83, you may scroll horizontally with the arrow keys to display your minified code in the Changes tool" lightbox="../../media/2020/03/changes.msft.png":::
   In Microsoft Edge 83, you may scroll horizontally with the arrow keys to display the changes you made to your minified code in the **Changes tool**
:::image-end:::

If you use screen readers or the keyboard to navigate around the DevTools, send us your feedback by [tweeting](https://twitter.com/intent/tweet?text=@EdgeDevTools) at us or choosing the [Send Feedback](../../../contact.md) icon!

Chromium issue [#963183](https://crbug.com/963183)


<!-- ====================================================================== -->
## Announcements from the Chromium project

The following sections announce additional features available in Microsoft Edge 83 that were contributed to the open source Chromium project.

### Emulate vision deficiencies

Open the [Rendering tab](../../../evaluate-performance/reference.md#analyze-rendering-performance-with-the-rendering-tool) and use the new **Emulate vision deficiencies** feature to get a better idea of how people with different types of vision deficiencies experience your site.

:::image type="complex" source="../../media/2020/03/vision.msft.png" alt-text="Emulating blurred vision" lightbox="../../media/2020/03/vision.msft.png":::
   Emulating blurred vision
:::image-end:::

DevTools is able to emulate blurred vision and the following [types of color vision deficiencies](http://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness).

| Color Vision Deficiency | Details |
|:--- |:--- |
| Protanopia | The inability to perceive any red light. |
| Deuteranopia | The inability to perceive any green light. |
| Tritanopia | The inability to perceive any blue light. |
| Achromatopsia | The inability to perceive any color, except for shades of grey (extremely rare). |

Less extreme versions of these color vision deficiencies exist, and in fact they are more common.
For example, protanomaly is a reduced sensitivity to red light (as opposed to protanopia, which is the complete inability to perceive red light). However, these **-omaly** vision deficiencies are not as clearly defined:  every person with such a vision deficiency is different and may see things differently (being able to perceive more/less of the relevant colors).

By designing for the more extreme simulations in DevTools, your web apps are guaranteed to be accessible to people with protanomaly, deuteranomaly, tritanomaly, and achromatomaly as well.

Send your feedback by [tweeting](https://twitter.com/intent/tweet?text=@EdgeDevTools) or choosing the [Send Feedback](../../../contact.md) icon!

Chromium issue [#1003700](https://crbug.com/1003700)

### Emulate locales

Emulate locales by setting a location in **Sensors** > **Location**. [Open the **Command Menu**](../../../command-menu/index.md) and type `Sensors` to access the **Sensors** tab.  After performing these actions, DevTools modifies the current default locale, affecting the following code.

*   `Intl.*` APIs, for example: `new Intl.NumberFormat().resolvedOptions().locale`
*   Other locale-aware JavaScript APIs such as `String.prototype.localeCompare` and `*.prototype.toLocaleString`, for example: `123_456..toLocaleString()`
*   DOM APIs such as `navigator.language` and `navigator.languages`
*   The [Accept-Language](https://developer.mozilla.org/docs/Web/HTTP/Headers/Accept-Language) HTTP request header

> [!NOTE]
> Updates to `navigator.language` and `navigator.languages` are not visible immediately, but only after the next navigation or page refresh.  Changes to the `Accept-Language` HTTP header are only reflected for subsequent requests.

:::image type="complex" source="../../media/2020/03/locale.msft.png" alt-text="Emulating a locale" lightbox="../../media/2020/03/locale.msft.png":::
   Emulating a locale
:::image-end:::

To try a demo, navigate to [Locale-dependent code example](https://mathiasbynens.be/demo/locale).

Chromium issue [#1051822](https://crbug.com/1051822)

### Cross-Origin Embedder Policy (COEP) debugging

The Network panel now provides [Cross-Origin Embedder Policy](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit#bookmark=id.uo6kivyh0ge2) debugging information.

The **Status** column now provides a quick explanation of why a request was blocked as well as a link to view the headers of that request for further debugging:

:::image type="complex" source="../../media/2020/03/status.msft.png" alt-text="Blocked requests in the **Status** column" lightbox="../../media/2020/03/status.msft.png":::
   Blocked requests in the **Status** column
:::image-end:::

The **Response Headers** section of the **Headers** tab provides more guidance on how to resolve the issues:

:::image type="complex" source="../../media/2020/03/guidance.msft.png" alt-text="More guidance in the Response Headers section" lightbox="../../media/2020/03/guidance.msft.png":::
   More guidance in the **Response Headers** section
:::image-end:::

Send your feedback by [tweeting](https://twitter.com/intent/tweet?text=@EdgeDevTools) or choosing the [Send Feedback](../../../contact.md) icon!

Chromium issue [#1051466](https://crbug.com/1051466)

### New icons for breakpoints, conditional breakpoints, and logpoints

The Sources panel has new icons for breakpoints, conditional breakpoints, and logpoints:

*   Breakpoints (![Breakpoint](../../media/2020/03/breakpoint.msft.png)) are represented by red circles.
*   Conditional Breakpoints (![Conditional Breakpoint](../../media/2020/03/conditional.msft.png)) are represented by half-red half-white circles.
*   Logpoints (![Logpoint](../../media/2020/03/logpoint.msft.png)) are represented by red circles with Console icons.

The motivation for the new icons was to make the UI more consistent with other GUI debugging tools (which usually color breakpoints red) and to make it easier to distinguish between the 3 features at a glance.

Chromium issue [#1041830](https://crbug.com/1041830)

### View network requests that set a specific cookie path

Use the new `cookie-path` filter keyword in the **Network** tool to focus on the network requests that set a specific [cookie path](https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie#Directives).

Check out [Filter requests by properties](../../../network/reference.md#filter-requests-by-properties) to discover more keywords
like `cookie-path`.

### Dock to left from the Command Menu

Open the [Command Menu](../../../command-menu/index.md) and run the `Dock to left` command to move DevTools to the left of your viewport.

:::image type="complex" source="../../media/2020/03/dock-to-left.msft.png" alt-text="DevTools docked to the left of the viewport" lightbox="../../media/2020/03/dock-to-left.msft.png":::
   DevTools docked to the left of the viewport
:::image-end:::

> [!NOTE]
> The **Dock to left** feature has been available since Microsoft Edge 75, but it was previously only accessible from the [Main Menu](../../../customize/placement.md#change-placement-from-the-main-menu).  The new feature in Microsoft Edge 83 is that you may now access this feature from the Command Menu.

Send your feedback by [tweeting](https://twitter.com/intent/tweet?text=@EdgeDevTools) or choosing the [Send Feedback](../../../contact.md) icon!

Chromium issue [#1011679](https://crbug.com/1011679)

### The Audits panel is now the Lighthouse panel

The DevTools team frequently got feedback from web developers that while it was possible to run [Lighthouse](https://github.com/GoogleChrome/lighthouse) from DevTools, when they tried it out they were not able to find the "Lighthouse" panel, so the **Audits** panel is now the **Lighthouse** panel.

:::image type="complex" source="../../media/2020/03/lighthouse.msft.png" alt-text="The Lighthouse panel" lightbox="../../media/2020/03/lighthouse.msft.png":::
   The Lighthouse panel
:::image-end:::

> [!NOTE]
> The **Lighthouse** panel provides links to content hosted on third-party websites.  Microsoft is not responsible for and has no control over the content of these sites and any data they may collect.

### Delete all Local Overrides in a folder

After setting up **Local Overrides** you may hover on a directory, open the contextual menu (right-click), and choose the new **Delete all overrides** option to delete all Local Overrides in that folder.

:::image type="complex" source="../../media/2020/03/overrides.msft.png" alt-text="Delete all overrides" lightbox="../../media/2020/03/overrides.msft.png":::
   Delete all overrides
:::image-end:::

Send your feedback by [tweeting](https://twitter.com/intent/tweet?text=@EdgeDevTools) or choosing the [Send Feedback](../../../contact.md) icon!

Chromium issue [#1016501](https://crbug.com/1016501)

### Updated Long tasks UI

A **Long Task** is JavaScript code that monopolizes the main thread for a long time, causing a web page to freeze.

You have been able to [visualize Long Tasks in the Performance panel](../../../evaluate-performance/reference.md#view-main-thread-activity) for a while now, but in Microsoft Edge 83 the Long Task visualization UI in the Performance panel has been updated.  The Long Task portion of a task is now colored with a striped red background.

:::image type="complex" source="../../media/2020/03/long-task.msft.png" alt-text="The new Long Task UI" lightbox="../../media/2020/03/long-task.msft.png":::
   The new Long Task UI
:::image-end:::

Send your feedback by [tweeting](https://twitter.com/intent/tweet?text=@EdgeDevTools) or choosing the [Send Feedback](../../../contact.md) icon!

Chromium issue [#1054447](https://crbug.com/1054447)

### Maskable icon support in the Manifest pane

Android Oreo introduced adaptive icons, which display app icons in a variety of shapes across different device models.  **Maskable icons** are a new icon format that support adaptive icons, which enable you to ensure that your [PWA](../../../../progressive-web-apps-chromium/index.md) icon looks good on devices that support the maskable icons standard.

Enable the new **Show only the minimum safe area for maskable icons** checkbox in the **Manifest** pane to check that your maskable icon looks good on Android Oreo devices.

<!-- Check out [Are my current icons ready?] to learn more.  -->

:::image type="complex" source="../../media/2020/03/maskable-icons.msft.png" alt-text="Show only the minimum safe area for maskable icons checkbox" lightbox="../../media/2020/03/maskable-icons.msft.png":::
   The **Show only the minimum safe area for maskable icons** checkbox
:::image-end:::

> [!NOTE]
> This feature launched in Microsoft Edge 81.  The updates covered here in Microsoft Edge 83 were not covered in [What's New In DevTools (Microsoft Edge 81)](../01/devtools.md).


<!-- ====================================================================== -->
## Download the Microsoft Edge preview channels

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels](https://www.microsoftedgeinsider.com/download) as your default development browser.  The preview channels give you access to the latest DevTools features.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-83) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
