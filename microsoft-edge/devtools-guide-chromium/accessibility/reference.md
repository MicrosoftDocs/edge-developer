---
description: A list of the accessibility-testing features in Microsoft Edge DevTools.
title: Accessibility-testing features in DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
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
# Accessibility-testing features in DevTools

<!-- all the original content has been removed, so the above comment needs to be removed; it was only retained to resolve a merge conflict -->

To test your webpages for accessibility, make a list of accessibility aspects to check, such as the following broad categories:

*  Check for keyboard support.
*  Check for screen reader support.
*  Check for usability with visual impairment.

Then use DevTools features to check those aspects of accessibility, as follows.

# Accessibility reference  

## Accessibility checklist and related DevTools features

<!-- row numbering in the comments is keyed to the order of the links to "detailed walkthrough steps" in the article "Overview of accessibility testing using DevTools" (accessibility-testing-in-devtools.md) -->

| Accessibility check | Feature of DevTools | Article or subheading |
|---|---|---|
| Check accessibility through an automatic report | **Issues** tool > **Accessibility** section of report | <!--1.-->[View the Accessibility section of the Issues tool](test-issues-tool.md#view-the-accessibility-section-of-the-issues-tool) |
| Check that input fields have labels, for screen readers (automatically, for the entire page) | **Issues** tool > **Accessibility** section of report | <!--2.-->[Check that input fields have labels](test-issues-tool.md#check-that-input-fields-have-labels) |
| Check that images have alt text (automatically, for the entire page) | **Issues** tool > **Accessibility** section of report | <!--3.-->[Check that images have alt text](test-issues-tool.md#check-that-images-have-alt-text) |
| Check that text has enough color contrast (automatically, for the entire page) | **Issues** tool > **Accessibility** section of report | <!--4.-->[Check that text colors have enough contrast](test-issues-tool.md#check-that-text-colors-have-enough-contrast) |
| Check that the webpage layout is usable when narrow | **Device Emulation** tool | <!--#n/a.-->[Emulate mobile devices in Microsoft Edge DevTools](../device-mode/index.md) |
| Check accessibility through an automatic report | **Lighthouse** tool | <!--#n/a.-->[Testing accessibility using Lighthouse](lighthouse.md) |
| Check for text color contrast, screen reader support text, and keyboard support | **Inspect** tool > **Accessibility** section of overlay | <!--5.-->[Use the Inspect tool to detect accessibility issues by hovering over the webpage](test-inspect-tool.md) |
| Check for text color contrast, screen reader support text, and keyboard support | **Inspect** tool > **Accessibility** section of overlay | <!--6.-->[Check individual elements for text contrast, screen reader text, and keyboard support](test-inspect-tool.md#check-individual-elements-for-text-contrast-screen-reader-text-and-keyboard-support) |
| Check that text has enough color contrast | **Elements** tool > **Styles** tab > **Color Picker** | <!--#n/a.-->[Testing text-color contrast using the Color Picker](color-picker.md) |
| Check for keyboard support | **Tab**, **Shift+Tab**, and **Enter** keys | <!--8.-->[Check for keyboard support by using the Tab and Enter keys](test-tab-enter-keys.md) |
| Check for keyboard support: check that focus is indicated | **Inspect** tool, **Styles** tab, **Sources** tool | <!--9.-->[Analyze the lack of indication of keyboard focus in a sidebar menu](test-analyze-no-focus-indicator.md) |
| Check for keyboard support: check that form buttons can be used with the keyboard | **Inspect** tool, **Elements** tool: DOM tree, **Event Listeners** tab | <!--10.-->[Analyzing the lack of keyboard support in a form](test-analyze-no-keyboard-support.md) |
| Check for keyboard and screen reader support | **Elements** tool > **Accessibility** tab > **Accessibility Tree** | <!--11.-->[Check the Accessibility Tree for keyboard and screen reader support](test-accessibility-tree.md) |
| Check for keyboard support: check Tab key order | **Elements** tool > **Accessibility** tab > **Source Order Viewer** | <!--12.-->[Test keyboard support using the Source Order Viewer](test-tab-key-source-order-viewer.md) |
| Check for screen reader support | **Elements** tool > **Accessibility** tab > **Accessibility Tree**, **ARIA Attributes**, and **Computed Properties** | <!--#n/a.-->[Testing accessibility using the Accessibility tab](accessibility-tab.md) |
| Check text color contrast in the default state by using the Inspect tool's information overlay | **Inspect** tool > **Accessibility** section of overlay > **Contrast** row | <!--13.-->[Check text-color contrast in the default state using the Inspect tool](test-inspect-text-contrast.md) |
| Check accessibility during all states of elements, such as contrast during hover | **Elements** tool > **Styles** tab > **Toggle Element State** | <!--14.-->[Check accessibility during all states of elements](test-inspect-states.md) |
| Check for contrast issues with dark theme and light theme | **Rendering** tool > **Emulate CSS media feature prefers-color-scheme** | <!--15.-->[Check for contrast issues with dark theme and light theme](test-dark-mode.md) |
| Check that the webpage is usable by people with color blindness | **Rendering** tool > **Emulate vision deficiencies** dropdown list | <!--16.-->[Check that the page is usable by people with color blindness](test-color-blindness.md) |
| Check that the webpage is usable with blurred vision | **Rendering** tool > **Emulate vision deficiencies** dropdown list > **Blurred vision** | <!--17.-->[Check that the page is usable with blurred vision](test-blurred-vision.md) |
| Check that the page is usable with UI animation turned off (reduced motion) | **Rendering** tool > **Emulate CSS media feature prefers-reduced-motion** | <!--18.-->[Check that the page is usable with UI animation turned off](test-reduced-ui-motion.md) |

<!--| (n/a; not a specific accessibility test) | **Inspect** tool > **Accessibility** section of overlay | 7. [Using the Inspect tool to hover over the webpage to highlight the DOM and CSS](test-inspect-tool.md#using-the-inspect-tool-to-hover-over-the-webpage-to-highlight-the-dom-and-css) |-->


## See also

*   [Overview of accessibility testing using DevTools][DevtoolsAccessibilityAccessibilitytestingindevtools]
*   [Navigating Microsoft Edge DevTools With Assistive Technology][DevtoolsAccessibilityNavigation]
*   [Accessibility testing][DevtoolsAccessibilityTest]
*   [screen reader][MDNScreenReader]
*   [Accessibility principles and best practices][MDNAccessibility]


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->  
[DevtoolsAccessibilityTest]: ../../accessibility/test.md "Accessibility testing | Microsoft Docs"
[DevtoolsAccessibilityAccessibilitytestingindevtools]: accessibility-testing-in-devtools.md "Overview of accessibility testing using DevTools | Microsoft Docs"
[DevtoolsAccessibilityNavigation]: ./navigation.md "Navigate Microsoft Edge DevTools With Assistive Technology | Microsoft Docs"  
<!-- external -->
[MDNAccessibility]: https://developer.mozilla.org/docs/Web/Accessibility "Accessibility | MDN"  
[MDNScreenReader]: https://developer.mozilla.org/docs/Glossary/Screen_reader "Screen reader | MDN"  

<!-- the remainder of this file was retained only to resolve a merge conflict, and needs to be removed because all of the original content has been removed from this file -->
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
[KayceBasques]: https://developers.google.com/web/resources/contributors#kayce-basques  
