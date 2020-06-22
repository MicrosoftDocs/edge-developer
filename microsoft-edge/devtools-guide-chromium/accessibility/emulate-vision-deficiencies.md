---
title: Emulate vision deficiencies in Microsoft Edge DevTools(color blindness)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/16/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Chris Heilmann 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->


# Emulate vision deficiencies (color blindness)

There is general agreement that worldwide 8% of men and 0.5% of women have a [colour vision deficiency][ColourBlindAwareness] commonly called "Color Blindness". Using the [Microsoft Edge DevTools][MicrosoftEdgeDevTools] you can emulate various known problems and see what your product looks like: 

1. Blurred vision
1. Protanopia: the inability to perceive any red light.
1. Deuteranopia: the inability to perceive any green light.
1. Tritanopia: the inability to perceive any blue light.
1. Achromatopsia: the inability to perceive any color except for shades of grey.

## Navigating to the Rendering Tools

To test your current web product for colour deficiency problems you need to go to the [Rendering Tools][RenderingTools].

1. Open the Rendering Tools by selecting the `...` menu item in the toolbar
2. Select `More tools`
3. Select `Rendering` 

    > ##### Figure 1  
    > Opening the **Rendering Tools**  
    > ![Getting to the Rendering Tools][ImageRenderingTools]  

The Rendering menu will appear in the bottom half of the developer tools. 

1. Scroll down to the `Emulate Vision deficiencies` menu item and select from the options.

    > ##### Figure 2  
    > The **Emulate Vision Deficiencies** menu
    > ![The Emulate Vision Deficiencies menu of the Rendering tools][ImageRenderingToolsVisionDeficienciesMenu]  

2. Choose any of the options 

    > ##### Figure 3  
    > The **Emulate Vision Deficiencies** menu options
    > ![Available options to simulation vision deficiencies][ImageRenderingToolsVisionDeficienciesMenuOpen]  

1. The current web site is now displayed in a simulation of how it will appear to a user with the chosen deficiency.

    > ##### Figure 4  
    > Edge Developer Tools Documentation in **Blurred Vision** emulation
    > ![Displaying a web site in blurred vision emulation][ImageAccessibilityBlurredEmulation]  

    > ##### Figure 5  
    > Edge Developer Tools Documentation in **Achromatopsia Vision** emulation
    > ![Displaying a web site in Achromatopsia vision emulation][ImageAccessibilityAchromatopsiaEmulation]  


## Using the command menu

You can also reach the different emulations without going through the various menus using the **Command Menu**. 

1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the **Command Menu**.  
    
    > ##### Figure 6  
    > The **Command Menu**  
    > ![The Command Menu][ImageCommandMenu]  
    
1.  Type `emulate`, choose what you want to simulate and press `Enter`.  
    
    > ##### Figure 7  
    > The different emulation options available in the Command Menu
    > ![Command Menu results for the emulate command][ImageCommandMenuEmulationOptions]  
    

> [!IMPORTANT]
> These are approximations how a person with these conditions can see your product. As humans are all different, vision deficiencies vary in severity from person to person. It makes sense to err on the side of caution and avoid any color combination that could be an issue. These tools are not a full assessment how accessible your product is, but they are a good first step to avoid the biggest problems.    

<!-- image links -->  
[ImageRenderingTools]: /microsoft-edge/devtools-guide-chromium/media/getting-to-the-rendering-tools.msft.png "Figure 1: Getting to the rendering tools"  
[ImageRenderingToolsVisionDeficienciesMenu]: /microsoft-edge/devtools-guide-chromium/media/accessibility-emulate-vision-menu.msft.png "Figure 2: The vision deficiencies option in the rendering menu"  
[ImageRenderingToolsVisionDeficienciesMenuOpen]: /microsoft-edge/devtools-guide-chromium/media/accessibility-emulate-vision-menu-options.msft.png "Figure 3: Available options to simulation vision deficiencies"  
[ImageAccessibilityBlurredEmulation]: /microsoft-edge/devtools-guide-chromium/media/accessibility-blurred-vision-emulation.msft.png "Figure 4: Displaying a web site in blurred vision emulation"  
[ImageAccessibilityAchromatopsiaEmulation]: /microsoft-edge/devtools-guide-chromium/media/accessibility-achromatopsia-emulation.msft.png "Figure 5: Displaying a web site in Achromatopsia vision emulation"  
[ImageCommandMenu]: /microsoft-edge/devtools-guide-chromium/media/css-console-command-menu-rendering.msft.png "Figure 6: The Command Menu"  
[ImageCommandMenuEmulationOptions]: /microsoft-edge/devtools-guide-chromium/media/accessibility-emulation-command-menu-results.msft.png "Figure 7: The different emulation options available in the Command Menu"

<!-- links -->  
[MicrosoftEdgeDevTools]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools"  
[ColourBlindAwareness]: http://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness/ "Colour Blind awareness web site"
[RenderingTools]: /microsoft-edge/devtools-guide-chromium/rendering-tools "Microsoft Edge (Chromium) Rendering Tools"

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
