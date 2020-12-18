---
description: "Gets the JavaScript type of a JsValueRef."
title: "JsGetValueType Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsGetValueType"
helpviewer_keywords: 
  - "JsGetValueType function"
ms.assetid: f403cf7c-c8c0-4a17-bfa9-0302d00e760e
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsGetValueType Function

Gets the JavaScript type of a JsValueRef.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetValueType(  
   _In_ JsValueRef value,  
   _Out_ JsValueType *type  
);  
```  
  
#### Parameters  
 `value`  
 The value whose type is to be returned.  
  
 `type`  
 The type of the value.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
