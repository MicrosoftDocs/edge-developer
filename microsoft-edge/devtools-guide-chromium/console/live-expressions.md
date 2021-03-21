---
description: If you find yourself typing the same JavaScript expressions into the Console repeatedly, try Live Expressions instead.
title: Watch JavaScript expression values in real-time with Live Expressions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/12/2021 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Monitor changes in JavaScript using Live Expressions

**Live Expressions** are an excellent way to monitor JavaScript expressions that change a lot. Instead of having a lot of Console messages to read and navigate you can pin them to the top of the console.

You start by activating the **Create new live expression** button which is next to the **Filter** text box and shows up as an eye. Once you activated it you will get a textbox to enter your new expression below it.

:::image type="complex" source="../media/console-live-expressions-new.msft.png" alt-text="Activating the 'New live expression' button gives you a textbox to enter an expression" lightbox="../media/console-live-expressions-new.msft.png":::
    Activating the 'New live expression' button gives you a textbox to enter an expression
:::image-end:::  

Live expressions can be any valid JavaScript expression. Try it now by typing `document.activeElement` into the box. If you select `Control`+`Enter` \(Windows, Linux\) or `Command`+`Enter` \(macOS\) or choose outside the **Live Expression** textbox you save the expression. The expression is now live and shows `body` as the result.

:::image type="complex" source="../media/console-live-expressions-document-active-element.msft.png" alt-text="Live expression for document.activeElement showing body as the result" lightbox="../media/console-live-expressions-document-active-element.msft.png":::
    Live expression for document.activeElement showing body as the result
:::image-end:::  

If you now navigate around the document, this value changes. For example, in the screenshot below we activated the search menu in the documentation and our expression now shows `button.nav-bar-button.focus-visible` as the value. 

:::image type="complex" source="../media/console-live-expressions-document-active-element-nav-button.msft.png" alt-text="Interacting with a different element in the document changes the value of the live expression" lightbox="../media/console-live-expressions-document-active-element-nav-button.msft.png":::
    Interacting with a different element in the document changes the value of the live expression
:::image-end:::  

By activating the search box we change the value again.

:::image type="complex" source="../media/console-live-expressions-document-active-element-search.msft.png" alt-text="Navigating to a different element in the document updates the live expression" lightbox="../media/console-live-expressions-document-active-element-search.msft.png":::
    Navigating to a different element in the document updates the live expression
:::image-end:::  

## Removing live expressions

Live expressions are available for as long as you keep them active. To get rid of them, activate the `x` next to the expression.

:::image type="complex" source="../media/console-live-expressions-remove.msft.png" alt-text="Remove live expressions by activating the x next to them" lightbox="../media/console-live-expressions-remove.msft.png":::
    Remove live expressions by activating the x next to them
:::image-end::: 

## Replacing Console logging with live expressions

You can create as many expressions as you want and they persist across browser sessions and windows. Live expressions are a way to cut down on noise in your debugging workflow. 

Say, for example, you want to monitor the mouse movement in the current document. If you navigate to the [Logging Mouse Movement demo][DevtoolsLoggingMouseDemo], open the Console and move your mouse around you can see that this logs a lot of information:

:::image type="complex" source="../media/console-live-expression-mouse-logging.msft.png" alt-text="Console showing a lot of information on mouse position" lightbox="../media/console-live-expression-mouse-logging.msft.png":::
    Console showing a lot of information on mouse position
:::image-end:::  

This does not only slow down your debugging process. It also makes it easy to miss out on changes you want to monitor. As soon as you move your mouse, the value you wanted to see might already be off screen again as the Console moved up.

Try live expressions as an alternative. Navigate to the [Mouse movement without logging demo][DevtoolsMouseDemo] and create live expressions for `x` and `y`. That way you will always get the information on the same part of your screen and you can keep Console logging for values that don't change as much.

:::image type="complex" source="../media/console-live-expressions-x-and-y.msft.png" alt-text="Showing the x and y position of the mouse as live expressions" lightbox="../media/console-live-expressions-x-and-y.msft.png":::
    Showing the x and y position of the mouse as live expressions
:::image-end:::  

Live expressions run exclusively on your computer and you don't need to change anything to your code for them to show up. This is a great way to ensure that only you see the information you want to debug and it doesn't end up as noise on the computers of the end users of your product.
    
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- image links -->  

[ImageCreateLiveExpressionIcon]: ../media/create-live-expression-icon.msft.png  
[DevtoolsLoggingMouseDemo]: https://microsoftedge.github.io/DevToolsSamples/console/mousemove.html
[DevtoolsMouseDemo]: https://microsoftedge.github.io/DevToolsSamples/console/mousemove-no-log.html

<!-- links -->  

[DevToolsConsoleReferenceOpenConsole]: ./reference.md#open-the-console "Open the Console - Console Reference | Microsoft Docs"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/live-expressions) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
