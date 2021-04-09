---
description: Learn how to run JavaScript in the Console.
title: Get started with running JavaScript in the Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/09/2021
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

This article teaches you how to run JavaScript in the Microsoft Edge DevTools **Console**.  For more information about how to log messages to the **Console**, navigate to [Get Started With Logging Messages][DevtoolsConsoleConsoleLog].  For more information about how to pause JavaScript code and step through it one line at a time, navigate to [Get Started With Debugging JavaScript][DevToolsJavascriptIndex].  

:::image type="complex" source="../media/console-javascript-example-console-playground.msft.png" alt-text="The Console" lightbox="../media/console-javascript-example-console-playground.msft.png":::
   The **Console**  
:::image-end:::  

## Overview  

The **Console** is a [REPL][WikiReadEvalPrintLoop], which stands for Read, Evaluate, Print, and Loop.  The **Console** completes the following actions.  

1.  Reads the JavaScript code while you type into it.  
1.  Evaluates your JavaScript code.  
1.  Prints the result of your [expression][2alityExpressionsVersusStatements].  
1.  Loops back to the first step.  
    
## Set up DevTools  

This article is designed for you to open up the demo and try all the workflows yourself.  When you physically follow along, you're more likely to remember the workflows later.

1.  Select `Control`+`Shift`+`J` \(Windows, Linux\) or `Command`+`Option`+`J` \(macOS\) to open the **Console**.  
1.  Hold `Control` \(Windows, Linux\) or `Command` \(macOS\) and choose **Console JavaScript Example** to open in a new window.  
    
    *   [Console JavaScript Example][GlitchConsoleJavascriptExample]  
    
    :::image type="complex" source="../media/console-javascript-example-console-empty.msft.png" alt-text="The Console JavaScript Example webpage displayed next to DevTools Console tool" lightbox="../media/console-javascript-example-console-empty.msft.png":::
       The Console JavaScript Example webpage displayed next to DevTools **Console** tool  
    :::image-end:::  
    
## View and change the JavaScript or DOM of the page  

When you build or debug a webpage, use the **Console** to change how the webpage displays or runs.  
    
1.  Notice the text in the button.  
1.  Type `document.getElementById('hello').textContent = 'Hello, Console!'` in the **Console** and then select `Enter` to evaluate the expression.  Notice how the text inside the button changes.  
    
    :::image type="complex" source="../media/console-javascript-example-console-change-button-text.msft.png" alt-text="How the Console looks after it evaluates the expression" lightbox="../media/console-javascript-example-console-change-button-text.msft.png":::
       How the **Console** looks after it evaluates the expression  
    :::image-end:::  
    
    `"Hello, Console!"`, is displayed below the code that you evaluated.  Remember the four steps of REPL.
    
    1.  Read  
    1.  Evaluate  
    1.  Print  
    1.  Loop.  
        
    After it evaluates your code, a REPL prints the result of the expression.  So `"Hello, Console!"` must be the evaluation result of `document.getElementById('hello').textContent = 'Hello, Console!'`.  
    
## Run arbitrary JavaScript that isn't related to the webpage  

Sometimes, you want a code playground to test some code, or try new JavaScript unfamiliar features.  The **Console** is a perfect place for similar experiments.  

1.  Type `5 + 15` in the **Console** and select `Enter` to evaluate the expression. The **Console** prints the result of the expression below your code.  In the following figure, your **Console** should display the result after it evaluates the expression.  

1.  Type the following code into the **Console**.  Try typing it out, character-by-character, rather than copy-pasting it.  
    
    ```javascript
    function add(a, b=20)
    ```  
    
    If you're unfamiliar with the `b=20` syntax, navigate to [define default values for function arguments][Esma6DefaultParameterValues].  
    
1.  Now, run the function that you defined.  
    
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

DevTools allows you to pause a script when it runs.  While a script is paused, use the **Console** to review and change the `window` or `DOM` of the webpage at that moment.  The ability to pause, review, and edit is a powerful debugging workflow.  For an interactive tutorial, navigate to [Get Started With Debugging JavaScript][DevToolsJavascriptIndex].  

The **Console** also has a set of convenience functions that make it easier to interact with a page.  For example:  

*   Rather than type `document.querySelector()` to choose an element, type `$()`.  The syntax is inspired by jQuery, but it's not jQuery.  It's just an alias for `document.querySelector()`.  
*   `debug(function)` effectively sets a breakpoint on the first line of that function.  
*   `keys(object)` returns an array containing the keys of the specified object.  

For more information about the convenience functions, navigate to [Console Utilities API Reference][DevToolsConsoleUtilities].  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleConsoleLog]: ./console-log.md "Log messages in the Console tool | Microsoft Docs"  
[DevToolsConsoleReference]: ./reference.md#run-javascript "Console reference | Microsoft Docs"  
[DevToolsConsoleUtilities]: ./utilities.md "Console Utilities API reference | Microsoft Docs"  
[DevToolsJavascriptIndex]: ../javascript/index.md "Get started with debugging JavaScript in Microsoft Edge DevTools | Microsoft Docs"  

[2alityExpressionsVersusStatements]: https://2ality.com/2012/09/expressions-vs-statements.html "Expressions versus statements in JavaScript"  

[Esma6DefaultParameterValues]: https://es6-features.org/index#DefaultParameterValues "Default Parameter Values - Extended Parameter Handling - ECMAScript 6 — New Features: Overview & Comparison"  

[GlitchConsoleJavascriptExample]: https://microsoft-edge-chromium-devtools.glitch.me/static/console/javascript/index.html "Console JavaScript example | Glitch"  

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
