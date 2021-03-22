---
description: JavaScript errors are reported by developer tools and you can debug them in the Console
title: Tracking down errors using the Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/18/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# Debugging reported errors in Console

The first experience any user of DevTools has with the **Console** is probably when there was an error in a script. You can try this out right now by navigating to this [web page with error demo][DevtoolsConsoleErrorDemo]. 

If you open DevTools in the browser you will get a button on the top right that indicates that there is an error on the page.

:::image type="complex" source="../media/console-debug-reporting-error.msft.png" alt-text="DevTools flagging up that there is an error on the current page" lightbox="../media/console-debug-reporting-error.msft.png":::
   DevTools flagging up that there is an error on the current page 
:::image-end:::  

Activating this button takes you to the **Console** and gives you more information about the error.

:::image type="complex" source="../media/console-debug-showing-error.msft.png" alt-text="DevTools giving detailed information about the error in the Console" lightbox="../media/console-debug-showing-error.msft.png":::
   DevTools giving detailed information about the error in the Console 
:::image-end:::  

From this information you can gather that the error is on line 16 of the file called `error.html`. If you activate the `error.html:16` link on the right the Console takes you directly to the Sources tool and highlights the problematic line of code.

:::image type="complex" source="../media/console-debug-showing-in-sources.msft.png" alt-text="The Sources tool highlighting the line of code that caused the error" lightbox="../media/console-debug-showing-in-sources.msft.png":::
   The Sources tool highlighting the line of code that caused the error 
:::image-end:::  

In this case, the script tried to get the first `h2` element in the document and paint a red border around it. But as there is no `h2` element the script fails. 

## Tracking down reported network issues

Other errors that the Console reports are network errors. Navigate to the [Network Error Example][DevToolsConsoleNetworkError] to see that in action.

:::image type="complex" source="../media/console-debug-network-error.msft.png" alt-text="Console showing a Network and a JavaScript error" lightbox="../media/console-debug-network-error.msft.png":::
   Console showing a Network and a JavaScript error 
:::image-end:::  

The table still states `loading` but nothing happens as the data could not be loaded. In the Console you can see two errors, a network error starting with `GET` followed by a URL and a `Uncaught (in promise) TypeError: data.forEach is not a function` error. 

:::image type="complex" source="../media/console-debug-network-error-code-line.msft.png" alt-text="Activating the code line reported with the error gets you to the Sources Tool" lightbox="../media/console-debug-network-error-code-line.msft.png":::
   Activating the code line reported with the error gets you to the Sources Tool 
:::image-end:::  

If you activate the `network-error.html:40` link in the Console DevTools will take you to the Sources tool. There you can see the problematic code line highlighted followed by an x icon. If you click that one you get the error message `Failed to load resource: the server responded with a status of 404 ()`.

:::image type="complex" source="../media/console-debug-network-error-sources.msft.png" alt-text="Finding the error in JavaScript using the Sources tool" lightbox="../media/console-debug-network-error-sources.msft.png":::
   Finding the error in JavaScript using the Sources tool 
:::image-end::: 

This means our requested URL wasn't found. 

:::image type="complex" source="../media/console-debug-network-error-url.msft.png" alt-text="Console showing a 404 error that a resource could not be loaded" lightbox="../media/console-debug-network-error-url.msft.png":::
   Console showing a 404 error that a resource could not be loaded 
:::image-end:::  

If you go back to the Console and activate the URL you get to the **Network** tool. There you can see the Network information in a lot more detail. 

:::image type="complex" source="../media/console-debug-network-error-network.msft.png" alt-text="Activating a URL that couldn't get loaded (shown in red) takes you to the Network tool" lightbox="../media/console-debug-network-error-network.msft.png":::
   Activating a URL that couldn't get loaded (shown in red) takes you to the Network tool 
:::image-end::: 

:::row:::
    :::column:::
        :::image type="complex" source="../media/console-debug-network-error-network.msft.png" alt-text="The Network tool showing more information about the failed request" lightbox="../media/console-debug-network-error-network.msft.png":::
           The Network tool showing more information about the failed request 
        :::image-end::: 
    :::column-end:::
    :::column:::
        :::image type="complex" source="../media/console-debug-network-error-network-detail.msft.png" alt-text="Inspecting the headers in the Network tool can give more insight" lightbox="../media/console-debug-network-error-network-detail.msft.png":::
           Inspecting the headers in the Network tool can give more insight 
        :::image-end::: 
        :::column-end:::
:::row-end:::

What was the problem? Turns out we have a double `/` in the requested URL after `repos`. If you go back to the **Sources** tool you can see that the problem is line 26 where we have a trailing `/` at the end of the base URL. 

