---
description: A comprehensive reference of accessibility features in Microsoft Edge DevTools.
title: Accessibility Reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/01/2020 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->  

# Accessibility reference  

This page is a comprehensive reference of accessibility features in Microsoft Edge DevTools.  It is intended for web developers who:  

*   Have a basic understanding of DevTools, such as how to open it.  
*   Are familiar with [accessibility principles and best practices][MDNAccessibility].  
    
The purpose of this reference is to help you discover all of the tools available in DevTools that help you examine the accessibility of a page.  

See [Navigating Microsoft Edge DevTools With Assistive Technology][DevtoolsAccessibilityNavigation] if you are looking for help on navigating DevTools with an assistive technology like a screen reader.  

## Overview of accessibility features in Microsoft Edge DevTools  

This section explains how DevTools fits into your overall accessibility toolkit.  

When determining whether a page is accessible, you need to have 2 general questions in mind:  

1.  Are you able to navigate the page with a keyboard or [screen reader][MDNScreenReader]?  
1.  Are the elements of the page properly marked up for screen readers?  
    
In general, DevTools should help you fix errors related to question #2, because these errors are easy to detect in an automated fashion.  Question #1 is just as important, but unfortunately DevTools does not help you there.  The only way to find errors related to question #1 is to try using a page with a keyboard or screen reader yourself.  <!--See [How To Do An Accessibility Review][AccessibilityReview] to learn more.  -->  

<!--[AccessibilityReview]: /web/fundamentals/accessibility/how-to-review  -->  

## Audit the accessibility of a page  

> [!NOTE]
> The **Audits** panel provides links to content hosted on third-party websites.  Microsoft is not responsible for and has no control over the content of these sites and any data that may be collected.  

In general, use the Audits panel to determine if:  

