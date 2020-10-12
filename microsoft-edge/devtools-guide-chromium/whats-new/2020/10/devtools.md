---
description: New CSS Grid debugging tools, Web Authn tab, moveable tools, and Computed sidebar pane.
title: What's new in DevTools (Microsoft Edge 87)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/12/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# What's New In DevTools (Microsoft Edge 87)  

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]  

## Improving DevTools localization with your feedback  

To meet your translation needs, the Microsoft Edge DevTools team is focused on improving translation quality.

The Microsoft Edge DevTools team identified and locked in strings that do not require localization, such as content in the **Lighthouse** pane, the term `service worker`, and some of the **Network** pane filters such as `URL`, `XHR`, `JS`, and `CSS`.  
<!-- The **Lighthouse** pane was not localized since it is an independent project.  -->  

:::image type="complex" source="../../media/2020/10/bing-network-japanese.msft.png" alt-text="Network pane with non-localized filters" lightbox="../../media/2020/10/bing-network-japanese.msft.png":::
   **Network** pane with non-localized filters  
:::image-end:::  

The Microsoft Edge DevTools team made detailed decisions to ensure that the Microsoft Edge Developer Tools are localized accurately.  For example, a placeholder was replaced for `$0`, since the placeholder is important for the **Console** and as a special character used for localization.  

