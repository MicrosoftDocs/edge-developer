---
ms.assetid: 2274c96f-0e32-4ebb-9294-865ddf00c45c
description: Learn useful information about the commands used for inspecting elements for the WebDriver API.
title: Webdriver commands - Element inspection
author: erikadoyle
ms.author: edoyle
ms.date: 02/08/2017
ms.topic: article
ms.prod: microsoft-edge
keywords: edge, web development, html, css, javascript, developer
---

# Element Inspection Commands
Microsoft Edge supports the following WebDriver commands for inspecting elements:

| HTTP Request | Commands |
| ------------ | -------- |
|  /session/{sessionId}/element| [Find Element](#find-element), [Find Elements](#find-elements)|
| /session/{sessionId}/element/{id}/attribute/{name}| [Get Element Attribute](#get-element-attribute)|
| /session/{sessionId}/element/{id}/css/{propertyName}| [Get CSS Value](#get-css-value)|
| /session/{sessionId}/element/{id}/displayed| [Is Element Displayed](#is-element-displayed)|
| /session/{sessionId}/element/{id}/enabled| [Is Element Enabled](#is-element-enabled)|
| /session/{sessionId}/element/{id}/name| [Get Element Tag Name](#get-element-tag-name)|
| /session/{sessionId}/element/{id}/selected| [Is Element Selected](#is-element-selected)|
| /session/{sessionId}/element/{id}/text| [Get Element Text](#get-element-text)|


## Find Element

| **Name** | Find Element |
| :------- | :---------- |
| **Description** | Searches for a given element on the page, starting from the document root. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#findelement), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element) |
| **HTTP Request** | `POST /session/{sessionId}/element` |

**JSON Parameters**
```
{
    "using": "id",
    "value": "clickAnchorElement"
}
```

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": {
        "ELEMENT": "{elementId}",
        "element-6066-11e4-a52e-4f735466cecf": "{elementId}"
    }
}
```

## Find Elements

| **Name** | Find Elements |
| :------- | :---------- |
| **Description** | Searches for all elements on the page with a given attribute value, starting from the document root. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#findelements), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/elements) |
| **HTTP Request** | `POST /session/{sessionId}/elements` |

**JSON Parameters**
```
{
    "using": "id",
    "value": "clickAnchorElement"
}
```

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": {
        "ELEMENT": "{elementId}",
        "element-6066-11e4-a52e-4f735466cecf": "{elementId}"
    }
}
```

## Get Element Attribute

| **Name** | Get Element Attribute |
| :------- | :---------- |
| **Description** | Gets the value of the specified element's specified attribute. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#getelementattribute), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/attribute/:name) |
| **HTTP Request** | `GET /session/{sessionId}/element/{elementId}/attribute/{name}` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": "{value}"
}
```

## Get CSS Value

| **Name** | Get CSS Value |
| :------- | :---------- |
| **Description** | Queries the computed value of the specified element's specified CSS property. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#getcssvalue), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/css/:propertyName) |
| **HTTP Request** | `GET /session/{sessionId}/element/{elementId}/{propertyName}` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": "{value}"
}
```

## Is Element Displayed

| **Name** | Is Element Displayed |
| :------- | :---------- |
| **Description** | Determines if an element is currently displayed. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#is-element-displayed), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/displayed) |
| **HTTP Request** | `GET /session/{sessionId}/element/{elementId}/displayed` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": {bool}

}
```

## Is Element Enabled

| **Name** | Is Element Enabled |
| :------- | :---------- |
| **Description** | Determines if an element is currently enabled. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#is-element-enabled), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/enabled) |
| **HTTP Request** | `GET /session/{sessionId}/element/{elementId}/name` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": {bool}
}
```

## Get Element Tag Name

| **Name** | Get Element Text |
| :------- | :---------- |
| **Description** | Retrieves the specified element's tag name. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#get-element-tag-name), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/name) |
| **HTTP Request** | `GET /session/{sessionId}/element/{elementId}/name` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": "{tagName}"
}
```

## Is Element Selected

| **Name** | Is Element Selected |
| :------- | :---------- |
| **Description** | Determines if an OPTION element, or an INPUT element of type *checkbox* or *radiobutton* is currently selected. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#is-element-selected), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/selected) |
| **HTTP Request** | `GET /session/{sessionId}/element/{elementId}/selected` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": {bool}

}
```


## Get Element Text

| **Name** | Get Element Text |
| :------- | :---------- |
| **Description** | Returns the visible text for the element. |
| **Spec** | [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html#getcssvalue), [JSON Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/css/:propertyName) |
| **HTTP Request** | `GET /session/{sessionId}/element/{elementId}/text` |

**JSON Parameters**
None.

**JSON Response Value**
```
{
    "sessionId": "{sessionId}",
    "status": 0,
    "value": "{value}"
}
```
