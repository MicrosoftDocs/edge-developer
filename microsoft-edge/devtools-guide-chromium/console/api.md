---
title: Console API Reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 11/04/2019
ms.topic: article
ms.prod: microsoft-edge
keywords: microsoft edge, web development, f12 tools, devtools
---
<!-- Copyright Kayce Basques 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.  -->





# Console API Reference   

  

Use the Console API to write messages to the Console from your JavaScript.  <!--See [Get Started With Logging Messages To The Console][ConsoleLog] for an interactive introduction to the topic.  -->  <!--See [Console Utilities API Reference][ConsoleUtilities] if you are looking for the convenience methods like `debug(function)` or `monitorEvents(node)` which are only available from the Console.  -->  

<!--todo: add log and utilities sections when available -->  

## `console.assert(expression, object)`   

**Log level**: `Error`  

<!--todo: add reference level (reference#persist-messages-across-page-loads) when available -->  

Writes an [error](#consoleerrorobject--object-) to the console when `expression` evaluates to `false`.  

```javascript
const x = 5;
const y = 3;
const reason = 'x is expected to be less than y';
console.assert(x < y, {x, y, reason});
```  

> ##### Figure 1  
> The result of the `console.assert()` example  
> ![The result of the console.assert() example][ImageAssert]  

## `console.clear()`   

Clears the console.  

```javascript
console.clear();  
```  

If **Preserve Log** is enabled, `console.clear()` is disabled.  

<!--todo: add preserve log (reference#filter-by-log-level) when available -->  

<!--See also: [Clear the Console][ConsoleReferenceClear]  -->  

## `console.count([label])`   

**Log level**: `Info`  

Writes the number of times that `count()` has been invoked at the same line and with the same `label`.  Call [`console.countReset([label])`](#consolecountresetlabel) to reset the count.  

```javascript
console.count();
console.count('coffee');
console.count();
console.count();
```  

> ##### Figure 2  
> The result of the `console.count()` example  
> ![The result of the console.count() example][ImageCount]  

## `console.countReset([label])`   

Resets a count.  

```javascript
console.countReset();
console.countReset('coffee');
```  

## `console.debug(object [, object, ...])`   

**Log level**: `Info`  

Identical to [`console.log(object [, object, ...])`](#consolelogobject--object-).  

```javascript
console.debug('debug');  
```  

> ##### Figure 3  
> The result of the `console.debug()` example  
> ![The result of the console.debug() example][ImageDebug]  

## `console.dir(object)`   

**Log level**: `Info`  

Prints a JSON representation of the specified object.  

```javascript
console.dir(document.head);
```  

> ##### Figure 4  
> The result of the `console.dir()` example  
> ![The result of the console.dir() example][ImageDir]  

## `console.dirxml(node)`   

**Log level**: `Info`  

Prints an XML representation of the descendants of `node`.  

```javascript
console.dirxml(document);
```  

> ##### Figure 5  
> The result of the `console.dirxml()` example  
> ![The result of the console.dirxml() example][ImageDirXml]  

## `console.error(object [, object, ...])`   

**Log level**: `Error`  

Prints `object` to the Console, formats it as an error, and includes a stack trace.  

```javascript
console.error("I'm sorry, Dave.  I'm afraid I can't do that.");
```  

> ##### Figure 6  
> The result of the `console.error()` example  
> ![The result of the console.error() example][ImageError]  

## `console.group(label)`   

Visually groups messages together until `console.groupEnd(label)` is called.  Use `console.groupCollapsed(label)` to collapse the group when it is initially logged to the Console.  

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

## `console.groupCollapsed(label)`   

Same as [`console.group(label)`](#consolegrouplabel), except the group is initially collapsed when it is logged to the Console.  

## `console.groupEnd(label)`   

Stops visually grouping messages.  See [`console.group`](#consolegrouplabel).  

## `console.info(object [, object, ...])`   

**Log level**: `Info`  

Identical to [`console.log(object [, object, ...])`](#consolelogobject--object-).  

```javascript
console.info('info');
```  

> ##### Figure 8  
> The result of the `console.info()` example  
> ![The result of the console.info() example][ImageInfo]  

## `console.log(object [, object, ...])`   

**Log level**: `Info`  

Prints a message to the Console.  

```javascript
console.log('log');
```  

> ##### Figure 9  
> The result of the `console.log()` example  
> ![The result of the console.log() example][ImageLog]  

## `console.table(array)`   

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

## `console.time([label])`   

Starts a new timer.  Call `console.timeEnd([label])` to stop the timer and print the elapsed time to the Console.  

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

## `console.timeEnd([label])`   

**Log level**: `Info`  

Stops a timer.  See [`console.time()`](#consoletimelabel).  

## `console.trace()`   

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

## `console.warn(object [, object, ...])`   

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

<!--[ConsoleLog]: log.md "Get Started With Logging Messages In The Console"  -->
<!--[ConsoleUtilities]: utilities.md "Console Utilities API Reference"  -->
<!--[ConsoleReferenceClear]: reference.md#clear-the-console "Clear the Console - Console Reference"  -->
<!--[ConsoleReferencePersist]: reference.md#persist-messages-across-page-loads "Persist messages across page loads - Console Reference"  -->  
<!--[ReferenceLevel]: reference.md#filter-by-log-level "Filter by log level - Console Reference"  -->  

[MicrosoftEdgeDevTools]: https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/api) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools & Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: http://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
