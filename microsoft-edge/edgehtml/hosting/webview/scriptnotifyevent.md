---
description: Represents a notification string passed from webview content to the application
title: ScriptNotifyEvent object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# ScriptNotifyEvent object  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

An object that represents an event fired when content contained in the [webview](../webview/index.md) passes a string to the application by using JavaScript.  

## Properties  

### callingUri  

Gets the Uniform Resource Identifier (URI) of the page containing the script that raised the **ScriptNotifyEvent**.  

This property is read-only.  

```javascript
var callingUri = ScriptNotifyEvent.callingUri;
```  

#### Property value  

Type: **DOMString**  

### value  

The method name as passed to the application.  

This property is read-only.  

```javascript
var value = ScriptNotifyEvent.value;
```  

#### Property value  

Type: **DOMString**  
