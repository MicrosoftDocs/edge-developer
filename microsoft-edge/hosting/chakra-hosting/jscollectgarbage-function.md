---
description: "Performs a full garbage collection."
title: "JsCollectGarbage Function | Microsoft Docs"
ms.custom: ""
ms.date: "01/18/2017"
ms.prod: microsoft-edge
ms.reviewer: ""
ms.suite: ""
ms.tgt_pltfrm: ""
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsCollectGarbage"
helpviewer_keywords: 
  - "JsCollectGarbage function"
ms.assetid: 995c79a5-6e18-45be-81ff-2a5d3348edb8
caps.latest.revision: 12
author: "erikadoyle"
ms.author: "edoyle"
manager: "jken"
---
# JsCollectGarbage Function
Performs a full garbage collection.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsCollectGarbage(  
   _In_ JsRuntimeHandle runtime  
);  
```  
  
#### Parameters  
 `runtime`  
 The runtime in which the garbage collection will be performed.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)