---
title: Emulate vision deficiencies in Microsoft Edge DevTools(color blindness)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/29/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Emulate vision deficiencies

To better meet the needs of your users with [color vision deficiency][ColorblindawarenessMain] \(color blindness\), [Microsoft Edge DevTools][MicrosoftEdgeDevTools] enable you to simulate specific color vision deficiencies.  The **Emulate vision deficiencies** tool simulates the following categories.  

| Color vision deficiency | Details |  
|:--- |:--- |  
| Blurred vision | The user has difficulty focusing on fine details. |   
| Protanopia | The user is unable to perceive any red light. |  
| Deuteranopia | The user is unable to perceive any green light. |  
| Tritanopia | The user is unable to perceive any blue light. |  
| Achromatopsia | The user is unable to perceive any color, which reduces all color to a shade of grey. |  

## Navigate to the Rendering Tools  

To simulate a vision deficiency being applied for your web product, open the [Rendering Tools][RenderingTools].  

1.  Open the Rendering Tools by selecting the `...` menu item in the toolbar  
1.  Select `More tools`  
1.  Select `Rendering`  
    
    :::image type="complex" source="../media/getting-to-the-rendering-tools.msft.png" alt-text="Opening the Rendering Tools" lightbox="../media/getting-to-the-rendering-tools.msft.png":::
       Opening the **Rendering Tools**  
    :::image-end:::  

The **Rendering** menu appears in the drawer.  

1.  Scroll down to the `Emulate vision deficiencies` menu item and select the drop-down menu to display the options.  
    
    :::image type="complex" source="../media/accessibility-emulate-vision-menu.msft.png" alt-text="The Emulate Vision Deficiencies menu on the Rendering drawer" lightbox="../media/accessibility-emulate-vision-menu.msft.png":::
       The **Emulate vision deficiencies** menu on the **Rendering** drawer  
    :::image-end:::  
    
1.  Choose an option.  
    
    :::image type="complex" source="../media/accessibility-emulate-vision-menu-options.msft.png" alt-text="The Emulate Vision Deficiencies menu options" lightbox="../media/accessibility-emulate-vision-menu-options.msft.png":::
       The **Emulate vision deficiencies** menu options  
    :::image-end:::  
    
1.  The main windows displays the simulation of your selected option applied to the current page.  
    
    :::row:::
       :::column span="":::
          :::image type="complex" source="../media/accessibility-blurred-vision-emulation.msft.png" alt-text="Display using **Blurred Vision** simulation" lightbox="../media/accessibility-blurred-vision-emulation.msft.png":::
             Display using **Blurred Vision** simulation  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/accessibility-achromatopsia-emulation.msft.png" alt-text="Display using **Achromatopsia** simulation" lightbox="../media/accessibility-achromatopsia-emulation.msft.png":::
             Display using **Achromatopsia** simulation 
          :::image-end:::  
       :::column-end:::
    :::row-end:::
    
## Use the Command Menu  

You may also use **Command Menu** to access the different simulations.  

1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the **Command Menu**.  
    
    :::image type="complex" source="../media/css-console-command-menu-rendering.msft.png" alt-text="The Command Menu" lightbox="../media/css-console-command-menu-rendering.msft.png":::
       The **Command Menu**  
    :::image-end:::  
    
1.  Type `emulate`, choose what you want to simulate and press `Enter`.  
    
    :::image type="complex" source="../media/accessibility-emulation-command-menu-results.msft.png" alt-text="The different simulation options available in the Command Menu" lightbox="../media/accessibility-emulation-command-menu-results.msft.png":::
       The different simulation options available in the **Command Menu**  
    :::image-end:::  
    
> [!IMPORTANT]
> The **Emulate vision deficiencies** tools simulate approximations of how a person with each deficiency may see your product.  Each person is different, therefore vision deficiencies vary in severity from person to person.  To better meet the needs of your users, avoid any color combination that may be an issue.  The **Emulate vision deficiencies** tools are not a full accessibility assessment of your product.  Instead, the **Emulate vision deficiencies** tools should  give you a good first step to avoid problems.  

<!-- links -->  

[MicrosoftEdgeDevTools]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools"  
[ColorblindawarenessMain]: http://www.colourblindawareness.org "The Colour Blind Awareness organisation"  
[AmfcbMain]: https://www.amfcb.org "The American Foundation for the Color Blind (AFCB)"  
[RenderingTools]: /microsoft-edge/devtools-guide-chromium/rendering-tools "Microsoft Edge (Chromium) Rendering Tools"  
