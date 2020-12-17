---
description: "Sets an object's indexed properties to external data. The external data will be used as back store for the object's indexed properties and accessed like a typed array."
title: "JsSetIndexedPropertiesToExternalData Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: cee2d86d-ed42-4acb-86ef-95a67e63d0d6
caps.latest.revision: 2
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsSetIndexedPropertiesToExternalData Function

Sets an object's indexed properties to external data. The external data will be used as back store for the object's indexed properties and accessed like a typed array.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsSetIndexedPropertiesToExternalData(  
   _In_ JsValueRef object,  
   _In_ void* data,  
   _In_ JsTypedArrayType arrayType,  
   _In_ unsigned int elementLength  
);  
```  
  
#### Parameters  
 `object`  
 The object to operate on.  
  
 `data`  
 The external data to be used as back store for the object's indexed properties.  
  
 `arrayType`  
 The array element type in external data.  
  
 `elementLength`  
 The number of array elements in external data.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
 This API is supported only in EdgeHTML mode.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
