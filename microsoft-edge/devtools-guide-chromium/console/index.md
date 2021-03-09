---
description: The main uses of the Microsoft Edge DevTools Console are logging messages and running JavaScript.
title: Console overview
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/09/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# Using the Console

The **Console** tool of the DevTools helps developers with several tasks. You can: 

* Find out why something isn't working with the JavaScript of the current project
* Get information about the web project in the browser as log messages
* Log information from scripts for debugging
* Try out JavaScript expressions live in a [REPL][WikiREPLoop] fashion 
* Interact with the web project in the browser using JavaScript

Ever since browsers started offering developer tools, the **Console** has become a favorite of developers. The reason is simple: in most programming courses we are taught to put out some kind of print command where we want to gain insights what is happening. In JavaScript and before we had DevTools, this was either using an `alert()` or a `document.write()` statement, and neither were a satisfying experience.

The big success of the **Console** also made it one of the few tools in DevTools that can be open in several places. It could be a part of the upper pane and also live in the bottom drawer. It is a great companion tool to have open with others as it is a powerful way to try out script functionality and inspect the current document from a scripting angle.

:::row:::
   :::column span="":::
      :::image type="complex" source="../media/console-intro-upper-pane.msft.png" alt-text="The Console tool open in the upper pane with Issues open in the lower one" lightbox="../media/console-intro-upper-pane.msft.png":::
         The **Console** tool open in the upper pane with **Issues** open in the lower one 
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/console-intro-drawer.msft.png" alt-text="Console in the lower panel with the Elements tool open above it" lightbox="../media/console-intro-drawer.msft.png":::
         **Console** in the lower panel with the **Elements** tool open above it 
      :::image-end:::  
   :::column-end:::
:::row-end:::

The convenience of adding a `console.log()` is also its problem. If you have your developer tools open on any web site, you are likely to see a deluge of information logged to the console. This became such a problem that DevTools started to get an [Issues][DevToolsIssues] tool to cut down on the noise.

:::image type="complex" source="../media/console-intro-noise.msft.png" alt-text="DevTools with a console full of messages" lightbox="../media/console-intro-noise.msft.png":::
   DevTools with a console full of messages 
:::image-end:::  

And yet this is often not enough, which is why it is good to get to know the filter and display options of the **Console** tool which are described in detail in the [filter section of the Console reference][DevtoolsConsoleFilter].


## Getting error information in the console

The first experience any user of DevTools has with the **Console** is probably when there was an error in a script. You can try this out right now by navigating to this [web page with error demo][DevtoolsConsoleErrorDemo]. 

If you open DevTools in the browser you will get a button on the top right that indicates that there is an error on the page.

:::image type="complex" source="../media/console-intro-error-report.msft.png" alt-text="DevTools flagging up that there is an error on the current page" lightbox="../media/console-intro-error-report.msft.png":::
   DevTools flagging up that there is an error on the current page 
:::image-end:::  

Activating this button takes you to the **Console** and gives you more information about the error.

:::image type="complex" source="../media/console-intro-error-in-console.msft.png" alt-text="DevTools giving detailed information about the error in the Console" lightbox="../media/console-intro-error-in-console.msft.png":::
   DevTools giving detailed information about the error in the Console 
:::image-end:::  

From this information you can gather that the error is on line 14 of the file called `error.html`. If you activate the `error.html:14` link on the right the Console takes you directly to the Sources tool and highlights the problematic line of code.

:::image type="complex" source="../media/console-intro-error-to-sources.msft.png" alt-text="DevTools giving detailed information about the error in the Console" lightbox="../media/console-intro-error-to-sources.msft.png":::
   DevTools giving detailed information about the error in the Console 
:::image-end:::  

In this case, the script tried to get the first `h2` element in the document and paint a red border around it. But as there is no `h2` element the script fails. 


## Trying JavaScript in the console

## Interacting with the current document

## Console limitations and alternatives.


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
         The **Console** tool next to the DevTools homepage  
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

When you run JavaScript you do not have to interact with the page.  You may use the **Console** to try out new code unrelated to the page.  For example, suppose you just learned about the built-in JavaScript Array [map()][MDNMap] method, and you want to experiment with it.  
The **Console** is a good place to try out the function.  

For more hands-on experience with running JavaScript in the **Console**, navigate to [Get Started With Running JavaScript][DevtoolsConsoleRunningJavascript].  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleLoggingDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-examples.html
[DevtoolsConsoleTypesDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-types.html
[DevtoolsConsoleSpecifiersDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-with-specifiers.html
[DevtoolsConsoleGroupsDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-with-groups.html
[DevtoolsConsoleTableDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-with-table.html
[WikiStackTrace]: https://en.wikipedia.org/wiki/Stack_trace "Stack trace - Wikipedia"  
[DevtoolsConsoleErrorDemo]: https://microsoftedge.github.io/DevToolsSamples/console/error.html
[DevtoolsConsoleFilter]: ../microsoft-edge/devtools-guide-chromium/console/reference#filter-messages
[DevToolsIssues]: ../issues
[DevToolsConsoleAPI]: ./api.md "Console API Reference | Microsoft Docs"  
[DevtoolsConsoleLoggingMessages]: ./log.md "Get Started With Logging Messages In The Console | Microsoft Docs"  
[DevtoolsConsoleRunningJavascript]: ./javascript.md "Get Started With Running JavaScript In The Console | Microsoft Docs"  
[DevtoolsConsoleUtilitiesDebug]: ./utilities.md#debug "debug - Console Utilities API Reference | Microsoft Docs"  

[MDNMap]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map "Array.prototype.map() | MDN"  
[MDNWindow]: https://developer.mozilla.org/docs/Web/API/Window "Window | MDN"  

[WikiREPLoop]: https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop "Read–eval–print loop - Wikipedia"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
