---
ms.assetid: 15595d4b-1da5-4ec4-93a4-aff5dc7e400f
description: Learn useful information about the commands that interact with alert dialogs for the WebDriver API.
title: Webdriver commands - Dialogs
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Alert Dialog Commands
Microsoft Edge supports the following WebDriver commands for interacting with alert dialogs:

| HTTP Request | Commands |
| ------------ | -------- |
| /session/{sessionId}/accept_alert|[Accept Alert](#accept-alert)|
| /session/{sessionId}/alert_text|[Get Text](#get-text)|
| /session/{sessionId}/dismiss_alert| [Dismiss Alert](#dismiss-alert)|

## Accept Alert

| **Name** | Accept Alert |
| :------- | :---------- |
| **Description** | Accepts the currently displayed alert dialog. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#accept), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/accept_alert) |
| **HTTP Request** | `POST /session/{sessionId}/accept_alert` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": null
}
```

## Get Text

| **Name** | Get Text |
| :------- | :---------- |
| **Description** | Returns the text of the currently displayed alert dialog. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#gettext), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#GET_/session/:sessionId/alert_text) |
| **HTTP Request** | `GET /session/{sessionId}/alert_text` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": "{alertText}"
}
```
## Dismiss Alert

| **Name** | Dismiss Alert |
| :------- | :---------- |
| **Description** | Dismisses the currently displayed alert dialog. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#dismiss), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/dismiss_alert) |
| **HTTP Request** | `POST /session/{sessionId}/dismiss_alert` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": null
}
```
