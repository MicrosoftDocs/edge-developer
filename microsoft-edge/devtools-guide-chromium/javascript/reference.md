---
description: Discover new debugging workflows in this comprehensive reference of Microsoft Edge DevTools debugging features.
title: JavaScript debugging reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/08/2021
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

# JavaScript debugging reference  

Discover new debugging workflows with the following comprehensive reference of Microsoft Edge DevTools debugging features.  

To learn the basics of debugging, navigate to [Get Started With Debugging JavaScript In Microsoft Edge DevTools][DevToolsJavascriptGetStarted].  

## Pause code with breakpoints  

Set a breakpoint so that you are able to pause your code in the middle of the runtime.  

To learn how to set breakpoints, navigate to [Pause Your Code With Breakpoints][DevToolsJavascriptBreakpoints].  

## Step through code  

Once your code is paused, step through it, one line at a time, investigating control flow and property values along the way.  

### Step over line of code  

When paused on a line of code containing a function that is not relevant to the problem you are debugging, choose the **Step over** \(![Step over](../media/step-over-icon.msft.png)\) button to run the function without stepping into it.  

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

When paused on a line of code containing a function call that is related to the problem you are debugging, choose the **Step into** \(![Step into](../media/step-into-icon.msft.png)\) button to investigate that function further.  

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

When paused inside of a function that is not related to the problem you are debugging, choose the **Step out** \(![Step out](../media/step-out-icon.msft.png)\) button to run the rest of the code of the function.  

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

When debugging a long function, there may be a lot of code that is not related to the problem you are debugging.  

You may choose to step through all the lines, but that is tedious.  You may choose to set a line-of-code breakpoint on the line in which you are interested and then choose the **Resume Script Execution** \(![Resume Script Execution](../media/resume-script-run-icon.msft.png)\) button, but there is a faster way.  

Hover on the line of code in which you are interested, open the contextual menu \(right-click\), and choose **Continue to here**.  DevTools runs all of the code up to that point, and then pauses on that line.  

:::image type="complex" source="../media/javascript-source-page-continue-to-here.msft.png" alt-text="Choose Continue to here" lightbox="../media/javascript-source-page-continue-to-here.msft.png":::
   Choose **Continue to here**  
:::image-end:::  

### Restart the top function of the call stack  

To pause on the first line of the top function in your call stack, while paused on a line of code, hover anywhere in the **Call Stack** pane, open the contextual menu \(right-click\), and choose **Restart Frame**.  The top function is the last function that was run.  

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

You are paused on `A`.  After choosing **Restart Frame**, you should be paused on `B`, without ever setting a breakpoint or choosing **Resume script execution**.  

:::image type="complex" source="../media/javascript-source-page-debugger-restart-frame.msft.png" alt-text="Choose Restart Frame" lightbox="../media/javascript-source-page-debugger-restart-frame.msft.png":::
   Choose **Restart Frame**  
:::image-end:::  

### Resume script runtime  

To continue the runtime after a pause of your script, choose the **Resume Script Execution** \(![Resume Script Execution](../media/resume-script-run-icon.msft.png)\) button.  DevTools runs the script up until the next breakpoint, if any.  

:::image type="complex" source="../media/javascript-sources-get-started-js-resume-script-runtime.msft.png" alt-text="Choose Resume script execution" lightbox="../media/javascript-sources-get-started-js-resume-script-runtime.msft.png":::
   Choose **Resume script execution**  
:::image-end:::  

#### Force script runtime  

To ignore all breakpoints and force your script to resume running, choose and hold the **Resume Script Execution** \(![Resume Script Execution](../media/resume-script-run-icon.msft.png)\) button and then choose the **Force script execution** \(![Force script execution](../media/force-script-run-icon.msft.png)\) button.  

:::image type="complex" source="../media/javascript-sources-get-started-js-force-script-runtime.msft.png" alt-text="Choose Force script execution" lightbox="../media/javascript-sources-get-started-js-force-script-runtime.msft.png":::
   Choose **Force script execution**  
:::image-end:::  

### Change thread context  

When working with web workers or service workers, choose on a context listed in the **Threads** pane to switch to that context.  The blue arrow icon represents which context is currently selected.  

:::image type="complex" source="../media/javascript-sources-main-min-js-threads.msft.png" alt-text="The Threads pane" lightbox="../media/javascript-sources-main-min-js-threads.msft.png":::
   The **Threads** pane  
:::image-end:::  

For example, suppose that you are paused on a breakpoint in both your main script and your service worker script.  You want to view the local and global properties for the service worker context, but the **Sources** panel is showing the main script context.  By choosing on the service worker entry in the **Threads** pane, you should be able to switch to that context.  

## View and edit local, closure, and global properties  

While paused on a line of code, use the **Scope** pane to view and edit the values of properties and variables in the local, closure, and global scopes.  

*   Double-click a property value to change it.  
*   Non-enumerable properties are greyed out.  

:::image type="complex" source="../media/javascript-sources-get-started-js-scope.msft.png" alt-text="The Scope pane" lightbox="../media/javascript-sources-get-started-js-scope.msft.png":::
   The **Scope** pane  
:::image-end:::  

## View the current call stack  

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

to copy the current call stack to the clipboard, hover anywhere in the **Call Stack** pane, open the contextual menu \(right-click\), and choose **Copy stack trace**.  

:::image type="complex" source="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty-copy-stack-trace.msft.png" alt-text="Choose Copy Stack Trace" lightbox="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty-copy-stack-trace.msft.png":::
   Choose **Copy Stack Trace**  
:::image-end:::  

The following code snippet is an example of the output.  

