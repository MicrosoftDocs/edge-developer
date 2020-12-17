---
description: "Retrieves the `double` value of a number value."
title: "JsNumberToDouble Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsNumberToDouble"
helpviewer_keywords: 
  - "JsNumberToDouble function"
ms.assetid: 5f52e8b6-2b70-49a3-879a-bd83ebf2ac33
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsNumberToDouble Function

Retrieves the `double` value of a number value.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsNumberToDouble(  
   _In_ JsValueRef value,  
   _Out_ double *doubleValue  
);  
```  
  
#### Parameters  
 `value`  
 The number value to convert to a `double` value.  
  
 `doubleValue`  
 The `double` value.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 This function retrieves the value of a number value. It will fail with `JsErrorInvalidArgument` if the type of the value is not number.  
  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
