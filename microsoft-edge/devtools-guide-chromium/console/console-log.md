---
description: How to log messages and run JavaScript in the Microsoft Edge DevTools Console.
title: Log messages in the Console tool
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/24/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
# Log messages in the Console tool  

Ever since browsers started to offer developer tools, the **Console** is a favorite.  The reason is simple:  in most programming courses, you learn to output some kind of print command where you want to gain insights what happens.  In JavaScript and before, you had DevTools, this was either using an `alert()` or a `document.write()` statement, and neither were a satisfying experience.  

If you want to log information in **Console**, lots of methods are available to you.  You may display all available methods in the [API reference][DevtoolsConsoleApi], but the following codes snippet lists the most important ones.  

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

When you try any method in **Console** after you copy or navigate to [log examples demo][GithubMicrosoftedgeDevtoolssamplesConsoleLoggingExamplesHtml], the `log()` and `info()` methods seem to do the same thing, while the `error()` and `warn()` methods display an icon next to the message and a way to inspect the [stack trace][WikiStackTrace] of the message.  

:::image type="complex" source="../media/console-log-examples.msft.png" alt-text="Console displays the messages caused by different log APIs" lightbox="../media/console-log-examples.msft.png":::
   **Console** displays the messages caused by different log APIs  
:::image-end:::  

It is, however, still a good idea to use `info()` and `log()` for different log tasks as that allows you to [filter using type in the Console][DevtoolsConsoleConsoleFiltering].  

## Different types of logs  

Instead of log text you may send any valid JavaScript or DOM references to **Console**.  The **Console** is elegant and it determines the type that you send it.  It then gives you the best possible representation.  Paste the following code snippet above into **Console** or navigate to the [log different types demo][GithubMicrosoftedgeDevtoolssamplesConsoleLoggingTypesHtml] to display the results.  

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

Each result is displayed in a different way.  Use the triangles to toggle the information and analyze each one in more detail.  The curly braces `{}` around the variable `x` are a nice little trick to avoid lots of log messages where you only get a value but you do not know where it originated.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../media/console-log-types.msft.png" alt-text="Log variables of different types in the console" lightbox="../media/console-log-types.msft.png":::
         Log variables of different types in the **Console**  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/console-log-types-expanded.msft.png" alt-text="Log variables of different types in the console with expanded extra information" lightbox="../media/console-log-types-expanded.msft.png":::
         Log variables of different types in the **Console** with expanded extra information  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

## Format and convert values with specifiers

A special feature of all the log methods is that you may use specifiers in your log message.  The log methods start with a percentage sign \(`%`\) character and allow you to log certain values in different formats and even convert each.

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

The first example displays that the order of replacement of specifiers is the parameter order following the string.  Paste the code above into **Console** or navigate to the [log with specifiers demo][GithubMicrosoftedgeDevtoolssamplesConsoleLoggingWithSpecifiersHtml] to display the results.  Expand the information in the log to display the huge difference between `%o` and `%O`.

:::row:::
   :::column span="":::
      :::image type="complex" source="../media/console-log-specifiers.msft.png" alt-text="Use specifiers to log and convert values" lightbox="../media/console-log-specifiers.msft.png":::
         Use specifiers to log and convert values  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/console-log-specifiers-expanded.msft.png" alt-text="Expand the results displays the difference between the %O and %o specifier - the body is either displayed as an expandable DOM node or as a full list of all JavaScript properties on the webpage body" lightbox="../media/console-log-specifiers-expanded.msft.png":::
        Expand the results displays the difference between the `%O` and `%o` specifier - the body is either displayed as an expandable DOM node or as a full list of all JavaScript properties on the webpage body  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

## Group log messages

If you log much information, you may use the `group` and `groupCollapsed` methods to display log messages as expandable and collapsible groups in the **Console**.  Groups may be nested and name the groups to make the data a lot easier to understand.  

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

