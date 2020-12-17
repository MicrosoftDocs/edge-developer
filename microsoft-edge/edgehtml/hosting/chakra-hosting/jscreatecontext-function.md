---
description: "Creates a script context for running scripts."
title: "JsCreateContext Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsCreateContext"
helpviewer_keywords: 
  - "JsCreateContext function"
ms.assetid: aceca043-2c73-4029-a06c-8ad6695109cf
caps.latest.revision: 15
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsCreateContext Function

Creates a script context for running scripts.  
  
## Syntax  
  
```cpp  
// Microsoft Edge mode signature  
STDAPI_(JsErrorCode) JsCreateContext(  
   _In_ JsRuntimeHandle runtime,  
   _Out_ JsContextRef *newContext);  
  
// Legacy mode signature  
STDAPI_(JsErrorCode) JsCreateContext(  
   _In_ JsRuntimeHandle runtime,  
   _In_ IDebugApplication *debugApplication,  
   _Out_ JsContextRef *newContext  
);  
```  
  
#### Parameters  
 `runtime`  
 The runtime the script context is being created in.  
  
 `debugApplication`  
 The debug application to use for debugging. This parameter can be null, in which case debugging is not enabled for the context.  
  
 `newContext`  
 The created script context.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Each script context has its own global object that is isolated from all other script contexts.  
  
 The `debugApplication` parameter is not supported in Microsoft Edge mode. For more information on using this API in Microsoft Edge mode, see [Targeting Microsoft Edge vs. Legacy Engines](../chakra-hosting/targeting-edge-vs-legacy-engines-in-jsrt-apis.md).  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
