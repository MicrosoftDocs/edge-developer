---
description: "Gets the current memory usage for a runtime."
title: "JsGetRuntimeMemoryUsage Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsGetRuntimeMemoryUsage"
helpviewer_keywords: 
  - "JsGetRuntimeMemoryUsage function"
ms.assetid: b9bd4146-bfbc-4cb1-a0e9-a0ded7fb09bd
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsGetRuntimeMemoryUsage Function

Gets the current memory usage for a runtime.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetRuntimeMemoryUsage(  
   _In_ JsRuntimeHandle runtime,  
   _Out_ size_t *memoryUsage  
);  
```  
  
#### Parameters  
 `runtime`  
 The runtime whose memory usage is to be retrieved.  
  
 `memoryUsage`  
 The runtime's current memory usage, in bytes.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Memory usage can be always be retrieved, regardless of whether or not the runtime is active on another thread.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
