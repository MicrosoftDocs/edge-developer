---
title: Console API Reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 01/17/2020
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





# Console API Reference   

  

Use the Console API methods to write messages to the Console from your JavaScript.  See [Get Started With Logging Messages To The Console][DevtoolsConsoleLog] for an interactive introduction to the topic.  <!--See [Console Utilities API Reference][ConsoleUtilities] if you are looking for the convenience methods like `debug(function)` or `monitorEvents(node)` which are only available from the Console.  -->  

<!--todo: add and utilities sections when available -->  

## assert  
```javascript
console.assert(expression, object)
```

**Log level**: `Error`  

<!--todo: add reference level (reference#persist-messages-across-page-loads) when available -->  

Writes an [error](#error) to the console when `expression` evaluates to `false`.  

```javascript
const x = 5;
const y = 3;
const reason = 'x is expected to be less than y';
console.assert(x < y, {x, y, reason});
```  

> ##### Figure 1  
> The result of the `console.assert()` example  
> ![The result of the console.assert() example][ImageAssert]  

## clear  

```javascript
console.clear()
```

Clears the console.  

```javascript
console.clear();  
```  

If **Preserve Log** is enabled, the [clear](#clear) method is disabled.  

<!--todo: add preserve log (reference#filter-by-log-level) when available -->  

<!--See also: [Clear the Console][ConsoleReferenceClear]  -->  

## count  

```javascript
console.count([label])
```  

**Log level**: `Info`  

Writes the number of times that the [count](#count) method has been invoked at the same line and with the same `label`.  Use the [countReset](#countreset) method to reset the count.  

```javascript
console.count();
console.count('coffee');
console.count();
console.count();
```  

> ##### Figure 2  
> The result of the `console.count()` example  
> ![The result of the console.count() example][ImageCount]  

## countReset  

```javascript
console.countReset([label])
```  

Resets a count.  

```javascript
console.countReset();
console.countReset('coffee');
```  

## debug  

```javascript
console.debug(object [, object, ...])
```  

**Log level**: `Info`  

Identical to the [log](#log) method.  

```javascript
console.debug('debug');  
```  

> ##### Figure 3  
> The result of the `console.debug()` example  
> ![The result of the console.debug() example][ImageDebug]  

## dir  

```javascript
console.dir(object)
```  

**Log level**: `Info`  

Prints a JSON representation of the specified object.  

```javascript
console.dir(document.head);
```  

> ##### Figure 4  
> The result of the `console.dir()` example  
> ![The result of the console.dir() example][ImageDir]  

## dirxml  

```javascript
console.dirxml(node)
```  

**Log level**: `Info`  

Prints an XML representation of the descendants of `node`.  

```javascript
console.dirxml(document);
```  

> ##### Figure 5  
> The result of the `console.dirxml()` example  
> ![The result of the console.dirxml() example][ImageDirXml]  

## error  

```javascript
console.error(object [, object, ...])
```  

**Log level**: `Error`  

Prints the `object` to the Console, formats it as an error, and includes a stack trace.  

```javascript
console.error("I'm sorry, Dave.  I'm afraid I can't do that.");
```  

> ##### Figure 6  
> The result of the `console.error()` example  
> ![The result of the console.error() example][ImageError]  

## group  

```javascript
console.group(label)
```  

Visually groups messages together until the [groupEnd](#groupend) method is used.  Use the [groupCollapsed](#groupcollapsed) method to collapse the group when it is initially logged to the Console.  

```javascript
const label = 'Adolescent Irradiated Espionage Tortoises';
console.group(label);
console.info('Leo');
console.info('Mike');
console.info('Don');
console.info('Raph');
console.groupEnd(label);
```  

> ##### Figure 7  
> The result of the `console.group()` example  
> ![The result of the console.group() example][ImageGroup]  

## groupCollapsed  

```javascript
console.groupCollapsed(label)
```  

Same as the [log](#log) method, except the group is initially collapsed when it is logged to the Console.  

## groupEnd  

```javascript
console.groupEnd(label)
```  

Stops visually grouping messages.  See the [group](#group) method.  

## info  

```javascript
console.info(object [, object, ...])
```  

**Log level**: `Info`  

Identical to the [log](#log) method.  

```javascript
console.info('info');
```  

> ##### Figure 8  
> The result of the `console.info()` example  
> ![The result of the console.info() example][ImageInfo]  

## log  

```javascript
console.log(object [, object, ...])
```  

**Log level**: `Info`  

Prints a message to the Console.  

```javascript
console.log('log');
```  

> ##### Figure 9  
> The result of the `console.log()` example  
> ![The result of the console.log() example][ImageLog]  

## table  

```javascript
console.table(array)
```  

**Log level**: `Info`  

Logs an array of objects as a table.  

```javascript
console.table([
    {
        first: 'René',
        last: 'Magritte',
    },
    {
        first: 'Chaim',
        last: 'Soutine',
        birthday: '18930113',
    },
    {
        first: 'Henri',
        last: 'Matisse',
    }
]);
```  

> ##### Figure 10  
> The result of the `console.table()` example  
> ![The result of the console.table() example][ImageTable]  

## time  

```javascript
console.time([label])
```  

Starts a new timer.  Use the [timeEnd](#timeend) method to stop the timer and print the elapsed time to the Console.  

```javascript
console.time();
for (var i = 0; i < 100000; i++) {
    let square = i ** 2;
}
console.timeEnd();
```  

> ##### Figure 11  
> The result of the `console.time()` example  
> ![The result of the console.time() example][ImageTime]  

## timeEnd  

```javascript
console.timeEnd([label])
```  

**Log level**: `Info`  

Stops a timer.  See the [time](#time) method.  

## trace  

```javascript
console.trace()
```  

**Log level**: `Info`  

Prints a stack trace to the Console.  

```javascript
const first = () => { second(); };
const second = () => { third(); };
const third = () => { fourth(); };
const fourth = () => { console.trace(); };
first();
```  

> ##### Figure 12  
> The result of the `console.trace()` example  
> ![The result of the console.trace() example][ImageTrace]  

## warn  

```javascript
console.warn(object [, object, ...])
```  

**Log level**: `Warning`  

Prints a warning to the Console.  

```javascript
console.warn('warn');
```  

> ##### Figure 13  
> The result of the `console.warn()` example  
> ![The result of the console.warn() example][ImageWarn]  

   

  

<!-- image links -->  

[ImageAssert]: images/console-demo-assert-button.msft.png "Figure 1: The result of the console.assert() example"  
[ImageCount]: images/console-demo-count-button.msft.png "Figure 2: The result of the console.count() example"  
[ImageDebug]: images/console-demo-debug-button.msft.png "Figure 3: The result of the console.debug() example"  
[ImageDir]: images/console-demo-dir-button.msft.png "Figure 4: The result of the console.dir() example"  
[ImageDirXml]: images/console-demo-dirxml-button.msft.png "Figure 5: The result of the console.dirxml() example"  
[ImageError]: images/console-demo-error-button.msft.png "Figure 6: The result of the console.error() example"  
[ImageGroup]: images/console-demo-group-button.msft.png "Figure 7: The result of the console.group() example"  
[ImageInfo]: images/console-demo-info-button.msft.png "Figure 8: The result of the console.info() example"  
[ImageLog]: images/console-demo-log-button.msft.png "Figure 9: The result of the console.log() example"  
[ImageTable]: images/console-demo-table-button.msft.png "Figure 10: The result of the console.table() example"  
[ImageTime]: images/console-demo-time-button.msft.png "Figure 11: The result of the console.time() example"  
[ImageTrace]: images/console-demo-trace-button.msft.png "Figure 12: The result of the console.trace() example"  
[ImageWarn]: images/console-demo-warn-button.msft.png "Figure 13: The result of the console.warn() example"  

<!-- links -->  

[DevtoolsConsoleLog]: log.md "Get Started With Logging Messages In The Console"  
<!--[ConsoleUtilities]: utilities.md "Console Utilities API Reference"  -->
<!--[ConsoleReferenceClear]: reference.md#clear-the-console "Clear the Console - Console Reference"  -->
<!--[ConsoleReferencePersist]: reference.md#persist-messages-across-page-loads "Persist messages across page loads - Console Reference"  -->  
<!--[ReferenceLevel]: reference.md#filter-by-log-level "Filter by log level - Console Reference"  -->  

[MicrosoftEdgeDevTools]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/api) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
