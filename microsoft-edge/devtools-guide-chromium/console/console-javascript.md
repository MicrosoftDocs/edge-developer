---
description: An introduction to using Console tool inside the Microsoft Edge Developer Tools as a JavaScript environment.
title: Console as a JavaScript environment
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/17/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, JavaScript, web development, f12 tools, devtools
---

# Console as a JavaScript environment

The **Console** tool inside the browser DevTools is a [REPL][WikiREPLoop] environment, which means that you can write any JavaScript in it that will get immediately executed.

You can try it right now. Open **Console** by selecting `Control`+`Shift`+`J` (Windows, Linux) or `Command`+`Option`+`J` (macOS). 

Start typing in `2 + 2` and the Console already shows the result `4` on the line below whilst you type it. This is a feature called "Eager evaluation" and it helps you writing valid JavaScript as you can already see while you are typing if something is wrong or if there is a valid result.

:::image type="complex" source="../media/console-javascript-eager-evaluation.msft.png" alt-text="Console showing the result of 2 + 2 live as you type it" lightbox="../media/console-javascript-eager-evaluation.msft.png":::
Console showing the result of 2 + 2 live as you type it
:::image-end:::  

If you hit `Enter`, Console will run the JavaScript command, give you the result and you can write the next command. 

:::image type="complex" source="../media/console-javascript-several-expressions.msft.png" alt-text="Running several JavaScript expressions in succession" lightbox="../media/console-javascript-several-expressions.msft.png":::
Running several JavaScript expressions in succession
:::image-end:::  

## Autocompletion to write complex expressions

This last example may look daunting but Console helps you write complex JavaScript by having an excellent autocompletion feature. This feature is a great way to learn about methods you didn't know before. Try it by typing `doc` and you get a dropdown menu to pick `document` from. Hit the `tab` key to do so. Type `.bo` and hit `tab` to get `document.body`. Type another `.` to get a huge list of possible properties and methods available on the body of the current document. 

:::image type="complex" source="../media/console-javascript-autocomplete.msft.png" alt-text="Console autocompletion of JavaScript expressions" lightbox="../media/console-javascript-autocomplete.msft.png":::
Console autocompletion of JavaScript expressions
:::image-end:::  

## Console history

As with many other terminal-like experiences you also have a history of commands. Hitting Arrow-Up will show you the commands you entered before. Autocompletion also keeps a history of the commands you entered before, which means that you can type the first few letters of earlier commands and you get a box to choose from.

In addition to having access to what you entered, Console also offers quite a few [utility methods][DevtoolsConsoleUtilityMethods] that make your life easier. For example, `$_` always contains the result of the last expression you ran in Console.

:::image type="complex" source="../media/console-javascript-console-history.msft.png" alt-text="The $_ expression in Console always contains the last result" lightbox="../media/console-javascript-console-history.msft.png":::
    The $_ expression in Console always contains the last result
:::image-end:::  

## Multi line editing

Out-of-the-box you only have one line to write your JavaScript expression. Hitting `Enter` will run the code. This can get pretty frustrating. You can work around this by using `Shift + Enter` instead. In the following example you can see that the value displayed is the result of all the lines executing in order. 

:::image type="complex" source="../media/console-javascript-multiline.msft.png" alt-text="By using Shift and Enter you can write several lines of JavaScript and the resulting value will be each of them executing in order" lightbox="../media/console-javascript-multiline.msft.png":::
By using Shift and Enter you can write several lines of JavaScript and the resulting value will be each of them executing in order
:::image-end:::  

If you start a multi-line statement in Console it gets automatically recognized and indented that. For example, if you start a block statement with a curly brace.

:::image type="complex" source="../media/console-javascript-automatic-lineindent.msft.png" alt-text="Console already recognizing multiline expressions using curly braces and indented them for you" lightbox="../media/console-javascript-automatic-lineindent.msft.png":::
    Console already recognizing multiline expressions using curly braces and indented them for you
:::image-end:::  

## Network requests using top level await()

Other than in your own scripts, Console supports [top-level await][TopLevelAwait] which means you can run arbitrary asynchronous Javascript in it.For example, you can use the fetch API without having to wrap the await statement in an async function. Using the following code will get you the last 50 issues filed on the [Edge Developer Tools for Visual Studio Code GitHub repository](https://github.com/microsoft/vscode-edge-devtools).

```javascript
await ( await fetch(
'https://api.github.com/repos/microsoft/vscode-edge-devtools/issues?state=all&per_page=50&page=1'
)).json();
```

If you copy and paste this into Console you get an object containing 10 entries, which is hard to take in.

:::image type="complex" source="../media/console-javascript-top-level-await.msft.png" alt-text="Console showing the result of a top level async fetch call" lightbox="../media/console-javascript-top-level-await.msft.png":::
    Console showing the result of a top level async fetch call
:::image-end:::  

Luckily enough, you can use the `console.table()` logging method to cut down to the things you're really interested in.

:::image type="complex" source="../media/console-javascript-filtered-with-table.msft.png" alt-text="Displaying the last result in a human readable form using console.table" lightbox="../media/console-javascript-filtered-with-table.msft.png":::
    Displaying the last result in a human readable form using console.table    
:::image-end:::

If you want to re-use the data returned from an expression like this you can also use the `copy()` utility method of Console. The following example will do the call and copy the data straight to the clipboard.

```Javascript
copy(await (await fetch(
'https://api.github.com/repos/microsoft/vscode-edge-devtools/issues?state=all&per_page=50&page=1'
)).json())
```

Using the Console is a great way to try out JavaScript functionality and to do some quick calculations. It's real power, however, comes with the fact that you have access to the [window][MDNWindow] object which means you can  [interact with the DOM in Console][DevtoolsDOMInteraction]. 

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  
[TopLevelAwait]: https://github.com/tc39/proposal-top-level-await
[DevtoolsConsoleUtilityMethods]: ./utilities.md
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