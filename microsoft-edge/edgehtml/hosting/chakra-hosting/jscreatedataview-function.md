---
description: "Creates a Javascript `DataView` object."
title: "JsCreateDataView Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 161e59eb-d429-46f7-9a38-bbf2149ccf44
caps.latest.revision: 2
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsCreateDataView Function

Creates a Javascript `DataView` object.  
  
## Syntax  
  
```cpp  
JsErrorCode  JsCreateDataView(  
   _In_ JsValueRef arrayBuffer,  
   _In_ unsigned int byteOffset,  
   _In_ unsigned int byteLength,  
   _Out_ JsValueRef *result  
);  
```  
  
#### Parameters  
 `arrayBuffer`  
 An existing `ArrayBuffer` object to use as the storage for the result `DataView` object.  
  
 `byteOffset`  
 The offset in bytes from the start of `arrayBuffer` for result `DataView` to reference.  
  
 `byteLength`  
 The number of bytes in the ArrayBuffer for result DataView to reference.  
  
 `result`  
 The new DataView object.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
 This API is supported only in Microsoft Edge mode.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
