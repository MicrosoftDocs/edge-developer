---
description: "Converts the value to Boolean using standard JavaScript semantics."
title: "JsConvertValueToBoolean Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsConvertValueToBoolean"
helpviewer_keywords: 
  - "JsConvertValueToBoolean function"
ms.assetid: 7298ec72-a388-4334-b81b-1691ab4cecf0
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsConvertValueToBoolean Function

Converts the value to Boolean using standard JavaScript semantics.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsConvertValueToBoolean(  
   _In_ JsValueRef value,  
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
