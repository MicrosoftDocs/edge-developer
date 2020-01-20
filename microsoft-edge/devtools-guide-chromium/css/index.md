---
title: Get Started With Viewing And Changing CSS
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





# Get Started With Viewing And Changing CSS   



Complete these interactive tutorials to learn the basics of viewing and changing the CSS for a page using Microsoft Edge DevTools.  

## Open CSS Examples  

1.  Hold `Control` \(Windows\) or `Command` \(macOS\) and click **CSS Examples** to open in a new window.  
    
    [CSS Examples][GlitchDevToolsCssExamples]  

> [!NOTE]
> If you want to dock your DevTools window to the right of your viewport \(displayed in [Figure 1](#figure-1)\), click **Customize and control DevTools** `...`.  On the **Customize and control DevTools** drop-down menu, in the **Dock side** section, select **Dock to right**.  
    
## View the CSS for an element   

1.  [Open CSS Examples](#open-css-examples).  
1.  Right-click the `Inspect Me!` text and select **Inspect**.  
    1.  In DevTools, on the **Elements** panel, in the **DOM Tree** tab, the `Inspect Me!` element is highlighted.  
        
        > ##### Figure 1  
        > The inspected element is highlighted in the **DOM Tree**  
        > ![The inspected element is highlighted in the DOM Tree][ImageInspect]  
        
    1.  In the `Inspect Me!` element, find the value of the `data-message` attribute and copy it.  
1.  On the page, in the **Value of `data-message`:** textbox, enter the value.  
1.  Right-click the `Inspect Me!` text and select **Inspect**.  
    
    1.  In DevTools, on the **Elements** panel, select the **Styles** tab.  
    1.  In the **Styles** tab, the `Inspect Me!` element is highlighted.  
    1.  In the `Inspect Me!` element, find the `aloha` class rule.  
        
        > [!NOTE]
        > You see this rule because it is being applied to the `Inspect Me!` element.  
        
    1.  In the `aloha` class, find the value for the `padding` style and copy it.  
        
        > ##### Figure 2  
        > CSS classes being applied to the selected element, such as `aloha`, are displayed in the **Styles** tab  
        > ![CSS classes being applied to the inspected element are highlighted in the Styles tab][ImageAloha]  
        
1.  On the page, in the **Value of `padding`:** textbox, enter the value.  

## Add a CSS declaration to an element   

Use the **Styles** tab when you want to change or add CSS declarations to an element.  

> [!NOTE]
> Complete the [View the CSS for an element](#view-the-css-for-an-element) tutorial before doing this one.  

1.  [Open CSS Examples](#open-css-examples).  
1.  Right-click the `Add A Background Color To Me!` text and select **Inspect**.  
1.  Click `element.style` near the top of the **Styles** tab.  
1.  Type `background-color` and press `Enter`.  
1.  Type `honeydew` and press `Enter`.  In the **DOM Tree** you should see that an inline style declaration was applied to the element.  

> ##### Figure 3  
> The `background-color:honeydew` declaration has been applied to the element via the `element.style` section of the **Styles** tab  
> ![Adding a CSS declaration to the element via the Styles tab][ImageDeclaration]  

## Add a CSS class to an element   

Use the **Styles** tab to see how an element looks when a CSS class is applied to or removed from an element.  

> [!NOTE]
> Complete the [View the CSS for an element](#view-the-css-for-an-element) tutorial before doing this one.  

1.  [Open CSS Examples](#open-css-examples).  
1.  Right-click the `Add A Class To Me!` element and select **Inspect**.  
1.  Click **.cls**.  DevTools reveals a text box where you may add classes to the selected element.  
1.  Type `color_me` in the **Add new class** text box and then press `Enter`.  A checkbox appears below the **Add new class** text box, where you may toggle the class on and off.  If the `Add A Class To Me!` element has any other classes applied to it, you are also able to toggle each from here.  

> ##### Figure 4  
> The `color_me` class has been applied to the element via the **.cls** section of the **Styles** tab  
> ![Applying the color_me class to the element][ImageApplyClass]  

## Add a pseudostate to a class   

Use the **Styles** tab to permanently apply a CSS pseudostate to an element.  DevTools supports `:active`, `:focus`, `:hover`, and `:visited`.  

> [!NOTE]
> Complete the [View the CSS for an element](#view-the-css-for-an-element) tutorial before doing this one.  

1.  [Open CSS Examples](#open-css-examples).  
1.  Hover over the `Hover Over Me!` text.  The background color changes.  
1.  Right-click the `Hover Over Me!` text and select **Inspect**.  
1.  In the **Styles** tab, click **:hov**.  
1.  Check the **:hover** checkbox.  The background color changes like before, even though you are not actually hovering over the element.  

> ##### Figure 5  
> Toggling the `:hover` pseudostate on an element  
> ![Toggling the hover pseudostate on an element][ImageSetHover]  

## Change the dimensions of an element   

Use the **Box Model** interactive diagram in the **Styles** tab to change the width, height, padding, margin, or border length of an element.  

> [!NOTE]
> Complete the [View the CSS for an element](#view-the-css-for-an-element) tutorial before doing this one.  

1.  [Open CSS Examples](#open-css-examples).  
1.  Right-click the `Change My Margin!` element and select **Inspect**.  
1.  In the **Box Model** diagram in the **Styles** tab, hover over **padding**.  The padding of an element is highlighted in the viewport.  

    > [!NOTE]
    > Depending on the size of your DevTools window, you may need to scroll to the bottom of the **Styles** tab to see the **Box Model**.  

1.  Double-click the left margin in the **Box Model**, which currently has a value of `-` meaning that the element does not have a left-margin.  
1.  Type `100px` and press `Enter`.  The **Box Model** defaults to pixels, but it also accepts other values, such as `25%`, or `10vw`.  

> ##### Figure 6  
> Hovering over the padding of the element  
> ![Hovering over the padding of the element][ImageShowPadding]  

> ##### Figure 7  
> Changing the left-margin of the element  
> ![Changing the left-margin of the element][ImageChangeMargin]  

 



<!-- image links -->  

[ImageInspect]: images/elements-inspect-me.msft.png "Figure 1: The inspected element is highlighted in the DOM Tree"  
[ImageAloha]: images/elements-inspect-me-styles.msft.png "Figure 2: CSS classes being applied to the inspected element are highlighted in the Styles tab"  
[ImageDeclaration]: images/elements-add-background-color-to-me-styles-p.msft.png "Figure 3: Adding a CSS declaration to the element via the Styles tab"  
[ImageApplyClass]: images/elements-add-a-class-to-me-styles-cls.msft.png "Figure 4: Applying the color_me class to the element"  
[ImageSetHover]: images/elements-hover-over-me-styles-hov-hover.msft.png "Figure 5: Toggling the hover pseudostate on an element"  
[ImageShowPadding]: images/elements-change-my-margin-styles-padding.msft.png "Figure 6: Hovering over the padding of the element"  
[ImageChangeMargin]: images/elements-change-my-margin-styles-margin-edit.msft.png "Figure 7: Changing the left-margin of the element"  

<!-- links -->  

<!--[DevToolsPlacement]: ../placement.md "Change Microsoft Edge DevTools Placement (Undock, Dock To Bottom, Dock To Left)"  -->  

[GlitchDevToolsCssExamples]: https://microsoft-edge-chromium-devtools.glitch.me/static/css/examples/ecma.html "CSS Examples - Microsoft Edge (Chromium) DevTools | Glitch"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/css/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
