---
description: Automatically test a webpage for accessibility issues by using the Accessibility section of the Issues tool.
title: Automatically test a webpage for accessibility issues
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

<!-- 1. ISSUES TOOL: Accessibility section -->
# Automatically test a webpage for accessibility issues

The **Issues** tool includes an **Accessibility** section that automatically reports issues such as low text contrast.  The **Issues** tool is within the Drawer at the bottom of DevTools.  This article uses the accessibility-testing demo webpage to step through using the **Accessibility** section of the **Issues** tool.


## Check the issues reported in the Accessibility section of the Issues tool

There are several ways to open the **Issues** tool:
*  Select the **Issues counter** \(![Issues counter](../media/issues-counter-icon.msft.png)\) in the upper right of DevTools.
*  In the **Elements** tool, in the DOM tree, select a wavy underline on an element.
*  In the Command Menu, type `issues`, and then select **Show Issues**.


## View the Accessibility section of the Issues tool

**To view the Accessibility section of the Issues tool:**

1.  If it's not open already, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.  In the upper right, the **Issues counter** \(![Issues counter](../media/issues-counter-icon.msft.png)\) appears, as a speech-bubble icon along with the number of automatically detected issues.  A different number might appear in your browser, the number you see might update as you use DevTools.

    :::image type="complex" source="../media/a11y-testing-issues-tracker.msft.png" alt-text="The Issues counter in DevTools, indicating how many problems there are in the current document" lightbox="../media/a11y-testing-issues-tracker.msft.png":::
        The **Issues counter** in DevTools, indicating how many problems there are in the current document
    :::image-end:::

1.  Select the **Issues counter**.  The **Issues** tool opens, in the **Drawer** at the bottom of DevTools.

    :::image type="complex" source="../media/a11y-testing-accessibility-issues.msft.png" alt-text="Accessibility warnings displayed in the Issues tool" lightbox="../media/a11y-testing-accessibility-issues.msft.png":::
        Accessibility warnings displayed in the Issues tool
    :::image-end:::

1.  On the **Issues** tab, expand the **Accessibility** section.


<!-- 1. Issues tool: Accessibility section > "Form elements must have labels: Element has no title attribute Element has no placeholder attribute" -->
## Check that input fields have labels

To check that input fields have labels connected to them, use the **Issues** tool, which automatically checks the entire webpage and reports this issue in the **Accessibility** section.

1.  If it's not open already, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.

1.  In the upper right, select the **Issues counter** \(![Issues counter](../media/issues-counter-icon.msft.png)\).  The **Issues** tool opens, in the **Drawer** at the bottom of DevTools.

1.  On the **Issues** tab, expand the **Accessibility** section.

1.  Expand the **Warning** `Form elements must have labels: Element has no title attribute Element has no placeholder attribute`.

1. Select the **Open in Elements** link.

    :::image type="complex" source="../media/a11y-testing-inspect-problematic-element.msft.png" alt-text="Elements tool showing the problematic HTML after selecting the link in the Issues tool" lightbox="../media/a11y-testing-inspect-problematic-element.msft.png":::
        Elements tool showing the problematic HTML after selecting the link in the **Issues** tool
    :::image-end:::

    The **Elements** tool opens, with the element highlighted in the DOM tree.  The **Styles** pane displays the applied CSS rules for the element.  The HTML has a `label` element that doesn't work:

    ```html
    <label>Search</label>
    <input type="search">
    <input type="submit" value="go">
    ```

    This `label` element is used incorrectly, because there is no connection between the `label` element and a particular `input` element.  To connect the `label` element to a specific `input` element, you would need to either:
    *   Nest the `input` element within the `label` element.
    *   In the `label` element, add a `for` attribute that matches an `id` attribute of the `input` element.

1.  You can also test this lack of a connection as follows: in the **Elements** tool, hover over or select the `<label>Search</label>` element in the DOM tree.

    In the webpage, focus only appears on the **Search** label, not on the input textbox.  A validly tagged HTML `label` element would put focus on the `search` input textbox as well as on the **Search** label.

