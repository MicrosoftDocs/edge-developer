---
description: "Allocation callback event type."
title: "JsMemoryEventType Enumeration | Microsoft Docs"
ms.custom: ""
ms.date: "01/18/2017"
ms.prod: microsoft-edge
ms.reviewer: ""
ms.suite: ""
ms.tgt_pltfrm: ""
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsMemoryEventType"
helpviewer_keywords: 
  - "JsMemoryEventType enumeration"
ms.assetid: b4b176b6-b536-472e-8999-95b681a1df55
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
manager: ""
---
# JsMemoryEventType Enumeration
Allocation callback event type.  
  
## Syntax  
  
```cpp  
enum JsMemoryEventType;  
```  
  
## Members  
  
### Values  
  
|Name|Description|  
|----------|-----------------|  
|`JsMemoryAllocate`|Indicates a request for memory allocation.|  
|`JsMemoryFailure`|Indicates a failed allocation event.|  
|`JsMemoryFree`|Indicates a memory freeing event.|  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)