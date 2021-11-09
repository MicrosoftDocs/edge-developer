---
description: New CSS Grid debugging tools, Webauthn tool, moveable tools, and Computed sidebar panel.
title: What's new in DevTools (Microsoft Edge 87)
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
# What's New In DevTools (Microsoft Edge 87)

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]


<!-- ====================================================================== -->
## Improving DevTools localization

To meet your translation needs, the Microsoft Edge DevTools team is focused on improving translation quality.  Starting in Microsoft Edge version 87, several strings and terms are locked and do not change even when the rest of the DevTools are displayed in other languages.  The list of affected strings and terms include the following.

*   The strings in the **Lighthouse** tool.
*   The term `service worker`.
*   Some of the **Network** tool filters such as `URL`, `XHR`, `JS`, and `CSS`.
*   The [$0](../../../console/utilities.md#recently-chosen-element-or-javascript-object) Console Utilities API.

[$0](../../../console/utilities.md#recently-chosen-element-or-javascript-object) is now available in the [Console](../../../console/index.md) for users on localized versions of the DevTools.   Thank you to the global developer community for helping improve localization of the Microsoft Edge DevTools.  Continue to [send feedback on localization quality](../../../contact.md) to improve support for DevTools in all locales.  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [#1136655](https://crbug.com/1136655).

:::image type="complex" source="../../media/2020/10/bing-network-japanese.msft.png" alt-text="Network tool with non-localized filters" lightbox="../../media/2020/10/bing-network-japanese.msft.png":::
   **Network** pane with non-localized filters
:::image-end:::


<!-- ====================================================================== -->
## Move tools between top and bottom panels

DevTools now supports moving tools between the top and bottom panels.  Customize your DevTools and improve your productivity by viewing any combination of two tools at the same time.  For example, view the **Elements** and the **Sources** tools at the same time (by moving the **Sources** tool to the bottom).  To review the history of this feature in the Chromium open-source project, navigate to Issue [#1075732](https://crbug.com/1075732).

:::row:::
   :::column span="":::
      To move any top tool to the bottom, hover on a tab, open the contextual menu (right-click), and choose **Move to bottom**.

      :::image type="complex" source="../../media/2020/10/move-to-bottom.msft.png" alt-text="Move to bottom" lightbox="../../media/2020/10/move-to-bottom.msft.png":::
         Move to bottom
      :::image-end:::
   :::column-end:::
   :::column span="":::
      To move any bottom tool to the top, hover on a tab, open the contextual menu (right-click), and choose **Move to top**.

      :::image type="complex" source="../../media/2020/10/move-to-top.msft.png" alt-text="Move to top" lightbox="../../media/2020/10/move-to-top.msft.png":::
         Move to top
      :::image-end:::
   :::column-end:::
:::row-end:::


<!-- ====================================================================== -->
## Save and export using the Network Console

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature
:::image-end:::

The **Network Console** tool now has improved compatibility with the [Postman v2.1](https://schema.getpostman.com/json/collection/v2.1.0/docs/index.html) and [OpenAPI v2](https://swagger.io/specification/v2) schemas.  To enable the experiment, navigate to [Turning on Experimental features](../../../experimental-features/index.md#turning-on-experimental-features) and choose the checkbox next to **Enable Network Console**.  For more information about the **Network Console**, navigate to [Enable Network Console Experimental feature](../../../experimental-features/index.md#enable-network-console).  This experiment now supports the following actions.

*   Save and export Collections and Environments.
*   Edit and export sets of environment variables within the **Network Console** tool.

To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [#1093687](https://crbug.com/1093687).

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/network-console-environments-new-name.msft.png" alt-text="Enter name for the new environment" lightbox="../../media/2020/10/network-console-environments-new-name.msft.png":::
         Enter name for the new environment
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/network-console-environments-new-format.msft.png" alt-text="Choose format for the new environment" lightbox="../../media/2020/10/network-console-environments-new-format.msft.png":::
         Choose format for the new environment
      :::image-end:::
   :::column-end:::
:::row-end:::


<!-- ====================================================================== -->
## Improved CSS Grid tooling

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature
:::image-end:::

The Microsoft Edge DevTools now support the following features for inspecting, viewing, and debugging your CSS grids.

*   Display a simplified grid overlay using the **Inspect** tool, or get more detailed information with persistent overlays.
*   To enable persistent grid overlays, choose the grid icon next to a grid container element in the **Elements** tool or choose the grid in the **Layout** tool.
*   You may enable persistent overlays for multiple grids.
*   The new **Layout** tool allows you to easily toggle grid overlays and configure the appearance and the content for each.

The features are turned on by default.  For more information about the features, navigate to [CSS grids](../../../css/grid.md).  To review the history of this feature in the Chromium open-source project, navigate to Issue [#1047356](https://crbug.com/1047356).  Additionally, the Microsoft Edge DevTools team is collaborating with the Chrome DevTools team and Chromium community to add new flexbox tooling features to DevTools.  For updates on flexbox tooling in the Chromium open-source project, navigate to Issue [#1136394](https://crbug.com/1136394).

:::image type="complex" source="../../media/2020/10/grid-layout-pane.msft.png" alt-text="Layout tool with grids" lightbox="../../media/2020/10/grid-layout-pane.msft.png":::
   **Layout** tool with grids
:::image-end:::


<!-- ====================================================================== -->
## Customize keyboard shortcuts in Settings

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature
:::image-end:::

You are now able to customize the keyboard shortcut for any action in the DevTools.  Since Microsoft Edge version 84, you are able to choose between **Visual Studio Code** and **DevTools (default)** presets for [keyboard shortcuts](../../../customize/shortcuts.md).  Starting in Microsoft Edge version 87, you can turn on the **Enable keyboard shortcut editor** experiment to further [customize keyboard shortcuts](../../../customize/shortcuts.md#edit-the-keyboard-shortcut-for-a-devtools-action).

To enable the experiment, navigate to [Turning on Experimental features](../../../experimental-features/index.md#turning-on-experimental-features) and choose the checkbox next to **Enable keyboard shortcut editor**.  For more information about customizing and editing shortcuts, navigate to [Edit keyboard shortcuts for any action in the DevTools](../../../customize/shortcuts.md#edit-the-keyboard-shortcut-for-a-devtools-action).  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [#174309](https://crbug.com/174309).

:::image type="complex" source="../../media/2020/10/custom-shortcut-pause-script.msft.png" alt-text="Custom shortcut for pausing a script" lightbox="../../media/2020/10/custom-shortcut-pause-script.msft.png":::
   Custom shortcut for pausing a script
:::image-end:::

<!-- [enable the keyboard shortcut editor](../../../experimental-features/index.md#enable-keyboard-shortcut-editor) -->


<!-- ====================================================================== -->
## Introducing the Microsoft Edge Tools for Visual Studio Code extension

The **Elements for Visual Studio Code** and **Network for Visual Studio Code** extensions are now merged into the new [Microsoft Edge Developer Tools for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools) extension.  Use the Microsoft Edge DevTools for the following activities without leaving Microsoft Visual Studio Code.

*   Debug the DOM
*   Edit CSS
*   Inspect network traffic

With the extension, launch Microsoft Edge, connect to an existing instance of the browser, or use a headless browser directly from your editor.  To start contributing and filing issues with your feedback about this extension, navigate to the [Microsoft Edge Developer Tools for Visual Studio Code](https://github.com/Microsoft/vscode-edge-devtools) repo on GitHub.

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/microsoft-edge-tools-full-browser.msft.png" alt-text="Using the extension in full browser mode screenshot" lightbox="../../media/2020/10/microsoft-edge-tools-full-browser.msft.png":::
         Using the extension in full browser mode screenshot
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/microsoft-edge-tools-headless.msft.png" alt-text="Using the extension in headless mode screenshot" lightbox="../../media/2020/10/microsoft-edge-tools-headless.msft.png":::
         Using the extension in headless mode screenshot
      :::image-end:::
   :::column-end:::
:::row-end:::


<!-- ====================================================================== -->
## Announcements from the Chromium project

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]

### New WebAuthn tool

In earlier versions of Microsoft Edge, there was no native WebAuthn debugging support.  You needed physical authenticators to test your web application with the [Web Authentication API](https://w3c.github.io/webauthn).  With the new **WebAuthn** tool, you are able to do the following actions without the use of any physical authenticators.

*   Emulate authenticators
*   Customize attributes of authenticators
*   Inspect states of authenticators

For more information about the **WebAuthn** feature, navigate to [Emulate authenticators and debug WebAuthn in Microsoft Edge DevTools](../../../webauthn/index.md).

You are able to emulate authenticators and debug the [Web Authentication API](https://w3c.github.io/webauthn) with the new [WebAuthn](../../../webauthn/index.md) tool.  To open the **WebAuthn** tool, choose **the Customize and control DevTools** (`...`) icon > **More tools** > **WebAuthn**.  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [#1034663](https://crbug.com/1034663).

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/more-tools-webauthn.msft.png" alt-text="Open the WebAuthn tool" lightbox="../../media/2020/10/more-tools-webauthn.msft.png":::
         Open the **WebAuthn** tool
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/webauthn-enable-virtual-auth.msft.png" alt-text="WebAuthn tool" lightbox="../../media/2020/10/webauthn-enable-virtual-auth.msft.png":::
         **WebAuthn** tool
      :::image-end:::
   :::column-end:::
:::row-end:::

### Elements tool updates

#### View the Computed sidebar pane in the Styles pane

Toggle the **Computed** pane in the **Styles** pane.  The **Computed** pane in the **Styles** pane is collapsed by default.  To toggle it, choose the button.  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [#1073899](https://crbug.com/1073899).

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/computed-sidebar-pane.msft.png" alt-text="Open the Computed sidebar pane" lightbox="../../media/2020/10/computed-sidebar-pane.msft.png":::
         Open the **Computed sidebar** pane
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/computed-sidebar-pane-open.msft.png" alt-text="Computed sidebar pane" lightbox="../../media/2020/10/computed-sidebar-pane-open.msft.png":::
         **Computed sidebar** pane
      :::image-end:::
   :::column-end:::
:::row-end:::

#### Grouping CSS properties in the Computed panel

To view your applied CSS with less scrolling, group the CSS properties by categories in the **Computed** pane.  You may also selectively focus on a set of related properties while you inspect your CSS.  From the **Elements** tool, choose an element.  To group (or ungroup) the CSS properties, toggle the **Group** checkbox.  To review real-time updates on this feature in the Chromium open-source project, navigate to Issues [#1096230](https://crbug.com/1096230), [#1084673](https://crbug.com/1084673), and [#1106251](https://crbug.com/1106251).

:::image type="complex" source="../../media/2020/10/grouping-css-prop.msft.png" alt-text="Grouping CSS properties" lightbox="../../media/2020/10/grouping-css-prop.msft.png":::
   Grouping CSS properties
:::image-end:::

### Lighthouse 6.4 in the Lighthouse tool

The **Lighthouse** tool is now running Lighthouse 6.4.  For a full list of changes, navigate to the [Lighthouse release notes](https://github.com/GoogleChrome/lighthouse/releases/v6.4.1).  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [#772558](https://crbug.com/772558).

### performance.mark() events in the Timings section

The **Timings section** of a recording in the [Performance](../../../evaluate-performance/reference.md) tool now marks `performance.mark()` <!--[performance mark](https://jec.fyi/demo/perf-mark) -->events.  To try this feature and measure the performance of your JavaScript code, add `performance.mark()` events to your code.  For example, the following code snippet adds markers before and after a `for` loop that iterates from 0 to 1000 using increments of 7.

```javascript
performance.mark('start');
for (var i = 0; i < 1000; i+=7;){
  console.log(i);
}
performance.mark('end');
```

Then, open the [Performance](../../../evaluate-performance/reference.md) tool and navigate to the **Timings section** to record your JavaScript code.  The `performance.mark()` events you added are now displayed in the recording.

:::image type="complex" source="../../media/2020/10/perf-mark.msft.png" alt-text="Performance.mark events" lightbox="../../media/2020/10/perf-mark.msft.png":::
   `performance.mark` events
:::image-end:::

### New resource-type and url filters in the Network tool

Use the new `resource-type` and `url` keywords in the **Network** tool to filter network requests.  For example, use `resource-type:image` to focus on the network requests that are images.

:::image type="complex" source="../../media/2020/10/network-resource-type-filter.msft.png" alt-text="resource-type filter" lightbox="../../media/2020/10/network-resource-type-filter.msft.png":::
   resource-type filter
:::image-end:::

To discover more special keywords such as `resource-type` and `url`, navigate to [filter requests by properties](../../../network/reference.md#filter-requests-by-properties).  To review real-time updates on this feature in the Chromium open-source project, navigate to Issues [#1121141](https://crbug.com/1121141) and [#1104188](https://crbug.com/1104188).

### Frame details view updates

#### Display COEP and COOP reporting to endpoint

View the Cross-Origin Embedder Policy (COEP) and Cross-Origin Opener Policy (COOP) `reporting to` endpoint under the **Security & Isolation** section.  The [Reporting API](https://developer.mozilla.org/docs/Web/API/Reporting_API) defines `Report-To`, a new HTTP header, that gives you a way to specify the server endpoints for the browser to send warnings and errors.  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [#1051466](https://crbug.com/1051466).

:::image type="complex" source="../../media/2020/10/https_first_party_test_glitch_me_coop-1.msft.png" alt-text="The reporting to endpoint" lightbox="../../media/2020/10/https_first_party_test_glitch_me_coop-1.msft.png":::
   The `reporting to` endpoint
:::image-end:::

#### Display COEP and COOP report-only mode

DevTools now display the `report-only` label for COEP and COOP that are set to `report-only` mode.  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [#1051466](https://crbug.com/1051466).

:::image type="complex" source="../../media/2020/10/https_first_party_test_glitch_me_coop-2.msft.png" alt-text="The report-only mode label" lightbox="../../media/2020/10/https_first_party_test_glitch_me_coop-2.msft.png":::
   The `report-only` mode label
:::image-end:::

### View and fix color contrast issues in the CSS Overview tool

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature
:::image-end:::

The **CSS Overview** tool now displays a list of elements on your page that have color contrast issues.  The following demo page has an example of a color contrast issue.

[CSS Overview Accessible Colors Demo](https://css-overview-accessible-colors-demo.glitch.me)

To enable this experiment, under **Settings** > **Experiments**, choose the **CSS Overview** checkbox.  To view a list of elements that have a color contrast issue, on **Contrast issues**, choose **Text**.  To open the element in the **Elements** tool, choose an element in the list.  To help fix contrast issues, the Microsoft Edge DevTools [automatically provide color suggestions](../08/devtools.md#accessible-color-suggestion-in-the-styles-pane).  To review real-time updates on this feature in the Chromium open-source project, navigate to Issue [#1120316](https://crbug.com/1120316).

:::image type="complex" source="../../media/2020/10/css-overview.msft.png" alt-text="Low color contrast issues" lightbox="../../media/2020/10/css-overview.msft.png":::
   Low color contrast issues
:::image-end:::


<!-- ====================================================================== -->
## Download the Microsoft Edge preview channels

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels](https://www.microsoftedgeinsider.com/download) as your default development browser.  The preview channels give you access to the latest DevTools features.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-87) and is authored by [Jecelyn Yeen](https://developers.google.com/web/resources/contributors#jecelyn-yeen) (Developer advocate, Chrome DevTools).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
