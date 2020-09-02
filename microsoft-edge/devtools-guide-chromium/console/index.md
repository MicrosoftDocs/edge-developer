---
description: The main uses of the Microsoft Edge DevTools Console are logging messages and running JavaScript.
title: Console Overview
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 09/01/2020 
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->





# Console Overview   

  

This page explains how the Microsoft Edge DevTools Console makes it easier to develop web pages.  The Console has 2 main uses: [viewing logged messages](#viewing-logged-messages) and [running JavaScript](#running-javascript).  

## Viewing logged messages   

Web developers often log messages to the Console to make sure that their JavaScript is working as expected.  To log a message, you insert an expression like `console.log('Hello, Console!')` into your JavaScript.  When the browser runs your JavaScript and sees an expression like that, it logs the message to the Console.  

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
                      { first: 'Henri', last: 'Matisse' }
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
         The **Console** panel  
      :::image-end:::  
      
      Try to determine which lines of code caused the browser to log the messages.  
   :::column-end:::
:::row-end:::  

Web developers log messages for the following 2 general reasons.  

*   Making sure that code is running in the right order.  
*   Inspecting the values of variables at a certain moment in time.  

See [Get Started With Logging Messages][DevtoolsConsoleLoggingMessages] to get hands-on experience with logging.  See the [Console API Reference][DevToolsConsoleAPI] to browse the full list of `console` methods.  The main difference between the methods is how the data being logged is displayed.  

## Running JavaScript   

The **Console** is also a [REPL][WikiREPLoop].  You may run JavaScript in the **Console** to interact with the page being inspected.   

:::row:::
   :::column span="":::
      In the following figure, the **Console** is shown next to the DevTools homepage.  
      
      :::image type="complex" source="../media/devtools-console-empty.msft.png" alt-text="The Console panel next to the DevTools homepage" lightbox="../media/devtools-console-empty.msft.png":::
         The **Console** panel next to the DevTools homepage  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      In the following figure, the same page is shown after using the **Console** to change the top heading of the page.
      
      :::image type="complex" source="../media/devtools-console-h1-changed.msft.png" alt-text="Use the Console to change the top heading of the page" lightbox="../media/devtools-console-h1-changed.msft.png":::
         Use the **Console** to change the top heading of the page  
      :::image-end:::  
   :::column-end:::
:::row-end:::

Modifying the page from the **Console** is possible because the **Console** has full access to the [window][MDNWindow] of the page.  DevTools has a few convenience functions that make it easier to inspect a page.  For example, suppose that your JavaScript contains a function called `hideModal`.  Running `debug(hideModal)` pauses your code on the first line of `hideModal` the next time that you run it.  For more information about the full list of utility functions, see [Console Utilities API Reference][DevtoolsConsoleUtilitiesDebug].  

When you run JavaScript you do not have to interact with the page.  You may use the **Console** to try out new code unrelated to the page.  For example, suppose you just learned about the built-in JavaScript Array [map()][MDNMap] method, and you want to experiment with it.  
The **Console** is a good place to try out the function.  

For more hands-on experience with running JavaScript in the **Console**, see [Get Started With Running JavaScript][DevtoolsConsoleRunningJavascript].  

   

  

<!-- links -->  

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
