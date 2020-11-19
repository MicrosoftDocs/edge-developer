---
description: "Defines a new object's own property from a property descriptor."
title: "JsDefineProperty Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsDefineProperty"
helpviewer_keywords: 
  - "JsDefineProperty function"
ms.assetid: b2cf48d6-eb40-457c-aa8b-b16a50dc5d6a
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsDefineProperty Function

Defines a new object's own property from a property descriptor.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsDefineProperty(  
   _In_ JsValueRef object,  
   _In_ JsPropertyIdRef propertyId,  
   _In_ JsValueRef propertyDescriptor,  
   _Out_ bool *result  
);  
```  
  
#### Parameters  
 `object`  
 The object that has the property.  
  
 `propertyId`  
 The ID of the property.  
  
 `propertyDescriptor`  
 The property descriptor.  
  
 `result`  
 Whether the property was defined.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
