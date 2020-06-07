---
description: "A callback called before collecting an object."
title: "JsObjectBeforeCollectCallback Typedef | Microsoft Docs"
ms.custom: ""
ms.date: "01/18/2017"
ms.prod: microsoft-edge
ms.reviewer: ""
ms.suite: ""
ms.tgt_pltfrm: ""
ms.topic: "reference"
ms.assetid: f21a064a-579f-44cb-9d21-76b62e8c18f5
caps.latest.revision: 3
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
manager: ""
---
# JsObjectBeforeCollectCallback Typedef
A callback called before collecting an object.  
  
## Syntax  
  
```cpp  
typedef void (CALLBACK *JsObjectBeforeCollectCallback)(  
  _In_ JsRef ref,  
  _In_opt_ void *callbackState  
);  
```  
  
#### Parameters  
 `ref`  
 The object to be collected.  
  
 `callbackState`  
 The state passed to `JsSetObjectBeforeCollectCallback`.  
  
## Remarks  
 This API is supported only in EdgeHTML mode.  
  
## Requirements  
 jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
