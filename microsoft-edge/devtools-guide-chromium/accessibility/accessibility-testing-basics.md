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

In this article we're going to cover some of the features you can use in DevTools to test for accessibility problems. As an example, we're using a demo page that has some accessibility problems and go through using different features. 

Please [navigate to the demo page][DevToolsA11yErrorsDemopage] to try it out yourself and you can test along.

## Automated testing

When you have the web site open in the browser and open DevTools the first thing you will see some automatically detected problems flagged up. Activate the Issues counter to open the [Issues Pane][DevToolsIssuesPane] to see what the problems are. 

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

For the purpose of this article, let's focus on the Accessibility section first.

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

The first warning you can see is `Form elements must have labels: Element has no title attribute Element has no placeholder attribute`. If you activate the `Open in Elements` link DevTools will highlight the Element and show you the HTML source and applied CSS.

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

You can also activate the explanatory links in the **Issues Pane** to get more information. In this case, the HTML has a problem.

```html
<label>Search</label>
<input type="search">
<input type="submit" value="go"> 
```

The use of the `label` element here is wrong as there is no relationship between the `label` and the `input`. You can also test this by activating the `Search` text in the page header. A valid HTML label would focus the search box when you activate it. 

The other automatically detected problem is that many of the images in the document don't have any alternative text. If you expand the `Images must have alternate text: Element has no title attribute` warning you get four instances of images with that problem.

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

These are some very obvious accessibility problems that can be avoided and using the issues panel and its guided explanations to fix them gets you on the way towards an accessible product.

## Limits of automated testing

Getting an automated report from a tool like the [Issues Panel][], [Accessibility Insights][] or [Lighthouse][] is only the beginning of your accessibility testing journey. Accessibility is about human interaction - people with different needs using interfaces using various setups. This can't be automated, but needs verification by a human navigating the product. In the best scenario you'd have access to testers with different needs and setups, but you can already do a lot yourself by using the keyboard to navigate and by inspecting different parts of the page.

There are a lot more issues in this demo page that automated testing doesn't catch. Some only show up once you change the way the page is displayed and others are built in a way that the automated scan of the document couldn't even detect that there is a problem.

One of those is the donation form. When you use a mouse, you can click the different options to donate money. When you try to use the keyboard to access it, nothing happens. To find out what is going wrong, you need to use the **Inspector** tool.

## Using the Inspector to detect accessibility issues

The inspector tool is the first icon top right of the DevTools. Once you activate it, you can move your pointer around the page and highlight any element. 

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

The Inspector shows a coloured overlay of the layout properties of the element and an information pane listing the following information when available:

* Element name - `h1`, `h2`, `div`, etc…
* Element dimensions in pixels
* Color as formatted (f.e. `#336699`) and as a color swatch
* Font information (size and font families)
* Margin and padding in pixels
* Contrast
* Name
* Role
* Keyboard-focusable
* Positioning - if the element is positioned using flexbox or grid you see an icon

Activating any element will take you to the **Elements** tool, show the HTML of the element in the DOM tree and the applied CSS in the **Styles** tool. 

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

If you move your pointer with the **Elements** tool open, the DOM tree automatically refreshes.

In our case, the most important parts are Contrast, Name, Role and Keyboard-focusable.

## Testing colour accessibility

If contrast information is available, the information pane shows the contrast ratio and a green checkbox icon for elements with enough contrast and a yellow alert icon for those that don't. 

:::image type="complex" source="../media/xxx.png" alt-text="***ALT***" lightbox="../media/xxx.png":::
    ***ALT***  
:::image-end:::  

## Testing interaction accessibility

## Simulating different environments




To better meet the needs of your users with [color vision deficiency][ColorblindawarenessMain] \(color blindness\), [Microsoft Edge DevTools][DevtoolsIndex] allow you to simulate specific color vision deficiencies.  The **Emulate vision deficiencies** tool simulates the following categories.  

| Color vision deficiency | Details |  
|:--- |:--- |  
| Blurred vision | The user has difficulty focusing on fine details. |  
| Protanopia | The user is unable to perceive any red light. |  
| Deuteranopia | The user is unable to perceive any green light. |  
| Tritanopia | The user is unable to perceive any blue light. |  
| Achromatopsia | The user is unable to perceive any color, which reduces all color to a shade of grey. |  

## Navigate to the Rendering Tools  

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
    
## Use the Command Menu  

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