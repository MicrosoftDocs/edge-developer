---
title: Console Utilities API reference
description: A reference of convenience commands available in the Microsoft Edge DevTools Console.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
ms.date: 05/04/2021
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
# Console Utilities API reference

The Console Utilities API contains a collection of convenience functions for performing common tasks, such as:
*   Choosing and inspecting DOM elements.
*   Displaying data in a readable format.
*   Stopping and starting the profiler.
*   Monitoring DOM events.

> [!WARNING]
> The following commands only work in the Microsoft Edge DevTools **Console**.  The commands don't work if run from your scripts.

For more information about the `console.log()` and `console.error()` methods and the rest of the `console.*` methods, navigate to [Console API Reference](api.md).


<!-- ====================================================================== -->
## Recently evaluated expression

`$_` returns the value of the most recently evaluated expression.

### Syntax

```console
$_
```

### Example

In the following figure, a simple expression (`2 + 2`) is evaluated.  The `$_` property is then evaluated, which contains the same value.

:::image type="content" source="../media/console-arithmatic.msft.png" alt-text="$_ is the most recently evaluated expression." lightbox="../media/console-arithmatic.msft.png":::
   `$_` is the most recently evaluated expression
:::image-end:::

In the following figure, the evaluated expression initially contains an array of names.  Evaluating `$_.length` to find the length of the array, the value stored in `$_` becomes the latest evaluated expression, `4`.

`$_` changes when new commands are evaluated:

:::image type="content" source="../media/console-array-length.msft.png" alt-text="$_ changes when new commands are evaluated." lightbox="../media/console-array-length.msft.png":::

---


<!-- ====================================================================== -->
## Recently chosen element or JavaScript object

`$0` returns the most recently chosen element or JavaScript object.  `$1` returns the second most recently chosen one, and so on.  The `$0`, `$1`, `$2`, `$3`, and `$4` commands work as a historical reference to the last five DOM elements inspected within the **Elements** tool or the last five JavaScript heap objects chosen in the **Memory** tool.

### Syntax

```console
$0
```

### Example

In the following figure, an `img` element is chosen in the **Elements** tool.  In the **Console** drawer, `$0` has been evaluated and displays the same element:

:::image type="content" source="../media/console-image-highlighted-$0.msft.png" alt-text="The $0 command." lightbox="../media/console-image-highlighted-$0.msft.png":::

In the following figure, the image displays a different element chosen in the same webpage.  The `$0` now refers to the newly chosen element, while `$1` returns the previously chosen one.

:::image type="content" source="../media/console-image-highlighted-$1.msft.png" alt-text="The $1 command." lightbox="../media/console-image-highlighted-$1.msft.png":::

---


<!-- ====================================================================== -->
## Query selector

`$(selector)` returns the reference to the first DOM element with the specified CSS selector.  This method is an alias for the [document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector) method.

### Syntax

```console
$(selector, [startNode])
```

### Example

In the following figure, `$('img')` returns a reference to the first `<img>` element in the webpage:

:::image type="content" source="../media/console-element-selector-image.msft.png" alt-text="$('img') returns a reference to the first <img> element in the webpage." lightbox="../media/console-element-selector-image.msft.png":::

To find the first element in the DOM, or to find and display it on the webpage:

1.  Right-click the returned result.
1.  Click **Reveal in Elements Panel**.

In the following figure, a reference to the currently chosen element is returned and the `src` property is displayed:

The result of `$('img').src`:

:::image type="content" source="../media/console-element-selector-image-source.msft.png" alt-text="The result of $('img').src." lightbox="../media/console-element-selector-image-source.msft.png":::

This method also supports a second parameter, `startNode`, that specifies an element or node from which to search for elements.  The default value of the parameter is `document`.

In the following figure, the first `img` element after the `title--image` element is found, and the `src` property of the `img` element is returned.

The result of `$('img', document.querySelector('title--image')).src`:

:::image type="content" source="../media/console-element-selector-image-filter-source.msft.png" alt-text="The result of $('img', document.querySelector('title--image')).src." lightbox="../media/console-element-selector-image-filter-source.msft.png":::

> [!NOTE]
> If you are using a library such as jQuery that uses `$`, the functionality is overwritten, and `$` corresponds to the implementation from that library.

---


<!-- ====================================================================== -->
## Query selector all

`$$(selector)` returns an array of elements that match the specified CSS selector.  This method is equivalent to running the [document.querySelectorAll()](https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll) method.

### Syntax

```console
$$(selector, [startNode])
```

### Example

In the following code and figure, use `$$()` to create an array of all `<img>` elements in the current webpage and display the value of the `src` property for each element.

```console
var images = $$('img');
for (each in images) {
    console.log(images[each].src);
}
```

