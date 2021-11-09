---
description: Match keyboard shortcuts to Visual Studio Code, emulate Surface Duo and Samsung Galaxy Fold, CSS grid overlay improvements, and more.
title: What's new in DevTools (Microsoft Edge 86)
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
# What's New In DevTools (Microsoft Edge 86)


<!-- ====================================================================== -->
## Announcements from the Microsoft Edge DevTools team

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]

### Match keyboard shortcuts in DevTools to Visual Studio Code

In Microsoft Edge 86, you may match keyboard shortcuts in the DevTools to your shortcuts in [Microsoft Visual Studio Code](https://code.visualstudio.com).

:::image type="complex" source="../../media/2020/08/keyboard-shortcut.msft.png" alt-text="Match keyboard shortcuts in the DevTools to Visual Studio Code" lightbox="../../media/2020/08/keyboard-shortcut.msft.png":::
   Match keyboard shortcuts in the DevTools to Visual Studio Code
:::image-end:::

To activate this feature, navigate to [Customize keyboard shortcuts in DevTools](../../../customize/shortcuts.md).

For example, the keyboard shortcut for pausing or continuing running a script in [Visual Studio Code](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) is `F5`.  With the **DevTools (Default)** preset, that same shortcut in the DevTools is `F8`, but when you choose the **Visual Studio Code** preset, that shortcut is now also `F5`.

Chromium issue [#174309](https://crbug.com/174309)

### Emulate Surface Duo and Samsung Galaxy Fold

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature
:::image-end:::

You are now able to test the look and feel of your website or app on two new devices:  [Surface Duo](https://www.microsoft.com/surface/devices/surface-duo) and [Samsung Galaxy Fold](https://www.samsung.com/us/mobile/galaxy-fold) in Microsoft Edge.

To help enhance your website or app for the dual-screen and foldable devices, use the following features when [emulating the device](../../../device-mode/index.md).

*   [Spanning](../../../device-mode/dual-screen-and-foldables.md), which is when your website (or app) appears across both screens.
*   [Rendering the seam](/dual-screen/introduction#how-to-work-with-the-seam), which is the space between the two screens.
*   Enabling experimental Web Platform APIs to access the new [CSS media screen-spanning feature](/dual-screen/web/css-media-spanning) and [JavaScript getWindowSegments API](/dual-screen/web/javascript-getwindowsegments).

:::image type="complex" source="../../media/2020/08/surface-duo-device-emulation.msft.png" alt-text="Device emulation for Surface Duo" lightbox="../../media/2020/08/surface-duo-device-emulation.msft.png":::
   Device emulation for Surface Duo
:::image-end:::

To turn on this experimental feature, navigate to [Turning on experimental features](../../../experimental-features/index.md#turning-on-experimental-features) and choose the checkbox next to **Emulation: Support dual screen mode**.

For more information about this feature, navigate to [Emulate dual-screen and foldable devices in Microsoft Edge DevTools](../../../device-mode/dual-screen-and-foldables.md).

Chromium issue: [#1054281](https://crbug.com/1054281)

### CSS grid overlay improvements and new experimental grid features

Thank you for the positive feedback about the improved CSS grid overlays.  The CSS grid overlays are now enabled by default and do not require you to turn on an experiment.

:::image type="complex" source="../../media/2020/08/css-grid-overlay-article.msft.png" alt-text="CSS grid overlay for article element" lightbox="../../media/2020/08/css-grid-overlay-article.msft.png":::
   CSS grid overlay for `article` element
:::image-end:::

> [!NOTE]
> For more information about grid overlays, navigate to [CSS grid debugging features](../06/devtools.md#css-grid-debugging-features).

The Microsoft Edge DevTools team and the Chrome DevTools team collaborate on additional features.  The new features include multiple overlays that are persistent and configurable from a new **Layout** pane on the **Elements** tool.

To turn on this experimental feature, navigate to [Turning on experimental features](../../../experimental-features/index.md#turning-on-experimental-features) and choose the checkbox next to **Enable new CSS Grid debugging features (configuration options available in Layout sidebar pane in Elements after restart)**.

For more information about this feature, navigate to [Inspect CSS Grid in Microsoft Edge DevTools](../../../css/grid.md).

Chromium issue: [#1047356](https://crbug.com/1047356)

### Table copied from the Console preserves formatting

In Microsoft Edge 85 or earlier, the formatting of a copied `console.table` was lost.  If you copied the output from the [table](../../../console/api.md#table) Console API, and pasted it, only the text of the table was kept.

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/console-table-beta.msft.png" alt-text="table Console API output in Microsoft Edge 85 or earlier" lightbox="../../media/2020/08/console-table-beta.msft.png":::
         `table` Console API output in Microsoft Edge 85 or earlier
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/console-table-beta-paste-visual-studio-code.msft.png" alt-text="table Console API output from Microsoft Edge 85 or earlier pasted into Visual Studio Code" lightbox="../../media/2020/08/console-table-beta-paste-visual-studio-code.msft.png":::
         `table` Console API output from Microsoft Edge 85 or earlier pasted into Visual Studio Code
      :::image-end:::
   :::column-end:::
:::row-end:::

In Microsoft Edge 86 or later, when you copy a table from the **Console**, the formatting is now preserved.

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/console-table-canary.msft.png" alt-text="table Console API output in Microsoft Edge 86 or later" lightbox="../../media/2020/08/console-table-canary.msft.png":::
         `table` Console API output in Microsoft Edge 86 or later
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/console-table-canary-paste-visual-studio-code.msft.png" alt-text="table Console API output from Microsoft Edge 86 or later pasted into Visual Studio Code" lightbox="../../media/2020/08/console-table-canary-paste-visual-studio-code.msft.png":::
         `table` Console API output from Microsoft Edge 86 or later pasted into Visual Studio Code
      :::image-end:::
   :::column-end:::
:::row-end:::

Chromium issue: [#1115011](https://crbug.com/1115011)

### Source Order Viewer for easier accessibility testing

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature
:::image-end:::

The new accessibility helper displays the order of elements in the source.

:::image type="complex" source="../../media/2020/08/source-order-viewer.msft.png" alt-text="Activate Show source order" lightbox="../../media/2020/08/source-order-viewer.msft.png":::
   Activate **Show source order**
:::image-end:::

This feature makes it easier to test the way screen reader and keyboard users experience your website or app.  Screen readers and keyboard navigation depend on content being placed in a particular order in the source code of your website or app, so that it matches the rendered page.  The Source Order Viewer displays potential differences in order between the rendered page and the source code.

To turn on this experimental feature, navigate to [Turning on experimental features](../../../experimental-features/index.md#turning-on-experimental-features) and choose the checkbox next to **Enable Source Order Viewer**.

For more information about this experiment, navigate to [Source Order Viewer](../../../experimental-features/index.md#source-order-viewer).

Chromium issue: [#1094406](https://crbug.com/1094406)

<!--
### DevTools language enhancements

Your feedback and internal discoveries uncovered which text strings used in the Microsoft Edge feedback should remain untranslated or create confusion when translated.

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/localization-improvements-chinese-complex-stable.msft.png" alt-text="Microsoft Edge DevTools in Traditional Chinese" lightbox="localization-improvements-chinese-complex-stable.msft.png":::
         Microsoft Edge DevTools 85 and earlier in Traditional Chinese
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/localization-improvements-chinese-complex-canary.msft.png" alt-text="Microsoft Edge DevTools in Japanese" lightbox="../../media/2020/08/localization-improvements-chinese-complex-canary.msft.png":::
         Microsoft Edge DevTools 86  or later in Traditional Chinese
      :::image-end:::
   :::column-end:::
:::row-end:::

To meet your translation needs, the Microsoft Edge DevTools team is focused on improving translation quality.

The current effort to improve translation quality enables easier support for more languages in the future.
-->

### Highlight all search results in Elements tool

In Microsoft Edge 84 and 85, the first search result in the **Elements** tool did not highlight.  The remaining search results were highlighted correctly.

Thank you for sending your feedback and helping improve Chromium.  Your feedback uncovered Issue [#1103316](https://crbug.com/1103316) in the open-source Chromium project.

:::image type="complex" source="../../media/2020/08/elements- search-highlight-fixed.msft.png" alt-text="Highlighted first search result on Elements panel in Microsoft Edge 84 or later" lightbox="../../media/2020/08/elements- search-highlight-fixed.msft.png":::
   Highlighted first search result on **Elements** tool in Microsoft Edge 84 or later
:::image-end:::

The issue is now fixed in all versions of Microsoft Edge.

Chromium issue: [#1103316](https://crbug.com/1103316)


<!-- ====================================================================== -->
## Announcements from the Chromium project

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]

### New Media tool

DevTools now displays media players information in the [Media](../../../media-panel/index.md) tool.

To open the new **Media** tool, complete the following step.

1.  Choose **Customize and control DevTools** (`...`) > **More tools** > **Media**.

    :::image type="complex" source="../../media/2020/08/media-panel.msft.png" alt-text="New Media tool" lightbox="../../media/2020/08/media-panel.msft.png":::
       New **Media** tool
    :::image-end:::

Before the new **Media** tool in DevTools, the logging and debug information about video players was located under the **Recent Players** setting.  To open the **Recent Players** setting, navigate to `edge://media-internals` and choose the **Players** tool.

View live content and inspect potential issues more quickly, including the following examples.

*   Why frames are dropped?
*   Why JavaScript is interacting with the player in an unexpected way?

### Capture node screenshots using the Elements tool context menu

You may now capture node screenshots using the context menu in the **Elements** tool.

For example, to take a screenshot of the table of contents, hover on the element, open the contextual menu (right-click), and select **Capture node screenshot**.

:::image type="complex" source="../../media/2020/08/capture-node-screenshot.msft.png" alt-text="Capture node screenshots" lightbox="../../media/2020/08/capture-node-screenshot.msft.png":::
   Capture node screenshots
:::image-end:::

Chromium issue: [#1100253](https://crbug.com/1100253)

### Issues tool updates

The Issues warning bar on the **Console** tool is now replaced with a regular message.

<!--todo: this figure need to be updated  -->

:::image type="complex" source="../../media/2020/08/issue-console-msg.msft.png" alt-text="Issues in console message" lightbox="../../media/2020/08/issue-console-msg.msft.png":::
   Issues in console message
:::image-end:::

Third-party cookie issues are now hidden by default in the **Issues** tool.  Enable the new **Include third-party cookie issues** checkbox to view the issues.

:::image type="complex" source="../../media/2020/08/third-party-cookies.msft.png" alt-text="third-party cookie issues checkbox" lightbox="../../media/2020/08/third-party-cookies.msft.png":::
   third-party cookie issues checkbox
:::image-end:::

Chromium issues: [1096481](https://crbug.com/1096481), [1068116](https://crbug.com/1068116), [1080589](https://crbug.com/1080589)

### Emulate missing local fonts

Open the [Rendering tool](../../../evaluate-performance/reference.md#analyze-rendering-performance-with-the-rendering-tool) and use the new **Disable local fonts** feature to emulate missing `local()` sources in `@font-face` rules.

For example, when the `Rubik` font is installed on your device and the `@font-face src` rule uses it as a `local()` font, Microsoft Edge uses the local font file from your device.

When **Disable local fonts** is enabled, DevTools ignores the `local()` fonts and fetches each from the network.

:::image type="complex" source="../../media/2020/08/disable-font.msft.png" alt-text="Emulate missing local fonts" lightbox="../../media/2020/08/disable-font.msft.png":::
   Emulate missing local fonts
:::image-end:::

If you use two different copies of the same font during development, such as the following examples.

*   A local font for your design tools.
*   A web font for your code.

Use **Disable local fonts** to make it easier for you to complete the following tasks.

*   Debug and measure loading performance and optimization of web fonts.
*   Verify accuracy of your CSS `@font-face` rules.
*   Discover differences between local versions installed on your device and a web font.

Chromium issue: [#384968](https://crbug.com/384968)

### Emulate inactive users

The [Idle Detection API](https://web.dev/idle-detection) allows developers to detect inactive users and react on idle state changes.  You are now able to use DevTools to emulate idle state changes in the **Sensors** tool for both the user state and the screen state instead of waiting for the actual idle state to change.  You may open the **Sensors** tool from the [Drawer](../../../customize/index.md#drawer).

:::image type="complex" source="../../media/2020/08/emulate-idle.msft.png" alt-text="Emulate inactive users" lightbox="../../media/2020/08/emulate-idle.msft.png":::
   Emulate inactive users
:::image-end:::

Chromium issue: [#1090802](https://crbug.com/1090802)

### Emulate prefers-reduced-data

> [!NOTE]
> In Microsoft Edge 86, to enable this feature, navigate to `edge://flags#enable-experimental-web-platform-features` and turn on the **Experimental Web Platform features** flag.  The emulation option is only displayed if the flag is enabled.

The [prefers-reduced-data](https://drafts.csswg.org/mediaqueries-5#descdef-media-prefers-reduced-data) media query detects user content preferences for reduced data.  If selected, the user receives alternate page content that uses less data.

You may now use DevTools to emulate the `prefers-reduced-data` media query.

:::image type="complex" source="../../media/2020/08/emulate-prefers-reduced-data.msft.png" alt-text="Emulate prefers-reduced-data" lightbox="../../media/2020/08/emulate-prefers-reduced-data.msft.png":::
   Emulate prefers-reduced-data
:::image-end:::

Chromium issue: [#1096068](https://crbug.com/1096068)

### Support for new JavaScript features

DevTools now have better supported the following JavaScript language features.

| JavaScript language feature | Details |
|:--- |:--- |
| [Logical assignment operators](https://v8.dev/features/logical-assignment) | DevTools now supports logical assignment with the new `&&=`, `||=`, and `??=` operators in the **Console** and **Sources** tools.  |
| Pretty-print [numeric separators](https://v8.dev/features/numeric-separators) | DevTools now properly pretty-prints the numeric separators in the **Sources** tool.  |

Chromium issues: [1086817](https://crbug.com/1086817), [1080569](https://crbug.com/1080569)

### Lighthouse 6.2 in the Lighthouse panel

The **Lighthouse** tool is now running Lighthouse 6.2.  For a full list of changes, navigate to the [Lighthouse release notes](https://github.com/GoogleChrome/lighthouse/releases/tag/v6.2.0).

Chromium issue: [#772558](https://crbug.com/772558)

### Deprecation of other origins listing in the Service Workers pane

DevTools now provides a link from the **Service workers** pane (**Application** tool > **Service workers** pane) to view the full list of service workers from other origins.  To access the list without opening the DevTools, navigate to `edge://service-worker-internals/?devtools`.

Previously DevTools displayed a list nested under the **Application** tool > **Service workers** pane.

:::image type="complex" source="../../media/2020/08/sw-other-origins.msft.png" alt-text="Link to other origins" lightbox="../../media/2020/08/sw-other-origins.msft.png":::
   Link to other origins
:::image-end:::

Chromium issue: [#807440](https://crbug.com/807440)

### Show coverage summary for filtered items

DevTools now recalculate and display a summary of coverage information dynamically.  The dynamic display is triggered when filters are applied in the [Coverage](../../../coverage/index.md) tool.  Before the **Coverage** tool always displayed a summary of all coverage information.

In the first of the following figures, the summary initially displays `344 kB of 1.7 MB (20%) used so far.  1.4 MB unused.` and in the second of the following figures, the summary displays `26.8 kB of 408 kB (7%) used so far.  381 kB unused.` after CSS filtering is applied.

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/coverage-compare.msft.png" alt-text="Coverage summary" lightbox="../../media/2020/08/coverage-compare.msft.png":::
         Coverage summary
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/coverage-compare-css-filter.msft.png" alt-text="Coverage summary for filtered items" lightbox="../../media/2020/08/coverage-compare-css-filter.msft.png":::
         Coverage summary for filtered items
      :::image-end:::
   :::column-end:::
:::row-end:::

Chromium issue: [#1061385](https://crbug.com/1090802)

### New frame details view in Application panel

DevTools now show a detailed view for each frame.  To access it, choose a frame under the **Frames** menu in the **Application** tool.

:::image type="complex" source="../../media/2020/08/frame-details.msft.png" alt-text="New detailed view for a frame in Application panel" lightbox="../../media/2020/08/frame-details.msft.png":::
   New detailed view for a frame in **Application** tool
:::image-end:::

Chromium issue: [#1093247](https://crbug.com/1093247)

#### Frame details for opened windows

Open windows and pop-up windows now display under the frame tree as well.  The detailed view of the opened windows includes additional security information.

:::image type="complex" source="../../media/2020/08/window-opener.msft.png" alt-text="New frame detailed view for opened windows" lightbox="../../media/2020/08/window-opener.msft.png":::
   New frame detailed view for opened windows
:::image-end:::

Chromium issue: [#1107766](https://crbug.com/1107766)

#### Security and isolation information

Secure context, [Cross-Origin-Embedder-Policy (COEP)](https://web.dev/coop-coep), and [Cross-Origin-Opener-Policy (COOP)](https://web.dev/coop-coep) are now displayed in the frame details.

:::image type="complex" source="../../media/2020/08/coep-coop.msft.png" alt-text="Security and isolation information" lightbox="../../media/2020/08/coep-coop.msft.png":::
   Security and isolation information
:::image-end:::

In the future, the Microsoft Edge DevTools team and the Chrome DevTools team are planning to add more security information to the frame details.

Chromium issue: [#1051466](https://crbug.com/1051466)

### Elements and Network panel updates

#### Accessible color suggestion in the Styles pane

DevTools now provides color suggestions for low color contrast text.

In the example below, `h1` has low contrast text.  To fix it, open the color picker of the `color` property in the **Styles** pane.  After you expand the **Contrast ratio** section, DevTools provides AA and AAA color suggestions.  Choose the suggested color to apply the color.

:::image type="complex" source="../../media/2020/08/contrast-color-suggestion.msft.png" alt-text="Color picker suggests AA and AAA color suggestions" lightbox="../../media/2020/08/contrast-color-suggestion.msft.png":::
   Color picker suggests AA and AAA color suggestions
:::image-end:::

Chromium issue: [#1093227](https://crbug.com/1093227)

#### Reinstate Properties pane in the Elements panel

The **Properties** pane is back.  It was [deprecated in Microsoft Edge 84](../05/devtools.md#deprecation-of-the-properties-pane-in-the-elements-panel).  The Microsoft Edge DevTools team and the Chrome DevTools team are planning improvements for inspecting properties of elements.

:::image type="complex" source="../../media/2020/08/properties-pane.msft.png" alt-text="Properties pane in the Elements panel" lightbox="../../media/2020/08/properties-pane.msft.png":::
   **Properties** pane in the **Elements** tool
:::image-end:::

Chromium issue: <!-- [#1105205](https://crbug.com/1105205), --> [#1116085](https://crbug.com/1116085)

<!--
#### Human-readable X-Client-Data header values in the Network panel

When inspecting a network resource in the Network panel, DevTools now formats any `X-Client-Data` header values in **Headers** pane as code.

The `X-Client-Data` HTTP header contains a list of experiment IDs and Microsoft Edge flags that are enabled in your browser.  The raw header values look like opaque strings since the values are `base-64-encoded`, serialized [protocol buffers](https://developers.google.com/protocol-buffers).  To make the contents more transparent to developers, DevTools now shows the decoded values.

:::image type="complex" source="../../media/2020/08/x-client-data.msft.png" alt-text="Human-readable `X-Client-Data` header values" lightbox="../../media/2020/08/x-client-data.msft.png":::
   Human-readable `X-Client-Data` header values
:::image-end:::

Chromium issue: [#1103854](https://crbug.com/1103854)
-->

#### Autocomplete custom fonts in the Styles pane

Imported font faces are now added to the list of CSS autocompletion when editing the `font-family` property in the **Styles** pane.

For example, if `monospace` is a custom font installed on the local machine, it displays in the CSS completion list.  In previous versions of Microsoft Edge, the font was not displayed.

:::image type="complex" source="../../media/2020/08/font-auto-complete.msft.png" alt-text="Autocomplete custom fonts" lightbox="../../media/2020/08/font-auto-complete.msft.png":::
   Autocomplete custom fonts
:::image-end:::

Chromium issue: [#1106221](https://crbug.com/1106221)

#### Consistently display resource type in Network panel

DevTools now consistently display the same resource type as the original network request and appends `/ Redirect` to the **Type** column value when redirection (HTTP status code 302) happens.

Previously DevTools changed the type to `Other` sometimes.

:::image type="complex" source="../../media/2020/08/network-redirect.msft.png" alt-text="Display redirect resource type" lightbox="../../media/2020/08/network-redirect.msft.png":::
   Display redirect resource type
:::image-end:::

Chromium issue: [#997694](https://crbug.com/997694)

#### Clear buttons in the Elements and Network tools

The following text boxes now have **Clear** buttons.

*   The filter text boxes in the **Styles** pane and **Network** tool.
*   The DOM search text box in the **Elements** tool.

Choose the **Clear** button to remove any inputted text.

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/clear-button-elements.msft.png" alt-text="Clear buttons in the Elements panels" lightbox="../../media/2020/08/clear-button-elements.msft.png":::
         Clear buttons in the **Elements** tools
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/clear-button-network.msft.png" alt-text="Clear buttons in the Network panels" lightbox="../../media/2020/08/clear-button-network.msft.png":::
         Clear buttons in the  **Network** tools
      :::image-end:::
   :::column-end:::
:::row-end:::

Chromium issue: [#1067184](https://crbug.com/1067184)


<!-- ====================================================================== -->
## Download the Microsoft Edge preview channels

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels](https://www.microsoftedgeinsider.com/download) as your default development browser.  The preview channels give you access to the latest DevTools features.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-86) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelyn-yeen) (Developer advocate, Chrome DevTools).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
