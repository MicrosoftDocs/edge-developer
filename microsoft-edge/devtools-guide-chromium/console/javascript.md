---
description: Learn how to run JavaScript in the Console.
title: Get started with running JavaScript in the Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/12/2021
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

# Get started with running JavaScript in the Console  

This interactive tutorial shows you how to run JavaScript in the Microsoft Edge DevTools **Console**.  For more information about how to log messages to the **Console**, navigate to [Get Started With Logging Messages][DevToolsConsoleLoggingMessages].  For more information about how to pause JavaScript code and step through it one line at a time, navigate to [Get Started With Debugging JavaScript][DevToolsJavascriptIndex].  

:::image type="complex" source="../media/console-javascript-example-console-playground.msft.png" alt-text="The Console" lightbox="../media/console-javascript-example-console-playground.msft.png":::
   The **Console**  
:::image-end:::  

## Overview  

The **Console** is a [REPL][WikiReadEvalPrintLoop], which stands for Read, Evaluate, Print, and Loop.  It reads the JavaScript that you type into it, evaluates your code, prints out the result of your [expression][2alityExpressionsVersusStatements], and then loops back to the first step.  

## Set up DevTools  

This tutorial is designed for you to open up the demo and try all the workflows yourself.  When you physically follow along, you are more likely to remember the workflows later.

1.  Select `Control`+`Shift`+`J` \(Windows, Linux\) or `Command`+`Option`+`J` \(macOS\) to open the **Console**.  
1.  Hold `Control` \(Windows, Linux\) or `Command` \(macOS\) and choose **Console Javascript Example** to open in a new window.  
    
    *   [Console Javascript Example][GlitchConsoleJavascriptExample]  
    
    :::image type="complex" source="../media/console-javascript-example-console-empty.msft.png" alt-text="The Console JavaScript Example page on the left, and DevTools on the right" lightbox="../media/console-javascript-example-console-empty.msft.png":::
       The Console JavaScript Example page on the left, and DevTools on the right  
    :::image-end:::  
    
## View and change the JavaScript or DOM of the page  

When building or debugging a page, it is often useful to run statements in the **Console** in order to change how the page looks or runs.  
    
1.  Notice the text in the button.  
1.  Type `document.getElementById('hello').textContent = 'Hello, Console!'` in the **Console** and then select `Enter` to evaluate the expression.  Notice how the text inside the button changes.  
    
    :::image type="complex" source="../media/console-javascript-example-console-change-button-text.msft.png" alt-text="How the Console looks after evaluating the expression" lightbox="../media/console-javascript-example-console-change-button-text.msft.png":::
       How the **Console** looks after evaluating the expression  
    :::image-end:::  
    
    `"Hello, Console!"`, is displayed below the code that you evaluated.  Remember the 4 steps of REPL: read, evaluate, print, loop.  After evaluating your code, a REPL prints the result of the expression.  So `"Hello, Console!"` must be the result of evaluating `document.getElementById('hello').textContent = 'Hello, Console!'`.  
    
## Run arbitrary JavaScript that is not related to the page  

Sometimes, you just want a code playground where you are able to test some code, or try out new JavaScript features you are not familiar with.  The **Console** is a perfect place for these kinds of experiments.  

1.  Type `5 + 15` in the Console and select `Enter` to evaluate the expression. The Console prints out the result of the expression below your code.  In the following figure, your **Console** should display the result after evaluating the expression.  

1.  Type the following code into the **Console**.  Try typing it out, character-by-character, rather than copy-pasting it.  
    
    ```javascript
    function add(a, b=20)
    ```  
    
    If you are unfamiliar with the `b=20` syntax, navigate to [define default values for function arguments][Esma6DefaultParameterValues].  
    
1.  Now, run the function that you just defined.  
    
    :::row:::
       :::column span="":::
          ```javascript
          add(25);
          ```  
       :::column-end:::
       :::column span="":::
          :::image type="complex" source="../media/console-javascript-example-console-playground.msft.png" alt-text="The Console displays after evaluating the expressions in the code snippet" lightbox="../media/console-javascript-example-console-playground.msft.png":::
             The **Console** displays after evaluating the expressions in the code snippet  
          :::image-end:::  
       :::column-end:::
    :::row-end:::
    
    `add(25)` evaluates to `45` because when the `add` function is called without a second argument, `b` defaults to `20`.  

## Next steps  

<!--To explore more features related to running JavaScript in the **Console**, navigate to [Run JavaScript][DevToolsConsoleReference].  -->  

<!--todo: add console reference (run javascript) section when available  -->  

DevTools lets you pause a script in the middle of running.  While you are paused, you may use the **Console** to view and change the `window` or `DOM` of the page at that moment in time.  The workflow makes for a powerful debugging workflow.  For an interactive tutorial, navigate to [Get Started With Debugging JavaScript][DevToolsJavascriptIndex].  

The **Console** also has a set of convenience functions that make it easier to interact with a page.  For example:  

*   Rather than typing `document.querySelector()` to select an element, type `$()`.  This syntax is inspired by jQuery, but it is not actually jQuery.  It is just an alias for `document.querySelector()`.  
*   `debug(function)` effectively sets a breakpoint on the first line of that function.  
*   `keys(object)` returns an array containing the keys of the specified object.  

For more information about the convenience functions, navigate to [Console Utilities API Reference][DevToolsConsoleUtilities].  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevToolsConsoleLoggingMessages]: ./log.md "Get started with logging messages in the Console | Microsoft Docs"  
[DevToolsConsoleReference]: ./reference.md#run-javascript "Console reference | Microsoft Docs"  
[DevToolsConsoleUtilities]: ./utilities.md "Console Utilities API reference | Microsoft Docs"  
[DevToolsJavascriptIndex]: ../javascript/index.md "Get started with debugging JavaScript in Microsoft Edge DevTools | Microsoft Docs"  

[2alityExpressionsVersusStatements]: https://2ality.com/2012/09/expressions-vs-statements.html "Expressions versus statements in JavaScript"  

[Esma6DefaultParameterValues]: https://es6-features.org/index#DefaultParameterValues "Default Parameter Values - Extended Parameter Handling - ECMAScript 6 — New Features: Overview & Comparison"  

[GlitchConsoleJavascriptExample]: https://microsoft-edge-chromium-devtools.glitch.me/static/console/javascript/index.html "Console Javascript Example | Glitch"  

[WikiReadEvalPrintLoop]: https://en.wikipedia.org/wiki/Read–eval–print_loop "Read–eval–print loop - Wikipedia"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/javascript) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
