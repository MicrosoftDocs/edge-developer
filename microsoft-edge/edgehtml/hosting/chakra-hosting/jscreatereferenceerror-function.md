---
description: "Creates a new JavaScript ReferenceError error object."
title: "JsCreateReferenceError Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsCreateReferenceError"
helpviewer_keywords: 
  - "JsCreateReferenceError function"
ms.assetid: 1d0b2339-4bea-4dd0-a46a-4dcbf0be3bd8
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsCreateReferenceError Function

Creates a new JavaScript ReferenceError error object.
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsCreateReferenceError(  
   _In_ JsValueRef message,  
   _Out_ JsValueRef *error  
);  
```  
  
#### Parameters  
 `message`  
 Message for the error object.  
  
 `error`  
 The new error object.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
