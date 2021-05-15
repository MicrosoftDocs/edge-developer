---
description: Check text color contrast in the default state by using the Inspect tool's information overlay on the page, which has an Accessibility section that includes Contrast information.
title: Check text-color contrast in the default state using the Inspect tool
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/13/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Check text-color contrast in the default state using the Inspect tool

<!-- Inspect tool: information overlay: Accessibility section: Contrast row -->

Check text color contrast in the default state by using the **Inspect** tool.  The **Inspect** tool's information overlay on the webpage has an **Accessibility** section that includes **Contrast** information.

This article leads up to another, more specialized article: [Verify accessibility during all states of elements][DevtoolsAccessibilityTestInspectStates].


**To check text-color contrast in the default state by using the Inspect tool's information overlay:**

<!-- Inspect tool -->
For elements that have text, the **Inspect** tool's information overlay shows the following:
*  The contrast ratio of text versus background colors.
*  A green check mark icon for elements with enough contrast.
*  A yellow alert icon for elements that don't have enough contrast.

In some cases, contrast is affected by setting the browser to light theme or dark theme.

As an example, the sidebar menu elements of the demo page such as the blue **Cats** button have enough contrast, but the green **Dogs** link in the **Donation status** section does not have enough contrast.  Inspect those elements using the **Inspect** tool, as follows:

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab.  Then select **F12** to open DevTools.

1.  Select the **Inspect** \(![Inspect button](../media/inspect-icon.msft.png)\) button in the top-left corner of DevTools so that the icon is highlighted (blue).

1.  In the rendered webpage, hover over the blue **Cats** button.  The **Inspect** tool's information overlay appears.  In the **Accessibility** section of the information overlay, a green checkmark appears on the **Contrast** row, indicating that this element has enough contrast of text color versus background color.

    :::image type="complex" source="../media/a11y-testing-enough-contrast.msft.png" alt-text="The menu items have enough contrast, as shown in the Inspect tool" lightbox="../media/a11y-testing-enough-contrast.msft.png":::
        The menu items have enough contrast, as shown in the Inspect tool
    :::image-end:::

1.  In the rendered webpage, in the **Donation Status** section, hover over the **Dogs** link.  The **Inspect** tool's information overlay shows an orange exclamation point on the **Contrast** row, indicating that this element doesn't have enough contrast of text versus background colors.

    :::image type="complex" source="../media/a11y-testing-not-enough-contrast.msft.png" alt-text="An element that doesn't have enough contrast, as shown by the warning in the Inspect tool" lightbox="../media/a11y-testing-not-enough-contrast.msft.png":::
        An element that doesn't have enough contrast, as shown by the warning in the Inspect tool
    :::image-end:::


## Ways to inspect text-color contrast in DevTools

There are several DevTools features for inspecting text-color contrast:

*  Use the **Inspect** tool (as an information overlay on the webpage) to check whether an individual page element has enough text-color contrast.  The **Inspect** tool's information overlay includes an **Accessibility** section that has a **Contrast** information row.  The **Inspect** tool only shows text-contrast information for the current state.  This approach is described in the current article.

*  The **Issues** tool automatically reports any color-contrast issues for the entire webpage, when text and background color don't contrast enough.  This approach is described in [Verify that text colors have enough contrast](test-issues-tool.md#verify-that-text-colors-have-enough-contrast).

*  Emulate a non-default state, such as the `hover` state, by using **Toggle Element State** in the **Styles** pane, described in [Verify accessibility during all states of elements](test-inspect-states.md).


## See also

*  [Overview of accessibility testing using DevTools](accessibility-testing-in-devtools.md)


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->
[DevtoolsAccessibilityTestInspectStates]: test-inspect-states.md "Verify accessibility during all states of elements | Microsoft Docs"
[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html "Accessibility-testing demo webpage | GitHub"
