---
description: Render a webpage emulating the user's dark or light scheme operating-system setting or browser setting, without having to change your own machine's setting.  Use a CSS media query for prefers-color-scheme, together with a DevTools rendering option.
title: Emulate dark or light schemes in the rendered page
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 08/03/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Emulate dark or light schemes in the rendered page

Many operating systems have a way to display any application in darker or lighter colors.  Having a web product that has a light scheme in a dark-mode operating system can be hard to read and can be an accessibility issue for some users.

To test how a webpage will render when the user has selected dark or light mode, instead of changing your own machine's dark-mode or light-mode setting, you can select **Emulate CSS prefers-color-scheme: dark** or **light** in Microsoft Edge DevTools.  You can do this from the **Command Menu** or from the **Rendering** tool, as described below.

Alternatively, you can make your webpage automatically select dark or light mode based on your own preferred settings on your machine, by selecting **No emulation**, which is the default.

To specify the CSS to use for both light and dark schemes, use the [prefers-color-scheme](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-color-scheme) CSS media query to detect whether the user prefers to display your product in a dark or light color scheme, and then automatically select your own custom light- or dark-mode CSS.  Example CSS code is shown in [Check for contrast issues with dark theme and light theme](test-dark-mode.md).

This article is about changing the appearance of the webpage under development.  To instead change how DevTools appears, navigate to [Apply color themes to DevTools](../customize/theme.md).


<!-- ====================================================================== -->
## Emulating dark or light mode using the Rendering tool

1.  In DevTools, open the **Rendering** tool.  To do this, you might need to select the **More Tools** (+) icon on the main toolbar and then select **Rendering**.

1.  In the **Emulate CSS media feature prefers-color-scheme** dropdown list, select **prefers-color-scheme: dark** or **prefers-color-scheme: light**.

    :::image type="complex" source="../media/css-elements-styles-qs-simulated-light-mode.msft.png" alt-text="Emulating dark or light mode using the Rendering tool" lightbox="../media/css-elements-styles-qs-simulated-light-mode.msft.png":::
       Emulating dark or light mode using the **Rendering** tool
    :::image-end:::

1.  Refresh the page to display the rendered result.

    Now you can modify your CSS and view the rendered result the same way as for any other web page.  For more information, navigate to [Get started with viewing and changing CSS](../css/index.md).

1.  To restore the setting, in the **Rendering** tool, in the **Emulate CSS media feature prefers-color-scheme** dropdown list, select **No emulation**.  When you refresh the page, your own operating system or browser setting for light or dark mode preference will be applied.


<!-- ====================================================================== -->
## Emulating dark or light mode using the Command Menu

1.  When DevTools has focus, open the **Command Menu** by selecting `Ctrl`+`Shift`+`P` (Windows/Linux) or `Command`+`Shift`+`P` (macOS).

1.  Type "dark", "light", or "emulate".  Then select **Rendering: Emulate CSS prefers-color-scheme: dark** or **Rendering: Emulate CSS prefers-color-scheme: light**, and select **Enter**.

    :::image type="complex" source="../media/css-console-command-menu-rendering.msft.png" alt-text="Emulating dark or light mode using the 'Rendering: Emulate CSS prefers-color-scheme' commands on the Command Menu" lightbox="../media/css-console-command-menu-rendering.msft.png":::
        Emulating dark or light mode using the **Rendering: Emulate CSS prefers-color-scheme** commands on the Command Menu
    :::image-end:::

    Select a **Rendering** command rather than an **Appearance** command.  The **Rendering** commands affect the rendered webpage under development.  The **Appearance** commands instead affect the DevTools part of the window.

1.  Refresh the page to display the rendered result.

    Now you can modify your CSS and view the rendered result the same way as for any other web page.  For more information, navigate to [Get started with viewing and changing CSS](../css/index.md).

1.  To restore the setting, in the Command Menu, type "emulate" or "scheme" and then select **Rendering: Do not emulate CSS prefers-color-scheme**.  When you refresh the page, your own operating system or browser setting for light or dark mode preference will be applied.
