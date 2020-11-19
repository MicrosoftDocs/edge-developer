---
description: "Creates a new object that stores some external data."
title: "JsCreateExternalObject Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsCreateExternalObject"
helpviewer_keywords: 
  - "JsCreateExternalObject function"
ms.assetid: 6bcef506-93fb-429b-b06a-a971ff0b71f3
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsCreateExternalObject Function

Creates a new object that stores some external data.
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsCreateExternalObject(  
   _In_opt_ void *data,  
   _In_opt_ JsFinalizeCallback finalizeCallback,  
   _Out_ JsValueRef *object  
);  
```  
  
#### Parameters  
 `data`  
 External data that the object will represent. May be null.  
  
 `finalizeCallback`  
 A callback for when the object is finalized. May be null.  
  
 `object`  
 The new object.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
