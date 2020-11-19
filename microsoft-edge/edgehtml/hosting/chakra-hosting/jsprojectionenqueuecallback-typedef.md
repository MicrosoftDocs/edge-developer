---
description: "The application callback which is called by JsRT when a projection API is completed on a different thread than the original."
title: "JsProjectionEnqueueCallback Typedef | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 19c1cefb-a7be-4196-b780-9fe6adf35ba5
caps.latest.revision: 4
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsProjectionEnqueueCallback Typedef

The application callback which is called by JsRT when a projection API is completed on a different thread than the original.  
  
## Syntax  
  
```cpp  
typedef void (CALLBACK *JsProjectionEnqueueCallback)(  
  _In_ JsProjectionCallback jsCallback,  
  _In_ JsProjectionCallbackContext jsContext,  
  _In_opt_ void *callbackState  
);  
```  
  
#### Parameters  
 `jsCallback`  
 The callback to be invoked on the original thread.  
  
 `jsContext`  
 The applications context.  
  
 `callbackState`  
 The JsRT context that must be passed into `jsCallback`.  
  
## Remarks  
 Requires calling JsSetProjectionEnqueueCallback to receive callbacks.  
  
 This API is supported only in EdgeHTML mode.  
  
## Requirements  
 jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
