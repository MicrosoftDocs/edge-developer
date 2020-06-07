---
description: "Retrieve the value at the specified index of an object."
title: "JsGetIndexedProperty Function | Microsoft Docs"
ms.custom: ""
ms.date: "01/18/2017"
ms.prod: microsoft-edge
ms.reviewer: ""
ms.suite: ""
ms.tgt_pltfrm: ""
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsGetIndexedProperty"
helpviewer_keywords: 
  - "JsGetIndexedProperty function"
ms.assetid: f61ea388-0ae6-4a19-b3b5-75ed49a3f32d
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
manager: ""
---
# JsGetIndexedProperty Function
Retrieve the value at the specified index of an object.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetIndexedProperty(  
   _In_ JsValueRef object,  
   _In_ JsValueRef index,  
   _Out_ JsValueRef *result  
);  
```  
  
#### Parameters  
 `object`  
 The object to operate on.  
  
 `index`  
 The index to retrieve.  
  
 `result`  
 The retrieved value.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
