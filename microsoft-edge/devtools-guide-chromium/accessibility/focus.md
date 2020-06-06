---
title: Track Which Element Has Focus
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/18/2020
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

# Track Which Element Has Focus   

Suppose that you are testing the keyboard navigation accessibility of a page.  When navigating the page with the `Tab` key, the focus ring sometimes disappears because the element that has focus is hidden.  To track the focused element in DevTools:  

1.  Open the **Console**.  
1.  Click **Create Live Expression** ![Create Live Expression][ImageCreateIcon].  

    > ##### Figure 1  
    > Creating a **Live Expression**  
    > ![Creating a Live Expression][ImageLiveExpression]  
    
1.  Type `document.activeElement`.
1.  Click outside of the **Live Expression** UI to save.

The value that you see below `document.activeElement` is the result of the expression.  
Since that expression always represents the focused element, you now have a way to always keep track of which element has focus.  

*   Hover over the result to highlight the focused element in the viewport.  
*   Right-click the result and select **Reveal in Elements panel** to show the element in the DOM Tree on the **Elements** panel.  
*   Right-click the result and select **Store as global variable** to create a variable reference to the node that you are able to use in the **Console**.  

<!--## Feedback   -->  

<!-- image links -->  

[ImageCreateIcon]: /microsoft-edge/devtools-guide-chromium/media/create-live-expression-icon.msft.png  

[ImageLiveExpression]: /microsoft-edge/devtools-guide-chromium/media/accessibility-console-create-live-expression-empty.msft.png "Figure 1: Creating a Live Expression"  

<!-- links -->  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/accessibility/focus) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
