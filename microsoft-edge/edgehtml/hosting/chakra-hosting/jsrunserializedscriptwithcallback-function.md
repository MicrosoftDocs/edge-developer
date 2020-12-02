---
description: "Runs a serialized script. Provides the ability to lazy load the script source only if/when it is needed."
title: "JsRunSerializedScriptWithCallback Function | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 0608d778-f65b-4dc5-a745-364aac57ef59
caps.latest.revision: 4
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsRunSerializedScriptWithCallback Function

Runs a serialized script. Provides the ability to lazy load the script source only if/when it is needed.  
  
## Syntax  
  
```cpp  
STDAPI_(JsErrorCode) JsRunSerializedScriptWithCallback(  
  _In_ JsSerializedScriptLoadSourceCallback scriptLoadCallback,  
  _In_ JsSerializedScriptUnloadCallback scriptUnloadCallback,  
  _In_ BYTE *buffer,  
  _In_ JsSourceContext sourceContext,  
  _In_z_ const wchar_t *sourceUrl,  
  _Out_opt_ JsValueRef *result  
);  
  
```  
  
#### Parameters  
 `scriptLoadCallback`  
 Callback called when the source code of the script needs to be loaded.  
  
 `scriptUnloadCallback`  
 Callback called when the serialized script and source code are no longer needed.  
  
 `buffer`  
 The serialized script.  
  
 `sourceContext`  
 A cookie identifying the script that can be used by debuggable script contexts.     This context will passed into scriptLoadCallback and scriptUnloadCallback.  
  
 `sourceUrl`  
 The location the script came from.  
  
 `result`  
 The result of running the script, if any. This parameter can be null.  
  
## Return Value  
 The code `JsNoError` if the operation succeeded, a failure code otherwise.  
  
## Remarks  
  
> [!NOTE]
>  This API is not yet available for Store apps.  
  
 Requires an active script context.  
  
 The runtime will hold on to the buffer until all instances of any functions created from     the buffer are garbage collected.  It will then call scriptUnloadCallback to inform the     caller that it is safe to release.  
  
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
