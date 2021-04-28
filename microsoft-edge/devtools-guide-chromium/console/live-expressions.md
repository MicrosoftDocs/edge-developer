---
description: If you find yourself typing the same JavaScript expressions into the Console repeatedly, try Live Expressions instead.
title: Watch JavaScript expression values in real time with Live Expressions
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/13/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Monitor changes in JavaScript using Live Expressions  

**Live Expressions** are an excellent way to monitor JavaScript expressions that change a lot.    Instead of having many Console messages to read and navigate, you may pin your specific JavaScript expressions to the top of the **Console**.  

## Add a new live expression  

To start, choose the **Create live expression** \(eye\) button next to the **Filter** textbox.  After you choose it, a textbox is displayed for you to enter your new expression in it.  

:::image type="complex" source="../media/console-live-expressions-new.msft.png" alt-text="Choose the New live expression button to open a textbox to type an expression" lightbox="../media/console-live-expressions-new.msft.png":::
    Choose the `New live expression` button to open a textbox to type an expression  
:::image-end:::  

**Live Expressions** may be any valid JavaScript expression.  To try it, complete the following actions.  

1.  Open the **Live Expression** textbox.  
1.  Type `document.activeElement`.  
1.  To save the expression, complete one of the following actions.  
    *   Select `Control`+`Enter` \(Windows, Linux\) or `Command`+`Enter` \(macOS\).  
    *   Choose outside the **Live Expression** textbox.  
        
The expression is now live and displays `body` as the result.  

:::image type="complex" source="../media/console-live-expressions-document-active-element.msft.png" alt-text="Live expression for document.activeElement displays body as the result" lightbox="../media/console-live-expressions-document-active-element.msft.png":::
    Live expression for `document.activeElement` displays body as the result  
:::image-end:::  

If you navigate around the webpage, the value changes.  For example, in the following figure you open the search menu in the webpage and the expression now displays `button.nav-bar-button.focus-visible` as the value.  

:::image type="complex" source="../media/console-live-expressions-document-active-element-nav-button.msft.png" alt-text="To change the value of the Live Expression, interact with different elements on the webpage" lightbox="../media/console-live-expressions-document-active-element-nav-button.msft.png":::
    To change the value of the **Live Expression**, interact with different elements on the webpage  
:::image-end:::  

To change the value again, open and choose the Search textbox on the webpage.  

:::image type="complex" source="../media/console-live-expressions-document-active-element-search.msft.png" alt-text="Navigate to a different element in the webpage to update the Live Expression" lightbox="../media/console-live-expressions-document-active-element-search.msft.png":::
    Navigate to a different element in the webpage to update the **Live Expression**  
:::image-end:::  

## Remove Live Expressions  

A **Live Expression** is available as long as you keep it active.  To get rid of a **Live Expression**, choose the `x` next to it.  

:::image type="complex" source="../media/console-live-expressions-remove.msft.png" alt-text="To remove Live Expressions, choose the x next to it" lightbox="../media/console-live-expressions-remove.msft.png":::
    To remove **Live Expressions**, choose the `x` next to it  
:::image-end:::  

## Replace Console logging with Live Expressions  

You may create as many expressions as you want and persist each across browser sessions and windows.  **Live Expressions** are a way to cut down on noise in your debugging workflow.  

For example, you want to monitor the mouse movement in the current webpage.  Navigate to [Logging Mouse Movement demo][GithubMicrosoftedgeDevtoolssamplesConsoleMousemoveHtml], open the **Console**, and move your mouse around to display the logs with a lot of information.  

:::image type="complex" source="../media/console-live-expression-mouse-logging.msft.png" alt-text="Console displays much information on mouse position" lightbox="../media/console-live-expression-mouse-logging.msft.png":::
    **Console** displays much information on mouse position  
:::image-end:::  

The large amount of information not only slows your debug process, but also makes it easy to miss the changes you want to review.  As the **Console** displays more messages and you move your mouse, the values you want to review scroll off the screen.  

To try **Live Expressions** as an alternative, complete the following actions.  

1.  Navigate to the [Mouse movement without logging demo][GithubMicrosoftedgeDevtoolssamplesConsoleMouseNoLogHtml].  
1.  Create **Live Expressions** for `x` and `y`.  
    
When you use **Live Expressions**, you always get the information on the same part of your screen and keep **Console** logs for values that don't change as much.

:::image type="complex" source="../media/console-live-expressions-x-and-y.msft.png" alt-text="Display the x and y position of the mouse as Live Expressions" lightbox="../media/console-live-expressions-x-and-y.msft.png":::
    Display the `x` and `y` position of the mouse as **Live Expressions**  
:::image-end:::  

**Live Expressions** run exclusively on your computer and you don't need to change anything in your code to display.  **Live Expressions** are a great way to ensure that you only display the information you want to debug.  Also, **Live Expressions** help you limit the noise on your users' computers.

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[GithubMicrosoftedgeDevtoolssamplesConsoleMousemoveHtml]: https://microsoftedge.github.io/DevToolsSamples/console/mousemove.html "Console messages examples: Using table | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleMouseNoLogHtml]: https://microsoftedge.github.io/DevToolsSamples/console/mousemove-no-log.html "Mouse movement without logging | GitHub"  
