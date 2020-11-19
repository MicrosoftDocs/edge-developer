---
description: "The JsRT callback which should be called with the context passed to `JsProjectionEnqueueCallback` on the correct thread."
title: "JsProjectionCallback Typedef | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 32f22d37-e57e-4196-b6cd-a3fc75bd0632
caps.latest.revision: 3
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsProjectionCallback Typedef

The JsRT callback which should be called with the context passed to `JsProjectionEnqueueCallback` on the correct thread.  
  
## Syntax  
  
```cpp  
typedef void (CALLBACK *JsProjectionCallback)(  
  _In_ JsProjectionCallbackContext jsContext  
);  
```  
  
#### Parameters  
 `jsContext`  
 Requires calling `JsSetProjectionEnqueueCallback` to receive callbacks.  
  
## Remarks  
 This API is supported only in EdgeHTML mode.  
  
## Requirements  
 jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
