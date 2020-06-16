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


# Force Microsoft Edge DevTools Into Color Scheme Preview Mode (CSS Prefers Color Scheme)   

Operating systems have a way to display any application in darker or lighter colors. Having a web product that has a light theme in a dark mode operating system is grating and can be an accessibiity issue for some users . On the web, you can use the [prefers-color-scheme][MDNPrefersColorScheme] CSS Media Query to detect if users prefer to see your product in a darker or lighter colour scheme. Using the [Microsoft Edge DevTools][MicrosoftEdgeDevTools] you can simulate a change from dark to light mode without having to change your whole operating system. 

1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the **Command Menu**.  
    
    > ##### Figure 1  
    > The **Command Menu**  
    > ![The Command Menu][ImageCommandMenu]  
    
1.  Type `emulate color`, select either **Emulate CSS prefers-color-scheme: dark** or **Emulate CSS prefers-color-scheme: light**  and then press `Enter`.  
    
    > ##### Figure 2  
    > Select which color scheme to emulate  
    > ![Color scheme selection from Command Menu][ImageSelectColorModeFromCommandMenu]  
    
1. Once you selected a color scheme, reload the current document to see the simulated mode. 

    > ##### Figure 3  
    > Forcing the "light mode" display of a product in a "dark mode" operating system.  
    > ![Microsoft Edge docs displayed in simulated light mode inside Microsoft Edge developer tools][ImageDocsInSimulatedLightMode]  

From here, you can view and change your CSS, like any other web page.  See [Get Started With Viewing And Changing CSS][DevToolsCSSGetStarted].  

<!-- image links -->  
[ImageCommandMenu]: /microsoft-edge/devtools-guide-chromium/media/css-console-command-menu-rendering.msft.png "Figure 1: The Command Menu"  
[ImageSelectColorModeFromCommandMenu]: /microsoft-edge/devtools-guide-chromium/media/css-elements-styles-qs-select-renderingmode-command-menu.msft.png "Figure 2: Select which color scheme to emulate"
[ImageDocsInSimulatedLightMode]: /microsoft-edge/devtools-guide-chromium/media/css-elements-styles-qs-simulated-light-mode.msft.png "Figure 3: Forcing the "light mode" display of a product in a "dark mode" operating system."

<!-- links -->  
[MicrosoftEdgeDevTools]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools"  
[RenderingTools]: /microsoft-edge/devtools-guide-chromium/rendering-tools "Microsoft Edge (Chromium) Rendering Tools"  
[DevToolsCSSGetStarted]: /microsoft-edge/devtools-guide-chromium/css/index "Get Started With Viewing And Changing CSS"  
[MDNPrefersColorScheme]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme "prefers-color-scheme | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/css/print-preview) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