As displayed in the second example the group names are also generated.  Paste the code above into **Console** or navigate to the [log with groups demo][GithubMicrosoftedgeDevtoolssamplesConsoleLoggingWithGroupsHtml] to display the results.  You may expand and collapse each of the sections.  

:::row:::
   :::column span="":::
      :::image type="complex" source="../media/console-log-groups.msft.png" alt-text="Log lots of values as groups" lightbox="../media/console-log-groups.msft.png":::
         Log lots of values as groups  
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/console-log-groups-expanded.msft.png" alt-text="Each group may be expanded and collapsed" lightbox="../media/console-log-groups-expanded.msft.png":::
        Each group may be expanded and collapsed  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

## Display complex data as tables  

The `console.table()` method logs complex data not as a collapsible and expandable object, but as a table that you may sort using different headers.  A sorted table makes it much easier for people to review the information.  To display it in an example, navigate to [Console messages examples: Using table][GithubMicrosoftedgeDevtoolssamplesConsoleLoggingWithTableHtml].

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

:::image type="complex" source="../media/console-log-table.msft.png" alt-text="Display data with console.table to make it much easier to read" lightbox="../media/console-log-table.msft.png":::
   Display data with `console.table` to make it much easier to read
:::image-end:::  

The output of `console.table` has a table format not only when it is displayed in **Console**.  For example you may copy a table and paste it into Excel, Word or any other products that support tabular data.  

If the data has named parameters, the `console.table()` method also allows for an `Array` of columns to display as a second parameter.  This example displays how that may make things much more readable.

```javascript
// get all the h1, p and script elements 
let contentElements = document.querySelectorAll(':is(h1,p,script)');
// display the elements as an unfiltered table 
console.table(contentElements)
// display only relevant columns 
console.table(contentElements,['nodeName', 'innerText', 'offsetHeight'])
```  

:::image type="complex" source="../media/console-log-table-filtered.msft.png" alt-text="Filter information that console.table should display, provide an array of properties to display as a second parameter" lightbox="../media/console-log-table-filtered.msft.png":::
   Filter information that `console.table` should display, provide an array of properties to display as a second parameter  
:::image-end:::  

You may be tempted to use the log methods as your main means to debug webpages as log methods are simple to use.  Consider the result of any `console.log()` request.  Live products should not use any log that was used to debug.  It may leak inside information to people and the noise created in **Console** is overwhelming.  When you use [Breakpoint Debugging][DevtoolsJavascriptBreakpoints] or [Live Expressions][DevtoolsConsoleLiveExpressions], you may find that your workflows are more effective way and you get better results.

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleApi]: ./api.md "Console API Reference | Microsoft Docs"  
[DevtoolsConsoleLiveExpressions]: ./live-expressions.md "Monitor changes in JavaScript using Live Expressions | Microsoft Docs"  

[DevtoolsJavascriptBreakpoints]: ../javascript/breakpoints.md "How to pause your code with breakpoints in Microsoft Edge DevTools | Microsoft Docs"  

[GithubMicrosoftedgeDevtoolssamplesConsoleLoggingExamplesHtml]: https://microsoftedge.github.io/DevToolsSamples/console/logging-examples.html "Console messages examples: log, info, error and warn | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleLoggingTypesHtml]: https://microsoftedge.github.io/DevToolsSamples/console/logging-types.html "Console messages examples: logging different types | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleLoggingWithGroupsHtml]: https://microsoftedge.github.io/DevToolsSamples/console/logging-with-groups.html "Console messages examples: grouping logs | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleLoggingWithSpecifiersHtml]: https://microsoftedge.github.io/DevToolsSamples/console/logging-with-specifiers.html "Console messages examples: Logging with specifiers | GitHub"  
[GithubMicrosoftedgeDevtoolssamplesConsoleLoggingWithTableHtml]: https://microsoftedge.github.io/DevToolsSamples/console/logging-with-table.html "Console messages examples: Using table | GitHub"  

[WikiStackTrace]: https://en.wikipedia.org/wiki/Stack_trace "Stack trace | Wikipedia"  
