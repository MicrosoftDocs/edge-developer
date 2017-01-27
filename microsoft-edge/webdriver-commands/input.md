---
description: Learn useful information about the commands used for simulating user input.
title: Webdriver commands - Input - Microsoft Edge Development
author: erikadoyle
---

# Input Commands
Microsoft Edge supports the following WebDriver commands for simulating user input:

| HTTP Request | Commands |
| ------------ | -------- |
| /session/{sessionId}/element/{id}/clear|  [Clear](#clear)|
| /session/{sessionId}/element/{id}/click|  [Click](#click)|
| /session/{sessionId}/element/{id}/value|  [Send Keys](#send-keys)|

## Clear

| **Name** | Clear |
| :------- | :---------- |
| **Description** | Clears a TEXTAREA or text INPUT element value. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#clear), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/clear) |
| **HTTP Request** | `POST /session/{sessionId}/element/{elementId}/clear` |

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

## Click

| **Name** | Click |
| :------- | :---------- |
| **Description** | Fires a mouse click on the specified element. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#click), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/click) |
| **HTTP Request** | `POST /session/{sessionId}/element/{elementId}/click` |

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

## Send Keys

| **Name** | Click |
| :------- | :---------- |
| **Description** | Sends a sequence of key strokes to the specified element. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#sendkeys), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/value) |
| **HTTP Request** | `POST /session/{sessionId}/element/{elementId}/value` |

**JSON Parameters**
```
{
    "value": [
        "{text}"
    ]
}
```

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": null
}
```
