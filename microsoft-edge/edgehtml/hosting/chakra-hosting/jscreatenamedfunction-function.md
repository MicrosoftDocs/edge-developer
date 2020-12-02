---
description: "Creates a new JavaScript function with name."
title: "JsCreateNamedFunction Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 72f40d06-ab82-4fed-a632-68af6b4126c2
caps.latest.revision: 2
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsCreateNamedFunction Function

Creates a new JavaScript function with name.
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsCreateNamedFunction(  
   _In_ JsValueRef name,  
   _In_ JsNativeFunction nativeFunction,  
   _In_opt_ void *callbackState,  
   _Out_ JsValueRef *function  
);  
```  
  
#### Parameters  
 `name`  
 The name of this function that will be used for diagnostics and stringification purposes.  
  
 `nativeFunction`  
 The method to call when the function is invoked.  
  
 `callbackState`  
 User provided state that will be passed back to the callback.  
  
 `function`  
 The new function object.  
  
## Return Value  
  
## Remarks  
 Requires an active script context.  
  
 This API is supported only in Microsoft Edge mode.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
