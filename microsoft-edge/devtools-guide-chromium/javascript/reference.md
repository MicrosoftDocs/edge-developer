---
title: JavaScript Debugging Reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 02/03/2020
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







# JavaScript Debugging Reference   



Discover new debugging workflows with this comprehensive reference of Microsoft Edge DevTools debugging features.  

See [Get Started With Debugging JavaScript In Microsoft Edge DevTools][DevToolsJavascriptGetStarted] to learn the basics of debugging.  

## Pause code with breakpoints   

Set a breakpoint so that you are able to pause your code in the middle of the runtime.  

See [Pause Your Code With Breakpoints][DevToolsJavascriptBreakpoints] to learn how to set breakpoints.  

[DevToolsJavascriptBreakpoints]: breakpoints.md "How To Pause Your Code With Breakpoints In Microsoft Edge DevTools"  

## Step through code   

Once your code is paused, step through it, one line at a time, investigating control flow and property values along the way.  

### Step over line of code   

When paused on a line of code containing a function that is not relevant to the problem you are debugging, click **Step over** ![Step over][ImageStepOverIcon] to run the function without stepping into it.  

> ##### Figure 1  
> Selecting **Step over**  
> ![Selecting Step over][ImageSelectingStepOver]  

For example, suppose you are debugging the following code:  

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

You are paused on `A`.  By pressing **Step over**, DevTools runs all the code in the function that you are stepping over, which is `B` and `C`.  DevTools then pauses on `D`.  

### Step into line of code   

When paused on a line of code containing a function call that is related to the problem you are debugging, click **Step into** ![Step into][ImageStepIntoIcon] to investigate that function further.  

> ##### Figure 2  
> Selecting **Step into**  
> ![Selecting Step into][ImageSelectingStepInto]  

For example, suppose you are debugging the following code:  

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

You are paused on `A`.  By pressing **Step into**, DevTools runs this line of code, then pauses on `B`.  

### Step out of line of code   

When paused inside of a function that is not related to the problem you are debugging, click **Step out** ![Step out][ImageStepOutIcon] to run the rest of the code of the function.  

> ##### Figure 3  
> Selecting **Step out**  
> ![Selecting Step out][ImageSelectingStepOut]  

For example, suppose you are debugging the following code:  

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

you are paused on `A`.  By pressing **Step out**, DevTools runs the rest of the code in `getName()`, which is just `B` in this example, and then pauses on `C`.  

### Run all code up to a certain line   

When debugging a long function, there may be a lot of code that is not related to the problem you are debugging.  

You may choose to step through all the lines, but that is tedious.  You may choose to set a line-of-code breakpoint on the line in which you are interested and then press **Resume Script Execution** ![Resume Script Execution][ImageResumeScriptExecutionIcon], but there is a faster way.  

Right-click the line of code in which you are interested, and select **Continue to here**.  DevTools runs all of the code up to that point, and then pauses on that line.  

> ##### Figure 4  
> Selecting **Continue to here**  
> ![Selecting Continue to here][ImageSelectingContinueToHere]  

### Restart the top function of the call stack   

While paused on a line of code, right-click anywhere in the **Call Stack** pane and select **Restart Frame** to pause on the first line of the top function in your call stack.  The top function is the last function that was called.  

For example, suppose you are stepping through the following code:  

```javascript
function factorial(n) {
    var product = 0; // B
    for (var i = 1; i <= n; i++) {
      product += i;
    }
    return product; // A
}
```  

You are paused on `A`.  After clicking **Restart Frame**, you should be paused on `B`, without ever setting a breakpoint or pressing **Resume script execution**.  

> ##### Figure 5  
> Selecting **Restart Frame**  
> ![Selecting Restart Frame][ImageSelectingRestartFrame]  

### Resume script runtime   

To continue the runtime after a pause of your script, click **Resume Script Execution** ![Resume Script Execution][ImageResumeScriptExecutionIcon].  DevTools runs the script up until the next breakpoint, if any.  

> ##### Figure 6  
> Selecting **Resume script execution**  
> ![Selecting Resume script execution][ImageSelectingResumeScriptExecution]  

#### Force script runtime   

To ignore all breakpoints and force your script to resume running, click and hold **Resume Script Execution** ![Resume Script Execution][ImageResumeScriptExecutionIcon] and then select **Force script execution** ![Force script execution][ImageForceScriptExecutionIcon].  

> ##### Figure 7  
> Selecting **Force script execution**  
> ![Selecting Force script execution][ImageSelectingForceScriptExecution]  

