---
description: New Media panel, capture node screenshot, Issues Drawer pane updates, emulate missing local fonts, inactive users and prefers-reduced-data.
title: What's new in DevTools (Microsoft Edge 86)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/02/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# What's New In DevTools (Microsoft Edge 86)  

## Announcements from the Microsoft Edge DevTools team  

The following sections are a list of announcements you may have missed from the Microsoft Edge DevTools team.  See the announcements to try new features in the DevTools, Visual Studio Code extensions, and more.  To stay up to date on all the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] and [follow the Microsoft Edge DevTools team on Twitter][EdgeDevToolsTwitterAccount].  

### Match keyboard shortcuts in DevTools to Visual Studio Code  

From your [feedback](#getting-in-touch-with-microsoft-edge-devtools-team) and the [Chromium public issue tracker][CRIssuesList], the ability to customize keyboard shortcuts in the DevTools was a highly requested.  In Microsoft Edge 86, you are now able to match keyboard shortcuts in the DevTools to [Visual Studio Code][VisualStudioCode], which is just one of the features the team is developing for shortcut customization.  

:::image type="complex" source="../../media/2020/08/keyboard-shortcut.msft.png" alt-text="Match keyboard shortcuts in the DevTools to Visual Studio Code" lightbox="../../media/2020/08/keyboard-shortcut.msft.png":::
   The Microsoft Edge DevTools in high contrast mode  
:::image-end:::  

To activate this feature, complete the following actions.  

1.  Open **DevTools**.  
1.  To open **Settings**, select `?` or choose the **Settings** \(![DevTools Settings icon][ImageSettingsIcon]\) icon in the top-right corner of the DevTools.  
1.  On the **Shortcuts** section, choose the **Match shortcuts from preset** and change **DevTools (Default)** to **Visual Studio Code**.  

The keyboard shortcuts in the DevTools now match the shortcuts for equivalent actions in Visual Studio Code.  

For example, the keyboard shortcut for pausing or continuing running a script in [Visual Studio Code][VisualStudioCodeShortcutsKeyboardWindows] is `F5`.  After choosing the **DevTools (Default)** preset, that same shortcut in the DevTools is `F8`, but with the **Visual Studio Code** preset, that shortcut is now also `F5`.  

Chromium issue [#174309][CR174309]  

### Emulate Surface Duo and Samsung Galaxy Fold  

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature  
:::image-end:::  

You are now able to test how your website or app should appear on the new class of dual-screen and foldable devices.  

Additional features like [spanning][DevtoolsDualScreenIntroductionDevices1], [visualizing the seam][DevtoolsDualScreenIntroductionDevices2], and [enabling experimental web platform APIs][DevtoolsExperimentalFeatures].  

:::image type="complex" source="../../media/2020/08/surface-duo-device-emulation.msft.png" alt-text="Device emulation for Surface Duo" lightbox="../../media/2020/08/surface-duo-device-emulation.msft.png":::
   Device emulation for Surface Duo  
:::image-end:::  

To activate this experimental feature, complete the following actions.  

1.  Under the **Experiments** section, choose the **Emulation: Support dual screen mode** checkbox.  
1.  Reload the DevTools.  
1.  Open the DevTools **Settings** again.  
1.  Go to `edge://flags` and choose the **Experimental Web Platform features** flag.  

The feature is currently available in Microsoft Edge 86 as an experiment, so please share your [feedback](#getting-in-touch-with-microsoft-edge-devtools-team) with the team.  

Chromium issue: [#1054281][CR1054281]  

### CSS grid overlay improvements and new experimental grid features  

You provided positive feedback about the improved CSS grid overlays, so it is now the default experience and no longer behind an experimental flag.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/css-grid-overlay-main.msft.png" alt-text="CSS grid overlay for main element" lightbox="../../media/2020/08/css-grid-overlay-main.msft.png":::
         CSS grid overlay for `main` element  
      :::image-end:::  
   :::column-end:::  
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/css-grid-overlay-article.msft.png" alt-text="CSS grid overlay for article element" lightbox="../../media/2020/08/css-grid-overlay-article.msft.png":::
         CSS grid overlay for `article` element  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

> [!NOTE]
> For more information about grid overlays, go to [CSS grid debugging features][DevtoolsWhatsnew200206DevtoolsCssGridDebuggingFeatures].  

The Microsoft Edge DevTools team and the Chrome DevTools team are collaborating on additional features.  The new features include multiple, persistent overlays that are configurable from a new **Layout** pane on the **Elements** panel.  

To preview the latest experimental features, complete the following actions.  

1.  Under the **Experiments** section, choose the **Enable new CSS Grid debugging features (configuration options available in Layout sidebar pane in Elements after restart)** checkbox.  

Chromium issue: [#1047356][CR1047356]  

### Table copied from the Console preserves formatting  

In version of Microsoft Edge 85 or earlier, if you copied the output from the [table][DevtoolsConsoleApiTable] Console API, the pasted result was only the text of the table and the formatting was lost.  

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

### Source Order Viewer enhances accessibility  

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature  
:::image-end:::  

The new accessibility helper displays the order of elements in the source.  

:::image type="complex" source="../../media/2020/08/source-order-viewer.msft.png" alt-text="Activate Show source order" lightbox="../../media/2020/08/source-order-viewer.msft.png":::
   Activate **Show source order**  
:::image-end:::  

The feature should help you avoid confusion when testing for user of screen reader.  

To activate this experimental feature, complete the following actions.  

1.  Under the **Experiments** section, choose the **Source Order Viewer** checkbox.  
1.  Reload the DevTools.  
1.  On the **Elements** panel, choose the **Accessibility** pane.  
1.  On the **Accessibility** pane, in the **Source Order Viewer** section, choose the **Show Source Order** checkbox.  

Chromium issue: [#1094406][CR1094406]  

### Your feedback enhances localized DevTools  

Your feedback and internal discoveries uncovered which text strings used in the Microsoft Edge feedback should remain untranslated or create confusion when translated.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/localization-improvements-chinese-complex.msft.png" alt-text="Microsoft Edge DevTools in Traditional Chinese" lightbox="../../media/2020/08/media/localization-improvements-chinese-complex.msft.png":::
         Microsoft Edge DevTools in Traditional Chinese  
      :::image-end:::  
   :::column-end:::  
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/localization-improvements-japanese.msft.png" alt-text="Microsoft Edge DevTools in Japanese" lightbox="../../media/2020/08/localization-improvements-japanese.msft.png":::
         Microsoft Edge DevTools in Japanese  
      :::image-end:::  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/localization-improvements-russian.msft.png" alt-text="Microsoft Edge DevTools in Russian" lightbox="../../media/2020/08/localization-improvements-russian.msft.png":::
         Microsoft Edge DevTools in Russian  
      :::image-end:::  
   :::column-end:::  
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/localization-improvements-english.msft.png" alt-text="Microsoft Edge DevTools in English" lightbox="../../media/2020/08/localization-improvements-english.msft.png":::
         Microsoft Edge DevTools in English  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

To meet your translation needs, the Microsoft Edge DevTools team is focused on improving translation quality.  

The current effort to improve translation quality enables easier support for more languages in the future.  

Chromium issue: **n/a**  

### Highlight all search results in Elements tool  

In Microsoft Edge 84 and 85, the first search result in the **Elements** panel did not highlight.  The remaining search results were highlighted correctly.  

Your feedback uncovered a bug in the open source Chromium project.  

:::row:::
   :::column span="":::
      <!--todo: this figure need to be updated  -->  
      
      :::image type="complex" source="../../media/2020/08/null.msft.png" alt-text="Un-highlighted first search result on Elements panel in Microsoft Edge 83 or earlier" lightbox="../../media/2020/08/null.msft.png":::
         Un-highlighted first search result on **Elements** panel in Microsoft Edge 83 or earlier
      :::image-end:::  
   :::column-end:::  
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/elements- search-highlight-fixed.msft.png" alt-text="Highlighted first search result on Elements panel in Microsoft Edge 84 or later" lightbox="../../media/2020/08/elements- search-highlight-fixed.msft.png":::
         Highlighted first search result on **Elements** panel in Microsoft Edge 84 or later  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

The update originated in Microsoft Edge 86 and is now available in Microsoft Edge 84 or later.  

Chromium issue: [#1103316][CR1103316]  

## Announcements from the Chromium project  

The following sections announce additional features available in Microsoft Edge 86 that were contributed to the open source Chromium project.  

<!-- The CRbug assocaited with the new media panel is locked.  -->  

<!--
### New Media panel  

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature  
:::image-end:::  

DevTools now displays media players information in the [Media][DevtoolsMediaIndex] panel.  

:::image type="complex" source="../../media/2020/08/media-panel.msft.png" alt-text="New Media panel" lightbox="../../media/2020/08/media-panel.msft.png":::
   New **Media** panel  
:::image-end:::  

Prior to the new **Media** panel in DevTools, you found the logging and debug information about video players was located on the **Recent Players** setting.  To open the **Recent Players** setting, go to `edge://media-internals`.  

The new **Media** panel provides an easier way to view events, logs, properties, and a timeline of frame decodes in the same browser tab as the video player.  You view the live content and inspect on potential issues quicker \(for example, why dropped frames are occurring, why is JavaScript interacting with the player in an unexpected way\).  

Chromium issue: [#1018414][CR1018414]  
-->  

### Capture node screenshots using Elements panel context menu  

You are now able to capture node screenshots using the context menu in the **Elements** panel.  

For example, to take a screenshot of the table of contents, hover on the element, open the contextual menu \(right-click\), and select **Capture node screenshot**.  

:::image type="complex" source="../../media/2020/08/capture-node-screenshot.msft.png" alt-text="Capture node screenshots" lightbox="../../media/2020/08/capture-node-screenshot.msft.png":::
   Capture node screenshots  
:::image-end:::  

Chromium issue: [#1100253][CR1100253]  

### Issues Drawer pane updates  

The Issues warning bar on the **Console** panel is now replaced with a regular message.  

<!--todo: this figure need to be updated  -->  

:::image type="complex" source="../../media/2020/08/issue-console-msg.msft.png" alt-text="Issues in console message" lightbox="../../media/2020/08/issue-console-msg.msft.png":::
   Issues in console message  
:::image-end:::  

Third-party cookie issues are now hidden by default in the **Issues** Drawer pane.  Enable the new **Include third-party cookie issues** checkbox to view each.  

:::image type="complex" source="../../media/2020/08/third-party-cookies.msft.png" alt-text="third-party cookie issues checkbox" lightbox="../../media/2020/08/third-party-cookies.msft.png":::
   third-party cookie issues checkbox  
:::image-end:::  

Chromium issues: [1096481][CR1096481], [1068116][CR1068116], [1080589][CR1080589]  

### Emulate missing local fonts  

Open the [Rendering tab][DevtoolsEvaluatePerformanceReferenceAnalyzeRenderingPerformance] and use the new **Disable local fonts** feature to emulate missing `local()` sources in `@font-face` rules.  

For example, when the font named `Rubik` is installed on your device and the `@font-face src` rule uses it as a `local()` font, Microsoft Edge uses the local font file from your device.  

When **Disable local fonts** is enabled, DevTools ignores the `local()` fonts and fetches each from the network.  

:::image type="complex" source="../../media/2020/08/disable-font.msft.png" alt-text="Emulate missing local fonts" lightbox="../../media/2020/08/disable-font.msft.png":::
   Emulate missing local fonts  
:::image-end:::  

As a developer or designer you may use two different copies of the same font during development.

*   A local font for your design tools.  
*   A web font for your code.  

Use **Disable local fonts** to make it easier for you to perform the following tasks.  

*   Debug and measure loading performance and optimization of web fonts.  
*   Verify accuracy of your CSS `@font-face` rules.  
*   Discover differences between a web font and any local versions of a font.  

Chromium issue: [#384968][CR384968]  

### Emulate inactive users  

The [Idle Detection API][WebDevIdleDetection] allows developers to detect inactive users and react on idle state changes.  You are now able to use DevTools to emulate idle state changes in the **Sensors** Drawer pane for both the user state and the screen state instead of waiting for the actual idle state to change.  You may open the **Sensors** Drawer pane from the [drawer][DevtoolsCustomizeIndexDrawer].  

:::image type="complex" source="../../media/2020/08/emulate-idle.msft.png" alt-text="Emulate inactive users" lightbox="../../media/2020/08/emulate-idle.msft.png":::
   Emulate inactive users  
:::image-end:::  

Chromium issue: [#1090802][CR1090802]  

### Emulate prefers-reduced-data  

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature  
:::image-end:::  

> [!NOTE]
> In Microsoft Edge 86, to enable this feature, go to `edge://flags#enable-experimental-web-platform-features` and turn on the **Experimental Web Platform features** flag.  The emulation option is only displayed if the flag is enabled.  

The [prefers-reduced-data][CsswgDraftsMediaqueries5DescdefMediaPrefersReducedData] media query detects if the user prefers being served alternate content that uses less data for the page to be rendered.  

You may now use DevTools to emulate the `prefers-reduced-data` media query.  

:::image type="complex" source="../../media/2020/08/emulate-prefers-reduced-data.msft.png" alt-text="Emulate prefers-reduced-data" lightbox="../../media/2020/08/emulate-prefers-reduced-data.msft.png":::
   Emulate prefers-reduced-data  
:::image-end:::  

Chromium issue: [#1096068][CR1096068]  

### Support for new JavaScript features  

DevTools now has better support the following JavaScript language features.  

| JavaScript language feature | Details |  
|:--- |:--- |  
| [Logical assignment operators][V8FeaturesLogicalAssignment] | DevTools now supports logical assignment with the new `&&=`, `||=`, and `??=` operators in the **Console** and **Sources** panels.  |  
| Pretty-print [numeric separators][V8FeaturesNumericSeparators] | DevTools now properly pretty-prints the numeric separators in the **Sources** panel.  |  

Chromium issues: [1086817][CR1086817], [1080569][CR1080569]  

### Lighthouse 6.2 in the Lighthouse panel  

The **Lighthouse** panel is now running Lighthouse 6.2.  For a full list of changes, go to the [Lighthouse release notes][GithubGooglechromeLighthouseV620].  

:::image type="complex" source="../../media/2020/08/lighthouse-unsize-img.msft.png" alt-text="Unsize image" lightbox="../../media/2020/08/lighthouse-unsize-img.msft.png":::
   Unsize image  
:::image-end:::  

The following new audits are available in Lighthouse 6.2.  

:::row:::
   :::column span="":::
      **Avoid long main thread tasks**  
   :::column-end:::
   :::column span="":::
      Reports the longest tasks on the main thread, useful for identifying worst contributors to input delay.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      **Links are crawlable**  
   :::column-end:::
   :::column span="":::
      Check if the `href` attribute of anchor elements links to an appropriate destination, so the links may be discovered.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      **Unsized image elements**  
   :::column-end:::
   :::column span="":::
      Check if an explicit `width` and `height` is set on image elements.  Explicit image size may reduce layout shifts and improve CLS.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      **Avoid non-composited animations**  
   :::column-end:::
   :::column span="":::
      Reports [non-composited animations][WebDevNonCompositedAnimations] that appear to be slow or perform poorly and reduce CLS.  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      **Listens for the `unload` events**  
   :::column-end:::
   :::column span="":::
      Reports the `unload` event.  Consider using the `pagehide` or `visibilitychange` events instead as the `unload` event does not fire reliably.  
   :::column-end:::
:::row-end:::  

The following audit was updated in Lighthouse 6.2.  

:::row:::
   :::column span="":::
      **Remove unused JavaScript**  
   :::column-end:::
   :::column span="":::
      The audit is now enhanced, if a page has publicly-accessible JavaScript source maps.  
   :::column-end:::
:::row-end:::  

Chromium issue: [#772558][CR772558]  

### Deprecation of other origins listing in the Service Workers pane  

DevTools now provides a link to view the full list of service workers from other origins in the new ServiceWorker setting.  To access it, go to `edge://serviceworker-internals/?devtools`.  

Previously DevTools displayed a list nested under the **Application** panel > **Service workers** pane.  

:::image type="complex" source="../../media/2020/08/sw-other-origins.msft.png" alt-text="Link to other origins" lightbox="../../media/2020/08/sw-other-origins.msft.png":::
   Link to other origins  
:::image-end:::  

Chromium issue: [#807440][CR807440]  

### Show coverage summary for filtered items  

DevTools now recalculates and displays a summary of coverage information dynamically when filters are applied in the [Coverage][DevtoolsCoverageIndex] Drawer pane.  Previously, the **Coverage** Drawer pane always displayed a summary of all coverage information.  

In the 1st of the following figures, the summary initially displays `344 kB of 1.7 MB (20%) used so far.  1.4 MB unused.` and in the 2nd of the following figures, the summary displays `26.8 kB of 408 kB (7%) used so far.  381 kB unused.` after CSS filtering is applied.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/coverage-compare.msft.png" alt-text="Coverage summary" lightbox="../../media/2020/08/coverage-compare.msft.png":::
         Coverage summary  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/coverage-compare-css-filter.msft.png" alt-text="Coverage summary for filtered items" lightbox="../../media/2020/08/coverage-compare-filter.msft.png":::
         Coverage summary for filtered items  
      :::image-end:::  
   :::column-end:::
:::row-end:::

Chromium issue: [#1061385][CR1090802]  

### New frame details view in Application panel  

DevTools now show a detailed view for each frame.  To access it, choose a frame under the **Frames** menu in the **Application** panel.  

:::image type="complex" source="../../media/2020/08/frame-details.msft.png" alt-text="New frame detailed view in Application panel" lightbox="../../media/2020/08/frame-details.msft.png":::
   New frame detailed view in **Application** panel  
:::image-end:::  

Chromium issue: [#1093247][CR1093247]  

#### Frame details for opened windows  

Open windows and pop-up windows now display under the frame tree as well.  The frame detailed view of the opened windows includes additional security information.  

<!--todo: this figure need to be updated  -->  

:::image type="complex" source="../../media/2020/08/window-opener.msft.png" alt-text="New frame detailed view for opened windows" lightbox="../../media/2020/08/window-opener.msft.png":::
   New frame detailed view for opened windows  
:::image-end:::  

In the near future, more security information is planned to be added to the frame detailed view.  

Chromium issue: [#1107766][CR1107766]  

#### Security and isolation information  

Display security and isolation information \(COEP and COOP\).  

Secure context is now displayed, [Cross-Origin-Embedder-Policy (COEP) and Cross-Origin-Opener-Policy (COOP)][WebDevCoopCoep] in the frame details.  

:::image type="complex" source="../../media/2020/08/coep-coop.msft.png" alt-text="Security and isolation information" lightbox="../../media/2020/08/coep-coop.msft.png":::
   Security and isolation information  
:::image-end:::  

In the near future, more security information is planned to be added to the frame detailed view.  

Chromium issue: [#1051466][CR1051466]  

### Elements and Network panel updates  

#### Accessible color suggestion in the Styles pane  

DevTools now provides color suggestions for low color contrast text.  

In the example below, `h1` has low contrast text.  To fix it, open the color picker of the `color` property in the **Styles** pane.  After you expand the **Contrast ratio** section, DevTools provides AA and AAA color suggestions.  Select the suggested color to apply the color.  

<!--  
<video autoplay loop muted playsinline>
  <source src="../../media/2020/08/contrast-color-suggestion.mp4" type="video/mp4">
</video>  
-->  

Chromium issue: [#1093227][CR1093227]  

#### Reinstate Properties pane in the Elements panel  

The **Properties** pane is back, it was [deprecated in Microsoft Edge 84][DevtoolsWhatsnew200205DevtoolsDeprecationPropertiesPaneElementsPanel].  In the near future, improvements are planned for the workflow for inspecting properties of elements.  

:::image type="complex" source="../../media/2020/08/properties-pane.msft.png" alt-text="Properties pane in the Elements panel" lightbox="../../media/2020/08/properties-pane.msft.png":::
   **Properties** pane in the **Elements** panel  
:::image-end:::  

Chromium issue:  <!--  [#1105205][CR1105205],  -->  [#1116085][CR1116085]  

#### Human-readable X-Client-Data header values in the Network panel  

When inspecting a network resource in the Network panel, DevTools now formats any `X-Client-Data` header values in **Headers** pane as code.  

The `X-Client-Data` HTTP header contains a list of experiment IDs and Microsoft Edge flags that are enabled in your browser.  The raw header values look like opaque strings since the values are `base-64-encoded`, serialized [protocol buffers][GoogleDevelopersProtocolBuffers].  To make the contents more transparent to developers, DevTools now shows the decoded values.  

:::image type="complex" source="../../media/2020/08/x-client-data.msft.png" alt-text="Human-readable `X-Client-Data` header values" lightbox="../../media/2020/08/x-client-data.msft.png":::
   Human-readable `X-Client-Data` header values  
:::image-end:::  

Chromium issue: [#1103854][CR1103854]  

#### Auto-complete custom fonts in the Styles pane  

Imported font faces are now added to the list of CSS auto-completion when editing the `font-family` property in the **Styles** pane.  

For example, if `monospace` is a custom font installed on the local machine, it is displayed in the CSS completion list.  For previous versions, the font was not displayed.  

:::image type="complex" source="../../media/2020/08/font-auto-complete.msft.png" alt-text="Auto-complete custom fonts" lightbox="../../media/2020/08/font-auto-complete.msft.png":::
   Auto-complete custom fonts  
:::image-end:::  

Chromium issue: [#1106221][CR1106221]  

#### Consistently display resource type in Network panel  

DevTools now consistently displays the same resource type as the original network request and appends `/ Redirect` to the **Type** column value when redirection \(HTTP status code 302\) happens.  

Previously DevTools changed the type to `Other` sometimes.  

:::image type="complex" source="../../media/2020/08/network-redirect.msft.png" alt-text="Display redirect resource type" lightbox="../../media/2020/08/network-redirect.msft.png":::
   Display redirect resource type  
:::image-end:::  

Chromium issue: [#997694][CR997694]  

#### Clear buttons in the Elements and Network panels  

The filter text boxes in the **Styles** pane and **Network** panel, as well as the DOM search text box in the **Elements** panel, now have **Clear** buttons.  Choose the **Clear** button to remove any inputted text.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/clear-button-elements.msft.png" alt-text="Clear buttons in the Elements panels" lightbox="../../media/2020/08/clear-button-elements.msft.png":::
         Clear buttons in the **Elements** panels  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/08/clear-button-network.msft.png" alt-text="Clear buttons in the Network panels" lightbox="../../media/2020/08/clear-button-network.msft.png":::
         Clear buttons in the  **Network** panels  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

Chromium issue: [#1067184][CR1067184]  

## Download the Microsoft Edge preview channels  

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]  

<!-- image links -->  

[ImageSettingsIcon]: /microsoft-edge/devtools-guide-chromium/media/settings-icon.msft.png "DevTools Settings icon"  

<!-- links -->  

[DevtoolsWhatsnew200205DevtoolsDeprecationPropertiesPaneElementsPanel]: ../05/devtools.md#deprecation-of-the-properties-pane-in-the-elements-panel "Deprecation of the Properties pane in the Elements panel - What's new in DevTools (Microsoft Edge 84) | Microsoft Docs"  
[DevtoolsWhatsnew200206DevtoolsCssGridDebuggingFeatures]: ../06/devtools.md#css-grid-debugging-features "CSS grid debugging features - What's New In DevTools (Microsoft Edge 85) | Microsoft Docs"  

[DevtoolsDualScreenIntroductionDevices1]: /microsoft-edge/devtools-guide-chromium/dual-screen/index "Introduction to dual-screen devices - Dual-screen | Microsoft Docs"  
[DevtoolsDualScreenIntroductionDevices2]: /microsoft-edge/devtools-guide-chromium/dual-screen/index "Introduction to dual-screen devices - Dual-screen | Microsoft Docs"  
[DevtoolsExperimentalFeatures]: /microsoft-edge/devtools-guide-chromium/experimental-features "Experimental features - Microsoft Edge Development | Microsoft Docs"  

[DevtoolsConsoleApiTable]: /microsoft-edge/devtools-guide-chromium/console/api#table "table - Console API reference | Microsoft Docs"  
[DevtoolsCoverageIndex]: /microsoft-edge/devtools-guide-chromium/coverage/index "Find unused JavaScript and CSS code with the Coverage tab in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCustomizeIndexDrawer]: /microsoft-edge/devtools-guide-chromium/customize/index#drawer "Drawer - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsEvaluatePerformanceReferenceAnalyzeRenderingPerformance]: /microsoft-edge/devtools-guide-chromium/evaluate-performance/reference#analyze-rendering-performance-with-the-rendering-tab "Analyze rendering performance with the Rendering tab - Performance Analysis Reference | Microsoft Docs"  
[DevtoolsMediaIndex]: /microsoft-edge/devtools-guide-chromium/media/index "View and debug media players information | Microsoft Docs"  

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  

[VisualStudioCode]: https://code.visualstudio.com "Visual Studio Code "  
[VisualStudioCodeShortcutsKeyboardWindows]: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf "Visual Studio Code Keyboard shortcuts for Windows"  

[EdgeDevToolsTwitterAccount]: https://twitter.com/EdgeDevTools "@EdgeDevTools Twitter account"  

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"  

[CR174309]: https://crbug.com/174309 "DevTools: Allow to customize keyboard shortcuts/key bindings | Chromium bugs"
[CR384968]: https://crbug.com/384968 "Option to ignore local() fonts | Chromium bugs"  
[CR772558]: https://crbug.com/772558 "DevTools: Update to latest version of Lighthouse | Chromium bugs"  
[CR807440]: https://crbug.com/807440 "Chrome locks up with large numbers of SWs | Chromium bugs"  
[CR997694]: https://crbug.com/997694 "XHR requests with 302 status are not shown under the \"xhr\" filter in network panel | Chromium bugs"  
<!--  [CR1018414]: https://crbug.com/1018414 "Issue 1018414 | Chromium bugs"  -->  
[CR1047356]: https://crbug.com/1047356 "CSS Grid/Flexbox/Table tooling"  
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

[V8FeaturesLogicalAssignment]: https://v8.dev/features/logical-assignment "Logical assignment | V8"  
[V8FeaturesNumericSeparators]: https://v8.dev/features/numeric-separators "Numeric separators | V8"  

[WebDevCoopCoep]: https://web.dev/coop-coep "Making your website \"cross-origin isolated\" using COOP and COEP | web.dev"  
[WebDevIdleDetection]: https://web.dev/idle-detection "Detect inactive users with the Idle Detection API | web.dev"  
[WebDevNonCompositedAnimations]: https://web.dev/non-composited-animations "Avoid non-composited animations | web.dev"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2020/08/devtools/index) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen  