Using `$$()` to choose all images in the webpage and display the sources:

:::image type="content" source="../media/console-element-selector-image-all.msft.png" alt-text="Using $$() to choose all images in the webpage and display the sources." lightbox="../media/console-element-selector-image-all.msft.png":::

This method also supports a second parameter, `startNode`, that specifies an element or node from which to search for elements.  The default value of the parameter is `document`.

In the following code sample and figure, a modified version of the previous code sample and figure uses `$$()` to create an array of all `<img>` elements that appear in the current webpage after the chosen node.

```console
var images = $$('img', document.querySelector(`title--image`));
for (each in images) {
   console.log(images[each].src);
}
```

Using `$$()` to choose all images that appear after the specified `<div>` element in the webpage and display the sources:

:::image type="content" source="../media/console-element-selector-image-filter-all.msft.png" alt-text="Using $$() to choose all images that appear after the specified <div> element in the webpage and display the sources." lightbox="../media/console-element-selector-image-filter-all.msft.png":::

> [!NOTE]
> Select `Shift`+`Enter` in the **Console** to start a new line without running the script.

---


<!-- ====================================================================== -->
## XPath

`$x(path)` returns an array of DOM elements that match the specified XPath expression.

### Syntax

```console
$x(path, [startNode])
```

### Example

In the following code sample and figure, all of the `<p>` elements on the webpage are returned.

```console
$x("//p")
```

Using an XPath selector:

:::image type="content" source="../media/console-array-xpath.msft.png" alt-text="Using an XPath selector." lightbox="../media/console-array-xpath.msft.png":::

In the following code sample and figure, all of the `<p>` elements that contain `<a>` elements are returned.

```console
$x("//p[a]")
```

Using a more complicated XPath selector:

:::image type="content" source="../media/console-array-xpath-sub-element.msft.png" alt-text="Using a more complicated XPath selector." lightbox="../media/console-array-xpath-sub-element.msft.png":::

Similar to the other selector commands, `$x(path)` has an optional second parameter, `startNode`, that specifies an element or node from which to search for elements.

Using an XPath selector with `startNode`:

:::image type="content" source="../media/console-array-xpath-startnode.msft.png" alt-text="Using an XPath selector with startNode." lightbox="../media/console-array-xpath-startnode.msft.png":::

---


<!-- ====================================================================== -->
## clear

`clear()` clears the console of its history.

### Syntax

```console
clear()
```

### Example

```console
clear()
```


<!-- ====================================================================== -->
## copy

`copy(object)` copies a string representation of the specified object to the clipboard.

### Syntax

```console
copy(object)
```

### Example

```console
copy($0)
```

---


<!-- ====================================================================== -->
## debug

When the specified function is called, the debugger is invoked and breaks inside the function on the Sources panel.  You can then step through the code and debug it.

### Syntax

```console
debug(method)
```

