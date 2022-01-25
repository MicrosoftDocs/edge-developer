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

Ever since browsers started to offer developer tools, the **Console** is a favorite.  The reason is simple: in most programming courses, you learn to output some kind of print command to gain insights about what happens.

Before DevTools, you were limited to an `alert()` or `document.write()` statement to debug in the browser.

To log information in the **Console**, many methods are available, listed in [Console API reference](api.md).  The following code lists the most important methods:

```javascript
// prints the text to the console as  a log message
console.log('This is a log message')
// prints the text to the console as an informational message
console.info('This is some information')
// prints the text to the console as an error message
console.error('This is an error')
// prints the text to the console as a warning
console.warn('This is a warning')
```

Copy and paste the previous code into the **Console**, or see [Console messages examples: log, info, error, and warn](https://microsoftedge.github.io/DevToolsSamples/console/logging-examples.html).  When you try any method in the **Console**, the `log()` and `info()` methods seem to do the same thing, while the `error()` and `warn()` methods display an icon next to the message and a way to inspect the [stack trace](https://en.wikipedia.org/wiki/Stack_trace) of the message.

The **Console** displays the messages from different log APIs:

:::image type="content" source="../media/console-log-examples.msft.png" alt-text="The Console displays the messages from different log APIs." lightbox="../media/console-log-examples.msft.png":::

It is, however, still a good idea to use `info()` and `log()` for different log tasks as that allows you to [filter using type in the Console](console-filters.md).


<!-- ====================================================================== -->
## Different types of logs

Instead of log text, you can send any valid JavaScript or DOM references to the **Console**.  The **Console** is elegant and it determines the type that you send it.  It then gives you the best possible representation.  Copy and paste the following code into the **Console**.  Or, to display formatted results, see [Console messages examples: logging different types](https://microsoftedge.github.io/DevToolsSamples/console/logging-types.html).

```javascript
let x = 2;
// logs the value of x
console.log(x);
// logs the name x and value of x
console.log({x})
// logs a DOM reference
console.log(document.querySelector('body'));
// logs an Object
console.log({"type":"life", "meaning": 42});
let w3techs = ['HTML', 'CSS', 'SVG', 'MathML'];
// logs an Array
console.log(w3techs);
```

Each result is displayed in a different way.  Use the triangles to toggle the information and analyze each one in more detail.  The curly brace characters `{}` around the `x` variable are a nice little trick to avoid lots of log messages where you only get a value but you don't know where it originated.

Log variables of different types in the **Console**:

:::image type="content" source="../media/console-log-types.msft.png" alt-text="Log variables of different types in the console." lightbox="../media/console-log-types.msft.png":::

Log variables of different types in the **Console** with expanded extra information:

:::image type="content" source="../media/console-log-types-expanded.msft.png" alt-text="Log variables of different types in the console with expanded extra information." lightbox="../media/console-log-types-expanded.msft.png":::


<!-- ====================================================================== -->
## Format and convert values with specifiers

A special feature of all the log methods is that you can use specifiers in your log message.  Specifiers are part of a log message and start with a percentage sign (`%`) character and allow you to log certain values in different formats and even convert each.

*   `%s` logs as Strings
*   `%i` or `%d` logs as Integers
*   `%f` logs as a floating-point value
*   `%o` logs as an expandable DOM element
*   `%O` logs as an expandable JavaScript object
*   `%c` allows you to style you message with CSS

```javascript
// logs "10x console developer"
console.log('%ix %s developer', 10, 'console');
// logs PI => 3.141592653589793
console.log(Math.PI);
// logs PI as an integer = 3
console.log('%i', Math.PI);
// logs the webpage body as a DOM node
console.log('%o', document.body);
// logs the body of the webpage as a JavaScript object with all properties
console.log('%O', document.body);
// Displays the message as red and big
console.log('%cImportant message follows','color:red;font-size:40px');
```

The first example displays that the order of replacement of specifiers is the parameter order following the string.  To display the results, copy and paste the previous code in the **Console** or see [Console messages examples: Logging with specifiers](https://microsoftedge.github.io/DevToolsSamples/console/logging-with-specifiers.html).

Use specifiers to log and convert values:

:::image type="content" source="../media/console-log-specifiers.msft.png" alt-text="Use specifiers to log and convert values." lightbox="../media/console-log-specifiers.msft.png":::

Expand the information in the log to display the huge difference between `%o` and `%O`.  Expanding the results displays the difference between the `%O` and `%o` specifier.  The body is either displayed as an expandable DOM node or as a full list of all JavaScript properties on the webpage body:

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

Log lots of values as groups:

:::image type="content" source="../media/console-log-groups.msft.png" alt-text="Log lots of values as groups." lightbox="../media/console-log-groups.msft.png":::

Each group can be expanded and collapsed:

:::image type="content" source="../media/console-log-groups-expanded.msft.png" alt-text="Each group can be expanded and collapsed." lightbox="../media/console-log-groups-expanded.msft.png":::


<!-- ====================================================================== -->
## Display complex data as tables

The `console.table()` method logs complex data not as a collapsible and expandable object, but as a table that you can sort using different headers.  A sorted table makes it much easier for people to review the information.  To display it in an example, see [Console messages examples: Using table](https://microsoftedge.github.io/DevToolsSamples/console/logging-with-table.html).

```javascript
let technologies = {
  "Standards": ["HTML", "CSS", "SVG", "ECMAScript"],
  "Others": ["jQuery", "Markdown", "Textile", "Sass", "Pug"]
}
// log technologies as an object
console.log(technologies);
// display technologies as a table
console.table(technologies);

// get the dimensions of the webpage body
let bodyDimensions = document.body.getBoundingClientRect();
// display dimensions as an object
console.log(bodyDimensions);
// display dimensions as a table
console.table(bodyDimensions);
```

Display data with `console.table` to make it much easier to read:

:::image type="content" source="../media/console-log-table.msft.png" alt-text="Display data with console.table to make it much easier to read." lightbox="../media/console-log-table.msft.png":::

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

Filter information that `console.table` displays, and provide an array of properties to display as a second parameter:

:::image type="content" source="../media/console-log-table-filtered.msft.png" alt-text="Filter information that console.table displays and provide an array of properties to display as a second parameter." lightbox="../media/console-log-table-filtered.msft.png":::

You may be tempted to use the log methods as your main means to debug webpages, because log methods are simple to use.  Consider the result of any `console.log()` request.  Live products shouldn't use any log that was used to debug.  It may reveal inside information to people.  And the noise created in the **Console** is overwhelming.  When you use [Breakpoint Debugging](../javascript/breakpoints.md) or [Live Expressions](live-expressions.md), you may find that your workflows are more effective and you get better results.
