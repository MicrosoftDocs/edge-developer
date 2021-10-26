---
description: Checking the Accessibility Tree for keyboard and screen reader support.
title: Check the Accessibility Tree for keyboard and screen reader support
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Check the Accessibility Tree for keyboard and screen reader support

<!-- Accessibility tab: Accessibility Tree -->

Several DevTools features check for keyboard and screen reader support.  Using the **Inspect** tool to check the accessibility of each page element individually can become pretty time-consuming.  An alternative way to check a webpage is to use the **Accessibility Tree**.  The **Accessibility Tree** indicates what information the page provides to assistive technology such as screen readers.

The **Accessibility Tree** is a subset of the DOM tree, which contains elements from the DOM tree that are relevant and useful for displaying the contents of a page in a screen reader.  The **Accessibility Tree** is in the **Accessibility** tab of the **Elements** tool (near the **Styles** tab).

To explore using the Accessibility Tree with the demo page:

1.  Open the [accessibility-testing demo webpage](https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html) in a new tab.  Then select **F12** to open DevTools.

1.  Select the **Inspect** (![the Inspect icon](../media/inspect-icon.msft.png)) button in the top-left corner of DevTools so that the button is highlighted (blue).

1.  In the rendered webpage, in the **Donation** section, hover over the **100** button.  The **Inspect** tool overlay appears.

1.  In the rendered webpage, select the **100** button.  In DevTools, the **Elements** tool is displayed.  The DOM tree shows the `div` element for the **100** button.  The **Styles** pane shows the CSS settings for the element.

1.  To the right of the **Styles** tab, select the **Accessibility** tab.  The **Accessibility Tree** for the element is displayed, and is expanded.

:::image type="complex" source="../media/a11y-testing-accessibility-tree.msft.png" alt-text="Donation form button in the Accessibility Tree tool" lightbox="../media/a11y-testing-accessibility-tree.msft.png":::
    Donation form button in the Accessibility Tree tool
:::image-end:::

Any element in the tree that doesn't have a name, or has a role of `generic` (such as the `div` element) is a problem, because that element won't be available to keyboard users, or to users who are using assistive technology.


<!-- ====================================================================== -->
## See also

*  [View the position of an element in the Accessibility Tree](accessibility-tab.md#view-the-position-of-an-element-in-the-accessibility-tree)
*  [Overview of accessibility testing using DevTools](accessibility-testing-in-devtools.md)
