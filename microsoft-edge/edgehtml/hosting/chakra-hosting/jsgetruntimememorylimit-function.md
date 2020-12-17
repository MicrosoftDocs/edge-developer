---
description: "Gets the current memory limit for a runtime."
title: "JsGetRuntimeMemoryLimit Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsGetRuntimeMemoryLimit"
helpviewer_keywords: 
  - "JsGetRuntimeMemoryLimit function"
ms.assetid: ed81ca60-99fd-46b0-89ae-f6ac07926904
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsGetRuntimeMemoryLimit Function

Gets the current memory limit for a runtime.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetRuntimeMemoryLimit(  
   _In_ JsRuntimeHandle runtime,  
   _Out_ size_t *memoryLimit  
);  
```  
  
#### Parameters  
 `runtime`  
 The runtime whose memory limit is to be retrieved.  
  
 `memoryLimit`  
 The runtime's current memory limit, in bytes, or -1 if no limit has been set.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 The memory limit of a runtime can be always be retrieved, regardless of whether or not the runtime is active on another thread.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
