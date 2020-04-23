---
description: Microsoft Edge DevTools Protocol Version 0.1 supports the following HTTP endpoints.
title: DevTools Protocol Version 0.1 HTTP Endpoints
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 03/05/2020
ms.topic: reference
ms.prod: microsoft-edge
ms.custom: seodec18
---

# DevTools Protocol HTTP Endpoints

> [!NOTE]
> The Microsoft Edge DevTools Protocol works only on [Windows 10 April 2018 Update](https://blogs.windows.com/windowsexperience/2018/04/30/how-to-get-the-windows-10-april-2018-update/#5VXkQMU41CJzZPER.97) and later [Windows Insider Preview](https://insider.windows.com/en-us/getting-started/) builds.

**DevTools Protocol 0.1** supports the following HTTP endpoints. See [using the protocol](../index.md#using-the-protocol) for more on connecting to a browser content process and the [Domains](domains/index.md) documentation for the full web sockets-based devtools protocol API.

## /json/version
Provides information on the host machine's browser and which version of the DevTools Protocol it supports.

**Parameters**

*None*

**Return object**

```json
{
    "Browser":"Edge/17.17627",
    "Protocol-Version":"0.1",
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17627"
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
