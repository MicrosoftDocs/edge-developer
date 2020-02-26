---
title: Console Overview
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
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

Web developers often log messages to the Console to make sure that their JavaScript is working as expected.  To log a message, you insert an expression like `console.log('Hello, Console!')` into your JavaScript.  When the browser runs your JavaScript and sees an expression like that, it logs the message to the Console.  For example, suppose that you are writing the HTML and JavaScript for a page:  

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
        {
          first: 'René',
          last: 'Magritte'
        },
        {
          first: 'Chaim',
          last: 'Soutine'
        },
        {
          first: 'Henri',
          last: 'Matisse'
        }
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

[Figure 1](#figure-1) shows what the Console looks like after loading the page and waiting 3 seconds.  Try to figure out which lines of code caused the browser to log the messages.  

> ##### Figure 1  
> The Console panel  
> ![The Console panel][ImageConsole]  

Web developers log messages for 2 general reasons:  

*   Making sure that code is running in the right order.  
*   Inspecting the values of variables at a certain moment in time.  

<!--See [Get Started With Logging Messages][LoggingMessages] to get hands-on experience with logging.  -->  
<!--See the [Console API Reference][ConsoleAPI] to browse the full list of `console` methods.  -->  
The main difference between the methods is how the data being logged is displayed.  

## Running JavaScript   

The Console is also a [REPL][WikiREPLoop].  You may run JavaScript in the Console to interact with the page being inspected.  For example, [Figure 2](#figure-2) shows the Console next to the DevTools homepage, and [Figure 3](#figure-3) shows that same page after using the Console to change the top heading of the page.  

> ##### Figure 2  
> The Console panel next to the DevTools homepage  
> ![The Console panel next to the DevTools homepage][ImageConsoleOverview]  

> ##### Figure 3  
> Using the Console to change the top heading of the page  
> ![Using the Console to change the top heading of the page][ImageConsoleChangeTitle]  

Modifying the page from the Console is possible because the Console has full access to the [`window`][MDNWindow] of the page.  DevTools has a few convenience functions that make it easier to inspect a page.  For example, suppose that your JavaScript contains a function called `hideModal`.  Running `debug(hideModal)` pauses your code on the first line of `hideModal` the next time that you run it.  <!--See [Console Utilities API Reference][UtilitiesDebug] to see the full list of utility functions.  -->  

When you run JavaScript you do not have to interact with the page.  You may use the Console to try out new code unrelated to the page.  For example, suppose you just learned about the built-in JavaScript Array method [`map()`][MDNMap], and you want to experiment with it.  
The Console is a good place to try out the function.  

<!--See [Get Started With Running JavaScript][RunningJavascript] to get hands-on experience with running JavaScript in the Console.  -->

   

  

<!-- image links -->  

[ImageConsole]: images/console-console-demo.msft.png "Figure 1: The Console panel"  
[ImageConsoleChangeTitle]: images/devtools-console-h1-changed.msft.png "Figure 3: Using the Console to change the top heading of the page"  
[ImageConsoleOverview]: images/devtools-console-empty.msft.png "Figure 2: The Console panel next to the DevTools homepage"  

<!-- links -->  

<!--[ConsoleAPI]: api.md ""  -->  
<!--[LoggingMessages]: log.md ""  -->  
<!--[RunningJavascript]: javascript.md ""  -->  
<!--[UtilitiesDebug]: utilities.md#debugfunction ""  -->

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
