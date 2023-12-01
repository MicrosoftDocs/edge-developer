---
title: Use the Inspect tool to detect accessibility issues by hovering over the webpage
description: Using the Inspect tool to detect accessibility issues by hovering over the webpage.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 06/07/2021
---
# Use the Inspect tool to detect accessibility issues by hovering over the webpage

The **Inspect** tool displays information about individual elements as you hover over the rendered webpage, including accessibility information.
In contrast, the **Issues** tool automatically reports issues for the entire webpage.

The **Inspect** tool button (![Inspect](./test-inspect-tool-images/inspect-tool-icon-light-theme.png)) is in the upper-left corner of DevTools.  When you click the **Inspect** tool button, the button turns blue, indicating that the **Inspect** tool is active.

When the **Inspect** tool is active, hovering over any element on the rendered webpage displays the **Inspect** overlay. This overlay displays general information and accessibility information about that element.  The **Accessibility** section of the **Inspect** overlay displays information about text-color contrast, screen reader text, and keyboard support.

![The Inspect tool, showing the element's area as a multicolor overlay, and showing the element's details as a large information overlay](./test-inspect-tool-images/a11y-testing-basics-inspector-overlay.png)

The main article about the Inspect tool is [Analyze HTML pages using the Inspect tool](../css/inspect.md).


<!-- ====================================================================== -->
## Check individual elements for text contrast, screen reader text, and keyboard support

<!-- Inspect tool: Accessibility section of overlay -->

1. Open the [accessibility-testing demo webpage](https://microsoftedge.github.io/Demos/devtools-a11y-testing/) in a new window or tab.

1. Right-click anywhere in the webpage and then select **Inspect**.  Or, press **F12**.  DevTools opens next to the webpage.

1. Click the **Inspect** (![Inspect](./test-inspect-tool-images/inspect-tool-icon-light-theme.png)) button in the top-left corner of DevTools so that the icon is highlighted (blue).

   ![To turn on the Inspect tool, click the Inspect button](./test-inspect-tool-images/a11y-testing-basics-inspector.png)

1. Hover over any element in the rendered demo webpage.  The **Inspect** tool shows an information overlay below the element within the rendered webpage.

   ![The Inspect tool, showing the element's layout as a multicolor overlay, and showing the element's details as a large information overlay](./test-inspect-tool-images/a11y-testing-basics-inspector-overlay.png)

The bottom part of the **Inspect** overlay has an **Accessibility** section that contains the following information:

*  **Contrast** defines whether an element can be understood by people with low vision.  The [contrast ratio](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) as defined by the [WCAG Guidelines](https://www.w3.org/TR/WCAG21/) indicates whether there is enough contrast (a green check mark icon) or not enough (an orange exclamation-point icon).

*  **Name** and **Role** are what assistive technology such as screen readers will report about the element.
    *  The **Name** is the text content of an `a` element.  For the element `<a href="/">About Us</a>`, the **Name** shown in the Inspect tool is "About Us".
    *  The **Role** of the element.  This is usually the element name, such as `article`, `img` , `link`, or `heading`.  The `div` and `span` elements are referred to as `generic`.

*  **Keyboard-focusable** indicates whether users can reach the element regardless of input device.
    *  A green check mark icon indicates that the element is keyboard-focusable.
    *  A gray circle with diagonal line indicates that the element isn't keyboard-focusable.


<!-- ====================================================================== -->
## Additional information in the Inspect overlay

<!-- general info about the Inspect tool, not particularly focused on accessibility -->

The top part of the **Inspect** overlay, which is above the **Accessibility** section, lists the following details of the element.

*  Layout type. If the element is positioned using a flexbox or grid, an icon (![Grid layout icon](./test-inspect-tool-images/grid-icon.png)) is displayed.
*  Name of the element, such as `h1`, `h2`, or `div`.
*  The dimensions of the element in pixels.
*  The color as a color swatch (or a small, colored square) and as a string (such as `#336699`).
*  Font information, such as size and font families.
*  Margin and padding in pixels.


<!-- ====================================================================== -->
## Identify nested regions using color highlighting

<!-- general info about the Inspect tool, not particularly focused on accessibility -->

In addition to the information overlay, the **Inspect** tool also provides region-coloring that's similar to hovering in the DOM tree in the **Elements** tool.

1. Open the [accessibility-testing demo webpage](https://microsoftedge.github.io/Demos/devtools-a11y-testing/) in a new window or tab.

1. Right-click anywhere in the webpage and then select **Inspect**.  Or, press **F12**.  DevTools opens next to the webpage.

1. Click the **Inspect** button (![Inspect tool icon](./test-inspect-tool-images/inspect-tool-icon-light-theme.png)) in the top-left corner of DevTools, so that the button is highlighted (blue).

1. Hover over different parts of the rendered demo webpage.

   Each element in the webpage is now displayed with a multicolor overlay. This multicolor overlay can display nested regions inside of an element.

1. For example, hover over the left margin of **Cats**.

   The **Inspect** tool highlights several rectangular portions of the **Cats** section with different colors, showing the layout that results from the CSS flexbox definitions on your webpage:

   ![Multicolor flexbox overlay and information overlay when using the Inspect tool](./test-inspect-tool-images/inspect-tool-flexbox-overlay.png)

If you want to configure the grid overlay or flexbox overlay, in the **Elements** tool, select the **Layout** tab.  See [Inspect CSS Grid](..\css\grid.md).


<!-- ====================================================================== -->
## Use the Inspect tool to hover over the webpage to highlight the DOM and CSS

<!-- general info about the Inspect tool, not particularly focused on accessibility -->

1. Open the [accessibility-testing demo webpage](https://microsoftedge.github.io/Demos/devtools-a11y-testing/) in a new window or tab.

1. Right-click anywhere in the webpage and then select **Inspect**.  Or, press **F12**.  DevTools opens next to the webpage.

1. In DevTools, click the **Inspect** button (![the Inspect tool](./test-inspect-tool-images/inspect-tool-icon-light-theme.png)) in the top-left corner, so that the button is highlighted (blue).

1. Select the **Elements** tool.

1. With the **Inspect** tool active, hover over different parts of the rendered webpage.  In the **Elements** tool, the HTML DOM tree automatically expands to show information about the element you hover over.  Hovering doesn't cause the **Styles** pane to update.

1. In the rendered webpage, click any element.

   The **Elements** tool automatically opens and displays the HTML of the element in the DOM tree.  The **Elements** tool also displays the applied CSS on the element, in the **Styles** pane.  Clicking an element on the rendered webpage turns off the **Inspect** tool.

   ![Details about the clicked element are displayed in the Elements tool](./test-inspect-tool-images/a11y-testing-basics-inspector-selected-element.png)

After clicking an element in the rendered webpage, you can then use the **Accessibility** tab (near the **Styles** tab) to view the **Accessibility Tree** and use the **Source Order Viewer**.


<!-- ====================================================================== -->
## See also

*  [Analyze HTML pages using the Inspect tool](../css/inspect.md)
*  [Inspect a node](../dom/index.md#inspect-a-node)
*  [Check text-color contrast in the default state using the Inspect tool](test-inspect-text-contrast.md)
