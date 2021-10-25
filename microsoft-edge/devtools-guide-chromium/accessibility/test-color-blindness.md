---
description: Check that webpages are usable by people with color blindness using the Emulate Vision Deficiencies dropdown list in the Rendering tool.
title: Verify that the page is usable by people with color blindness
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Verify that the page is usable by people with color blindness

<!-- Rendering tool: Emulate vision deficiencies: Protanopia -->

To check that a webpage is usable by people with color blindness, in the **Rendering** tool, use the **Emulate vision deficiencies** dropdown list.

On the accessibility-testing demo webpage, the different donation states use color as the only means of differentiation.
*  Green means a high amount of donations have been received.
*  Yellow means a medium amount of donations have been received.
*  Red means a low amount of donations have been received.

But you can't expect all of your users to experience these colors as intended.  By using the **Emulate vision deficiencies** feature of the **Rendering** tool, you can find out that this design is not good enough, by simulating how people with different vision would perceive your design.


To check whether a webpage is usable by people with color blindness:

1.  Open the [accessibility-testing demo webpage](https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html) in a new tab of the browser, and then select **F12** to open DevTools.

1.  Select **Esc** to open the Drawer at the bottom of DevTools.  Select the **+** icon at the top of the Drawer to see the list of tools, and then select **Rendering**.

1.  In the **Emulate vision deficiencies** dropdown list, select **Protanopia**.  _Protanopia_ is reduced sensitivity to red light, making it hard to differentiate green, red, and yellow.

    :::image type="complex" source="../media/a11y-testing-simulating-protanopia.msft.png" alt-text="Showing the document as someone with protanopia would see it" lightbox="../media/a11y-testing-simulating-protanopia.msft.png":::
        Showing the document as someone with protanopia would see it
    :::image-end:::

1.  In the **Rendering** tool, below **Emulate vision deficiencies**, select **No emulation** to remove the simulation.


<!-- ====================================================================== -->
## See also

*  [Emulate vision deficiencies](./emulate-vision-deficiencies.md) - Defines the items in the **Emulate vision deficiencies** dropdown list, including Protanopia, Deuteranopia, Tritanopia, and Achromatopsia.
*  [Overview of accessibility testing using DevTools](accessibility-testing-in-devtools.md)
