---
description: "Deletes an object's property."
title: "JsDeleteProperty Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsDeleteProperty"
helpviewer_keywords: 
  - "JsDeleteProperty function"
ms.assetid: 0f6ac6a7-3576-42f5-98d0-1c06542c8149
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsDeleteProperty Function

Deletes an object's property.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsDeleteProperty(  
   _In_ JsValueRef object,  
   _In_ JsPropertyIdRef propertyId,  
   _In_ bool useStrictRules,  
   _Out_ JsValueRef *result  
);  
```  
  
#### Parameters  
 `object`  
 The object that contains the property.  
  
 `propertyId`  
 The ID of the property.  
  
 `useStrictRules`  
 The property set should follow strict mode rules.  
  
 `result`  
 Whether the property was deleted.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
