---
description: "Stops profiling in the current context."
title: "JsStopProfiling Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsStopProfiling"
helpviewer_keywords: 
  - "JsStopProfiling function"
ms.assetid: 3639c04f-a0f9-418b-be39-92f64b4e7ef8
caps.latest.revision: 13
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsStopProfiling Function

Stops profiling in the current context.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsStopProfiling(  
   _In_ HRESULT reason  
);  
```  
  
#### Parameters  
 `reason`  
 The reason for stopping profiling to pass to the profiler callback.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Will not return an error if profiling has not started.  
  
 Requires an active script context.  
  
 This API is supported in desktop apps, but is not supported in Store apps.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
