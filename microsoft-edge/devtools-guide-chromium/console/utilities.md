---
title:  Console Utilities API Reference
author:  MSEdgeTeam
ms.author:  msedgedevrel
ms.date: 06/10/2020
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

In the following figure, a simple expression \(`2 + 2`\) is evaluated.  The `$_` property is then evaluated, which contains the same value.  

:::image type="complex" source="../media/console-arithmatic.msft.png" alt-text="$_ is the most recently evaluated expression" lightbox="../media/console-arithmatic.msft.png":::
   Figure 1:  `$_` is the most recently evaluated expression  
:::image-end:::  

In the following figure, the evaluated expression initially contains an array of names.  Evaluating `$_.length` to find the length of the array, the value stored in `$_` changes to become the latest evaluated expression, `4`.  

:::image type="complex" source="../media/console-array-length.msft.png" alt-text="$_ changes when new commands are evaluated" lightbox="../media/console-array-length.msft.png":::
   Figure 2:  `$_` changes when new commands are evaluated  
:::image-end:::  

## Recently Selected Element Or JavaScript Object  

```console
$0
```  

Returns the most recently selected element or JavaScript object.  `$1` returns the second most recently selected one, and so on.  The `$0`, `$1`, `$2`, `$3`, and `$4` commands work as a historical reference to the last five DOM elements inspected within the **Elements** panel or the last five JavaScript heap objects selected in the **Memory** panel.  

