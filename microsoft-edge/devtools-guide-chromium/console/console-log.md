---
description: The main uses of the Microsoft Edge DevTools Console are logging messages and running JavaScript.
title: Logging messages in the Console tool
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/19/2021
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---

# Logging in the Console tool

Ever since browsers started offering developer tools, **Console** has become a favorite of developers. The reason is simple: in most programming courses we are taught to put out some kind of print command where we want to gain insights what is happening. In JavaScript and before we had DevTools, this was either using an `alert()` or a `document.write()` statement, and neither were a satisfying experience.

If you want to log some information in **Console** there are a lot of methods available to you. You can see all available ones in the [API reference][DevToolsConsoleAPI] but here are the most important ones.

```JavaScript
// prints the text to the console as  a log message
console.log('This is a log message')
// prints the text to the console as an informational message
console.info('This is some information') 
// prints the text to the console as an error message
console.error('This is an error')
// prints the text to the console as a warning
console.warn('This is a warning') 
```

If you try these out in **Console** yourself by copying or by navigating to the [logging examples demo][DevtoolsConsoleLoggingDemo] you can see that `log()` and `info()` seemingly do the same thing, whilst `error()` and `warn()` show an icon next to the message and a way to inspect the [stack trace][WikiStackTrace] of this message.

:::image type="complex" source="../media/console-log-examples.msft.png" alt-text="Console showing the messages caused by the different logging APIs" lightbox="../media/console-log-examples.msft.png":::
   Console showing the messages caused by the different logging APIs 
:::image-end:::  

It is, however, still a good idea to use `info()` and `log()` for different logging tasks as that allows you to [filter by type in the console][DevtoolsFilteringConsole].

## Logging different types

Instead of logging text you can send any valid JavaScript or DOM references to **Console**. The beauty there is that **Console** recognizes the type of what you send to it and gives you the best possible representation.

```JavaScript
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

You can paste the code above into **Console** or navigate to the [logging different types demo][DevtoolsConsoleTypesDemo] to see the results. Each of these are displayed in a different way and you can use the triangles to toggle the information and analyze each one in more detail. The curly braces `{}` around the variable `x` are a nice little trick to avoid having lots of log messages where you only get a value but you don't know where it came from.

:::row:::
   :::column span="":::
      :::image type="complex" source="../media/console-log-types.msft.png" alt-text="Logging variables of different types in the console" lightbox="../media/console-log-types.msft.png":::
         Logging variables of different types in the **Console**
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/console-log-types-expanded.msft.png" alt-text="Logging variables of different types in the console with expanded extra information" lightbox="../media/console-log-types-expanded.msft.png":::
         Logging variables of different types in the **Console** with expanded extra information
      :::image-end:::  
   :::column-end:::
:::row-end:::

## Formatting and converting values with specifiers

A special feature of all the logging methods is that you can use specifiers in your log message. These start with a percentage sign and allow you to log certain values in different formats and even convert them.

* `%s` logs as Strings
* `%i` or `%d` logs as Integers
* `%f` logs as a floating-point value
* `%o` logs as an expandable DOM element
* `%O` logs as an expandable JavaScript object
* `%c` allows you to style you message with CSS

```JavaScript
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
// Shows the message as red and big
console.log('%cImportant message follows','color:red;font-size:40px');
```

The first example shows that the order of replacement of specifiers is the parameter order following the string. You can paste the code above into **Console** or navigate to the [logging with specifiers demo][DevtoolsConsoleSpecifiersDemo] to see the results. When you expand the information logged you can see what a huge difference `%o` and `%O` can make.

:::row:::
   :::column span="":::
      :::image type="complex" source="../media/console-log-specifiers.msft.png" alt-text="Using specifiers to log and convert values" lightbox="../media/console-log-specifiers.msft.png":::
         Using specifiers to log and convert values
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/console-log-specifiers-expanded.msft.png" alt-text="Expanding the results shows the difference between the %O and %o specifier - the body is either displayed as an expandable DOM node or as a full list of all JavaScript properties on the document body" lightbox="../media/console-log-specifiers-expanded.msft.png":::
        Expanding the results shows the difference between the `%O` and `%o` specifier - the body is either displayed as an expandable DOM node or as a full list of all JavaScript properties on the document body
      :::image-end:::  
   :::column-end:::
:::row-end:::

## Grouping log messages

If you log a lot of information you can use the `group` and `groupCollapsed` methods to display them as expandable and collapsible groups in the console. Groups can be nested and giving the groups a name makes the data a lot easier to understand. 

```JavaScript
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

