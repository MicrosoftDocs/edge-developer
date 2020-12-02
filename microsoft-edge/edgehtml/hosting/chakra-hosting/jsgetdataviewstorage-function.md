---
description: "Obtains the underlying memory storage used by a DataView."
title: "JsGetDataViewStorage Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 7c2180e0-51d5-4cc8-ad21-8bf29ff7c583
caps.latest.revision: 2
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsGetDataViewStorage Function

Obtains the underlying memory storage used by a `DataView`.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsGetDataViewStorage(  
   _In_ JsValueRef dataView,  
   _Outptr_result_bytebuffer_(*bufferLength) BYTE **buffer,  
   _Out_ unsigned int *bufferLength  
);  
```  
  
#### Parameters  
 `dataView`  
 The DataView instance.  
  
 `buffer`  
 The DataView's buffer. The lifetime of the buffer returned is the same as the lifetime of the `DataView`. The buffer pointer does not count as a reference to the `DataView` for the purpose of garbage collection.  
  
 `bufferLength`  
 The number of bytes in the buffer.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
 This API is supported only in Microsoft Edge mode.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