:::row:::
   :::column span="1":::
      ```console
      $0
      ```  
   :::column-end:::
   :::column span="1":::
      ```console
      $1
      ```  
   :::column-end:::
   :::column span="1":::
      ```console
      $2
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      ```console
      $3
      ```  
   :::column-end:::
   :::column span="1":::
      ```console
      $4
      ```  
   :::column-end:::
   :::column span="1":::
   :::column-end:::
:::row-end:::  

In the following figure, an `img` element is selected in the **Elements** panel.  In the **Console** drawer, `$0` has been evaluated and displays the same element.  

:::image type="complex" source="../media/console-image-highlighted-$0.msft.png" alt-text="The $0" lightbox="../media/console-image-highlighted-$0.msft.png":::
   Figure 3:  The `$0`  
:::image-end:::  

In the following figure, the image shows a different element selected in the same page.  The `$0` now refers to the newly selected element, while `$1` returns the previously selected one.  

:::image type="complex" source="../media/console-image-highlighted-$1.msft.png" alt-text="The $1" lightbox="../media/console-image-highlighted-$1.msft.png":::
   Figure 4:  The `$1`  
:::image-end:::  

## Query Selector  

```console
$(selector, [startNode])
```  

Returns the reference to the first DOM element with the specified CSS selector.  This method is an alias for the [document.querySelector()][MDNDocumentQuerySelector] method.  

In the following figure, a reference to the first `<img>` element in the document is returned.  

:::image type="complex" source="../media/console-element-selector-image.msft.png" alt-text="The $('img')" lightbox="../media/console-element-selector-image.msft.png":::
   Figure 5:  The `$('img')`  
:::image-end:::  

Hover on the returned result, open the contextual menu \(right-click\), and select **Reveal in Elements Panel** to find it in the DOM or **Scroll in to View** to show it on the page.  

In the following figure, a reference to the currently selected element is returned and the src property is displayed.  

:::image type="complex" source="../media/console-element-selector-image-source.msft.png" alt-text="The $('img').src" lightbox="../media/console-element-selector-image-source.msft.png":::
   Figure 6:  The `$('img').src`  
:::image-end:::  

This method also supports a second parameter, startNode, that specifies an "element" or Node from which to search for elements.  The default value of the parameter is `document`.  

In the following figure, the first `img` element is found after the `title--image` and displays the `src` properly is returned.  

:::image type="complex" source="../media/console-element-selector-image-filter-source.msft.png" alt-text="The $('img', document.querySelector('title--image')).src" lightbox="../media/console-element-selector-image-filter-source.msft.png":::
   Figure 7:  The `$('img', document.querySelector('title--image')).src`  
:::image-end:::  

> [!NOTE]
> If you are using a library such as jQuery that uses `$`, the functionality is overwritten, and `$` corresponds to the implementation from that library.  

## Query Selector All  

```console
$$(selector, [startNode])
```  

Returns an array of elements that match the specified CSS selector.  This method is equivalent to calling the [document.querySelectorAll()][MDNDocumentQuerySelectorAll] method.  

In the following code sample and figure, use `$$()` to create an array of all `<img>` elements in the current document and display the value of the `src` property for each element.  

```console
var images = $$('img');
for (each in images) {
    console.log(images[each].src);
}
```  

:::image type="complex" source="../media/console-element-selector-image-all.msft.png" alt-text="Using $$() to select all images in the document and display the sources" lightbox="../media/console-element-selector-image-all.msft.png":::
   Figure 8:  Using `$$()` to select all images in the document and display the sources  
:::image-end:::  

This method also supports a second parameter, startNode, that specifies an element or Node from which to search for elements.  The default value of the parameter is `document`.  

In the following code sample and figure, a modified version of the previous code sample and figure uses `$$()` to create an array of all `<img>` elements that appear in the current document after the selected Node.  

```console
var images = $$('img', document.querySelector(`title--image`));
for (each in images) {
   console.log(images[each].src);
}
```  

:::image type="complex" source="../media/console-element-selector-image-filter-all.msft.png" alt-text="Using $$() to select all images that appear after the specified <div> element in the document and display the sources" lightbox="../media/console-element-selector-image-filter-all.msft.png":::
   Figure 9:  Using `$$()` to select all images that appear after the specified `<div>` element in the document and display the sources  
:::image-end:::  

> [!NOTE]
> Press `Shift`+`Enter` in the console to start a new line without running the script.  

## XPath  

```console
$x(path, [startNode])
```  

Returns an array of DOM elements that match the specified XPath expression.  

In the following code sample and figure, all of the `<p>` elements on the page are returned.  

```console
$x("//p")
```  

:::image type="complex" source="../media/console-array-xpath.msft.png" alt-text="Using an XPath selector" lightbox="../media/console-array-xpath.msft.png":::
   Figure 10:  Using an XPath selector  
:::image-end:::  

In the following code sample and figure, all of the `<p>` elements that contain `<a>` elements are returned.  

```console
$x("//p[a]")
```  

:::image type="complex" source="../media/console-array-xpath-sub-element.msft.png" alt-text="Using a more complicated XPath selector" lightbox="../media/console-array-xpath-sub-element.msft.png":::
   Figure 11:  Using a more complicated XPath selector  
:::image-end:::  

Similar to the other selector commands, `$x(path)` has an optional second parameter, `startNode`, that specifies an element or Node from which to search for elements.  

:::image type="complex" source="../media/console-array-xpath-startnode.msft.png" alt-text="Using an XPath selector with startNode" lightbox="../media/console-array-xpath-startnode.msft.png":::
   Figure 12:  Using an XPath selector with `startNode`  
:::image-end:::  

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
> The [Chromium issue #1050237][MonorailIssue1050237] is tracking a bug with the `debug()` function.  If you encounter the issue, try [using breakpoints][DevtoolsJavascriptBreakpoints] instead.  

When you request the specified method, the debugger is invoked and breaks inside the method on the **Sources** panel allowing you to step through the code and debug it.  

```console
debug("debug");
```  

:::image type="complex" source="../media/console-debug-text.msft.png" alt-text="Breaking inside a method with debug()" lightbox="../media/console-debug-text.msft.png":::
   Figure 13:  Breaking inside a method with `debug()`  
:::image-end:::  

Use `undebug(method)` to stop breaking on the method, or use the UI to disable all breakpoints.  

For more information on breakpoints, see [Pause Your Code With Breakpoints][DevToolsJavascriptBreakpoints].  

## dir  

```console
dir(object)
```  

Displays an object-style listing of all of the properties for the specified object.  This method is an alias for the [console.dir()][MDNConsoleDir] method.  

Evaluate `document.head` in the Console to display the HTML between the `<head>` and `</head>` tags.  In the following code sample and figure, an object-style listing is displayed after using `console.dir()` in the Console.  

```console
document.head;
dir(document.head);
```  

:::image type="complex" source="../media/console-dir-document-head-expanded.msft.png" alt-text="Logging document.head with dir() method" lightbox="../media/console-dir-document-head-expanded.msft.png":::
   Figure 14:  Logging `document.head` with `dir()` method  
:::image-end:::  

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

In the following code sample and figure, the `document.body` opens in the **Elements** panel.  

```console
inspect(document.body);
```  

:::image type="complex" source="../media/console-inspect-document-body.msft.png" alt-text="Inspecting an element with inspect()" lightbox="../media/console-inspect-document-body.msft.png":::
   Figure 15:  Inspecting an element with `inspect()`  
:::image-end:::  

When passing a method to inspect, the method opens the document in the **Sources** panel for you to inspect.  

## getEventListeners  

```console
getEventListeners(object)
```  

Returns the event listeners registered on the specified object.  The return value is an object that contains an array for each registered event type \(such as `click` or `keydown`\).  The members of each array are objects that describe the listener registered for each type.  In the following code sample figure, all of the event listeners registered on the document object are listed.  

```console
getEventListeners(document);
```  

:::image type="complex" source="../media/console-elements-event-listeners-console-get-event-listeners-document.msft.png" alt-text="Output of using getEventListeners(document)" lightbox="../media/console-elements-event-listeners-console-get-event-listeners-document.msft.png":::
   Figure 16:  The result of using `getEventListeners(document)`  
:::image-end:::  

If more than one listener is registered on the specified object, then the array contains a member for each listener.  In the following figure, there are two event listeners registered on the document element for the `click` event.  

:::image type="complex" source="../media/console-elements-event-listeners-console-get-event-listeners-document-expanded-1.msft.png" alt-text="Multiple listeners" lightbox="../media/console-elements-event-listeners-console-get-event-listeners-document-expanded-1.msft.png":::
   Figure 17:  Multiple listeners  
:::image-end:::  

You may further expand each of the following objects to explore the properties.  

:::image type="complex" source="../media/console-elements-event-listeners-console-get-event-listeners-document-2.msft.png" alt-text="Expanded view of listener object" lightbox="../media/console-elements-event-listeners-console-get-event-listeners-document-2.msft.png":::
   Figure 18:  Expanded view of listener object  
:::image-end:::  

## keys  

```console
keys(object)
```  

Returns an array containing the names of the properties belonging to the specified object.  To get the associated values of the same properties, use `values()`.  

For example, suppose your application defined the following object.  

```console
var player1 = { "name":  "Ted", "level": 42 }
```  

In the following code samples and figure, the result assumes `player1` was defined in the global namespace \(for simplicity\) prior to typing `keys(player1)` and `values(player1)` in the console.  

```console
keys(player1)

