---
description: Represents a notification string passed from webview content to the application
title: ScriptNotifyEvent object
author: erikadoyle
ms.author: edoyle
ms.date: 02/12/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# ScriptNotifyEvent object

An object that represents an event fired when content contained in the [webview](../webview.md) passes a string to the application by using JavaScript.

## Properties
    
### callingUri

Gets the Uniform Resource Identifier (URI) of the page containing the script that raised the **ScriptNotifyEvent**.

This property is read-only.

```js
var callingUri = ScriptNotifyEvent.callingUri;
```

#### Property value
Type: **DOMString**

### value

The method name as passed to the application.

This property is read-only.

```js
var value = ScriptNotifyEvent.value;
```

#### Property value
Type: **DOMString**