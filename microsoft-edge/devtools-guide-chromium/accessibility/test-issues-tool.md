---
description: Automatically test a webpage for accessibility issues by using the Accessibility section of the Issues tool.
title: Automatically test a webpage for accessibility issues
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Automatically test a webpage for accessibility issues

The **Issues** tool includes an **Accessibility** section that automatically reports issues such as missing alternative text on images, missing labels on form fields, and insufficient contrast of text colors.  The **Issues** tool is within the **Drawer** at the bottom of DevTools.  This article uses the accessibility-testing demo webpage to step through using the **Accessibility** section of the **Issues** tool.

There are several ways to open the **Issues** tool, such as:
*  Select the **Issues counter** \(![Issues counter](../media/issues-counter-icon.msft.png)\) in the upper right of DevTools.
*  In the **Elements** tool, in the DOM tree, **Shift+click** a wavy underline on an element.
*  In the **Command Menu**, type `issues`, and then select **Show Issues**.


## View the Accessibility section of the Issues tool

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.  In the upper right, the **Issues counter** \(![Issues counter](../media/issues-counter-icon.msft.png)\) appears, as a speech-bubble icon along with the number of automatically detected issues.  A different number might appear in your browser, and the number might update as you use DevTools.

    :::image type="complex" source="../media/a11y-testing-issues-tracker.msft.png" alt-text="The Issues counter in DevTools, indicating how many problems there are in the current document" lightbox="../media/a11y-testing-issues-tracker.msft.png":::
        The **Issues counter** in DevTools, indicating how many problems there are in the current document
    :::image-end:::

1.  Select the **Issues counter**.  The **Issues** tool opens, in the **Drawer** at the bottom of DevTools.

    :::image type="complex" source="../media/a11y-testing-accessibility-issues.msft.png" alt-text="Accessibility warnings displayed in the Issues tool" lightbox="../media/a11y-testing-accessibility-issues.msft.png":::
        Accessibility warnings displayed in the Issues tool
    :::image-end:::

1.  On the **Issues** tab, expand the **Accessibility** section.


## Verify that input fields have labels

To check whether input fields have labels connected to them, use the **Issues** tool, which automatically checks the entire webpage and reports this issue in the **Accessibility** section.

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.

1.  In the upper right, select the **Issues counter** \(![Issues counter](../media/issues-counter-icon.msft.png)\).  The **Issues** tool opens, in the **Drawer** at the bottom of DevTools.

1.  On the **Issues** tab, expand the **Accessibility** section.

1.  Expand the **Warning** `Form elements must have labels: Element has no title attribute Element has no placeholder attribute`.

1. Select the **Open in Elements** link.

    :::image type="complex" source="../media/a11y-testing-inspect-problematic-element.msft.png" alt-text="Elements tool showing the problematic HTML after selecting the link in the Issues tool" lightbox="../media/a11y-testing-inspect-problematic-element.msft.png":::
        Elements tool showing the problematic HTML after selecting the link in the **Issues** tool
    :::image-end:::

    The **Elements** tool opens, with the element highlighted in the DOM tree.  The **Styles** pane displays the applied CSS rules for the element.  The following code is now displayed.

    ```html
    <label>Search</label>
    <input type="search">
    <input type="submit" value="go">
    ```

    In the above code, the `label` element is used incorrectly, because there is no connection between the `label` element and a particular `input` element.  To connect the `label` element to a specific `input` element, use any of the following options.
    *   Nest the `input` element within the `label` element.
    *   In the `label` element, add a `for` attribute that matches an `id` attribute of the `input` element.

    There's also another way to test for lack of connections between elements. In the **Elements** tool, select the `<label>Search</label>` element in the DOM tree.  On the webpage, notice that focus only appears on the **Search** label, and not the input textbox.  The correct implementation would put focus on the `search` input textbox and the **Search** label.

1.  As an example of a correct connection, select the **Other** label on the donation form.  A focus-indicator box correctly appears on the input textbox next to the **Other** label, because there are matching `for` and `id` attribute values.

