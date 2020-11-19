---
description: "Retrieves the `bool` value of a Boolean value."
title: "JsBooleanToBool Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsBooleanToBool"
helpviewer_keywords: 
  - "JsBooleanToBool function"
ms.assetid: ab16ac71-fe47-475d-a7ee-46e4643dee60
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsBooleanToBool Function

Retrieves the `bool` value of a Boolean value.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsBooleanToBool(  
   _In_ JsValueRef value,  
   _Out_ bool *boolValue  
);  
```  
  
#### Parameters  
 `value`  
 The value to be converted.  
  
 `boolValue`  
 The converted value.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
