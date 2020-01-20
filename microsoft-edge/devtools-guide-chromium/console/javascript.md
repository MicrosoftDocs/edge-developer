---
title: Get Started With Running JavaScript In The Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/20/2020
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







# Get Started With Running JavaScript In The Console   



This interactive tutorial shows you how to run JavaScript in the Microsoft Edge DevTools Console.  See [Get Started With Logging Messages][DevToolsConsoleLoggingMessages] to learn how to log messages to the Console.  See [Get Started With Debugging JavaScript][DevToolsJavascriptIndex] to learn how to pause JavaScript code and step through it one line at a time.  

> ##### Figure 1  
> The **Console**  
> ![The Console][ImageConsole]  

## Overview   

The **Console** is a [REPL][WikiReadEvalPrintLoop], which stands for Read, Evaluate, Print, and Loop.  It reads the JavaScript that you type into it, evaluates your code, prints out the result of your [expression][2alityExpressionsVersusStatements], and then loops back to the first step.  

## Set up DevTools   

This tutorial is designed for you to open up the demo and try all the workflows yourself.  When you physically follow along, you are more likely to remember the workflows later.

1.  Press `Control`+`Shift`+`J` \(Windows\) or `Command`+`Option`+`J` \(macOS\) to open the **Console**.  
1.  Hold `Control` \(Windows\) or `Command` \(macOS\) and click **Console Javascript Example** to open in a new window.  
    
    [Console Javascript Example][GlitchConsoleJavascriptExample]  
    
    > ##### Figure 2  
    > The Console JavaScript Example page on the left, and DevTools on the right  
    > ![The Console JavaScript Example page on the left, and DevTools on the right][ImageTutorialDevToolsJs]  

## View and change the JavaScript or DOM of the page   

When building or debugging a page, it is often useful to run statements in the **Console** in order to change how the page looks or runs.  
    
1.  Notice the text in the button.  
1.  Type `document.getElementById('hello').textContent = 'Hello, Console!'` in the **Console** and then press `Enter` to evaluate the expression.  Notice how the text inside the button changes.  
    
    > ##### Figure 3  
    > How the Console looks after evaluating the expression  
    > ![How the Console looks after evaluating the expression][ImageConsoleAfterEvaluating]  
    
    Below the code that you evaluated you see `"Hello, Console!"`.  Recall the 4 steps of REPL: read, evaluate, print, loop.  After evaluating your code, a REPL prints the result of the expression.  So `"Hello, Console!"` must be the result of evaluating `document.getElementById('hello').textContent = 'Hello, Console!'`.  
    
## Run arbitrary JavaScript that is not related to the page   

Sometimes, you just want a code playground where you are able to test some code, or try out new JavaScript features you are not familiar with.  The Console is a perfect place for these kinds of experiments.  

1.  Type `5 + 15` in the Console and press `Enter` to evaluate the expression. The Console prints out the result of the expression below your code.  **Figure 4** below shows how your Console should look after evaluating this expression.  

1.  Type the following code into the **Console**.  Try typing it out, character-by-character, rather than copy-pasting it.  
    
    ```javascript
    function add(a, b=20) {
        return a + b;
    }
    ```  
    
    See [define default values for function arguments][Esma6DefaultParameterValues] if you are unfamiliar with the `b=20` syntax.  
    
1.  Now, call the function that you just defined.  
    
    ```javascript
    add(25);
    ```  
    
    > ##### Figure 4  
    > How the Console looks after evaluating the expressions above  
    > ![How the Console looks after evaluating the expressions above][ImagePlayground]  
    
    `add(25)` evaluates to `45` because when the `add` function is called without a second argument, `b` defaults to `20`.  

## Next steps   

<!--See [Run JavaScript][DevToolsConsoleReference] to explore more features related to running JavaScript in the Console.  -->  

<!--todo: add console reference (run javascript) section when available  -->  

DevTools lets you pause a script in the middle of running.  While you are paused, you may use the **Console** to view and change the `window` or `DOM` of the page at that moment in time.  This makes for a powerful debugging workflow.  See [Get Started With Debugging JavaScript][DevToolsJavascriptIndex] for an interactive tutorial.  

The **Console** also has a set of convenience functions that make it easier to interact with a page.  For example:  

*   Rather than typing `document.querySelector()` to select an element, type `$()`.  This syntax is inspired by jQuery, but it is not actually jQuery.  It is just an alias for `document.querySelector()`.  
*   `debug(function)` effectively sets a breakpoint on the first line of that function.  
*   `keys(object)` returns an array containing the keys of the specified object.  

<!--See [Console Utilities API Reference][DevToolsConsoleUtilities] to explore all the convenience functions.  -->  

<!--todo: add console utilities api reference section when available  -->  

 



<!-- image links -->  

[ImageConsole]: images/console-javascript-example-console-playground.msft.png "Figure 1: The Console"  
[ImageTutorialDevToolsJs]: images/console-javascript-example-console-empty.msft.png "Figure 2: The Console JavaScript Example page on the left, and DevTools on the right"  
[ImageConsoleAfterEvaluating]: images/console-javascript-example-console-change-button-text.msft.png "Figure 3: How the Console looks after evaluating the expression"  
[ImagePlayground]: images/console-javascript-example-console-playground.msft.png "Figure 4: How the Console looks after evaluating the expressions above"  

<!-- links -->  

[DevToolsConsoleLoggingMessages]: log.md "Get Started With Logging Messages In The Console"  
<!--[DevToolsConsoleReference]: reference.md#run-javascript "Console Reference"  -->  
<!--[DevToolsConsoleUtilities]: utilities.md "Console Utilities API Reference"  -->  

[DevToolsJavascriptIndex]: ../javascript/index.md "Get Started with Debugging JavaScript in Microsoft Edge DevTools"  

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
