---
description: 
title: LongRunningScriptDetectedEvent object
author: erikadoyle
ms.author: edoyle
ms.date: 04/10/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# LongRunningScriptDetectedEvent object

Provides information for [MSWebViewLongRunningScriptDetected](../webview.md#mswebviewlongrunningscriptdetected).

## Properties

### executionTime

Gets the number of milliseconds that the [webview](../webview.md) element has been executing a long-running script.

```js
var executionTime = LongRunningScriptDetectedEvent.executionTime;
```

#### Property value
Type: **long**

### stopPageScriptExecution
Stops a long-running script executing in the [webview](../webview.md) element.

```js
var stopPageScriptExecution = LongRunningScriptDetectedEvent.stopPageScriptExecution;
```

#### Property value
Type: **Boolean**