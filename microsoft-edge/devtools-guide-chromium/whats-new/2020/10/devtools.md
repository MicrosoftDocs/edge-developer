---
description: New CSS Grid debugging tools, Webauthn tool, moveable tools, and Computed sidebar pane.
title: What's new in DevTools (Microsoft Edge 87)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 10/13/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# What's New In DevTools (Microsoft Edge 87)  

[!INCLUDE [contact DevTools team note](../../includes/edge-whats-new-note.md)]  

## Improving DevTools localization with your feedback  

To meet your translation needs, the Microsoft Edge DevTools team is focused on improving translation quality.

In Microsoft Edge version 87, several strings and terms are locked and do not change even when the rest of the DevTools are displayed in other languages.  The list of affected strings and terms include the following.  

*   The strings in the **Lighthouse** tool.  
*   The term `service worker`.  
*   Some of the **Network** tool filters such as `URL`, `XHR`, `JS`, and `CSS`.  

:::image type="complex" source="../../media/2020/10/bing-network-japanese.msft.png" alt-text="Network pane with non-localized filters" lightbox="../../media/2020/10/bing-network-japanese.msft.png":::
   **Network** pane with non-localized filters  
:::image-end:::  

For example, a placeholder was replaced for `$0`, since the placeholder is important for the **Console** and as a special character used for localization.  

