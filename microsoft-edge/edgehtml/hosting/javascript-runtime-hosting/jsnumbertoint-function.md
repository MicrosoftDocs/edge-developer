---
description: "Retrieves the `int` value of a number value."
title: "JsNumberToInt Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 8b9256d6-76ac-4c74-a97c-fbb16c13f5f5
caps.latest.revision: 2
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsNumberToInt Function

Retrieves the `int` value of a number value.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsNumberToInt(  
      _In_ JsValueRef value,  
      _Out_ int *intValue  
);  
```  
  
#### Parameters  
 `value`  
 The number value to convert to an `int` value.  
  
 `intValue`  
 The `int` value.  
  
## Return Value  
  
## Remarks  
 This function retrieves the value of a number value and converts to an `int` value. It will fail with `JsErrorInvalidArgument` if the type of the value is not number.  
  
 Requires an active script context.  
  
 This API is supported only in EdgeHTML mode.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
