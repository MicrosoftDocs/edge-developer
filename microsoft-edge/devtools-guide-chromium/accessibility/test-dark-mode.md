---
description: Check for contrast issues with dark theme and light theme (for dark mode and light mode) using the \"Emulate CSS media feature prefers-color-scheme\" dropdown list in the Rendering tool.
title: Check for contrast issues with dark theme and light theme
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Check for contrast issues with dark theme and light theme

<!-- Rendering tool: Emulate CSS media feature prefers-color-scheme -->

When testing color accessibility, there could be different display color themes that you need to test for contrast issues.

Most operating systems come with a dark mode and a light mode.  Your webpage can react to this operating system setting, by using a CSS media query.  You can test these themes and test your CSS media query without having to change your operating system setting, by using the `prefers-color-scheme` CSS options in the **Rendering** tool.

As an example, the accessibility-testing demo page includes a light theme and a dark theme.  The demo page inherits the dark or light theme setting from the operating system.  If we use DevTools to simulate the operating system being set to a light scheme and then refresh the demo webpage, the **Issues** tool shows six color-contrast problems instead of two.  (You might see different numbers.)


To emulate a user's selection of preferred color theme:

1.  Open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.

1.  Select **Esc** to open the Drawer at the bottom of DevTools.  Select the **+** icon at the top of the Drawer to see the list of tools, and then select **Rendering**.  The Rendering tool appears.

1.  In the **Emulate CSS media feature prefers-color-scheme** dropdown list, select **prefers-color-scheme: light**.      The webpage is re-rendered using `light-theme.css`.


    :::image type="complex" source="../media/a11y-testing-simulating-light-mode.msft.png" alt-text="Using the Rendering tool to simulate a light mode and triggering the other theme of the document" lightbox="../media/a11y-testing-simulating-light-mode.msft.png":::
        Using the Rendering tool to simulate a light mode and triggering the other theme of the document
    :::image-end:::


1.  Select the **Issues** tool, and then expand the **Accessibility** section.  Depending on various factors, you might get `Insufficient color contrast` warnings. Notice in **AFFECTED RESOURCES** there are 6 elements with insufficient color contrast.
    
    :::image type="complex" source="../media/a11y-testing-new-contrast-issues-in-light-mode.msft.png" alt-text="New contrast issues detected because of the change to light theme" lightbox="../media/a11y-testing-new-contrast-issues-in-light-mode.msft.png":::
        New contrast issues detected because of the change to light theme
    :::image-end:::
    
    On our demo page, the **Donation status** section of the page is unreadable in light mode, and needs to change. 
    
    :::image type="complex" source="../media/a11y-testing-donation-state-light-contrast.msft.png" alt-text="The Donation Status section has contrast issues in light mode" lightbox="../media/a11y-testing-donation-state-light-contrast.msft.png":::
        The **Donation Status** section has contrast issues in light mode
    :::image-end:::
    
1.  In DevTools, select the **Elements** tool, and then select **Ctrl+F** on Windows/Linux or **Command+F** on macOS.  The **Find** textbox appears, to search within the HTML DOM tree.
 
1.  Enter `scheme`.  The following CSS media queries are found, and the corresponding CSS files can now be updated.

    ```html
    <link rel="stylesheet" href="css/light-theme.css" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)">
    <link rel="stylesheet" href="css/dark-theme.css" media="(prefers-color-scheme: dark)">
    ```


## See also

*  [Dark or light color scheme simulation][DevToolsColorSchemeSimulation]
*  [Overview of accessibility testing using DevTools](accessibility-testing-in-devtools.md)


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->
[DevToolsColorSchemeSimulation]: ./preferred-color-scheme-simulation.md "Dark or light color scheme simulation | Microsoft Docs"
[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html "Accessibility-testing demo webpage | GitHub"
