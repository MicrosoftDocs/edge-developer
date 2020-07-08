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

Windows and other Operating Systems have a [setting that allows users to show the interface with a set of reduced colors][WindowsHighContrastMode]. These could be either pre-set color schemes or defined by the user. This helps people with several needs: those with limited vision, those suffering from Migraine, [Irlen Syndrome][IrlenSyndromeLink] or [Dyslexia][DyslexiaLink]. 

Whilst exact numbers aren't available, roughly 4% of all Windows users (roughly 55 million people) have their display set up using these reduced colors, commonly known as "High Contrast Mode".According to WebAIM’s 2018 “[Survey of Users with low Vision][WebAimSurvey]”, more than 50% of the low vision users use High Contrast Mode.

To make it easier for developers to test what their products look like in high contrast mode, [Microsoft Edge DevTools][DevtoolsGuideChromiumMain] have a way to simulate high contrast mode without having to change your Operating System settings. This also helps users of other operating systems that don't have the same functionality and therefore can't test it.

## Navigate to the Rendering Tools  

To simulate what your web product looks like in forced color mode, open the [Rendering Tools][RenderingTools].  

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

[WebAimSurvey]: https://webaim.org/projects/lowvisionsurvey2/#contrastMode
[WindowsHighContrastMode]: https://support.microsoft.com/en-us/help/13862/windows-10-use-high-contrast-mode "How to enable high contrast mode in Windows 10"
[DyslexiaLink]: https://en.wikipedia.org/wiki/Dyslexia "Dyslexia"
[IrlenSyndromeLink]: https://en.wikipedia.org/wiki/Irlen_syndrome "Irlen Syndrome (Wikipedia)"
[DevtoolsGuideChromiumMain]: ../../devtools-guide-chromium.md "Microsoft Edge (Chromium) Developer Tools  Microsoft | Microsoft Docs"  
[DevtoolsGuideChromiumCssIndex]: ../css/index.md "Get Started With Viewing And Changing CSS | Microsoft Docs"  
[RenderingTools]: /microsoft-edge/devtools-guide-chromium/rendering-tools "Microsoft Edge (Chromium) Rendering Tools"  
