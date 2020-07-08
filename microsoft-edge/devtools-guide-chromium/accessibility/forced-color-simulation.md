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

## Navigate to the Rendering Tools  

To simulate a vision deficiency being applied for your web product, open the [Rendering Tools][RenderingTools].  

1.  Open the Rendering Tools by selecting the `...` menu item in the toolbar  
1.  Select `More tools`  
1.  Select `Rendering`  
    
    :::image type="complex" source="../media/getting-to-the-rendering-tools.msft.png" alt-text="Opening the Rendering Tools" lightbox="../media/getting-to-the-rendering-tools.msft.png":::
       Opening the **Rendering Tools**  
    :::image-end:::  

The **Rendering** menu appears in the drawer.  

1.  Scroll down to the `Emulate CSS media feature forced-colors` menu item and select the drop-down menu to display the options.  
    
    :::image type="complex" source="../media/accessibility-forced-colors-rendering-dropdown.msft.png" alt-text="The Forced Colors menu on the Rendering drawer" lightbox="../media/accessibility-forced-colors-rendering-dropdown.msft.png":::
       The **Forced Colors** menu on the **Rendering** drawer  
    :::image-end:::  
    
1.  Choose to either `No emulation` or `forced-colors: active`. 
    
1.  The main windows displays the simulation of your selected option applied to the current page.  
    
    :::row:::
       :::column span="":::
          :::image type="complex" source="../media/accessibility-forced-colors-rendering-no-modification.msft.png" alt-text="Displaying a web site without high contrast simulation" lightbox="../media/accessibility-forced-colors-rendering-no-modification.msft.png":::
             Display without simulated High Contrast  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/accessibility-forced-colors-rendering-dropdown-active.msft.png" alt-text="Displaying a web site in high contrast simulation" lightbox="../media/accessibility-forced-colors-rendering-dropdown-active.msft.png":::
             Display in simulated High Contrast  
          :::image-end:::  
       :::column-end:::
    :::row-end:::
    
## Use the Command Menu  

1.  Open the **Command Menu**.  
    1.  Press `Control`+`Shift`+`P`  on Windows or `Command`+`Shift`+`P` on macOS.  
        
        :::image type="complex" source="../media/css-console-command-menu-rendering.msft.png" alt-text="The Command Menu" lightbox="../media/css-console-command-menu-rendering.msft.png":::
           The **Command Menu**  
        :::image-end:::   

1.  Type `forced-c`, select either **Emulate CSS forced-colors: active** or **Do not emulate CSS forced-colors**  and then press `Enter`.  
    
    :::image type="complex" source="../media/accessibility-forced-colors-command-menu-emulate.msft.png" alt-text="Turning on High Contrast simulation using the Command Menu" lightbox="../media/accessibility-forced-colors-command-menu-emulate.msft.png":::
       Turning on forced colors simulation using the **Command** Menu  
    :::image-end:::  

    :::image type="complex" source="../media/accessibility-forced-colors-command-menu-donotemulate.msft.png" alt-text="Turning off High Contrast simulation using the Command Menu" lightbox="../media/accessibility-forced-colors-command-menu-donotemulatre.msft.png":::
       Turning off forced colors simulation using the **Command** Menu  
    :::image-end:::  

    
View and change your CSS like any other web page.  For more information, see [Get Started With Viewing And Changing CSS][DevtoolsGuideChromiumCssIndex].  

<!-- links -->  

[DevtoolsGuideChromiumMain]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools  Microsoft | Microsoft Docs"  
[DevtoolsGuideChromiumCssIndex]: ../css/index.md "Get Started With Viewing And Changing CSS | Microsoft Docs"  
