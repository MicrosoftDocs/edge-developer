---
description: Learn how to use Microsoft Edge DevTools to find and fix JavaScript bugs.
title: Get started with debugging JavaScript in Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 05/04/2021
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
# Get started with debugging JavaScript in Microsoft Edge DevTools

This article teaches you the basic workflow for debugging any JavaScript issue in DevTools.


<!-- ====================================================================== -->
## Step 1: Reproduce the bug

Finding a series of actions that consistently reproduce a bug is always the first step to debugging.

1.  Choose the following **Open Demo** link and open the webpage in a new tab.  To open the demo in a new tab, select and hold `Ctrl` (Windows, Linux) or `Command` (macOS), and then choose **Open Demo**.

    [Open Demo](https://microsoft-edge-chromium-devtools.glitch.me/debug-js/get-started.html)

1.  Enter `5` in the **Number 1** text box.
1.  Enter `1` in the **Number 2** text box.
1.  Choose **Add Number 1 and Number 2**.  The label below the button says `5 + 1 = 51`.  The result should be `6`.  Next, fix the addition error that is the bug.

    :::image type="complex" source="../media/javascript-js-demo-bad.msft.png" alt-text="5 + 1 results in 51, but should be 6" lightbox="../media/javascript-js-demo-bad.msft.png":::
       `5 + 1` results in `51`, but should be `6`
    :::image-end:::


<!-- ====================================================================== -->
## Step 2: Get familiar with the Sources tool UI

DevTools provides many different tools for different tasks.  Different tasks include changing CSS, profiling page-load performance, and monitoring network requests.  The **Sources** tool is where you debug JavaScript.

1.  To open the **Console** tool in DevTools, select `Control`+`Shift`+`J` (Windows, Linux) or `Command`+`Option`+`J` (macOS).

    :::image type="complex" source="../media/javascript-console-empty.msft.png" alt-text="The Console tool" lightbox="../media/javascript-console-empty.msft.png":::
       The **Console** tool
    :::image-end:::

1.  Choose the **Sources** tool.

    :::image type="complex" source="../media/javascript-sources-sections.msft.png" alt-text="The Sources tool" lightbox="../media/javascript-sources-sections.msft.png":::
       The **Sources** tool
    :::image-end:::

The **Sources** tool UI has three parts.

:::image type="complex" source="../media/javascript-sources-sections-annotated.msft.png" alt-text="The 3 parts of the Sources tool UI" lightbox="../media/javascript-sources-sections-annotated.msft.png":::
   The 3 parts of the **Sources** tool UI
:::image-end:::

*  The **Navigator** pane (in the upper left corner).  Every file that the webpage requests is listed here.
*  The **Editor** pane (in the upper right corner).  After you choose a file in the **Navigator** pane, this pane displays the contents of the file.
*  The **Debugger** pane (at the bottom).  This pane provides tools for inspecting the JavaScript for the webpage.  If your DevTools window is wide, this pane is displayed to the right of the **Editor** pane.


<!-- ====================================================================== -->
## Step 3: Pause the code with a breakpoint

A common method for debugging this type of problem is to insert several `console.log()` statements into the code and then to inspect values as the script runs.  For example:

```javascript
function updateLabel() {
    var addend1 = getNumber1();
    console.log('addend1:', addend1);
    var addend2 = getNumber2();
    console.log('addend2:', addend2);
    var sum = addend1 + addend2;
    console.log('sum:', sum);
    label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}
```

The `console.log()` method may get the job done, but **breakpoints** get it done faster.  A breakpoint allows you to pause your code in the middle of the runtime, and examine all values at that moment in time.  Breakpoints have the following advantages over the `console.log()` method.

*   With `console.log()`, you need to manually open the source code, find the relevant code, insert the `console.log()` statements, and then refresh the webpage to display the messages in the **Console**.  With breakpoints, you may pause on the relevant code without even knowing how the code is structured.
*   In your `console.log()` statements, you need to explicitly specify each value that you want to inspect.  With breakpoints, DevTools shows you the values of all variables at that moment in time.  Sometimes variables that affect your code are hidden and obfuscated.

In short, breakpoints may help you find and fix bugs faster than the `console.log()` method.

If you step back and think about how the app works, you may make an educated guess that the incorrect sum (`5 + 1 = 51`) is computed in the `click` event listener associated with the **Add Number 1 and Number 2** button.  So, you probably want to pause the code around the time that the `click` listener runs.  **Event Listener Breakpoints** let you do exactly that:

1.  In the **Debugger** pane, choose **Event Listener Breakpoints** to expand the section.  DevTools reveals a list of expandable event categories, such as **Animation** and **Clipboard**.
1.  Next to the **Mouse** event category, choose **Expand** (![Expand icon](../media/expand-icon.msft.png)).  DevTools reveals a list of mouse events, such as **click** and **mousedown**.  Each event has a checkbox next to it.
1.  Choose the checkbox next to **click**.  DevTools is now set up to automatically pause when any `click` event listener runs.

    :::image type="complex" source="../media/javascript-sources-event-listener-breakpoint-mouse-click.msft.png" alt-text="Choose the checkbox next to click" lightbox="../media/javascript-sources-event-listener-breakpoint-mouse-click.msft.png":::
       Choose the checkbox next to **click**
    :::image-end:::

1.  Back on the demo, choose **Add Number 1 and Number 2** again.  DevTools pauses the demo and highlights a line of code in the **Sources** tool.  DevTools should pause on line 16 in `get-started.js`.

    ```javascript
    if (inputsAreEmpty()) {
    ```

    If you pause on a different line of code, choose **Resume Script Execution** (![Resume Script Execution](../media/resume-script-run-icon.msft.png)) until you pause on the correct line.

    > [!NOTE]
    > If you paused on a different line, you have a browser extension that registers a `click` event listener on every webpage that you visit.  You are paused in the `click` listener of the extension.  If you use InPrivate Mode to **browse in private**, which disables all extensions, you may see that you pause on the desired line of code every time.

<!--todo: add inprivate section when available in this repo [InPrivate](https://support.alphabet.com/alphabet-browser/answer/95464) -->

**Event Listener Breakpoints** are just one of many types of breakpoints available in DevTools.  Memorize all the different types to help you debug different scenarios as quickly as possible.  To learn when and how to use each type, see [Pause your code with breakpoints](breakpoints.md).


<!-- ====================================================================== -->
## Step 4: Step through the code

One common cause of bugs is when a script runs in the wrong order.  Stepping through your code allows you to walk through the runtime of your code.  You walk through one line at a time to help you figure out exactly where your code is running in a different order than you expect.  Try it now:

1.  Choose **Step over next function call** (![Step over next function call](../media/step-over-icon.msft.png)).  DevTools runs the following code without stepping into it.

    ```javascript
    if (inputsAreEmpty()) {
    ```

    > [!NOTE]
    > DevTools skips a few lines of code.  This is because `inputsAreEmpty()` evaluates as false, so the block of code for the `if` statement does not run.

1.  On the **Sources** tool of DevTools, choose **Step into next function call** (![Step into next function call](../media/step-into-icon.msft.png)) to step through the runtime of the `updateLabel()` function, one line at a time.

Reviewing one line at a time is the basic idea of stepping through code.  If you review the code in `get-started.js`, the bug is probably somewhere in the `updateLabel()` function.  Rather than stepping through every line of code, you may use another type of breakpoint to pause the code closer to the probable location of the bug.


<!-- ====================================================================== -->
## Step 5: Set a line-of-code breakpoint

Line-of-code breakpoints are the most common type of breakpoint.  When you get to the specific line of code you want to pause, use a line-of-code breakpoint.

1.  Look at the last line of code in `updateLabel()`:

    ```javascript
    label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
    ```

1.  On the left, the number of this particular line of code is displayed as **34**.  Choose line **34**.  DevTools displays a red icon to the left of **34**.  The red icon indicates that a line-of-code breakpoint is on this line.  DevTools always pauses before this line of code is run.
1.  Choose **Resume script execution** (![Resume script execution](../media/resume-script-run-icon.msft.png)).  The script continues to run until it reaches line 34.  On lines 31, 32, and 33, DevTools prints the values of `addend1`, `addend2`, and `sum` to the right of the semi-colon on each line.

    :::image type="complex" source="../media/javascript-sources-breakpoint-paused.msft.png" alt-text="DevTools pauses on the line-of-code breakpoint on line 34" lightbox="../media/javascript-sources-breakpoint-paused.msft.png":::
       DevTools pauses on the line-of-code breakpoint on line 34
    :::image-end:::


<!-- ====================================================================== -->
## Step 6: Check variable values

The values of `addend1`, `addend2`, and `sum` look suspicious.  The values are wrapped in quotes.  The quotations mean that the value is a string, which is a good hypothesis to explain the cause of the bug.  Gather more information about the situation.  DevTools provides many tools for examining variable values.

### Method 1: The Scope pane

If you pause on a line of code, the **Scope** pane displays the local and global variables that are currently defined, along with the value of each variable.  It also displays closure variables, as applicable.  Double-click a variable value to edit it.  If you don't pause on a line of code, the **Scope** pane is empty.

:::image type="complex" source="../media/javascript-sources-breakpoint-paused-scope.msft.png" alt-text="The Scope pane" lightbox="../media/javascript-sources-breakpoint-paused-scope.msft.png":::
   The **Scope** pane
:::image-end:::

### Method 2: Watch Expressions

The **Watch** pane allows you to monitor the values of variables (such as `sum`) or expressions (such as `typeof sum`).  You may store any valid JavaScript expression in a Watch Expression.

1.  Choose the **Watch** pane.
1.  Choose **Add watch expression** (![Add watch expression](../media/add-expression-icon.msft.png)).
1.  Type `typeof sum`.
1.  Select `Enter`.  DevTools displays `typeof sum: "string"`.  The value to the right of the colon is the result of your Watch Expression.

> [!NOTE]
> In the following figure, the `typeof sum` Watch Expression is displayed in the **Watch** pane.  If your DevTools window is wide, the **Watch** pane is displayed within the **Debugger** pane, which then appears on the right.

:::image type="complex" source="../media/javascript-sources-breakpoint-paused-watch.msft.png" alt-text="The Watch pane" lightbox="../media/javascript-sources-breakpoint-paused-watch.msft.png":::
   The **Watch** pane
:::image-end:::

As suspected, `sum` is being evaluated as a string, when it should be a number.  You now confirmed value type is the cause of the bug.

### Method 3: The Console

The **Console** allows you to view `console.log()` output.  You can also use the **Console** to evaluate arbitrary JavaScript statements while the debugger is paused at a code statement.  For debugging, you can use the **Console** to test potential fixes for bugs.

1.  If the **Console** tool is closed, select `Esc` to open it.  The **Console** tool opens in the lower pane of the DevTools window.
1.  In the **Console**, type `parseInt(addend1) + parseInt(addend2)`.  The statement the tool is paused on a line of code where `addend1` and `addend2` are in scope.
1.  Select `Enter`.  DevTools evaluates the statement and prints `6`, which is the result you expect the demo to produce.

    :::image type="complex" source="../media/javascript-sources-breakpoint-paused-console.msft.png" alt-text="The Console tool, after evaluating parseInt(addend1) + parseInt(addend2)" lightbox="../media/javascript-sources-breakpoint-paused-console.msft.png":::
       The **Console** tool, after evaluating `parseInt(addend1) + parseInt(addend2)`
    :::image-end:::


<!-- ====================================================================== -->
## Step 7: Apply a fix

We've identified a possible fix for the bug.  Next, edit the JavaScript code directly within the DevTools UI and then rerun the demo to test the fix, as follows.

1.  Choose **Resume script execution** (![Resume script execution](../media/resume-script-run-icon.msft.png)).
1.  In the **Editor** pane, replace the line `var sum = addend1 + addend2` with `var sum = parseInt(addend1) + parseInt(addend2)`.
1.  Select `Control`+`S` (Windows, Linux) or `Command`+`S` (macOS) to save your change.
1.  Choose **Deactivate breakpoints** (![Deactivate breakpoints](../media/deactivate-breakpoints-button-icon.msft.png)).  It changes blue to indicate the option is active.  While **Deactivate breakpoints** is set, DevTools ignores any breakpoints you set.
1.  Try out the demo with different values.  The demo now calculates correctly.

> [!CAUTION]
> This workflow only applies a fix to a local copy of the code sent from the server.  When debugging your project, after you identify the fix, you still need to apply that fix to the code on the server, such as by editing your local source code and then re-deploying your fixed code to the server.


<!-- ====================================================================== -->
## Next steps

Congratulations!  You now know how to make the most of Microsoft Edge DevTools when debugging JavaScript.  The tools and methods you learned in this article may save you countless hours.

This article showed two ways to set breakpoints.  DevTools also provides ways to set breakpoints to pause your code when certain conditions are met, such as:

*   Conditional breakpoints that are only triggered when the condition that you provide is true.
*   Breakpoints on caught or uncaught exceptions.
*   XHR breakpoints that are triggered when the requested URL matches a substring that you provide.

For more information about when and how to use each type, navigate to [Pause your code with breakpoints](./breakpoints.md).

A couple of code stepping controls aren't explained in this article.  For more information, navigate to [Step over line of code](./reference.md#step-through-code) in the "Use the debugger features" article.


<!-- ====================================================================== -->
## See also

*  [Use the debugger features](./reference.md) - Using the UI of the debugger in the Sources tool.
*  [Sources tool overview](../sources/index.md) - Introduces the JavaScript debugger and code editor.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/javascript/index) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
