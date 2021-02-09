---
description: "Sets the current script context on the thread."
title: "JsSetCurrentContext Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsSetCurrentContext"
helpviewer_keywords: 
  - "JsSetCurrentContext function"
ms.assetid: 603cc94c-6585-411b-89f9-c6f144e2aa30
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsSetCurrentContext Function

Sets the current script context on the thread.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsSetCurrentContext(  
   _In_ JsContextRef context  
);  
```  
  
#### Parameters  
 `context`  
 The script context to make current.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  

## Example

```cpp
JsRuntimeHandle runtime;
JsContextRef context;

// Create a runtime.
JsCreateRuntime(JsRuntimeAttributeNone, nullptr, &runtime);

// Create an execution context.
JsCreateContext(runtime, &context);

// Now set the current execution context.
JsSetCurrentContext(context);
```

## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
