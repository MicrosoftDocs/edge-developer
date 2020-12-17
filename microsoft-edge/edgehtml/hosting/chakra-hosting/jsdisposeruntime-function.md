---
description: "Disposes a runtime."
title: "JsDisposeRuntime Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsDisposeRuntime"
helpviewer_keywords: 
  - "JsDisposeRuntime function"
ms.assetid: 0aefde3f-7250-48be-afc5-53ea85c12f30
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsDisposeRuntime Function

Disposes a runtime.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsDisposeRuntime(  
   _In_ JsRuntimeHandle runtime  
);  
```  
  
#### Parameters  
 `runtime`  
 The runtime to dispose.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Once a runtime has been disposed, all resources owned by it are invalid and cannot be used. If the runtime is active (i.e. it is set to be current on a particular thread), it cannot be disposed.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
