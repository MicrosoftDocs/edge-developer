---
description: Getting started for testing for accessibility problems using DevTools
title: Accessibility testing basics
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/06/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Accessibility testing basics

In this article we're going to cover some of the features you can use in DevTools to test for accessibility problems. As an example, we're using a demo page that has some accessibility problems and go through using different features how to detect and fix them.

:::image type="complex" source="../media/xxx.png" alt-text="The demo page used in this article with a few accessibility issues" lightbox="../media/xxx.png":::
    The demo page used in this article with a few accessibility issues  
:::image-end:::  

Please [navigate to the demo page][DevToolsA11yErrorsDemopage] to try it out yourself and you can test along.

## Automated testing

Once you open the web site in the browser and open DevTools the first thing you will see some automatically detected problems flagged up. Activate the Issues counter to open the [Issues Panel][DevToolsIssuesPanel] to see what the problems are. 

:::image type="complex" source="../media/xxx.png" alt-text="The issues counter in DevTools indicating how many problems there are in the current document. Activating it will get you to the explanations" lightbox="../media/xxx.png":::
    The issues counter in DevTools indicate how many problems there are in the current document. Activating it will get you to the explanations  
:::image-end:::  

For the purpose of this article, let's focus on the Accessibility section.

:::image type="complex" source="../media/xxx.png" alt-text="Accessibility warnings displayed in the Issues tool" lightbox="../media/xxx.png":::
    Accessibility warnings displayed in the Issues tool  
:::image-end:::  

The first warning you can see is `Form elements must have labels: Element has no title attribute. Element has no placeholder attribute`. If you activate the `Open in Elements` link DevTools will highlight the Element and show you the HTML source and applied CSS.

:::image type="complex" source="../media/xxx.png" alt-text="Elements tool showing the problematic HTML after activating the link in the Issues tool" lightbox="../media/xxx.png":::
    Elements tool showing the problematic HTML after activating the link in the Issues tool  
:::image-end:::  

In this case, the HTML has a `label` element that doesn't work.

```html
<label>Search</label>
<input type="search">
<input type="submit" value="go"> 
```

The use of the `label` element here is wrong as there is no connection between the `label` and the `input`. You can also test this by activating the `Search` text in the page header. A valid HTML label would focus the search box when you activate it. You either need to nest the `input` in the `label` or add a `for` attribute pointing to an `id` attribute of the `input` element.

You can also activate the explanatory links in the **Issues Panel** to get this information.

:::image type="complex" source="../media/xxx.png" alt-text="Links in the Issues pane pointing to more in-depth information about the issue" lightbox="../media/xxx.png":::
    Links in the Issues pane pointing to more in-depth information about the issue  
:::image-end:::  

The other automatically detected problem is that many of the images in the document don't have any alternative text. If you expand the `Images must have alternate text: Element has no title attribute` warning you get four instances of images with that problem.

:::image type="complex" source="../media/xxx.png" alt-text="The Issues tool reporting images with missing alternative text" lightbox="../media/xxx.png":::
    The Issues tool reporting images with missing alternative text  
:::image-end:::

In the `Other` section of the **Issues Panel** you also find that two elements on the page don't have enough contrast.

:::image type="complex" source="../media/xxx.png" alt-text="Contrast problems reported in the Issues tool" lightbox="../media/xxx.png":::
    Contrast problems reported in the Issues tool  
:::image-end:::

You get detailed explanation what that means and when you drill down you get a list of which elements they are. Activating the links pointing to the elements highlights 
them in the document.

:::image type="complex" source="../media/xxx.png" alt-text="Element in the document highlightter after activating the link to it" lightbox="../media/xxx.png":::
    Element in the document highlightter after activating the link to it  
:::image-end:::

These are some very obvious accessibility problems that can be avoided. Using the **Issues Panel** and its guided explanations to fix them gets you on the way towards an accessible product.

## Limits of automated testing

Getting an automated report from a tool like the [Issues Panel][DevToolsIssuesPanel], [Accessibility Insights][AccessibilityInsights] or [Lighthouse][Lighthouse] is only the beginning of your accessibility testing journey. 

Accessibility is about human interaction - people with different needs using various technical environments using your products. This can't be automated, but needs verification by a human navigating the product. In the best scenario you'd have access to testers with different needs and using various environments, but you can already do a lot yourself by using the keyboard to navigate and by inspecting different parts of the page.

There are a lot more issues in this demo page that automated testing doesn't catch. Some only show up when you interact with the page. Others when you change the way the page is displayed and others are built in a way that the automated scan of the document couldn't even detect that there is a problem. 

