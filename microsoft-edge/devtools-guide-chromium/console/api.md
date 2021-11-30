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

The **Console** tool is helpful when you complete multiple tasks in the DevTools.  APIs are available to include in your scripts. Convenience methods are only available for use in the **Console** tool, such as the `debug()` and `monitorEvents()` methods.  For more information on getting started with the **Console**, see [Get started with logging messages to the Console](console-log.md).  For more information on the convenience methods in the **Console**, see [Console Utilities API Reference](utilities.md).

---


<!-- ====================================================================== -->
## assert

Writes an [error](#error) to the **Console** when `expression` evaluates to `false`.

```javascript
console.assert(expression, object)
```

[Log level](reference.md#persist-messages-across-page-loads): `Error`

### Example

```javascript
const x = 5;
const y = 3;
const reason = 'x is expected to be less than y';
console.assert(x < y, {x, y, reason});
```

#### Output

:::image type="content" source="../media/console-demo-assert-button.msft.png" alt-text="The result of the console.assert() example" lightbox="../media/console-demo-assert-button.msft.png":::

---

<!-- ====================================================================== -->
## clear

Clears the **Console**.

If [Preserve Log](reference.md#filter-by-log-level) is turned on, the [clear](#clear) method is turned off.

```javascript
console.clear()
```

### See also

*   [Clear the Console](reference.md#clear-the-console)

---

<!-- ====================================================================== -->
## count

Writes the number of times that the [count](#count) method has been invoked at the same line and with the same `label`.  Use the [countReset](#countreset) method to reset the count.

```javascript
console.count([label])
```

[Log level](reference.md#persist-messages-across-page-loads): `Info`

### Example

```javascript
console.count();
console.count('coffee');
console.count();
console.count();
```

#### Output

:::image type="content" source="../media/console-demo-count-button.msft.png" alt-text="The result of the console.count() example" lightbox="../media/console-demo-count-button.msft.png":::

---

<!-- ====================================================================== -->
## countReset

Resets a count.

```javascript
console.countReset([label])
```

### Example

```javascript
console.countReset();
console.countReset('coffee');
```

---

<!-- ====================================================================== -->
## debug

Identical to the [log](#log) method, except different log level.

```javascript
console.debug(object [, object, ...])
```

[Log level](reference.md#persist-messages-across-page-loads): `Verbose`

### Example

```javascript
console.debug('debug');
```

#### Output

:::image type="content" source="../media/console-demo-debug-button.msft.png" alt-text="The result of the console.debug() example" lightbox="../media/console-demo-debug-button.msft.png":::

---

<!-- ====================================================================== -->
## dir

Prints a JSON representation of the specified object.

```javascript
console.dir(object)
```

[Log level](reference.md#persist-messages-across-page-loads): `Info`

### Example

```javascript
console.dir(document.head);
```

#### Output

:::image type="content" source="../media/console-demo-dir-button.msft.png" alt-text="The result of the console.dir() example" lightbox="../media/console-demo-dir-button.msft.png":::

---

<!-- ====================================================================== -->
## dirxml

Prints an XML representation of the descendants of `node`.

```javascript
console.dirxml(node)
```

[Log level](reference.md#persist-messages-across-page-loads): `Info`

### Example

```javascript
console.dirxml(document);
```

#### Output

:::image type="content" source="../media/console-demo-dirxml-button.msft.png" alt-text="The result of the console.dirxml() example" lightbox="../media/console-demo-dirxml-button.msft.png":::

---

<!-- ====================================================================== -->
## error

Prints the `object` to the **Console**, formats it as an error, and includes a stack trace.

```javascript
console.error(object [, object, ...])
```

[Log level](reference.md#persist-messages-across-page-loads): `Error`

### Example

```javascript
console.error("I'm sorry, Dave.  I'm afraid I can't do that.");
```

#### Output

:::image type="content" source="../media/console-demo-error-button.msft.png" alt-text="The result of the console.error() example" lightbox="../media/console-demo-error-button.msft.png":::

---

<!-- ====================================================================== -->
## group

Visually groups messages together until the [groupEnd](#groupend) method is used.  Use the [groupCollapsed](#groupcollapsed) method to collapse the group when it initially logs to the **Console**.

```javascript
console.group(label)
```

### Example

```javascript
const label = 'Adolescent Irradiated Espionage Tortoises';
console.group(label);
console.info('Leo');
console.info('Mike');
console.info('Don');
console.info('Raph');
console.groupEnd(label);
```

#### Output

:::image type="content" source="../media/console-demo-group-button.msft.png" alt-text="The result of the console.group() example" lightbox="../media/console-demo-group-button.msft.png":::

---

<!-- ====================================================================== -->
## groupCollapsed

Identical to the [log](#log) method, except the group is initially collapsed when it logs to the **Console**.

```javascript
console.groupCollapsed(label)
```

---

<!-- ====================================================================== -->
## groupEnd

Stops visually grouping messages.  See the [group](#group) method.

```javascript
console.groupEnd(label)
```

---

<!-- ====================================================================== -->
## info

Identical to the [log](#log) method.

```javascript
console.info(object [, object, ...])
```

[Log level](reference.md#persist-messages-across-page-loads): `Info`

### Example

```javascript
console.info('info');
```

#### Output

:::image type="content" source="../media/console-demo-info-button.msft.png" alt-text="The result of the console.info() example" lightbox="../media/console-demo-info-button.msft.png":::

---

<!-- ====================================================================== -->
## log

Prints a message to the **Console**.

```javascript
console.log(object [, object, ...])
```

[Log level](reference.md#persist-messages-across-page-loads): `Info`

### Example

```javascript
console.log('log');
```

#### Output

:::image type="content" source="../media/console-demo-log-button.msft.png" alt-text="The result of the console.log() example" lightbox="../media/console-demo-log-button.msft.png":::

---

<!-- ====================================================================== -->
## table

Logs an array of objects as a table.

```javascript
console.table(array)
```

[Log level](reference.md#persist-messages-across-page-loads): `Info`

### Example

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

#### Output

:::image type="content" source="../media/console-demo-table-button.msft.png" alt-text="The result of the console.table() example" lightbox="../media/console-demo-table-button.msft.png":::

---

<!-- ====================================================================== -->
## time

Starts a new timer.  Use the [timeEnd](#timeend) method to stop the timer and print the elapsed time to the **Console**.

```javascript
console.time([label])
```

### Example

```javascript
console.time();
for (var i = 0; i < 100000; i++) {
      let square = i ** 2;
}
console.timeEnd();
```

#### Output

:::image type="content" source="../media/console-demo-time-button.msft.png" alt-text="The result of the console.time() example" lightbox="../media/console-demo-time-button.msft.png":::

---

<!-- ====================================================================== -->
## timeEnd

Stops a timer.  For more information, see the [time](#time) method.

```javascript
console.timeEnd([label])
```

[Log level](reference.md#persist-messages-across-page-loads): `Info`

---

<!-- ====================================================================== -->
## trace

Prints a stack trace to the **Console**.

```javascript
console.trace()
```

[Log level](reference.md#persist-messages-across-page-loads): `Info`

### Example

```javascript
const first = () => { second(); };
const second = () => { third(); };
const third = () => { fourth(); };
const fourth = () => { console.trace(); };
first();
```

#### Output

:::image type="content" source="../media/console-demo-trace-button.msft.png" alt-text="The result of the console.trace() example" lightbox="../media/console-demo-trace-button.msft.png":::

---

<!-- ====================================================================== -->
## warn

Prints a warning to the **Console**.

```javascript
console.warn(object [, object, ...])
```

[Log level](reference.md#persist-messages-across-page-loads): `Warning`

### Example

```javascript
console.warn('warn');
```

#### Output

:::image type="content" source="../media/console-demo-warn-button.msft.png" alt-text="The result of the console.warn() example" lightbox="../media/console-demo-warn-button.msft.png":::

---


<!-- ====================================================================== -->
> [!NOTE]
> Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/terms/site-policies) and used according to terms described in the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
> The original page is found [here](https://developers.google.com/web/tools/chrome-devtools/console/api) and is authored by [Kayce Basques](https://developers.google.com/web/resources/contributors/kaycebasques) (Technical Writer, Chrome DevTools & Lighthouse).

[![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0)
This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0).