```javascript
getNumber1 (get-started.js:35)
inputsAreEmpty (get-started.js:22)
onChoose (get-started.js:15)
```  

## Ignore a script or pattern of scripts  

Mark a script as Library code when you want to ignore that script while debugging.  When marked as Library code, a script is obscured in the **Call Stack** pane, and you never step into the functions of the script when you step through your code.  

The following code snippet is an example for you to step-through.  

```javascript
function animate() {
    prepare();
    lib.doFancyStuff(); // A
    render();
}
```  

`A` is a third-party library that you trust.  If you are confident that the problem you are debugging is not related to the third-party library, then it makes sense to mark the script as **Library code**.  

### Mark a script as Library code from the Editor pane  

Complete the following actions to mark a script as **Library code** from the **Editor** pane.  

1.  Open the file.  
1.  Hover anywhere and open the contextual menu \(right-click\).  
1.  Choose **Mark as Library code**.  
    
    :::image type="complex" source="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty-editor-mark-as-library-code.msft.png" alt-text="Mark a script as Library code from the Editor pane" lightbox="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty-editor-mark-as-library-code.msft.png":::
       Mark a script as **Library code** from the **Editor** pane  
    :::image-end:::  
    
### Mark a script as Library code from the Call Stack pane  

Complete the following actions to mark a script as **Library code** from the **Call Stack** pane.  

1.  Hover on a function from the script and open the contextual menu \(right-click\).  
1.  Choose **Mark as Library code**.  
    
    :::image type="complex" source="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty-call-stack-mark-as-library-code.msft.png" alt-text="Mark a script as Library code from the Call Stack pane" lightbox="../media/javascript-glitch-debug-js-sources-get-started-inputs-are-empty-call-stack-mark-as-library-code.msft.png":::
       Mark a script as **Library code** from the **Call Stack** pane  
    :::image-end:::  
    
### Mark a script as Library code from Settings  

Complete the following actions to mark a single script or pattern of scripts from **Settings**.  

1.  Open [Settings][DevToolsCustomize].  
1.  Navigate to the **Library code** setting.  
1.  Choose **Add pattern**.  
1.  Enter the script name or a regex pattern of script names to mark as **Library code**.  
1.  Choose **Add**.  
    
    :::image type="complex" source="../media/javascript-framework-library-code.msft.png" alt-text="Mark a script as Library code from Settings" lightbox="../media/javascript-framework-library-code.msft.png":::
       Mark a script as **Library code** from **Settings**  
    :::image-end:::  
    
## Run snippets of debug code from any page  

If you find yourself running the same debug code in the Console over and over, consider Snippets.  Snippets are runtime scripts that you author, store, and run within DevTools.  

To learn more, navigate to [Run Snippets of Code From Any Page][DevToolsJavascriptSnippets].  

## Watch the values of custom JavaScript expressions  

Use the **Watch** pane to watch the values of custom expressions.  You may watch any valid JavaScript expression.  

:::image type="complex" source="../media/javascript-sources-get-started-js-watch.msft.png" alt-text="The Watch pane" lightbox="../media/javascript-sources-get-started-js-watch.msft.png":::
   The **Watch** pane  
:::image-end:::  

*   Choose the **Add Expression** \(![Add Expression](../media/add-expression-icon.msft.png)\) button to create a new watch expression.  
*   Choose the **Refresh** \(![Refresh](../media/refresh-icon.msft.png)\) button to refresh the values of all existing expressions.  Values automatically refresh while stepping through code.  
*   Hover on an expression and choose the **Delete Expression** \(![Delete Expression](../media/delete-expression-icon.msft.png)\) button to delete it.  

## Make a minified file readable  

Choose the **Format** \(![Format](../media/format-icon.msft.png)\) button to make a minified file human-readable.  

:::image type="complex" source="../media/javascript-sources-html-non-minified.msft.png" alt-text="The Format button" lightbox="../media/javascript-sources-html-non-minified.msft.png":::
   The **Format** button  
:::image-end:::  

## Edit a script  

When fixing a bug, you often want to test out some changes to your JavaScript code.  You do not need to make the changes in an external editor or IDE and then refresh the page.  You may edit your script in DevTools.  

Complete the following actions to edit a script.  

1.  Open the file in the **Editor** pane of the **Sources** panel.  
1.  Make your changes in the **Editor** pane.  
1.  Select `Ctrl`+`S` \(Windows, Linux\) or `Command`+`S` \(macOS\) to save.  DevTools patches the entire JS file into the JavaScript engine of Microsoft Edge.  
    
    :::image type="complex" source="../media/javascript-sources-html-minified.msft.png" alt-text="The Editor pane" lightbox="../media/javascript-sources-html-minified.msft.png":::
       The **Editor** pane  
    :::image-end:::  
     
## Disable JavaScript  

Navigate to [Disable JavaScript with Microsoft Edge DevTools][DevToolsJavascriptDisable].  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevToolsJavascriptBreakpoints]: ./breakpoints.md "How to pause your code with breakpoints in Microsoft Edge DevTools | Microsoft Docs"  
[DevToolsJavascriptDisable]: ./disable.md "Disable JavaScript with Microsoft Edge DevTools | Microsoft Docs"  
[DevToolsJavascriptGetStarted]: ./index.md "Get started with debugging JavaScript in Microsoft Edge DevTools | Microsoft Docs"  
[DevToolsJavascriptSnippets]: ./snippets.md "Run snippets of JavaScript on any page with Microsoft Edge DevTools | Microsoft Docs"  
[DevToolsCustomize]: ../customize/index.md "Customize Microsoft Edge DevTools | Microsoft Docs"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/javascript/reference) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
