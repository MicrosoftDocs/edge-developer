---
title: What's new in DevTools (Microsoft Edge 84)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/20/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# What's New In DevTools (Microsoft Edge 84)  

## Fix site issues with the new Issues Drawer tab  

The new **Issues** Drawer tab in the Drawer was built to help reduce the notification fatigue and clutter of the **Console**.  Currently, the **Console** is the central place for website developers, libraries, frameworks, and Microsoft Edge to log messages, warnings, and errors.  The **Issues** Drawer tab aggregates warnings from the browser in a structured, aggregated, and actionable way, links to affected resources within Microsoft Edge DevTools, and provides guidance on how to fix the issues.  Over time, more and more of warnings in Microsoft Edge are surfaced in the **Issues** Drawer tab rather than the **Console**, which should help reduce the clutter in the **Console**.  

<!--To get started, see [Find And Fix Problems With The Microsoft Edge DevTools Issues Tab][DevtoolsIssuesIndex].  -->  
<!--todo:  add when section is live  -->  

:::image type="complex" source="../../media/2020/05/issues.msft.png" alt-text="The Issues Drawer tab" lightbox="../../media/2020/05/issues.msft.png":::
   The **Issues** Drawer tab  
:::image-end:::  

Chromium Bug: [#1068116][CR1068116]  

## View accessibility information in the Inspect Mode tooltip  

The **Inspect Mode** tooltip now indicates whether the element has an accessible
name and role and is keyboard-focusable.  

<!--todo:  add link inspect mode tooltip (WebdevCls) when section is live  -->  
<!--todo:  add link name and role (WebdevLabelsText) when section is live  -->  
<!--todo:  add link keyboard-focusable (WebdevControlFocus) when section is live  -->  

:::image type="complex" source="../../media/2020/05/a11y.msft.png" alt-text="The Inspect Mode tooltip with accessibility information" lightbox="../../media/2020/05/a11y.msft.png":::
  The **Inspect Mode** tooltip with accessibility information  
:::image-end:::  

Chromium Bug: [#1040025][CR1040025]  

## Performance panel updates  

### View Total Blocking Time information in the footer  

After recording your load performance, the **Performance** panel now shows Total Blocking Time \(TBT\) information in the footer.  TBT is a load performance metric that helps quantify how long a page takes to become usable.  It essentially measures how long a page appears to be usable \(because the content is rendered to the screen\); but is not actually usable, because JavaScript is blocking the main thread and therefore the page does not respond to user input.  TBT is the main lab metric for approximating First Input Delay, which is one of new Core Web Vitals implemented by Microsoft.  

<!--todo:  add link Total Blocking Time (TBT) (WebdevTbt) when section is live  -->  
<!--todo:  add link lab metric (WebdevMeasureSpeedLabField) when section is live  -->  
<!--todo:  add link Core Web Vitals (WebdevCoreWebVitals) when section is live  -->  

To get Total Blocking Time information, do not use the **Refresh Page** workflow for recording page load performance.  

:::image type="icon" border="false" source="https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/media/refresh-page-icon.msft.png":::

Instead, select **Record**, manually reload the page, wait for the page to load, and then stop recording.  

:::image type="icon" border="false" source="https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/media/record-icon.msft.png":::

If you see `Total Blocking Time: Unavailable`, Microsoft Edge DevTools did not get the required information from the internal profiling data in Microsoft Edge.  

:::image type="complex" source="../../media/2020/05/tbt.msft.png" alt-text="Total Blocking Time information in the footer of a Performance panel recording" lightbox="../../media/2020/05/tbt.msft.png":::
   Total Blocking Time information in the footer of a **Performance** panel recording  
:::image-end:::  

Chromium Bug: [#1054381][CR1054381]  

### Layout Shift events in the new Experience section  

The new **Experience** section of the **Performance** panel helps you detect layout shifts.  Cumulative Layout Shift \(CLS\) is a metric that helps you quantify unwanted visual instability and is one of the new Core Web Vitals implemented by Microsoft.  

<!--todo:  add link Core Web Vitals (WebdevCoreWebVitals) when section is live  -->  
<!--todo:  add link layout shifts (WebdevCls) when section is live  -->  

Select the **Layout Shift** event to see the details of the layout shift in the **Summary** pane.  Hover over the **Moved from** and **Moved to** fields to visualize where the layout shift occurred.  

:::image type="complex" source="../../media/2020/05/cls.msft.png" alt-text="The details of a layout shift" lightbox="../../media/2020/05/cls.msft.png":::
   The details of a layout shift  
:::image-end:::  

## More accurate promise terminology in the Console  

When logging a `Promise`, the **Console** incorrectly provided `PromiseStatus` value set to `resolved`.  

:::image type="complex" source="../../media/2020/05/resolved.msft.png" alt-text="An example of the Console using the old resolved terminology" lightbox="../../media/2020/05/resolved.msft.png":::
   An example of the **Console** using the old `resolved` terminology  
:::image-end:::  

The **Console** now uses the term `fulfilled`, aligns with the `Promise` specification.  For more information about the `Promise` specification, see [States and Fates on GitHub](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md).  

:::image type="complex" source="../../media/2020/05/fulfilled.msft.png" alt-text="An example of the Console using the new fulfilled terminology" lightbox="../../media/2020/05/fulfilled.msft.png":::
  An example of the **Console** using the new `fulfilled` terminology  
:::image-end:::  

V8 Bug: [#6751][CRV86751]  

## Styles pane updates  

### Support for the revert keyword  

The autocomplete UI of the **Styles** pane now detects the [MDNRevert][MDNRevert] CSS keyword, which reverts the cascaded value of a property to the previous value applied to the styling of the element.  

:::image type="complex" source="../../media/2020/05/revert.msft.png" alt-text="Setting the value of a property to revert" lightbox="../../media/2020/05/revert.msft.png":::
  Setting the value of a property to revert  
:::image-end:::  

Chromium Bug: [#1075437][CR1075437]  

### Image previews  

Hover over a `background-image` value in the **Styles** pane to see a preview of the image in a tooltip.  

:::image type="complex" source="../../media/2020/05/image-preview.msft.png" alt-text="Hovering over a background-image value" lightbox="../../media/2020/05/image-preview.msft.png":::
  Hovering over a `background-image` value  
:::image-end:::  

Chromium Bug: [#1040019][CR1040019]  

### Color Picker now uses space-separated functional color notation  

[CSS Color Module Level 4][CSSWGDraftsColor4Changes3] specifies that color functions, like `rgb()`, should support space-separated
arguments.  For example, `rgb(0, 0, 0)` is equivalent to `rbg(0 0 0)`.  

When you choose colors with the [Color Picker][DevtoolsCssReferenceColorPicker] or alternate between color representations in the **Styles** pane by holding `Shift` and selecting the `background-color` value, you should see the space-separated argument syntax.  

:::image type="complex" source="../../media/2020/05/color.msft.png" alt-text="Using space-separated arguments in the Styles pane" lightbox="../../media/2020/05/color.msft.png":::
  Using space-separated arguments in the **Styles** pane  
:::image-end:::  

You should also see the syntax in the **Computed** pane and the **Inspect Mode** tooltip.  

Microsoft Edge DevTools is using the new syntax because [upcoming CSS features like color() do not support the deprecated comma-separated argument syntax][TwitterMathiasStatus1253242715304857601].  

The space-separated argument syntax has been supported in most browsers for a while.  For more information, see [Can I use... Space-separated functional color notations?][CaniuseMDNSpaceSeparatedFunctionalColorNotations]  

Chromium Bug: [#1072952][CR1072952]  

## Deprecation of the Properties pane in the Elements panel  

The **Properties** pane in the **Elements** panel is deprecated.  Run `console.dir($0)` in the **Console** instead.  

:::image type="complex" source="../../media/2020/05/properties.msft.png" alt-text="The deprecated Properties pane" lightbox="../../media/2020/05/properties.msft.png":::
  The deprecated **Properties** pane  
:::image-end:::  

### References  

*   [console.dir()][DevtoolsConsoleApiDir]  
*   [$0][DevtoolsConsoleUtilitiesDom]  



<!-- image links -->  

<!-- links -->  

[DevtoolsConsoleApiDir]: /microsoft-edge/devtools-guide-chromium/console/api#dir "dir - Console API Reference | Microsoft Docs"  
[DevtoolsConsoleUtilitiesDom]: /microsoft-edge/devtools-guide-chromium/console/utilities#recently-selected-element-or-javascript-object "Recently Selected Element Or JavaScript Object - Console Utilities API Reference | Microsoft Docs"  
[DevtoolsCssReferenceColorPicker]: /microsoft-edge/devtools-guide-chromium/css/reference#change-colors-with-the-color-picker "Change colors with the Color Picker - CSS Reference | Microsoft Docs"  
<!--[DevtoolsIssuesIndex]: /microsoft-edge/devtools-guide-chromium/issues/index "Find And Fix Problems With The Microsoft Edge DevTools Issues Tab | Microsoft Docs"  -->  
<!--[DevtoolsWhatsNew201901Inspect]: /microsoft-edge/devtools-guide-chromium/whats-new/2019/01/devtools#inspect "Detailed tooltips in Inspect Mode - What's New In DevTools (Edge 73) | Microsoft Docs"  -->  

[CaniuseMDNSpaceSeparatedFunctionalColorNotations]: https://caniuse.com/#feat=mdn-css_types_color_space_separated_functional_notation "Space-separated functional color notations - MDN | Can I Use"  

[CR1040019]: https://crbug.com/1040019 "DevTools: easily preview images and background images in Styles pane | Chromium bugs"  
[CR1040025]: https://crbug.com/1040025 "DevTools: show basic a11y info in element popover | Chromium bugs"  
[CR1054381]: https://crbug.com/1054381 "CR 1054381 | Chromium bugs"  
[CR1068116]: https://crbug.com/1068116 "Ship issues panel | Chromium bugs"  
[CR1072952]: https://crbug.com/1072952 "DevTools: color picker should produce modern CSS color syntax | Chromium bugs"  
[CR1075437]: https://crbug.com/1075437 "DevTools: add support for the CSS `revert` keyword/value | Chromium bugs"  
[CRV86751]: https://bugs.chromium.org/p/v8/issues/detail?id=6751 "PromiseStatus should be "fulfilled", not "resolved" | V8 bugs"  

[CSSWGDraftsColor4Changes3]: https://drafts.csswg.org/css-color#changes-from-3 "Changes from Colors 3 - CSS Color Module Level 4 | W3C CSS Working Group Editor Drafts"  

[GithubDomenicPromiseUnwrappingStatesFates]: https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md "States and Fates - domenic/promises-unwrapping | GitHub"  

[MDNRevert]: https://developer.mozilla.org/docs/Web/CSS/revert "revert | MDN"  
[MDNRevertBrowserCompatibility]: https://developer.mozilla.org/docs/Web/CSS/revert#Browser_compatibility "Browser compatibility | MDN"  

<!--[WebdevCls]: https://alphabet-dev/cls "Cumulative Layout Shift (CLS) | alphabet-dev"  -->  
<!--[WebdevControlFocus]: https://alphabet-dev/control-focus-with-tabindex "Control focus with tabindex | alphabet-dev"  -->  
<!--[WebdevMeasureSpeedLabField]: https://alphabet-dev/how-to-measure-speed#lab-data-vs-field-data "Lab data vs Field data - How to measure speed? | alphabet-dev"  -->  
<!--[WebdevLabelsText]: https://alphabet-dev/labels-and-text-alternatives "Labels and text alternatives | alphabet-dev"  -->  
<!--[WebdevTbt]: https://alphabet-dev/tbt "Total Blocking Time (TBT) | alphabet-dev"  -->  
<!--[WebdevCoreWebVitals]: https://alphabet-dev/vitals#core-web-vitals "Core Web Vitals | alphabet-dev"  -->  

[TwitterMathiasStatus1253242715304857601]: https://twitter.com/mathias/status/1253242715304857601 "In source code, stop using the old rgb()/hsl() CSS color syntax with commas. Get used to the modern comma-free CSS color syntax, supported in all modern browsers. Why? Upcoming new features such as lab(), lch(), and color() use the same syntax (and don’t work with commas). - @mathias | Twitter"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/updates/2020/05/devtools/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
