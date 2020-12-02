---
description: "Gets a property descriptor for an object's own property."
title: "JsGetOwnPropertyDescriptor Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsGetOwnPropertyDescriptor"
helpviewer_keywords: 
  - "JsGetOwnPropertyDescriptor function"
ms.assetid: 44c417ce-ab63-44eb-a0ab-19838e3ab34f
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsGetOwnPropertyDescriptor Function

Gets a property descriptor for an object's own property.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetOwnPropertyDescriptor(  
   _In_ JsValueRef object,  
   _In_ JsPropertyIdRef propertyId,  
   _Out_ JsValueRef *propertyDescriptor  
);  
```  
  
#### Parameters  
 `object`  
 The object that has the property.  
  
 `propertyId`  
 The ID of the property.  
  
 `propertyDescriptor`  
 The property descriptor.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