:::image type="complex" source="../media/console-debug-network-error-code-error.msft.png" alt-text="The problematic line shown in the source code" lightbox="../media/console-debug-network-error-code-error.msft.png":::
   The problematic line shown in the soure code 
:::image-end::: 

If you navigate to the working version of the script [Network Error Fixed Example][DevToolsConsoleNetworkErrorFixed] you can see that all is working fine. 

:::image type="complex" source="../media/console-debug-network-error-fixed.msft.png" alt-text="The example without any errors, loading information from GitHub and displaying it" lightbox="../media/console-debug-network-error-fixed.msft.png":::
   The example without any errors, loading information from GitHub and displaying it 
:::image-end::: 

However, you can also see in this example that our code is sloppy. We still try to access the table and display the information. Our code should catch errors and report them in the Console instead of doing that. If you navigate to the [Network Error Reported][DevtoolsConsoleNetworkErrorReported] example you can see that this example tells the user that something went wrong and the Console shows the Network error and the error message our code reported.

:::image type="complex" source="../media/console-debug-network-error-reporting.msft.png" alt-text="The example catching and reporting errors" lightbox="../media/console-debug-network-error-reporting.msft.png":::
   The example catching and reporting errors 
:::image-end::: 

The code to make this happen is the handleErrors method in the example, specifically the `throw Error` line.

```javascript
const handleErrors = (response) => {
   if (!response.ok) {
   let message = 'Could not load the information'
   document.querySelector('tbody').innerHTML = `
   <tr><td colspan=3>Error ${message}</td></tr>
   `;
   throw Error(response.status + ' ' + response.statusText);
   }
   return response;
};
```

## Creating errors and traces in the Console

In addition to the `throw Error` example above you can also create different errors and trace problems in the console. 
If you navigate to the [creating errors and assertions][DevtoolsConsoleCreatingErrors] example you can see two created error messages in the Console.

:::image type="complex" source="../media/console-debug-error-assert.msft.png" alt-text="Error messages created from Console" lightbox="../media/console-debug-error-assert.msft.png":::
   Error messages created from Console 
:::image-end::: 

```javascript
function first(name) { second(name); }
function second(name) { third(name); }
function third(name) {
  if (!name) {
    console.error(`Name isn't defined :(`)
  } else {
    console.assert(
      name.length <= 8, 
      `"${name} is not less than eight letters"`
      );
  }
}
first();
first('Console');
first('Microsoft Edge Canary');
```

We have three functions that call each other in succession, `first()`, `second()` and `third()`. Each send a `name` argument to the other. In the `third()` function we check if the `name` argument exists and if it isn't, we log an error that name isn't defined. If name is defined we use the `assert()` method to check if the `name` argument is less than eight letters long. We call the first method three times: 

* With no argument which triggers the `console.error()` in `third()`
* With `Console` as the argument which causes no error as `name` exists and is shorter than eight letters and 
* With `Microsoft Edge Canary` as the argument, which triggers to assertion to report an error (as the argument is longer than eight letter).

Using `assert()` is a way to create conditional error reporting. The following two examples have the same result but one needs an extra `if{}` statement.

```javascript
let x = 20;
if (x < 40) { console.error(`${x} is too small`)};
console.assert(x >= 40, `${x} is too small`) 
```

Notice that the assertion needs to record a negative result, that's why we test for x < 40 in the if case and x >= 40 for the assertion.

If you are not sure which function calls which you can use the `console.trace()` method to track which functions were called to get to the current one. Navigate to [creating traces example][DevtoolsConsoleCreatingTraces] to see this in the Console.

```javascript
function here() {there()}
function there() {everywhere()}
function everywhere() {
  console.trace();
}
here();
there();
```

The result is a trace showing you that `here()` called `there()` and then `everywhere()` and in the second example that there called `everywhere()`.

:::image type="complex" source="../media/console-debug-trace.msft.png" alt-text="A trace created from Console" lightbox="../media/console-debug-trace.msft.png":::
  A trace created from Console 
:::image-end::: 

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleCreatingTraces]: https://microsoftedge.github.io/DevToolsSamples/console/traces.html
[DevtoolsConsoleCreatingErrors]: https://microsoftedge.github.io/DevToolsSamples/console/error-assert.html
[DevToolsConsoleNetworkError]: https://microsoftedge.github.io/DevToolsSamples/console/network-error.html
[DevToolsConsoleNetworkErrorFixed]: https://microsoftedge.github.io/DevToolsSamples/console/network-error-fixed.html
[DevToolsConsoleNetworkErrorReported]: https://microsoftedge.github.io/DevToolsSamples/console/network-error-reported.html

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

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
