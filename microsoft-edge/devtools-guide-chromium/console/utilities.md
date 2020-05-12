---
title:  Console Utilities API Reference
author:  MSEdgeTeam
ms.author:  msedgedevrel
ms.date: 04/24/2020
ms.topic:  article
ms.prod:  microsoft-edge
keywords:  microsoft edge, web development, f12 tools, devtools
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





# Console Utilities API Reference   



The Console Utilities API contains a collection of convenience commands for performing common tasks:  selecting and inspecting DOM elements, displaying data in readable format, stopping and starting the profiler, and monitoring DOM events.  

> [!WARNING]
> The following commands only work in the Microsoft Edge DevTools Console.  The commands do not work if run from your scripts.  

Looking for `console.log()`, `console.error()`, and the rest of the `console.*` methods?  See [Console API Reference][DevToolsConsoleApi].  

## Recently Evaluated Expression  

```console
$_
```  

Returns the value of the most recently evaluated expression.  

In [Figure 1](#figure-1), a simple expression \(`2 + 2`\) is evaluated.  The `$_` property is then evaluated, which contains the same value.  

> ##### Figure 1  
> `$_` is the most recently evaluated expression  
> ![$_ is the most recently evaluated expression][ImageRecentExpression]  

In [Figure 2](#figure-2), the evaluated expression initially contains an array of names.  Evaluating `$_.length` to find the length of the array, the value stored in `$_` changes to become the latest evaluated expression, `4`.  

> ##### Figure 2  
> `$_` changes when new commands are evaluated  
> ![$_ changes when new commands are evaluated][ImageChangedRecentExpression]  

## Recently Selected Element Or JavaScript Object  

```console
$0
```  

Returns the most recently selected element or JavaScript object.  `$1` returns the second most recently selected one, and so on.  The `$0`, `$1`, `$2`, `$3`, and `$4` commands work as a historical reference to the last five DOM elements inspected within the **Elements** panel or the last five JavaScript heap objects selected in the **Memory** panel.  

```console
$1
```  

```console
$2
```  

```console
$3
```  

```console
$4
```  

In [Figure 3](#figure-3), an `img` element is selected in the **Elements** panel.  In the **Console** drawer, `$0` has been evaluated and displays the same element.  

> ##### Figure 3  
> The `$0`  
> ![The $0][ImageElement0]  

In [Figure 4](#figure-4), the image shows a different element selected in the same page.  The `$0` now refers to the newly selected element, while `$1` returns the previously selected one.  

> ##### Figure 4  
> The `$1`  
> ![The $1][ImageElement1]  

## Query Selector  

```console
$(selector, [startNode])
```  

Returns the reference to the first DOM element with the specified CSS selector.  This method is an alias for the [document.querySelector()][MDNDocumentQuerySelector] method.  

In [Figure 5](#figure-5), a reference to the first `<img>` element in the document is returned.  

> ##### Figure 5  
> The `$('img')`  
> ![The $('img')][ImageElementImg]  

Right-click on the returned result and select **Reveal in Elements Panel** to find it in the DOM, or **Scroll in to View** to show it on the page.  

In [Figure 6](#figure-6), a reference to the currently selected element is returned and the src property is displayed.  

> ##### Figure 6  
> The `$('img').src`  
> ![The $('img').src][ImageElementImgSource]  

This method also supports a second parameter, startNode, that specifies an "element" or Node from which to search for elements.  The default value of this parameter is `document`.  

In [Figure 7](#figure-7), the first `img` element is found after the `title--image` and displays the `src` properly is returned.  

> ##### Figure 7  
> The $('img', document.querySelector('title--image')).src  
> ![The $('img', document.querySelector('title--image')).src][ImageElementImgNodeSource]  

> [!NOTE]
> If you are using a library such as jQuery that uses `$`, this functionality is overwritten, and `$` corresponds to the implementation from that library.  

## Query Selector All  

```console
$$(selector, [startNode])
```  

Returns an array of elements that match the specified CSS selector.  This method is equivalent to calling the [document.querySelectorAll()][MDNDocumentQuerySelectorAll] method.  

In [Figure 8](#figure-8), use `$$()` to create an array of all `<img>` elements in the current document and display the value of the `src` property for each element.  

```console
var images = $$('img');
for (each in images) {
    console.log(images[each].src);
}
```  

> ##### Figure 8  
> Using `$$()` to select all images in the document and display the sources  
> ![Using $$() to select all images in the document and display the sources][ImageArrayElementImgSource]  

This method also supports a second parameter, startNode, that specifies an element or Node from which to search for elements.  The default value of this parameter is `document`.  

In [Figure 9](#figure-9), a modified version of [Figure 8](#figure-8) uses `$$()` to create an array of all `<img>` elements that appear in the current document after the selected Node.  

```console
var images = $$('img', document.querySelector(`title--image`));
for (each in images) {
   console.log(images[each].src);
}
```  

> ##### Figure 9  
> Using `$$()` to select all images that appear after the specified `<div>` element in the document and display the sources  
> ![Using $$() to select all images that appear after the specified <div> element in the document and display the sources][ImageArrayElementImgNodeSource]  

> [!NOTE]
> Press `Shift`+`Enter` in the console to start a new line without running the script.  

## XPath  

```console
$x(path, [startNode])
```  

Returns an array of DOM elements that match the specified XPath expression.  

In [Figure 10](#figure-10), all of the `<p>` elements on the page are returned.  

```console
$x("//p")
```  

> ##### Figure 10  
> Using an XPath selector  
> ![Using an XPath selector][ImageArrayXpath]  

In [Figure 11](#figure-11), all of the `<p>` elements that contain `<a>` elements are returned.  

```console
$x("//p[a]")
```  

> ##### Figure 11  
> Using a more complicated XPath selector  
> ![Using a more complicated XPath selector][ImageArrayXpathChild]  

Similar to the other selector commands, `$x(path)` has an optional second parameter, `startNode`, that specifies an element or Node from which to search for elements.  

> ##### Figure 12  
> Using an XPath selector with `startNode`  
> ![Using an XPath selector with startNode][ImageArrayXpathNode]  

## clear  

```console
clear()
```  

Clears the console of the history.  

```console
clear()
```  

## copy  

```console
copy(object)
```  

The `copy(object)` method copies a string representation of the specified object to the clipboard.  

```console
copy($0)
```  

## debug  

```console
debug(method)
```  

>[!NOTE]
> The [Chromium issue #1050237][MonorailIssue1050237] is tracking a bug with the `debug()` function.  If you encounter this issue, try [using breakpoints][DevtoolsJavascriptBreakpoints] instead.  

When you request the specified method, the debugger is invoked and breaks inside the method on the **Sources** panel allowing you to step through the code and debug it.  

```console
debug("debug");
```  

> ##### Figure 13  
> Breaking inside a method with `debug()`  
> ![Breaking inside a method with debug()][ImageDebugMethod]  

Use `undebug(method)` to stop breaking on the method, or use the UI to disable all breakpoints.  

For more information on breakpoints, see [Pause Your Code With Breakpoints][DevToolsJavascriptBreakpoints].  

## dir  

```console
dir(object)
```  

Displays an object-style listing of all of the properties for the specified object.  This method is an alias for the [console.dir()][MDNConsoleDir] method.  

Evaluate `document.head` in the Console to display the HTML between the `<head>` and `</head>` tags.  In [Figure 14](#figure-14), an object-style listing is displayed after using `console.dir()` in the Console.  

```console
document.head;
dir(document.head);
```  

> ##### Figure 14  
> Logging `document.head` with `dir()` method  
> ![Logging document.head with dir() method][ImageLogObject]  

For more information, see the [`console.dir()`][DevToolsConsoleApiConsoleDirObject] entry in the Console API.  

## dirxml  

```console
dirxml(object)
```  

Prints an XML representation of the specified object, as seen in the **Elements** tab.  This method is equivalent to the [console.dirxml()][MDNConsoleDirxml] method.  

## inspect  

```console
inspect(object/method)
```  

Opens and selects the specified element or object in the appropriate panel:  either the **Elements** panel for DOM elements or the **Memory** panel for JavaScript heap objects.  

In [Figure 15](#figure-15), the `document.body` opens in the **Elements** panel.  

```console
inspect(document.body);
```  

> ##### Figure 15  
> Inspecting an element with `inspect()`  
> ![Inspecting an element with inspect()][ImageInspectElement]  

When passing a method to inspect, the method opens the document up in the **Sources** panel for you to inspect.  

## getEventListeners  

```console
getEventListeners(object)
```  

Returns the event listeners registered on the specified object.  The return value is an object that contains an array for each registered event type \(such as `click` or `keydown`\).  The members of each array are objects that describe the listener registered for each type.  In [Figure 16](#figure-16), all of the event listeners registered on the document object are listed.  

```console
getEventListeners(document);
```  

> ##### Figure 16  
> Output of using `getEventListeners(document)`  
> ![Output of using getEventListeners(document)][ImageGetListeners]  

If more than one listener is registered on the specified object, then the array contains a member for each listener.  In [Figure 16](#figure-16), there are two event listeners registered on the document element for the `click` event.  

> ##### Figure 17  
> Multiple listeners  
> ![Multiple listeners][ImageMultipleListeners]  

You may further expand each of the following objects to explore the properties.  

> ##### Figure 18  
> Expanded view of listener object  
> ![Expanded view of listener object][ImageListenersExpanded]  

## keys  

```console
keys(object)
```  

Returns an array containing the names of the properties belonging to the specified object.  To get the associated values of the same properties, use `values()`.  

For example, suppose your application defined the following object.  

```console
var player1 = { "name":  "Ted", "level": 42 }
```  

In [Figure 19](#figure-19), the result assumes `player1` was defined in the global namespace \(for simplicity\) prior to typing `keys(player1)` and `values(player1)` in the console.  

```console
keys(player1)
```  

```console
values(player1)
```  

> ##### Figure 19  
> The `keys()` and `values()` commands  
> ![The keys() and values() commands][ImageConsoleKeysValues]  

## monitor  

```console
monitor(method)
```  

Logs a message to the console that indicates the method name along with the arguments that are passed to the method when it was called.  

```console
function sum(x, y) {
    return x + y;
}
monitor(sum);
```  

> ##### Figure 20  
> The `monitor()` method  
> ![The monitor() method][ImageConsoleMonitorSum]  

Use `unmonitor(method)` to cease monitoring.  

## monitorEvents  

```console
monitorEvents(object[, events])
```  

When one of the specified events occurs on the specified object, the event object is logged to the console.  You may specify a single event to monitor, an array of events, or one of the generic events types that are mapped to a predefined collection of events.  See [Figure 21](#figure-21).  

The following monitors all resize events on the window object.  

```console
monitorEvents(window, "resize");
```  

> ##### Figure 21  
> Monitoring window resize events  
> ![Monitoring window resize events][ImageMonitorResize]  

The following defines an array to monitor both `resize` and `scroll` events on the window object.  

```console
monitorEvents(window, ["resize", "scroll"]);
```  

You may also specify one of the available types of events, strings that map to predefined sets of events.  The table below displays the available event types and the associated event mappings.  

| Event type | Corresponding mapped events |  
|:--- |:--- |  
| `mouse` | "click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel" |  
| `key` | "keydown", "keypress", "keyup", "textInput" |  
| `touch` | "touchcancel", "touchend", "touchmove", "touchstart" |  
| `control` | "blur", "change", "focus", "reset", "resize", "scroll", "select", "submit", "zoom" |  

In [Figure 22](#figure-22), the `key` event type corresponding to `key` events on an input text field are currently selected in the **Elements** panel.  

```console
monitorEvents($0, "key");
```  

In [Figure 22](#figure-22) the sample output after typing a character in the text field is displayed.  

> ##### Figure 22  
> Monitoring key events  
> ![Monitoring key events][ImageMonitorKey]  

## profile  

```console
profile([name])
```  

Starts a JavaScript CPU profiling session with an optional name.  The [profileEnd()](#profileend) method completes the profile and displays the results in the **Memory** panel.  <!--See also [Speed Up JavaScript Runtime][DevToolsRenderingToolsJSRuntime].  -->  

1.  Run the `profile()` method to start profiling.  
    
    ```console
    profile("My profile")
    ```  
    
1.  Run the [profileEnd()](#profileend) method to stop profiling and display the results in the **Memory** panel.  

Profiles may also be nested.  In [Figure 23](#figure-23) the result is the same regardless of the order.  

```console
profile('A');
profile('B');
profileEnd('A');
profileEnd('B');
```  

> [!NOTE]
> Multiple CPU profiles may operate at the same time and you are not required to close-out each one in creation order.  

## profileEnd  

```console
profileEnd([name])
```  

Completes a JavaScript CPU profiling session and displays the results in the **Memory** panel.  You must be running the [profile()](#profile) method.  <!--See also [Speed Up JavaScript Runtime][DevToolsRenderingToolsJSRuntime].  -->  

1.  Run the [profile()](#profile) method to start profiling.  
1.  Run the `profileEnd()` method to stop profiling and display the results in the **Memory** panel.  
    
    ```console
    profileEnd("My profile")
    ```  

Profiles may also be nested.  In [Figure 23](#figure-23) the result is the same regardless of the order.  

```console
profile('A');
profile('B');
profileEnd('A');
profileEnd('B');
```  

The result appears as a Heap Snapshot in the **Memory** panel.  

> ##### Figure 23  
> Grouped profiles  
> ![Grouped profiles][ImageGroupedProfiles]  

> [!NOTE]
> Multiple CPU profiles may operate at the same time and you are not required to close-out each one in creation order.  

## table  

```console
table(data[, columns])
```  

Logs object data with table formatting based upon the data object in with optional column headings.  In [Figure 24](#figure-24), a list of names using a table in the console is displayed.  

```console
var names = {
    0:  {
        firstName:  "John",
        lastName:  "Smith"
    },
    1:  {
        firstName:  "Jane",
        lastName:  "Doe"
    }
};
table(names);
```  

> ##### Figure 24  
> The `table()` method  
> ![The table() method][ImageConsoleTable]  

## undebug  

```console
undebug(method)
```  

Stops the debugging of the specified method so that when the method is called, the debugger is no longer invoked.  

```console
undebug(getData);
```  

## unmonitor  

```console
unmonitor(method)
```  

Stops the monitoring of the specified method.  This is used in concert with the [monitor()](#monitor) method.  

```console
unmonitor(getData);
```  

## unmonitorEvents  

```console
unmonitorEvents(object[, events])
```  

Stops monitoring events for the specified object and events.  For example, the following stops all event monitoring on the window object.  

```console
unmonitorEvents(window);
```  

You may also selectively stop monitoring specific events on an object.  For example, the following code starts monitoring all `mouse` events on the currently selected element, and then stops monitoring `mousemove` events \(perhaps to reduce noise in the console output\).  

```console
monitorEvents($0, "mouse");
unmonitorEvents($0, "mousemove");
```  

## values  

```console
values(object)
```  

Returns an array containing the values of all properties belonging to the specified object.  

```console
values(object);
```  

<!--   -->  



<!-- image links -->  

[ImageRecentExpression]: /microsoft-edge/devtools-guide-chromium/media/console-arithmatic.msft.png "Figure 1: $_ is the most recently evaluated expression"  
[ImageChangedRecentExpression]: /microsoft-edge/devtools-guide-chromium/media/console-array-length.msft.png "Figure 2: $_ changes when new commands are evaluated"  
[ImageElement0]: /microsoft-edge/devtools-guide-chromium/media/console-image-highlighted-$0.msft.png "Figure 3: The $0"  
[ImageElement1]: /microsoft-edge/devtools-guide-chromium/media/console-image-highlighted-$1.msft.png "Figure 4: The $1"  
[ImageElementImg]: /microsoft-edge/devtools-guide-chromium/media/console-element-selector-image.msft.png "Figure 5: The $('img')"  
[ImageElementImgSource]: /microsoft-edge/devtools-guide-chromium/media/console-element-selector-image-source.msft.png "Figure 6: The $('img').src"  
[ImageElementImgNodeSource]: /microsoft-edge/devtools-guide-chromium/media/console-element-selector-image-filter-source.msft.png "Figure 7: The $('img', document.querySelector('title--image')).src"  
[ImageArrayElementImgSource]: /microsoft-edge/devtools-guide-chromium/media/console-element-selector-image-all.msft.png "Figure 8: Using $$() to select all images in the document and display the sources"  
[ImageArrayElementImgNodeSource]: /microsoft-edge/devtools-guide-chromium/media/console-element-selector-image-filter-all.msft.png "Figure 9: Using $$() to select all images that appear after the specified <div> element in the document and display the sources"  
[ImageArrayXpath]: /microsoft-edge/devtools-guide-chromium/media/console-array-xpath.msft.png "Figure 10: Using an XPath selector"  
[ImageArrayXpathChild]: /microsoft-edge/devtools-guide-chromium/media/console-array-xpath-sub-element.msft.png "Figure 11: Using a more complicated XPath selector"  
[ImageArrayXpathNode]: /microsoft-edge/devtools-guide-chromium/media/console-array-xpath-startnode.msft.png "Figure 12: Using an XPath selector with startNode"  
[ImageDebugMethod]: /microsoft-edge/devtools-guide-chromium/media/console-debug-text.msft.png "Figure 13: Breaking inside a method with debug()"  
[ImageLogObject]: /microsoft-edge/devtools-guide-chromium/media/console-dir-document-head-expanded.msft.png "Figure 14: Logging document.body with dir() method"  
[ImageInspectElement]: /microsoft-edge/devtools-guide-chromium/media/console-inspect-document-body.msft.png "Figure 15: Inspecting an element with inspect()"  
[ImageGetListeners]: /microsoft-edge/devtools-guide-chromium/media/console-elements-event-listeners-console-get-event-listeners-document.msft.png "Figure 16: Output of using getEventListeners(document)"  
[ImageMultipleListeners]: /microsoft-edge/devtools-guide-chromium/media/console-elements-event-listeners-console-get-event-listeners-document-expanded-1.msft.png "Figure 17: Multiple listeners"  
[ImageListenersExpanded]: /microsoft-edge/devtools-guide-chromium/media/console-elements-event-listeners-console-get-event-listeners-document-2.msft.png "Figure 18: Expanded view of listener object"  
[ImageConsoleKeysValues]: /microsoft-edge/devtools-guide-chromium/media/console-keys-values.msft.png "Figure 19: The keys() and values() commands"  
[ImageConsoleMonitorSum]: /microsoft-edge/devtools-guide-chromium/media/console-function-monitor-sum.msft.png "Figure 20: The monitor() method"  
[ImageMonitorResize]: /microsoft-edge/devtools-guide-chromium/media/console-monitor-events-resize-window.msft.png "Figure 21: Monitoring window resize events"  
[ImageMonitorKey]: /microsoft-edge/devtools-guide-chromium/media/console-monitor-events-type-t-y.msft.png "Figure 22: Monitoring key events"  
[ImageGroupedProfiles]: /microsoft-edge/devtools-guide-chromium/media/console-memory-multiple-cpu-profiles.msft.png "Figure 23: Grouped profiles"  
[ImageConsoleTable]: /microsoft-edge/devtools-guide-chromium/media/console-table-display.msft.png "Figure 24: The table() method"  

<!-- links -->  

[DevToolsConsoleApi]: /microsoft-edge/devtools-guide-chromium/console/api "Console API Reference"  
[DevToolsConsoleApiConsoleDirObject]: /microsoft-edge/devtools-guide-chromium/console/api#dir "dir - Console API Reference"  
[DevToolsJavascriptBreakpoints]: /microsoft-edge/devtools-guide-chromium/javascript/breakpoints "How To Pause Your Code With Breakpoints In Microsoft Edge DevTools"  
[DevToolsRenderingToolsJSRuntime]: /microsoft-edge/devtools-guide-chromium/rendering-tools/js-runtime "Speed Up JavaScript Runtime"  

[MDNConsoleDir]: https://developer.mozilla.org/docs/Web/API/Console/dir "Console.dir() | MDN"  
[MDNConsoleDirxml]: https://developer.mozilla.org/docs/Web/API/Console/dirxml "Console.dirxml() | MDN"  
[MDNDocumentQuerySelector]: https://developer.mozilla.org/docs/Web/API/Document/querySelector "Document.querySelector() | MDN"  
[MDNDocumentQuerySelectorAll]: https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll "Document.querySelectorAll() | MDN"  

[MonorailIssue1050237]: https://bugs.chromium.org/p/chromium/issues/detail?id=1050237 "Issue 1050237: debug(function) not working | Monorail"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/utilities) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
