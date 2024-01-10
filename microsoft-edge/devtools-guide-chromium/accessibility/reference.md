---
title: Accessibility-testing features
description: Webpage accessibility aspects to test, and the corresponding features in Microsoft DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.service: microsoft-edge
ms.subservice: devtools
ms.date: 12/05/2023
---
# Accessibility-testing features

This article lists typical accessibility aspects to test for webpages, and the corresponding features in Microsoft DevTools.


<!-- ====================================================================== -->
## Alt-text for images

| Accessibility aspect to check | Feature of DevTools | Article |
|---|---|---|
| Verify that images have alt text | **Issues** tool > **Accessibility** section of report | [Verify that images have alt text](test-issues-tool.md#verify-that-images-have-alt-text) in _Automatically test a webpage for accessibility issues_ |
| Verify that images have alt text | **Lighthouse** tool > Issues about alt-text | [Test accessibility using Lighthouse](../accessibility/lighthouse.md) |


<!-- ====================================================================== -->
## Keyboard support

| Accessibility aspect to check | Feature of DevTools | Article |
|---|---|---|
| Verify keyboard support | **Inspect** tool > **Accessibility** section of overlay | [Use the Inspect tool to detect accessibility issues by hovering over the webpage](test-inspect-tool.md) and [Analyze HTML pages using the Inspect tool](../css/inspect.md) |
| Verify keyboard support | **Tab**, **Shift+Tab**, and **Enter** keys | [Check for keyboard support by using the Tab and Enter keys](test-tab-enter-keys.md) |
| Verify keyboard support: verify that focus is indicated | **Inspect** tool, **Styles** tab, and **Sources** tool | [Analyze the lack of indication of keyboard focus](test-analyze-no-focus-indicator.md) |
| Verify keyboard support: verify that form buttons can be used with the keyboard | **Inspect** tool, **DOM tree** in the **Elements** tool, and **Event Listeners** tab | [Analyze the lack of keyboard support in a form](test-analyze-no-keyboard-support.md) |
| Verify keyboard support: verify **Tab** key order | **Elements** tool > **Accessibility** tab > **Source Order Viewer** | [Test keyboard support using the Source Order Viewer](test-tab-key-source-order-viewer.md) |
| Verify keyboard support | **Lighthouse** tool > Issues about keyboard support | [Test accessibility using Lighthouse](../accessibility/lighthouse.md) |


<!-- ====================================================================== -->
## Text contrast

| Accessibility aspect to check | Feature of DevTools | Article |
|---|---|---|
| Verify that text has enough contrast (automatically, for the entire page) | **Issues** tool > **Accessibility** section of report | [Verify that text colors have enough contrast](test-issues-tool.md#verify-that-text-colors-have-enough-contrast) in _Automatically test a webpage for accessibility issues_ |
| Verify that text has enough contrast | **Elements** tool > **Styles** tab > **Color Picker** | [Test text-color contrast using the Color Picker](color-picker.md) |
| Verify that text has enough contrast | **Inspect** tool > **Accessibility** section of overlay > **Contrast** row | [Use the Inspect tool to detect accessibility issues by hovering over the webpage](test-inspect-tool.md) and [Analyze HTML pages using the Inspect tool](../css/inspect.md) |
| Verify that text has enough contrast: in the hover state | **Elements** tool > **Styles** tab > **Toggle Element State** (shows **Force element state** checkboxes) | [Verify accessibility of all states of elements](test-inspect-states.md) |
| Verify that text has enough contrast: with dark theme (dark mode) and light theme | **Rendering** tool > **Emulate CSS media feature prefers-color-scheme** | [Check for contrast issues with dark theme and light theme](test-dark-mode.md) |
| Verify that text has enough contrast (automatically, for the entire page) | **Lighthouse** tool > Issues about text contrast | [Test accessibility using Lighthouse](../accessibility/lighthouse.md) |


<!-- ====================================================================== -->
## Screen reader support

| Accessibility aspect to check | Feature of DevTools | Article |
|---|---|---|
| Verify screen reader support: Verify that input fields have labels | **Issues** tool > **Accessibility** section of report | [Verify that input fields have labels](test-issues-tool.md#verify-that-input-fields-have-labels) in _Automatically test a webpage for accessibility issues_ |
| Verify screen reader support | **Inspect** tool > **Accessibility** section of overlay > **Name** and **Role** | [Use the Inspect tool to detect accessibility issues by hovering over the webpage](test-inspect-tool.md) and [Analyze HTML pages using the Inspect tool](../css/inspect.md) |
| Verify screen reader support | **Elements** tool > **Accessibility** tab > **Accessibility Tree** | [Check the Accessibility Tree for keyboard and screen reader support](test-accessibility-tree.md), and [Test accessibility using the Accessibility tab](accessibility-tab.md) |
| Verify screen reader support | **Lighthouse** tool > Issues about screen reader support | [Test accessibility using Lighthouse](../accessibility/lighthouse.md) |


<!-- ====================================================================== -->
## Vision deficiencies

| Accessibility aspect to check | Feature of DevTools | Article |
|---|---|---|
| Verify that the webpage is usable by people with color blindness | **Rendering** tool > **Emulate vision deficiencies** dropdown list | [Verify that a page is usable by people with color blindness](test-color-blindness.md) |
| Verify that the webpage is usable with blurred vision | **Rendering** tool > **Emulate vision deficiencies** dropdown list | [Verify that a page is usable with blurred vision](test-blurred-vision.md) |
| Verify that the webpage is usable with UI animation turned off (reduced motion) | **Rendering** tool > **Emulate CSS media feature prefers-reduced-motion** | [Verify that a page is usable with UI animation turned off](test-reduced-ui-motion.md) |
| Verify that the webpage is usable by people with vision deficiencies | **Lighthouse** tool > Issues about vision deficiencies | [Test accessibility using Lighthouse](../accessibility/lighthouse.md) |


<!-- ====================================================================== -->
## Usable when narrow

| Accessibility aspect to check | Feature of DevTools | Article |
|---|---|---|
| Verify that the webpage layout is usable when narrow | **Device Emulation** tool | [Verify that the webpage layout is usable when narrow](./narrow.md), and [Emulate mobile devices (Device Emulation)](../device-mode/index.md) |


<!-- ====================================================================== -->
## Further automated and manual testing

Testing the accessibility of your website is important to ensure that people with different needs can use your website.  The DevTools features described above are a good start to catch accessibility problems in your products.  These features range from automated checks and manual detail checks to simulation of different states and environments.


#### First, use DevTools automated reports and manual testing

As covered in the tables above, DevTools includes automated accessibility-testing features, such as tools that automatically generate accessibility reports for a webpage, including the **Issues** tool and the **Lighthouse** tool.  You can also use the Assessments feature of Accessibility Insights, per below.

Microsoft Edge, including DevTools, also supports manual accessibility testing, such as: 
* Inspect different parts of the page by using the **Inspect** tool.
* Use the keyboard to navigate the page.
* Look for issues that arise when interacting with the page.
* Look for issues related to changes in display, such as making the window narrow.


#### Perform additional checks

After the tests that are listed above, you may need to perform additional checks, such as:

* Testing when zoomed-in.
* Testing with screen readers.
* Testing with voice recognition.
* Testing in high-contrast mode.


#### Use testers who have different accessibility needs

Ideally, have testers with different accessibility needs use these automated testing features and do manual accessibility testing.

Automated tools can't find all the problems in a product, because many of the accessibility barriers show up only during interactive use.  None of these features can replace a proper round of testing with people that use assistive technologies and following a plan to check for all the required tests.


#### Use Accessibility Insights

You can also use the [Assessments](https://accessibilityinsights.io/docs/en/web/getstarted/assessment/) feature of [Accessibility Insights](https://accessibilityinsights.io).


#### Use webhint in Visual Studio Code

Another way to find out what to do to improve your webpage is to use the [webhint extension for Visual Studio Code](https://aka.ms/webhint4code).  This extension flags the readily detectable accessibility problems in your source code and gives insights on how to fix them.


<!-- ====================================================================== -->
## See also

*  [Navigate DevTools with assistive technology](navigation.md)
*  [Accessibility testing](../../accessibility/test.md)
*  [Accessibility principles and best practices](https://developer.mozilla.org/docs/Web/Accessibility) at MDN
*  [Screen reader](https://developer.mozilla.org/docs/Glossary/Screen_reader) at MDN
