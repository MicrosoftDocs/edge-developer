---
title: Force Microsoft Edge DevTools Into Color Scheme Preview Mode (CSS Prefers Color Scheme)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/18/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# Dark or Light Color Scheme simulation  

Operating systems have a way to display any application in darker or lighter colors.  Having a web product that has a light theme in a dark mode operating system is grating and can be an accessibility issue for some users.  On the web, you may use the [prefers-color-scheme][MDNPrefersColorScheme] CSS Media Query to detect if users prefer to see your product in a darker or lighter colour scheme.  Use [Microsoft Edge DevTools][DevtoolsGuideChromiumMain] to simulate a change from dark to light mode without having to change the entire operating system.  

1.  Open the **Command Menu**.  
    1.  Press `Control`+`Shift`+`P`  on Windows or `Command`+`Shift`+`P` on macOS.  
        
        :::image type="complex" source="../media/css-console-command-menu-rendering.msft.png" alt-text="The Command Menu" lightbox="../media/css-console-command-menu-rendering.msft.png":::
           The **Command Menu**  
        :::image-end:::   
        
1.  Type `emulate color`, select either **Emulate CSS prefers-color-scheme: dark** or **Emulate CSS prefers-color-scheme: light**  and then press `Enter`.  
    
    :::image type="complex" source="../media/css-elements-styles-qs-select-renderingmode-command-menu.msft.png" alt-text="Color scheme selection from Command Menu" lightbox="../media/css-elements-styles-qs-select-renderingmode-command-menu.msft.png":::
       Color scheme selection from **Command** Menu  
    :::image-end:::  
    
    > [!IMPORTANT]
    > Simply typing `dark` or `light` does not reveal the right tool, since there is also a way to [choose a theme for DevTools][DevtoolsGuideChromiumCustomizeDarkTheme].  If you are wondering what to choose, make sure that you are selecting a **rendering** menu item, not an **appearance** menu item.  

1.  After you select a color scheme, reload the current document to see the simulated mode.  
    
    :::image type="complex" source="../media/css-elements-styles-qs-simulated-light-mode.msft.png" alt-text="Simulated light mode inside Microsoft Edge DevTools" lightbox="../media/css-elements-styles-qs-simulated-light-mode.msft.png":::
       Simulated light mode inside Microsoft Edge DevTools  
    :::image-end:::  
    
    View and change your CSS like any other web page.  For more information, see [Get Started With Viewing And Changing CSS][DevtoolsGuideChromiumCssIndex].  

<!-- links -->  

[DevtoolsGuideChromiumMain]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools  Microsoft | Microsoft Docs"  
[DevtoolsGuideChromiumCustomizeDarkTheme]: ../customize/dark-theme.md "Enable Dark Theme In Microsoft Edge DevTools | Microsoft Docs"
[DevtoolsGuideChromiumCssIndex]: ../css/index.md "Get Started With Viewing And Changing CSS | Microsoft Docs"  

[MDNPrefersColorScheme]: https://developer.mozilla.org/docs/Web/CSS/@media/prefers-color-scheme "prefers-color-scheme | MDN"  
