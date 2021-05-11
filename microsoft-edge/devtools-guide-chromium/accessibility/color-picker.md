---
description: Testing text-color contrast using the Color Picker.
title: Testing text-color contrast using the Color Picker
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/08/2021
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

# Testing text-color contrast using the Color Picker

In DevTools, one way to view the contrast ratio of a text element is to use the Color Picker, in the DOM tree in the **Elements** tool.

Some people with low vision do not see areas as very bright or very dark.  Everything tends to appear at about the same brightness, which makes it hard to distinguish outlines and edges.  

Contrast ratio measures the difference in brightness between the foreground and background of text.  If your text has a low contrast ratio, then these low vision users may literally experience your site as a blank screen.  

The Color Picker helps you verify that your text meets recommended contrast ratio levels.

**To check the text-color contrast using the Color Picker:**

1.  In DevTools, select the **Elements** tool.  
1.  In the **DOM Tree**, select the text element that you want to inspect.  
    
    :::image type="complex" source="../media/accessibility-elements-paragraph-highlight.msft.png" alt-text="Inspect a paragraph in the DOM Tree" lightbox="../media/accessibility-elements-paragraph-highlight.msft.png":::
       Inspect a paragraph in the **DOM Tree**  
    :::image-end:::  
    
1.  On the **Styles** tab, choose the color square next to the `color` value of the element.  
    
    :::image type="complex" source="../media/accessibility-elements-styles-paragraph-highlight-color.msft.png" alt-text="The color property of the element" lightbox="../media/accessibility-elements-styles-paragraph-highlight-color.msft.png":::
       The `color` property of the element  
    :::image-end:::  
    
1.  Check the **Contrast Ratio** section of the Color Picker.  One checkmark means that the element meets the [minimum recommendation][W3CContrastMinimum].  Two checkmarks means that it meets the [enhanced recommendation][W3CContrastEnhanced].  
    
    :::image type="complex" source="../media/accessibility-elements-styles-paragraph-highlight-color-picker.msft.png" alt-text="The Contrast Ratio section of the Color Picker shows 2 checkmarks and a value of 13.97" lightbox="../media/accessibility-elements-styles-paragraph-highlight-color-picker.msft.png":::
       The **Contrast Ratio** section of the Color Picker shows 2 checkmarks and a value of `13.97`  
    :::image-end:::  
    
1.  For more information, choose the **Contrast Ratio** section.  A line appears in the visual picker at the top of the Color Picker.  If the current color meets recommendations, then anything on the same side of the line also meets recommendations.  If the current color does not meet recommendations, then anything on the same side also does not meet recommendations.  
    
    :::image type="complex" source="../media/accessibility-elements-styles-paragraph-highlight-color-picker-contrast-ratio-details.msft.png" alt-text="The Contrast Ratio Line in the visual picker" lightbox="../media/accessibility-elements-styles-paragraph-highlight-color-picker-contrast-ratio-details.msft.png":::
       The **Contrast Ratio** Line in the visual picker  
    :::image-end:::  
    

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  


<!-- links -->  
[W3CContrastEnhanced]: https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced "Contrast (Enhanced) Level AAA | W3C"  
[W3CContrastMinimum]: https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum "Contrast (Minimum) Level AA | W3C"  
[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
