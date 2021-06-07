---
description: To quickly see the tab order of the sections of a page, use the Source Order Viewer in the Accessibility tool, to the right of the Styles tab.
title: Test keyboard support using the Source Order Viewer
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Test keyboard support using the Source Order Viewer

The source order of a document is important for assistive technology, and can be different than the order in which elements appear on the rendered page.  Using CSS, you can re-order page elements in a visual way, but that doesn't mean that assistive technology such as screen readers would represent page elements in the same order.  

To ensure that the document has a logical order, you can use the **Source Order Viewer** to label different page elements with numbers that specify the order in the source code of the document.  The **Source Order Viewer** is in the **Accessibility** tab (near the **Styles** tab).


## Analyzing the order of keyboard access through sections of the page

The [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] has a counterintuitive tabbing order, where keyboard users access the sidebar navigation menu only after tabbing through all the **More** links.  The sidebar navigation menu is meant to be a shortcut to reach deep into the page content.  But because you need to go through the entire page before you reach the sidebar navigation menu, that navigation menu is ineffective for keyboard users.

The `Tab` key order on the demo page is:
1. The **Search** field, then the **go** button for the **Search** field.
1. The **More** button in the **Cats** section, to navigate to a "Cats" webpage.  Then the other **More** buttons, for Dogs, Sheep, Horses, and then Alpacas.
1. The blue links of the sidebar navigation menu: **Cats**, **Dogs**, **Sheep**, **Horses**, and then **Alpacas**.
1. The donation textbox in the donation form.
1. The buttons in the top navigation bar: **Home**, **Adopt a pet**, **Donate**, **Jobs**, and then **About Us**.
1. The browser's top-of-window interface.

The reason for the confusing `Tab` key order is that the order experienced when using a keyboard is determined by the source order of the document.  The order experienced using a keyboard can be modified using the `tabindex` attribute on elements, which takes that element out of the source order.

In the source code of the document, the sidebar navigation menu appears after the main content of the webpage.  CSS was used to position the sidebar navigation menu above most of the main content of the webpage. 

You can test the order of page elements by using the **Source Order Viewer** in the **Accessibility** tab.  The **Source Order Viewer** is an experimental feature. For more information, navigate to [Source Order Viewer](../experimental-features/index.md#source-order-viewer).


To turn on the Source Order Viewer:

1.  In DevTools, in the upper right, select the **Settings** \(![Settings button](../media/settings-button-icon.msft.png)\) button.  

1.  Below **Settings**, select **Experiments**.  

1.  Select the **Source Order Viewer** checkbox.

1.  In the upper-right corner of the **Settings** page, select **X** to close the Settings page.  At the top of DevTools, the message **One or more settings have changed which require a reload to take effect.** is displayed.  Select the **Reload DevTools** button.



To activate and use the Source Order Viewer, with the demo page:

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab.  Then select **F12** to open DevTools.

1.  In the **Elements** tool, to the right of the **Styles** tab, select the **Accessibility** tab.

1.  In the **Source Order Viewer** section, select the **Show source order** checkbox.  In the rendered webpage, numbers appear, indicating the `Tab` order as controlled by the order of lines of code in the source file.

1.  In the DOM tree in the **Elements** tool, select a major layout element, such as the `header` element.  Numeric overlays are now displayed on sections of the rendered page, which indicate the source order of the different elements. 

    :::image type="complex" source="../media/a11y-testing-source-order-viewer.msft.png" alt-text="Activating the Source Order Viewer shows the order of the elements in the source as overlays on the page" lightbox="../media/a11y-testing-source-order-viewer.msft.png":::
        Activating the **Source Order Viewer** shows the order of the elements in the source as overlays on the page
    :::image-end:::
    
1.  Scroll the page to see all of the numeric overlays, including on the page footer section.


## See also

*  [Overview of accessibility testing using DevTools](accessibility-testing-in-devtools.md)


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->
[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html "Accessibility-testing demo webpage | GitHub"
