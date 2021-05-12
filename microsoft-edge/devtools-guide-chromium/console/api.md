---
description: Use the Console API to write messages to the Console.
title: Console API reference
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
# Console API reference  

The **Console** tool is helpful when you complete multiple tasks in the DevTools.  APIs are available to include in your scripts. Convenience methods are only available for use in the **Console** tool, such as the `debug()` and `monitorEvents()` methods.  For more information on getting started with the **Console**, navigate to [Get started with logging messages to the Console][DevtoolsConsoleConsoleLog].  For more information on the convenience methods in the **Console**, navigate to [Console Utilities API Reference][DevtoolConsoleUtilities].  

---  

## assert  

This method writes an [error](#error) to the **Console** when `expression` evaluates to `false`.  

### JavaScript syntax  

```javascript
console.assert(expression, object)
```

[Log level][DevtoolsConsoleReferencePersist]: `Error`  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      const x = 5;
      const y = 3;
      const reason = 'x is expected to be less than y';
      console.assert(x < y, {x, y, reason});
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      :::image type="complex" source="../media/console-demo-assert-button.msft.png" alt-text="The result of the console.assert() example" lightbox="../media/console-demo-assert-button.msft.png":::
         The result of the `console.assert()` example  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

---  

## clear  

This method clears the **Console**.  

If [Preserve Log][DevtoolsConsoleReferenceFilter] is turned on, the [clear](#clear) method is turned off.  

### JavaScript syntax  

```javascript
console.clear()
```

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      console.clear();  
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      
   :::column-end:::
:::row-end:::  

### See also  

*   [Clear the Console][DevtoolsConsoleReferenceClear]  

---  

## count  

This method writes the number of times that the [count](#count) method has been invoked at the same line and with the same `label`.  Use the [countReset](#countreset) method to reset the count.  

### JavaScript syntax  

```javascript
console.count([label])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      console.count();
      console.count('coffee');
      console.count();
      console.count();
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      :::image type="complex" source="../media/console-demo-count-button.msft.png" alt-text="The result of the console.count() example" lightbox="../media/console-demo-count-button.msft.png":::
         The result of the `console.count()` example  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

---  

## countReset  

This method resets a count.  

### JavaScript syntax  

```javascript
console.countReset([label])
```  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      console.countReset();
      console.countReset('coffee');
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      
   :::column-end:::
:::row-end:::  

---  

## debug  

This method is identical to the [log](#log) method, except different log level.  

### JavaScript syntax  

```javascript
console.debug(object [, object, ...])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Verbose`  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      console.debug('debug');  
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      :::image type="complex" source="../media/console-demo-debug-button.msft.png" alt-text="The result of the console.debug() example" lightbox="../media/console-demo-debug-button.msft.png":::
         The result of the `console.debug()` example  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

---  

## dir  

This method prints a JSON representation of the specified object.  

### JavaScript syntax  

```javascript
console.dir(object)
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      console.dir(document.head);
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      :::image type="complex" source="../media/console-demo-dir-button.msft.png" alt-text="The result of the console.dir() example" lightbox="../media/console-demo-dir-button.msft.png":::
         The result of the `console.dir()` example  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

---  

## dirxml  

This method prints an XML representation of the descendants of `node`.  

### JavaScript syntax  

```javascript
console.dirxml(node)
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      console.dirxml(document);
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      :::image type="complex" source="../media/console-demo-dirxml-button.msft.png" alt-text="The result of the console.dirxml() example" lightbox="../media/console-demo-dirxml-button.msft.png":::
         The result of the `console.dirxml()` example  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

---  

## error  

This method prints the `object` to the **Console**, formats it as an error, and includes a stack trace.  

### JavaScript syntax  

```javascript
console.error(object [, object, ...])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Error`  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      console.error("I'm sorry, Dave.  I'm afraid I can't do that.");
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      :::image type="complex" source="../media/console-demo-error-button.msft.png" alt-text="The result of the console.error() example" lightbox="../media/console-demo-error-button.msft.png":::
         The result of the `console.error()` example  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

---  

## group  

This method visually groups messages together until the [groupEnd](#groupend) method is used.  Use the [groupCollapsed](#groupcollapsed) method to collapse the group when it initially logs to the **Console**.  

### JavaScript syntax  

```javascript
console.group(label)
```  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      const label = 'Adolescent Irradiated Espionage Tortoises';
      console.group(label);
      console.info('Leo');
      console.info('Mike');
      console.info('Don');
      console.info('Raph');
      console.groupEnd(label);
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      :::image type="complex" source="../media/console-demo-group-button.msft.png" alt-text="The result of the console.group() example" lightbox="../media/console-demo-group-button.msft.png":::
         The result of the `console.group()` example  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

---  

## groupCollapsed  

This method is identical to the [log](#log) method, except the group is initially collapsed when it logs to the **Console**.  

### JavaScript syntax  

```javascript
console.groupCollapsed(label)
```  

---  

## groupEnd  

This method stops visually grouping messages.  Navigate to the [group](#group) method.  

### JavaScript syntax  

```javascript
console.groupEnd(label)
```  

---  

## info  

This method is identical to the [log](#log) method.  

### JavaScript syntax  

```javascript
console.info(object [, object, ...])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      console.info('info');
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      :::image type="complex" source="../media/console-demo-info-button.msft.png" alt-text="The result of the console.info() example" lightbox="../media/console-demo-info-button.msft.png":::
         The result of the `console.info()` example  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

---  

## log  

This method prints a message to the **Console**.  

### JavaScript syntax  

```javascript
console.log(object [, object, ...])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      console.log('log');
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      :::image type="complex" source="../media/console-demo-log-button.msft.png" alt-text="The result of the console.log() example" lightbox="../media/console-demo-log-button.msft.png":::
         The result of the `console.log()` example  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

---  

## table  

This method logs an array of objects as a table.  

### JavaScript syntax  

```javascript
console.table(array)
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
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
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      :::image type="complex" source="../media/console-demo-table-button.msft.png" alt-text="The result of the console.table() example" lightbox="../media/console-demo-table-button.msft.png":::
         The result of the `console.table()` example  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

---  

## time  

This method starts a new timer.  Use the [timeEnd](#timeend) method to stop the timer and print the elapsed time to the **Console**.  

### JavaScript syntax  

```javascript
console.time([label])
```  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      console.time();
      for (var i = 0; i < 100000; i++) {
          let square = i ** 2;
      }
      console.timeEnd();
      ```
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      :::image type="complex" source="../media/console-demo-time-button.msft.png" alt-text="The result of the console.time() example" lightbox="../media/console-demo-time-button.msft.png":::
         The result of the `console.time()` example  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

---  

## timeEnd  

This method stops a timer.  For more information, navigate to the [time](#time) method.  

### JavaScript syntax  

```javascript
console.timeEnd([label])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

---  

## trace  

This method prints a stack trace to the **Console**.  

### JavaScript syntax  

```javascript
console.trace()
```  

[Log level][DevtoolsConsoleReferencePersist]: `Info`  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      const first = () => { second(); };
      const second = () => { third(); };
      const third = () => { fourth(); };
      const fourth = () => { console.trace(); };
      first();
      ```  
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      :::image type="complex" source="../media/console-demo-trace-button.msft.png" alt-text="The result of the console.trace() example" lightbox="../media/console-demo-trace-button.msft.png":::
         The result of the `console.trace()` example  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

---  

## warn  

This method prints a warning to the **Console**.  

### JavaScript syntax  

```javascript
console.warn(object [, object, ...])
```  

[Log level][DevtoolsConsoleReferencePersist]: `Warning`  

### JavaScript example  

:::row:::
   :::column span="1":::
      Input  
   :::column-end:::
   :::column span="3":::
      ```javascript
      console.warn('warn');
      ```
   :::column-end:::
:::row-end:::  
:::row:::
   :::column span="1":::
      Output
   :::column-end:::
   :::column span="3":::
      :::image type="complex" source="../media/console-demo-warn-button.msft.png" alt-text="The result of the console.warn() example" lightbox="../media/console-demo-warn-button.msft.png":::
         The result of the `console.warn()` example  
      :::image-end:::  
   :::column-end:::
:::row-end:::  

---  

## Getting in touch with the Microsoft Edge DevTools team  

[!INCLUDE [contact DevTools team note](../includes/contact-devtools-team-note.md)]  

<!-- links -->  

[DevtoolsConsoleConsoleLog]: ./console-log.md "Logs in the Console tool | Microsoft Docs"  
[DevtoolConsoleUtilities]: ./utilities.md "Console Utilities API reference | Microsoft Docs"  
[DevtoolsConsoleReferenceClear]: ./reference.md#clear-the-console "Clear the Console - Console reference | Microsoft Docs"  
[DevtoolsConsoleReferenceFilter]: ./reference.md#filter-by-log-level "Filter by log level - Console reference | Microsoft Docs"  
[DevtoolsConsoleReferencePersist]: ./reference.md#persist-messages-across-page-loads "Persist messages across page loads - Console reference | Microsoft Docs"  

[MicrosoftEdgeDevTools]: /microsoft-edge/devtools-guide-chromium "Microsoft Edge (Chromium) Developer Tools overview | Microsoft Docs"  

> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google][GoogleSitePolicies] and used according to terms described in the [Creative Commons Attribution 4.0 International License][CCA4IL].  
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/api) and is authored by [Kayce Basques][KayceBasques] \(Technical Writer, Chrome DevTools \& Lighthouse\).  

[![Creative Commons License][CCby4Image]][CCA4IL]  
This work is licensed under a [Creative Commons Attribution 4.0 International License][CCA4IL].  

[CCA4IL]: https://creativecommons.org/licenses/by/4.0  
[CCby4Image]: https://i.creativecommons.org/l/by/4.0/88x31.png  
[GoogleSitePolicies]: https://developers.google.com/terms/site-policies  
[KayceBasques]: https://developers.google.com/web/resources/contributors#kayce-basques  
