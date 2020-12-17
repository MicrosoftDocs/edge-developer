---
description: "Gets the list of all symbol properties on the object."
title: "JsGetOwnPropertySymbols Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 57c431e3-de0b-4ed0-b750-87a86448daff
caps.latest.revision: 2
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsGetOwnPropertySymbols Function

Gets the list of all symbol properties on the object.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetOwnPropertySymbols(  
   _In_ JsValueRef object,  
   _Out_ JsValueRef *propertySymbols  
);  
```  
  
#### Parameters  
 `object`  
 The object from which to get the property symbols.  
  
 `propertySymbols`  
 An array of property symbols.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
 This API is supported only in Microsoft Edge mode.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