1.  In the **Issues tool**, select **Further reading** to learn more about the issue.  To open the link in a new tab, **Ctrl**+**click** the link on Windows/Linux, or **Command**+**click** the link on macOS.

    :::image type="complex" source="../media/a11y-testing-more-information-links.msft.png" alt-text="Link on the Issues tab pointing to more in-depth information about the issue" lightbox="../media/a11y-testing-more-information-links.msft.png":::
        Link on the **Issues** tab pointing to more in-depth information about the issue
    :::image-end:::


## Verify that images have alt text

Basic accessibility testing requires making sure alternative text (also called _alt text_) is provided for images.

To automatically check whether alt text is provided for images, use the **Issues** tool, which has an **Accessibility** section.  The **Issues** tool is located in the **Drawer** at the bottom of DevTools.

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.

1.  To open the **Issues** tool, select the **Issues** counter in the upper right of DevTools.

1.  On the **Issues** tab, expand the warning `Images must have alternate text: Element has no title attribute`.  There are four instances of images that lack alt text.

    :::image type="complex" source="../media/a11y-testing-images-without-alt.msft.png" alt-text="The Issues tool reporting images that are missing alternative text" lightbox="../media/a11y-testing-images-without-alt.msft.png":::
        The Issues tool reporting images that are missing alternative text
    :::image-end:::

For more information, navigate to [Images must have alternate text](https://dequeuniversity.com/rules/axe/4.1/image-alt).


## Verify that text colors have enough contrast

To automatically check whether text colors have enough contrast, use the **Issues** tool, which has an **Accessibility** section.  The **Issues** tool is located in the **Drawer** at the bottom of DevTools.

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.

1.  To open the **Issues** tool, select the **Issues** counter in the upper right of DevTools.  You may receive warnings that two elements on the demo webpage don't have enough contrast.

    :::image type="complex" source="../media/a11y-testing-contrast-issues.msft.png" alt-text="Contrast problems reported in the Issues tool" lightbox="../media/a11y-testing-contrast-issues.msft.png":::
        Contrast problems reported in the Issues tool
    :::image-end:::

1.  Depending on your settings, the **Issues** tab might have a warning like **Users may have difficulties reading text content due to insufficient color contrast**.   You can expand that warning, and then expand **Affected resources**.  A list of elements appears with a list of elements that don't have enough contrast.


1.  Select the `li.high` element.  In the rendered webpage, the **Dogs** link in the **Donate** section is highlighted, displaying a small information overlay.  This is the same overlay that appears when you hover over an element in the DOM tree in the **Elements** tool.

    :::image type="complex" source="../media/a11y-testing-element-with-contrast-issues.msft.png" alt-text="Element in the webpage highlighted after selecting a link in the Affected Resources section" lightbox="../media/a11y-testing-element-with-contrast-issues.msft.png":::
        Element in the webpage highlighted after selecting a link in the **Affected Resources** section
    :::image-end:::


### Wavy underlines in the DOM tree indicate automatically detected issues 

The DOM tree in the **Elements** tool flags issues directly in the HTML with wavy underlines.  These issues are reported by the **Issues** tool.  When you **Shift+click** any element with a wavy underline, the **Issues tool** is displayed.

1.  In the **Elements** tool, in the DOM tree, **Shift+click** the element `<input type="search">`, which has a wavy line under `input`.  The **Issues tool** is displayed, and shows the issue for that element.

    :::image type="complex" source="../media/a11y-testing-wavy-underlines.msft.png" alt-text="An element that has a wavy underline in the DOM view has an issue" lightbox="../media/a11y-testing-wavy-underlines.msft.png":::
        An element that has a wavy underline in the DOM view has an issue
    :::image-end:::


## See also

*  [Find and fix problems using the Issues tool][DevToolsIssuesTool]
*  [Overview of accessibility testing using DevTools](accessibility-testing-in-devtools.md)


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->
[DevToolsIssuesTool]: ../issues/index.md "Find and fix problems using the Issues tool | Microsoft Docs"
[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html "Accessibility-testing demo webpage | GitHub"
