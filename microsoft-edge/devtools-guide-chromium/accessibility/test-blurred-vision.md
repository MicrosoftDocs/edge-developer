---
title: Verify that a page is usable with blurred vision
description: To verify that a webpage is usable with blurred vision, in the Rendering tool, use the Emulate vision deficiencies dropdown list.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 12/04/2023
---
# Verify that a page is usable with blurred vision

<!-- Rendering tool: Emulate vision deficiencies: Blurred vision -->

To simulate blurred vision, in the **Rendering** tool, use the **Emulate vision deficiencies** menu.  When you use this feature with the [accessibility-testing demo webpage](https://microsoftedge.github.io/Demos/devtools-a11y-testing/), you can see that the drop shadow on the text in the upper menu makes it hard to read the menu items.

To check whether a webpage is usable with blurred vision:

1. Open the [accessibility-testing demo webpage](https://microsoftedge.github.io/Demos/devtools-a11y-testing/) in a new window or tab.

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).  DevTools opens.

1. In DevTools, on the Activity Bar, click the **More tools** (![More tools icon](./test-blurred-vision-images/more-tools-icon.png)) button, and then select **Rendering**.

1. In the **Rendering** tool, scroll to the **Emulate vision deficiencies** section.

1. In the **Emulate vision deficiencies** section, select **Blurred vision**.

   ![Simulating a blurred page](./test-blurred-vision-images/testing-simulating-blur.png)

    Notice that the `text-shadow` CSS property makes the text of the menu items difficult to read on the upper menu. For example, see the **Home**, **Adopt a Pet**, and other menu items.

1. In the **Rendering** tool, in **Emulate vision deficiencies**, select **No emulation** to remove the blurred vision simulation.


<!-- ====================================================================== -->
## See also

*  [Emulate vision deficiencies](emulate-vision-deficiencies.md)
