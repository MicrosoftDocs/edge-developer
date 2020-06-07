---
description: "Returns the prototype of an object."
title: "JsGetPrototype Function | Microsoft Docs"
ms.custom: ""
ms.date: "01/18/2017"
ms.prod: microsoft-edge
ms.reviewer: ""
ms.suite: ""
ms.tgt_pltfrm: ""
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsGetPrototype"
helpviewer_keywords: 
  - "JsGetPrototype function"
ms.assetid: 05d743fc-103e-4a92-86f2-a063f39a2a6f
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
manager: ""
---
# JsGetPrototype Function
Returns the prototype of an object.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetPrototype(  
   _In_ JsValueRef object,  
   _Out_ JsValueRef *prototypeObject  
);  
```  
  
#### Parameters  
 `object`  
 The object whose prototype is to be returned.  
  
 `prototypeObject`  
 The object's prototype.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
