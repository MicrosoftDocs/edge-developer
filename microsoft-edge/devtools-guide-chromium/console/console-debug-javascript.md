---
description: JavaScript errors are reported by developer tools and debug each in the Console
title: Tracking down errors using the Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/13/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Debug errors reported in Console  

The first experience you have with the **Console** is probably an error in a script.  To try it, navigate to [JavaScript error reported in the Console tool][GithubMicrosoftedgeDevtoolssamplesConsoleErrorHtml].  

If you open DevTools in the browser, a button on the top right displays an error for the webpage.  
Choose the button to take you to the **Console** and give you more information about the error.  

:::image type="complex" source="../media/console-debug-displays-error.msft.png" alt-text="DevTools gives detailed information about the error in the Console" lightbox="../media/console-debug-displays-error.msft.png":::
   DevTools gives detailed information about the error in the **Console**  
:::image-end:::  

From the information, you may gather that the error is on line 16 of the `error.html` file.  If you choose the `error.html:16` link on the right of the **Console**, it takes you to the **Sources** tool and highlights the line of code with the error.  

:::image type="complex" source="../media/console-debug-displays-in-sources.msft.png" alt-text="The Sources tool highlights the line of code that causes the error" lightbox="../media/console-debug-displays-in-sources.msft.png":::
   The **Sources** tool highlights the line of code that causes the error  
:::image-end:::  

The script tries to get the first `h2` element in the document and paint a red border around it.  But no `h2` element exists, so the script fails.  

## Find and debug network issues  

Other errors that the **Console** reports are network errors.  To display it in action, navigate to the [Network error reported in Console][GithubMicrosoftedgeDevtoolssamplesConsoleNetworkErrorHtml].  

:::image type="complex" source="../media/console-debug-network-error.msft.png" alt-text="Console displays a Network and a JavaScript error" lightbox="../media/console-debug-network-error.msft.png":::
   **Console** displays a Network and a JavaScript error  
:::image-end:::  

The table displays `loading`, but nothing changes on the webpage because the data is never retrieved.  In the **Console**, the following two errors occurred.  

*   A network error that starts with `GET` HTTP method followed by a URI.  
*   An `Uncaught (in promise) TypeError: data.forEach is not a function` error.  
    
If you choose the `network-error.html:40` link in the **Console**, DevTools takes you to the **Sources** tool.  The problematic line of code is highlighted and followed by an `error` \(`x`\) button.  To display the `Failed to load resource: the server responded with a status of 404 ()` error message, choose the **error** \(`x`\) button.  


:::row:::
   :::column span="":::
      :::image type="complex" source="../media/console-debug-network-error-code-line.msft.png" alt-text="Choose the link to the webpage and code where the error occurs line opens the Sources tool" lightbox="../media/console-debug-network-error-code-line.msft.png":::
         Choose the link to the webpage and code where the error occurs line opens the **Sources** tool  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/console-debug-network-error-sources.msft.png" alt-text="To find the error in JavaScript, use the Sources tool" lightbox="../media/console-debug-network-error-sources.msft.png":::
         To find the error in JavaScript, use the **Sources** tool  
      :::image-end:::  
   :::column-end:::
:::row-end:::

In the example, the error informs you that the requested URL isn't found.  Next, complete the following actions to open the **Network** tool.  

1.  Open the **Console**.  
1.  Choose the URI associated with the error.  
    
:::image type="complex" source="../media/console-debug-network-error-url.msft.png" alt-text="Console displays an HTTP status code of the error after a resource isn't loaded" lightbox="../media/console-debug-network-error-url.msft.png":::
   **Console** displays an HTTP status code of the error after a resource isn't loaded  
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

What was the problem?  Two slash characters \(`//`\) occur in the requested URI after the word `repos`.  Open the **Sources** tool and inspect line 26.  A trailing slash character \(`/`\) occurs at the end of the base URI.  

:::image type="complex" source="../media/console-debug-network-error-code-error.msft.png" alt-text="The Sources tool displays the line of code with the error" lightbox="../media/console-debug-network-error-code-error.msft.png":::
   The **Sources** tool displays the line of code with the error  
:::image-end:::  

To review no errors in the **Console**, navigate to [Fixed network error reported in Console][GithubMicrosoftedgeDevtoolssamplesConsoleNetworkErrorFixedHtml].  

