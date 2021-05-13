---
description: To check that a webpage is usable with blurred vision, in the Rendering tool, from the Emulate vision deficiencies dropdown list, select Blurred vision.
title: Check that the page is usable with blurred vision
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Check that the page is usable with blurred vision

<!-- Rendering tool: Emulate vision deficiencies: Blurred vision -->

To check that a webpage is usable with blurred vision, in the **Rendering** tool, from the **Emulate vision deficiencies** dropdown list, select **Blurred vision**.

To simulate blurred vision, in the **Rendering** tool, use the **Emulate vision deficiencies** menu.  When you this feature with the accessibility-testing demo webpage, you can see that the drop shadow on the text in the upper menu makes it hard to read the menu items.

**To check that a webpage is usable with blurred vision:**

1.  If it's not open already, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.

1.  Select **Esc** to open the Drawer at the bottom of DevTools.  Select the **+** icon at the top of the Drawer to see the list of tools, and then select **Rendering**.  The Rendering tool appears.

1.  In the **Emulate vision deficiencies** dropdown list, select **Blurred vision**.

    :::image type="complex" source="../media/a11y-testing-simulating-blur.msft.png" alt-text="Simulating a blurred page can show accessibility issues" lightbox="../media/a11y-testing-simulating-blur.msft.png":::
        Simulating a blurred page can show accessibility issues
    :::image-end:::

    Now you can see that the `text-shadow` CSS property on the text in the upper menu (**Home**, **Adopt a Pet**...) makes it hard to read the menu items.
    
1.  In the **Rendering** tool, below **Emulate vision deficiencies**, select **No emulation**.


## See also

*  [Emulate vision deficiencies](emulate-vision-deficiencies.md)


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->
[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html "Accessibility-testing demo webpage | GitHub"
