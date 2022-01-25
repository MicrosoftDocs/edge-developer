---
title: Console overview
description: An introduction to the Console tool inside the Microsoft Edge Developer Tools.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 04/13/2021
---
# Console overview

The **Console** tool of the DevTools helps you with several tasks:

*   Find out why something isn't working in the current project and [track down problems](console-debug-javascript.md).
*   [Get information about the web project](console-filters.md) in the browser as log messages.
*   [Log information](console-log.md) in scripts for debugging purposes.
*   [Try JavaScript expressions](console-javascript.md) live in a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) environment.
*   [Interact with the web project in the browser](console-dom-interaction.md) using JavaScript.

The **Console** is a great companion tool to use with others tools.  The **Console** provides a powerful way to script functionality, inspect, and manipulate the current webpage using JavaScript.

The **Console** tool open in the upper panel:

:::image type="content" source="../media/console-intro-console-main.msft.png" alt-text="The Console tool open in the upper panel." lightbox="../media/console-intro-console-main.msft.png":::

The **Console** in the lower panel with the **Elements** tool open above it:

:::image type="content" source="../media/console-intro-console-panel.msft.png" alt-text="The Console in the lower panel with the Elements tool open above it." lightbox="../media/console-intro-console-panel.msft.png":::

The fastest way to directly open the **Console** is to select `Control`+`Shift`+`J` (Windows, Linux) or `Command`+`Option`+`J` (macOS).


<!-- ====================================================================== -->
## Error reports and the Console

The **Console** is the default place where JavaScript and connectivity errors are reported.  If any errors occur, the **Issues counter** is displayed next to the **Settings** icon in DevTools that provides the number of errors and warnings.  Select the **Issues counter** to open the **Issues** tool and display the problem.  For more information, see [Fixing JavaScript errors that are reported in the Console](console-debug-javascript.md).

DevTools gives detailed information about the error in the **Console**:

:::image type="content" source="../media/console-debug-displays-error.msft.png" alt-text="DevTools gives detailed information about the error in the Console." lightbox="../media/console-debug-displays-error.msft.png":::


<!-- ====================================================================== -->
## Look up error messages on the web from the Console

Search the web for your **Console** error messages, right from within DevTools.  In the **Console**, many error messages have a **Search for this message on the Web** button, shown as a magnifying glass.  When you select the **Search for this message on the Web** button, a new tab opens in the browser and shows search results for the error message.

The **Search for this message on the Web** button on an error message in the **Console**:

:::image type="content" source="../media/search-console-icon.msft.png" alt-text="The 'Search for this message on the Web' button on an error message in the **Console**." lightbox="../media/search-console-icon.msft.png":::

For a `Failed to load resource` error, the new tab contains web search results for the message "Failed to load resource" (without quotes).

New tab that opened from the **Search Console Error** feature:

:::image type="content" source="../media/search-console-new-tab.msft.png" alt-text="New tab that opened from the Search Console Error feature." lightbox="../media/search-console-new-tab.msft.png":::

This feature was introduced in Microsoft Edge version 94.


<!-- ====================================================================== -->
## Inspect and filter information on the current webpage

When you open DevTools on a webpage, there may be an overwhelming amount of information in the **Console**.  The amount of information becomes a problem when you need to identify important information.  To view the important information that needs action, use the [Issues](../issues/index.md) tool in DevTools.

Issues are gradually being moved from the **Console** to the **Issues** tool.  However, there's still a lot of information in the **Console**, which is why it's a good idea to know about the automated log and filter options in the **Console**.  For more information, see [Filter Console messages](console-filters.md).

DevTools with a **Console** full of messages:

:::image type="content" source="../media/console-intro-noise.msft.png" alt-text="DevTools with a Console full of messages." lightbox="../media/console-intro-noise.msft.png":::


<!-- ====================================================================== -->
## Log information to display in the Console

The most popular use case for the **Console** is logging information from your scripts using the `console.log()` method or other similar methods.  To try it:

