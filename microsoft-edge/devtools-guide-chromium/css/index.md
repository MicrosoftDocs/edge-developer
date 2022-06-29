---
title: Get started viewing and changing CSS
description: Learn how to use Microsoft Edge DevTools to view and change the CSS of a page.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 05/04/2021
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
# Get started viewing and changing CSS

Follow these interactive tutorial sections to learn the basics of viewing and changing the CSS for a page by using DevTools.


<!-- ====================================================================== -->
## View the CSS for an element

1. Open the [CSS Examples](https://microsoftedge.github.io/Demos/devtools-css-get-started/) demo page in a new window or tab.  To do this, right-click the link, or press and hold `Ctrl` (Windows, Linux) or `Command` (macOS) and then click the link.

   <!-- You can view the source files for the CSS Examples demo page at the [MicrosoftEdge/Demos > devtools-css-get-started](https://github.com/MicrosoftEdge/Demos/tree/main/devtools-css-get-started) repo folder. -->

1. Right-click the `Inspect Me!` text, and then select **Inspect**.

   In DevTools, on the **Elements** tool, in the **DOM Tree** panel, the `Inspect Me!` element is highlighted.

   ![The inspected element is highlighted in the DOM Tree.](../media/css-elements-inspect-me.msft.png)

1. In the `Inspect Me!` element, find the value of the `data-message` attribute and copy it.

1. On the page, in the **Value of `data-message`:** text box, enter the value.

1. Right-click the `Inspect Me!` text, and then select **Inspect**.

1. In DevTools, on the **Elements** tool, select the **Styles** panel.  In the **Styles** panel, the `Inspect Me!` element is highlighted.

1. In the `Inspect Me!` element, find the `aloha` class rule.  This rule is displayed, because it is being applied to the `Inspect Me!` element.

1. In the `aloha` class, find the value for the `padding` style and copy it.

   ![CSS classes is applied to the inspected element are highlighted in the Styles panel.](../media/css-elements-inspect-me-styles.msft.png)

1. On the page, in the **Value of `padding`:** text box, enter the value.


<!-- ====================================================================== -->
## Add a CSS declaration to an element

Use the **Styles** panel when you want to change or add CSS declarations to an element.

1. First, we recommend doing the [View the CSS for an element](#view-the-css-for-an-element) tutorial section, above.

1. Open the [CSS Examples](https://microsoftedge.github.io/Demos/devtools-css-get-started/) demo page in a new window or tab.

1. Right-click the `Add A Background Color To Me!` text, and then select **Inspect**.

1. Click `element.style` near the top of the **Styles** panel.

1. Type `background-color` and then press `Enter`.

1. Type `honeydew` and then press `Enter`.  In the **DOM Tree**, an inline style declaration applied to the element is displayed.

    The `background-color:honeydew` declaration is applied to the element using the `element.style` section of the **Styles** panel:

   ![Add a CSS declaration to the element using the Styles panel.](../media/css-elements-add-background-color-to-me-styles-p.msft.png)


<!-- ====================================================================== -->
## Add a CSS class to an element

To display how an element looks when a CSS class is applied to or removed from an element, see the **Styles** panel.

1. First, we recommend doing the [View the CSS for an element](#view-the-css-for-an-element) tutorial section, above.

1. Open the [CSS Examples](https://microsoftedge.github.io/Demos/devtools-css-get-started/) demo page in a new window or tab.

1. Right-click the `Add A Class To Me!` text, and then select **Inspect**.

1. Click **.cls**.  DevTools reveals a text box where you can add CSS classes to the page element that you're inspecting.

1. Type `color_me` in the **Add new class** text box and then press `Enter`.  A checkbox appears below the **Add new class** text box, where you can toggle the class on and off.  If the `Add A Class To Me!` element has any other classes applied to it, you are also able to toggle each from here.

   The `color_me` class is applied to the element using the **.cls** section of the **Styles** panel:

   ![Apply the color_me class to the element.](../media/css-elements-add-a-class-to-me-styles-cls.msft.png)


<!-- ====================================================================== -->
## Add a pseudostate to a class

Use the **Styles** panel to permanently apply a CSS pseudostate to an element.  DevTools supports `:active`, `:focus`, `:hover`, and `:visited`.

1. First, we recommend doing the [View the CSS for an element](#view-the-css-for-an-element) tutorial section, above.

1. Open the [CSS Examples](https://microsoftedge.github.io/Demos/devtools-css-get-started/) demo page in a new window or tab.

1. Hover on the `Hover Over Me!` text.  The background color changes.

1. Right-click the `Hover Over Me!` text, and then select **Inspect**.

1. In the **Styles** panel, click **:hov**.

1. Select the **:hover** checkbox.  The background color changes like before, even though you aren't actually hovering over the element.

   Here's the result of toggling the `:hover` pseudostate on an element:

   ![Toggling the hover pseudostate on an element.](../media/css-elements-hover-over-me-styles-hov-hover.msft.png)


<!-- ====================================================================== -->
## Change the dimensions of an element

Use the **Box Model** interactive diagram in the **Styles** panel to change the width, height, padding, margin, or border length of an element.

1. First, we recommend doing the [View the CSS for an element](#view-the-css-for-an-element) tutorial section, above.

1. Open the [CSS Examples](https://microsoftedge.github.io/Demos/devtools-css-get-started/) demo page in a new window or tab.

1. Right-click the `Change My Margin!` text, and then select **Inspect**.

1. In the **Box Model** diagram in the **Styles** panel, hover on **padding**.  The element's padding is highlighted in the viewport.

   Depending on the size of your DevTools window, you may need to scroll to the bottom of the **Styles** panel to display the **Box Model**.

1. Double-click the left margin in the **Box Model**, which currently has a value of `-`, meaning that the element doesn't have a `margin-left`.

1. Type `100px` and press `Enter`.  The **Box Model** defaults to pixels, but it also accepts other values, such as `25%`, or `10vw`.

   Hovering over the element's padding:

   ![Hovering over the element's padding.](../media/css-elements-change-my-margin-styles-padding.msft.png)

   Changing the element's left margin:

   ![Changing the element's left margin.](../media/css-elements-change-my-margin-styles-margin-edit.msft.png)


<!-- ====================================================================== -->
## Debugging Media Queries

[Media Queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries/Using_media_queries) are a way to make your website react to changes in the configuration settings for each user.  The most significant use case is to provide your product a different CSS layout depending on the dimensions of the viewport.

Using separate layouts allows for a one-column layout for mobile devices and multi-column layouts when there is more screen estate available.

To debug or test the Media Queries you defined in your CSS:

1. Open DevTools.  To do this, you can right-click in a webpage and then select **Inspect**.

1. Click the **Toggle device emulation** (![Device Emulation icon.](../media/device-emulation-icon-light-theme.png)) button.  Or, when DevTools has focus, press `Ctrl`+`Shift`+`M` (`Cmd`+`Shift`+`M` on macOS).

   <!-- todo: update to show new tooltip: -->

   ![Opening the device toolbar.](../media/css-elements-media-queries-open-device-toolbar.msft.png)

1. With the device toolbar open, click the `...` menu on the top-right and then select **Show media queries**:

   ![Showing Media Queries in the Device Toolbar.](../media/css-elements-media-queries-showing-mq.msft.png)

   The colored bars above the webpage represent the different media queries.
       
1. Hover on the boundaries in the bars to display the values of the different media queries.  Click each media query value to resize the web page to match.

   ![Selecting a media query from the preview bar.](../media/css-elements-media-queries-select-bar.msft.png)

1. To debug media queries and open the CSS file in the `Sources` editor, right-click a bar segment and then select `reveal in source code`.

   ![Reveal Media Queries in Sources Editor.](../media/css-elements-media-queries-reveal-in-sources.msft.png)


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/css/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License.](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
