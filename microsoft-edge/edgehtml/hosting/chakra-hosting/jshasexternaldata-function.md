---
description: "Determines whether an object is an external object."
title: "JsHasExternalData Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsHasExternalData"
helpviewer_keywords: 
  - "JsHasExternalData function"
ms.assetid: a077e3ac-4f6f-4d94-8398-f1b5cc4c18e0
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsHasExternalData Function

Determines whether an object is an external object.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsHasExternalData(  
   _In_ JsValueRef object,  
   _Out_ bool *value  
);  
```  
  
#### Parameters  
 `object`  
 The object.  
  
 `value`  
 Whether the object is an external object.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
