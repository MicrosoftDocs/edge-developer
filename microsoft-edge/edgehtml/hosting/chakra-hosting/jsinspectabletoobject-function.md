---
description: "Creates a JavaScript value that is a projection of the passed in `IInspectable` pointer."
title: "JsInspectableToObject Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: dd0ad567-2ba8-4a63-bee4-2c6ff5ce9fa9
caps.latest.revision: 2
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsInspectableToObject Function

Creates a JavaScript value that is a projection of the passed in `IInspectable` pointer.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsInspectableToObject(  
        _In_ IInspectable  *inspectable,  
        _Out_ JsValueRef *value  
);  
```  
  
#### Parameters  
 `inspectable`  
 A `IInspectable` to be projected.  
  
 `value`  
 A JavaScript value that is a projection of the `IInspectable`.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 The projected value can be used by script to call a WinRT object. Hosts are responsible for enforcing COM threading rules.  
  
 Requires an active script context.  
  
 This API is supported only in EdgeHTML mode.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
