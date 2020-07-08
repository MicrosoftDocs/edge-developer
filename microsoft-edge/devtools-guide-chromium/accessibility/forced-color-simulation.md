---
title: Display the current web site in high contrast mode (CSS Forced Color)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/18/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# High Contrast simulation  

Operating systems have a way to display any application in darker or lighter colors.  Having a web product that has a light theme in a dark mode operating system is grating and can be an accessibility issue for some users.  On the web, you may use the [prefers-color-scheme][MDNPrefersColorScheme] CSS Media Query to detect if users prefer to see your product in a darker or lighter colour scheme.  Use [Microsoft Edge DevTools][DevtoolsGuideChromiumMain] to simulate a change from dark to light mode without having to change the entire operating system.  

1.  Open the **Command Menu**.  
    1.  Press `Control`+`Shift`+`P`  on Windows or `Command`+`Shift`+`P` on macOS.  
        
        :::image type="complex" source="../media/css-console-command-menu-rendering.msft.png" alt-text="The Command Menu" lightbox="../media/css-console-command-menu-rendering.msft.png":::
           The **Command Menu**  
        :::image-end:::   

1.  Type `forced-c`, select either **Emulate CSS forced-colors: active** or **Do not emulate CSS forced-colors**  and then press `Enter`.  
    
    :::image type="complex" source="../media/forced-colors-command-menu-emulate.msft.png" alt-text="Turning on High Contrast simulation using the Command Menu" lightbox="../media/forced-colors-command-menu-emulate.msft.png":::
       Turning on forced colors simulation using the **Command** Menu  
    :::image-end:::  

    :::image type="complex" source="../media/forced-colors-command-menu-donotemulatre.msft.png" alt-text="Turning off High Contrast simulation using the Command Menu" lightbox="../media/forced-colors-command-menu-donotemulatre.msft.png":::
       Turning off forced colors simulation using the **Command** Menu  
    :::image-end:::  


    > [!IMPORTANT]
    > Simply typing `dark` or `light` does not reveal the right tool, since there is also a way to [choose a theme for DevTools][DevtoolsGuideChromiumCustomizeDarkTheme].  If you are wondering what to choose, make sure that you are selecting a **rendering** menu item, not an **appearance** menu item.  

1.  After you select a color scheme, reload the current document to see the simulated mode.  
    
    :::image type="complex" source="../media/css-elements-styles-qs-simulated-light-mode.msft.png" alt-text="Simulated light mode inside Microsoft Edge DevTools" lightbox="../media/css-elements-styles-qs-simulated-light-mode.msft.png":::
       Simulated light mode inside Microsoft Edge DevTools  
    :::image-end:::  
    
    View and change your CSS like any other web page.  For more information, see [Get Started With Viewing And Changing CSS][DevtoolsGuideChromiumCssIndex].  

forced-colors-rendering-no-modification.msft.png
forced-colors-rendering-dropdown-active.msft.png
forced-colors-rendering-dropdown.msft.png


<!-- links -->  

[DevtoolsGuideChromiumMain]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools  Microsoft | Microsoft Docs"  
[DevtoolsGuideChromiumCustomizeDarkTheme]: ../customize/dark-theme.md "Enable Dark Theme In Microsoft Edge DevTools | Microsoft Docs"
[DevtoolsGuideChromiumCssIndex]: ../css/index.md "Get Started With Viewing And Changing CSS | Microsoft Docs"  

[MDNPrefersColorScheme]: https://developer.mozilla.org/docs/Web/CSS/@media/prefers-color-scheme "prefers-color-scheme | MDN"  
