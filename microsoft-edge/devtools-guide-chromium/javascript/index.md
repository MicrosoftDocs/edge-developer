---
title: Get Started with Debugging JavaScript in Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/06/2020
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







# Get Started with Debugging JavaScript in Microsoft Edge DevTools   



This tutorial teaches you the basic workflow for debugging any JavaScript issue in DevTools.  

## Step 1: Reproduce the bug   

Finding a series of actions that consistently reproduces a bug is always the first step to debugging.  

1.  Click **Open Demo**.  Hold `Control` \(Windows\) or `Command` \(macOS\) and open the demo in a new tab.  

    [Open Demo][OpenDebugJSDemo]  

1.  Enter `5` in the **Number 1** text box.  
1.  Enter `1` in the **Number 2** text box.  
1.  Click **Add Number 1 and Number 2**.  The label below the button says `5 + 1 = 51`.  The result should be `6`.  This is the bug you are going to fix.  
    
    > ##### Figure 1  
    > The result of `5 + 1` is `51`, but should be `6`  
    > ![The result of 5 + 1 is 51, but should be 6][ImageJSBugs]  

## Step 2: Get familiar with the Sources panel UI   

DevTools provides a lot of different tools for different tasks, such as changing CSS, profiling page load performance, and monitoring network requests.  The **Sources** panel is where you debug JavaScript.  

1.  Open DevTools by pressing `Control`+`Shift`+`J` \(Windows\) or `Command`+`Option`+`J` \(macOS\) .  This shortcut opens the **Console** panel.  
    
    > ##### Figure 2  
    > The **Console** panel  
    > ![The Console panel][ImageJSConsole]  

1.  Click the **Sources** tab.  
    
    > ##### Figure 3  
    > The **Sources** panel  
    > ![The Sources panel][ImageJSSources]  

The **Sources** panel UI has 3 parts:  

> ##### Figure 4  
> The 3 parts of the **Sources** panel UI  
> ![The 3 parts of the Sources panel UI][ImageJSSourcesAnnotated]  

