---
title: Analyze HTML pages using the Inspect tool
description: How to analyze HTML pages using the Inspect tool in Microsoft Edge DevTools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 12/16/2021
---
# Analyze HTML pages using the Inspect tool

This article shows how to use the **Inspect** tool to preview information about an element, and how to select an element in the current document.  To try out the **Inspect** tool now, open the [Inspect Demo](https://microsoftedge.github.io/DevToolsSamples/inspector/inspector-demo.html) page in a different tab or window while reading this article.


<!-- ====================================================================== -->
## Activating the Inspect tool

The **Inspect** tool button is in the upper-left corner of DevTools.  When you select the **Inspect** tool button, the button turns blue, indicating that the **Inspect** tool is active.

![The Inspect tool button in the upper left of DevTools.](images/inspect-tool-button.msft.png)

Or, press `Control`+`Shift`+`C` (Windows, Linux) or `Command`+`Shift`+`C` (macOS), to activate the **Inspect** tool.


<!-- ====================================================================== -->
## Getting element information from the Inspect overlay

When the **Inspect** tool is active, hovering over any element on the rendered webpage displays the **Inspect** overlay.  The **Inspect** overlay displays general and accessibility information about that element.

![The Inspect tool overlay on a rendered page, showing information about an `h1` heading element.](images/inspect-tool-padding-margin.msft.png)

When you hover over a page element on the rendered page, the DOM tree automatically expands to highlight the element that you are hovering over.

The **Inspect** overlay shows the following information about the element:

* The name of the element.
* The element's dimensions, in pixels.
* The element's color, as a hexadecimal value and a color swatch.
* The element's font settings.
* The element's margin and padding, in pixels.

Which information is shown depends on the type of element and the styles applied to it.  If the element is positioned using CSS grid or CSS flexbox, a different icon appears next to the element's name in the Inspect overlay:

![An element that uses CSS flexbox has an extra icon next to its name in the Inspect overlay.](images/inspect-tool-flexbox-element.msft.png)

The **Accessibility** section of the **Inspect** overlay displays information about:

* Text-color contrast.
* The name and the role of the element that's reported to assistive technology.
* Whether the element is keyboard focusable.

For example, in the [Inspect Demo](https://microsoftedge.github.io/DevToolsSamples/inspector/inspector-demo.html) page, for the `Bad Contrast` button, the **Inspect** overlay has a warning icon next to the contrast value of 1.77.  The **Inspect** overlay also shows that the button isn't focusable via keyboard.  The button can't be navigated to via keyboard, because the button is implemented as a `<div>` element with a class of `button`, instead of being implemented as a `<button>` element.

![Elements that lack sufficient contrast have a warning icon.](images/inspect-tool-bad-contrast.msft.png)


<!-- ====================================================================== -->
## Inspecting non-accessible elements

Elements that have the CSS property of `pointer-events: none` aren't available to the **Inspect** tool.  In the [Inspect Demo](https://microsoftedge.github.io/DevToolsSamples/inspector/inspector-demo.html) page, hover over the `Overlay Button` and you will see that the parent element (`div.wrapper`) is shown instead of the `Overlay Button`.

![An element that has a CSS property of 'pointer events: none' can't be selected.](images/inspect-tool-element-element-without-pointer-events.msft.png)

To inspect elements that have the CSS property of `pointer-events: none`, press `Shift` while hovering over the element.  There's also a color overlay on page layout regions, indicating that you are in an advanced selection mode.

![Pressing the Shift key while selecting elements on the page allows you to select elements that have a CSS style property of 'pointer-events: none'.](images/inspect-tool-with-shift.msft.png)


<!-- ====================================================================== -->
## Selecting the element and terminating Inspect mode

When you click an element in the rendered page:

*  The **Inspect** tool is deactivated.
*  The corresponding DOM node is highlighted.
*  The **Styles** tool shows the CSS that's applied to the element.

![When you click an element in the rendered page, the Styles tool shows the styles that are applied to the element.](images/inspect-tool-highlighted-styles.msft.png)


<!-- ====================================================================== -->
## See also

* [Use the Inspect tool to detect accessibility issues by hovering over the webpage](../accessibility/test-inspect-tool.md)
* [Overview of accessibility testing using DevTools](../accessibility/accessibility-testing-in-devtools.md) - long article that's a superset of the above linked article.
