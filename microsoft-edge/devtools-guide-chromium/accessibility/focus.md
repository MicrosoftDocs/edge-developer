---
description: Open the Console, create a Live Expression, and set the expression to document.activeElement.
title: Track which element has focus
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/07/2021
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
# Track which element has focus  

Suppose that you are testing the keyboard navigation accessibility of a page.  When navigating the page with the `Tab` key, the focus ring sometimes disappears because the element that has focus is hidden.  

To track the focused element in DevTools:

1.  Open the **Console**.  
1.  Choose **Create live expression** \(![Create live expression](../media/create-live-expression-icon.msft.png)\).  
    
    :::image type="complex" source="../media/accessibility-console-create-live-expression-empty.msft.png" alt-text="Create a Live Expression" lightbox="../media/accessibility-console-create-live-expression-empty.msft.png":::
       Create a Live Expression  
    :::image-end:::  
    
1.  Type `document.activeElement`.  
1.  To save the expression, select outside of the live expression.
    
The value displayed below `document.activeElement` is the result of the expression.  

Since that expression always represents the focused element, you now have a way to always keep track of which element has focus.  

*   Hover on the result to highlight the focused element in the viewport.  
*   Hover on the result, open the contextual menu \(right-click\), and choose **Reveal in Elements panel** to show the element in the DOM Tree on the **Elements** tool.  
*   Hover on the result, open the contextual menu \(right-click\), and choose **Store as global variable** to create a variable reference to the node that you are able to use in the **Console**.  


## See also

*  [Analyze the lack of indication of keyboard focus in a sidebar menu](test-analyze-no-focus-indicator.md)


## Getting in touch with the Microsoft Edge DevTools team

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  


<!-- links -->  
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/accessibility/focus) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors#kayce-basques  
