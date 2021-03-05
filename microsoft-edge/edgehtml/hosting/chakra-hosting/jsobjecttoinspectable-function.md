---
description: "Unwraps a JavaScript object to an `IInspectable` pointer."
title: "JsObjectToInspectable Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 1d15b0b8-516f-4fc6-95aa-2ddd65f8ab75
caps.latest.revision: 2
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsObjectToInspectable Function

Unwraps a JavaScript object to an `IInspectable` pointer.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsObjectToInspectable(  
   _In_ JsValueRef value,  
   _Out_ IInspectable  **inspectable  
);  
```  
  
#### Parameters  
 `value`  
 A JavaScript value that should be projected to `IInspectable`.  
  
 `inspectable`  
 An `IInspectable` value of the object.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Hosts are responsible for enforcing COM threading rules.  
  
 Requires an active script context.  
  
 This API is supported only in EdgeHTML mode.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
