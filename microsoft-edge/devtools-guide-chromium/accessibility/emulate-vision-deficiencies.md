---
title: Emulate vision deficiencies in Microsoft Edge DevTools (color blindness)
description: Emulate vision deficiencies in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
ms.date: 06/07/2021
---
# Emulate vision deficiencies

To better meet the needs of your users with [color vision deficiency](https://www.colourblindawareness.org) (color blindness) or blurred vision, [Microsoft Edge DevTools](../index.md) allows you to simulate blurred vision and specific color vision deficiencies.  The **Emulate vision deficiencies** tool simulates the following categories:

| Color vision deficiency | Details |
|:--- |:--- |
| Blurred vision | The user has difficulty focusing on fine details. |
| Protanopia | The user is unable to perceive any red light. |
| Deuteranopia | The user is unable to perceive any green light. |
| Tritanopia | The user is unable to perceive any blue light. |
| Achromatopsia | The user is unable to perceive any color, which reduces all color to a shade of grey. |


<!-- ====================================================================== -->
## Open the Rendering tool

To simulate a vision deficiency being applied for your web product, open the [Rendering Tools](../rendering-tools/index.md).

1.  To open the Rendering tool, select the `...` menu item in the toolbar.
1.  Select **More tools**.
1.  Select **Rendering**.

    :::image type="content" source="../media/getting-to-the-rendering-tools.msft.png" alt-text="Opening the Rendering tool." lightbox="../media/getting-to-the-rendering-tools.msft.png":::

The **Rendering** menu appears in the drawer.

1.  Scroll down to the `Emulate vision deficiencies` menu item and select the drop-down menu to display the options.

    :::image type="content" source="../media/accessibility-emulate-vision-menu.msft.png" alt-text="The Emulate Vision Deficiencies menu on the Rendering tool." lightbox="../media/accessibility-emulate-vision-menu.msft.png":::

1.  Select an option.

    :::image type="content" source="../media/accessibility-emulate-vision-menu-options.msft.png" alt-text="The Emulate Vision Deficiencies menu options." lightbox="../media/accessibility-emulate-vision-menu-options.msft.png":::

1.  The main window displays the simulation of your chosen option applied to the current page.

    :::image type="content" source="../media/accessibility-blurred-vision-emulation.msft.png" alt-text="Display using Blurred Vision simulation." lightbox="../media/accessibility-blurred-vision-emulation.msft.png":::

    :::image type="content" source="../media/accessibility-achromatopsia-emulation.msft.png" alt-text="Display using Achromatopsia simulation." lightbox="../media/accessibility-achromatopsia-emulation.msft.png":::


<!-- ====================================================================== -->
## Use the Command Menu

As an alternative approach, you can use **Command Menu** to access the different simulations.

1.  Select `Ctrl`+`Shift`+`P` (Windows/Linux) or `Command`+`Shift`+`P` (macOS) to open the **Command Menu**.

    :::image type="content" source="../media/css-console-command-menu-rendering.msft.png" alt-text="The Command Menu." lightbox="../media/css-console-command-menu-rendering.msft.png":::

1.  Type `emulate`, choose what you want to simulate and choose `Enter`.

    :::image type="content" source="../media/accessibility-emulation-command-menu-results.msft.png" alt-text="The different simulation options that are available in the Command Menu." lightbox="../media/accessibility-emulation-command-menu-results.msft.png":::

> [!IMPORTANT]
> The **Emulate vision deficiencies** tools simulate approximations of how a person with each deficiency may see your product.  Each person is different, therefore vision deficiencies vary in severity from person to person.  To better meet the needs of your users, avoid any color combination that may be an issue.  The **Emulate vision deficiencies** tools are not a full accessibility assessment of your product.  Instead, the **Emulate vision deficiencies** tools should  give you a good first step to avoid problems.


<!-- ====================================================================== -->
## See also

*  [Verify that the page is usable with blurred vision](test-blurred-vision.md)
