---
description: "Parses a script and returns a function representing the script."
title: "JsParseScript Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
f1_keywords: 
  - "jsrt/JsParseScript"
helpviewer_keywords: 
  - "JsParseScript function"
ms.assetid: e9d0e363-7cbe-43eb-9dc0-1f47e586c9ab
caps.latest.revision: 12
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsParseScript Function

Parses a script and returns a function representing the script.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsParseScript(  
   _In_z_ const wchar_t *script,  
   _In_ JsSourceContext sourceContext,  
   _In_z_ const wchar_t *sourceUrl,  
   _Out_ JsValueRef *result  
);  
```  
  
#### Parameters  
 `script`  
 The script to parse.  
  
 `sourceContext`  
 A cookie identifying the script that can be used by debuggable script contexts.  
  
 `sourceUrl`  
 The location the script came from.  
  
 `result`  
 A function representing the script code.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
 Requires an active script context.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