Thank you to the global developer community for helping improve localization of the Microsoft Edge DevTools.  Continue to [send feedback on localization quality](#getting-in-touch-with-microsoft-edge-devtools-team) to improve support for DevTools in all locales.  

### Move tools between top and bottom tool  

DevTools now support moving tools in DevTools between the top and bottom panels.  View any combination of two tools at the same time.  

For example, view **Elements** and **Sources** tools at once \(by moving the **Sources** tool to the bottom\).  

:::row:::
   :::column span="":::
      To move any top tab the bottom, hover on a tab, open the contextual menu \(right-click\), and choose **Move to bottom**.  
      
      :::image type="complex" source="../../media/2020/10/move-to-bottom.msft.png" alt-text="Move to bottom" lightbox="../../media/2020/10/move-to-bottom.msft.png":::
         Move to bottom  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      To move any bottom tab to the top, hover on a tab, open the contextual menu \(right-click\), and choose **Move to top**.  
      
      :::image type="complex" source="../../media/2020/10/move-to-top.msft.png" alt-text="Move to top" lightbox="../../media/2020/10/move-to-top.msft.png":::
         Move to top  
      :::image-end:::  
   :::column-end:::
:::row-end:::

To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #1075732][CR1075732].

## Save and export using the Network Console  

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature  
:::image-end:::  

<!--TODO  ask Rob (@ropaveza) to clarify  -->  

The experimental **Network Console** tool improves compatibility with the [Postman v2.1][PostmanSchemaJsonCollectionv210Index] and [OpenAPI v2][SwaggerSpecificationV2] schemas.  This experiment now supports the following actions.  

*   Save and export Collections and Environments using a new system.  
*   Edit and export sets of environment variables within the **Network Console** tool.  
    
<!--TODO  The following images are presented for your review, please proved feedback.  -->  
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

<!--TODO provide the CR when it is available -->  
To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #][CR].  

<!--[]:  ""  -->  

## Grid tooling v2  

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature  
:::image-end:::  

<!--TODO Ask Rachel to verify  -->  

In Microsoft Edge version 87, new **CSS grid tooling** features are now available.  The Microsoft Edge DevTools now support the following features for inspecting, viewing, and debugging your [CSS grids][DevtoolsCssGrid].  

*   Displays a simplified grid overlay using the **Inspect** tool, or get more detailed information with persistent overlays.  
*   To enable persistent grids, choose the grid icon next to a grid element in the **Elements** pane or choose the grid in the **Layout** pane.  
*   You may enable persistent overlays for multiple grids.  
*   The new **Layout** pane allows you to easily toggle grid overlays and configure the appearance and the content for each.  

:::image type="complex" source="../../media/2020/10/grid-layout-pane.msft.png" alt-text="Layout pane with grids" lightbox="../../media/2020/10/grid-layout-pane.msft.png":::
   **Layout** pane with grids  
:::image-end:::  

To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #1047356][CR1047356].  

## Customize keyboard shortcuts in Settings  

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature  
:::image-end:::  

You are now able to customize the keyboard shortcut for any action in the DevTools.  Starting in Microsoft Edge version 84, you may choose between **Visual Studio Code** and **DevTools (default)** presets for [keyboard shortcuts][DevtoolsCustomizeShortcuts].  In Microsoft Edge version 87, you may turn on the **Enable keyboard shortcut editor** experiment to further [customize keyboard shortcuts][DevtoolsExperimentalFeaturesEnableKeyboardShortcutEditor].  

To enable the experiment, navigate to [Turn on experimental features][DevtoolsExperimentalFeaturesTurnOnExperimentalFeatures] and choose the checkbox next to **Enable keyboard shortcut editor**.  For more information about customizing and editing shortcuts, navigate to [Customize keyboard shortcuts in the Microsoft Edge DevTools][DevtoolsExperimentalFeaturesEnableKeyboardShortcutEditor].  

To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #174309][CR174309].  

## Introducing the Microsoft Edge Tools for Visual Studio Code extension  

The **Elements for Visual Studio Code** and **Network for Visual Studio Code** extensions are now merged into the new Microsoft [Edge Developer Tools for Visual Studio Code][VisualStudioCodeMarketplaceMsEdgedevtools] extension.  Use the Microsoft Edge DevTools for the following activities without leaving Visual Studio Code.  

*   Debug the DOM  
*   Edit CSS  
*   Inspect network traffic  

With the extension, launch Microsoft Edge, connect to an existing instance of the browser, or use a headless browser directly from your editor.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/blogs-microsoft-edge-tools-06.msft.png" alt-text="Windows Blog for Elements for Microsoft Edge Visual Studio Code extension - Using the extension in full browser mode screenshot" lightbox="../../media/2020/10/blogs-microsoft-edge-tools-06.msft.png":::
         Windows Blog for **Elements for Microsoft Edge Visual Studio Code** extension - Using the extension in full browser mode screenshot  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../../media/2020/10/blogs-microsoft-edge-tools-07.msft.png" alt-text="Windows Blog for Elements for Microsoft Edge Visual Studio Code extension - Using the extension in headless mode screenshot" lightbox="../../media/2020/10/blogs-microsoft-edge-tools-07.msft.png":::
         Windows Blog for **Elements for Microsoft Edge Visual Studio Code** extension - Using the extension in headless mode screenshot  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

To start contributing and filing issues with your feedback, navigate to the [Microsoft Edge Developer Tools for Visual Studio Code][GithubMicrosoftVscodeEdgeDevtools] repo on GitHub.  

<!--TODO  The following images are presented for your review, please proved feedback.  -->  
<!--  
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
      &nbsp;  
   :::column-end:::
:::row-end:::  
-->  

## Announcements from the Chromium project  

[!INCLUDE [contact DevTools team note](../../includes/chromium-whats-new-note.md)]  

### New WebAuthn tool  

Emulate authenticators and debug the [Web Authentication API][GithubW3cWebauthn] with the new [WebAuthn][DevtoolsWebauthnIndex] tool.  

To open the **WebAuthn** tool, choose the **Settings and more** \(`...`\) icon > **More tools** > **WebAuthn**.  

:::image type="complex" source="../../media/2020/10/more-tools-webauthn.msft.png" alt-text="WebAuthn tool" lightbox="../../media/2020/10/more-tools-webauthn.msft.png":::
   **WebAuthn** tool  
:::image-end:::  

Before the new **WebAuthn** tool was added, there was no native WebAuthn debugging support on Microsoft Edge.  You needed physical authenticators to test your web application with the Web Authentication API.  With the new **WebAuthn** tool, emulate the authenticators, customize the capabilities, and inspect the states, without the use of any physical authenticators.  This feature simplifies the debugging experience.  

For more information about the **WebAuthn** feature, navigate to [Emulate authenticators and debug WebAuthn in Microsoft Edge DevTools][DevtoolsWebauthnIndex].  

To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #1034663][CR1034663].  

### Elements tool updates  

#### View the Computed sidebar pane in the Styles pane  

Toggle the **Computed sidebar** pane in the **Styles** pane.  The **Computed sidebar** pane in the **Styles** pane is collapsed by default.  Choose the button to toggle it.  

:::image type="complex" source="../../media/2020/10/computed-sidebar-pane.msft.png" alt-text="Computed sidebar pane" lightbox="../../media/2020/10/computed-sidebar-pane.msft.png":::
   Computed sidebar pane  
:::image-end:::  

To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #1073899][CR1073899].  

#### Grouping CSS properties in the Computed pane  

Group the CSS properties by categories in the **Computed** pane.  Use this grouping feature to more easily navigate in the **Computed** pane \(less scrolling\).  You may also selectively focus on a set of related properties for CSS inspection.  On the **Elements** pane, choose an element.  Toggle the **Group** checkbox to group \(or ungroup\) the CSS properties.  

:::image type="complex" source="../../media/2020/10/grouping-css-prop.msft.png" alt-text="Grouping CSS properties" lightbox="../../media/2020/10/grouping-css-prop.msft.png":::
   Grouping CSS properties  
:::image-end:::  

To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #1096230][CR1096230], [Issue #1084673][CR1084673], and [Issue #1106251][CR1106251].  

### Lighthouse 6.4 in the Lighthouse pane  

The **Lighthouse** pane is now running Lighthouse 6.4.  For more information about Lighthouse release changes, navigate to [release notes][GithubGoogleChromeLighthouseReleasesV641].  

To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #772558][CR772558].  

### performance.mark() events in the Timings section  

The **Timings section** of a Performance recording now marks `performance.mark()` events.

:::image type="complex" source="../../media/2020/10/perf-mark.msft.png" alt-text="Performance.mark events" lightbox="../../media/2020/10/perf-mark.msft.png":::
   `performance.mark` events  
:::image-end:::  

### New resource-type and url filters in the Network tool  

Use the new `resource-type` and `url` keywords in the **Network** tool to filter network requests.  

For example, use `resource-type:image` to focus on the network requests that are images.  

:::image type="complex" source="../../media/2020/10/network-resource-type-filter.msft.png" alt-text="resource-type filter" lightbox="../../media/2020/10/network-resource-type-filter.msft.png":::
   resource-type filter  
:::image-end:::  

To discover more special keywords such as `resource-type` and `url`, navigate to [filter requests by properties][DevtoolsNetworkReferenceFilterRequestsProperties].  

To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #1121141][CR1121141] and [Issue #1104188][CR1104188].  

### Frame details view updates  

#### Display COEP and COOP reporting to endpoint  

View the Cross-Origin Embedder Policy \(COEP\)  and Cross-Origin Opener Policy \(COOP\) `reporting to` endpoint under the **Security & Isolation** section.  

The **Reporting API** defines a new HTTP header, `Report-To`, that gives you a way to specify server endpoints for the browser to which to send warnings and errors.  

<!--TODO replace with edge demo -->  
:::image type="complex" source="../../media/2020/10/https_first_party_test_glitch_me_coop-1.msft.png" alt-text="reporting to endpoint" lightbox="../../media/2020/10/https_first_party_test_glitch_me_coop-1.msft.png":::
   reporting to endpoint  
:::image-end:::  

For more information about how to enable COEP and COOP and make your website "cross-origin isolated", navigate to [Making your website "cross-origin isolated" using COOP and COEP][WebDevCoopCoep].  

To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #1051466][CR1051466].  

#### Display COEP and COOP report-only mode  

DevTools now display `report-only` label for COEP and COOP that are set to `report-only` mode.  

<!--TODO replace with edge demo -->  
:::image type="complex" source="../../media/2020/10/https_first_party_test_glitch_me_coop-2.msft.png" alt-text="report-only label" lightbox="../../media/2020/10/https_first_party_test_glitch_me_coop-2.msft.png":::
   report-only label  
:::image-end:::  

For more information about how to prevent information leaks and enable COOP and COEP in your website, navigate to [Prevent Info leaks and enable powerful features: COOP and COEP][YoutubeXlnjyhja-0c] on YouTube.  

To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #1051466][CR1051466].  

### View and fix color contrast issues in the CSS Overview tool  

:::image type="complex" source="../../media/2020/06/experimental-tag-14px.msft.png" alt-text="Experimental feature":::
   Experimental feature  
:::image-end:::  

> [!NOTE]
> To enable this experiment, under **Settings** > **Experiments**, choose the **CSS Overview** checkbox.  

**CSS Overview** tool now displays a list of low color contrast texts of your page.  

In this example, the following demo page has a low color contrast issue.  

[Accessible color suggestion][JecFyiDemoAccessibleColorMulti]  

Choose the issue, view a list of elements that have the issue.  

:::image type="complex" source="../../media/2020/10/css-overview.msft.png" alt-text="Low color contrast issues" lightbox="../../media/2020/10/css-overview.msft.png":::
   Low color contrast issues  
:::image-end:::  

Choose an element in the list to open the element in **Elements** tool.  DevTools [provides auto color suggestion](../08/devtools.md#accessible-color-suggestion-in-the-styles-pane) to help you fix the low contrast text.  

To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #1120316][CR1120316].  

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

To review real-time updates on this feature in the Chromium open-source project, navigate to [Issue #174309][CR174309].  
-->  

## Download the Microsoft Edge preview channels  

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

## Getting in touch with Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../../includes/contact-whats-new-note.md)]  

<!-- links -->  

[DevtoolsWhatsnew200205DevtoolsDeprecationPropertiesPaneElementsPanel]: ../05/devtools.md#deprecation-of-the-properties-pane-in-the-elements-tool "Deprecation of the Properties pane in the Elements tool - What's new in DevTools (Microsoft Edge 84) | Microsoft Docs"  
[DevtoolsWhatsnew200206DevtoolsCssGridDebuggingFeatures]: ../06/devtools.md#css-grid-debugging-features "CSS grid debugging features - What's New In DevTools (Microsoft Edge 85) | Microsoft Docs"  

[DevtoolsDeviceModeIndex]: /microsoft-edge/devtools-guide-chromium/device-mode/index "Emulate mobile devices in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCustomizeShortcuts]: /microsoft-edge/devtools-guide-chromium/customize/shortcuts "Customize keyboard shortcuts in the Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsExperimentalFeaturesEmulationSupportDualScreenMode]: /microsoft-edge/devtools-guide-chromium/experimental-features#emulation-support-dual-screen-mode "Emulation: Support dual screen mode - Experimental features | Microsoft Docs"  
[DevtoolsExperimentalFeaturesEnableExperimentalApis]: /microsoft-edge/devtools-guide-chromium/experimental-features#enable-experimental-apis "Enable experimental APIs - Experimental features | Microsoft Docs"  
[DevtoolsExperimentalFeaturesEnableKeyboardShortcutEditor]: /microsoft-edge/devtools-guide-chromium/experimental-features#enable-keyboard-shortcut-editor "Enable keyboard shortcut editor - Experimental features | Microsoft Docs"  
[DevtoolsExperimentalFeaturesEnableNewCssGridDebuggingFeatures]: /microsoft-edge/devtools-guide-chromium/experimental-features#enable-new-css-grid-debugging-features "Emulation: Support dual screen mode - Experimental features | Microsoft Docs"  
[DevtoolsExperimentalFeaturesEnableSourceOrderViewer]: /microsoft-edge/devtools-guide-chromium/experimental-features#enable-source-order-viewer "Enable Source Order Viewer - Experimental features | Microsoft Docs"
[DevtoolsExperimentalFeaturesTestingOnFoldableDualScreenDevices]: /microsoft-edge/devtools-guide-chromium/experimental-features#testing-on-foldable-and-dual-screen-devices "Testing on foldable and dual-screen devices - Experimental features | Microsoft Docs"  
[DevtoolsExperimentalFeaturesTurnOnExperimentalFeatures]: /microsoft-edge/devtools-guide-chromium/experimental-features#turn-on-experimental-features "Turn on experimental features - Experimental features | Microsoft Docs"  
[DevtoolsConsoleApiTable]: /microsoft-edge/devtools-guide-chromium/console/api#table "table - Console API reference | Microsoft Docs"  
[DevtoolsCoverageIndex]: /microsoft-edge/devtools-guide-chromium/coverage/index "Find unused JavaScript and CSS code with the Coverage tab in Microsoft Edge DevTools | Microsoft Docs"  
[DevtoolsCssGrid]:  /microsoft-edge/devtools-guide-chromium/css/grid "Inspect CSS Grid | Microsoft Docs"  
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
[CR1104188]: https://crbug.com/1104188 "Network tool search does not find results when searching for full URL | Chromium bugs"  
[CR1106251]: https://crbug.com/1106251 "☂ DevTools: improve Computed Styles tab | Chromium bugs"  
[CR1120316]: https://crbug.com/1120316 "Highlight bad contrast under CSS Overview > Colors | Chromium Bugs"  
[CR1121141]: https://crbug.com/1121141 "Allow filtering by resource type in network log | Chromium bugs"  
[CR1121312]: https://crbug.com/1121312 "Settings should be removed from More Tools menu | Chromium bugs"  

[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/Microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"  

[GithubGoogleChromeLighthouseReleasesV641]: https://github.com/GoogleChrome/lighthouse/releases/v6.4.1 "v6.4.1 - GoogleChrome/lighthouse | GitHub"  

[GithubW3cWebauthn]: https://w3c.github.io/webauthn "Web Authentication | GitHub"  

[JecFyiDemoAccessibleColorMulti]: https://jec.fyi/demo/accessible-color-multi "Accessible color suggestion"  

[PostmanSchemaJsonCollectionv210Index]: https://schema.getpostman.com/json/collection/v2.1.0/docs/index.html "Postman Collection Format v2.1.0 | Postman"  

[SwaggerSpecificationV2]: https://swagger.io/specification/v2 "OpenAPI Specification | Swagger"  

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