As shown in the second example the group names could also be generated. You can paste the code above into **Console** or navigate to the [logging with groups demo][DevtoolsConsoleGroupsDemo] to see the results. You can expand and collapse each of the sections. 

:::row:::
   :::column span="":::
      :::image type="complex" source="../media/console-log-groups.msft.png" alt-text="Logging lots of values as groups" lightbox="../media/console-log-groups.msft.png":::
         Logging lots of values as groups
      :::image-end:::  
   :::column-end:::
   :::column span="":::
      :::image type="complex" source="../media/console-log-groups-expanded.msft.png" alt-text="Each group can be expanded and collapsed" lightbox="../media/console-log-groups-expanded.msft.png":::
        Each group can be expanded and collapsed
      :::image-end:::  
   :::column-end:::
:::row-end:::

## Showing complex data as tables

The `console.table()` method logs complex data not as an collapsible and expandable object but as a table that you can sort by activating the different headers. This can make it much easier for people to read the information. You can see this in the [logging as table][DevtoolsConsoleTableDemo] example.

```JavaScript
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

:::image type="complex" source="../media/console-log-table.mfst.png" alt-text="Showing data with console.table can make it much easier to read" lightbox="../media/console-log-table.mfst.png":::
   Showing data with console.table can make it much easier to read
:::image-end:::  

The output of `console.table` has a table format not only when it is displayed in **Console**. For example you can copy a table and paste it into Excel, Word or any other products that support tabular data. 

If the data has named parameters, the `console.table()` method also allows for an `Array` of columns to show as a second parameter. This example shows how that can make things much more readable .

```JavaScript
// get all the h1, p and script elements 
let contentElements = document.querySelectorAll(':is(h1,p,script)');
// show them as an unfiltered table 
console.table(contentElements)
// show only relevant columns 
console.table(contentElements,['nodeName', 'innerText', 'offsetHeight'])
```

:::image type="complex" source="../media/console-log-table-filtered.msft.png" alt-text="You can filter information that console.table should display by providing an array of properties to show as a second parameter" lightbox="../media/console-log-table-filtered.msft.png":::
   You can filter information that console.table should display by providing an array of properties to show as a second parameter
:::image-end:::

It is tempting to use the logging methods as your main means of debugging on the web as they are simple to use. But it is worth while considering the impact any `console.log()` has. Live products should not use any logging that was used for debugging as it could leak inside information to people and in general the noise we create in **Console** is a lot to take in. Often you will find that using [Breakpoint Debugging][DevtoolsBreakpoints] or even [Live Expressions][DevtoolsLiveExpressions] may be a more effective way to get better results.

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsBreakpoints]: /microsoft-edge/devtools-guide-chromium/javascript/breakpoints.md
[Live Expressions]: ./live-expressions.md
[DevtoolsFilteringConsole]: ./console-filtering.md
[DevtoolsConsoleLoggingDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-examples.html
[DevtoolsConsoleTypesDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-types.html
[DevtoolsConsoleSpecifiersDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-with-specifiers.html
[DevtoolsConsoleGroupsDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-with-groups.html
[DevtoolsConsoleTableDemo]: https://microsoftedge.github.io/DevToolsSamples/console/logging-with-table.html
[WikiStackTrace]: https://en.wikipedia.org/wiki/Stack_trace "Stack trace - Wikipedia"  
[DevtoolsConsoleErrorDemo]: https://microsoftedge.github.io/DevToolsSamples/console/error.html
[DevtoolsConsoleFilter]: ../microsoft-edge/devtools-guide-chromium/console/reference#filter-messages
[DevToolsIssues]: /microsoft-edge/devtools-guide-chromium/issues
[DevToolsConsoleAPI]: ./api.md "Console API Reference | Microsoft Docs"  
[DevtoolsConsoleLoggingMessages]: ./log.md "Get Started With Logging Messages In The Console | Microsoft Docs"  
[DevtoolsConsoleRunningJavascript]: ./javascript.md "Get Started With Running JavaScript In The Console | Microsoft Docs"  
[DevtoolsConsoleUtilitiesDebug]: ./utilities.md#debug "debug - Console Utilities API Reference | Microsoft Docs"  
[MDNMap]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map "Array.prototype.map() | MDN"  
[MDNWindow]: https://developer.mozilla.org/docs/Web/API/Window "Window | MDN"  
[WikiREPLoop]: https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop "Read–eval–print loop - Wikipedia"  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  