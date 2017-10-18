---
ms.assetid: 3fcdaf89-e8f1-414d-bbab-c521258df3de
description: Learn useful information about the commands used for navigation for the WebDriver API.
title: Webdriver commands - Navigation
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Navigation Commands
Microsoft Edge supports the following WebDriver commands for navigation:

| HTTP Request | Commands |
| ------------ | -------- |
| /session/{sessionId}/back | [Back](#back) |
| /session/{sessionId}/forward | [Forward](#forward) |
| /session/{sessionId}/refresh | [Refresh](#refresh) |
| /session/{sessionId}/title | [Get Title](#get-title) |
| /session/{sessionId}/url | [Get](#get), [Get Current URL](#get-current-url) |

## Back

| **Name** | Back |
| :------- | :---------- |
| **Description** | Navigates backwards in the browser history, if possible. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#back), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/back) |
| **HTTP Request** | `POST /session/{sessionId}/back` |

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

## Forward

| **Name** | Forward |
| :------- | :---------- |
| **Description** | Navigates forward in the browser history, if possible. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#back), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#POST_/session/:sessionId/back) |
| **HTTP Request** | `POST /session/{sessionId}/forward` |

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

## Refresh

| **Name** | Refresh |
| :------- | :---------- |
| **Description** | Reloads the current page. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#refresh), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/refresh) |
| **HTTP Request** | `POST /session/{sessionId}/refresh` |

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

## Get Title

| **Name** | Get Title |
| :------- | :---------- |
| **Description** | Gets the current page title. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#get-title), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/title) |
| **HTTP Request** | `GET /session/{sessionId}/title` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": "{title}"
}
```

## Get

| **Name** | Get |
| :------- | :---------- |
| **Description** | Navigates to the specified URL. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#get), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/url) |
| **HTTP Request** | `POST /session/{sessionId}/url` |

**JSON Parameters**
```
{
    "url": "https://www.bing.com/"

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

## Get Current URL

| **Name** | Get Current URL |
| :------- | :---------- |
| **Description** | Retrieves the URL of the current page. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#get-current-url), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/url) |
| **HTTP Request** | `GET /session/{sessionId}/url` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": "{url}"
}
```
