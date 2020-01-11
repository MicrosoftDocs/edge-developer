---
title: Accessibility Reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/31/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->  





# Accessibility Reference   



This page is a comprehensive reference of accessibility features in Microsoft Edge DevTools.  
It is intended for web developers who:  

*   Have a basic understanding of DevTools, such as how to open it.  
*   Are familiar with accessibility principles and best practices.  

<!--[A11yPrinciples]: /web/fundamentals/accessibility/ -->  

The purpose of this reference is to help you discover all of the tools available in DevTools that help you examine the accessibility of a page.  

See [Navigating Microsoft Edge DevTools With Assistive Technology][DevtoolsAccessibilityNavigation] if you are looking for help on navigating DevTools with an assistive technology like a screen reader.  

## Overview of accessibility features in Microsoft Edge DevTools   

This section explains how DevTools fits into your overall accessibility toolkit.  

When determining whether a page is accessible, you need to have 2 general questions in mind:  

1.  Am I able to navigate the page with a keyboard or screen reader?  
1.  Are the elements of the page properly marked up for screen readers?  

<!--[ScreenReader]: /web/fundamentals/accessibility/semantics-builtin/#screen_readers  -->  

In general, DevTools should help you fix errors related to question #2, because these errors are easy to detect in an automated fashion.  Question #1 is just as important, but unfortunately DevTools does not help you there.  The only way to find errors related to question #1 is to try using a page with a keyboard or screen reader yourself.  <!--See [How To Do An Accessibility Review][AccessibilityReview] to learn more.  -->  

<!--[AccessibilityReview]: /web/fundamentals/accessibility/how-to-review  -->  

## Audit the accessibility of a page   

In general, use the Audits panel to determine if:  

