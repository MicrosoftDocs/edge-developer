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
1.  Choose **Create live expression** (![Create live expression](../media/create-live-expression-icon.msft.png)).

    :::image type="complex" source="../media/accessibility-console-create-live-expression-empty.msft.png" alt-text="Create a Live Expression" lightbox="../media/accessibility-console-create-live-expression-empty.msft.png":::
       Create a Live Expression
    :::image-end:::

1.  Type `document.activeElement`.
1.  To save the expression, select outside of the live expression.

The value displayed below `document.activeElement` is the result of the expression.

Since that expression always represents the focused element, you now have a way to always keep track of which element has focus.

*   Hover on the result to highlight the focused element in the viewport.
*   Hover on the result, open the contextual menu (right-click), and choose **Reveal in Elements panel** to show the element in the DOM Tree on the **Elements** tool.
*   Hover on the result, open the contextual menu (right-click), and choose **Store as global variable** to create a variable reference to the node that you are able to use in the **Console**.


<!-- ====================================================================== -->
## See also

*  [Analyze the lack of indication of keyboard focus in a sidebar menu](test-analyze-no-focus-indicator.md)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors/kaycebasques) (Technical Writer, Chrome DevTools & Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
