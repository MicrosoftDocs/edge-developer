---
description: Testing accessibility using the Accessibility tab.
title: Test accessibility using the Accessibility tab
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
# Test accessibility using the Accessibility tab

The **Accessibility** tab is where you view the accessibility tree, ARIA attributes, and computed accessibility properties of DOM nodes.

To open the **Accessibility** tab:

1.  Select the **Elements** tool.
1.  In the **DOM Tree**, select the element which you want to inspect.
1.  Select the **Accessibility** tab.  You might need to first select the **More tabs** (![the More tabs button](../media/more-tabs-icon.msft.png)) button to the right of the **Styles** tab.

:::image type="complex" source="../media/accessibility-elements-accessibility.msft.png" alt-text="Inspect the h1 element of the DevTools homepage in the Accessibility tab" lightbox="../media/accessibility-elements-accessibility.msft.png":::
   Inspect the `h1` element of the DevTools homepage in the **Accessibility** tab
:::image-end:::


<!-- ====================================================================== -->
## View the position of an element in the Accessibility Tree

The [accessibility tree](https://developer.mozilla.org/docs/Glossary/AOM) is a subset of the DOM tree.  The accessibility tree only contains elements from the DOM tree that are relevant and useful for displaying the contents of a page through assistive technologies such as screen readers.

Inspect the position of an element in the accessibility tree from the **Accessibility** tab.

:::image type="complex" source="../media/accessibility-elements-accessibility-tree.msft.png" alt-text="The Accessibility Tree section" lightbox="../media/accessibility-elements-accessibility-tree.msft.png":::
   The **Accessibility Tree** section
:::image-end:::


<!-- ====================================================================== -->
## View the ARIA attributes of an element

ARIA attributes ensure that assistive technologies such as screen readers have all of the information that they need in order to properly represent the contents of a page.

View the ARIA attributes of an element in the **Accessibility** tab.

:::image type="complex" source="../media/accessibility-elements-accessibility-aria-attributes.msft.png" alt-text="The ARIA Attributes section" lightbox="../media/accessibility-elements-accessibility-aria-attributes.msft.png":::
   The **ARIA Attributes** section
:::image-end:::


<!-- ====================================================================== -->
## View the computed accessibility properties of an element

Some accessibility properties are dynamically calculated by the browser.  These properties are displayed in the **Computed Properties** section of the **Accessibility** tab.

View the computed accessibility properties of an element in the **Accessibility** tab.

> [!NOTE]
> For computed CSS properties, use the [Computed](../css/reference.md#view-only-the-css-that-is-actually-applied-to-an-element) tab.

:::image type="complex" source="../media/accessibility-elements-accessibility-computed-properties.msft.png" alt-text="The Computed Properties section of the Accessibility tab" lightbox="../media/accessibility-elements-accessibility-computed-properties.msft.png":::
   The **Computed Properties** section of the **Accessibility** tab
:::image-end:::


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors/kaycebasques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
