---
description: "Gets the name associated with the property ID."
title: "JsGetPropertyNameFromId Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsGetPropertyNameFromId"
helpviewer_keywords: 
  - "JsGetPropertyNameFromId function"
ms.assetid: b4ca442c-573d-4bc3-adf7-1b8d48480b3a
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsGetPropertyNameFromId Function

Gets the name associated with the property ID.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetPropertyNameFromId(  
   _In_ JsPropertyIdRef propertyId,  
   _Outptr_result_z_ const wchar_t **name  
);  
```  
  
#### Parameters  
 `propertyId`  
 The property ID to get the name of.  
  
 `name`  
 The name associated with the property ID.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
 The returned buffer is valid as long as the runtime is alive and cannot be used once the runtime has been disposed.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
