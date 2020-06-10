---
title: Console API Reference
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/09/2020
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

Use the Console API methods to write messages to the Console from your JavaScript.  For an interactive introduction to the topic, see [Get Started With Logging Messages To The Console][DevtoolsConsoleLog].  For the convenience methods like `debug()` or `monitorEvents()` which are only available from the **Console** pane, see [Console Utilities API Reference][DevtoolConsoleUtilities].  

---  

## assert  

```javascript
console.assert(expression, object)
```

[Log level][DevtoolsConsoleReferencePersist]: `Error`  

<!--todo: add reference level (reference#persist-messages-across-page-loads) when available -->  

Writes an [error](#error) to the console when `expression` evaluates to `false`.  

```javascript
const x = 5;
const y = 3;
const reason = 'x is expected to be less than y';
console.assert(x < y, {x, y, reason});
```  

:::image type="complex" source="../media/console-demo-assert-button.msft.png" alt-text="The result of the console.assert() example" lightbox="../media/console-demo-assert-button.msft.png":::
   Figure 1:  The result of the `console.assert()` example  
:::image-end:::  

---  

## clear  

```javascript
console.clear()
```

Clears the console.  

```javascript
console.clear();  
```  

If [Preserve Log][DevtoolsConsoleReferenceLevel] is enabled, the [clear](#clear) method is disabled.  

### See also  

*   [Clear the Console][DevtoolsConsoleReferenceClear]  

---  

## count  

```javascript
console.count([label])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

Writes the number of times that the [count](#count) method has been invoked at the same line and with the same `label`.  Use the [countReset](#countreset) method to reset the count.  

```javascript
console.count();
console.count('coffee');
console.count();
console.count();
```  

:::image type="complex" source="../media/console-demo-count-button.msft.png" alt-text="The result of the console.count() example" lightbox="../media/console-demo-count-button.msft.png":::
   Figure 2:  The result of the `console.count()` example  
:::image-end:::  

---  

## countReset  

```javascript
console.countReset([label])
```  

Resets a count.  

```javascript
console.countReset();
console.countReset('coffee');
```  

---  

## debug  

```javascript
console.debug(object [, object, ...])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Verbose`

Identical to [log](#log) except different log level.  

```javascript
console.debug('debug');  
```  

:::image type="complex" source="../media/console-demo-debug-button.msft.png" alt-text="The result of the console.debug() example" lightbox="../media/console-demo-debug-button.msft.png":::
   Figure 3:  The result of the `console.debug()` example  
:::image-end:::  

---  

## dir  

```javascript
console.dir(object)
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

Prints a JSON representation of the specified object.  

```javascript
console.dir(document.head);
```  

:::image type="complex" source="../media/console-demo-dir-button.msft.png" alt-text="The result of the console.dir() example" lightbox="../media/console-demo-dir-button.msft.png":::
   Figure 4:  The result of the `console.dir()` example  
:::image-end:::  

---  

## dirxml  

```javascript
console.dirxml(node)
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

Prints an XML representation of the descendants of `node`.  

```javascript
console.dirxml(document);
```  

:::image type="complex" source="../media/console-demo-dirxml-button.msft.png" alt-text="The result of the console.dirxml() example" lightbox="../media/console-demo-dirxml-button.msft.png":::
   Figure 5:  The result of the `console.dirxml()` example  
:::image-end:::  

---  

## error  

```javascript
console.error(object [, object, ...])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Error`  

Prints the `object` to the Console, formats it as an error, and includes a stack trace.  

```javascript
console.error("I'm sorry, Dave.  I'm afraid I can't do that.");
```  

:::image type="complex" source="../media/console-demo-error-button.msft.png" alt-text="The result of the console.error() example" lightbox="../media/console-demo-error-button.msft.png":::
   Figure 6:  The result of the `console.error()` example  
:::image-end:::  

---  

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

:::image type="complex" source="../media/console-demo-group-button.msft.png" alt-text="The result of the console.group() example" lightbox="../media/console-demo-group-button.msft.png":::
   Figure 7:  The result of the `console.group()` example  
:::image-end:::  

---  

## groupCollapsed  

```javascript
console.groupCollapsed(label)
```  

Same as the [log](#log) method, except the group is initially collapsed when it is logged to the Console.  

---  

## groupEnd  

```javascript
console.groupEnd(label)
```  

Stops visually grouping messages.  See the [group](#group) method.  

---  

## info  

```javascript
console.info(object [, object, ...])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

Identical to the [log](#log) method.  

```javascript
console.info('info');
```  

:::image type="complex" source="../media/console-demo-info-button.msft.png" alt-text="The result of the console.info() example" lightbox="../media/console-demo-info-button.msft.png":::
   Figure 8:  The result of the `console.info()` example  
:::image-end:::  

---  

## log  

```javascript
console.log(object [, object, ...])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

Prints a message to the Console.  

```javascript
console.log('log');
```  

:::image type="complex" source="../media/console-demo-log-button.msft.png" alt-text="The result of the console.log() example" lightbox="../media/console-demo-log-button.msft.png":::
   Figure 9:  The result of the `console.log()` example  
:::image-end:::  

---  

## table  

```javascript
console.table(array)
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

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

:::image type="complex" source="../media/console-demo-table-button.msft.png" alt-text="The result of the console.table() example" lightbox="../media/console-demo-table-button.msft.png":::
   Figure 10:  The result of the `console.table()` example  
:::image-end:::  

---  

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

:::image type="complex" source="../media/console-demo-time-button.msft.png" alt-text="The result of the console.time() example" lightbox="../media/console-demo-time-button.msft.png":::
   Figure 11:  The result of the `console.time()` example  
:::image-end:::  

---  

## timeEnd  

```javascript
console.timeEnd([label])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

Stops a timer.  See the [time](#time) method.  

---  

## trace  

```javascript
console.trace()
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

Prints a stack trace to the Console.  

```javascript
const first = () => { second(); };
const second = () => { third(); };
const third = () => { fourth(); };
const fourth = () => { console.trace(); };
first();
```  

:::image type="complex" source="../media/console-demo-trace-button.msft.png" alt-text="The result of the console.trace() example" lightbox="../media/console-demo-trace-button.msft.png":::
   Figure 12:  The result of the `console.trace()` example  
:::image-end:::  

---  

## warn  

```javascript
console.warn(object [, object, ...])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Warning`  

Prints a warning to the Console.  

```javascript
console.warn('warn');
```  

:::image type="complex" source="../media/console-demo-warn-button.msft.png" alt-text="The result of the console.warn() example" lightbox="../media/console-demo-warn-button.msft.png":::
   Figure 13:  The result of the `console.warn()` example  
:::image-end:::  

<!-- links -->  

[DevtoolsConsoleLog]: /microsoft-edge/devtools-guide-chromium/console/log "Get Started With Logging Messages In The Console"  
[DevtoolConsoleUtilities]: /microsoft-edge/devtools-guide-chromium/console/utilities "Console Utilities API Reference"  
[DevtoolsConsoleReferenceClear]: /microsoft-edge/devtools-guide-chromium/console/reference#clear-the-console "Clear the Console - Console Reference"  
[DevtoolsConsoleReferencePersist]: /microsoft-edge/devtools-guide-chromium/console/reference#persist-messages-across-page-loads "Persist messages across page loads - Console Reference"  
[DevtoolsConsoleReferenceLevel]: /microsoft-edge/devtools-guide-chromium/console/reference#filter-by-log-level "Filter by log level - Console Reference"  

[MicrosoftEdgeDevTools]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/api) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors/kaycebasques  
