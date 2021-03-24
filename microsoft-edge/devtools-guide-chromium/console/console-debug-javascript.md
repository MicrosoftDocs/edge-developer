---
description: JavaScript errors are reported by developer tools and debug each in the Console
title: Tracking down errors using the Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/24/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Debug errors reported in Console  

The first experience any user of DevTools has with the **Console** is probably when there was an error in a script.  To try it, navigate to [JavaScript error messaging in Console tool][GithubMicrosoftedgeDevtoolssamplesConsoleErrorHtml].  

If you open DevTools in the browser, you get a button on the top right that indicates there is an error on the webpage.  

:::image type="complex" source="../media/console-debug-displays-error.msft.png" alt-text="DevTools flags an error on the current webpage" lightbox="../media/console-debug-displays-error.msft.png":::
   DevTools flags an error on the current webpage  
:::image-end:::  

Choose the button takes you to the **Console** and gives you more information about the error.  

:::image type="complex" source="../media/console-debug-displays-error.msft.png" alt-text="DevTools gives detailed information about the error in the Console" lightbox="../media/console-debug-displays-error.msft.png":::
   DevTools gives detailed information about the error in the **Console**  
:::image-end:::  

From this information, you may gather that the error is on line 16 of the file named `error.html`.  If you choose the `error.html:16` link on the right the **Console** takes you directly to the Sources tool and highlights the problematic line of code.  

:::image type="complex" source="../media/console-debug-displays-in-sources.msft.png" alt-text="The Sources tool highlights the line of code that causes the error" lightbox="../media/console-debug-displays-in-sources.msft.png":::
   The **Sources** tool highlights the line of code that causes the error  
:::image-end:::  

The script tries to get the first `h2` element in the document and paint a red border around it.  But no `h2` element exists, so the script fails.  

## Track down reported network issues  

Other errors that the **Console** reports are network errors.  Navigate to the [Network Error Example][GithubMicrosoftedgeDevtoolssamplesConsoleNetworkErrorHtml] to display that in action.  

:::image type="complex" source="../media/console-debug-network-error.msft.png" alt-text="Console displays a Network and a JavaScript error" lightbox="../media/console-debug-network-error.msft.png":::
   **Console** displays a Network and a JavaScript error  
:::image-end:::  

The table still states `loading` but nothing happens since the data was not loaded.  In the **Console** you may display two errors, a network error starting with `GET` followed by a URL and a `Uncaught (in promise) TypeError: data.forEach is not a function` error.  

:::image type="complex" source="../media/console-debug-network-error-code-line.msft.png" alt-text="Choose the code line reported with the error gets you to the Sources tool" lightbox="../media/console-debug-network-error-code-line.msft.png":::
   Choose the code line reported with the error gets you to the **Sources** tool  
:::image-end:::  

If you choose the `network-error.html:40` link in the **Console**, DevTools will take you to the **Sources** tool.  There you may display the problematic code line highlighted followed by an `x` icon.  If you choose that one you get the `Failed to load resource: the server responded with a status of 404 ()` error message.  

:::image type="complex" source="../media/console-debug-network-error-sources.msft.png" alt-text="Find the error in JavaScript using the Sources tool" lightbox="../media/console-debug-network-error-sources.msft.png":::
   Find the error in JavaScript using the **Sources** tool  
:::image-end:::  

The error means the requested URL was not found.  

:::image type="complex" source="../media/console-debug-network-error-url.msft.png" alt-text="Console displays a 404 error that a resource was not loaded" lightbox="../media/console-debug-network-error-url.msft.png":::
   **Console** displays a 404 error that a resource was not loaded  
:::image-end:::  

If you go back to the **Console** and choose the URL, you get to the **Network** tool.  There you may display the Network information in a lot more detail.  

:::image type="complex" source="../media/console-debug-network-error-network.msft.png" alt-text="Choose a URL that was not loaded (displayed in red) takes you to the Network tool" lightbox="../media/console-debug-network-error-network.msft.png":::
   Choose a URL that was not loaded \(displayed in red\) takes you to the **Network** tool  
:::image-end:::  

:::row:::
    :::column:::
        :::image type="complex" source="../media/console-debug-network-error-network.msft.png" alt-text="The Network tool displays more information about the failed request" lightbox="../media/console-debug-network-error-network.msft.png":::
           The **Network** tool displays more information about the failed request  
        :::image-end:::  
    :::column-end:::
    :::column:::
        :::image type="complex" source="../media/console-debug-network-error-network-detail.msft.png" alt-text="Inspect the headers in the Network tool may give more insight" lightbox="../media/console-debug-network-error-network-detail.msft.png":::
           Inspect the headers in the **Network** tool may give more insight  
        :::image-end:::  
    :::column-end:::
:::row-end:::  

What was the problem?  Turns out you have a double `/` in the requested URL after `repos`.  If you go back to the **Sources** tool, you may display that the problem is line 26 where you have a trailing `/` at the end of the base URL.  

