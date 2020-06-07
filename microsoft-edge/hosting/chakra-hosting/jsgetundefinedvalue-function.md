---
description: "Gets the value of `undefined` in the current script context."
title: "JsGetUndefinedValue Function | Microsoft Docs"
ms.custom: ""
ms.date: "01/18/2017"
ms.prod: microsoft-edge
ms.reviewer: ""
ms.suite: ""
ms.tgt_pltfrm: ""
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsGetUndefinedValue"
helpviewer_keywords: 
  - "JsGetUndefinedValue function"
ms.assetid: e118eaf6-452c-42f2-86b8-e63c7d987cba
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
manager: ""
---
# JsGetUndefinedValue Function
Gets the value of `undefined` in the current script context.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetUndefinedValue(  
   _Out_ JsValueRef *undefinedValue  
);  
```  
  
#### Parameters  
 `undefinedValue`  
 The `undefined` value.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
