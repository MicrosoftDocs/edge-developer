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

Ever since browsers started to offer developer tools, the **Console** is a favorite, because in most programming courses, you learn to output some kind of `print` or `log` command, to gain insights about what happens in your code.

Before DevTools, for JavaScript, you were limited to an `alert()` or `document.write()` statement to debug in the browser.  With DevTools, to log information in the **Console**, many methods of the `Console` object are available in the **Console**, listed in [Console object API Reference](api.md).


## Console messages examples: log, info, error, and warn

The `Console` object has several levels of message-logging methods:

* `console.log` - Prints the text to the console as a log message.
* `console.info` - Prints the text to the console as an informational message.
* `console.error` - Prints the text to the console as an error message.
* `console.warn` - Prints the text to the console as a warning.


### Example code

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


### Demo webpage: Console messages examples: log, info, error, and warn

To try using the logging functions in the Console:

<!-- demo 1 of 6 -->

1. Open the demo webpage [Console messages examples: log, info, error, and warn](https://microsoftedge.github.io/Demos/devtools-console/logging-examples.html) in a new window or tab.

1. Press **Ctrl+Shift+J** (Windows, Linux) or **Command+Option+J** (macOS).  DevTools opens, with the **Console** open in main toolbar.

   The demo page has already sent the above log messages to the **Console**:

   ![The Console shows the messages from different log APIs](../media/console-log-examples.msft.png)

   The `log()` and `info()` methods seem to do the same thing.  Use `info()` and `log()` for different log tasks, because that allows you to [filter Console messages](console-filters.md), to display only a subset of log entries.
  
   The `error()` and `warn()` methods display an icon next to the message and a way to inspect the [stack trace](https://en.wikipedia.org/wiki/Stack_trace) of the message.

1. Copy and paste any of the examples into the **Console**, and then press **Enter**.

   Output is displayed in the **Console**, below the code that you entered.


<!-- ====================================================================== -->
## Different types of log entries and variables

Instead of log text, you can send any valid JavaScript or DOM references to the **Console**.  The **Console** appropriately displays the various types of JavaScript values that you send to it from console log messages.  The **Console** displays a filtered and formatted representation of the results.


### Example code

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


### Demo webpage: Logging different variable types

To use the `log` function to display different variable types:

<!-- demo 2 of 6 -->

1. Open the demo webpage [Console messages examples: Logging different types](https://microsoftedge.github.io/Demos/devtools-console/logging-types.html) in a new window or tab.

1. Press **Ctrl+Shift+J** (Windows, Linux) or **Command+Option+J** (macOS).  DevTools opens, with the **Console** open in main toolbar.

   Each type of result is displayed in a different way.

1. Click the triangles to toggle the information and analyze each result in more detail.

   Suppose you get many log messages that only display a value, but you don't know where the value originated.  For that case, we added curly braces `{}` around the `x` variable, to provide better grouping.

   Logging variables of different types in the **Console**:

   ![Log variables of different types in the console](../media/console-log-types.msft.png)

   Logging variables of different types in the **Console** with expanded, extra information:

   ![Log variables of different types in the console with expanded extra information](../media/console-log-types-expanded.msft.png)

1. Copy and paste any of the examples into the **Console**, and then press **Enter**.

   Output is displayed in the **Console**, below the code that you entered.


<!-- ====================================================================== -->
## Format and convert values with specifiers

A special feature of all the log methods is that you can use specifiers in your log statement's message.  Specifiers are part of a log message and start with a percentage sign (`%`) character.  Specifiers allow you to log certain values in different formats and even convert between formats.

*  `%s` logs as Strings.
*  `%i` or `%d` logs as Integers.
*  `%f` logs as a floating-point value.
*  `%o` logs as an expandable DOM element.
*  `%O` logs as an expandable JavaScript object.
*  `%c` allows you to style you message with CSS.

### Example code

```javascript
// logs "10x console developer"
console.log('%ix %s developer', 10, 'console');

// logs PI => 3.141592653589793
console.log(Math.PI); 

// logs PI as an integer = 3
console.log('%i', Math.PI); 

// logs the document body as a DOM node
console.log('%o', document.body); 

// logs the body of the document as a JavaScript object with all properties
console.log('%O', document.body); 

// shows the message as red and big
console.log('%cImportant message follows','color:red;font-size:40px')
```


### Demo webpage: Logging with specifiers

<!-- demo 3 -->

1. Open the demo page [Console messages examples: Logging with specifiers](https://microsoftedge.github.io/Demos/devtools-console/logging-with-specifiers.html) in a new tab or window.

1. Press **Ctrl+Shift+J** (Windows, Linux) or **Command+Option+J** (macOS).  DevTools opens, with the **Console** open in main toolbar.

   The webpage has already populated the **Console** with output.

   The first example demonstrates that the order of replacement of specifiers is the parameter order following the string:

   ```javascript
   console.log('%ix %s developer', 10, 'console'); // logs "10x console developer"
   ```
   
1. Click the expander triangles in the output results, to expand and see the data that's output by the above `log` statements that are in the webpage.

1. If necessary, press **F5** to reload the page and re-populate the **Console** output.

   Specifiers are used to log, format, and convert values:

   ![Use specifiers to log and convert values](../media/console-log-specifiers.msft.png)

1. In the **Console**, click triangles to expand the log results, to see the difference between the `%o` and `%O` specifiers.

   The body of the webpage is either displayed as an expandable DOM node, or as a full list of all JavaScript properties on the webpage body:

   ![Expand the results displays the difference between the %O and %o specifier - the body is either displayed as an expandable DOM node or as a full list of all JavaScript properties on the webpage body](../media/console-log-specifiers-expanded.msft.png)

1. Copy and paste the above example code listing into the **Console**, and then press **Enter**.

   Output is displayed in the **Console**, below the code that you entered.


<!-- ====================================================================== -->
## Group log messages

If you log a lot of information, you can use the `group` and `groupCollapsed` methods to display log messages as expandable and collapsible groups in the **Console**.  Groups can be nested and named to make the data much easier to understand.

### Example code

```javascript
// Example 1: Nested groups, with the inner group hidden (collapsed):
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

// Example 2:
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


### Demo webpage: Grouping logs

In this example, the group names are optionally generated.

<!-- demo 4 -->

1. Open the demo page [Console messages examples: Grouping logs](https://microsoftedge.github.io/Demos/devtools-console/logging-with-groups.html) in a new tab or window.

1. Press **Ctrl+Shift+J** (Windows, Linux) or **Command+Option+J** (macOS).  DevTools opens, with the **Console** open in main toolbar.

   The webpage has already populated the **Console** with output.

   Logging lots of values as groups:

   ![Log lots of values as groups](../media/console-log-groups.msft.png)

1. In the Console output, expand and collapse each of the sections:

   ![Each group can be expanded and collapsed](../media/console-log-groups-expanded.msft.png)

1. Copy and paste the above example code listing into the **Console**, and then press **Enter**.

   Output is displayed in the **Console**, below the code that you entered.


<!-- ====================================================================== -->
## Display complex data as tables

The `console.table()` method logs complex data not as a collapsible and expandable object, but as a table that you can sort using different headers.  A sorted table makes it much easier for people to review the information.


### Example code

```javascript
let technologies = {
  "Standards": ["HTML", "CSS", "SVG", "ECMAScript"],
  "Others": ["jQuery", "Markdown", "Textile", "Sass", "Pug"]
}
// log technologies as an object
console.log(technologies);
// show technologies as a table
console.table(technologies);

// get the dimensions of the document body
let bodyDimensions = document.body.getBoundingClientRect();
// show dimensions as an object
console.log(bodyDimensions);
// show dimensions as a table
console.table(bodyDimensions);
```

The second portion of the code listing from the demo page is shown further down.


### Demo webpage: Using table formatting

To show complex data as tables:

<!-- demo 5 -->

1. Open the demo page [Console messages examples: Using table](https://microsoftedge.github.io/Demos/devtools-console/logging-with-table.html) in a new window or tab.

1. Press **Ctrl+Shift+J** (Windows, Linux) or **Command+Option+J** (macOS).  DevTools opens, with the **Console** open in main toolbar.

   The webpage has already populated the **Console** with output.

1. In the **Console**, click the expander triangles.

1. Click the expander triangles.  Displaying data with `console.table` makes the data easier to read:

   ![Display data with console.table to make it easier to read](../media/console-log-table.msft.png)

1. Copy and paste the above code listing into the **Console**, and then press **Enter**.

   Output is displayed in the **Console**, below the code that you entered.


The output of `console.table` has a table format.  The output has a table format not only when the output is displayed in the **Console**, but also, if you copy and paste a table into Microsoft Excel, Microsoft Word, or any other product that supports tabular data, the structure of the output remains intact.


#### Specify an array of columns for each property, for readability

If the data has named parameters, the `console.table()` method also allows you to specify an `Array` of columns for each property to display as a second parameter.  The following example shows how to specify an array of columns that is more readable:

##### Example code

This code is from the same demo webpage as above.

```javascript
// get all the h1, p and script elements
let contentElements = document.querySelectorAll(':is(h1,p,script)');
// show the elements as an unfiltered table
console.table(contentElements)
// show only relevant columns
console.table(contentElements,['nodeName', 'innerText', 'offsetHeight'])
```

This code filters the information that the `console.table()` method displays.

The code provides an array of properties to display, as a second parameter:

![Filtering information that 'console.table' displays, and providing an array of properties to display, as a second parameter](../media/console-log-table-filtered.png)

1. Copy and paste the above code listing into the **Console**, and then press **Enter**.

   Output is displayed in the **Console**, below the code that you entered.


### Log statements vs. breakpoint debugging and Live Expressions

You may be tempted to use the `log` methods as your main means to debug webpages, because log methods are simple to use.  Consider the result of any `console.log()` request.  Released products shouldn't use any `log` statement that was used for debugging, because it could reveal inside information to people.  And the noise created in the **Console** is overwhelming.

Instead of `log` statements, try using [Breakpoint Debugging](../javascript/breakpoints.md) or [Live Expressions](live-expressions.md).  You may find that your workflows are more effective and you get better results.
