---
description: Microsoft Edge DevTools Protocol Version 0.1 supports the following HTTP endpoints.
title: Microsoft Edge DevTools Protocol Version 0.1 HTTP Endpoints
author: erikadoyle
ms.author: edoyle
ms.date: 3/21/2018
ms.topic: reference
ms.prod: microsoft-edge
---

# HTTP Endpoints

**Microsoft Edge DevTools Protocol Version 0.1** supports the following HTTP endpoints. See [using the protocol](../index.md#using-the-protocol) for more on connecting to a browser content process and the [Domains](domains/index.md) documentation for the full web sockets-based devtools protocol API.


## /json/version
Provides information on the host machine's browser and which version of the DevTools Protocol it supports.

**Parameters**

*None*

**Return object**

```json
{ 
   "Browser": string, 
   "Protocol-Version": string, 
   "User-Agent": string, 
   "Chakra-Version": string, 
   "EdgeHtml-Version": string 
}
```

## /json/protocol

Provides the entire protocol API surface serialized as JSON.

**Parameters**

*None*

**Return object**

*Contents of [`protocol.json`](), the available API surface for current version of the protocol.* 

## /json/list

Provides a candidate list of page targets for debugging.

**Parameters**

None 

**Return object**

```json
[{ 
    "id": string, 
    "title": string 
    "type": "Page", 
    "url": string, 
    "webSocketDebuggerUrl": string 
}, … ]
```

## /json/close

Closes down the target process (e.g., in Microsoft Edge, closes the page tab.)

**Parameters**

Target ID 

**Return object**

```
String(“Target is closing”)
```