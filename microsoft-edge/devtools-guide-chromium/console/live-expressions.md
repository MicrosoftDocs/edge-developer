---
description: If you find yourself typing the same JavaScript expressions into the Console repeatedly, try Live Expressions instead.
title: Watch JavaScript expression values in real time with Live Expressions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/08/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Monitor changes in JavaScript using Live Expressions

**Live Expressions** are an excellent way to monitor JavaScript expressions that change a lot.  Instead of having many Console messages to read and navigate you may pin each to the top of the **Console**.

## Adding a new live expression

To start, choose the **Create new live expression** \(the eye\) button next to the **Filter** textbox.  After you choose it, a textbox is displayed for you to enter your new expression in it.

:::image type="complex" source="../media/console-live-expressions-new.msft.png" alt-text="Choose the New live expression button opens a textbox to enter an expression" lightbox="../media/console-live-expressions-new.msft.png":::
    Choose the `New live expression` button opens a textbox to enter an expression  
:::image-end:::  

Live expressions may be any valid JavaScript expression.  To try it, complete the following actions.  

1.  Open the **Live Expression** textbox.  
1.  Type `document.activeElement`.  
1.  To save the expression, complete one of the following actions.  
    *   Select `Control`+`Enter` \(Windows, Linux\) or `Command`+`Enter` \(macOS\).  
    *   Choose outside the **Live Expression** textbox.  
        
The expression is now live and displays `body` as the result.  

:::image type="complex" source="../media/console-live-expressions-document-active-element.msft.png" alt-text="Live expression for document.activeElement displays body as the result" lightbox="../media/console-live-expressions-document-active-element.msft.png":::
    Live expression for `document.activeElement` displays body as the result  
:::image-end:::  

If you now navigate around the webpage, the value changes.  For example, in the following figure you open the search menu in the webpage and our expression now displays `button.nav-bar-button.focus-visible` as the value.  

:::image type="complex" source="../media/console-live-expressions-document-active-element-nav-button.msft.png" alt-text="Interacting with a different element in the webpage changes the value of the live expression" lightbox="../media/console-live-expressions-document-active-element-nav-button.msft.png":::
    Interacting with a different element in the webpage changes the value of the live expression  
:::image-end:::  

To change the value again, turn on the search box.

:::image type="complex" source="../media/console-live-expressions-document-active-element-search.msft.png" alt-text="Navigating to a different element in the webpage updates the live expression" lightbox="../media/console-live-expressions-document-active-element-search.msft.png":::
    Navigating to a different element in the webpage updates the live expression  
:::image-end:::  

## Removing live expressions  

Live expressions are available for as long as you keep each active.  To get rid of a live expression, choose the `x` next to it.

:::image type="complex" source="../media/console-live-expressions-remove.msft.png" alt-text="To remove live expressions, choose the x next to it" lightbox="../media/console-live-expressions-remove.msft.png":::
    To remove live expressions, choose the `x` next to it  
:::image-end:::  

## Replacing Console logging with live expressions  

You may create as many expressions as you want and persist each across browser sessions and windows.  Live expressions are a way to cut down on noise in your debugging workflow.  

For example, you want to monitor the mouse movement in the current webpage.  Navigate to [Logging Mouse Movement demo][GithubMicrosoftedgeDevtoolssamplesConsoleMousemoveHtml], open the **Console**, and move your mouse around to display the logs with lot of information.  

:::image type="complex" source="../media/console-live-expression-mouse-logging.msft.png" alt-text="Console displays much information on mouse position" lightbox="../media/console-live-expression-mouse-logging.msft.png":::
    **Console** displays much information on mouse position  
:::image-end:::  

It not only slows your debug process, but also makes it easy to miss the changes you want to monitor.  As soon as you move your mouse, the value you wanted to display may already be off screen again as the **Console** moved up.  

To try live expressions as an alternative, complete the following actions.  

1.  Navigate to the [Mouse movement without logging demo][GithubMicrosoftedgeDevtoolssamplesConsoleMouseNoLogHtml].  
1.  Create live expressions for `x` and `y`.  
    
That way you always get the information on the same part of your screen and you may keep **Console** logs for values that do not change as much.

:::image type="complex" source="../media/console-live-expressions-x-and-y.msft.png" alt-text="Display the x and y position of the mouse as live expressions" lightbox="../media/console-live-expressions-x-and-y.msft.png":::
    Display the `x` and `y` position of the mouse as live expressions  
:::image-end:::  

Live expressions run exclusively on your computer and you do not need to change anything in your code to display.  A great way to ensure that you only display the information you want to debug and it does not end up as noise on the computers of the users of your product.

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[GithubMicrosoftedgeDevtoolssamplesConsoleMousemoveHtml]: https://microsoftedge.github.io/DevToolsSamples/console/mousemove.html "Console messages examples: Using table | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleMouseNoLogHtml]: https://microsoftedge.github.io/DevToolsSamples/console/mousemove-no-log.html "Mouse movement without logging | GitHub"  
