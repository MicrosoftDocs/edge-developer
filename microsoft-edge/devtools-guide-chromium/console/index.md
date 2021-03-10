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

* Find out why something isn't working in the current project by [tracking down problems].
* [Get information about the web project] in the browser as log messages
* [Log information] in scripts for debugging purposes
* [Try out JavaScript expressions] live in a [REPL][WikiREPLoop] fashion 
* [Interact with the web project in the browser] using JavaScript

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

## Error reporting and Console

**Console** is the default place where JavaScript and connectivity errors are reported. If there are any errors a button will show next to the Settings icon in DevTools showing the amount of errors, warnings and issues. Activating it will open Console and show the problem.

:::image type="complex" source="../media/console-intro-error-in-console.msft.png" alt-text="DevTools giving detailed information about the error in the Console" lightbox="../media/console-intro-error-in-console.msft.png":::
   DevTools giving detailed information about the error in the Console 
:::image-end:::  

Read more details about [debugging using Console][DevtoolsConsoleDebugJS].

## Inspecting and filtering information of the current web site

The usefulness of **Console** is also its problem. If you have DevTools open on any web site, you are likely to see a deluge of information logged to the console. This became such a problem that DevTools started to get an [Issues][DevToolsIssues] tool to cut down on the noise.

:::image type="complex" source="../media/console-intro-noise.msft.png" alt-text="DevTools with a console full of messages" lightbox="../media/console-intro-noise.msft.png":::
   DevTools with a console full of messages 
:::image-end:::  

And yet this is often not enough, which is why it is good to get to know the filter and display options of the **Console** tool which are described in detail in the [filter section of the Console reference][DevtoolsConsoleFilter].

* [Get information about the web project][DevtoolsConsoleInformation] in the browser as log messages

## Logging information to show up in Console

* [Log information][DevtoolsConsoleLog] in scripts for debugging purposes

## Trying out JavaScript live in the browser

* [Try out JavaScript expressions][DevtoolsConsoleJS] live in a [REPL][WikiREPLoop] fashion 

## Interact with the current document in the browser

* [Interact with the web project in the browser][DevtoolsConsoleDOM] using JavaScript

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

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
