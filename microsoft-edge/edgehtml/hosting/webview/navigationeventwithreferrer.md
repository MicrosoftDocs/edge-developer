---
description: Contains referrer information about the navigation
title: NavigationEventWithReferrer object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
ms.date: 12/02/2020
ROBOTS: NOINDEX,NOFOLLOW
---
# NavigationEventWithReferrer object  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

An object that represents an event fired when navigation is initiated and the navigation contains a referer.  

## Properties  

### referer

The Uniform Resource Identifier (URI) of the page in the [webview](../webview/index.md) requesting navigation.  

This property is read-only.  

#### Property value  

Type: **DOMString**  

```javascript
var referer = NavigationEventWithReferrer.referer;
```  

### uri  

The Uniform Resource Identifier (URI) of the destination of the navigation.  

This property is read-only.  

```javascript
var uri = NavigationEventWithReferrer.uri;
```  

#### Property value  

Type: **DOMString**  
