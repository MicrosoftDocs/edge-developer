---
title: Log messages in the Console tool
description: How to log messages and run JavaScript in the Microsoft Edge DevTools Console.
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: conceptual
ms.prod: microsoft-edge
ms.date: 04/13/2021
---
# Log messages in the Console tool

<!-- source files for the snippets in this article: https://github.com/MicrosoftEdge/DevToolsSamples/tree/master/docs/console -->

Ever since browsers started to offer developer tools, the **Console** is a favorite, because in most programming courses, you learn to output some kind of `print` or `log` command, to gain insights about what happens in your code.

Before DevTools, for JavaScript, you were limited to an `alert()` or `document.write()` statement to debug in the browser.  With DevTools, to log information in the **Console**, many methods of the `Console` object are available in the **Console**, listed in [Console object API Reference](api.md).  The following code lists the most important methods of the `Console` object:

```javascript
// Prints the text to the console as  a log message.
console.log('This is a log message')

// Prints the text to the console as an informational message.
console.info('This is some information')

// Prints the text to the console as an error message.
console.error('This is an error')

// Prints the text to the console as a warning.
console.warn('This is a warning')
```

Copy and paste the previous code into the **Console**, or see [Console messages examples: log, info, error, and warn](https://microsoftedge.github.io/DevToolsSamples/console/logging-examples.html).  When you try any method in the **Console**, the `log()` and `info()` methods seem to do the same thing, while the `error()` and `warn()` methods display an icon next to the message and a way to inspect the [stack trace](https://en.wikipedia.org/wiki/Stack_trace) of the message.

<!-- You can view the source file for this demo at [MicrosoftEdge/DevToolsSamples > logging-examples.html](https://github.com/MicrosoftEdge/DevToolsSamples/blob/master/docs/console/logging-examples.html). -->

The **Console** displays the messages from different log APIs:

:::image type="content" source="../media/console-log-examples.msft.png" alt-text="The Console displays the messages from different log APIs." lightbox="../media/console-log-examples.msft.png":::

Use `info()` and `log()` for different log tasks, because that allows you to [filter Console messages](console-filters.md), to display only a subset of log entries.


<!-- ====================================================================== -->
## Different types of log entries and variables

Instead of log text, you can send any valid JavaScript or DOM references to the **Console**.  The **Console** appropriately displays the various types of JavaScript values that you send to it from console log messages.  The **Console** displays a filtered and formatted representation of the results.

1. Copy and paste the following code into the **Console**:

   ```javascript
   let x = 2;

   // Logs the value of x.
   console.log(x);

   // Logs the name x and value of x.
   console.log({x})

   // Logs a DOM reference.
   console.log(document.querySelector('body'));

   // Logs an Object.
   console.log({"type":"life", "meaning": 42});
   let w3techs = ['HTML', 'CSS', 'SVG', 'MathML'];

   // Logs an Array.
   console.log(w3techs);
   ```

   Each type of result is displayed in a different way.

1. Click the triangles to toggle the information and analyze each result in more detail.

Suppose you get many log messages that only display a value, but you don't know where the value originated.  Add curly braces `{}` around the `x` variable, to provide better grouping.

Logging variables of different types in the **Console**:

:::image type="content" source="../media/console-log-types.msft.png" alt-text="Log variables of different types in the console." lightbox="../media/console-log-types.msft.png":::

Logging variables of different types in the **Console** with expanded extra information:

:::image type="content" source="../media/console-log-types-expanded.msft.png" alt-text="Log variables of different types in the console with expanded extra information." lightbox="../media/console-log-types-expanded.msft.png":::

To display formatted results, see [Console messages examples: logging different types](https://microsoftedge.github.io/DevToolsSamples/console/logging-types.html).

<!-- You can view the source file for this demo at [MicrosoftEdge/DevToolsSamples > logging-types.html](https://github.com/MicrosoftEdge/DevToolsSamples/blob/master/docs/console/logging-types.html). -->

<!-- ====================================================================== -->
## Format and convert values with specifiers

A special feature of all the log methods is that you can use specifiers in your log statement's message.  Specifiers are part of a log message and start with a percentage sign (`%`) character.  Specifiers allow you to log certain values in different formats and even convert between formats.

*  `%s` logs as Strings.
*  `%i` or `%d` logs as Integers.
*  `%f` logs as a floating-point value.
*  `%o` logs as an expandable DOM element.
*  `%O` logs as an expandable JavaScript object.
*  `%c` allows you to style you message with CSS.

### Pasting into the Console

To view various specifier formatting and data types by pasting code into the Console:

1. Open DevTools, 

1. Copy and paste the following code into the **Console**, and then press `Enter`.

```javascript
// Logs "10x console developer".
console.log('%ix %s developer', 10, 'console');

// Logs PI => 3.141592653589793.
console.log(Math.PI);

// Logs PI as an integer = 3.
console.log('%i', Math.PI);

// Logs the webpage body as a DOM node.
console.log('%o', document.body);

// Logs the body of the webpage as a JavaScript object with all properties.
console.log('%O', document.body);

// Displays the message as red and large.
console.log('%cImportant message follows','color:red;font-size:40px');
```

The result is displayed in the **Console**.  See the steps (such as Step 3) in the following section for details on how to view and expand the results.

<!-- wordsmith: -->
The first statement demonstrates that the order of replacement of specifiers (`'%ix %s developer'`) is the parameter order (`10, 'console'`) following the formatting string.

### Using the demo webpage

To view various specifier formatting and data types by loading an existing demo webpage:

1. Open the demo page [Console messages examples: Logging with specifiers](https://microsoftedge.github.io/DevToolsSamples/console/logging-with-specifiers.html) in a new tab or window.

   <!-- You can view the source file for this demo at [MicrosoftEdge/DevToolsSamples > logging-with-specifiers.html](https://github.com/MicrosoftEdge/DevToolsSamples/blob/master/docs/console/logging-with-specifiers.html). -->

1. Right-click the page and then select **Inspect**, to open DevTools.

1. Press `Esc` to show the **Drawer**, at the bottom of DevTools.

1. Drag the **Drawer** divider up, to make the Drawer pane taller.

1. Click the expander triangles in the output results, to expand and see the data that's output by the above `log` statements that are in the webpage.

1. If necessary, press `F5` to reload the page and re-populate the **Console** output.

   Specifiers are used to log, format, and convert values:

   :::image type="content" source="../media/console-log-specifiers.msft.png" alt-text="Use specifiers to log and convert values." lightbox="../media/console-log-specifiers.msft.png":::

1. In the **Console**, click triangles to expand the log results, to see the difference between the `%o` and `%O` specifiers.

   The body of the webpage is either displayed as an expandable DOM node, or as a full list of all JavaScript properties on the webpage body:

:::image type="content" source="../media/console-log-specifiers-expanded.msft.png" alt-text="Expand the results displays the difference between the %O and %o specifier - the body is either displayed as an expandable DOM node or as a full list of all JavaScript properties on the webpage body." lightbox="../media/console-log-specifiers-expanded.msft.png":::


<!-- ====================================================================== -->
## Group log messages

If you log much information, you can use the `group` and `groupCollapsed` methods to display log messages as expandable and collapsible groups in the **Console**.  Groups can be nested and named to make the data much easier to understand.

```javascript
console.group("Passengers: Heart of Gold");
console.log('Zaphod');
console.log('Trillian');
console.log('Ford');
console.log('Arthur');
console.log('Marvin');
console.groupCollapsed("Hidden");
console.log('(Frankie & Benjy)');
console.groupEnd("Hidden");
console.groupEnd("Passengers: Heart of Gold");

let technologies = {
  "Standards": ["HTML", "CSS", "SVG", "ECMAScript"],
  "Others": ["jQuery", "Markdown", "Textile", "Sass", "Pug"]
}
for (tech in technologies) {
  console.groupCollapsed(tech);
  technologies[tech].forEach(t => console.log(t));
  console.groupEnd(tech);
}
```

Also in the second example, the group names can be optionally generated.  To display the results, copy and paste the previous code in the **Console** or see [Console messages examples: grouping logs](https://microsoftedge.github.io/DevToolsSamples/console/logging-with-groups.html).  You can expand and collapse each of the sections.

<!-- You can view the source file for this demo at [MicrosoftEdge/DevToolsSamples > logging-with-groups.html](https://github.com/MicrosoftEdge/DevToolsSamples/blob/master/docs/console/logging-with-groups.html). -->

Log lots of values as groups:

:::image type="content" source="../media/console-log-groups.msft.png" alt-text="Log lots of values as groups." lightbox="../media/console-log-groups.msft.png":::

Each group can be expanded and collapsed:

:::image type="content" source="../media/console-log-groups-expanded.msft.png" alt-text="Each group can be expanded and collapsed." lightbox="../media/console-log-groups-expanded.msft.png":::


<!-- ====================================================================== -->
## Display complex data as tables

The `console.table()` method logs complex data not as a collapsible and expandable object, but as a table that you can sort using different headers.  A sorted table makes it much easier for people to review the information.

To display the following code by loading an existing demo page, see [Console messages examples: Using table](https://microsoftedge.github.io/DevToolsSamples/console/logging-with-table.html).  Right-click the page, select **Inspect** to open DevTools, open the **Console**, and then click the expander triangles.

<!-- You can view the source file for this demo at [MicrosoftEdge/DevToolsSamples > logging-with-table.html](https://github.com/MicrosoftEdge/DevToolsSamples/blob/master/docs/console/logging-with-table.html). -->

Copy and paste this code into the **Console**, press `Enter`, and then click the expander triangles:

```javascript
let technologies = {
  "Standards": ["HTML", "CSS", "SVG", "ECMAScript"],
  "Others": ["jQuery", "Markdown", "Textile", "Sass", "Pug"]
}
// Log technologies as an object.
console.log(technologies);
// Display technologies as a table.
console.table(technologies);

// Get the dimensions of the webpage body.
let bodyDimensions = document.body.getBoundingClientRect();
// Display dimensions as an object.
console.log(bodyDimensions);
// Display dimensions as a table.
console.table(bodyDimensions);
```

Displaying data with `console.table` makes it easier to read:

:::image type="content" source="../media/console-log-table.msft.png" alt-text="Display data with console.table to make it easier to read." lightbox="../media/console-log-table.msft.png":::

The output of `console.table` has a table format not only when it displays in the **Console**.    For example, if you copy and paste a table into Excel, Word, or any other product that supports tabular data, the structure remains intact.

<!--  The output of `console.table` has a table format not only when it displays in the **Console**.  For example, copy and paste a table in Excel, Word, or any other products that support tabular data.  -->

If the data has named parameters, the `console.table()` method also allows you to specify an `Array` of columns for each property to display as a second parameter.  The following example shows how to specify an array of columns that is more readable:

```javascript
// get all the h1, p and script elements
let contentElements = document.querySelectorAll(':is(h1,p,script)');
// display the elements as an unfiltered table
console.table(contentElements)
// display only relevant columns
console.table(contentElements,['nodeName', 'innerText', 'offsetHeight'])
```

<!-- wordsmith after reading the above: -->
The below image shows filtering information that the `console.table()` method displays, and providing an array of properties to display as a second parameter:

:::image type="content" source="../media/console-log-table-filtered.msft.png" alt-text="Filter information that console.table displays and provide an array of properties to display as a second parameter." lightbox="../media/console-log-table-filtered.msft.png":::

### Log statements vs. breakpoint debugging and Live Expressions

You may be tempted to use the `log` methods as your main means to debug webpages, because log methods are simple to use.  Consider the result of any `console.log()` request.  Released products shouldn't use any `log` statement that was used for debugging, because it could reveal inside information to people.  And the noise created in the **Console** is overwhelming.

Instead of `log` statements, try using [Breakpoint Debugging](../javascript/breakpoints.md) or [Live Expressions](live-expressions.md).  You may find that your workflows are more effective and you get better results.