1.  In the **Issues tool**, select the explanatory "Further reading" link.  To open the link in a new tab, **Ctrl**+**click** the link on Windows/Linux, or **Command**+**click** the link on macOS.

    :::image type="complex" source="../media/a11y-testing-more-information-links.msft.png" alt-text="Link on the Issues tab pointing to more in-depth information about the issue" lightbox="../media/a11y-testing-more-information-links.msft.png":::
        Link on the **Issues** tab pointing to more in-depth information about the issue
    :::image-end:::


<!-- 2. Issues tool: Accessibility section > "Images must have alternate text: Element has no title attribute" -->
## Check that images have alt text

Basic accessibility testing requires making sure alternative text (also called _alt text_) is provided for images.

To automatically check whether alt text is provided for images, use the **Issues** tool, which has an **Accessibility** section.  The **Issues** tool is located in the **Drawer** at the bottom of DevTools.

1.  If it's not open already, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.

1.  To open the **Issues** tool, select the **Issues** counter in the upper right of DevTools.

1.  On the **Issues** tab, expand the warning `Images must have alternate text: Element has no title attribute`.  There are four instances of images that lack alt text.

    :::image type="complex" source="../media/a11y-testing-images-without-alt.msft.png" alt-text="The Issues tool reporting images that are missing alternative text" lightbox="../media/a11y-testing-images-without-alt.msft.png":::
        The Issues tool reporting images that are missing alternative text
    :::image-end:::

### See also

* [Images must have alternate text](https://dequeuniversity.com/rules/axe/4.1/image-alt)


<!-- 3. Issues tool: Accessibility section > "Users may have difficulties reading text content due to insufficient color contrast" -->
## Check that text colors have enough contrast

To make sure text colors have enough contrast, use the **Issues** tool, which has an **Accessibility** section.

To automatically check whether text colors have enough contrast, use the **Issues** tool, which has an **Accessibility** section.  The **Issues** tool is located in the **Drawer** at the bottom of DevTools.

1.  If it's not open already, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.

1.  Select the **Issues** counter in the upper right of DevTools.  The **Issues** tool opens.

    You might see warnings that two elements on the demo webpage don't have enough contrast:

    :::image type="complex" source="../media/a11y-testing-contrast-issues.msft.png" alt-text="Contrast problems reported in the Issues tool" lightbox="../media/a11y-testing-contrast-issues.msft.png":::
        Contrast problems reported in the Issues tool
    :::image-end:::

1.  Depending on your settings, the **Issues** tab might have a warning that elements have insufficient color contrast: "Users may have difficulties reading text content due to insufficient color contrast".   If so, expand the warning, and then expand the **Affected resources** section of the warning.  A list of elements appears, showing which elements don't have enough contrast.

1.  Select the `li.high` element.  In the rendered webpage, the **Dogs** link in the **Donate** section is highlighted, displaying a small information overlay.  This is the same overlay that appears when you hover over an element in the DOM tree in the **Elements** tool.

    :::image type="complex" source="../media/a11y-testing-element-with-contrast-issues.msft.png" alt-text="Element in the webpage highlighted after selecting a link in the Affected Resources section" lightbox="../media/a11y-testing-element-with-contrast-issues.msft.png":::
        Element in the webpage highlighted after selecting a link in the **Affected Resources** section
    :::image-end:::


<!-- Issues tool: DOM tree: Wavy lines -->
### Wavy underline in the DOM tree indicates automatically detected issues reported by the Issues tool

The DOM tree in the **Elements** tool flags issues directly in the HTML, by adding a wavy underline.  These are issues that are reported by the **Issues** tool.

1.  When you **Shift+click** any element that has a wavy underline, the **Issues tool** appears.  In the Elements tool, in the DOM tree, select the element `<input type="search">`, which has a wavy line under `input`.  Then select **Shift+click**.

    :::image type="complex" source="../media/a11y-testing-wavy-underlines.msft.png" alt-text="An element that has a wavy underline in the DOM view has an issue; Shift+click the element to view the issue" lightbox="../media/a11y-testing-wavy-underlines.msft.png":::
        An element that has a wavy underline in the DOM view has an issue; **Shift+click** the element to view the issue
    :::image-end:::


## See also

* [Find and fix problems with the Microsoft Edge DevTools Issues tool][DevToolsIssuesTool]


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->
[DevToolsIssuesTool]: ../issues/index.md "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"
[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html "Accessibility-testing demo webpage | GitHub"
