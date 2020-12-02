---
description: "User implemented callback routine for memory allocation events."
title: "JsMemoryAllocationCallback Typedef | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 511babc7-3caa-4ee5-82a2-943bbd34db8d
caps.latest.revision: 7
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsMemoryAllocationCallback Typedef

User implemented callback routine for memory allocation events.  
  
## Syntax  
  
```cpp  
typedef bool (CALLBACK * JsMemoryAllocationCallback)(  
   _In_opt_ void *callbackState,  
   _In_ JsMemoryEventType allocationEvent,  
   _In_ size_t allocationSize  
);  
```  
  
#### Parameters  
 callbackState  
 The state passed to JsSetRuntimeMemoryAllocationCallback.  
  
 allocationEvent  
 The type of type allocation event.  
  
 allocationSize  
 The size of the allocation.  
  
## Property Value/Return Value  
 For the JsMemoryAllocate event, returning true allows the runtime to continue with allocation. Returning false indicates the allocation request is rejected. The return value is ignored for other allocation events.  
  
## Remarks  
 Use JsSetRuntimeMemoryAllocationCallback to register this callback.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
