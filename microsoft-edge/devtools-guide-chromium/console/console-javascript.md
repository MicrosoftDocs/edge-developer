---
description: An introduction to using Console tool inside the Microsoft Edge Developer Tools as a JavaScript environment.
title: Console as a JavaScript environment
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/15/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, JavaScript, web development, f12 tools, devtools
---

# Console as a JavaScript environment

The **Console** tool inside the browser DevTools is a [REPL][WikiREPLoop] environment, which means that you can write any JavaScript in it that will get immediately executed.

You can try it right now. Open **Console** by selecting `Control`+`Shift`+`J` (Windows, Linux) or `Command`+`Option`+`J` (macOS). 

Start typing in `2 + 2` and the Console already shows the result `4` on the line below whilst you type it. This is a feature called "Eager evaluation" and it helps you writing valid JavaScript as you can already see while you are typing if something is wrong or if there is a valid result.

:::image type="complex" source="../media/console-intro-two-plus+two.msft.png" alt-text="Console showing the result of 2 + 2 live as you type it" lightbox="../media/console-intro-two-plus+two.msft.png":::
Console showing the result of 2 + 2 live as you type it
:::image-end:::  

If you hit `Enter`, Console will run the JavaScript command, give you the result and you can write the next command. 

:::image type="complex" source="../media/console-intro-javascript-expressions-live.msft.png" alt-text="Running several JavaScript expressions in succession" lightbox="../media/console-intro-javascript-expressions.msft.png":::
Running several JavaScript expressions in succession
:::image-end:::  

## Autocompletion to write complex expressions

This last example may look daunting but Console helps you write complex JavaScript by having an excellent autocompletion feature. This feature is a great way to learn about methods you didn't know before. Try it by typing `doc` and you get a dropdown menu to pick `document` from. Hit the `tab` key to do so. Type `.bo` and hit `tab` to get `document.body`. Type another `.` to get a huge list of possible properties and methods available on the body of the current document. 

:::image type="complex" source="../media/console-intro-javascript-autocomplete.msft.png" alt-text="Console autocompletion of JavaScript expressions" lightbox="../media/console-intro-javascript-autocomplete.msft.png":::
Console autocompletion of JavaScript expressions
:::image-end:::  

## Console history

As with many other terminal-like experiences you also have a history of commands. Hitting Arrow-Up will show you the commands you entered before. Autocompletion also keeps a history of the commands you entered before, which means that you can type the first few letters of earlier commands and you get a box to choose from.

In addition to having access to what you entered, Console also offers quite a few [DevtoolsConsoleUtilities][utility method] that make your life easier. For example, `$_` always contains the result of the last expression you ran in Console.


## Multi line editing

Out-of-the-box only have one line to write your JavaScript expression. Hitting `Enter` will run the code. This can get pretty frustrating. You can work around this by using `Shift + Enter`. 

Using the Console is a great way to try out JavaScript functionality and to do some quick calculations. It's real power, however, comes with [interacting with the DOM in Console][DevtoolsDOMInteraction]. 

