---
title: Console tool utility functions and selectors
description: Convenience utility functions, commands, and DOM selectors that are available in the Console tool in Microsoft Edge DevTools, but not through JavaScript source files.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 11/20/2023
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
# Console tool utility functions and selectors
<!-- orig:
# Console Utilities API reference
-->

The Console Utilities API contains a collection of convenience variables and functions for performing common tasks, such as:

*  Selecting and inspecting DOM elements.
*  Displaying data in a readable format.
*  Stopping and starting the profiler.
*  Monitoring DOM events.

These variables and functions only work by entering them directly into the DevTools **Console**; you can't use the variables and call the functions from scripts.


<!-- ====================================================================== -->
## Summary

| Variable or function | Description |
|---|---|
| [$_](#_-most-recently-evaluated-expression-value) | Returns the value of the most recently evaluated expression. |
| [$0 - $4](#0-1-2-3-4-recently-selected-elements-or-objects) | Returns a recently selected element or JavaScript object. |
| [$(selector)](#query-selector) | Query selector; returns the reference to the first DOM element with the specified CSS selector, like `document.querySelector()`. |
| [$$(selector, [parentElement])](#query-selector-all) | Query selector all; returns an array of elements that match the specified CSS selector, like `document.querySelectorAll()`. |
| [$x(path, [startNode])](#x-xpath) | Returns an array of DOM elements that match the specified XPath expression. |
| [clear()](#clear) | Clears the console of its history. |
| [copy(object)](#copy) | Copies a string representation of the specified object to the clipboard. |
| [debug(function)](#debug) | When the specified function is called, the debugger is invoked and breaks inside the function on the Sources panel. |
| [dir(object)](#dir) | Displays an object-style listing of all of the properties for the specified object, like `console.dir()`. |
| [dirxml(object)](#dirxml) | Prints an XML representation of the specified object, as displayed in the **Elements** tool, like `console.dirxml()`. |
| [inspect(object/function)](#inspect) | Opens and selects the specified DOM element in the **Elements** tool, or the specified JavaScript heap object in the **Memory** tool. |
| [getEventListeners(object)](#geteventlisteners) | Returns the event listeners that are registered on the specified object. |
| [keys(object)](#keys) | Returns an array containing the names of the properties belonging to the specified object. |
| [monitor(function)](#monitor) | Logs a message to the console that indicates the function name, along with the arguments passed to the function as part of a request. |
| [monitorEvents(object[, events])](#monitorevents) | When one of the specified events occurs on the specified object, the event object is logged to the console. |
| [profile([name])](#profile) | Starts a JavaScript CPU profiling session with an optional name. |
| [profileEnd([name])](#profileend) | Completes a JavaScript CPU profiling session and displays the results in the **Memory** tool. |
| [queryObjects(Constructor)](#queryobjects) | Returns an array of the objects that were created by the specified constructor. |
| [table(data[, columns])](#table) | Logs object data, formatted as a table with column headings, for the specified data object. |
| [undebug(function)](#undebug) | Stops the debug of the specified function, so that when the function is requested, the debugger is no longer invoked. |
| [unmonitor(function)](#unmonitor) | Stops the monitoring of the specified function. |
| [unmonitorEvents(object[, events])](#unmonitorevents) | Stops monitoring events for the specified object and events. |
| [values(object)](#values) | Returns an array containing the values of all properties belonging to the specified object. |


<!-- ====================================================================== -->
## $_ (Most recently evaluated expression value)

`$_` returns the value of the most recently evaluated expression.

**Syntax:**

```javascript
$_
```

#### Example 1

1. Press **Ctrl+Shift+J** (Windows, Linux) or **Command+Option+J** (macOS).  The **Console** tool opens in DevTools, next to the webpage.

1. In the **Console** tool, type the expression `2+2`, and then press **Enter**.

   The expression is evaluated, and the result is shown. The `$_` variable is also set to the result of the expression.

1. Type `$_`, and then press **Enter**:

   ![The Console tool showing that the $_ variable returns the result of the previous expression](./utilities-images/console-$_.png)

#### Example 2

1. Press **Ctrl+Shift+J** (Windows, Linux) or **Command+Option+J** (macOS).  The **Console** tool opens in DevTools, next to the webpage.

1. Paste the following code into the **Console**, and then press **Enter**:

   ```javascript
   ["john", "paul", "george", "ringo"]
   ```
   
   The evaluated expression is an array of names.
   
1. Type the following code into the **Console**, and then press **Enter**:

   ```javascript
   $_.length
   ```

   The expression `$_.length` is evaluated and `4` is shown in the **Console** because `$_` refers to the previously evaluated expression, which is the array of names. `$_.length` is the length of the array of names.
   
1. Type the following code into the **Console**, and then press **Enter**:

   ```javascript
   $_
   ```
   
   `$_` always refers to the previously evaluated expression, which is now the number 4.

   ![The value of $_ changes to the value of the previously evaluated expression](./utilities-images/console-array-length.png)


<!-- ====================================================================== -->
## $0, $1, $2, $3, $4 (Recently selected elements or objects)

`$0`, `$1`, `$2`, `$3`, and `$4` return recently selected elements or JavaScript objects.

`$0` returns the most recently selected element or JavaScript object, `$1` returns the second most recently selected one, and so on.  The `$0`, `$1`, `$2`, `$3`, and `$4` variables work as a historical reference to the last five DOM elements that were inspected within the **Elements** tool, or the last five JavaScript heap objects that were selected in the **Memory** tool.

#### Syntax

```javascript
$0
```

#### Example

1. To open DevTools, right-click the webpage, and then select **Inspect**.  Or, press **Ctrl+Shift+I** (Windows, Linux) or **Command+Option+I** (macOS).  DevTools opens.

1. In the **Elements** tool, select an element, for example an `<input>` element.

1. Open the **Console** tool in the **Quick View** panel, at the bottom of DevTools.

1. Type `$0` in the **Console** tool, and then press **Enter**.

   The `$0` variable returns the selected `<input>` element:

   ![The result of evaluating the $0 command in the Console](./utilities-images/console-image-highlighted-$0.png)

1. Select a different element in the **Elements** tool, for example a `<div>` element.

1. In the **Console** tool, type `$0`, and then press **Enter**.

   `$0` refers to the newly selected element, which is the `<div>` element.

1. Type `$1`, and then press **Enter**.

   `$1` refers to the previously selected element, which is the `<input>` element:

   ![The result of evaluating the $0 and the $1 commands](./utilities-images/console-image-highlighted-$1.png)


<!-- ====================================================================== -->
## $ (Query selector)

`$()` returns the reference to the first DOM element with the specified CSS selector.

This function is similar to the [document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector) function.

If you are using a library such as jQuery that uses `$`, the functionality is overwritten, and `$` corresponds to the implementation from that library.

#### Syntax

```javascript
$(selector, [parentElement])
```

#### Example 1

1. Press **Ctrl+Shift+J** (Windows, Linux) or **Command+Option+J** (macOS).  The **Console** tool opens in DevTools, next to the webpage.

1. In the **Console** tool, type `$('input')`. The first element that matches the `input` CSS selector is displayed:

   ![$('input') returns a reference to the first <input> element in the webpage](./utilities-images/console-element-selector-image.png)

1. Right-click the returned result and then select **Reveal in Elements Panel** to find it in the DOM, or **Scroll in to View** to show it on the page.

#### Example 2

The `$()` function accepts a second parameter, `parentElement`, that specifies a parent element which to search in. The default value of the parameter is `document`, which means that the entire webpage is searched by default. By specifying a parent element, you can search for elements within a specific part of the webpage.

1. Press **Ctrl+Shift+J** (Windows, Linux) or **Command+Option+J** (macOS).  The **Console** tool opens in DevTools, next to the webpage.

1. In the **Console** tool, type `$('input', $('ul'))`

   The first element that matches the `input` CSS selector found within the first `ul` element is retruned:

   ![The result of $('input', $('ul'))](./utilities-images/console-element-selector-image-filter-source.png)


<!-- ====================================================================== -->
## $$ (Query selector all)

`$$()` returns a list of elements that match the specified CSS selector, like `document.querySelectorAll()`.

This function is similar to [document.querySelectorAll()](https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll) but returns an `array` of element, instead of a `NodeList`.

#### Syntax

```javascript
$$(selector, [parentElement])
```

#### Example 1

1. Press **Ctrl+Shift+J** (Windows, Linux) or **Command+Option+J** (macOS).  The **Console** tool opens in DevTools, next to the webpage.

1. In the **Console** tool, type `$$('button')`. All the `<button>` elements in the webpage are displayed:

   ![The result of $$('button')](./utilities-images/console-element-selector-image-all.png)

#### Example 2

This `$$()` function also supports a second parameter, `parentElement`, that specifies a parent element which to search in. The default value of the parameter is `document`, which means that the entire webpage is searched by default. By specifying a parent element, you can search for elements within a specific part of the webpage.

1. Press **Ctrl+Shift+J** (Windows, Linux) or **Command+Option+J** (macOS).  The **Console** tool opens in DevTools, next to the webpage.

1. In the **Console** tool, type `$$('button', $('li.task'))`. All the `<button>` elements that are descendants of the first `<li class="task">` element are displayed:

   ![The result of $$('button', $('li.task'))](./utilities-images/console-element-selector-image-all-descendants.png)


<!-- ====================================================================== -->
## $x (XPath)

`$x()` returns an array of DOM elements that match the specified XPath expression.

#### Syntax

```javascript
$x(path, [parentElement])
```

#### Example 1

In the following example, all of the `<p>` elements on the webpage are returned:

```javascript
$x("//p")
```

Result:

![Using an XPath selector](./utilities-images/console-array-xpath.png)

#### Example 2

In the following example, all of the `<p>` elements that contain `<a>` elements are returned:

```javascript
$x("//p[a]")
```

Result:

![Using a more complicated XPath selector](./utilities-images/console-array-xpath-sub-element.png)

Similar to the other selector commands, `$x(path)` has an optional second parameter, `startNode`, that specifies an element or node from which to search for elements:

![Using an XPath selector with startNode](./utilities-images/console-array-xpath-startnode.png)


<!-- ====================================================================== -->
## clear
<!-- planned new heading to troubleshoot: -->
<!-- ## clear() -->

<!-- summary to bubble up: -->
Clears the console of its history.

<!-- add'l info: n/a -->

#### Syntax

```javascript
clear()
```

#### Example

```javascript
clear()
```


<!-- ====================================================================== -->
## copy
<!-- ## copy(object) -->

<!-- summary to bubble up: -->
Copies a string representation of the specified object to the clipboard.

<!-- add'l info: n/a -->

#### Syntax

```javascript
copy(object)
```

#### Example

```javascript
copy($0)
```


<!-- ====================================================================== -->
## debug
<!-- ## debug(function) -->

<!-- summary to bubble up: -->
When the specified function is called, the debugger is invoked and breaks inside the function on the Sources panel.

<!-- add'l info -->
After the debugger is paused, you can then step through the code and debug it.

#### Syntax

```javascript
debug(function)
```

>[!NOTE]
> The [Chromium issue #1050237](https://crbug.com/1050237) is tracking a bug with the `debug()` function.  If you encounter the issue, try using [breakpoints](../javascript/breakpoints.md) instead.

#### Example

```javascript
debug("debug");
```

Result:

![Breaking inside a function with debug()](./utilities-images/console-debug-text.png)

Use `undebug(function)` to stop breaking on the function, or use the UI to turn off all breakpoints.

For more information on breakpoints, see [Pause your code with breakpoints](../javascript/breakpoints.md).


<!-- ====================================================================== -->
## dir
<!-- ## dir(object) -->

<!-- summary to bubble up: -->
Displays an object-style listing of all of the properties for the specified object, like `console.dir()`.

<!-- add'l info -->
This function is an alias for [console.dir()](https://developer.mozilla.org/docs/Web/API/Console/dir).

#### Syntax

```javascript
dir(object)
```

Evaluate `document.head` in the **Console** to display the HTML between the `<head>` and `</head>` tags.

#### Example

In the following example, an object-style listing is displayed after using `console.dir()` in the **Console**:

```javascript
document.head;
dir(document.head);
```

Result:

![Logging 'document.head' with the 'dir()' function](./utilities-images/console-dir-document-head-expanded.png)

For more information, see [console.dir()](api.md#dir) in the Console API.


<!-- ====================================================================== -->
## dirxml
<!-- ## dirxml(object) -->

<!-- summary to bubble up: -->
Prints an XML representation of the specified object, as displayed in the **Elements** tool, like `console.dirxml()`.

<!-- add'l info -->
This function is equivalent to [console.dirxml()](https://developer.mozilla.org/docs/Web/API/Console/dirxml).

#### Syntax

```javascript
dirxml(object)
```


<!-- ====================================================================== -->
## inspect
<!-- ## inspect(object/function) -->

<!-- summary to bubble up: -->
Opens and selects the specified DOM element in the **Elements** tool, or the specified JavaScript heap object in the **Memory** tool.

<!-- add'l info -->
* For a DOM element, this function opens and selects the specified DOM element in the **Elements** tool.
* For a JavaScript heap object, this function opens the specified JavaScript heap object in the **Memory** tool.

#### Syntax

```javascript
inspect(object/function)
```

#### Example

In the following example, the `document.body` opens in the **Elements** tool:

```javascript
inspect(document.body);
```

Result:

![Inspecting an element with inspect()](./utilities-images/console-inspect-document-body.png)

When passing a function to inspect, the function opens the webpage in the **Sources** tool for you to inspect.


<!-- ====================================================================== -->
## getEventListeners
<!-- ## getEventListeners(object) -->

<!-- summary to bubble up: -->
Returns the event listeners that are registered on the specified object.

<!-- add'l info -->
The return value is an object that contains an array for each registered event type (such as `click` or `keydown`).  The members of each array are objects that describe the listener registered for each type.

#### Syntax

```javascript
getEventListeners(object)
```

#### Example

In the following example, all of the event listeners that are registered on the `document` object are listed:

```javascript
getEventListeners(document);
```

Result:

![Output of using getEventListeners(document)](./utilities-images/console-elements-event-listeners-console-get-event-listeners-document.png)

If more than one listener is registered on the specified object, then the array contains a member for each listener.  In the following figure, two event listeners are registered on the `document` element for the `click` event:

![Multiple event listeners registered on the 'document' element for the 'click' event](./utilities-images/console-elements-event-listeners-console-get-event-listeners-document-expanded-1.png)

You can further expand each of the following objects to explore their properties.  Here's an expanded view of the listener object:

![Expanded view of listener object](./utilities-images/console-elements-event-listeners-console-get-event-listeners-document-2.png)


<!-- ====================================================================== -->
## keys
<!-- ## keys(object) -->

<!-- summary to bubble up: -->
Returns an array containing the names of the properties belonging to the specified object.

<!-- add'l info -->
To get the associated values of the same properties, use `values()`.

#### Syntax

```javascript
keys(object)
```

#### Example

Suppose your application defines the following object:

```javascript
var player1 = {"name": "Ted", "level": 42}
```

In the following code, the result assumes `player1` was defined in the global namespace (for simplicity) before you type `keys(player1)` and `values(player1)` in the console:

```javascript
keys(player1)

values(player1)
```

Result:

![The keys() and values() commands](./utilities-images/console-keys-values.png)


<!-- ====================================================================== -->
## monitor
<!-- ## monitor(function) -->

<!-- summary to bubble up: -->
Logs a message to the console that indicates the function name, along with the arguments passed to the function as part of a request.

<!-- add'l info: n/a -->

#### Syntax

```javascript
monitor(function)
```

#### Example

```javascript
function sum(x, y) {
    return x + y;
}
monitor(sum);
```

Result:

![Result of the monitor() function](./utilities-images/console-function-monitor-sum.png)

To end monitoring, use `unmonitor(function)`.


<!-- ====================================================================== -->
## monitorEvents
<!-- ## monitorEvents(object\[, events\]) -->

<!-- summary to bubble up: -->
When one of the specified events occurs on the specified object, the event object is logged to the console.

<!-- add'l info -->
You can specify a single event to monitor, an array of events, or one of the generic events types that are mapped to a predefined collection of events.

#### Syntax

```javascript
monitorEvents(object[, events])
```

#### Example

The following code monitors all resize events on the window object:

```javascript
monitorEvents(window, "resize");
```

Result:

![Monitoring window resize events](./utilities-images/console-monitor-events-resize-window.png)

#### Example

The following code defines an array to monitor both `resize` and `scroll` events on the window object:

```javascript
monitorEvents(window, ["resize", "scroll"]);
```

#### Specifying an event type

You can also specify one of the available types of events, strings that map to predefined sets of events.  The following table shows the available event types and the associated event mappings:

| Event type | Corresponding mapped events |
|:--- |:--- |
| `mouse` | "click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel" |
| `key` | "keydown", "keypress", "keyup", "textInput" |
| `touch` | "touchcancel", "touchend", "touchmove", "touchstart" |
| `Ctrl` | "blur", "change", "focus", "reset", "resize", "scroll", "select", "submit", "zoom" |

#### Example

In the following code, the `key` event type corresponding to `key` events on an input text field are currently selected in the **Elements** tool:

```javascript
monitorEvents($0, "key");
```

Here's the sample output after typing a character in the text field:

![Monitoring key events](./utilities-images/console-monitor-events-type-t-y.png)


<!-- ====================================================================== -->
## profile
<!-- ## profile([name]) -->

<!-- summary to bubble up: -->
Starts a JavaScript CPU profiling session with an optional name.

<!-- add'l info -->
To complete the profile and display the results in the **Memory** tool, call [profileEnd()](#profileend).  <!-- See [Speed Up JavaScript Runtime](../rendering-tools/js-runtime.md).  -->

#### Syntax

```javascript
profile([name])
```

#### Example

To start profiling, call `profile()`:

```javascript
profile("My profile")
```

To stop profiling and display the results in the **Memory** tool, call [profileEnd()](#profileend).

Profiles can also be nested:

```javascript
profile('A');
profile('B');
profileEnd('A');
profileEnd('B');
```

The result is the same, regardless of the order.  The result appears as a Heap Snapshot in the **Memory** tool, with grouped profiles:

![Grouped profiles](./utilities-images/console-memory-multiple-cpu-profiles.png)

> [!NOTE]
> Multiple CPU profiles can operate at the same time, and you aren't required to close-out each profile in creation order.


<!-- ====================================================================== -->
## profileEnd
<!-- ## profileEnd([name]) -->

<!-- summary to bubble up: -->
Completes a JavaScript CPU profiling session and displays the results in the **Memory** tool.

<!-- add'l info -->
To call this function, you must be running the [profile()](#profile) function.  <!-- See [Speed Up JavaScript Runtime](../rendering-tools/js-runtime.md).  -->

#### Syntax

```javascript
profileEnd([name])
```

#### Example

1. Run the [profile()](#profile) function to start profiling.

1. Run the `profileEnd()` function to stop profiling and display the results in the **Memory** tool:

    ```javascript
    profileEnd("My profile")
    ```

For more information, see [profile](#profile), above.


<!-- ====================================================================== -->
## queryObjects
<!-- ## queryObjects(Constructor) -->

<!-- summary to bubble up: -->
Returns an array of the objects that were created by the specified constructor.

<!-- add'l info -->
The scope of `queryObjects()` is the currently selected runtime context in the **Console**.

#### Syntax

```javascript
queryObjects(Constructor)
```

#### Example

* `queryObjects(promise)` returns all instances of `Promise`.

* `queryObjects(HTMLElement)` returns all HTML elements.

*  `queryObjects(functionName)` returns all objects that were instantiated using `new functionName()`.


<!-- ====================================================================== -->
## table
<!-- ## table(data\[, columns\]) -->

<!-- summary to bubble up: -->
Logs object data, formatted as a table with column headings, for the specified data object.

<!-- add'l info: n/a -->
For example, using this function, you can display a list of people's names as a table, in the **Console**.

#### Syntax

```javascript
table(data[, columns])
```

#### Example

The following code displays a list of names using a table in the console, with the column headings defaulting to the variable names:

```javascript
var names = {
    0: {
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

Result:

![The result of the table() function](./utilities-images/console-table-display.png)


<!-- ====================================================================== -->
## undebug
<!-- ## undebug(function) -->

<!-- summary to bubble up: -->
Stops the debug of the specified function, so that when the function is requested, the debugger is no longer invoked.

<!-- add'l info: n/a -->

#### Syntax

```javascript
undebug(function)
```

#### Example

```javascript
undebug(getData);
```


<!-- ====================================================================== -->
## unmonitor
<!-- ## unmonitor(function) -->

<!-- summary to bubble up: -->
Stops the monitoring of the specified function.

<!-- add'l info -->
This function is used together with [monitor()](#monitor).

#### Syntax

```javascript
unmonitor(function)
```

#### Example

```javascript
unmonitor(getData);
```


<!-- ====================================================================== -->
## unmonitorEvents
<!-- ## unmonitorEvents(object\[, events\]) -->

<!-- summary to bubble up: -->
Stops monitoring events for the specified object and events.

<!-- add'l info: n/a -->

#### Syntax

```javascript
unmonitorEvents(object[, events])
```

#### Example

The following code stops all event monitoring on the `window` object:

```javascript
unmonitorEvents(window);
```

You can also selectively stop monitoring specific events on an object.  For example, the following code starts monitoring all `mouse` events on the currently selected element, and then stops monitoring `mousemove` events (perhaps to reduce noise in the console output):

```javascript
monitorEvents($0, "mouse");
unmonitorEvents($0, "mousemove");
```


<!-- ====================================================================== -->
## values
<!-- ## values(object) -->

<!-- summary to bubble up: -->
Returns an array containing the values of all properties belonging to the specified object.

<!-- add'l info: n/a -->

#### Syntax

```javascript
values(object)
```

#### Example

```javascript
values(object);
```


<!-- ====================================================================== -->
## See also

<!-- if an article's title is adequately descriptive, and the article is in the same TOC bucket as the present article, don't much need a link here: -->
* [Console features reference](reference.md)
* [Console object API Reference](api.md) - `console.*` functions, such as `console.log()` and `console.error()`.


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developer.chrome.com/docs/devtools/console/utilities/) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](../../media/cc-logo/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
