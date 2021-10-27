---
description: Debugging and resolving JavaScript-related errors that are reported in the Console.
title: Fixing JavaScript errors that are reported in the Console
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 04/13/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Fixing JavaScript errors that are reported in the Console

This article is about resolving JavaScript errors that are reported in the Console.  For general use of the **Console** to display and resolve error messages, navigate to [Use the Console](index.md).


<!-- ====================================================================== -->
## Fix JavaScript errors

The first experience you have with the **Console** is probably an error in a script.  To try it, navigate to [JavaScript error reported in the Console tool](https://microsoftedge.github.io/DevToolsSamples/console/error.html).

Open DevTools in the browser.  The **Open Console to view errors** button on the top right displays an error about the webpage.  Select the button to take you to the **Console** and give you more information about the error.

:::image type="complex" source="../media/console-debug-displays-error.msft.png" alt-text="DevTools gives detailed information about the error in the Console" lightbox="../media/console-debug-displays-error.msft.png":::
   DevTools gives detailed information about the error in the **Console**
:::image-end:::

Many error messages in the **Console** have a **Search for this message on the Web** button, shown as a magnifying glass.  This feature was introduced in Microsoft Edge version 94.  For more information, navigate to [Look up error messages on the web from the Console](index.md#look-up-error-messages-on-the-web-from-the-console).

The information in this error message suggests that the error is on line 16 of the `error.html` file.  Select the `error.html:16` link on the right of the error message in the **Console**.  The **Sources** tool opens and highlights the line of code with the error.

:::image type="complex" source="../media/console-debug-displays-in-sources.msft.png" alt-text="The Sources tool highlights the line of code that causes the error" lightbox="../media/console-debug-displays-in-sources.msft.png":::
   The **Sources** tool highlights the line of code that causes the error
:::image-end:::

The script tries to get the first `h2` element in the document and paint a red border around it.  But no `h2` element exists, so the script fails.


<!-- ====================================================================== -->
## Find and debug network issues

Other errors that the **Console** reports are network errors.  To display it in action, navigate to the [Network error reported in Console](https://microsoftedge.github.io/DevToolsSamples/console/network-error.html).

:::image type="complex" source="../media/console-debug-network-error.msft.png" alt-text="Console displays a Network and a JavaScript error" lightbox="../media/console-debug-network-error.msft.png":::
   **Console** displays a Network and a JavaScript error
:::image-end:::

The table displays `loading`, but nothing changes on the webpage because the data is never retrieved.  In the **Console**, the following two errors occurred.

*   A network error that starts with `GET` HTTP method followed by a URI.
*   An `Uncaught (in promise) TypeError: data.forEach is not a function` error.

Select the `network-error.html:40` link in the **Console**.  The **Sources** tool opens.  The problematic line of code is highlighted and followed by an `error` (`x`) button.  To display the `Failed to load resource: the server responded with a status of 404 ()` error message, select the **error** (`x`) button.

:::row:::
   :::column span="":::
      :::image type="complex" source="../media/console-debug-network-error-code-line.msft.png" alt-text="Select the link to the webpage and line of code where the error occurs, to open the Sources tool" lightbox="../media/console-debug-network-error-code-line.msft.png":::
         Select the link to the webpage and line of code where the error occurs, to open the **Sources** tool
      :::image-end:::
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/console-debug-network-error-sources.msft.png" alt-text="To find the error in JavaScript, use the Sources tool" lightbox="../media/console-debug-network-error-sources.msft.png":::
         To find the error in JavaScript, use the **Sources** tool
      :::image-end:::
   :::column-end:::
:::row-end:::

In the example, the error informs you that the requested URL isn't found.  Next, open the **Network** tool, as follows.

1.  Open the **Console**.
1.  Select the URI that's associated with the error.

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
        :::image type="complex" source="../media/console-debug-network-error-network-detail.msft.png" alt-text="Inspecting the headers in the Network tool may give more insight" lightbox="../media/console-debug-network-error-network-detail.msft.png":::
           Inspecting the headers in the **Network** tool may give more insight
        :::image-end:::
    :::column-end:::
:::row-end:::

What was the problem?  Two slash characters (`//`) occur in the requested URI after the word `repos`.  Open the **Sources** tool and inspect line 26.  A trailing slash character (`/`) occurs at the end of the base URI.

:::image type="complex" source="../media/console-debug-network-error-code-error.msft.png" alt-text="The Sources tool displays the line of code with the error" lightbox="../media/console-debug-network-error-code-error.msft.png":::
   The **Sources** tool displays the line of code with the error
:::image-end:::

To see the resulting page when there are no errors in the **Console**, navigate to [Fixed network error reported in Console](https://microsoftedge.github.io/DevToolsSamples/console/network-error-fixed.html).

:::image type="complex" source="../media/console-debug-network-error-fixed.msft.png" alt-text="The example without any errors loads information from GitHub and displays it" lightbox="../media/console-debug-network-error-fixed.msft.png":::
   The example without any errors loads information from GitHub and displays it
:::image-end:::

Use defensive coding techniques to avoid the previous user experiences.  Make sure your code catches errors and displays each error in the **Console**.  Navigate to [Network error reporting in Console and UI](https://microsoftedge.github.io/DevToolsSamples/console/network-error-reported.html) and review the following items.

*   Provide UI to the user to indicate that something went wrong.
*   In the **Console**, provide helpful information about the **Network** error from your code.

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


<!-- ====================================================================== -->
## Create errors and traces in the Console

Besides the `throw Error` example in the previous section, you can also create different errors and trace problems in the **Console**.
To display two created error messages in the **Console**, navigate to [Creating error reports and assertions in Console](https://microsoftedge.github.io/DevToolsSamples/console/error-assert.html).

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

If you aren't sure which function requests another function, use the `console.trace()` method to track which functions are requested to get to the current one.  To display the trace in the **Console**, navigate to [Creating traces in Console](https://microsoftedge.github.io/DevToolsSamples/console/trace.html).

```javascript
function here() {there()}
function there() {everywhere()}
function everywhere() {
    console.trace();
}
here();
there();
```

The result is a trace to display that `here()` is named `there()` and then `everywhere()`, and in the second example to display that it's named `everywhere()`.

:::image type="complex" source="../media/console-debug-trace.msft.png" alt-text="A trace created from the Console" lightbox="../media/console-debug-trace.msft.png":::
   A trace created from the **Console**
:::image-end:::
