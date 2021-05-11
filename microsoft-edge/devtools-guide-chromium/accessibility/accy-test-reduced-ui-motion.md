---
description: To check that a webpage is usable with UI animation turned off (reduced motion), in the Rendering tool, use the Emulate CSS media feature prefers-reduced-motion dropdown list.
title: Check that the page is usable with UI animation turned off
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Check that the page is usable with UI animation turned off

<!-- Rendering tool: Emulate CSS media feature prefers-reduced-motion: "prefers-reduced-motion: reduced" -->

To check that a webpage is usable with UI animation turned off (reduced motion), in the **Rendering** tool, use the **Emulate CSS media feature prefers-reduced-motion** dropdown list.

A webpage should not show animations to a user who turned off animations in the operating system.  Animations can help the usability of a product, but they can also cause distraction, confusion, or nausea.

In the accessibility-testing demo webpage, when you turn off animations in the operating system, or emulate that settings by using DevTools, the webpage doesn't use smooth scrolling when you select different menu buttons, such as the blue **Cats** or **Dogs** menu items.  This is achieved by wrapping the smooth-scrolling setting in CSS in a media query, and then using the **Rendering** tool to emulate the operating system setting for reduced animation.

**To check whether the page is usable with animations turned off:**

1.  If it's not open already, open the [accessibility-testing demo webpage][DevToolsA11yErrorsDemopage] in a new tab of the browser, and then select **F12** to open DevTools.

1.  At the top of DevTools, select the **Sources** tool, and then in the **Navigation** pane on the left, select `styles.css`.  The CSS file appears in the **Editor** pane.

1.  Select **Ctrl+F** on Windows/Linux or **Command+F** on macOS, and then enter `@media`.  The CSS media query appears.

    ```css
    @media (prefers-reduced-motion: no-preference) {
      html {
        scroll-behavior: smooth;
      }
    }
    ```

    Next, emulate the operating system setting to reduce animation, as follows.

1.  Select **Esc** to open the Drawer at the bottom of DevTools.  Select the **+** button at the top of the Drawer to see the list of tools, and then select **Rendering**.  The Rendering tool appears.

1.  In the **Emulate CSS media feature prefers-reduced-motion** dropdown list, select **prefers-reduced-motion: reduced**.

    :::image type="complex" source="../media/a11y-testing-simulating-reduced-motion.msft.png" alt-text="Simulating reduced motion and the CSS that makes sure that smooth scrolling only happens when the user wants it" lightbox="../media/a11y-testing-simulating-reduced-motion.msft.png":::
        Simulating reduced motion and the CSS that makes sure that smooth scrolling only happens when the user wants it
    :::image-end:::

1.  In the webpage, select the blue menu items, such as **Horses** or **Alpacas**.  Now the webpage instantly scrolls to the selected section, rather than using the smooth-scrolling animation.

1.  In the **Rendering** tool, below **Emulate CSS media feature prefers-reduced-motion**, select **No emulation**.
   
The accessibility-testing demo webpage still runs other animations, even with the above media query and emulation setting:
*  Animation of the blue menu items when you hover over them.
*  Animation of the circles on the **More** links when you hover over them.

These two accessibility issues also need to be fixed in the demo page, regarding animation.


## See also

*  [Reduced motion simulation](reduced-motion-simulation.md)


## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->
