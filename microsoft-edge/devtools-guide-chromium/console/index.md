---
description: An introduction to the Console tool inside the Microsoft Edge Developer Tools.
title: Use the Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/13/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Use the Console  

The **Console** tool of the DevTools helps you with several tasks.  The following list includes some of the tasks.  

*   Find out why something isn't working in the current project and [track down problems][DevtoolsConsoleConsoleDebugJavascript].  
*   [Get information about the web project][DevtoolsConsoleConsoleFilters] in the browser as log messages.  
*   [Log information][DevtoolsConsoleConsoleLog] in scripts for debugging purposes.  
*   [Try JavaScript expressions][DevtoolsConsoleConsoleJavascript] live in a [REPL][WikiReadEvalPrintLoop] environment.  
*   [Interact with the web project in the browser][DevtoolsConsoleConsoleDomInteraction] using JavaScript.  
    
The **Console** is a great companion tool to use with others tools.  The **Console** provides a powerful way to script functionality, inspect, and manipulate the current webpage using JavaScript.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../media/console-intro-console-main.msft.png" alt-text="The Console tool open in the upper panel" lightbox="../media/console-intro-console-main.msft.png":::
         The **Console** tool open in the upper panel  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/console-intro-console-panel.msft.png" alt-text="Console in the lower panel with the Elements tool open above it" lightbox="../media/console-intro-console-panel.msft.png":::
         **Console** in the lower panel with the **Elements** tool open above it  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

The fastest way to directly open the **Console** is to select `Control`+`Shift`+`J` \(Windows, Linux\) or `Command`+`Option`+`J` \(macOS\).  

## Error reports and Console  

**Console** is the default place where JavaScript and connectivity errors are reported.  If any errors occur, the **Issues counter** is displayed next to the **Settings** icon in DevTools that provides the number of errors and warnings.  Select the **Issues counter** to open the **Issues** tool and display the problem.  For more information, navigate to [Debug errors reported in Console][DevtoolsConsoleConsoleDebugJavascript].

:::image type="complex" source="../media/console-debug-displays-error.msft.png" alt-text="DevTools gives detailed information about the error in the Console" lightbox="../media/console-debug-displays-error.msft.png":::
   DevTools gives detailed information about the error in the **Console**  
:::image-end:::  

## Inspect and filter information on the current webpage  

When you open DevTools on a webpage, there may be an overwhelming amount of information in the **Console**.  The amount of information becomes a problem when you need to identify important information.  To view the important information that needs action, use the [Issues][DevtoolsIssuesIndex] tool in DevTools.

Issues are gradually being moved from the **Console** to the **Issues** tool.  However, there's still a lot of information in **Console**, which is why it's a good idea to know about the automated log and filter options in the **Console**.  For more information, navigate to [Filter Console messages][DevtoolsConsoleConsoleFilters].

:::image type="complex" source="../media/console-intro-noise.msft.png" alt-text="DevTools with a Console full of messages" lightbox="../media/console-intro-noise.msft.png":::
   DevTools with a **Console** full of messages  
:::image-end:::  

## Log information to display in the Console  

The most popular use case for the **Console** is logging information from your scripts using the `console.log()` method or other similar methods.  To try it, complete the following actions.  

1.  To open **Console**, select `Control`+`Shift`+`J` \(Windows, Linux\) or `Command`+`Option`+`J` \(macOS\).  
1.  Navigate to [Console messages examples: log, info, error and warn][GithubMicrosoftedgeDevtoolssamplesConsoleLoggingDemoHtml], or copy and run the following code snippet in the **Console**.  
    
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
    
1.  The **Console** displays the results.  
    
    :::image type="complex" source="../media/console-intro-logging.msft.png" alt-text="Console full of messages caused by demo code" lightbox="../media/console-intro-logging.msft.png":::
       **Console** full of messages caused by demo code  
    :::image-end:::  
    
Many useful methods are available when you work with the **Console**.  For more information, navigate to [Log messages in the Console tool][DevtoolsConsoleConsoleLog].  

## Try your JavaScript live in the Console  

The **Console** isn't only a place to log information.  The **Console** is a [REPL][WikiReadEvalPrintLoop] environment.  When you write any JavaScript in the **Console**, the code runs immediately.  You may find it useful to test some new JavaScript features or to do some quick calculations.  Also, you get all of the features you expect from a modern editing environment, such as autocompletion, syntax highlighting, and history.  To try it, complete the following actions.  

1.  Navigate to the **Console**.  
1.  Type `2 + 2`.  
    
The **Console** displays the result `4` on the following line.  This **Eager evaluation** feature is useful to debug and verify that you aren't making mistakes in your code.  

:::image type="complex" source="../media/console-javascript-eager-evaluation.msft.png" alt-text="The Console displays the result of 2 + 2 live as you type it" lightbox="../media/console-javascript-eager-evaluation.msft.png":::
   The **Console** displays the result of `2 + 2` live as you type it  
:::image-end:::  

To run the JavaScript expression in the **Console** and optionally display a result, select `Enter`.  Then, you can write the next JavaScript code to run in the **Console**.  

