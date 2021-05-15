---
description: A list of the accessibility-testing features in Microsoft Edge DevTools.
title: Accessibility-testing features in DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/13/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Accessibility-testing features in DevTools

To test your webpages for accessibility, make a list of accessibility aspects to check, and then use the relevant DevTools features to check each aspect.

<!-- row numbering in the comments is keyed to the order of the links to "detailed walkthrough steps" in the article "Overview of accessibility testing using DevTools" (accessibility-testing-in-devtools.md) -->

| Accessibility aspect to check | Feature of DevTools | Article or subheading |
|---|---|---|
| Verify that images have alt text | **Issues** tool > **Accessibility** section of report | <!--3.-->[Verify that images have alt text](test-issues-tool.md#verify-that-images-have-alt-text) |
| Verify keyboard support | **Inspect** tool > **Accessibility** section of overlay | <!--5.-->[Use the Inspect tool to detect accessibility issues by hovering over the webpage](test-inspect-tool.md) |
| Verify keyboard support | `Tab`, `Shift+Tab`, and `Enter` keys | <!--8.-->[Check for keyboard support by using the Tab and Enter keys](test-tab-enter-keys.md) |
| Verify keyboard support: verify that focus is indicated | **Inspect** tool; **Styles** tab; and **Sources** tool | <!--9.-->[Analyze the lack of indication of keyboard focus in a sidebar menu](test-analyze-no-focus-indicator.md) |
| Verify keyboard support: verify that form buttons can be used with the keyboard | **Inspect** tool; **Elements** tool: **DOM tree**; and **Event Listeners** tab | <!--10.-->[Analyze the lack of keyboard support in a form](test-analyze-no-keyboard-support.md) |
| Verify keyboard support: verify `Tab` key order | **Elements** tool > **Accessibility** tab > **Source Order Viewer** | <!--12.-->[Test keyboard support using the Source Order Viewer](test-tab-key-source-order-viewer.md) |
| Verify that text has enough contrast (automatically, for the entire page) | **Issues** tool > **Accessibility** section of report | <!--4.-->[Verify that text colors have enough contrast](test-issues-tool.md#verify-that-text-colors-have-enough-contrast) |
| Verify that text has enough contrast | **Elements** tool > **Styles** tab > **Color Picker** | <!--#n/a.-->[Testing text-color contrast using the Color Picker](color-picker.md) |
| Verify that text has enough contrast | **Inspect** tool > **Accessibility** section of overlay > **Contrast** row | <!--5.-->[Use the Inspect tool to detect accessibility issues by hovering over the webpage](test-inspect-tool.md) |
| Verify that text has enough contrast: in the default state | **Inspect** tool > **Accessibility** section of overlay > **Contrast** row | <!--13.-->[Check text-color contrast in the default state using the Inspect tool](test-inspect-text-contrast.md) |
| Verify that text has enough contrast: in the hover state | **Elements** tool > **Styles** tab > **Toggle Element State** | <!--14.-->[Verify accessibility during all states of elements](test-inspect-states.md) |
| Verify that text has enough contrast: with dark theme (dark mode) and light theme | **Rendering** tool > **Emulate CSS media feature prefers-color-scheme** | <!--15.-->[Check for contrast issues with dark theme and light theme](test-dark-mode.md) |
| Verify screen reader support: Verify that input fields have labels | **Issues** tool > **Accessibility** section of report | <!--2.-->[Verify that input fields have labels](test-issues-tool.md#verify-that-input-fields-have-labels) |
| Verify screen reader support | **Inspect** tool > **Accessibility** section of overlay > **Name** and **Role** | <!--5.-->[Use the Inspect tool to detect accessibility issues by hovering over the webpage](test-inspect-tool.md) |
| Verify screen reader support | **Elements** tool > **Accessibility** tab > **Accessibility Tree** | <!--11.-->[Check the Accessibility Tree for keyboard and screen reader support](test-accessibility-tree.md) (uses the demo page); also <!--#n/a.-->[Testing accessibility using the Accessibility tab](accessibility-tab.md) |
| Verify that the webpage is usable by people with color blindness | **Rendering** tool > **Emulate vision deficiencies** dropdown list | <!--16.-->[Verify that the page is usable by people with color blindness](test-color-blindness.md) |
| Verify that the webpage is usable with blurred vision | **Rendering** tool > **Emulate vision deficiencies** dropdown list | <!--17.-->[Verify that the page is usable with blurred vision](test-blurred-vision.md) |
| Verify that the webpage is usable with UI animation turned off (reduced motion) | **Rendering** tool > **Emulate CSS media feature prefers-reduced-motion** | <!--18.-->[Verify that the page is usable with UI animation turned off](test-reduced-ui-motion.md) |
| Verify that the webpage layout is usable when narrow | **Device Emulation** tool | <!--#n/a.-->[Emulate mobile devices in Microsoft Edge DevTools](../device-mode/index.md) |

<!--| (n/a; not a specific accessibility test) | **Inspect** tool > **Accessibility** section of overlay | 7. [Using the Inspect tool to hover over the webpage to highlight the DOM and CSS](test-inspect-tool.md#using-the-inspect-tool-to-hover-over-the-webpage-to-highlight-the-dom-and-css) |-->


## See also

*   [Overview of accessibility testing using DevTools][DevtoolsAccessibilityAccessibilitytestingindevtools]
*   [Navigate Microsoft Edge DevTools with assistive technology][DevtoolsAccessibilityNavigation]
*   [Accessibility testing][DevtoolsAccessibilityTest]
*   [Accessibility principles and best practices][MDNAccessibility]
*   [screen reader][MDNScreenReader]


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->  
[DevtoolsAccessibilityTest]: ../../accessibility/test.md "Accessibility testing | Microsoft Docs"
[DevtoolsAccessibilityAccessibilitytestingindevtools]: accessibility-testing-in-devtools.md "Overview of accessibility testing using DevTools | Microsoft Docs"
[DevtoolsAccessibilityNavigation]: ./navigation.md "Navigate Microsoft Edge DevTools with assistive technology | Microsoft Docs"  
<!-- external -->
[MDNAccessibility]: https://developer.mozilla.org/docs/Web/Accessibility "Accessibility | MDN"  
[MDNScreenReader]: https://developer.mozilla.org/docs/Glossary/Screen_reader "Screen reader | MDN"  
