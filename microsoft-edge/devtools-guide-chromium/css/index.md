---
description: Learn how to use Microsoft Edge DevTools to view and change the CSS of a page.
title: Get started with viewing and changing CSS
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
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
# Get started with viewing and changing CSS

Complete these interactive tutorials to learn the basics of viewing and changing the CSS for a page using Microsoft Edge DevTools.


<!-- ====================================================================== -->
## Open CSS Examples

1.  Hold `Control` (Windows, Linux) or `Command` (macOS) and choose **CSS Examples** to open in a new window.

    [CSS Examples](https://microsoft-edge-chromium-devtools.glitch.me/static/css/examples/ecma.html)

    > [!NOTE]
    > If you want to [dock your DevTools window](/microsoft-edge/devtools-guide-chromium/customize/placement) to the right of your viewport (displayed in the following figure), choose **Customize and control DevTools** `...`.  On the **Customize and control DevTools** drop-down menu, in the **Dock side** section, choose **Dock to right**.


<!-- ====================================================================== -->
## View the CSS for an element

1.  [Open CSS Examples](#open-css-examples).
1.  Hover on the `Inspect Me!` text, open the contextual menu (right-click), and choose **Inspect**.
    1.  In DevTools, on the **Elements** tool, in the **DOM Tree** panel, the `Inspect Me!` element is highlighted.

        :::image type="complex" source="../media/css-elements-inspect-me.msft.png" alt-text="The inspected element is highlighted in the DOM Tree" lightbox="../media/css-elements-inspect-me.msft.png":::
           The inspected element is highlighted in the **DOM Tree**
        :::image-end:::

    1.  In the `Inspect Me!` element, find the value of the `data-message` attribute and copy it.
1.  On the page, in the **Value of `data-message`:** textbox, enter the value.
1.  Hover on the `Inspect Me!` text, open the contextual menu (right-click), and choose **Inspect**.
    1.  In DevTools, on the **Elements** tool, select the **Styles** panel.
    1.  In the **Styles** panel, the `Inspect Me!` element is highlighted.
    1.  In the `Inspect Me!` element, find the `aloha` class rule.

        > [!NOTE]
        > This rule is displayed, because it is being applied to the `Inspect Me!` element.

    1.  In the `aloha` class, find the value for the `padding` style and copy it.

        :::image type="complex" source="../media/css-elements-inspect-me-styles.msft.png" alt-text="CSS classes is applied to the inspected element are highlighted in the Styles panel" lightbox="../media/css-elements-inspect-me-styles.msft.png":::
           CSS classes is applied to the selected element, such as `aloha`, are displayed in the **Styles** panel
        :::image-end:::

1.  On the page, in the **Value of `padding`:** textbox, enter the value.


<!-- ====================================================================== -->
## Add a CSS declaration to an element

Use the **Styles** panel when you want to change or add CSS declarations to an element.

> [!NOTE]
> Complete the [View the CSS for an element](#view-the-css-for-an-element) tutorial before doing this one.

1.  [Open CSS Examples](#open-css-examples).
1.  Hover on the `Add A Background Color To Me!` text, open the contextual menu (right-click), and choose **Inspect**.
1.  Choose `element.style` near the top of the **Styles** panel.
1.  Type `background-color` and select `Enter`.
1.  Type `honeydew` and select `Enter`.  In the **DOM Tree**, an inline style declaration applied to the element is displayed.

    :::image type="complex" source="../media/css-elements-add-background-color-to-me-styles-p.msft.png" alt-text="Add a CSS declaration to the element using the Styles panel" lightbox="../media/css-elements-add-background-color-to-me-styles-p.msft.png":::
       The `background-color:honeydew` declaration is applied to the element using the `element.style` section of the **Styles** panel
    :::image-end:::


<!-- ====================================================================== -->
## Add a CSS class to an element

To display how an element looks when a CSS class is applied to or removed from an element, navigate to the **Styles** panel.

> [!NOTE]
> Complete the [View the CSS for an element](#view-the-css-for-an-element) tutorial before doing this one.

1.  [Open CSS Examples](#open-css-examples).
1.  Hover on the `Add A Class To Me!` text, open the contextual menu (right-click), and choose **Inspect**.
1.  Choose **.cls**.  DevTools reveals a text box where you may add classes to the selected element.
1.  Type `color_me` in the **Add new class** text box and then select `Enter`.  A checkbox appears below the **Add new class** text box, where you may toggle the class on and off.  If the `Add A Class To Me!` element has any other classes applied to it, you are also able to toggle each from here.

    :::image type="complex" source="../media/css-elements-add-a-class-to-me-styles-cls.msft.png" alt-text="Apply the color_me class to the element" lightbox="../media/css-elements-add-a-class-to-me-styles-cls.msft.png":::
       The `color_me` class is applied to the element using the **.cls** section of the **Styles** panel
    :::image-end:::


<!-- ====================================================================== -->
## Add a pseudostate to a class

Use the **Styles** panel to permanently apply a CSS pseudostate to an element.  DevTools supports `:active`, `:focus`, `:hover`, and `:visited`.

> [!NOTE]
> Complete the [View the CSS for an element](#view-the-css-for-an-element) tutorial before doing this one.

1.  [Open CSS Examples](#open-css-examples).
1.  Hover on the `Hover Over Me!` text.  The background color changes.
1.  Hover on the `Hover Over Me!` text, open the contextual menu (right-click), and choose **Inspect**.
1.  In the **Styles** panel, choose **:hov**.
1.  Check the **:hover** checkbox.  The background color changes like before, even though you are not actually hovering over the element.

    :::image type="complex" source="../media/css-elements-hover-over-me-styles-hov-hover.msft.png" alt-text="Toggle the hover pseudostate on an element" lightbox="../media/css-elements-hover-over-me-styles-hov-hover.msft.png":::
       Toggle the `:hover` pseudostate on an element
    :::image-end:::


<!-- ====================================================================== -->
## Change the dimensions of an element

Use the **Box Model** interactive diagram in the **Styles** panel to change the width, height, padding, margin, or border length of an element.

> [!NOTE]
> Complete the [View the CSS for an element](#view-the-css-for-an-element) tutorial before doing this one.

1.  [Open CSS Examples](#open-css-examples).
1.  Hover on the `Change My Margin!` text, open the contextual menu (right-click), and choose **Inspect**.
1.  In the **Box Model** diagram in the **Styles** panel, hover on **padding**.  The padding of an element is highlighted in the viewport.

    > [!NOTE]
    > Depending on the size of your DevTools window, you may need to scroll to the bottom of the **Styles** panel to display the **Box Model**.

1.  Double-click the left margin in the **Box Model**, which currently has a value of `-` meaning that the element does not have a left-margin.
1.  Type `100px` and select `Enter`.  The **Box Model** defaults to pixels, but it also accepts other values, such as `25%`, or `10vw`.

    :::row:::
       :::column span="":::
          :::image type="complex" source="../media/css-elements-change-my-margin-styles-padding.msft.png" alt-text="Hover on the padding of the element" lightbox="../media/css-elements-change-my-margin-styles-padding.msft.png":::
             Hover on the padding of the element
          :::image-end:::
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/css-elements-change-my-margin-styles-margin-edit.msft.png" alt-text="Change the left-margin of the element" lightbox="../media/css-elements-change-my-margin-styles-margin-edit.msft.png":::
             Change the left-margin of the element
          :::image-end:::
       :::column-end:::
    :::row-end:::


<!-- ====================================================================== -->
## Debugging Media Queries

[Media Queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries/Using_media_queries) are a way to make your web product react to changes in the configuration settings for each user.  The most significant use case is to provide your product a different CSS layout depending on the dimensions of the viewport.  Using separate layouts allows for a one-column layout for mobile devices and multi-column layouts when there is more screen estate available.

If you want to debug or test the Media Queries you defined in your CSS, use the following steps.

1.  Open the developer tools and select the **Toggle device toolbar** icon second on the top-left, or select `Ctrl`+`Shift`+`M` (`Cmd`+`Shift`+`M` on macOS).

    :::image type="complex" source="../media/css-elements-media-queries-open-device-toolbar.msft.png" alt-text="Open the device toolbar" lightbox="../media/css-elements-media-queries-open-device-toolbar.msft.png":::
       Open the device toolbar
    :::image-end:::

1.  With the device toolbar open, select the `...` menu on the top-right and choose **View Media Queries**.  The colored bars displayed above the webpage represent the different media queries.

    :::image type="complex" source="../media/css-elements-media-queries-showing-mq.msft.png" alt-text="Show Media Queries in Device Toolbar" lightbox="../media/css-elements-media-queries-showing-mq.msft.png":::
       Show Media Queries in Device Toolbar
    :::image-end:::

1.  Hover on the boundaries in the bars to display the values of the different media queries.  Choose each to resize the web page to match.

    :::image type="complex" source="../media/css-elements-media-queries-select-bar.msft.png" alt-text="Choose Media Query from preview bar" lightbox="../media/css-elements-media-queries-select-bar.msft.png":::
       Choose Media Query from preview bar
    :::image-end:::

1.  To debug media queries and open the CSS file in the `Sources` editor; hover on any of the bar segments, open the contextual menu (right-click), and select `reveal in source code`.

    :::image type="complex" source="../media/css-elements-media-queries-reveal-in-sources.msft.png" alt-text="Reveal Media Queries in Sources Editor" lightbox="../media/css-elements-media-queries-reveal-in-sources.msft.png":::
       Reveal Media Queries in Sources Editor
    :::image-end:::


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/css/index) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
