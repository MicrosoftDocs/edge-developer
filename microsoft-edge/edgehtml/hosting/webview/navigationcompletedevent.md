---
description: Contains information about the completed webview navigation
title: NavigationCompletedEvent object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# NavigationCompletedEvent object  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

An object that represents an event fired when the [webview](../webview/index.md) has finished loading the current content or if navigation has failed.  

## Properties  

### uri  

The Uniform Resource Identifier (URI) of the navigation.  

This property is read-only.  

```javascript
var uri = NavigationCompletedEvent.uri;
```  

#### Property value  

Type: **DOMString**  

### isSuccess  

Gets a value that indicates whether the navigation completed successfully.  

This property is read-only.  

```javascript
var isSuccess = NavigationCompletedEvent.isSuccess;
```  

#### Property value  

Type: **Boolean**  

### webErrorStatus  

If the navigation was unsuccessful, gets a value that indicates why.  

This property is read-only.  

```javascript
var webErrorStatus = NavigationCompletedEvent.webErrorStatus;
```  

#### Property value  

Type: **unsigned long**  
