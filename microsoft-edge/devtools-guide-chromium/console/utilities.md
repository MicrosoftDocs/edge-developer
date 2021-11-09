---
description: A reference of convenience commands available in the Microsoft Edge DevTools Console.
title: Console Utilities API reference
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
# Console Utilities API reference

The Console Utilities API contains a collection of convenience commands to complete the following common tasks.

*   Choose and inspect DOM elements
*   Display data in readable format
*   Stop and start the profiler
*   Monitor DOM events

> [!WARNING]
> The following commands only work in the Microsoft Edge DevTools **Console**.  The commands do not work if run from your scripts.

For more information about the `console.log()` and `console.error()` methods and the rest of the `console.*` methods, navigate to [Console API Reference](api.md).


<!-- ====================================================================== -->
## Recently evaluated expression

### Console syntax

```console
$_
```

This command returns the value of the most recently evaluated expression.

### Console example

In the following figure, a simple expression (`2 + 2`) is evaluated.  The `$_` property is then evaluated, which contains the same value.

:::image type="complex" source="../media/console-arithmatic.msft.png" alt-text="$_ is the most recently evaluated expression" lightbox="../media/console-arithmatic.msft.png":::
   `$_` is the most recently evaluated expression
:::image-end:::

In the following figure, the evaluated expression initially contains an array of names.  Evaluating `$_.length` to find the length of the array, the value stored in `$_` becomes the latest evaluated expression, `4`.

:::image type="complex" source="../media/console-array-length.msft.png" alt-text="$_ changes when new commands are evaluated" lightbox="../media/console-array-length.msft.png":::
   `$_` changes when new commands are evaluated
:::image-end:::

---


<!-- ====================================================================== -->
## Recently chosen element or JavaScript object

### Console syntax

```console
$0
```

This command returns the most recently chosen element or JavaScript object.  `$1` returns the second most recently chosen one, and so on.  The `$0`, `$1`, `$2`, `$3`, and `$4` commands work as a historical reference to the last five DOM elements inspected within the **Elements** tool or the last five JavaScript heap objects chosen in the **Memory** tool.

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
      &nbsp;
   :::column-end:::
:::row-end:::

### Console example

In the following figure, an `img` element is chosen in the **Elements** tool.  In the **Console** drawer, `$0` has been evaluated and displays the same element.

:::image type="complex" source="../media/console-image-highlighted-$0.msft.png" alt-text="The $0" lightbox="../media/console-image-highlighted-$0.msft.png":::
   The `$0`
:::image-end:::

In the following figure, the image displays a different element chosen in the same webpage.  The `$0` now refers to the newly chosen element, while `$1` returns the previously chosen one.

:::image type="complex" source="../media/console-image-highlighted-$1.msft.png" alt-text="The $1" lightbox="../media/console-image-highlighted-$1.msft.png":::
   The `$1`
:::image-end:::

---


<!-- ====================================================================== -->
## Query selector

### Console syntax

```console
$(selector, [startNode])
```

This command returns the reference to the first DOM element with the specified CSS selector.  This method is an alias for the [document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector) method.

### Console example

In the following figure, a reference to the first `<img>` element in the webpage is returned.

:::image type="complex" source="../media/console-element-selector-image.msft.png" alt-text="The $('img')" lightbox="../media/console-element-selector-image.msft.png":::
   The `$('img')`
:::image-end:::

To find the first element in the DOM or to find and display it on the webpage, complete the following actions.

1.  Hover on the returned result.
1.  Open the contextual menu (right-click).
1.  Choose **Reveal in Elements Panel**.

In the following figure, a reference to the currently chosen element is returned and the `src` property is displayed.

:::image type="complex" source="../media/console-element-selector-image-source.msft.png" alt-text="The $('img').src" lightbox="../media/console-element-selector-image-source.msft.png":::
   The `$('img').src`
:::image-end:::

This method also supports a second parameter, `startNode`, that specifies an element or node from which to search for elements.  The default value of the parameter is `document`.

In the following figure, the first `img` element after the `title--image` element is found, and the `src` property of the `img` element is returned.

:::image type="complex" source="../media/console-element-selector-image-filter-source.msft.png" alt-text="The $('img', document.querySelector('title--image')).src" lightbox="../media/console-element-selector-image-filter-source.msft.png":::
   The `$('img', document.querySelector('title--image')).src`
:::image-end:::

> [!NOTE]
> If you are using a library such as jQuery that uses `$`, the functionality is overwritten, and `$` corresponds to the implementation from that library.

---


<!-- ====================================================================== -->
## Query selector all

### Console syntax

```console
$$(selector, [startNode])
```

This command returns an array of elements that match the specified CSS selector.  This method is equivalent to running the [document.querySelectorAll()](https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll) method.

