---
ms.assetid: c39301c7-9b5c-432d-865d-71381362f9c3
description: Learn useful information about the commands used for taking screenshots for the WebDriver API.
title: Webdriver commands - Screenshots
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Screenshot Commands
Microsoft Edge supports the following WebDriver commands for taking screenshots:

| HTTP Request | Commands |
| ------------ | -------- |
| /session/{sessionId}/element/{id}/screenshot| [Take Element Screenshot](#take-element-screenshot)|
| /session/{sessionId}/screenshot| [Take Screenshot](#take-screenshot)|

## Take Element Screenshot
| **Name** | Take Element Screenshot |
| :------- | :------- |
| **Description** | Takes a screenshot of the currently selected element. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#take-element-screenshot) |
| **HTTP Request** | `GET /session/{sessionId}/element/{elementId}/screenshot` |

**JSON Parameters**
None

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": "{image}"
}
```

## Take Screenshot

| **Name** | Take Screenshot |
| :------- | :---------- |
| **Description** | Takes a screenshot of the current viewport. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#take-screenshot), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/screenshot) |
| **HTTP Request** | `GET /session/{sessionId}/screenshot` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": "{base64EncodedString}"
}
```