:::image type="complex" source="../media/console-debug-network-error-fixed.msft.png" alt-text="The example without any errors loads information from GitHub and displays it" lightbox="../media/console-debug-network-error-fixed.msft.png":::
   The example without any errors loads information from GitHub and displays it  
:::image-end:::  

Ensure you provide defensive coding techniques to avoid the previous user experiences.  Also, ensure your code catches errors and display each in the **Console**.  Navigate to [Network error reporting in Console and UI][GithubMicrosoftedgeDevtoolssamplesConsoleNetworkErrorReportedHtml] and review the following items.  

*   Provide UI to the user that something went wrong.  
*   In the **Console**, provide helpful information about the Network error from your code.  
    
:::image type="complex" source="../media/console-debug-network-error-report.msft.png" alt-text="An example that catches and reports errors" lightbox="../media/console-debug-network-error-report.msft.png":::
   An example that catches and reports errors  
:::image-end:::  

The following code snippet catches and reports errors using the `handleErrors` method, specifically the `throw Error` line.  

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

## Create errors and traces in the Console

Besides the `throw Error` example in the previous section, you may also create different errors and trace problems in the **Console**.  
To display two created error messages in the **Console**, navigate to [Creating error reports and assertions in Console][GithubMicrosoftedgeDevtoolssamplesConsoleErrorAssertHtml].  

:::image type="complex" source="../media/console-debug-error-assert.msft.png" alt-text="Error messages created from Console" lightbox="../media/console-debug-error-assert.msft.png":::
   Error messages created from **Console**  
:::image-end:::  

The following code snippet was used in the previous example.  

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

You have three functions that request each other in succession.  

*   `first()`  
*   `second()`  
*   `third()`  
    
Each sends a `name` argument to the other.  In the `third()` function, you check if the `name` argument exists and if it doesn't, you log an error that name isn't defined.  If `name` is defined, you use the `assert()` method to check if the `name` argument is fewer than eight letters long.  You request the `first()` function three times, with the following parameters.  

*   No argument that triggers the `console.error()` method in the `third()` function.  
*   The term `Console` as a parameter to the `first()` function doesn't cause an error because `name` argument exists and is shorter than eight letters.  
*   The phrase `Microsoft Edge Canary` as a parameter to `first()` function causes the `console.assert()` method to report an error, because the parameter is longer than eight letters.  
    
Use the `console.assert()` method to create conditional error reports.  The following two examples have the same result, but one needs an extra `if{}` statement.  

```javascript
let x = 20;
if (x < 40) { console.error(`${x} is too small`) };
console.assert(x >= 40, `${x} is too small`) 
```  

> [!IMPORTANT]
> The second and third lines of the code perform the same test.  Because the assertion needs to record a negative result, you test for `x < 40` in the `if` case and `x >= 40` for the assertion.  

If you aren't sure which function requests another function, use the `console.trace()` method to track which functions are requested to get to the current one.  To display the trace in the **Console**, navigate to [Creating traces in Console][GithubMicrosoftedgeDevtoolssamplesConsoleTraceHtml].  

```javascript
function here() {there()}
function there() {everywhere()}
function everywhere() {
    console.trace();
}
here();
there();
```  

The result is a trace to display that `here()` is named `there()` and then `everywhere()` and in the second example that it's named `everywhere()`.  

:::image type="complex" source="../media/console-debug-trace.msft.png" alt-text="A trace created from Console" lightbox="../media/console-debug-trace.msft.png":::
   A trace created from **Console**  
:::image-end:::  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[GithubMicrosoftedgeDevtoolssamplesConsoleErrorHtml]: https://microsoftedge.github.io/DevToolsSamples/console/error.html "JavaScript error reported in the Console tool | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleErrorAssertHtml]: https://microsoftedge.github.io/DevToolsSamples/console/error-assert.html "Creating error reports and assertions in Console | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleNetworkErrorHtml]: https://microsoftedge.github.io/DevToolsSamples/console/network-error.html "Network error reported in Console | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleNetworkErrorFixedHtml]: https://microsoftedge.github.io/DevToolsSamples/console/network-error-fixed.html "Fixed network error reported in Console | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleNetworkErrorReportedHtml]: https://microsoftedge.github.io/DevToolsSamples/console/network-error-reported.html "Network error reporting in Console and UI | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleTraceHtml]: https://microsoftedge.github.io/DevToolsSamples/console/trace.html "Creating traces in Console | GitHub"  
