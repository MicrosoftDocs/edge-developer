---
description: Testing text-color contrast using the Color Picker.
title: Test text-color contrast using the Color Picker
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/07/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- this article was created on 05/11/2021 by moving a section out from the "Accessibility reference" article (reference.md) -->
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
# Test text-color contrast using the Color Picker

People with low vision might not see areas that are very bright or very dark.  Everything tends to appear at about the same level of brightness, which makes it hard to distinguish outlines and edges.

Contrast ratio measures the difference in brightness between the foreground and background of text.  If your text has a low contrast ratio, then people with low vision might experience your site as a blank screen.

In DevTools, one way to view the contrast ratio of a text element is to use the Color Picker, from the **Styles** tab.  The Color Picker helps you verify that your text meets recommended contrast ratio levels.

**To check the text-color contrast using the Color Picker:**

1.  In DevTools, select the **Elements** tool.
1.  In the **DOM Tree**, select the text element that you want to inspect.

    :::image type="complex" source="../media/accessibility-elements-paragraph-highlight.msft.png" alt-text="Inspect a paragraph in the DOM Tree" lightbox="../media/accessibility-elements-paragraph-highlight.msft.png":::
       Inspect a paragraph in the **DOM Tree**
    :::image-end:::

1.  On the **Styles** tab, locate the **color** property that's applied to the element, and then select the color square next to the **color** property.

    :::image type="complex" source="../media/accessibility-elements-styles-paragraph-highlight-color.msft.png" alt-text="The color property of the element" lightbox="../media/accessibility-elements-styles-paragraph-highlight-color.msft.png":::
       The `color` property of the element
    :::image-end:::

1.  Examine the **Contrast Ratio** section of the Color Picker.  One check mark means that the element meets the [minimum recommendation](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum).  Two check marks means that it meets the [enhanced recommendation](https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced).

    :::image type="complex" source="../media/accessibility-elements-styles-paragraph-highlight-color-picker.msft.png" alt-text="The Contrast Ratio section of the Color Picker shows 2 check marks and a value of 13.97" lightbox="../media/accessibility-elements-styles-paragraph-highlight-color-picker.msft.png":::
       The **Contrast Ratio** section of the Color Picker shows 2 check marks and a value of `13.97`
    :::image-end:::

1.  For more information, select the **Contrast ratio** section to expand it.  In the visual picker at the top of the Color Picker, two lines appear, running across the visual picker, along with a circle for the current color.  If the current color meets recommendations, then anything on the same side of the line also meets recommendations.  If the current color does not meet recommendations, then anything on the same side also does not meet recommendations.

    :::image type="complex" source="../media/accessibility-elements-styles-paragraph-highlight-color-picker-contrast-ratio-details.msft.png" alt-text="The Contrast Ratio Line in the visual picker" lightbox="../media/accessibility-elements-styles-paragraph-highlight-color-picker-contrast-ratio-details.msft.png":::
       The **Contrast Ratio** Line in the visual picker
    :::image-end:::

1. To try different colors, select within the visual picker, or select a color swatch at the bottom of the Color Picker.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors/kaycebasques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
