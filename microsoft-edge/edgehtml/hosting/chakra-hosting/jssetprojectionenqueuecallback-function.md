---
description: "Sets the callback to be used in order to invoke a projection completion back to the callers required thread."
title: "JsSetProjectionEnqueueCallback Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: c751ccef-20d2-4d41-9568-1c54adf47cdf
caps.latest.revision: 4
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsSetProjectionEnqueueCallback Function

Sets the callback to be used in order to invoke a projection completion back to the callers required thread.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsSetProjectionEnqueueCallback(  
   _In_ JsProjectionEnqueueCallback projectionEnqueueCallback,  
   _In_opt_ void *projectionEnqueueContext);  
  
```  
  
#### Parameters  
 `projectionEnqueueContext`  
 The callback that will be invoked any time a projection completion occurs on a background thread.  
  
 `callbackState`  
 The application context provided to `projectionEnqueueContext`.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
 The call should be coming from a different COM apartment or from a different thread in the same MTA.  
  
 This API is supported only in EdgeHTML mode.  
  
> [!CAUTION]
>  PInvoke is not currently supported for this API.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
