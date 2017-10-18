---
ms.assetid: 0b9773b1-cf85-423c-96ff-2242d80a4c05
description: Learn useful information about the commands used for script execution for the WebDriver API.
title: Webdriver commands - Script execution
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Script Execution Commands
Microsoft Edge supports the following WebDriver commands for script execution:

| HTTP Request | Commands |
| ------------ | -------- |
| /session/{sessionId}/cookie| [Add Cookie](#add-cookie), [Delete Cookies](#delete-cookies), [Get Cookies](#get-cookies)|
| /session/{sessionId}/cookie/{name}| [Delete Cookie](#delete-cookie), [Get Cookie](#get-cookie)|
| /session/{sessionId}/execute}| [Execute Script](#execute-script)|

## Add Cookie
| **Name** | Add Cookie |
| :------- | :------- |
| **Description** | Adds a cookie. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#add-cookie), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/sessions) |
| **HTTP Request** | `POST /session/{sessionId}/cookie` |

**JSON Parameters**
```
{
    "cookie": {
        "name": "{name}",
        "value": "{value}"
    }
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

## Delete Cookies
| **Name** | Delete Cookies |
| :------- | :------- |
| **Description** | Delete all cookies visible to the current page. |
| **Spec** | [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#DELETE_/session/:sessionId/cookie) |
| **HTTP Request** | `DELETE /session/{sessionId}/cookie` |

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

## Get Cookies

| **Name** | Get Cookies |
| :------- | :------- |
| **Description** | Retrieves all cookies visible to the current page. |
| **Spec** | [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId) |
| **HTTP Request** | `GET /session/{sessionId}/cookie` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": [
        {
            "name": "{name}",
            "value": "{value}",
            "path": "/",
            "domain": "{url}",
            "expiry": null,
            "secure": false,
            "httpOnly": false
        }
    ]
}
```

## Delete Cookie
| **Name** | Delete Cookie |
| :------- | :------- |
| **Description** | Deletes the cookie with the given name. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#delete-cookie), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#DELETE_/session/:sessionId/cookie/:name
) |
| **HTTP Request** | `DELETE /session/{sessionId}/cookie/{name}` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": {
        "name": "{name}",
        "value": "{value}",
        "path": "/",
        "domain": "{url}",
        "expiry": null,
        "secure": false,
        "httpOnly": false
    }
}
```

## Get Cookie
| **Name** | Get Cookie |
| :------- | :------- |
| **Description** | Retrieves the cookie with the given name. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#get-cookie) |
| **HTTP Request** | `GET /session/{sessionId}/cookie/{name}` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": {
        "name": "{name}",
        "value": "{value}",
        "path": "/",
        "domain": "{url}",
        "expiry": null,
        "secure": false,
        "httpOnly": false
    }
}
```

## Execute Script

| **Name** | Execute Script |
| :------- | :---------- |
| **Description** | Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#execute-script), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/execute) |
| **HTTP Request** | `POST /session/{sessionId}/execute` |

**JSON Parameters**
```
{
    "script": "return arguments[0].second;",
    "args": [
        {
            "first": "1st",
            "second": "2nd",
            "third": "3rd"
        }
    ]
}
```

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": "2nd"
}
```
