---
description: An introduction to the Console tool inside the Microsoft Edge Developer Tools.
title: Use the Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/24/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Use the Console  

The **Console** tool of the DevTools helps you with several tasks.  The following list includes some of the tasks.  

*   Find out why something is not working in the current project by [track down problems][DevtoolsConsoleConsoleDebugJavascript].  
*   [Get information about the web project][DevtoolsConsoleConsoleFiltering] in the browser as log messages.  
*   [Log information][DevtoolsConsoleConsoleLog] in scripts for debugging purposes.  
*   [Try the JavaScript expressions][DevtoolsConsoleConsoleJavascript] live in a [REPL][WikiReadEvalPrintLoop] fashion.  
*   [Interact with the web project in the browser][DevtoolsConsoleConsoleDomInteraction] using JavaScript.  

The versatility of the **Console** made it one of the few tools in DevTools that you open in several places.  It may display as part of the upper panel and also live in the bottom drawer.  It is a great companion tool to have open with others as it is a powerful way to try the script functionality and inspect and manipulate the current webpage using JavaScript.  

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

The fastest way to get directly to **Console** is to select `Control`+`Shift`+`J` \(Windows, Linux\) or `Command`+`Option`+`J` \(macOS\).  

## Error reports and Console  

**Console** is the default place where JavaScript and connectivity errors are reported.  If any errors occur, a button displays next to the **Settings** icon in DevTools that provides the amount of errors and warnings.  Choose it to open the **Console** and display the problem.  

:::image type="complex" source="../media/console-debug-displays-error.msft.png" alt-text="DevTools gives detailed information about the error in the Console" lightbox="../media/console-debug-displays-error.msft.png":::
   DevTools gives detailed information about the error in the **Console**  
:::image-end:::  

Read more details about [debug using Console][DevtoolsConsoleConsoleDebugJavascript].  

## Inspect and filter information on the current webpage  

The usefulness of **Console** is also a problem.  If you have DevTools open on any webpage, you are likely to display a deluge of information logged to the **Console**.  This became such a problem that DevTools started to get an [Issues][DevtoolsIssuesIndex] tool to cut down on the noise.  

:::image type="complex" source="../media/console-intro-noise.msft.png" alt-text="DevTools with a Console full of messages" lightbox="../media/console-intro-noise.msft.png":::
   DevTools with a **Console** full of messages  
:::image-end:::  

A lot of noise remains, which is why it is a good idea to know about [automated log and filter options][DevtoolsConsoleConsoleFiltering] of the **Console**.  

## Log information to display in Console  

Probably the biggest use case of **Console** is logging information in your scripts using `console.log()` and similar methods.  To try it, complete the following actions.  

1.  Open **Console**.
    *   Select `Control`+`Shift`+`J` \(Windows, Linux\) or `Command`+`Option`+`J` \(macOS\).  
1.  Navigate to [Console messages examples: log, info, error and warn][GithubMicrosoftedgeDevtoolssamplesConsoleLoggingDemoHtml] or copy the following code snippet in the **Console**.  
    
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
    
1.  The **CONSOLE** displays the results.  
    
    :::image type="complex" source="../media/console-intro-logging.msft.png" alt-text="DevTools with a Console full of messages caused by the demo code" lightbox="../media/console-intro-logging.msft.png":::
       DevTools with a **Console** full of messages caused by the demo code  
    :::image-end:::  
    
This is one example.  A lot of useful methods afre available and you should dive deeper into the options of [log to Console][DevtoolsConsoleConsoleLog].  

## Try your JavaScript live in Console  

**Console** is not only a place to log information, it is also a [REPL][WikiReadEvalPrintLoop] environment, which means that you may write any JavaScript in it and it get runs immediately.  This is useful if you just want to play with some new JavaScript features or do some quick calculations.  You get all the features you expect from a modern editing environment, like autocompletion, syntax highlighting and history.  

To try it, complete the following actions.  

1.  Navigate to **Console**.  
1.  Type `2 + 2`.  
    
The **Console** displays the result `4` on the following line as you type it.  This is a feature named **Eager evaluation** and is handy to display that you are not making any mistakes.  

:::image type="complex" source="../media/console-javascript-eager-evaluation.msft.png" alt-text="Console displays the result of 2 + 2 live as you type it" lightbox="../media/console-javascript-eager-evaluation.msft.png":::
   **Console** displays the result of `2 + 2` live as you type it  
:::image-end:::  

If you hit `Enter`, **Console** runs the JavaScript command and give you the result and you may write the next command.  

:::image type="complex" source="../media/console-javascript-several-expressions.msft.png" alt-text="Run several JavaScript expressions in succession" lightbox="../media/console-javascript-several-expressions.msft.png":::
   Run several JavaScript expressions in succession  
