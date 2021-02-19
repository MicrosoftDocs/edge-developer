---
description: "Gets the internal data set on JsrtContext."
title: "JsGetContextData Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "article"
ms.assetid: f5d7e446-267a-4a80-a427-6e1b95a3391b
caps.latest.revision: 4
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsGetContextData Function

Gets the internal data set on JsrtContext.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetContextData(  
  _In_ JsContextRef context,  
  _Out_ void **data  
);  
```  
  
#### Parameters  
 `context`  
 The context to get the data from.  
  
 `data`  
 The pointer to the data where data will be returned.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
