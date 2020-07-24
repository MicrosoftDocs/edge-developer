---
description: Microsoft Edge DevTools Protocol Version 0.2 supports the following HTTP endpoints.
title: Microsoft Edge DevTools Protocol Version 0.2 HTTP Endpoints (EdgeHTML)
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 07/16/2020
ms.topic: reference
ms.prod: microsoft-edge
---

# Microsoft Edge DevTools Protocol Version 0.2 HTTP Endpoints (EdgeHTML)  

> [!NOTE]
> Version 0.2 of the Microsoft Edge DevTools Protocol works only on the [Windows 10 October 2018 Update]() and later [Windows Insider Preview](https://insider.windows.com/en-us/getting-started/) builds.

**DevTools Protocol 0.2** supports the following HTTP endpoints. See [using the protocol](../index.md#using-the-protocol) for more on connecting to a browser content process and the [Domains](domains/index.md) documentation for the full web sockets-based devtools protocol API.

## /json/version
Provides information on the host machine's browser and which version of the DevTools Protocol it supports.

**Parameters**

*None*

**Return object**

```json
{
    "Browser":"Edge/18.17763",
    "Protocol-Version":"0.2",
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763"
}
```

## /json/protocol

Provides the entire protocol API surface serialized as JSON.

**Parameters**

*None*

**Return object**

JSON object which represents the available API surface for current version of the protocol.

## /json/list

Provides a candidate list of page targets for debugging.

**Parameters**

*None*

**Return object**

```json
[{
    "id":"000001F5-87EE-4D55-0091-C4C08A1F30C8",
    "title":"Microsoft Edge Developer website - Microsoft Edge Development",
    "type":"Page",
    "url":"https://developer.microsoft.com/microsoft-edge/",
    "webSocketDebuggerUrl":"ws://localhost:9222/target/000001F5-87EE-4D55-0091-C4C08A1F30C8"
}, … ]
```

## /json/close

Closes down the target process (e.g., in Microsoft Edge, closes the page tab.)

**Parameters**

Target ID 

**Return object**

```
String("Target is closing")
```
