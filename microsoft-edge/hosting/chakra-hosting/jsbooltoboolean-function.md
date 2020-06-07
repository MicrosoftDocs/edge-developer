---
description: "Creates a Boolean value from a `bool` value."
title: "JsBoolToBoolean Function | Microsoft Docs"
ms.custom: ""
ms.date: "01/18/2017"
ms.prod: microsoft-edge
ms.reviewer: ""
ms.suite: ""
ms.tgt_pltfrm: ""
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsBoolToBoolean"
helpviewer_keywords: 
  - "JsBoolToBoolean function"
ms.assetid: 24322ea3-0638-40a3-9b4c-fc912ebed3ff
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
manager: ""
---
# JsBoolToBoolean Function
Creates a Boolean value from a `bool` value.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode JsBoolToBoolean(  
   _In_ bool value,  
   _Out_ JsValueRef *booleanValue  
);  
```  
  
#### Parameters  
 `value`  
 The value to be converted.  
  
 `booleanValue`  
 The converted value.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
