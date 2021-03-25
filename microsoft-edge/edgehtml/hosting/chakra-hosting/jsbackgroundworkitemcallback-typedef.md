---
description: "A background work item callback."
title: "JsBackgroundWorkItemCallback Typedef | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: e6db52e1-830c-46a2-b9f9-cc2d450a1da8
caps.latest.revision: 6
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsBackgroundWorkItemCallback Typedef

A background work item callback.  
  
## Syntax  
  
```cpp  
typedef void (CALLBACK *JsBackgroundWorkItemCallback)(  
   _In_opt_ void *callbackData  
);  
```  
  
#### Parameters  
 callbackData  
 Data argument passed to the thread service.  
  
## Remarks  
 This is passed to the host's thread service (if provided) to allow the host to invoke the work item callback on the background thread of its choice.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
