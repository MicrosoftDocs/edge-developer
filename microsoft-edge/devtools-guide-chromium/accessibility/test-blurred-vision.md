---
description: To verify that a webpage is usable with blurred vision, in the Rendering tool, use the Emulate vision deficiencies dropdown list.
title: Verify that the page is usable with blurred vision
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Verify that the page is usable with blurred vision

<!-- Rendering tool: Emulate vision deficiencies: Blurred vision -->

To simulate blurred vision, in the **Rendering** tool, use the **Emulate vision deficiencies** menu.  When you use this feature with the demo webpage, you can see that the drop shadow on the text in the upper menu makes it hard to read the menu items.

To check whether a webpage is usable with blurred vision:

1.  Open the [accessibility-testing demo webpage](https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html) in a new tab of the browser, and then select **F12** to open DevTools.

1.  Select **Esc** to open the Drawer at the bottom of DevTools.  Select the **+** icon at the top of the Drawer to display the list of tools, and then select **Rendering**.

1.  In the **Emulate vision deficiencies** dropdown list, select **Blurred vision**.

    :::image type="complex" source="../media/a11y-testing-simulating-blur.msft.png" alt-text="Simulating a blurred page" lightbox="../media/a11y-testing-simulating-blur.msft.png":::
        Simulating a blurred page
    :::image-end:::

    Notice that the `text-shadow` CSS property makes the text of the menu items difficult to read on the upper menu. For example, review the **Home**, **Adopt a Pet**, and other menu items.

1.  In the **Rendering** tool, in **Emulate vision deficiencies**, select **No emulation** to remove the blurred vision simulation.


<!-- ====================================================================== -->
## See also

*  [Emulate vision deficiencies](emulate-vision-deficiencies.md)
*  [Overview of accessibility testing using DevTools](accessibility-testing-in-devtools.md)
