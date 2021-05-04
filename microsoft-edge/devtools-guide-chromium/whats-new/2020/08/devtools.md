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

## Announcements from the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]  

### Match keyboard shortcuts in DevTools to Visual Studio Code  

In Microsoft Edge 86, you may match keyboard shortcuts in the DevTools to your shortcuts in [Microsoft Visual Studio Code][VisualStudioCodeMain].  

:::image type="complex" source="../../media/2020/08/keyboard-shortcut.msft.png" alt-text="Match keyboard shortcuts in the DevTools to Visual Studio Code" lightbox="../../media/2020/08/keyboard-shortcut.msft.png":::
   Match keyboard shortcuts in the DevTools to Visual Studio Code  
:::image-end:::  

To activate this feature, navigate to [Customize keyboard shortcuts in the Microsoft Edge DevTools][DevtoolsCustomizeShortcuts].  

For example, the keyboard shortcut for pausing or continuing running a script in [Visual Studio Code][VisualStudioCodeShortcutsKeyboardWindows] is `F5`.  With the **DevTools (Default)** preset, that same shortcut in the DevTools is `F8`, but when you choose the **Visual Studio Code** preset, that shortcut is now also `F5`.  

Chromium issue [#174309][CR174309]  

### Emulate Surface Duo and Samsung Galaxy Fold  

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature  
:::image-end:::  

You are now able to test the look and feel of your website or app on two new devices:  [Surface Duo][MicrosoftSurfaceDevicesDuo] and [Samsung Galaxy Fold][SamsungMobileGalaxyFold] in Microsoft Edge.  

To help enhance your website or app for the dual-screen and foldable devices, use the following features when [emulating the device][DevtoolsDeviceModeIndex].  

*   [Spanning][DevtoolsDeviceModeDualScreenAndFoldables], which is when your website \(or app\) appears across both screens.
*   [Rendering the seam][DualScreenIntroductionHowWorkSeam], which is the space between the two screens.
*   Enabling experimental Web Platform APIs to access the new [CSS media screen-spanning feature][DualScreenWebCssMediaSpanning] and [JavaScript getWindowSegments API][DualScreenWebJavascriptGetwindowsegments].  

:::image type="complex" source="../../media/2020/08/surface-duo-device-emulation.msft.png" alt-text="Device emulation for Surface Duo" lightbox="../../media/2020/08/surface-duo-device-emulation.msft.png":::
   Device emulation for Surface Duo  
:::image-end:::  

To turn on this experimental feature, navigate to [Turn on experimental features][DevtoolsExperimentalFeaturesTurnOnExperimentalFeatures] and choose the checkbox next to **Emulation: Support dual screen mode**.  

For more information about this feature, navigate to [Emulate dual-screen and foldable devices in Microsoft Edge DevTools][DevtoolsDeviceModeDualScreenAndFoldables].  

Chromium issue: [#1054281][CR1054281]  

### CSS grid overlay improvements and new experimental grid features  

Thank you for the positive feedback about the improved CSS grid overlays.  The CSS grid overlays are now enabled by default and do not require you to turn on an experiment.  

:::image type="complex" source="../../media/2020/08/css-grid-overlay-article.msft.png" alt-text="CSS grid overlay for article element" lightbox="../../media/2020/08/css-grid-overlay-article.msft.png":::
   CSS grid overlay for `article` element  
:::image-end:::  

> [!NOTE]
> For more information about grid overlays, navigate to [CSS grid debugging features][DevtoolsWhatsnew200206DevtoolsCssGridDebuggingFeatures].  

The Microsoft Edge DevTools team and the Chrome DevTools team collaborate on additional features.  The new features include multiple overlays that are persistent and configurable from a new **Layout** pane on the **Elements** tool.  

To turn on this experimental feature, navigate to [Turn on experimental features][DevtoolsExperimentalFeaturesTurnOnExperimentalFeatures] and choose the checkbox next to **Enable new CSS Grid debugging features (configuration options available in Layout sidebar pane in Elements after restart)**.  

For more information about this feature, navigate to [Inspect CSS Grid in Microsoft Edge DevTools][DevtoolsCssGrid].  

Chromium issue: [#1047356][CR1047356]  

### Table copied from the Console preserves formatting  

In Microsoft Edge 85 or earlier, the formatting of a copied `console.table` was lost.  If you copied the output from the [table][DevtoolsConsoleApiTable] Console API, and pasted it, only the text of the table was kept.  

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

Chromium issue: [#1115011][CR1115011]  

### Source Order Viewer for easier accessibility testing  

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature  
:::image-end:::  

The new accessibility helper displays the order of elements in the source.  

:::image type="complex" source="../../media/2020/08/source-order-viewer.msft.png" alt-text="Activate Show source order" lightbox="../../media/2020/08/source-order-viewer.msft.png":::
   Activate **Show source order**  
:::image-end:::  

This feature makes it easier to test the way screen reader and keyboard users experience your website or app.  Screen readers and keyboard navigation depend on content being placed in a particular order in the source code of your website or app, so that it matches the rendered page.  The Source Order Viewer displays potential differences in order between the rendered page and the source code.  

To turn on this experimental feature, navigate to [Turn on experimental features][DevtoolsExperimentalFeaturesTurnOnExperimentalFeatures] and choose the checkbox next to **Enable Source Order Viewer**.  

For more information about this experiment, navigate to [Source Order Viewer][DevtoolsExperimentalFeaturesSourceOrderViewer].  

Chromium issue: [#1094406][CR1094406]  

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

Thank you for sending your feedback and helping improve Chromium.  Your feedback uncovered Issue [#1103316][CR1103316] in the open-source Chromium project.  

:::image type="complex" source="../../media/2020/08/elements- search-highlight-fixed.msft.png" alt-text="Highlighted first search result on Elements panel in Microsoft Edge 84 or later" lightbox="../../media/2020/08/elements- search-highlight-fixed.msft.png":::
   Highlighted first search result on **Elements** tool in Microsoft Edge 84 or later  
:::image-end:::  

The issue is now fixed in all versions of Microsoft Edge.  

Chromium issue: [#1103316][CR1103316]  

## Announcements from the Chromium project  

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]  

### New Media tool  

DevTools now displays media players information in the [Media][DevtoolsMediaPanelIndex] tool.  

To open the new **Media** tool, complete the following step.  

1.  Choose **Customize and control DevTools** \(`...`\) > **More tools** > **Media**.  
    
    :::image type="complex" source="../../media/2020/08/media-panel.msft.png" alt-text="New Media tool" lightbox="../../media/2020/08/media-panel.msft.png":::
       New **Media** tool  
    :::image-end:::  

Before the new **Media** tool in DevTools, the logging and debug information about video players was located under the **Recent Players** setting.  To open the **Recent Players** setting, navigate to `edge://media-internals` and choose the **Players** tool.  

View live content and inspect potential issues more quickly, including the following examples.  

*   Why frames are dropped?  
*   Why JavaScript is interacting with the player in an unexpected way?  

### Capture node screenshots using the Elements tool context menu  

You may now capture node screenshots using the context menu in the **Elements** tool.  

For example, to take a screenshot of the table of contents, hover on the element, open the contextual menu \(right-click\), and select **Capture node screenshot**.  

:::image type="complex" source="../../media/2020/08/capture-node-screenshot.msft.png" alt-text="Capture node screenshots" lightbox="../../media/2020/08/capture-node-screenshot.msft.png":::
   Capture node screenshots  
:::image-end:::  

Chromium issue: [#1100253][CR1100253]  

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

Chromium issues: [1096481][CR1096481], [1068116][CR1068116], [1080589][CR1080589]  

### Emulate missing local fonts  

Open the [Rendering tool][DevtoolsEvaluatePerformanceReferenceAnalyzeRenderingPerformance] and use the new **Disable local fonts** feature to emulate missing `local()` sources in `@font-face` rules.  

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

Chromium issue: [#384968][CR384968]  

### Emulate inactive users  

The [Idle Detection API][WebDevIdleDetection] allows developers to detect inactive users and react on idle state changes.  You are now able to use DevTools to emulate idle state changes in the **Sensors** tool for both the user state and the screen state instead of waiting for the actual idle state to change.  You may open the **Sensors** tool from the [Drawer][DevtoolsCustomizeIndexDrawer].  

:::image type="complex" source="../../media/2020/08/emulate-idle.msft.png" alt-text="Emulate inactive users" lightbox="../../media/2020/08/emulate-idle.msft.png":::
   Emulate inactive users  
:::image-end:::  

Chromium issue: [#1090802][CR1090802]  

### Emulate prefers-reduced-data  

> [!NOTE]
> In Microsoft Edge 86, to enable this feature, navigate to `edge://flags#enable-experimental-web-platform-features` and turn on the **Experimental Web Platform features** flag.  The emulation option is only displayed if the flag is enabled.  

The [prefers-reduced-data][CsswgDraftsMediaqueries5DescdefMediaPrefersReducedData] media query detects user content preferences for reduced data.  If selected, the user receives alternate page content that uses less data.  

You may now use DevTools to emulate the `prefers-reduced-data` media query.  

:::image type="complex" source="../../media/2020/08/emulate-prefers-reduced-data.msft.png" alt-text="Emulate prefers-reduced-data" lightbox="../../media/2020/08/emulate-prefers-reduced-data.msft.png":::
   Emulate prefers-reduced-data  
:::image-end:::  

Chromium issue: [#1096068][CR1096068]  

### Support for new JavaScript features  

DevTools now have better supported the following JavaScript language features.  

| JavaScript language feature | Details |  
|:--- |:--- |  
| [Logical assignment operators][V8FeaturesLogicalAssignment] | DevTools now supports logical assignment with the new `&&=`, `||=`, and `??=` operators in the **Console** and **Sources** tools.  |  
| Pretty-print [numeric separators][V8FeaturesNumericSeparators] | DevTools now properly pretty-prints the numeric separators in the **Sources** tool.  |  

Chromium issues: [1086817][CR1086817], [1080569][CR1080569]  

### Lighthouse 6.2 in the Lighthouse panel  

The **Lighthouse** tool is now running Lighthouse 6.2.  For a full list of changes, navigate to the [Lighthouse release notes][GithubGooglechromeLighthouseV620].  

Chromium issue: [#772558][CR772558]  

### Deprecation of other origins listing in the Service Workers pane  

DevTools now provides a link from the **Service workers** pane \(**Application** tool > **Service workers** pane\) to view the full list of service workers from other origins.  To access the list without opening the DevTools, navigate to `edge://service-worker-internals/?devtools`.  

Previously DevTools displayed a list nested under the **Application** tool > **Service workers** pane.  

:::image type="complex" source="../../media/2020/08/sw-other-origins.msft.png" alt-text="Link to other origins" lightbox="../../media/2020/08/sw-other-origins.msft.png":::
   Link to other origins  
:::image-end:::  

Chromium issue: [#807440][CR807440]  

### Show coverage summary for filtered items  

DevTools now recalculate and display a summary of coverage information dynamically.  The dynamic display is triggered when filters are applied in the [Coverage][DevtoolsCoverageIndex] tool.  Before the **Coverage** tool always displayed a summary of all coverage information.  

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

Chromium issue: [#1061385][CR1090802]  

### New frame details view in Application panel  

DevTools now show a detailed view for each frame.  To access it, choose a frame under the **Frames** menu in the **Application** tool.  

:::image type="complex" source="../../media/2020/08/frame-details.msft.png" alt-text="New detailed view for a frame in Application panel" lightbox="../../media/2020/08/frame-details.msft.png":::
   New detailed view for a frame in **Application** tool  
:::image-end:::  

Chromium issue: [#1093247][CR1093247]  

#### Frame details for opened windows  

Open windows and pop-up windows now display under the frame tree as well.  The detailed view of the opened windows includes additional security information.  

:::image type="complex" source="../../media/2020/08/window-opener.msft.png" alt-text="New frame detailed view for opened windows" lightbox="../../media/2020/08/window-opener.msft.png":::
   New frame detailed view for opened windows  
:::image-end:::  

Chromium issue: [#1107766][CR1107766]  

#### Security and isolation information  

Secure context, [Cross-Origin-Embedder-Policy (COEP)][WebDevCoopCoep], and [Cross-Origin-Opener-Policy (COOP)][WebDevCoopCoep] are now displayed in the frame details.  

:::image type="complex" source="../../media/2020/08/coep-coop.msft.png" alt-text="Security and isolation information" lightbox="../../media/2020/08/coep-coop.msft.png":::
   Security and isolation information  
:::image-end:::  

In the future, the Microsoft Edge DevTools team and the Chrome DevTools team are planning to add more security information to the frame details.  

Chromium issue: [#1051466][CR1051466]  

### Elements and Network panel updates  

#### Accessible color suggestion in the Styles pane  

DevTools now provides color suggestions for low color contrast text.  

In the example below, `h1` has low contrast text.  To fix it, open the color picker of the `color` property in the **Styles** pane.  After you expand the **Contrast ratio** section, DevTools provides AA and AAA color suggestions.  Choose the suggested color to apply the color.  

:::image type="complex" source="../../media/2020/08/contrast-color-suggestion.msft.png" alt-text="Color picker suggests AA and AAA color suggestions" lightbox="../../media/2020/08/contrast-color-suggestion.msft.png":::
   Color picker suggests AA and AAA color suggestions  
:::image-end:::  

Chromium issue: [#1093227][CR1093227]  

#### Reinstate Properties pane in the Elements panel  

The **Properties** pane is back.  It was [deprecated in Microsoft Edge 84][DevtoolsWhatsnew200205DevtoolsDeprecationPropertiesPaneElementsPanel].  The Microsoft Edge DevTools team and the Chrome DevTools team are planning improvements for inspecting properties of elements.  

:::image type="complex" source="../../media/2020/08/properties-pane.msft.png" alt-text="Properties pane in the Elements panel" lightbox="../../media/2020/08/properties-pane.msft.png":::
   **Properties** pane in the **Elements** tool  
:::image-end:::  

Chromium issue:  <!--  [#1105205][CR1105205],  -->  [#1116085][CR1116085]  

<!--  
#### Human-readable X-Client-Data header values in the Network panel  

When inspecting a network resource in the Network panel, DevTools now formats any `X-Client-Data` header values in **Headers** pane as code.  

The `X-Client-Data` HTTP header contains a list of experiment IDs and Microsoft Edge flags that are enabled in your browser.  The raw header values look like opaque strings since the values are `base-64-encoded`, serialized [protocol buffers][GoogleDevelopersProtocolBuffers].  To make the contents more transparent to developers, DevTools now shows the decoded values.  

:::image type="complex" source="../../media/2020/08/x-client-data.msft.png" alt-text="Human-readable `X-Client-Data` header values" lightbox="../../media/2020/08/x-client-data.msft.png":::
   Human-readable `X-Client-Data` header values  
:::image-end:::  

Chromium issue: [#1103854][CR1103854]  
-->  

#### Autocomplete custom fonts in the Styles pane  

Imported font faces are now added to the list of CSS autocompletion when editing the `font-family` property in the **Styles** pane.  

For example, if `monospace` is a custom font installed on the local machine, it displays in the CSS completion list.  In previous versions of Microsoft Edge, the font was not displayed.

:::image type="complex" source="../../media/2020/08/font-auto-complete.msft.png" alt-text="Autocomplete custom fonts" lightbox="../../media/2020/08/font-auto-complete.msft.png":::
   Autocomplete custom fonts  
:::image-end:::  

Chromium issue: [#1106221][CR1106221]  

#### Consistently display resource type in Network panel  

DevTools now consistently display the same resource type as the original network request and appends `/ Redirect` to the **Type** column value when redirection \(HTTP status code 302\) happens.  

Previously DevTools changed the type to `Other` sometimes.  

:::image type="complex" source="../../media/2020/08/network-redirect.msft.png" alt-text="Display redirect resource type" lightbox="../../media/2020/08/network-redirect.msft.png":::
   Display redirect resource type  
:::image-end:::  

Chromium issue: [#997694][CR997694]  

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

Chromium issue: [#1067184][CR1067184]  

## Download the Microsoft Edge preview channels  

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]  

<!-- links -->  

[DevtoolsWhatsnew200205DevtoolsDeprecationPropertiesPaneElementsPanel]: ../05/devtools.md#deprecation-of-the-properties-pane-in-the-elements-panel "Deprecation of the Properties pane in the Elements panel - What's new in DevTools (Microsoft Edge 84) | Microsoft Docs"  
[DevtoolsWhatsnew200206DevtoolsCssGridDebuggingFeatures]: ../06/devtools.md#css-grid-debugging-features "CSS grid debugging features - What's New In DevTools (Microsoft Edge 85) | Microsoft Docs"  

[DevtoolsConsoleApiTable]: ../../../console/api.md#table "table - Console API reference | Microsoft Docs"  
[DevtoolsCoverageIndex]: ../../../coverage/index.md "Find unused JavaScript and CSS code with the Coverage tab in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCssGrid]: ../../../css/grid.md "Inspect CSS Grid in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCustomizeIndexDrawer]: ../../../customize/index.md#drawer "Drawer - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCustomizeShortcuts]: ../../../customize/shortcuts.md "Customize keyboard shortcuts in the Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsDeviceModeIndex]: ../../../device-mode/index.md "Emulate mobile devices in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsDeviceModeDualScreenAndFoldables]: ../../../device-mode/dual-screen-and-foldables.md "Emulate dual-screen and foldable devices in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsEvaluatePerformanceReferenceAnalyzeRenderingPerformance]: ../../../evaluate-performance/reference.md#analyze-rendering-performance-with-the-rendering-tool "Analyze rendering performance with the Rendering tool - Performance Analysis Reference | Microsoft Docs"  
<!--  [DevtoolsExperimentalFeaturesEnableExperimentalApis]: ../../../experimental-features/index.md#enable-experimental-apis "Enable experimental APIs - Experimental features | Microsoft Docs"  -->  
[DevtoolsExperimentalFeaturesEmulationSupportDualScreenMode]: ../../../experimental-features/index.md#emulation-support-dual-screen-mode "Emulation: Support dual screen mode - Experimental features | Microsoft Docs"  
[DevtoolsExperimentalFeaturesSourceOrderViewer]: ../../../experimental-features/index.md#source-order-viewer "Source Order Viewer - Experimental features | Microsoft Docs"
<!--  [DevtoolsExperimentalFeaturesTestOnFoldableDualScreenDevices]: ../../../experimental-features/index.md#test-on-foldable-and-dual-screen-devices "Test on foldable and dual-screen devices - Experimental features | Microsoft Docs"  -->  
[DevtoolsExperimentalFeaturesTurnOnExperimentalFeatures]: ../../../experimental-features/index.md#turn-on-experimental-features "Turn on experimental features - Experimental features | Microsoft Docs"  
[DevtoolsMediaPanelIndex]: ../../../media-panel/index.md "View and debug media players information | Microsoft Docs"  

[DualScreenIntroductionHowWorkSeam]:  /dual-screen/introduction#how-to-work-with-the-seam "How to work with the seam - Introduction to dual-screen devices | Microsoft Docs"  
[DualScreenWebCssMediaSpanning]: /dual-screen/web/css-media-spanning "CSS media screen-spanning feature for dual-screen detection | Microsoft Docs"  
[DualScreenWebJavascriptGetwindowsegments]: /dual-screen/web/javascript-getwindowsegments "The getWindowSegments JavaScript API for dual-screen devices | Microsoft Docs"  

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  

[VisualStudioCodeMain]: https://code.visualstudio.com "Visual Studio Code"  
[VisualStudioCodeShortcutsKeyboardWindows]: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf "Visual Studio Code Keyboard shortcuts for Windows"  

[MicrosoftSurfaceDevicesDuo]: https://www.microsoft.com/surface/devices/surface-duo "The new Surface Duo"  

[EdgeDevToolsTwitterAccount]: https://twitter.com/EdgeDevTools "@EdgeDevTools Twitter account"  

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"  

[CR174309]: https://crbug.com/174309 "DevTools: Allow to customize keyboard shortcuts/key bindings | Chromium bugs"
[CR384968]: https://crbug.com/384968 "Option to ignore local() fonts | Chromium bugs"  
[CR772558]: https://crbug.com/772558 "DevTools: Update to latest version of Lighthouse | Chromium bugs"  
[CR807440]: https://crbug.com/807440 "Chrome locks up with large numbers of SWs | Chromium bugs"  
[CR997694]: https://crbug.com/997694 "XHR requests with 302 status are not shown under the \"xhr\" filter in network panel | Chromium bugs"  
[CR1047356]: https://crbug.com/1047356 "CSS Grid/Flexbox/Table tooling | Chromium bugs"  
[CR1051466]: https://crbug.com/1051466 "Support COOP/COEP debugging in DevTools | Chromium bugs"  
[CR1054281]: https://crbug.com/1054281 "Feature Request: DevTools should emulate foldable and dual-screen devices | Chromium bugs"  
[CR1067184]: https://crbug.com/1067184 "Feature Request: Clear filter button on Network & Elements -> Style Filter inputs | Chromium bugs"  
[CR1068116]: https://crbug.com/1068116 "☂ Ship issues panel | Chromium bugs"  
[CR1080569]: https://crbug.com/1080569 "acorn doesn't support logical assignment operators | Chromium bugs"  
[CR1080589]: https://crbug.com/1080589 "Classify issues by third-party / first-party | Chromium bugs"  
[CR1086817]: https://crbug.com/1086817 "acorn doesn't support numeric separators | Chromium bugs"  
[CR1090802]: https://crbug.com/1090802 "Simulate idle state changes from Idle Detection API | Chromium bugs"  
[CR1093227]: https://crbug.com/1093227 "DevTools: suggest closest accessible color | Chromium bugs"  
[CR1093247]: https://crbug.com/1093247 "Display info about frames in application panel | Chromium bugs"  
[CR1094406]: https://crbug.com/1094406 "Developers want a source order viewer for AT https://webwewant.fyi/wants/64/"  
[CR1096068]: https://crbug.com/1096068 "DevTools: support emulating the prefers-reduced-data media feature | Chromium bugs"  
[CR1096481]: https://crbug.com/1096481 "Issues banner placement | Chromium bugs"  
[CR1100253]: https://crbug.com/1100253 "Add screenshot node shortcut in Element context menu | Chromium bugs"  
[CR1103316]: https://crbug.com/1103316 "Elements search does not resolveNode (highlight text, etc) on first search result | Chromium bugs"  
[CR1103854]: https://crbug.com/1103854 "De-obfuscate X-Client-Data values in Developer Tools | Chromium bugs"  
<!--  [CR1105205]: https://crbug.com/1105205 "Issue 1105205 | Chromium bugs"  -->  
[CR1106221]: https://crbug.com/1106221 "Add imported fonts to the font-family autocompletion in the Styles panel | Chromium bugs"  
[CR1107766]: https://crbug.com/1107766 "Display info about frames generated by 'window.open()' in frame tree | Chromium bugs"  
[CR1115011]: https://crbug.com/1115011 "When copying a table from the console the structure of the table is not preserved | Chromium bugs"  
[CR1116085]: https://crbug.com/1116085 "Please bring back the DevTools Properties inspector | Chromium bugs"  

[CsswgDraftsMediaqueries5DescdefMediaPrefersReducedData]: https://drafts.csswg.org/mediaqueries-5#descdef-media-prefers-reduced-data "prefers-reduced-data - Media Queries Level 5 | W3C CSS Working Group Editor Drafts"  

[GithubGooglechromeLighthouseV620]: https://github.com/GoogleChrome/lighthouse/releases/tag/v6.2.0 "v6.2.0 - GoogleChrome/lighthouse | GitHub"  

[GoogleDevelopersProtocolBuffers]: https://developers.google.com/protocol-buffers "Protocol Buffers | Google Developers"  

[SamsungMobileGalaxyFold]: https://www.samsung.com/us/mobile/galaxy-fold "Galaxy Fold | Samsung US"  

[V8FeaturesLogicalAssignment]: https://v8.dev/features/logical-assignment "Logical assignment | V8"  
[V8FeaturesNumericSeparators]: https://v8.dev/features/numeric-separators "Numeric separators | V8"  

[WebDevCoopCoep]: https://web.dev/coop-coep "Making your website \"cross-origin isolated\" using COOP and COEP | web.dev"  
[WebDevIdleDetection]: https://web.dev/idle-detection "Detect inactive users with the Idle Detection API | web.dev"  
[WebDevNonCompositedAnimations]: https://web.dev/non-composited-animations "Avoid non-composited animations | web.dev"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developer.chrome.com/blog/new-in-devtools-86) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors#jecelyn-yeen  
