---
description: To quickly see the tab order of the sections of a page, use the Source Order Viewer in the Accessibility tool, to the right of the Styles tab.
title: Test keyboard support using the Source Order Viewer
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Test keyboard support using the Source Order Viewer

<!-- Accessibility tool: Source Order Viewer -->
To quickly see the tab order of the sections of a webpage, use the **Source Order Viewer** in the **Accessibility** tab, to the right of the **Styles** tab.

## Analyzing the order of the keyboard access through sections of the page

The accessibility-testing demo webpage has a counterintuitive tabbing order, where keyboard users access the sidebar navigation menu only after tabbing through all the **More** links.  The sidebar navigation menu is meant to be a shortcut to reach deep into the page content.  But because you need to go through the entire page before you reach the sidebar navigation menu, that navigation menu is ineffective for keyboard users.

The **Tab** order on the demo page is:
1. The **Search** field, then the **go** button for the Search field.
1. The **More** button in the **Cats** section, to navigate to a "Cats" webpage.  Then the other **More** buttons, for Dogs, Sheep, Horses, and then Alpacas.
1. The blue buttons in the sidebar navigation menu: **Cats**, **Dogs**, **Sheep**, **Horses**, and then **Alpacas**.
1. The donation textbox in the donation form.
1. The buttons in the top navigation bar: **Home**, **Adopt a pet**, **Donate**, **Jobs**, and then **About Us**.
1. The browser's top-of-window interface.

The reason for the confusing **Tab** key order after the **More** buttons is that the source order of the document determines the order of keyboard access.  In the source code of the document, the sidebar navigation menu with blue buttons appears _after_ the main content of the webpage.  The sidebar navigation menu is only rendered above most of the main content of the webpage because the sidebar navigation menu has been positioned using CSS.

You can test issues with **Tab** key order by using the **Source Order Viewer** in the **Accessibility** tab.  The **Source Order Viewer** is an experimental feature; for more information, see [Source Order Viewer](../experimental-features/index.md#source-order-viewer).

**To activate and use the Source Order Viewer:**

1.  If it's not open already, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab.  Then select **F12** to open DevTools.

1.  In DevTools, in the upper right, select the **Settings** \(![Settings button](../media/settings-button-icon.msft.png)\) button.  The **Settings** page of DevTools appears.

1.  Below **Settings**, select **Experiments**.  The **Experiments** settings page appears.

1.  Select the **Source Order Viewer** checkbox.

1.  In the upper-right corner of the **Settings** page, select **X** to close the Settings page.  At the top of DevTools, a message appears: "One or more settings have changed which require a reload to take effect."

1.  Select the **Reload DevTools** button.

1.  In the **Elements** tool, to the right of the **Styles** tab, select the **Accessibility** tab.

1.  In the **Source Order Viewer** section, select the **Show source order** checkbox.  In the rendered webpage, numbers appear, indicating the **Tab** order as controlled by the order of lines of code in the source file.

1.  In the DOM tree in the **Elements** tool, select a major layout element, such as the `header` element.  Numeric overlays now appear on sections of the rendered page, showing you the source order without having to navigate around using a keyboard:

    :::image type="complex" source="../media/a11y-testing-source-order-viewer.msft.png" alt-text="Activating the Source Order Viewer shows the order of the elements in the source as overlays on the page" lightbox="../media/a11y-testing-source-order-viewer.msft.png":::
        Activating the **Source Order Viewer** shows the order of the elements in the source as overlays on the page
    :::image-end:::
    
1.  Scroll the page to see all of the numeric overlays, including on the page footer section.


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->
[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html "Accessibility-testing demo webpage | GitHub"
