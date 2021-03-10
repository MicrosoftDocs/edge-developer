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

* Find out why something isn't working in the current project by [tracking down problems][DevtoolsConsoleDebugJS].
* [Get information about the web project][DevtoolsConsoleInformation] in the browser as log messages
* [Log information][DevtoolsConsoleLog] in scripts for debugging purposes
* [Try out JavaScript expressions][DevtoolsConsoleJS] live in a [REPL][WikiREPLoop] fashion 
* [Interact with the web project in the browser][DevtoolsConsoleDOM] using JavaScript

The versatility of the **Console** made it one of the few tools in DevTools that can be opened in several places. It could be a part of the upper pane and also live in the bottom drawer. It is a great companion tool to have open with others as it is a powerful way to try out script functionality and inspect and manipulate the current document using JavaScript.

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

The fastest way to get directly to Console is to select `Control`+`Shift`+`J` \(Windows, Linux\) or `Command`+`Option`+`J` \(macOS\).  

## Error reporting and Console

**Console** is the default place where JavaScript and connectivity errors get reported. If there are any errors a button will show next to the Settings icon in DevTools showing the amount of errors and warnings. Activating it will open Console and show the problem.

:::image type="complex" source="../media/console-intro-error-in-console.msft.png" alt-text="DevTools giving detailed information about the error in the Console" lightbox="../media/console-intro-error-in-console.msft.png":::
   DevTools giving detailed information about the error in the Console 
:::image-end:::  

Read more details about [debugging using Console][DevtoolsConsoleDebugJS].

## Inspecting and filtering information of the current web site

The usefulness of **Console** is also its problem. If you have DevTools open on any web site, you are likely to see a deluge of information logged to the console. This became such a problem that DevTools started to get an [Issues][DevToolsIssues] tool to cut down on the noise.

:::image type="complex" source="../media/console-intro-noise.msft.png" alt-text="DevTools with a console full of messages" lightbox="../media/console-intro-noise.msft.png":::
   DevTools with a console full of messages 
:::image-end:::  

There is still quite a lot of noise left over, which is why it is a good idea to know about [automated logging and filtering options][DevtoolsConsoleInformation] of the **Console**.

## Logging information to show up in Console

Probably the biggest use case of **Console** is logging information in your scripts using `console.log()` and similar methods. You can try it right now. Open **Console** by selecting `Control`+`Shift`+`J` (Windows, Linux) or `Command`+`Option`+`J` (macOS), navigate to [this demo page][DevToolsConsoleIntroLoggingDemos] or copy the following code into it:

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

The result is a console showing the results of the above commands.

:::image type="complex" source="../media/console-intro-logging-demos.msft.png" alt-text="DevTools with a console full of messages caused by the demo code" lightbox="../media/console-intro-logging-demos.msft.png":::
   DevTools with a console full of messages caused by the demo code
:::image-end:::  

As you can see there are a lot of useful methods available and it makes sense to dive deeper into the options of [logging to Console][DevtoolsConsoleLog].

## Trying out JavaScript live in Console

**Console** is not only a place to log information, it is also a [REPL][WikiREPLoop] invironment, which means that you can write any JavaScript in it that will get immediately executed. This is useful if you just want to play with some new JavaScript features or do some quick calculations. You get all the features you expect from a modern editing environment, like autocompletion, syntax highlighting and history. 

Try it out right now. Go to Console and type in `2 + 2`. You will see that Console already shows the result `4` on the line below. This is a feature called "Eager evaluation" and is handy to see that you are not making any mistakes. 

:::image type="complex" source="../media/console-intro-two-plus+two.msft.png" alt-text="Console showing the result of 2 + 2 live as you type it" lightbox="../media/console-intro-two-plus+two.msft.png":::
Console showing the result of 2 + 2 live as you type it
:::image-end:::  

If you hit `Enter`, Console will run the JavaScript command and give you the result and you can write the next command. 

