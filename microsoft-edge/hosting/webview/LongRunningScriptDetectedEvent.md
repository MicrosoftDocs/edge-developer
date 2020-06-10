---
description: 
title: LongRunningScriptDetectedEvent object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/10/2020
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# LongRunningScriptDetectedEvent object  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

Provides information for [MSWebViewLongRunningScriptDetected](../webview.md#mswebviewlongrunningscriptdetected).  

## Properties  

### executionTime  

Gets the number of milliseconds that the [webview](../webview.md) element has been executing a long-running script.  

```javascript
var executionTime = LongRunningScriptDetectedEvent.executionTime;
```  

#### Property value  

Type: **long**  

### stopPageScriptExecution  

Stops a long-running script executing in the [webview](../webview.md) element.  

```javascript
var stopPageScriptExecution = LongRunningScriptDetectedEvent.stopPageScriptExecution;
```  

#### Property value  

Type: **Boolean**  