### Console example

In the following code sample and figure, use `$$()` to create an array of all `<img>` elements in the current webpage and display the value of the `src` property for each element.

```console
var images = $$('img');
for (each in images) {
    console.log(images[each].src);
}
```

:::image type="complex" source="../media/console-element-selector-image-all.msft.png" alt-text="Using $$() to choose all images in the webpage and display the sources" lightbox="../media/console-element-selector-image-all.msft.png":::
   Using `$$()` to choose all images in the webpage and display the sources
:::image-end:::

This method also supports a second parameter, `startNode`, that specifies an element or node from which to search for elements.  The default value of the parameter is `document`.

In the following code sample and figure, a modified version of the previous code sample and figure uses `$$()` to create an array of all `<img>` elements that appear in the current webpage after the chosen node.

```console
var images = $$('img', document.querySelector(`title--image`));
for (each in images) {
   console.log(images[each].src);
}
```

:::image type="complex" source="../media/console-element-selector-image-filter-all.msft.png" alt-text="Using $$() to choose all images that appear after the specified <div> element in the webpage and display the sources" lightbox="../media/console-element-selector-image-filter-all.msft.png":::
   Using `$$()` to choose all images that appear after the specified `<div>` element in the webpage and display the sources
:::image-end:::

> [!NOTE]
> Select `Shift`+`Enter` in the **Console** to start a new line without running the script.

---


<!-- ====================================================================== -->
## XPath

### Console syntax

```console
$x(path, [startNode])
```

This command returns an array of DOM elements that match the specified XPath expression.

### Console example

In the following code sample and figure, all of the `<p>` elements on the webpage are returned.

```console
$x("//p")
```

:::image type="complex" source="../media/console-array-xpath.msft.png" alt-text="Using an XPath selector" lightbox="../media/console-array-xpath.msft.png":::
   Using an XPath selector
:::image-end:::

In the following code sample and figure, all of the `<p>` elements that contain `<a>` elements are returned.

```console
$x("//p[a]")
```

:::image type="complex" source="../media/console-array-xpath-sub-element.msft.png" alt-text="Using a more complicated XPath selector" lightbox="../media/console-array-xpath-sub-element.msft.png":::
   Using a more complicated XPath selector
:::image-end:::

Similar to the other selector commands, `$x(path)` has an optional second parameter, `startNode`, that specifies an element or node from which to search for elements.

:::image type="complex" source="../media/console-array-xpath-startnode.msft.png" alt-text="Using an XPath selector with startNode" lightbox="../media/console-array-xpath-startnode.msft.png":::
   Using an XPath selector with `startNode`
:::image-end:::

---


<!-- ====================================================================== -->
## clear

### Console syntax

```console
clear()
```

This commnad clears the console of the history.

### Console example

```console
clear()
```


<!-- ====================================================================== -->
## copy

### Console syntax

```console
copy(object)
```

This method copies a string representation of the specified object to the clipboard.

### Console example

```console
copy($0)
```

---


<!-- ====================================================================== -->
## debug

### Console syntax

```console
debug(method)
```

