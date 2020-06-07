---
description: "Sets a promise continuation callback function that is called by the context when a task needs to be queued for future execution."
title: "JsSetPromiseContinuationCallback Function | Microsoft Docs"
ms.custom: ""
ms.date: "01/18/2017"
ms.prod: microsoft-edge
ms.reviewer: ""
ms.suite: ""
ms.tgt_pltfrm: ""
ms.topic: "reference"
ms.assetid: 6ef0faf4-1500-4bd9-aeca-c208492af8ea
caps.latest.revision: 2
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
manager: ""
---
# JsSetPromiseContinuationCallback Function
Sets a promise continuation callback function that is called by the context when a task needs to be queued for future execution.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsSetPromiseContinuationCallback(  
   _In_ JsPromiseContinuationCallback promiseContinuationCallback,  
   _In_opt_ void *callbackState  
);  
```  
  
#### Parameters  
 `promiseContinuationCallback`  
 The callback function being set.  
  
 `callbackState`  
 User provided state that will be passed back to the callback.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
 This API is supported only in EdgeHTML mode.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