### Change thread context   

When working with web workers or service workers, click on a context listed in the **Threads** pane to switch to that context.  The blue arrow icon represents which context is currently selected.  

> ##### Figure 8  
> The **Threads** pane  
> ![The Threads pane][ImageThreadsPane]  

For example, suppose that you are paused on a breakpoint in both your main script and your service worker script.  You want to view the local and global properties for the service worker context, but the **Sources** panel is showing the main script context.  By clicking on the service worker entry in the **Threads** pane, you should be able to switch to that context.  

## View and edit local, closure, and global properties   

While paused on a line of code, use the **Scope** pane to view and edit the values of properties and variables in the local, closure, and global scopes.  

*   Double-click a property value to change it.  
*   Non-enumerable properties are greyed out.  

> ##### Figure 9  
> The **Scope** pane  
> ![The Scope pane][ImageScopePane]  

## View the current call stack   

While paused on a line of code, use the **Call Stack** pane to view the call stack that got you to this point.  

If you are working with async code, check the **Async** checkbox to enable async call stacks.  

Click on an entry to jump to the line of code where that function was called.  The blue arrow icon represents which function DevTools is currently highlighting.  

> ##### Figure 10  
> The **Call Stack** pane  
> ![The Call Stack pane][ImageCallStackPane]  

Note: When not paused on a line of code, the **Call Stack** pane is empty.  

### Copy stack trace   

<!--
This should be moved to an "Export debug data" H2 section when there is enough content for that, but there is not right now, so it is here.
-->

Right-click anywhere in the **Call Stack** pane and select **Copy stack trace** to copy the current call stack to the clipboard.  

> ##### Figure 11  
> Selecting **Copy Stack Trace**  
> ![Selecting Copy Stack Trace][ImageSelectingCopyStackTrace]  

Below is an example of the output:  

```javascript
getNumber1 (get-started.js:35)
inputsAreEmpty (get-started.js:22)
onClick (get-started.js:15)
```  

## Ignore a script or pattern of scripts  

Mark a script when you want to ignore that script while debugging.  When marked, a script is obscured in the **Call Stack** pane, and you never step into the functions of the script when you step through your code.  

For example, suppose you are stepping through this code:  

```javascript
function animate() {
    prepare();
    lib.doFancyStuff(); // A
    render();
}
```  

`A` is a third-party library that you trust.  If you are confident that the problem you are debugging is not related to the third-party library, then it makes sense to mark the script.  

### Mark a script from the Editor pane  

To mark a script from the **Editor** pane:  

1.  Open the file.  
1.  Right-click anywhere.  
1.  Select **Mark as Library code**.  

> ##### Figure 12  
> Marking a script from the **Editor** pane  
> ![Marking a script from the Editor pane][ImageMarkEditorPane]  

### Mark a script from the Call Stack pane  

To mark a script from the **Call Stack** pane:  

1.  Right-click on a function from the script.  
1.  Select **Mark as Library code**.  

> ##### Figure 13  
> Marking a script from the **Call Stack** pane  
> ![Marking a script from the Call Stack pane][ImageMarkCallStackPane]  

### Mark a script from Settings  

To mark a single script or pattern of scripts from Settings:  

1.  Open [Settings][DevToolsCustomize].  
1.  Go to the **Library code** tab.  
1.  Click **Add pattern**.  
1.  Enter the script name or a regex pattern of script names to mark.  
1.  Click **Add**.  

> ##### Figure 14  
> Marking a script from Settings  
> ![Marking a script from Settings][ImageMarkScriptSettings]  

## Run snippets of debug code from any page   

If you find yourself running the same debug code in the Console over and over, consider Snippets.  Snippets are executable scripts that you author, store, and run within DevTools.  

See [Run Snippets of Code From Any Page][DevToolsJavascriptSnippets] to learn more.  

## Watch the values of custom JavaScript expressions   

Use the **Watch** pane to watch the values of custom expressions.  You may watch any valid JavaScript expression.  

> ##### Figure 15  
> The **Watch** pane  
> ![The Watch pane][ImageWatchPane]  

*   Click **Add Expression** ![Add Expression][ImageAddExpressionIcon] to create a new watch expression.  
*   Click **Refresh** ![Refresh][ImageRefreshIcon] to refresh the values of all existing expressions.  Values automatically refresh while stepping through code.  
*   Hover over an expression and click **Delete Expression** ![Delete Expression][ImageDeleteExpressionIcon] to delete it.  

## Make a minified file readable   

