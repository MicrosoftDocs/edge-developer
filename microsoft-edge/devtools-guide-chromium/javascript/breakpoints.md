---
title: How To Pause Your Code With Breakpoints In Microsoft Edge DevTools
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/20/2020
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->  







# How To Pause Your Code With Breakpoints In Microsoft Edge DevTools   



Use breakpoints to pause your JavaScript code.  This guide explains each type of breakpoint that is available in DevTools, as well as when to use and how to set each type.  For a hands-on tutorial of the debugging process, see [Get Started with Debugging JavaScript in Microsoft Edge DevTools][DevtoolsJavascriptIndex].  

## Overview of when to use each breakpoint type   

The most well-known type of breakpoint is line-of-code.  But line-of-code breakpoints may be inefficient to set, especially if you do not know exactly where to look, or if you are working with a large codebase.  You may save yourself time when debugging by knowing how and when to use the other types of breakpoints.  

| Breakpoint Type | Use This When You Want To Pause...  |  
|:--- |:--- |  
| [Line-of-code](#line-of-code-breakpoints) | On an exact region of code.  |  
| [Conditional line-of-code](#conditional-line-of-code-breakpoints) | On an exact region of code, but only when some other condition is true.  |  
| [DOM](#dom-change-breakpoints) | On the code that changes or removes a specific DOM node, or the children.  |  
| [XHR](#xhrfetch-breakpoints) | When an XHR URL contains a string pattern.  |  
| [Event listener](#event-listener-breakpoints) | On the code that runs after an event, such as `click`, runs.  |  
| [Exception](#exception-breakpoints) | On the line of code that is throwing a caught or uncaught exception.  |  
| [Function](#function-breakpoints) | Whenever a specific command, function, or method is run.  |  

## Line-of-code breakpoints   

Use a line-of-code breakpoint when you know the exact region of code that you need to investigate.  DevTools **always** pauses before this line of code is run.  

To set a line-of-code breakpoint in DevTools:  

1.  Click the **Sources** tab.  
1.  Open the file containing the line of code on which you want to break.  
1.  Go the line of code.  
1.  To the left of the line of code is the line number column.  Click on it.  A red icon appears next to the line number column.  

> ##### Figure 1  
> A line-of-code breakpoint set on line 30  
> ![A line-of-code breakpoint][ImageLocBreakpoint]  

### Line-of-code breakpoints in your code   

Run the `debugger` method from your code to pause on that line.  This is equivalent to a [line-of-code breakpoint](#line-of-code-breakpoints), except that the breakpoint is set in your code, not in the DevTools UI.  

```javascript
console.log('a');
console.log('b');
debugger;
console.log('c');
```  

### Conditional line-of-code breakpoints   

Use a conditional line-of-code breakpoint when you know the exact region of code that you need to investigate, but you want to pause only when some other condition is true.  

To set a conditional line-of-code breakpoint:  

1.  Click the **Sources** tab.  
1.  Open the file containing the line of code on which you want to break.  
1.  Go the line of code.  
1.  To the left of the line of code is the line number column.  Right-click the line number.  
1.  Select **Add conditional breakpoint**.  A dialog displays underneath the line of code.  
1.  Enter your condition in the dialog.  
1.  Press `Enter` to activate the breakpoint.  An icon next to the line number column.  

> ##### Figure 2  
> A conditional line-of-code breakpoint set on line 34  
> ![A conditional line-of-code breakpoint][ImageConditionalLocBreakpoint]  

### Manage line-of-code breakpoints   

Use the **Breakpoints** pane to disable or remove line-of-code breakpoints from a single location.  

> ##### Figure 3  
> The **Breakpoints** panel showing two line-of-code breakpoints: one on line `16` of `get-started.js`, another on line `33`  
> ![The Breakpoints panel][ImageBreakpointsPanel]  

*   Check the checkbox next to an entry to disable that breakpoint.  
*   Right-click an entry to remove that breakpoint.  
*   Right-click anywhere in the **Breakpoints** pane to deactivate all breakpoints, disable all breakpoints, or remove all breakpoints.  Disabling all breakpoints is equivalent to unchecking each one.  Deactivating all breakpoints instructs DevTools to ignore all line-of-code breakpoints, but to also maintain the enabled state so that each are in the same state as before when you reactivate each one.  

> ##### Figure 4  
> Deactivated breakpoints in the **Breakpoints** pane are disabled and transparent  
> ![Deactivated breakpoints in the Breakpoints pane][ImageDeactivatedBreakpoints]  

## DOM change breakpoints   

Use a DOM change breakpoint when you want to pause on the code that changes a DOM node or the children.  

To set a DOM change breakpoint:  

1.  Click the **Elements** tab.  
1.  Go the element on which you want to set the breakpoint.  
1.  Right-click the element.  
1.  Hover over **Break on**, then select **Subtree modifications**, **Attribute modifications**, or **Node removal**.  

> ##### Figure 5  
> The context menu for creating a DOM change breakpoint  
> ![The context menu for creating a DOM change breakpoint][ImageDomChangeBreakpoint]  

### Types of DOM change breakpoints   

*   **Subtree modifications**.  Triggered when a child of the currently-selected node is removed or added, or the contents of a child are changed.  Not triggered on child node attribute changes, or on any changes to the currently-selected node.  

*   **Attributes modifications**: Triggered when an attribute is added or removed on the currently-selected node, or when an attribute value changes.  

*   **Node Removal**: Triggered when the currently-selected node is removed.  

## XHR/Fetch breakpoints   

Use an XHR breakpoint when you want to break when the request URL of an XHR contains a specified string.  DevTools pauses on the line of code where the XHR runs the `send()` method.  

> [!NOTE]
> This feature also works with [Fetch API][MDNFetchApi] requests.  

One example of when this is helpful is when you see that your page is requesting an incorrect URL, and you want to quickly find the AJAX or Fetch source code that is causing the incorrect request.  

To set an XHR breakpoint:  

1.  Click the **Sources** tab.  
1.  Expand the **XHR Breakpoints** pane.  
1.  Click **Add breakpoint**.  
1.  Enter the string which you want to break on.  DevTools pauses when this string is present anywhere in an XHR request URL.  
1.  Press `Enter` to confirm.  

> ##### Figure 6  
> Creating an XHR breakpoint in the **XHR Breakpoints** for any request that contains `org` in the URL  
> ![Creating an XHR breakpoint][ImageXhrBreakpoint]  

## Event listener breakpoints 

Use event listener breakpoints when you want to pause on the event listener code that runs after an event is fired.  You are able to select specific events, such as `click`, or categories of events, such as all mouse events.  

1.  Click the **Sources** tab.  
1.  Expand the **Event Listener Breakpoints** pane.  DevTools shows a list of event categories, such as **Animation**.  
1.  Check one of these categories to pause whenever any event from that category is fired, or expand the category and check a specific event.  

> ##### Figure 7  
> Creating an event listener breakpoint for `deviceorientation`  
> ![Creating an event listener breakpoint][ImageEventListenerBreakpoint]  

## Exception breakpoints   

Use exception breakpoints when you want to pause on the line of code that is throwing a caught or uncaught exception.  

1.  Click the **Sources** tab.  
1.  Click **Pause on exceptions** ![Pause on exceptions][ImagePauseOnExceptionsIcon].  The icon turns blue when enabled.  
    
    > ##### Figure 8  
    > The **Pause on exceptions** button  
    > ![The Pause on exceptions button][ImagePauseExceptionsHighlight]  

1.  **Optional**. Check the **Pause On Caught Exceptions** checkbox if you also want to pause on caught exceptions, in addition to uncaught ones.  

> ##### Figure 9  
> Paused on an uncaught exception  
> ![Paused on an uncaught exception][ImageUncaughtException]  

## Function breakpoints   

Run the `debug(method)` method, where `method` is the command, function, or method you want to debug, when you want to pause whenever a specific function is run.  You may insert `debug()` into your code (like a `console.log()` statement) or run the method from the DevTools Console.  `debug()` is equivalent to setting a [line-of-code breakpoint](#line-of-code-breakpoints) on the first line of the function.  

```javascript
function sum(a, b) {
    let result = a + b; // DevTools pauses on this line.
    return result;
}
debug(sum); // Pass the function object, not a string.
sum();
```  

### Make sure the target function is in scope   

DevTools throws a `ReferenceError` if the function you want to debug is not in scope.  

```javascript
(function () {
    function hey() {
        console.log('hey');
    }
    function yo() {
        console.log('yo');
    }
    debug(yo); // This works.
    yo();
})();
debug(hey); // This does not work.  hey() is out of scope.
```  

Ensuring the target function is in scope is tricky if you are running the `debug()` method from the DevTools Console.  Here is one strategy:  

1.  Set a [line-of-code breakpoint](#line-of-code-breakpoints) somewhere where the function is in scope.
1.  Trigger the breakpoint.  
1.  Run the `debug()` method in the DevTools Console while the code is still paused on your line-of-code breakpoint.  

 



<!-- image links -->  

[ImagePauseOnExceptionsIcon]: images/pause-on-exceptions-icon.msft.png  

[ImageLocBreakpoint]: images/sources-page-js-breakpoint-30.msft.png "Figure 1: A line-of-code breakpoint"  
[ImageConditionalLocBreakpoint]: images/sources-page-js-conditional-breakpoint.msft.png "Figure 2: A conditional line-of-code breakpoint"  
[ImageBreakpointsPanel]: images/sources-page-js-breakpoints-16-33.msft.png "Figure 3: The Breakpoints panel"  
[ImageDeactivatedBreakpoints]: images/sources-page-js-breakpoints-deactivate-breakpoints.msft.png "Figure 4: Deactivated breakpoints in the Breakpoints pane"  
[ImageDomChangeBreakpoint]: images/elements-break-on-subtree-modifications.msft.png "Figure 5: The context menu for creating a DOM change breakpoint"  
[ImageXhrBreakpoint]: images/sources-page-js-xhr-fetch-breakpoints-org.msft.png "Figure 6: Creating an XHR breakpoint"  
[ImageEventListenerBreakpoint]: images/sources-page-js-event-listener-breakpoints-device-deviceorientation.msft.png "Figure 7: Creating an event listener breakpoint"  
[ImagePauseExceptionsHighlight]: images/sources-page-js-pause-on-exceptions.msft.png "Figure 8: The Pause on exceptions button"  
[ImageUncaughtException]: images/sources-page-js-paused-on-exception.msft.png "Figure 9: Paused on an uncaught exception"  

<!-- links -->  

[DevtoolsJavascriptIndex]: index.md "Get Started with Debugging JavaScript in Microsoft Edge DevTools"  

[MDNFetchApi]: https://developer.mozilla.org/docs/Web/API/Fetch_API "Fetch API | MDN"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  
[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: http://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
