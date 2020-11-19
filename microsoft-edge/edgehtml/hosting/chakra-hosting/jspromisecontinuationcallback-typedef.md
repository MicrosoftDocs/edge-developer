---
description: "A promise continuation callback."
title: "JsPromiseContinuationCallback Typedef | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 51a3fd02-9668-4cf7-bb0b-e1fd03b2528f
caps.latest.revision: 3
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsPromiseContinuationCallback Typedef

A promise continuation callback.  
  
## Syntax  
  
```cpp  
typedef void (CALLBACK *JsPromiseContinuationCallback)(  
  _In_ JsValueRef task,  
  _In_opt_ void *callbackState  
);  
```  
  
#### Parameters  
 `task`  
  `callbackState`  
  
## Remarks  
 The host can specify a promise continuation callback in `JsSetPromiseContinuationCallback`. If a script creates a task to be run later, then the promise continuation callback will be called with the task and the task should be put in a FIFO queue, to be run when the current script is done executing.  
  
 This API is supported only in EdgeHTML mode.  
  
## Requirements  
 jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