>[!NOTE]
> The [Chromium issue #1050237](https://crbug.com/1050237) is tracking a bug with the `debug()` function.  If you encounter the issue, try using [breakpoints](../javascript/breakpoints.md) instead.

When you request the specified method, the debugger invokes and breaks inside the method on the **Sources** tool.  It allows you to step through and debug the code.

### Console example

```console
debug("debug");
```

:::image type="complex" source="../media/console-debug-text.msft.png" alt-text="Breaking inside a method with debug()" lightbox="../media/console-debug-text.msft.png":::
   Breaking inside a method with `debug()`
:::image-end:::

Use `undebug(method)` to stop breaking on the method, or use the UI to turn off all breakpoints.

For more information on breakpoints, navigate to [Pause your code with breakpoints](../javascript/breakpoints.md).

---


<!-- ====================================================================== -->
## dir

### Console syntax

```console
dir(object)
```

This command displays an object-style listing of all of the properties for the specified object.  This method is an alias for the [console.dir()](https://developer.mozilla.org/docs/Web/API/Console/dir) method.

Evaluate `document.head` in the **Console** to display the HTML between the `<head>` and `</head>` tags.

### Console example

In the following code sample and figure, an object-style listing is displayed after using `console.dir()` in the **Console**.

```console
document.head;
dir(document.head);
```

:::image type="complex" source="../media/console-dir-document-head-expanded.msft.png" alt-text="Logging document.head with dir() method" lightbox="../media/console-dir-document-head-expanded.msft.png":::
   Logging `document.head` with `dir()` method
:::image-end:::

For more information, navigate to [console.dir()](api.md#dir) in the Console API.

---


<!-- ====================================================================== -->
## dirxml

### Console syntax

```console
dirxml(object)
```

This command prints an XML representation of the specified object, as displayed in the **Elements** tool.  This method is equivalent to the [console.dirxml()](https://developer.mozilla.org/docs/Web/API/Console/dirxml) method.

---


<!-- ====================================================================== -->
## inspect

### Console syntax

```console
inspect(object/method)
```

This command opens and chooses the specified element or object in the appropriate panel:  either the **Elements** tool for DOM elements or the **Memory** tool for JavaScript heap objects.

### Console example

In the following code sample and figure, the `document.body` opens in the **Elements** tool.

### Console example

```console
inspect(document.body);
```

:::image type="complex" source="../media/console-inspect-document-body.msft.png" alt-text="Inspecting an element with inspect()" lightbox="../media/console-inspect-document-body.msft.png":::
   Inspecting an element with `inspect()`
:::image-end:::

When passing a method to inspect, the method opens the webpage in the **Sources** tool for you to inspect.

---


<!-- ====================================================================== -->
## getEventListeners

### Console syntax

```console
getEventListeners(object)
```

This command returns the event listeners registered on the specified object.  The return value is an object that contains an array for each registered event type (such as `click` or `keydown`).  The members of each array are objects that describe the listener registered for each type.

### Console example

In the following code snippet and figure, all of the event listeners registered on the `document` object are listed.

```console
getEventListeners(document);
```

:::image type="complex" source="../media/console-elements-event-listeners-console-get-event-listeners-document.msft.png" alt-text="Output of using getEventListeners(document)" lightbox="../media/console-elements-event-listeners-console-get-event-listeners-document.msft.png":::
   The result of using `getEventListeners(document)`
:::image-end:::

If more than one listener is registered on the specified object, then the array contains a member for each listener.  In the following figure, two event listeners are registered on the `document` element for the `click` event.

:::image type="complex" source="../media/console-elements-event-listeners-console-get-event-listeners-document-expanded-1.msft.png" alt-text="Multiple listeners" lightbox="../media/console-elements-event-listeners-console-get-event-listeners-document-expanded-1.msft.png":::
   Multiple listeners
:::image-end:::

You may further expand each of the following objects to explore the properties.

:::image type="complex" source="../media/console-elements-event-listeners-console-get-event-listeners-document-2.msft.png" alt-text="Expanded view of listener object" lightbox="../media/console-elements-event-listeners-console-get-event-listeners-document-2.msft.png":::
   Expanded view of listener object
:::image-end:::

---


<!-- ====================================================================== -->
## keys

### Console syntax

```console
keys(object)
```

This command returns an array containing the names of the properties belonging to the specified object.  To get the associated values of the same properties, use `values()`.

### Console example

For example, suppose your application defined the following object.

```console
var player1 = {"name": "Ted", "level": 42}
```

In the following code samples and figure, the result assumes `player1` was defined in the global namespace (for simplicity) before you type `keys(player1)` and `values(player1)` in the console.

```console
keys(player1)

values(player1)
```

:::image type="complex" source="../media/console-keys-values.msft.png" alt-text="The keys() and values() commands" lightbox="../media/console-keys-values.msft.png":::
   The `keys()` and `values()` commands
:::image-end:::

---


<!-- ====================================================================== -->
## monitor

### Console syntax

```console
monitor(method)
```

This command logs a message to the console that indicates the method name along with the arguments passed to the method as part of a request.

### Console example

```console
function sum(x, y) {
    return x + y;
}
monitor(sum);
```

:::image type="complex" source="../media/console-function-monitor-sum.msft.png" alt-text="The monitor() method" lightbox="../media/console-function-monitor-sum.msft.png":::
   The `monitor()` method
:::image-end:::

Use `unmonitor(method)` to end monitoring.

---


<!-- ====================================================================== -->
## monitorEvents

### Console syntax

```console
monitorEvents(object[, events])
```

When one of the specified events occurs on the specified object, the event object is logged to the console.  You may specify a single event to monitor, an array of events, or one of the generic events types that are mapped to a predefined collection of events.

### Console example

Review the following code sample and figure.

The following monitors all resize events on the window object.

```console
monitorEvents(window, "resize");
```

:::image type="complex" source="../media/console-monitor-events-resize-window.msft.png" alt-text="Monitoring window resize events" lightbox="../media/console-monitor-events-resize-window.msft.png":::
   Monitoring window resize events
:::image-end:::

The following code snippet defines an array to monitor both `resize` and `scroll` events on the window object.

```console
monitorEvents(window, ["resize", "scroll"]);
```

You may also specify one of the available types of events, strings that map to predefined sets of events.  The following table displays the available event types and the associated event mappings.

| Event type | Corresponding mapped events |
|:--- |:--- |
| `mouse` | "click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel" |
| `key` | "keydown", "keypress", "keyup", "textInput" |
| `touch` | "touchcancel", "touchend", "touchmove", "touchstart" |
| `control` | "blur", "change", "focus", "reset", "resize", "scroll", "select", "submit", "zoom" |

In the following code sample, the `key` event type corresponding to `key` events on an input text field are currently chosen in the **Elements** tool.

```console
monitorEvents($0, "key");
```

In the following figure, the sample output after typing a character in the text field is displayed.

:::image type="complex" source="../media/console-monitor-events-type-t-y.msft.png" alt-text="Monitoring key events" lightbox="../media/console-monitor-events-type-t-y.msft.png":::
   Monitoring key events
:::image-end:::

---


<!-- ====================================================================== -->
## profile

### Console syntax

```console
profile([name])
```

This command starts a JavaScript CPU profiling session with an optional name.  The [profileEnd()](#profileend) method completes the profile and displays the results in the **Memory** tool.  <!--Navigate to [Speed Up JavaScript Runtime](../rendering-tools/js-runtime.md).  -->

### Console example

1.  Run the `profile()` method to start profiling.

    ```console
    profile("My profile")
    ```

1.  Run the [profileEnd()](#profileend) method to stop profiling and display the results in the **Memory** tool.

Profiles may also be nested.  In the following code samples and figure, the result is the same whatever the order.

```console
profile('A');
profile('B');
profileEnd('A');
profileEnd('B');
```

> [!NOTE]
> Multiple CPU profiles may operate at the same time and you are not required to close-out each one in creation order.

---


<!-- ====================================================================== -->
## profileEnd

### Console syntax

```console
profileEnd([name])
```

This command completes a JavaScript CPU profiling session and displays the results in the **Memory** tool.  You must be running the [profile()](#profile) method.  <!--Navigate to [Speed Up JavaScript Runtime](../rendering-tools/js-runtime.md).  -->

### Console example

1.  Run the [profile()](#profile) method to start profiling.
1.  Run the `profileEnd()` method to stop profiling and display the results in the **Memory** tool.

    ```console
    profileEnd("My profile")
    ```

Profiles may also be nested.  In the following code sample and figure, the result is the same whatever the order.

```console
profile('A');
profile('B');
profileEnd('A');
profileEnd('B');
```

The result appears as a Heap Snapshot in the **Memory** tool.

:::image type="complex" source="../media/console-memory-multiple-cpu-profiles.msft.png" alt-text="Grouped profiles" lightbox="../media/console-memory-multiple-cpu-profiles.msft.png":::
   Grouped profiles
:::image-end:::

> [!NOTE]
> Multiple CPU profiles may operate at the same time and you are not required to close-out each one in creation order.

---


<!-- ====================================================================== -->
## queryObjects

### Console syntax

```console
queryObjects(Constructor)
```

This command returns an array of objects created with the specified constructor.  The scope of `queryObjects()` is the currently chosen runtime context in the **Console**.

### Console example

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


<!-- ====================================================================== -->
## table

### Console syntax

```console
table(data[, columns])
```

This command logs object data with table formatting based upon the data object in with optional column headings.

### Console example

In the following code sample and figure, a list of names using a table in the console is displayed.

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
   The result of the `table()` method
:::image-end:::

---


<!-- ====================================================================== -->
## undebug

### Console syntax

```console
undebug(method)
```

This command stops the debug of the specified method. So when the method is requested, the debugger is no longer invoked.

### Console example

```console
undebug(getData);
```

---


<!-- ====================================================================== -->
## unmonitor

### Console syntax

```console
unmonitor(method)
```

This command stops the monitoring of the specified method.  This method is used in concert with the [monitor()](#monitor) method.

### Console example

```console
unmonitor(getData);
```

---


<!-- ====================================================================== -->
## unmonitorEvents

### Console syntax

```console
unmonitorEvents(object[, events])
```

This command stops monitoring events for the specified object and events.

### Console example

For example, the following code snippet stops all event monitoring on the window object.

```console
unmonitorEvents(window);
```

You may also selectively stop monitoring specific events on an object.  For example, the following code starts monitoring all `mouse` events on the currently chosen element, and then stops monitoring `mousemove` events (perhaps to reduce noise in the console output).

```console
monitorEvents($0, "mouse");
unmonitorEvents($0, "mousemove");
```

---


<!-- ====================================================================== -->
## values

### Console syntax

```console
values(object)
```

This command returns an array containing the values of all properties belonging to the specified object.

### Console example

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
