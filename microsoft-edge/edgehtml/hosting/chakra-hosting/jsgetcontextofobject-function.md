---
description: "Gets the script context that the object belongs to."
title: "JsGetContextOfObject Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "article"
ms.assetid: cea6cdcd-790f-455c-af04-026af8ae2eb7
caps.latest.revision: 3
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsGetContextOfObject Function

Gets the script context that the object belongs to.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetContextOfObject(  
  _In_ JsValueRef object,  
  _Out_ JsContextRef *context  
);  
```  
  
#### Parameters  
 `object`  
 The object to get the context from.  
  
 `context`  
 The context the object belongs to.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
