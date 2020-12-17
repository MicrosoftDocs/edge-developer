---
description: "Gets an object's property."
title: "JsGetProperty Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsGetProperty"
helpviewer_keywords: 
  - "JsGetProperty function"
ms.assetid: 606bc14f-e849-4f88-a148-6660e923c07b
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsGetProperty Function

Gets an object's property.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetProperty(  
   _In_ JsValueRef object,  
   _In_ JsPropertyIdRef propertyId,  
   _Out_ JsValueRef *value  
);  
```  
  
#### Parameters  
 `object`  
 The object that contains the property.  
  
 `propertyId`  
 The ID of the property.  
  
 `value`  
 The value of the property.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