*   A page is properly marked up for screen readers.  
*   The text elements on a page have sufficient contrast ratios.  See [View the contrast ratio of a text element in the Color Picker](#view-the-contrast-ratio-of-a-text-element-in-the-color-picker).  

To audit a page:  

1.  Go to the URL that you want to audit.  
1.  In DevTools, click the **Audits** tab.  DevTools shows you various configuration options.  
    
    :::image type="complex" source="../media/accessibility-audits-pane.msft.png" alt-text="Configure audits" lightbox="../media/accessibility-audits-pane.msft.png":::
       Configure audits  
    :::image-end:::  
    
    > [!NOTE]
    > The screenshots in this section were taken with version 79 of Microsoft Edge.  You may check what version you are running at `edge://version`.  The **Audits** panel UI looks different in earlier versions of Microsoft Edge, but the general workflow is the same.  
    
1.  For **Device**, select **Mobile** if you want to simulate a mobile device.  This option changes your user agent string and resizes the viewport.  If the mobile version of the page displays differently than the desktop version, this option could have a significant effect on the results of your audit.  
1.  In the **Audits** section, make sure that **Accessibility** is enabled.  Disable the other categories if you want to exclude them from your report.  Leave them enabled if you want to discover other ways to improve the quality of your page.  
1.  The **Throttling** section lets you throttle the network and CPU, which is useful when analyzing load performance.  This option should be irrelevant to your accessibility score, so you may use whatever you prefer.  
1.  The **Clear Storage** checkbox lets you clear all storage before loading the page, or preserve storage between page loads.  This option is also probably irrelevant to your accessibility score, so you may use whatever you prefer.  
1.  Click **Run Audits**. After 10 to 30 seconds, DevTools provides a report.  Your report gives you various tips on how to improve the accessibility of the page.  
    
    :::image type="complex" source="../media/accessibility-audits-run-audits-result.msft.png" alt-text="A report" lightbox="../media/accessibility-audits-run-audits-result.msft.png":::
       A report  
    :::image-end:::  
    
1.  Click an audit to learn more about it.  
    
    :::image type="complex" source="../media/accessibility-audits-run-audits-result-issues-expanded.msft.png" alt-text="More information about an audit" lightbox="../media/accessibility-audits-run-audits-result-issues-expanded.msft.png":::
       More information about an audit  
    :::image-end:::  
    
1.  Click **Learn More** to view the documentation of that audit.  
    
    :::image type="complex" source="../media/accessibility-web-dev-accessibility-audits-learn-more.msft.png" alt-text="View the documentation of an audit" lightbox="../media/accessibility-web-dev-accessibility-audits-learn-more.msft.png":::
       View the documentation of an audit  
    :::image-end:::  
    
### See also: aXe extension  

You may prefer to use the [aXe extension][ChromeWebStoreAxe] rather than the **Audits** panel.  
The aXe extension generally provides the same information, since it is the underlying engine that powers the Audits panel.  The aXe extension has a different UI and describes audits slightly differently.  
One advantage that the aXe extension has over the **Audits** panel is that it enables you to inspect and highlight failing nodes.  

:::image type="complex" source="../media/accessibility-devtools-extension-axe-panel.msft.png" alt-text="The aXe extension" lightbox="../media/accessibility-devtools-extension-axe-panel.msft.png":::
   The aXe extension  
:::image-end:::  

## The Accessibility pane  

The **Accessibility** pane is where you view the accessibility tree, ARIA attributes, and computed accessibility properties of DOM nodes.  

To open the **Accessibility** pane:  

1.  Click the **Elements** tab.  
1.  In the **DOM Tree**, select the element which you want to inspect.  
1.  Click the **Accessibility** tab.  This tab may be hidden behind the **More Tabs** \(![More Tabs][ImageMoreTabsIcon]\) button.  

:::image type="complex" source="../media/accessibility-elements-accessibility.msft.png" alt-text="Inspect the h1 element of the DevTools homepage in the Accessibility pane" lightbox="../media/accessibility-elements-accessibility.msft.png":::
   Inspect the `h1` element of the DevTools homepage in the **Accessibility** pane  
:::image-end:::  

### View the position of an element in the accessibility tree  

The [accessibility tree][MDNAccessibilityTree] is a subset of the DOM tree.  It only contains elements from the DOM tree that are relevant and useful for displaying the contents of a page in a screen reader.  

Inspect the position of an element in the accessibility tree from the [Accessibility pane](#the-accessibility-pane).  

:::image type="complex" source="../media/accessibility-elements-accessibility-tree.msft.png" alt-text="The Accessibility Tree section" lightbox="../media/accessibility-elements-accessibility-tree.msft.png":::
   The **Accessibility Tree** section  
:::image-end:::  

### View the ARIA attributes of an element  

ARIA attributes ensure that screen readers have all of the information that they need in order to properly represent the contents of a page.  

View the ARIA attributes of an element in the [Accessibility pane](#the-accessibility-pane).  

:::image type="complex" source="../media/accessibility-elements-accessibility-aria-attributes.msft.png" alt-text="The ARIA Attributes section" lightbox="../media/accessibility-elements-accessibility-aria-attributes.msft.png":::
   The **ARIA Attributes** section  
:::image-end:::  

### View the computed accessibility properties of an element  

> [!NOTE]
> If you are looking for computed CSS properties, see the [Computed tab][DevtoolsCssReferenceViewActuallyAppliedElements].  

Some accessibility properties are dynamically calculated by the browser.  These properties are displayed in the **Computed Properties** section of the **Accessibility** pane.  

View the computed accessibility properties of an element in the [Accessibility pane](#the-accessibility-pane).  

:::image type="complex" source="../media/accessibility-elements-accessibility-computed-properties.msft.png" alt-text="The Computed Properties section of the Accessibility pane" lightbox="../media/accessibility-elements-accessibility-computed-properties.msft.png":::
   The **Computed Properties** section of the **Accessibility** pane  
:::image-end:::  

## View the contrast ratio of a text element in the Color Picker  

Some people with low vision do not see areas as very bright or very dark.  Everything tends to appear at about the same brightness, which makes it hard to distinguish outlines and edges.  

Contrast ratio measures the difference in brightness between the foreground and background of text.  If your text has a low contrast ratio, then these low vision users may literally experience your site as a blank screen.  

The Color Picker helps you verify that your text meets recommended contrast ratio levels:  

1.  Click the **Elements** tab.  
1.  In the **DOM Tree**, select the text element that you want to inspect.  
    
    :::image type="complex" source="../media/accessibility-elements-paragraph-highlight.msft.png" alt-text="Inspect a paragraph in the DOM Tree" lightbox="../media/accessibility-elements-paragraph-highlight.msft.png":::
       Inspect a paragraph in the **DOM Tree**  
    :::image-end:::  
    
1.  In the **Styles** pane, click the color square next to the `color` value of the element.  
    
    :::image type="complex" source="../media/accessibility-elements-styles-paragraph-highlight-color.msft.png" alt-text="The color property of the element" lightbox="../media/accessibility-elements-styles-paragraph-highlight-color.msft.png":::
       The `color` property of the element  
    :::image-end:::  
    
1.  Check the **Contrast Ratio** section of the Color Picker.  One checkmark means that the element meets the [minimum recommendation][W3CContrastMinimum].  Two checkmarks means that it meets the [enhanced recommendation][W3CContrastEnhanced].  
    
    :::image type="complex" source="../media/accessibility-elements-styles-paragraph-highlight-color-picker.msft.png" alt-text="The Contrast Ratio section of the Color Picker shows 2 checkmarks and a value of 13.97" lightbox="../media/accessibility-elements-styles-paragraph-highlight-color-picker.msft.png":::
       The **Contrast Ratio** section of the Color Picker shows 2 checkmarks and a value of `13.97`  
    :::image-end:::  
    
1.  Click the **Contrast Ratio** section to see more information.  A line appears in the visual picker at the top of the Color Picker.  If the current color meets recommendations, then anything on the same side of the line also meets recommendations.  If the current color does not meet recommendations, then anything on the same side also does not meet recommendations.  
    
    :::image type="complex" source="../media/accessibility-elements-styles-paragraph-highlight-color-picker-contrast-ratio-details.msft.png" alt-text="The Contrast Ratio Line in the visual picker" lightbox="../media/accessibility-elements-styles-paragraph-highlight-color-picker-contrast-ratio-details.msft.png":::
       The **Contrast Ratio** Line in the visual picker  
    :::image-end:::  
    
<!--## Feedback   -->  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- image links -->  

[ImageMoreTabsIcon]: ../media/more-tabs-icon.msft.png  

<!-- links -->  

[DevtoolsAccessibilityNavigation]: ./navigation.md "Navigate Microsoft Edge DevTools With Assistive Technology | Microsoft Docs"  
[DevtoolsCssReferenceViewActuallyAppliedElements]: ../css/reference.md#view-only-the-css-that-is-actually-applied-to-an-element "View only the CSS that is actually applied to an element - CSS Reference | Microsoft Docs"  

[ChromeWebStoreAxe]: https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US "axe - Web Accessibility Testing - Chrome Web Store"  

[MDNAccessibilityTree]: https://developer.mozilla.org/docs/Glossary/AOM "Accessibility tree (AOM) | MDN"  
[MDNAccessibility]: https://developer.mozilla.org/docs/Web/Accessibility "Accessibility | MDN"  
[MDNScreenReader]: https://developer.mozilla.org/docs/Glossary/Screen_reader "Screen reader | MDN"  

[W3CContrastEnhanced]: https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced "Contrast (Enhanced) Level AAA | W3C"  
[W3CContrastMinimum]: https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum "Contrast (Minimum) Level AA | W3C"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