1.  The **File Navigator** pane \(Section 1 in [Figure 4](#figure-4)\).  Every file that the page requests is listed here.  
1.  The **Code Editor** pane \(Section 2 in [Figure 4](#figure-4)\).  After selecting a file in the **File Navigator** pane, the contents of that file are displayed here.  
1.  The **JavaScript Debugging** pane \(Section 3 in [Figure 4](#figure-4)\).  Various tools for inspecting the JavaScript for the page.  If your DevTools window is wide, this pane is displayed to the right of the **Code Editor** pane.  

## Step 3: Pause the code with a breakpoint   

A common method for debugging a problem like this is to insert a lot of `console.log()` statements into the code, in order to inspect values as the script runs.  For example:  

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

The `console.log()` method may get the job done, but **breakpoints** are able to get it done faster.  A breakpoint lets you pause your code in the middle of the runtime, and examine all values at that moment in time.  Breakpoints have a few advantages over the `console.log()` method:  

*   With `console.log()`, you need to manually open the source code, find the relevant code, insert the `console.log()` statements, and then reload the page in order to see the messages in the Console.  With breakpoints, you may pause on the relevant code without even knowing how the code is structured.  
*   In your `console.log()` statements you need to explicitly specify each value that you want to inspect.  With breakpoints, DevTools shows you the values of all variables at that moment in time.  Sometimes there are variables affecting your code that you are not even aware of.  

In short, breakpoints may help you find and fix bugs faster than the `console.log()` method.  

If you take a step back and think about how the app works, you are able to make an educated guess that the incorrect sum (`5 + 1 = 51`) gets computed in the `click` event listener that is associated to the **Add Number 1 and Number 2** button.  Therefore, you probably want to pause the code around the time that the `click` listener runs.  **Event Listener Breakpoints** let you do exactly that:  

1.  In the **JavaScript Debugging** pane, click **Event Listener Breakpoints** to expand the section.  DevTools reveals a list of expandable event categories, such as **Animation** and **Clipboard**.  
1.  Next to the **Mouse** event category, click **Expand** ![Expand icon][ImageExpandIcon].  DevTools reveals a list of mouse events, such as **click** and **mousedown**.  Each event has a checkbox next to it.  
1.  Check the **click** checkbox.  DevTools is now set up to automatically pause when *any* `click` event listener runs.  
    
    > ##### Figure 5  
    > The **click** checkbox is enabled  
    > ![The click checkbox is enabled][ImageJSClickCheckbox]  
    
1.  Back on the demo, click **Add Number 1 and Number 2** again.  DevTools pauses the demo and highlights a line of code in the **Sources** panel.  DevTools should pause on line 16 in `get-started.js`.  
    
    ```javascript
    if (inputsAreEmpty()) {
    ```  
    
    If you pause on a different line of code, press **Resume Script Execution** ![Resume Script Execution][ImageResumeIcon] until you pause on the correct line.  
    
    > [!NOTE]
    > If you paused on a different line, you have a browser extension that registers a `click` event listener on every page that you visit.  You were paused in the `click` listener of the extension.  If you use InPrivate Mode to **browse in private**, which disables all extensions, you may see that you pause on the desired line of code every time.  

<!--todo: add inprivate section when available -->  

**Event Listener Breakpoints** are just one of many types of breakpoints available in DevTools.  It is worth memorizing all the different types, because each type ultimately helps you debug different scenarios as quickly as possible.  <!--See [Pause Your Code With Breakpoints][JSBreakpoints] to learn when and how to use each type.  -->  

## Step 4: Step through the code   

One common cause of bugs is when a script runs in the wrong order.  Stepping through your code enables you to walk through the runtime of your code, one line at a time, and figure out exactly where it is running in a different order than you expected.  Try it now:  

1.  Click **Step over next function call** ![Step over next function call][ImageOverIcon].  DevTools runs the following code without stepping into it.  
    
    ```javascript
    if (inputsAreEmpty()) {
    ```  

    > [!NOTE]
    > DevTools skips a few lines of code.  This is because `inputsAreEmpty()` evaluates as false, so the block of code for the `if` statement does not run.  

1.  On the **Sources** panel of DevTools, click **Step into next function call** ![Step into next function call][ImageIntoIcon] to step through the runtime of the `updateLabel()` function, one line at a time.  

That is the basic idea of stepping through code.  If you look at the code in `get-started.js`, you see that the bug is probably somewhere in the `updateLabel()` function.  Rather than stepping through every line of code, you may use another type of breakpoint to pause the code closer to the probable location of the bug.  

## Step 5: Set a line-of-code breakpoint   

Line-of-code breakpoints are the most common type of breakpoint.  When you get the specific line of code that you want to pause on, use a line-of-code breakpoint:  

1.  Look at the last line of code in `updateLabel()`:  
    
    ```javascript
    label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
    ```  
    
1.  To the left of the code you see the line number of this particular line of code, which is **33**.  Click on **33**.  DevTools puts a red icon to the left of **33**.  This means that there is a line-of-code breakpoint on this line.  DevTools now always pauses before this line of code is run.  
1.  Click **Resume script execution** ![Resume script execution][ImageResumeIcon].  The script continues running until it reaches line 33.  On lines 30, 31, and 32, DevTools prints out the values of `addend1`, `addend2`, and `sum` to the right of the semi-colon on each line.  
    
    > ##### Figure 6  
    > DevTools pauses on the line-of-code breakpoint on line 32  
    > ![DevTools pauses on the line-of-code breakpoint on line 32][ImageJSLineOfCodeBreakpoint]  

## Step 6: Check variable values   

The values of `addend1`, `addend2`, and `sum` look suspicious.  They are wrapped in quotes, which means that they are strings.  This is a good hypothesis for the explaining the cause of the bug.  Now it is time to gather more information.  DevTools provides a lot of tools for examining variable values.  

### Method 1: The Scope pane   

When you pause on a line of code, the **Scope** pane shows you what local and global variables are currently defined, along with the value of each variable.  It also shows closure variables, when applicable.  Double-click a variable value to edit it.  When you are not paused on a line of code, the **Scope** pane is empty.  

> ##### Figure 7  
> The **Scope** pane  
> ![The Scope pane][ImageJSScope]  

### Method 2: Watch Expressions   

The **Watch Expressions** tab lets you monitor the values of variables over time.  As the name implies, Watch Expressions are not just limited to variables.  You are able to store any valid JavaScript expression in a Watch Expression.  Try it now:  

1.  Click the **Watch** tab.  
1.  Click **Add Expression** ![Add Expression][ImageAddIcon].  
1.  Type `typeof sum`.  
1.  Press `Enter`.  DevTools shows `typeof sum: "string"`.  The value to the right of the colon is the result of your Watch Expression.  

> [!NOTE]
> In the Watch Expression pane \(bottom-right\) in [Figure 8](#figure-8), the `typeof sum` Watch Expression is displayed.  If your DevTools window is large, the Watch Expression pane is on the right above the **Event Listener Breakpoints** pane.  

> ##### Figure 8  
> The Watch Expression pane  
> ![The Watch Expression pane][ImageJSWatchExpression]  

As suspected, `sum` is being evaluated as a string, when it should be a number.  You have now confirmed that this is the cause of the bug.  

### Method 3: The Console   

In addition to viewing `console.log()` messages, you may also use the Console to evaluate arbitrary JavaScript statements.  In terms of debugging, you may use the Console to test out potential fixes for bugs.  Try it now:  

1.  If you do not have the Console drawer open, press `Escape` to open it.  It opens at the bottom of your DevTools window.  
1.  In the Console, type `parseInt(addend1) + parseInt(addend2)`.  This statement works because you are paused on a line of code where `addend1` and `addend2` are in scope.  
1.  Press `Enter`.  DevTools evaluates the statement and prints out `6`, which is the result you expect the demo to produce.  

> ##### Figure 9  
> The Console drawer, after evaluating `parseInt(addend1) + parseInt(addend2)`  
> ![The Console drawer, after evaluating parseInt(addend1) + parseInt(addend2)][ImageJSConsoleEvaluated]  

## Step 7: Apply a fix   

If you find a fix for the bug, try out your fix by editing the code and re-running the demo.  You do not need to leave DevTools to apply the fix.  You are able to edit JavaScript code directly within the DevTools UI.  Try it now:  

1.  Click **Resume script execution** ![Resume script execution][ImageResumeIcon].  
1.  In the **Code Editor**, replace line 32, `var sum = addend1 + addend2`, with `var sum = parseInt(addend1) + parseInt(addend2)`.  
1.  Press `Control`+`S` \(Windows\) or `Command`+`S` \(macOS\) to save your change.  
1.  Click **Deactivate breakpoints** ![Deactivate breakpoints][ImageDeactivateIcon].  It changes blue to indicate that it is active.  While this is set, DevTools ignores any breakpoints you set.  
1.  Try out the demo with different values.  The demo now calculates correctly.  

> [!CAUTION]
> This workflow only applies a fix to the code that is running in your browser.  It does not fix the code for all users that visit your page.  To do that, you need to fix the code that is on your servers.  

## Next steps   

Congratulations!  You now know how to make the most of Microsoft Edge DevTools when debugging JavaScript.  The tools and methods you learned in this tutorial may save you countless hours.  

This tutorial only showed you two ways to set breakpoints.  DevTools offers many other ways, including:  

*   Conditional breakpoints that are only triggered when the condition that you provide is true.  
*   Breakpoints on caught or uncaught exceptions.  
*   XHR breakpoints that are triggered when the requested URL matches a substring that you provide.  

<!-- See [Pause Your Code With Breakpoints][JSBreakpoints] to learn when and how to use each type.  -->  

<!--There are a couple of code stepping controls that were not explained in this tutorial.  See [Step over line of code][JSReferenceStepping] to learn more.  -->  

 



<!-- image links -->  

[ImageAddIcon]: images/add-expression-icon.msft.png  
[ImageDeactivateIcon]: images/deactivate-breakpoints-button-icon.msft.png  
[ImageExpandIcon]: images/expand-icon.msft.png  
[ImageIntoIcon]: images/step-into-icon.msft.png  
[ImageOverIcon]: images/step-over-icon.msft.png  
[ImageResumeIcon]: images/resume-script-execution-icon.msft.png  

[ImageJSBugs]: images/js-demo-bad.msft.png "Figure 1: The result of 5 + 1 is 51, but should be 6"  
[ImageJSConsole]: images/console-empty.msft.png "Figure 2: The Console panel"  
[ImageJSSources]: images/sources-sections.msft.png "Figure 3: The Sources panel"  
[ImageJSSourcesAnnotated]: images/sources-sections-annotated.msft.png "Figure 4: The 3 parts of the Sources panel UI"  
[ImageJSClickCheckbox]: images/sources-event-listener-breakpoint-mouse-click.msft.png "Figure 5: The click checkbox is enabled"  
[ImageJSLineOfCodeBreakpoint]: images/sources-breakpoint-paused.msft.png "Figure 6: DevTools pauses on the line-of-code breakpoint on line 32"  
[ImageJSScope]: images/sources-breakpoint-paused-scope.msft.png "Figure 7: The Scope pane"  
[ImageJSWatchExpression]: images/sources-breakpoint-paused-watch.msft.png "Figure 8: The Watch Expression pane"  
[ImageJSConsoleEvaluated]: images/sources-breakpoint-paused-console.msft.png "The Console drawer, after evaluating parseInt(addend1) + parseInt(addend2)"  

<!-- links -->  

<!--[JSBreakpoints]: breakpoints.md "JavaScript Breakpoints"  -->  
<!--[inPrivate]: https://support.alphabet.com/alphabet-browser/answer/95464  -->
[OpenDebugJSDemo]: https://microsoft-edge-chromium-devtools.glitch.me/debug-js/get-started.html "Open Demo"  
<!--[JSReferenceStepping]: reference.md#stepping "Reference Stepping"  -->

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/javascript/index) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