:::image type="complex" source="../media/console-javascript-several-expressions.msft.png" alt-text="Run several lines of JavaScript code in succession" lightbox="../media/console-javascript-several-expressions.msft.png":::
   Run several lines of JavaScript code in succession  
:::image-end:::  

By default, you run JavaScript code on a single line.  To run a line, type your JavaScript and then select `Enter`.  To work around the single-line limitation, select `Shift`+`Enter` instead of `Enter`.  Similar to other command-line experiences, to access your previous JavaScript commands, select `Arrow-Up`.  The autocompletion feature of the **Console** is a great way to learn about unfamiliar methods.  To try it, complete the following actions.  

1.  Open the **Console**.  
1.  Type `doc`.  
1.  Choose `document` from the dropdown menu.  
1.  Select the `tab` key to choose it.  
1.  Type `.bo`.  
1.  Select `tab` to get `document.body`.  
1.  Type another `.` to display the complete list of properties and methods available on the body of the current webpage.  
    
For more information about all the ways to work with **Console**, navigate to [Console as a JavaScript environment][DevtoolsConsoleConsoleJavascript].  

:::image type="complex" source="../media/console-javascript-autocomplete.msft.png" alt-text="Console autocompletion of JavaScript expressions" lightbox="../media/console-javascript-autocomplete.msft.png":::
   **Console** autocompletion of JavaScript expressions  
:::image-end:::  

## Interact with the current webpage in the browser  

The **Console** has access to the [Window][MdnDocsWebApiWindow] object of the browser.  You can write scripts that interact with the current webpage.  To try it, complete the following actions.  

1.  Open the **Console**.  
1.  Copy and paste the following code snippet.  
    
    ```javascript
    document.querySelector('h1').innerHTML
    ```  
    
:::image type="complex" source="../media/console-intro-reading-DOM.msft.png" alt-text="Copy the top heading (h1) content from the DOM and display in the Console" lightbox="../media/console-intro-reading-DOM.msft.png":::
   Copy the top heading \(`h1`\) content from the DOM and display in the **Console**  
:::image-end:::  

Instead of only reading from the webpage, you can also change it.  To try changing the webpage, complete the following actions.  

1.  Open the **Console**.  
1.  Copy and paste the following code snippet.  
    
    ```javascript
    document.querySelector('h1').innerHTML = 'Rocking the Console';
    ```  
    
:::image type="complex" source="../media/console-intro-wrtiting-DOM.msft.png" alt-text="Write text to the DOM in the Console" lightbox="../media/console-intro-wrtiting-DOM.msft.png":::
   Write text to the DOM in the **Console**  
:::image-end:::  

You changed the main heading of the webpage to **Rocking the Console**.  The **Console Utility** methods make it easy to access and manipulate the current webpage.  For more information, navigate to [Console Utilities API reference][DevtoolsConsoleUtilities].  For example, to add a green border around all the links in the current webpage, complete the following actions.  

1.  Open the **Console**.  
1.  Copy and paste the following code snippet.  
    
    ```javascript
    $$('a').forEach(a => a.style.border='1px solid lime');
    ```  
    
:::image type="complex" source="../media/console-intro-changing-styles.msft.png" alt-text="Manipulate a selection of elements using the Console" lightbox="../media/console-intro-changing-styles.msft.png":::
    Manipulate a selection of elements using the **Console**  
:::image-end:::  

For more information about working with the DOM, navigate to [Use the Console to interact with the DOM][DevtoolsConsoleConsoleDomInteraction].  

## Learn more about Console  

For more information about the **Console**, navigate to [Console reference][DevtoolsConsoleReference], [Console Utilities API reference][DevtoolsConsoleUtilities], and [Console API reference][DevtoolsConsoleApi].  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  
[DevtoolsConsoleApi]: ./api.md "Console API reference | Microsoft Docs"  
[DevtoolsConsoleConsoleDebugJavascript]: ./console-debug-javascript.md "Debug errors reported in Console | Microsoft Docs"  
[DevtoolsConsoleConsoleDomInteraction]: ./console-dom-interaction.md "Use the Console to interact with the DOM | Microsoft Docs" 
[DevtoolsConsoleConsoleFilters]: ./console-filters.md "Filter Console messages | Microsoft Docs"  
[DevtoolsConsoleConsoleJavascript]: ./console-javascript.md "Console as a JavaScript environment | Microsoft Docs"  
[DevtoolsConsoleConsoleLog]: ./console-log.md "Log messages in the Console tool | Microsoft Docs"  
[DevtoolsConsoleReference]: ./reference.md "Console reference | Microsoft Docs"  
[DevtoolsConsoleUtilities]: ./utilities.md "Console Utilities API reference | Microsoft Docs"  
[DevtoolsIssuesIndex]: ../issues/index.md "Find and fix problems using the Issues tool | Microsoft Docs"  
<!-- external links -->
[GithubMicrosoftedgeDevtoolssamplesConsoleLoggingDemoHtml]: https://microsoftedge.github.io/DevToolsSamples/console/logging-demo.html "Console messages examples: log, info, error, and warn | GitHub"  
[MdnDocsWebApiWindow]: https://developer.mozilla.org/docs/Web/API/Window "Window | MDN"  
[WikiReadEvalPrintLoop]: https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop "Read–eval–print loop | Wikipedia"  
