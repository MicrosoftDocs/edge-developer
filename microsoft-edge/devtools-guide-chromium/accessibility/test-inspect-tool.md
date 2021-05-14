---
description: Use the Inspect tool to detect accessibility issues by hovering over the webpage.
title: Use the Inspect tool to detect accessibility issues by hovering over the webpage
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/13/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Use the Inspect tool to detect accessibility issues by hovering over the webpage

<!-- there is also an Inspect tool subsection in article:
Tutorials: Get started with viewing and changing the DOM: View DOM nodes: Inspect a node (https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/dom/index#inspect-a-node)
probably not focused on the Accessibility aspect.
See if any info there to move (or copy) to here (or to other article/bucket)
 -->

The **Inspect** tool displays information about individual elements as you hover over the rendered webpage, including accessibility information.
(In contrast, the **Issues** tool automatically reports issues for the entire webpage.)

The **Inspect** tool button \(![Inspect](../media/inspect-icon.msft.png)\) is in the upper-left corner of DevTools.  When you select the **Inspect** tool button, the button turns blue, indicating that the **Inspect** tool is active.

When the **Inspect** tool is active, when you hover over any element within the rendered webpage, the **Inspect** overlay appears in the rendered webpage, showing general information and accessibility information about the element.  The **Accessibility** section of the **Inspect** overlay displays information about text-color contrast, screen reader text, and keyboard support.

:::image type="complex" source="../media/a11y-testing-basics-inspector-overlay.msft.png" alt-text="The Inspect tool, showing the element's area as a multicolor overlay, and showing the element's details as a large information overlay" lightbox="../media/a11y-testing-basics-inspector-overlay.msft.png":::
    The **Inspect** tool, showing the element's area as a multicolor overlay, and showing the element's details as a large information overlay
:::image-end:::


<!-- Inspect tool: Accessibility section of overlay -->
## Check individual elements for text contrast, screen reader text, and keyboard support

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.

1.  Select the **Inspect** \(![Inspect](../media/inspect-icon.msft.png)\) button in the top-left corner of DevTools so that the icon is highlighted (blue).

    :::image type="complex" source="../media/a11y-testing-basics-inspector.msft.png" alt-text="To turn on the Inspect tool, select the Inspect button" lightbox="../media/a11y-testing-basics-inspector.msft.png":::
        To turn on the **Inspect** tool, select the **Inspect** button
    :::image-end:::

1.  Hover over any element in the rendered demo webpage.  The **Inspect** tool shows an information overlay below the element within the rendered webpage.

    :::image type="complex" source="../media/a11y-testing-basics-inspector-overlay.msft.png" alt-text="The Inspect tool, showing the element's area as a multicolor overlay, and showing the element's details as a large information overlay" lightbox="../media/a11y-testing-basics-inspector-overlay.msft.png":::
        The **Inspect** tool, showing the element's area as a multicolor overlay, and showing the element's details as a large information overlay
    :::image-end:::

The bottom part of the **Inspect** overlay in the webpage has an **Accessibility** section, containing the following:

*   **Contrast** defines whether an element can be understood by people with low vision.  The [contrast ratio][W3CContrastRatio] as defined by the [WCAG Guidelines][WCAG] indicates whether there is enough contrast (a green check mark icon) or not enough (an orange exclamation-point icon).

*   **Name** and **Role** is what assistive technology like screen readers will report about the element.
    *   The `Name` is the text content of an `a` element.  For the element `<a href="/">About Us</a>`, the **Name** shown in the Inspect tool is "About Us".
    *   The `Role` of the element.  This is usually the element name, such as `article`, `img` , `link`, or `heading`.  The `div` and `span` elements are represented as `generic`.

*   **Keyboard-focusable** indicates whether users can reach the element regardless of input device.
    *   A green check mark icon indicates that the element is keyboard-focusable.
    *   A gray circle with diagonal line indicates that the element isn't keyboard-focusable.


## Other information in the Inspect overlay

<!-- general info about the Inspect tool, not particularly focused on accessibility -->

The top part of the **Inspect** overlay in the webpage (above the **Accessibility** section of the overlay) lists applicable details for the element, such as the following:

*   Positioning - if the element is positioned using a flexbox or grid, an appropriate icon \(![Grid layout icon](../media/grid-icon.msft.png)\) is shown.
*   The name of the element, such as `h1`, `h2`, or `div`.
*   The dimensions of the element, in pixels.
*   The color as a color swatch (a small, colored square) and as formatted (such as `#336699`).
*   Font information (size and font families).
*   Margin and padding, in pixels.


## Using the Inspect tool for color highlighting of sub-areas by hovering over the webpage

<!-- general info about the Inspect tool, not particularly focused on accessibility -->

In addition to the information overlay when you hover over the webpage, the **Inspect** tool also provides the same helpful region-coloring behavior as hovering in the DOM tree in the **Elements** tool, but more directly.

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.

1.  Select the **Inspect** button \(![Inspect tool icon](../media/inspect-icon.msft.png)\) in the top-left corner of DevTools, so that the button is highlighted (blue).

1.  Hover over different parts of the rendered demo webpage.  Each element in the webpage now has a multicolor overlay over its entire area, to show any sub-areas that the element contains.

1.  For example, hover over the left margin of the **Cats** section.  DevTools highlights several rectangular portions of the **Cats** section with different colors, making the layout nesting visible.


## Using the Inspect tool to hover over the webpage to highlight the DOM and CSS

<!-- general info about the Inspect tool, not particularly focused on accessibility -->

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.

1.  Select the **Inspect** button \(![the Inspect tool](../media/inspect-icon.msft.png)\) in the top-left corner of DevTools, so that the button is highlighted (blue).

1.  Select the **Elements** tool, to make it visible.

1.  With the **Inspect** tool active, hover over different parts of the rendered webpage.  In the **Elements** tool, the HTML DOM tree automatically expands to show information about the element you hover over.  Hovering doesn't cause the **Styles** pane to update.

1.  Now select any element within the rendered webpage.  The **Elements** tool automatically opens, showing the HTML of the element in the DOM tree, and also showing the applied CSS for the element in the **Styles** pane.  Selecting an element in the rendered webpage turns off the **Inspect** tool.

:::image type="complex" source="../media/a11y-testing-basics-inspector-selected-element.msft.png" alt-text="Details about the selected element are displayed in the Elements tool" lightbox="../media/a11y-testing-basics-inspector-selected-element.msft.png":::
    Details about the selected element are displayed in the **Elements** tool
:::image-end:::

After selecting an element in the rendered page, you could then use the **Accessibility** tab (near the **Styles** tab) to view the **Accessibility Tree** and use the **Source Order Viewer**.


## See also

*  [Overview of accessibility testing using DevTools](accessibility-testing-in-devtools.md)


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->
[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html "Accessibility-testing demo webpage | GitHub"
[W3CContrastRatio]: https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio "contrast ratio | W3C"
[WCAG]: https://www.w3.org/TR/WCAG21/ "Web Content Accessibility Guidelines | W3C"