>[!NOTE]
> The [Chromium issue #1050237](https://crbug.com/1050237) is tracking a bug with the `debug()` function.  If you encounter the issue, try using [breakpoints](../javascript/breakpoints.md) instead.

### Example

```console
debug("debug");
```

:::image type="content" source="../media/console-debug-text.msft.png" alt-text="Breaking inside a method with debug()." lightbox="../media/console-debug-text.msft.png":::
   Breaking inside a method with `debug()`
:::image-end:::

Use `undebug(method)` to stop breaking on the method, or use the UI to turn off all breakpoints.

For more information on breakpoints, navigate to [Pause your code with breakpoints](../javascript/breakpoints.md).

---


<!-- ====================================================================== -->
## dir

`dir(object)` displays an object-style listing of all of the properties for the specified object.  This method is an alias for the [console.dir()](https://developer.mozilla.org/docs/Web/API/Console/dir) method.

### Syntax

```console
dir(object)
```

Evaluate `document.head` in the **Console** to display the HTML between the `<head>` and `</head>` tags.

### Example

In the following code sample and figure, an object-style listing is displayed after using `console.dir()` in the **Console**.

```console
document.head;
dir(document.head);
```

:::image type="content" source="../media/console-dir-document-head-expanded.msft.png" alt-text="Logging document.head with dir() method." lightbox="../media/console-dir-document-head-expanded.msft.png":::
   Logging `document.head` with `dir()` method
:::image-end:::

For more information, navigate to [console.dir()](api.md#dir) in the Console API.

---


<!-- ====================================================================== -->
## dirxml

`dirxml(object)` prints an XML representation of the specified object, as displayed in the **Elements** tool.  This method is equivalent to the [console.dirxml()](https://developer.mozilla.org/docs/Web/API/Console/dirxml) method.

### Syntax

```console
dirxml(object)
```

---


<!-- ====================================================================== -->
## inspect

`inspect(object/method)` opens and chooses the specified element or object in the appropriate panel:  either the **Elements** tool for DOM elements or the **Memory** tool for JavaScript heap objects.

### Syntax

```console
inspect(object/method)
```

### Example

In the following code sample and figure, the `document.body` opens in the **Elements** tool.

### Example

```console
inspect(document.body);
```

Inspecting an element with `inspect()`:

:::image type="content" source="../media/console-inspect-document-body.msft.png" alt-text="Inspecting an element with inspect()." lightbox="../media/console-inspect-document-body.msft.png":::

When passing a method to inspect, the method opens the webpage in the **Sources** tool for you to inspect.

---


<!-- ====================================================================== -->
## getEventListeners

`getEventListeners(object)` returns the event listeners registered on the specified object.  The return value is an object that contains an array for each registered event type (such as `click` or `keydown`).  The members of each array are objects that describe the listener registered for each type.

### Syntax

```console
getEventListeners(object)
```

### Example

In the following code and figure, all of the event listeners registered on the `document` object are listed.

```console
getEventListeners(document);
```

:::image type="content" source="../media/console-elements-event-listeners-console-get-event-listeners-document.msft.png" alt-text="Output of using getEventListeners(document)." lightbox="../media/console-elements-event-listeners-console-get-event-listeners-document.msft.png":::
   The result of using `getEventListeners(document)`
:::image-end:::

If more than one listener is registered on the specified object, then the array contains a member for each listener.  In the following figure, two event listeners are registered on the `document` element for the `click` event:

:::image type="content" source="../media/console-elements-event-listeners-console-get-event-listeners-document-expanded-1.msft.png" alt-text="Multiple event listeners registered on the 'document' element for the 'click' event." lightbox="../media/console-elements-event-listeners-console-get-event-listeners-document-expanded-1.msft.png":::

You can further expand each of the following objects to explore their properties.  Here's an expanded view of the listener object:

:::image type="content" source="../media/console-elements-event-listeners-console-get-event-listeners-document-2.msft.png" alt-text="Expanded view of listener object." lightbox="../media/console-elements-event-listeners-console-get-event-listeners-document-2.msft.png":::

---


<!-- ====================================================================== -->
## keys

`keys(object)` returns an array containing the names of the properties belonging to the specified object.  To get the associated values of the same properties, use `values()`.

### Syntax

```console
keys(object)
```

### Example

For example, suppose your application defined the following object.

```console
var player1 = {"name": "Ted", "level": 42}
```

In the following code samples and figure, the result assumes `player1` was defined in the global namespace (for simplicity) before you type `keys(player1)` and `values(player1)` in the console.

```console
keys(player1)

values(player1)
```

The `keys()` and `values()` commands:

:::image type="content" source="../media/console-keys-values.msft.png" alt-text="The keys() and values() commands." lightbox="../media/console-keys-values.msft.png":::

---


<!-- ====================================================================== -->
## monitor

`monitor(method)` logs a message to the console that indicates the method name along with the arguments passed to the method as part of a request.

### Syntax

```console
monitor(method)
```

### Example

```console
function sum(x, y) {
    return x + y;
}
monitor(sum);
```

The `monitor()` method:

:::image type="content" source="../media/console-function-monitor-sum.msft.png" alt-text="The monitor() method." lightbox="../media/console-function-monitor-sum.msft.png":::

To end monitoring, use `unmonitor(method)`.

---


<!-- ====================================================================== -->
## monitorEvents

When one of the specified events occurs on the specified object, the event object is logged to the console.  You can specify a single event to monitor, an array of events, or one of the generic events types that are mapped to a predefined collection of events.

### Syntax

```console
monitorEvents(object[, events])
```

### Example

The following monitors all resize events on the window object.

```console
monitorEvents(window, "resize");
```

Monitoring window resize events:

:::image type="content" source="../media/console-monitor-events-resize-window.msft.png" alt-text="Monitoring window resize events." lightbox="../media/console-monitor-events-resize-window.msft.png":::

The following code defines an array to monitor both `resize` and `scroll` events on the window object.

```console
monitorEvents(window, ["resize", "scroll"]);
```

You can also specify one of the available types of events, strings that map to predefined sets of events.  The following table displays the available event types and the associated event mappings.

| Event type | Corresponding mapped events |
|:--- |:--- |
| `mouse` | "click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel" |
| `key` | "keydown", "keypress", "keyup", "textInput" |
| `touch` | "touchcancel", "touchend", "touchmove", "touchstart" |
| `control` | "blur", "change", "focus", "reset", "resize", "scroll", "select", "submit", "zoom" |

In the following code, the `key` event type corresponding to `key` events on an input text field are currently chosen in the **Elements** tool.

```console
monitorEvents($0, "key");
```

In the following figure, the sample output after typing a character in the text field is displayed.  Monitoring key events:

:::image type="content" source="../media/console-monitor-events-type-t-y.msft.png" alt-text="Monitoring key events." lightbox="../media/console-monitor-events-type-t-y.msft.png":::

---


<!-- ====================================================================== -->
## profile

`profile()` starts a JavaScript CPU profiling session with an optional name.  The [profileEnd()](#profileend) method completes the profile and displays the results in the **Memory** tool.  <!--Navigate to [Speed Up JavaScript Runtime](../rendering-tools/js-runtime.md).  -->

### Syntax

```console
profile([name])
```

### Example

1.  Run the `profile()` method to start profiling.

    ```console
    profile("My profile")
    ```

1.  Run the [profileEnd()](#profileend) method to stop profiling and display the results in the **Memory** tool.

Profiles can also be nested.  In the following code and figure, the result is the same whatever the order.

```console
profile('A');
profile('B');
profileEnd('A');
profileEnd('B');
```

> [!NOTE]
> Multiple CPU profiles can operate at the same time, and you aren't required to close-out each profile in creation order.

---


<!-- ====================================================================== -->
## profileEnd

`profileEnd()` completes a JavaScript CPU profiling session and displays the results in the **Memory** tool.  You must be running the [profile()](#profile) method.  <!--Navigate to [Speed Up JavaScript Runtime](../rendering-tools/js-runtime.md).  -->

### Syntax

```console
profileEnd([name])
```

### Example

1.  Run the [profile()](#profile) method to start profiling.
1.  Run the `profileEnd()` method to stop profiling and display the results in the **Memory** tool.

    ```console
    profileEnd("My profile")
    ```

Profiles can also be nested.  In the following code, the result is the same whatever the order.

```console
profile('A');
profile('B');
profileEnd('A');
profileEnd('B');
```

The result appears as a Heap Snapshot in the **Memory** tool, with grouped profiles:

:::image type="content" source="../media/console-memory-multiple-cpu-profiles.msft.png" alt-text="Grouped profiles." lightbox="../media/console-memory-multiple-cpu-profiles.msft.png":::

> [!NOTE]
> Multiple CPU profiles can operate at the same time and you are not required to close-out each one in creation order.

---


<!-- ====================================================================== -->
## queryObjects

`queryObjects(Constructor)` returns an array of objects created with the specified constructor.  The scope of `queryObjects()` is the currently chosen runtime context in the **Console**.

### Syntax

```console
queryObjects(Constructor)
```

### Example

* `queryObjects(promise)` returns all instances of `Promise`.

* `queryObjects(HTMLElement)` returns all HTML elements.

*  `queryObjects(functionName)` returns all objects that were instantiated using `new functionName()`.

---


<!-- ====================================================================== -->
## table

`table(data[, columns])` logs object data with table formatting based upon the data object in with optional column headings.

### Syntax

```console
table(data[, columns])
```

### Example

The following code displays a list of names using a table in the console:

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

The result of the `table()` method:

:::image type="content" source="../media/console-table-display.msft.png" alt-text="The result of the table() method." lightbox="../media/console-table-display.msft.png":::

---


<!-- ====================================================================== -->
## undebug

`undebug(method)` stops the debug of the specified method. So when the method is requested, the debugger is no longer invoked.

### Syntax

```console
undebug(method)
```

### Example

```console
undebug(getData);
```

---


<!-- ====================================================================== -->
## unmonitor

`unmonitor(method)` stops the monitoring of the specified method.  This method is used in concert with the [monitor()](#monitor) method.

### Syntax

```console
unmonitor(method)
```

### Example

```console
unmonitor(getData);
```

---


<!-- ====================================================================== -->
## unmonitorEvents

`unmonitorEvents(object[, events])` stops monitoring events for the specified object and events.

### Syntax

```console
unmonitorEvents(object[, events])
```

### Example

The following code stops all event monitoring on the `window` object:

```console
unmonitorEvents(window);
```

You can also selectively stop monitoring specific events on an object.  For example, the following code starts monitoring all `mouse` events on the currently chosen element, and then stops monitoring `mousemove` events (perhaps to reduce noise in the console output).

```console
monitorEvents($0, "mouse");
unmonitorEvents($0, "mousemove");
```

---


<!-- ====================================================================== -->
## values

`values(object)` returns an array containing the values of all properties belonging to the specified object.

### Syntax

```console
values(object)
```

### Example

```console
values(object);
```

---


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/utilities) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors#kayce-basques) (Technical Writer, Chrome DevTools \& Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
