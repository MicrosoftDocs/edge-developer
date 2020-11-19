---
description: "Performs JavaScript `instanceof` operator test."
title: "JsInstanceOf Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 94399a62-b996-4fd2-82ce-1c26e7a4da08
caps.latest.revision: 6
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsInstanceOf Function

Performs JavaScript `instanceof` operator test.  
  
## Syntax  
  
```cpp  
JsInstanceOf(   
  _In_ JsValueRef object,  
  _In_ JsValueRef constructor,  
  _Out_ bool *result  
);  
  
```  
  
#### Parameters  
 `object`  
 The object to test.  
  
 `constructor`  
 The constructor function to test against.  
  
 `result`  
 Whether the "object instanceof constructor" is true.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
