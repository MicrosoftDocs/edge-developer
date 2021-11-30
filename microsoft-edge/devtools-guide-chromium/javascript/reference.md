---
description: Discover new debugging workflows in this comprehensive reference of Microsoft Edge DevTools debugging features.
title: Use the debugger features
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
# Use the debugger features

This article covers how to use the debugger in Microsoft Edge DevTools, including how to set a line-of-code breakpoint.  To set other types of breakpoints, see [Pause your code with breakpoints](./breakpoints.md).

To learn the basics of debugging, navigate to [Get started with debugging JavaScript in Microsoft Edge DevTools](./index.md), which is a tutorial that uses an existing, form-based webpage.  The tutorial has screen captures, so you can skim it.  You can easily try out the debugger features by using the demo webpage.


<!-- ====================================================================== -->
## View and edit JavaScript code

When fixing a bug, you often want to try out some changes to your JavaScript code.  You don't need to make the changes in an external editor or IDE, re-upload the file to the server, and then refresh the page; instead, to test changes, you can edit your JavaScript code directly in DevTools and see the result immediately.

To view and edit a JavaScript file:

1.  Navigate to the **Sources** tool.
1.  In the **Navigator** pane, select your file, to open it in the **Editor** pane.
1.  In the **Editor** pane, edit your file.
1.  Select `Ctrl`+`S` (Windows, Linux) or `Command`+`S` (macOS) to save.  DevTools then loads the JavaScript file into the JavaScript engine of Microsoft Edge.

    :::image type="complex" source="../media/javascript-sources-html-minified.msft.png" alt-text="The Editor pane" lightbox="../media/javascript-sources-html-minified.msft.png":::
       The **Editor** pane
    :::image-end:::


<!-- ====================================================================== -->
## Reformat a minified JavaScript file with pretty-print

To make a minified file human-readable, choose the **Format** (![Format](../media/format-icon.msft.png)) button at the bottom of the **Editor** pane.

:::image type="complex" source="../media/javascript-sources-html-non-minified.msft.png" alt-text="The Format button" lightbox="../media/javascript-sources-html-non-minified.msft.png":::
   The **Format** button
:::image-end:::


<!-- ====================================================================== -->
## Set a breakpoint, to pause code

To pause your code in the middle of the runtime, set a breakpoint.  The most basic and well-known type of breakpoint is a line-of-code breakpoint.

Use a line-of-code breakpoint when you know the exact region of code that you need to investigate.  DevTools always pauses at the specified line of code, before running it.

To set a line-of-code breakpoint:

1.  Navigate to the **Sources** tool.
1.  Open the file that contains the line of code.
1.  Select the area to the left of the line number for the line of code.  Or, right-click the line number and then choose **Add breakpoint**.  A red circle then appears next to the line number, indicating a breakpoint.

    :::image type="complex" source="../media/javascript-sources-page-js-breakpoint-30.msft.png" alt-text="A line-of-code breakpoint" lightbox="../media/javascript-sources-page-js-breakpoint-30.msft.png":::
       A line-of-code breakpoint
    :::image-end:::

Line-of-code breakpoints may be inefficient to set, especially if you do not know exactly where to look, or if your codebase is large.  To save time when debugging, learn how and when to use the other types of breakpoints.  For more information, navigate to [Pause your code with breakpoints](./breakpoints.md).


<!-- ====================================================================== -->
## Step through code

After your code is paused at a breakpoint, step through the code, one line at a time, investigating control flow and property values along the way.

### Step over line of code

When paused on a line of code containing a function that isn't relevant to the problem you are debugging, choose the **Step over** (![Step over](../media/step-over-icon.msft.png)) button to run the function without stepping into it.

:::image type="complex" source="../media/javascript-source-page-debugger-step-over-next-function-call.msft.png" alt-text="Choose Step over" lightbox="../media/javascript-source-page-debugger-step-over-next-function-call.msft.png":::
   Choose **Step over**
:::image-end:::

For example, suppose you are debugging the following code snippet.

```javascript
function updateHeader() {
    var day = new Date().getDay();
    var name = getName(); // A
    updateName(name); // D
}
function getName() {
    var name = app.first + ' ' + app.last; // B
    return name; // C
}
```

You are paused on `A`.  After you choose **Step over**, DevTools runs all the code in the function that you are stepping over, which is `B` and `C`.  DevTools then pauses on `D`.

### Step into line of code

When paused on a line of code containing a function call that is related to the problem you are debugging, choose the **Step into** (![Step into](../media/step-into-icon.msft.png)) button to investigate that function further.

:::image type="complex" source="../media/javascript-source-page-debugger-step-into-next-function-call.msft.png" alt-text="Choose Step into" lightbox="../media/javascript-source-page-debugger-step-into-next-function-call.msft.png":::
   Choose **Step into**
:::image-end:::

For example, suppose you are debugging the following code snippet.