values(player1)
```  

:::image type="complex" source="../media/console-keys-values.msft.png" alt-text="The keys() and values() commands" lightbox="../media/console-keys-values.msft.png":::
   Figure 19:  The `keys()` and `values()` commands  
:::image-end:::  

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

:::image type="complex" source="../media/console-function-monitor-sum.msft.png" alt-text="The monitor() method" lightbox="../media/console-function-monitor-sum.msft.png":::
   Figure 20:  The `monitor()` method  
:::image-end:::  

Use `unmonitor(method)` to cease monitoring.  

## monitorEvents  

```console
monitorEvents(object[, events])
```  

When one of the specified events occurs on the specified object, the event object is logged to the console.  You may specify a single event to monitor, an array of events, or one of the generic events types that are mapped to a predefined collection of events.  See the following code sample and figure.  

The following monitors all resize events on the window object.  

```console
monitorEvents(window, "resize");
```  

:::image type="complex" source="../media/console-monitor-events-resize-window.msft.png" alt-text="Monitoring window resize events" lightbox="../media/console-monitor-events-resize-window.msft.png":::
   Figure 21:  Monitoring window resize events  
:::image-end:::  

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

In the following code sample, the `key` event type corresponding to `key` events on an input text field are currently selected in the **Elements** panel.  

```console
monitorEvents($0, "key");
```  

In the following figure the sample output after typing a character in the text field is displayed.  

:::image type="complex" source="../media/console-monitor-events-type-t-y.msft.png" alt-text="Monitoring key events" lightbox="../media/console-monitor-events-type-t-y.msft.png":::
   Figure 22:  Monitoring key events  
:::image-end:::  

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

Profiles may also be nested.  In the following code samples and figure the result is the same regardless of the order.  

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

Profiles may also be nested.  In the following code sample and figure the result is the same regardless of the order.  

```console
profile('A');
profile('B');
profileEnd('A');
profileEnd('B');
```  

The result appears as a Heap Snapshot in the **Memory** panel.  

:::image type="complex" source="../media/console-memory-multiple-cpu-profiles.msft.png" alt-text="Grouped profiles" lightbox="../media/console-memory-multiple-cpu-profiles.msft.png":::
   Figure 23:  Grouped profiles  
:::image-end:::  

> [!NOTE]
> Multiple CPU profiles may operate at the same time and you are not required to close-out each one in creation order.  

## queryObjects  

```console
queryObjects(Constructor)
```  

Return an array of objects created with the specified constructor.  The scope of `queryObjects()` is the currently-selected runtime context in the console.

:::row:::
   :::column span="1":::
      ```console
      queryObjects(promise)
      ```  
      
      Returns all `Promises`.  
   :::column-end:::
   :::column span="1":::
      ```console
      queryObjects(HTMLElement)
      ```  
      
      Returns all HTML elements.  
   :::column-end:::
   :::column span="1":::
      ```console
      queryObjects(functionName)
      ```  
      
      Returns all objects that were instantiated using `new functionName()`.  
   :::column-end:::
:::row-end:::  

---  

## table  

```console
table(data[, columns])
```  

Logs object data with table formatting based upon the data object in with optional column headings.  In the following code sample and figure, a list of names using a table in the console is displayed.  

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

:::image type="complex" source="../media/console-table-display.msft.png" alt-text="The result of the table() method" lightbox="../media/console-table-display.msft.png":::
   Figure 24:  The result of the `table()` method  
:::image-end:::  

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

Stops the monitoring of the specified method.  This method is used in concert with the [monitor()](#monitor) method.  

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
