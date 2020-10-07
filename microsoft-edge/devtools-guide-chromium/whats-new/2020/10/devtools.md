---
description: New CSS Grid debugging tools, Web Authn tab, moveable tools and Computed sidebar pane.
title: What's new in DevTools (Microsoft Edge 87)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/07/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# What's New In DevTools (Microsoft Edge 87)  

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]  

## High contrast simulation  

<!-- insert Edge-specific announcement:  High contrast simulation  -->  

## Improving DevTools localization with your feedback  

<!-- insert Edge-specific announcement:  Improving DevTools localization with your feedback  -->  

## 3D View CSS entry-point and layers  

<!-- insert Edge-specific announcement:  3D View CSS entry-point + Layers  -->  

## Save and export using Network Console experiment  

<!-- insert Edge-specific announcement:  Network Console experiment can now Save and Export  -->  

## Grid tooling v2  

<!-- insert Edge-specific announcement:  Grid tooling v2  -->  

## Customize keyboard shortcuts in Settings  

<!-- insert Edge-specific announcement:  Customize keyboard shortcuts in Settings  -->  

## Elements for Microsoft Edge Visual Studio Code extension  

<!-- insert Edge-specific announcement:  Elements for Microsoft Edge Visual Studio Code extension announcement  -->  

<!--  
## Announcements from the Chromium project  

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]  
-->  

## New CSS Grid debugging tools  

This announcement originated with the Chromium team.  

DevTools now has better support for CSS grid debugging.  

:::image type="complex" source="../../media/2020/10/css-grid.msft.png" alt-text="CSS grid debugging" lightbox="../../media/2020/10/css-grid.msft.png":::
   CSS grid debugging  
:::image-end:::  

When an HTML element on your page has `display: grid` or `display: inline-grid` applied to it, a `grid` badge displays next to it in the **Elements** panel.  Choose the badge to toggle the display of a grid overlay on the page.  

The new **Layout** pane has a **Grid** section offering you a number of options for viewing the grids.  

For more information, navigate to [CSS grid](/microsoft-edge/devtools-guide-chromium/css/grid).  

