---
title: Emulate vision deficiencies in Microsoft Edge DevTools(color blindness)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/22/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Emulate vision deficiencies

Worldwide approximately 8% of men and 0.5% of women have a [color vision deficiency][ColorblindawarenessMain] commonly named "Color Blindness".  [Microsoft Edge DevTools][MicrosoftEdgeDevTools] enables you to emulate various known deficiencies and provide a preview of your product for you to review.  

| Color Deficiency | Details |  
|:--- |:--- |  
| Blurred vision |  |   
| Protanopia | The inability to perceive any red light. |  
| Deuteranopia | The inability to perceive any green light. |  
| Tritanopia | The inability to perceive any blue light. |  
| Achromatopsia | The inability to perceive any color, except for shades of grey. |  

## Navigate to the Rendering Tools  

To test your current web product for color deficiencies, open the [Rendering Tools][RenderingTools].  

1.  Open the Rendering Tools by selecting the `...` menu item in the toolbar  
1.  Select `More tools`  
1.  Select `Rendering`  
    
    :::image type="complex" source="../media/getting-to-the-rendering-tools.msft.png" alt-text="Opening the Rendering Tools" lightbox="../media/getting-to-the-rendering-tools.msft.png":::
       Opening the **Rendering Tools**  
    :::image-end:::  

The **Rendering** menu appears in the bottom half of the DevTools.  

1.  Scroll down to the `Emulate Vision deficiencies` menu item and select from the options.  
    
    :::image type="complex" source="../media/accessibility-emulate-vision-menu.msft.png" alt-text="The Emulate Vision Deficiencies menu of the Rendering tools" lightbox="../media/accessibility-emulate-vision-menu.msft.png":::
       The **Emulate Vision Deficiencies** menu of the **Rendering** tools  
    :::image-end:::  
    
1.  Choose any of the options  
    
    :::image type="complex" source="../media/accessibility-emulate-vision-menu-options.msft.png" alt-text="The Emulate Vision Deficiencies menu options" lightbox="../media/accessibility-emulate-vision-menu-options.msft.png":::
       The **Emulate Vision Deficiencies** menu options  
    :::image-end:::  
    
1.  The current page is displayed in a simulation of how it may appear to a user with the chosen deficiency.  

    :::row:::
       :::column span="":::
          :::image type="complex" source="../media/accessibility-blurred-vision-emulation.msft.png" alt-text="Microsoft Edge Developer Tools Documentation in Blurred Vision emulation" lightbox="../media/accessibility-blurred-vision-emulation.msft.png":::
             Displayed using **Blurred Vision** emulation  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/accessibility-achromatopsia-emulation.msft.png" alt-text="Microsoft Edge Developer Tools Documentation in Achromatopsia Vision emulation" lightbox="../media/accessibility-achromatopsia-emulation.msft.png":::
             Display using **Achromatopsia Vision** emulation 
          :::image-end:::  
       :::column-end:::
    :::row-end:::
    
## Using the command menu  

You may also reach the different emulations without going through the various menus using the **Command Menu**.  

1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the **Command Menu**.  
    
    :::image type="complex" source="../media/css-console-command-menu-rendering.msft.png" alt-text="The Command Menu" lightbox="../media/css-console-command-menu-rendering.msft.png":::
       The **Command Menu**  
    :::image-end:::  
    
1.  Type `emulate`, choose what you want to simulate and press `Enter`.  
    
    :::image type="complex" source="../media/accessibility-emulation-command-menu-results.msft.png" alt-text="The different emulation options available in the Command Menu" lightbox="../media/accessibility-emulation-command-menu-results.msft.png":::
       The different emulation options available in the **Command Menu**  
    :::image-end:::  
    
> [!IMPORTANT]
> The emulation tools are approximations of how a person with each deficiency may see your product.  Each person is different, therefore vision deficiencies vary in severity from person to person.  To better meet the needs of your users, avoid any color combination that may be an issue.  The emulation tools are not a full assessment of the accessibility of your product, but you should have a good first step towards avoiding the biggest deficiencies.  

<!-- links -->  

[MicrosoftEdgeDevTools]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools"  
[ColorblindawarenessMain]: http://www.colourblindawareness.org "The Colour Blind Awareness organisation"  
[AmfcbMain]: https://www.amfcb.org "The American Foundation for the Color Blind (AFCB)"  
[RenderingTools]: /microsoft-edge/devtools-guide-chromium/rendering-tools "Microsoft Edge (Chromium) Rendering Tools"  
