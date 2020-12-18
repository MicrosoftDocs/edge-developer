---
description: "Returns a value that indicates whether the heap of the current context is being enumerated."
title: "JsIsEnumeratingHeap Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsIsEnumeratingHeap"
helpviewer_keywords: 
  - "JsIsEnumeratingHeap function"
ms.assetid: 5d14518e-3153-43f2-9a9c-068580cbd54f
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsIsEnumeratingHeap Function

Returns a value that indicates whether the heap of the current context is being enumerated.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsIsEnumeratingHeap(  
   _Out_ bool *isEnumeratingHeap  
);  
```  
  
#### Parameters  
 `isEnumeratingHeap`  
 Whether the heap is being enumerated.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
 This API is supported in desktop apps, but is not supported in Store apps.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