1.  To open the **Console**, select `Control`+`Shift`+`J` (Windows, Linux) or `Command`+`Option`+`J` (macOS).
1.  See [Console messages examples: log, info, error and warn](https://microsoftedge.github.io/DevToolsSamples/console/logging-demo.html), or copy and run the following code in the **Console**.

    ```javascript
    console.log('This is a log message');
    console.info('This is some information');
    console.error('This is an error');
    console.warn('This is a warning');
    console.log(document.body.getBoundingClientRect());
    console.table(document.body.getBoundingClientRect());
    let technologies = ["HTML", "CSS", "SVG", "ECMAScript"];
    console.groupCollapsed('Technolgies');
    technologies.forEach(tech => {console.info(tech);})
    console.groupEnd('Technolgies');
    ```

1.  The **Console** displays the resulting messages caused by demo code:

    :::image type="content" source="../media/console-intro-logging.msft.png" alt-text="Console full of messages caused by demo code." lightbox="../media/console-intro-logging.msft.png":::

Many useful methods are available when you work with the **Console**.  For more information, see [Log messages in the Console tool](console-log.md).


<!-- ====================================================================== -->
## Try your JavaScript live in the Console

The **Console** isn't only a place to log information.  The **Console** is a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) environment.  When you write any JavaScript in the **Console**, the code runs immediately.  You may find it useful to test some new JavaScript features or to do some quick calculations.  Also, you get all of the features you expect from a modern editing environment, such as autocompletion, syntax highlighting, and history.

To try running JavaScript in the Console:

1.  Open the **Console**.
1.  Type `2 + 2`.

The **Console** displays the result of `2 + 2` live as you type it, displaying the result `4` on the following line:

:::image type="content" source="../media/console-javascript-eager-evaluation.msft.png" alt-text="The Console displays the result of 2 + 2 live as you type it." lightbox="../media/console-javascript-eager-evaluation.msft.png":::

This **Eager evaluation** feature is useful to debug and verify that you aren't making mistakes in your code.

To run the JavaScript expression in the **Console** and optionally display a result, select `Enter`.  Then, you can write the next JavaScript code to run in the **Console**.

Running several lines of JavaScript code in succession:

:::image type="content" source="../media/console-javascript-several-expressions.msft.png" alt-text="Run several lines of JavaScript code in succession." lightbox="../media/console-javascript-several-expressions.msft.png":::

By default, you run JavaScript code on a single line.  To run a line, type your JavaScript and then select `Enter`.  To work around the single-line limitation, select `Shift`+`Enter` instead of `Enter`.

Similar to other command-line experiences, to access your previous JavaScript commands, select `Arrow-Up`.  The autocompletion feature of the **Console** is a great way to learn about unfamiliar methods.

To try autocompletion:

1.  Open the **Console**.
1.  Type `doc`.
1.  Select `document` from the dropdown menu.
1.  Select the `tab` key to choose it.
1.  Type `.bo`.
1.  Select `tab` to get `document.body`.
1.  Type another `.` to display the complete list of properties and methods available on the body of the current webpage.

For more information about all the ways to work with **Console**, see [Console as a JavaScript environment](console-javascript.md).

Autocompletion of JavaScript expressions in the **Console**:

:::image type="content" source="../media/console-javascript-autocomplete.msft.png" alt-text="Console autocompletion of JavaScript expressions." lightbox="../media/console-javascript-autocomplete.msft.png":::


<!-- ====================================================================== -->
## Interact with the current webpage in the browser

The **Console** has access to the [Window](https://developer.mozilla.org/docs/Web/API/Window) object of the browser.  You can write scripts that interact with the current webpage.

To try writing a script that interacts with the current page:

1.  Open the **Console**.
1.  Copy and paste the following code:

    ```javascript
    document.querySelector('h1').innerHTML
    ```

Copying the top heading (`h1`) content from the DOM and displaying the expression evaluation result in the **Console**:

:::image type="content" source="../media/console-intro-reading-DOM.msft.png" alt-text="Copying the top heading (h1) content from the DOM and displaying the expression evaluation result in the Console." lightbox="../media/console-intro-reading-DOM.msft.png":::

Instead of only reading from the webpage, you can also change the page.  To try changing the webpage:

1.  Open the **Console**.
1.  Copy and paste the following code:

    ```javascript
    document.querySelector('h1').innerHTML = 'Rocking the Console';
    ```

Write text to the DOM in the **Console**:

:::image type="content" source="../media/console-intro-wrtiting-DOM.msft.png" alt-text="Write text to the DOM in the Console." lightbox="../media/console-intro-wrtiting-DOM.msft.png":::

You changed the main heading of the webpage to **Rocking the Console**.  The **Console Utility** methods make it easy to access and manipulate the current webpage.  For more information, see [Console Utilities API reference](utilities.md).

For example, to add a green border around all the links in the current webpage:

1.  Open the **Console**.
1.  Copy and paste the following code:

    ```javascript
    $$('a').forEach(a => a.style.border='1px solid lime');
    ```

Manipulating a selection of elements using the **Console**:

:::image type="content" source="../media/console-intro-changing-styles.msft.png" alt-text="Manipulate a selection of elements using the Console." lightbox="../media/console-intro-changing-styles.msft.png":::


<!-- ====================================================================== -->
## See also

*  [Use the Console to interact with the DOM](console-dom-interaction.md).
*  [Console features reference](reference.md)
*  [Console Utilities API reference](utilities.md)
*  [Console API reference](api.md)