*   A page is properly marked up for screen readers.  
*   The text elements on a page have sufficient contrast ratios. See also [View the contrast ratio of a text element in the Color Picker](#view-the-contrast-ratio-of-a-text-element-in-the-color-picker).  

To audit a page:  

1.  Go to the URL that you want to audit.  
1.  In DevTools, click the **Audits** tab.  DevTools shows you various configuration options.  
    
    > ##### Figure 1  
    > Configuring audits  
    > ![Configuring audits][ImageConfiguringAudits]  
    
    > [!NOTE]
    > The screenshots in this section were taken with version 69 of Microsoft Edge.  You may check what version you are running at `edge://version`.  The **Audits** panel UI looks different in earlier versions of Microsoft Edge, but the general workflow is the same.  
    
1.  For **Device**, select **Mobile** if you want to simulate a mobile device.  This option changes differently your user agent string and resizes the viewport.  If the mobile version of the page displays differently than the desktop version, this option could have a significant effect on the results of your audit.  
1.  In the **Audits** section, make sure that **Accessibility** is enabled.  Disable the other categories if you want to exclude them from your report.  Leave them enabled if you want to discover other ways to improve the quality of your page.  
1.  The **Throttling** section lets you throttle the network and CPU, which is useful when analyzing load performance.  This option should be irrelevant to your accessibility score, so you may use whatever you prefer.  
1.  The **Clear Storage** checkbox lets you clear all storage before loading the page, or preserve storage between page loads.  This option is also probably irrelevant to your accessibility score, so you may use whatever you prefer.  
1.  Click **Run Audits**. After 10 to 30 seconds, DevTools provides a report.  Your report gives you various tips on how to improve the accessibility of the page.  
    
    > ##### Figure 2  
    > A report  
    > ![A report][ImageReport]  
    
1.  Click an audit to learn more about it.  
    
    > ##### Figure 3  
    > More information about an audit  
    > ![More information about an audit][ImageAttributes]  
    
1.  Click **Learn More** to view the documentation of that audit.
    
    > ##### Figure 4  
    > Viewing the documentation of an audit  
    > ![Viewing the documentation of an audit][ImageAuditDocumentation]  
    
<!--  

### See also: aXe extension   

You may prefer to use the [aXe extension][ChromeWebStoreAxe] rather than the **Audits** panel.  
They generally provide the same information, since aXe is the underlying engine that powers the Audits panel. The aXe extension has a different UI and describes audits slightly differently.  
One advantage that the aXe extension has over the **Audits** panel is that it lets you inspect and highlight failing nodes.  

> ##### Old Figure 5  
> The aXe extension  
> ![The aXe extension][ImageAxeExtension]  

-->

## The Accessibility pane   

The **Accessibility** pane is where you view the accessibility tree, ARIA attributes, and computed accessibility properties of DOM nodes.  

To open the **Accessibility** pane:  

1.  Click the **Elements** tab.  
1.  In the **DOM Tree**, select the element which you want to inspect.  
1.  Click the **Accessibility** tab.  This tab may be hidden behind the **More Tabs** ![More Tabs][ImageMoreTabsIcon] button.  

> ##### Figure 5  
> Inspecting the `h1` element of the DevTools homepage in the **Accessibility** pane  
> ![Inspecting the h1 element of the DevTools homepage in the Accessibility pane][ImageA11yPane]  

### View the position of an element in the accessibility tree   

The accessibility tree is a subset of the DOM tree.  It only contains elements from the DOM tree that are relevant and useful for displaying the contents of a page in a screen reader.  

<!--[AccessibilityTree]: /web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree  -->  

Inspect the position of an element in the accessibility tree from the [Accessibility pane](#the-accessibility-pane).  

> ##### Figure 6  
> The Accessibility Tree section  
> ![images/a11y-tree.msft.png][ImageAllyTree]  

### View the ARIA attributes of an element   

ARIA attributes ensure that screen readers have all of the information that they need in order to properly represent the contents of a page.  

View the ARIA attributes of an element in the [Accessibility pane](#the-accessibility-pane).  

> ##### Figure 7  
> The ARIA Attributes section  
> ![The ARIA Attributes section][ImageAriaAttributesSection  

### View the computed accessibility properties of an element   

> [!NOTE]
> If you are looking for computed CSS properties, see the [Computed tab][DevtoolsCssReferenceViewActuallyAppliedElements].  

Some accessibility properties are dynamically calculated by the browser.  These properties are displayed in the **Computed Properties** section of the **Accessibility** pane.  

View the computed accessibility properties of an element in the [Accessibility pane](#the-accessibility-pane).  

> ##### Figure 8
> The Computed (Accessibility) Properties section  
> ![The Computed (Accessibility) Properties section][ImageComputedA11yPropertiesSection]  

## View the contrast ratio of a text element in the Color Picker   

Some people with low vision do not see areas as very bright or very dark.  Everything tends to appear at about the same brightness, which makes it hard to distinguish outlines and edges.  
Contrast ratio measures the difference in brightness between the foreground and background of text.  If your text has a low contrast ratio, then these low vision users may literally experience your site as a blank screen.  

The Color Picker helps you verify that your text meets recommended contrast ratio levels:  

1.  Click the **Elements** tab.  
1.  In the **DOM Tree**, select the text element that you want to inspect.  
    
    > ##### Figure 9  
    > Inspecting a paragraph in the DOM Tree  
    > ![Inspecting a paragraph in the DOM Tree][ImageInspectDomTree]  
    
1.  In the **Styles** pane, click the color square next to the `color` value of the element.  
    
    > ##### Figure 10  
    > The `color` property of the element  
    > ![The color property of the element][ImageColorElement]  
    
1.  Check the **Contrast Ratio** section of the Color Picker.  One checkmark means that the element meets the [minimum recommendation][W3CContrastMinimum].  
    Two checkmarks means that it meets the [enhanced recommendation][W3CContrastEnhanced].
    
    > ##### Figure 11  
    > The Contrast Ratio section of the Color Picker shows 2 checkmark and a value of `16.10`  
    > ![The Contrast Ratio section of the Color Picker shows 2 checkmarks and a value of 16.10][ImageColorPickerContrastRatio]  
    
1.  Click the **Contrast Ratio** section to see more information.  A line appears in the visual picker at the top of the Color Picker.  If the current color meets recommendations, then anything on the same side of the line also meets recommendations.  If the current color does not meet recommendations, then anything on the same side also does not meet recommendations.  
    
    > ##### Figure 12  
    > The Contrast Ratio Line in the visual picker  
    > ![The Contrast Ratio Line in the visual picker][ImageContrastRatioLine]  

## Feedback 



<!-- image links -->  

[ImageMoreTabsIcon]: images/shared/more-tabs-icon.msft.png  

[ImageConfiguringAudits]: images/config.msft.png "Figure 1: Configuring audits"  
[ImageReport]: images/report.msft.png "Figure 2: A figure"  
[ImageAttributes]: imgs/attributes.msft.png "Figure 3: More information about an audit"  
[ImageAuditDocumentation]: images/documentation.msft.png "Figure 4: Viewing the documentation of an audit"  
<!--[ImageAxeExtension]: images/aXe.msft.png "Old Figure 5: The aXe extension"  -->
[ImageA11yPane]: images/a11y-pane.msft.png "Figure 5: Inspecting the h1 element of the DevTools homepage in the Accessibility pane"  
[ImageAllyTree]: imgs/a11y-tree.msft.png "Figure 6: The Accessibility Tree section"  
[ImageAriaAttributesSection]: images/aria.msft.png "Figure 7: The ARIA Attributes section"  
[ImageComputedA11yPropertiesSection]: images/computed-a11y.msft.png "Figure 8: The Computed (Accessibility) Properties section"  
[ImageInspectDomTree]: images/inspect.msft.png "Figure 9: Inspecting a paragraph in the DOM Tree"  
[ImageColorElement]: images/color.msft.png "Figure 10: The color property of the element"  
[ImageColorPickerContrastRatio]: images/color-picker.msft.png "Figure 11: The Contrast Ratio section of the Color Picker shows 2 checkmarks and a value of 16.10"  
[ImageContrastRatioLine]: images/contrast-ratio-line.msft.png "Figure 12: The Contrast Ratio Line in the visual picker"  

<!-- links -->  

[DevtoolsAccessibilityNavigation]: navigation.md "Navigate Microsoft Edge DevTools With Assistive Technology"  
[DevtoolsCssReferenceViewActuallyAppliedElements]: ../css/reference.md#view-only-the-css-that-is-actually-applied-to-an-element "View only the CSS that is actually applied to an element - CSS Reference"  

<!--[ChromeWebStoreAxe]: https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US "axe - Web Accessibility Testing - Chrome Web Store"  -->  

[W3CContrastEnhanced]: https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced "Contrast (Enhanced)
Level AAA | W3C"  
[W3CContrastMinimum]: https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum "Contrast (Minimum)
Level AA | W3C"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: http://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
