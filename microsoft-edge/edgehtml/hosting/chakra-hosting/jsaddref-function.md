---
description: "Adds a reference to a garbage collected object."
title: "JsAddRef Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsAddRef"
helpviewer_keywords: 
  - "JsAddRef function"
ms.assetid: a7f3ed49-6a86-489a-abdf-c99428e79cae
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsAddRef Function

Adds a reference to a garbage collected object.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsAddRef(  
   _In_ JsRef ref,  
   _Out_opt_ unsigned int *count  
);  
```  
  
#### Parameters  
 `ref`  
 The object to add a reference to.  
  
 `count`  
 The object's new reference count (can pass in null).  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 This only needs to be called on `JsRef` handles that are not going to be stored somewhere on the stack. Calling `JsAddRef` ensures that the object the `JsRef` refers to will not be freed until `JsRelease` is called.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