This page explains how the Microsoft Edge DevTools Console makes it easier to develop web pages.  The **Console** has 2 main uses: [viewing logged messages](#viewing-logged-messages) and [running JavaScript](#running-javascript).  

## Viewing logged messages  

Web developers often log messages to the Console to make sure that their JavaScript is working as expected.  To log a message, you insert an expression like `console.log('Hello, Console!')` into your JavaScript.  When the browser runs your JavaScript and processes an expression like it, the browser logs the message to the **Console**.  

:::row:::
   :::column span="":::
      The HTML and JavaScript for the page.  
      
      ```html
      <!doctype html>
      <html>
          <head>
              <title>Console Demo</title>
          </head>
          <body>
              <h1>Hello, World!</h1>
              <script>
                  console.log('Loading!');
                  const h1 = document.querySelector('h1');
                  console.log(h1.textContent);
                  console.assert(document.querySelector('h2'), 'h2 not found!');
                  const artists = [
                      { first: 'René', last: 'Magritte' },
                      { first: 'Chaim', last: 'Soutine' },
                        
                  ];
                  console.table(artists);
                  setTimeout(() => {
                      h1.textContent = 'Hello, Console!';
                      console.log(h1.textContent);
                  }, 3000);
              </script>
          </body>
      </html>
      ```  
   :::column-end:::
   :::column span="":::
      In the following figure, the **Console** displays the results of loading the page and waiting 3 seconds.  
      
      :::image type="complex" source="../media/console-console-demo.msft.png" alt-text="The Console panel" lightbox="../media/console-console-demo.msft.png":::
         The **Console** tool  
      :::image-end:::  
      
      Try to determine which lines of code caused the browser to log the messages.  
   :::column-end:::
:::row-end:::  

Web developers log messages for the following 2 general reasons.  

*   Making sure that code is running in the right order.  
*   Inspecting the values of variables at a certain moment in time.  

To get hands-on experience with logging, navigate to [Get Started With Logging Messages][DevtoolsConsoleLoggingMessages].  To browse the full list of `console` methods, navigate to the [Console API Reference][DevToolsConsoleAPI].  The main difference between the methods is how the data being logged is displayed.  

## Running JavaScript  

The **Console** is also a [REPL][WikiREPLoop].  You may run JavaScript in the **Console** to interact with the page being inspected.   

:::row:::
   :::column span="":::
      In the following figure, the **Console** is shown next to the DevTools homepage.  
      
      :::image type="complex" source="../media/devtools-console-empty.msft.png" alt-text="The Co nlee tool open int eh upper pane with Issues open in the lower one" lightbox="../media/devtools-console-empty.msft.png":::
         The **Console** tool nextz to the DevTools homepage  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      In the following figure, the same page is shown after using the **Console** to change the top heading of the page.
      
      :::image type="complex" source="../media/devtools-console-h1-changed.msft.png" alt-text="Use the Console to change the top heading of the page" lightbox="../media/devtools-console-h1-changed.msft.png":::
         Use the **Console** to change the top heading of the page  
      :::image-end:::  
   :::column-end:::
:::row-end:::

Modifying the page from the **Console** is possible because the **Console** has full access to the [window][MDNWindow] of the page.  DevTools has a few convenience functions that make it easier to inspect a page.  For example, suppose that your JavaScript contains a function called `hideModal`.  Running `debug(hideModal)` pauses your code on the first line of `hideModal` the next time that you run it.  For more information about the full list of utility functions, navigate to [Console Utilities API Reference][DevtoolsConsoleUtilitiesDebug].  

When you run JavaScript you do not have to interact with the page.  You may use the **Console** to try out new code unrelated to the page.  For example, suppose you just learned about the built-in JavaScript Array [map()][MDNMap] method, and you want to experiment with it.  trying my best to un
The **Console** is a good place to try out the function.  

For more hands-on experience with running JavaScript in the **Console**, navigate to [Get Started With Running JavaScript][DevtoolsConsoleRunningJavascript].  
## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  
[DevtoolsConsoleUtilities]: ./utilities.md
[DevtoolsDOMInteraction]: ./console-dom-interaction.md
[DevtoolsBreakpoints]: /microsoft-edge/devtools-guide-chromium/javascript/breakpoints.md
[Live Expressions]: ./live-expressions.md
[DevtoolsFilteringConsole]: ./console-filtering.md
[DevtoolsConsoleLoggingDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-examples.html
[DevtoolsConsoleTypesDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-types.html
[DevtoolsConsoleSpecifiersDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-with-specifiers.html
[DevtoolsConsoleGroupsDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-with-groups.html
[DevtoolsConsoleTableDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-with-table.html
[WikiStackTrace]: https://en.wikipedia.org/wiki/Stack_trace "Stack trace - Wikipedia"  
[DevtoolsConsoleErrorDemo]: https://microsoftedge.github.io/DevToolsSamples/console/error.html
[DevtoolsConsoleFilter]: ../microsoft-edge/devtools-guide-chromium/console/reference#filter-messages
[DevToolsIssues]: /microsoft-edge/devtools-guide-chromium/issies
[DevToolsConsoleAPI]: ./api.md "Console API Reference | Microsoft Docs"  
[DevtoolsConsoleLoggingMessages]: ./log.md "Get Started With Logging Messages In The Console | Microsoft Docs"  
[DevtoolsConsoleRunningJavascript]: ./javascript.md "Get Started With Running JavaScript In The Console | Microsoft Docs"  
[DevtoolsConsoleUtilitiesDebug]: ./utilities.md#debug "debug - Console Utilities API Reference | Microsoft Docs"  
[MDNMap]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map "Array.prototype.map() | MDN"  
[MDNWindow]: https://developer.mozilla.org/docs/Web/API/Window "Window | MDN"  
[WikiREPLoop]: https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop "Read–eval–print loop - Wikipedia"  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  