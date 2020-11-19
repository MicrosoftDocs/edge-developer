---
description: "A thread service callback."
title: "JsThreadServiceCallback Typedef | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: dbe67be5-418a-4f66-8b68-b38078a6d140
caps.latest.revision: 6
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsThreadServiceCallback Typedef

A thread service callback.  
  
## Syntax  
  
```cpp  
typedef bool (CALLBACK *JsThreadServiceCallback)(  
   _In_ JsBackgroundWorkItemCallback callback,  
   _In_opt_ void *callbackData  
);  
```  
  
#### Parameters  
 callback  
 The callback for the background work item.  
  
 callbackData  
 The data argument to be passed to the callback.  
  
## Remarks  
 The host can specify a background thread service when calling JsCreateRuntime. If specified, then background work items will be passed to the host using this callback. The host is expected to either begin executing the background work item immediately and return true or return false and the runtime will handle the work item in-thread.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
