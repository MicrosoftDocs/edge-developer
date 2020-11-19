---
description: "Gets the list of all properties on the object."
title: "JsGetOwnPropertyNames Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsGetOwnPropertyNames"
helpviewer_keywords: 
  - "JsGetOwnPropertyNames function"
ms.assetid: 0c17ea06-b17f-4ea3-ad04-1259a4d1b6de
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsGetOwnPropertyNames Function

Gets the list of all properties on the object.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetOwnPropertyNames(  
   _In_ JsValueRef object,  
   _Out_ JsValueRef *propertyNames  
);  
```  
  
#### Parameters  
 `object`  
 The object from which to get the property names.  
  
 `propertyNames`  
 An array of property names.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
