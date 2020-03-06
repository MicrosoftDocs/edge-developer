---
title: Watch JavaScript Expression Values In Real-Time With Live Expressions
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





# Watch JavaScript Expression Values In Real-Time With Live Expressions   

  

If you find yourself typing the same JavaScript expression in the Console repeatedly, you might find it easier to create a **Live Expression**.  With **Live Expressions** you type an expression once and then pin it to the top of your Console.  The value of the expression updates in near real-time.  

## Create a Live Expression   

1.  Open the Console.  
1.  Click **Create Live Expression** ![Create Live Expression][ImageCreateLiveExpressionIcon].  The **Live Expression** text box appears.  
    
    > ##### Figure 1  
    > Typing `document.activeElement` into the **Live Expression** text box  
    > ![Typing document.activeElement into the Live Expression text box][ImageLiveExpressionTextbox]  
    
1.  Type `Control`+`Enter` \(Windows\) or `Command`+`Enter` \(macOS\) to save the expression, or click outside of the **Live Expression** text box.  

<!--todo: add reference open console (open the console) section when available  -->  

 



<!-- image links -->  

[ImageCreateLiveExpressionIcon]: images/create-live-expression-icon.msft.png  

[ImageLiveExpressionTextbox]: images/console-create-live-expression.msft.png "Figure 1: Typing document.activeElement into the Live Expression text box"  

<!-- links -->  

<!--[DevToolsConsoleReferenceOpenConsole]: reference.md#open-the-console "Open the Console - Console Reference"  -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/live-expressions) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
