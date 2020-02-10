---
title: Force Microsoft Edge DevTools Into Print Preview Mode (CSS Print Media Type)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
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





# Force Microsoft Edge DevTools Into Print Preview Mode (CSS Print Media Type)   



The [print media query][MDNUsingMediaQueries] controls how your page looks when printed.  To force your page into print preview mode:  

1.  Press `Control`+`Shift`+`P` \(Windows\) or `Command`+`Shift`+`P` \(macOS\) to open the **Command Menu**.  
    
    > ##### Figure 1  
    > The **Command Menu**  
    > ![The Command Menu][ImageCommandMenu]  
    
1.  Type `rendering`, select **Show Rendering**, and then press `Enter`.  
1.  Under **Emulate CSS media** select **print**.  
    
    > ##### Figure 2  
    > Print preview mode  
    > ![Print preview mode][ImagePrintMode]  
    
From here, you can view and change your CSS, like any other web page.  See [Get Started With Viewing And Changing CSS][DevToolsCSSGetStarted].  

 



<!-- image links -->  

[ImageCommandMenu]: images/console-command-menu-rendering.msft.png "Figure 1: The Command Menu"  
[ImagePrintMode]: images/elements-styles-qs-rendering-emulate-css-media-print.msft.png "Figure 2: Print preview mode"  

<!-- links -->  

[DevToolsCSSGetStarted]: index.md "Get Started With Viewing And Changing CSS"  

[MicrosoftEdgeDevTools]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium "Microsoft Edge \(Chromium\) Developer Tools"  
[MDNUsingMediaQueries]: https://developer.mozilla.org/docs/Web/CSS/Media_Queries/Using_media_queries "Using media queries | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/css/print-preview) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
