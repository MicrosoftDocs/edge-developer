---
title: What's new in DevTools (Microsoft Edge 85)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/30/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# What's New In DevTools (Microsoft Edge 85)  

## Announcements from the Microsoft Edge DevTools team  

The following sections are a list of announcements you may have missed from the Microsoft Edge DevTools team!  See the announcements to try new features in the DevTools, VS Code extensions, and more.  To stay up to date on all the latest and greatest features in your developer tools, download the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] and [follow us on Twitter][EdgeDevToolsTwitterAccount].  

## Announcements from the Chromium project  

The following sections announce additional features available in Microsoft Edge 85 that were contributed to the open source Chromium project.  

## Style editing for CSS-in-JS frameworks  

The **Styles** pane now has better support for editing styles that were created with the [CSS Object Model (CSSOM)][CsswgDraftsCssom] APIs.  Many CSS-in-JS frameworks and libraries use the CSSOM APIs under the hood to construct styles.  

You may also edit styles added in JavaScript using **Constructable Stylesheets** now.  Constructable Stylesheets are a new way to create and distribute reusable styles when using **Shadow DOM**.  

<!--todo: add Shadow DOM when available  -->  
<!--todo: add Constructable Stylesheets when available  -->  

For example, the `h1` styles added with `CSSStyleSheet` \(CSSOM APIs\) were not editable previously.  The styles are editable now in the **Styles** pane.  

<!--<video autoplay loop muted playsinline>
  <source src="/microsoft-edge/devtools-guide-chromium/whats-new/images/2020/06/css-in-js.mp4" type="video/mp4">
</video>-->  

<!--todo: replace video  -->  

