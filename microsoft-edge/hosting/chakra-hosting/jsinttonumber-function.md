---
description: "Creates a number value from an `int` value."
title: "JsIntToNumber Function | Microsoft Docs"
ms.custom: ""
ms.date: "01/18/2017"
ms.prod: microsoft-edge
ms.reviewer: ""
ms.suite: ""
ms.tgt_pltfrm: ""
ms.topic: "reference"
ms.assetid: 1393c4ac-7189-4e9c-8e54-b0e041c22112
caps.latest.revision: 4
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
manager: ""
---
# JsIntToNumber Function
Creates a number value from an `int` value.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsIntToNumber(  
   _In_ int intValue,  
   _Out_ JsValueRef *value  
);  
```  
  
#### Parameters  
 `intValue`  
 The `int` to convert to a number value.  
  
 `value`  
 The new number value.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