For more discussion and history about this feature, navigate to [Chromium issue #1047356][CR1047356].  

## New WebAuthn tab  

This announcement originated with the Chromium team.  

Emulate authenticators and debug the [Web Authentication API](https://w3c.github.io/webauthn/) with the new [WebAuthn tab](/microsoft-edge/devtools-guide-chromium/webauthn).  

To open the WebAuthn tab, choose **More options** > **More tools** > **WebAuthn**.  

:::image type="complex" source="../../media/2020/10/webauthn.msft.png" alt-text="WebAuthn tab" lightbox="../../media/2020/10/webauthn.msft.png":::
   WebAuthn tab  
:::image-end:::  

Prior to the new **WebAuthn** tab, there was no native WebAuthn debugging support on Microsoft Edge.  You needed physical authenticators to test your web application with the Web Authentication API.  

With the new **WebAuthn** tab, emulate the authenticators, customize the capabilities, and inspect the states, without the use of any physical authenticators.  This feature simplifies the debugging experience.  

For more information about the WebAuthn feature, navigate to [documentation](/microsoft-edge/devtools-guide-chromium/webauthn).  

For more discussion and history about this feature, navigate to [Chromium issue #1034663][CR1034663].  

## Move tools between top and bottom panel  

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

For more discussion and history about this feature, navigate to [Chromium issue #1075732][CR1075732].  

## Elements panel updates  

This announcement originated with the Chromium team.  

### View the Computed sidebar pane in the Styles pane  

Toggle the **Computed sidebar** pane in the **Styles** pane.  

The **Computed sidebar** pane in the **Styles** pane is collapsed by default.  Choose the button to toggle it.  

:::image type="complex" source="../../media/2020/10/computed-sidebar-pane.msft.png" alt-text="Computed sidebar pane" lightbox="../../media/2020/10/computed-sidebar-pane.msft.png":::
   Computed sidebar pane  
:::image-end:::  

For more discussion and history about this feature, navigate to [Chromium issue #1073899][CR1073899].  

### Grouping CSS properties in the Computed pane  

Group the CSS properties by categories in the **Computed** pane.  

Use this new grouping feature to more easily navigate in the **Computed** pane \(less scrolling\) and selectively focus on a set of related properties for CSS inspection.  

On the **Elements** panel, choose an element.  Toggle the **Group** checkbox to group \(or un-group\) the CSS properties.  

:::image type="complex" source="../../media/2020/10/grouping-css-prop.msft.png" alt-text="Grouping CSS properties" lightbox="../../media/2020/10/grouping-css-prop.msft.png":::
   Grouping CSS properties  
:::image-end:::  

For more discussion and history about this feature, navigate to [Chromium issue #1096230][CR1096230], [Chromium issue #1084673][CR1084673], and [Chromium issue #1106251][CR1106251].  

## Lighthouse 6.4 in the Lighthouse panel  

This announcement originated with the Chromium team.  

The **Lighthouse** panel is now running Lighthouse 6.4.  For more information about release changes, navigate to [release notes](https://github.com/GoogleChrome/lighthouse/releases).  

:::image type="complex" source="../../media/2020/10/lighthouse.msft.png" alt-text="Lighthouse" lightbox="../../media/2020/10/lighthouse.msft.png":::
   Lighthouse  
:::image-end:::  

New audits in Lighthouse 6.4:  

*   **Preload fonts**.  Validates if all fonts that use `font-display: optional` were preloaded.  
*   **Valid sourcemaps**.  Audits if a page has valid sourcemaps for large, first-party JavaScript.  
*   **[Experimental] Large JavaScript library**.  Large JavaScript libraries may lead to poor performance.  This audit suggests cheaper alternatives to common, large JavaScript libraries like `moment.js`.  
    
For more discussion and history about this feature, navigate to [Chromium issue #772558][CR772558].  

## performance.mark() events in the Timings section  

This announcement originated with the Chromium team.  

The **Timings section** of a Performance recording now marks `performance.mark()` events.

:::image type="complex" source="../../media/2020/10/perf-mark.msft.png" alt-text="Performance.mark events" lightbox="../../media/2020/10/perf-mark.msft.png":::
   Performance.mark events  
:::image-end:::  

## New resource-type and url filters in the Network panel  

This announcement originated with the Chromium team.  

Use the new `resource-type` and `url` keywords in the **Network panel** to filter network requests.  

For example, use `resource-type:image` to focus on the network requests that are images.  

:::image type="complex" source="../../media/2020/10/filter.msft.png" alt-text="resource-type filter" lightbox="../../media/2020/10/filter.msft.png":::
   resource-type filter  
:::image-end:::  

Check out [filter requests by properties](/microsoft-edge/devtools-guide-chromium/network/reference#filter-by-property) to discover more special keywords like `resource-type` and `url`.  

For more discussion and history about this feature, navigate to [Chromium issue #1121141][CR1121141] and [Chromium issue #1104188][CR1104188].  

## Frame details view updates  

This announcement originated with the Chromium team.  

### Display COEP and COOP reporting to endpoint  

View the Cross-Origin Embedder Policy \(COEP\)  and Cross-Origin Opener Policy \(COOP\) `reporting to` endpoint under the **Security & Isolation** section.  

The **Reporting API** defines a new HTTP header, `Report-To`, that gives you a way to specify server endpoints for the browser to which to send warnings and errors.

:::image type="complex" source="../../media/2020/10/reporting-endpoint.msft.png" alt-text="reporting to endpoint" lightbox="../../media/2020/10/reporting-endpoint.msft.png":::
   reporting to endpoint  
:::image-end:::  

For more information about how to enable COEP and COOP and make your website "cross-origin isolated", navigate to [Making your website "cross-origin isolated" using COOP and COEP][WebDevCoopCoep].  

For more discussion and history about this feature, navigate to [Chromium issue #1051466][CR1051466].  

### Display COEP and COOP report-only mode  

DevTools now displays `report-only` label for COEP and COOP that are set to `report-only` mode.  

:::image type="complex" source="../../media/2020/10/report-only.msft.png" alt-text="report-only label" lightbox="../../media/2020/10/report-only.msft.png":::
   report-only label  
:::image-end:::  

For more information about how to prevent information leaks and enable COOP and COEP in your website, navigate to [video](https://youtu.be/XLNJYhjA-0c).  

For more discussion and history about this feature, navigate to [Chromium issue #1051466][CR1051466].  

## Deprecation of Settings in the More tools menu  

This announcement originated with the Chromium team.  

The `Settings` in the More tools menu is deprecated.  Open the **Settings** from the main panel instead.  

:::image type="complex" source="../../media/2020/10/settings.msft.png" alt-text="Settings in the main panel" lightbox="../../media/2020/10/settings.msft.png":::
   Settings in the main panel  
:::image-end:::  

For more discussion and history about this feature, navigate to [Chromium issue #1121312][CR1121312].  

## Experimental features  

This announcement originated with the Chromium team.  

> [!CAUTION]
> Experimental features are still under development and subject to change.  

### View and fix color contrast issues in the CSS Overview panel  

> [!NOTE]
> To enable this experiment, under **Settings** > **Experiments**, choose the **CSS Overview** checkbox.  

**CSS Overview** panel now displays a list of low color contrast texts of your page.  

In this example, the [demo page](https://jec.fyi/demo/accessible-color-multi) has a low color contrast issue.  Choose the issue, view a list of elements that have the issue.  

:::image type="complex" source="../../media/2020/10/css-overview.msft.png" alt-text="Low color contrast issues" lightbox="../../media/2020/10/css-overview.msft.png":::
   Low color contrast issues  
:::image-end:::  

Choose an element in the list to open the element in **Elements** panel.  DevTools [provides auto color suggestion](../08/devtools.md#accessible-color-suggestion-in-the-styles-pane) to help you fix the low contrast text.  

For more discussion and history about this feature, navigate to [Chromium issue #1120316][CR1120316].  

### Customize keyboard shortcuts in DevTools  

> [!NOTE]
> To enable this experiment, check the **Enable keyboard shortcut editor** checkbox under **Settings** > **Experiments**.  

Customize the keyboard shortcuts for your favorite commands in DevTools.  

To customize the keyboard shortcut, choose **Settings** > **Shortcuts**, hover on a command and choose the **Edit** button \(pen icon\).  

:::image type="complex" source="../../media/2020/10/keyboard-shortcut.msft.png" alt-text="Customize keyboard shortcuts" lightbox="../../media/2020/10/keyboard-shortcut.msft.png":::
   Customize keyboard shortcuts  
:::image-end:::  

To reset all shortcuts, choose **Restore default shortcuts**.  

For more discussion and history about this feature, navigate to [Chromium issue #174309][CR174309].  

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

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download "Microsoft Edge Preview Channels"  

[VisualStudioCode]: https://code.visualstudio.com "Visual Studio Code"  

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"  

[CR174309]: https://crbug.com/174309 "DevTools: Allow to customize keyboard shortcuts/key bindings | Chromium bugs"
[CR772558]: https://crbug.com/772558 "DevTools: Update to latest version of Lighthouse | Chromium bugs"  
[CR1034663]: https://crbug.com/1034663 "Create a front-end for the WebAuthn Testing API | Chromium bugs"  
[CR1047356]: https://crbug.com/1047356 "CSS Grid/Flexbox/Table tooling | Chromium bugs"  
[CR1051466]: https://crbug.com/1051466 "Support COOP/COEP debugging in DevTools | Chromium bugs"  
[CR1073899]: https://crbug.com/1073899 "Computed style tab disappears in responsive mode | Chromium bugs"  
[CR1075732]: https://crbug.com/1075732 "DevTools personalization - Movable tabs | Chromium bugs"  
[CR1084673]: https://crbug.com/1084673 "DevTools: improve the way we present CSS custom properties (aka. CSS variables) and their values"  
[CR1096230]: https://crbug.com/1096230 "Group CSS properties by categories in Computed Styles pane | Chromium bugs"  
[CR1104188]: https://crbug.com/1104188 "Network panel search does not find results when searching for full URL | Chromium bugs"  
[CR1106251]: https://crbug.com/1106251 "☂ DevTools: improve Computed Styles tab | Chromium bugs"  
[CR1120316]: https://crbug.com/1120316 "Highlight bad contrast under CSS Overview > Colors | Chromium Bugs"  
[CR1121141]: https://crbug.com/1121141 "Allow filtering by resource type in network log | Chromium bugs"  
[CR1121312]: https://crbug.com/1121312 "Settings should be removed from More Tools menu | Chromium bugs"  

[WebDevCoopCoep]: https://web.dev/coop-coep "Making your website \"cross-origin isolated\" using COOP and COEP | web.dev"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2020/10/devtools/index) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen  
