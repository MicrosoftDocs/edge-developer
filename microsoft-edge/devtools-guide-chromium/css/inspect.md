---
description: Learn how to use Microsoft Edge DevTools to analyze HTML pages using the Inspect tool 
title: Inspect Tool in Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 12/16/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# Analyze HTML pages using the Inspect tool 

This article shows you how to use the **Inspect** tool to preview information about and select an element from the current document. You can try it out yourself by checking the [Inspect Demo Page](https://microsoftedge.github.io/DevToolsSamples/inspector/inspector-demo.html).

The **Inspect** tool button (![Inspect](../media/inspect-icon.msft.png)) is in the upper-left corner of DevTools.  When you select the **Inspect** tool button, the button turns blue, indicating that the **Inspect** tool is active.

:::image type="complex" source="images/inspect-tool-button.msft.png" alt-text="The inspect tool button on the top right of the Developer Tools" lightbox="images/inspect-tool-button.msft.png":::
   The inspect tool button on the top right of the Developer Tools
:::image-end:::


Alternatively you press `Control`+`Shift`+`C` (Windows, Linux) or `Command`+`Shift`+`C` (macOS) to activate it. 

## Getting element information from the Inspect overlay

When the **Inspect** tool is active, hovering over any element on the rendered webpage displays the **Inspect** overlay. This overlay displays general and accessibility information about that element.  

:::image type="complex" source="images/inspect-tool-padding-margin.msft.png" alt-text="The inspector overlay showing the information of a heading in the browser":::
   The inspector overlay showing the information of a heading in the browser
:::image-end:::

As you move around the screen, the source view showing the DOM of the document updates and highlights the element you are hovering on in the document tree. 

The **Inspect** overlay shows the following information, depending on the type of element and the styles applied to it:

* The name of the element
* Its dimensions in pixels
* Its color as a hexidecimal value and a color swatch
* Its font settings
* Its margin and padding in pixels

If the element has been positioned using CSS grid or CSS flexbox you get different icons displayed next to its name.

:::image type="complex" source="images/inspect-tool-grid-element.msft.png" alt-text="An element displayed using CSS grid layout showing an extra icon next to its name in the Inspect overlay" lightbox="images/inspect-tool-grid-element.msft.png":::
   An element displayed using CSS grid layout showing an extra icon next to its name in the Inspect overlay
:::image-end:::

:::image type="complex" source="images/inspect-tool-flexbox-element.msft.png" alt-text="An element displayed using CSS flexbox showing an extra icon next to its name in the Inspect overlay" lightbox="images/inspect-tool-flexbox-element.msft.png":::
   An element displayed using CSS flexbox showing an extra icon next to its name in the Inspect overlay
:::image-end:::

The **Accessibility** section of the **Inspect** overlay displays information about text-color contrast, the name and the role of the element reported to assistive technoloy and whether the element is keyboard focusable or not. 

For example, in the demo page, the `Bad Contrast` button shows a warning icon next to the contrast value of 1.77. It also shows that the button is not focusable via keyboard as it is a `DIV` element with a class of button instead of a `BUTTON` element.

:::image type="complex" source="images/inspect-tool-bad-contrast.msft.png" alt-text="Elements without sufficient contrast show a warning icon" lightbox="images/inspect-tool-bad-contrast.msft.png":::
   Elements without sufficient contrast show a warning icon
:::image-end:::

## Inspecting non-accessible elements

Elements that are covered by other elements or have the CSS property of `pointer-events: hidden` are not available to the **Inspect** tool. In the demo page, try to hover over the `Overlay Button` and you will see that the parent element - in this case `div.wrapper` is shown instead.

:::image type="complex" source="images/inspect-tool-element-element-without-pointer-events.msft.png" alt-text="Trying to select an element with pointer `events: none` is not possible." lightbox="images/inspect-tool-element-element-without-pointer-events.msft.png":::
   Trying to select an element with `pointer events: none` is not possible.
:::image-end:::

If you want to inspect elements like that, you need to press `Shift` whilst hovering over elements. There is also a color overlay showing you that you are in an advanced selection mode.

:::image type="complex" source="images/inspect-tool-with-shift.msft.png" alt-text="Pressing the Shift key whilst selecting elements on the page allows you to access elements more elements, even those with a pointer-events: none style setting" lightbox="images/inspect-tool-with-shift.msft.png":::
   Pressing the Shift key whilst selecting elements on the page allows you to access elements more elements, even those with a pointer-events: none style setting
:::image-end:::

## Selecting the element and terminating Inspect mode

If you click on any of the elements, the **Styles** tool shows the CSS applied to the element and the **Inspect** tool deactivates.

:::image type="complex" source="images/inspect-tool-highlighted-styles.msft.png" alt-text="Once you clicked on the element you selected, the Styles tool will show the styles applied to this element" lightbox="images/inspect-tool-highlighted-styles.msft.png":::
   Once you clicked on the element you selected, the Styles tool will show the styles applied to this element
:::image-end:::

