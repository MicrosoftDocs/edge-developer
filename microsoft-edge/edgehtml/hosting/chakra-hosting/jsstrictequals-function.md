---
description: "Compare two JavaScript values for strict equality."
title: "JsStrictEquals Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsStrictEquals"
helpviewer_keywords: 
  - "JsStrictEquals function"
ms.assetid: b35bc655-7ff8-496a-b678-8950bb976047
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsStrictEquals Function

Compare two JavaScript values for strict equality.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsStrictEquals(  
   _In_ JsValueRef object1,  
   _In_ JsValueRef object2,  
   _Out_ bool *result  
);  
```  
  
#### Parameters  
 `object1`  
 The first object to compare.  
  
 `object2`  
 The second object to compare.  
  
 `result`  
 Whether the values are strictly equal.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 This function is equivalent to the `===` operator in Javascript.  
  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
