---
description: Indicates the webview is attempting to download an unsupported file. 
title: UnviewableContentIdentifiedEvent object
author: MSEdgeTeam
ms.author: msedgedevrel
ms.date: 06/10/2020
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# UnviewableContentIdentifiedEvent object  

[!INCLUDE [deprecation-note](../includes/deprecation-note.md)]  

Indicates the [webview](../webview.md) is attempting to navigate to a file of an unsupported content type.  

## Properties  

### mediaType  

Gets the content type of the unviewable content.  

This property is read-only  

```javascript
var mediaType = UnviewableContentIdentifiedEvent.mediaType;
```  

#### Property value  

Type: **DOMString**  

### referer  

The Uniform Resource Identifier (URI) of the page in the [webview](../webview.md) requesting navigation.  

This property is read-only.  

```javascript
var referer = NavigationEventWithReferrer.referer;
```  

#### Property value  

Type: **DOMString**  

### uri  

The Uniform Resource Identifier (URI) of the destination of the navigation.  

This property is read-only.  

```javascript
var uri = NavigationEventWithReferrer.uri;
```  

#### Property value  

Type: **DOMString**  
