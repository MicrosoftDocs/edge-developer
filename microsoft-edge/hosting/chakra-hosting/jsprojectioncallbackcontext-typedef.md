---
description: "The context passed into application callback, JsProjectionEnqueueCallback, from JsRT and then passed back to JsRT in the provided callback, `JsProjectionCallback`, by the application on the correct thread."
title: "JsProjectionCallbackContext Typedef | Microsoft Docs"
ms.custom: ""
ms.date: "01/18/2017"
ms.prod: "windows-client-threshold"
ms.reviewer: ""
ms.suite: ""
ms.tgt_pltfrm: ""
ms.topic: "reference"
ms.assetid: 50c705c5-664f-4a1a-92f6-4882fc718ab1
caps.latest.revision: 2
author: "erikadoyle"
ms.author: "edoyle"
manager: "jken"
---
# JsProjectionCallbackContext Typedef
The context passed into application callback, JsProjectionEnqueueCallback, from JsRT and then passed back to JsRT in the provided callback, `JsProjectionCallback`, by the application on the correct thread.  
  
## Syntax  
  
```cpp  
typedef void *JsProjectionCallbackContext;  
```  
  
## Remarks  
 Requires calling `JsSetProjectionEnqueueCallback` to receive callbacks.  
  
 This API is supported only in Edge mode.  
  
## Requirements  
 jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)