---
title: Force Microsoft Edge DevTools Into Color Scheme Preview Mode (CSS Prefers Color Scheme)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/16/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->


# Reduced Motion Simulation   

Animation in web products can be an accessibility problem. That's why Operating Systems have an option to turn animations off to avoid confusing users or in a worst case scenario trigger seizures. On the web, you can use the [prefers-reduced-motion][MDNPrefersReducedMotion] CSS Media Query to detect if users prefer to not see any animations. In your product you can wrap your animation code in a test to avoid animations showing up for these users: 

```CSS
@media (prefers-reduced-motion: reduce) {
  /* in case the .header element has an animation, turn it off */
  .header {
    animation: none;
  }
}
```
Using the [Microsoft Edge DevTools][MicrosoftEdgeDevTools] you can simulate this reduced motion setting without having to change your operating system. 

1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the **Command Menu**.  
    
    > ##### Figure 1  
    > The **Command Menu**  
    > ![The Command Menu][ImageCommandMenu]  
    
1.  Type `reduced`, to turn the simulation on and off. Select the option and press `Enter`.  
    
    > ##### Figure 2  
    > Turn the `prefers reduced motion` setting on or off
    > ![Toggle reduced motion setting from Command Menu][ImageToggleReducedMotionFromCommandMenu]  
    
1. Reload the current document to test if your animations are turned off or visible.

<!-- image links -->  
[ImageCommandMenu]: /microsoft-edge/devtools-guide-chromium/media/css-console-command-menu-rendering.msft.png "Figure 1: The Command Menu"  
[ImageToggleReducedMotionFromCommandMenu]: /microsoft-edge/devtools-guide-chromium/media/css-elements-styles-qs-select-reduced-motion-command-menu.msft.png "Figure 2: Toggle reduced motion from command palette"

<!-- links -->  
[MicrosoftEdgeDevTools]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools"  
[MDNPrefersReducedMotion]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion "prefers-reduced-motion | MDN"  


> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/css/print-preview) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