```javascript
function updateHeader() {
    var day = new Date().getDay();
    var name = getName(); // A
    updateName(name);
}
function getName() {
    var name = app.first + ' ' + app.last; // B
    return name;
}
```

You are paused on `A`.  After you choose **Step into**, DevTools runs this line of code, then pauses on `B`.

### Step out of line of code

When paused inside of a function that isn't related to the problem you are debugging, choose the **Step out** (![Step out](../media/step-out-icon.msft.png)) button to run the rest of the code of the function.

:::image type="complex" source="../media/javascript-source-page-debugger-step-out-of-current-function.msft.png" alt-text="Choose Step out" lightbox="../media/javascript-source-page-debugger-step-out-of-current-function.msft.png":::
   Choose **Step out**
:::image-end:::

For example, suppose you are debugging the following code snippet.

```javascript
function updateHeader() {
    var day = new Date().getDay();
    var name = getName();
    updateName(name); // C
}
function getName() {
    var name = app.first + ' ' + app.last; // A
    return name; // B
}
```

You are paused on `A`.  After you choose **Step out**, DevTools runs the rest of the code in `getName()`, which is just `B` in this example, and then pauses on `C`.

### Run all code up to a specific line

When debugging a long function, there may be a lot of code that isn't related to the problem you are debugging.

You may choose to step through all the lines, but that is tedious.  You may choose to set a line-of-code breakpoint on the line in which you are interested and then choose the **Resume script execution** (![Resume script execution](../media/resume-script-run-icon.msft.png)) button, but there is a faster way.

Hover on the line of code in which you are interested, open the contextual menu (right-click), and choose **Continue to here**.  DevTools runs all of the code up to that point, and then pauses on that line.

:::image type="complex" source="../media/javascript-source-page-continue-to-here.msft.png" alt-text="Choose Continue to here" lightbox="../media/javascript-source-page-continue-to-here.msft.png":::
   Choose **Continue to here**
:::image-end:::

### Restart the top function of the call stack

To pause on the first line of the top function in your call stack, while paused on a line of code, hover anywhere in the **Call Stack** pane, open the contextual menu (right-click), and choose **Restart frame**.  The top function is the last function that was run.

The following code snippet is an example for you to step-through.

```javascript
function factorial(n) {
    var product = 0; // B
    for (var i = 1; i <= n; i++) {
      product += i;
    }
    return product; // A
}
```

You are paused on `A`.  After choosing **Restart frame**, you should be paused on `B`, without ever setting a breakpoint or choosing **Resume script execution**.

:::image type="complex" source="../media/javascript-source-page-debugger-restart-frame.msft.png" alt-text="Choose Restart frame" lightbox="../media/javascript-source-page-debugger-restart-frame.msft.png":::
   Choose **Restart frame**
:::image-end:::

### Resume script runtime

To continue the runtime after a pause of your script, choose the **Resume script execution** (![Resume script execution](../media/resume-script-run-icon.msft.png)) button.  DevTools runs the script up until the next breakpoint, if any.

:::image type="complex" source="../media/javascript-sources-get-started-js-resume-script-runtime.msft.png" alt-text="Choose Resume script execution" lightbox="../media/javascript-sources-get-started-js-resume-script-runtime.msft.png":::
   Choose **Resume script execution**
:::image-end:::

#### Force script runtime

To ignore all breakpoints and force your script to continue to run, choose and hold the **Resume script execution** (![Resume script execution](../media/resume-script-run-icon.msft.png)) button and then choose the **Force script execution** (![Force script execution](../media/force-script-run-icon.msft.png)) button.

:::image type="complex" source="../media/javascript-sources-get-started-js-force-script-runtime.msft.png" alt-text="Choose Force script execution" lightbox="../media/javascript-sources-get-started-js-force-script-runtime.msft.png":::
   Choose **Force script execution**
:::image-end:::

### Change thread context

When working with web workers or service workers, choose on a context listed in the **Threads** pane to switch to that context.  The blue arrow icon represents which context is currently selected.

:::image type="complex" source="../media/javascript-sources-main-min-js-threads.msft.png" alt-text="The Threads pane" lightbox="../media/javascript-sources-main-min-js-threads.msft.png":::
   The **Threads** pane
:::image-end:::

For example, suppose that you are paused on a breakpoint in both your main script and your service worker script.  You want to view the local and global properties for the service worker context, but the **Sources** tool is showing the main script context.  To switch to the service worker context, in the **Threads** pane, choose the service worker entry.


<!-- ====================================================================== -->
## View and edit properties and variables

While paused on a line of code, use the **Scope** pane to view and edit the values of properties and variables in the local, closure, and global scopes.

*   Double-click a property value to change it.
*   Non-enumerable properties are greyed out.

:::image type="complex" source="../media/javascript-sources-get-started-js-scope.msft.png" alt-text="The Scope pane" lightbox="../media/javascript-sources-get-started-js-scope.msft.png":::
   The **Scope** pane
:::image-end:::


<!-- ====================================================================== -->
## Watch the values of JavaScript expressions

