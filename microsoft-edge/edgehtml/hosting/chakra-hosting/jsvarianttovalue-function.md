---
description: "Creates a JavaScript value that is a projection of the passed in `VARIANT`."
title: "JsVariantToValue Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsVariantToValue"
helpviewer_keywords: 
  - "JsVariantToValue function"
ms.assetid: e8f9eb8b-55b3-4b65-927e-cad5b482edee
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsVariantToValue Function

Creates a JavaScript value that is a projection of the passed in `VARIANT`.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsVariantToValue(  
   _In_ VARIANT *variant,  
   _Out_ JsValueRef *value  
);  
```  
  
#### Parameters  
 `variant`  
 A `VARIANT` to be projected.  
  
 `value`  
 A JavaScript value that is a projection of the `VARIANT`.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 The projected value can be used by script to call a COM automation object from script. Hosts are responsible for enforcing COM threading rules.  
  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
