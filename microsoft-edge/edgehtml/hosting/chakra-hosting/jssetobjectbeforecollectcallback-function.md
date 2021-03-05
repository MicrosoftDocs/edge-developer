---
description: "Sets a callback function that is called by the runtime before garbage collection of an object."
title: "JsSetObjectBeforeCollectCallback Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: ea2cbd94-d8b0-4fa9-a4a1-c75a4e338eaf
caps.latest.revision: 3
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsSetObjectBeforeCollectCallback Function

Sets a callback function that is called by the runtime before garbage collection of an object.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsSetObjectBeforeCollectCallback(  
   _In_ JsRef ref,  
   _In_opt_ void *callbackState,  
   _In_ JsObjectBeforeCollectCallback objectBeforeCollectCallback  
);  
```  
  
#### Parameters  
 `ref`  
 The object for which to register the callback.  
  
 `callbackState`  
 User-provided state that will be passed back to the callback.  
  
 `objectBeforeCollectCallback`  
 The callback function being set. Use null to clear previously registered callback.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 The callback is invoked on the current runtime execution thread, therefore execution is blocked until the callback completes.  
  
 This API is supported only in EdgeHTML mode.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
