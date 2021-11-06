---
description: CSS grid debugging features, Edit and Replay requests with the Network Console, and more.
title: What's new in DevTools (Microsoft Edge 85)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Jecelyn Yeen

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->
# What's New In DevTools (Microsoft Edge 85)


<!-- ====================================================================== -->
## Announcements from the Microsoft Edge DevTools team

The following sections are a list of announcements you may have missed from the Microsoft Edge DevTools team.  Check out the announcements to try new features in the DevTools, Microsoft Visual Studio Code extensions, and more.  To stay up to date on all the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels](https://www.microsoftedgeinsider.com/download/) and [follow the Microsoft Edge DevTools team on Twitter](https://twitter.com/EdgeDevTools).

### CSS grid debugging features

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature
:::image-end:::

The Microsoft Edge DevTools team is collaborating with the Chrome DevTools team and Chromium community to add new CSS grid debugging features to DevTools.  You are now able to display grid line numbers, grid gaps, and extended grid lines as an on-page overlay.  Plus, more improvements to the grid tools are coming soon.

:::image type="complex" source="../../media/2020/06/experiments-grid.msft.png" alt-text="CSS grid debugging features" lightbox="../../media/2020/06/experiments-grid.msft.png":::
   CSS grid debugging features
:::image-end:::

> [!NOTE]
> To enable the experiment, navigate to [Turning on experimental features](../../../experimental-features/index.md#turning-on-experimental-features) and select the checkbox next to **Enable new CSS Grid debugging features**.
>
> To try out the experiment with a sample, navigate to [CSS Grid planner example](https://codepen.io/hxlnt/full/YzwBzKM).

Chromium issue [#1047356](https://crbug.com/1047356)

### Edit and Replay requests with the Network Console

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature
:::image-end:::

You are now able to use **Edit and Replay** on requests in the [Network Log](../../../network/index.md#log-network-activity) using the **Network Console**.

:::image type="complex" source="../../media/2020/06/experiments-network-console-edit-and-replay.msft.png" alt-text="Edit and Replay a request in the NetworkLog with the Network Console" lightbox="../../media/2020/06/experiments-network-console-edit-and-replay.msft.png":::
   Edit and Replay a request in the [NetworkLog](../../../network/index.md#log-network-activity) with the **Network Console**
:::image-end:::

A new panel, the **Network Console** opens in the [DevTools Drawer](../../../customize/index.md#drawer) and automatically populates with information for the HTTP request.  To display the response returned from the server, edit the request (if needed) and select **Send**.

You may also use the **Network Console** to create and send HTTP requests directly from the DevTools.

:::image type="complex" source="../../media/2020/06/experiments-network-console.msft.png" alt-text="The Network Console panel" lightbox="../../media/2020/06/experiments-network-console.msft.png":::
   The **Network Console** panel
:::image-end:::

> [!TIP]
> To display **Network Console** in the main (top) panel instead of the [DevTools Drawer](../../../customize/index.md#drawer), navigate to [moving tools between panels](#move-tools-between-panels).

> [!NOTE]
> To enable the experiment, navigate to [Turning on experimental features](../../../experimental-features/index.md#turning-on-experimental-features) and choose the checkbox next to **Enable Network Console**.
>
> Open the [Network Log](../../../network/index.md#log-network-activity), open the contextual menu (right-click), and choose **Edit and Replay**.

Chromium issue [#1093687](https://crbug.com/1093687)

### Service worker respondWith events in the Timing tab

The **Timing** tab of the **Network** tool now includes `respondWith` service worker events.  The `respondWith` service worker event shows the duration from the time immediately before the service worker `fetch` event handler starts running to the time when the `respondWith` promise of the `fetch` handler is settled.

:::image type="complex" source="../../media/2020/06/timing-tab.msft.png" alt-text="The respondWith service worker event in the Timing tab of the Network panel" lightbox="../../media/2020/06/timing-tab.msft.png":::
   The `respondWith` service worker event in the **Timing** tab of the **Network** tool
:::image-end:::

Expand **Response received** to display additional information from the `fetch` response like `CacheStorageCacheName`, `serviceWorkerResponseSource`, and `ResponseTime`.

:::image type="complex" source="../../media/2020/06/timing-tab2.msft.png" alt-text="Expand Response received to display additional information from the fetch response" lightbox="../../media/2020/06/timing-tab2.msft.png":::
   Expand **Response received** to display additional information from the `fetch` response
:::image-end:::

Chromium issue [#1066579](https://crbug.com/1066579)

### webhint feedback in the Issues panel

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature
:::image-end:::

[webhint](https://webhint.io) is an open-source tool that provides real-time feedback on the accessibility, cross-browser compatibility, security, performance, PWAs, and other common web development issues of websites.  To review webhint feedback in the [Issues](../../../issues/index.md) panel.

:::image type="complex" source="../../media/2020/06/experiments-webhint.msft.png" alt-text="webhint feedback in the Issues panel" lightbox="../../media/2020/06/experiments-webhint.msft.png":::
   webhint feedback in the Issues panel
:::image-end:::

> [!NOTE]
> To enable the experiment, navigate to [Turning on experimental features](../../../experimental-features/index.md#turning-on-experimental-features) and choose the checkbox next to **Enable webhint**.
>
> Open the [Issues](../../../issues/index.md) panel to display feedback from webhint.

Chromium issue [#1070378](https://crbug.com/1070378)

### Move tools between panels

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature
:::image-end:::

Normally, tools such as **Elements** and **Network** may only be opened in the main (top) panel of DevTools.  Similarly, tools such as **3D View** and **Issues** may only be opened in the drawer (bottom) panel of DevTools.  You are now able to customize your DevTools layout by moving tools between the top and bottom panels.

:::image type="complex" source="../../media/2020/06/experiments-move-panels.msft.png" alt-text="Move tools between panels" lightbox="../../media/2020/06/experiments-move-panels.msft.png":::
   Move tools between panels
:::image-end:::

> [!NOTE]
> To enable the experiment, navigate to [Turning on experimental features](../../../experimental-features/index.md#turning-on-experimental-features) and choose the checkbox next to **Enable support to move tabs between panels**.

Chromium issue [#897944](https://crbug.com/897944)

### Improved Initiator tooltip in the Network panel

In Microsoft Edge 83 and 84, tooltips for the Initiator column, which shows the cause of the resource request, in the [Network Log](../../../network/index.md#log-network-activity) displayed with a horizontal scrollbar.  You were only able to display the call stack that initiated the request by scrolling horizontally in the tooltip.

:::image type="complex" source="../../media/2020/06/initiator-tooltip-84.msft.png" alt-text="The Initiator tooltip in Microsoft Edge 84" lightbox="../../media/2020/06/initiator-tooltip-84.msft.png":::
   The Initiator tooltip in Microsoft Edge 84
:::image-end:::

Starting with Microsoft Edge 85, you are now able to display the Initiator call stack in the tooltip without scrolling horizontally.

:::image type="complex" source="../../media/2020/06/initiator-tooltip-85.msft.png" alt-text="The Initiator tooltip in Microsoft Edge 85" lightbox="../../media/2020/06/initiator-tooltip-85.msft.png":::
   The Initiator tooltip in Microsoft Edge 85
:::image-end:::

Chromium issue [#1069404](https://crbug.com/1069404)


<!-- ====================================================================== -->
## Announcements from the Chromium project

The following sections announce additional features available in Microsoft Edge 85 that were contributed to the open source Chromium project.

### Style editing for CSS-in-JS frameworks

The **Styles** pane now has better support for editing styles that were created with the [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom) APIs.  Many CSS-in-JS frameworks and libraries use the CSSOM APIs under the hood to construct styles.

You are now able to edit styles added in JavaScript using [Constructable Stylesheets](https://wicg.github.io/construct-stylesheets/).  Constructable Stylesheets are a new way to create and distribute reusable styles when using [Shadow DOM](https://developer.mozilla.org/docs/Web/Web_Components/Using_shadow_DOM).

For example, the `h1` styles added with `CSSStyleSheet` (CSSOM APIs) were not editable previously.  The styles are editable now in the **Styles** panel.

:::image type="complex" source="../../media/2020/06/css-in-js.msft.png" alt-text="Changing the background property of the h1 styles added with CSSStyleSheet from pink to lightblue" lightbox="../../media/2020/06/css-in-js.msft.png":::
   Changing the `background` property of the `h1` styles added with `CSSStyleSheet` from `pink` to `lightblue`.
:::image-end:::

Give this feature a try with a [sample that uses CSS-in-JS](https://codepen.io/zoherghadyali/full/abdGrPZ).  For more information, navigate to [Style editing for CSS-in-JS frameworks](../../../css/css-in-js.md).

Chromium issue [#946975](https://crbug.com/946975)

### Lighthouse 6 in the Lighthouse panel

The **Lighthouse** panel is now running Lighthouse 6.  For a full list of all changes, navigate to [v6.0.0 release notes](https://github.com/GoogleChrome/lighthouse/releases/tag/v6.0.0).

Lighthouse 6.0 introduces three new metrics to the report:  Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Total Blocking Time (TBT).

The performance score formula has also been reweighted to better reflect the loading experience of the user.

Chromium issue [#772558](https://crbug.com/772558)

#### First Meaningful Paint deprecation

First Meaningful Paint (FMP) is deprecated in Lighthouse 6.0.  FMP has also been removed from the **Performance** panel.  **Largest Contentful Paint** is the recommended replacement for FMP.  <!--For an explanation of why it was deprecated, navigate to [First Meaningful Paint](https://web.dev/first-meaningful-paint).  -->

<!--todo: add Largest Contentful Paint when section available  -->
<!--todo: add First Meaningful Paint link and note when available  -->

Chromium issue [#1096008](https://crbug.com/1096008)

### Support for new JavaScript features

DevTools now has better support for some of the latest JavaScript language features.

:::row:::
   :::column span="1":::
      [Optional chaining](https://v8.dev/features/optional-chaining) syntax autocompletion
   :::column-end:::
   :::column span="2":::
      Property auto-completion in the **Console** now supports optional chaining syntax, for example,  `name?.` now works in addition to `name.` and `name[`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Syntax highlighting for [private fields](https://v8.dev/features/class-fields#private-class-fields)
   :::column-end:::
   :::column span="2":::
      private class fields are now properly syntax-highlighted and pretty-printed in the **Sources** panel.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Syntax highlighting for [Nullish coalescing operator](https://v8.dev/features/nullish-coalescing)
   :::column-end:::
   :::column span="2":::
      DevTools now properly pretty-prints the nullish coalescing operator in the **Sources** panel.
   :::column-end:::
:::row-end:::

Chromium issues [#1073903](https://crbug.com/1073903), [#1083214](https://crbug.com/1083214), [#1083797](https://crbug.com/1083797)

### New app shortcut warnings in the Manifest pane

**App shortcuts** help users quickly start common or recommended tasks within a web app.

<!--todo: add App shortcuts when section is live  -->

The **Manifest** pane now shows warnings for the following conditions.

* The app shortcut icons are smaller than 96x96 pixels
* The app shortcut icons and manifest icons are not square (since the icons are ignored)

:::image type="complex" source="../../media/2020/06/app-shortcut-warnings.msft.png" alt-text="App shortcut warnings" lightbox="../../media/2020/06/app-shortcut-warnings.msft.png":::
   App shortcut warnings
:::image-end:::

Chromium issue [#955497](https://crbug.com/955497)

### Consistent display of the Computed pane

The **Computed** pane in the **Elements** tool now displays consistently as a pane across all viewport sizes.  Previously the **Computed** pane merged inside the **Styles** pane when the width of the DevTools viewport was narrow.

:::image type="complex" source="../../media/2020/06/computed-pane.msft.png" alt-text="The Computed pane consistently displays as a separate pane even when the DevTools are narrow" lightbox="../../media/2020/06/computed-pane.msft.png":::
   The **Computed** pane consistently displays as a separate pane even when the DevTools are narrow.
:::image-end:::

Chromium issue [#1073899](https://crbug.com/1073899)

### Bytecode offsets for WebAssembly files

DevTools now uses bytecode offsets for displaying line numbers of Wasm disassembly.
The line numbers make it clearer that you are looking at binary data, and is more consistent with how the Wasm runtime references locations.

Chromium issue [#1071432](https://crbug.com/1071432)

### Line-wise copy and cut in Sources Panel

When performing copy or cut with no selection in the [Sources panel editor](../../../sources/index.md#using-the-editor-pane-to-view-or-edit-files), DevTools copies or cuts the current line of content.

:::image type="complex" source="../../media/2020/06/line-wise-cut.msft.png" alt-text="With the cursor at the end of Line 5, copying the whole line from pen.js in the DevTools and pasting in Visual Studio Code" lightbox="../../media/2020/06/line-wise-cut.msft.png":::
   With the cursor at the end of Line 5, copying the whole line from **pen.js** in the DevTools and pasting in [Visual Studio Code](https://code.visualstudio.com/).
:::image-end:::

Chromium issue [#800028](https://crbug.com/800028)

### Console Settings updates

#### Ungroup same console messages

The **Group similar** toggle in Console Settings now applies to duplicate messages.  Previously it just applied to similar messages.

For example, previously, DevTools did not ungroup the `hello` messages even though **Group similar** is unchecked.  Now, the `hello` messages are ungrouped.

:::image type="complex" source="../../media/2020/06/ungroup-similar.msft.png" alt-text="When Group similar is unchecked, the hello messages are ungrouped" lightbox="../../media/2020/06/ungroup-similar.msft.png":::
   When **Group similar** is unchecked, the `hello` messages are ungrouped
:::image-end:::

Give this feature a try with a [sample that sends duplicate messages to the Console](https://codepen.io/zoherghadyali/full/zYrjgdJ).

Chromium issue [#1082963](https://crbug.com/1082963)

### Persisting Selected context only settings

The **Selected context only** settings in Console Settings is now persisted.  Previously the settings were reset every time you closed and reopened DevTools.  The change makes the setting behavior consistent with other Console Settings options.

:::image type="complex" source="../../media/2020/06/selected-context.msft.png" alt-text="Selected context only setting" lightbox="../../media/2020/06/selected-context.msft.png":::
   **Selected context only** setting
:::image-end:::

Chromium issue [#1055875](https://crbug.com/1055875)

### Performance panel updates

#### JavaScript compilation cache information in **Performance** tool

[JavaScript compilation cache information](https://v8.dev/blog/code-caching-for-devs) is now always displayed in the **Summary** panel of the **Performance** tool.  Previously, DevTools did not show anything related to code caching if code caching did not happen.

:::image type="complex" source="../../media/2020/06/js-compilation-cache.msft.png" alt-text="JavaScript compilation cache information" lightbox="../../media/2020/06/js-compilation-cache.msft.png":::
   JavaScript compilation cache information
:::image-end:::

Chromium issue [#912581](https://crbug.com/912581)

#### Navigation timing alignment in the Performance panel

The **Performance** panel used to show times in the rulers based on when the recording started.  The timing has now changed for recordings where the user navigates, where DevTools now shows ruler times relative to the navigation instead.

:::image type="complex" source="../../media/2020/06/nav-timing.msft.png" alt-text="Align navigation timing in Performance tool" lightbox="../../media/2020/06/nav-timing.msft.png":::
   Align navigation timing in **Performance** tool
:::image-end:::

The times for `DOMContentLoaded`, First Paint, First Contentful Paint, and Largest Contentful Paint events are updated to be relative to the start of the navigation, which means the timing matches the timings reported by `PerformanceObserver`.

Chromium issue [#974550](https://crbug.com/974550)

### New icons for breakpoints, conditional breakpoints, and logpoints

The **Sources** panel has new designs for breakpoints, conditional breakpoints, and logpoints.  Breakpoints are represented by a red circle, just like [Visual Studio Code](https://code.visualstudio.com/) and [Visual Studio](https://visualstudio.microsoft.com/).  Icons are added to differentiate conditional breakpoints and logpoints.

:::image type="complex" source="../../media/2020/06/breakpoints.msft.png" alt-text="Breakpoints" lightbox="../../media/2020/06/breakpoints.msft.png":::
   Breakpoints
:::image-end:::

Chromium issue [#1041830](https://crbug.com/1041830)


<!-- ====================================================================== -->
## Download the Microsoft Edge preview channels

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels](https://www.microsoftedgeinsider.com/download/) as your default development browser.  The preview channels give you access to the latest DevTools features.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-85) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelyn-yeen) (Developer advocate, Chrome DevTools).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).