Chromium issue [#946975][CR946975]  

## Lighthouse 6 in the Lighthouse panel  

The **Lighthouse** panel is now running Lighthouse 6.  <!--For a summary of all the changes, see [What's New in Lighthouse 6.0][WebDevLighthouseWhatsNew60].  -->  For a full list of all changes, see [v6.0.0 release notes][GithubGoogleChromeLighthouse600].  

<!--todo: add What's New in Lighthouse 6.0 when available   -->  

Lighthouse 6.0 introduces three new metrics to the report:  Largest Contentful Paint \(LCP\), Cumulative Layout Shift \(CLS\), and Total Blocking Time \(TBT\).  LCP and CLS are 2 of the new **Core Web Vitals**.  TBT is a lab measurement proxy for another Core Web Vital, First Input Delay.  

<!--todo: add Core Web Vitals when available  -->  

The performance score formula has also been reweighted to better reflect the loading experience of the user.  

:::image type="complex" source="../../media/2020/06/lighthouse.msft.png" alt-text="New performance metrics in Lighthouse 6.0" lightbox="../../media/2020/06/lighthouse.msft.png":::
   New performance metrics in Lighthouse 6.0  
:::image-end:::  

Chromium issue [#772558][CR772558]  

### First Meaningful Paint deprecation  

First Meaningful Paint \(FMP\) is deprecated in Lighthouse 6.0.  FMP has also been removed from the *Performance* panel.  **Largest Contentful Paint** is the recommended replacement for FMP.  <!--See [First Meaningful Paint][WebDevFirstMeaningfulPaint] for an explanation of why it was deprecated.  -->  

<!--todo: add Largest Contentful Paint when section available  -->  
<!--todo: add First Meaningful Paint link and note when available  -->  

Chromium issue [#1096008][CR1096008]  

## Support for new JavaScript features  

DevTools now has better support for some of the latest JavaScript language features.  

:::row:::
   :::column span="1":::
      [Optional chaining][V8DevOptionalChaining] syntax autocompletion  
   :::column-end:::
   :::column span="2":::
      Property auto-completion in the **Console** now supports optional chaining syntax, for example,  `name?.` now works in addition to `name.` and `name[`.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Syntax highlighting for [private fields][V8DevClassFieldsPrivate]  
   :::column-end:::
   :::column span="2":::
      private class fields are now properly syntax-highlighted and pretty-printed in the **Sources** panel.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Syntax highlighting for [Nullish coalescing operator][V8DevNullishCoalescing]
   :::column-end:::
   :::column span="2":::
      DevTools now properly pretty-prints the nullish coalescing operator in the **Sources** panel.  
   :::column-end:::
:::row-end:::  

Chromium issues [#1073903][CR1073903], [#1083214][CR1083214], [#1083797][CR1083797]  

## New app shortcut warnings in the Manifest pane  

**App shortcuts** help users quickly start common or recommended tasks within a web app.  

<!--todo: add App shortcuts when section is live  -->  

The **Manifest** pane now shows warnings for the following conditions.  

*   The app shortcut icons are smaller than 96x96 pixels  
*   The app shortcut icons and manifest icons are not square \(since the icons are ignored\)  

:::image type="complex" source="../../media/2020/06/app-shortcut-warnings.msft.png" alt-text="App shortcut warnings" lightbox="../../media/2020/06/app-shortcut-warnings.msft.png":::
   App shortcut warnings  
:::image-end:::  

Chromium issue [#955497][CR955497]  

## Service worker respondWith events in the Timing tab  

The **Timing** tab of the **Network** panel now includes `respondWith` service worker events.  The `respondWith` service worker event is the time immediately before the service worker `fetch` event handler runs to the time when the `respondWith` promise of the `fetch` handler is settled.  

:::image type="complex" source="../../media/2020/06/timing-tab.msft.png" alt-text="respondWith service worker" lightbox="../../media/2020/06/timing-tab.msft.png":::
   `respondWith` service worker  
:::image-end:::  

Chromium issue [#1066579][CR1066579]  

## Consistent display of the Computed pane  

The **Computed** pane in the **Elements** panel now displays consistently as a pane across all viewport sizes.  Previously the **Computed** pane merged inside the **Styles** pane when the width of the DevTools viewport was narrow.  

<!--<video autoplay loop muted playsinline>
  <source src="/microsoft-edge/devtools-guide-chromium/whats-new/images/2020/06/computed-pane.mp4" type="video/mp4">
</video>-->  

<!--todo: replace video  -->  

Chromium issue [#1073899][CR1073899]  

## Bytecode offsets for WebAssembly files  

DevTools now uses bytecode offsets for displaying line numbers of Wasm disassembly.  
The line numbers make it clearer that you are looking at binary data, and is more consistent with how the Wasm runtime references locations.  

:::image type="complex" source="../../media/2020/06/bytecode-offset.msft.png" alt-text="Bytecode offsets" lightbox="../../media/2020/06/bytecode-offset.msft.png":::
   Bytecode offsets  
:::image-end:::  

Chromium issue [#1071432][CR1071432]  

## Line-wise copy and cut in Sources Panel  

When performing copy or cut with no selection in the [Sources panel editor][DevtoolsSourcesEditCssJavascript], DevTools copies or cuts the current line of content.  <!--For example, in the video below, the cursor is at the end of line 1.  After pressing the cut keyboard shortcut, the entire line is copied to the clipboard and deleted.  -->  

<!--<video autoplay loop muted playsinline>
  <source src="/microsoft-edge/devtools-guide-chromium/whats-new/images/2020/06/line-wise-cut.mp4" type="video/mp4">
</video>-->  

<!--todo: replace video  -->  

Chromium issue [#800028][CR800028]

## Console Settings updates  

### Ungroup same console messages  

The **Group similar** toggle in Console Settings now applies to duplicate messages.  Previously it just applied to similar messages.  

For example, previously, DevTools did not ungroup the messages `hello` even though **Group similar** is unchecked.  Now, the `hello` messages are ungrouped.  

<!--<video autoplay loop muted playsinline>
  <source src="/microsoft-edge/devtools-guide-chromium/whats-new/images/2020/06/ungroup-similar.mp4" type="video/mp4">
</video>-->  

<!--todo: replace video  -->  

Chromium issue [#1082963][CR1082963]  

### Persisting Selected context only settings  

The **Selected context only** settings in Console Settings is now persisted.  Previously the settings were reset every time you closed and reopened DevTools.  The change makes the setting behavior consistent with other Console Settings options.  

:::image type="complex" source="../../media/2020/06/selected-context.msft.png" alt-text="Selected context only setting" lightbox="../../media/2020/06/selected-context.msft.png":::
   **Selected context only** setting  
:::image-end:::  

Chromium issue [#1055875][CR1055875]  

## Performance panel updates  

### JavaScript compilation cache information in Performance panel  

[JavaScript compilation cache information][V8DevCodeCaching] is now always displayed in the Summary tab of the Performance panel.  Previously, DevTools did not show anything related to code caching if code caching did not happen.  

:::image type="complex" source="../../media/2020/06/js-compilation-cache.msft.png" alt-text="JavaScript compilation cache information" lightbox="../../media/2020/06/js-compilation-cache.msft.png":::
   JavaScript compilation cache information  
:::image-end:::  

Chromium issue [#912581][CR912581]  

### Navigation timing alignment in the Performance panel  

The **Performance** panel used to show times in the rulers based on when the recording started.  The timing has now changed for recordings where the user navigates, where DevTools now shows ruler times relative to the navigation instead.  

:::image type="complex" source="../../media/2020/06/nav-timing.msft.png" alt-text="Align navigation timing in Performance panel" lightbox="../../media/2020/06/nav-timing.msft.png":::
   Align navigation timing in **Performance** panel  
:::image-end:::  

The times for `DOMContentLoaded`, First Paint, First Contentful Paint, and Largest Contentful Paint events are updated to be relative to the start of the navigation, which means the timing matches the timings reported by `PerformanceObserver`.  

Chromium issue [#974550][CR974550]  

## New icons for breakpoints, conditional breakpoints, and logpoints  

The **Sources** panel has new designs for breakpoints, conditional breakpoints, and logpoints.  Breakpoints get a refreshed flag design with brighter and friendlier colors.  Icons are added to differentiate conditional breakpoints and logpoints.  

:::image type="complex" source="../../media/2020/06/breakpoints.msft.png" alt-text="Breakpoints" lightbox="../../media/2020/06/breakpoints.msft.png":::
   Breakpoints  
:::image-end:::  

Chromium issue [#1041830][CR1041830]  

## Download the Microsoft Edge preview channels  

If you are on Windows or macOS, consider using the [Microsoft Edge preview channels][MicrosoftEdgePreviewChannels] as your default development browser.  The preview channels give you access to the latest DevTools features.  

## Getting in touch with Microsoft Edge Devtools team  

Us the following options to discuss the new features and changes in the post, or anything else related to DevTools.  

*   Send your feedback using the **Feedback** icon in the DevTools  
*   Tweet at [@EdgeDevTools][PostTweetEdgeDevTools]  
*   Submit a suggestion to [The Web We Want][TheWebWeWant]  
*   File bugs on this page in the [edge-developer][GitHubMicrosoftDocsEdgeDeveloperNewIssue] repository  

:::image type="complex" source="../../media/2020/05/feedback-icon.msft.png" alt-text="The Feedback icon in the Microsoft Edge DevTools" lightbox="../../media/2020/05/feedback-icon.msft.png":::
  The **Feedback** icon in the Microsoft Edge DevTools  
:::image-end:::  

<!-- links -->  

[DevToolsChromiumGuide]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools | Microsoft Docs"  
[DevtoolsSourcesEditCssJavascript]: /microsoft-edge/devtools-guide-chromium/sources#edit-css-and-javascript "Edit CSS and JavaScript - Sources Panel Overview | Microsoft Docs"  

[CRIssuesList]: https://bugs.chromium.org/p/chromium/issues/list "Chromium bugs"  

[CR772558]: https://crbug.com/772558 "DevTools: Update to latest version of Lighthouse | Chromium bugs"  
[CR800028]: https://crbug.com/800028 "Duplicate line shortcut in Developer Tools editor not working after Chrome update | Chromium bugs"  
[CR912581]: https://crbug.com/912581 "Expose which scripts were code-cached by V8 in DevTools/about:tracing | Chromium bugs"  
[CR946975]: https://crbug.com/946975 "DevTools Styles Sidebar doesn't work with constructed stylesheets | Chromium bugs"  
[CR955497]: https://crbug.com/955497 "App Icon Shortcut menu for PWAs | Chromium bugs"  
[CR974550]: https://crbug.com/974550 "Metric mismatch between Perf panel and performanceObserver | Chromium bugs"  
[CR1041830]: https://crbug.com/1041830 "Improve colors for breakpoints | Chromium bugs"  
[CR1055875]: https://crbug.com/1055875 "The value of the Selected context only console setting does not persist after closing and reopening Developer Tools | Chromium bugs"  
[CR1066579]: https://crbug.com/1066579 "DevTools: Show ServiceWorkers Fetch Timeline per request in Network panel | Chromium bugs"  
[CR1071432]: https://crbug.com/1071432 "Wasm Basic Developer Experience | Chromium bugs"  
[CR1073899]: https://crbug.com/1073899 "Computed style tab disappears in responsive mode | Chromium bugs"  
[CR1073903]: https://crbug.com/1073903 "DevTools: Syntax highlighting doesn't work with private fields | Chromium bugs"  
[CR1082963]: https://crbug.com/1082963 "Can't disable console's Group similar messages behavior | Chromium bugs"  
[CR1083214]: https://crbug.com/1083214 "acorn doesn't support optional chaining | Chromium bugs"  
[CR1083797]: https://crbug.com/1083797 "Pretty printing broken for nullish coalescing | Chromium bugs"  
[CR1096008]: https://crbug.com/1096008 "Remove FMP | Chromium bugs"  


[DesktopEdge]: https://www.microsoft.com/edge/ "Introducing the new Microsoft Edge"  

[GithubGoogleChromeLighthouse600]: https://github.com/GoogleChrome/lighthouse/releases/tag/v6.0.0 "v6.0.0 - GoogleChrome/lighthouse | GitHub"  

[GitHubMicrosoftDocsEdgeDeveloperNewIssue]: https://github.com/MicrosoftDocs/edge-developer/issues/new?title=[DevTools%20Docs%20Feedback] "New Issue - MicrosoftDocs/edge-developer"  

[MicrosoftEdgePreviewChannels]: https://www.microsoftedgeinsider.com/download/ "Microsoft Edge Preview Channels"  

[VSCode]: https://code.visualstudio.com/ "Visual Studio Code"  

[CsswgDraftsCssom]: https://drafts.csswg.org/cssom "CSS Object Model (CSSOM) | W3C CSS Working Group Editor Drafts"  

[PostTweetEdgeDevTools]: https://twitter.com/intent/tweet?text=@EdgeDevTools "@EdgeDevTools | Post a Tweet"  
[EdgeDevToolsTwitterAccount]: https://twitter.com/EdgeDevTools "@EdgeDevTools Twitter account"  

[V8DevClassFieldsPrivate]: https://v8.dev/features/class-fields#private-class-fields "Private class fields - Public and private class fields | V8.Dev"  
[V8DevCodeCaching]: https://v8.dev/blog/code-caching-for-devs "Code caching for JavaScript developers | V8.Dev"  
[V8DevNullishCoalescing]: https://v8.dev/features/nullish-coalescing "Nullish coalescing | V8.Dev"  
[V8DevOptionalChaining]: https://v8.dev/features/optional-chaining "Optional chaining | V8.Dev"  

<!--[WebDevLighthouseWhatsNew60]: https://web.dev/lighthouse-whats-new-6.0 "What's New in Lighthouse 6.0 | Web.Dev"  -->  
<!--[WebDevVitalsCoreWeb]: https://web.dev/vitals#core-web-vitals "Core Web Vitals - Web Vitals | Web.Dev"  -->  
<!--[WebdevAppShortcuts]: https://alphabet-dev/app-shortcuts "Get things done quickly with app shortcuts | alphabet-dev"  -->  
<!--[WebdevCls]: https://alphabet-dev/cls "Cumulative Layout Shift (CLS) | alphabet-dev"  -->  
<!--[WebdevControlFocus]: https://alphabet-dev/control-focus-with-tabindex "Control focus with tabindex | alphabet-dev"  -->  
<!--[WebdevMeasureSpeedLabField]: https://alphabet-dev/how-to-measure-speed#lab-data-vs-field-data "Lab data vs Field data - How to measure speed? | alphabet-dev"  -->  
<!--[WebdevLabelsText]: https://alphabet-dev/labels-and-text-alternatives "Labels and text alternatives | alphabet-dev"  -->  
<!--[WebdevTbt]: https://alphabet-dev/tbt "Total Blocking Time (TBT) | alphabet-dev"  -->  
<!--[WebFundamentalComponentsShadowdom]: /web/fundamentals/web-components/shadowdom  -->  
<!--[WebDevLcp]: https://web.dev/lcp "Largest Contentful Paint (LCP) | Web.Dev"  -->  
<!--[WebDevFirstMeaningfulPaint]: https://web.dev/first-meaningful-paint "First Meaningful Paint | Web.Dev"  -->  
<!--[WhatsNew201902ConstructableStylesheets]: ../../2019/02/constructable-stylesheets.md "Constructable Stylesheets: seamless reusable styles | Microsoft Docs"  -->  

[TheWebWeWant]: https://webwewant.fyi/ "The Web We Want"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2020/06/devtools/index) and is authored by [Jecelyn Yeen][JecelynYeen] \(Developer advocate, Chrome DevTools\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[JecelynYeen]: https://developers.google.com/web/resources/contributors/jecelynyeen  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