Use the **Watch** pane to watch the values of custom expressions.  You can watch any valid JavaScript expression.

:::image type="complex" source="../media/javascript-sources-get-started-js-watch.msft.png" alt-text="The Watch pane" lightbox="../media/javascript-sources-get-started-js-watch.msft.png":::
   The **Watch** pane
:::image-end:::

*   To create a new watch expression, select the **Add watch expression** (![Add watch expression](../media/add-expression-icon.msft.png)) button.
*   To refresh the values of all existing expressions, select the **Refresh** (![Refresh](../media/refresh-icon.msft.png)) button.  Values automatically refresh while stepping through code.
*   To delete a watch expression, right-click the expression and then select **Delete watch expression** (![Delete watch expression](../media/delete-expression-icon.msft.png)).


<!-- ====================================================================== -->
## View the call stack

While paused on a line of code, use the **Call Stack** pane to view the call stack that got you to this point.

<!--If you are working with async code, check the **Async** checkbox to enable async call stacks.  -->

Choose an entry to jump to the line of code where that function was called.  The blue arrow icon represents which function DevTools is currently highlighting.

:::image type="complex" source="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty.msft.png" alt-text="The Call Stack pane" lightbox="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty.msft.png":::
   The **Call Stack** pane
:::image-end:::

> [!NOTE]
> When not paused on a line of code, the **Call Stack** pane is empty.

### Copy stack trace

<!--
This should be moved to an "Export debug data" H2 section when there is enough content for that, but there is not right now, so it is here.
-->

To copy the current call stack to the clipboard, hover anywhere in the **Call Stack** pane, open the contextual menu (right-click), and choose **Copy stack trace**.

:::image type="complex" source="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty-copy-stack-trace.msft.png" alt-text="Choose Copy Stack Trace" lightbox="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty-copy-stack-trace.msft.png":::
   Choose **Copy Stack Trace**
:::image-end:::

The following code snippet is an example of the output.

```javascript
getNumber1 (get-started.js:35)
inputsAreEmpty (get-started.js:22)
onChoose (get-started.js:15)
```


<!-- ====================================================================== -->
## Ignore a script or pattern of scripts

Mark a script as Library code when you want to ignore that script while debugging.  When marked as Library code, a script is obscured in the **Call Stack** pane, and you never step into the functions of the script when you step through your code.

For example, in the following code snippet, line `A` uses `lib`, which is a third-party library.  If you are confident that the problem you are debugging is not related to that third-party library, then it makes sense to mark the script as **Library code**.

```javascript
function animate() {
    prepare();
    lib.doFancyStuff(); // A
    render();
}
```

### Mark a script as Library code from the Editor pane

To mark a script as **Library code** from the **Editor** pane:

1.  Open the file.
1.  Hover anywhere and open the contextual menu (right-click).
1.  Choose **Add script to ignore list** (previously shown as **Mark as Library code**).

    :::image type="complex" source="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty-editor-mark-as-library-code.msft.png" alt-text="Mark a script as Library code from the Editor pane" lightbox="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty-editor-mark-as-library-code.msft.png":::
       Mark a script as **Library code** from the **Editor** pane
    :::image-end:::

### Mark a script as Library code from the Call Stack pane

To mark a script as **Library code** from the **Call Stack** pane:

1.  Hover on a function from the script and open the contextual menu (right-click).
1.  Choose **Add script to ignore list** (previously shown as **Mark as Library code**).

    :::image type="complex" source="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty-call-stack-mark-as-library-code.msft.png" alt-text="Mark a script as Library code from the Call Stack pane" lightbox="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty-call-stack-mark-as-library-code.msft.png":::
       Mark a script as **Library code** from the **Call Stack** pane
    :::image-end:::

### Mark a script as Library code from Settings

To mark a single script or pattern of scripts from **Settings**:

1.  Open [Settings](../customize/index.md).
1.  Navigate to the **Library code** setting.
1.  Choose **Add pattern**.
1.  Enter the script name or a regex pattern of script names to mark as **Library code**.
1.  Choose **Add**.

    :::image type="complex" source="../media/javascript-framework-library-code.msft.png" alt-text="Mark a script as Library code from Settings" lightbox="../media/javascript-framework-library-code.msft.png":::
       Mark a script as **Library code** from **Settings**
    :::image-end:::


<!-- ====================================================================== -->
## Run snippets of debug code from any page

If you find yourself running the same debug code in the Console over and over, consider Snippets.  Snippets are runtime scripts that you author, store, and run within DevTools.

See [Run snippets of JavaScript on any webpage](./snippets.md).


<!-- ====================================================================== -->
## See also

*  [Get Started With Debugging JavaScript In Microsoft Edge DevTools](./index.md) - A simple, short tutorial using existing code, with screen captures.
*  [Sources tool overview](../sources/index.md) - The **Sources** tool includes the JavaScript debugger and editor.
*  [Disable JavaScript with Microsoft Edge DevTools](./disable.md).


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/javascript/reference) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