Your feedback and internal discoveries uncovered areas where text strings should not be localized.  All of the insight provided by the global developer community is appreciated, and especially the impact for features such as localization.  Continue to [send feedback on localization quality][#getting-in-touch-with-microsoft-edge-devtools-team], so together the support for locales becomes clearer and correct.  

## Save and export using Network Console experiment  

The **Network Console** experiments now support the following scenarios.  

*   Save and export Collections and Environments using a new system.  
*   Edit and export sets of environment variables within the **Network Console** tool.  
*   Improved compatibility with Postman v2.1 schema and OpenAPI v2 schema.  
    
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/network-console-more-tools.msft.png" alt-text="Open Network Console from menu" lightbox="../../media/2020/10/network-console-more-tools.msft.png":::
         Open **Network Console** from menu  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/network-console-network-edit-resend.msft.png" alt-text="Open Network Console from Network pane" lightbox="../../media/2020/10/network-console-network-edit-resend.msft.png":::
         Open **Network Console** from **Network** pane  
      :::image-end:::  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/network-console-empty.msft.png" alt-text="Network Console" lightbox="../../media/2020/10/network-console-empty.msft.png":::
         **Network Console**  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      &nbsp;
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/network-console-environments-new.msft.png" alt-text="Network Console new environment" lightbox="../../media/2020/10/network-console-environments-new.msft.png":::
         **Network Console** new environment  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/network-console-environments-new-name.msft.png" alt-text="Network Console new environment name" lightbox="../../media/2020/10/network-console-environments-new-name.msft.png":::
         **Network Console** new environment name
      :::image-end:::  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/network-console-environments-new-format.msft.png" alt-text="**Network Console** new environment format" lightbox="../../media/2020/10/network-console-environments-new-format.msft.png":::
         **Network Console** new environment format  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      &nbsp;
   :::column-end:::
:::row-end:::  

## Grid tooling v2  

The **CSS Grid tooling** experiment is now turned on by default in Microsoft Edge version 87.  

*   Displays a simplified grid overlay using the **Inspect** tool, or get more detailed information with persistent overlays.  
*   To enable persistent grids, choose the grid icon next to a grid element in the **Elements** pane or choose the grid in the **Layout** pane.  
*   You may enable persistent overlays for multiple grids.  
*   The new **Layout** pane allows you to easily toggle grid overlays and configure the appearance and the content for each.  

:::image type="complex" source="../../media/2020/10/grid-layout-pane.msft.png" alt-text="Layout pane with grids" lightbox="../../media/2020/10/grid-layout-pane.msft.pngg":::
   **Layout** pane with grids  
:::image-end:::  
    
## Customize keyboard shortcuts in Settings  

In Microsoft Edge 87 or later, you may customize the keyboard shortcut for any action in the DevTools.  You may choose between the **Visual Studio Code** and **DevTools (default)** presets.  To further customize keyboard shortcuts, turn on the **Enable keyboard shortcut editor** experiment.

To enable the experiment, navigate to [Turn on experimental features](/microsoft-edge/devtools-guide-chromium/experimental-features#turn-on-experimental-features) and choose the checkbox next to **Enable keyboard shortcut editor**.  For more information about customizing and editing shortcuts, navigate to [Customize keyboard shortcuts in the Microsoft Edge DevTools][DevtoolsCustomizeShortcuts].  

## Elements for Microsoft Edge Visual Studio Code extension  

The experimental **Elements for Visual Studio Code** and **Network for Visual Studio Code** extensions are now merged into the new [Edge Developer Tools for Visual Studio Code][VisualStudioCodeMarketplaceMsEdgedevtools] extension.  You are now able to debug the DOM, edit CSS, and inspect network traffic using developer tools without leaving Visual Studio Code.  You may choose to launch a full browser instance, connect to an existing one, or have a headless browser fully integrated into Visual Studio Code.  Contributing is now easier and the build process was improved to make newer versions easier to release.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/blogs-microsoft-edge-tools-01.msft.png" alt-text="Windows Blog introduction for Elements for Microsoft Edge Visual Studio Code extension" lightbox="../../media/2020/10/blogs-microsoft-edge-tools-01.msft.png":::
         Windows Blog introduction for **Elements for Microsoft Edge Visual Studio Code** extension  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/blogs-microsoft-edge-tools-02.msft.png" alt-text="Windows Blog for Elements for Microsoft Edge Visual Studio Code extension screenshot" lightbox="../../media/2020/10/blogs-microsoft-edge-tools-02.msft.png":::
         Windows Blog for **Elements for Microsoft Edge Visual Studio Code** extension screenshot  
      :::image-end:::  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/blogs-microsoft-edge-tools-03.msft.png" alt-text="Windows Blog for Elements for Microsoft Edge Visual Studio Code extension Why embed developer tools in an editor" lightbox="../../media/2020/10/blogs-microsoft-edge-tools-03.msft.png":::
         Windows Blog for **Elements for Microsoft Edge Visual Studio Code** extension - Why embed developer tools in an editor  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/blogs-microsoft-edge-tools-04.msft.png" alt-text="Windows Blog for Elements for Microsoft Edge Visual Studio Code extension" lightbox="../../media/2020/10/blogs-microsoft-edge-tools-04.msft.png":::
         Windows Blog for **Elements for Microsoft Edge Visual Studio Code** extension - Read this next  
      :::image-end:::  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/blogs-microsoft-edge-tools-05.msft.png" alt-text="Windows Blog for Elements for Microsoft Edge Visual Studio Code extension - New headless and full-browser modes" lightbox="../../media/2020/10/blogs-microsoft-edge-tools-05.msft.png":::
         Windows Blog for **Elements for Microsoft Edge Visual Studio Code** extension - New headless and full-browser modes  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/blogs-microsoft-edge-tools-06.msft.png" alt-text="Windows Blog for Elements for Microsoft Edge Visual Studio Code extension - Using the extension in full browser mode screenshot" lightbox="../../media/2020/10/blogs-microsoft-edge-tools-06.msft.png":::
         Windows Blog for **Elements for Microsoft Edge Visual Studio Code** extension - Using the extension in full browser mode screenshot  
      :::image-end:::  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/blogs-microsoft-edge-tools-07.msft.png" alt-text="Windows Blog for Elements for Microsoft Edge Visual Studio Code extension - Using the extension in headless mode screenshot" lightbox="../../media/2020/10/blogs-microsoft-edge-tools-07.msft.png":::
         Windows Blog for **Elements for Microsoft Edge Visual Studio Code** extension - Using the extension in headless mode screenshot  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      &nbsp;  
   :::column-end:::
:::row-end:::  

## Announcements from the Chromium project  

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]  

<!--  
### New CSS Grid debugging tools  

This announcement originated with the Chromium team.  

DevTools now has better support for CSS grid debugging.  

:::image type="complex" source="../../media/2020/10/css-grid.msft.png" alt-text="CSS grid debugging" lightbox="../../media/2020/10/css-grid.msft.png":::
   CSS grid debugging  
:::image-end:::  

When an HTML element on your page has `display: grid` or `display: inline-grid` applied to it, a `grid` badge displays next to it in the **Elements** panel.  Choose the badge to toggle the display of a grid overlay on the page.  

The new **Layout** pane has a **Grid** section offering you a number of options for viewing the grids.  

For more information, navigate to [CSS grid](/microsoft-edge/devtools-guide-chromium/css/grid).  

For background information and discussion included in the Chromium Bug, navigate to [#1047356][CR1047356].  
-->  

### New WebAuthn tab  

This announcement originated with the Chromium team.  

Emulate authenticators and debug the [Web Authentication API][GithubW3cWebauthn] with the new [WebAuthn tab][DevtoolsWebauthnIndex].  

To open the WebAuthn tab, choose the **Settings and more** \(`...`\) icon > **More tools** > **WebAuthn**.  

:::image type="complex" source="../../media/2020/10/more-tools-webauthn.msft.png" alt-text="WebAuthn tab" lightbox="../../media/2020/10/more-tools-webauthn.msft.png":::
   **WebAuthn** tab  
:::image-end:::  

Before the new **WebAuthn** tab was added, there was no native WebAuthn debugging support on Microsoft Edge.  You needed physical authenticators to test your web application with the Web Authentication API.  

With the new **WebAuthn** tab, emulate the authenticators, customize the capabilities, and inspect the states, without the use of any physical authenticators.  This feature simplifies the debugging experience.  

For more information about the WebAuthn feature, navigate to [Emulate authenticators and debug WebAuthn in Microsoft Edge DevTools](/microsoft-edge/devtools-guide-chromium/webauthn/index).  

For background information and discussion included in the Chromium Bug, navigate to [#1034663][CR1034663].  

<!--  
### Move tools between top and bottom panel  

This announcement originated with the Chromium team.  

DevTools now support moving tools in DevTools between the top and bottom panel.  View any combination of two tools at the same time.  

For example, to view **Elements** and **Sources** panel at once \(by moving the **Sources** panel to the bottom, hover on the **Sources** panel, open the contextual menu \(right-click\), and choose **Move to bottom** .  

:::image type="complex" source="../../media/2020/10/move-to-bottom.msft.png" alt-text="Move to bottom" lightbox="../../media/2020/10/move-to-bottom.msft.png":::
   Move to bottom  
:::image-end:::  

To move any bottom tab to the top, hover on a tab, open the contextual menu \(right-click\), and choose **Move to top**.  

:::image type="complex" source="../../media/2020/10/move-to-top.msft.png" alt-text="Move to top" lightbox="../../media/2020/10/move-to-top.msft.png":::
   Move to top  
:::image-end:::  

For background information and discussion included in the Chromium Bug, navigate to [#1075732][CR1075732].  
-->  

### Elements panel updates  

This announcement originated with the Chromium team.  

#### View the Computed sidebar pane in the Styles pane  

Toggle the **Computed sidebar** pane in the **Styles** pane.  

The **Computed sidebar** pane in the **Styles** pane is collapsed by default.  Choose the button to toggle it.  

:::image type="complex" source="../../media/2020/10/computed-sidebar-pane.msft.png" alt-text="Computed sidebar pane" lightbox="../../media/2020/10/computed-sidebar-pane.msft.png":::
   Computed sidebar pane  
:::image-end:::  

For background information and discussion included in the Chromium Bug, navigate to [#1073899][CR1073899].  

#### Grouping CSS properties in the Computed pane  

Group the CSS properties by categories in the **Computed** pane.  

Use this grouping feature to more easily navigate in the **Computed** pane \(less scrolling\).  You may also selectively focus on a set of related properties for CSS inspection.  

On the **Elements** panel, choose an element.  Toggle the **Group** checkbox to group \(or ungroup\) the CSS properties.  

:::image type="complex" source="../../media/2020/10/grouping-css-prop.msft.png" alt-text="Grouping CSS properties" lightbox="../../media/2020/10/grouping-css-prop.msft.png":::
   Grouping CSS properties  
:::image-end:::  

For background information and discussion included in the Chromium Bug, navigate to [#1096230][CR1096230], [Chromium issue #1084673][CR1084673], and [Chromium issue #1106251][CR1106251].  

### Lighthouse 6.4 in the Lighthouse panel  

This announcement originated with the Chromium team.  

The **Lighthouse** panel is now running Lighthouse 6.4.  For more information about Lighthouse release changes, navigate to [release notes][GithubGoogleChromeLighthouseReleasesV641].  

<!--
:::image type="complex" source="../../media/2020/10/lighthouse.msft.png" alt-text="Lighthouse" lightbox="../../media/2020/10/lighthouse.msft.png":::
   Lighthouse  
:::image-end:::  

New audits in Lighthouse 6.4:  

*   **Preload fonts**.  Validates if all fonts that use `font-display: optional` were preloaded.  
*   **Valid sourcemaps**.  Audits if a page has valid sourcemaps for large, first-party JavaScript.  
*   **[Experimental] Large JavaScript library**.  Large JavaScript libraries may lead to poor performance.  This audit suggests cheaper alternatives to common, large JavaScript libraries like `moment.js`.  
-->  

For background information and discussion included in the Chromium Bug, navigate to [#772558][CR772558].  

### performance.mark() events in the Timings section  

This announcement originated with the Chromium team.  

The **Timings section** of a Performance recording now marks `performance.mark()` events.

:::image type="complex" source="../../media/2020/10/perf-mark.msft.png" alt-text="Performance.mark events" lightbox="../../media/2020/10/perf-mark.msft.png":::
   `performance.mark` events  
:::image-end:::  

### New resource-type and url filters in the Network panel  

This announcement originated with the Chromium team.  

Use the new `resource-type` and `url` keywords in the **Network panel** to filter network requests.  

For example, use `resource-type:image` to focus on the network requests that are images.  

:::image type="complex" source="../../media/2020/10/network-resource-type-filter.msft.png" alt-text="resource-type filter" lightbox="../../media/2020/10/network-resource-type-filter.msft.png":::
   resource-type filter  
:::image-end:::  

To discover more special keywords such as `resource-type` and `url`, navigate to [filter requests by properties][DevtoolsNetworkReferenceFilterRequestsProperties].  

For background information and discussion included in the Chromium Bug, navigate to [#1121141][CR1121141] and [#1104188][CR1104188].  

### Frame details view updates  

This announcement originated with the Chromium team.  

#### Display COEP and COOP reporting to endpoint  

View the Cross-Origin Embedder Policy \(COEP\)  and Cross-Origin Opener Policy \(COOP\) `reporting to` endpoint under the **Security & Isolation** section.  

The **Reporting API** defines a new HTTP header, `Report-To`, that gives you a way to specify server endpoints for the browser to which to send warnings and errors.  

<!--TODO replace with edge demo -->  
:::image type="complex" source="../../media/2020/10/https_first_party_test_glitch_me_coop.msft-1.png" alt-text="reporting to endpoint" lightbox="../../media/2020/10/https_first_party_test_glitch_me_coop.msft-1.png":::
   reporting to endpoint  
:::image-end:::  

For more information about how to enable COEP and COOP and make your website "cross-origin isolated", navigate to [Making your website "cross-origin isolated" using COOP and COEP][WebDevCoopCoep].  

For background information and discussion included in the Chromium Bug, navigate to [#1051466][CR1051466].  

#### Display COEP and COOP report-only mode  

DevTools now display `report-only` label for COEP and COOP that are set to `report-only` mode.  

<!--TODO replace with edge demo -->  
:::image type="complex" source="../../media/2020/10/https_first_party_test_glitch_me_coop.msft-2.png" alt-text="report-only label" lightbox="../../media/2020/10/https_first_party_test_glitch_me_coop.msft-2.png":::
   report-only label  
:::image-end:::  

For more information about how to prevent information leaks and enable COOP and COEP in your website, navigate to [Prevent Info leaks and enable powerful features: COOP and COEP][YoutubeXlnjyhja-0c] on YouTube.  

For background information and discussion included in the Chromium Bug, navigate to [#1051466][CR1051466].  

<!--  
### Deprecation of Settings in the More tools menu  

This announcement originated with the Chromium team.  

The `Settings` in the More tools menu is deprecated.  Open the **Settings** from the main panel instead.  

:::image type="complex" source="../../media/2020/10/settings.msft.png" alt-text="Settings in the main panel" lightbox="../../media/2020/10/settings.msft.png":::
   Settings in the main panel  
:::image-end:::  

For background information and discussion included in the Chromium Bug, navigate to [#1121312][CR1121312].  
-->  

### Experimental features  

This announcement originated with the Chromium team.  

> [!CAUTION]
> Experimental features are still under development and subject to change.  

#### View and fix color contrast issues in the CSS Overview panel  

> [!NOTE]
> To enable this experiment, under **Settings** > **Experiments**, choose the **CSS Overview** checkbox.  

**CSS Overview** panel now displays a list of low color contrast texts of your page.  

In this example, the following demo page has a low color contrast issue.  

[Accessible color suggestion][JecFyiDemoAccessibleColorMulti]  

Choose the issue, view a list of elements that have the issue.  

:::image type="complex" source="../../media/2020/10/css-overview.msft.png" alt-text="Low color contrast issues" lightbox="../../media/2020/10/css-overview.msft.png":::
   Low color contrast issues  
:::image-end:::  

Choose an element in the list to open the element in **Elements** panel.  DevTools [provides auto color suggestion](../08/devtools.md#accessible-color-suggestion-in-the-styles-pane) to help you fix the low contrast text.  

For background information and discussion included in the Chromium Bug, navigate to [#1120316][CR1120316].  

<!--
#### Customize keyboard shortcuts in DevTools  

> [!NOTE]
> To enable this experiment, check the **Enable keyboard shortcut editor** checkbox under **Settings** > **Experiments**.  

Customize the keyboard shortcuts for your favorite commands in DevTools.  

To customize the keyboard shortcut, choose **Settings** > **Shortcuts**, hover on a command and choose the **Edit** button \(pen icon\).  

:::image type="complex" source="../../media/2020/10/keyboard-shortcut.msft.png" alt-text="Customize keyboard shortcuts" lightbox="../../media/2020/10/keyboard-shortcut.msft.png":::
   Customize keyboard shortcuts  
:::image-end:::  

To reset all shortcuts, choose **Restore default shortcuts**.  

For background information and discussion included in the Chromium Bug, navigate to [#174309][CR174309].  
-->  

## Download the Microsoft Edge preview channels  

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]  

<!-- links -->  

[DevtoolsWhatsnew200205DevtoolsDeprecationPropertiesPaneElementsPanel]: ../05/devtools.md#deprecation-of-the-properties-pane-in-the-elements-panel "Deprecation of the Properties pane in the Elements panel - What's new in DevTools (Microsoft Edge 84) | Microsoft Docs"  
[DevtoolsWhatsnew200206DevtoolsCssGridDebuggingFeatures]: ../06/devtools.md#css-grid-debugging-features "CSS grid debugging features - What's New In DevTools (Microsoft Edge 85) | Microsoft Docs"  

[DevtoolsDeviceModeIndex]: /microsoft-edge/devtools-guide-chromium/device-mode/index "Emulate mobile devices in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCustomizeShortcuts]: /microsoft-edge/devtools-guide-chromium/customize/shortcuts "Customize keyboard shortcuts in the Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsExperimentalFeaturesEnableExperimentalApis]: /microsoft-edge/devtools-guide-chromium/experimental-features#enable-experimental-apis "Enable experimental APIs - Experimental features | Microsoft Docs"  
[DevtoolsExperimentalFeaturesEnableNewCssGridDebuggingFeatures]: /microsoft-edge/devtools-guide-chromium/experimental-features#enable-new-css-grid-debugging-features "Emulation: Support dual screen mode - Experimental features | Microsoft Docs"  
[DevtoolsExperimentalFeaturesEnableSourceOrderViewer]: /microsoft-edge/devtools-guide-chromium/experimental-features#enable-source-order-viewer "Enable Source Order Viewer - Experimental features | Microsoft Docs"
[DevtoolsExperimentalFeaturesEmulationSupportDualScreenMode]: https://review.docs.microsoft.com/microsoft-edge/devtools-guide-chromium/experimental-features?branch=user/zoghadya/dual-screen-experiment#emulation-support-dual-screen-mode "Emulation: Support dual screen mode - Experimental features | Microsoft Docs"  
[DevtoolsExperimentalFeaturesTestingOnFoldableDualScreenDevices]: /microsoft-edge/devtools-guide-chromium/experimental-features#testing-on-foldable-and-dual-screen-devices "Testing on foldable and dual-screen devices - Experimental features | Microsoft Docs"  
[DevtoolsExperimentalFeaturesTurnOnExperimentalFeatures]: /microsoft-edge/devtools-guide-chromium/experimental-features#turn-on-experimental-features "Turn on experimental features - Experimental features | Microsoft Docs"  
[DevtoolsConsoleApiTable]: /microsoft-edge/devtools-guide-chromium/console/api#table "table - Console API reference | Microsoft Docs"  
[DevtoolsCoverageIndex]: /microsoft-edge/devtools-guide-chromium/coverage/index "Find unused JavaScript and CSS code with the Coverage tab in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCustomizeIndexDrawer]: /microsoft-edge/devtools-guide-chromium/customize/index#drawer "Drawer - Customize Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsEvaluatePerformanceReferenceAnalyzeRenderingPerformance]: /microsoft-edge/devtools-guide-chromium/evaluate-performance/reference#analyze-rendering-performance-with-the-rendering-tab "Analyze rendering performance with the Rendering tab - Performance Analysis Reference | Microsoft Docs"  
[DevtoolsMediaIndex]: /microsoft-edge/devtools-guide-chromium/media/index "View and debug media players information | Microsoft Docs"  
[DevtoolsNetworkReferenceFilterRequestsProperties]: /microsoft-edge/devtools-guide-chromium/network/reference#filter-requests-by-properties  "Filter requests by properties - Network Analysis reference | Microsoft Docs"  
[DevtoolsWebauthnIndex]: /microsoft-edge/devtools-guide-chromium/webauthn/index "Emulate authenticators and debug WebAuthn in Microsoft Edge DevTools | Microsoft Docs"  

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  

[VisualStudioCode]: https://code.visualstudio.com "Visual Studio Code"  

[VisualStudioCodeMarketplaceMsEdgedevtools]: https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools "Microsoft Edge Tools for Visual Studio Code | Visual Studio Code"  

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"  

[CR174309]: https://crbug.com/174309 "DevTools: Allow to customize keyboard shortcuts/key bindings | Chromium bugs"
[CR772558]: https://crbug.com/772558 "DevTools: Update to latest version of Lighthouse | Chromium bugs"  
[CR1034663]: https://crbug.com/1034663 "Create a front-end for the WebAuthn Testing API | Chromium bugs"  
[CR1047356]: https://crbug.com/1047356 "CSS Grid/Flexbox/Table tooling | Chromium bugs"  
[CR1051466]: https://crbug.com/1051466 "Support COOP/COEP debugging in DevTools | Chromium bugs"  
[CR1073899]: https://crbug.com/1073899 "Computed style tab disappears in responsive mode | Chromium bugs"  
[CR1075732]: https://crbug.com/1075732 "DevTools personalization - Movable tabs | Chromium bugs"  
[CR1084673]: https://crbug.com/1084673 "DevTools: improve the way we present CSS custom properties ((aka). CSS variables) and their values"  
[CR1096230]: https://crbug.com/1096230 "Group CSS properties by categories in Computed Styles pane | Chromium bugs"  
[CR1104188]: https://crbug.com/1104188 "Network panel search does not find results when searching for full URL | Chromium bugs"  
[CR1106251]: https://crbug.com/1106251 "☂ DevTools: improve Computed Styles tab | Chromium bugs"  
[CR1120316]: https://crbug.com/1120316 "Highlight bad contrast under CSS Overview > Colors | Chromium Bugs"  
[CR1121141]: https://crbug.com/1121141 "Allow filtering by resource type in network log | Chromium bugs"  
[CR1121312]: https://crbug.com/1121312 "Settings should be removed from More Tools menu | Chromium bugs"  

[GithubGoogleChromeLighthouseReleasesV641]: https://github.com/GoogleChrome/lighthouse/releases/v6.4.1 "v6.4.1 - GoogleChrome/lighthouse | GitHub"  

[GithubW3cWebauthn]: https://w3c.github.io/webauthn "Web Authentication | GitHub"  

[JecFyiDemoAccessibleColorMulti]: https://jec.fyi/demo/accessible-color-multi "Accessible color suggestion"  

[WebDevCoopCoep]: https://web.dev/coop-coep "Making your website \"cross-origin isolated\" using COOP and COEP | web.dev"  

[YoutubeXlnjyhja-0c]: https://youtu.be/XLNJYhjA-0c "Prevent Info leaks and enable powerful features: COOP and COEP | YouTube"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2020/10/devtools/index) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen  
