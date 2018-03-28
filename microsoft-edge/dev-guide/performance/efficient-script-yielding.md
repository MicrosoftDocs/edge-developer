---
ms.assetid: 0358f4ac-3113-4d59-a270-5f04b42eecab
description: Learn how to use the setImmediate method to break apart long running JavaScript operations.
title: Dev guide - Efficient script yielding
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Efficient Script Yielding with setImmediate()

Web developers commonly use the [`setTimeout`](http://go.microsoft.com/fwlink/p/?LinkID=233102) method to break apart long running JavaScript operations. This approach allows the browser to process outstanding work, such as layouts and paints, and then waits for the specified period of time before calling back into JavaScript. This can be a problem because browsers can make up to 250 callbacks per second if the `setTimeout` method has a specified period of zero. This can result in increased power consumption and decreased battery life because the CPU is unable to enter power-lowering sleep states.

The [`setImmediate`](https://msdn.microsoft.com/library/hh773176(v=vs.85).aspx) method can solve the problems of using `setTimeout` by addressing the core performance problem without negatively impacting power consumption. As a result, web developers can use the `setImmediate` method to break apart long running JavaScript operations and will receive a callback immediately after the browser has processed outstanding work.

Here's how to use this new API. If you are currently using the following code:

```javascript
var handle = setTimeout(spellCheck, 0);
```

Replace `setTimeout` with `setImmediate`:


```javascript
var handle = setImmediate(spellCheck);
```

## API Reference
[setImmediate](https://msdn.microsoft.com/library/hh773176(v=vs.85).aspx)

## Demo
[JavaScript Yielding: setImmediate API](http://go.microsoft.com/fwlink/p/?LinkID=248240)