:::image-end:::  

You only have one line to write your JavaScript expressions as you select `Enter` to run the code.  To work around the single line limitation, select `Shift`+`Enter`.  As with many other terminal-like experiences you also have a history of commands.  Select `Arrow-Up` to display the commands you previously entered.  

The autocompletion feature of **Console** may be a great way to learn about methods you did not know before.  To try it, complete the following actions.  

1.  Open the **Console**.  
1.  Type `doc`.  
1.  Choose `document` from the dropdown menu.  
1.  Select the `tab` key to choose it.  
1.  Type `.bo`.  
1.  Select `tab` to get `document.body`.  
1.  Type another `.` to display a huge list of possible properties and methods available on the body of the current webpage.  
    
:::image type="complex" source="../media/console-javascript-autocomplete.msft.png" alt-text="Console autocompletion of JavaScript expressions" lightbox="../media/console-javascript-autocomplete.msft.png":::
   **Console** autocompletion of JavaScript expressions  
:::image-end:::  

A few more tricks are available. To learn more, navigate to [Console as a JavaScript environment][DevtoolsConsoleConsoleJavascript].  

## Interact with the current webpage in the browser  

As **Console** has access to the [Window][MdnDocsWebApiWindow] object of the browser you may write scripts that interact with the current webpage.  To try it, open the **Console** and type or copy and paste the following code snippet.  

```javascript
document.querySelector('h1').innerHTML
```  

:::image type="complex" source="../media/console-intro-reading-DOM.msft.png" alt-text="Read content from the DOM in Console" lightbox="../media/console-intro-reading-DOM.msft.png":::
   Read content from the DOM in **Console**  
:::image-end:::  

Instead of only reading from the webpage, you may also change it.  To try it, open the **Console** and type or copy and paste the following code snippet.  

```javascript
document.querySelector('h1').innerHTML = 'Rocking the Console';
```  

:::image type="complex" source="../media/console-intro-wrtiting-DOM.msft.png" alt-text="Write to the DOM in Console" lightbox="../media/console-intro-wrtiting-DOM.msft.png":::
   Write to the DOM in **Console**  
:::image-end:::  

You changed the main heading of the webpage to **Rocking the Console**  

In addition to any JavaScript you want run, **Console** also comes with a lot of [Utility methods][DevtoolsConsoleUtilities] that make it even easier to access and manipulate the current webpage.  For example, if you want to add a green border around all the links in the current webpage, use the following code snippet.  

```javascript
$$('a').forEach(a => a.style.border='1px solid lime');
```  

:::image type="complex" source="../media/console-intro-changing-styles.msft.png" alt-text="Manipulate a selection of elements using Console" lightbox="../media/console-intro-changing-styles.msft.png":::
    Manipulate a selection of elements using **Console**  
:::image-end:::  

Want to learn more?  Navigate to [DOM Interaction in Console][DevtoolsConsoleConsoleDomInteraction].  

## Learn more about Console  

If you want to go deep and learn all about the functionality of **Console** feel free to check the [Reference][DevtoolsConsoleReference], the [Utility methods][DevtoolsConsoleUtilities] and the [API docs][DevtoolsConsoleApi].  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleApi]: ./api.md "Console API Reference | Microsoft Docs"  
[DevtoolsConsoleConsoleDebugJavascript]: ./console-debug-javascript.md "Debug errors reported in Console | Microsoft Docs"  
[DevtoolsConsoleConsoleDomInteraction]: ./console-dom-interaction.md "Use the Console to interact with the DOM | Microsoft Docs"  
[DevtoolsConsoleConsoleJavascript]: ./console-javascript.md "Console as a JavaScript environment | Microsoft Docs"  
[DevtoolsConsoleConsoleLog]: ./console-log.md "Logs in the Console tool | Microsoft Docs"  
[DevtoolsConsoleReference]: ./reference.md "Console reference | Microsoft Docs"  
[DevtoolsConsoleUtilities]: ./utilities.md "Console Utilities API reference | Microsoft Docs"  

[DevtoolsIssuesIndex]: ../issues/index.md "Find and fix problems with the Microsoft Edge DevTools Issues tool | Microsoft Docs"  

[GithubMicrosoftedgeDevtoolssamplesConsoleLoggingDemoHtml]: https://microsoftedge.github.io/DevToolsSamples/console/logging-demo.html "Console messages examples: log, info, error and warn | GitHub"  

[MdnDocsWebApiWindow]: https://developer.mozilla.org/docs/Web/API/Window "Window | MDN"  

[WikiReadEvalPrintLoop]: https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop "Read–eval–print loop | Wikipedia"  
