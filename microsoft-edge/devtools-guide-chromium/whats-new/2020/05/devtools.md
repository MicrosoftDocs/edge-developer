---
description: Use the DevTools in Windows high contrast mode, match keyboard shortcuts in the DevTools to Visual Studio Code, and more.
title: What's new in DevTools (Microsoft Edge 84)
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
# What's new in DevTools (Microsoft Edge 84)


<!-- ====================================================================== -->
## Announcements from the Microsoft Edge DevTools team

The following sections are a list of announcements you may have missed from the Microsoft Edge DevTools team.  Check out the announcements to try new features in the DevTools, Microsoft Visual Studio Code extensions, and more.  To stay up to date on all the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels](https://aka.ms/microsoftedge) and [follow us on Twitter](https://aka.ms/twitter/edgedevtools).

### Use the DevTools in Windows high contrast mode

The Microsoft Edge DevTools are now displayed in high contrast mode when Windows is in high contrast mode.

:::image type="complex" source="../../media/2020/05/high-contrast.msft.png" alt-text="The Microsoft Edge DevTools in high contrast mode" lightbox="../../media/2020/05/high-contrast.msft.png":::
   The Microsoft Edge DevTools in high contrast mode
:::image-end:::

[Follow the instructions to turn on high contrast mode in Windows](https://support.microsoft.com/help/4026951/windows-10-turn-high-contrast-mode-on-or-off).  To open the DevTools in Microsoft Edge, select `F12` or `Ctrl`+`Shift`+`I`.  The DevTools are displayed in high contrast mode.

> [!NOTE]
> The Microsoft Edge DevTools currently support high contrast mode on Windows but not on macOS.

Chromium issue [#1048378](https://crbug.com/1048378)

### Match keyboard shortcuts in the DevTools to Visual Studio Code

From your [feedback](../../../contact.md) and the [Chromium public issue tracker](https://bugs.chromium.org/p/chromium/issues/list), the Microsoft Edge DevTools team learned that you wanted the ability to customize keyboard shortcuts in the DevTools.  In Microsoft Edge 84, you are now able to match keyboard shortcuts in the DevTools to [Visual Studio Code](https://code.visualstudio.com/), which is just one of the features the team is working on for shortcut customization.

:::image type="complex" source="../../media/2020/05/keyboard-shortcut.msft.png" alt-text="Match keyboard shortcuts in the DevTools to Visual Studio Code" lightbox="../../media/2020/05/keyboard-shortcut.msft.png":::
   The Microsoft Edge DevTools in high contrast mode
:::image-end:::

To try the experiment:

1. In DevTools, open **Settings** by selecting `?` or choosing the ![Devtools Settings icon](../../../media/settings-icon.msft.png) icon in the top-right corner of DevTools.

1. In the **Experiments** section, select the checkbox **Enable custom keyboard shortcuts settings tab (requires reload)**.

1. Reload DevTools.

1. Open **Settings** again, and select the **Shortcuts** section.

1. Click the **Match shortcuts from preset** dropdown, select **DevTools (Default)**, and then select **Visual Studio Code**.  

The keyboard shortcuts in the DevTools now match the shortcuts for equivalent actions in Visual Studio Code.

For example, the keyboard shortcut for pausing or continuing running a script in [Visual Studio Code](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) is `F5`.  With the **DevTools (Default)** preset, that same shortcut in the DevTools is `F8` but with the **Visual Studio Code** preset, that shortcut is now also `F5`.

The feature is currently available in Microsoft Edge 84 as an experiment, so please share your [feedback](../../../contact.md) with the team!

Chromium issue [#174309](https://crbug.com/174309)

### Remote debug Surface Duo emulators

You are now able to remotely debug your web content running in the [Surface Duo emulator](/dual-screen/android/use-emulator) using the full power of the [Microsoft Edge DevTools](../../../index.md).

With the [Surface Duo emulator](/dual-screen/android/use-emulator), you are able to test how your web content renders on a new class of foldable and dual-screen devices.  The emulator runs the Android operating system and provides the [Microsoft Edge Android app](https://play.google.com/store/apps/details?id=com.microsoft.emmx).  Load your web content in the [Microsoft Edge app](https://play.google.com/store/apps/details?id=com.microsoft.emmx) and debug it with the [Microsoft Edge DevTools](../../../index.md).

:::image type="complex" source="../../media/2020/05/surface-duo-emulator.msft.png" alt-text="The Microsoft Edge app running on the Surface Duo emulator" lightbox="../../media/2020/05/surface-duo-emulator.msft.png":::
   The Microsoft Edge app on the Surface Duo emulator
:::image-end:::

The `edge://inspect` page in a desktop instance of [Microsoft Edge](https://www.microsoft.com/edge/) shows the **SurfaceDuoEmulator** with a list of the open tabs or [PWAs](../../../../progressive-web-apps-chromium/index.md) that are running on the [Surface Duo emulator](/dual-screen/android/use-emulator).

:::image type="complex" source="../../media/2020/05/edge-inspect.msft.png" alt-text="The edge://inspect page displays a list of the open tabs in the Microsoft Edge app running on the emulator" lightbox="../../media/2020/05/edge-inspect.msft.png":::
   The `edge://inspect` page displays a list of the open tabs in the Microsoft Edge app running on the emulator
:::image-end:::

Choose **inspect** for the tab or PWA that you want to debug to open the [Microsoft Edge DevTools](../../../index.md).  [Follow the step-by-step guide to remotely debug your web content on the Surface Duo emulator](../../../remote-debugging/surface-duo-emulator.md).

### Resize the DevTools drawer more easily

In Microsoft Edge 83 or earlier, you were only able to resize the [Devtools Drawer](../../../customize/index.md#drawer) by hovering inside the toolbar of the Drawer.  The Drawer behaved differently than the other resize controls for panes in the DevTools where you hover on the border of the pane to resize it.  Choose the following image to display how resizing the Drawer worked in version 83 or earlier of Microsoft Edge.

:::image type="complex" source="../../media/2020/05/drawer-83.msft.png" alt-text="Resizing the DevTools Drawer in Microsoft Edge 83" lightbox="../../media/2020/05/drawer-83.msft.gif":::
   Resizing the DevTools Drawer in Microsoft Edge 83
:::image-end:::

<!--todo:  create png that represents the gif information  -->

Starting with Microsoft Edge 84, you are now able to resize the Drawer by hovering over the border of the Drawer.  This change aligns the behavior resizing the DevTools Drawer with the way you resize other panes in the DevTools.  Choose the following image to display resizing in action in Microsoft Edge 84.

:::image type="complex" source="../../media/2020/05/drawer-84.msft.png" alt-text="Resizing the DevTools Drawer in Microsoft Edge 84" lightbox="../../media/2020/05/drawer-84.msft.gif":::
   Resizing the DevTools Drawer in Microsoft Edge 84
:::image-end:::

<!--todo:  create png that represents the gif information  -->

Chromium issue [#1076112](https://crbug.com/1076112)

### Screencasting navigation buttons display focus

When remote debugging an [Android device](../../../remote-debugging/index.md), a [Windows 10 or later device](../../../remote-debugging/windows.md), or a [Surface Duo emulator](../../../remote-debugging/surface-duo-emulator.md), you are able to toggle screencasting with the ![Toggle Screencast](../../../media/toggle-screencast-icon.msft.png) icon in the top-left corner of the DevTools.  With screencasting enabled, you are able to navigate the tab in Microsoft Edge on the remote device from the DevTools window.  In Microsoft Edge 84, these navigation buttons are now also keyboard accessible.

:::image type="complex" source="../../media/2020/05/screencasting-nav.msft.png" alt-text="Select Shift+Tab from the screencasted URL bar shows focus on the Refresh button" lightbox="../../media/2020/05/screencasting-nav.msft.png":::
   Select `Shift`+`Tab` from the screencasted URL bar shows focus on the **Refresh** button
:::image-end:::

Chromium issue [#1081486](https://crbug.com/1081486)

### Network panel Details pane is now accessible

In Microsoft Edge 84, the [Details pane](../../../network/index.md#inspect-the-details-of-the-resource) in the **Network** tool now takes focus when you open it for a resource in the [Network Log](../../../network/index.md#log-network-activity).  This change allows screen readers to read out and interact with the content of the **Details** pane.

:::image type="complex" source="../../media/2020/05/network-details.msft.png" alt-text="The Details pane in the Network panel takes focus when opened" lightbox="../../media/2020/05/network-details.msft.png":::
   The **Details** pane in the **Network** tool takes focus when opened
:::image-end:::

Chromium issue [#963183](https://crbug.com/963183)


<!-- ====================================================================== -->
## Announcements from the Chromium project

The following sections announce additional features available in Microsoft Edge 84 that were contributed to the open source Chromium project.

### Fix site issues with the new Issues tool in the DevTools Drawer

The new **Issues** tool in the DevTools Drawer was built to help reduce the notification fatigue and clutter of the **Console**.  Currently, the **Console** is the central place for website developers, libraries, frameworks, and Microsoft Edge to log messages, warnings, and errors.  The **Issues** tool aggregates warnings from the browser in a structured, aggregated, and actionable way, links to affected resources within Microsoft Edge DevTools, and provides guidance on how to fix the issues.  Over time, more and more warnings are surfaced in Microsoft Edge in the **Issues** tool rather than the **Console**, which should help reduce the clutter in the **Console**.

To get started, navigate to [Find and fix problems using the Issues tool](../../../issues/index.md).

:::image type="complex" source="../../media/2020/05/issues.msft.png" alt-text="The Issues tool in the DevTools Drawer" lightbox="../../media/2020/05/issues.msft.png":::
   The **Issues** tool in the DevTools Drawer
:::image-end:::

Chromium issue [#1068116](https://crbug.com/1068116)

### View accessibility information in the Inspect Mode tooltip

The **Inspect Mode** tooltip now indicates whether the element has an accessible
[name and role](https://webhint.io/docs/user-guide/hints/hint-axe/name-role-value/) and is [keyboard-focusable](https://webhint.io/docs/user-guide/hints/hint-axe/keyboard/).

<!--todo:  add link inspect mode tooltip (WebdevCls) when section is live  -->
<!--todo:  add link name and role (WebdevLabelsText) when section is live  -->
<!--todo:  add link keyboard-focusable (WebdevControlFocus) when section is live  -->

:::image type="complex" source="../../media/2020/05/a11y.msft.png" alt-text="The Inspect Mode tooltip with accessibility information" lightbox="../../media/2020/05/a11y.msft.png":::
  The **Inspect Mode** tooltip with accessibility information
:::image-end:::

Chromium issue [#1040025](https://crbug.com/1040025)

### Performance panel updates

#### View Total Blocking Time information in the footer

After recording your load performance, the **Performance** panel now shows Total Blocking Time (TBT) information in the footer.  TBT is a load performance metric that helps quantify how long a page takes to become usable.  It essentially measures how long a page appears to be usable (because the content is rendered to the screen); but is not actually usable, because JavaScript is blocking the main thread and therefore the page does not respond to user input.  TBT is the main metric for approximating First Input Delay.

<!--todo:  add link Total Blocking Time (TBT) (WebdevTbt) when section is live  -->
<!--todo:  add link lab metric (WebdevMeasureSpeedLabField) when section is live  -->
<!--todo:  add link Core Web Vitals (WebdevCoreWebVitals) when section is live  -->

To get Total Blocking Time information, do not use the **Refresh Page** ![Refresh page icon](../../../media/refresh-page-icon.msft.png) workflow for recording page load performance.

Instead, select **Record** ![Record icon](../../../media/record-icon.msft.png), manually reload the page, wait for the page to load, and then stop recording.

If `Total Blocking Time: Unavailable` is displayed, Microsoft Edge DevTools did not get the required information from the internal profiling data in Microsoft Edge.

:::image type="complex" source="../../media/2020/05/tbt.msft.png" alt-text="Total Blocking Time information in the footer of a Performance panel recording" lightbox="../../media/2020/05/tbt.msft.png":::
   Total Blocking Time information in the footer of a **Performance** panel recording
:::image-end:::

Chromium issue [#1054381](https://crbug.com/1054381)

#### Layout Shift events in the new Experience section

The new **Experience** section of the **Performance** panel helps you detect layout shifts.  Cumulative Layout Shift (CLS) is a metric that helps you quantify unwanted visual instability.

<!--todo:  add link Core Web Vitals (WebdevCoreWebVitals) when section is live  -->
<!--todo:  add link layout shifts (WebdevCls) when section is live  -->

Choose the **Layout Shift** event to display the details of the layout shift in the **Summary** pane.  Hover on the **Moved from** and **Moved to** fields to visualize where the layout shift occurred.

:::image type="complex" source="../../media/2020/05/cls.msft.png" alt-text="The details of a layout shift" lightbox="../../media/2020/05/cls.msft.png":::
   The details of a layout shift
:::image-end:::

### More accurate promise terminology in the Console

When logging a `Promise`, the **Console** incorrectly provided `PromiseStatus` value set to `resolved`.

:::image type="complex" source="../../media/2020/05/resolved.msft.png" alt-text="An example of the Console using the old resolved terminology" lightbox="../../media/2020/05/resolved.msft.png":::
   An example of the **Console** using the old `resolved` terminology
:::image-end:::

The **Console** now uses the term `fulfilled`, which aligns with the `Promise` specification.  For more information about the `Promise` specification, navigate to [States and Fates on GitHub](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md).

:::image type="complex" source="../../media/2020/05/fulfilled.msft.png" alt-text="An example of the Console using the new fulfilled terminology" lightbox="../../media/2020/05/fulfilled.msft.png":::
  An example of the **Console** using the new `fulfilled` terminology
:::image-end:::

V8 issue [#6751](https://bugs.chromium.org/p/v8/issues/detail?id=6751)

### Styles pane updates

#### Support for the revert keyword

The autocomplete UI of the **Styles** pane now detects the [revert](https://developer.mozilla.org/docs/Web/CSS/revert) CSS keyword, which reverts the cascaded value of a property to the previous value applied to the styling of the element.

:::image type="complex" source="../../media/2020/05/revert.msft.png" alt-text="Setting the value of a property to revert" lightbox="../../media/2020/05/revert.msft.png":::
  Setting the value of a property to revert
:::image-end:::

Chromium issue [#1075437](https://crbug.com/1075437)

#### Image previews

Hover on a `background-image` value in the **Styles** pane to display a preview of the image in a tooltip.

:::image type="complex" source="../../media/2020/05/image-preview.msft.png" alt-text="Hovering over a background-image value" lightbox="../../media/2020/05/image-preview.msft.png":::
  Hovering over a `background-image` value
:::image-end:::

Chromium issue [#1040019](https://crbug.com/1040019)

#### Color Picker now uses space-separated functional color notation

[CSS Color Module Level 4](https://drafts.csswg.org/css-color#changes-from-3) specifies that color functions, such as `rgb()`, should support space-separated
arguments.  For example, `rgb(0, 0, 0)` is equivalent to `rbg(0 0 0)`.

When you choose colors with the [Color Picker](../../../css/reference.md#change-colors-with-the-color-picker) or alternate between color representations in the **Styles** pane by holding `Shift` and selecting the `background-color` value, the space-separated argument syntax is displayed.

:::image type="complex" source="../../media/2020/05/color.msft.png" alt-text="Using space-separated arguments in the Styles pane" lightbox="../../media/2020/05/color.msft.png":::
  Using space-separated arguments in the **Styles** pane
:::image-end:::

You should also display the syntax in the **Computed** pane and the **Inspect Mode** tooltip.

Microsoft Edge DevTools is using the new syntax because upcoming CSS features such as [color()](https://drafts.csswg.org/css-color#the-color-property) do not support the deprecated comma-separated argument syntax.

The space-separated argument syntax has been supported in most browsers for a while.  For more information, navigate to [Can I use: Space-separated functional color notations?](https://caniuse.com/#feat=mdn-css_types_color_space_separated_functional_notation)

Chromium issue [#1072952](https://crbug.com/1072952)

### Deprecation of the Properties pane in the Elements panel

The **Properties** pane in the **Elements** tool is deprecated.  Run `console.dir($0)` in the **Console** instead.

:::image type="complex" source="../../media/2020/05/properties.msft.png" alt-text="The deprecated Properties pane" lightbox="../../media/2020/05/properties.msft.png":::
   The deprecated **Properties** pane
:::image-end:::

#### References

*   [console.dir()](../../../console/api.md#dir)
*   [$0](../../../console/utilities.md#recently-chosen-element-or-javascript-object)

### App shortcuts support in the Manifest pane

App shortcuts help users quickly start common or recommended tasks within a web app.  The app shortcuts menu is shown only for [Progressive Web Apps](../../../../progressive-web-apps-chromium/index.md) that are installed on the user's desktop or mobile device.

<!-- For more information, see [Get things done quickly with app shortcuts](https://alphabet-dev/app-shortcuts). -->

<!--todo:  add link Get things done quickly with app shortcuts (WebdevAppShortcuts) when section is live -->

:::image type="complex" source="../../media/2020/05/app-shortcuts.msft.png" alt-text="App shortcuts in the Manifest pane" lightbox="../../media/2020/05/app-shortcuts.msft.png":::
  App shortcuts in the **Manifest** pane
:::image-end:::


<!-- ====================================================================== -->
## Download the Microsoft Edge preview channels

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels](https://aka.ms/microsoftedge) as your default development browser.  The preview channels give you access to the latest DevTools features.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-84) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
