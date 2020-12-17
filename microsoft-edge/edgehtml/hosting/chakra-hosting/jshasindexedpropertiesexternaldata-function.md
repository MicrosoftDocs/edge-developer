---
description: "Determines whether an object has its indexed properties in external data."
title: "JsHasIndexedPropertiesExternalData Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: c676db20-3ef1-4f84-8b26-3e06fe0ab2bf
caps.latest.revision: 2
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsHasIndexedPropertiesExternalData Function

Determines whether an object has its indexed properties in external data.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsHasIndexedPropertiesExternalData(  
   _In_ JsValueRef object,  
   _Out_ bool* value  
);  
```  
  
#### Parameters  
 `object`  
 The object.  
  
 `value`  
 Whether the object has its indexed properties in external data.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 This API is supported only in Microsoft Edge mode.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
