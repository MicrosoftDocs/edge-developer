---
description: "A reference to an object owned by the Chakra garbage collector."
title: "JsRef Typedef | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 6aafc39f-6b9c-457f-8bf0-48831bffe9b8
caps.latest.revision: 6
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsRef Typedef

A reference to an object owned by the Chakra garbage collector.  
  
## Syntax  
  
```cpp  
typedef void *JsRef;  
```  
  
## Remarks  
 A Chakra runtime will automatically track JsRef references as long as they are on stored in local variables or in parameters (i.e. on the stack). Storing a JsRef somewhere other than on the stack requires calling JsAddRef and JsRelease to manage the lifetime of the object, otherwise the garbage collector may free the object while it is still in use.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