:::image type="complex" source="../media/console-intro-javascript-expressions.msft.png" alt-text="Running several JavaScript expressions in succession" lightbox="../media/console-intro-javascript-expressions.msft.png":::
Running several JavaScript expressions in succession
:::image-end:::  

You only have one line to write your JavaScript expressions as hitting `Enter` will run the code. You can work around this by using `Shift + Enter`. As with many other terminal-like experiences you also have a history of commands. Hitting Arrow-Up will show you the commands you entered before. 

The autocompletion feature of Console can be a great way to learn about methods you didn't know before. Try it by typing `doc` and you get a dropdown menu to pick `document` from. Hit the `tab` key to do so. Type `.bo` and hit `tab` to get `document.body`. Type another `.` to get a huge list of possible properties and methods available on the body of the current document. 

:::image type="complex" source="../media/console-intro-javascript-autocomplete.msft.png" alt-text="Console autocompletion of JavaScript expressions" lightbox="../media/console-intro-javascript-autocomplete.msft.png":::
Console autocompletion of JavaScript expressions
:::image-end:::  

There are a few more tricks available and you can learn more in [JavaScript in Console][DevtoolsConsoleJS]. 

## Interact with the current document in the browser

As Console has access to the [Window][MDNWindow] object of the browser you can write scripts that interact with the current document. You can try it out right here. Open Console and type or copy+paste the following JavaScript:

```JavaScript
document.querySelector('h1').innerHTML

```
:::image type="complex" source="../media/console-intro-reading-DOM.msft.png" alt-text="Reading content from the DOM in Console" lightbox="../media/console-intro-reading-DOM.msft.png":::
Reading content from the DOM in Console
:::image-end:::  

Instead of only reading from the document, you can also change it. Try the following:

```JavaScript
document.querySelector('h1').innerHTML = 'Rocking the Console';
```

:::image type="complex" source="../media/console-intro-writing-DOM.msft.png" alt-text="Writing to the DOM in Console" lightbox="../media/console-intro-reading-DOM.msft.png":::
Writing to the DOM in Console
:::image-end:::  

You changed the main heading of the document to **Rocking the Console**

In addition to any JavaScript you want run, Console also comes with a lot of [Utility methods][DevtoolsConsoleUtilities] that make it even easier to access and manipulate the current document. For example, if you wanted to add a red border around all the links in the current document, you can use the following code:

```javascript
$$('a').forEach(a => a.style.border='1px solid firebrick');
```
:::image type="complex" source="../media/console-intro-DOM-loop.msft.png" alt-text="Manipulating a selection of elements using Console" lightbox="../media/console-intro-reading-DOM.msft.png":::
Manipulating a selection of elements using Console
:::image-end:::  


Want to learn more? Check out [DOM Interaction in Console][DevtoolsConsoleDOM].

## Learn more about Console

If you want to go deep and learn all about the functionality of **Console** feel free to check the [Reference][DevtoolsConsoleReference], the [Utility methods][DevtoolsConsoleUtilities] and the [API docs][DevtoolsConsoleAPI].


[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleReference]: ./reference
[DevtoolsConsoleUtilities]: ./utilities
[DevtoolsConsoleAPI]: ./api
[DevToolsConsoleIntroLoggingDemos]: https://microsoftedge.github.io/DevToolsSamples/console/logging-demo.html
[DevtoolsConsoleDebugJS]: ./console-debug-js.md
[DevtoolsConsoleLog]: ./console-log.md
[DevtoolsConsoleInformation]: ./console-filtering.md
[DevtoolsConsoleJS]: ./console-javascript.md
[DevtoolsConsoleDOM]: ./console-dom-interaction.md

[WikiStackTrace]: https://en.wikipedia.org/wiki/Stack_trace "Stack trace - Wikipedia"  
[DevtoolsConsoleFilter]: ../microsoft-edge/devtools-guide-chromium/console/reference#filter-messages
[DevToolsIssues]: ../issues
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
