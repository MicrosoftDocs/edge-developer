---
description: "Called by the runtime when it is finished with all resources related to the script execution. The caller should free the source if loaded, the byte code, and the context at this time."
title: "JsSerializedScriptUnloadCallback typedef | Microsoft Docs"
ms.prod: microsoft-edge
ms.topic: "reference"
ms.assetid: 8d18c392-cca0-411e-9f2b-0d788b16161a
caps.latest.revision: 3
author: "MSEdgeTeam"
ms.author: "msedgedevrel"
ms.date: 11/19/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# JsSerializedScriptUnloadCallback typedef

Called by the runtime when it is finished with all resources related to the script execution. The caller should free the source if loaded, the byte code, and the context at this time.  
  
## Syntax  
  
```cpp  
 typedef void (CALLBACK * JsSerializedScriptUnloadCallback)(  
  _In_ JsSourceContext sourceContext  
);  
```  
  
#### Parameters  
 `sourceContext`  
 The context passed to `JsParseSerializedScriptWithCallback` or `JsRunSerializedScriptWithCallback`.  
  
## Remarks  
  
> [!WARNING]
## Requirements  
 **Header:** jsrt.h  
  
## See Also  
 [Reference (JavaScript Runtime)](../chakra-hosting/reference-javascript-runtime.md)
