---
description: JavaScript errors are reported by developer tools and you can debug them in the Console
title: Tracking down errors using the Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/10/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# Debugging reported errors in Console

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

## Tracking down reported network issues

## Debugging JavaScript using the debug method

## Using assertions in the console

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleDebugJS]: ./console-debug-js.md
[DevtoolsConsoleLog]: ./console-log.md
[DevtoolsConsoleInformation]: ./console-filtering.md
[DevtoolsConsoleJS]: ./console-javascript.md
[DevtoolsConsoleDOM]: ./console-dom-interaction.md
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
