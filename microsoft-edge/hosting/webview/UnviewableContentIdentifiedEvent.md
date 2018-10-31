---
description: Indicates the webview is attempting to download an unsupported file. 
title: UnviewableContentIdentifiedEvent object
author: erikadoyle
ms.author: edoyle
ms.date: 05/25/2018
ms.topic: reference
ms.prod: microsoft-edge
keywords: webview, windows 10 apps, uwp, edge
---

# UnviewableContentIdentifiedEvent object

Indicates the [webview](../webview.md) is attempting to navigate to a file of an unsupported content type. 

## Properties

### mediaType

Gets the content type of the unviewable content.

This property is read-only

```js
var mediaType = UnviewableContentIdentifiedEvent.mediaType;
```

#### Property value
Type: **DOMString**

### referer

The Uniform Resource Identifier (URI) of the page in the [webview](../webview.md) requesting navigation.

This property is read-only.


```js
var referer = NavigationEventWithReferrer.referer;
```

#### Property value
Type: **DOMString**

### uri

The Uniform Resource Identifier (URI) of the destination of the navigation.

This property is read-only.

```js
var uri = NavigationEventWithReferrer.uri;
```

#### Property value
Type: **DOMString**
