---
description: "A function callback."
title: "JsNativeFunction Typedef | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 56ef6cdf-4ca9-4f7c-b953-e661addb1a8e
caps.latest.revision: 5
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsNativeFunction Typedef

A function callback.  
  
## Syntax  
  
```cpp  
typedef _Ret_maybenull_ JsValueRef (CALLBACK * JsNativeFunction)(  
   _In_ JsValueRef callee,  
   _In_ bool isConstructCall,  
   _In_ JsValueRef *arguments,  
   _In_ unsigned short argumentCount  
);  
```  
  
#### Parameters  
 callee  
 A `Function` object that represents the function being invoked.  
  
 isConstructCall  
 Indicates whether this is a regular call or a 'new' call.  
  
 arguments  
 The arguments to the call.  
  
 argumentCount  
 The number of arguments.  
  
## Property Value/Return Value  
 The result of the call, if any.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