:::image type="complex" source="../media/console-debug-network-error-code-error.msft.png" alt-text="The problematic line displays in the source code" lightbox="../media/console-debug-network-error-code-error.msft.png":::
   The problematic line displays in the source code  
:::image-end:::  

If you navigate to the working version of the script [Network Error Fixed Example][GithubMicrosoftedgeDevtoolssamplesConsoleNetworkErrorFixedHtml], you may display that all is working fine.  

:::image type="complex" source="../media/console-debug-network-error-fixed.msft.png" alt-text="The example without any errors, load information from GitHub and display it" lightbox="../media/console-debug-network-error-fixed.msft.png":::
   The example without any errors, load information from GitHub and display it  
:::image-end:::  

However, you may also display in the example that the code is sloppy.  You still try to access the table and display the information.  The code should catch errors and report them in the **Console** instead of doing that.  If you navigate to the [Network Error Reported][GithubMicrosoftedgeDevtoolssamplesConsoleNetworkErrorReportedHtml] example, you may display the following items.  

*   To the user that something went wrong.   
*   In the **Console**, the Network error and the error message the code reported.  

:::image type="complex" source="../media/console-debug-network-error-report.msft.png" alt-text="The example catch and report errors" lightbox="../media/console-debug-network-error-report.msft.png":::
   The example catch and report errors  
:::image-end:::  

The code to make it happen is the `handleErrors` method in the example, specifically the `throw Error` line.  

```javascript
const handleErrors = (response) => {
    if (!response.ok) {
        let message = 'The information was not loaded'
        document.querySelector('tbody').innerHTML = `
        <tr><td colspan=3>Error ${message}</td></tr>
        `;
        throw Error(response.status + ' ' + response.statusText);
    }
    return response;
};
```  

## Create errors and traces in the Console

In addition to the `throw Error` example above, you may also create different errors and trace problems in the **Console**.  
If you navigate to the [create errors and assertions][GithubMicrosoftedgeDevtoolssamplesConsoleErrorAssertHtml] example, you may display two created error messages in the **Console**.  

:::image type="complex" source="../media/console-debug-error-assert.msft.png" alt-text="Error messages created from Console" lightbox="../media/console-debug-error-assert.msft.png":::
   Error messages created from **Console**  
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

You have three functions that request each other in succession, `first()`, `second()`, and `third()`.  Each sends a `name` argument to the other.  In the `third()` function you check if the `name` argument exists and if it is not, you log an error that name isn't defined.  If name is defined, you use the `assert()` method to check if the `name` argument is fewer than eight letters long.  You request the first method three times, with the following changes.  

*   No argument that triggers the `console.error()` in `third()`.  
*   `Console` as the argument that causes no error as `name` exists and is shorter than eight letters.  
*   `Microsoft Edge Canary` as the argument that triggers to assertion to report an error \(as the argument is longer than eight letter\).  

Using `assert()` is a way to create conditional error reporting.  The following two examples have the same result but one needs an extra `if{}` statement.  

```javascript
let x = 20;
if (x < 40) { console.error(`${x} is too small`) };
console.assert(x >= 40, `${x} is too small`) 
```  

The assertion needs to record a negative result, that is why you test for `x < 40` in the `if` case and `x >= 40` for the assertion.  

If you are not sure which function requests that you may use the `console.trace()` method to track which functions were named to get to the current one.  To display the trace in the **Console**, navigate to [create traces example][GithubMicrosoftedgeDevtoolssamplesConsoleTraces].  

```javascript
function here() {there()}
function there() {everywhere()}
function everywhere() {
    console.trace();
}
here();
there();
```  

The result is a trace to display that `here()` is named `there()` and then `everywhere()` and in the second example that it is named `everywhere()`.  

:::image type="complex" source="../media/console-debug-trace.msft.png" alt-text="A trace created from Console" lightbox="../media/console-debug-trace.msft.png":::
   A trace created from **Console**  
:::image-end:::  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[GithubMicrosoftedgeDevtoolssamplesConsoleErrorHtml]: https://microsoftedge.github.io/DevToolsSamples/console/error.html "JavaScript error messaging in Console tool | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleErrorAssertHtml]: https://microsoftedge.github.io/DevToolsSamples/console/error-assert.html "JavaScript error and trace creation in the Console tool | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleNetworkErrorHtml]: https://microsoftedge.github.io/DevToolsSamples/console/network-error.html "JavaScript error messaging in Console tool | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleNetworkErrorFixedHtml]: https://microsoftedge.github.io/DevToolsSamples/console/network-error-fixed.html "JavaScript error messaging in Console tool | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleNetworkErrorReportedHtml]: https://microsoftedge.github.io/DevToolsSamples/console/network-error-reported.html "JavaScript error messaging in Console tool | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleTraces]: https://microsoftedge.github.io/DevToolsSamples/console/traces.html "Page not found | GitHub"  
