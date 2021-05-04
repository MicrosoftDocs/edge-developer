---
description: An introduction to using the Console tool inside the Microsoft Edge Developer Tools as a JavaScript environment.
title: The Console as a JavaScript environment
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/13/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, JavaScript, web development, f12 tools, devtools
---
# The Console as a JavaScript environment  

The **Console** tool inside the browser DevTools is a [REPL][WikiReadEvalPrintLoop] environment.  It means that you may write any JavaScript in the **Console** that runs immediately.

To try it, complete the following actions.  

1.  Open the **Console**.  
    *   Select `Control`+`Shift`+`J` \(Windows, Linux\) or `Command`+`Option`+`J` \(macOS\).  
1.  Type `2 + 2`.  The **Console** already displays the result `4` on the next line while you type it.  The `Eager evaluation` feature helps you write valid JavaScript.  It displays the result while you type whether it's wrong or if a valid result exists.  

:::image type="complex" source="../media/console-javascript-eager-evaluation.msft.png" alt-text="Console displays the result of 2 + 2 live as you type it" lightbox="../media/console-javascript-eager-evaluation.msft.png":::
   **Console** displays the result of `2 + 2` live as you type it  
:::image-end:::  

If you select `Enter`, the **Console** runs the JavaScript command, gives you the result, and allows you to write the next command.  

:::image type="complex" source="../media/console-javascript-several-expressions.msft.png" alt-text="Run several JavaScript expressions in succession" lightbox="../media/console-javascript-several-expressions.msft.png":::
   Run several JavaScript expressions in succession  
:::image-end:::  

## Autocompletion to write complex expressions

The last example may seem scary, but the **Console** helps you write complex JavaScript using an excellent autocompletion feature.  This feature is a great way to learn about methods you didn't know before.  

To try it, complete the following actions.  

1.  Type `doc`.  
1.  Choose `document` from the dropdown menu.  
1.  Select the `tab` key to choose it.  
1.  Type `.bo`.  
1.  Select `tab` to get `document.body`.  
1.  Type another `.` to get a large list of possible properties and methods available on the body of the current webpage.  

:::image type="complex" source="../media/console-javascript-autocomplete.msft.png" alt-text="Console autocompletion of JavaScript expressions" lightbox="../media/console-javascript-autocomplete.msft.png":::
   **Console** autocompletion of JavaScript expressions  
:::image-end:::  

## Console history

As with many other command-line experiences, you also have a history of commands.  Select `Arrow Up` to display the commands you entered before.  Autocompletion also keeps a history of the commands you previously typed.  You may type the first few letters of earlier commands and your previous choices display in a textbox.  

Also, the **Console** also offers quite a few [utility methods][DevtoolsConsoleUtilities] that make your life easier.  For example, `$_` always contains the result of the last expression you ran in the **Console**.

:::image type="complex" source="../media/console-javascript-console-history.msft.png" alt-text="The $_ expression in the Console always contains the last result" lightbox="../media/console-javascript-console-history.msft.png":::
    The `$_` expression in the **Console** always contains the last result  
:::image-end:::  

## Multiline edits

By default, the **Console** only gives you one line to write your JavaScript expression.  You code runs when you select `Enter`. The one line limitation may frustrate you.  To work around the one line limitation, select `Shift`+`Enter` instead of `Enter`.  In the following example, the value displayed is the result of all the lines run in order.  

:::image type="complex" source="../media/console-javascript-multiline.msft.png" alt-text="Select Shift+Enter to write several lines of JavaScript and the resulting value is run in order" lightbox="../media/console-javascript-multiline.msft.png":::
   Select `Shift`+`Enter` to write several lines of JavaScript and the resulting value is run in order  
:::image-end:::  

If you start a multiline statement in the **Console**, it gets automatically recognized and indented.  For example, if you start a block statement with a curly brace.  

:::image type="complex" source="../media/console-javascript-automatic-lineindent.msft.png" alt-text="Console already recognizes multiline expressions using curly braces and indents each for you" lightbox="../media/console-javascript-automatic-lineindent.msft.png":::
    **Console** already recognizes multiline expressions using curly braces and indents each for you  
:::image-end:::  

## Network requests using top-level await()  

Other than in your own scripts, **Console** supports [top level await][GithubTc39ProposalTopLevelAwait] to run arbitrary asynchronous JavaScript in it.  For example, use the `fetch` API without wrapping the `await` statement with an async function.  

To get the last 50 issues filed on the [Microsoft Edge Developer Tools for Visual Studio Code][GithubMicrosoftVscodeEdgeDevtools] GitHub repo, complete the following actions.  

1.  Open the **Console**.  
1.  Copy and paste the following code snippet to get an object that contains 10 entries.  
    
    ```javascript
    await ( await fetch(
    'https://api.github.com/repos/microsoft/vscode-edge-devtools/issues?state=all&per_page=50&page=1'
    )).json();
    ```  
    
:::image type="complex" source="../media/console-javascript-top-level-await.msft.png" alt-text="Console displays the result of a top-level async fetch request" lightbox="../media/console-javascript-top-level-await.msft.png":::
    **Console** displays the result of a top-level async `fetch` request  
:::image-end:::  

The 10 entries are hard to recognize, since a lot of information is displayed.  Luckily enough, you may use the `console.table()` log method to only receive the information in which you're interested.  

:::image type="complex" source="../media/console-javascript-filtered-with-table.msft.png" alt-text="Display the last result in a human readable format using console.table" lightbox="../media/console-javascript-filtered-with-table.msft.png":::
    Display the last result in a human readable format using `console.table`  
:::image-end:::  

To reuse the data returned from an expression, you may use the `copy()` utility method of the **Console**.  The following code snippet sends the request and copies the data from the response to the clipboard.  

```javascript
copy(await (await fetch(
'https://api.github.com/repos/microsoft/vscode-edge-devtools/issues?state=all&per_page=50&page=1'
)).json())
```  

Use the **Console** as a great way to practice JavaScript functionality and to do some quick calculations.  The real power is the fact that you have access to the [window][MdnDocsWebApiWindow] object.  You may [interact with the DOM in Console][DevtoolsConsoleConsoleDomInteraction].  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleConsoleDomInteraction]: ./console-dom-interaction.md "Use the Console to interact with the DOM | Microsoft Docs"  
[DevtoolsConsoleUtilities]: ./utilities.md "Console Utilities API reference | Microsoft Docs"  

[GithubMicrosoftVscodeEdgeDevtools]: https://github.com/microsoft/vscode-edge-devtools "microsoft/vscode-edge-devtools | GitHub"  

[GithubTc39ProposalTopLevelAwait]: https://github.com/tc39/proposal-top-level-await "ECMAScript proposal: Top-level await - tc39/proposal-top-level-await | GitHub"

[MdnDocsWebApiWindow]: https://developer.mozilla.org/docs/Web/API/Window "Window | MDN"  

[WikiReadEvalPrintLoop]: https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop "Read–eval–print loop | Wikipedia"  