Click **Format** ![Format][ImageFormatIcon] to make a minified file human-readable.  

> ##### Figure 16  
> The **Format** button  
> ![The Format button][ImageFormat]  

## Edit a script   

When fixing a bug, you often want to test out some changes to your JavaScript code.  You do not need to make the changes in an external browser and then reload the page.  You may edit your script in DevTools.  

To edit a script:  

1.  Open the file in the **Editor** pane of the **Sources** panel.  
1.  Make your changes in the **Editor** pane.  
1.  Press `Ctrl`+`S` \(Windows\) or `Command`+`S` \(macOS\) to save.  DevTools patches the entire JS file into Microsoft Edge JavaScript engine.  

> ##### Figure 17  
> The **Editor** pane  
> ![The Editor pane][ImageEditorPane]  

## Disable JavaScript   

See [Disable JavaScript With Microsoft Edge DevTools][DevToolsJavascriptDisable].  

<!--## Feedback   -->  



<!-- image links -->  

[ImageStepOverIcon]: images/step-over-icon.msft.png  
[ImageStepIntoIcon]: images/step-into-icon.msft.png  
[ImageStepOutIcon]: images/step-out-icon.msft.png  
[ImageResumeScriptExecutionIcon]: images/resume-script-execution-icon.msft.png  
[ImageForceScriptExecutionIcon]: images/force-script-execution-icon.msft.png  
[ImageAddExpressionIcon]: images/add-expression-icon.msft.png  
[ImageRefreshIcon]: images/refresh-icon.msft.png  
[ImageDeleteExpressionIcon]: images/delete-expression-icon.msft.png  
[ImageFormatIcon]: images/format-icon.msft.png  

[ImageSelectingStepOver]: images/source-page-debugger-step-over-next-function-call.msft.png "Figure 1: Selecting Step over"  
[ImageSelectingStepInto]: images/source-page-debugger-step-into-next-function-call.msft.png "Figure 2: Selecting Step into"  
[ImageSelectingStepOut]: images/source-page-debugger-step-out-of-current-function.msft.png "Figure 3: Selecting Step out"  
[ImageSelectingContinueToHere]: images/source-page-continue-to-here.msft.png "Figure 4: Selecting Continue to here"  
[ImageSelectingRestartFrame]: images/source-page-debugger-restart-frame.msft.png "Figure 5: Selecting Restart Frame"  
[ImageSelectingResumeScriptExecution]: images/resume-script-execution-outline.msft.png "Figure 6: Selecting Resume script execution"  
[ImageSelectingForceScriptExecution]: images/selecting-force-script-execution.msft.png "Figure 7: Selecting Force script execution"  
[ImageThreadsPane]: images/threads.msft.png "Figure 8: The Threads pane"  
[ImageScopePane]: images/scope.msft.png "Figure 9: The Scope pane"  
[ImageCallStackPane]: images/glitch-debug-js-sources-get-started-inputs-are-empty.msft.png "Figure 10: The Call Stack pane"  
[ImageSelectingCopyStackTrace]: images/glitch-debug-js-sources-get-started-inputs-are-empty-copy-stack-trace.msft.png "Figure 11: Selecting Copy Stack Trace"  
[ImageMarkEditorPane]: images/glitch-debug-js-sources-get-started-inputs-are-empty-editor-mark-as-library-code.msft.png "Figure 12: Marking a script from the Editor pane"  
[ImageMarkCallStackPane]: images/glitch-debug-js-sources-get-started-inputs-are-empty-call-stack-mark-as-library-code.msft.png "Figure 13: Marking a script from the Call Stack pane"  
[ImageMarkScriptSettings]: images/framework-library-code.msft.png "Figure 14: Marking a script from Settings"  
[ImageWatchPane]: images/watch.msft.png "Figure 15: The Watch pane"  
[ImageFormat]: images/sources-html-non-minified.msft.png "Figure 16: The Format button"  
[ImageEditorPane]: images/sources-html-minified.msft.png "Figure 17: The Editor pane"  

<!-- links -->  

[DevToolsJavascriptDisable]: disable.md "Disable JavaScript With Microsoft Edge DevTools"  
[DevToolsJavascriptGetStarted]: index.md "Get Started with Debugging JavaScript in Microsoft Edge DevTools"  
[DevToolsJavascriptSnippets]: snippets.md "Run Snippets Of JavaScript On Any Page With Microsoft Edge DevTools"  

[DevToolsCustomize]: ../customize/index.md "Customize Microsoft Edge DevTools"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/javascript/reference) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
