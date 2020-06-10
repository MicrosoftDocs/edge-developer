---
title: Get Started With Viewing And Changing CSS
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/09/2020
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

# Get Started With Viewing And Changing CSS  

Complete these interactive tutorials to learn the basics of viewing and changing the CSS for a page using Microsoft Edge DevTools.  

## Open CSS Examples  

1.  Hold `Control` \(Windows\) or `Command` \(macOS\) and select **CSS Examples** to open in a new window.  
    
    [CSS Examples][GlitchDevToolsCssExamples]  
    
    > [!NOTE]
    > If you want to [dock your DevTools window][DevToolsCustomizePlacement] to the right of your viewport \(displayed in [Figure 1](#figure-1)\), select **Customize and control DevTools** `...`.  On the **Customize and control DevTools** drop-down menu, in the **Dock side** section, select **Dock to right**.  
    
## View the CSS for an element  

1.  [Open CSS Examples](#open-css-examples).  
1.  Hover on the `Inspect Me!` text, open the contextual menu \(right-click\), and select **Inspect**.  
    1.  In DevTools, on the **Elements** panel, in the **DOM Tree** tab, the `Inspect Me!` element is highlighted.  
        
        :::image type="complex" source="../media/css-elements-inspect-me.msft.png" alt-text="The inspected element is highlighted in the DOM Tree" lightbox="../media/css-elements-inspect-me.msft.png":::
           Figure 1:  The inspected element is highlighted in the **DOM Tree**  
        :::image-end:::  
        
    1.  In the `Inspect Me!` element, find the value of the `data-message` attribute and copy it.  
1.  On the page, in the **Value of `data-message`:** textbox, enter the value.  
1.  Hover on the `Inspect Me!` text, open the contextual menu \(right-click\), and select **Inspect**.  
    1.  In DevTools, on the **Elements** panel, select the **Styles** tab.  
    1.  In the **Styles** tab, the `Inspect Me!` element is highlighted.  
    1.  In the `Inspect Me!` element, find the `aloha` class rule.  
        
        > [!NOTE]
        > You see this rule because it is being applied to the `Inspect Me!` element.  
        
    1.  In the `aloha` class, find the value for the `padding` style and copy it.  
        
        :::image type="complex" source="../media/css-elements-inspect-me-styles.msft.png" alt-text="CSS classes being applied to the inspected element are highlighted in the Styles tab" lightbox="../media/css-elements-inspect-me-styles.msft.png":::
           Figure 2:  CSS classes being applied to the selected element, such as `aloha`, are displayed in the **Styles** tab  
        :::image-end:::  
        
1.  On the page, in the **Value of `padding`:** textbox, enter the value.  

## Add a CSS declaration to an element  

Use the **Styles** tab when you want to change or add CSS declarations to an element.  

> [!NOTE]
> Complete the [View the CSS for an element](#view-the-css-for-an-element) tutorial before doing this one.  

1.  [Open CSS Examples](#open-css-examples).  
1.  Hover on the `Add A Background Color To Me!` text, open the contextual menu \(right-click\), and select **Inspect**.  
1.  Select `element.style` near the top of the **Styles** tab.  
1.  Type `background-color` and press `Enter`.  
1.  Type `honeydew` and press `Enter`.  In the **DOM Tree** you should see that an inline style declaration was applied to the element.  
    
    :::image type="complex" source="../media/css-elements-add-background-color-to-me-styles-p.msft.png" alt-text="Adding a CSS declaration to the element using the Styles tab" lightbox="../media/css-elements-add-background-color-to-me-styles-p.msft.png":::
       Figure 3:  The `background-color:honeydew` declaration has been applied to the element using the `element.style` section of the **Styles** tab  
    :::image-end:::  
    
## Add a CSS class to an element  

Use the **Styles** tab to see how an element looks when a CSS class is applied to or removed from an element.  

> [!NOTE]
> Complete the [View the CSS for an element](#view-the-css-for-an-element) tutorial before doing this one.  

1.  [Open CSS Examples](#open-css-examples).  
1.  Hover on the `Add A Class To Me!` text, open the contextual menu \(right-click\), and select **Inspect**.  
1.  Select **.cls**.  DevTools reveals a text box where you may add classes to the selected element.  
1.  Type `color_me` in the **Add new class** text box and then press `Enter`.  A checkbox appears below the **Add new class** text box, where you may toggle the class on and off.  If the `Add A Class To Me!` element has any other classes applied to it, you are also able to toggle each from here.  
    
    :::image type="complex" source="../media/css-elements-add-a-class-to-me-styles-cls.msft.png" alt-text="Applying the color_me class to the element" lightbox="../media/css-elements-add-a-class-to-me-styles-cls.msft.png":::
       Figure 4:  The `color_me` class has been applied to the element using the **.cls** section of the **Styles** tab  
    :::image-end:::  
    
## Add a pseudostate to a class  

Use the **Styles** tab to permanently apply a CSS pseudostate to an element.  DevTools supports `:active`, `:focus`, `:hover`, and `:visited`.  

> [!NOTE]
> Complete the [View the CSS for an element](#view-the-css-for-an-element) tutorial before doing this one.  

1.  [Open CSS Examples](#open-css-examples).  
1.  Hover over the `Hover Over Me!` text.  The background color changes.  
1.  Hover on the `Hover Over Me!` text, open the contextual menu \(right-click\), and select **Inspect**.  
1.  In the **Styles** tab, select **:hov**.  
1.  Check the **:hover** checkbox.  The background color changes like before, even though you are not actually hovering over the element.  
    
    :::image type="complex" source="../media/css-elements-hover-over-me-styles-hov-hover.msft.png" alt-text="Toggling the hover pseudostate on an element" lightbox="../media/css-elements-hover-over-me-styles-hov-hover.msft.png":::
       Figure 5:  Toggling the `:hover` pseudostate on an element  
    :::image-end:::  
    
## Change the dimensions of an element  

Use the **Box Model** interactive diagram in the **Styles** tab to change the width, height, padding, margin, or border length of an element.  

> [!NOTE]
> Complete the [View the CSS for an element](#view-the-css-for-an-element) tutorial before doing this one.  

1.  [Open CSS Examples](#open-css-examples).  
1.  Hover on the `Change My Margin!` text, open the contextual menu \(right-click\), and select **Inspect**.  
1.  In the **Box Model** diagram in the **Styles** tab, hover over **padding**.  The padding of an element is highlighted in the viewport.  

    > [!NOTE]
    > Depending on the size of your DevTools window, you may need to scroll to the bottom of the **Styles** tab to see the **Box Model**.  

1.  Double-click the left margin in the **Box Model**, which currently has a value of `-` meaning that the element does not have a left-margin.  
1.  Type `100px` and press `Enter`.  The **Box Model** defaults to pixels, but it also accepts other values, such as `25%`, or `10vw`.  
    
    :::row:::
       :::column span="":::
          :::image type="complex" source="../media/css-elements-change-my-margin-styles-padding.msft.png" alt-text="Hovering over the padding of the element" lightbox="../media/css-elements-change-my-margin-styles-padding.msft.png":::
             Figure 6:  Hovering over the padding of the element  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/css-elements-change-my-margin-styles-margin-edit.msft.png" alt-text="Changing the left-margin of the element" lightbox="../media/css-elements-change-my-margin-styles-margin-edit.msft.png":::
             Figure 7:  Changing the left-margin of the element  
          :::image-end:::  
       :::column-end:::
    :::row-end:::  
    
## Debugging Media Queries  

[Media Queries][MDNUsingMediaGueries] are a way to make your web product react to changes in the configuration settings for each user.  The most significant use case is to provide your product a different CSS layout depending on the dimensions of the viewport.  Using separate layouts allows for a one-column layout for mobile devices and multi-column layouts when there is more screen estate available.  

If you want to debug or test the Media Queries you defined in your CSS, use the following steps.  

1.  Open the developer tools and select the **Toggle device toolbar** icon second on the top-left, or press `Ctrl`+`Shift`+`M` \(`Cmd`+`Shift`+`M` on macOS\).  
    
    :::image type="complex" source="../media/css-elements-media-queries-open-device-toolbar.msft.png" alt-text="Opening the device toolbar" lightbox="../media/css-elements-media-queries-open-device-toolbar.msft.png":::
       Figure 8:  Opening the device toolbar  
    :::image-end:::  
    
1.  With the device toolbar open, select the `...` menu on the top-right and select **View Media Queries**.  You should see colored bars above the display of the page that represent the different media queries.  
    
    :::image type="complex" source="../media/css-elements-media-queries-showing-mq.msft.png" alt-text="Showing Media Queries in Device Toolbar" lightbox="../media/css-elements-media-queries-showing-mq.msft.png":::
       Figure 9:  Showing Media Queries in Device Toolbar  
    :::image-end:::  
    
1.  Hover over the boundaries in the bars to see the values of the different media queries. Select each to resize the web page to match.  
    
    :::image type="complex" source="../media/css-elements-media-queries-select-bar.msft.png" alt-text="Selecting Media Query from preview bar" lightbox="../media/css-elements-media-queries-select-bar.msft.png":::
       Figure 10:  Selecting Media Query from preview bar  
    :::image-end:::  
    
1.  To debug media queries and open the CSS file in the `Sources` editor; hover on any of the bar segments, open the contextual menu \(right-click\), and select `reveal in source code`.  
    
    :::image type="complex" source="../media/css-elements-media-queries-reveal-in-sources.msft.png" alt-text="Revealing Media Queries in Sources Editor" lightbox="../media/css-elements-media-queries-reveal-in-sources.msft.png":::
       Figure 11:  Revealing Media Queries in Sources Editor  
    :::image-end:::  
    
<!-- links -->  

[DevToolsCustomizePlacement]: /microsoft-edge/devtools-guide-chromium/customize/placement "Change Microsoft Edge DevTools Placement (Undock, Dock To Bottom, Dock To Left)"  

[GlitchDevToolsCssExamples]: https://microsoft-edge-chromium-devtools.glitch.me/static/css/examples/ecma.html "CSS Examples - Microsoft Edge (Chromium) DevTools | Glitch"  

[MDNUsingMediaGueries]: https://developer.mozilla.org/docs/Web/CSS/Media_Queries/Using_media_queries "Using media queries | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/css/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
