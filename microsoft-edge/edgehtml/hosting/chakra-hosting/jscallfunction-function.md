---
description: "Invokes a function."
title: "JsCallFunction Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsCallFunction"
helpviewer_keywords: 
  - "JsCallFunction function"
ms.assetid: 8a1dca72-d720-4a28-a86e-6809465006fe
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsCallFunction Function

Invokes a function.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsCallFunction(  
   _In_ JsValueRef function,  
   _In_reads_(argumentCount) JsValueRef *arguments,  
   _In_ unsigned short argumentCount,  
   _Out_opt_ JsValueRef *result  
);  
```  
  
#### Parameters  
 `function`  
 The function to invoke.  
  
 `arguments`  
 The arguments to the call.  
  
 `argumentCount`  
 The number of arguments being passed in to the function.  
  
 `result`  
 The value returned from the function invocation, if any.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
