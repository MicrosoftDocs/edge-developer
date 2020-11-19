---
description: "Initializes the passed in `VARIANT` as a projection of a JavaScript value."
title: "JsValueToVariant Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsValueToVariant"
helpviewer_keywords: 
  - "JsValueToVariant function"
ms.assetid: 070244be-a69d-4b78-971b-69c0579c03cf
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsValueToVariant Function

Initializes the passed in `VARIANT` as a projection of a JavaScript value.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsValueToVariant(  
   _In_ JsValueRef object,  
   _Out_ VARIANT *variant  
);  
```  
  
#### Parameters  
 `object`  
 A JavaScript value to project as a `VARIANT`.  
  
 `variant`  
 A pointer to a `VARIANT` struct that will be initialized as a projection.  
  
## Return Value  
  
## Remarks  
 The projection `VARIANT` can be used by COM automation clients to call into the projected JavaScript object.  
  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