One of those is the donation form. When you use a mouse, you can click the different options to donate money. When you try to use the keyboard to access it, nothing happens. 

:::image type="complex" source="../media/xxx.png" alt-text="Donation form in the demo page" lightbox="../media/xxx.png":::
    Donation form in the demo page  
:::image-end:::

To find out what is going wrong, you need to use the **Inspector** tool.

## Using the Inspector to detect accessibility issues

The Inspector tool is the first icon top right of the DevTools. Once you activate it, you can move your pointer around the page and highlight any element. 

:::row:::
    :::column:::
        :::image type="complex" source="../media/xxx.png" alt-text="You can enable the Inspector tool by activating its icon." lightbox="../media/xxx.png":::
            You can enable the Inspector tool by activating its icon.  
        :::image-end:::  
     :::column-end:::
    :::column:::
        :::image type="complex" source="../media/xxx.png" alt-text="Devtools showing element dimensions as a colour overlay and element details as an information overlay" lightbox="../media/xxx.png":::
            Devtools showing element dimensions as a colour overlay and element details as an information overlay  
        :::image-end:::  
    :::column-end:::
:::row-end:::

The Inspector shows a coloured overlay of the layout properties of the element and an information pane listing the following details when available:

* Positioning - if the element is positioned using flexbox or grid you see an appropriate icon
* Element name - `h1`, `h2`, `div`, etc…
* Element dimensions in pixels
* Color as formatted (f.e. `#336699`) and as a color swatch
* Font information (size and font families)
* Margin and padding in pixels
* [Contrast ratio][W3CContrastRatio] as defined by the [WCAG Guidelines][WCAG] and if there is enough contrast (green checkmark icon) or not enough (yellow exclamation mark icon)
* Name of the element
* Role of the element
* If the element is keyboard-focusable (green checkmark icon if it is, grey circle with line if it isn't)

Activating any page element will take you to the **Elements** tool, show the HTML of the element in the DOM tree and the applied CSS in the **Styles** tool. 

:::image type="complex" source="../media/xxx.png" alt-text="Details about the selected element displayed in the Elements tool" lightbox="../media/xxx.png":::
    Details about the selected element displayed in the Elements tool  
:::image-end:::  

If you move your pointer with the **Elements** tool open, the DOM tree automatically refreshes.

To test the accessibility of an element, the most important pieces of information are `Contrast`, `Name`, `Role` and `Keyboard-focusable`. Contrast defines if an element can be understood by people with low vision, name and role is what assistive technology like screen readers will report about the element and keyboard-focusable tells you if users can reach the element regardless of input device.

## Testing interaction accessibility

Not all users have a pointer or touch device and not all users can see the web projects we create. This is why it is important that all our interfaces work at least with a keyboard. 

You can test this by using a keyboard to navigate the document, using the `tab` key to jump from element to element. If you do this on the demo page you will see that the first thing you focus on is the search form in the header. Hitting `enter` even allows you to submit the form, so that works despite the label issue we discovered earlier using the **Issues Panel**. When you hit tab instead of enter the next element you focus on is the first `More` links in the content section of the page. Once you go past the last `More` link, the page scrolls up again and you seem to be on some element, but you don't know which. 

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

If you look to the bottom left of the screen (or if you used a screen reader) you realize that you are on the menu of the page as the browser shows the URL the link points to there. 

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

Activating `tab` again will get you to the entry field in the donation form. However, you can not reach the buttons above it where you could select `50`, `100` or `200`. Activating `Enter` also doesn't submit the form. 

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

Activating `tab` again will get you to the main menu of the page where you can access different sections of it by activating `Enter`. You know which element you are on as there is a focus outline and you can select different pages by activating `Enter`.

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

We found some issues here to fix:

* The left hand navigation doesn't tell the user where they are if they use a keyboard
* The buttons and the submission of the donation form doesn't work with a keyboard
* The order of the keyboard access seems wrong. You navigate through all the `More` links in the document before you reach the menu on the left. This makes the menu pointless as you already consumed all the content it should provide easy access to. 

Let's analyze the problems usind DevTools. 

## Analyzing interaction problems using DevTools

If you use the **Inspector** tool to highlight the menu and drill down in the HTML view to the `a` element you can see why this menu is confusing to keyboard users.

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

The problem is that whilst the styles of the page have a `hover` state that shows you which menu item you are on when you use a mouse, there is no `focus` state to go along with it. Even worse, the links have an `outline: none` setting in the CSS. This is a common practice to remove the outline browsers automatically add to elements when you focus them with a keyboard. As you can see here, this can cause confusion.

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

Debugging the donation form means understanding why this doesn't get flagged by automatic testing as a problem. To this end, you can use the **Inspector** tool to hover over the buttons. The result is that none of them are keyboard accessible as indicated by the grey ring. They also have no name and a role of `generic` which means they effectively are inaccessible to assistive technology.

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

If you activate the button the **Inspector** tool takes you to the **Elements** tool and shows you the form's HTML:

```HTMl
<div class="donationrow">
    <div class="donationbutton">50</div>
    <div class="donationbutton">100</div>
    <div class="donationbutton">200</div>
</div>
<div class="donationrow">
    <label for="freedonation">Other</label>
    <input id="freedonation" class="smallinput">
</div>
<div class="donationrow">
    <div class="submitbutton">Donate</div>
</div>
``` 

The use of `label` and `input` here is valid and the label functions. The `input` is also keyboard accessible. The rest of the form's markup are `div` elements, that are easy to style but have no semantic meaning. 

The form's functionality is created with JavaScript and you can test this by checking the `Event Listeners` tab in the lower drawer of DevTools. Activating the `buttons.js:18` link you get to the `Sources` tool and can inspect the applied JavaScript. 

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

Using a `click` event to read the buttons is good practice as it fires both on pointer and keyboard interaction. However, as a `div` element isn't keyboard accessible this functionality never executes unless you use a pointer. This is a classic example where some extra JavaScript was necessary to create functionality that `button` elements would have provided natively and simulating their functionality ended up as an inaccessible experience.

Using the **Inspector** to check each page element individually can become pretty time-consuming. An alternative way is to use the `Accessibility` tool to navigate the document's accessibiliy tree. This is a representation of what information about the current document assistive technology like screen readers get.

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

Any element in the tree that doesn't have a name or role is a problem as it won't be available to keyboard users or those using assistive technology. 

Another issue you may remember is the odd tabbing order of the document, where keyboard users access the navigation menu on the left as after tabbing through all the `More` links. The menu is meant to be a shortcut to reach deep into the page content and as you need to go through the whole page to reach it becomes useless. The reason is that the source order of the document determines the order of keyboard access. If you look at the source code of the document, the menu appears after the main content of the page, it only shows up visually before it because it has been positioned using CSS. 

You can test issues like that using the `Source order viewer` in the `Accessibilty` tool. Scroll all the way down and tick the `Show source order` box. When you now navigate the DOM view of the `Elements` tool you will get numeric overlays over each element showing you the source order without having to navigate around using a keyboard. 

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

## Testing colour accessibility

In addition to the automatic color contrast tests shown earlier you can also use the **Inspector** tool to check if individual page elements have enough contrast. If contrast information is available, the information pane shows the contrast ratio and a green checkbox icon for elements with enough contrast and a yellow alert icon for those that don't. 

For example, the menu elements on the left have enough contrast, but the green `Dogs` in the `Donation status` section does not.

:::row:::
    :::column:::
        :::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
            ***ALT***  
        :::image-end:::  
     :::column-end:::
    :::column:::
        :::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
            ***ALT***  
        :::image-end:::  
    :::column-end:::
:::row-end:::

However, this isn't quite enough as the elements on the page could have different states and you need to test those, too. For example, if you move your mouse over the menu of the page you get a rather involved animation that changes the colors. 

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

If you switch on the **Inspector** tool, you can't reach the state of the menu element to test the contrast ratio as the `hover` state in your styles never gets triggered. Instead you need to simulate the state of the menu item using the state simulation in the `Styles` tool. Activate the element to show it in the `Elements` tool. If needed, navigate in the DOM view to the element that has a `hover` state in the CSS applied to it. In this case this is the `a` element.

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::

Activate the `Toggle Element state` button stating `:hov` and you get a menu to choose which state you want to simulate. 

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::

Check the box next to the `:hover` state and you will get a yellow dot next to the DOM element indicating that it has a simulated state. You will also notice that the menu item now shows up in the page as if the pointer was over it.

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::

Once the simulated state is applied you can use the **Inspect** tool again to check the contrast of the element when the user hovers over it. In this case, the contrast isn't high enough.

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::

State simulation is also a good way to check if you considered different user needs. In the case of this menu, you can find out that simulating `:focus` makes no difference to the look and feel, and that is a problem as we've experienced earlier when using the keyboard to navigate the document.

## Testing for different environments

Another consideration when it comes to color accessibility is that there could be different themes you need to test for contrast issue. Most operating systems these days come with a dark and a light mode and you can react to this setting in your CSS using a media query.





To better meet the needs of your users with [color vision deficiency][ColorblindawarenessMain] \(color blindness\), [Microsoft Edge DevTools][DevtoolsIndex] allow you to simulate specific color vision deficiencies.  The **Emulate vision deficiencies** tool simulates the following categories.  

| Color vision deficiency | Details |  
|:--- |:--- |  
| Blurred vision | The user has difficulty focusing on fine details. |  
| Protanopia | The user is unable to perceive any red light. |  
| Deuteranopia | The user is unable to perceive any green light. |  
| Tritanopia | The user is unable to perceive any blue light. |  
| Achromatopsia | The user is unable to perceive any color, which reduces all color to a shade of grey. |  

Navigate to the Rendering Tools  

To simulate a vision deficiency being applied for your web product, open the [Rendering Tools][DevtoolsRenderingToolsIndex].  

1.  To open the Rendering Tools, choose the `...` menu item in the toolbar  
1.  Choose **More tools**  
1.  Choose **Rendering**  
    
    :::image type="complex" source="../media/getting-to-the-rendering-tools.msft.png" alt-text="Opening the Rendering Tools" lightbox="../media/getting-to-the-rendering-tools.msft.png":::
       Opening the **Rendering Tools**  
    :::image-end:::  

The **Rendering** menu appears in the drawer.  

1.  Scroll down to the `Emulate vision deficiencies` menu item and choose the drop-down menu to display the options.  
    
    :::image type="complex" source="../media/accessibility-emulate-vision-menu.msft.png" alt-text="The Emulate Vision Deficiencies menu on the Rendering drawer" lightbox="../media/accessibility-emulate-vision-menu.msft.png":::
       The **Emulate vision deficiencies** menu on the **Rendering** drawer  
    :::image-end:::  
    
1.  Choose an option.  
    
    :::image type="complex" source="../media/accessibility-emulate-vision-menu-options.msft.png" alt-text="The Emulate Vision Deficiencies menu options" lightbox="../media/accessibility-emulate-vision-menu-options.msft.png":::
       The **Emulate vision deficiencies** menu options  
    :::image-end:::  
    
1.  The main windows displays the simulation of your chosen option applied to the current page.  
    
    :::row:::
       :::column span="":::
          :::image type="complex" source="../media/accessibility-blurred-vision-emulation.msft.png" alt-text="Display using **Blurred Vision** simulation" lightbox="../media/accessibility-blurred-vision-emulation.msft.png":::
             Display using **Blurred Vision** simulation  
          :::image-end:::  
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/accessibility-achromatopsia-emulation.msft.png" alt-text="Display using **Achromatopsia** simulation" lightbox="../media/accessibility-achromatopsia-emulation.msft.png":::
             Display using **Achromatopsia** simulation 
          :::image-end:::  
       :::column-end:::
    :::row-end:::
    
Use the Command Menu  

You may also use **Command Menu** to access the different simulations.  

1.  Select `Control`+`Shift`+`P` \(Windows/Linux\) or `Command`+`Shift`+`P` \(macOS\) to open the **Command Menu**.  
    
    :::image type="complex" source="../media/css-console-command-menu-rendering.msft.png" alt-text="The Command Menu" lightbox="../media/css-console-command-menu-rendering.msft.png":::
       The **Command Menu**  
    :::image-end:::  
    
1.  Type `emulate`, choose what you want to simulate and choose `Enter`.  
    
    :::image type="complex" source="../media/accessibility-emulation-command-menu-results.msft.png" alt-text="The different simulation options available in the Command Menu" lightbox="../media/accessibility-emulation-command-menu-results.msft.png":::
       The different simulation options available in the **Command Menu**  
    :::image-end:::  
    
> [!IMPORTANT]
> The **Emulate vision deficiencies** tools simulate approximations of how a person with each deficiency may see your product.  Each person is different, therefore vision deficiencies vary in severity from person to person.  To better meet the needs of your users, avoid any color combination that may be an issue.  The **Emulate vision deficiencies** tools are not a full accessibility assessment of your product.  Instead, the **Emulate vision deficiencies** tools should  give you a good first step to avoid problems.  

<!-- links -->  

[DevToolsA11yErrorsDemopage]: https://microsoftedge.github.io/DevToolsSamples/a11y-testing/page-with-errors.html
[W3CContrastRatio]: https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
[WCAG]: https://www.w3.org/TR/WCAG21/
[DevToolsIssuesPanel]: ../issues/index.md
[AccessibilityInsights]: https://accessibility-insights.io
[Lighthouse]: https://developers.google.com/web/tools/lighthouse/ 