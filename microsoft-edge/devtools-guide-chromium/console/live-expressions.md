---
title: Monitor changes in JavaScript using Live Expressions
description: Watch JavaScript expression values in real time with Live Expressions.  If you find yourself typing the same JavaScript expressions into the Console repeatedly, try Live Expressions instead.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 04/13/2021
---
# Monitor changes in JavaScript using Live Expressions

<!-- very short article in other repo:
Watch JavaScript values in real-time with Live Expressions -->

**Live Expressions** are a great way to monitor JavaScript expressions that change a lot.  Instead of generating many **Console** messages to read and navigate, you can pin your specific JavaScript expressions to the top of the **Console**.


<!-- ====================================================================== -->
## Add a new live expression

To start, click the **Create live expression** (eye) icon next to the **Filter** textbox.  After you click it, a textbox is displayed for you to enter your new expression in it.

:::image type="content" source="../media/console-live-expressions-new.msft.png" alt-text="Click the New live expression button to open a textbox to type an expression." lightbox="../media/console-live-expressions-new.msft.png":::

**Live Expressions** can be any valid JavaScript expression.


To try using **Live Expressions**:

1. Open the **Live Expression** textbox.

1. Type `document.activeElement`.

1. To save the expression, press `Control`+`Enter` (Windows, Linux) or `Command`+`Enter` (macOS).  Or, click outside of the **Live Expression** textbox.

   The expression is now live, and displays `body` as the result:

   :::image type="content" source="../media/console-live-expressions-document-active-element.msft.png" alt-text="The Live Expression for document.activeElement displays 'body' as the result." lightbox="../media/console-live-expressions-document-active-element.msft.png":::

   If you navigate around the webpage, the value changes.

1. Open the search menu in the webpage.  The expression now displays `button.nav-bar-button.focus-visible` as the value:

   :::image type="content" source="../media/console-live-expressions-document-active-element-nav-button.msft.png" alt-text="To change the value of the Live Expression, interact with different elements on the webpage." lightbox="../media/console-live-expressions-document-active-element-nav-button.msft.png":::

1. To change the value again, open and click the **Search** textbox on the webpage:

   :::image type="content" source="../media/console-live-expressions-document-active-element-search.msft.png" alt-text="Navigate to a different element in the webpage to update the Live Expression." lightbox="../media/console-live-expressions-document-active-element-search.msft.png":::


<!-- ====================================================================== -->
## Remove Live Expressions

A **Live Expression** is available as long as you keep it active.

*  To get rid of a **Live Expression**, click the `x` next to it.

   :::image type="content" source="../media/console-live-expressions-remove.msft.png" alt-text="To remove Live Expressions, click the 'x' next to it." lightbox="../media/console-live-expressions-remove.msft.png":::


<!-- ====================================================================== -->
## Replace Console logging with Live Expressions

You can create as many Live Expressions as you want, and persist each Live Expression across browser sessions and windows.  Live Expressions are a way to cut down on noise in your debugging workflow.


### Using Console logging to display mouse coordinates

To monitor the mouse movement in the current webpage:

1. Open the [Logging Mouse Movement demo](https://microsoftedge.github.io/DevToolsSamples/console/mousemove.html) in a new window or tab.

1. Right-click anywhere in the demo webpage, and then select **Inspect**.  The DevTools **Console** opens.

1. Move your mouse around over the rendered demo webpage.  Many log messages are output, displayed in the **Console**..

<!-- You can view the source file for this demo at [MicrosoftEdge/DevToolsSamples > mousemove.html](https://github.com/MicrosoftEdge/DevToolsSamples/blob/master/docs/console/mousemove.html). -->

   :::image type="content" source="../media/console-live-expression-mouse-logging.msft.png" alt-text="The Console displays an overwhelming number of messages about the mouse position." lightbox="../media/console-live-expression-mouse-logging.msft.png":::

The large amount of information slows down your debugging process, and makes it hard to see the changes that you're trying to monitor.  As the **Console** displays more messages when you move your mouse, the values that you want to see scroll off the screen.


### Using Live Expressions to display mouse coordinates

As an alternative to verbose **Console** message logging as shown above, use **Live Expressions**.

To use Live Expressions to avoid excessive Console log messages:

1. Open the [Mouse movement without logging demo](https://microsoftedge.github.io/DevToolsSamples/console/mousemove-no-log.html) in a new tab or window.

   <!-- You can view the source file for this demo at [MicrosoftEdge/DevToolsSamples > mousemove-no-log.html](https://github.com/MicrosoftEdge/DevToolsSamples/blob/master/docs/console/mousemove-no-log.html). -->

1. Open the DevTools **Console**.

1. Create Live Expressions for `x` and `y`.  To do this, see [Add a new live expression](#add-a-new-live-expression), above.

   Displaying the `x` and `y` coordinates of the mouse as Live Expressions:

   :::image type="content" source="../media/console-live-expressions-x-and-y.msft.png" alt-text="Displaying the 'x' and 'y' coordinates of the mouse as Live Expressions." lightbox="../media/console-live-expressions-x-and-y.msft.png":::

When you use **Live Expressions**, you always get the information on the same part of your screen, and keep **Console** logs for values that don't change as much.

**Live Expressions** run exclusively on your computer, and you don't need to change anything in your code to display the expression and its result.  **Live Expressions** are a great way to ensure that you only display the information that you want to debug.  Live Expressions also help you limit the noise on your users' computers.
