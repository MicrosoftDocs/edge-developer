---
description: "Sets the runtime of the current context to an exception state."
title: "JsSetException Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsSetException"
helpviewer_keywords: 
  - "JsSetException function"
ms.assetid: c528793a-2e1b-4ee1-bd2e-e63fd547dc40
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsSetException Function

Sets the runtime of the current context to an exception state.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsSetException(  
   _In_ JsValueRef exception  
);  
```  
  
#### Parameters  
 `exception`  
 The JavaScript exception to set for the runtime of the current context.  
  
## Return Value  
 `JsNoError` if the engine was set into an exception state, a failure code otherwise.  
  
## Remarks  
 If the runtime of the current context is already in an exception state, this API will return `JsErrorInExceptionState`.  
  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
