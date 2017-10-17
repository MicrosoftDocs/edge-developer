---
ms.assetid: 520d90ef-cad0-4014-8a1c-8bd9ad194e97
description: Learn useful information about server-related commands for the WebDriver API.
title: Webdriver commands - Server
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Server Commands
Microsoft Edge supports the following server-related WebDriver commands:

| HTTP Request | Commands |
| ------------ | -------- |
| /shutdown| [Shut Down](#shut-down)|
| /status| [Status](#status)|

## Shut Down

| **Name** | (Shut Down) |
| :------- | :---------- |
| **Description** | Shuts down the server. |
| **Spec** | N/A. |
| **HTTP Request** | `GET /shutdown` |

**JSON Parameters**
None.

**JSON Response Value**
None.

## Status

| **Name** | Status |
| :------- | :---------- |
| **Description** | Retrieves the current status of the server. |
| **Spec** | [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/status) |
| **HTTP Request** | `GET /status |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": {
        "build": {
            "version": "beta"
        },
        "os": {
            "arch": "x86",
            "name": "Windows 10",
            "version": "10.0"
        }
    }
}
````