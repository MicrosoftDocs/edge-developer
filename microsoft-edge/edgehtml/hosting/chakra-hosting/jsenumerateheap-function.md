---
description: "Enumerates the heap of the current context."
title: "JsEnumerateHeap Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsEnumerateHeap"
helpviewer_keywords: 
  - "JsEnumerateHeap function"
ms.assetid: 3e518e0b-b959-4686-899c-83e6b1946c9d
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsEnumerateHeap Function

Enumerates the heap of the current context.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsEnumerateHeap(  
   _Out_ IActiveScriptProfilerHeapEnum **enumerator  
);  
```  
  
#### Parameters  
 `enumerator`  
 The heap enumerator.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 While the heap is being enumerated, the current context cannot be removed, and all calls to modify the state of the context will fail until the heap enumerator is released.  
  
 Requires an active script context.  
  
 This API is supported in desktop apps, but is not supported in Store apps.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
